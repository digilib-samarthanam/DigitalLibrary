/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[21],{389:function(Ba,ya,z){z.r(ya);var qa=z(1),ka=z(12),la=z(2);Ba=z(47);var ha=z(27),da=z(11);z=function(){function y(){this.init()}y.prototype.init=function(){this.M0=!1;this.Ze=this.jk=this.connection=null;this.rq={};this.ma=this.DC=null};y.prototype.Oea=function(r){for(var h=this,a=0;a<r.length;++a){var b=r[a];switch(b.at){case "create":this.rq[b.author]||(this.rq[b.author]=b.aName);this.w7(b);break;case "modify":this.ma.ym(b.xfdf).then(function(e){h.ma.yb(e[0])});
break;case "delete":this.ma.ym("<delete><id>"+b.aId+"</id></delete>")}}};y.prototype.w7=function(r){var h=this;this.ma.ym(r.xfdf).then(function(a){a=a[0];a.authorId=r.author;h.ma.yb(a);h.ma.trigger(ka.a.UPDATE_ANNOTATION_PERMISSION,[a])})};y.prototype.Y6=function(r,h,a){this.jk&&this.jk(r,h,a)};y.prototype.preloadAnnotations=function(r){this.addEventListener("webViewerServerAnnotationsEnabled",this.Y6.bind(this,r,"add",{imported:!1}),{once:!0})};y.prototype.initiateCollaboration=function(r,h,a){var b=
this;if(r){b.Ze=h;b.ma=a.ua();a.addEventListener(ka.c.DOCUMENT_UNLOADED,function(){b.disableCollaboration()});b.kfa(r);var e=new XMLHttpRequest;e.addEventListener("load",function(){if(200===e.status&&0<e.responseText.length)try{var f=JSON.parse(e.responseText);b.connection=exports.jb.Lfa(Object(ha.j)(b.Ze,"blackbox/"),"annot");b.DC=f.id;b.rq[f.id]=f.user_name;b.ma.bJ(f.id);b.connection.FJ(function(n){n.t&&n.t.startsWith("a_")&&n.data&&b.Oea(n.data)},function(){b.connection.send({t:"a_retrieve",dId:r});
b.trigger(y.Events.WEBVIEWER_SERVER_ANNOTATIONS_ENABLED,[b.rq[f.id],b.DC])},function(){b.disableCollaboration()})}catch(n){Object(la.f)(n.message)}});e.open("GET",Object(ha.j)(this.Ze,"demo/SessionInfo.jsp"));e.withCredentials=!0;e.send();b.M0=!0;b.ma.iU(function(f){return b.rq[f.Author]||f.Author})}else Object(la.f)("Document ID required for collaboration")};y.prototype.disableCollaboration=function(){this.jk&&(this.ma.removeEventListener(da.a.Events.ANNOTATION_CHANGED,this.jk),this.jk=null);this.connection&&
this.connection.tF();this.ma&&this.ma.bJ("Guest");this.init();this.trigger(y.Events.WEBVIEWER_SERVER_ANNOTATIONS_DISABLED)};y.prototype.kfa=function(r){var h=this;this.jk&&this.ma.removeEventListener(da.a.Events.ANNOTATION_CHANGED,this.jk);this.jk=function(a,b,e){return Object(qa.b)(this,void 0,void 0,function(){var f,n,x,ca,w,aa,ja,fa,ea;return Object(qa.d)(this,function(ba){switch(ba.label){case 0:if(e.imported)return[2];f={t:"a_"+b,dId:r,annots:[]};return[4,h.ma.UO()];case 1:n=ba.ea();"delete"!==
b&&(x=(new DOMParser).parseFromString(n,"text/xml"),ca=new XMLSerializer);for(w=0;w<a.length;w++)aa=a[w],fa=ja=void 0,"add"===b?(ja=x.querySelector('[name="'+aa.Id+'"]'),fa=ca.serializeToString(ja),ea=null,aa.InReplyTo&&(ea=h.ma.ng(aa.InReplyTo).authorId||"default"),f.annots.push({at:"create",aId:aa.Id,author:h.DC,aName:h.rq[h.DC],parent:ea,xfdf:"<add>"+fa+"</add>"})):"modify"===b?(ja=x.querySelector('[name="'+aa.Id+'"]'),fa=ca.serializeToString(ja),f.annots.push({at:"modify",aId:aa.Id,xfdf:"<modify>"+
fa+"</modify>"})):"delete"===b&&f.annots.push({at:"delete",aId:aa.Id});0<f.annots.length&&h.connection.send(f);return[2]}})})}.bind(h);this.ma.addEventListener(da.a.Events.ANNOTATION_CHANGED,this.jk)};y.Events={WEBVIEWER_SERVER_ANNOTATIONS_ENABLED:"webViewerServerAnnotationsEnabled",WEBVIEWER_SERVER_ANNOTATIONS_DISABLED:"webViewerServerAnnotationsDisabled"};return y}();Object(Ba.a)(z);ya["default"]=z}}]);}).call(this || window)