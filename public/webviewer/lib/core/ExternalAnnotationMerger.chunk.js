/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[6],{387:function(Ba,ya,z){z.r(ya);var qa=z(1),ka=z(412),la=z(413),ha;(function(da){da[da.EXTERNAL_XFDF_NOT_REQUESTED=0]="EXTERNAL_XFDF_NOT_REQUESTED";da[da.EXTERNAL_XFDF_NOT_AVAILABLE=1]="EXTERNAL_XFDF_NOT_AVAILABLE";da[da.EXTERNAL_XFDF_AVAILABLE=2]="EXTERNAL_XFDF_AVAILABLE"})(ha||(ha={}));Ba=function(){function da(y){this.V=y;this.state=ha.EXTERNAL_XFDF_NOT_REQUESTED}da.prototype.S6=function(){var y=this;return function(r,h,a){return Object(qa.b)(y,
void 0,void 0,function(){var b,e,f,n,x,ca,w,aa=this,ja;return Object(qa.d)(this,function(fa){switch(fa.label){case 0:if(this.state!==ha.EXTERNAL_XFDF_NOT_REQUESTED)return[3,2];b=this.V.getDocument().Pq();return[4,this.z5(b)];case 1:e=fa.ea(),f=this.j1(e),this.yF=null!==(ja=null===f||void 0===f?void 0:f.parse())&&void 0!==ja?ja:null,this.state=null===this.yF?ha.EXTERNAL_XFDF_NOT_AVAILABLE:ha.EXTERNAL_XFDF_AVAILABLE,fa.label=2;case 2:if(this.state===ha.EXTERNAL_XFDF_NOT_AVAILABLE)return a(r),[2];n=
new DOMParser;x=n.parseFromString(r,"text/xml");h.forEach(function(ea){aa.merge(x,aa.yF,ea-1)});ca=new XMLSerializer;w=ca.serializeToString(x);a(w);return[2]}})})}};da.prototype.cJ=function(y){this.z5=y};da.prototype.Wd=function(){this.yF=void 0;this.state=ha.EXTERNAL_XFDF_NOT_REQUESTED};da.prototype.j1=function(y){return y?Array.isArray(y)?new ka.a(y):"string"!==typeof y?null:(new DOMParser).parseFromString(y,"text/xml").querySelector("xfdf > add")?new ka.a(y):new la.a(y):null};da.prototype.merge=
function(y,r,h){var a=this;0===h&&(this.c9(y,r.Sn),this.e9(y,r.hF));var b=r.ba[h];b&&(this.f9(y,b.Rl),this.h9(y,b.SV,r.ku),this.g9(y,b.page,h),this.d9(y,b.zO));b=this.V.Dc();if(h===b-1){var e=r.ku;Object.keys(e).forEach(function(f){e[f].JG||a.LR(y,f,e[f])})}};da.prototype.c9=function(y,r){null!==r&&(y=this.Dt(y),this.lp(y,"calculation-order",r))};da.prototype.e9=function(y,r){null!==r&&(y=this.Dt(y),this.lp(y,"document-actions",r))};da.prototype.f9=function(y,r){var h=this,a=this.Ct(y.querySelector("xfdf"),
"annots");Object.keys(r).forEach(function(b){h.lp(a,'[name="'+b+'"]',r[b])})};da.prototype.h9=function(y,r,h){var a=this;if(0!==r.length){var b=this.Dt(y);r.forEach(function(e){var f=e.getAttribute("field"),n=h[f];n&&(a.LR(y,f,n),a.lp(b,"null",e))})}};da.prototype.LR=function(y,r,h){var a=this.Dt(y);null!==h.Cz&&this.lp(a,'ffield [name="'+r+'"]',h.Cz);y=this.Ct(y.querySelector("xfdf"),"fields");r=r.split(".");this.oI(y,r,0,h.value);h.JG=!0};da.prototype.g9=function(y,r,h){null!==r&&(y=this.Dt(y),
y=this.Ct(y,"pages"),this.lp(y,'[number="'+(h+1)+'"]',r))};da.prototype.d9=function(y,r){Object.keys(r).forEach(function(h){(h=y.querySelector('annots [name="'+h+'"]'))&&h.parentElement.removeChild(h)})};da.prototype.oI=function(y,r,h,a){if(h===r.length)r=document.createElementNS("","value"),r.textContent=a,this.lp(y,"value",r);else{var b=r[h];this.Ct(y,'[name="'+b+'"]',"field").setAttribute("name",b);y=y.querySelectorAll('[name="'+b+'"]');1===y.length?this.oI(y[0],r,h+1,a):(b=this.z4(y),this.oI(h===
r.length-1?b:this.sea(y,b),r,h+1,a))}};da.prototype.z4=function(y){for(var r=null,h=0;h<y.length;h++){var a=y[h];if(0===a.childElementCount||1===a.childElementCount&&"value"===a.children[0].tagName){r=a;break}}return r};da.prototype.sea=function(y,r){for(var h=0;h<y.length;h++)if(y[h]!==r)return y[h];return null};da.prototype.lp=function(y,r,h){r=y.querySelector(r);null!==r&&y.removeChild(r);y.appendChild(h)};da.prototype.Dt=function(y){var r=y.querySelector("pdf-info");if(null!==r)return r;r=this.Ct(y.querySelector("xfdf"),
"pdf-info");r.setAttribute("xmlns","http://www.pdftron.com/pdfinfo");r.setAttribute("version","2");r.setAttribute("import-version","3");return r};da.prototype.Ct=function(y,r,h){var a=y.querySelector(r);if(null!==a)return a;a=document.createElementNS("",h||r);y.appendChild(a);return a};return da}();ya["default"]=Ba},398:function(Ba,ya){Ba=function(){function z(){}z.prototype.iy=function(qa){var ka={Sn:null,hF:null,ku:{},ba:{}};qa=(new DOMParser).parseFromString(qa,"text/xml");ka.Sn=qa.querySelector("pdf-info calculation-order");
ka.hF=qa.querySelector("pdf-info document-actions");ka.ku=this.Z9(qa);ka.ba=this.l$(qa);return ka};z.prototype.Z9=function(qa){var ka=qa.querySelector("fields");qa=qa.querySelectorAll("pdf-info > ffield");if(null===ka&&null===qa)return{};var la={};this.d_(la,ka);this.b_(la,qa);return la};z.prototype.d_=function(qa,ka){if(null!==ka&&ka.children){for(var la=[],ha=0;ha<ka.children.length;ha++){var da=ka.children[ha];la.push({name:da.getAttribute("name"),element:da})}for(;0!==la.length;)for(ka=la.shift(),
ha=0;ha<ka.element.children.length;ha++)da=ka.element.children[ha],"value"===da.tagName?qa[ka.name]={value:da.textContent,Cz:null,JG:!1}:da.children&&la.push({name:ka.name+"."+da.getAttribute("name"),element:da})}};z.prototype.b_=function(qa,ka){ka.forEach(function(la){var ha=la.getAttribute("name");qa[ha]?qa[ha].Cz=la:qa[ha]={value:null,Cz:la,JG:!1}})};z.prototype.l$=function(qa){var ka=this,la={};qa.querySelectorAll("pdf-info widget").forEach(function(ha){var da=parseInt(ha.getAttribute("page"),
10)-1;ka.CA(la,da);la[da].SV.push(ha)});qa.querySelectorAll("pdf-info page").forEach(function(ha){var da=parseInt(ha.getAttribute("number"),10)-1;ka.CA(la,da);la[da].page=ha});this.QP(qa).forEach(function(ha){var da=parseInt(ha.getAttribute("page"),10),y=ha.getAttribute("name");ka.CA(la,da);la[da].Rl[y]=ha});this.DP(qa).forEach(function(ha){var da=parseInt(ha.getAttribute("page"),10);ha=ha.textContent;ka.CA(la,da);la[da].zO[ha]=!0});return la};z.prototype.CA=function(qa,ka){qa[ka]||(qa[ka]={Rl:{},
zO:{},SV:[],page:null})};return z}();ya.a=Ba},412:function(Ba,ya,z){var qa=z(1),ka=z(0);z.n(ka);Ba=function(la){function ha(da){var y=la.call(this)||this;y.m4=Array.isArray(da)?da:[da];return y}Object(qa.c)(ha,la);ha.prototype.parse=function(){var da=this,y={Sn:null,hF:null,ku:{},ba:{}};this.m4.forEach(function(r){y=Object(ka.merge)(y,da.iy(r))});return y};ha.prototype.QP=function(da){var y=[];da.querySelectorAll("add > *").forEach(function(r){y.push(r)});da.querySelectorAll("modify > *").forEach(function(r){y.push(r)});
return y};ha.prototype.DP=function(da){return da.querySelectorAll("delete > *")};return ha}(z(398).a);ya.a=Ba},413:function(Ba,ya,z){var qa=z(1);Ba=function(ka){function la(ha){var da=ka.call(this)||this;da.n4=ha;return da}Object(qa.c)(la,ka);la.prototype.parse=function(){return this.iy(this.n4)};la.prototype.QP=function(ha){return ha.querySelectorAll("annots > *")};la.prototype.DP=function(){return[]};return la}(z(398).a);ya.a=Ba}}]);}).call(this || window)