/**
 * Скрипт вывода формы на сайт.
 * Скрипт выполняет всю логику на стороне сайта клиента:
 * - собирает данные страницы: UTM-метки, TrackerID и ClientID
 * - передает в параметры iframe данные страницы
 * - вычисляет нужную высоту iframe
 * - внедряет iframe на сайт с собранными параметрами и нужной высотой
 * ID формы передается во внешней переменной amo_forms_params
 * Created on 09.09.2014
 */

var amo_forms_params = amo_forms_params || {},
    AMOFORMS = AMOFORMS || {};

/*!
 * domready (c) Dustin Diaz 2012 - License MIT
 */
!function (name, definition) {
    this[name] = definition()
}('domready', function (ready) {

    var fns = [],
        fn, f = false,
        doc = document,
        testEl = doc.documentElement,
        hack = testEl.doScroll,
        domContentLoaded = 'DOMContentLoaded',
        addEventListener = 'addEventListener',
        onreadystatechange = 'onreadystatechange',
        readyState = 'readyState',
        loadedRgx = hack ? /^loaded|^c/ : /^loaded|c/,
        loaded = loadedRgx.test(doc[readyState]);
    function flush(f) {
        loaded = 1;
        while (f = fns.shift()) f();
    }

    doc[addEventListener] && doc[addEventListener](domContentLoaded, fn = function () {
        doc.removeEventListener(domContentLoaded, fn, f);
        flush();
    }, f);

    hack && doc.attachEvent(onreadystatechange, fn = function () {
        if (/^c/.test(doc[readyState])) {
            doc.detachEvent(onreadystatechange, fn);
            flush();
        }
    });

    return (ready = hack ?
        function (fn) {
            self !== top ?
                loaded ? fn() : fns.push(fn) :
                function () {
                    try {
                        testEl.doScroll('left');
                    } catch (e) {
                        return setTimeout(function() { ready(fn) }, 50);
                    }
                    fn();
                }();
        } :
        function (fn) {
            loaded ? fn() : fns.push(fn);
        })
});

