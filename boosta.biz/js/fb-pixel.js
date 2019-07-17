$ = jQuery;
var EventPush;!function(t){var e=function(){function t(t){this.delayEvents=t}return t.prototype.init=function(){for(var t=0,e=this.delayEvents;t<e.length;t++){var n=e[t];this.addDelayEventListener(n)}},t.prototype.addDelayEventListener=function(e){setTimeout(function(){e.event()},e.second*t.SECOND_IN_MICROSECOND)},t.SECOND_IN_MICROSECOND=1e3,t}();t.Delay=e}(EventPush||(EventPush={}));var EventPush;!function(t){var e=function(){function t(t){this.firedEvents=[],this.scrollEvents=t}return t.prototype.init=function(){var t=this;window.addEventListener("scroll",function(){t.onScroll()},!1)},t.prototype.onScroll=function(){for(var e=t.getScrollPercent(),n=this.filterByPercent(e),o=0,i=n;o<i.length;o++){var r=i[o];if(this.inFiredEvents(r))return;this.fireEvent(r)}},t.prototype.filterByPercent=function(t){return this.scrollEvents.filter(function(e){return e.percent===t})},t.prototype.fireEvent=function(t){t.event(),this.firedEvents.push(t.percent)},t.prototype.inFiredEvents=function(t){return this.firedEvents.indexOf(t.percent)>=0},t.getScrollPercent=function(){var e=window.innerHeight||(document.documentElement||document.body).clientHeight,n=t.getDocumentHeight(),o=window.pageYOffset||(document.documentElement||document.body).scrollTop,i=n-e;return Math.floor(o/i*100)},t.getDocumentHeight=function(){var t=document;return Math.max(t.body.scrollHeight,t.documentElement.scrollHeight,t.body.offsetHeight,t.documentElement.offsetHeight,t.body.clientHeight,t.documentElement.clientHeight)},t}();t.Scroll=e}(EventPush||(EventPush={}));
$(function () {
    var eventPushScrollOptions = [
        {
            percent: 25,
            event: function()
            {
                window._fbq.push(['trackCustom', 'PageScroll_25', {}]);
            }
        },
        {
            percent: 50,
            event: function()
            {
                window._fbq.push(['trackCustom', 'PageScroll_50', {}]);
            }
        },
        {
            percent: 75,
            event: function()
            {
                window._fbq.push(['trackCustom', 'PageScroll_75', {}]);
            }
        },
        {
            percent: 95,
            event: function()
            {
                window._fbq.push(['trackCustom', 'PageScroll_95', {}]);
            }
        },
    ];
    var eventPushDelayOptions = [
        {
            second: 5,
            event: function()
            {
                window._fbq.push(['trackCustom', 'ViewContent_5sec', {}]);
            }
        },
        {
            second: 15,
            event: function()
            {
                window._fbq.push(['trackCustom', 'ViewContent_15sec', {}]);
            }
        },
        {
            second: 30,
            event: function()
            {
                window._fbq.push(['trackCustom', 'ViewContent_30sec', {}]);
            }
        },
    ];

    var eventPushScroll = new EventPush.Scroll(eventPushScrollOptions);
    var eventPushDelay = new EventPush.Delay(eventPushDelayOptions);
    eventPushScroll.init();
    eventPushDelay.init();
});

$('.aside .js_send-cv-controller').on('click',function () {
    fbq('track', 'Lead');
    ga('send', 'event', 'CTA', 'CV', 'send SV');
});

$('#vacancyForm input[type="submit"]').on('click',function () {
    fbq('track', 'InitiateCheckout');
    ga('send', 'event', 'CTA', 'CV', 'send');
});

$('#vacancyForm').on('submit',function(){
    fbq('track', 'CompleteRegistration');
    ga('send', 'event', 'CTA', 'CV', 'completed');
});
