(function(){var e={event:"addToSegment",name:"visibility"},c={jsonToQueryString:function(b){return"?"+Object.keys(b).map(function(d){return encodeURIComponent(d)+"="+encodeURIComponent(b[d])}).join("&")},createCORSRequest:function(b,d,a){var c=new XMLHttpRequest;"withCredentials"in c?(c.open(b,d,a),c.withCredentials=!0):"undefined"!=typeof XDomainRequest?(c=new XDomainRequest,c.open(b,d)):c=null;return c},getSize:function(b,d,a){return 0>b&&0<=d?Math.min(d,a):0<=b&&b<a?Math.min(d,a)-b:0}},a=function(b){this.passback=
b.passback||function(){};this.placeholderId=b.placeholderId;this.params={placement_id:b.placementId,w:b.width,h:b.height,request_id:Math.floor(1E13*Math.random()),url:window.location.href};b.scope&&(this.params.scope=b.scope);this.bidUrl=window.location.protocol+"//clientside-bidder.rutarget.ru/bid"+c.jsonToQueryString(this.params)};a.prototype.sendCORSRequest=function(b){var a=this,f=c.createCORSRequest("GET",a.bidUrl,b);f?(b&&(f.timeout=1E3,f.ontimeout=function(b){a.passback()}),f.onload=function(){try{a.onSuccessRequest(this.response)}catch(b){a.passback()}},
f.onerror=function(){a.passback()},f.send()):a.passback()};a.prototype.onSuccessRequest=function(b){(b=JSON.parse(b))&&b.creativeUrl?(b=this.createIframe(b.creativeUrl),document.getElementById(this.placeholderId).appendChild(b),this.listenViewability()):this.passback()};a.prototype.createIframe=function(b){var a=document.createElement("iframe");a.src=b;a.width=this.params.w;a.height=this.params.h;a.id="rtgt_"+this.placeholderId;a.scrolling="no";a.setAttribute("allowtransparency","true");a.setAttribute("frameBorder",
"0");a.setAttribute("marginWidth","0");a.setAttribute("marginHeight","0");a.setAttribute("vspace","0");a.setAttribute("hspace","0");return a};a.prototype.listenViewability=function(){var a=this,d=!1,c=a.params.w*a.params.h/2,e=setInterval(function(){!d&&a.checkVisibility(c)&&(d=!0,setTimeout(function(){a.checkVisibility(c)?(clearInterval(e),a.fireViewPixel()):d=!1},1E3))},100)};a.prototype.checkVisibility=function(a){var d=document.getElementById(this.placeholderId).getBoundingClientRect(),e=c.getSize(d.top,
d.bottom,document.documentElement.clientHeight),d=c.getSize(d.left,d.right,document.documentElement.clientWidth);return e*d>=a};a.prototype.fireViewPixel=function(){e.value=this.params.placement_id;e.__r=Math.floor(1E13*Math.random());var a=document.createElement("img");a.width=1;a.height=1;a.style.display="none";a.src="//tag.rutarget.ru/tag"+c.jsonToQueryString(e);a.alt="";document.body.insertBefore(a,document.body.firstChild)};window.rutarget={Ad:a,showAd:function(b){b=new a(b);try{b.sendCORSRequest(!0)}catch(c){b.passback()}}}})();(function(){var e={},c=function(a){a.passback=function(){this.state=""};window.rutarget.Ad.apply(this,arguments);this.state=this.creativeUrl=""};c.prototype=Object.create(window.rutarget.Ad.prototype);c.prototype.constructor=c;c.prototype.onSuccessRequest=function(a){(a=JSON.parse(a))&&a.creativeUrl?(this.state="segmento_"+this.params.placement_id,this.creativeUrl=a.creativeUrl):this.passback()};c.prototype.showCreative=function(){var a=this.createIframe(this.creativeUrl,this.placeholderId);document.getElementById(this.placeholderId).appendChild(a);
this.listenViewability()};window.rutarget.adfox={checkAd:function(a){a=new c(a);e[a.params.placement_id]=a;try{a.sendCORSRequest(!1)}catch(b){a.passback()}},getAdState:function(a){return a?e[a]?e[a].state:"":""},showAd:function(a){a.placementId&&e[a.placementId]&&a.placeholderId&&(e[a.placementId].placeholderId=a.placeholderId,e[a.placementId].showCreative())}}})();
//@ sourceMappingURL=publishertag.js.map