(function (d, w, init_params) {

    var getBrowserPrefix = function () {
        var styles = window.getComputedStyle(document.documentElement, ''),
            pre = (Array.prototype.slice
                    .call(styles)
                    .join('')
                    .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
            )[1],
            dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
        return {
            dom: dom,
            lowercase: pre,
            css: '-' + pre + '-',
            js: pre[0].toUpperCase() + pre.substr(1)
        };
    };

    var loadFile = function (filename, cb) {
        var script = document.createElement('script'),
            head = document.getElementsByTagName('head')[0];

        // IE
        script.onreadystatechange = function () {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
                script.onreadystatechange = null;
                cb();
            }
        };

        // other
        script.onload = function () {
            cb();
        };

        script.src = filename;
        script.charset = "utf-8";
        head.appendChild(script);
    };

    var form_language = amo_forms_params.locale ? amo_forms_params.locale : 'ru',
      amo_script;
    AMOFORMS.iframe_params = {};
    var init_frame = function () {
        /** Polyfills **/
        if (typeof window.postMessage === 'undefined') window.postMessage = function (message, targetOrigin, transfer) {};

        var escapeHtml = function(text) {
            var map = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
            return text.replace(/[&<>"']/g, function(m) { return map[m]; });
        };

        var form_id   = parseInt(init_params.id),
            form_hash = escapeHtml(init_params.hash);

        var success_message = '',
            form_is_modal = false;

        if (init_params.hasOwnProperty('us') && init_params.us.hasOwnProperty('success_message')) {
            if (init_params.us.success_message) {
              success_message = init_params.us.success_message;
            }

            success_message = escapeHtml(success_message);
        }

        if (init_params.hasOwnProperty('us') && init_params.us.hasOwnProperty('modal_form')) {
            form_is_modal = init_params.us.modal_form === 'y' || init_params.us.modal_form === 'Y';
        }

        if (typeof form_id === 'undefined' || isNaN(form_id) || form_id <= 0) return;
        if (typeof form_hash === 'undefined' || form_hash === '') return;

        if( init_params.hasOwnProperty('type') && init_params.type === 'gso' ){
          form_is_modal = false;
          AMOFORMS.is_gso = true;
          AMOFORMS.iframe_src = AMOFORMS.form_server + '/forms/html/system/form_' + form_id + '_' + form_hash + '.html?date=' + parseInt((new Date()) / 1000);
        }else{
          AMOFORMS.iframe_src = AMOFORMS.form_server + '/forms/html/form_' + form_id + '_' + form_hash + '.html?date=' + parseInt((new Date()) / 1000);
        }

        if (typeof window.postMessage === 'function') {
            window.addEventListener('message', getPostMessage, false);
        }
        /** СОЗДАНИЕ IFRAME **/
        var iframe = document.createElement('iframe');
        iframe.setAttribute('id', 'amoforms_iframe_' + form_id);
        iframe.setAttribute('class', 'amoforms_iframe');
        iframe.setAttribute('name', 'amoforms_iframe_' + form_id);
        iframe.setAttribute('allowtransparency', '');
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('style', 'width: 100%; position: absolute; height: 100%; overflow: visible; margin: 0 0 10px 0; padding: 0; border: none; z-index:10000; right: 0; bottom: 0;');

        AMOFORMS.iframe_params.user_origin = {
            datetime: (new Date).toDateString() + ' ' + (new Date).toTimeString(),
            referer: document.referrer
        };

        AMOFORMS.iframe_params.is_modal = form_is_modal;
        AMOFORMS.iframe_params.success_message = encodeURI(success_message);
        AMOFORMS.iframe_params.is_dark_bg = isDarkColor(getBackgroundColor(amo_script));

        var utm_str = location.search.match(/utm_source=\w+/)? location.search: document.cookie,
            utm = {};

        utm.source   = (utm_str.match(/utm_source=(.+?)(&|[#]|$|;)/)   || utm_str.match(/utmcsr=(.+?)[|;]/));
        utm.medium   = (utm_str.match(/utm_medium=(.+?)(&|[#]|$|;)/)   || utm_str.match(/utmcmd=(.+?)[|;]/));
        utm.content  = (utm_str.match(/utm_content=(.+?)(&|[#]|$|;)/)  || utm_str.match(/utmcct=(.+?)[|;]/));
        utm.campaign = (utm_str.match(/utm_campaign=(.+?)(&|[#]|$|;)/) || utm_str.match(/utmccn=(.+?)[|;]/));
        utm.term     = (utm_str.match(/utm_term=(.+?)(&|[#]|$|;)/)     || utm_str.match(/utmctr=(.+?)[|;]/));

        utm.source = (utm.hasOwnProperty('source') && utm.source !== null && utm.source.length > 1)? utm.source[1]: '';
        utm.medium = (utm.hasOwnProperty('medium') && utm.medium !== null && utm.medium.length > 1)? utm.medium[1]: '';
        utm.content = (utm.hasOwnProperty('content') && utm.content !== null && utm.content.length > 1)? utm.content[1]: '';
        utm.campaign = (utm.hasOwnProperty('campaign') && utm.campaign !== null && utm.campaign.length > 1)? utm.campaign[1]: '';
        utm.term = (utm.hasOwnProperty('term') && utm.term !== null && utm.term.length > 1)? utm.term[1]: '';

        AMOFORMS.iframe_params.utm = utm;
        AMOFORMS.iframe_params.ga = {};
        AMOFORMS.iframe_params.location = location.origin + location.pathname;
        AMOFORMS.iframe_params.dp = {};

        if (amo_forms_params.dp && amo_forms_params.dp.hasOwnProperty('hash')) {
            AMOFORMS.iframe_params.dp = amo_forms_params.dp;
        }

        switch (true) {
            case typeof ga === 'function' && ga.length === 1:
                ga(function (tracker) {
                    try {
                        var ga_data = AMOFORMS.iframe_params.ga || {};

                        tracker.get = tracker.get || function (param) {};

                        ga_data.trackingId = tracker.get('trackingId');
                        ga_data.clientId   = tracker.get('clientId');
                    } catch (e) {
                        //
                    }

                    AMOFORMS.iframe_params.ga = ga_data;
                    iframe.src = AMOFORMS.iframe_src + '#' + JSON.stringify(AMOFORMS.iframe_params);
                });
                break;
            case typeof _gaq !== 'undefined':
                _gaq.push(function () {
                    var ga_data = AMOFORMS.iframe_params.ga || {};

                    ga_data.trackingId = _gat._getTrackerByName()._getAccount();

                    var utmz = document.cookie.match(/__utmz=(.+?)(&|[#]|$|;)/);
                    utmz = (utmz && utmz[1])? utmz[1]: null;

                    if (utmz) {
                        ga_data.clientId = utmz.split('.')[1];
                    }

                    AMOFORMS.iframe_params.ga = ga_data;
                    iframe.src = AMOFORMS.iframe_src + '#' + JSON.stringify(AMOFORMS.iframe_params);
                });
                break;
            default:
                iframe.src = AMOFORMS.iframe_src + '#' + JSON.stringify(AMOFORMS.iframe_params);
        }

        if (typeof window.postMessage !== 'function') {
            iframe.onload = function () {
                var _this = this,
                    iframe_height = null;
                setTimeout(function () {
                    if (location.hash.match(/#amo_h(\d+)/)) { // метод для IE. Если высота передана через #amo_h1230
                        iframe_height = RegExp.$1;
                        location.hash = location.hash.replace('#amo_h' + iframe_height, '');
                    }
                    if (!iframe_height) {
                        for (var i = 0; i < 10000; i += 10) { // Метод для остальных браузеров
                            if (top.frames['amo_h' + i]) {    // Ищем методом подбора фрейм, имя которого начинается с amo_h1230
                                iframe_height += 15;       // +15 запас на всякий случай
                                break;
                            }
                        }
                    }
                    if (iframe_height) {
                        _this.style.height = iframe_height + 'px';
                    }
                }, 10);
            };
        }

        /** Добавляем iframe на страницу (а если выбрана модальная форма, то добавляем в оверлей) **/
        if (form_is_modal) {
            var overlay = document.createElement('div');

            overlay.id = 'amoforms_overlay';
            overlay.setAttribute('style', 'position: absolute; top: 0; left: 0; bottom: 0; right: 0; background: rgba(0,0,0,0.7); overflow: auto;');
            overlay.style.opacity = '0'; // используются для того, что бы пользователеь не видел форму, но возможность высчитать её высоту оставалась
            document.body.appendChild(overlay);
            overlay.appendChild(iframe);
        }/* else if( AMOFORMS.is_gso ){

        }*/ else {
            amo_script.parentNode.insertBefore(iframe, amo_script);
        }

        // Событие 'message'
        function getPostMessage (e) {
            if (e.origin !== AMOFORMS.form_server) return;

            try {
                var params = JSON.parse(e.data);

                switch (params.func) {
                    case 'getFormInfo':
                        getFormInfo(params);
                        break;
                    case 'pushGaForm':
                        pushGaForm(params);
                        break;
                }

                resizeAmoframe(params);
            } catch (e) {
                // иногда прилетают левые события
            }

        }

        function isDarkColor(rgb) {
            var brightness;

            if (rgb === 'transparent') {
                return false;
            }

            rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,?[\s+]?([\d\.]*)[\s+]?/i);

            brightness = (rgb[1] * 299) + (rgb[2] * 587) + (rgb[3] * 114);
            brightness = brightness / 255000;

            return brightness < 0.5;
        }

        function getBackgroundColor(elem) {
            var transparent = 'rgba(0, 0, 0, 0)';
            if (!elem) return transparent;

            var bg = getComputedStyle(elem).backgroundColor;
            if (bg === transparent) {
                return getBackgroundColor(elem.parentElement);
            } else {
                return bg;
            }
        }

        /** Открываем форму в модальном окне **/

        //Расчет ширины скролла
        function getScrollBarSize () {  
           var inner = document.createElement('p');  
           inner.style.width = "100%";  
           inner.style.height = "100%";  

           var outer = document.createElement('div');  
           outer.style.position = "absolute";  
           outer.style.top = "0px";  
           outer.style.left = "0px";  
           outer.style.visibility = "hidden";  
           outer.style.width = "100px";  
           outer.style.height = "100px";  
           outer.style.overflow = "hidden";  
           outer.appendChild(inner);  

           document.body.appendChild(outer);  

           var w1 = inner.offsetWidth;  
           outer.style.overflow = 'scroll';  
           var w2 = inner.offsetWidth;  
           if (w1 === w2) w2 = outer.clientWidth;

           document.body.removeChild (outer);  

           return (w1 - w2);  
        }
        var scrollbarWidth = getScrollBarSize();
        
        //Определим IE 10 и старше
        function getInternetExplorerVersion() {
          var rv = -1;
          if (navigator.appName === 'Microsoft Internet Explorer')
          {
            var ua = navigator.userAgent;
            var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) !== null)
              rv = parseFloat( RegExp.$1 );
          }
          else if (navigator.appName === 'Netscape')
          {
            var ua = navigator.userAgent;
            var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) !== null)
              rv = parseFloat( RegExp.$1 );
          }
          return rv;
        }
        
        var IEver = getInternetExplorerVersion();
        if(IEver === 10 || IEver === 11) {
            scrollbarWidth = 0;
        }

      function openModalForm() {
        // создаем оверлей
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.height = '100%';
        document.body.style.paddingRight = scrollbarWidth;

        overlay.style.display = 'block';
        overlay.style.zIndex = '99999';
        overlay.style.webkitOverflowScrolling = 'touch';

        // по клику на оверлей, закрываем его вместе с айфреймом
        overlay.onclick = function () {
          overlay.style.display = 'none';
          document.body.style.position = '';
          document.body.style.width = '';
          document.body.style.height = '';
          document.body.style.paddingRight = '';

          //Отсылаем postMessage для закрытия белого фейда
          if (typeof window.postMessage === 'function') {
            var ifr = document.querySelector('.amoforms_iframe');
            ifr.contentWindow.postMessage('close:complete:fade', ifr.src);
          }
        }
      }

        function pushGaForm () {
            var page = '/amocrm/form';

            switch (true) {
                case typeof ga === 'function':
                    ga('send', 'pageview', page);
                    break;
                case typeof _gaq !== 'undefined':
                    _gaq.push(['_trackPageview', page]);
                    break;
            }
            return false;
        }

        function getBtnInlineStyles(params) {
            var styles,
                btn_text_transform = (params.btn_text) ? 'none' : 'uppercase';

            if (params.version && params.version === 3) {
                styles = "box-shadow: 0px 1px 0px rgba(0,0,0,0.2); \
                                display: inline-block; \
                                font-family: Tahoma, Arial, sans-serif; \
                                padding: 0 33px; \
                                border-radius: 3px; \
                                height: 52px; \
                                border: none; \
                                outline: none; \
                                cursor: pointer; \
                                text-transform: " + btn_text_transform + "; \
                                font-weight: 400; \
                                margin: 0; \
                                font-size: 15px; \
                                margin-bottom: 15px"
            } else {
                styles = "box-shadow: 0px 1px 0px rgba(0,0,0,0.2); \
                                display: inline-block; \
                                font-family: Tahoma, Arial, sans-serif; \
                                padding: 5px 10px; \
                                border-radius: 3px; \
                                height: 38px; \
                                border: 1px solid rgba(0, 0, 0, 0.2); \
                                outline: none; \
                                cursor: pointer; \
                                text-transform: " + btn_text_transform + "; \
                                font-weight: bold; \
                                margin: 0; \
                                font-size: 13px; \
                                margin-bottom: 15px"
            }

            return styles;
        }

        /** Получаем стиль кнопок из формы **/
        function getFormInfo (params) {
            var btn_background = params.btn_background,
                btn_text_color = params.btn_text_color,
                inline_styles = getBtnInlineStyles(params);


            // Кнопка используется для открытия модального окна с формой
            if (form_is_modal) {
                var action_btn = document.createElement('button');

                action_btn.setAttribute('style', inline_styles);
                action_btn.id = 'amoforms_action_btn';
                action_btn.style.color = btn_text_color;
                action_btn.style.backgroundColor = btn_background;
                action_btn.innerHTML = escapeHtml(params.btn_text) || lang('submit');

                if (!document.getElementById('amoforms_action_btn')) {
                    amo_script.parentNode.insertBefore(action_btn, amo_script);
                    window.removeEventListener('message', getFormInfo, false);
                }
            }
            if (form_is_modal) {
                action_btn.onclick = function () {
                    openModalForm(params);
                }
            }
        }

        /** Меняем размер iframe **/
            // Функция, которая будет менять размер iframe после получения message от iframe через postMessage.
            // сообщение будет в формате <amo_frame_id> <height>, например: amo_frame_3780 350
        function resizeAmoframe(params) {
            var iframe_id = params.iframe_id,
                iframe_height = params.height,
                iframe = document.getElementById(iframe_id),
                css_transform_translate_x = getBrowserPrefix().css+'transform: translateX(-50%);';

            //При отправке ГА, ресайз нам делать нет небоходимости
            if(params.func === 'pushGaForm'){
                return false;
            }

            iframe_height = Number(iframe_height);
            if( !AMOFORMS.is_gso ){
              iframe_height += 75;
            }

            // центрируем айфрейм (для модального окна)
            if (form_is_modal) {
                if (iframe_height < window.innerHeight) {
                    iframe.setAttribute('style', 'width: 540px; position: absolute; top: 50%; left:50%; '+css_transform_translate_x+'; overflow: visible; margin-top: -'+(iframe_height/2+25)+'px; padding: 0; border: none;');
                } else {
                    iframe.setAttribute('style', 'width: 540px; position: absolute; left:50%;'+css_transform_translate_x+' overflow: visible; padding: 0; border: none;');
                }
            }

            iframe.style.height = iframe_height + 'px';
            iframe.style.opacity = 1;
            iframe.style.position = 'inherit';


            if(location.origin !== 'file://') {
                window.postMessage('amoforms:resize:complete', location.origin);
            }
            if (form_is_modal) {
                if(document.readyState === "complete") {
                    overlay.style.display = 'none';
                    overlay.style.opacity = '1';
                } else {
                    window.onload = function () {
                        overlay.style.display = 'none';
                        overlay.style.opacity = '1';
                    }
                }
            }
        }
    };
    
    function getCurrentScript(callback) {
      var scripts = document.getElementsByTagName('script');
      
      if (document.currentScript) {
        callback(document.currentScript);
        return;
      }
      
      function onLoad() {
        callback(event.target);
      }
      for (var i = 0; i < scripts.length; ++i) {
        if(scripts[i].id === 'amoforms_script') {
          scripts[i].addEventListener('load', onLoad, false);
        }
      }
    }

    window.addEventListener('message', function(e){
        if (e.data === 'getWindowHeightAndIframeTopPos'){

            var window_H = window.innerHeight,
                iframe = document.querySelector('#amoforms_iframe_' + amo_forms_params.id),
                iframe_top_pos = iframe.getBoundingClientRect().top,
                json_str;

            json_str = '{"parent_window_height": ' + window_H + ', "iframe_offset_top": ' + iframe_top_pos + '}';
            iframe.contentWindow.postMessage(json_str, iframe.src);
        }
    }, false);

    // Отработает для формы в модалке на любом сайте
    window.addEventListener('message', function(e){
        // Если происходит запрос ширины экрана
        if (e.data === 'getWindowWidthIsModal'){
            var window_W = window.innerWidth, // получаем ширину
                iframe = document.querySelector('#amoforms_iframe_' + amo_forms_params.id),
                json_str;

            // Если ширина экрана меньше 900px
            if (window_W <= 900) {
                attrStyle = iframe.getAttribute('style');
                // Ужимаем форму
                iframe.setAttribute('style', attrStyle+'width:440px !important');
            }

            json_str = '{"parent_window_width": ' + window_W + '}';
            iframe.contentWindow.postMessage(json_str, iframe.src);
        }
    }, false);

  getCurrentScript(function (script) {
    amo_script = script;
    AMOFORMS.form_server = amo_script.src.match(/(http.+\.\w+)\//)[1];
    domready(function () {
      loadFile(AMOFORMS.form_server + '/forms/js/form_' + init_params.id + '_' + init_params.hash + '.js', init_frame);
    });
  });
    
	var langs = {
        submit: {
            en: 'Submit',
            es: 'Enviar',
            ru: 'Заполнить форму'
        }
	};
	var lang = function (text) {
		if (!langs.hasOwnProperty(text) || !langs[text].hasOwnProperty(form_language)) {
			return text;
		}
		return langs[text][form_language];
	};
}(document, window, amo_forms_params));
