/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[7],{379:function(Ba,ya,z){z.r(ya);var qa=z(1);Ba=z(47);var ka=z(144),la=z(339),ha=z(198),da=window;z=function(){function y(r,h){this.bR=function(a){a=a.split(".");return a[a.length-1].match(/(jpg|jpeg|png|gif)$/i)};h=h||{};this.url=r;this.filename=h.filename||r;this.Me=h.customHeaders;this.bfa=!!h.useDownloader;this.withCredentials=!!h.withCredentials}y.prototype.bC=function(r){this.Me=r};y.prototype.getCustomHeaders=function(){return this.Me};
y.prototype.getFileData=function(r){var h=this,a=this,b=new XMLHttpRequest,e=0===this.url.indexOf("blob:")?"blob":"arraybuffer";b.open("GET",this.url,!0);b.withCredentials=this.withCredentials;b.responseType=e;this.Me&&Object.keys(this.Me).forEach(function(n){b.setRequestHeader(n,h.Me[n])});var f=/^https?:/i.test(this.url);b.addEventListener("load",function(n){return Object(qa.b)(this,void 0,void 0,function(){var x,ca,w,aa,ja,fa;return Object(qa.d)(this,function(ea){switch(ea.label){case 0:if(200!==
this.status&&(f||0!==this.status))return[3,10];a.trigger(y.Events.DOCUMENT_LOADING_PROGRESS,[n.loaded,n.loaded]);if("blob"!==this.responseType)return[3,4];x=this.response;return a.bR(a.filename)?[4,Object(ha.b)(x)]:[3,2];case 1:return ca=ea.ea(),a.fileSize=ca.byteLength,r(new Uint8Array(ca)),[3,3];case 2:w=new FileReader,w.onload=function(ba){ba=new Uint8Array(ba.target.result);a.fileSize=ba.length;r(ba)},w.readAsArrayBuffer(x),ea.label=3;case 3:return[3,9];case 4:ea.Mj.push([4,8,,9]);aa=new Uint8Array(this.response);
if(!a.bR(a.filename))return[3,6];x=new Blob([aa.buffer]);return[4,Object(ha.b)(x)];case 5:return ca=ea.ea(),a.fileSize=ca.byteLength,r(new Uint8Array(ca)),[3,7];case 6:a.fileSize=aa.length,r(aa),ea.label=7;case 7:return[3,9];case 8:return ea.ea(),a.trigger(y.Events.ERROR,["pdfLoad","Out of memory"]),[3,9];case 9:return[3,11];case 10:ja=n.currentTarget,fa=Object(ka.b)(ja),a.trigger(y.Events.ERROR,["pdfLoad",this.status+" "+ja.statusText,fa]),ea.label=11;case 11:return a.Lw=null,[2]}})})},!1);b.onprogress=
function(n){a.trigger(y.Events.DOCUMENT_LOADING_PROGRESS,[n.loaded,0<n.total?n.total:0])};b.addEventListener("error",function(){a.trigger(y.Events.ERROR,["pdfLoad","Network failure"]);a.Lw=null},!1);b.send();this.Lw=b};y.prototype.getFile=function(){var r=this;return new Promise(function(h){da.utils.isJSWorker&&h(r.url);if(r.bfa){var a=Object(qa.a)({url:r.url},r.Me?{customHeaders:r.Me}:{});h(a)}h(null)})};y.prototype.abort=function(){this.Lw&&(this.Lw.abort(),this.Lw=null)};y.Events={DOCUMENT_LOADING_PROGRESS:"documentLoadingProgress",
ERROR:"error"};return y}();Object(Ba.a)(z);Object(la.a)(z);Object(la.b)(z);ya["default"]=z}}]);}).call(this || window)