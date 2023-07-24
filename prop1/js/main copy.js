/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);/********************************************
	-	THEMEPUNCH TOOLS Ver. 6.0     -
	 Last Update of Tools 12.02.2019
*********************************************/


/*
* @fileOverview TouchSwipe - jQuery Plugin
* @version 6.0.0
*
* @author Matt Bryson http://www.github.com/mattbryson
* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* @see http://labs.skinkers.com/touchSwipe/
* @see http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/

(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var y="1.6.9",p="left",o="right",e="up",x="down",c="in",A="out",m="none",s="auto",l="swipe",t="pinch",B="tap",j="doubletap",b="longtap",z="hold",E="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,C="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipetp=function(H){var G=f(this),F=G.data(C);if(F&&typeof H==="string"){if(F[H]){return F[H].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+H+" does not exist on jQuery.swipetp")}}else{if(!F&&(typeof H==="object"||!H)){return w.apply(this,arguments)}}return G};f.fn.swipetp.version=y;f.fn.swipetp.defaults=n;f.fn.swipetp.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipetp.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:A};f.fn.swipetp.pageScroll={NONE:m,HORIZONTAL:E,VERTICAL:u,AUTO:s};f.fn.swipetp.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(F){if(F&&(F.allowPageScroll===undefined&&(F.swipe!==undefined||F.swipeStatus!==undefined))){F.allowPageScroll=m}if(F.click!==undefined&&F.tap===undefined){F.tap=F.click}if(!F){F={}}F=f.extend({},f.fn.swipetp.defaults,F);return this.each(function(){var H=f(this);var G=H.data(C);if(!G){G=new D(this,F);H.data(C,G)}})}function D(a5,aw){var aA=(a||d||!aw.fallbackToMouseEvents),K=aA?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",az=aA?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",V=aA?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",T=aA?null:"mouseleave",aE=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ah=0,aQ=null,ac=0,a2=0,a0=0,H=1,ar=0,aK=0,N=null;var aS=f(a5);var aa="start";var X=0;var aR=null;var U=0,a3=0,a6=0,ae=0,O=0;var aX=null,ag=null;try{aS.bind(K,aO);aS.bind(aE,ba)}catch(al){f.error("events not supported "+K+","+aE+" on jQuery.swipetp")}this.enable=function(){aS.bind(K,aO);aS.bind(aE,ba);return aS};this.disable=function(){aL();return aS};this.destroy=function(){aL();aS.data(C,null);aS=null};this.option=function(bd,bc){if(aw[bd]!==undefined){if(bc===undefined){return aw[bd]}else{aw[bd]=bc}}else{f.error("Option "+bd+" does not exist on jQuery.swipetp.options")}return null};function aO(be){if(aC()){return}if(f(be.target).closest(aw.excludedElements,aS).length>0){return}var bf=be.originalEvent?be.originalEvent:be;var bd,bg=bf.touches,bc=bg?bg[0]:bf;aa=g;if(bg){X=bg.length}else{be.preventDefault()}ah=0;aQ=null;aK=null;ac=0;a2=0;a0=0;H=1;ar=0;aR=ak();N=ab();S();if(!bg||(X===aw.fingers||aw.fingers===i)||aY()){aj(0,bc);U=au();if(X==2){aj(1,bg[1]);a2=a0=av(aR[0].start,aR[1].start)}if(aw.swipeStatus||aw.pinchStatus){bd=P(bf,aa)}}else{bd=false}if(bd===false){aa=q;P(bf,aa);return bd}else{if(aw.hold){ag=setTimeout(f.proxy(function(){aS.trigger("hold",[bf.target]);if(aw.hold){bd=aw.hold.call(aS,bf,bf.target)}},this),aw.longTapThreshold)}ap(true)}return null}function a4(bf){var bi=bf.originalEvent?bf.originalEvent:bf;if(aa===h||aa===q||an()){return}var be,bj=bi.touches,bd=bj?bj[0]:bi;var bg=aI(bd);a3=au();if(bj){X=bj.length}if(aw.hold){clearTimeout(ag)}aa=k;if(X==2){if(a2==0){aj(1,bj[1]);a2=a0=av(aR[0].start,aR[1].start)}else{aI(bj[1]);a0=av(aR[0].end,aR[1].end);aK=at(aR[0].end,aR[1].end)}H=a8(a2,a0);ar=Math.abs(a2-a0)}if((X===aw.fingers||aw.fingers===i)||!bj||aY()){aQ=aM(bg.start,bg.end);am(bf,aQ);ah=aT(bg.start,bg.end);ac=aN();aJ(aQ,ah);if(aw.swipeStatus||aw.pinchStatus){be=P(bi,aa)}if(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave){var bc=true;if(aw.triggerOnTouchLeave){var bh=aZ(this);bc=F(bg.end,bh)}if(!aw.triggerOnTouchEnd&&bc){aa=aD(k)}else{if(aw.triggerOnTouchLeave&&!bc){aa=aD(h)}}if(aa==q||aa==h){P(bi,aa)}}}else{aa=q;P(bi,aa)}if(be===false){aa=q;P(bi,aa)}}function M(bc){var bd=bc.originalEvent?bc.originalEvent:bc,be=bd.touches;if(be){if(be.length){G();return true}}if(an()){X=ae}a3=au();ac=aN();if(bb()||!ao()){aa=q;P(bd,aa)}else{if(aw.triggerOnTouchEnd||(aw.triggerOnTouchEnd==false&&aa===k)){bc.preventDefault();aa=h;P(bd,aa)}else{if(!aw.triggerOnTouchEnd&&a7()){aa=h;aG(bd,aa,B)}else{if(aa===k){aa=q;P(bd,aa)}}}}ap(false);return null}function ba(){X=0;a3=0;U=0;a2=0;a0=0;H=1;S();ap(false)}function L(bc){var bd=bc.originalEvent?bc.originalEvent:bc;if(aw.triggerOnTouchLeave){aa=aD(h);P(bd,aa)}}function aL(){aS.unbind(K,aO);aS.unbind(aE,ba);aS.unbind(az,a4);aS.unbind(V,M);if(T){aS.unbind(T,L)}ap(false)}function aD(bg){var bf=bg;var be=aB();var bd=ao();var bc=bb();if(!be||bc){bf=q}else{if(bd&&bg==k&&(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave)){bf=h}else{if(!bd&&bg==h&&aw.triggerOnTouchLeave){bf=q}}}return bf}function P(be,bc){var bd,bf=be.touches;if((J()||W())||(Q()||aY())){if(J()||W()){bd=aG(be,bc,l)}if((Q()||aY())&&bd!==false){bd=aG(be,bc,t)}}else{if(aH()&&bd!==false){bd=aG(be,bc,j)}else{if(aq()&&bd!==false){bd=aG(be,bc,b)}else{if(ai()&&bd!==false){bd=aG(be,bc,B)}}}}if(bc===q){ba(be)}if(bc===h){if(bf){if(!bf.length){ba(be)}}else{ba(be)}}return bd}function aG(bf,bc,be){var bd;if(be==l){aS.trigger("swipeStatus",[bc,aQ||null,ah||0,ac||0,X,aR]);if(aw.swipeStatus){bd=aw.swipeStatus.call(aS,bf,bc,aQ||null,ah||0,ac||0,X,aR);if(bd===false){return false}}if(bc==h&&aW()){aS.trigger("swipe",[aQ,ah,ac,X,aR]);if(aw.swipe){bd=aw.swipe.call(aS,bf,aQ,ah,ac,X,aR);if(bd===false){return false}}switch(aQ){case p:aS.trigger("swipeLeft",[aQ,ah,ac,X,aR]);if(aw.swipeLeft){bd=aw.swipeLeft.call(aS,bf,aQ,ah,ac,X,aR)}break;case o:aS.trigger("swipeRight",[aQ,ah,ac,X,aR]);if(aw.swipeRight){bd=aw.swipeRight.call(aS,bf,aQ,ah,ac,X,aR)}break;case e:aS.trigger("swipeUp",[aQ,ah,ac,X,aR]);if(aw.swipeUp){bd=aw.swipeUp.call(aS,bf,aQ,ah,ac,X,aR)}break;case x:aS.trigger("swipeDown",[aQ,ah,ac,X,aR]);if(aw.swipeDown){bd=aw.swipeDown.call(aS,bf,aQ,ah,ac,X,aR)}break}}}if(be==t){aS.trigger("pinchStatus",[bc,aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchStatus){bd=aw.pinchStatus.call(aS,bf,bc,aK||null,ar||0,ac||0,X,H,aR);if(bd===false){return false}}if(bc==h&&a9()){switch(aK){case c:aS.trigger("pinchIn",[aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchIn){bd=aw.pinchIn.call(aS,bf,aK||null,ar||0,ac||0,X,H,aR)}break;case A:aS.trigger("pinchOut",[aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchOut){bd=aw.pinchOut.call(aS,bf,aK||null,ar||0,ac||0,X,H,aR)}break}}}if(be==B){if(bc===q||bc===h){clearTimeout(aX);clearTimeout(ag);if(Z()&&!I()){O=au();aX=setTimeout(f.proxy(function(){O=null;aS.trigger("tap",[bf.target]);if(aw.tap){bd=aw.tap.call(aS,bf,bf.target)}},this),aw.doubleTapThreshold)}else{O=null;aS.trigger("tap",[bf.target]);if(aw.tap){bd=aw.tap.call(aS,bf,bf.target)}}}}else{if(be==j){if(bc===q||bc===h){clearTimeout(aX);O=null;aS.trigger("doubletap",[bf.target]);if(aw.doubleTap){bd=aw.doubleTap.call(aS,bf,bf.target)}}}else{if(be==b){if(bc===q||bc===h){clearTimeout(aX);O=null;aS.trigger("longtap",[bf.target]);if(aw.longTap){bd=aw.longTap.call(aS,bf,bf.target)}}}}}return bd}function ao(){var bc=true;if(aw.threshold!==null){bc=ah>=aw.threshold}return bc}function bb(){var bc=false;if(aw.cancelThreshold!==null&&aQ!==null){bc=(aU(aQ)-ah)>=aw.cancelThreshold}return bc}function af(){if(aw.pinchThreshold!==null){return ar>=aw.pinchThreshold}return true}function aB(){var bc;if(aw.maxTimeThreshold){if(ac>=aw.maxTimeThreshold){bc=false}else{bc=true}}else{bc=true}return bc}function am(bc,bd){if(aw.preventDefaultEvents===false){return}if(aw.allowPageScroll===m){bc.preventDefault()}else{var be=aw.allowPageScroll===s;switch(bd){case p:if((aw.swipeLeft&&be)||(!be&&aw.allowPageScroll!=E)){bc.preventDefault()}break;case o:if((aw.swipeRight&&be)||(!be&&aw.allowPageScroll!=E)){bc.preventDefault()}break;case e:if((aw.swipeUp&&be)||(!be&&aw.allowPageScroll!=u)){bc.preventDefault()}break;case x:if((aw.swipeDown&&be)||(!be&&aw.allowPageScroll!=u)){bc.preventDefault()}break}}}function a9(){var bd=aP();var bc=Y();var be=af();return bd&&bc&&be}function aY(){return !!(aw.pinchStatus||aw.pinchIn||aw.pinchOut)}function Q(){return !!(a9()&&aY())}function aW(){var bf=aB();var bh=ao();var be=aP();var bc=Y();var bd=bb();var bg=!bd&&bc&&be&&bh&&bf;return bg}function W(){return !!(aw.swipe||aw.swipeStatus||aw.swipeLeft||aw.swipeRight||aw.swipeUp||aw.swipeDown)}function J(){return !!(aW()&&W())}function aP(){return((X===aw.fingers||aw.fingers===i)||!a)}function Y(){return aR[0].end.x!==0}function a7(){return !!(aw.tap)}function Z(){return !!(aw.doubleTap)}function aV(){return !!(aw.longTap)}function R(){if(O==null){return false}var bc=au();return(Z()&&((bc-O)<=aw.doubleTapThreshold))}function I(){return R()}function ay(){return((X===1||!a)&&(isNaN(ah)||ah<aw.threshold))}function a1(){return((ac>aw.longTapThreshold)&&(ah<r))}function ai(){return !!(ay()&&a7())}function aH(){return !!(R()&&Z())}function aq(){return !!(a1()&&aV())}function G(){a6=au();ae=event.touches.length+1}function S(){a6=0;ae=0}function an(){var bc=false;if(a6){var bd=au()-a6;if(bd<=aw.fingerReleaseThreshold){bc=true}}return bc}function aC(){return !!(aS.data(C+"_intouch")===true)}function ap(bc){if(bc===true){aS.bind(az,a4);aS.bind(V,M);if(T){aS.bind(T,L)}}else{aS.unbind(az,a4,false);aS.unbind(V,M,false);if(T){aS.unbind(T,L,false)}}aS.data(C+"_intouch",bc===true)}function aj(bd,bc){var be=bc.identifier!==undefined?bc.identifier:0;aR[bd].identifier=be;aR[bd].start.x=aR[bd].end.x=bc.pageX||bc.clientX;aR[bd].start.y=aR[bd].end.y=bc.pageY||bc.clientY;return aR[bd]}function aI(bc){var be=bc.identifier!==undefined?bc.identifier:0;var bd=ad(be);bd.end.x=bc.pageX||bc.clientX;bd.end.y=bc.pageY||bc.clientY;return bd}function ad(bd){for(var bc=0;bc<aR.length;bc++){if(aR[bc].identifier==bd){return aR[bc]}}}function ak(){var bc=[];for(var bd=0;bd<=5;bd++){bc.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bc}function aJ(bc,bd){bd=Math.max(bd,aU(bc));N[bc].distance=bd}function aU(bc){if(N[bc]){return N[bc].distance}return undefined}function ab(){var bc={};bc[p]=ax(p);bc[o]=ax(o);bc[e]=ax(e);bc[x]=ax(x);return bc}function ax(bc){return{direction:bc,distance:0}}function aN(){return a3-U}function av(bf,be){var bd=Math.abs(bf.x-be.x);var bc=Math.abs(bf.y-be.y);return Math.round(Math.sqrt(bd*bd+bc*bc))}function a8(bc,bd){var be=(bd/bc)*1;return be.toFixed(2)}function at(){if(H<1){return A}else{return c}}function aT(bd,bc){return Math.round(Math.sqrt(Math.pow(bc.x-bd.x,2)+Math.pow(bc.y-bd.y,2)))}function aF(bf,bd){var bc=bf.x-bd.x;var bh=bd.y-bf.y;var be=Math.atan2(bh,bc);var bg=Math.round(be*180/Math.PI);if(bg<0){bg=360-Math.abs(bg)}return bg}function aM(bd,bc){var be=aF(bd,bc);if((be<=45)&&(be>=0)){return p}else{if((be<=360)&&(be>=315)){return p}else{if((be>=135)&&(be<=225)){return o}else{if((be>45)&&(be<135)){return x}else{return e}}}}}function au(){var bc=new Date();return bc.getTime()}function aZ(bc){bc=f(bc);var be=bc.offset();var bd={left:be.left,right:be.left+bc.outerWidth(),top:be.top,bottom:be.top+bc.outerHeight()};return bd}function F(bc,bd){return(bc.x>bd.left&&bc.x<bd.right&&bc.y>bd.top&&bc.y<bd.bottom)}}}));

if(typeof(console) === 'undefined') {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};
}

var RS_CacheGS = window.GreenSockGlobals, RS_CacheGS_queue = window._gsQueue,RS_Cache_define = window._gsDefine; window._gsDefine = null;delete window._gsDefine;var punchgs = window.GreenSockGlobals = {};

/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c],b):e[c%e.length];delete a.cycle},f=function(a){if("function"==typeof a)return a;var b="object"==typeof a?a:{each:a},c=b.ease,d=b.from||0,e=b.base||0,f={},g=isNaN(d),h=b.axis,i={center:.5,end:1}[d]||0;return function(a,j,k){var l,m,n,o,p,q,r,s,t,u=(k||b).length,v=f[u];if(!v){if(t="auto"===b.grid?0:(b.grid||[1/0])[0],!t){for(r=-(1/0);r<(r=k[t++].getBoundingClientRect().left)&&u>t;);t--}for(v=f[u]=[],l=g?Math.min(t,u)*i-.5:d%t,m=g?u*i/t-.5:d/t|0,r=0,s=1/0,q=0;u>q;q++)n=q%t-l,o=m-(q/t|0),v[q]=p=h?Math.abs("y"===h?o:n):Math.sqrt(n*n+o*o),p>r&&(r=p),s>p&&(s=p);v.max=r-s,v.min=s,v.v=u=b.amount||b.each*(t>u?u-1:h?"y"===h?u/t:t:Math.max(t,u/t))||0,v.b=0>u?e-u:e}return u=(v[a]-v.min)/v.max,v.b+(c?c.getRatio(u):u)*v.v}},g=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=g.prototype.render},h=1e-8,i=c._internals,j=i.isSelector,k=i.isArray,l=g.prototype=c.to({},.1,{}),m=[];g.version="2.1.3",l.constructor=g,l.kill()._gc=!1,g.killTweensOf=g.killDelayedCallsTo=c.killTweensOf,g.getTweensOf=c.getTweensOf,g.lagSmoothing=c.lagSmoothing,g.ticker=c.ticker,g.render=c.render,g.distribute=f,l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),c.prototype.invalidate.call(this)},l.updateTo=function(a,b){var d,e=this,f=e.ratio,g=e.vars.immediateRender||a.immediateRender;b&&e._startTime<e._timeline._time&&(e._startTime=e._timeline._time,e._uncache(!1),e._gc?e._enabled(!0,!1):e._timeline.insert(e,e._startTime-e._delay));for(d in a)e.vars[d]=a[d];if(e._initted||g)if(b)e._initted=!1,g&&e.render(0,!0,!0);else if(e._gc&&e._enabled(!0,!1),e._notifyPluginsOfEnabled&&e._firstPT&&c._onPluginEvent("_onDisable",e),e._time/e._duration>.998){var h=e._totalTime;e.render(0,!0,!1),e._initted=!1,e.render(h,!0,!1)}else if(e._initted=!1,e._init(),e._time>0||g)for(var i,j=1/(1-f),k=e._firstPT;k;)i=k.s+k.c,k.c*=j,k.s=i-k.c,k=k._next;return e},l.render=function(a,b,d){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var e,f,g,j,k,l,m,n,o,p=this,q=p._dirty?p.totalDuration():p._totalDuration,r=p._time,s=p._totalTime,t=p._cycle,u=p._duration,v=p._rawPrevTime;if(a>=q-h&&a>=0?(p._totalTime=q,p._cycle=p._repeat,p._yoyo&&0!==(1&p._cycle)?(p._time=0,p.ratio=p._ease._calcEnd?p._ease.getRatio(0):0):(p._time=u,p.ratio=p._ease._calcEnd?p._ease.getRatio(1):1),p._reversed||(e=!0,f="onComplete",d=d||p._timeline.autoRemoveChildren),0===u&&(p._initted||!p.vars.lazy||d)&&(p._startTime===p._timeline._duration&&(a=0),(0>v||0>=a&&a>=-h||v===h&&"isPause"!==p.data)&&v!==a&&(d=!0,v>h&&(f="onReverseComplete")),p._rawPrevTime=n=!b||a||v===a?a:h)):h>a?(p._totalTime=p._time=p._cycle=0,p.ratio=p._ease._calcEnd?p._ease.getRatio(0):0,(0!==s||0===u&&v>0)&&(f="onReverseComplete",e=p._reversed),a>-h?a=0:0>a&&(p._active=!1,0===u&&(p._initted||!p.vars.lazy||d)&&(v>=0&&(d=!0),p._rawPrevTime=n=!b||a||v===a?a:h)),p._initted||(d=!0)):(p._totalTime=p._time=a,0!==p._repeat&&(j=u+p._repeatDelay,p._cycle=p._totalTime/j>>0,0!==p._cycle&&p._cycle===p._totalTime/j&&a>=s&&p._cycle--,p._time=p._totalTime-p._cycle*j,p._yoyo&&0!==(1&p._cycle)&&(p._time=u-p._time,o=p._yoyoEase||p.vars.yoyoEase,o&&(p._yoyoEase||(o!==!0||p._initted?p._yoyoEase=o=o===!0?p._ease:o instanceof Ease?o:Ease.map[o]:(o=p.vars.ease,p._yoyoEase=o=o?o instanceof Ease?o:"function"==typeof o?new Ease(o,p.vars.easeParams):Ease.map[o]||c.defaultEase:c.defaultEase)),p.ratio=o?1-o.getRatio((u-p._time)/u):0)),p._time>u?p._time=u:p._time<0&&(p._time=0)),p._easeType&&!o?(k=p._time/u,l=p._easeType,m=p._easePower,(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===m?k*=k:2===m?k*=k*k:3===m?k*=k*k*k:4===m&&(k*=k*k*k*k),p.ratio=1===l?1-k:2===l?k:p._time/u<.5?k/2:1-k/2):o||(p.ratio=p._ease.getRatio(p._time/u))),r===p._time&&!d&&t===p._cycle)return void(s!==p._totalTime&&p._onUpdate&&(b||p._callback("onUpdate")));if(!p._initted){if(p._init(),!p._initted||p._gc)return;if(!d&&p._firstPT&&(p.vars.lazy!==!1&&p._duration||p.vars.lazy&&!p._duration))return p._time=r,p._totalTime=s,p._rawPrevTime=v,p._cycle=t,i.lazyTweens.push(p),void(p._lazy=[a,b]);!p._time||e||o?e&&this._ease._calcEnd&&!o&&(p.ratio=p._ease.getRatio(0===p._time?0:1)):p.ratio=p._ease.getRatio(p._time/u)}for(p._lazy!==!1&&(p._lazy=!1),p._active||!p._paused&&p._time!==r&&a>=0&&(p._active=!0),0===s&&(2===p._initted&&a>0&&p._init(),p._startAt&&(a>=0?p._startAt.render(a,!0,d):f||(f="_dummyGS")),p.vars.onStart&&(0!==p._totalTime||0===u)&&(b||p._callback("onStart"))),g=p._firstPT;g;)g.f?g.t[g.p](g.c*p.ratio+g.s):g.t[g.p]=g.c*p.ratio+g.s,g=g._next;p._onUpdate&&(0>a&&p._startAt&&p._startTime&&p._startAt.render(a,!0,d),b||(p._totalTime!==s||f)&&p._callback("onUpdate")),p._cycle!==t&&(b||p._gc||p.vars.onRepeat&&p._callback("onRepeat")),f&&(!p._gc||d)&&(0>a&&p._startAt&&!p._onUpdate&&p._startTime&&p._startAt.render(a,!0,d),e&&(p._timeline.autoRemoveChildren&&p._enabled(!1,!1),p._active=!1),!b&&p.vars[f]&&p._callback(f),0===u&&p._rawPrevTime===h&&n!==h&&(p._rawPrevTime=0))},g.to=function(a,b,c){return new g(a,b,c)},g.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new g(a,b,c)},g.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new g(a,b,d)},g.staggerTo=g.allTo=function(a,b,h,i,l,n,o){var p,q,r,s,t=[],u=f(h.stagger||i),v=h.cycle,w=(h.startAt||m).cycle;for(k(a)||("string"==typeof a&&(a=c.selector(a)||a),j(a)&&(a=d(a))),a=a||[],p=a.length-1,r=0;p>=r;r++){q={};for(s in h)q[s]=h[s];if(v&&(e(q,a,r),null!=q.duration&&(b=q.duration,delete q.duration)),w){w=q.startAt={};for(s in h.startAt)w[s]=h.startAt[s];e(q.startAt,a,r)}q.delay=u(r,a[r],a)+(q.delay||0),r===p&&l&&(q.onComplete=function(){h.onComplete&&h.onComplete.apply(h.onCompleteScope||this,arguments),l.apply(o||h.callbackScope||this,n||m)}),t[r]=new g(a[r],b,q)}return t},g.staggerFrom=g.allFrom=function(a,b,c,d,e,f,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,g.staggerTo(a,b,c,d,e,f,h)},g.staggerFromTo=g.allFromTo=function(a,b,c,d,e,f,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,g.staggerTo(a,b,d,e,f,h,i)},g.delayedCall=function(a,b,c,d,e){return new g(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},g.set=function(a,b){return new g(a,0,b)},g.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var n=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(n(f,b)),e=d.length),f=f._next;return d},o=g.getAllTweens=function(b){return n(a._rootTimeline,b).concat(n(a._rootFramesTimeline,b))};g.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=o(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},g.killChildTweensOf=function(a,b){if(null!=a){var e,f,h,l,m,n=i.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),j(a)&&(a=d(a)),k(a))for(l=a.length;--l>-1;)g.killChildTweensOf(a[l],b);else{e=[];for(h in n)for(f=n[h].target.parentNode;f;)f===a&&(e=e.concat(n[h].tweens)),f=f.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var p=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=o(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return g.pauseAll=function(a,b,c){p(!0,a,b,c)},g.resumeAll=function(a,b,c){p(!1,a,b,c)},g.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||h,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},l.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this.duration()?this._time/this._duration:this.ratio},l.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},l.time=function(a,b){if(!arguments.length)return this._time;this._dirty&&this.totalDuration();var c=this._duration,d=this._cycle,e=d*(c+this._repeatDelay);return a>c&&(a=c),this.totalTime(this._yoyo&&1&d?c-a+e:this._repeat?a+e:a,b)},l.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},l.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},l.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},l.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},l.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},g},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a);var c,d,e=this,f=e.vars;e._labels={},e.autoRemoveChildren=!!f.autoRemoveChildren,e.smoothChildTiming=!!f.smoothChildTiming,e._sortChildren=!0,e._onUpdate=f.onUpdate;for(d in f)c=f[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(f[d]=e._swapSelfInParams(c));i(f.tweens)&&e.add(f.tweens,0,f.align,f.stagger)},e=1e-8,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c],b):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=function(a,b,c,d){var e="immediateRender";return e in b||(b[e]=!(c&&c[e]===!1||d)),b},r=function(a){if("function"==typeof a)return a;var b="object"==typeof a?a:{each:a},c=b.ease,d=b.from||0,e=b.base||0,f={},g=isNaN(d),h=b.axis,i={center:.5,end:1}[d]||0;return function(a,j,k){var l,m,n,o,p,q,r,s,t,u=(k||b).length,v=f[u];if(!v){if(t="auto"===b.grid?0:(b.grid||[1/0])[0],!t){for(r=-(1/0);r<(r=k[t++].getBoundingClientRect().left)&&u>t;);t--}for(v=f[u]=[],l=g?Math.min(t,u)*i-.5:d%t,m=g?u*i/t-.5:d/t|0,r=0,s=1/0,q=0;u>q;q++)n=q%t-l,o=m-(q/t|0),v[q]=p=h?Math.abs("y"===h?o:n):Math.sqrt(n*n+o*o),p>r&&(r=p),s>p&&(s=p);v.max=r-s,v.min=s,v.v=u=b.amount||b.each*(t>u?u-1:h?"y"===h?u/t:t:Math.max(t,u/t))||0,v.b=0>u?e-u:e}return u=(v[a]-v.min)/v.max,v.b+(c?c.getRatio(u):u)*v.v}},s=d.prototype=new b;return d.version="2.1.3",d.distribute=r,s.constructor=d,s.kill()._gc=s._forcingPlayhead=s._hasPause=!1,s.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},s.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,q(this,d)),e)},s.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return e=q(this,e,d),b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},s.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),s=r(e.stagger||f),t=e.startAt,u=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),o=0;o<a.length;o++)l=m(e),t&&(l.startAt=m(t),t.cycle&&n(l.startAt,a,o)),u&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,s(o,a[o],a));return this.add(q,g)},s.staggerFrom=function(a,b,c,d,e,f,g,h){return c.runBackwards=!0,this.staggerTo(a,b,q(this,c),d,e,f,g,h)},s.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,this.staggerTo(a,b,q(this,d,c),e,f,g,h,i)},s.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},s.set=function(a,b,d){return this.add(new c(a,0,q(this,b,null,!0)),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g,h,i=new d(a),j=i._timeline;for(null==b&&(b=!0),j._remove(i,!0),i._startTime=0,i._rawPrevTime=i._time=i._totalTime=j._time,g=j._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||(f=g._startTime-g._delay,0>f&&(e=1),i.add(g,f)),g=h;return j.add(i,0),e&&i.totalDuration(),i},s.add=function(e,f,g,h){var j,k,l,m,n,o,p=this;if("number"!=typeof f&&(f=p._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),p.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return p._uncache(!0)}if("string"==typeof e)return p.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(p,e,f),(e._time||!e._duration&&e._initted)&&(j=(p.rawTime()-e._startTime)*e._timeScale,(!e._duration||Math.abs(Math.max(0,Math.min(e.totalDuration(),j)))-e._totalTime>1e-5)&&e.render(j,!1,!1)),(p._gc||p._time===p._duration)&&!p._paused&&p._duration<p.duration())for(n=p,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return p},s.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},s._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},s.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},s.insert=s.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},s.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},s.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},s.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},s.removeLabel=function(a){return delete this._labels[a],this},s.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},s._parseTimeOrLabel=function(b,c,d,e){var f,g;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(g=e.length;--g>-1;)e[g]instanceof a&&e[g].timeline===this&&this.remove(e[g]);if(f="number"!=typeof b||c?this.duration()>99999999999?this.recent().endTime(!1):this._duration:0,"string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-f:0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=f);else{if(g=b.indexOf("="),-1===g)return null==this._labels[b]?d?this._labels[b]=f+c:c:this._labels[b]+c;c=parseInt(b.charAt(g-1)+"1",10)*Number(b.substr(g+1)),b=g>1?this._parseTimeOrLabel(b.substr(0,g-1),0,d):f}return Number(b)+c},s.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},s.stop=function(){return this.paused(!0)},s.gotoAndPlay=function(a,b){return this.play(a,b)},s.gotoAndStop=function(a,b){return this.pause(a,b)},s.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n,o=this,p=o._time,q=o._dirty?o.totalDuration():o._totalDuration,r=o._startTime,s=o._timeScale,t=o._paused;if(p!==o._time&&(a+=o._time-p),o._hasPause&&!o._forcingPlayhead&&!b){if(a>p)for(d=o._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===o._rawPrevTime||(l=d),d=d._next;else for(d=o._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(o._time=o._totalTime=a=l._startTime,n=o._startTime+(o._reversed?o._duration-a:a)/o._timeScale)}if(a>=q-e&&a>=0)o._totalTime=o._time=q,o._reversed||o._hasPausedChild()||(f=!0,h="onComplete",i=!!o._timeline.autoRemoveChildren,0===o._duration&&(0>=a&&a>=-e||o._rawPrevTime<0||o._rawPrevTime===e)&&o._rawPrevTime!==a&&o._first&&(i=!0,o._rawPrevTime>e&&(h="onReverseComplete"))),o._rawPrevTime=o._duration||!b||a||o._rawPrevTime===a?a:e,a=q+1e-4;else if(e>a)if(o._totalTime=o._time=0,a>-e&&(a=0),(0!==p||0===o._duration&&o._rawPrevTime!==e&&(o._rawPrevTime>0||0>a&&o._rawPrevTime>=0))&&(h="onReverseComplete",f=o._reversed),0>a)o._active=!1,o._timeline.autoRemoveChildren&&o._reversed?(i=f=!0,h="onReverseComplete"):o._rawPrevTime>=0&&o._first&&(i=!0),o._rawPrevTime=a;else{if(o._rawPrevTime=o._duration||!b||a||o._rawPrevTime===a?a:e,0===a&&f)for(d=o._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,o._initted||(i=!0)}else o._totalTime=o._time=o._rawPrevTime=a;if(o._time!==p&&o._first||c||i||l){if(o._initted||(o._initted=!0),o._active||!o._paused&&o._time!==p&&a>0&&(o._active=!0),0===p&&o.vars.onStart&&(0===o._time&&o._duration||b||o._callback("onStart")),m=o._time,m>=p)for(d=o._first;d&&(g=d._next,m===o._time&&(!o._paused||t));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&(o.pause(),o._pauseTime=n),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=o._last;d&&(g=d._prev,m===o._time&&(!o._paused||t));){if(d._active||d._startTime<=p&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>o._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,o.pause(),o._pauseTime=n}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}o._onUpdate&&(b||(j.length&&k(),o._callback("onUpdate"))),h&&(o._gc||(r===o._startTime||s!==o._timeScale)&&(0===o._time||q>=o.totalDuration())&&(f&&(j.length&&k(),o._timeline.autoRemoveChildren&&o._enabled(!1,!1),o._active=!1),!b&&o.vars[h]&&o._callback(h)))}},s._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},s.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},s.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},s.recent=function(){return this._recent},s._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},s.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},s._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},s.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},s.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},s._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},s.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},s.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},s.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this,f=e._last,g=999999999999;f;)b=f._prev,f._dirty&&f.totalDuration(),f._startTime>g&&e._sortChildren&&!f._paused&&!e._calculatingDuration?(e._calculatingDuration=1,e.add(f,f._startTime-f._delay),e._calculatingDuration=0):g=f._startTime,f._startTime<0&&!f._paused&&(d-=f._startTime,e._timeline.smoothChildTiming&&(e._startTime+=f._startTime/e._timeScale,e._time-=f._startTime,e._totalTime-=f._startTime,e._rawPrevTime-=f._startTime),e.shiftChildren(-f._startTime,!1,-9999999999),g=0),c=f._startTime+f._totalDuration/f._timeScale,c>d&&(d=c),f=b;e._duration=e._totalDuration=d,e._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},s.paused=function(b){if(b===!1&&this._paused)for(var c=this._first;c;)c._startTime===this._time&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},s.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},s.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=!!this.vars.yoyo,this._dirty=!0},e=1e-8,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="2.1.3",k.invalidate=function(){return this._yoyo=!!this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1,lazy:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time===f.target.time()||d!==f.duration()||f.isFromTo||f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale).render(f.time(),!0,!0),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.isFromTo=1,d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o,p=this,q=p._time,r=p._dirty?p.totalDuration():p._totalDuration,s=p._duration,t=p._totalTime,u=p._startTime,v=p._timeScale,w=p._rawPrevTime,x=p._paused,y=p._cycle;if(q!==p._time&&(a+=p._time-q),a>=r-e&&a>=0)p._locked||(p._totalTime=r,p._cycle=p._repeat),p._reversed||p._hasPausedChild()||(f=!0,j="onComplete",k=!!p._timeline.autoRemoveChildren,0===p._duration&&(0>=a&&a>=-e||0>w||w===e)&&w!==a&&p._first&&(k=!0,w>e&&(j="onReverseComplete"))),p._rawPrevTime=p._duration||!b||a||p._rawPrevTime===a?a:e,p._yoyo&&1&p._cycle?p._time=a=0:(p._time=s,a=s+1e-4);else if(e>a)if(p._locked||(p._totalTime=p._cycle=0),p._time=0,a>-e&&(a=0),(0!==q||0===s&&w!==e&&(w>0||0>a&&w>=0)&&!p._locked)&&(j="onReverseComplete",f=p._reversed),0>a)p._active=!1,p._timeline.autoRemoveChildren&&p._reversed?(k=f=!0,j="onReverseComplete"):w>=0&&p._first&&(k=!0),p._rawPrevTime=a;else{if(p._rawPrevTime=s||!b||a||p._rawPrevTime===a?a:e,0===a&&f)for(d=p._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,p._initted||(k=!0)}else 0===s&&0>w&&(k=!0),p._time=p._rawPrevTime=a,p._locked||(p._totalTime=a,0!==p._repeat&&(l=s+p._repeatDelay,p._cycle=p._totalTime/l>>0,p._cycle&&p._cycle===p._totalTime/l&&a>=t&&p._cycle--,p._time=p._totalTime-p._cycle*l,p._yoyo&&1&p._cycle&&(p._time=s-p._time),p._time>s?(p._time=s,a=s+1e-4):p._time<0?p._time=a=0:a=p._time));if(p._hasPause&&!p._forcingPlayhead&&!b){if(a=p._time,a>q||p._repeat&&y!==p._cycle)for(d=p._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===p._rawPrevTime||(m=d),d=d._next;else for(d=p._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&(o=p._startTime+(p._reversed?p._duration-m._startTime:m._startTime)/p._timeScale,m._startTime<s&&(p._time=p._rawPrevTime=a=m._startTime,p._totalTime=a+p._cycle*(p._totalDuration+p._repeatDelay)))}if(p._cycle!==y&&!p._locked){var z=p._yoyo&&0!==(1&y),A=z===(p._yoyo&&0!==(1&p._cycle)),B=p._totalTime,C=p._cycle,D=p._rawPrevTime,E=p._time;if(p._totalTime=y*s,p._cycle<y?z=!z:p._totalTime+=s,p._time=q,p._rawPrevTime=0===s?w-1e-4:w,p._cycle=y,p._locked=!0,q=z?0:s,p.render(q,b,0===s),b||p._gc||p.vars.onRepeat&&(p._cycle=C,p._locked=!1,p._callback("onRepeat")),q!==p._time)return;if(A&&(p._cycle=y,p._locked=!0,q=z?s+1e-4:-1e-4,p.render(q,!0,!1)),p._locked=!1,p._paused&&!x)return;p._time=E,p._totalTime=B,p._cycle=C,p._rawPrevTime=D}if(!(p._time!==q&&p._first||c||k||m))return void(t!==p._totalTime&&p._onUpdate&&(b||p._callback("onUpdate")));if(p._initted||(p._initted=!0),p._active||!p._paused&&p._totalTime!==t&&a>0&&(p._active=!0),0===t&&p.vars.onStart&&(0===p._totalTime&&p._totalDuration||b||p._callback("onStart")),n=p._time,n>=q)for(d=p._first;d&&(i=d._next,n===p._time&&(!p._paused||x));)(d._active||d._startTime<=p._time&&!d._paused&&!d._gc)&&(m===d&&(p.pause(),p._pauseTime=o),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=p._last;d&&(i=d._prev,n===p._time&&(!p._paused||x));){if(d._active||d._startTime<=q&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>p._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,p.pause(),p._pauseTime=o}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}p._onUpdate&&(b||(g.length&&h(),p._callback("onUpdate"))),j&&(p._locked||p._gc||(u===p._startTime||v!==p._timeScale)&&(0===p._time||r>=p.totalDuration())&&(f&&(g.length&&h(),p._timeline.autoRemoveChildren&&p._enabled(!1,!1),p._active=!1),!b&&p.vars[j]&&p._callback(j)))},k.getActive=function(a,b,c){var d,e,f=[],g=this.getChildren(a||null==a,b||null==a,!!c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()||0},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()||0},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){if(!arguments.length)return this._time;this._dirty&&this.totalDuration();var c=this._duration,d=this._cycle,e=d*(c+this._repeatDelay);return a>c&&(a=c),this.totalTime(this._yoyo&&1&d?c-a+e:this._repeat?a+e:a,b)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+e)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){c===d&&(c=d-(d-b)/1e6),a===b&&(b=a+(c-a)/1e6),this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[0][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.9",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._mod={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0,this._overwriteProps.push(d)}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m,n=this._segCount,o=this._func,p=this._target,q=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,m=b*this._length,e=this._li,m>this._l2&&n-1>e){for(j=n-1;j>e&&(this._l2=k[++e])<=m;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(m<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=m;);0===e&&m<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,m-=this._l1,e=this._si,m>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=m;);this._s1=l[e-1],this._si=e}else if(m<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=m;);0===e&&m<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=1===b?1:(e+(m-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?n-1:n*b>>0,h=(b-c*(1/n))*n;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._mod[f]&&(i=this._mod[f](i,p)),o[f]?p[f](i):p[f]=i;if(this._autoRotate){var r,s,t,u,v,w,x,y=this._autoRotate;for(e=y.length;--e>-1;)f=y[e][2],w=y[e][3]||0,x=y[e][4]===!0?1:a,g=this._beziers[y[e][0]],r=this._beziers[y[e][1]],g&&r&&(g=g[c],r=r[c],s=g.a+(g.b-g.a)*h,u=g.b+(g.c-g.b)*h,s+=(u-s)*h,u+=(g.c+(g.d-g.c)*h-u)*h,t=r.a+(r.b-r.a)*h,v=r.b+(r.c-r.b)*h,t+=(v-t)*h,v+=(r.c+(r.d-r.c)*h-v)*h,i=q?Math.atan2(v-t,u-s)*x+w:this._initialRotations[e],this._mod[f]&&(i=this._mod[f](i,p)),o[f]?p[f](i):p[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform,l.proxy.rotation=l.autoRotate.rotation||0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h}})}},q._mod=function(a){for(var b,c=this._overwriteProps,d=c.length;--d>-1;)b=a[c[d]],b&&"function"==typeof b&&(this._mod[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);if(d=this._autoRotate)for(c=d.length;--c>-1;)a[d[c][2]]&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="2.1.3",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,w=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,x=/(?:\d|\-|\+|=|#|\.)*/g,y=/opacity *= *([^)]*)/i,z=/opacity:([^;]*)/i,A=/alpha\(opacity *=.+?\)/i,B=/^(rgb|hsl)/,C=/([A-Z])/g,D=/-([a-z])/gi,E=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,F=function(a,b){return b.toUpperCase()},G=/(?:Left|Right|Width)/i,H=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,I=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,J=/,(?=[^\)]*(?:\(|$))/gi,K=/[\s,\(]/i,L=Math.PI/180,M=180/Math.PI,N={},O={style:{}},P=_gsScope.document||{createElement:function(){return O}},Q=function(a,b){var c=P.createElementNS?P.createElementNS(b||"http://www.w3.org/1999/xhtml",a):P.createElement(a);return c.style?c:P.createElement(a)},R=Q("div"),S=Q("img"),T=g._internals={_specialProps:i},U=(_gsScope.navigator||{}).userAgent||"",V=function(){var a=U.indexOf("Android"),b=Q("a");return m=-1!==U.indexOf("Safari")&&-1===U.indexOf("Chrome")&&(-1===a||parseFloat(U.substr(a+8,2))>3),o=m&&parseFloat(U.substr(U.indexOf("Version/")+8,2))<6,n=-1!==U.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(U))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),W=function(a){return y.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},X=function(a){_gsScope.console&&console.log(a)},Y="",Z="",$=function(a,b){b=b||R;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Z=3===d?"ms":c[d],Y="-"+Z.toLowerCase()+"-",Z+a):null},_="undefined"!=typeof window?window:P.defaultView||{getComputedStyle:function(){}},aa=function(a){return _.getComputedStyle(a)},ba=g.getStyle=function(a,b,c,d,e){var f;return V||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||aa(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(C,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):W(a)},ca=T.convertToPixels=function(a,c,d,e,f){if("px"===e||!e&&"lineHeight"!==c)return d;if("auto"===e||!d)return 0;var h,i,j,k=G.test(c),l=a,m=R.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"lineHeight"!==c||e)if("%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+ba(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||P.body,-1!==ba(l,"display").indexOf("flex")&&(m.position="absolute"),i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(R),h=parseFloat(R[k?"offsetWidth":"offsetHeight"]),l.removeChild(R),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=ca(a,c,d,e,!0))}else i=aa(a).lineHeight,a.style.lineHeight=d,h=parseFloat(aa(a).lineHeight),a.style.lineHeight=i;return o&&(h/=100),n?-h:h},da=T.calculateOffset=function(a,b,c){if("absolute"!==ba(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=ba(a,"margin"+d,c);return a["offset"+d]-(ca(a,b,parseFloat(e),e.replace(x,""))||0)},ea=function(a,b){var c,d,e,f={};if(b=b||aa(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Fa===e)&&(f[e.replace(D,F)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ea===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(D,F)]=b[c]);return V||(f.opacity=W(a)),d=Ta(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Ha&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},fa=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(w,"")?f:0:da(a,g),void 0!==j[g]&&(h=new ua(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ga={width:["Left","Right"],height:["Top","Bottom"]},ha=["marginLeft","marginRight","marginTop","marginBottom"],ia=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||aa(a))[b]||0;if(a.getCTM&&Qa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ga[b],f=e.length;for(c=c||aa(a,null);--f>-1;)d-=parseFloat(ba(a,"padding"+e[f],c,!0))||0,d-=parseFloat(ba(a,"border"+e[f]+"Width",c,!0))||0;return d},ja=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ja(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(w,"")),b.oy=parseFloat(f.replace(w,"")),b.v=a),b||a},ka=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},la=function(a,b){"function"==typeof a&&(a=a(r,q));var c="string"==typeof a&&"="===a.charAt(1);return"string"==typeof a&&"v"===a.charAt(a.length-2)&&(a=(c?a.substr(0,2):0)+window["inner"+("vh"===a.substr(-2)?"Height":"Width")]*(parseFloat(c?a.substr(2):a)/100)),null==a?b:c?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ma=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:M)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},na={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},oa=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},pa=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),na[a])c=na[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(c[3])),c[0]=oa(g+1/3,d,e),c[1]=oa(g,d,e),c[2]=oa(g-1/3,d,e);else c=a.match(s)||na.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=na.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},qa=function(a,b){var c,d,e,f=a.match(ra)||[],g=0,h="";if(!f.length)return a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=pa(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},ra="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in na)ra+="|"+j+"\\b";ra=new RegExp(ra+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+" "+a[1];ra.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=qa(a[0],b),a[1]=qa(a[1],b)),ra.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var sa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(ra)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&J.test(a)){for(o=a.replace(J,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(ra)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&J.test(a)){for(f=a.replace(J,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(","===j?u:v)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return(h&&"none"!==a?a.substr(0,a.indexOf(b[0]))||h:h)+b.join(j)+i}:function(a){return a}},ta=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},ua=(T._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=i.r(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod.call(this._tween,h.rotation,this.t,this._tween):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),va=(T._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=N;for(c._transform=null,N=b,d=k=c.parse(a,b,d,e),N=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new ua(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new ua(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},T.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof va||f.push(this.n),this.r=j?"function"==typeof j?j:Math.round:j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),wa=function(a,b,c,d,e,f){var g=new va(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},xa=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new va(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&ra.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(-1!==(d+c).indexOf("rgb")||-1!==(d+c).indexOf("hsl")?(D=D.join(" ").replace(J,", ").split(" "),E=E.join(" ").replace(J,", ").split(" ")):(D=D.join(" ").split(",").join(", ").split(" "),E=E.join(" ").split(",").join(", ").split(" ")),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,ra.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m]+"",x=parseFloat(p),x||0===x)h.appendXtra("",x,ka(u,x),u.replace(t,""),G&&-1!==u.indexOf("px")?Math.round:!1,!0);else if(e&&ra.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&V,z=u,p=pa(p,C),u=pa(u,C),y=p.length+u.length>6,y&&!V&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(V||(y=!1),C?h.appendXtra(z.substr(0,z.indexOf("hsl"))+(y?"hsla(":"hsl("),p[0],ka(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ka(u[1],p[1]),"%,",!1).appendXtra("",p[2],ka(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(z.substr(0,z.indexOf("rgb"))+(y?"rgba(":"rgb("),p[0],u[0]-p[0],",",Math.round,!0).appendXtra("",p[1],u[1]-p[1],",",Math.round).appendXtra("",p[2],u[2]-p[2],y?",":B,Math.round),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),ra.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ka(w[n],A),"",G&&"px"===p.substr(z+A.length,2)?Math.round:!1,0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},ya=9;for(j=va.prototype,j.l=j.pr=0;--ya>0;)j["xn"+ya]=0,j["xs"+ya]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new va(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var za=function(a,b){b=b||{},this.p=b.prefix?$(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||sa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.allowFunc=b.allowFunc,this.pr=b.priority||0},Aa=T._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new za(f[d],b)},Ba=T._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";Aa(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(X("Error: "+b+" js file not loaded."),f)}})}};j=za.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(J.test(c)||J.test(b)?(h=b.replace(J,"|").split("|"),i=c.replace(J,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return xa(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(ba(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){Aa(a,{parser:function(a,d,e,f,g,h,i){var j=new va(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Ca,Da="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ea=$("transform"),Fa=Y+"transform",Ga=$("transformOrigin"),Ha=null!==$("perspective"),Ia=T.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Ha?g.defaultForce3D||"auto":!1},Ja=_gsScope.SVGElement,Ka=function(a,b,c){var d,e=P.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},La=P.documentElement||{},Ma=function(){var a,b,c,d=p||/Android/i.test(U)&&!_gsScope.chrome;return P.createElementNS&&La.appendChild&&!d&&(a=Ka("svg",La),b=Ka("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ga]="50% 50%",b.style[Ea]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Ha),La.removeChild(a)),d}(),Na=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Sa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ja(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Ra&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Oa=function(a){var b,c=Q("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(La.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Oa}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),La.removeChild(c),this.style.cssText=f,b},Pa=function(a){try{return a.getBBox()}catch(b){return Oa.call(a,!0)}},Qa=function(a){return!(!Ja||!a.getCTM||a.parentNode&&!a.ownerSVGElement||!Pa(a))},Ra=[1,0,0,1,0,0],Sa=function(a,b){var c,d,e,f,g,h,i,j=a._gsTransform||new Ia,k=1e5,l=a.style;if(Ea?d=ba(a,Fa,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(H),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),j.x||0,j.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,Ea&&c&&!a.offsetParent&&a!==La&&(f=l.display,l.display="block",i=a.parentNode,i&&a.offsetParent||(g=1,h=a.nextSibling,La.appendChild(a)),d=ba(a,Fa,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?l.display=f:Xa(l,"display"),g&&(h?i.insertBefore(a,h):i?i.appendChild(a):La.removeChild(a))),(j.svg||a.getCTM&&Qa(a))&&(c&&-1!==(l[Ea]+"").indexOf("matrix")&&(d=l[Ea],c=0),e=a.getAttribute("transform"),c&&e&&(e=a.transform.baseVal.consolidate().matrix,d="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")",c=0)),c)return Ra;for(e=(d||"").match(s)||[],ya=e.length;--ya>-1;)f=Number(e[ya]),e[ya]=(g=f-(f|=0))?(g*k+(0>g?-.5:.5)|0)/k+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ta=T.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ia:new Ia,n=m.scaleX<0,o=2e-5,p=1e5,q=Ha?parseFloat(ba(a,Ga,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Qa(a)),m.svg&&(Na(a,ba(a,Ga,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Ca=g.useSVGTransformAttr||Ma),f=Sa(a),f!==Ra){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],L=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*M,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,L=E*-w+L*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*M,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,L=A*w+L*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*M,N&&(v=Math.cos(N),w=Math.sin(N),s=x*v+y*w,t=B*v+C*w,u=F*v+G*w,y=y*v-x*w,C=C*v-B*w,G=G*v-F*w,x=s,B=t,F=u),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),N=Math.atan2(B,C),m.scaleX=(Math.sqrt(x*x+y*y+z*z)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+D*D)*p+.5|0)/p,m.scaleZ=(Math.sqrt(F*F+G*G+H*H)*p+.5|0)/p,x/=m.scaleX,B/=m.scaleY,y/=m.scaleX,C/=m.scaleY,Math.abs(N)>o?(m.skewX=N*M,B=0,"simple"!==m.skewType&&(m.scaleY*=1/Math.cos(N))):m.skewX=0,m.perspective=L?1/(0>L?-L:L):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Ha||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*M:m.rotation||0,l=R||S?Math.atan2(R,S)*M+k:m.skewX||0,m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Ha&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180)),m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Ca&&a.style[Ea]?b.delayedCall(.001,function(){Xa(a.style,Ea)}):!Ca&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Ua=function(a){var b,c,d=this.data,e=-d.rotation*L,f=e+d.skewX*L,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(I,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||y.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var w,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),ya=0;4>ya;ya++)z=ha[ya],w=m[z],c=-1!==w.indexOf("px")?parseFloat(w):ca(this.t,z,parseFloat(w),w.replace(x,""))||0,A=c!==d[z]?2>ya?-d.ieOffsetX:-d.ieOffsetY:2>ya?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===ya||2===ya?1:B)))+"px"}}},Va=T.set3DTransformRatio=T.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,K=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Ca&&K||!Ha)return void(B||P||K?(B*=L,x=P*L,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*L),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*L),b=Math.sqrt(1+b*b),c*=b,f*=b)),K&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Ca&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",K&&Ca?this.t.setAttribute("transform","matrix("+u):A[Ea]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ea]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=L,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*L,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*L),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*L),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||K))return void(A[Ea]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*L,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*L,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||K)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),K&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ea]=u};j=Ia.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,Aa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j=i.scale&&"function"==typeof i.scale?i.scale:0;j&&(i.scale=j(r,a));var k,l,m,n,o,p,s,t,u,v=a._gsTransform,w=a.style,x=1e-6,y=Da.length,z=i,A={},B="transformOrigin",C=Ta(a,e,!0,z.parseTransform),D=z.transform&&("function"==typeof z.transform?z.transform(r,q):z.transform);if(C.skewType=z.skewType||C.skewType||g.defaultSkewType,d._transform=C,"rotationZ"in z&&(z.rotation=z.rotationZ),D&&"string"==typeof D&&Ea)l=R.style,l[Ea]=D,l.display="block",l.position="absolute",-1!==D.indexOf("%")&&(l.width=ba(a,"width"),l.height=ba(a,"height")),P.body.appendChild(R),k=Ta(R,null,!1),"simple"===C.skewType&&(k.scaleY*=Math.cos(k.skewX*L)),C.svg&&(p=C.xOrigin,s=C.yOrigin,k.x-=C.xOffset,k.y-=C.yOffset,(z.transformOrigin||z.svgOrigin)&&(D={},Na(a,ja(z.transformOrigin),D,z.svgOrigin,z.smoothOrigin,!0),p=D.xOrigin,s=D.yOrigin,k.x-=D.xOffset-C.xOffset,k.y-=D.yOffset-C.yOffset),(p||s)&&(t=Sa(R,!0),k.x-=p-(p*t[0]+s*t[2]),k.y-=s-(p*t[1]+s*t[3]))),P.body.removeChild(R),k.perspective||(k.perspective=C.perspective),null!=z.xPercent&&(k.xPercent=la(z.xPercent,C.xPercent)),null!=z.yPercent&&(k.yPercent=la(z.yPercent,C.yPercent));else if("object"==typeof z){if(k={scaleX:la(null!=z.scaleX?z.scaleX:z.scale,C.scaleX),scaleY:la(null!=z.scaleY?z.scaleY:z.scale,C.scaleY),scaleZ:la(z.scaleZ,C.scaleZ),x:la(z.x,C.x),y:la(z.y,C.y),z:la(z.z,C.z),xPercent:la(z.xPercent,C.xPercent),yPercent:la(z.yPercent,C.yPercent),perspective:la(z.transformPerspective,C.perspective)},o=z.directionalRotation,null!=o)if("object"==typeof o)for(l in o)z[l]=o[l];else z.rotation=o;"string"==typeof z.x&&-1!==z.x.indexOf("%")&&(k.x=0,k.xPercent=la(z.x,C.xPercent)),"string"==typeof z.y&&-1!==z.y.indexOf("%")&&(k.y=0,k.yPercent=la(z.y,C.yPercent)),k.rotation=ma("rotation"in z?z.rotation:"shortRotation"in z?z.shortRotation+"_short":C.rotation,C.rotation,"rotation",A),Ha&&(k.rotationX=ma("rotationX"in z?z.rotationX:"shortRotationX"in z?z.shortRotationX+"_short":C.rotationX||0,C.rotationX,"rotationX",A),k.rotationY=ma("rotationY"in z?z.rotationY:"shortRotationY"in z?z.shortRotationY+"_short":C.rotationY||0,C.rotationY,"rotationY",A)),k.skewX=ma(z.skewX,C.skewX),k.skewY=ma(z.skewY,C.skewY)}for(Ha&&null!=z.force3D&&(C.force3D=z.force3D,n=!0),m=C.force3D||C.z||C.rotationX||C.rotationY||k.z||k.rotationX||k.rotationY||k.perspective,m||null==z.scale||(k.scaleZ=1);--y>-1;)u=Da[y],D=k[u]-C[u],(D>x||-x>D||null!=z[u]||null!=N[u])&&(n=!0,f=new va(C,u,C[u],D,f),u in A&&(f.e=A[u]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return D="function"==typeof z.transformOrigin?z.transformOrigin(r,q):z.transformOrigin,C.svg&&(D||z.svgOrigin)&&(p=C.xOffset,s=C.yOffset,Na(a,ja(D),k,z.svgOrigin,z.smoothOrigin),f=wa(C,"xOrigin",(v?C:k).xOrigin,k.xOrigin,f,B),f=wa(C,"yOrigin",(v?C:k).yOrigin,k.yOrigin,f,B),(p!==C.xOffset||s!==C.yOffset)&&(f=wa(C,"xOffset",v?p:C.xOffset,C.xOffset,f,B),f=wa(C,"yOffset",v?s:C.yOffset,C.yOffset,f,B)),D="0px 0px"),(D||Ha&&m&&C.zOrigin)&&(Ea?(n=!0,u=Ga,D||(D=(ba(a,u,e,!1,"50% 50%")+"").split(" "),D=D[0]+" "+D[1]+" "+C.zOrigin+"px"),D+="",f=new va(w,u,0,0,f,-1,B),f.b=w[u],f.plugin=h,Ha?(l=C.zOrigin,D=D.split(" "),C.zOrigin=(D.length>2?parseFloat(D[2]):l)||0,f.xs0=f.e=D[0]+" "+(D[1]||"50%")+" 0px",f=new va(C,"zOrigin",0,0,f,-1,f.n),f.b=l,f.xs0=f.e=C.zOrigin):f.xs0=f.e=D):ja(D+"",C)),n&&(d._transformType=C.svg&&Ca||!m&&3!==this._transformType?2:3),j&&(i.scale=j),f},allowFunc:!0,prefix:!0}),Aa("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),Aa("clipPath",{defaultValue:"inset(0%)",prefix:!0,multi:!0,formatter:sa("inset(0% 0% 0% 0%)",!1,!0)}),Aa("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=$(y[j])),m=l=ba(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=ca(a,"borderLeft",o,t),w=ca(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=ca(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=xa(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:sa("0px 0px 0px 0px",!1,!0)}),Aa("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return xa(a.style,c,this.format(ba(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:sa("0px 0px",!1,!0)}),Aa("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||aa(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=ba(a,"backgroundImage").replace(E,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),S.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-S.width:a.offsetHeight-S.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ja}),Aa("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="","co"===a.substr(0,2)?a:ja(-1===a.indexOf(" ")?a+" "+a:a)}}),Aa("perspective",{defaultValue:"0px",prefix:!0}),Aa("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),Aa("transformStyle",{prefix:!0}),Aa("backfaceVisibility",{prefix:!0}),Aa("userSelect",{prefix:!0}),Aa("margin",{parser:ta("marginTop,marginRight,marginBottom,marginLeft")}),Aa("padding",{parser:ta("paddingTop,paddingRight,paddingBottom,paddingLeft")}),Aa("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(ba(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),Aa("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),Aa("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),Aa("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=ba(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(x,"");return"px"!==j&&(h=parseFloat(h)/ca(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+ba(a,"borderTopStyle",e,!1,"solid")+" "+ba(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(ra)||["#000"])[0]}}),Aa("borderWidth",{parser:ta("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),Aa("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new va(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Wa=function(a){var b,c=this.t,d=c.filter||ba(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!ba(this.data,"filter")):(c.filter=d.replace(A,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(y,"opacity="+e))};Aa("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(ba(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===ba(a,"visibility",e)&&0!==b&&(h=0),V?f=new va(i,"opacity",h,b-h,f):(f=new va(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Wa),j&&(f=new va(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Xa=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(C,"-$1").toLowerCase())):a.removeAttribute(b))},Ya=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Xa(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};Aa("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new va(a,d,0,0,g,2),g.setRatio=Ya,g.pr=-11,c=!0,g.b=o,k=ea(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=fa(a,k,ea(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText!==p&&(a.style.cssText=p),g=g.xfirst=f.parse(a,j.difs,g,h)}});var Za=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ga:i[c].p),Xa(g,c);e&&(Xa(g,Ea),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(Aa("clearProps",{parser:function(a,b,d,e,f){return f=new va(a,d,0,0,f,2),f.setRatio=Za,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),ya=j.length;ya--;)Ba(j[ya]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=aa(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,y,A=a.style;if(l&&""===A.zIndex&&(n=ba(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ea(a,e),A.cssText=t+";"+b,n=fa(a,n,ea(a)).difs,!V&&z.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(y=3===this._transformType,Ea?m&&(l=!0,""===A.zIndex&&(w=ba(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(y?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new va(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ea?Va:Ua,x.data=this._transform||Ta(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b){if(n=b[g],h=i[g],"function"!=typeof n||h&&h.allowFunc||(n=n(r,q)),h)c=h.parse(a,n,g,this,c,f,b);else{if("--"===g.substr(0,2)){this._tween._propLookup[g]=this._addTween.call(this._tween,a.style,"setProperty",aa(a).getPropertyValue(g)+"",n+"",g,!1,g);continue}m=ba(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&B.test(n)?(s||(n=pa(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=xa(u,g,m,n,!0,"transparent",c,0,f)):s&&K.test(n)?c=xa(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ia(a,g,e),o="px"):"left"===g||"top"===g?(j=da(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(x,"")):(l=parseFloat(n),p=s?n.replace(x,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&(""!==p||"lineHeight"===g)&&(l||0===l)&&j&&(j=ca(a,g,j,o),"%"===p?(j/=ca(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=ca(a,g,1,p):"px"!==p&&(l=ca(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new va(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):X("invalid "+g+" tween value: "+b[g]):(c=new va(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))}f&&c&&!c.plugin&&(c.plugin=f)}return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=e.r(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=e.r(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ta(this._target,e,!0),this._transformType=this._transform.svg&&Ca||!a&&3!==this._transformType?2:3};var $a=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new va(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=$a,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&(b.r=a[b.p]),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var _a=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)_a(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ea(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||_a(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,_a(a,k,m),i.render(c,!0,!0),_a(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=fa(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.7.0",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){var b=1>a?Math.pow(10,(a+"").length-2):1;return function(c){return(Math.round(c/a)*a*b|0)/b}},c=function(a,b){for(;a;)a.f||a.blob||(a.m=b||Math.round),a=a._next},d=a.prototype;d._onInitAllProps=function(){var a,d,e,f,g=this._tween,h=g.vars.roundProps,i={},j=g._propLookup.roundProps;if("object"!=typeof h||h.push)for("string"==typeof h&&(h=h.split(",")),e=h.length;--e>-1;)i[h[e]]=Math.round;else for(f in h)i[f]=b(h[f]);for(f in i)for(a=g._firstPT;a;)d=a._next,a.pg?a.t._mod(i):a.n===f&&(2===a.f&&a.t?c(a.t._firstPT,i[f]):(this._add(a.t,f,a.s,a.c,i[f]),d&&(d._prev=a._prev),a._prev?a._prev._next=d:g._firstPT===a&&(g._firstPT=d),a._next=a._prev=null,g._propLookup[f]=j)),a=d;return!1},d._add=function(a,b,c,d,e){this._addTween(a,b,c,c+d,b,e||Math.round),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(a,b,c,d){var e,f;if("function"!=typeof a.setAttribute)return!1;for(e in b)f=b[e],"function"==typeof f&&(f=f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e)+"",f+"",e,!1,e),this._overwriteProps.push(e);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(a,b,c,d){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k=b.useRadians===!0?2*Math.PI:360,l=1e-6;for(e in b)"useRadians"!==e&&(h=b[e],"function"==typeof h&&(h=h(d,a)),j=(h+"").split("_"),f=j[0],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,j.length&&(f=j.join("_"),-1!==f.indexOf("short")&&(i%=k,i!==i%(k/2)&&(i=0>i?i+k:i-k)),-1!==f.indexOf("_cw")&&0>i?i=(i+9999999999*k)%k-(i/k|0)*k:-1!==f.indexOf("ccw")&&i>0&&(i=(i-9999999999*k)%k-(i/k|0)*k)),(i>l||-l>i)&&(this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e,f=_gsScope.GreenSockGlobals||_gsScope,g=f.com.greensock,h=2*Math.PI,i=Math.PI/2,j=g._class,k=function(b,c){var d=j("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},l=a.register||function(){},m=function(a,b,c,d,e){var f=j("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return l(f,a),f},n=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},o=function(b,c){var d=j("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},p=m("Back",o("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),o("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),o("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),q=j("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),r=q.prototype=new a;return r.constructor=q,r.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1===a?0:1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},q.ease=new q(.7,.7),r.config=q.config=function(a,b,c){return new q(a,b,c)},b=j("easing.SteppedEase",function(a,b){a=a||1,this._p1=1/a,this._p2=a+(b?0:1),this._p3=b?1:0},!0),r=b.prototype=new a,r.constructor=b,r.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),((this._p2*a|0)+this._p3)*this._p1},r.config=b.config=function(a,c){return new b(a,c)},c=j("easing.ExpoScaleEase",function(a,b,c){this._p1=Math.log(b/a),this._p2=b-a,this._p3=a,this._ease=c},!0),r=c.prototype=new a,r.constructor=c,r.getRatio=function(a){return this._ease&&(a=this._ease.getRatio(a)),(this._p3*Math.exp(this._p1*a)-this._p3)/this._p2},r.config=c.config=function(a,b,d){return new c(a,b,d)},d=j("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),m=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--m>-1;)c=o?Math.random():1/l*m,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:m%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new n(1,1,null),m=l;--m>-1;)g=j[m],h=new n(g.x,g.y,h);this._prev=new n(0,0,0!==h.t?h:h.next)},!0),r=d.prototype=new a,r.constructor=d,r.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},r.config=function(a){return new d(a)},d.ease=new d,m("Bounce",k("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),k("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),k("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),m("Circ",k("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),k("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),k("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),e=function(b,c,d){var e=j("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/h*(Math.asin(1/this._p1)||0),this._p2=h/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},m("Elastic",e("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),e("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),e("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),m("Expo",k("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),k("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),k("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),m("Sine",k("SineOut",function(a){return Math.sin(a*i)}),k("SineIn",function(a){return-Math.cos(a*i)+1}),k("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),j("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),l(f.SlowMo,"SlowMo","ease,"),l(d,"RoughEase","ease,"),l(b,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a,f=e[b];if(f)return"undefined"!=typeof module&&module.exports&&(module.exports=f),f;var g,h,i,j,k,l=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},m=l("com.greensock"),n=1e-8,o=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},p=function(){},q=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),r={},s=function(d,f,g,h){this.sc=r[d]?r[d].sc:[],r[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var k,m,n,o,p=f.length,q=p;--p>-1;)(k=r[f[p]]||new s(f[p],[])).gsClass?(i[p]=k.gsClass,q--):j&&k.sc.push(this);if(0===q&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=l(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,"undefined"!=typeof module&&module.exports)if(d===b){module.exports=c[b]=o;for(p in c)o[p]=c[p]}else c[b]&&(c[b][n]=o);else"function"==typeof define&&define.amd&&define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return o});for(p=0;p<this.sc.length;p++)this.sc[p].check()}},this.check(!0)},t=a._gsDefine=function(a,b,c,d){return new s(a,b,c,d)},u=m._class=function(a,b,c){return b=b||function(){},t(a,[],function(){return b},c),b};t.globals=e;var v=[0,0,1,1],w=u("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?v.concat(b):v},!0),x=w.map={},y=w.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?u("easing."+f,null,!0):m.easing[f]||{},g=k.length;--g>-1;)h=k[g],x[f+"."+h]=x[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(i=w.prototype,i._calcEnd=!1,i.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},g=["Linear","Quad","Cubic","Quart","Quint,Strong"],h=g.length;--h>-1;)i=g[h]+",Power"+h,y(new w(null,null,1,h),i,"easeOut",!0),y(new w(null,null,2,h),i,"easeIn"+(0===h?",easeNone":"")),y(new w(null,null,3,h),i,"easeInOut");x.linear=m.easing.Linear.easeIn,x.swing=m.easing.Quad.easeInOut;var z=u("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});i=z.prototype,i.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],i=0;for(this!==j||k||j.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===i&&f.pr<e&&(i=g+1);h.splice(i,0,{c:b,s:c,up:d,pr:e})},i.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},i.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var A=a.requestAnimationFrame,B=a.cancelAnimationFrame,C=Date.now||function(){return(new Date).getTime()},D=C();for(g=["ms","moz","webkit","o"],h=g.length;--h>-1&&!A;)A=a[g[h]+"RequestAnimationFrame"],B=a[g[h]+"CancelAnimationFrame"]||a[g[h]+"CancelRequestAnimationFrame"];u("Ticker",function(a,b){var c,e,f,g,h,i=this,l=C(),m=b!==!1&&A?"auto":!1,o=500,q=33,r="tick",s=function(a){var b,d,j=C()-D;j>o&&(l+=j-q),D+=j,i.time=(D-l)/1e3,b=i.time-h,(!c||b>0||a===!0)&&(i.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&i.dispatchEvent(r)};z.call(i),i.time=i.frame=0,i.tick=function(){s(!0)},i.lagSmoothing=function(a,b){return arguments.length?(o=a||1/n,void(q=Math.min(b,o,0))):1/n>o},i.sleep=function(){null!=f&&(m&&B?B(f):clearTimeout(f),e=p,f=null,i===j&&(k=!1))},i.wake=function(a){null!==f?i.sleep():a?l+=-D+(D=C()):i.frame>10&&(D=C()-o+5),e=0===c?p:m&&A?A:function(a){return setTimeout(a,1e3*(h-i.time)+1|0)},i===j&&(k=!0),s(2)},i.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void i.wake()):c},i.useRAF=function(a){return arguments.length?(i.sleep(),m=a,void i.fps(c)):m},i.fps(a),setTimeout(function(){"auto"===m&&i.frame<5&&"hidden"!==(d||{}).visibilityState&&i.useRAF(!1)},1500)}),i=m.Ticker.prototype=new m.events.EventDispatcher,i.constructor=m.Ticker;var E=u("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=!!b.immediateRender,this.data=b.data,this._reversed=!!b.reversed,Z){k||j.wake();var c=this.vars.useFrames?Y:Z;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});j=E.ticker=new m.Ticker,i=E.prototype,i._dirty=i._gc=i._initted=i._paused=!1,i._totalTime=i._time=0,i._rawPrevTime=-1,i._next=i._last=i._onUpdate=i._timeline=i.timeline=null,i._paused=!1;var F=function(){k&&C()-D>2e3&&("hidden"!==(d||{}).visibilityState||!j.lagSmoothing())&&j.wake();var a=setTimeout(F,2e3);a.unref&&a.unref()};F(),i.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},i.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},i.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},i.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},i.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},i.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},i.render=function(a,b,c){},i.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},i.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale-n},i._enabled=function(a,b){return k||j.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},i._kill=function(a,b){return this._enabled(!1,!1)},i.kill=function(a,b){return this._kill(a,b),this},i._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},i._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},i._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},i.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=q(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},i.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},i.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},i.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},i.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},i.totalTime=function(a,b,c){if(k||j.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(K.length&&_(),this.render(a,b,!1),K.length&&_())}return this},i.progress=i.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},i.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},i.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},i.timeScale=function(a){if(!arguments.length)return this._timeScale;var b,c;for(a=a||n,this._timeline&&this._timeline.smoothChildTiming&&(b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime(),this._startTime=c-(c-this._startTime)*this._timeScale/a),this._timeScale=a,c=this.timeline;c&&c.timeline;)c._dirty=!0,c.totalDuration(),c=c.timeline;return this},i.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},i.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(k||a||j.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var G=u("core.SimpleTimeline",function(a){E.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});i=G.prototype=new E,i.constructor=G,i.kill()._gc=!1,i._first=i._last=i._recent=null,i._sortChildren=!1,i.add=i.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=this.rawTime()-(a._timeline.rawTime()-a._pauseTime)),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},i._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},i.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused&&!e._gc)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},i.rawTime=function(){return k||j.wake(),this._totalTime};var H=u("TweenLite",function(b,c,d){if(E.call(this,c,d),this.render=H.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:H.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?X[H.defaultOverwrite]:"number"==typeof i?i>>0:X[i],(h||b instanceof Array||b.push&&q(b))&&"number"!=typeof b[0])for(this._targets=g=o(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(o(f))):(this._siblings[e]=aa(f,this,!1),1===i&&this._siblings[e].length>1&&ca(f,this,null,1,this._siblings[e])):(f=g[e--]=H.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=aa(b,this,!1),1===i&&this._siblings.length>1&&ca(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-n,this.render(Math.min(0,-this._delay)))},!0),I=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},J=function(a,b){var c,d={};for(c in a)W[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!T[c]||T[c]&&T[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};i=H.prototype=new E,i.constructor=H,i.kill()._gc=!1,i.ratio=0,i._firstPT=i._targets=i._overwrittenProps=i._startAt=null,i._notifyPluginsOfEnabled=i._lazy=!1,H.version="2.1.3",H.defaultEase=i._ease=new w(null,null,1,1),H.defaultOverwrite="auto",H.ticker=j,H.autoSleep=120,H.lagSmoothing=function(a,b){j.lagSmoothing(a,b)},H.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(H.selector=c,c(b)):(d||(d=a.document),d?d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b):b)};var K=[],L={},M=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,N=/[\+-]=-?[\.\d]/,O=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a&&null!=this.end?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m.call(this._tween,b,this._target||c.t,this._tween):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},P=function(a){return(1e3*a|0)/1e3+""},Q=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(M)||[],f=b.match(M)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:P}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=O,N.test(b)&&(l.end=null),l},R=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=Q(m,n?parseFloat(o.s)+o.c+(o.s+"").replace(/[0-9\-\.]/g,""):d,h||H.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},S=H._internals={isArray:q,isSelector:I,lazyTweens:K,blobDif:Q},T=H._plugins={},U=S.tweenLookup={},V=0,W=S.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1,stagger:1},X={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},Y=E._rootFramesTimeline=new G,Z=E._rootTimeline=new G,$=30,_=S.lazyRender=function(){var a,b,c=K.length;for(L={},a=0;c>a;a++)b=K[a],b&&b._lazy!==!1&&(b.render(b._lazy[0],b._lazy[1],!0),b._lazy=!1);K.length=0};Z._startTime=j.time,Y._startTime=j.frame,Z._active=Y._active=!0,setTimeout(_,1),E._updateRoot=H.render=function(){var a,b,c;if(K.length&&_(),Z.render((j.time-Z._startTime)*Z._timeScale,!1,!1),Y.render((j.frame-Y._startTime)*Y._timeScale,!1,!1),K.length&&_(),j.frame>=$){$=j.frame+(parseInt(H.autoSleep,10)||120);for(c in U){for(b=U[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete U[c]}if(c=Z._first,(!c||c._paused)&&H.autoSleep&&!Y._first&&1===j._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||j.sleep()}}},j.addEventListener("tick",E._updateRoot);var aa=function(a,b,c){var d,e,f=a._gsTweenID;if(U[f||(a._gsTweenID=f="t"+V++)]||(U[f]={target:a,tweens:[]}),b&&(d=U[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return U[f].tweens},ba=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=H.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},ca=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+n,l=[],m=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||da(b,0,o),0===da(h,j,o)&&(l[m++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2*n||(l[m++]=h)));for(f=m;--f>-1;)if(h=l[f],i=h._firstPT,2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted&&i){if(2!==d&&!ba(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},da=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*n>f-b?n:(f+=a.totalDuration()/a._timeScale/e)>b+n?0:f-b-n};i._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease,l=this._startAt;if(g.startAt){l&&(l.render(-1,!0),l.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.data="isStart",e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,e.onUpdate=g.onUpdate,e.onUpdateParams=g.onUpdateParams,e.onUpdateScope=g.onUpdateScope||g.callbackScope||this,this._startAt=H.to(this.target||{},0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(l)l.render(-1,!0),l.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)W[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=H.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof w?k:"function"==typeof k?new w(k,g.easeParams):x[k]||H.defaultEase:H.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&H._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},i._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;L[b._gsTweenID]&&_(),this.vars.css||b.style&&b!==a&&b.nodeType&&T.css&&this.vars.autoCSS!==!1&&J(this.vars,b);for(g in this.vars)if(l=this.vars[g],W[g])l&&(l instanceof Array||l.push&&q(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(T[g]&&(j=new T[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=R.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&ca(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(L[b._gsTweenID]=!0),i)},i.render=function(a,b,c){var d,e,f,g,h=this,i=h._time,j=h._duration,k=h._rawPrevTime;if(a>=j-n&&a>=0)h._totalTime=h._time=j,h.ratio=h._ease._calcEnd?h._ease.getRatio(1):1,h._reversed||(d=!0,e="onComplete",c=c||h._timeline.autoRemoveChildren),0===j&&(h._initted||!h.vars.lazy||c)&&(h._startTime===h._timeline._duration&&(a=0),(0>k||0>=a&&a>=-n||k===n&&"isPause"!==h.data)&&k!==a&&(c=!0,k>n&&(e="onReverseComplete")),h._rawPrevTime=g=!b||a||k===a?a:n);else if(n>a)h._totalTime=h._time=0,h.ratio=h._ease._calcEnd?h._ease.getRatio(0):0,(0!==i||0===j&&k>0)&&(e="onReverseComplete",d=h._reversed),a>-n?a=0:0>a&&(h._active=!1,0===j&&(h._initted||!h.vars.lazy||c)&&(k>=0&&(k!==n||"isPause"!==h.data)&&(c=!0),h._rawPrevTime=g=!b||a||k===a?a:n)),(!h._initted||h._startAt&&h._startAt.progress())&&(c=!0);else if(h._totalTime=h._time=a,h._easeType){var l=a/j,m=h._easeType,o=h._easePower;(1===m||3===m&&l>=.5)&&(l=1-l),3===m&&(l*=2),1===o?l*=l:2===o?l*=l*l:3===o?l*=l*l*l:4===o&&(l*=l*l*l*l),h.ratio=1===m?1-l:2===m?l:.5>a/j?l/2:1-l/2}else h.ratio=h._ease.getRatio(a/j);if(h._time!==i||c){if(!h._initted){if(h._init(),!h._initted||h._gc)return;if(!c&&h._firstPT&&(h.vars.lazy!==!1&&h._duration||h.vars.lazy&&!h._duration))return h._time=h._totalTime=i,h._rawPrevTime=k,K.push(h),void(h._lazy=[a,b]);h._time&&!d?h.ratio=h._ease.getRatio(h._time/j):d&&h._ease._calcEnd&&(h.ratio=h._ease.getRatio(0===h._time?0:1))}for(h._lazy!==!1&&(h._lazy=!1),h._active||!h._paused&&h._time!==i&&a>=0&&(h._active=!0),0===i&&(h._startAt&&(a>=0?h._startAt.render(a,!0,c):e||(e="_dummyGS")),h.vars.onStart&&(0!==h._time||0===j)&&(b||h._callback("onStart"))),f=h._firstPT;f;)f.f?f.t[f.p](f.c*h.ratio+f.s):f.t[f.p]=f.c*h.ratio+f.s,f=f._next;h._onUpdate&&(0>a&&h._startAt&&a!==-1e-4&&h._startAt.render(a,!0,c),b||(h._time!==i||d||c)&&h._callback("onUpdate")),e&&(!h._gc||c)&&(0>a&&h._startAt&&!h._onUpdate&&a!==-1e-4&&h._startAt.render(a,!0,c),d&&(h._timeline.autoRemoveChildren&&h._enabled(!1,!1),h._active=!1),!b&&h.vars[e]&&h._callback(e),0===j&&h._rawPrevTime===n&&g!==n&&(h._rawPrevTime=0))}},i._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:H.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline,n=this._firstPT;if((q(b)||I(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(H.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!ba(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&n&&this._enabled(!1,!1)}}return i},i.invalidate=function(){this._notifyPluginsOfEnabled&&H._onPluginEvent("_onDisable",this);var a=this._time;return this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],E.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-n,this.render(a,!1,this.vars.lazy!==!1)),this},i._enabled=function(a,b){if(k||j.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=aa(d[c],this,!0);else this._siblings=aa(this.target,this,!0)}return E.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?H._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},H.to=function(a,b,c){return new H(a,b,c)},H.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new H(a,b,c)},H.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new H(a,b,d)},H.delayedCall=function(a,b,c,d,e){return new H(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},H.set=function(a,b){return new H(a,0,b)},H.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:H.selector(a)||a;var c,d,e,f;if((q(a)||I(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(H.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else if(a._gsTweenID)for(d=aa(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d||[]},H.killTweensOf=H.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=H.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var ea=u("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ea.prototype},!0);if(i=ea.prototype,ea.version="1.19.0",ea.API=2,i._firstPT=null,i._addTween=R,i.setRatio=O,i._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},i._mod=i._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},H._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},ea.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===ea.API&&(T[(new a[b])._propName]=a[b]);return!0},t.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=u("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ea.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new ea(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,ea.activate([g]),g},g=a._gsQueue){for(h=0;h<g.length;h++)g[h]();for(i in r)r[i].func||a.console.log("GSAP encountered missing dependency: "+i)}k=!1}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/* CUSTOM BOUNCE */
/*!
 * VERSION: 0.2.1
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.CustomBounce",["easing.CustomEase"],function(a){var b,c=function(a){var b,c=a.length,d=1/a[c-2],e=1e3;for(b=2;c>b;b+=2)a[b]=(a[b]*d*e|0)/e;a[c-2]=1},d=function(b,c){this.vars=c=c||{},c.squash&&(this.squash=new a(c.squashID||b+"-squash")),a.call(this,b),this.bounce=this,this.update(c)};return d.prototype=b=new a,b.constructor=d,b.update=function(b){b=b||this.vars;var d,e,f,g,h,i,j,k=.999,l=Math.min(k,b.strength||.7),m=l,n=(b.squash||0)/100,o=n,p=1/.03,q=.2,r=1,s=.1,t=[0,0,.07,0,.1,1,.1,1],u=[0,0,0,0,.1,0,.1,0];for(h=0;200>h&&(q*=m*((m+1)/2),r*=l*l,i=s+q,f=s+.49*q,g=1-r,d=s+r/p,e=f+.8*(f-d),n&&(s+=n,d+=n,f+=n,e+=n,i+=n,j=n/o,u.push(s-n,0,s-n,j,s-n/2,j,s,j,s,0,s,0,s,j*-.6,s+(i-s)/6,0,i,0),t.push(s-n,1,s,1,s,1),n*=l*l),t.push(s,1,d,g,f,g,e,g,i,1,i,1),l*=.95,p=r/(i-e),s=i,!(g>k));h++);if(b.endAtStart){if(f=-.1,t.unshift(f,1,f,1,-.07,0),o)for(n=2.5*o,f-=n,t.unshift(f,1,f,1,f,1),u.splice(0,6),u.unshift(f,0,f,0,f,1,f+n/2,1,f+n,1,f+n,0,f+n,0,f+n,-.6,f+n+.033,0),h=0;h<u.length;h+=2)u[h]-=f;for(h=0;h<t.length;h+=2)t[h]-=f,t[h+1]=1-t[h+1]}return n&&(c(u),u[2]="C"+u[2],this.squash||(this.squash=new a(b.squashID||this.id+"-squash")),this.squash.setData("M"+u.join(","))),c(t),t[2]="C"+t[2],this.setData("M"+t.join(","))},d.create=function(a,b){return new d(a,b)},d.version="0.2.1",d},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("./CustomEase.min.js"),require("../TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite","CustomEase"],b)}("CustomBounce");
/* CUSTOM EASE */
/*!
 * VERSION: 0.2.2
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.CustomEase",["easing.Ease"],function(a){var b=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,c=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,d=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,e=/[cLlsS]/g,f="CustomEase only accepts Cubic Bezier data.",g=function(a,b,c,d,e,f,h,i,j,k,l){var m,n=(a+c)/2,o=(b+d)/2,p=(c+e)/2,q=(d+f)/2,r=(e+h)/2,s=(f+i)/2,t=(n+p)/2,u=(o+q)/2,v=(p+r)/2,w=(q+s)/2,x=(t+v)/2,y=(u+w)/2,z=h-a,A=i-b,B=Math.abs((c-h)*A-(d-i)*z),C=Math.abs((e-h)*A-(f-i)*z);return k||(k=[{x:a,y:b},{x:h,y:i}],l=1),k.splice(l||k.length-1,0,{x:x,y:y}),(B+C)*(B+C)>j*(z*z+A*A)&&(m=k.length,g(a,b,n,o,t,u,x,y,j,k,l),g(x,y,v,w,r,s,h,i,j,k,l+1+(k.length-m))),k},h=function(a){var b,e,g,h,i,j,k,l,m,n,o,p=(a+"").replace(d,function(a){var b=+a;return 1e-4>b&&b>-1e-4?0:b}).match(c)||[],q=[],r=0,s=0,t=p.length,u=2;for(b=0;t>b;b++)if(m=h,isNaN(p[b])?(h=p[b].toUpperCase(),i=h!==p[b]):b--,e=+p[b+1],g=+p[b+2],i&&(e+=r,g+=s),b||(k=e,l=g),"M"===h)j&&j.length<8&&(q.length-=1,u=0),r=k=e,s=l=g,j=[e,g],u=2,q.push(j),b+=2,h="L";else if("C"===h)j||(j=[0,0]),j[u++]=e,j[u++]=g,i||(r=s=0),j[u++]=r+1*p[b+3],j[u++]=s+1*p[b+4],j[u++]=r+=1*p[b+5],j[u++]=s+=1*p[b+6],b+=6;else if("S"===h)"C"===m||"S"===m?(n=r-j[u-4],o=s-j[u-3],j[u++]=r+n,j[u++]=s+o):(j[u++]=r,j[u++]=s),j[u++]=e,j[u++]=g,i||(r=s=0),j[u++]=r+=1*p[b+3],j[u++]=s+=1*p[b+4],b+=4;else{if("L"!==h&&"Z"!==h)throw f;"Z"===h&&(e=k,g=l,j.closed=!0),("L"===h||Math.abs(r-e)>.5||Math.abs(s-g)>.5)&&(j[u++]=r+(e-r)/3,j[u++]=s+(g-s)/3,j[u++]=r+2*(e-r)/3,j[u++]=s+2*(g-s)/3,j[u++]=e,j[u++]=g,"L"===h&&(b+=2)),r=e,s=g}return q[0]},i=function(a){var b,c=a.length,d=999999999999;for(b=1;c>b;b+=6)+a[b]<d&&(d=+a[b]);return d},j=function(a,b,c){c||0===c||(c=Math.max(+a[a.length-1],+a[1]));var d,e=-1*+a[0],f=-c,g=a.length,h=1/(+a[g-2]+e),j=-b||(Math.abs(+a[g-1]-+a[1])<.01*(+a[g-2]-+a[0])?i(a)+f:+a[g-1]+f);for(j=j?1/j:-h,d=0;g>d;d+=2)a[d]=(+a[d]+e)*h,a[d+1]=(+a[d+1]+f)*j},k=function(a){var b=this.lookup[a*this.l|0]||this.lookup[this.l-1];return b.nx<a&&(b=b.n),b.y+(a-b.x)/b.cx*b.cy},l=function(b,c,d){this._calcEnd=!0,this.id=b,b&&(a.map[b]=this),this.getRatio=k,this.setData(c,d)},m=l.prototype=new a;return m.constructor=l,m.setData=function(a,c){a=a||"0,0,1,1";var d,i,k,l,m,n,o,p,q,r,s=a.match(b),t=1,u=[];if(c=c||{},r=c.precision||1,this.data=a,this.lookup=[],this.points=u,this.fast=1>=r,(e.test(a)||-1!==a.indexOf("M")&&-1===a.indexOf("C"))&&(s=h(a)),d=s.length,4===d)s.unshift(0,0),s.push(1,1),d=8;else if((d-2)%6)throw f;for((0!==+s[0]||1!==+s[d-2])&&j(s,c.height,c.originY),this.rawBezier=s,l=2;d>l;l+=6)i={x:+s[l-2],y:+s[l-1]},k={x:+s[l+4],y:+s[l+5]},u.push(i,k),g(i.x,i.y,+s[l],+s[l+1],+s[l+2],+s[l+3],k.x,k.y,1/(2e5*r),u,u.length-1);for(d=u.length,l=0;d>l;l++)o=u[l],p=u[l-1]||o,o.x>p.x||p.y!==o.y&&p.x===o.x||o===p?(p.cx=o.x-p.x,p.cy=o.y-p.y,p.n=o,p.nx=o.x,this.fast&&l>1&&Math.abs(p.cy/p.cx-u[l-2].cy/u[l-2].cx)>2&&(this.fast=!1),p.cx<t&&(p.cx?t=p.cx:(p.cx=.001,l===d-1&&(p.x-=.001,t=Math.min(t,.001),this.fast=!1)))):(u.splice(l--,1),d--);if(d=1/t+1|0,this.l=d,m=1/d,n=0,o=u[0],this.fast){for(l=0;d>l;l++)q=l*m,o.nx<q&&(o=u[++n]),i=o.y+(q-o.x)/o.cx*o.cy,this.lookup[l]={x:q,cx:m,y:i,cy:0,nx:9},l&&(this.lookup[l-1].cy=i-this.lookup[l-1].y);this.lookup[d-1].cy=u[u.length-1].y-i}else{for(l=0;d>l;l++)o.nx<l*m&&(o=u[++n]),this.lookup[l]=o;n<u.length-1&&(this.lookup[l-1]=u[u.length-2])}return this._calcEnd=1!==u[u.length-1].y||0!==u[0].y,this},m.getRatio=k,m.getSVGData=function(a){return l.getSVGData(this,a)},l.create=function(a,b,c){return new l(a,b,c)},l.version="0.2.2",l.bezierToPoints=g,l.get=function(b){return a.map[b]},l.getSVGData=function(b,c){c=c||{};var d,e,f,g,h,i,j,k,l,m,n=1e3,o=c.width||100,p=c.height||100,q=c.x||0,r=(c.y||0)+p,s=c.path;if(c.invert&&(p=-p,r=0),b=b.getRatio?b:a.map[b]||console.log("No ease found: ",b),b.rawBezier){for(d=[],j=b.rawBezier.length,f=0;j>f;f+=2)d.push(((q+b.rawBezier[f]*o)*n|0)/n+","+((r+b.rawBezier[f+1]*-p)*n|0)/n);d[0]="M"+d[0],d[1]="C"+d[1]}else for(d=["M"+q+","+r],j=Math.max(5,200*(c.precision||1)),g=1/j,j+=2,k=5/j,l=((q+g*o)*n|0)/n,m=((r+b.getRatio(g)*-p)*n|0)/n,e=(m-r)/(l-q),f=2;j>f;f++)h=((q+f*g*o)*n|0)/n,i=((r+b.getRatio(f*g)*-p)*n|0)/n,(Math.abs((i-m)/(h-l)-e)>k||f===j-1)&&(d.push(l+","+m),e=(i-m)/(h-l)),l=h,m=i;return s&&("string"==typeof s?document.querySelector(s):s).setAttribute("d",d.join(" ")),d.join(" ")},l},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("../TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite"],b)}("CustomEase");
/* CUSTOM WIGGLE */
/*!
 * VERSION: 0.2.1
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.CustomWiggle",["easing.CustomEase","easing.Ease"],function(a,b){var c,d={easeOut:new a("","M0,1,C0.7,1,0.6,0,1,0"),easeInOut:new a("","M0,0,C0.104,0,0.242,1,0.444,1,0.644,1,0.608,0,1,0"),anticipate:new a("","M0,0,C0,0.222,0.024,0.386,0.06,0.402,0.181,0.455,0.647,0.646,0.7,0.67,0.9,0.76,1,0.846,1,1"),uniform:new a("","M0,0,C0,0.95,0.01,1,0.01,1,0.01,1,1,1,1,1,1,1,1,0.01,1,0")},e=new a,f=function(c,d){return c=c.getRatio?c:b.map[c]||new a("",c),c.rawBezier||!d?c:{getRatio:function(a){return 1-c.getRatio(a)}}},g=function(b,c){this.vars=c||{},a.call(this,b),this.update(this.vars)};return g.prototype=c=new a,c.constructor=g,c.update=function(a){a=a||this.vars;var b,c,g,h,i,j,k,l,m,n=0|(a.wiggles||10),o=1/n,p=o/2,q="anticipate"===a.type,r=d[a.type]||d.easeOut,s=e,t=1e3;if(q&&(s=r,r=d.easeOut),a.timingEase&&(s=f(a.timingEase)),a.amplitudeEase&&(r=f(a.amplitudeEase,!0)),j=s.getRatio(p),k=q?-r.getRatio(p):r.getRatio(p),l=[0,0,j/4,0,j/2,k,j,k],"random"===a.type){for(l.length=4,b=s.getRatio(o),c=2*Math.random()-1,m=2;n>m;m++)p=b,k=c,b=s.getRatio(o*m),c=2*Math.random()-1,g=Math.atan2(c-l[l.length-3],b-l[l.length-4]),h=Math.cos(g)*o,i=Math.sin(g)*o,l.push(p-h,k-i,p,k,p+h,k+i);l.push(b,0,1,0)}else{for(m=1;n>m;m++)l.push(s.getRatio(p+o/2),k),p+=o,k=(k>0?-1:1)*r.getRatio(m*o),j=s.getRatio(p),l.push(s.getRatio(p-o/2),k,j,k);l.push(s.getRatio(p+o/4),k,s.getRatio(p+o/4),0,1,0)}for(m=l.length;--m>-1;)l[m]=(l[m]*t|0)/t;l[2]="C"+l[2],this.setData("M"+l.join(","))},g.create=function(a,b){return new g(a,b)},g.version="0.2.1",g.eases=d,g},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("./CustomEase.min.js"),require("../TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite","CustomEase"],b)}("CustomWiggle");
/*!
 * VERSION: 0.7.0
 * DATE: 2019-02-07
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;!function(a){"use strict";var b=a.GreenSockGlobals||a,c=function(a){var c,d=a.split("."),e=b;for(c=0;c<d.length;c++)e[d[c]]=e=e[d[c]]||{};return e},d=c("com.greensock.utils"),e=function(a){var b=a.nodeType,c="";if(1===b||9===b||11===b){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===b||4===b)return a.nodeValue;return c},f=_gsScope.document||{},g="undefined"!=typeof a?a:f.defaultView||{getComputedStyle:function(){}},h=function(a){return g.getComputedStyle(a)},i=/([A-Z])/g,j=function(a,b,c,d){var e;return(c=c||h(a,null))?(a=c.getPropertyValue(b.replace(i,"-$1").toLowerCase()),e=a||c.length?a:c[b]):a.currentStyle&&(c=a.currentStyle,e=c[b]),d?e:parseInt(e,10)||0},k=function(a){return a.length&&a[0]&&(a[0].nodeType&&a[0].style&&!a.nodeType||a[0].length&&a[0][0])?!0:!1},l=function(a){var b,c,d,e=[],f=a.length;for(b=0;f>b;b++)if(c=a[b],k(c))for(d=c.length,d=0;d<c.length;d++)e.push(c[d]);else e.push(c);return e},m=function(a,b){for(var c,d=b.length;--d>-1;)if(c=b[d],a.substr(0,c.length)===c)return c.length},n=/(?:\r|\n|\t\t)/g,o=/(?:\s\s+)/g,p=55296,q=56319,r=56320,s=127462,t=127487,u=127995,v=127999,w=function(a){return(a.charCodeAt(0)-p<<10)+(a.charCodeAt(1)-r)+65536},x=f.all&&!f.addEventListener,y=" style='position:relative;display:inline-block;"+(x?"*display:inline;*zoom:1;'":"'"),z=function(a,b){a=a||"";var c=-1!==a.indexOf("++"),d=1;return c&&(a=a.split("++").join("")),function(){return"<"+b+y+(a?" class='"+a+(c?d++:"")+"'>":">")}},A=d.SplitText=b.SplitText=function(a,b){if("string"==typeof a&&(a=A.selector(a)),!a)throw"cannot split a null element.";this.elements=k(a)?l(a):[a],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=b||{},this.split(b)},B=function(a,b,c){var d=a.nodeType;if(1===d||9===d||11===d)for(a=a.firstChild;a;a=a.nextSibling)B(a,b,c);else(3===d||4===d)&&(a.nodeValue=a.nodeValue.split(b).join(c))},C=function(a,b){for(var c=b.length;--c>-1;)a.push(b[c])},D=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},E=function(a,b,c){for(var d;a&&a!==b;){if(d=a._next||a.nextSibling)return d.textContent.charAt(0)===c;a=a.parentNode||a._parent}return!1},F=function(a){var b,c,d=D(a.childNodes),e=d.length;for(b=0;e>b;b++)c=d[b],c._isSplit?F(c):(b&&3===c.previousSibling.nodeType?c.previousSibling.nodeValue+=3===c.nodeType?c.nodeValue:c.firstChild.nodeValue:3!==c.nodeType&&a.insertBefore(c.firstChild,c),a.removeChild(c))},G=function(a,b,c,d,e,g,i){var k,l,m,n,o,p,q,r,s,t,u,v,w=h(a),x=j(a,"paddingLeft",w),y=-999,z=j(a,"borderBottomWidth",w)+j(a,"borderTopWidth",w),A=j(a,"borderLeftWidth",w)+j(a,"borderRightWidth",w),D=j(a,"paddingTop",w)+j(a,"paddingBottom",w),G=j(a,"paddingLeft",w)+j(a,"paddingRight",w),H=.2*j(a,"fontSize"),I=j(a,"textAlign",w,!0),J=[],K=[],L=[],M=b.wordDelimiter||" ",N=b.tag?b.tag:b.span?"span":"div",O=b.type||b.split||"chars,words,lines",P=e&&-1!==O.indexOf("lines")?[]:null,Q=-1!==O.indexOf("words"),R=-1!==O.indexOf("chars"),S="absolute"===b.position||b.absolute===!0,T=b.linesClass,U=-1!==(T||"").indexOf("++"),V=[];for(U&&(T=T.split("++").join("")),l=a.getElementsByTagName("*"),m=l.length,o=[],k=0;m>k;k++)o[k]=l[k];if(P||S)for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,(p||S||R&&!Q)&&(v=n.offsetTop,P&&p&&Math.abs(v-y)>H&&("BR"!==n.nodeName||0===k)&&(q=[],P.push(q),y=v),S&&(n._x=n.offsetLeft,n._y=v,n._w=n.offsetWidth,n._h=n.offsetHeight),P&&((n._isSplit&&p||!R&&p||Q&&p||!Q&&n.parentNode.parentNode===a&&!n.parentNode._isSplit)&&(q.push(n),n._x-=x,E(n,a,M)&&(n._wordEnd=!0)),"BR"===n.nodeName&&(n.nextSibling&&"BR"===n.nextSibling.nodeName||0===k)&&P.push([])));for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,"BR"!==n.nodeName?(S&&(s=n.style,Q||p||(n._x+=n.parentNode._x,n._y+=n.parentNode._y),s.left=n._x+"px",s.top=n._y+"px",s.position="absolute",s.display="block",s.width=n._w+1+"px",s.height=n._h+"px"),!Q&&R?n._isSplit?(n._next=n.nextSibling,n.parentNode.appendChild(n)):n.parentNode._isSplit?(n._parent=n.parentNode,!n.previousSibling&&n.firstChild&&(n.firstChild._isFirst=!0),n.nextSibling&&" "===n.nextSibling.textContent&&!n.nextSibling.nextSibling&&V.push(n.nextSibling),n._next=n.nextSibling&&n.nextSibling._isFirst?null:n.nextSibling,n.parentNode.removeChild(n),o.splice(k--,1),m--):p||(v=!n.nextSibling&&E(n.parentNode,a,M),n.parentNode._parent&&n.parentNode._parent.appendChild(n),v&&n.parentNode.appendChild(f.createTextNode(" ")),"span"===N&&(n.style.display="inline"),J.push(n)):n.parentNode._isSplit&&!n._isSplit&&""!==n.innerHTML?K.push(n):R&&!n._isSplit&&("span"===N&&(n.style.display="inline"),J.push(n))):P||S?(n.parentNode&&n.parentNode.removeChild(n),o.splice(k--,1),m--):Q||a.appendChild(n);for(k=V.length;--k>-1;)V[k].parentNode.removeChild(V[k]);if(P){for(S&&(t=f.createElement(N),a.appendChild(t),u=t.offsetWidth+"px",v=t.offsetParent===a?0:a.offsetLeft,a.removeChild(t)),s=a.style.cssText,a.style.cssText="display:none;";a.firstChild;)a.removeChild(a.firstChild);for(r=" "===M&&(!S||!Q&&!R),k=0;k<P.length;k++){for(q=P[k],t=f.createElement(N),t.style.cssText="display:block;text-align:"+I+";position:"+(S?"absolute;":"relative;"),T&&(t.className=T+(U?k+1:"")),L.push(t),m=q.length,l=0;m>l;l++)"BR"!==q[l].nodeName&&(n=q[l],t.appendChild(n),r&&n._wordEnd&&t.appendChild(f.createTextNode(" ")),S&&(0===l&&(t.style.top=n._y+"px",t.style.left=x+v+"px"),n.style.top="0px",v&&(n.style.left=n._x-v+"px")));0===m?t.innerHTML="&nbsp;":Q||R||(F(t),B(t,String.fromCharCode(160)," ")),S&&(t.style.width=u,t.style.height=n._h+"px"),a.appendChild(t)}a.style.cssText=s}S&&(i>a.clientHeight&&(a.style.height=i-D+"px",a.clientHeight<i&&(a.style.height=i+z+"px")),g>a.clientWidth&&(a.style.width=g-G+"px",a.clientWidth<g&&(a.style.width=g+A+"px"))),C(c,J),Q&&C(d,K),C(e,L)},H=function(a,b,c,d){var g,h,i,j,k,l,r,x,y,z,A=b.tag?b.tag:b.span?"span":"div",C=b.type||b.split||"chars,words,lines",D=-1!==C.indexOf("chars"),E="absolute"===b.position||b.absolute===!0,F=b.wordDelimiter||" ",G=" "!==F?"":E?"&#173; ":" ",H="</"+A+">",I=!0,J=b.specialChars?"function"==typeof b.specialChars?b.specialChars:m:null,K=f.createElement("div"),L=a.parentNode;for(L.insertBefore(K,a),K.textContent=a.nodeValue,L.removeChild(a),a=K,g=e(a),r=-1!==g.indexOf("<"),b.reduceWhiteSpace!==!1&&(g=g.replace(o," ").replace(n,"")),r&&(g=g.split("<").join("{{LT}}")),k=g.length,h=(" "===g.charAt(0)?G:"")+c(),i=0;k>i;i++)if(l=g.charAt(i),J&&(z=J(g.substr(i),b.specialChars)))l=g.substr(i,z||1),h+=D&&" "!==l?d()+l+"</"+A+">":l,i+=z-1;else if(l===F&&g.charAt(i-1)!==F&&i){for(h+=I?H:"",I=!1;g.charAt(i+1)===F;)h+=G,i++;i===k-1?h+=G:")"!==g.charAt(i+1)&&(h+=G+c(),I=!0)}else"{"===l&&"{{LT}}"===g.substr(i,6)?(h+=D?d()+"{{LT}}</"+A+">":"{{LT}}",i+=5):l.charCodeAt(0)>=p&&l.charCodeAt(0)<=q||g.charCodeAt(i+1)>=65024&&g.charCodeAt(i+1)<=65039?(x=w(g.substr(i,2)),y=w(g.substr(i+2,2)),j=x>=s&&t>=x&&y>=s&&t>=y||y>=u&&v>=y?4:2,h+=D&&" "!==l?d()+g.substr(i,j)+"</"+A+">":g.substr(i,j),i+=j-1):h+=D&&" "!==l?d()+l+"</"+A+">":l;a.outerHTML=h+(I?H:""),r&&B(L,"{{LT}}","<")},I=function(a,b,c,d){var e,f,g=D(a.childNodes),h=g.length,i="absolute"===b.position||b.absolute===!0;if(3!==a.nodeType||h>1){for(b.absolute=!1,e=0;h>e;e++)f=g[e],(3!==f.nodeType||/\S+/.test(f.nodeValue))&&(i&&3!==f.nodeType&&"inline"===j(f,"display",null,!0)&&(f.style.display="inline-block",f.style.position="relative"),f._isSplit=!0,I(f,b,c,d));return b.absolute=i,void(a._isSplit=!0)}H(a,b,c,d)},J=A.prototype;J.split=function(a){this.isSplit&&this.revert(),this.vars=a=a||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var b,c,d,e=this.elements.length,f=a.tag?a.tag:a.span?"span":"div",g=z(a.wordsClass,f),h=z(a.charsClass,f);--e>-1;)d=this.elements[e],this._originals[e]=d.innerHTML,b=d.clientHeight,c=d.clientWidth,I(d,a,g,h),G(d,a,this.chars,this.words,this.lines,c,b);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},J.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var a=this._originals.length;--a>-1;)this.elements[a].innerHTML=this._originals[a];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},A.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(A.selector=c,c(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)},A.version="0.7.0"}(_gsScope),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?module.exports=b():"function"==typeof define&&define.amd&&define([],b)}("SplitText");punchgs.SFXBounceLite=punchgs.CustomBounce.create("SFXBounceLite",{strength:0.3,squash:1,squashID:"SFXBounceLite-squash"});punchgs.SFXBounceSolid=punchgs.CustomBounce.create("SFXBounceSolid",{strength:0.5,squash:2,squashID:"SFXBounceSolid-squash"});punchgs.SFXBounceStrong=punchgs.CustomBounce.create("SFXBounceStrong",{strength:0.7,squash:3,squashID:"SFXBounceStrong-squash"});punchgs.SFXBounceExtrem=punchgs.CustomBounce.create("SFXBounceExtrem",{strength:0.9,squash:4,squashID:"SFXBounceExtrem-squash"});punchgs.BounceLite=punchgs.CustomBounce.create("BounceLite",{strength:0.3});punchgs.BounceSolid=punchgs.CustomBounce.create("BounceSolid",{strength:0.5});punchgs.BounceStrong=punchgs.CustomBounce.create("BounceStrong",{strength:0.7});punchgs.BounceExtrem=punchgs.CustomBounce.create("BounceExtrem",{strength:0.9});try{window.GreenSockGlobals=null;window._gsQueue=null;window._gsDefine=null;delete(window.GreenSockGlobals);delete(window._gsQueue);delete(window._gsDefine)}catch(e){}
try{window.GreenSockGlobals=RS_CacheGS;window._gsQueue=RS_CacheGS_queue;window._gsDefine=RS_Cache_define}catch(e){}(function(e,t){e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var i=e(this),s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached")){s.push({src:t.attr("src"),element:t[0]})}e.each(o,function(e,n){var r=t.css(n);if(!r){return!0}var i;while(i=u.exec(r)){s.push({src:i[2],element:t[0]})}})})}else{i.find("img:uncached").each(function(){s.push({src:this.src,element:this})})}var f=s.length,l=0;if(f==0){t.call(i[0])}e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return!1}});o.src=s.src})})}})(jQuery);/*!

  - Slider Revolution 6.0 JavaScript Plugin -

..........................xXXXXX.................
................. xXXXXX..xXXXXX..xXXXXX.........
..................xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.....................xxxxxxxxxxxxxxxxxxx.........
.....................xxxxxxxxxxxxxxxxxxx.........
.....................xxxxxxxxxxxxxxxxxxx.........

				VERSION: 6.1.3
			   DATE: 2019-09-18
    @author: Krisztian Horvath, ThemePunch OHG.


UPDATES AND DOCS AT: 
https://www.themepunch.com/support-center
			
GET LICENSE AT: 
https://codecanyon.net/item/slider-revolution-responsive-wordpress-plugin/2751380?ref=themepunch

LICENSE:
Copyright (c) 2009-2019, ThemePunch. All rights reserved.
This work is subject to the terms at https://codecanyon.net/licenses/standard (Regular / Extended)

*/
!function(e,t){"use strict";var i;e.fn.extend({revolution:function(a){return this.each(function(){for(var o=document.getElementsByClassName("rs-p-wp-fix");o[0];)o[0].parentNode.removeChild(o[0]);var s=this.id=this.id===t?"rs_module_"+Math.round(1e7*Math.random()):this.id;e.fn.revolution[s]=W(a),(i=e.fn.revolution)[s].c=e(this),i[s].cpar=i[s].c.parent(),i[s].canvas=i[s].c.find("rs-slides"),i[s].dimensionReCheck={},i[s].stopAfterLoops!=t&&i[s].stopAfterLoops>-1?i[s].looptogo=i[s].stopAfterLoops:i[s].looptogo="disabled",window._T=i[s],i[s].BUG_safari_clipPath="Safari"===i.get_browser()&&i.get_browser_version()>"12",i[s].BUG_ie_clipPath="Edge"===i.get_browser()||"IE"===i.get_browser(),i[s].anyid=[],i[s].indexhelper=0,i[s].level=0,i[s].rtl=e("body").hasClass("rtl"),i[s].minHeight=i[s].minHeight!=t&&""!==i[s].minHeight?parseInt(i[s].minHeight,0):0,i[s].isEdge="Edge"===i.get_browser(),r(s),"hero"==i[s].sliderType&&i[s].c.find("rs-slide").each(function(t){t>0&&e(this).remove()}),i[s].navigation.use="hero"!==i[s].sliderType&&("carousel"==i[s].sliderType||i[s].navigation.keyboardNavigation||"on"==i[s].navigation.mouseScrollNavigation||"carousel"==i[s].navigation.mouseScrollNavigation||i[s].navigation.touch.touchenabled||i[s].navigation.arrows.enable||i[s].navigation.bullets.enable||i[s].navigation.thumbnails.enable||i[s].navigation.tabs.enable),i[s].c.find("rs-bgvideo").each(function(){"RS-BGVIDEO"!==this.tagName||this.id!==t&&""!==this.id||(this.id="rs-bg-video-"+Math.round(1e6*Math.random()))}),punchgs.force3D="auto",c(s)})},getRSVersion:function(e){var t,i,a=window.SliderRevolutionVersion;if(!e){for(var r in t=i="---------------------------------------------------------\n",t+="    Currently Loaded Slider Revolution & SR Modules :\n"+i,a)a.hasOwnProperty(r)&&(t+=a[r].alias+": "+a[r].ver+"\n");t+=i}return e?a:t},revremoveslide:function(t){return this.each(function(){var a=this.id;if(!(t<0||t>i[a].slideamount)&&i[a]&&i[a].slides.length>0&&(t>0||t<=i[a].slides.length)){var r=i.gA(i[a].slides[t],"key");i[a].slideamount=i[a].slideamount-1,i[a].realslideamount=i[a].realslideamount-1,s("rs-bullet",r,a),s("rs-tab",r,a),s("rs-thumb",r,a),e(i[a].slides[t]).remove(),i[a].slides=o(i[a].slides,t),i[a].carousel&&i[a].carousel.slides&&(i[a].carousel.slides=o(i[a].carousel.slides,t)),i[a].thumbs=o(i[a].thumbs,t),i.updateNavIndexes&&i.updateNavIndexes(a),t<=i[a].pr_active_key&&(i[a].pr_active_key=i[a].pr_active_key-1)}})},revaddcallback:function(e){return this.each(function(){i[this.id]&&(i[this.id].callBackArray===t&&(i[this.id].callBackArray=[]),i[this.id].callBackArray.push(e))})},revgetparallaxproc:function(){if(i[this[0].id])return i[this[0].id].scrollproc},revdebugmode:function(){},revscroll:function(t){return this.each(function(){var i=e(this);e("body,html").animate({scrollTop:i.offset().top+i.height()-t+"px"},{duration:400})})},revredraw:function(){return this.each(function(){m(this.id)})},revkill:function(){return this.each(function(){var a=this.id;punchgs.TweenMax.killDelayedCallsTo(i.showHideNavElements),i[a].c.data("conthover",1),i[a].c.data("conthoverchanged",1),i[a].c.trigger("revolution.slide.onpause");var r=i[a].cpar.find("rs-progress");i[a].c[0].opt;i[a].tonpause=!0,i[a].c.trigger("stoptimer"),i[a].sliderisrunning=!1;var o="resize.revslider-"+i[a].c.attr("id");e(window).unbind(o),punchgs.TweenMax.killTweensOf(i[a].c.find("*"),!1),punchgs.TweenMax.killTweensOf(i[a].c,!1),i[a].c.unbind("hover, mouseover, mouseenter,mouseleave, resize"),o="resize.revslider-"+i[a].c.attr("id"),e(window).off(o),i[a].c.find("*").each(function(){var i=e(this);i.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"),i.off("on, hover, mouseenter,mouseleave,mouseover, resize"),i.data("mySplitText",null),i.data("ctl",null),i.data("tween")!=t&&i.data("tween").kill(),i.data("pztl")!=t&&i.data("pztl").kill(),i.data("timeline_out")!=t&&i.data("timeline_out").kill(),i.data("timeline")!=t&&i.data("timeline").kill(),i.remove(),i.empty(),i=null}),punchgs.TweenMax.killTweensOf(i[a].c.find("*"),!1),punchgs.TweenMax.killTweensOf(i[a].c,!1),r.remove();try{i[a].c.closest("rs-fullwidth-wrap").remove()}catch(e){}try{i[a].c.closest("rs-module-wrap").remove()}catch(e){}try{i[a].c.remove()}catch(e){}i[a].c.empty(),i[a].c.html(),i[a].c=null})},revpause:function(){return this.each(function(){var a=e(this);a!=t&&a.length>0&&e("body").find("#"+a.attr("id")).length>0&&(a.data("conthover",1),a.data("conthoverchanged",1),a.trigger("revolution.slide.onpause"),i[this.id].tonpause=!0,a.trigger("stoptimer"))})},revresume:function(){return this.each(function(){if(i[this.id]!==t){var a=e(this);a.data("conthover",0),a.data("conthoverchanged",1),a.trigger("revolution.slide.onresume"),i[this.id].tonpause=!1,a.trigger("starttimer")}})},revmodal:function(a){var r=this instanceof e?this[0]:this,o=r.id;i[r.id]!==t&&i.revModal(o,a)},revstart:function(){var a=this instanceof e?this[0]:this;return i[a.id]===t?(console.log("Slider is Not Existing"),!1):i[a.id].sliderisrunning?(console.log("Slider Is Running Already"),!1):(i[a.id].c=e(a),i[a.id].canvas=i[a.id].c.find("rs-slides"),h(a.id),!0)},revnext:function(){return this.each(function(){i[this.id]!==t&&i.callingNewSlide(this.id,1,"carousel"===i[this.id].sliderType)})},revprev:function(){return this.each(function(){i[this.id]!==t&&i.callingNewSlide(this.id,-1,"carousel"===i[this.id].sliderType)})},revmaxslide:function(){return e(this).find("rs-slide").length},revcurrentslide:function(){if(i[e(this)[0].id]!==t)return parseInt(i[e(this)[0].id].pr_active_key,0)+1},revlastslide:function(){return e(this).find("rs-slide").length},revshowslide:function(e){return this.each(function(){i[this.id]!==t&&e!==t&&i.callingNewSlide(this.id,"to"+(e-1))})},revcallslidewithid:function(e){return this.each(function(){i[this.id]!==t&&i.callingNewSlide(this.id,e,"carousel"===i[this.id].sliderType)})}}),i=e.fn.revolution,e.extend(!0,i,{sA:function(e,t,i){e&&e.setAttribute&&e.setAttribute("data-"+t,i)},gA:function(e,i,a){return e.hasAttribute&&e.hasAttribute("data-"+i)&&e.getAttribute("data-"+i)!==t&&null!==e.getAttribute("data-"+i)?e.getAttribute("data-"+i):a!==t?a:t},updateFixedScrollTimes:function(e){!0===i[e].sbtimeline.set&&!0===i[e].sbtimeline.fixed&&"auto"!==i[e].sliderLayout&&(i[e].sbtimeline.rest=i[e].duration-i[e].sbtimeline.fixEnd,i[e].sbtimeline.time=i[e].duration-(i[e].sbtimeline.fixStart+i[e].sbtimeline.rest),i[e].sbtimeline.extended=i[e].sbtimeline.time/10)},callContWidthManager:function(e){g(e)},showModalCover:function(a,r,o){switch(o){case"show":var s;r.spin!==t&&"off"!==r.spin&&(s=i.buildSpinner(a,"spinner"+r.spin,r.spinc,"modalspinner")),r.bg!==t&&!1!==r.bg&&"false"!==r.bg&&"transparent"!==r.bg?(i[a].modalLoader=e('<rs-modal-cover data-rid="'+a+'" id="'+a+'_modal_bg"></rs-modal-cover>'),e("body").append(i[a].modalLoader),punchgs.TweenMax.set(i[a].modalLoader,{display:"none",background:r.bg,opacity:0}),punchgs.TweenMax.to(i[a].modalLoader,.5,{display:"block",opacity:1,ease:punchgs.Power3.easeInOut}),s!==t&&i[a].modalLoader.append(s)):s!==t&&i[a].c.append(s);break;case"hide":i[a].modalLoader!==t?(i[a].modalLoader.find(".modalspinner").remove(),punchgs.TweenMax.to(i[a].modalLoader,2,{delay:1,display:"none",opacity:0,ease:punchgs.Power3.easeIn})):i[a].c.find(".modalspinner").remove()}},revModal:function(a,r){if(a!==t&&i[a]!==t)switch(r.mode){case"show":r.slide=r.slide===t?"to0":r.slide,i[a].modal.bodyclass!==t&&i[a].modal.bodyclass.length>=0&&document.body.classList.add(i[a].modal.bodyclass),punchgs.TweenMax.to(i[a].modal.bg,2,{display:"block",opacity:1,ease:punchgs.Power3.easeInOut}),punchgs.TweenMax.set(i[a].modal.c,{display:"auto"===i[a].sliderLayout?"inline-block":"block",opacity:0}),punchgs.TweenMax.set(i[a].cpar,{display:"block",opacity:1});punchgs.TweenMax.fromTo({a:0},.01,{a:0},{a:10,ease:punchgs.Power3.easeInOut,onComplete:function(){i[a].sliderisrunning?i.callingNewSlide(a,r.slide):("to0"!==r.slide&&(i[a].startWithSlideKey=r.slide),h(a))}}),punchgs.TweenMax.fromTo([i[a].modal.c],.01,{opacity:0},{opacity:1,delay:.5,ease:punchgs.Power3.easeInOut,onComplete:function(){}}),window.overscrollhistory=document.body.style.overflow,document.body.style.overflow="hidden";break;case"close":M(a),document.body.style.overflow=window.overscrollhistory,i[a].modal.bodyclass!==t&&i[a].modal.bodyclass.length>=0&&document.body.classList.remove(i[a].modal.bodyclass),punchgs.TweenMax.to(i[a].modal.bg,2,{display:"none",opacity:0,ease:punchgs.Power3.easeInOut}),punchgs.TweenMax.to(i[a].modal.c,.3,{display:"none",delay:.5,opacity:0,onComplete:function(){punchgs.TweenMax.set(i[a].cpar,{display:"none",opacity:0}),e(document).trigger("revolution.all.resize")}});break;case"init":if(window.RS_60_MODALS=window.RS_60_MODALS===t?[]:window.RS_60_MODALS,-1===e.inArray(i[a].modal.alias,window.RS_60_MODALS)&&window.RS_60_MODALS.push(i[a].modal.alias),i[a].modal.listener===t){i[a].modal.c=e("#"+a+"_modal"),i[a].modal.bg=e('<rs-modal-cover data-rid="'+a+'" id="'+a+'_modal_bg"></rs-modal-cover>'),"auto"===i[a].sliderLayout&&i[a].modal.cover?e("body").append(i[a].modal.bg):i[a].modal.c.append(i[a].modal.bg),i[a].modal.c[0].className+="rs-modal-"+i[a].sliderLayout;var o={left:"auto"===i[a].sliderLayout?"center"===i[a].modal.horizontal?"50%":"left"===i[a].modal.horizontal?"0px":"auto":"0px",right:"auto"===i[a].sliderLayout?"center"===i[a].modal.horizontal?"auto":"left"===i[a].modal.horizontal?"auto":"0px":"0px",top:"auto"===i[a].sliderLayout||"fullwidth"===i[a].sliderLayout?"middle"===i[a].modal.vertical?"50%":"top"===i[a].modal.vertical?"0px":"auto":"0px",bottom:"auto"===i[a].sliderLayout||"fullwidth"===i[a].sliderLayout?"middle"===i[a].modal.vertical?"auto":"top"===i[a].modal.vertical?"auto":"0px":"0px",y:("auto"===i[a].sliderLayout||"fullwidth"===i[a].sliderLayout)&&"middle"===i[a].modal.vertical?"-50%":0,x:"auto"===i[a].sliderLayout&&"center"===i[a].modal.horizontal?"-50%":0};"-50%"===o.y&&(o.filter="blur(0px)"),punchgs.TweenMax.set(i[a].modal.c,"auto"===i[a].sliderLayout||"fullscreen"===i[a].sliderLayout?e.extend(!0,o,{opacity:0,display:"none"}):{opacity:0,display:"none"}),"fullwidth"===i[a].sliderLayout&&punchgs.TweenMax.set(i[a].modal.c.find("rs-module-wrap"),o),!1!==i[a].modal.cover&&"false"!==i[a].modal.cover||(i[a].modal.coverColor="transparent"),punchgs.TweenMax.set(i[a].modal.bg,{display:"none",background:i[a].modal.coverColor,opacity:0}),e(document).on("RS_OPENMODAL_"+i[a].modal.alias,function(e,t){i.revModal(a,{mode:"show",slide:t})}),e(document).on("click","rs-modal-cover",function(){i.revModal(i.gA(this,"rid"),{mode:"close"})}),i[a].modal.listener=!0}}},smartConvertDivs:function(e){var t="";if("string"==typeof e&&e.indexOf("#")>=0){var i=e.split(","),a=i.length-1;for(var r in i)t="string"==typeof i[r]&&"#"===i[r][0]?t+i[r][1]/i[r][3]*100+"%"+(r<a?",":""):t+i[r]+(r<a?",":"")}else t=e;return t},revToResp:function(e,i,a,r){if((e=e===t?a:e)!==t){if(r=r===t?",":r,"boolean"!=typeof e&&("object"!=typeof e||Array.isArray(e))){try{e=e.replace(/[[\]]/g,"").replace(/\'/g,"").split(r)}catch(e){}for(e=Array.isArray(e)?e:[e];e.length<i;)e[e.length]=e[e.length-1]}return e}},updateVisibleArea:function(a){for(var r in i[a].viewPort.visible_area=i.revToResp(i[a].viewPort.visible_area,i[a].rle,"200px"),i[a].viewPort.vaType=new Array(4),i[a].viewPort.visible_area)i[a].viewPort.visible_area.hasOwnProperty(r)&&(e.isNumeric(i[a].viewPort.visible_area[r])&&(i[a].viewPort.visible_area[r]+="%"),i[a].viewPort.visible_area[r]!==t&&(i[a].viewPort.vaType[r]=i[a].viewPort.visible_area[r].indexOf("%")>=0?"%":"px"),i[a].viewPort.visible_area[r]=parseInt(i[a].viewPort.visible_area[r],0),i[a].viewPort.visible_area[r]="%"==i[a].viewPort.vaType[r]?i[a].viewPort.visible_area[r]/100:i[a].viewPort.visible_area[r])},fontLoaded:function(e){return i.monoWidth=i.monoWidth===t?n("monospace"):i.monoWidth,i.sansWidth=i.sansWidth===t?n("sans-serif"):i.sansWidth,i.serifWidth=i.serifWidth===t?n("serif"):i.serifWidth,i.monoWidth!==n(e+",monospace")||i.sansWidth!==n(e+",sans-serif")||i.serifWidth!==n(e+",serif")},getversion:function(){return"Slider Revolution 6.1.1"},currentSlideIndex:function(e){return i[e].pr_active_key},simp:function(e,t,i){var a=Math.abs(e)-Math.floor(Math.abs(e/t))*t;return i?a:e<0?-1*a:a},iOSVersion:function(){return!!(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i))&&navigator.userAgent.match(/OS 4_\d like Mac OS X/i)},isIE:function(t,i){var a=e('<div style="display:none;"/>').appendTo(e("body"));a.html("\x3c!--[if "+(i||"")+" IE "+(t||"")+"]><a>&nbsp;</a><![endif]--\x3e");var r=a.find("a").length;return a.remove(),r},is_mobile:function(){var e=["android","webos","iphone","ipad","blackberry","Android","webos","iPod","iPhone","iPad","Blackberry","BlackBerry"],t=!1;for(var i in e)e.hasOwnProperty(i)&&(t=!!(t||navigator.userAgent.split(e[i]).length>1)||t);return t},is_android:function(){var e=["android","Android"],t=!1;for(var i in e)e.hasOwnProperty(i)&&(t=!!(t||navigator.userAgent.split(e[i]).length>1)||t);return t},callBackHandling:function(t,a,r){i[t].callBackArray&&e.each(i[t].callBackArray,function(e,t){t&&t.inmodule&&t.inmodule===a&&t.atposition&&t.atposition===r&&t.callback&&t.callback.call()})},get_browser:function(){var e,t=navigator.userAgent,i=t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(i[1])?(e=/\brv[ :]+(\d+)/g.exec(t)||[],"IE"):"Chrome"===i[1]&&null!=(e=t.match(/\b(OPR|Edge)\/(\d+)/))?e[1].replace("OPR","Opera"):(i=i[2]?[i[1],i[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(e=t.match(/version\/(\d+)/i))&&i.splice(1,1,e[1]),i[0])},get_browser_version:function(){var e,t=navigator.appName,i=navigator.userAgent,a=i.match(/(edge|opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return a&&null!=(e=i.match(/version\/([\.\d]+)/i))&&(a[2]=e[1]),(a=a?[a[1],a[2]]:[t,navigator.appVersion,"-?"])[1]},isFirefox:function(e){return i[e].isFirefox=i[e].isFirefox===t?"Firefox"===i.get_browser():i[e].isFirefox,i[e].isFirefox},isSafari11:function(){return"safari"===e.trim(i.get_browser().toLowerCase())&&parseFloat(i.get_browser_version())>=11},getHorizontalOffset:function(e,t){var i=d(e,".outer-left"),a=d(e,".outer-right");return"left"==t?i:"right"==t?a:i+a},getComingSlide:function(a,r){var o=i[a].pr_next_key!==t?i[a].pr_next_key:i[a].pr_processing_key!==t?i[a].pr_processing_key:i[a].pr_active_key,s=0;if(s=0,i[a].pr_active_slide!==t&&i[a].pr_active_slide.hasClass("not-in-nav")&&(o=i[a].pr_lastshown_key),r!==t&&e.isNumeric(r)||r!==t&&r.match(/to/g))s=1===r||-1===r?parseInt(o,0)+r<0?i[a].slideamount-1:parseInt(o,0)+r>=i[a].slideamount?0:parseInt(o,0)+r:(r=e.isNumeric(r)?r:parseInt(r.split("to")[1],0))<0?0:r>i[a].slideamount-1?i[a].slideamount-1:r;else if(r)for(var n in i[a].slides)i[a].slides.hasOwnProperty(n)&&(s=i[a].slides&&i[a].slides[n]&&i.gA(i[a].slides[n],"key")===r?n:s);return{nindex:s,aindex:o}},callingNewSlide:function(e,a,r){var o=i.getComingSlide(e,a);i[e].pr_next_key=o.nindex,i[e].sdir=i[e].pr_next_key<i[e].pr_active_key?1:0,r&&i[e].carousel!==t&&(i[e].carousel.focused=i[e].pr_next_key),i[e].ctNavElement?i[e].ctNavElement=!1:i[e].c.trigger("revolution.nextslide.waiting"),(o.aindex===i[e].pr_next_key&&o.aindex===i[e].pr_lastshown_key||i[e].pr_next_key!==o.aindex&&-1!=i[e].pr_next_key)&&O(e,r)},getLoadObj:function(e,a){var r=i[e].loadqueue.filter(function(e){return e.src===a})[0];return r===t?{src:a}:r},updateDimensions:function(e){i[e].lastconw=i[e].conw,i[e].lastconh=i[e].conh,i[e].conw=i[e].c.width(),i[e].conh=i[e].infullscreenmode?i[e].minHeight:i[e].c.height(),i[e].ulw=i[e].canvas.width(),i[e].ulh=i[e].canvas.height()},setSize:function(a,r){var o,s=parseInt(i[a].top_outer||0)+parseInt(i[a].bottom_outer||0),n="carousel"==i[a].sliderType?parseInt(i[a].carousel.padding_top||0,0):0,l="carousel"==i[a].sliderType?parseInt(i[a].carousel.padding_bottom||0,0):0,d=0,c=0,p=0,u=i[a].pr_processing_key||i[a].pr_active_key||0,h=i[a].pr_active_key||0;if(i[a].minHeight=i[a].minHeight===t?0:i[a].minHeight||0,i[a].paddings=i[a].paddings===t?{top:parseInt(i[a].cpar.css("paddingTop"),0)||0,bottom:parseInt(i[a].cpar.css("paddingBottom"),0)||0}:i[a].paddings,i[a].rowzones&&i[a].rowzones.length>0){if(i[a].rowzones[u]!==t)for(o=0;o<i[a].rowzones[u].length;o++)d+=i[a].rowzones[u][o][0].offsetHeight;if(h!==u)for(o=0;o<i[a].rowzones[h].length;o++)c+=i[a].rowzones[h][o][0].offsetHeight}if(i[a].srowzones&&i[a].srowzones.length>0)for(o=0;o<i[a].srowzones.length;o++)p+=i[a].srowzones[o][0].offsetHeight;d=d<p?p:d;var g=Math.max(Math.max(i[a].minHeight,i[a].gridheight[i[a].level]),d);if(g=0!==i[a].maxHeight?Math.min(i[a].maxHeight,g):g,"fullwidth"!=i[a].sliderLayout||i[a].autoHeight||punchgs.TweenMax.set(i[a].c,{maxHeight:g+"px"}),i[a].c.css({marginTop:n,marginBottom:l}),i[a].width=i[a].canvas.width(),i[a].height=i[a].canvas.height(),"fullscreen"==i[a].sliderLayout||i[a].infullscreenmode){var f=e(window).height();if(i[a].fullScreenOffsetContainer!=t){var m=(""+i[a].fullScreenOffsetContainer).split(",");for(var v in m)m.hasOwnProperty(v)&&(f-=e(m[v]).outerHeight(!0)||0)}i[a].fullScreenOffset!=t&&!e.isNumeric(i[a].fullScreenOffset)&&i[a].fullScreenOffset.split("%").length>1?f-=e(window).height()*parseInt(i[a].fullScreenOffset,0)/100:i[a].fullScreenOffset!=t&&i[a].fullScreenOffset.length>0&&e.isNumeric(parseInt(i[a].fullScreenOffset,0))&&(f-=parseInt(i[a].fullScreenOffset,0)),i[a].height=Math.max(d,Math.max(f-s,i[a].minHeight)),h!==u&&(i[a].currentSlideHeight=Math.max(c,Math.max(f-s,i[a].minHeight)),i[a].slides[h].style.maxHeight=i[a].currentSlideHeight!==i[a].height?i[a].currentSlideHeight+"px":"none"),i[a].cpar.height(i[a].height),i[a].c.css({height:"100%"})}else i[a].height=Math.round(i[a].gridheight[i[a].level]*(i[a].keepBPHeight?1:i[a].width/i[a].gridwidth[i[a].level])),i[a].height=Math.max(d,Math.max(i[a].autoHeight?i[a].height:Math.min(i[a].height,i[a].gridheight[i[a].level]),i[a].minHeight)),!1!==r&&i[a].c.height(i[a].height);var b=n+l+s+i[a].height+i[a].paddings.top+i[a].paddings.bottom,w={height:b};if(!1!==r&&(i[a].c.closest("rs-fullwidth-wrap").find("rs-fw-forcer").css(w),i[a].c.closest("rs-module-wrap").css(w)),i[a].sbtimeline.set&&i[a].sbtimeline.fixed&&(i[a].curheight=b,i[a].sbtimeline.extended===t&&i.updateFixedScrollTimes(a),punchgs.TweenMax.set(i[a].forcer,{height:2*b+i[a].sbtimeline.extended})),i[a].middleZones&&i[a].middleZones.length>0&&i[a].middleZones[u]!==t)for(o=0;o<i[a].middleZones[u].length;o++)i[a].middleZones[u][o].style.top=Math.round(b/2-i[a].middleZones[u][o].offsetHeight/2)+"px";if(i[a].smiddleZones&&i[a].smiddleZones.length>0)for(o=0;o<i[a].smiddleZones.length;o++)i[a].smiddleZones[o].style.top=Math.round(b/2-i[a].smiddleZones[o].offsetHeight/2)+"px";y(a)},enterInViewPort:function(a){i[a].waitForCountDown&&(j(a),i[a].waitForCountDown=!1),i[a].waitForFirstSlide&&(O(a),i[a].waitForFirstSlide=!1,setTimeout(function(){i[a].c.removeClass("tp-waitforfirststart")},500)),"playing"!=i[a].sliderlaststatus&&i[a].sliderlaststatus!=t||i[a].c.trigger("starttimer"),i[a].lastplayedvideos!=t&&i[a].lastplayedvideos.length>0&&e.each(i[a].lastplayedvideos,function(e,t){i.playVideo(t,a)})},leaveViewPort:function(a){i[a].sliderlaststatus=i[a].sliderstatus,i[a].c.trigger("stoptimer"),i[a].playingvideos!=t&&i[a].playingvideos.length>0&&(i[a].lastplayedvideos=e.extend(!0,[],i[a].playingvideos),i[a].playingvideos&&e.each(i[a].playingvideos,function(e,t){i[a].leaveViewPortBasedStop=!0,i.stopVideo&&i.stopVideo(t,a)}))},unToggleState:function(e){if(e!==t)for(var i=0;i<e.length;i++)try{document.getElementById(e[i]).classList.remove("rs-tc-active")}catch(e){}},toggleState:function(e){if(e!==t)for(var i=0;i<e.length;i++)try{document.getElementById(e[i]).classList.add("rs-tc-active")}catch(e){}},swaptoggleState:function(e){if(e!=t&&e.length>0)for(var a=0;a<e.length;a++){var r=document.getElementById(e[a]);if(i.gA(r,"toggletimestamp")!==t&&(new Date).getTime()-i.gA(r,"toggletimestamp")<250)return;i.sA(r,"toggletimestamp",(new Date).getTime()),null!==r&&(r.className.indexOf("rs-tc-active")>=0?r.classList.remove("rs-tc-active"):r.classList.add("rs-tc-active"))}},lastToggleState:function(e){var i;if(e!==t)for(var a=0;a<e.length;a++){var r=document.getElementById(e[a]);i=!0===i||null!==r&&r.className.indexOf("rs-tc-active")>=0||i}return i},revCheckIDS:function(a,r){if(i.gA(r,"idcheck")===t){for(;-1!=e.inArray(r.id,i[a].anyid);)console.log("Warning !! Double Id in Slider "+a+": "+r.id),r.id=r.id+"_"+Math.round(9999*Math.random());i[a].anyid.push(r.id)}i.sA(r,"idcheck",!0)},buildSpinner:function(i,a,r,o){var s;if("off"!==a){o=o===t?"":o,r=r===t?"#ffffff":r;var n=parseInt(a.replace("spinner",""),10);if(isNaN(n)||n<6){var l='style="background-color:'+r+'"',d=o===t||3!==n&&4!=n?"":l;s=e("<rs-loader "+(o===t||1!==n&&2!=n?"":l)+' class="'+a+" "+o+'"><div '+d+' class="dot1"></div><div '+d+' class="dot2"></div><div '+d+' class="bounce1"></div><div '+d+' class="bounce2"></div><div '+d+' class="bounce3"></div></rs-loader>')}else{var c,p='<div class="rs-spinner-inner"';if(7===n)-1!==r.search("#")?(c=r.replace("#",""),c="rgba("+parseInt(c.substring(0,2),16)+", "+parseInt(c.substring(2,4),16)+", "+parseInt(c.substring(4,6),16)+", "):-1!==r.search("rgb")&&(c=r.substring(r.indexOf("(")+1,r.lastIndexOf(")")).split(",")).length>2&&(c="rgba("+c[0].trim()+", "+c[1].trim()+", "+c[2].trim()+", "),c&&"string"==typeof c&&(p+=' style="border-top-color: '+c+"0.65); border-bottom-color: "+c+"0.15); border-left-color: "+c+"0.65); border-right-color: "+c+'0.15)"');else 12===n&&(p+=' style="background:'+r+'"');p+=">";for(var u=[10,0,4,2,5,9,0,4,4,2][n-6],h=0;h<u;h++)h>0&&(p+=" "),p+='<span style="background:'+r+'"></span>';s=e('<rs-loader class="'+a+" "+o+'">'+(p+="</div>")+"</div></rs-loader>")}return s}}});var a=i.is_mobile(),r=(i.is_android(),function(e){i[e].responsiveLevels=i.revToResp(i[e].responsiveLevels,i[e].rle),i[e].visibilityLevels=i.revToResp(i[e].visibilityLevels,i[e].rle),i[e].responsiveLevels[0]=9999,i[e].rle=i[e].responsiveLevels.length||1,i[e].gridwidth=i.revToResp(i[e].gridwidth,i[e].rle),i[e].gridheight=i.revToResp(i[e].gridheight,i[e].rle),i[e].editorheight!==t&&(i[e].editorheight=i.revToResp(i[e].editorheight,i[e].rle)),l(e),y(e);var a=Math.max(i[e].minHeight,i[e].gridheight[i[e].level]*i[e].bw);i[e].editorheight!==t&&(a=Math.max(a,i[e].editorheight[i[e].level]*i[e].bw)),punchgs.TweenMax.set(i[e].c,{height:a})}),o=function(t,i){var a=[];return e.each(t,function(e,t){e!=i&&a.push(t)}),a},s=function(t,a,r){i[r].c.find(t).each(function(){var t=e(this);t.data("key")===a&&t.remove()})},n=function(e){window.revFontTestcontainer==t&&(window.revFontTestcontainer=document.createElement("span"),window.revFontTestcontainer.innerHTML=Array(100).join("wi"),window.revFontTestcontainer.style.cssText=["position:absolute","width:auto","font-size:128px","left:-99999px"].join(" !important;")),window.revFontTestcontainer.style.fontFamily=e,document.body.appendChild(window.revFontTestcontainer);var i=window.revFontTestcontainer.clientWidth;return document.body.removeChild(window.revFontTestcontainer),i},l=function(t,a){var r=9999,o=0,s=0,n=e(window).width(),l=a&&9999==i[t].responsiveLevels?i[t].visibilityLevels:i[t].responsiveLevels;l&&l.length&&e.each(l,function(e,a){n<a&&(0==o||o>parseInt(a))&&(r=parseInt(a),i[t].level=e,o=parseInt(a)),n>a&&o<a&&(o=parseInt(a),s=e)}),o<r&&(i[t].level=s),i[t].levelForced=i[t].level},d=function(t,i){var a=0;return t.find(i).each(function(){var t=e(this);!t.hasClass("tp-forcenotvisible")&&a<t.outerWidth()&&(a=t.outerWidth())}),a},c=function(r){if(r===t||i[r]===t||i[r].c===t)return!1;window._rs_firefox13=!1,window._rs_ie=window._rs_ie===t?!e.support.opacity:window._rs_ie,window._rs_ie9=window._rs_ie9===t?9==document.documentMode:window._rs_ie9;var o=e.fn.jquery.split("."),s=parseFloat(o[0]),n=parseFloat(o[1]);1==s&&n<7&&i[r].c.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+o+" <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"),s>1&&(window._rs_ie=!1),i[r].cpar!==t&&i[r].cpar.data("aimg")!=t&&("enabled"==i[r].cpar.data("aie8")&&i.isIE(8)||"enabled"==i[r].cpar.data("amobile")&&a)&&i[r].c.html('<img class="tp-slider-alternative-image" src="'+i[r].cpar.data("aimg")+'">'),i[r].realslideamount=i[r].slideamount=0;var l=i[r].canvas[0].getElementsByTagName("rs-slide");for(var d in l)l.hasOwnProperty(d)&&("on"==i.gA(l[d],"hsom")&&a?l[d].classList.add("removeslidenow"):(i.gA(l[d],"invisible")||1==i.gA(l[d],"invisible")?l[d].classList.add("not-in-nav"):i[r].slideamount++,i[r].realslideamount++,i.sA(l[d],"originalindex",i[r].realslideamount),i.sA(l[d],"origindex",i[r].realslideamount-1)));i[r].canvas.find(".removeslidenow").each(function(){e(this).remove()}),i[r].canvas.find(".not-in-nav").each(function(){e(this).appendTo(i[r].canvas)}),i[r].canvas.css({visibility:"visible"}),i[r].slayers=i[r].c.find("rs-static-layers"),i[r].slayers.length>0&&i.sA(i[r].slayers[0],"key","staticlayers"),!0===i[r].modal.useAsModal&&(i[r].cpar.wrap('<rs-modal id="'+i[r].c[0].id+'_modal"></rs-modal>'),i[r].modal.c=i[r].cpar.closest("rs-modal"),i[r].modal.c.appendTo(e("body")),i[r].modal!==t&&i[r].modal.alias!==t&&i.revModal(r,{mode:"init"})),1!=i[r].waitForInit&&1!=i[r].modal.useAsModal&&h(r)},p=function(){e("body").data("rs-fullScreenMode",!e("body").data("rs-fullScreenMode")),e("body").data("rs-fullScreenMode")&&setTimeout(function(){e(window).trigger("resize")},200)},u=function(e,a,r){return i.gA(e,"lazyload")!==t?i.gA(e,"lazyload"):i[r].lazyloaddata!==t&&i[r].lazyloaddata.length>0&&i.gA(e,i[r].lazyloaddata)!==t?i.gA(e,i[r].lazyloaddata):i.gA(e,"lazy-src")!==t?i.gA(e,"lazy-src"):i.gA(e,"lazy-wpfc-original-src")!==t?i.gA(e,"lazy-wpfc-original-src"):i.gA(e,"lazy")!==t?i.gA(e,"lazy"):a},h=function(r){if(i[r]!==t){if(i[r].sliderisrunning=!0,e(document).on("revolution.all.resize",function(){i[r].sliderisrunning&&m(r)}),i[r].shuffle){for(var o=i[r].canvas.find("rs-slide:first-child"),s=i.gA(o[0],"firstanim"),n=0;n<i[r].slideamount;n++)i[r].canvas.find("rs-slide:eq("+Math.round(Math.random()*i[r].slideamount)+")").prependTo(i[r].canvas);i.sA(i[r].canvas.find("rs-slide:first-child")[0],"firstanim",s)}for(var d in i[r].slides=i[r].canvas[0].getElementsByTagName("rs-slide"),i[r].thumbs=new Array(i[r].slides.length),i[r].slots=4,i[r].firststart=1,i[r].loadqueue=[],i[r].syncload=0,i.updateDimensions(r),i[r].slides)if(i[r].slides.hasOwnProperty(d)&&"length"!==d){var c=i[r].slides[d],h=c.getElementsByClassName(".rev-slidebg");h=0===h.length?c.getElementsByTagName("img")[0]:h,i.gA(c,"key")===t&&i.sA(c,"key","rs-"+Math.round(999999*Math.random()));var v={params:Array(12),id:i.gA(c,"key"),src:i.gA(c,"thumb")!==t?i.gA(c,"thumb"):u(h,h.src,r)};i.gA(c,"title")===t&&i.sA(c,"title",""),i.gA(c,"description")===t&&i.sA(c,"description",""),v.params[0]={from:RegExp("\\{\\{title\\}\\}","g"),to:i.gA(c,"title")},v.params[1]={from:RegExp("\\{\\{description\\}\\}","g"),to:i.gA(c,"description")};for(var y=1;y<=10;y++)i.gA(c,"p"+y)!==t?v.params[y+1]={from:RegExp("\\{\\{param"+y+"\\}\\}","g"),to:i.gA(c,"p"+y)}:v.params[y+1]={from:RegExp("\\{\\{param"+y+"\\}\\}","g"),to:""};if(i[r].thumbs[d]=v,i.gA(c,"link")!=t||i.gA(c,"linktoslide")!==t){var w=i.gA(c,"link")!==t?i.gA(c,"link"):"slide",_="slide"!=w?"no":i.gA(c,"linktoslide"),x=i.gA(c,"seoz");if(_!=t&&"no"!=_&&"next"!=_&&"prev"!=_)for(var k in i[r].slides)i[r].slides.hasOwnProperty(k)&&parseInt(i.gA(i[r].slides[k],"origindex"),0)+1==i.gA(c,"linktoslide")&&(_=i.gA(i[r].slides[k],"key"));e(c).append('<rs-layer class="rs-layer slidelink" style="z-index:'+("back"===x?0:"front"===x?60:x!==t?parseInt(x,0):100)+';" dataxy="x:c;y:c" data-dim="w:100%;h:100%" data-basealign="slide"'+("no"==_?"":"  data-actions='"+("scroll_under"===_?"o:click;a:scrollbelow;offset:100px;":"prev"===_?"o:click;a:jumptoslide;slide:prev;d:0.2;":"next"===_?"o:click;a:jumptoslide;slide:next;d:0.2;":"o:click;a:jumptoslide;slide:"+_+";d:0.2;")+"'")+" data-frame_1='e:Power3.easeInOut;st:100;sp:100' data-frame_999='e:Power3.easeInOut;o:0;st:w;sp:100'><a "+("slide"!=w?' target="'+(i.gA(c,"target")||"_self")+'" href="'+w+'"':"")+"><span></span></a></rs-layer>")}}if(i[r].simplifyAll&&(i.isIE(8)||i.iOSVersion())&&(i[r].c.find(".rs-layer").each(function(){var t=e(this);t.removeClass("customin customout").addClass("fadein fadeout"),t.data("splitin",""),t.data("speed",400)}),i[r].slides.each(function(){var t=e(this);t.data("transition","fade"),t.data("masterspeed",500),t.data("slotamount",1),(t.find(".rev-slidebg")||t.find(">img").first()).data("panzoom",null)})),window._rs_desktop=window._rs_desktop===t?!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i):window._rs_desktop,i[r].autoHeight="fullscreen"==i[r].sliderLayout||i[r].autoHeight,"fullwidth"!=i[r].sliderLayout||i[r].autoHeight||i[r].c.css({maxHeight:i[r].gridheight[i[r].level]+"px"}),"auto"==i[r].sliderLayout||0!=i[r].c.closest("rs-fullwidth-wrap").length||"fullscreen"===i[r].sliderLayout&&1==i[r].disableForceFullWidth)i[r].topc=i[r].cpar;else{var T=i[r].cpar[0].style.marginTop,L=i[r].cpar[0].style.marginBottom;T=T===t||""===T?"":"margin-top:"+T+";",L=L===t||""===L?"":"margin-bottom:"+L+";",i[r].topc=e('<rs-fullwidth-wrap id="'+i[r].c[0].id+'_forcefullwidth" style="'+T+L+'"></rs-fullwidth-wrap>'),i[r].forcer=e('<rs-fw-forcer style="height:'+i[r].cpar.height()+'px"></rs-fw-forcer>'),i[r].topc.append(i[r].forcer),i[r].topc.insertBefore(i[r].cpar),i[r].cpar.detach(),i[r].cpar.css({marginTop:"0px",marginBottom:"0px",position:"absolute"}),i[r].cpar.prependTo(i[r].topc)}if(i[r].forceOverflow&&i[r].topc[0].classList.add("rs-forceoverflow"),"carousel"===i[r].sliderType&&i[r].c.css({overflow:"visible"}),0!==i[r].maxHeight&&punchgs.TweenMax.set([i[r].cpar,i[r].c,i[r].topc],{maxHeight:i[r].maxHeight+"px"}),i[r].fixedOnTop&&punchgs.TweenMax.set(i[r].topc,{position:"fixed",top:"0px",left:"0px",pointerEvents:"none",zIndex:5e3}),i[r].shadow!==t&&i[r].shadow>0&&i[r].cpar.addClass("tp-shadow"+i[r].shadow).append('<div class="tp-shadowcover" style="background-color:'+i[r].cpar.css("backgroundColor")+";background-image:"+i[r].cpar.css("backgroundImage")+'"></div>'),l(r),!i[r].c.hasClass("revslider-initialised")){i[r].c[0].classList.add("revslider-initialised"),i[r].c[0].id=i[r].c[0].id===t?"revslider-"+Math.round(1e3*Math.random()+5):i[r].c[0].id,i.revCheckIDS(r,i[r].c[0]),i[r].origcd=parseInt(i[r].duration,0),i[r].scrolleffect._L=[],i[r].sbas=i[r].sbas===t?{}:i[r].sbas,i[r].layers=i[r].layers||{},i[r].sortedLayers=i[r].sortedLayers||{},i[r].c.detach(),i[r].c.find("rs-layer, rs-row, rs-column, rs-group,  rs-bgvideo, .rs-layer").each(function(){var a,o,s=e(this),n=s.data();if(n.startclasses=this.className,n.startclasses=n.startclasses===t||null===n.startclasses?"":n.startclasses,n.animationonscroll=!!i[r].sbtimeline.set&&i[r].sbtimeline.layers,n.animationonscroll=!0===n.animationonscroll||"true"==n.animationonscroll,n.filteronscroll=!!i[r].scrolleffect.set&&i[r].scrolleffect.layers,n.pxundermask=n.startclasses.indexOf("rs-pxmask")>=0&&"off"!==i[r].parallax.type&&n.startclasses.indexOf("rs-pxl-")>=0,n.noPevents=n.startclasses.indexOf("rs-noevents")>=0,n.sba)for(var l in a=n.sba.split(";"))a.hasOwnProperty(l)&&("t"==(o=a[l].split(":"))[0]&&(n.animationonscroll=o[1],"false"==o[1]&&(n.animOnScrollForceDisable=!0)),"e"==o[0]&&(n.filteronscroll=o[1]),"so"==o[0]&&(n.scrollBasedOffset=parseInt(o[1])/1e3));if("true"!=n.animationonscroll&&1!=n.animationonscroll||(n.startclasses+=" rs-sba",s[0].className+=" rs-sba"),n.startclasses.indexOf("rs-layer-static")>=0&&i.handleStaticLayers&&i.handleStaticLayers(s,r),"RS-BGVIDEO"!==s[0].tagName){if(s[0].classList.add("rs-layer"),"column"===n.type&&(n.columnwidth="33.33%",n.verticalalign="top",n.column!==t))for(var d in a=n.column.split(";"))a.hasOwnProperty(d)&&("w"===(o=a[d].split(":"))[0]&&(n.columnwidth=o[1]),"a"===o[0]&&(n.verticalalign=o[1]));var c=n.startclasses.indexOf("slidelink")>=0?"width:100% !important;height:100% !important;":"",p="column"!==n.type?"":n.verticalalign===t?" vertical-align:top;":" vertical-align:"+n.verticalalign+";",u="row"===n.type||"column"===n.type?"position:relative;":"position:absolute;",h="",g="row"===n.type?"rs-row-wrap":"column"===n.type?"rs-column-wrap":"group"===n.type?"rs-group-wrap":"rs-layer-wrap",f="",m="",v=(n.noPevents,";pointer-events:none");for(var y in"row"===n.type||"column"===n.type||"group"===n.type?(s[0].classList.remove("tp-resizeme"),"column"===n.type&&(n.width="auto",s[0].group="row",punchgs.TweenMax.set(s,{width:"auto"}),n.filteronscroll=!1)):(f="display:"+("inline-block"===s[0].style.display?"inline-block":"block")+";",s.closest("rs-column").length>0?(s[0].group="column",n.filteronscroll=!1):s.closest("rs-group-wrap").length>0&&(s[0].group="group",n.filteronscroll=!1)),n.wrpcls!==t&&(h=h+" "+n.wrpcls),n.wrpid!==t&&(m='id="'+n.wrpid+'"'),n.maskinuse=!1,n)n.maskinuse&&n.hasOwnProperty(y)&&(n.maskinuse=y.indexOf("_mask")>0);s.wrap("<"+g+" "+m+' class="rs-parallax-wrap '+h+'" style="'+p+" "+c+u+f+v+'"><rs-loop-wrap style="'+c+u+f+'"><rs-mask-wrap style="'+c+u+f+'">'+(n.pxundermask?"<rs-px-mask></rs-px-mask>":"")+"</rs-mask-wrap></rs-loop-wrap></"+g+">"),!0!==n.filteronscroll&&"true"!=n.filteronscroll||i[r].scrolleffect._L.push(s.parent()),s[0].id=s[0].id===t?"layer-"+Math.round(999999999*Math.random()):s[0].id,i.revCheckIDS(r,s[0]),"column"===n.type&&s.closest(".rs-parallax-wrap").append('<rs-cbg-mask-wrap><rs-column-bg id="'+s[0].id+'_rs_cbg"></rs-column-bg></rs-cbg-mask-wrap>'),"text"===n.type&&s[0].getElementsByTagName("iframe").length>0&&s[0].classList.add("rs-ii-o"),punchgs.TweenMax.set(s,{visibility:"hidden"}),i[r].BUG_safari_clipPath&&s[0].classList.add("rs-pelock")}i.gA(s[0],"actions")&&i.checkActions&&i.checkActions(s,r,i[r]),!i.checkVideoApis||window.rs_addedvim&&window.rs_addedyt||i[r].youtubeapineeded&&i[r].vimeoapineeded||i.checkVideoApis(s,r)}),i.checkActions&&i.checkActions(t,r),i[r].c.prependTo(i[r].cpar),i[r].c[0].addEventListener("mouseenter",function(){i[r].c.trigger("tp-mouseenter"),i[r].overcontainer=!0},{passive:!0}),i[r].c[0].addEventListener("mouseover",function(){i[r].c.trigger("tp-mouseover"),i[r].overcontainer=!0},{passive:!0}),i[r].c[0].addEventListener("mouseleave",function(){i[r].c.trigger("tp-mouseleft"),i[r].overcontainer=!1},{passive:!0}),i[r].c.find(".rs-layer video").each(function(t){var i=e(this);i.removeClass("video-js vjs-default-skin"),i.attr("preload",""),i.css({display:"none"})}),"standard"!==i[r].sliderType&&(i[r].lazyType="all"),i[r].rs_static_layer=i[r].c[0].getElementsByTagName("rs-static-layers"),i[r].rs_static_layer.length>0&&(I(i[r].rs_static_layer[0],r,0,!0),A(i[r].rs_static_layer[0],r,function(){i[r]!==t&&i[r].c.find("rs-static-layers img").each(function(){this.src=i.getLoadObj(r,i.gA(this,"src")!=t?i.gA(this,"src"):this.src).src})})),i[r].rowzones=[],i[r].middleZones=[];var R=B("#")[0];if(R.length<9&&R.split("slide").length>1&&-1==R.indexOf("slider")){var S=parseInt(R.split("slide")[1],0);e.isNumeric(parseInt(S,0))&&((S=parseInt(S,0))<1&&(S=1),S>i[r].slideamount&&(S=i[r].slideamount),i[r].startWithSlide=S-1)}i[r].loader=i.buildSpinner(r,i[r].spinner,i[r].spinnerclr),i[r].c.append(i[r].loader);var z=window.getComputedStyle(i[r].c[0].parentNode,null);i[r].c.height(z.height),0===i[r].c.find("rs-progress").length&&i[r].c.append('<rs-progress style="visibility:hidden"></rs-progress>'),i[r].c.find("rs-progress").css({width:"0%"}),i[r].canvas.css({display:"block"}),b(r),i[r].slides=i[r].canvas.find("rs-slide").not(".rs-not-in-nav"),i[r].inli=i[r].canvas.find("rs-slide.rs-not-in-nav"),("off"!==i[r].parallax.type||i[r].scrolleffect.set||i[r].sbtimeline.set)&&i.checkForParallax&&i.checkForParallax(r),i.setSize(r,!1),"hero"!==i[r].sliderType&&i.createNavigation&&i[r].navigation.use&&i.createNavigation(r),i.resizeThumbsTabs&&i.resizeThumbsTabs&&i[r].navigation.use&&i.resizeThumbsTabs(r),g(r);var M=i[r].viewPort;i[r].inviewport=!1,M!=t&&M.enable&&i.scrollTicker&&i.scrollTicker(r),i[r].slides.each(function(t){var a=e(this);i[r].rowzones[t]=[],i[r].middleZones[t]=[],a.find("rs-zone").each(function(){i[r].rowzones[t].push(e(this)),this.className.indexOf("rev_row_zone_middle")>=0&&i[r].middleZones[t].push(this)}),((M.enable&&i[r].inviewport||!M.enable)&&"all"==i[r].lazyType||"smart"==i[r].lazyType&&(0==t||1==t||t==i[r].slideamount||t==i[r].slideamount-1))&&(I(a[0],r,t),A(a[0],r,function(){}))}),i[r].srowzones=[],i[r].smiddleZones=[],i[r].slayers.find("rs-zone").each(function(){i[r].srowzones.push(e(this)),this.className.indexOf("rev_row_zone_middle")>=0&&i[r].smiddleZones.push(this)}),"carousel"===i[r].sliderType&&i.prepareCarousel&&(punchgs.TweenMax.set(i[r].canvas,{scale:1,perspective:1200,transformStyle:"flat",opacity:0}),i.prepareCarousel(r,new punchgs.TimelineLite,t,0),i[r].onlyPreparedSlide=!0),setTimeout(function(){!M.enable||M.enable&&i[r].inviewport||M.enable&&!i[r].inviewport&&"wait"!==M.outof?O(r):(i[r].c.addClass("tp-waitforfirststart"),i[r].waitForFirstSlide=!0,M.presize&&(i[r].pr_next_slide=e(i[r].slides[0]),I(i[r].pr_next_slide[0],r,0,!0),A(i[r].pr_next_slide.find(".tp-layers"),r,function(){i.animateTheLayers&&i.animateTheLayers({slide:i[r].pr_next_key,id:r,mode:"preset"})}))),i.manageNavigation&&i[r].navigation.use&&i.manageNavigation(r),i[r].slideamount>1&&(!M.enable||M.enable&&i[r].inviewport?j(r):i[r].waitForCountDown=!0),setTimeout(function(){i[r]!==t&&i[r].c.trigger("revolution.slide.onloaded")},50)},i[r].startDelay),i[r].startDelay=0,e("body").data("rs-fullScreenMode",!1),window.addEventListener("fullscreenchange",p,{passive:!0}),window.addEventListener("mozfullscreenchange",p,{passive:!0}),window.addEventListener("webkitfullscreenchange",p,{passive:!0});var C="resize.revslider-"+i[r].c.attr("id");e(window).on(C,function(){if(i[r]!==t){if(i[r].c==t)return!1;0!=e("body").find(i[r].c)&&(l(r),g(r));var o=!1;if("fullscreen"==i[r].sliderLayout){var s=e(window).height();"mobile"==i[r].fallbacks.ignoreHeightChanges&&a||"always"==i[r].fallbacks.ignoreHeightChanges?(i[r].fallbacks.ignoreHeightChangesSize=i[r].fallbacks.ignoreHeightChangesSize==t?0:i[r].fallbacks.ignoreHeightChangesSize,o=s!=i[r].lastwindowheight&&Math.abs(s-i[r].lastwindowheight)>i[r].fallbacks.ignoreHeightChangesSize):o=s!=i[r].lastwindowheight}(i[r].c.outerWidth(!0)!=i[r].width||i[r].c.is(":hidden")||o)&&(i[r].lastwindowheight=e(window).height(),m(r))}}),f(r),g(r),i[r].fallbacks.disableFocusListener||"true"==i[r].fallbacks.disableFocusListener||!0===i[r].fallbacks.disableFocusListener||(i[r].c.addClass("rev_redraw_on_blurfocus"),N())}}},g=function(a){var r=i.getHorizontalOffset(i[a].c,"left");if("auto"===i[a].sliderLayout||"fullscreen"===i[a].sliderLayout&&!0===i[a].disableForceFullWidth?"fullscreen"==i[a].sliderLayout&&1==i[a].disableForceFullWidth?punchgs.TweenMax.set(i[a].cpar,{left:0,width:"auto"}):punchgs.TweenMax.set(i[a].canvas,{left:"carousel"===i[a].sliderType?0:r,width:i[a].c.width()-i.getHorizontalOffset(i[a].c,"both")}):punchgs.TweenMax.set(i[a].cpar,{left:0-Math.ceil(i[a].c.closest("rs-fullwidth-wrap").offset().left-r)+"px",width:e(window).width()-i.getHorizontalOffset(i[a].c,"both")}),"auto"===i[a].sliderLayout&&i[a].modal!==t&&i[a].modal.useAsModal){var o=Math.min(i[a].gridwidth[i[a].level],window.innerWidth);punchgs.TweenMax.set([i[a].modal.c,i[a].canvas],{width:o})}i[a].slayers&&"fullwidth"!=i[a].sliderLayout&&"fullscreen"!=i[a].sliderLayout&&punchgs.TweenMax.set(i[a].slayers,{left:r})},f=function(a,r){e(window).width()<i[a].hideSliderAtLimit?(i[a].c.trigger("stoptimer"),i.sA(i[a].cpar[0],"displaycache","none"!=i[a].cpar.css("display")?i[a].cpar.css("display"):i.gA(i[a].cpar[0],"displaycache")),i[a].cpar.css({display:"none"})):i[a].c.is(":hidden")&&r&&(i.gA(i[a].cpar[0],"displaycache")!=t&&"none"!=i.gA(i[a].cpar[0],"displaycache")?i[a].cpar.css({display:i.gA(i[a].cpar[0],"displaycache")}):i[a].cpar.css({display:"block"}),i[a].c.trigger("restarttimer"),setTimeout(function(){m(a)},150)),i.hideUnHideNav&&i[a].navigation.use&&i.hideUnHideNav(a)},m=function(r){if(i[r].c===t)return!1;i[r].dimensionReCheck={},i[r].c.trigger("revolution.slide.beforeredraw"),1==i[r].infullscreenmode&&(i[r].minHeight=e(window).height()),a&&(i[r].lastMobileHeight=window.innerHeight),l(r),i.resizeThumbsTabs&&!0!==i.resizeThumbsTabs(r)||(f(r,!0),g(r),"carousel"==i[r].sliderType&&i.prepareCarousel(r,!0),i.setSize(r),i.updateDimensions(r),"standard"===i[r].sliderType&&i[r].mtl!==t&&i.animateSlide({recall:!0,id:r}),"carousel"===i[r].sliderType&&i[r].lastconw!=i[r].conw&&(clearTimeout(i[r].pcartimer),i[r].pcartimer=setTimeout(function(){i.prepareCarousel(r,!0),"carousel"==i[r].sliderType&&i[r].carousel.showLayersAllTime&&e.each(i[r].slides,function(e){i.animateTheLayers&&i.animateTheLayers({slide:e,id:r,mode:"rebuild"})})},100),i[r].lastconw=i[r].conw),i.animateTheLayers&&(i[r].pr_processing_key!==t?i.animateTheLayers({slide:i[r].pr_processing_key,id:r,mode:"rebuild"}):i[r].pr_active_key!==t&&i.animateTheLayers({slide:i[r].pr_active_key,id:r,mode:"rebuild"}),i.scrollHandling&&i.scrollHandling(r,!0)),v(r,i[r].pr_next_bg),"carousel"!==i[r].sliderType&&v(r,i[r].pr_active_bg),i.manageNavigation&&i.manageNavigation(r)),i[r].c.trigger("revolution.slide.afterdraw"),setTimeout(function(){g(r)},19)},v=function(e,a){a&&a.data("panzoom")!==t&&i.startPanZoom(a,e,a.data("pztl")!==t?a.data("pztl").progress():0)},y=function(e){i[e].bw=i[e].width/i[e].gridwidth[i[e].level],i[e].bh=i[e].height/i[e].gridheight[i[e].level],i[e].bw=isNaN(i[e].bw)?1:i[e].bw,i[e].bh=isNaN(i[e].bh)?1:i[e].bh,i[e].bh>i[e].bw?i[e].bh=i[e].bw:i[e].bw=i[e].bh,(i[e].bh>1||i[e].bw>1)&&(i[e].bw=1,i[e].bh=1)},b=function(a){i[a].autoHeight&&punchgs.TweenMax.set([i[a].c,i[a].cpar],{maxHeight:"none"}),punchgs.TweenMax.set(i[a].canvas,{overflow:"hidden",width:"100%",height:"100%",maxHeight:i[a].autoHeight?"none":i[a].cpar.css("maxHeight")}),"carousel"===i[a].sliderType&&(i[a].canvas.css({overflow:"visible"}).wrap("<rs-carousel-wrap></rs-carousel-wrap>"),i[a].cpar.prepend("<rs-carousel-space></rs-carousel-space>").append("<rs-carousel-space></rs-carousel-space>"),i.prepareCarousel(a)),i[a].startWithSlide=i[a].startWithSlide===t?t:"carousel"===i[a].sliderType?parseInt(i[a].startWithSlide):parseInt(i[a].startWithSlide)+1,i[a].cpar.css({overflow:"visible"}),i[a].scrolleffect.bgs=[];for(var r=0;r<i[a].slides.length;r++){var o=e(i[a].slides[r]),s=o.find(">img"),n=o.find("rs-bgvideo");s.detach(),n.detach(),(i[a].startWithSlide!=t&&i.gA(i[a].slides[r],"originalindex")==i[a].startWithSlide||i[a].startWithSlide===t&&0==r)&&(i[a].pr_next_key=o.index()),punchgs.TweenMax.set(o,{width:"100%",height:"100%",overflow:"hidden"}),s.wrap("<rs-sbg-px><rs-sbg-wrap></rs-sbg-wrap></rs-sbg-px>");var l=s.closest("rs-sbg-wrap"),d=o.data("mediafilter"),c=w(s.data(),a,s[0].style.backgroundColor),p=c.bgcolor!==t&&c.bgcolor.indexOf("gradient")>=0,h=c.bgcolor!==t&&c.bgcolor.indexOf("gradient")>=0?"background:"+c.bgcolor+";":"background-color:"+c.bgcolor+";";l.append('<canvas class="bgcanvas"></canvas>'),c.src=s[0].src,c.lazyload=u(s[0],t,a),c.slidebgimage=!0,d="none"===d||d===t?"":d,n.length>0&&(n.addClass("defaultvid").css({zIndex:30}),n.appendTo(l),d!==t&&""!==d&&"none"!==d&&n.addClass(d),c.parallax!=t&&(n.data("parallax",c.parallax),n.data("showcoveronpause","on"),n.data("mediafilter",d))),"none"!=i[a].dottedOverlay&&i[a].dottedOverlay!=t&&l.append('<rs-dotted class="'+i[a].dottedOverlay+'"></rs-dotted>'),h+=(p?"":"background-repeat:"+c.bgrepeat+";background-image:url("+c.src+");background-size:"+c.bgfit+";background-position:"+c.bgposition+";")+"width:100%;height:100%;",h+="standard"===i[a].sliderType||"undefined"===i[a].sliderType?"opacity:0;":"",s.data("mediafilter",d),d=s.data("panzoom")!==t?"":d;var g=e("<rs-sbg "+(c.lazyload!==t?'data-lazyload="'+c.lazyload+'"':"")+' src="'+c.src+'" class="'+d+'" data-bgcolor="'+c.bgcolor+'" style="'+h+'"></rs-sbg>');l.append(g);var f=document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - "+s.get(0).outerHTML);s.replaceWith(f),l.data(c),g.data(c),i.gA(o[0],"sba")===t&&i.sA(o[0],"sba","");var m={},v=i.gA(o[0],"sba").split(";");for(var y in v)if(v.hasOwnProperty(y)){var b=v[y].split(":");switch(b[0]){case"f":m.f=b[1];break;case"b":m.b=b[1];break;case"g":m.g=b[1];break;case"t":m.s=b[1]}}i.sA(o[0],"scroll-based",!!i[a].sbtimeline.set&&(m.s!==t&&m.s)),i[a].scrolleffect.set?(i[a].scrolleffect.bgs.push({fade:m.f!==t?m.f:!!i[a].scrolleffect.slide&&i[a].scrolleffect.fade,blur:m.b!==t?m.b:!!i[a].scrolleffect.slide&&i[a].scrolleffect.blur,grayscale:m.g!==t?m.g:!!i[a].scrolleffect.slide&&i[a].scrolleffect.grayscale,c:l.wrap("<rs-sbg-effectwrap></rs-sbg-effectwrap>").parent()}),o.prepend(l.parent().parent())):o.prepend(l.parent())}},w=function(r,o,s){r.bg=r.bg===t?"":r.bg;var n=r.bg.split(";"),l={bgposition:"50% 50%",bgfit:"cover",bgrepeat:"no-repeat",bgcolor:s||"transparent"};for(var d in n)if(n.hasOwnProperty(d)){var c=n[d].split(":"),p=c[0],u=c[1],h="";switch(p){case"p":h="bgposition";break;case"f":h="bgfit";break;case"r":h="bgrepeat";break;case"c":h="bgcolor"}h!==t&&(l[h]=u)}return i[o].fallbacks.panZoomDisableOnMobile&&a&&(l.panzoom=null,l.bgfit="cover"),e.extend(!0,r,l)},_=function(e,t){t.find(".slot, .slot-circle-wrapper").each(function(){}),i[e].transition=0},x=function(e){var i=e;return e!=t&&e.length>0&&(i=e.split("?")[0]),i},k=function(e){var i=e;return e!=t&&e.length>0&&(i=i.replace(document.location.protocol,"")),i},T=function(e,t){var i=e.split("/"),a=t.split("/");i.pop();for(var r=0;r<a.length;r++)"."!=a[r]&&(".."==a[r]?i.pop():i.push(a[r]));return i.join("/")},L=function(e,a,r){if(i[a]!==t){for(var o in i[a].syncload--,i[a].loadqueue)if(i[a].loadqueue.hasOwnProperty(o)&&"loaded"!==i[a].loadqueue[o].progress){var s=i[a].loadqueue[o].src!==t?i[a].loadqueue[o].src.replace(/\.\.\/\.\.\//gi,""):i[a].loadqueue[o].src;(s===e.src||k(s)===k(e.src)||x(document.location.protocol+s)===x(decodeURIComponent(e.src))||x(document.location.origin+s)===x(decodeURIComponent(e.src))||x(self.location.href.substring(0,self.location.href.length-1)+s)===x(decodeURIComponent(e.src))||x(T(self.location.href,i[a].loadqueue[o].src))===x(decodeURIComponent(e.src))||x(document.location.origin+"/"+s)===x(decodeURIComponent(e.src))||x(self.location.href.substring(0,self.location.href.length-1)+"/"+s)===x(decodeURIComponent(e.src))||x(i[a].loadqueue[o].src)===x(decodeURIComponent(e.src))||"file://"===window.location.origin&&x(e.src).match(new RegExp(s)))&&(i[a].loadqueue[o].img=e,i[a].loadqueue[o].progress=r,i[a].loadqueue[o].width=e.width,i[a].loadqueue[o].height=e.height)}R(a)}},R=function(t){4!=i[t].syncload&&i[t].loadqueue&&e.each(i[t].loadqueue,function(a,r){if("prepared"==r.progress&&i[t].syncload<=4){if(i[t].syncload++,"img"==r.type){var o=new Image;o.crossOrigin="",o.onload=function(){L(this,t,"loaded"),r.error=!1},o.onerror=function(){L(this,t,"failed"),r.error=!0},o.src=r.src,r.starttoload=e.now()}else e.get(r.src,function(e){r.innerHTML=(new XMLSerializer).serializeToString(e.documentElement),r.progress="loaded",i[t].syncload--,R(t)}).fail(function(){r.progress="failed",i[t].syncload--,R(t)});r.progress="inload"}})},I=function(a,r,o,s){if(a!==t&&0!==a.length){var n=a.querySelectorAll("img, rs-sbg, .rs-svg");for(var l in n)if(n.hasOwnProperty(l)){var d=u(n[l],t,r),c=d!==t?d:i.gA(n[l],"svg_src")!=t?i.gA(n[l],"svg_src"):n[l].src===t?e(n[l]).data("src"):n[l].src,p=i.gA(n[l],"svg_src")!=t?"svg":"img";c!==t&&0==i[r].loadqueue.filter(function(e){return e.src===c}).length&&i[r].loadqueue.push({src:c,index:l,starttoload:e.now(),type:p||"img",prio:o,progress:n[l].complete&&c===n[l].src?"loaded":"prepared",static:s,width:n[l].complete&&c===n[l].src?n[l].width:t,height:n[l].complete&&c===n[l].src?n[l].height:t})}R(r)}},A=function(r,o,s){if(r!==t&&0!==r.length&&i[o]!==t){var n=!1,l=r.querySelectorAll("img, rs-sbg, .rs-svg");for(var d in l)if(l.hasOwnProperty(d)&&"length"!==d&&!(l[d].className.indexOf("rs-pzimg")>=0)){var c=e(l[d]).data(),p=u(l[d],t,o),h=p!==t?p:i.gA(l[d],"svg_src")!=t?i.gA(l[d],"svg_src"):l[d].src===t?e(l[d]).data("src"):l[d].src,g=i.getLoadObj(o,h);if(i.sA(l[d],"src-rs-ref",h),c.loaded===t&&g!==t&&g.progress&&"loaded"==g.progress){if(l[d].src=g.src,"img"==g.type){if(c.slidebgimage){-1==g.src.indexOf("images/transparent.png")&&-1==g.src.indexOf("assets/transparent.png")||c.bgcolor===t?l[d].style.backgroundImage='url("'+g.src+'")':c.bgcolor!==t&&(l[d].style.background=c.bgcolor),i.sA(r,"owidth",g.width),i.sA(r,"oheight",g.height);var f=r.getElementsByTagName("rs-sbg-wrap");f.length>0&&(i.sA(f[0],"owidth",g.width),i.sA(f[0],"oheight",g.height))}}else"svg"==g.type&&"loaded"==g.progress&&(l[d].innerHTML=g.innerHTML);c.loaded=!0}g&&g.progress&&g.progress.match(/inprogress|inload|prepared/g)&&(!g.error&&e.now()-g.starttoload<3e3?n=!0:(g.progress="failed",g.reported_img||(g.reported_img=!0,console.log(h+"  Could not be loaded !")))),1!=i[o].youtubeapineeded||window.YT&&YT.Player!=t||(n=z("youtube",o)),1!=i[o].vimeoapineeded||window.Vimeo||(n=z("vimeo",o))}!a&&i[o].audioqueue&&i[o].audioqueue.length>0&&e.each(i[o].audioqueue,function(t,i){i.status&&"prepared"===i.status&&e.now()-i.start<i.waittime&&(n=!0)}),e.each(i[o].loadqueue,function(t,i){!0===i.static&&("loaded"!=i.progress&&"done"!==i.progress||"failed"===i.progress)&&("failed"!=i.progress||i.reported?!i.error&&e.now()-i.starttoload<5e3?n=!0:i.reported||(i.reported=S(i.src,i.error)):i.reported=S(i.src,i.error))}),n?punchgs.TweenMax.delayedCall(.18,A,[r,o,s]):punchgs.TweenMax.delayedCall(.18,s)}},S=function(e,t){return console.log("Static Image "+e+"  Could not be loaded in time. Error Exists:"+t),!0},z=function(t,a){if(e.now()-i[a][t+"starttime"]>5e3&&1!=i[a][t+"warning"]){i[a][t+"warning"]=!0;var r=t+" Api Could not be loaded !";"https:"===location.protocol&&(r+=" Please Check and Renew SSL Certificate !"),console.error(r),i[a].c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+r+"</strong></div>")}return!0},M=function(a){i[a]!==t&&(i[a].pr_active_slide=e(i[a].slides[i[a].pr_active_key]),i[a].pr_next_slide=e(i[a].slides[i[a].pr_processing_key]),i[a].pr_active_bg=i[a].pr_active_slide.find("rs-sbg-wrap"),i[a].pr_next_bg=i[a].pr_next_slide.find("rs-sbg-wrap"),punchgs.TweenMax.to([i[a].pr_active_bg,i[a].pr_next_bg],.5,{opacity:0}),punchgs.TweenMax.set(i[a].pr_active_slide,{zIndex:18}),punchgs.TweenMax.set(i[a].pr_next_slide,{autoAlpha:0,zIndex:20}),i[a].tonpause=!1,i.removeTheLayers&&i[a].pr_active_key!==t&&i.removeTheLayers(i[a].pr_active_slide,a,!0),i[a].firststart=1,setTimeout(function(){delete i[a].pr_active_key,delete i[a].pr_processing_key},200))},O=function(a,r){if(i[a]!==t)if(clearTimeout(i[a].waitWithSwapSlide),i[a].pr_processing_key===t){if(i[a].startWithSlideKey!==t&&(i[a].pr_next_key=i.getComingSlide(a,i[a].startWithSlideKey).nindex,delete i[a].startWithSlideKey),i[a].pr_active_slide=e(i[a].slides[i[a].pr_active_key]),i[a].pr_next_slide=e(i[a].slides[i[a].pr_next_key]),i[a].pr_next_key==i[a].pr_active_key&&!0!==i[a].onlyPreparedSlide)return delete i[a].pr_next_key;!0===i[a].onlyPreparedSlide&&(i[a].onlyPreparedSlide=!1),i[a].pr_processing_key=i[a].pr_next_key,i[a].pr_cache_pr_next_key=i[a].pr_next_key,delete i[a].pr_next_key,i[a].pr_next_slide!==t&&i[a].pr_next_slide[0]!==t&&i.gA(i[a].pr_next_slide[0],"hal")!==t&&i.sA(i[a].pr_next_slide[0],"sofacounter",i.gA(i[a].pr_next_slide[0],"sofacounter")===t?1:parseInt(i.gA(i[a].pr_next_slide[0],"sofacounter"),0)+1),i[a].stopLoop&&i[a].pr_processing_key==i[a].lastslidetoshow-1&&(i[a].c.find("rs-progress").css({visibility:"hidden"}),i[a].c.trigger("revolution.slide.onstop"),i[a].noloopanymore=1),i[a].pr_next_slide.index()===i[a].slideamount-1&&i[a].looptogo>0&&"disabled"!==i[a].looptogo&&(i[a].looptogo--,i[a].looptogo<=0&&(i[a].stopLoop=!0)),i[a].tonpause=!0,i[a].c.trigger("stoptimer"),"off"===i[a].spinner&&(i[a].loader!==t?i[a].loader.css({display:"none"}):i[a].loadertimer=setTimeout(function(){i[a].loader!==t&&i[a].loader.css({display:"block"})},18)),I(i[a].pr_next_slide[0],a,1),i.preLoadAudio&&i.preLoadAudio(i[a].pr_next_slide,a,1),A(i[a].pr_next_slide[0],a,function(){i[a]!==t&&(i[a].pr_next_slide.find("rs-bgvideo").each(function(){var t=e(this);t.hasClass("HasListener")||(t.data("bgvideo",1),i.manageVideoLayer&&i.manageVideoLayer(t,a)),0==t.find(".rs-fullvideo-cover").length&&t.append('<div class="rs-fullvideo-cover"></div>')}),C(i[a].pr_next_slide.find("rs-sbg"),a,r))}),g(a)}else i[a].waitWithSwapSlide=setTimeout(function(){O(a,r)},18)},C=function(a,r,o){if(i[r]!==t){if(i[r].pr_active_slide=e(i[r].slides[i[r].pr_active_key]),i[r].pr_next_slide=e(i[r].slides[i[r].pr_processing_key]),i[r].pr_active_bg=i[r].pr_active_slide.find("rs-sbg-wrap"),i[r].pr_next_bg=i[r].pr_next_slide.find("rs-sbg-wrap"),i[r].tonpause=!1,clearTimeout(i[r].loadertimer),i[r].loader!==t&&i[r].loader.css({display:"none"}),i.setSize(r),i.manageNavigation&&i[r].navigation.use&&i.manageNavigation(r,!1),i[r].c.trigger("revolution.slide.onbeforeswap",{slider:r,slideIndex:parseInt(i[r].pr_active_key,0)+1,slideLIIndex:i[r].pr_active_key,nextSlideIndex:parseInt(i[r].pr_processing_key,0)+1,nextSlideLIIndex:i[r].pr_processing_key,nextslide:i[r].pr_next_slide,slide:i[r].pr_active_slide,currentslide:i[r].pr_active_slide,prevslide:i[r].pr_lastshown_key!==t?i[r].slides[i[r].pr_lastshown_key]:""}),i[r].transition=1,i[r].stopByVideo=!1,i[r].pr_next_slide[0]!==t&&i.gA(i[r].pr_next_slide[0],"duration")!=t&&""!=i.gA(i[r].pr_next_slide[0],"duration")?i[r].duration=parseInt(i.gA(i[r].pr_next_slide[0],"duration"),0):i[r].duration=i[r].origcd,i[r].pr_next_slide[0]===t||"true"!=i.gA(i[r].pr_next_slide[0],"ssop")&&!0!==i.gA(i[r].pr_next_slide[0],"ssop")?i[r].ssop=!1:i[r].ssop=!0,i[r].sbtimeline.set&&i[r].sbtimeline.fixed&&i.updateFixedScrollTimes(r),i[r].c.trigger("nulltimer"),i[r].sdir=i[r].pr_processing_key<i[r].pr_active_key?1:0,"arrow"==i[r].sc_indicator&&(0==i[r].pr_active_key&&i[r].pr_processing_key==i[r].slideamount-1&&(i[r].sdir=1),i[r].pr_active_key==i[r].slideamount-1&&0==i[r].pr_processing_key&&(i[r].sdir=0)),i[r].lsdir=i[r].sdir,i[r].pr_active_key!=i[r].pr_processing_key&&1!=i[r].firststart&&"carousel"!==i[r].sliderType&&i.removeTheLayers&&i.removeTheLayers(i[r].pr_active_slide,r),i[r].pr_next_slide.hasClass("rs-pause-timer-once")||i[r].pr_next_slide.hasClass("rs-pause-timer-always")?i[r].stopByVideo=!0:i[r].c.trigger("restarttimer"),i[r].pr_next_slide.removeClass("rs-pause-timer-once"),i[r].pr_next_slide[0]!==t&&i.sA(i[r].c[0],"slideactive",i.gA(i[r].pr_next_slide[0],"key")),"carousel"==i[r].sliderType)i[r].mtl=new punchgs.TimelineLite,i.prepareCarousel(r,i[r].mtl),P(r),i[r].transition=0;else{i[r].mtl=new punchgs.TimelineLite({onComplete:function(){P(r)}}),i[r].mtl.add(punchgs.TweenMax.set(i[r].pr_next_bg.find("rs-sbg"),{opacity:0})),i[r].mtl.pause(),i.animateTheLayers&&(i[r].pr_next_key!==t?i.animateTheLayers({slide:i[r].pr_next_key,id:r,mode:"preset"}):i[r].pr_processing_key!==t?i.animateTheLayers({slide:i[r].pr_processing_key,id:r,mode:"preset"}):i[r].pr_active_key!==t&&i.animateTheLayers({slide:i[r].pr_active_key,id:r,mode:"preset"})),1==i[r].firststart&&(punchgs.TweenMax.set(i[r].pr_active_slide,{autoAlpha:0}),i[r].firststart=0),punchgs.TweenMax.set(i[r].pr_active_slide,{zIndex:18}),punchgs.TweenMax.set(i[r].pr_next_slide,{autoAlpha:0,zIndex:20}),"prepared"==i.gA(i[r].pr_next_slide[0],"differentissplayed")&&(i.sA(i[r].pr_next_slide[0],"differentissplayed","done"),i.sA(i[r].pr_next_slide[0],"anim",i.gA(i[r].pr_next_slide[0],"savedanim"))),i.gA(i[r].pr_next_slide[0],"firstanim")!=t&&"done"!=i.gA(i[r].pr_next_slide[0],"differentissplayed")&&(i.sA(i[r].pr_next_slide[0],"savedanim",i.gA(i[r].pr_next_slide[0],"anim")),i.sA(i[r].pr_next_slide[0],"anim",i.gA(i[r].pr_next_slide[0],"firstanim")),i.sA(i[r].pr_next_slide[0],"differentissplayed","prepared"));var s=function(e){var i=(e=e===t?"t:random":e).split(";"),a={};for(var r in i)if(i.hasOwnProperty(r)){var o=i[r].split(":"),s=o[0],n=o[1],l="transition";switch(s){case"ei":l="easein";break;case"eo":l="easeout";break;case"s":l="masterspeed";break;case"sl":l="slotamount";break;case"r":l="rotate"}s!==t&&n!==t&&(a[l]=n.split(","))}a.transition===t&&(a={transition:["fade"]});return a}(i.gA(i[r].pr_next_slide[0],"anim"));i.sA(i[r].pr_next_slide[0],"ntrid","on"==i.gA(i[r].pr_next_slide[0],"rndtrans")?Math.round(80*Math.random()):parseInt(i.gA(i[r].pr_next_slide[0],"ntrid"),0)+1||0),i.sA(i[r].pr_next_slide[0],"ntrid",s.transition===t||i.gA(i[r].pr_next_slide[0],"ntrid")==s.transition.length?0:i.gA(i[r].pr_next_slide[0],"ntrid")),i.animateSlide({animation:s,ntrid:i.gA(i[r].pr_next_slide[0],"ntrid"),id:r}),i[r].pr_next_bg.data("panzoom")!==t&&(i.startPanZoom(i[r].pr_next_bg,r),i[r].mtl.add(punchgs.TweenMax.set(i[r].pr_next_bg,{autoAlpha:0,immediateRender:!0}),0)),i[r].mtl.pause()}i.scrollHandling&&i[r].mtl!==t&&(i.scrollHandling(r,!0,0),i[r].mtl.eventCallback("onUpdate",function(){i.scrollHandling(r,!0,0,!0)})),"off"!=i[r].parallax.type&&i[r].parallax.firstgo==t&&i.scrollHandling&&(i[r].parallax.firstgo=!0,i[r].lastscrolltop=-999,i.scrollHandling(r,!0,0),setTimeout(function(){i[r]!==t&&(i[r].lastscrolltop=-999,i.scrollHandling(r,!0,0))},70),setTimeout(function(){i[r]!==t&&(i[r].lastscrolltop=-999,i.scrollHandling(r,!0,0))},100)),i.animateTheLayers?"carousel"===i[r].sliderType?i[r].carousel.showLayersAllTime?(e.each(i[r].slides,function(e){i[r].carousel.allLayersStarted?i.animateTheLayers({slide:e,id:r,mode:"rebuild"}):i.animateTheLayers({slide:e,id:r,mode:"start"})}),i[r].carousel.allLayersStarted=!0):(0!==i[r].firststart?i.animateTheLayers({slide:0,id:r,mode:"start"}):!0!==o&&i.animateTheLayers({slide:i[r].pr_next_key!==t?i[r].pr_next_key:i[r].pr_processing_key!==t?i[r].pr_processing_key:i[r].pr_active_key,id:r,mode:"start"}),i[r].firststart=0):i.animateTheLayers({slide:i[r].pr_next_key!==t?i[r].pr_next_key:i[r].pr_processing_key!==t?i[r].pr_processing_key:i[r].pr_active_key,id:r,mode:"start"}):i[r].mtl!=t&&setTimeout(function(){i[r].mtl.resume()},18),punchgs.TweenMax.to(i[r].pr_next_slide,.001,{autoAlpha:1})}};var P=function(r){if(i[r]!==t&&(i[r].firstSlideAvailable===t&&(i[r].firstSlideAvailable=!0,i.showFirstTime!==t&&i.showFirstTime(r)),"carousel"===i[r].sliderType||(punchgs.TweenMax.to(i[r].pr_next_bg.find("rs-sbg"),.001,{zIndex:20,autoAlpha:1,onComplete:function(){_(r,i[r].pr_next_slide)}}),i[r].pr_next_slide.index()!=i[r].pr_active_slide.index()&&punchgs.TweenMax.to(i[r].pr_active_slide,.2,{zIndex:18,autoAlpha:0,onComplete:function(){_(r,i[r].pr_active_slide)}})),i[r].pr_active_key=i[r].pr_processing_key!==t?i[r].pr_processing_key:i[r].pr_active_key,delete i[r].pr_processing_key,"scroll"!=i[r].parallax.type&&"scroll+mouse"!=i[r].parallax.type&&"mouse+scroll"!=i[r].parallax.type||(i[r].lastscrolltop=-999,i.scrollHandling(r)),i[r].mtldiff=i[r].mtl.time(),delete i[r].mtl,i[r].pr_active_key!==t)){i.gA(i[r].slides[i[r].pr_active_key],"sloop")!==t&&function(e){if(i[e]!==t){i[e].sloops=i[e].sloops===t?{}:i[e].sloops;var a=i.gA(i[e].slides[i[e].pr_active_key],"key"),r=i[e].sloops[a];if(r===t){r={s:2500,e:4500,r:"unlimited"};var o=i.gA(i[e].slides[i[e].pr_active_key],"sloop").split(";");for(var s in o)if(o.hasOwnProperty(s)){var n=o[s].split(":");switch(n[0]){case"s":r.s=parseInt(n[1],0)/1e3;break;case"e":r.e=parseInt(n[1],0)/1e3;break;case"r":r.r=n[1]}}r.r="unlimited"===r.r?-1:parseInt(r.r,0),i[e].sloops[a]=r,r.key=a}r.ct={time:r.s},r.tl=new punchgs.TimelineMax({}),r.timer=punchgs.TweenMax.fromTo(r.ct,r.e-r.s,{time:r.s},{time:r.e,ease:punchgs.Linear.easeNone,onRepeat:function(){for(var a in i[e].layers[r.key])i[e].layers[r.key].hasOwnProperty(a)&&i[e]._L[a].timeline.play(r.s);var o=i[e].c.find("rs-progress");o!==t&&o[0]!==t&&o[0].tween!==t&&o[0].tween.time(r.s)},onUpdate:function(){},onComplete:function(){}}).repeat(r.r),r.tl.add(r.timer,r.s),r.tl.time(i[e].mtldiff)}}(r),i[r].c.find(".active-rs-slide").removeClass("active-rs-slide"),e(i[r].slides[i[r].pr_active_key]).addClass("active-rs-slide"),i.sA(i[r].c[0],"slideactive",i.gA(i[r].slides[i[r].pr_active_key],"key")),i[r].pr_active_bg.data("pztl")!=t&&(i[r].pr_active_bg.data("pztl").reverse(),i[r].pr_active_bg.data("pztl").timeScale(25)),i[r].pr_next_bg.data("panzoom")!==t&&(i[r].pr_next_bg.data("pztl")!=t?(i[r].pr_next_bg.data("pztl").timeScale(1),i[r].pr_next_bg.data("pztl").play()):i.startPanZoom(i[r].pr_next_bg,r)),i[r].pr_next_slide.find("rs-bgvideo").each(function(t){if(a&&!i[r].fallbacks.allowHTML5AutoPlayOnAndroid)return!1;var o=e(this);i.resetVideo(o,r,!1,!0),punchgs.TweenMax.fromTo(o,.25,{autoAlpha:0},{autoAlpha:1,ease:punchgs.Power3.easeInOut,delay:.05,onComplete:function(){i.animcompleted&&i.animcompleted(o,r)}})}),i[r].pr_active_bg.find("rs-bgvideo").each(function(t){if(a&&!i[r].fallbacks.allowHTML5AutoPlayOnAndroid)return!1;var o=e(this);i.stopVideo&&(i.resetVideo(o,r),i.stopVideo(o,r)),punchgs.TweenMax.to(o,1,{autoAlpha:0,ease:punchgs.Power3.easeInOut,delay:.2})});var o={slider:r,slideIndex:parseInt(i[r].pr_active_key,0)+1,slideLIIndex:i[r].pr_active_key,slide:i[r].pr_next_slide,currentslide:i[r].pr_next_slide,prevSlideIndex:i[r].pr_lastshown_key!==t&&parseInt(i[r].pr_lastshown_key,0)+1,prevSlideLIIndex:i[r].pr_lastshown_key!==t&&parseInt(i[r].pr_lastshown_key,0),prevSlide:i[r].pr_lastshown_key!==t&&i[r].slides[i[r].pr_lastshown_key]};if(i[r].c.trigger("revolution.slide.onchange",o),i[r].c.trigger("revolution.slide.onafterswap",o),i[r].pr_lastshown_key=i[r].pr_active_key,i[r].startWithSlide!==t&&"done"!==i[r].startWithSlide&&"carousel"===i[r].sliderType){for(var s=i[r].startWithSlide,n=0;n<=i[r].slides.length-1;n++)i[r].slides[n]!==t&&i[r].slides[n][0]!==t&&i.gA(i[r].slides[n][0],"originalindex")===i[r].startWithSlide&&(s=n);0!==s&&i.callingNewSlide(r,s),i[r].startWithSlide="done"}i[r].duringslidechange=!1,i[r].pr_active_slide.length>0&&0!=i.gA(i[r].pr_active_slide[0],"hal")&&i.gA(i[r].pr_active_slide[0],"hal")<=i.gA(i[r].pr_active_slide[0],"sofacounter")&&i[r].c.revremoveslide(i[r].pr_active_slide.index());var l=i[r].pr_processing_key||i[r].pr_active_key||0;i[r].rowzones!=t&&(l=l>i[r].rowzones.length?i[r].rowzones.length:l),i[r].rowzones!=t&&i[r].rowzones.length>0&&i[r].rowzones[l]!=t&&l>=0&&l<=i[r].rowzones.length&&i[r].rowzones[l].length>0&&i.setSize(r),delete i[r].sc_indicator,delete i[r].sc_indicator_dir,i[r].firstLetItFree===t&&(i.scrollHandling&&i.scrollHandling(r,!0),i[r].firstLetItFree=!0)}},j=function(r){i[r].loop=0,i[r].stopAtSlide!=t&&i[r].stopAtSlide>-1?i[r].lastslidetoshow=i[r].stopAtSlide:i[r].lastslidetoshow=999,i[r].stopLoop=!1,0==i[r].looptogo&&(i[r].stopLoop=!0);var o=i[r].c.find("rs-progress");i[r].c.on("stoptimer",function(){var t=e(this).find("rs-progress");t[0].tween.pause(),i[r].disableProgressBar&&t.css({visibility:"hidden"}),i[r].sliderstatus="paused",i.unToggleState(i[r].slidertoggledby)}),i[r].c.on("starttimer",function(){i[r].forcepaused||(1!=i[r].conthover&&1!=i[r].stopByVideo&&i[r].width>i[r].hideSliderAtLimit&&1!=i[r].tonpause&&1!=i[r].overnav&&1!=i[r].ssop&&(1===i[r].noloopanymore||i[r].viewPort.enable&&!i[r].inviewport||(o.css({visibility:"visible"}),o[0].tween.resume(),i[r].sliderstatus="playing")),i[r].disableProgressBar&&o.css({visibility:"hidden"}),i.toggleState(i[r].slidertoggledby))}),i[r].c.on("restarttimer",function(){if(!i[r].forcepaused){var t=e(this).find("rs-progress");if(i[r].mouseoncontainer&&"on"==i[r].navigation.onHoverStop&&!a)return!1;1===i[r].noloopanymore||i[r].viewPort.enable&&!i[r].inviewport||1==i[r].ssop||(t.css({visibility:"visible"}),t[0].tween.kill(),t[0].tween=punchgs.TweenMax.fromTo(t,i[r].duration/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:s,delay:1}),i[r].sliderstatus="playing"),i[r].disableProgressBar&&t.css({visibility:"hidden"}),i.toggleState(i[r].slidertoggledby)}}),i[r].c.on("nulltimer",function(){o[0].tween.kill(),o[0].tween=punchgs.TweenMax.fromTo(o,i[r].duration/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:s,delay:1}),o[0].tween.pause(0),i[r].disableProgressBar&&o.css({visibility:"hidden"}),i[r].sliderstatus="paused"});var s=function(){0==e("body").find(i[r].c).length&&(!function(t){i[t].c.children().each(function(){try{e(this).die("click")}catch(e){}try{e(this).die("mouseenter")}catch(e){}try{e(this).die("mouseleave")}catch(e){}try{e(this).unbind("hover")}catch(e){}});try{i[t].c.die("click","mouseenter","mouseleave")}catch(e){}clearInterval(i[t].cdint),i[t].c=null}(r),clearInterval(i[r].cdint)),i[r].c.trigger("revolution.slide.slideatend"),1==i[r].c.data("conthoverchanged")&&(i[r].conthover=i[r].c.data("conthover"),i[r].c.data("conthoverchanged",0)),i.callingNewSlide(r,1)};o[0].tween=punchgs.TweenMax.fromTo(o,i[r].duration/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:s,delay:1}),i[r].slideamount>1&&(0!=i[r].stopAfterLoops||1!=i[r].stopAtSlide)?i[r].c.trigger("starttimer"):(i[r].noloopanymore=1,i[r].c.trigger("nulltimer")),i[r].c.on("tp-mouseenter",function(){i[r].mouseoncontainer=!0,1!=i[r].navigation.onHoverStop||a||(i[r].c.trigger("stoptimer"),i[r].c.trigger("revolution.slide.onpause"))}),i[r].c.on("tp-mouseleft",function(){i[r].mouseoncontainer=!1,1!=i[r].c.data("conthover")&&1==i[r].navigation.onHoverStop&&(1==i[r].viewPort.enable&&i[r].inviewport||0==i[r].viewPort.enable)&&(i[r].c.trigger("revolution.slide.onresume"),i[r].c.trigger("starttimer"))})},Q=function(){e(".rev_redraw_on_blurfocus").each(function(){var e=this.id;if(i[e]==t||i[e].c==t||0===i[e].c.length)return!1;1!=i[e].windowfocused&&(i[e].windowfocused=!0,punchgs.TweenMax.delayedCall(.3,function(){i[e].fallbacks.nextSlideOnWindowFocus&&i[e].c.revnext(),i[e].c.revredraw(),"playing"==i[e].lastsliderstatus&&i[e].c.revresume(),i[e].c.trigger("revolution.slide.tabfocused")}))})},H=function(){document.hasFocus()||e(".rev_redraw_on_blurfocus").each(function(){i[this.id].windowfocused=!1,i[this.id].lastsliderstatus=i[this.id].sliderstatus,i[this.id].c.revpause(),i[this.id].pr_next_bg!==t&&i[this.id].pr_next_bg.data("panzoom")!==t&&i.stopPanZoom(i[this.id].pr_next_bg,i[this.id]),i[this.id].pr_active_bg!==t&&i[this.id].pr_active_bg.data("panzoom")!==t&&i.stopPanZoom(i[this.id].pr_active_bg,i[this.id]),i[this.id].c.trigger("revolution.slide.tabblured")})},N=function(){var i=document.documentMode===t,a=window.chrome;1!==e("body").data("revslider_focus_blur_listener")&&(e("body").data("revslider_focus_blur_listener",1),i&&!a?e(window).on("focusin",function(){Q()}).on("focusout",function(){H()}):window.addEventListener?(window.addEventListener("focus",function(e){Q()},{capture:!1,passive:!0}),window.addEventListener("blur",function(e){H()},{capture:!1,passive:!0})):(window.attachEvent("focus",function(e){Q()}),window.attachEvent("blur",function(e){H()})))},B=function(e){for(var t,i=[],a=window.location.href.slice(window.location.href.indexOf(e)+1).split("_"),r=0;r<a.length;r++)a[r]=a[r].replace("%3D","="),t=a[r].split("="),i.push(t[0]),i[t[0]]=t[1];return i},D=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},W=function(i){return function(i){for(var a in i.minHeight=i.minHeight!==t?"none"===i.minHeight||"0"===i.minHeight||"0px"===i.minHeight||""==i.minHeight||" "==i.minHeight?0:parseInt(i.minHeight,0):0,i.maxHeight="none"===i.maxHeight||"0"===i.maxHeight?0:parseInt(i.maxHeight,0),i.carousel.maxVisibleItems=i.carousel.maxVisibleItems<1?999:i.carousel.maxVisibleItems,i.carousel.vertical_align="top"===i.carousel.vertical_align?"0%":"bottom"===i.carousel.vertical_align?"100%":"50%",i.carousel.space=parseInt(i.carousel.space,0),i.carousel.maxOpacity=parseInt(i.carousel.maxOpacity,0),i.carousel.maxRotation=parseInt(i.carousel.maxRotation,0),i.carousel.minScale=parseInt(i.carousel.minScale,0),i.carousel.speed=parseInt(i.carousel.speed,0),i.navigation.maintypes=["arrows","tabs","thumbnails","bullets"],i.navigation.maintypes)i.navigation.maintypes.hasOwnProperty(a)&&i.navigation[i.navigation.maintypes[a]]!==t&&(i.navigation[i.navigation.maintypes[a]].animDelay=parseInt(i.navigation[i.navigation.maintypes[a]].animDelay,0)/1e3,i.navigation[i.navigation.maintypes[a]].animSpeed=parseInt(i.navigation[i.navigation.maintypes[a]].animSpeed,0)/1e3);if(e.isNumeric(i.scrolleffect.tilt)||-1!==i.scrolleffect.tilt.indexOf("%")&&(i.scrolleffect.tilt=parseInt(i.scrolleffect.tilt)),i.scrolleffect.tilt=i.scrolleffect.tilt/100,i.navigation.thumbnails.position="outer-horizontal"==i.navigation.thumbnails.position?"bottom"==i.navigation.thumbnails.v_align?"outer-bottom":"outer-top":"outer-vertical"==i.navigation.thumbnails.position?"left"==i.navigation.thumbnails.h_align?"outer-left":"outer-right":i.navigation.thumbnails.position,i.navigation.tabs.position="outer-horizontal"==i.navigation.tabs.position?"bottom"==i.navigation.tabs.v_align?"outer-bottom":"outer-top":"outer-vertical"==i.navigation.tabs.position?"left"==i.navigation.tabs.h_align?"outer-left":"outer-right":i.navigation.tabs.position,i.sbtimeline.speed=parseInt(i.sbtimeline.speed,0)/1e3||.5,!0===i.sbtimeline.set&&!0===i.sbtimeline.fixed&&"auto"!==i.sliderLayout?(i.sbtimeline.fixStart=parseInt(i.sbtimeline.fixStart),i.sbtimeline.fixEnd=parseInt(i.sbtimeline.fixEnd)):i.sbtimeline.fixed=!1,i.startDelay=parseInt(i.startDelay,0)||0,i.navigation!==t&&i.navigation.arrows!=t&&i.navigation.arrows.hide_under!=t&&(i.navigation.arrows.hide_under=parseInt(i.navigation.arrows.hide_under)),i.navigation!==t&&i.navigation.bullets!=t&&i.navigation.bullets.hide_under!=t&&(i.navigation.bullets.hide_under=parseInt(i.navigation.bullets.hide_under)),i.navigation!==t&&i.navigation.thumbnails!=t&&i.navigation.thumbnails.hide_under!=t&&(i.navigation.thumbnails.hide_under=parseInt(i.navigation.thumbnails.hide_under)),i.navigation!==t&&i.navigation.tabs!=t&&i.navigation.tabs.hide_under!=t&&(i.navigation.tabs.hide_under=parseInt(i.navigation.tabs.hide_under)),i.navigation!==t&&i.navigation.arrows!=t&&i.navigation.arrows.hide_over!=t&&(i.navigation.arrows.hide_over=parseInt(i.navigation.arrows.hide_over)),i.navigation!==t&&i.navigation.bullets!=t&&i.navigation.bullets.hide_over!=t&&(i.navigation.bullets.hide_over=parseInt(i.navigation.bullets.hide_over)),i.navigation!==t&&i.navigation.thumbnails!=t&&i.navigation.thumbnails.hide_over!=t&&(i.navigation.thumbnails.hide_over=parseInt(i.navigation.thumbnails.hide_over)),i.navigation!==t&&i.navigation.tabs!=t&&i.navigation.tabs.hide_over!=t&&(i.navigation.tabs.hide_over=parseInt(i.navigation.tabs.hide_over)),i.lazyloaddata!==t&&i.lazyloaddata.length>0&&i.lazyloaddata.indexOf("-")>0){var r=i.lazyloaddata.split("-");for(i.lazyloaddata=r[0],a=1;a<r.length;a++)i.lazyloaddata+=D(r[a])}return i.duration=parseInt(i.duration),i}(e.extend(!0,{sliderType:"standard",sliderLayout:"auto",dottedOverlay:"none",duration:9e3,modal:{useAsModal:!1,cover:!0,coverColor:"rgba(0,0,0,0.5)",horizontal:"center",vertical:"middle"},navigation:{keyboardNavigation:!1,keyboard_direction:"horizontal",mouseScrollNavigation:"off",onHoverStop:!0,mouseScrollReverse:"default",touch:{touchenabled:!1,touchOnDesktop:!1,swipe_treshold:75,swipe_min_touches:1,swipe_direction:"horizontal",drag_block_vertical:!1},arrows:{style:"",enable:!1,hide_onmobile:!1,hide_under:0,hide_onleave:!1,hide_delay:200,hide_delay_mobile:1200,hide_over:9999,tmp:"",rtl:!1,left:{h_align:"left",v_align:"center",h_offset:20,v_offset:0,container:"slider"},right:{h_align:"right",v_align:"center",h_offset:20,v_offset:0,container:"slider"}},bullets:{enable:!1,hide_onmobile:!1,hide_onleave:!1,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",h_align:"center",v_align:"bottom",space:5,h_offset:0,v_offset:20,tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>',container:"slider",rtl:!1,style:""},thumbnails:{container:"slider",rtl:!1,style:"",enable:!1,width:100,height:50,min_width:100,wrapper_padding:2,wrapper_color:"transparent",tmp:'<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',visibleAmount:5,hide_onmobile:!1,hide_onleave:!1,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",span:!1,position:"inner",space:2,h_align:"center",v_align:"bottom",h_offset:0,v_offset:20},tabs:{container:"slider",rtl:!1,style:"",enable:!1,width:100,min_width:100,height:50,wrapper_padding:10,wrapper_color:"transparent",tmp:'<span class="tp-tab-image"></span>',visibleAmount:5,hide_onmobile:!1,hide_onleave:!1,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",span:!1,space:0,position:"inner",h_align:"center",v_align:"bottom",h_offset:0,v_offset:20}},responsiveLevels:4064,visibilityLevels:[2048,1024,778,480],gridwidth:960,gridheight:500,minHeight:0,maxHeight:0,keepBPHeight:!1,forceOverflow:!1,fixedOnTop:!1,autoHeight:!1,gridEQModule:!1,disableForceFullWidth:!1,fullScreenOffsetContainer:"",fullScreenOffset:"0",hideLayerAtLimit:0,hideAllLayerAtLimit:0,hideSliderAtLimit:0,disableProgressBar:!1,stopAtSlide:-1,stopAfterLoops:0,shadow:0,startDelay:0,lazyType:"smart",spinner:"off",shuffle:!1,viewPort:{enable:!1,outof:"wait",visible_area:"200px",presize:!1},fallbacks:{isJoomla:!1,panZoomDisableOnMobile:!1,simplifyAll:!0,nextSlideOnWindowFocus:!1,disableFocusListener:!1,ignoreHeightChanges:"off",ignoreHeightChangesSize:0,allowHTML5AutoPlayOnAndroid:!0},parallax:{type:"off",levels:[10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],origo:"enterpoint",disable_onmobile:!1,ddd_shadow:!1,ddd_bgfreeze:!1,ddd_overflow:"visible",ddd_layer_overflow:"visible",ddd_z_correction:65,speed:400,speedbg:0,speedls:0},scrolleffect:{set:!1,fade:!1,blur:!1,scale:!1,grayscale:!1,maxblur:10,layers:!1,slide:!1,direction:"both",multiplicator:1.35,multiplicator_layers:.5,tilt:30,mobile:!1},sbtimeline:{set:!1,fixed:!1,fixStart:0,fixEnd:0,layers:!1,slide:!1,ease:"Linear.easeNone",speed:500},carousel:{easing:punchgs.Power3.easeInOut,speed:800,showLayersAllTime:!1,horizontal_align:"center",vertical_align:"center",infinity:!1,space:0,maxVisibleItems:3,stretch:!1,fadeout:!0,maxRotation:0,maxOpacity:100,minScale:0,vary_fade:!1,vary_rotation:!1,vary_scale:!1,border_radius:"0px",padding_top:0,padding_bottom:0},extensions:"extensions/",extensions_suffix:".min.js",stopLoop:!1,waitForInit:!1},i))}}(jQuery),function($,undefined){"use strict";var _R=jQuery.fn.revolution;jQuery.extend(!0,_R,{checkActions:function(e,t){e===undefined?moduleEnterLeaveActions(t):checkActions_intern(e,t)}});var moduleEnterLeaveActions=function(e){!_R[e].moduleActionsPrepared&&_R[e].c[0].getElementsByClassName("rs-on-sh").length>0&&(_R[e].c.on("tp-mouseenter",function(){_R[e].mouseoncontainer=!0;var t,i=_R[e].pr_next_key!==undefined?_R[e].pr_next_key:_R[e].pr_processing_key!==undefined?_R[e].pr_processing_key:_R[e].pr_active_key!==undefined?_R[e].pr_active_key:_R[e].pr_next_key;if("none"!==i&&i!==undefined){if((i=_R.gA(_R[e].slides[i],"key"))!==undefined&&_R[e].layers[i])for(t in _R[e].layers[i])_R[e].layers[i][t].className.indexOf("rs-on-sh")>=0&&_R.renderLayerAnimation({layer:jQuery(_R[e].layers[i][t]),frame:"frame_1",mode:"trigger",id:e});for(t in _R[e].layers.static)_R[e].layers.static[t].className.indexOf("rs-on-sh")>=0&&_R.renderLayerAnimation({layer:jQuery(_R[e].layers.static[t]),frame:"frame_1",mode:"trigger",id:e})}}),_R[e].c.on("tp-mouseleft",function(){_R[e].mouseoncontainer=!0;var t,i=_R[e].pr_next_key!==undefined?_R[e].pr_next_key:_R[e].pr_processing_key!==undefined?_R[e].pr_processing_key:_R[e].pr_active_key!==undefined?_R[e].pr_active_key:_R[e].pr_next_key;if("none"!==i&&i!==undefined){if((i=_R.gA(_R[e].slides[i],"key"))!==undefined&&_R[e].layers[i])for(t in _R[e].layers[i])_R[e].layers[i][t].className.indexOf("rs-on-sh")>=0&&_R.renderLayerAnimation({layer:jQuery(_R[e].layers[i][t]),frame:"frame_999",mode:"trigger",id:e});for(t in _R[e].layers.static)_R[e].layers.static[t].className.indexOf("rs-on-sh")>=0&&_R.renderLayerAnimation({layer:jQuery(_R[e].layers.static[t]),frame:"frame_999",mode:"trigger",id:e})}})),_R[e].moduleActionsPrepared=!0},checkActions_intern=function(layer,id){var actions=_R.gA(layer[0],"actions"),_L=layer.data();for(var ei in actions=actions.split("||"),layer.addClass("rs-waction"),_L.events=_L.events===undefined?[]:_L.events,actions)if(actions.hasOwnProperty(ei)){var event=getEventParams(actions[ei].split(";"));_L.events.push(event),_R[id].fullscreen_esclistener||"exitfullscreen"!=event.action&&"togglefullscreen"!=event.action||(jQuery(document).keyup(function(e){27==e.keyCode&&jQuery("#rs-go-fullscreen").length>0&&layer.trigger(event.on)}),_R[id].fullscreen_esclistener=!0);var targetlayer="backgroundvideo"==event.layer?jQuery("rs-bgvideo"):"firstvideo"==event.layer?jQuery("rs-slide").find(".rs-layer-video"):jQuery("#"+event.layer);switch(-1!=jQuery.inArray(event.action,["toggleslider","toggle_mute_video","toggle_global_mute_video","togglefullscreen"])&&(_L._togglelisteners=!0),event.action){case"togglevideo":jQuery.each(targetlayer,function(){updateToggleByList(jQuery(this),"videotoggledby",layer[0].id)});break;case"togglelayer":jQuery.each(targetlayer,function(){updateToggleByList(jQuery(this),"layertoggledby",layer[0].id),jQuery(this).data("triggered_startstatus",event.togglestate)});break;case"toggle_global_mute_video":case"toggle_mute_video":jQuery.each(targetlayer,function(){updateToggleByList(jQuery(this),"videomutetoggledby",layer[0].id)});break;case"toggleslider":_R[id].slidertoggledby==undefined&&(_R[id].slidertoggledby=[]),_R[id].slidertoggledby.push(layer[0].id);break;case"togglefullscreen":_R[id].fullscreentoggledby==undefined&&(_R[id].fullscreentoggledby=[]),_R[id].fullscreentoggledby.push(layer[0].id)}}_R[id].actionsPrepared=!0,layer.on("click mouseenter mouseleave",function(e){for(var i in _L.events)if(_L.events.hasOwnProperty(i)&&_L.events[i].on===e.type){var event=_L.events[i];if("click"===event.on&&layer.hasClass("tp-temporarydisabled"))return!1;var targetlayer="backgroundvideo"==event.layer?jQuery(_R[id].slides[_R[id].pr_active_key]).find("rs-sbg-wrap rs-bgvideo"):"firstvideo"==event.layer?jQuery(_R[id].slides[_R[id].pr_active_key]).find(".rs-layer-video").first():jQuery("#"+event.layer),tex=targetlayer.length>0;switch(event.action){case"nextframe":case"prevframe":case"gotoframe":case"togglelayer":case"toggleframes":case"startlayer":case"stoplayer":if(targetlayer[0]===undefined)continue;var _=_R[id]._L[targetlayer[0].id],frame=event.frame,tou="triggerdelay";if("click"===e.type&&_.clicked_time_stamp!==undefined&&(new Date).getTime()-_.clicked_time_stamp<300)return;if("mouseenter"===e.type&&_.mouseentered_time_stamp!==undefined&&(new Date).getTime()-_.mouseentered_time_stamp<300)return;if("mouseleave"===e.type&&_.mouseleaveed_time_stamp!==undefined&&(new Date).getTime()-_.mouseleaveed_time_stamp<300)return;if(clearTimeout(_.triggerdelayIn),clearTimeout(_.triggerdelayOut),clearTimeout(_.triggerdelay),"click"===e.type&&(_.clicked_time_stamp=(new Date).getTime()),"mouseenter"===e.type&&(_.mouseentered_time_stamp=(new Date).getTime()),"mouseleave"===e.type&&(_.mouseleaveed_time_stamp=(new Date).getTime()),"nextframe"===event.action||"prevframe"===event.action){_.forda=_.forda===undefined?getFordWithAction(_):_.forda;var inx=jQuery.inArray(_.currentframe,_.ford);for("nextframe"===event.action&&inx++,"prevframe"===event.action&&inx--;"skip"!==_.forda[inx]&&inx>0&&inx<_.forda.length-1;)"nextframe"===event.action&&inx++,"prevframe"===event.action&&inx--,inx=Math.min(Math.max(0,inx),_.forda.length-1);frame=_.ford[inx]}jQuery.inArray(event.action,["toggleframes","togglelayer","startlayer","stoplayer"])>=0&&(_.triggeredstate="startlayer"===event.action||"togglelayer"===event.action&&"frame_1"!==_.currentframe||"toggleframes"===event.action&&_.currentframe!==event.frameN,frame=_.triggeredstate?"toggleframes"===event.action?event.frameN:"frame_1":"toggleframes"===event.action?event.frameM:"frame_999",tou=_.triggeredstate?"triggerdelayIn":"triggerdelayOut",_.triggeredstate?_R.toggleState(_.layertoggledby):(_R.stopVideo&&_R.stopVideo(targetlayer,id),_R.unToggleState(_.layertoggledby)));var pars={layer:targetlayer,frame:frame,mode:"trigger",id:id};!0===event.children&&(pars.updateChildren=!0,pars.fastforward=!0),_R.renderLayerAnimation&&(clearTimeout(_[tou]),_[tou]=setTimeout(function(e){_R.renderLayerAnimation(e)},1e3*event.delay,pars));break;case"playvideo":tex&&_R.playVideo(targetlayer,id);break;case"stopvideo":tex&&_R.stopVideo&&_R.stopVideo(targetlayer,id);break;case"togglevideo":tex&&(_R.isVideoPlaying(targetlayer,id)?_R.stopVideo&&_R.stopVideo(targetlayer,id):_R.playVideo(targetlayer,id));break;case"mutevideo":tex&&_R.Mute(targetlayer,id,!0);break;case"unmutevideo":tex&&_R.Mute&&_R.Mute(targetlayer,id,!1);break;case"toggle_mute_video":tex&&(_R.Mute(targetlayer,id)?_R.Mute(targetlayer,id,!1):_R.Mute&&_R.Mute(targetlayer,id,!0));break;case"toggle_global_mute_video":var pvl=_R[id].playingvideos!=undefined&&_R[id].playingvideos.length>0;pvl&&(_R[id].globalmute?jQuery.each(_R[id].playingvideos,function(e,t){_R.Mute&&_R.Mute(t,id,!1)}):jQuery.each(_R[id].playingvideos,function(e,t){_R.Mute&&_R.Mute(t,id,!0)})),_R[id].globalmute=!_R[id].globalmute;break;default:punchgs.TweenLite.delayedCall(event.delay,function(targetlayer,id,event,layer){switch(event.action){case"openmodal":if(event.modalslide=event.modalslide===undefined?0:event.modalslide,window.RS_60_MODALS===undefined||-1==jQuery.inArray(event.modal,window.RS_60_MODALS)){_R.showModalCover(id,event,"show");var data={action:"revslider_ajax_call_front",client_action:"get_slider_html",token:_R[id].ajaxNonce,alias:event.modal,usage:"modal"};jQuery.ajax({type:"post",url:_R[id].ajaxUrl,dataType:"json",data:data,success:function(e,t,i){1==e.success&&(jQuery("body").append(e.data),setTimeout(function(){_R.showModalCover(id,event,"hide"),jQuery(document).trigger("RS_OPENMODAL_"+event.modal,event.modalslide)},49))},error:function(e){console.log("Modal Can not be Loaded"),console.log(e)}})}else jQuery(document).trigger("RS_OPENMODAL_"+event.modal,event.modalslide);break;case"closemodal":_R.revModal(id,{mode:"close"});break;case"callback":eval(event.callback);break;case"simplelink":window.open(event.url,event.target);break;case"simulateclick":targetlayer.length>0&&targetlayer.click();break;case"toggleclass":targetlayer.length>0&&targetlayer.toggleClass(event.classname);break;case"scrollbelow":case"scrollto":layer.addClass("tp-scrollbelowslider");var doc=jQuery(document),off="scrollbelow"===event.action?(getOffContH(_R[id].fullScreenOffsetContainer)||0)-(parseInt(event.offset,0)||0)||0:0-(parseInt(event.offset,0)||0),c="scrollbelow"===event.action?_R[id].c:jQuery("#"+event.id),ctop=c.length>0?c.offset().top:0,sobj={_y:window.pageYOffset!==document.documentElement.scrollTop?0!==window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop:window.pageYOffset};ctop+="scrollbelow"===event.action?jQuery(_R[id].slides[0]).height():0,punchgs.TweenLite.to(sobj,event.speed/1e3,{_y:ctop-off,ease:event.ease,onUpdate:function(){doc.scrollTop(sobj._y)}});break;case"jumptoslide":switch(event.slide.toLowerCase()){case"+1":case"next":_R[id].sc_indicator="arrow",_R[id].sc_indicator_dir=0,_R.callingNewSlide(id,1,"carousel"===_R[id].sliderType);break;case"previous":case"prev":case"-1":_R[id].sc_indicator="arrow",_R[id].sc_indicator_dir=1,_R.callingNewSlide(id,-1,"carousel"===_R[id].sliderType);break;case"first":_R[id].sc_indicator="arrow",_R[id].sc_indicator_dir=1,_R.callingNewSlide(id,0,"carousel"===_R[id].sliderType);break;case"last":_R[id].sc_indicator="arrow",_R[id].sc_indicator_dir=0,_R.callingNewSlide(id,_R[id].slideamount-1,"carousel"===_R[id].sliderType);break;default:var ts=jQuery.isNumeric(event.slide)?parseInt(event.slide,0):event.slide;_R.callingNewSlide(id,ts,"carousel"===_R[id].sliderType)}break;case"toggleslider":_R[id].noloopanymore=0,"playing"==_R[id].sliderstatus?(_R[id].c.revpause(),_R[id].forcepaused=!0,_R.unToggleState(_R[id].slidertoggledby)):(_R[id].forcepaused=!1,_R[id].c.revresume(),_R.toggleState(_R[id].slidertoggledby));break;case"pauseslider":_R[id].c.revpause(),_R.unToggleState(_R[id].slidertoggledby);break;case"playslider":_R[id].noloopanymore=0,_R[id].c.revresume(),_R.toggleState(_R[id].slidertoggledby);break;case"gofullscreen":case"exitfullscreen":case"togglefullscreen":var gf;jQuery(".rs-go-fullscreen").length>0&&("togglefullscreen"==event.action||"exitfullscreen"==event.action)?(jQuery(".rs-go-fullscreen").removeClass("rs-go-fullscreen"),gf=_R[id].c.closest("rs-fullwidth-wrap").length>0?_R[id].c.closest("rs-fullwidth-wrap"):_R[id].c.closest("rs-module-wrap"),_R[id].minHeight=_R[id].oldminheight,_R[id].infullscreenmode=!1,_R[id].c.revredraw(),jQuery(window).trigger("resize"),_R.unToggleState(_R[id].fullscreentoggledby)):0!=jQuery(".rs-go-fullscreen").length||"togglefullscreen"!=event.action&&"gofullscreen"!=event.action||(gf=_R[id].c.closest("rs-fullwidth-wrap").length>0?_R[id].c.closest("rs-fullwidth-wrap"):_R[id].c.closest("rs-module-wrap"),gf.addClass("rs-go-fullscreen"),_R[id].oldminheight=_R[id].minHeight,_R[id].minHeight=jQuery(window).height(),_R[id].infullscreenmode=!0,_R[id].c.revredraw(),jQuery(window).trigger("resize"),_R.toggleState(_R[id].fullscreentoggledby));break;default:_R[id].c.trigger("layeraction",[event.action,layer,event])}},[targetlayer,id,event,layer])}}})};function getFordWithAction(e){var t=[];for(var i in e.ford)e.frames[e.ford[i]].timeline.waitoncall?t.push(e.ford[i]):t.push("skip");return t}function updateToggleByList(e,t,i){var a=e.data(t);a===undefined&&(a=[]),a.push(i),e.data(t,a)}function getEventParams(e){var t={on:"click",delay:0,ease:"Power2.easeOut",speed:400};for(var i in e)if(e.hasOwnProperty(i)){var a=e[i].split(":");switch(a[0]){case"modal":t.modal=a[1];break;case"ms":t.modalslide=a[1];break;case"m":t.frameM=a[1];break;case"n":t.frameN=a[1];break;case"o":t.on="click"===a[1]||"c"===a[1]?"click":"ml"===a[1]||"mouseleave"===a[1]?"mouseleave":"mouseenter"===a[1]||"me"===a[1]?"mouseenter":a[1];break;case"d":t.delay=parseInt(a[1],0)/1e3,t.delay="NaN"===t.delay||isNaN(t.delay)?0:t.delay;break;case"a":t.action=a[1];break;case"f":t.frame=a[1];break;case"slide":t.slide=a[1];break;case"layer":t.layer=a[1];break;case"sp":t.speed=parseInt(a[1],0);break;case"e":t.ease=a[1];break;case"ls":t.togglestate=a[1];break;case"offset":t.offset=a[1];break;case"call":t.callback=a[1];break;case"url":t.url="";for(var r=1;r<a.length;r++)t.url+=a[r]+(r===a.length-1?"":":");break;case"target":t.target=a[1];break;case"class":t.classname=a[1];break;case"ch":t.children="true"==a[1]||1==a[1]||"t"==a[1];break;default:a[0].length>0&&""!==a[0]&&(t[a[0]]=a[1])}}return t}var getOffContH=function(e){if(e==undefined)return 0;if(e.split(",").length>1){var t=e.split(","),i=0;return t&&jQuery.each(t,function(e,t){jQuery(t).length>0&&(i+=jQuery(t).outerHeight(!0))}),i}return jQuery(e).height()}}(jQuery),function(e){"use strict";var t=jQuery.fn.revolution;jQuery.extend(!0,t,{prepareCarousel:function(e,o,n,l){void 0!==e&&(n=t[e].carousel.lastdirection=a(n,t[e].carousel.lastdirection),i(e),t[e].carousel.slide_offset_target=s(e),void 0!==l?r(e,n,!1,0):null==o?t.carouselToEvalPosition(e,n):r(e,n,!1))},carouselToEvalPosition:function(e,i){var o=t[e].carousel;i=o.lastdirection=a(i,o.lastdirection);var s="center"===o.horizontal_align?(o.wrapwidth/2-o.slide_width/2-o.slide_globaloffset)/o.slide_width:(0-o.slide_globaloffset)/o.slide_width,n=t.simp(s,t[e].slideamount,!1),l=n-Math.floor(n),d=0,c=-1*(Math.ceil(n)-n),p=-1*(Math.floor(n)-n);d=l>=.3&&"left"===i||l>=.7&&"right"===i?c:l<.3&&"left"===i||l<.7&&"right"===i?p:d,d=o.infinity?d:n<0?n:s>t[e].slideamount-1?s-(t[e].slideamount-1):d,o.slide_offset_target=d*o.slide_width,o.slide_offset_target!==o.slide_offset_targetCACHE&&(0!==Math.abs(o.slide_offset_target)?r(e,i,!0):t.organiseCarousel(e,i),o.slide_offset_targetCACHE=o.slide_offset_target)},organiseCarousel:function(e,i,a,r){i=void 0===i||"down"==i||"up"==i||null===i||jQuery.isEmptyObject(i)?"left":i;for(var o=t[e].carousel,s=[],n=t[e].slides.length,l=0;l<n;l++){var d=l*o.slide_width+o.slide_offset;o.infinity&&(d=(d=d>o.wrapwidth-o.inneroffset&&"right"==i?o.slide_offset-(t[e].slides.length-l)*o.slide_width:d)<0-o.inneroffset-o.slide_width&&"left"==i?d+o.maxwidth:d),s[l]=d}var c=999,p=0,u=t[e].ulw;t[e].slides&&jQuery.each(t[e].slides,function(r,l){var d=s[r],h={};o.infinity&&(d=(d=d>o.wrapwidth-o.inneroffset+o.slide_width&&"left"===i?s[0]-(n-r)*o.slide_width:d)<0-o.inneroffset-3*o.slide_width?"left"==i?d+o.maxwidth:"right"===i?s[n-1]+(r+1)*o.slide_width:d:d,(u=u>d?d:u)>0&&d>o.wrapwidth&&(d=o.slide_offset-(t[e].slides.length-r)*o.slide_width)),h.left=d+o.inneroffset;var g="center"===o.horizontal_align?(Math.abs(o.wrapwidth/2)-(h.left+o.slide_width/2))/o.slide_width:(o.inneroffset-h.left)/o.slide_width,f="center"===o.horizontal_align?2:1;if((a&&Math.abs(g)<c||0===g)&&(c=Math.abs(g),o.focused=r),h.width=o.slide_width,h.x=0,h.transformPerspective=1200,h.transformOrigin="50% "+o.vertical_align,o.fadeout)if(o.vary_fade)h.autoAlpha=1-Math.abs(o.maxOpacity/100/Math.ceil(o.maxVisibleItems/f)*g);else switch(o.horizontal_align){case"center":h.autoAlpha=Math.abs(g)<Math.ceil(o.maxVisibleItems/f-1)?1:1-(Math.abs(g)-Math.floor(Math.abs(g)));break;case"left":h.autoAlpha=g<1&&g>0?1-g:Math.abs(g)>o.maxVisibleItems-1?1-(Math.abs(g)-(o.maxVisibleItems-1)):1;break;case"right":h.autoAlpha=g>-1&&g<0?1-Math.abs(g):g>o.maxVisibleItems-1?1-(Math.abs(g)-(o.maxVisibleItems-1)):1}else h.autoAlpha=Math.abs(g)<Math.ceil(o.maxVisibleItems/f)?1:0;void 0!==o.minScale&&o.minScale>0&&(o.vary_scale?h.scale=1-Math.abs(o.minScale/100/Math.ceil(o.maxVisibleItems/f)*g):h.scale=g>=1||g<=-1?1-o.minScale/100:(100-o.minScale*Math.abs(g))/100,p=(p=g*(h.width-h.width*h.scale)/2)>300?300:p),void 0!==o.maxRotation&&0!=Math.abs(o.maxRotation)&&(o.vary_rotation?(h.rotationY=Math.abs(o.maxRotation)-Math.abs((1-Math.abs(1/Math.ceil(o.maxVisibleItems/f)*g))*o.maxRotation),h.autoAlpha=Math.abs(h.rotationY)>90?0:h.autoAlpha):h.rotationY=g>=1||g<=-1?o.maxRotation:Math.abs(g)*o.maxRotation,h.rotationY=g<0?-1*h.rotationY:h.rotationY),h.x=-1*o.space*g,h.left=Math.floor(h.left),h.x=Math.floor(h.x),void 0!==h.scale&&(h.x=h.x+p),h.zIndex=Math.round(100-Math.abs(5*g)),h.force3D=!0,h.transformStyle="3D"!=t[e].parallax.type&&"3d"!=t[e].parallax.type?"flat":"preserve-3d",punchgs.TweenLite.set(l,h)}),r&&(o.focused=void 0===o.focused?0:o.focused,o.oldfocused=void 0===o.oldfocused?0:o.oldfocused,t[e].pr_next_key=o.focused,o.focused!==o.oldfocused&&t.animateTheLayers&&(t.removeTheLayers(jQuery(t[e].slides[o.oldfocused]),e),t.animateTheLayers({slide:o.focused,id:e,mode:t[e].carousel.allLayersStarted?"rebuild":"start"})),o.oldfocused=o.focused,t[e].c.trigger("revolution.nextslide.waiting"))}});var i=function(e){void 0===t[e].bw&&t.setSize(e);var i=t[e].carousel,a=t.getHorizontalOffset(t[e].c,"left"),r=t.getHorizontalOffset(t[e].c,"right");void 0===i.wrap&&function(e){var i=t[e].carousel;i.infbackup=i.infinity,i.maxVisiblebackup=i.maxVisibleItems,i.slide_globaloffset="none",i.slide_offset=0,i.wrap=t[e].c.find("rs-carousel-wrap"),0!==i.maxRotation&&("3D"!==t[e].parallax.type&&"3d"!==t[e].parallax.type||punchgs.TweenLite.set(i.wrap,{perspective:"1600px",transformStyle:"preserve-3d"})),void 0!==i.border_radius&&parseInt(i.border_radius,0)>0&&punchgs.TweenLite.set(t[e].c.find("rs-slide"),{borderRadius:i.border_radius})}(e),i.slide_width=!0!==i.stretch?t[e].gridwidth[t[e].level]*(0===t[e].bw?1:t[e].bw):t[e].c.width(),i.slide_height=!0!==i.stretch?t[e].gridheight[t[e].level]*(0===t[e].bw?1:t[e].bw):t[e].c.height(),i.maxwidth=t[e].slideamount*i.slide_width,i.maxVisiblebackup>t[e].slides.length+1&&(i.maxVisibleItems=t[e].slides.length+2),i.wrapwidth=i.maxVisibleItems*i.slide_width+(i.maxVisibleItems-1)*i.space,i.wrapwidth="auto"!=t[e].sliderLayout?i.wrapwidth>t[e].c.width()?t[e].c.width():i.wrapwidth:i.wrapwidth>t[e].canvas.width()?t[e].canvas.width():i.wrapwidth,i.infinity=!(i.wrapwidth>=i.maxwidth)&&i.infbackup,i.wrapoffset="center"===i.horizontal_align?(t[e].c.width()-r-a-i.wrapwidth)/2:0,i.wrapoffset="auto"!=t[e].sliderLayout&&t[e].outernav?0:i.wrapoffset<a?a:i.wrapoffset;var o="3D"==t[e].parallax.type||"3d"==t[e].parallax.type?"visible":"hidden";"right"===i.horizontal_align?punchgs.TweenLite.set(i.wrap,{left:"auto",right:i.wrapoffset+"px",width:i.wrapwidth,overflow:o}):punchgs.TweenLite.set(i.wrap,{right:"auto",left:i.wrapoffset+"px",width:i.wrapwidth,overflow:o}),i.inneroffset="right"===i.horizontal_align?i.wrapwidth-i.slide_width:0,i.realoffset=Math.abs(i.wrap.position().left),i.windhalf=jQuery(window).width()/2},a=function(e,t){return null===e||jQuery.isEmptyObject(e)?t:void 0===e?"right":e},r=function(e,i,r,o){var s=t[e].carousel;i=s.lastdirection=a(i,s.lastdirection);var n={},l=r?punchgs.Power2.easeOut:s.easing;n.from=0,n.to=s.slide_offset_target,o=void 0===o?s.speed/1e3:o,0!==(o=r?o*(Math.abs(n.to)/s.wrapwidth):o)&&o<.1&&Math.abs(n.to)>25&&(o=.3),void 0!==s.positionanim&&s.positionanim.pause(),s.positionanim=punchgs.TweenLite.to(n,o,{from:n.to,onUpdate:function(){s.slide_offset=s.slide_globaloffset+n.from,s.slide_offset=t.simp(s.slide_offset,s.maxwidth),t.organiseCarousel(e,i,!1,!1)},onComplete:function(){s.slide_globaloffset=s.infinity?t.simp(s.slide_globaloffset+s.slide_offset_target,s.maxwidth):s.slide_globaloffset+s.slide_offset_target,s.slide_offset=t.simp(s.slide_offset,s.maxwidth),t.organiseCarousel(e,i,!1,!0),void 0!==s.focused&&r&&t.callingNewSlide(e,jQuery(t[e].slides[s.focused]).data("key"),!0),"carousel"!==t[e].sliderType||t[e].carousel.fadein||(punchgs.TweenLite.to(t[e].canvas,1,{scale:1,opacity:1}),t[e].carousel.fadein=!0),t[e].c.trigger("revolution.slide.carouselchange",{slider:e,slideIndex:parseInt(t[e].pr_active_key,0)+1,slideLIIndex:t[e].pr_active_key,slide:t[e].pr_next_slide,currentslide:t[e].pr_next_slide,prevSlideIndex:void 0!==t[e].pr_lastshown_key&&parseInt(t[e].pr_lastshown_key,0)+1,prevSlideLIIndex:void 0!==t[e].pr_lastshown_key&&parseInt(t[e].pr_lastshown_key,0),prevSlide:void 0!==t[e].pr_lastshown_key&&t[e].slides[t[e].pr_lastshown_key]})},ease:l})},o=function(e,t){return Math.abs(e)>Math.abs(t)?e>0?e-Math.abs(Math.floor(e/t)*t):e+Math.abs(Math.floor(e/t)*t):e},s=function(e){var i,a,r,s,n,l=0,d=t[e].carousel;if(void 0!==d.positionanim&&d.positionanim.kill(),"none"==d.slide_globaloffset)d.slide_globaloffset=l="center"===d.horizontal_align?d.wrapwidth/2-d.slide_width/2:0;else{d.slide_globaloffset=d.slide_offset,d.slide_offset=0;var c=t[e].pr_processing_key,p="center"===d.horizontal_align?(d.wrapwidth/2-d.slide_width/2-d.slide_globaloffset)/d.slide_width:(0-d.slide_globaloffset)/d.slide_width;p=t.simp(p,t[e].slideamount,!1),c=(c=c>=0?c:t[e].pr_active_key)>=0?c:0,l=d.infinity?(i=p,a=c,r=t[e].slideamount,n=a-r-i,s=o(s=a-i,r),n=o(n,r),-(Math.abs(s)>Math.abs(n)?n:s)):p-c,l*=d.slide_width}return l}}(jQuery),function(e){"use strict";var t=["chars","words","lines"],i=jQuery.fn.revolution;i.is_mobile(),i.is_android();jQuery.extend(!0,i,{checkLayerDimensions:function(e){var t=!1;for(var a in i[e.id].layers[e.skey])if(i[e.id].layers[e.skey].hasOwnProperty(a)&&!t){var r=i[e.id].layers[e.skey][a],o=i[e.id]._L[r.id];o.eow!==r.offsetWidth&&"true"!==i.gA(r,"vary-layer-dims")&&(t=!0),o.lastknownwidth=o.eow,o.lastknownheight=o.eoh}return t},initLayer:function(e){var t,a,r,o=e.id,s=e.skey;for(var n in i[o]._L=void 0===i[o]._L?{}:i[o]._L,i[o].layers[s])if(i[o].layers[s].hasOwnProperty(n)){var l="carousel"===i[o].sliderType?0:i[o].width/2-i[o].gridwidth[i[o].level]*i[o].bw/2,d=0,c=i[o].layers[s][n],h=jQuery(c),g=i.gA(c,"initialised")?i[o]._L[c.id]:h.data();if(void 0===i.gA(c,"initialised")){if(i.revCheckIDS(o,c),i[o]._L[c.id]=g,g.ford=void 0===g.ford?"frame_0;frame_1;frame_999":g.ford,g.ford=";"==g.ford[g.ford.length-1]?g.ford.substring(0,g.ford.length-1):g.ford,g.ford=g.ford.split(";"),void 0!==g.clip)for(t in g.clipPath={use:!1,origin:"l",type:"rectangle"},g.clip=g.clip.split(";"),g.clip)g.clip.hasOwnProperty(t)&&("u"==(a=g.clip[t].split(":"))[0]&&(g.clipPath.use="true"==a[1]),"o"==a[0]&&(g.clipPath.origin=a[1]),"t"==a[0]&&(g.clipPath.type=a[1]));if(g.frames=w(g,o),g.c=h,g.p=h.closest(".rs-parallax-wrap"),g.lp=h.closest("rs-loop-wrap"),g.m=h.closest("rs-mask-wrap"),g.triggercache=void 0===g.triggercache?"reset":g.triggercache,g.rsp_bd=void 0===g.rsp_bd?"column"===g.type||"row"===g.type?"off":"on":g.rsp_bd,g.rsp_o=void 0===g.rsp_o?"on":g.rsp_o,g.basealign=void 0===g.basealign?"grid":g.basealign,g.group="group"!==g.type&&h.closest("rs-group-wrap").length>0?"group":"column"!==g.type&&h.closest("rs-column").length>0?"column":"row"!==g.type&&h.closest("rs-row").length>0?"row":void 0,g._lig="group"===g.group?h.closest("rs-group"):"column"===g.group?h.closest("rs-column"):"row"===g.group?h.closest("rs-row"):void 0,g._ligid=void 0!==g._lig?g._lig[0].id:void 0,g._column="RS-COLUMN"===h[0].tagName?h.closest("rs-column-wrap"):"none",g._row="RS-COLUMN"===h[0].tagName&&h.closest("rs-row"),g._ingroup="group"===g.group,g._incolumn="column"===g.group,g._inrow="row"===g.group,(g._ingroup||g._incolumn)&&g._lig[0].className.indexOf("rs-sba")>=0&&(!1!==g.animationonscroll||void 0===g.frames.loop)&&!0!==g.animOnScrollForceDisable&&(g.animationonscroll=!0,h[0].className+=" rs-sba",i[o].sbas[s][c.id]=h[0]),g.animOnScrollRepeats=0,g._isgroup="RS-GROUP"===h[0].tagName,g.type=g.type||"none","row"===g.type&&void 0===g.cbreak&&(g.cbreak=2),g._isnotext=-1!==jQuery.inArray(g.type,["video","image","audio","shape"]),g._mediatag="html5"==g.audio?"audio":"video",g.img=h.find("img"),g.deepiframe=h[0].getElementsByTagName("iframe"),g.deepmedia=h[0].getElementsByTagName(g._mediatag),g.layertype="image"===g.type?"image":h[0].className.indexOf("rs-layer-video")>=0||h[0].className.indexOf("rs-layer-audio")>=0||g.deepiframe.length>0&&(g.deepiframe[0].src.toLowerCase().indexOf("youtube")>0||g.deepiframe[0].src.toLowerCase().indexOf("vimeo")>0)||g.deepmedia.length>0?"video":"html",g.deepiframe.length>0&&i.sA(g.deepiframe[0],"layertype",g.layertype),"column"===g.type&&(g.cbg=g.p.find("rs-column-bg"),g.cbgmask=g.p.find("rs-cbg-mask-wrap")),g._slidelink=h[0].className.indexOf("slidelink")>=0,g._isstatic=h[0].className.indexOf("rs-layer-static")>=0,g.slidekey=g._isstatic?"staticlayers":s,g._togglelisteners=h.find(".rs-toggled-content").length>0,g.bgcol=void 0===g.bgcol?h[0].style.background.indexOf("gradient")>=0?h[0].style.background:h.css("backgroundColor"):g.bgcol,g.bgcol=0===g.bgcol.indexOf("rgba(0, 0, 0, 0)")&&g.bgcol.length>18?g.bgcol.replace("rgba(0, 0, 0, 0)",""):g.bgcol,g.zindex=h.css("z-Index"),g._togglelisteners&&h.click(function(){i.swaptoggleState([this.id])}),void 0!==g.border)for(t in g.border=g.border.split(";"),g.bordercolor="transparent",g.border)if(g.border.hasOwnProperty(t))switch((a=g.border[t].split(":"))[0]){case"boc":g.bordercolor=a[1];break;case"bow":g.borderwidth=i.revToResp(a[1],4,0);break;case"bos":g.borderstyle=i.revToResp(a[1],4,0);break;case"bor":g.borderradius=i.revToResp(a[1],4,0)}if("svg"===g.type&&(g.svg=h.find("svg"),g.svgPath=g.svg.find("path"),g.svgI=p(g.svgi,o),g.svgH=p(g.svgh,o)),void 0!==g.btrans){var f=g.btrans;for(t in g.btrans={rX:0,rY:0,rZ:0,o:1},f=f.split(";"))if(f.hasOwnProperty(t))switch((a=f[t].split(":"))[0]){case"rX":g.btrans.rX=a[1];break;case"rY":g.btrans.rY=a[1];break;case"rZ":g.btrans.rZ=a[1];break;case"o":g.btrans.o=a[1]}}if(void 0!==g.tsh)for(t in g.tshadow={c:"rgba(0,0,0,0.25)",v:0,h:0,b:0},g.tsh=g.tsh.split(";"),g.tsh)if(g.tsh.hasOwnProperty(t))switch((a=g.tsh[t].split(":"))[0]){case"c":g.tshadow.c=a[1];break;case"h":g.tshadow.h=a[1];break;case"v":g.tshadow.v=a[1];break;case"b":g.tshadow.b=a[1]}if(void 0!==g.tst)for(t in g.tstroke={c:"rgba(0,0,0,0.25)",w:1},g.tst=g.tst.split(";"),g.tst)if(g.tst.hasOwnProperty(t))switch((a=g.tst[t].split(":"))[0]){case"c":g.tstroke.c=a[1];break;case"w":g.tstroke.w=a[1]}if(void 0!==g.bsh)for(t in g.bshadow={e:"c",c:"rgba(0,0,0,0.25)",v:0,h:0,b:0,s:0},g.bsh=g.bsh.split(";"),g.bsh)if(g.bsh.hasOwnProperty(t))switch((a=g.bsh[t].split(":"))[0]){case"c":g.bshadow.c=a[1];break;case"h":g.bshadow.h=a[1];break;case"v":g.bshadow.v=a[1];break;case"b":g.bshadow.b=a[1];break;case"s":g.bshadow.s=a[1];break;case"e":g.bshadow.e=a[1]}if(void 0!==g.dim)for(t in g.dim=g.dim.split(";"),g.dim)if(g.dim.hasOwnProperty(t))switch((a=g.dim[t].split(":"))[0]){case"w":g.width=a[1];break;case"h":g.height=a[1];break;case"maxw":g.maxwidth=a[1];break;case"maxh":g.maxheight=a[1];break;case"minw":g.minwidth=a[1];break;case"minh":g.minheight=a[1]}if(void 0!==g.xy)for(t in g.xy=g.xy.split(";"),g.xy)if(g.xy.hasOwnProperty(t))switch((a=g.xy[t].split(":"))[0]){case"x":g.x=a[1].replace("px","");break;case"y":g.y=a[1].replace("px","");break;case"xo":g.hoffset=a[1].replace("px","");break;case"yo":g.voffset=a[1].replace("px","")}if(!g._isnotext&&void 0!==g.text)for(t in g.text=g.text.split(";"),g.text)if(g.text.hasOwnProperty(t))switch((a=g.text[t].split(":"))[0]){case"w":g.whitespace=a[1];break;case"td":g.textDecoration=a[1];break;case"c":g.clear=a[1];break;case"f":g.float=a[1];break;case"s":g.fontsize=a[1];break;case"l":g.lineheight=a[1];break;case"ls":g.letterspacing=a[1];break;case"fw":g.fontweight=a[1];break;case"a":g.textalign=a[1]}if(void 0!==g.flcr)for(t in g.flcr=g.flcr.split(";"),g.flcr)if(g.flcr.hasOwnProperty(t))switch((a=g.flcr[t].split(":"))[0]){case"c":g.clear=a[1];break;case"f":g.float=a[1]}if(void 0!==g.padding)for(t in g.padding=g.padding.split(";"),g.padding)if(g.padding.hasOwnProperty(t))switch((a=g.padding[t].split(":"))[0]){case"t":g.paddingtop=a[1];break;case"b":g.paddingbottom=a[1];break;case"l":g.paddingleft=a[1];break;case"r":g.paddingright=a[1]}if(void 0!==g.margin)for(t in g.margin=g.margin.split(";"),g.margin)if(g.margin.hasOwnProperty(t))switch((a=g.margin[t].split(":"))[0]){case"t":g.margintop=a[1];break;case"b":g.marginbottom=a[1];break;case"l":g.marginleft=a[1];break;case"r":g.marginright=a[1]}if(void 0!==g.spike&&(g.spike=I(g.spike)),void 0!==g.corners)for(t in r=g.corners.split(";"),g.corners={},r)r.hasOwnProperty(t)&&r[t].length>0&&(g.corners[r[t]]=jQuery("<"+r[t]+"></"+r[t]+">"),g.c.append(g.corners[r[t]]));g.textalign=u(g.textalign),g.vbility=i.revToResp(g.vbility,i[o].rle,!0),g.hoffset=i.revToResp(g.hoffset,i[o].rle,0),g.voffset=i.revToResp(g.voffset,i[o].rle,0),g.x=i.revToResp(g.x,i[o].rle,"l"),g.y=i.revToResp(g.y,i[o].rle,"t"),k(h,0,o),i.sA(c,"initialised",!0)}var m="grid"===g.basealign?i[o].width:"carousel"!==i[o].sliderType||g._isstatic?i[o].ulw:i[o].carousel.slide_width,v="grid"===g.basealign?i[o].height:("carousel"!==i[o].sliderType||g._isstatic,i[o].ulh),y=g.x[i[o].level],b=g.y[i[o].level];if(d="slide"===g.basealign?0:Math.max(0,"fullscreen"==i[o].sliderLayout?v/2-i[o].gridheight[i[o].level]*(i[o].keepBPHeight?1:i[o].bh)/2:i[o].autoHeight||null!=i[o].minHeight&&i[o].minHeight>0?i[o].conh/2-i[o].gridheight[i[o].level]*i[o].bh/2:d),l="slide"===g.basealign?0:Math.max(0,l),"slide"!==g.basealign&&"carousel"===i[o].sliderType&&g._isstatic&&void 0!==i[o].carousel&&void 0!==i[o].carousel.horizontal_align&&(l=Math.max(0,"center"===i[o].carousel.horizontal_align?0+(i[o].ulw-i[o].gridwidth[i[o].level]*i[o].bw)/2:"right"===i[o].carousel.horizontal_align?i[o].ulw-i[o].gridwidth[i[o].level]*i[o].bw:l)),"updateposition"!==e.mode){if(0==g.vbility[i[o].levelForced]||"f"==g.vbility[i[o].levelForced]||m<i[o].hideLayerAtLimit&&"on"==g.layeronlimit||m<i[o].hideAllLayerAtLimit?g.p[0].classList.add("rs-layer-hidden"):g.p[0].classList.remove("rs-layer-hidden"),g.poster=null==g.poster&&void 0!==g.thumbimage?g.thumbimage:g.poster,"image"===g.layertype)if("cover-proportional"===g.img.data("c")){i.sA(g.img[0],"owidth",i.gA(g.img[0],"owidth",g.img[0].width)),i.sA(g.img[0],"oheight",i.gA(g.img[0],"oheight",g.img[0].height));var _=i.gA(g.img[0],"owidth")/i.gA(g.img[0],"oheight"),x=m/v;_>x&&_<=1||_<x&&_>1?punchgs.TweenMax.set(g.img,{width:"100%",height:"auto",left:"c"===y||"center"===y?"50%":"left"===y||"l"===y?"0":"auto",right:"r"===y||"right"===y?"0":"auto",top:"c"===b||"center"===b?"50%":"top"===b||"t"===b?"0":"auto",bottom:"b"===b||"bottom"===b?"0":"auto",x:"c"===y||"center"===y?"-50%":"0",y:"c"===b||"center"===y?"-50%":"0",position:"absolute"}):punchgs.TweenMax.set(g.img,{height:"100%",width:"auto",left:"c"===y||"center"===y?"50%":"left"===y||"l"===y?"0":"auto",right:"r"===y||"right"===y?"0":"auto",top:"c"===b||"center"===b?"50%":"top"===b||"t"===b?"0":"auto",bottom:"b"===b||"bottom"===b?"0":"auto",x:"c"===y||"center"===y?"-50%":"0",y:"c"===b||"center"===y?"-50%":"0",position:"absolute"})}else{var L="auto"!==g.width[i[o].level]||isNaN(g.width[i[o].level])&&g.width[i[o].level].indexOf("%")>=0?"100%":"auto",A="auto"!==g.height[i[o].level]||isNaN(g.height[i[o].level])&&g.height[i[o].level].indexOf("%")>=0?"100%":"auto";punchgs.TweenMax.set(g.img,{width:L,height:A})}else if("video"===g.layertype){i.manageVideoLayer&&!g.videoLayerManaged&&i.manageVideoLayer(h,o),"rebuild"!==e.mode&&i.resetVideo&&i.resetVideo(h,o,e.mode),null!=g.aspectratio&&g.aspectratio.split(":").length>1&&(1==g.bgvideo||1==g.forcecover)&&i.prepareCoveredVideo(o,h),g.media=void 0===g.media?g.deepiframe.length>0?jQuery(g.deepiframe[0]):jQuery(g.deepmedia[0]):g.media,g.html5vid=void 0===g.html5vid?!(g.deepiframe.length>0):g.html5vid;var S=h[0].className.indexOf("coverscreenvideo")>=0;g.media.css({display:"block"});var z=g.width[i[o].level],M=g.height[i[o].level];z="auto"===z?z:!jQuery.isNumeric(z)&&z.indexOf("%")>0?g._incolumn||g._ingroup?"100%":"grid"===g.basealign?i[o].gridwidth[i[o].level]*i[o].bw:m:"off"!==g.rsp_bd?parseFloat(z)*i[o].bw+"px":parseFloat(z)+"px",M="auto"===M?M:!jQuery.isNumeric(M)&&M.indexOf("%")>0?"grid"===g.basealign?i[o].gridheight[i[o].level]*i[o].bw:v:"off"!==g.rsp_bd?parseFloat(M)*i[o].bh+"px":parseFloat(M)+"px";var O=T(h,o);if(g._incolumn&&"100%"===z&&"auto"===M&&void 0!==g.ytid){g.vd=void 0===g.vd?i[o].videos[h[0].id].ratio.split(":").length>1?i[o].videos[h[0].id].ratio.split(":")[0]/i[o].videos[h[0].id].ratio.split(":")[1]:1:g.vd;var C=h.width()/g.vd;punchgs.TweenLite.set(h,{height:C+"px"}),g.heightSetByVideo=!0}else-1!=h[0].className.indexOf("rs-fsv")||S?(l=0,d=0,g.x=i.revToResp(0,i[o].rle,0),g.y=i.revToResp(0,i[o].rle,0),h.css({width:m,height:i[o].autoHeight?i[o].conh:v})):punchgs.TweenMax.set(h,{paddingTop:Math.round(O.paddingTop*i[o].bh)+"px",paddingBottom:Math.round(O.paddingBottom*i[o].bh)+"px",paddingLeft:Math.round(O.paddingLeft*i[o].bw)+"px",paddingRight:Math.round(O.paddingRight*i[o].bw)+"px",marginTop:O.marginTop*i[o].bh+"px",marginBottom:O.marginBottom*i[o].bh+"px",marginLeft:O.marginLeft*i[o].bw+"px",marginRight:O.marginRight*i[o].bw+"px",borderTopWidth:Math.round(O.borderTopWidth*i[o].bh)+"px",borderBottomWidth:Math.round(O.borderBottomWidth*i[o].bh)+"px",borderLeftWidth:Math.round(O.borderLeftWidth*i[o].bw)+"px",borderRightWidth:Math.round(O.borderRightWidth*i[o].bw)+"px",width:z,height:M}),(0==g.html5vid&&!S||1!=g.forcecover&&!h.hasClass("rs-fsv")&&!S)&&(g.media.width(z),g.media.height(M)),g._ingroup&&null!=z&&!jQuery.isNumeric(z)&&z.indexOf("%")>0&&punchgs.TweenMax.set([g.lp,g.p,g.m],{minWidth:z})}g._slidelink||R(h,o,0,g.rsp_bd),"on"===g.rsp_ch&&"row"!==g.type&&"column"!==g.type&&"group"!==g.type&&h.find("*").each(function(){var e=jQuery(this);"true"!==i.gA(this,"stylerecorder")&&!0!==i.gA(this,"stylerecorder")&&k(e,"rekursive",o),R(e,o,"rekursive",g.rsp_bd)})}if("preset"!==e.mode){if(g.eow=h.outerWidth(!0),g.eoh=h.outerHeight(!0),g.eow<=0&&void 0!==g.lastknownwidth&&(g.eow=g.lastknownwidth),g.eoh<=0&&void 0!==g.lastknownheight&&(g.eoh=g.lastknownheight),("text"===g.type||"button"===g.type)&&void 0!==g.corners){for(r in g.corners)if(g.corners.hasOwnProperty(r)){g.corners[r].css("borderWidth",g.eoh+"px");var P="rs-fcrt"===r||"rs-fcr"===r;g.corners[r].css("border"+(P?"Right":"Left"),"0px solid transparent"),g.corners[r].css("border"+("rs-fcrt"==r||"rs-bcr"==r?"Bottom":"Top")+"Color",g.bgcol)}g.eow=h.outerWidth(!0)}0==g.eow&&0==g.eoh&&(g.eow=i[o].ulw,g.eoh=i[o].ulh);var j="on"===g.rsp_o?parseInt(g.voffset[i[o].level],0)*i[o].bw:parseInt(g.voffset[i[o].level],0),Q="on"===g.rsp_o?parseInt(g.hoffset[i[o].level],0)*i[o].bw:parseInt(g.hoffset[i[o].level],0),H="grid"===g.basealign?i[o].gridwidth[i[o].level]*i[o].bw:m,N="grid"===g.basealign?i[o].gridheight[i[o].level]*(i[o].keepBPHeight?1:i[o].bh):v;(1==i[o].gridEQModule||void 0!==g._lig&&"row"!==g.type&&"column"!==g.type&&"group"!==g.type)&&(H=void 0!==g._lig?g._lig.width():i[o].ulw,N=void 0!==g._lig?g._lig.height():i[o].ulh,l=0,d=0),y="c"===y||"m"===y||"center"===y||"middle"===y?H/2-g.eow/2+Q:"l"===y||"left"===y?Q:"r"===y||"right"===y?H-g.eow-Q:"off"!==g.rsp_o?y*i[o].bw:y,b="m"===b||"c"===b||"center"===b||"middle"===b?N/2-g.eoh/2+j:"t"===b||"top"==b?j:"b"===b||"bottom"==b?N-g.eoh-j:"off"!==g.rsp_o?b*i[o].bw:b,y=g._slidelink?0:i[o].rtl&&"100%"!==g.width[i[o].level]?y+g.eow:y,g.calcx=parseInt(y,0)+l,g.calcy=parseInt(b,0)+d,"row"!==g.type&&"column"!==g.type?punchgs.TweenMax.set(g.p,{zIndex:g.zindex,top:g.calcy,left:g.calcx,overwrite:"auto"}):"row"!==g.type?punchgs.TweenMax.set(g.p,{zIndex:g.zindex,width:g.columnwidth,top:0,left:0,overwrite:"auto"}):"row"===g.type&&(punchgs.TweenMax.set(g.p,{zIndex:g.zindex,width:"grid"===g.basealign?H+"px":"100%",top:0,left:l,overwrite:"auto"}),g.cbreak<=i[o].level?h[0].classList.add("rev_break_columns"):h[0].classList.remove("rev_break_columns")),void 0!==g.blendmode&&punchgs.TweenMax.set(g.p,{mixBlendMode:g.blendmode}),void 0!==g.frame_loop&&punchgs.TweenMax.set(g.lp,{minWidth:g.eow,minHeight:g.eoh}),g._ingroup&&(void 0!==g._groupw&&!jQuery.isNumeric(g._groupw)&&g._groupw.indexOf("%")>0&&punchgs.TweenMax.set([g.lp,g.p,g.m],{minWidth:g._groupw}),void 0!==g._grouph&&!jQuery.isNumeric(g._grouph)&&g._grouph.indexOf("%")>0&&punchgs.TweenMax.set([g.lp,g.p,g.m],{minHeight:g._grouph}))}}},animcompleted:function(e,t){if(void 0!==i[t].videos){var a=i[t].videos[e[0].id];null!=a&&null!=a.type&&"none"!=a.type&&(1==a.aplay||"true"==a.aplay||"on"==a.aplay||"1sttime"==a.aplay?("carousel"===i[t].sliderType&&e.closest("rs-slide").index()!=i[t].pr_active_key||i.playVideo(e,t),i.toggleState(e.data("videotoggledby")),(a.aplay1||"1sttime"==a.aplay)&&(a.aplay1=!1,a.aplay=!1)):("no1sttime"==a.aplay&&(a.aplay=!0),i.unToggleState(e.data("videotoggledby"))))}},handleStaticLayers:function(e,t){var a=0,r=i[t].realslideamount+1;if(void 0!==i.gA(e[0],"onslides")){var o=i.gA(e[0],"onslides").split(";");for(var s in o)if(o.hasOwnProperty(s)){var n=o[s].split(":");"s"===n[0]&&(a=parseInt(n[1],0)),"e"===n[0]&&(r=parseInt(n[1],0))}}a=Math.max(0,a),r=Math.min(i[t].realslideamount,r<0?i[t].realslideamount:r),r=1!==a&&0!==a||r!==i[t].realslideamount?r:i[t].realslideamount+1,e.data("startslide",a),e.data("endslide",r),i.sA(e[0],"startslide",a),i.sA(e[0],"endslide",r)},animateTheLayers:function(e){if(void 0===e.slide)return!1;var t=e.id;if(void 0===i[t].slides[e.slide])return!1;if("carousel"===i[t].sliderType){if("start"===e.mode&&"start"===i[t].lastATLmode){if(e.slide===i[t].lastATLslide&&(new Date).getTime()-i[t].lastATLtime<1500)return;i[t].lastATLtime=(new Date).getTime()}i[t].lastATLmode=e.mode,i[t].lastATLslide=e.slide}var a=i.gA(i[t].slides[e.slide],"key"),r=i[t].pr_processing_key||i[t].pr_active_key||0;if(i[t].layers=i[t].layers||{},i[t].layers[a]=void 0===i[t].layers[a]?x(jQuery(i[t].slides[e.slide]),"rs-layer"):i[t].layers[a],i[t].layers.static=void 0===i[t].layers.static?x(jQuery(i[t].c.find("rs-static-layers")),"rs-layer"):i[t].layers.static,i[t].sbas[a]=void 0===i[t].sbas[a]?x(jQuery(i[t].slides[e.slide]),"rs-sba"):i[t].sbas[a],i.updateDimensions(t),void 0!==a&&i[t].layers[a]&&i.initLayer({id:t,skey:a,mode:e.mode,animcompleted:"rebuild"===e.mode&&"carousel"===i[t].sliderType&&i[t].carousel.showLayersAllTime}),i[t].layers.static&&i.initLayer({id:t,skey:"static",mode:e.mode,animcompleted:"rebuild"===e.mode&&"carousel"===i[t].sliderType&&i[t].carousel.showLayersAllTime}),void 0===i[t].dimensionReCheck[a]&&(setTimeout(function(){void 0!==a&&i[t].layers[a]&&i.checkLayerDimensions({id:t,skey:a})&&i.initLayer({id:t,skey:a,mode:"updateposition"}),i[t].layers.static&&i.checkLayerDimensions({id:t,skey:"static"})&&i.initLayer({id:t,skey:"static",mode:"updateposition"})},200),i[t].dimensionReCheck[a]=!0),(void 0!==i[t].rowzones&&i[t].rowzones.length>0&&r>=0&&i[t].rowzones[Math.min(r,i[t].rowzones.length)].length>0||void 0!==i[t].srowzones&&i[t].srowzones.length>0||void 0!==i[t].smiddleZones&&i[t].smiddleZones.length>0)&&(i.setSize(t),i.updateDimensions(t),i.initLayer({id:t,skey:a,mode:"updateposition"}),i.initLayer({id:t,skey:"static",mode:"updateposition"}),"start"!==e.mode&&"preset"!==e.mode||i.manageNavigation(t)),void 0!==a&&i[t].layers[a])for(var o in i[t].layers[a])i[t].layers[a].hasOwnProperty(o)&&i.renderLayerAnimation({layer:jQuery(i[t].layers[a][o]),id:t,mode:e.mode});if(i[t].layers.static)for(var o in i[t].layers.static)i[t].layers.static.hasOwnProperty(o)&&i.renderLayerAnimation({layer:jQuery(i[t].layers.static[o]),id:t,mode:e.mode});null!=i[t].mtl&&setTimeout(function(){null!=i[t].mtl&&i[t].mtl.resume()},30)},removeTheLayers:function(e,t,a){var r=i.gA(e[0],"key");if(i[t].sloops&&i[t].sloops[r]&&i[t].sloops[r].tl&&i[t].sloops[r].tl.stop(),"carousel"===i[t].sliderType&&i[t].carousel.showLayersAllTime);else{for(var o in i[t].layers[r])i[t].layers[r].hasOwnProperty(o)&&i.renderLayerAnimation({layer:jQuery(i[t].layers[r][o]),frame:"frame_999",mode:"continue",remove:!0,id:t,allforce:a});for(var o in i[t].layers.static)i[t].layers.static.hasOwnProperty(o)&&i.renderLayerAnimation({layer:jQuery(i[t].layers.static[o]),frame:"frame_999",mode:"continue",remove:!0,id:t,allforce:a})}},renderLayerAnimation:function(e){var d=e.layer,c=e.id,p=i[c].level,u=i[c]._L[d[0].id],f=void 0!==u.timeline?u.timeline.time():void 0,b=!1,w=!1,_="none";if("preset"!==e.mode||!0===u.frames.frame_1.timeline.waitoncall||void 0!==u.scrollBasedOffset||!0===u.forceRender){if("trigger"==e.mode&&(u.triggeredFrame=e.frame),u._isstatic){var x="carousel"===i[c].sliderType&&void 0!==i[c].carousel.oldfocused?i[c].carousel.oldfocused:void 0===i[c].pr_lastshown_key?1:parseInt(i[c].pr_lastshown_key,0)+1,k="carousel"===i[c].sliderType?void 0===i[c].pr_next_key?0===x?1:x:parseInt(i[c].pr_next_key,0)+1:void 0===i[c].pr_processing_key?x:parseInt(i[c].pr_processing_key,0)+1,T=x>=u.startslide&&x<=u.endslide,L=k>=u.startslide&&k<=u.endslide;if(_=x===u.endslide&&"continue"===e.mode||("continue"===e.mode||x===u.endslide)&&"none",!0===e.allforce||!0===_);else{if("preset"===e.mode&&(u.elementHovered||!L))return;if("rebuild"===e.mode&&!T&&!L)return;if("start"===e.mode&&L&&"frame_1"===u.lastRequestedMainFrame)return;if("continue"===e.mode&&"frame_999"===e.frame&&L)return;if("start"===e.mode&&!L)return}}else"start"===e.mode&&"keep"!==u.triggercache&&(u.triggeredFrame=void 0);for(var R in"start"===e.mode&&void 0!==u.layerLoop&&(u.layerLoop.count=0),"start"===e.mode&&(e.frame=void 0===u.triggeredFrame?0:u.triggeredFrame),"continue"!==e.mode&&"trigger"!==e.mode&&void 0!==u.timeline&&u.timeline.pause(0),"continue"!==e.mode&&"trigger"!==e.mode||void 0===u.timeline||u.timeline.pause(),u.timeline=new punchgs.TimelineMax({paused:!0}),"text"!==u.type&&"button"!==u.type||void 0!==u.splitText&&(void 0!==u.splitTextFix||"start"!==e.mode&&"preset"!==e.mode)||(h({layer:d,id:c}),"start"===e.mode&&(u.splitTextFix=!0)),u.ford)if(u.ford.hasOwnProperty(R)){var I=u.ford[R],A=!1;if("frame_0"!==I&&"frame_hover"!==I&&"loop"!==I){if("frame_999"===I&&!u.frames[I].timeline.waitoncall&&u.frames[I].timeline.start>=i[c].duration&&!0!==e.remove&&(u.frames[I].timeline.waitoncall=!0),"start"===e.mode&&"keep"!==u.triggercache&&(u.frames[I].timeline.callstate=u.frames[I].timeline.waitoncall?"waiting":""),"trigger"===e.mode&&u.frames[I].timeline.waitoncall&&(I===e.frame?(u.frames[I].timeline.triggered=!0,u.frames[I].timeline.callstate="called"):u.frames[I].timeline.triggered=!1),"rebuild"===e.mode||u.frames[I].timeline.triggered||(u.frames[I].timeline.callstate=u.frames[I].timeline.waitoncall?"waiting":""),!1!==e.fastforward){if(("continue"===e.mode||"trigger"===e.mode)&&!1===w&&I!==e.frame)continue;if(("rebuild"===e.mode||"preset"===e.mode)&&!1===w&&void 0!==u.triggeredFrame&&I!==u.triggeredFrame)continue;(I===e.frame||"rebuild"===e.mode&&I===u.triggeredFrame)&&(w=!0)}else I===e.frame&&(w=!0);if(I!==e.frame&&u.frames[I].timeline.waitoncall&&"called"!==u.frames[I].timeline.callstate&&(b=!0),I!==e.frame&&w&&(b=!0===b&&u.frames[I].timeline.waitoncall?"skiprest":!0!==b&&b),void 0===u.hideonfirststart&&"frame_1"===I&&u.frames[I].timeline.waitoncall&&(u.hideonfirststart=!0),b&&"waiting"===u.frames[I].timeline.callstate&&"preset"===e.mode&&1!=u.firstTimeRendered)A=!0,u.firstTimeRendered=!0;else if("skiprest"===b||"called"!==u.frames[I].timeline.callstate&&b&&e.toframe!==I)continue;if("frame_999"!==I||!1!==_||"continue"!==e.mode&&"start"!==e.mode&&"rebuild"!==e.mode){u.fff="frame_1"===I&&("trigger"!==e.mode||"frame_999"===u.currentframe||"frame_0"===u.currentframe||void 0===u.currentframe),A||(u.frames[I].timeline.callstate="called",u.currentframe=I);var S=u.frames[I],z=u.fff?u.frames.frame_0:void 0,M=new punchgs.TimelineMax,O=new punchgs.TimelineMax,C=u.c,P=void 0!==S.sfx&&g(S.sfx.effect,u.m,S.timeline.ease),j=S.timeline.speed/1e3,Q=0,H=m({id:c,frame:S,layer:d,ease:S.timeline.ease,splitAmount:C.length,target:I,forcefilter:void 0!==u.frames.frame_hover&&void 0!==u.frames.frame_hover.filter}),N=u.fff?m({id:c,frame:z,layer:d,ease:S.timeline.ease,splitAmount:C.length,target:"frame_0"}):void 0,B=void 0!==S.mask?m({id:c,frame:{transform:{x:S.mask.x,y:S.mask.y}},layer:d,ease:H.ease,target:"mask"}):void 0,D=void 0!==B&&u.fff?m({id:c,frame:{transform:{x:z.mask.x,y:z.mask.y}},layer:d,ease:H.ease,target:"frommask"}):void 0,W=H.ease;"block"===P.type&&(P.ft[0].background=S.sfx.fxc,M.add(punchgs.TweenMax.fromTo(P.bmask_in,j/2,P.ft[0],P.ft[1],0)),M.add(punchgs.TweenMax.fromTo(P.bmask_in,j/2,P.ft[1],P.t,j/2)),"frame_0"===I||"frame_1"===I?N.opacity=0:"frame_999"===I&&M.add(O.staggerFromTo(C,.05,{autoAlpha:1},{autoAlpha:0,delay:j/2},0),.001)),void 0!==S.color?H.color=S.color:void 0!==u.color&&"npc"!==u.color[p]&&(H.color=u.color[p]),void 0!==z&&void 0!==z.color?N.color=z.color:void 0!==z&&void 0!==u.color&&"npc"!==u.color[p]&&(N.color=u.color[p]),void 0!==S.bgcolor?S.bgcolor.indexOf("gradient")>=0?H.background=S.bgcolor:H.backgroundColor=S.bgcolor:!0===u.bgcolinuse&&(u.bgcol.indexOf("gradient")>=0?H.background=u.bgcol:H.backgroundColor=u.bgcol),void 0!==z&&(void 0!==z.bgcolor?z.bgcolor.indexOf("gradient")>=0?N.background=z.bgcolor:N.backgroundColor=z.bgcolor:!0===u.bgcolinuse&&(u.bgcol.indexOf("gradient")>=0?N.background=u.bgcol:N.backgroundColor=u.bgcol));var V=0;if(void 0!==u.splitText&&!1!==u.splitText)for(var Y in t)if(void 0===S[t[Y]]||u.quickRendering)u.fff?M.add(O.fromTo(u.splitText[t[Y]],j,{immediateRender:!1,color:N.color},{color:H.color},0),0):M.add(O.to(u.splitText[t[Y]],j,{color:H.color},0),0);else{var F=y(u.splitText[t[Y]],S[t[Y]].dir),E=m({id:c,frame:S,source:t[Y],ease:W,layer:d,splitAmount:F.length,target:I+"_"+t[Y]}),X=u.fff?m({id:c,frame:z,ease:E.ease,source:t[Y],layer:d,splitAmount:F.length,target:"frame_0_"+t[Y]}):void 0;Q=void 0===S[t[Y]].delay?.05:S[t[Y]].delay/100,E.color=H.color,void 0!==N&&(X.color=N.color);var Z=v(jQuery.extend(!0,{},E)),q=u.fff?v(jQuery.extend(!0,{},X)):void 0;delete Z.dir,Z.data={splitted:!0},void 0!==q&&delete q.dir,u.fff?M.add(O.staggerFromTo(F,j,q,Z,u.frames[I].split?Q:0,0),0):M.add(O.staggerTo(F,j,Z,u.frames[I].split?Q:0,0),0),V=F.length>V?F.length:V}j+=u.frames[I].split?Q*V:0,u.pxundermask||void 0!==B&&(void 0!==z&&"hidden"===z.mask.overflow||"hidden"===S.mask.overflow)?(M.add(punchgs.TweenMax.to(u.m,.001,{overflow:"hidden"}),0),"column"===u.type&&M.add(punchgs.TweenMax.to(u.cbgmask,.001,{overflow:"hidden"}),0),u.btrans&&(D&&(D.rotationX=u.btrans.rX,D.rotationY=u.btrans.rY,D.rotationZ=u.btrans.rZ,D.opacity=u.btrans.o),B.rotationX=u.btrans.rX,B.rotationY=u.btrans.rY,B.rotationZ=u.btrans.rZ,B.opacity=u.btrans.o),u.fff?M.add(punchgs.TweenMax.fromTo([u.m,u.cbgmask],j,jQuery.extend(!0,{},D),jQuery.extend(!0,{},B)),.001):M.add(punchgs.TweenMax.to([u.m,u.cbgmask],j,jQuery.extend(!0,{},B)),.001)):void 0!==u.btrans?M.add(punchgs.TweenMax.to(u.m,.001,{x:0,y:0,filter:"none",opacity:u.btrans.o,rotationX:u.btrans.rX,rotationY:u.btrans.rY,rotationZ:u.btrans.rZ,overflow:"visible"}),0):M.add(punchgs.TweenMax.to(u.m,.001,{clearProps:"transform",overflow:"visible"}),0),H.force3D="auto",u.fff?(H.visibility="visible",void 0!==u.cbg&&M.fromTo(u.cbg,j,N,H,0),i[c].BUG_safari_clipPath&&(N.clipPath||H.clipPath||u.spike)&&(N.z&&parseInt(N.z,10)||(N.z=-1e-4),H.z&&parseInt(H.z,10)||(H.z=0)),void 0!==u.cbg&&"column"===u.type?M.fromTo(C,j,a(N),a(H),0):M.fromTo(C,j,N,H,0)):(void 0!==u.cbg&&M.to(u.cbg,j,H,0),!i[c].BUG_safari_clipPath||!H.clipPath&&!u.spike||H.z&&parseInt(H.z,10)||(H.z=0-.01*Math.random()),void 0!==u.cbg&&"column"===u.type?M.to(C,j,a(H),0):M.to(C,j,H,0)),void 0!==W&&"object"!=typeof W&&W.indexOf("SFXBounce")>=0&&M.to(C,j,{scaleY:.5,scaleX:1.3,ease:H.ease+"-squash",transformOrigin:"bottom"},1e-4);var G="trigger"!==e.mode&&(!0!==b&&"skiprest"!==b||"rebuild"!==e.mode)||e.frame===I||void 0===S.timeline.start||!jQuery.isNumeric(S.timeline.start)?"+=0"===S.timeline.start||void 0===S.timeline.start?"+=0.005":parseInt(S.timeline.start,0)/1e3:"+="+parseInt(S.timeline.startRelative,0)/1e3;u.timeline.addLabel(I,G),u.timeline.add(M,G),u.timeline.addLabel(I+"_end","+=0.01"),M.eventCallback("onStart",o,[{id:c,frame:I,L:d}]),"true"==u.animationonscroll||1==u.animationonscroll?(M.eventCallback("onUpdate",s,[{id:c,frame:I,L:d}]),M.smoothChildTiming=!0):M.eventCallback("onUpdate",s,[{id:c,frame:I,L:d}]),M.eventCallback("onComplete",n,[{id:c,frame:I,L:d}])}}}if(void 0!==u.frames.loop){var U=u.frames.loop.frame_0,J=u.frames.loop.frame_999,K=new punchgs.TimelineMax({}),$=new punchgs.TimelineMax({repeat:-1,yoyo:u.frames.loop.timeline.yoyo_move}),ee=new punchgs.TimelineMax({repeat:-1,yoyo:u.frames.loop.timeline.yoyo_rotate}),te=new punchgs.TimelineMax({repeat:-1,yoyo:u.frames.loop.timeline.yoyo_scale}),ie=new punchgs.TimelineMax({repeat:-1,yoyo:u.frames.loop.timeline.yoyo_filter}),ae=parseInt(u.frames.loop.timeline.speed,0)/1e3,re=parseInt(u.frames.loop.timeline.start)/1e3||0,oe=re+.2;if(K.add($,0),K.add(ee,0),K.add(te,0),K.add(ie,0),J.originX=U.originX,J.originY=U.originY,J.originZ=U.originZ,u.frames.loop.timeline.curved){var se=parseInt(u.frames.loop.timeline.radiusAngle,0)||0,ne=[{x:(U.x-U.xr)*i[c].bw,y:0,z:(U.z-U.zr)*i[c].bw},{x:0,y:(U.y+U.yr)*i[c].bw,z:0},{x:(J.x+J.xr)*i[c].bw,y:0,z:(J.z+J.zr)*i[c].bw},{x:0,y:(J.y-J.yr)*i[c].bw,z:0}],le={type:"thru",curviness:u.frames.loop.timeline.curviness,values:[],autoRotate:u.frames.loop.timeline.autoRotate};for(var de in ne)ne.hasOwnProperty(de)&&(le.values[de]=ne[se],se=++se==ne.length?0:se);u.timeline.fromTo(u.lp,.2,{"-webkit-filter":"blur("+(U.blur||0)+"px) grayscale("+(U.grayscale||0)+"%) brightness("+(U.brightness||100)+"%)",filter:"blur("+(U.blur||0)+"px) grayscale("+(U.grayscale||0)+"%) brightness("+(U.brightness||100)+"%)",x:0,y:0,z:0,minWidth:u._incolumn||u._ingroup?"100%":void 0===u.eow?0:u.eow,minHeight:u._incolumn||u._ingroup?"100%":void 0===u.eoh?0:u.eoh,scaleX:1,scaleY:1,skew:0,rotationX:0,rotationY:0,rotationZ:0,transformPerspective:600,transformOrigin:J.originX+" "+J.originY+" "+J.originZ,opacity:1},{x:le.values[3].x,y:le.values[3].y,z:le.values[3].z,scaleX:U.scaleX,skewX:U.skewX,skewY:U.skewY,scaleY:U.scaleY,rotationX:U.rotationX,rotationY:U.rotationY,rotationZ:U.rotationZ,"-webkit-filter":"blur("+parseInt(U.blur,0)+"px) grayscale("+parseInt(U.grayscale,0)+"%) brightness("+parseInt(U.brightness,0)+"%)",filter:"blur("+parseInt(U.blur,0)+"px) grayscale("+parseInt(U.grayscale,0)+"%) brightness("+parseInt(U.brightness,0)+"%)",ease:punchgs.Sine.easeInOut,opacity:U.opacity},re),$.to(u.lp,u.frames.loop.timeline.yoyo_move?ae/2:ae,{bezier:le,ease:u.frames.loop.timeline.ease})}else u.timeline.fromTo(u.lp,.2,{"-webkit-filter":"blur("+(U.blur||0)+"px) grayscale("+(U.grayscale||0)+"%) brightness("+(U.brightness||100)+"%)",filter:"blur("+(U.blur||0)+"px) grayscale("+(U.grayscale||0)+"%) brightness("+(U.brightness||100)+"%)",x:0,y:0,z:0,minWidth:u._incolumn||u._ingroup?"100%":void 0===u.eow?0:u.eow,minHeight:u._incolumn||u._ingroup?"100%":void 0===u.eoh?0:u.eoh,scaleX:1,scaleY:1,skew:0,rotationX:0,rotationY:0,rotationZ:0,transformPerspective:600,transformOrigin:J.originX+" "+J.originY+" "+J.originZ,opacity:1},{x:U.x*i[c].bw,y:U.y*i[c].bw,z:U.z*i[c].bw,scaleX:U.scaleX,skewX:U.skewX,skewY:U.skewY,scaleY:U.scaleY,rotationX:U.rotationX,rotationY:U.rotationY,rotationZ:U.rotationZ,ease:punchgs.Sine.easeOut,opacity:U.opacity,"-webkit-filter":"blur("+parseInt(U.blur||0,0)+"px) grayscale("+parseInt(U.grayscale||0,0)+"%) brightness("+parseInt(U.brightness||100,0)+"%)",filter:"blur("+parseInt(U.blur||0,0)+"px) grayscale("+parseInt(U.grayscale||0,0)+"%) brightness("+parseInt(U.brightness||100,0)+"%)"},re),$.to(u.lp,u.frames.loop.timeline.yoyo_move?ae/2:ae,{x:J.x*i[c].bw,y:J.y*i[c].bw,z:J.z*i[c].bw,ease:u.frames.loop.timeline.ease});ee.to(u.lp,u.frames.loop.timeline.yoyo_rotate?ae/2:ae,{rotationX:J.rotationX,rotationY:J.rotationY,rotationZ:J.rotationZ,ease:u.frames.loop.timeline.ease}),te.to(u.lp,u.frames.loop.timeline.yoyo_scale?ae/2:ae,{scaleX:J.scaleX,scaleY:J.scaleY,skewX:J.skewX,skewY:J.skewY,ease:u.frames.loop.timeline.ease});var ce={opacity:J.opacity||1,ease:u.frames.loop.timeline.ease,"-webkit-filter":"blur("+(J.blur||0)+"px) grayscale("+(J.grayscale||0)+"%) brightness("+(J.brightness||100)+"%)",filter:"blur("+(J.blur||0)+"px) grayscale("+(J.grayscale||0)+"%) brightness("+(J.brightness||100)+"%)"};ie.to(u.lp,u.frames.loop.timeline.yoyo_filter?ae/2:ae,ce),u.timeline.add(K,oe)}if(void 0!==u.frames.frame_hover&&("start"===e.mode||void 0===u.hoverframeadded)){u.hoverframeadded=!0;var pe=u.frames.frame_hover.timeline.speed/1e3;pe=0===pe?1e-5:pe,u.hoverlistener||(u.hoverlistener=!0,jQuery(document).on("mouseenter mousemove",("column"===u.type?"#"+u.cbg[0].id+",":"")+"#"+u.c[0].id,function(e){if(("mousemove"!==e.type||!0!==u.ignoremousemove)&&u.readyForHover){if(u.ignoremousemove=!0,u.elementHovered=!0,u.hovertimeline||(u.hovertimeline=new punchgs.TimelineMax),u.hovertimeline.to([u.m,u.cbgmask],pe,{overflow:u.frames.frame_hover.mask?"hidden":"visible"},0),"column"===u.type&&u.hovertimeline.to(u.cbg,pe,jQuery.extend(!0,{},l(u.frames.frame_hover,u.cbg)),0),u.hovertimeline.pause(),"text"!==u.type&&"button"!==u.type||void 0===u.splitText||!1===u.splitText||u.hovertimeline.to([u.splitText.lines,u.splitText.words,u.splitText.chars],pe,{color:u.frames.frame_hover.color,ease:u.frames.frame_hover.transform.ease},0),"column"===u.type?u.hovertimeline.to(u.c,pe,a(jQuery.extend(!0,{},l(u.frames.frame_hover,u.c))),0):u.hovertimeline.to(u.c,pe,jQuery.extend(!0,{},l(u.frames.frame_hover,u.c)),0),"svg"===u.type){u.svgHTemp=jQuery.extend(!0,{},u.svgH);var t=Array.isArray(u.svgHTemp.fill)?u.svgHTemp.fill[i[c].level]:u.svgHTemp.fill;u.svgHTemp.fill=t,u.hovertimeline.to(u.svg,pe,u.svgHTemp,0),u.hovertimeline.to(u.svgPath,pe,{fill:t},0)}u.hovertimeline.play()}}),jQuery(document).on("mouseleave",("column"===u.type?"#"+u.cbg[0].id+",":"")+"#"+u.c[0].id,function(){u.elementHovered=!1,u.readyForHover&&void 0!==u.hovertimeline&&(u.hovertimeline.reverse(),u.hovertimeline.eventCallback("onReverseComplete",r,[{id:c,L:d}]))}))}if(A||(u.lastRequestedMainFrame="start"===e.mode?"frame_1":"continue"===e.mode?e.frame:u.lastRequestedMainFrame),void 0!==e.totime?u.tSTART=e.totime:void 0!==f&&void 0===e.frame?u.tSTART=f:void 0!==e.frame?u.tSTART=e.frame:u.tSTART=0,0===u.tSTART&&void 0===u.startedAnimOnce&&void 0===u.leftstage&&void 0===u.startedAnimOnce&&!0===u.hideonfirststart&&"preset"===e.mode&&(i[c]._L[d[0].id].p[0].classList.add("rs-forcehidden"),u.hideonfirststart=!1),"frame_999"!==u.tSTART&&"frame_999"!==u.triggeredFrame||!u.leftstage&&void 0!==u.startedAnimOnce){if("true"!=u.animationonscroll&&1!=u.animationonscroll?u.timeline.play(u.tSTART):u.timeline.time(u.tSTART),jQuery.inArray(u.type,["group","row","column"])>=0&&!0===e.updateChildren){if(void 0===u.childrenJS)for(var Y in u.childrenJS={},i[c]._L)void 0!==i[c]._L[Y]._lig&&void 0!==i[c]._L[Y]._lig[0]&&i[c]._L[Y]._lig[0].id===d[0].id&&i[c]._L[Y]._lig[0].id!==i[c]._L[Y].c[0].id&&(u.childrenJS[i[c]._L[Y].c[0].id]=i[c]._L[Y].c);var ue=void 0===e.totime?void 0!==u.frames[e.frame].timeline.startAbsolute?parseInt(u.frames[e.frame].timeline.startAbsolute,0)/1e3:void 0!==u.frames[e.frame].timeline.start?jQuery.isNumeric(u.frames[e.frame].timeline.start)?parseInt(u.frames[e.frame].timeline.start,0)/1e3:e.totime:.001:e.totime;for(var Y in u.childrenJS)u.childrenJS.hasOwnProperty(Y)&&i.renderLayerAnimation({layer:u.childrenJS[Y],fastforward:!1,id:c,mode:"continue",updateChildren:!0,totime:ue})}}}}});var a=function(e){var t=jQuery.extend(!0,{},e);return delete t.backgroundColor,delete t.background,delete t.backgroundImage,delete t.borderSize,delete t.borderStyle,t},r=function(e){i[e.id]._L[e.L[0].id].textDecoration&&punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].c,{textDecoration:i[e.id]._L[e.L[0].id].textDecoration})},o=function(e){i[e.id].BUG_safari_clipPath&&e.L[0].classList.remove("rs-pelock"),(i[e.id]._L[e.L[0].id]._ingroup||i[e.id]._L[e.L[0].id]._incolumn||i[e.id]._L[e.L[0].id]._inrow)&&void 0!==i[e.id]._L[i[e.id]._L[e.L[0].id]._ligid]&&void 0!==i[e.id]._L[i[e.id]._L[e.L[0].id]._ligid].timeline&&(i[e.id]._L[i[e.id]._L[e.L[0].id]._ligid].timeline.isActive()||void 0===i[e.id]._L[e.L[0].id]||void 0===i[e.id]._L[e.L[0].id].frames[i[e.id]._L[e.L[0].id].timeline.currentLabel()]||(null==i[e.id]._L[i[e.id]._L[e.L[0].id]._ligid].timezone||i[e.id]._L[i[e.id]._L[e.L[0].id]._ligid].timezone.to<=parseInt(i[e.id]._L[e.L[0].id].frames[i[e.id]._L[e.L[0].id].timeline.currentLabel()].timeline.start,0))&&!0!==i[e.id]._L[e.L[0].id].animOnScrollForceDisable&&i[e.id]._L[e.L[0].id].timeline.pause());var t=i[e.id]._L[e.L[0].id],a=t.hovertimeline;a&&a.time()>0&&(a.pause(),a.time(0),a.kill(),delete t.hovertimeline),i[e.id]._L[e.L[0].id].p[0].classList.remove("rs-forcehidden");var r={};if(i[e.id]._L[e.L[0].id].ignoremousemove=!1,i[e.id]._L[e.L[0].id].leftstage=!1,i[e.id]._L[e.L[0].id].readyForHover=!1,r.layer=e.L,void 0!==i[e.id]._L[e.L[0].id].layerLoop&&i[e.id]._L[e.L[0].id].layerLoop.from===e.frame&&i[e.id]._L[e.L[0].id].layerLoop.count++,"frame_999"!==e.frame&&(i[e.id]._L[e.L[0].id].startedAnimOnce=!0,punchgs.TweenMax.set([i[e.id]._L[e.L[0].id].c,i[e.id]._L[e.L[0].id].l,i[e.id]._L[e.L[0].id].m],{visibility:"visible"}),punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].p,{pointerEvents:i[e.id]._L[e.L[0].id].noPevents?"none":"auto",visibility:"visible"})),r.eventtype="frame_0"===e.frame||"frame_1"===e.frame?"enterstage":"frame_999"===e.frame?"leavestage":"framestarted","enterstage"===r.eventtype){var o=i[e.id].pr_processing_key||i[e.id].pr_active_key||0,s=0;if(i[e.id].middleZones&&i[e.id].middleZones.length>0&&void 0!==i[e.id].middleZones[o])for(s=0;s<i[e.id].middleZones[o].length;s++)i[e.id].middleZones[o][s].style.top=Math.round(i[e.id].height/2-i[e.id].middleZones[o][s].offsetHeight/2)+"px";if(i[e.id].smiddleZones&&i[e.id].smiddleZones.length>0)for(s=0;s<i[e.id].smiddleZones.length;s++)i[e.id].smiddleZones[s].style.top=Math.round(i[e.id].height/2-i[e.id].smiddleZones[s].offsetHeight/2)+"px"}r.layertype=i[e.id]._L[e.L[0].id].type,r.frame_index=e.frame,r.layersettings=i[e.id]._L[e.L[0].id],i[e.id].c.trigger("revolution.layeraction",[r]),"enterstage"===r.eventtype&&i.toggleState(i[e.id]._L[e.L[0].id].layertoggledby),"frame_1"===e.frame&&i.animcompleted(e.L,e.id)},s=function(e){"frame_999"===e.frame&&(i[e.id]._L[e.L[0].id].leftstage&&i[e.id]._L[e.L[0].id].p[0].classList.remove("rs-forcehidden"),i[e.id]._L[e.L[0].id].leftstage=!1,punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].c,{visibility:"visible"}),punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].p,{pointerEvents:i[e.id]._L[e.L[0].id].noPevents?"none":"auto",visibility:"visible"}))},n=function(e){var t=!0;if("column"===i[e.id]._L[e.L[0].id].type||"row"===i[e.id]._L[e.L[0].id].type||"group"===i[e.id]._L[e.L[0].id].type){var a=i[e.id]._L[e.L[0].id].timeline.currentLabel(),r=jQuery.inArray(a,i[e.id]._L[e.L[0].id].ford);r++,r=i[e.id]._L[e.L[0].id].ford.length>r?i[e.id]._L[e.L[0].id].ford[r]:a,void 0!==i[e.id]._L[e.L[0].id].frames[r]&&void 0!==i[e.id]._L[e.L[0].id].frames[a]&&(i[e.id]._L[e.L[0].id].timezone={from:parseInt(i[e.id]._L[e.L[0].id].frames[a].timeline.startAbsolute,0),to:parseInt(i[e.id]._L[e.L[0].id].frames[r].timeline.startAbsolute,0)})}if("frame_999"===e.frame)punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].c,{visibility:"hidden"}),punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].p,{pointerEvents:"none",visibility:"hidden"}),t=!1;else if(i[e.id].isEdge&&"shape"===i[e.id]._L[e.L[0].id].type){var o=i[e.id]._L[e.L[0].id].c[0].style.opacity;i[e.id]._L[e.L[0].id].c[0].style.opacity=o-1e-4,punchgs.TweenLite.set(i[e.id]._L[e.L[0].id].c[0],{opacity:o-.001,delay:.05}),punchgs.TweenLite.set(i[e.id]._L[e.L[0].id].c[0],{opacity:o,delay:.1})}var s={};s.layer=e.L,s.eventtype="frame_0"===e.frame||"frame_1"===e.frame?"enteredstage":"frame_999"===e.frame?"leftstage":"frameended",i[e.id]._L[e.L[0].id].readyForHover=!0,s.layertype=i[e.id]._L[e.L[0].id].type,s.frame_index=e.frame,s.layersettings=i[e.id]._L[e.L[0].id],i[e.id].c.trigger("revolution.layeraction",[s]),"frame_999"===e.frame&&"leftstage"===s.eventtype&&(i[e.id]._L[e.L[0].id].leftstage=!0,i[e.id]._L[e.L[0].id].p[0].classList.add("rs-forcehidden")),"leftstage"===s.eventtype&&void 0!==i[e.id].videos&&void 0!==i[e.id].videos[e.L[0].id]&&i.stopVideo&&i.stopVideo(e.L,e.id),"column"===i[e.id]._L[e.L[0].id].type&&punchgs.TweenMax.to(i[e.id]._L[e.L[0].id].cbg,.01,{visibility:"visible"}),"leftstage"===s.eventtype&&(i.unToggleState(e.layertoggledby),"video"===i[e.id]._L[e.L[0].id].type&&i.resetVideo&&setTimeout(function(){i.resetVideo(e.L,e.id)},100)),i[e.id].BUG_safari_clipPath&&!t&&e.L[0].classList.add("rs-pelock"),void 0!==i[e.id]._L[e.L[0].id].layerLoop&&i[e.id]._L[e.L[0].id].layerLoop.to===e.frame&&(-1==i[e.id]._L[e.L[0].id].layerLoop.repeat||i[e.id]._L[e.L[0].id].layerLoop.repeat>i[e.id]._L[e.L[0].id].layerLoop.count)&&i.renderLayerAnimation({layer:i[e.id]._L[e.L[0].id].c,frame:i[e.id]._L[e.L[0].id].layerLoop.from,updateChildren:i[e.id]._L[e.L[0].id].layerLoop.children,mode:"continue",fastforward:!0===i[e.id]._L[e.L[0].id].layerLoop.keep,id:e.id})},l=function(e,t){var i=jQuery.extend(!0,{},e.transform);return(i.originX||i.originY||i.originZ)&&(i.transformOrigin=(void 0===i.originX?"50%":i.originX)+" "+(void 0===i.originY?"50%":i.originY)+" "+(void 0===i.originZ?"50%":i.originZ),delete i.originX,delete i.originY,delete i.originZ),void 0!==e&&void 0!==e.filter&&(i["-webkit-filter"]="blur("+(e.filter.blur||0)+"px) grayscale("+(e.filter.grayscale||0)+"%) brightness("+(e.filter.brightness||100)+"%)",i.filter="blur("+(e.filter.blur||0)+"px) grayscale("+(e.filter.grayscale||0)+"%) brightness("+(e.filter.brightness||100)+"%)"),i.color=void 0===i.color?"rgba(255,255,255,1)":i.color,i.force3D="auto",i.backgroundImage&&"string"==typeof i.backgroundImage&&-1!==i.backgroundImage.search("gradient")&&180!==c(t.css("backgroundImage"))&&180===c(i.backgroundImage)&&(i.backgroundImage=d(i.backgroundImage,180)),i},d=function(e,t){var i=(e=e.split("("))[0];return e.shift(),i+"("+t+"deg, "+e.join("(")},c=function(e){if(-1!==e.search("deg,")){var t=e.split("deg,")[0];if(-1!==t.search(/\(/))return parseInt(t.split("(")[1],10)}return 180},p=function(e,t){e=void 0===e?"":e.split(";");var a={fill:i.revToResp("#ffffff",i[t].rle),stroke:"transparent","stroke-width":"0px","stroke-dasharray":"0","stroke-dashoffset":"0"};for(var r in e)if(e.hasOwnProperty(r)){var o=e[r].split(":");switch(o[0]){case"c":a.fill=i.revToResp(o[1],i[t].rle,void 0,"||");break;case"sw":a["stroke-width"]=o[1];break;case"sc":a.stroke=o[1];break;case"so":a["stroke-dashoffset"]=o[1];break;case"sa":a["stroke-dasharray"]=o[1]}}return a},u=function(e){return"c"===e?"center":"l"===e?"left":"r"===e?"right":e},h=function(e){var t=i[e.id]._L[e.layer[0].id],a=!1;if(t.splitText&&!1!==t.splitText&&t.splitText.revert(),"text"===t.type||"button"===t.type){for(var r in t.frames)if(void 0!==t.frames[r].chars||void 0!==t.frames[r].words||void 0!==t.frames[r].lines){a=!0;break}t.splitText=!!a&&new punchgs.SplitText(t.c,{type:"lines,words,chars",wordsClass:"rs_splitted_words",linesClass:"rs_splitted_lines",charsClass:"rs_splitted_chars"})}else t.splitText=!1},g=function(e,t,i){if(void 0!==e&&e.indexOf("block")>=0){var a={};switch(0===t.find(".tp-blockmask_in").length&&(t.append('<div class="tp-blockmask_in"></div>'),t.append('<div class="tp-blockmask_out"></div>')),i=void 0===i?punchgs.Power3.easeInOut:i,a.ft=[{scaleY:1,scaleX:0,transformOrigin:"0% 50%"},{scaleY:1,scaleX:1,ease:i,immediateRender:!1}],a.t={scaleY:1,scaleX:0,transformOrigin:"100% 50%",ease:i,immediateRender:!1},a.bmask_in=t.find(".tp-blockmask_in"),a.bmask_out=t.find(".tp-blockmask_out"),a.type="block",e){case"blocktoleft":case"blockfromright":a.ft[0].transformOrigin="100% 50%",a.t.transformOrigin="0% 50%";break;case"blockfromtop":case"blocktobottom":a.ft=[{scaleX:1,scaleY:0,transformOrigin:"50% 0%"},{scaleX:1,scaleY:1,ease:i,immediateRender:!1}],a.t={scaleX:1,scaleY:0,transformOrigin:"50% 100%",ease:i,immediateRender:!1};break;case"blocktotop":case"blockfrombottom":a.ft=[{scaleX:1,scaleY:0,transformOrigin:"50% 100%"},{scaleX:1,scaleY:1,ease:i,immediateRender:!1}],a.t={scaleX:1,scaleY:0,transformOrigin:"50% 0%",ease:i,immediateRender:!1}}return a.ft[1].overwrite="auto",a.t.overwrite="auto",a}return!1},f=function(e,t,a,r,o){return 0===i[o].sdir||void 0===t?e:("mask"===a?r="x"===r?"mX":"y"===r?"mY":r:"chars"===a?r="x"===r?"cX":"y"===r?"cY":"dir"===r?"cD":r:"words"===a?r="x"===r?"wX":"y"===r?"wY":"dir"===r?"wD":r:"lines"===a&&(r="x"===r?"lX":"y"===r?"lY":"dir"===r?"lD":r),void 0===t[r]||!1===t[r]?e:void 0!==t&&!0===t[r]?"t"===e||"top"===e?"b":"b"===e||"bottom"===e?"t":"l"===e||"left"===e?"r":"r"===e||"right"===e?"l":-1*e:void 0)},m=function(e){var t=i[e.id]._L[e.layer[0].id],a=void 0===e.source?jQuery.extend(!0,{},e.frame.transform):jQuery.extend(!0,{},e.frame[e.source]),r={originX:"50%",originY:"50%",originZ:"0"},o=i[e.id].conw,s=i[e.id].conh;for(var n in a)if(a.hasOwnProperty(n))if(a[n]="object"==typeof a[n]?a[n][i[e.id].level]:a[n],"inherit"===a[n]||"delay"===n||"direction"===n||"use"===n)delete a[n];else if("originX"===n||"originY"===n||"originZ"===n)r[n]=a[n],delete a[n];else if(jQuery.isNumeric(a[n],0))a[n]=f(a[n],e.frame.reverse,e.target,n,e.id,e.id);else if("r"===a[n][0]&&"a"===a[n][1]&&"random"!==a[n]){a[n]=a[n].replace("ran(","").replace(")","");var l=a[n].indexOf("%")>=0?"%":"",d=a[n].split("|");if(d[0]=parseFloat(d[0]),d[1]=parseFloat(d[1]),void 0!==e.splitAmount&&e.splitAmount>1){a[n]="["+(Math.random()*(d[1]-d[0])+d[0])+l;for(var c=0;c<e.splitAmount;c++)a[n]=a[n]+"|"+(Math.random()*(d[1]-d[0])+d[0])+l;a[n]=a[n]+"]"}else a[n]=Math.random()*(d[1]-d[0])+d[0]+l}else{a[n]=a[n].replace("[","").replace("]",""),a[n]=a[n].replace("cyc(","").replace(")","");var p=parseInt(a[n],0);if(a[n].indexOf("%")>=0&&jQuery.isNumeric(p))"x"==n?a[n]=f(t.eow*p/100,e.frame.reverse,e.target,n,e.id):"y"==n&&(a[n]=f(t.eoh*p/100,e.frame.reverse,e.target,n,e.id));else switch(a[n]=f(a[n],e.frame.reverse,e.target,n,e.id,e.id),a[n]){case"t":case"top":a[n]=0-t.eoh-("column"===t.type?0:t.calcy);break;case"b":case"bottom":a[n]=s-("column"===t.type?0:t.calcy);break;case"l":case"left":a[n]=0-t.eow-("column"===t.type?0:t.calcx);break;case"r":case"right":a[n]=o-("column"===t.type?0:t.calcx);break;case"m":case"c":case"middle":case"center":"x"===n&&(a[n]=f(o/2-("column"===t.type?0:t.calcx)-t.eow/2,e.frame.reverse,e.target,n,e.id)),"y"===n&&(a[n]=f(s/2-("column"===t.type?0:t.calcy)-t.eoh/2,e.frame.reverse,e.target,n,e.id))}}if(a.transformOrigin=r.originX+" "+r.originY+" "+r.originZ,!i[e.id].BUG_ie_clipPath&&void 0!==a.clip&&void 0!==t.clipPath&&t.clipPath.use){var u="rectangle"==t.clipPath.type,h=parseInt(a.clip,0),g=100-parseInt(a.clipB,0),m=Math.round(h/2);switch(t.clipPath.origin){case"invh":a.clipPath="polygon(0% 0%, 0% 100%, "+h+"% 100%, "+h+"% 0%, 100% 0%, 100% 100%, "+g+"% 100%, "+g+"% 0%, 0% 0%)";break;case"invv":a.clipPath="polygon(100% 0%, 0% 0%, 0% "+h+"%, 100% "+h+"%, 100% 100%, 0% 100%, 0% "+g+"%, 100% "+g+"%, 100% 0%)";break;case"cv":a.clipPath=u?"polygon("+(50-m)+"% 0%, "+(50+m)+"% 0%, "+(50+m)+"% 100%, "+(50-m)+"% 100%)":"circle("+h+"% at 50% 50%)";break;case"ch":a.clipPath=u?"polygon(0% "+(50-m)+"%, 0% "+(50+m)+"%, 100% "+(50+m)+"%, 100% "+(50-m)+"%)":"circle("+h+"% at 50% 50%)";break;case"l":a.clipPath=u?"polygon(0% 0%, "+h+"% 0%, "+h+"% 100%, 0% 100%)":"circle("+h+"% at 0% 50%)";break;case"r":a.clipPath=u?"polygon("+(100-h)+"% 0%, 100% 0%, 100% 100%, "+(100-h)+"% 100%)":"circle("+h+"% at 100% 50%)";break;case"t":a.clipPath=u?"polygon(0% 0%, 100% 0%, 100% "+h+"%, 0% "+h+"%)":"circle("+h+"% at 50% 0%)";break;case"b":a.clipPath=u?"polygon(0% 100%, 100% 100%, 100% "+(100-h)+"%, 0% "+(100-h)+"%)":"circle("+h+"% at 50% 100%)";break;case"lt":a.clipPath=u?"polygon(0% 0%,"+2*h+"% 0%, 0% "+2*h+"%)":"circle("+h+"% at 0% 0%)";break;case"lb":a.clipPath=u?"polygon(0% "+(100-2*h)+"%, 0% 100%,"+2*h+"% 100%)":"circle("+h+"% at 0% 100%)";break;case"rt":a.clipPath=u?"polygon("+(100-2*h)+"% 0%, 100% 0%, 100% "+2*h+"%)":"circle("+h+"% at 100% 0%)";break;case"rb":a.clipPath=u?"polygon("+(100-2*h)+"% 100%, 100% 100%, 100% "+(100-2*h)+"%)":"circle("+h+"% at 100% 100%)";break;case"clr":a.clipPath=u?"polygon(0% 0%, 0% "+h+"%, "+(100-h)+"% 100%, 100% 100%, 100% "+(100-h)+"%, "+h+"% 0%)":"circle("+h+"% at 50% 50%)";break;case"crl":a.clipPath=u?"polygon(0% "+(100-h)+"%, 0% 100%, "+h+"% 100%, 100% "+h+"%, 100% 0%, "+(100-h)+"% 0%)":"circle("+h+"% at 50% 50%)"}a["-webkit-clip-path"]=a.clipPath,delete a.clip}else delete a.clip;return"mask"!==e.target&&(void 0===e.frame||void 0===e.frame.filter&&!e.forcefilter||(a["-webkit-filter"]="blur("+(null==e.frame.filter?0:e.frame.filter.blur||0)+"px) grayscale("+(null==e.frame.filter?0:e.frame.filter.grayscale||0)+"%) brightness("+(null==e.frame.filter?100:e.frame.filter.brightness||100)+"%)",a.filter="blur("+(null==e.frame.filter?0:e.frame.filter.blur||0)+"px) grayscale("+(null==e.frame.filter?0:e.frame.filter.grayscale||0)+"%) brightness("+(null==e.frame.filter?100:e.frame.filter.brightness||100)+"%)"),jQuery.inArray(e.source,["chars","words","lines"])>=0&&(void 0!==e.frame[e.source].blur||e.forcefilter)&&(a["-webkit-filter"]="blur("+(parseInt(e.frame[e.source].blur,0)||0)+"px) grayscale("+(parseInt(e.frame[e.source].grayscale,0)||0)+"%) brightness("+(parseInt(e.frame[e.source].brightness,0)||100)+"%)",a.filter="blur("+(parseInt(e.frame[e.source].blur,0)||0)+"px) grayscale("+(parseInt(e.frame[e.source].grayscale,0)||0)+"%) brightness("+(parseInt(e.frame[e.source].brightness,0)||100)+"%)")),a.ease=void 0!==a.ease?a.ease:void 0===a.ease&&void 0!==e.ease||void 0!==a.ease&&void 0!==e.ease&&"inherit"===a.ease?e.ease:e.frame.timeline.ease,a.ease=void 0===a.ease||"default"===a.ease?punchgs.Power3.easeInOut:a.ease,a},v=function(e){var t;for(var i in e)"string"==typeof e[i]&&e[i].indexOf("|")>=0&&((t=void 0===t?{}:t)[i]=e[i].replace("[","").replace("]","").split("|"),delete e[i]);return void 0!==t&&(e.cycle=t),e},y=function(e,t){var i,a,r,o=e.length-1,s=[];switch(t){case"forward":case"f":case"random":case"r":for(i=0;i<=o;i++)s.push(i);"random"!==t&&"r"!==t||(s=function(e){for(var t,i,a=e.length;0!==a;)i=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[i],e[i]=t;return e}(s));break;case"b":case"backward":for(i=0;i<=o;i++)s.push(o-i);break;case"m":case"middletoedge":var n=Math.ceil(o/2);for(r=n-1,a=n+1,s.push(n),i=0;i<n;i++)r>=0&&s.push(r),a<=o&&s.push(a),r--,a++;break;case"e":case"edgetomiddle":for(r=o,a=0,i=0;i<=Math.floor(o/2);i++)s.push(r),a<r&&s.push(a),r--,a++;break;default:for(i=0;i<=o;i++)s.push(i)}var l=[];for(var d in s)s.hasOwnProperty(d)&&l.push(e[s[d]]);return l},b=function(e,t,a,r,o){var s,n,l={},d={},c={};for(var p in r=void 0===r?"transform":r,"loop"===o?(c.autoRotate=!1,c.yoyo_filter=!1,c.yoyo_rotate=!1,c.yoyo_move=!1,c.yoyo_scale=!1,c.curved=!1,c.curviness=2,c.ease="Linear.easeNone",c.speed=1e3,c.st=0,l.x=0,l.y=0,l.z=0,l.xr=0,l.yr=0,l.zr=0,l.scaleX=1,l.scaleY=1,l.originX="50%",l.originY="50%",l.originZ="0",l.rotationX="0deg",l.rotationY="0deg",l.rotationZ="0deg"):(c.speed=300,a?c.ease="default":l.ease="default"),"sfx"===o&&(l.fxc="#ffffff"),e=e.split(";"))if(e.hasOwnProperty(p)){var u=e[p].split(":");switch(u[0]){case"u":l.use="true"===u[1]||"t"===u[1]||fasle;break;case"c":s=u[1];break;case"fxc":l.fxc=u[1];break;case"bgc":n=u[1];break;case"auto":l.auto="t"===u[1]||void 0===u[1]||"true"===u[1];break;case"o":l.opacity=u[1];break;case"oX":l.originX=u[1];break;case"oY":l.originY=u[1];break;case"oZ":l.originZ=u[1];break;case"sX":l.scaleX=u[1];break;case"sY":l.scaleY=u[1];break;case"skX":l.skewX=u[1];break;case"skY":l.skewY=u[1];break;case"rX":l.rotationX=u[1];break;case"rY":l.rotationY=u[1];break;case"rZ":l.rotationZ=u[1];break;case"sc":l.color=u[1];break;case"se":l.effect=u[1];break;case"bos":l.borderStyle=u[1];break;case"boc":l.borderColor=u[1];break;case"td":l.textDecoration=u[1];break;case"zI":l.zIndex=u[1];break;case"tp":l.transformPerspective=u[1];break;case"cp":l.clip=parseInt(u[1],0);break;case"cpb":l.clipB=parseInt(u[1],0);break;case"fpr":l.fpr="t"===u[1]||"true"===u[1]||!0===u[1];break;case"aR":c.autoRotate="t"==u[1];break;case"rA":c.radiusAngle=u[1];break;case"yyf":c.yoyo_filter="t"==u[1];break;case"yym":c.yoyo_move="t"==u[1];break;case"yyr":c.yoyo_rotate="t"==u[1];break;case"yys":c.yoyo_scale="t"==u[1];break;case"crd":c.curved="t"==u[1];break;case"x":l.x="reverse"===o?"t"===u[1]||!0===u[1]||"true"==u[1]:"loop"===o?parseInt(u[1],0):i.revToResp(u[1],i[t].rle);break;case"y":l.y="reverse"===o?"t"===u[1]||!0===u[1]||"true"==u[1]:"loop"===o?parseInt(u[1],0):i.revToResp(u[1],i[t].rle);break;case"z":l.z="loop"===o?parseInt(u[1],0):i.revToResp(u[1],i[t].rle);break;case"bow":l.borderWidth=i.revToResp(u[1],4,0).toString().replace(/,/g," ");break;case"bor":l.borderRadius=i.revToResp(u[1],4,0).toString().replace(/,/g," ");break;case"m":l.mask="t"===u[1]||"f"!==u[1]&&u[1];break;case"xR":l.xr=parseInt(u[1],0);break;case"yR":l.yr=parseInt(u[1],0);break;case"zR":l.zr=parseInt(u[1],0);break;case"blu":"loop"===o?l.blur=parseInt(u[1],0):d.blur=parseInt(u[1],0);break;case"gra":"loop"===o?l.grayscale=parseInt(u[1],0):d.grayscale=parseInt(u[1],0);break;case"bri":"loop"===o?l.brightness=parseInt(u[1],0):d.brightness=parseInt(u[1],0);break;case"sp":c.speed=parseInt(u[1],0);break;case"d":l.delay=parseInt(u[1],0);break;case"crns":c.curviness=parseInt(u[1],0);break;case"st":c.start="w"===u[1]||"a"===u[1]?"+=0":u[1],c.waitoncall="w"===u[1]||"a"===u[1];break;case"sA":c.startAbsolute=u[1];break;case"sR":c.startRelative=u[1];break;case"e":a?c.ease=u[1]:l.ease=u[1];break;default:u[0].length>0&&(l[u[0]]="t"===u[1]||"f"!==u[1]&&u[1])}}var h={timeline:c};return jQuery.isEmptyObject(d)||("split"===o?l=jQuery.extend(!0,l,d):h.filter=d),"split"===o&&void 0===l.dir&&(l.dir="forward"),jQuery.isEmptyObject(s)||(h.color=s),jQuery.isEmptyObject(n)||(h.bgcolor=n),h[r]=l,h},w=function(e,t){var a={},r=0;if(void 0===window.rdF0){var o=b("x:0;y:0;z:0;rX:0;rY:0;rZ:0;o:0;skX:0;skY:0;sX:0;sY:0;oX:50%;oY:50%;oZ:0;dir:forward;d:5",t).transform;window.rdF0=window.rdF1={transform:b("x:0;y:0;z:0;rX:0;rY:0;rZ:0;o:0;skX:0;skY:0;sX:0;sY:0;oX:50%;oY:50%;oZ:0;tp:600px",t,!0).transform,mask:b("x:0;y:0",t,!0).transform,chars:jQuery.extend(!0,{blur:0,grayscale:0,brightness:100},o),words:jQuery.extend(!0,{blur:0,grayscale:0,brightness:100},o),lines:jQuery.extend(!0,{blur:0,grayscale:0,brightness:100},o)},window.rdF1.transform.opacity=window.rdF1.chars.opacity=window.rdF1.words.opacity=window.rdF1.lines.opacity=window.rdF1.transform.scaleX=window.rdF1.chars.scaleX=window.rdF1.words.scaleX=window.rdF1.lines.scaleX=window.rdF1.transform.scaleY=window.rdF1.chars.scaleY=window.rdF1.words.scaleY=window.rdF1.lines.scaleY=1}for(var r in void 0===e.frame_0&&(e.frame_0="x:0"),void 0===e.frame_1&&(e.frame_1="x:0"),e.ford)if(e.ford.hasOwnProperty(r)){var s=e.ford[r];if(e[s]){if(a[s]=b(e[s],t,!0),void 0!==a[s].bgcolor&&(e.bgcolinuse=!0),i[t].BUG_ie_clipPath&&void 0!==e.clipPath&&e.clipPath.use&&void 0!==a[s].transform.clip){var n="rectangle"===e.clipPath.type?100-parseInt(a[s].transform.clip):100-Math.min(100,2*parseInt(a[s].transform.clip));switch(e.clipPath.origin){case"clr":case"rb":case"rt":case"r":e[s+"_mask"]="u:t;x:"+n+"%;y:0px;",a[s].transform.x=i.revToResp("-"+n+"%",i[t].rle);break;case"crl":case"lb":case"lt":case"cv":case"l":e[s+"_mask"]="u:t;x:-"+n+"%;y:0px;",a[s].transform.x=i.revToResp(n+"%",i[t].rle);break;case"ch":case"t":e[s+"_mask"]="u:t;y:-"+n+"%;y:0px;",a[s].transform.y=i.revToResp(n+"%",i[t].rle);break;case"b":e[s+"_mask"]="u:t;y:"+n+"%;y:0px;",a[s].transform.y=i.revToResp("-"+n+"%",i[t].rle)}delete a[s].transform.clip,delete a[s].transform.clipB,e.maskinuse=!0}e[s+"_mask"]&&(a[s].mask=b(e[s+"_mask"],t).transform),null!=a[s].mask&&a[s].mask.use?(a[s].mask.x=void 0===a[s].mask.x?0:a[s].mask.x,a[s].mask.y=void 0===a[s].mask.y?0:a[s].mask.y,delete a[s].mask.use,a[s].mask.overflow="hidden"):a[s].mask={ease:"default",overflow:"visible"},e[s+"_chars"]&&(a[s].chars=b(e[s+"_chars"],t,void 0,void 0,"split").transform),e[s+"_words"]&&(a[s].words=b(e[s+"_words"],t,void 0,void 0,"split").transform),e[s+"_lines"]&&(a[s].lines=b(e[s+"_lines"],t,void 0,void 0,"split").transform),(e[s+"_chars"]||e[s+"_words"]||e[s+"_lines"])&&(a[s].split=!0),a.frame_0=void 0===a.frame_0?{transform:{}}:a.frame_0,a[s].transform.auto&&(a[s].transform=jQuery.extend(!0,{},a.frame_0.transform),a[s].transform.opacity=void 0===a[s].transform.opacity?0:a[s].transform.opacity,void 0!==a.frame_0.filter&&(a[s].filter=jQuery.extend(!0,{},a.frame_0.filter)),void 0!==a.frame_0.mask&&(a[s].mask=jQuery.extend(!0,{},a.frame_0.mask)),void 0!==a.frame_0.chars&&(a[s].chars=jQuery.extend(!0,{},a.frame_0.chars)),void 0!==a.frame_0.words&&(a[s].words=jQuery.extend(!0,{},a.frame_0.words)),void 0!==a.frame_0.lines&&(a[s].lines=jQuery.extend(!0,{},a.frame_0.lines))),e[s+"_sfx"]&&(a[s].sfx=b(e[s+"_sfx"],t,!1,void 0,"sfx").transform),e[s+"_reverse"]&&(a[s].reverse=b(e[s+"_reverse"],t,!1,void 0,"reverse").transform)}}if(a.frame_0.split&&(a.frame_1.split=!0),void 0!==a.frame_0.transform.fpr&&(e.forceRender=a.frame_0.transform.fpr,delete a.frame_0.transform.fpr),void 0===e.frame_hover&&void 0===e.svgh||(a.frame_hover=b(void 0===e.frame_hover?"":e.frame_hover,t),a.frame_hover.transform.color=a.frame_hover.color,void 0===a.frame_hover.transform.color&&delete a.frame_hover.transform.color,void 0!==a.frame_hover.bgcolor&&a.frame_hover.bgcolor.indexOf("gradient")>=0?a.frame_hover.transform.backgroundImage=a.frame_hover.bgcolor:void 0!==a.frame_hover.bgcolor&&(a.frame_hover.transform.backgroundColor=a.frame_hover.bgcolor),void 0!==a.frame_hover.bgcolor&&(e.bgcolinuse=!0),a.frame_hover.transform.opacity=void 0===a.frame_hover.transform.opacity?1:a.frame_hover.transform.opacity,a.frame_hover.mask=void 0!==a.frame_hover.transform.mask&&a.frame_hover.transform.mask,delete a.frame_hover.transform.mask,void 0!==a.frame_hover.transform&&((a.frame_hover.transform.borderWidth||a.frame_hover.transform.borderStyle)&&(a.frame_hover.transform.borderColor=void 0===a.frame_hover.transform.borderColor?"transparent":a.frame_hover.transform.borderColor),"none"!==a.frame_hover.transform.borderStyle&&void 0===a.frame_hover.transform.borderWidth&&(a.frame_hover.transform.borderWidth=i.revToResp(0,4,0).toString().replace(/,/g," ")),void 0===e.bordercolor&&void 0!==a.frame_hover.transform.borderColor&&(e.bordercolor="transparent"),void 0===e.borderwidth&&void 0!==a.frame_hover.transform.borderWidth&&(e.borderwidth=i.revToResp(a.frame_hover.transform.borderWidth,4,0)),void 0===e.borderstyle&&void 0!==a.frame_hover.transform.borderStyle&&(e.borderstyle=i.revToResp(a.frame_hover.transform.borderStyle,4,0)))),void 0!==e.tloop){e.layerLoop={from:"frame_1",to:"frame_999",repeat:-1,keep:!0,children:!0};var l=e.tloop.split(";");for(var r in l)if(l.hasOwnProperty(r)){var d=l[r].split(":");switch(d[0]){case"f":e.layerLoop.from=d[1];break;case"t":e.layerLoop.to=d[1];break;case"k":e.layerLoop.keep=d[1];break;case"r":e.layerLoop.repeat=parseInt(d[1],0);break;case"c":e.layerLoop.children=d[1]}}e.layerLoop.count=0}for(var r in(e.loop_0||e.loop_999)&&(a.loop=b(e.loop_999,t,!0,"frame_999","loop"),a.loop.frame_0=b(e.loop_0||"",t,!1,void 0,"loop").transform),a.frame_0.transform.opacity=void 0===a.frame_0.transform.opacity?0:a.frame_0.transform.opacity,a.frame_1.transform.opacity=void 0===a.frame_1.transform.opacity?1:a.frame_1.transform.opacity,a.frame_999.transform.opacity=void 0===a.frame_999.transform.opacity?"inherit":a.frame_999.transform.opacity,a.frame_0.transform.transformPerspective=void 0===a.frame_0.transform.transformPerspective?"600px":a.frame_0.transform.transformPerspective,e.clipPath&&e.clipPath.use&&(a.frame_0.transform.clip=void 0===a.frame_0.transform.clip?100:parseInt(a.frame_0.transform.clip),a.frame_1.transform.clip=void 0===a.frame_1.transform.clip?100:parseInt(a.frame_1.transform.clip)),e.resetfilter=!1,a)void 0!==a[r].filter&&(e.resetfilter=!0);return e.resetfilter&&(a.frame_0.filter=jQuery.extend(!0,{},a.frame_0.filter),a.frame_0.filter.blur=void 0===a.frame_0.filter.blur?0:a.frame_0.filter.blur,a.frame_0.filter.brightness=void 0===a.frame_0.filter.brightness?100:a.frame_0.filter.brightness,a.frame_0.filter.grayscale=void 0===a.frame_0.filter.grayscale?0:a.frame_0.filter.grayscale),void 0!==a.frame_0.filter&&(a.frame_1.filter=jQuery.extend(!0,{},a.frame_1.filter),void 0!==a.frame_0.filter.blur&&0!==a.frame_1.filter.blur&&(a.frame_1.filter.blur=void 0===a.frame_1.filter.blur?0:a.frame_1.filter.blur),void 0!==a.frame_0.filter.brightness&&100!==a.frame_1.filter.brightness&&(a.frame_1.filter.brightness=void 0===a.frame_1.filter.brightness?100:a.frame_1.filter.brightness),void 0!==a.frame_0.filter.grayscale&&0!==a.frame_1.filter.grayscale&&(a.frame_1.filter.grayscale=void 0===a.frame_1.filter.grayscale?0:a.frame_1.filter.grayscale)),_(a)},_=function(e){var t,i={},a=["transform","words","chars","lines","mask"];for(var r in e)"loop"!==r&&"frame_hover"!==r&&(i=jQuery.extend(!0,i,e[r]));for(var r in e)if(e.hasOwnProperty(r)&&"loop"!==r&&"frame_hover"!==r){for(t in i.transform)i.transform.hasOwnProperty(t)&&(i.transform[t]=void 0===e[r].transform[t]?"frame_0"===r?window.rdF0.transform[t]:"frame_1"===r?window.rdF1.transform[t]:i.transform[t]:e[r].transform[t],e[r].transform[t]=void 0===e[r].transform[t]?i.transform[t]:e[r].transform[t]);for(var o=1;o<=4;o++)for(t in i[a[o]])i[a[o]].hasOwnProperty(t)&&(e[r][a[o]]=void 0===e[r][a[o]]?{}:e[r][a[o]],i[a[o]][t]=void 0===e[r][a[o]][t]?"frame_0"===r?window.rdF0[a[o]][t]:"frame_1"===r?window.rdF1[a[o]][t]:i[a[o]][t]:e[r][a[o]][t],e[r][a[o]][t]=void 0===e[r][a[o]][t]?i[a[o]][t]:e[r][a[o]][t])}return e},x=function(e,t){if(0===e.length)return{};for(var i=e[0].getElementsByClassName(t),a={},r=0;r<i.length;r++)a[i[r].id]=i[r];return a},k=function(e,t,a){if("BR"==e[0].nodeName||"br"==e[0].tagName||"object"!=typeof e[0].className&&e[0].className.indexOf("rs_splitted_")>=0)return!1;i.sA(e[0],"stylerecorder",!0);var r=window.getComputedStyle(e[0],null),o=void 0!==e[0].id&&void 0!==i[a]._L[e[0].id]?i[a]._L[e[0].id]:e.data(),s="rekursive"===t?e.closest(".rs-layer"):void 0,n=void 0!==s&&r.fontSize===s.css("fontSize")&&r.fontWeight===s.css("fontWeight")&&r.lineHeight===s.css("lineHeight"),l=n?void 0!==s[0].id&&void 0!==i[a]._L[s[0].id]?i[a]._L[s[0].id]:s.data():void 0,d=0;o.basealign=void 0===o.basealign?"grid":o.basealign,o._isnotext||(o.fontSize=i.revToResp(n?void 0===l.fontsize?parseInt(s.css("fontSize"),0)||20:l.fontsize:void 0===o.fontsize?"rekursive"!==t?20:"inherit":o.fontsize,i[a].rle),o.fontWeight=i.revToResp(n?void 0===l.fontweight?s.css("fontWeight")||"inherit":l.fontweight:void 0===o.fontweight?e.css("fontWeight")||"inherit":o.fontweight,i[a].rle),o.whiteSpace=i.revToResp(n?void 0===l.whitespace?"nowrap":l.whitespace:void 0===o.whitespace?"nowrap":o.whitespace,i[a].rle),o.textAlign=i.revToResp(n?void 0===l.textalign?"left":l.textalign:void 0===o.textalign?"left":o.textalign,i[a].rle),o.letterSpacing=i.revToResp(n?void 0===l.letterspacing?parseInt(s.css("letterSpacing"),0)||"inherit":l.letterspacing:void 0===o.letterspacing?parseInt(e.css("letterSpacing"),0)||"inherit":o.letterspacing,i[a].rle),o.textDecoration=n?void 0===l.textDecoration?"none":l.textDecoration:void 0===o.textDecoration?"none":o.textDecoration,d=25,d=void 0!==s&&"I"===e[0].tagName?"inherit":d,void 0!==o.tshadow&&(o.tshadow.b=i.revToResp(o.tshadow.b,i[a].rle),o.tshadow.h=i.revToResp(o.tshadow.h,i[a].rle),o.tshadow.v=i.revToResp(o.tshadow.v,i[a].rle))),void 0!==o.bshadow&&(o.bshadow.b=i.revToResp(o.bshadow.b,i[a].rle),o.bshadow.h=i.revToResp(o.bshadow.h,i[a].rle),o.bshadow.v=i.revToResp(o.bshadow.v,i[a].rle),o.bshadow.s=i.revToResp(o.bshadow.s,i[a].rle)),o.display=n?void 0===l.display?s.css("display"):l.display:void 0===o.display?e.css("display"):o.display,o.float=i.revToResp(n?void 0===l.float?s.css("float")||"none":l.float:void 0===o.float?"none":o.float,i[a].rle),o.clear=i.revToResp(n?void 0===l.clear?s.css("clear")||"none":l.clear:void 0===o.clear?"none":o.clear,i[a].rle),o.lineHeight=i.revToResp(e.is("img")||-1!=jQuery.inArray(o.layertype,["video","image","audio"])?d:n?void 0===l.lineheight?parseInt(s.css("lineHeight"),0)||d:l.lineheight:void 0===o.lineheight?d:o.lineheight,i[a].rle),o.zIndex=n?void 0===l.zindex?parseInt(s.css("zIndex"),0)||"inherit":l.zindex:void 0===o.zindex?parseInt(e.css("zIndex"),0)||"inherit":o.zindex,o.paddingTop=i.revToResp(void 0===o.paddingtop?parseInt(r.paddingTop,0)||0:o.paddingtop,i[a].rle),o.paddingBottom=i.revToResp(void 0===o.paddingbottom?parseInt(r.paddingBottom,0)||0:o.paddingbottom,i[a].rle),o.paddingLeft=i.revToResp(void 0===o.paddingleft?parseInt(r.paddingLeft,0)||0:o.paddingleft,i[a].rle),o.paddingRight=i.revToResp(void 0===o.paddingright?parseInt(r.paddingRight,0)||0:o.paddingright,i[a].rle),o.marginTop=i.revToResp(void 0===o.margintop?parseInt(r.marginTop,0)||0:o.margintop,i[a].rle),o.marginBottom=i.revToResp(void 0===o.marginbottom?parseInt(r.marginBottom,0)||0:o.marginbottom,i[a].rle),o.marginLeft=i.revToResp(void 0===o.marginleft?parseInt(r.marginLeft,0)||0:o.marginleft,i[a].rle),o.marginRight=i.revToResp(void 0===o.marginright?parseInt(r.marginRight,0)||0:o.marginright,i[a].rle),o.borderTopWidth=void 0===o.borderwidth?parseInt(r.borderTopWidth,0)||0:o.borderwidth[0],o.borderBottomWidth=void 0===o.borderwidth?parseInt(r.borderBottomWidth,0)||0:o.borderwidth[2],o.borderLeftWidth=void 0===o.borderwidth?parseInt(r.borderLeftWidth,0)||0:o.borderwidth[3],o.borderRightWidth=void 0===o.borderwidth?parseInt(r.borderRightWidth,0)||0:o.borderwidth[1],o.borderTopLeftRadius=i.revToResp(void 0===o.borderradius?r.borderTopLeftRadius||0:o.borderradius[0],i[a].rle),o.borderTopRightRadius=i.revToResp(void 0===o.borderradius?r.borderTopRightRadius||0:o.borderradius[1],i[a].rle),o.borderBottomLeftRadius=i.revToResp(void 0===o.borderradius?r.borderBottomLeftRadius||0:o.borderradius[3],i[a].rle),o.borderBottomRightRadius=i.revToResp(void 0===o.borderradius?r.borderBottomRightRadius||0:o.borderradius[2],i[a].rle),o.borderStyle=i.revToResp(void 0===o.borderstyle?r.borderStyle||0:o.borderstyle,i[a].rle),o.borderBottomColor=void 0===o.bordercolor?r["border-bottom-color"]:o.bordercolor,o.borderTopColor=void 0===o.bordercolor?r["border-top-color"]:o.bordercolor,o.borderLeftColor=void 0===o.bordercolor?r["border-left-color"]:o.bordercolor,o.borderRightColor=void 0===o.bordercolor?r["border-right-color"]:o.bordercolor,"rekursive"!==t?(o.color=i.revToResp(void 0===o.color?"#ffffff":o.color,i[a].rle,void 0,"||"),o.minWidth=i.revToResp(void 0===o.minwidth?parseInt(r.minWidth,0)||0:o.minwidth,i[a].rle),o.minHeight=i.revToResp(void 0===o.minheight?parseInt(r.minHeight,0)||0:o.minheight,i[a].rle),o.width=i.revToResp(void 0===o.width?"auto":i.smartConvertDivs(o.width),i[a].rle),o.height=i.revToResp(void 0===o.height?"auto":i.smartConvertDivs(o.height),i[a].rle),o.maxWidth=i.revToResp(void 0===o.maxwidth?parseInt(r.maxWidth,0)||"none":o.maxwidth,i[a].rle),o.maxHeight=i.revToResp(-1!==jQuery.inArray(o.type,["column","row"])?"none":void 0!==o.maxheight?parseInt(r.maxHeight,0)||"none":o.maxheight,i[a].rle)):"html"===o.layertype&&(o.width=i.revToResp(e[0].width,i[a].rle),o.height=i.revToResp(e[0].height,i[a].rle)),o.styleProps={background:e[0].style.background,"background-color":e[0].style["background-color"],color:e[0].style.color,cursor:e[0].style.cursor,"font-style":e[0].style["font-style"]},null==o.bshadow&&(o.styleProps.boxShadow=e[0].style.boxShadow),""!==o.styleProps.background&&void 0!==o.styleProps.background&&o.styleProps.background!==o.styleProps["background-color"]||delete o.styleProps.background,""==o.styleProps.color&&(o.styleProps.color=r.color)},T=function(e,t){if(void 0!==e){if("BR"==e[0].nodeName||"br"==e[0].tagName)return!1;var a=i[t].level,r=void 0!==e[0]&&void 0!==e[0].id&&void 0!==i[t]._L[e[0].id]?i[t]._L[e[0].id]:e.data(),o={basealign:void 0===(r=void 0===r.basealign?e.closest("rs-layer").data():r).basealign?"grid":r.basealign,lineHeight:void 0===r.basealign?"inherit":parseInt(r.lineHeight[a]),color:void 0===r.color?void 0:r.color[a],width:void 0===r.width?void 0:"a"===r.width[a]?"auto":r.width[a],height:void 0===r.height?void 0:"a"===r.height[a]?"auto":r.height[a],minWidth:void 0===r.minWidth?void 0:"n"===r.minWidth[a]?"none":r.minWidth[a],minHeight:void 0===r.minHeight?void 0:"n"==r.minHeight[a]?"none":r.minHeight[a],maxWidth:void 0===r.maxWidth?void 0:"n"==r.maxWidth[a]?"none":r.maxWidth[a],maxHeight:void 0===r.maxHeight?void 0:"n"==r.maxHeight[a]?"none":r.maxHeight[a],paddingTop:r.paddingTop[a],paddingBottom:parseInt(r.paddingBottom[a]),paddingLeft:parseInt(r.paddingLeft[a]),paddingRight:parseInt(r.paddingRight[a]),marginTop:parseInt(r.marginTop[a]),marginBottom:parseInt(r.marginBottom[a]),marginLeft:parseInt(r.marginLeft[a]),marginRight:parseInt(r.marginRight[a]),borderTopWidth:parseInt(r.borderTopWidth),borderBottomWidth:parseInt(r.borderBottomWidth),borderLeftWidth:parseInt(r.borderLeftWidth),borderRightWidth:parseInt(r.borderRightWidth),borderTopLeftRadius:r.borderTopLeftRadius[a],borderTopRightRadius:r.borderTopRightRadius[a],borderBottomLeftRadius:r.borderBottomLeftRadius[a],borderBottomRightRadius:r.borderBottomRightRadius[a],borderStyle:r.borderStyle[a],float:r.float[a],clear:r.clear[a]};return o.borderTopColor=r.borderTopColor,o.borderBottomColor=r.borderBottomColor,o.borderLeftColor=r.borderLeftColor,o.borderRightColor=r.borderRightColor,r._isnotext||(o.textDecoration=r.textDecoration,o.fontSize=parseInt(r.fontSize[a]),o.fontWeight=parseInt(r.fontWeight[a]),o.letterSpacing=parseInt(r.letterSpacing[a])||0,o.textAlign=r.textAlign[a],o.whiteSpace=r.whiteSpace[a],o.whiteSpace="normal"===o.whiteSpace&&"auto"===o.width&&!0!==r._incolumn?"nowrap":o.whiteSpace,o.display=r.display,void 0!==r.tshadow&&(o.textShadow=parseInt(r.tshadow.h[a],0)+"px "+parseInt(r.tshadow.v[a],0)+"px "+r.tshadow.b[a]+" "+r.tshadow.c),void 0!==r.tstroke&&(o.textStroke=parseInt(r.tstroke.w,0)+"px "+r.tstroke.c)),void 0!==r.bshadow&&(o.boxShadow=parseInt(r.bshadow.h[a],0)+"px "+parseInt(r.bshadow.v[a],0)+"px "+parseInt(r.bshadow.b[a],0)+"px "+parseInt(r.bshadow.s[a],0)+"px "+r.bshadow.c),o}},L=function(e,t,i,a,r){var o=jQuery.isNumeric(e)||void 0===e?"":e.indexOf("px")>=0?"px":e.indexOf("%")>=0?"%":"";return e=jQuery.isNumeric(parseInt(e))?parseInt(e):e,e=null==(e="full"===(e=jQuery.isNumeric(e)?e*t+o:e)?a:"auto"===e||"none"===e?i:e)?r:e},R=function(e,t,a,r){var o=i[t]._L[e[0].id];o=void 0===o?{}:o;var s=e[0].className;if("object"==typeof s&&(s=""),void 0!==e&&void 0!==e[0]&&(s.indexOf("rs_splitted")>=0||"BR"==e[0].nodeName||"br"==e[0].tagName||e[0].tagName.indexOf("FCR")>0||e[0].tagName.indexOf("BCR")>0))return!1;var n,l,d,c,p=T(e,t),u="off"===r?1:i[t].bw,h="off"===r?1:i[t].bh,g="column"!==o.type?{t:p.marginTop,b:p.marginBottom,l:p.marginLeft,r:p.marginRight}:{t:0,b:0,l:0,r:0};if("column"===o.type&&punchgs.TweenMax.set(o._column,{paddingTop:Math.round(p.marginTop*h)+"px",paddingBottom:Math.round(p.marginBottom*h)+"px",paddingLeft:Math.round(p.marginLeft*u)+"px",paddingRight:Math.round(p.marginRight*u)+"px"}),-1===s.indexOf("rs_splitted_")){var f={paddingTop:Math.round(p.paddingTop*h)+"px",paddingBottom:Math.round(p.paddingBottom*h)+"px",paddingLeft:Math.round(p.paddingLeft*u)+"px",paddingRight:Math.round(p.paddingRight*u)+"px",borderTopLeftRadius:p.borderTopLeftRadius,borderTopRightRadius:p.borderTopRightRadius,borderBottomLeftRadius:p.borderBottomLeftRadius,borderBottomRightRadius:p.borderBottomRightRadius,overwrite:"auto"};if(o._incolumn||(f.marginTop="row"===o.type?0:g.t*h+"px",f.marginBottom="row"===o.type?0:g.b*h+"px",f.marginLeft="row"===o.type?0:g.l*u+"px",f.marginRight="row"===o.type?0:g.r*u+"px"),void 0!==o.spike&&(f["clip-path"]=f["-webkit-clip-path"]=o.spike),p.boxShadow&&(f.boxShadow=p.boxShadow),"column"!==o.type&&(void 0!==p.borderStyle&&"none"!==p.borderStyle&&(0!==p.borderTopWidth||p.borderBottomWidth>0||p.borderLeftWidth>0||p.borderRightWidth>0)?(f.borderTopWidth=Math.round(p.borderTopWidth*h)+"px",f.borderBottomWidth=Math.round(p.borderBottomWidth*h)+"px",f.borderLeftWidth=Math.round(p.borderLeftWidth*u)+"px",f.borderRightWidth=Math.round(p.borderRightWidth*u)+"px",f.borderStyle=p.borderStyle,f.borderTopColor=p.borderTopColor,f.borderBottomColor=p.borderBottomColor,f.borderLeftColor=p.borderLeftColor,f.borderRightColor=p.borderRightColor):("none"===p.borderStyle&&(f.borderStyle="none"),f.borderTopColor=p.borderTopColor,f.borderBottomColor=p.borderBottomColor,f.borderLeftColor=p.borderLeftColor,f.borderRightColor=p.borderRightColor)),"shape"!==o.type&&"image"!==o.type||0===p.borderTopLeftRadius&&0===p.borderTopRightRadius&&0===p.borderBottomLeftRadius&&0===p.borderBottomRightRadius||(f.overflow="hidden"),o._isnotext||(f.fontSize=Math.round(p.fontSize*u)+"px",f.fontWeight=p.fontWeight,f.letterSpacing=p.letterSpacing*u+"px",f.lineHeight=Math.round(p.lineHeight*h)+"px",f.textAlign=p.textAlign,p.textShadow&&(f.textShadow=p.textShadow),p.textStroke&&(f["-webkit-text-stroke"]=p.textStroke)),"column"===o.type&&(void 0===o.cbg_set&&(o.cbg_set=o.styleProps["background-color"],o.cbg_set=""==o.cbg_set||void 0===o.cbg_set||0==o.cbg_set.length?"transparent":o.cbg_set,o.cbg_img=e.css("backgroundImage"),o.cbg_img_r=e.css("backgroundRepeat"),o.cbg_img_p=e.css("backgroundPosition"),o.cbg_img_s=e.css("backgroundSize"),o.cbg_o=o.bgopacity?1:o.bgopacity,punchgs.TweenMax.set(e,{backgroundColor:"transparent",backgroundImage:""})),f.backgroundColor="transparent",f.backgroundImage="none"),o._isstatic&&o.elementHovered&&(n=e.data("frames"))&&n.frame_hover&&n.frame_hover.transform)for(l in f)f.hasOwnProperty(l)&&n.frame_hover.transform.hasOwnProperty(l)&&delete f[l];if("IFRAME"==e[0].nodeName&&"html"===i.gA(e[0],"layertype")&&(d="slide"==p.basealign?i[t].ulw:i[t].gridwidth[i[t].level],c="slide"==p.basealign?i[t].ulh:i[t].gridheight[i[t].level],f.width=!jQuery.isNumeric(p.width)&&p.width.indexOf("%")>=0?!o._isstatic||o._incolumn||o._ingroup?p.width:d*parseInt(p.width,0)/100:L(p.width,u,"auto",d,"auto"),f.height=!jQuery.isNumeric(p.height)&&p.height.indexOf("%")>=0?!o._isstatic||o._incolumn||o._ingroup?p.height:c*parseInt(p.height,0)/100:L(p.height,h,"auto",d,"auto")),punchgs.TweenMax.set(e,f),"rekursive"!=a){d="slide"==p.basealign?i[t].ulw:i[t].gridwidth[i[t].level],c="slide"==p.basealign?i[t].ulh:i[t].gridheight[i[t].level];var m=!jQuery.isNumeric(p.width)&&p.width.indexOf("%")>=0?!o._isstatic||o._incolumn||o._ingroup?p.width:d*parseInt(p.width,0)/100:L(p.width,u,"auto",d,"auto"),v=!jQuery.isNumeric(p.height)&&p.height.indexOf("%")>=0?!o._isstatic||o._incolumn||o._ingroup?p.height:c*parseInt(p.height,0)/100:L(p.height,h,"auto",d,"auto"),y={maxWidth:L(p.maxWidth,u,"none",d,"none"),maxHeight:L(p.maxHeight,h,"none",c,"none"),minWidth:L(p.minWidth,u,"0px",d,0),minHeight:L(p.minHeight,h,"0px",c,0),height:v,width:m,overwrite:"auto"};if(1==o.heightSetByVideo&&delete y.height,o._incolumn?(punchgs.TweenMax.set([o.p],{minWidth:m,maxWidth:m,marginTop:g.t*h+"px",marginBottom:g.b*h+"px",marginLeft:g.l*u+"px",marginRight:g.r*u+"px",float:p.float,clear:p.clear}),punchgs.TweenMax.set("block"===p.display?[o.lp]:[o.lp,o.m],{width:"100%"}),y.width=!jQuery.isNumeric(p.width)&&p.width.indexOf("%")>=0?"100%":m,"image"===o.type&&punchgs.TweenMax.set(o.img,{width:y.width})):!jQuery.isNumeric(p.width)&&p.width.indexOf("%")>=0&&(punchgs.TweenMax.set([o.p],{minWidth:"slide"===o.basealign||!0===o._ingroup?m:i[t].gridwidth[i[t].level]*i[t].bw+"px"}),punchgs.TweenMax.set([o.lp,o.m],{width:"100%"})),!jQuery.isNumeric(p.height)&&p.height.indexOf("%")>=0&&(punchgs.TweenMax.set([o.p],{minHeight:"slide"===o.basealign||!0===o._ingroup?v:i[t].gridheight[i[t].level]*i[t].bw+"px"}),punchgs.TweenMax.set([o.lp,o.m],{height:"100%"})),o._isnotext||(y.whiteSpace=p.whiteSpace,y.textAlign=p.textAlign,y.textDecoration=p.textDecoration),"npc"!=p.color&&void 0!==p.color&&(y.color=p.color),o._ingroup&&(o._groupw=y.minWidth,o._grouph=y.minHeight),"row"===o.type&&(jQuery.isNumeric(y.minHeight)||y.minHeight.indexOf("px")>=0)&&"0px"!==y.minHeight&&0!==y.minHeight&&"0"!==y.minHeight&&"none"!==y.minHeight?y.height=y.minHeight:"row"===o.type&&(y.height="auto"),o._isstatic&&o.elementHovered&&(n=e.data("frames"))&&n.frame_hover&&n.frame_hover.transform)for(l in y)y.hasOwnProperty(l)&&n.frame_hover.transform.hasOwnProperty(l)&&delete y[l];"image"===o.type&&(!jQuery.isNumeric(y.width)&&y.width.indexOf("%")>=0&&(y.width="100%"),!jQuery.isNumeric(y.height)&&y.height.indexOf("%")>=0&&(y.height="100%")),o._isgroup&&(!jQuery.isNumeric(y.width)&&y.width.indexOf("%")>=0&&(y.width="100%"),punchgs.TweenMax.set(o.p,{height:y.height})),punchgs.TweenMax.set(e,y),null!=o.svg_src&&void 0!==o.svgI&&("string"==typeof o.svgI.fill&&(o.svgI.fill=[o.svgI.fill]),o.svgTemp=jQuery.extend(!0,{},o.svgI),o.svgTemp.fill=o.svgTemp.fill[i[t].level],punchgs.TweenMax.set(o.svg,o.svgTemp),punchgs.TweenMax.set(o.svgPath,{fill:o.svgI.fill[i[t].level]}))}"row"===o.type&&(f={paddingTop:g.t*h+"px",paddingBottom:g.b*h+"px",paddingLeft:g.l*u+"px",paddingRight:g.r*u+"px"},punchgs.TweenMax.set(o.p,f)),"column"===o.type&&o.cbg&&o.cbg.length>0&&(o.cbg[0].style.backgroundSize=o.cbg_img_s,punchgs.TweenMax.set(o.cbg,{cursor:o.styleProps.cursor,borderTopWidth:Math.round(p.borderTopWidth*h)+"px",borderBottomWidth:Math.round(p.borderBottomWidth*h)+"px",borderLeftWidth:Math.round(p.borderLeftWidth*u)+"px",borderRightWidth:Math.round(p.borderRightWidth*u)+"px",borderStyle:p.borderStyle,borderTopColor:p.borderTopColor,borderBottomColor:p.borderBottomColor,borderLeftColor:p.borderLeftColor,borderRightColor:p.borderRightColor,borderTopLeftRadius:p.borderTopLeftRadius,borderTopRightRadius:p.borderTopRightRadius,borderBottomLeftRadius:p.borderBottomLeftRadius,borderBottomRightRadius:p.borderBottomRightRadius,backgroundColor:o.cbg_set,backgroundImage:o.cbg_img,backgroundRepeat:o.cbg_img_r,backgroundPosition:o.cbg_img_p,opacity:o.cbg_o}),punchgs.TweenMax.set(o.cbgmask,{top:p.marginTop*h+"px",left:p.marginLeft*u+"px",right:p.marginRight*u+"px",bottom:p.marginBottom*h+"px"}))}},I=function(e){var t={l:"none",lw:10,r:"none",rw:10};for(var i in e=e.split(";"))if(e.hasOwnProperty(i)){var a=e[i].split(":");switch(a[0]){case"l":t.l=a[1];break;case"r":t.r=a[1];break;case"lw":t.lw=a[1];break;case"rw":t.rw=a[1]}}return"polygon("+A(t.l,0,parseFloat(t.lw))+","+A(t.r,100,100-parseFloat(t.rw),!0)+")"},A=function(e,t,i,a){var r;switch(e){case"none":r=t+"% 100%,"+t+"% 0%";break;case"top":r=i+"% 100%,"+t+"% 0%";break;case"middle":r=i+"% 100%,"+t+"% 50%,"+i+"% 0%";break;case"bottom":r=t+"% 100%,"+i+"% 0%";break;case"two":r=i+"% 100%,"+t+"% 75%,"+i+"% 50%,"+t+"% 25%,"+i+"% 0%";break;case"three":r=t+"% 100%,"+i+"% 75%,"+t+"% 50%,"+i+"% 25%,"+t+"% 0%";break;case"four":r=t+"% 100%,"+i+"% 87.5%,"+t+"% 75%,"+i+"% 62.5%,"+t+"% 50%,"+i+"% 37.5%,"+t+"% 25%,"+i+"% 12.5%,"+t+"% 0%";break;case"five":r=t+"% 100%,"+i+"% 90%,"+t+"% 80%,"+i+"% 70%,"+t+"% 60%,"+i+"% 50%,"+t+"% 40%,"+i+"% 30%,"+t+"% 20%,"+i+"% 10%,"+t+"% 0%"}if(a){var o=r.split(",");for(var i in r="",o)o.hasOwnProperty(i)&&(r+=o[o.length-1-i]+(i<o.length-1?",":""))}return r}}(jQuery),function(e){"use strict";var t=jQuery.fn.revolution,i=t.is_mobile();function a(e,i){var a=new Object({single:".tp-"+i,c:t[e].cpar.find(".tp-"+i+"s")});return a.mask=a.c.find(".tp-"+i+"-mask"),a.wrap=a.c.find(".tp-"+i+"s-inner-wrapper"),a}jQuery.extend(!0,t,{hideUnHideNav:function(e){var i=t[e].c.width(),a=t[e].navigation.arrows,r=t[e].navigation.bullets,o=t[e].navigation.thumbnails,s=t[e].navigation.tabs;p(a)&&k(t[e].c.find(".tparrows"),a.hide_under,i,a.hide_over),p(r)&&k(t[e].c.find(".tp-bullets"),r.hide_under,i,r.hide_over),p(o)&&k(o.c,o.hide_under,i,o.hide_over),p(s)&&k(s.c,s.hide_under,i,s.hide_over),x(e)},resizeThumbsTabs:function(e,i){if(void 0!==t[e]&&t[e].navigation.use&&(t[e].navigation&&t[e].navigation.bullets.enable||t[e].navigation&&t[e].navigation.tabs.enable||t[e].navigation&&t[e].navigation.thumbnails.enable)){var a=(jQuery(window).width()-480)/500,r=new punchgs.TimelineLite,s=t[e].navigation.tabs,n=t[e].navigation.thumbnails,l=t[e].navigation.bullets;if(r.pause(),a=a>1?1:a<0?0:a,p(s)&&(i||s.width>s.min_width)&&o(a,r,t[e].c,s,t[e].slideamount,"tab"),p(n)&&(i||n.width>n.min_width)&&o(a,r,t[e].c,n,t[e].slideamount,"thumb"),p(l)&&i){var d=t[e].c.find(".tp-bullets");d.find(".tp-bullet").each(function(e){var t=jQuery(this),i=e+1,a=t.outerWidth()+parseInt(void 0===l.space?0:l.space,0),r=t.outerHeight()+parseInt(void 0===l.space?0:l.space,0);"vertical"===l.direction?(t.css({top:(i-1)*r+"px",left:"0px"}),d.css({height:(i-1)*r+t.outerHeight(),width:t.outerWidth()})):(t.css({left:(i-1)*a+"px",top:"0px"}),d.css({width:(i-1)*a+t.outerWidth(),height:t.outerHeight()}))})}r.play(),x(e)}return!0},updateNavIndexes:function(e){var i=t[e].c;function a(e){i.find(e).lenght>0&&i.find(e).each(function(e){jQuery(this).data("liindex",e)})}a("rs-tab"),a("rs-bullet"),a("rs-thumb"),t.resizeThumbsTabs(e,!0),t.manageNavigation(e)},manageNavigation:function(e,i){if(t[e].navigation.use){var a=t.getHorizontalOffset(t[e].cpar,"left"),o=t.getHorizontalOffset(t[e].cpar,"right");p(t[e].navigation.bullets)&&("fullscreen"!=t[e].sliderLayout&&"fullwidth"!=t[e].sliderLayout&&(t[e].navigation.bullets.h_offset_old=void 0===t[e].navigation.bullets.h_offset_old?parseInt(t[e].navigation.bullets.h_offset,0):t[e].navigation.bullets.h_offset_old,t[e].navigation.bullets.h_offset="center"===t[e].navigation.bullets.h_align?t[e].navigation.bullets.h_offset_old+a/2-o/2:t[e].navigation.bullets.h_offset_old+a-o),b(t[e].c.find(".tp-bullets"),t[e].navigation.bullets,e)),p(t[e].navigation.thumbnails)&&b(t[e].navigation.thumbnails.c,t[e].navigation.thumbnails,e),p(t[e].navigation.tabs)&&b(t[e].navigation.tabs.c,t[e].navigation.tabs,e),p(t[e].navigation.arrows)&&("fullscreen"!=t[e].sliderLayout&&"fullwidth"!=t[e].sliderLayout&&(t[e].navigation.arrows.left.h_offset_old=void 0===t[e].navigation.arrows.left.h_offset_old?parseInt(t[e].navigation.arrows.left.h_offset,0):t[e].navigation.arrows.left.h_offset_old,t[e].navigation.arrows.left.h_offset="right"===t[e].navigation.arrows.left.h_align?t[e].navigation.arrows.left.h_offset_old+o:t[e].navigation.arrows.left.h_offset_old+a,t[e].navigation.arrows.right.h_offset_old=void 0===t[e].navigation.arrows.right.h_offset_old?parseInt(t[e].navigation.arrows.right.h_offset,0):t[e].navigation.arrows.right.h_offset_old,t[e].navigation.arrows.right.h_offset="right"===t[e].navigation.arrows.right.h_align?t[e].navigation.arrows.right.h_offset_old+o:t[e].navigation.arrows.right.h_offset_old+a),b(t[e].c.find(".tp-leftarrow.tparrows"),t[e].navigation.arrows.left,e),b(t[e].c.find(".tp-rightarrow.tparrows"),t[e].navigation.arrows.right,e)),!1!==i&&(p(t[e].navigation.thumbnails)&&r(t[e].navigation.thumbnails,e),p(t[e].navigation.tabs)&&r(t[e].navigation.tabs,e))}},showFirstTime:function(e){h(e),t.callContWidthManager(e)},createNavigation:function(e){var o=t[e].navigation.arrows,l=t[e].navigation.bullets,f=t[e].navigation.thumbnails,v=t[e].navigation.tabs,y=p(o),b=p(l),x=p(f),k=p(v);s(e),n(e),y&&(m(o,e),o.c=t[e].cpar.find(".tparrows")),t[e].slides.each(function(i){if(-1===this.className.indexOf("not-in-nav")){var a=jQuery(t[e].slides[t[e].slides.length-1-i]),r=jQuery(this);b&&(t[e].navigation.bullets.rtl?w(t[e].c,l,a,e):w(t[e].c,l,r,e)),x&&(t[e].navigation.thumbnails.rtl?_(t[e].c,f,a,"tp-thumb",e):_(t[e].c,f,r,"tp-thumb",e)),k&&(t[e].navigation.tabs.rtl?_(t[e].c,v,a,"tp-tab",e):_(t[e].c,v,r,"tp-tab",e))}}),b&&(l.c=t[e].cpar.find(".tp-bullets")),x&&jQuery.extend(!0,f,a(e,"thumb")),k&&jQuery.extend(!0,v,a(e,"tab")),t[e].c.bind("revolution.slide.onafterswap revolution.nextslide.waiting",function(i){if(void 0!==t[e].pr_next_key||void 0!==t[e].pr_active_key){var a=void 0===t[e].pr_next_key?void 0===t[e].pr_cache_pr_next_key?t[e].pr_active_key:t[e].pr_cache_pr_next_key:t[e].pr_next_key,s=t.gA(t[e].slides[a],"key");t[e].c.find(".tp-bullet").each(function(){t.gA(this,"key")===s?this.classList.add("selected"):this.classList.remove("selected")}),t[e].cpar.find(".tp-thumb, .tp-tab").each(function(){t.gA(this,"key")===s?(this.classList.add("selected"),"RS-TAB"===this.nodeName?r(v,e):r(f,e)):this.classList.remove("selected")});var n=0,l=!1;t[e].thumbs&&jQuery.each(t[e].thumbs,function(e,t){n=!1===l?e:n,l=void 0!==t&&t.id===s||e===s||l});var d=n>0?n-1:t[e].slideamount-1,c=n+1==t[e].slideamount?0:n+1;if(!0===o.enable){var p=o.tmp;if(null!=t[e].thumbs[d]&&jQuery.each(t[e].thumbs[d].params,function(e,t){p=p.replace(t.from,t.to)}),o.left.j.html(p),p=o.tmp,c>t[e].slideamount)return;void 0!==t[e].thumbs[c]&&(jQuery.each(t[e].thumbs[c].params,function(e,t){p=p.replace(t.from,t.to)}),o.right.j.html(p),o.rtl?(punchgs.TweenLite.set(o.left.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+t[e].thumbs[c].src+")"}),punchgs.TweenLite.set(o.right.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+t[e].thumbs[d].src+")"})):(punchgs.TweenLite.set(o.left.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+t[e].thumbs[d].src+")"}),punchgs.TweenLite.set(o.right.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+t[e].thumbs[c].src+")"})))}}}),c(o),c(l),c(f),c(v),t[e].cpar.on("mouseenter mousemove",function(a){t[e].cpar.hasClass("tp-mouseover")||(t[e].cpar.addClass("tp-mouseover"),t[e].firstSlideAvailable&&(h(e),i&&(u(t[e].hideAllNavElementTimer),t[e].hideAllNavElementTimer=setTimeout(function(){t[e].cpar.removeClass("tp-mouseover"),g(e)},150))))}),t[e].cpar.on("mouseleave ",function(){t[e].cpar.removeClass("tp-mouseover"),g(e)}),x&&d(f.c,e),k&&d(v.c,e),"carousel"===t[e].sliderType&&d(t[e].c,e,!0),(t[e].navigation.touch.touchOnDesktop||t[e].navigation.touch.touchenabled&&i)&&d(t[e].c,e,"swipebased")}});var r=function(e,i){var a="vertical"===e.direction?e.mask.find(e.single).first().outerHeight(!0)+e.space:e.mask.find(e.single).first().outerWidth(!0)+e.space,r="vertical"===e.direction?e.mask.height():e.mask.width(),o=e.mask.find(e.single+".selected").data("liindex");o=(o=void 0===o?0:o)>0&&1===t[i].sdir?o-1:o;var s=r/a,n="vertical"===e.direction?e.mask.height():e.mask.width(),l=0-o*a,d="vertical"===e.direction?e.wrap.height():e.wrap.width(),c=l<0-(d-n)?0-(d-n):l,p=t.gA(e.wrap[0],"offset");s>2&&(c=l-(p+a)<=0?l-(p+a)<0-a?p:c+a:c,c=l-a+p+r<a&&l+(Math.round(s)-2)*a<p?l+(Math.round(s)-2)*a:c),c="vertical"!==e.direction&&e.mask.width()>=e.wrap.width()||"vertical"===e.direction&&e.mask.height()>=e.wrap.height()?0:c<0-(d-n)?0-(d-n):c>0?0:c,e.c.hasClass("dragged")||("vertical"===e.direction?e.wrap.data("tmmove",punchgs.TweenLite.to(e.wrap,.5,{top:c+"px",ease:punchgs.Power3.easeInOut})):e.wrap.data("tmmove",punchgs.TweenLite.to(e.wrap,.5,{left:c+"px",ease:punchgs.Power3.easeInOut})),e.wrap.data("offset",c))},o=function(e,t,i,a,r,o){var s=i.parent().find(".tp-"+o+"s"),n=s.find(".tp-"+o+"s-inner-wrapper"),l=s.find(".tp-"+o+"-mask"),d=a.width*e<a.min_width?a.min_width:Math.round(a.width*e),c=Math.round(d/a.width*a.height),p="vertical"===a.direction?d:d*r+a.space*(r-1),u="vertical"===a.direction?c*r+a.space*(r-1):c,h="vertical"===a.direction?{width:d+"px"}:{height:c+"px"};t.add(punchgs.TweenLite.set(s,h)),t.add(punchgs.TweenLite.set(n,{width:p+"px",height:u+"px"})),t.add(punchgs.TweenLite.set(l,{width:p+"px",height:u+"px"}));var g=n.find(".tp-"+o);return g&&jQuery.each(g,function(e,i){"vertical"===a.direction?t.add(punchgs.TweenLite.set(i,{top:e*(c+parseInt(void 0===a.space?0:a.space,0)),width:d+"px",height:c+"px"})):"horizontal"===a.direction&&t.add(punchgs.TweenLite.set(i,{left:e*(d+parseInt(void 0===a.space?0:a.space,0)),width:d+"px",height:c+"px"}))}),t},s=function(e){!0===t[e].navigation.keyboardNavigation&&jQuery(document).keydown(function(i){("horizontal"==t[e].navigation.keyboard_direction&&39==i.keyCode||"vertical"==t[e].navigation.keyboard_direction&&40==i.keyCode)&&(t[e].sc_indicator="arrow",t[e].sc_indicator_dir=0,t.callingNewSlide(e,1)),("horizontal"==t[e].navigation.keyboard_direction&&37==i.keyCode||"vertical"==t[e].navigation.keyboard_direction&&38==i.keyCode)&&(t[e].sc_indicator="arrow",t[e].sc_indicator_dir=1,t.callingNewSlide(e,-1))})},n=function(e){if(!0===t[e].navigation.mouseScrollNavigation||"on"===t[e].navigation.mouseScrollNavigation||"carousel"===t[e].navigation.mouseScrollNavigation){t[e].isIEEleven=!!navigator.userAgent.match(/Trident.*rv\:11\./),t[e].isSafari=!!navigator.userAgent.match(/safari/i),t[e].ischrome=!!navigator.userAgent.match(/chrome/i);var i=t[e].ischrome?-49:t[e].isIEEleven||t[e].isSafari?-9:navigator.userAgent.match(/mozilla/i)?-29:-49,a=t[e].ischrome?49:t[e].isIEEleven||t[e].isSafari?9:navigator.userAgent.match(/mozilla/i)?29:49;t[e].c.on("mousewheel DOMMouseScroll",function(r){var o,s,n,l,d,c=(o=r.originalEvent,s=0,n=0,l=0,d=0,"detail"in o&&(n=o.detail),"wheelDelta"in o&&(n=-o.wheelDelta/120),"wheelDeltaY"in o&&(n=-o.wheelDeltaY/120),"wheelDeltaX"in o&&(s=-o.wheelDeltaX/120),"axis"in o&&o.axis===o.HORIZONTAL_AXIS&&(s=n,n=0),l=1*s,d=1*n,"deltaY"in o&&(d=o.deltaY),"deltaX"in o&&(l=o.deltaX),(l||d)&&o.deltaMode&&(o.deltaMode,l*=1,d*=1),l&&!s&&(s=l<1?-1:1),d&&!n&&(n=d<1?-1:1),((d=navigator.userAgent.match(/mozilla/i)?10*d:d)>300||d<-300)&&(d/=10),{spinX:s,spinY:n,pixelX:l,pixelY:d}),p=!0,u=0==t[e].pr_active_key||0==t[e].pr_processing_key,h=t[e].pr_active_key==t[e].slideamount-1||t[e].pr_processing_key==t[e].slideamount-1;"carousel"==t[e].navigation.mouseScrollNavigation&&(u=h=!1),void 0===t[e].pr_processing_key?c.pixelY<i?(u||(t[e].sc_indicator="arrow","reverse"!==t[e].navigation.mouseScrollReverse&&(t[e].sc_indicator_dir=1,t.callingNewSlide(e,-1)),p=!1),h||(t[e].sc_indicator="arrow","reverse"===t[e].navigation.mouseScrollReverse&&(t[e].sc_indicator_dir=0,t.callingNewSlide(e,1)),p=!1)):c.pixelY>a&&(h||(t[e].sc_indicator="arrow","reverse"!==t[e].navigation.mouseScrollReverse&&(t[e].sc_indicator_dir=0,t.callingNewSlide(e,1)),p=!1),u||(t[e].sc_indicator="arrow","reverse"===t[e].navigation.mouseScrollReverse&&(t[e].sc_indicator_dir=1,t.callingNewSlide(e,-1)),p=!1)):p=!1;var g=t[e].c.offset().top-jQuery("body").scrollTop(),f=g+t[e].c.height();return"carousel"!=t[e].navigation.mouseScrollNavigation?("reverse"!==t[e].navigation.mouseScrollReverse&&(g>0&&c.pixelY>0||f<jQuery(window).height()&&c.pixelY<0)&&(p=!0),"reverse"===t[e].navigation.mouseScrollReverse&&(g<0&&c.pixelY<0||f>jQuery(window).height()&&c.pixelY>0)&&(p=!0)):p=!1,p?void 0:(r.preventDefault(r),!1)})}},l=function(e,t,a){return!0===(e=i?jQuery(a.target).closest(e).length||jQuery(a.srcElement).closest(e).length:jQuery(a.toElement).closest(e).length||jQuery(a.originalTarget).closest(e).length)||1===e?1:0},d=function(e,a,r){var o=t[a].carousel;jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"),o.Limit="endless";var s=e,n="vertical"===t[a].navigation.thumbnails.direction||"vertical"===t[a].navigation.tabs.direction?"none":"vertical",d=t[a].navigation.touch.swipe_direction||"horizontal";n="swipebased"==r&&"vertical"==d?"none":r?"vertical":n,jQuery.fn.swipetp||(jQuery.fn.swipetp=jQuery.fn.swipe),jQuery.fn.swipetp.defaults&&jQuery.fn.swipetp.defaults.excludedElements||jQuery.fn.swipetp.defaults||(jQuery.fn.swipetp.defaults={}),jQuery.fn.swipetp.defaults.excludedElements="label, button, input, select, textarea, .noSwipe",s.swipetp({allowPageScroll:n,triggerOnTouchLeave:!0,treshold:t[a].navigation.touch.swipe_treshold,fingers:t[a].navigation.touch.swipe_min_touches>5?1:t[a].navigation.touch.swipe_min_touches,excludeElements:jQuery.fn.swipetp.defaults.excludedElements,swipeStatus:function(r,s,n,c,p,u,h){var g=l("rs-module-wrap",0,r),f=l(".tp-thumbs",0,r),m=l(".tp-tabs",0,r),v=!!jQuery(this).attr("class").match(/tp-tabs|tp-thumb/gi);if("carousel"===t[a].sliderType&&(("move"===s||"end"===s||"cancel"==s)&&t[a].dragStartedOverSlider&&!t[a].dragStartedOverThumbs&&!t[a].dragStartedOverTabs||"start"===s&&g>0&&0===f&&0===m)){if(i&&("up"===n||"down"===n))return;switch(void 0!==o.positionanim&&o.positionanim.pause(),t[a].dragStartedOverSlider=!0,c=n&&n.match(/left|up/g)?Math.round(-1*c):c=Math.round(1*c),s){case"start":void 0!==o.positionanim&&(o.positionanim.kill(),o.slide_globaloffset="off"===o.infinity?o.slide_offset:t.simp(o.slide_offset,o.maxwidth)),o.overpull="none",o.wrap.addClass("dragged");break;case"move":if(Math.abs(c)>=10||t[a].carousel.isDragged){if(t[a].carousel.isDragged=!0,t[a].c.find(".rs-waction").addClass("tp-temporarydisabled"),o.slide_offset="off"===o.infinity?o.slide_globaloffset+c:t.simp(o.slide_globaloffset+c,o.maxwidth),"off"===o.infinity){var y="center"===o.horizontal_align?(o.wrapwidth/2-o.slide_width/2-o.slide_offset)/o.slide_width:(0-o.slide_offset)/o.slide_width;"none"!==o.overpull&&0!==o.overpull||!(y<0||y>t[a].slideamount-1)?y>=0&&y<=t[a].slideamount-1&&(y>=0&&c>o.overpull||y<=t[a].slideamount-1&&c<o.overpull)&&(o.overpull=0):o.overpull=c,o.slide_offset=y<0?o.slide_offset+(o.overpull-c)/1.1+Math.sqrt(Math.abs((o.overpull-c)/1.1)):y>t[a].slideamount-1?o.slide_offset+(o.overpull-c)/1.1-Math.sqrt(Math.abs((o.overpull-c)/1.1)):o.slide_offset}t.organiseCarousel(a,n,!0,!0)}break;case"end":case"cancel":t[a].carousel.isDragged=!1,o.slide_globaloffset=o.slide_offset,o.wrap.removeClass("dragged"),t.carouselToEvalPosition(a,n),t[a].dragStartedOverSlider=!1,t[a].dragStartedOverThumbs=!1,t[a].dragStartedOverTabs=!1,setTimeout(function(){t[a].c.find(".rs-waction").removeClass("tp-temporarydisabled")},19)}}else{if(("move"!==s&&"end"!==s&&"cancel"!=s||t[a].dragStartedOverSlider||!t[a].dragStartedOverThumbs&&!t[a].dragStartedOverTabs)&&!("start"===s&&g>0&&(f>0||m>0))){if("end"==s&&!v){if(t[a].sc_indicator="arrow","horizontal"==d&&"left"==n||"vertical"==d&&"up"==n)return t[a].sc_indicator_dir=0,t.callingNewSlide(a,1),!1;if("horizontal"==d&&"right"==n||"vertical"==d&&"down"==n)return t[a].sc_indicator_dir=1,t.callingNewSlide(a,-1),!1}return t[a].dragStartedOverSlider=!1,t[a].dragStartedOverThumbs=!1,t[a].dragStartedOverTabs=!1,!0}f>0&&(t[a].dragStartedOverThumbs=!0),m>0&&(t[a].dragStartedOverTabs=!0);var b=t[a].dragStartedOverThumbs?".tp-thumbs":".tp-tabs",w=t[a].dragStartedOverThumbs?".tp-thumb-mask":".tp-tab-mask",_=t[a].dragStartedOverThumbs?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",x=t[a].dragStartedOverThumbs?".tp-thumb":".tp-tab",k=t[a].dragStartedOverThumbs?t[a].navigation.thumbnails:t[a].navigation.tabs;c=n&&n.match(/left|up/g)?Math.round(-1*c):c=Math.round(1*c);var T=e.parent().find(w),L=T.find(_),R=k.direction,I="vertical"===R?L.height():L.width(),A="vertical"===R?T.height():T.width(),S="vertical"===R?T.find(x).first().outerHeight(!0)+k.space:T.find(x).first().outerWidth(!0)+k.space,z=void 0===L.data("offset")?0:parseInt(L.data("offset"),0),M=0;switch(s){case"start":e.parent().find(b).addClass("dragged"),z="vertical"===R?L.position().top:L.position().left,L.data("offset",z),L.data("tmmove")&&L.data("tmmove").pause();break;case"move":if(I<=A)return!1;M=(M=z+c)>0?"horizontal"===R?M-L.width()*(M/L.width()*M/L.width()):M-L.height()*(M/L.height()*M/L.height()):M;var O="vertical"===R?0-(L.height()-T.height()):0-(L.width()-T.width());M=M<O?"horizontal"===R?M+L.width()*(M-O)/L.width()*(M-O)/L.width():M+L.height()*(M-O)/L.height()*(M-O)/L.height():M,"vertical"===R?punchgs.TweenLite.set(L,{top:M+"px"}):punchgs.TweenLite.set(L,{left:M+"px"});break;case"end":case"cancel":if(v)return M=z+c,M=(M="vertical"===R?M<0-(L.height()-T.height())?0-(L.height()-T.height()):M:M<0-(L.width()-T.width())?0-(L.width()-T.width()):M)>0?0:M,M=Math.abs(c)>S/10?c<=0?Math.floor(M/S)*S:Math.ceil(M/S)*S:c<0?Math.ceil(M/S)*S:Math.floor(M/S)*S,M=(M="vertical"===R?M<0-(L.height()-T.height())?0-(L.height()-T.height()):M:M<0-(L.width()-T.width())?0-(L.width()-T.width()):M)>0?0:M,"vertical"===R?punchgs.TweenLite.to(L,.5,{top:M+"px",ease:punchgs.Power3.easeOut}):punchgs.TweenLite.to(L,.5,{left:M+"px",ease:punchgs.Power3.easeOut}),M=M||("vertical"===R?L.position().top:L.position().left),L.data("offset",M),L.data("distance",c),setTimeout(function(){t[a].dragStartedOverSlider=!1,t[a].dragStartedOverThumbs=!1,t[a].dragStartedOverTabs=!1},100),e.parent().find(b).removeClass("dragged"),!1}}}})},c=function(e){e.hide_delay=jQuery.isNumeric(parseInt(e.hide_delay,0))?e.hide_delay:.2,e.hide_delay_mobile=jQuery.isNumeric(parseInt(e.hide_delay_mobile,0))?e.hide_delay_mobile:.2},p=function(e){return e&&e.enable},u=function(e){clearTimeout(e)},h=function(e){var i=t[e].navigation.maintypes;for(var a in i)i.hasOwnProperty(a)&&p(t[e].navigation[i[a]])&&(u(t[e].navigation[i[a]].showCall),t[e].navigation[i[a]].showCall=setTimeout(function(i){u(i.hideCall),i.hide_onleave&&!t[e].cpar.hasClass("tp-mouseover")||(void 0===i.tween?i.tween=f(i):i.tween.play())},t[e].navigation[i[a]].hide_onleave&&!t[e].cpar.hasClass("tp-mouseover")?0:parseInt(t[e].navigation[i[a]].animDelay),t[e].navigation[i[a]]))},g=function(e,a){var r=t[e].navigation.maintypes;for(var o in r)r.hasOwnProperty(o)&&void 0!==t[e].navigation[r[o]]&&t[e].navigation[r[o]].hide_onleave&&p(t[e].navigation[r[o]])&&(u(t[e].navigation[r[o]].hideCall),t[e].navigation[r[o]].hideCall=setTimeout(function(e){u(e.showCall),e.tween&&e.tween.reverse()},i?parseInt(t[e].navigation[r[o]].hide_delay_mobile,0):parseInt(t[e].navigation[r[o]].hide_delay,0),t[e].navigation[r[o]]))},f=function(e){e.speed=void 0===e.speed?.5:e.speed,e.anims=[],void 0!==e.anim&&void 0===e.left&&e.anims.push(e.anim),void 0!==e.left&&e.anims.push(e.left.anim),void 0!==e.right&&e.anims.push(e.right.anim);var t=new punchgs.TimelineLite;for(var i in t.add(punchgs.TweenLite.to(e.c,e.speed,{autoAlpha:1,opacity:1,ease:punchgs.Power3.easeInOut}),0),e.anims)if(e.anims.hasOwnProperty(i))switch(e.anims[i]){case"left":t.add(punchgs.TweenLite.fromTo(e.c[i],e.speed,{marginLeft:-50},{marginLeft:0,ease:punchgs.Power3.easeInOut}),0);break;case"right":t.add(punchgs.TweenLite.fromTo(e.c[i],e.speed,{marginLeft:50},{marginLeft:0,ease:punchgs.Power3.easeInOut}),0);break;case"top":t.add(punchgs.TweenLite.fromTo(e.c[i],e.speed,{marginTop:-50},{marginTop:0,ease:punchgs.Power3.easeInOut}),0);break;case"bottom":t.add(punchgs.TweenLite.fromTo(e.c[i],e.speed,{marginTop:50},{marginTop:0,ease:punchgs.Power3.easeInOut}),0);break;case"zoomin":t.add(punchgs.TweenLite.fromTo(e.c[i],e.speed,{scale:.5},{scale:1,ease:punchgs.Power3.easeInOut}),0);break;case"zoomout":t.add(punchgs.TweenLite.fromTo(e.c[i],e.speed,{scale:1.2},{scale:1,ease:punchgs.Power3.easeInOut}),0)}return t.play(),t},m=function(e,i){e.style=void 0===e.style?"":e.style,e.left.style=void 0===e.left.style?"":e.left.style,e.right.style=void 0===e.right.style?"":e.right.style,0===t[i].c.find(".tp-leftarrow.tparrows").length&&t[i].c.append('<rs-arrow style="opacity:0" class="tp-leftarrow tparrows '+e.style+" "+e.left.style+'">'+e.tmp+"</rs-arrow>"),0===t[i].c.find(".tp-rightarrow.tparrows").length&&t[i].c.append('<rs-arrow style="opacity:0"  class="tp-rightarrow tparrows '+e.style+" "+e.right.style+'">'+e.tmp+"</rs-arrow>");var a=t[i].c.find(".tp-leftarrow.tparrows"),r=t[i].c.find(".tp-rightarrow.tparrows");e.rtl?(a.click(function(){"carousel"===t[i].sliderType&&(t[i].ctNavElement=!0),t[i].sc_indicator="arrow",t[i].sc_indicator_dir=0,t[i].c.revnext()}),r.click(function(){"carousel"===t[i].sliderType&&(t[i].ctNavElement=!0),t[i].sc_indicator="arrow",t[i].sc_indicator_dir=1,t[i].c.revprev()})):(r.click(function(){"carousel"===t[i].sliderType&&(t[i].ctNavElement=!0),t[i].sc_indicator="arrow",t[i].sc_indicator_dir=0,t[i].c.revnext()}),a.click(function(){"carousel"===t[i].sliderType&&(t[i].ctNavElement=!0),t[i].sc_indicator="arrow",t[i].sc_indicator_dir=1,t[i].c.revprev()})),e.right.j=t[i].c.find(".tp-rightarrow.tparrows"),e.left.j=t[i].c.find(".tp-leftarrow.tparrows"),e.padding_top=parseInt(t[i].carousel.padding_top||0,0),e.padding_bottom=parseInt(t[i].carousel.padding_bottom||0,0),b(a,e.left,i),b(r,e.right,i),"outer-left"!=e.position&&"outer-right"!=e.position||(t[i].outernav=!0)},v=function(e,i,a){var r=e.outerHeight(!0),o=null==t[a]?0:0==t[a].conh?t[a].height:t[a].conh,s="layergrid"==i.container?"fullscreen"==t[a].sliderLayout?t[a].height/2-t[a].gridheight[t[a].level]*t[a].bh/2:t[a].autoHeight||null!=t[a].minHeight&&t[a].minHeight>0?o/2-t[a].gridheight[t[a].level]*t[a].bh/2:0:0,n="top"===i.v_align?{top:"0px",y:Math.round(i.v_offset+s)+"px"}:"center"===i.v_align?{top:"50%",y:Math.round(0-r/2+i.v_offset)+"px"}:{top:"100%",y:Math.round(0-(r+i.v_offset+s))+"px"};e.hasClass("outer-bottom")||punchgs.TweenLite.set(e,n)},y=function(e,i,a){var r=e.outerWidth(!0),o="layergrid"===i.container?t[a].width/2-t[a].gridwidth[t[a].level]*t[a].bw/2:0,s="left"===i.h_align?{left:"0px",x:Math.round(i.h_offset+o)+"px"}:"center"===i.h_align?{left:"50%",x:Math.round(0-r/2+i.h_offset)+"px"}:{left:"100%",x:Math.round(0-(r+i.h_offset+o))+"px"};punchgs.TweenLite.set(e,s)},b=function(e,i,a){var r="fullwidth"==t[a].sliderLayout||"fullscreen"==t[a].sliderLayout,o=r?t[a].c.width():t[a].topc.width(),s=t[a].c.height();if(v(e,i,a),y(e,i,a),"outer-left"===i.position&&r?punchgs.TweenLite.set(e,{left:0-e.outerWidth()+"px",x:i.h_offset+"px"}):"outer-right"===i.position&&r&&punchgs.TweenLite.set(e,{right:0-e.outerWidth()+"px",x:i.h_offset+"px"}),e.hasClass("tp-thumbs")||e.hasClass("tp-tabs")){var n=e.data("wr_padding"),l=e.data("maxw"),d=e.data("maxh"),c=e.hasClass("tp-thumbs")?e.find(".tp-thumb-mask"):e.find(".tp-tab-mask"),p=parseInt(i.padding_top||0,0),u=parseInt(i.padding_bottom||0,0),h={},g={};l>o&&"outer-left"!==i.position&&"outer-right"!==i.position?(h.left="0px",h.x=0,h.maxWidth=o-2*n+"px",g.maxWidth=o-2*n+"px"):(h.maxWidth=l,g.maxWidth=o+"px"),d+2*n>s&&"outer-bottom"!==i.position&&"outer-top"!==i.position?(h.top="0px",h.y=0,h.maxHeight=p+u+(s-2*n)+"px",g.maxHeight=p+u+(s-2*n)+"px"):(h.maxHeight=d+"px",g.maxHeight=d+"px"),i.span?("layergrid"==i.container&&"outer-left"!==i.position&&"outer-right"!==i.position&&(p=u=0),"vertical"===i.direction?(h.maxHeight=p+u+(s-2*n)+"px",h.height=p+u+(s-2*n)+"px",h.top=0-p,h.y=0,g.maxHeight=p+u+Math.min(d,s-2*n)+"px",punchgs.TweenLite.set(e,h),punchgs.TweenLite.set(c,g),v(c,i,a)):"horizontal"===i.direction&&(h.maxWidth="100%",h.width=o-2*n+"px",h.left=0,h.x=0,g.maxWidth=l>=o?"100%":Math.min(l,o)+"px",punchgs.TweenLite.set(e,h),punchgs.TweenLite.set(c,g),y(c,i,a))):(punchgs.TweenLite.set(e,h),punchgs.TweenLite.set(c,g))}},w=function(e,i,a,r){0===e.find(".tp-bullets").length&&(i.style=void 0===i.style?"":i.style,e.append('<rs-bullets style="opacity:0"  class="tp-bullets '+i.style+" "+i.direction+'"></rs-bullets>'));var o=e.find(".tp-bullets"),s=a.data("key"),n=i.tmp;void 0!==t[r].thumbs[a.index()]&&jQuery.each(t[r].thumbs[a.index()].params,function(e,t){n=n.replace(t.from,t.to)}),o.append('<rs-bullet data-key="'+s+'" class="justaddedbullet tp-bullet">'+n+"</rs-bullet>");var l=e.find(".justaddedbullet"),d=e.find(".tp-bullet").length,c=l.outerWidth()+parseInt(void 0===i.space?0:i.space,0),p=l.outerHeight()+parseInt(void 0===i.space?0:i.space,0);"vertical"===i.direction?(l.css({top:(d-1)*p+"px",left:"0px"}),o.css({height:(d-1)*p+l.outerHeight(),width:l.outerWidth()})):(l.css({left:(d-1)*c+"px",top:"0px"}),o.css({width:(d-1)*c+l.outerWidth(),height:l.outerHeight()})),void 0!==t[r].thumbs[a.index()]&&l.find(".tp-bullet-image").css({backgroundImage:"url("+t[r].thumbs[a.index()].src+")"}),l.click(function(){t[r].sc_indicator="bullet",e.revcallslidewithid(s),e.find(".tp-bullet").removeClass("selected"),jQuery(this).addClass("selected")}),l.removeClass("justaddedbullet"),i.padding_top=parseInt(t[r].carousel.padding_top||0,0),i.padding_bottom=parseInt(t[r].carousel.padding_bottom||0,0),"outer-left"!=i.position&&"outer-right"!=i.position||(t[r].outernav=!0),o.addClass("nav-pos-hor-"+i.h_align),o.addClass("nav-pos-ver-"+i.v_align),o.addClass("nav-dir-"+i.direction),b(o,i,r)},_=function(e,i,a,r,o){var s="tp-thumb"===r?".tp-thumbs":".tp-tabs",n="tp-thumb"===r?".tp-thumb-mask":".tp-tab-mask",l="tp-thumb"===r?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",d="tp-thumb"===r?".tp-thumb":".tp-tab",c="tp-thumb"===r?".tp-thumb-image":".tp-tab-image",p="tp-thumb"===r?"rs-thumb":"rs-tab";if(i.visibleAmount=i.visibleAmount>t[o].slideamount?t[o].slideamount:i.visibleAmount,i.sliderLayout=t[o].sliderLayout,0===e.parent().find(s).length){i.style=void 0===i.style?"":i.style;var u="<"+p+'s style="opacity:0" class="'+r+"s "+(!0===i.span?"tp-span-wrapper":"")+" "+i.position+" "+i.style+'"><rs-navmask class="'+r+'-mask"><'+p+'s-wrap class="'+r+'s-inner-wrapper" style="position:relative;"></'+p+"s-wrap></rs-navmask></"+p+"s>";"outer-top"===i.position?e.parent().prepend(u):"outer-bottom"===i.position?e.after(u):e.append(u),"outer-left"!==i.position&&"outer-right"!==i.position||punchgs.TweenLite.set(t[o].c,{overflow:"visible"}),i.padding_top=parseInt(t[o].carousel.padding_top||0,0),i.padding_bottom=parseInt(t[o].carousel.padding_bottom||0,0),"outer-left"!=i.position&&"outer-right"!=i.position||(t[o].outernav=!0)}var h=a.data("key"),g=e.parent().find(s),f=g.find(n),m=f.find(l),v="horizontal"===i.direction?i.width*i.visibleAmount+i.space*(i.visibleAmount-1):i.width,y="horizontal"===i.direction?i.height:i.height*i.visibleAmount+i.space*(i.visibleAmount-1),w=i.tmp;void 0!==t[o].thumbs[a.index()]&&jQuery.each(t[o].thumbs[a.index()].params,function(e,t){w=w.replace(t.from,t.to)}),m.append("<"+p+' data-liindex="'+a.index()+'" data-key="'+h+'" class="justaddedthumb '+r+'" style="width:'+i.width+"px;height:"+i.height+'px;">'+w+"<"+p+">");var _=g.find(".justaddedthumb"),x=g.find(d).length,k=_.outerWidth()+parseInt(void 0===i.space?0:i.space,0),T=_.outerHeight()+parseInt(void 0===i.space?0:i.space,0);_.find(c).css({backgroundImage:"url("+t[o].thumbs[a.index()].src+")"}),"vertical"===i.direction?(_.css({top:(x-1)*T+"px",left:"0px"}),m.css({height:(x-1)*T+_.outerHeight(),width:_.outerWidth()})):(_.css({left:(x-1)*k+"px",top:"0px"}),m.css({width:(x-1)*k+_.outerWidth(),height:_.outerHeight()})),g.data("maxw",v),g.data("maxh",y),g.data("wr_padding",i.wrapper_padding);var L="outer-top"===i.position||"outer-bottom"===i.position?"relative":"absolute";f.css({maxWidth:v+"px",maxHeight:y+"px",overflow:"hidden",position:"relative"}),g.css({maxWidth:v+"px",maxHeight:y+"px",overflow:"visible",position:L,background:i.wrapper_color,padding:i.wrapper_padding+"px",boxSizing:"contet-box"}),_.click(function(){t[o].sc_indicator="bullet";var i=e.parent().find(l).data("distance");i=void 0===i?0:i,Math.abs(i)<10&&(e.revcallslidewithid(h),e.parent().find(s).removeClass("selected"),jQuery(this).addClass("selected"))}),_.removeClass("justaddedthumb"),g.addClass("nav-pos-hor-"+i.h_align),g.addClass("nav-pos-ver-"+i.v_align),g.addClass("nav-dir-"+i.direction),b(g,i,o),t.callContWidthManager(o)},x=function(e){var i=t[e].cpar.find(".outer-top"),a=t[e].cpar.find(".outer-bottom");t[e].top_outer=i.hasClass("tp-forcenotvisible")?0:i.outerHeight()||0,t[e].bottom_outer=a.hasClass("tp-forcenotvisible")?0:a.outerHeight()||0},k=function(e,t,i,a){t>i||i>a?e.addClass("tp-forcenotvisible"):e.removeClass("tp-forcenotvisible")}}(jQuery),function(e){"use strict";var t=jQuery.fn.revolution;jQuery.extend(!0,t,{stopPanZoom:function(e){null!=e.data("pztl")&&e.data("pztl").pause()},startPanZoom:function(e,i,a){var r=e.data(),o=e.find("rs-sbg"),s=o.data("lazyload")||o.data("src"),n=(r.owidth,r.oheight,"carousel"===t[i].sliderType?t[i].carousel.slide_width:t[i].canvas.width()),l=t[i].canvas.height();if(void 0!==r.panzoom&&null!==r.panzoom){if(e.data("pztl")&&e.data("pztl").kill(),a=a||0,0==e.find(".rs-pzimg").length){var d=o.data("mediafilter");d=void 0===d?"":d,e.append('<rs-pzimg-wrap class="'+d+'" style="z-index:2;width:100%;height:100%;top:0px;left:0px;position:absolute;display:block"><img class="rs-pzimg" src="'+s+'" style="position:absolute;" width="'+r.owidth+'" height="'+r.oheight+'"></rs-pzimg-wrap>'),e.data("pzimg",e.find(".rs-pzimg"))}var c=function(e,t,i,a,r,o,s){var n=e*i,l=t*i,d=Math.abs(a-n),c=Math.abs(r-l),p=new Object;return p.l=(0-o)*d,p.r=p.l+n,p.t=(0-s)*c,p.b=p.t+l,p.h=o,p.v=s,p};null!=e.data("pztl")&&(e.data("pztl").kill(),e.removeData("pztl"));var p=e.data("pzimg"),u=p.parent(),h=function(e,t,i){var a=void 0===i.panvalues?jQuery.extend(!0,{},function(e){var t=e.panzoom.split(";"),i={duration:10,ease:"Linear.easeNone",scalestart:1,scaleend:1,rotatestart:.01,rotateend:0,blurstart:0,blurend:0,offsetstart:"0/0",offsetend:"0/0"};for(var a in t)if(t.hasOwnProperty(a)){var r=t[a].split(":"),o=r[0],s=r[1];switch(o){case"d":i.duration=parseInt(s,0)/1e3;break;case"e":i.ease=s;break;case"ss":i.scalestart=parseInt(s,0)/100;break;case"se":i.scaleend=parseInt(s,0)/100;break;case"rs":i.rotatestart=parseInt(s,0);break;case"re":i.rotateend=parseInt(s,0);break;case"bs":i.blurstart=parseInt(s,0);break;case"be":i.blurend=parseInt(s,0);break;case"os":i.offsetstart=s;break;case"oe":i.offsetend=s}}return i.offsetstart=i.offsetstart.split("/")||[0,0],i.offsetend=i.offsetend.split("/")||[0,0],i.rotatestart=0===i.rotatestart?.01:i.rotatestart,e.panvalues=i,e.bgposition="center center"==e.bgposition?"50% 50%":e.bgposition,i}(i)):jQuery.extend(!0,{},i.panvalues),r=a.offsetstart,o=a.offsetend,s={start:{width:e,height:e/i.owidth*i.oheight,rotation:a.rotatestart+"deg",scale:a.scalestart,transformOrigin:i.bgposition},starto:{},end:{rotation:a.rotateend+"deg",scale:a.scaleend},endo:{}};a.scalestart,i.owidth,i.oheight,a.scaleend,i.owidth,i.oheight;if(s.start.height<t){var n=t/s.start.height;s.start.height=t,s.start.width=s.start.width*n}var l=function(e,t,i,a){var r=e.bgposition.split(" ")||"center center",o="center"==r[0]?"50%":"left"==r[0]||"left"==r[1]?"0%":"right"==r[0]||"right"==r[1]?"100%":r[0],s="center"==r[1]?"50%":"top"==r[0]||"top"==r[1]?"0%":"bottom"==r[0]||"bottom"==r[1]?"100%":r[1];o=parseInt(o,0)/100||0,s=parseInt(s,0)/100||0;var n=new Object;return n.start=c(a.start.width,a.start.height,a.start.scale,t,i,o,s),n.end=c(a.start.width,a.start.height,a.end.scale,t,i,o,s),n}(i,e,t,s);r[0]=parseFloat(r[0])+l.start.l,o[0]=parseFloat(o[0])+l.end.l,r[1]=parseFloat(r[1])+l.start.t,o[1]=parseFloat(o[1])+l.end.t;var d=l.start.r-l.start.l,p=l.start.b-l.start.t,u=l.end.r-l.end.l,h=l.end.b-l.end.t;return r[0]=r[0]>0?0:d+r[0]<e?e-d:r[0],o[0]=o[0]>0?0:u+o[0]<e?e-u:o[0],r[1]=r[1]>0?0:p+r[1]<t?t-p:r[1],o[1]=o[1]>0?0:h+o[1]<t?t-h:o[1],s.starto.x=r[0]+"px",s.starto.y=r[1]+"px",s.endo.x=o[0]+"px",s.endo.y=o[1]+"px",s.end.ease=s.endo.ease=a.ease,s.end.force3D=s.endo.force3D=!0,s}(n,l,r),g=new punchgs.TimelineLite;if(g.pause(),h.start.transformOrigin="0% 0%",h.starto.transformOrigin="0% 0%",r.panvalues.duration=NaN===r.panvalues.duration||void 0===r.panvalues.duration?10:r.panvalues.duration,g.add(punchgs.TweenLite.fromTo(p,r.panvalues.duration,h.start,h.end),0),g.add(punchgs.TweenLite.fromTo(u,r.panvalues.duration,h.starto,h.endo),0),void 0!==r.panvalues.blurstart&&void 0!==r.panvalues.blurend&&(0!==r.panvalues.blurstart||0!==r.panvalues.blurend)){var f={a:r.panvalues.blurstart},m={a:r.panvalues.blurend,ease:h.endo.ease},v=new punchgs.TweenLite(f,r.panvalues.duration,m);v.eventCallback("onUpdate",function(e){punchgs.TweenLite.set(e,{filter:"blur("+f.a+"px)",webkitFilter:"blur("+f.a+"px)"})},[u]),g.add(v,0)}g.progress(a),g.play(),e.data("pztl",g)}}})}(jQuery),function(e){"use strict";var t=jQuery.fn.revolution,i=t.is_mobile();jQuery.extend(!0,t,{checkForParallax:function(e){var a=t[e].parallax;if(!a.done){if(a.done=!0,i&&a.disable_onmobile)return!1;if(("3D"==a.type||"3d"==a.type)&&(punchgs.TweenLite.set(t[e].c,{overflow:a.ddd_overflow}),punchgs.TweenLite.set(t[e].canvas,{overflow:a.ddd_overflow}),"carousel"!=t[e].sliderType&&a.ddd_shadow)){var r=jQuery('<div class="dddwrappershadow"></div>');punchgs.TweenLite.set(r,{force3D:"auto",transformPerspective:1600,transformOrigin:"50% 50%",width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:0}),t[e].c.prepend(r)}t[e].slides.each(function(){n(jQuery(this))}),("3D"==a.type||"3d"==a.type)&&t[e].c.find("rs-static-layers").length>0&&(punchgs.TweenLite.set(t[e].c.find("rs-static-layers"),{top:0,left:0,width:"100%",height:"100%"}),n(t[e].c.find("rs-static-layers"))),a.pcontainers=[],a.pcontainer_depths=[],a.bgcontainers=[],a.bgcontainer_depths=[],a.speed=void 0===a.speed?0:parseInt(a.speed,0),a.speedbg=void 0===a.speedbg?0:parseInt(a.speedbg,0),a.speedls=void 0===a.speedls?0:parseInt(a.speedls,0),t[e].c.find("rs-slide rs-sbg-wrap, rs-slide rs-bgvideo").each(function(){var i=jQuery(this),r=i.data("parallax");void 0!==(r="on"==r||!0===r?1:r)&&"off"!==r&&!1!==r&&(a.bgcontainers.push(i.closest("rs-sbg-px")),a.bgcontainer_depths.push(t[e].parallax.levels[parseInt(r,0)-1]/100))});for(var o=1;o<=a.levels.length;o++)t[e].c.find(".rs-pxl-"+o).each(function(){var e=jQuery(this),t=this.className.indexOf("rs-pxmask")>=0?e.closest("rs-px-mask"):e.closest(".rs-parallax-wrap");t.data("parallaxlevel",a.levels[o-1]),t.addClass("tp-parallax-container"),a.pcontainers.push(t),a.pcontainer_depths.push(a.levels[o-1])});"mouse"!=a.type&&"mousescroll"!=a.type&&"3D"!=a.type&&"3d"!=a.type||(t[e].c.mouseenter(function(i){var a=t[e].c.offset().top,r=t[e].c.offset().left;void 0!==t[e].pr_active_key&&(t.sA(t[e].slides[t[e].pr_active_key],"enterx",i.pageX-r),t.sA(t[e].slides[t[e].pr_active_key],"entery",i.pageY-a))}),t[e].c.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath",function(i,r){var o=r&&r.li?r.li:jQuery(t[e].slides[t[e].pr_active_key]);if("enterpoint"==a.origo){var s=t[e].c.offset().top,n=t[e].c.offset().left;null==o.data("enterx")&&o.data("enterx",i.pageX-n),null==o.data("entery")&&o.data("entery",i.pageY-s);var l=o.data("enterx")||i.pageX-n,d=o.data("entery")||i.pageY-s,c=l-(i.pageX-n),p=d-(i.pageY-s),u=a.speed/1e3||.4}else s=t[e].c.offset().top,n=t[e].c.offset().left,c=t[e].conw/2-(i.pageX-n),p=t[e].conh/2-(i.pageY-s),u=a.speed/1e3||3;"mouseleave"==i.type&&(c=a.ddd_lasth||0,p=a.ddd_lastv||0,u=1.5);for(var h=0;h<a.pcontainers.length;h++){var g=a.pcontainers[h],f=a.pcontainer_depths[h],m="3D"==a.type||"3d"==a.type?f/200:f/100,v=c*m,y=p*m;"mousescroll"==a.type?punchgs.TweenLite.to(g,u,{force3D:"auto",x:v,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(g,u,{force3D:"auto",x:v,y:y,ease:punchgs.Power3.easeOut,overwrite:"all"})}if("3D"==a.type||"3d"==a.type){var b="rs-slide .dddwrapper, .dddwrappershadow, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer";"carousel"===t[e].sliderType&&(b="rs-slide .dddwrapper, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer"),t[e].c.find(b).each(function(){var r=jQuery(this),o=a.levels[a.levels.length-1]/200,s=c*o,n=p*o,l=0==t[e].conw?0:Math.round(c/t[e].conw*o*100)||0,d=0==t[e].conh?0:Math.round(p/t[e].conh*o*100)||0,h=r.closest("rs-slide"),g=0,f=!1;r.hasClass("dddwrapper-layer")&&(g=a.ddd_z_correction||65,f=!0),r.hasClass("dddwrapper-layer")&&(s=0,n=0),h.index()===t[e].pr_active_key||"carousel"!=t[e].sliderType?!a.ddd_bgfreeze||f?punchgs.TweenLite.to(r,u,{rotationX:d,rotationY:-l,x:s,z:g,y:n,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(r,.5,{force3D:"auto",rotationY:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(r,.5,{force3D:"auto",rotationY:0,x:0,y:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}),"mouseleave"==i.type&&punchgs.TweenLite.to(jQuery(this),3.8,{z:0,ease:punchgs.Power3.easeOut})})}}),i&&(window.ondeviceorientation=function(i){var r=Math.round(i.beta||0)-70,o=Math.round(i.gamma||0),s=jQuery(t[e].slides[t[e].pr_active_key]);if(jQuery(window).width()>jQuery(window).height()){var n=o;o=r,r=n}var l=t[e].c.width(),d=t[e].c.height(),c=360/l*o,p=180/d*r,u=a.speed/1e3||3,h=[];if(s.find(".tp-parallax-container").each(function(e){h.push(jQuery(this))}),t[e].c.find("rs-static-layers .tp-parallax-container").each(function(){h.push(jQuery(this))}),jQuery.each(h,function(){var e=jQuery(this),t=parseInt(e.data("parallaxlevel"),0)/100,i=c*t*2,a=p*t*4;punchgs.TweenLite.to(e,u,{force3D:"auto",x:i,y:a,ease:punchgs.Power3.easeOut,overwrite:"all"})}),"3D"==a.type||"3d"==a.type){var g="rs-slide .dddwrapper, .dddwrappershadow, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer";"carousel"===t[e].sliderType&&(g="rs-slide .dddwrapper, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer"),t[e].c.find(g).each(function(){var r=jQuery(this),o=a.levels[a.levels.length-1]/200,s=c*o,n=p*o*3,l=0==t[e].conw?0:Math.round(c/t[e].conw*o*500)||0,d=0==t[e].conh?0:Math.round(p/t[e].conh*o*700)||0,h=r.closest("rs-slide"),g=0,f=!1;r.hasClass("dddwrapper-layer")&&(g=a.ddd_z_correction||65,f=!0),r.hasClass("dddwrapper-layer")&&(s=0,n=0),h.hasClass("active-rs-slide")||"carousel"!=t[e].sliderType?!a.ddd_bgfreeze||f?punchgs.TweenLite.to(r,u,{rotationX:d,rotationY:-l,x:s,z:g,y:n,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(r,.5,{force3D:"auto",rotationY:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(r,.5,{force3D:"auto",rotationY:0,z:0,x:0,y:0,rotationX:0,ease:punchgs.Power3.easeOut,overwrite:"all"}),"mouseleave"==i.type&&punchgs.TweenLite.to(jQuery(this),3.8,{z:0,ease:punchgs.Power3.easeOut})})}}));var s=t[e].scrolleffect;s.set&&(s.multiplicator_layers=parseFloat(s.multiplicator_layers),s.multiplicator=parseFloat(s.multiplicator)),void 0!==s._L&&0===s._L.length&&(s._L=!1),void 0!==s.bgs&&0===s.bgs.length&&(s.bgs=!1),t.scrollTicker(e)}function n(i){if("3D"==a.type||"3d"==a.type){i.find("rs-sbg-wrap").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>'),i.find(".rs-parallax-wrap").wrapAll('<div class="dddwrapper-layer" style="width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:5;overflow:'+a.ddd_layer_overflow+';"></div>'),i.find(".rs-pxl-tobggroup").closest(".rs-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');var r=i.find(".dddwrapper"),o=i.find(".dddwrapper-layer");i.find(".dddwrapper-layertobggroup").appendTo(r),"carousel"==t[e].sliderType&&(a.ddd_shadow&&r.addClass("dddwrappershadow"),punchgs.TweenLite.set(r,{borderRadius:t[e].carousel.border_radius})),punchgs.TweenLite.set(i,{overflow:"visible",transformStyle:"preserve-3d",perspective:1600}),punchgs.TweenLite.set(r,{force3D:"auto",transformOrigin:"50% 50%",transformStyle:"preserve-3d",transformPerspective:1600}),punchgs.TweenLite.set(o,{force3D:"auto",transformOrigin:"50% 50%",zIndex:5,transformStyle:"flat",transformPerspective:1600}),punchgs.TweenLite.set(t[e].canvas,{transformStyle:"preserve-3d",transformPerspective:1600})}}},scrollTicker:function(e){1!=t[e].scrollTicker&&(t[e].scrollTicker=!0,i?(punchgs.TweenLite.ticker.fps(150),punchgs.TweenLite.ticker.addEventListener("tick",function(){t.scrollHandling(e)},t[e].c,!1,1)):document.addEventListener("scroll",function(i){t.scrollHandling(e,!0)},{passive:!0})),t.scrollHandling(e,!0)},scrollHandling:function(e,a,r,o){if(void 0!==t[e]){if(t[e].lastwindowheight=t[e].lastwindowheight||window.innerHeight,t[e].conh=0===t[e].conh||void 0===t[e].conh?t[e].infullscreenmode?t[e].minHeight:t[e].c.height():t[e].conh,t[e].lastscrolltop==window.scrollY&&!t[e].duringslidechange&&!a)return!1;punchgs.TweenLite.delayedCall(.2,function(e,i){t[e].lastscrolltop=i},[e,window.scrollY]);var s=void 0!==t[e].topc?t[e].topc[0].getBoundingClientRect():0===t[e].c.height()?t[e].cpar[0].getBoundingClientRect():t[e].c[0].getBoundingClientRect(),n=t[e].viewPort,l=t[e].parallax,d=t[e].slides[void 0===t[e].pr_active_key?0:t[e].pr_active_key];s.hheight=0===s.height?0===t[e].c.height()?t[e].cpar.height():t[e].c.height():s.height;var c=s.top<0||s.hheight>t[e].lastwindowheight?s.top/s.hheight:s.bottom>t[e].lastwindowheight?(s.bottom-t[e].lastwindowheight)/s.hheight:0,p=t[e].fixedOnTop?Math.min(1,Math.max(0,window.scrollY/t[e].lastwindowheight)):Math.min(1,Math.max(0,1-(s.top+s.hheight)/(s.hheight+t[e].lastwindowheight))),u=s.top>=0&&s.top<=t[e].lastwindowheight||s.top<=0&&s.bottom>=0||s.top<=0&&s.bottom>=0;t[e].scrollproc=c,t.callBackHandling&&t.callBackHandling(e,"parallax","start");var h=Math.max(0,1-Math.abs(c));if(u?t[e].sbtimeline.fixed?(t[e].curheight=void 0===t[e].curheight?t[e].cpar.height():t[e].curheight,void 0===t[e].sbtimeline.rest&&t.updateFixedScrollTimes(e),s.top>=0&&s.top<=t[e].lastwindowheight?(p=t[e].sbtimeline.fixStart*(1-s.top/t[e].lastwindowheight)/1e3,t[e].topc.removeClass("rs-fixedscrollon"),punchgs.TweenLite.set(t[e].cpar,{top:0})):s.top<=0&&s.bottom>=t[e].curheight?(t[e].topc.addClass("rs-fixedscrollon"),punchgs.TweenLite.set(t[e].cpar,{top:0}),p=(t[e].sbtimeline.fixStart+t[e].sbtimeline.time*(Math.abs(s.top)/(s.hheight-t[e].curheight)))/1e3):(punchgs.TweenLite.set(t[e].cpar,{top:s.height-t[e].curheight}),t[e].topc.removeClass("rs-fixedscrollon"),p=(t[e].sbtimeline.fixEnd+t[e].sbtimeline.rest*(1-s.bottom/t[e].curheight))/1e3)):p=t[e].duration*p/1e3:t[e].sbtimeline.fixed&&(t[e].topc.removeClass("rs-fixedscrollon"),punchgs.TweenLite.set(t[e].cpar,{top:0})),n.enable&&(void 0===t[e].viewPort.vaType&&t.updateVisibleArea(e),"%"===n.vaType[t[e].level]&&n.visible_area[t[e].level]<=h||"px"===n.vaType[t[e].level]&&(s.top<=0&&s.bottom>=t[e].lastwindowheight||s.top>=0&&s.bottom<=t[e].lastwindowheight||s.top>=0&&s.top<t[e].lastwindowheight-n.visible_area[t[e].level]||s.bottom>=n.visible_area[t[e].level]&&s.bottom<t[e].lastwindowheight)?t[e].inviewport||(t[e].inviewport=!0,t.enterInViewPort(e)):t[e].inviewport&&(t[e].inviewport=!1,t.leaveViewPort(e))),u&&void 0!==d&&void 0!==t.gA(d,"key")&&!0!==o)for(var g in t[e].sbas[t.gA(d,"key")])void 0===t[e]._L[g]||void 0===t[e]._L[g].timeline||1!=t[e]._L[g].animationonscroll&&"true"!=t[e]._L[g].animationonscroll||(void 0!==t[e]._L[g].scrollBasedOffset&&(p+=t[e]._L[g].scrollBasedOffset),p>0&&t[e]._L[g].animOnScrollRepeats<5?(t[e]._L[g].timeline.time(p),t[e]._L[g].animOnScrollRepeats++):punchgs.TweenMax.to(t[e]._L[g].timeline,t[e].sbtimeline.speed,{time:p,ease:t[e].sbtimeline.ease}));if(i&&l.disable_onmobile)return!1;if("3d"!=l.type&&"3D"!=l.type){if(("scroll"==l.type||"mousescroll"==l.type)&&l.pcontainers)for(var f=0;f<l.pcontainers.length;f++)if(l.pcontainers[f].length>0){var m=l.pcontainers[f],v=l.pcontainer_depths[f]/100,y=Math.round(c*(-v*t[e].conh)*10)/10||0,b=void 0!==r?r:l.speedls/1e3||0;m.data("parallaxoffset",y),punchgs.TweenLite.to(m,b,{overwrite:"auto",force3D:"auto",y:y})}if(l.bgcontainers)for(f=0;f<l.bgcontainers.length;f++){var w=l.bgcontainers[f];y=c*(-l.bgcontainer_depths[f]*t[e].conh)||0,b=void 0!==r?r:l.speedbg/1e3||.015;b=void 0!==t[e].parallax.lastBGY&&0===b&&Math.abs(y-t[e].parallax.lastBGY)>50?.15:b,punchgs.TweenLite.to(w,b,{position:"absolute",top:"0px",left:"0px",backfaceVisibility:"hidden",force3D:"true",y:y+"px"}),t[e].parallax.lastBGY=y}}var _=t[e].scrolleffect;if(_.set&&(!_.mobile||!i)){var x=Math.abs(c)-_.tilt/100;if(x=x<0?0:x,!1!==_._L){var k=1-x*_.multiplicator_layers,T={force3D:"true"};if("top"==_.direction&&c>=0&&(k=1),"bottom"==_.direction&&c<=0&&(k=1),k=k>1?1:k<0?0:k,_.fade&&(T.opacity=k),_.scale){var L=k;T.scale=1-L+1}if(_.blur){var R=(1-k)*_.maxblur;T["-webkit-filter"]="blur("+R+"px)",T.filter="blur("+R+"px)"}if(_.grayscale){var I="grayscale("+100*(1-k)+"%)";T["-webkit-filter"]=void 0===T["-webkit-filter"]?I:T["-webkit-filter"]+" "+I,T.filter=void 0===T.filter?I:T.filter+" "+I}punchgs.TweenLite.set(_._L,T)}if(!1!==_.bgs){k=1-x*_.multiplicator,T={backfaceVisibility:"hidden",force3D:"true"};for(var A in"top"==_.direction&&c>=0&&(k=1),"bottom"==_.direction&&c<=0&&(k=1),k=k>1?1:k<0?0:k,_.bgs)if(_.bgs.hasOwnProperty(A)){if(_.bgs[A].fade&&(T.opacity=k),_.bgs[A].blur){R=(1-k)*_.maxblur;T["-webkit-filter"]="blur("+R+"px)",T.filter="blur("+R+"px)"}if(_.bgs[A].grayscale){I="grayscale("+100*(1-k)+"%)";T["-webkit-filter"]=void 0===T["-webkit-filter"]?I:T["-webkit-filter"]+" "+I,T.filter=void 0===T.filter?I:T.filter+" "+I}punchgs.TweenLite.set(_.bgs[A].c,T)}}}t.callBackHandling&&t.callBackHandling(e,"parallax","end")}}})}(jQuery),function(e){"use strict";var t=jQuery.fn.revolution;jQuery.extend(!0,t,{animateSlide:function(e){return a(e)}});var i=function(e,t){var i;return void 0!==(i=jQuery.isArray(e)?e.length>=t?e[t]:e[e.length-1]:e)&&jQuery.isNumeric(i)?parseInt(e,0):i},a=function(e){var a=e.id,n="arrow"==t[a].sc_indicator?void 0===t[a].sc_indicator_dir?t[a].sdir:t[a].sc_indicator_dir:t[a].sdir,l=!0===e.recall?jQuery.extend(!0,{},t[a].lastSliderTransition):function(e,i,a){var r="Power1.easeIn",o="Power1.easeOut",s="Power1.easeInOut",n="Power2.easeIn",l="Power2.easeOut",d="Power2.easeInOut",c="Power3.easeInOut",p=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],u=[17,18,19,20,21,22,23,24,25,27],h=0,g=1,f=0,m=[["boxslide",0,0,10,"box",!1,null,0,o,o,1e3,6],["boxrandomrotate",0,1,10,"box",!1,null,60,o,o,1e3,6],["boxfade",1,0,10,"box",!1,null,1,s,s,1e3,5],["slotslide-horizontal",2,0,0,"horizontal",!0,!1,2,d,d,1e3,3],["slotslide-vertical",3,0,0,"vertical",!0,!1,3,d,d,1e3,3],["curtain-1",4,3,0,"horizontal",!0,!0,4,o,o,900,5],["curtain-2",5,3,0,"horizontal",!0,!0,5,o,o,900,5],["curtain-3",6,3,25,"horizontal",!0,!0,6,o,o,900,5],["slotzoom-horizontal",7,0,0,"horizontal",!0,!0,7,o,o,1e3,7],["slotzoom-vertical",8,0,0,"vertical",!0,!0,8,l,l,1e3,8],["slotzoom-mixed",8,1,0,"vertical",!0,!0,59,l,l,1e3,8],["slotfade-horizontal",9,0,0,"horizontal",!0,null,9,d,d,1500,10],["slotfade-vertical",10,0,0,"vertical",!0,null,10,d,d,1500,10],["crossfade-horizontal",9,0,0,"horizontal",!0,null,9,d,d,0,10],["crossfade-vertical",10,0,0,"vertical",!0,null,10,d,d,0,10],["fade",11,0,1,"horizontal",!0,null,11,d,d,1e3,1],["crossfade",11,1,1,"horizontal",!0,null,11,d,d,1e3,1],["fadethroughdark",11,2,1,"horizontal",!0,null,11,d,d,1e3,1],["fadethroughlight",11,3,1,"horizontal",!0,null,11,d,d,1e3,1],["fadethroughtransparent",11,4,1,"horizontal",!0,null,11,d,d,1e3,1],["slideleft",12,0,1,"horizontal",!0,!0,12,c,c,1e3,1],["slideup",13,0,1,"horizontal",!0,!0,13,c,c,1e3,1],["slidedown",14,0,1,"horizontal",!0,!0,14,c,c,1e3,1],["slideright",15,0,1,"horizontal",!0,!0,15,c,c,1e3,1],["slideoverleft",12,7,1,"horizontal",!0,!0,12,c,c,1e3,1],["slideoverup",13,7,1,"horizontal",!0,!0,13,c,c,1e3,1],["slideoverdown",14,7,1,"horizontal",!0,!0,14,c,c,1e3,1],["slideoverright",15,7,1,"horizontal",!0,!0,15,c,c,1e3,1],["slideremoveleft",12,8,1,"horizontal",!0,!0,12,c,c,1e3,1],["slideremoveup",13,8,1,"horizontal",!0,!0,13,c,c,1e3,1],["slideremovedown",14,8,1,"horizontal",!0,!0,14,c,c,1e3,1],["slideremoveright",15,8,1,"horizontal",!0,!0,15,c,c,1e3,1],["papercut",16,0,0,"vertical",null,!0,16,c,c,1e3,2],["3dcurtain-horizontal",17,0,20,"vertical",!0,!0,17,s,s,2e3,7],["3dcurtain-vertical",18,0,10,"horizontal",!0,!0,18,s,s,2e3,7],["cubic",19,0,20,"horizontal",!1,!0,19,d,d,1e3,1],["cube",19,0,20,"horizontal",!1,!0,20,d,d,1e3,1],["flyin",20,0,4,"vertical",!1,!0,21,"Power3.easeOut",c,1e3,1],["turnoff",21,0,1,"horizontal",!1,!0,22,c,c,1e3,1],["incube",22,0,20,"horizontal",!1,!0,23,d,d,1e3,1],["cubic-horizontal",23,0,20,"vertical",!1,!0,24,d,d,1e3,1],["cube-horizontal",23,0,20,"vertical",!1,!0,25,d,d,1e3,1],["incube-horizontal",24,0,20,"vertical",!1,!0,26,d,d,1e3,1],["turnoff-vertical",25,0,1,"horizontal",!1,!0,27,d,d,1e3,1],["fadefromright",12,1,1,"horizontal",!0,!0,28,d,d,1e3,1],["fadefromleft",15,1,1,"horizontal",!0,!0,29,d,d,1e3,1],["fadefromtop",14,1,1,"horizontal",!0,!0,30,d,d,1e3,1],["fadefrombottom",13,1,1,"horizontal",!0,!0,31,d,d,1e3,1],["fadetoleftfadefromright",12,2,1,"horizontal",!0,!0,32,d,d,1e3,1],["fadetorightfadefromleft",15,2,1,"horizontal",!0,!0,33,d,d,1e3,1],["fadetobottomfadefromtop",14,2,1,"horizontal",!0,!0,34,d,d,1e3,1],["fadetotopfadefrombottom",13,2,1,"horizontal",!0,!0,35,d,d,1e3,1],["parallaxtoright",15,3,1,"horizontal",!0,!0,36,d,d,1500,1],["parallaxtoleft",12,3,1,"horizontal",!0,!0,37,d,d,1500,1],["parallaxtotop",14,3,1,"horizontal",!0,!0,38,d,d,1500,1],["parallaxtobottom",13,3,1,"horizontal",!0,!0,39,d,d,1500,1],["scaledownfromright",12,4,1,"horizontal",!0,!0,40,d,n,1e3,1],["scaledownfromleft",15,4,1,"horizontal",!0,!0,41,d,n,1e3,1],["scaledownfromtop",14,4,1,"horizontal",!0,!0,42,d,n,1e3,1],["scaledownfrombottom",13,4,1,"horizontal",!0,!0,43,d,n,1e3,1],["zoomout",13,5,1,"horizontal",!0,!0,44,d,d,1e3,1],["zoomin",13,6,1,"horizontal",!0,!0,45,d,d,1e3,1],["slidingoverlayup",27,0,1,"horizontal",!0,!0,47,s,o,2e3,1],["slidingoverlaydown",28,0,1,"horizontal",!0,!0,48,s,o,2e3,1],["slidingoverlayright",30,0,1,"horizontal",!0,!0,49,s,o,2e3,1],["slidingoverlayleft",29,0,1,"horizontal",!0,!0,50,s,o,2e3,1],["parallaxcirclesup",31,0,1,"horizontal",!0,!0,51,d,r,1500,1],["parallaxcirclesdown",32,0,1,"horizontal",!0,!0,52,d,r,1500,1],["parallaxcirclesright",33,0,1,"horizontal",!0,!0,53,d,r,1500,1],["parallaxcirclesleft",34,0,1,"horizontal",!0,!0,54,d,r,1500,1],["notransition",26,0,1,"horizontal",!0,null,46,d,n,1e3,1],["parallaxright",15,3,1,"horizontal",!0,!0,55,d,n,1500,1],["parallaxleft",12,3,1,"horizontal",!0,!0,56,d,n,1500,1],["parallaxup",14,3,1,"horizontal",!0,!0,57,d,r,1500,1],["parallaxdown",13,3,1,"horizontal",!0,!0,58,d,r,1500,1],["grayscale",11,5,1,"horizontal",!0,null,11,d,d,1e3,1],["grayscalecross",11,6,1,"horizontal",!0,null,11,d,d,1e3,1],["brightness",11,7,1,"horizontal",!0,null,11,d,d,1e3,1],["brightnesscross",11,8,1,"horizontal",!0,null,11,d,d,1e3,1],["blurlight",11,9,1,"horizontal",!0,null,11,d,d,1e3,1],["blurlightcross",11,10,1,"horizontal",!0,null,11,d,d,1e3,1],["blurstrong",11,9,1,"horizontal",!0,null,11,d,d,1e3,1],["blurstrongcross",11,10,1,"horizontal",!0,null,11,d,d,1e3,1]];return t[e].duringslidechange=!0,jQuery.each(["parallaxcircles","slidingoverlay","slide","slideover","slideremove","parallax","parralaxto"],function(e,t){i==t+"horizontal"&&(i=1!=a?t+"left":t+"right"),i==t+"vertical"&&(i=1!=a?t+"up":t+"down")}),"random"==i?i=Math.min(Math.round(Math.random()*(m.length-1)),m.length-1):"random-static"==i?i=p[Math.min(Math.round(Math.random()*p.length-1),p.length-1)]:"random-premium"==i&&(i=u[Math.min(Math.round(Math.random()*u.length-1),u.length-1)]),1==t[e].isJoomla&&null!=window.MooTools&&-1!=[12,13,14,15,16,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45].indexOf(i)&&(i=u[Math.max(0,Math.min(u.length-1,Math.round(Math.random()*(u.length-2))+1))]),jQuery.each(m,function(e,t){t[0]!=i&&t[7]!=i||(h=t[1],g=t[2],f=e)}),{nTR:h=Math.max(0,Math.min(30,h)),TR:m[f],trC:g}}(a,e.animation.transition[e.ntrid],n),d=t[a].pr_next_bg&&void 0!==t[a].pr_next_bg.data("panzoom")&&(l.nTR<11||17==l.nTR||18===l.nTR||l.nTR>=27&&l.nTR<=30)?11:l.nTR;!0!==e.recall?(t[a].lastSliderAnimation=jQuery.extend(!0,{},e.animation),t[a].lastSliderTransition=jQuery.extend(!0,{},l)):e.animation=jQuery.extend(!0,{},t[a].lastSliderAnimation);var c=!0===e.recall?l.ntrid:e.ntrid||0,p=i(e.animation.masterspeed,c);p=(p="default"===p||"d"===p?l.TR[10]:"random"===p?Math.round(1e3*Math.random()+300):null!=p?parseInt(p,0):l.TR[10])>t[a].duration?t[a].duration:p,t[a].rotate=i(e.animation.rotate,c),t[a].rotate=null==t[a].rotate||"default"==t[a].rotate||"d"==t[a].rotate?0:999==t[a].rotate||"random"==t[a].rotate?Math.round(360*Math.random()):t[a].rotate,t[a].rotate=window._rs_ie||window._rs_ie9?0:t[a].rotate,(d<11||16===d||17===d||18===d||l.nTR>=27&&l.nTR<=30)&&(t[a].slots=i(e.animation.slotamount,c),t[a].slots=null==t[a].slots||"default"==t[a].slots||"d"==t[a].slots?l.TR[11]:"random"==t[a].slots?Math.round(12*Math.random()+4):t[a].slots,t[a].slots=t[a].slots<1?"boxslide"==l.TR[0]?Math.round(6*Math.random()+3):"boxslide"==l.TR[0]||"flyin"==l.TR[0]?Math.round(4*Math.random()+1):t[a].slots:t[a].slots,t[a].slots=(4==d||5==d||6==d)&&t[a].slots<3?3:t[a].slots,t[a].slots=0!=l.TR[3]?Math.min(t[a].slots,l.TR[3]):t[a].slots,t[a].slots=9==d?t[a].width/t[a].slots:10==d?t[a].height/t[a].slots:t[a].slots,t[a].slots=jQuery.inArray(d,[19,20,21,22,23,24,25,27])>=0?1:t[a].slots,t[a].slots=3!=d&&8!=d&&10!=d||"vertical"!==l.TR[4]?t[a].slots:t[a].slots+2,null!=l.TR[6]&&s(t[a].pr_active_bg,a,l.TR[6],l.TR[4]),null!=l.TR[5]&&s(t[a].pr_next_bg,a,l.TR[5],l.TR[4]),t[a].mtl.delay(.075));var u=7===d||16===d||8===d||17===d||18===d?0:1,h=d<11||17===d||18===d?0:1;t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg.find("rs-sbg"),{scale:1,rotationX:0,rotationY:0,rotationZ:0,z:0,top:0,left:0,x:0,y:0,clearProps:"filter, transform",opacity:u}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg.find("rs-sbg"),{scale:1,rotationX:0,rotationY:0,rotationZ:0,z:0,top:0,left:0,x:0,y:0,clearProps:"filter, transform",opacity:h}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg,{transformOrigin:"50% 50% 0",transformPerspective:600,scale:1,rotationX:0,rotationY:0,rotationZ:0,z:0,autoAlpha:1,top:0,left:0,x:0,y:0,clearProps:"filter, transform"}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg,{transformOrigin:"50% 50% 0",transformPerspective:600,scale:1,rotationX:0,rotationY:0,rotationZ:0,z:0,autoAlpha:1,top:0,left:0,x:0,y:0,clearProps:"filter, transform"}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg.parent(),{backgroundColor:"transparent"}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg.parent(),{backgroundColor:"transparent"}),0);var g=i(e.animation.easein,c),f=i(e.animation.easeout,c);if(g="default"===g||"d"===g?l.TR[8]||punchgs.Power2.easeInOut:g||l.TR[8]||punchgs.Power2.easeInOut,f="default"===f||"d"===f?l.TR[9]||punchgs.Power2.easeInOut:f||l.TR[9]||punchgs.Power2.easeInOut,d>=31){var m={canvas:t[a].pr_next_bg[0].getElementsByClassName("bgcanvas")[0]};if(m.ctx=m.canvas.getContext("2d"),m.oBG_next=t[a].pr_next_bg[0].getElementsByTagName("rs-sbg")[0],m.img_next=t.getLoadObj(a,t.gA(m.oBG_next,"src-rs-ref")),m.col_next=t.gA(m.oBG_next,"bgcolor"),void 0!==t[a].pr_active_bg[0]&&(m.oBG_act=t[a].pr_active_bg[0].getElementsByTagName("rs-sbg")[0],m.img_act=t.getLoadObj(a,t.gA(m.oBG_act,"src-rs-ref")),m.col_act=t.gA(m.oBG_act,"bgcolor")),m.ctx.clearRect(0,0,m.canvas.width,m.canvas.height),m.canvas.width=t[a].width,m.canvas.height=t[a].height,m.canvas.style.background="transparent",m.canvas.style.display="block",m.oBG_next.style.display="none",void 0!==m.col_next&&m.col_next.indexOf("gradient")>=0&&(m.col_next="transparent"),void 0!==m.col_act&&m.col_act.indexOf("gradient")>=0&&(m.col_act="transparent"),31===d){for(var v="transparent"!==m.col_next&&void 0!==m.col_next?{x:0,y:0,width:t[a].width,height:t[a].height}:r("contain"===m.oBG_next.style.backgroundSize,t[a].width,t[a].height,m.img_next.width,m.img_next.height),y=void 0===m.oBG_act?void 0:"transparent"!==m.col_act&&void 0!==m.col_act?{x:0,y:0,width:t[a].width,height:t[a].height}:r("contain"===m.oBG_act.style.backgroundSize,t[a].width,t[a].height,m.img_act.width,m.img_act.height),b=t[a].width/t[a].slots,w=b/2,_=t[a].height,x=[],k=0;k<t[a].slots+1;k++)x.push({mt:_,it:_/4,ml:0,o:2});t[a].mtl.add(punchgs.TweenMax.staggerTo(x,2*p/1e3,{mt:0,it:0,ml:w,o:0,ease:punchgs.Power3.easeOut,onUpdate:function(){var e=0;m.ctx.clearRect(0,0,m.canvas.width,m.canvas.height);for(var i=0;i<t[a].slots+1;i++){var r=x[i].mt,s=x[i].ml,n=x[i].it,l=x[i].mt-_,d=x[i].ml+w,c=x[i].it-_/4;o({ctx:m.ctx,poly:[[e-w+s,0+r],[e+w+1+s,0+r],[e+1+s,_+r],[e-b+s,_+r]],bg:{overlay:"rgba(0,0,0,"+x[i].o+")",img:m.img_next.img,col:m.col_next,offsetx:v.x,offsety:v.y+n,width:v.width,height:v.height}}),void 0!==m.col_act&&(m.oBG_act.style.display="none",o({ctx:m.ctx,poly:[[e-w+d,0+l],[e+w+1+d,0+l],[e+1+d,_+l],[e-b+d,_+l]],bg:{overlay:"rgba(0,0,0,"+(1-x[i].o)+")",img:m.img_act.img,col:m.col_act,offsetx:y.x,offsety:y.y+c,width:y.width,height:y.height}})),e+=b}}},.2,function(){m.ctx.clearRect(0,0,m.canvas.width,m.canvas.height),m.canvas.style.display="none",m.oBG_next.style.display="block"}),0)}}if(0==d){var T=Math.ceil(t[a].height/t[a].sloth),L=0;t[a].pr_next_bg.find(".slotslide").each(function(e){L=++L===T?0:L,t[a].rotate=1===l.trC?45:t[a].rotate,t[a].mtl.add(punchgs.TweenLite.from(this,p/2e3,{opacity:0,transformStyle:"flat",transformPerspective:600,scale:0,rotationZ:0!==t[a].rotate?Math.random()*t[a].rotate-t[a].rotate/2:0,force3D:"auto",ease:g}),(10*e+30*L)/3e3)})}else if(1==d)t[a].pr_next_bg.find(".slotslide").each(function(e){t[a].mtl.add(punchgs.TweenLite.from(this,(Math.random()*p+300)/1e3,{autoAlpha:0,force3D:"auto",rotation:t[a].rotate,ease:g}),(500*Math.random()+200)/1e3)});else if(2==d||3==d)t[a].pr_active_bg.find(".slotslide").each(function(){t[a].mtl.add(punchgs.TweenLite.to(this,p/1e3,{top:3===d?t[a].sloth:0,left:2===d?t[a].slotw:0,ease:g,force3D:"auto",rotation:0-t[a].rotate}),0)}),t[a].pr_next_bg.find(".slotslide").each(function(){t[a].mtl.add(punchgs.TweenLite.from(this,p/1e3,{top:3==d?1===n?0-t[a].sloth:t[a].sloth:0,left:2==d?1===n?0-t[a].slotw:t[a].slotw:0,ease:g,force3D:"auto",rotation:t[a].rotate}),0)});else if(4==d||5==d||6==d){var R=new punchgs.TimelineLite,I=p/1e3-p/1e3/t[a].slots;t[a].slots-=t[a].slots%2==1?1:0,t[a].pr_active_bg.find(".slotslide").each(function(e){var i=6!==d?e:e>t[a].slots/2?t[a].slots-e:e;R.add(punchgs.TweenLite.to(this,I,{transformPerspective:600,force3D:"auto",top:1!==n?t[a].height:-t[a].height,opacity:.75,rotation:t[a].rotate,ease:g,delay:(5!==d?i:t[a].slots-i)*(I/t[a].slots)/(6===d?1.3:1)}),0),t[a].mtl.add(R,0)}),t[a].pr_next_bg.find(".slotslide").each(function(e){var i=6!==d?e:e>t[a].slots/2?t[a].slots-e:e;R.add(punchgs.TweenLite.from(this,I,{top:1==n?t[a].height:-t[a].height,opacity:.75,rotation:t[a].rotate,force3D:"auto",ease:punchgs.eo,delay:(5!==d?i:t[a].slots-i)*(I/t[a].slots)/(6===d?1.3:1)}),0),t[a].mtl.add(R,0)})}else if(7==d||8==d)p=Math.min(t[a].duration||p,p),t[a].pr_active_bg.find(".slotslide").each(function(e){var i=e>t[a].slots/2?t[a].slots-e:e;t[a].mtl.add(punchgs.TweenLite.to(this.getElementsByTagName("div"),p/1e3,{x:8===d&&0===l.trC?0:i*t[a].slotw/3,y:8===d&&0===l.trC?i*t[a].sloth/3:0,ease:g,transformPerspective:600,force3D:"auto",filter:"blur(2px)",scale:1.2,opacity:0}),0)}),t[a].pr_next_bg.find(".slotslide").each(function(e){var i=e>t[a].slots/2?t[a].slots-e:e;t[a].mtl.add(punchgs.TweenLite.fromTo(this.getElementsByTagName("div"),p/1e3,{x:8===d&&0===l.trC?0:0-i*t[a].slotw/3,y:8===d&&0===l.trC?0-i*t[a].sloth/3:0,filter:"blur(2px)",opacity:0,transformPerspective:600,scale:1.2},{x:0,y:0,ease:f,force3D:"auto",scale:1,filter:"blur(0px)",opacity:1,rotation:0}),0)});else if(9==d||10==d){var A=t[a].pr_next_bg[0].getElementsByClassName("slotslide"),S=p-p/1.8;for(k=0;k<A.length;k++)t[a].mtl.add(punchgs.TweenLite.fromTo(A[k],(p-k*(S/t[a].slots))/1e3,{opacity:0,force3D:"auto",transformPerspective:600},{opacity:1,ease:"Linear.easeNone",delay:k*(S/t[a].slots)/1e3}),0)}else if(11==d){l.trC=Math.min(12,l.trC);var z=2==l.trC?"#000000":3==l.trC?"#ffffff":"transparent";switch(l.trC){case 0:t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,p/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:g}),0);break;case 1:t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,p/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:g}),0),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,p/1e3,{autoAlpha:1},{autoAlpha:0,force3D:"auto",ease:g}),0);break;case 2:case 3:case 4:t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg.parent(),{backgroundColor:z,force3D:"auto"}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg.parent(),{backgroundColor:"transparent",force3D:"auto"}),0),t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg,p/2e3,{autoAlpha:0,force3D:"auto",ease:g}),0),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,p/2e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:g}),p/2e3);break;case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:var M="blur("+(jQuery.inArray(l.trC,[9,10])>=0?5:jQuery.inArray(l.trC,[11,12])>=0?10:0)+"px) grayscale("+(jQuery.inArray(l.trC,[5,6,7,8])>=0?100:0)+"%) brightness("+(jQuery.inArray(l.trC,[7,8])>=0?300:0)+"%)",O="blur(0px) grayscale(0%) brightness(100%)";t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,p/1e3,{autoAlpha:0,filter:M,"-webkit-filter":M},{autoAlpha:1,filter:O,"-webkit-filter":O,force3D:"auto",ease:g}),0),jQuery.inArray(l.trC,[6,8,10])>=0&&t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,p/1e3,{autoAlpha:1,filter:O,"-webkit-filter":O},{autoAlpha:0,force3D:"auto",ease:g,filter:M,"-webkit-filter":M}),0)}t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg.find("rs-sbg"),{autoAlpha:1}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg.find("rs-sbg"),{autoAlpha:1}),0)}else if(12==d||13==d||14==d||15==d){var C=3==l.trC?p/1300:p/1e3,P=p/1e3,j=5==l.trC||6==l.trC?0:t[a].width,Q=5==l.trC||6==l.trC?0:t[a].currentSlideHeight,H=12==d?j:15==d?0-j:0,N=13==d?5==l.trC||6==l.trC?0:t[a].height:14==d?5==l.trC||6==l.trC?0:0-t[a].height:0,B=1==l.trC||2==l.trC||5==l.trC||6==l.trC?0:1,D=4==l.trC||5==l.trC?.6:6==l.trC?1.4:1,W=5==l.trC?1.4:6==l.trC?.6:1;if(7!=l.trC&&4!=l.trC||(j=0,Q=0),8==l.trC?(t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_slide,{zIndex:20}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_slide,{zIndex:15}),0),t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_next_bg,.01,{overflow:"hidden",left:0,top:0,x:0,y:0,scale:1,autoAlpha:1,rotation:0,overwrite:!0,immediateRender:!0,force3D:"auto"}),0)):(t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_slide,{zIndex:15}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_slide,{zIndex:20}),0),t[a].mtl.add(punchgs.TweenLite.from(t[a].pr_next_bg,C,{left:H,top:N,overflow:"hidden",scale:W,autoAlpha:B,rotation:t[a].rotate,ease:g,force3D:"auto"}),0)),1!=l.trC)switch(d){case 12:t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg,P,{left:0-j+"px",overflow:"hidden",force3D:"auto",scale:D,autoAlpha:B,rotation:t[a].rotate,ease:f}),0);break;case 15:t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg,P,{left:j+"px",overflow:"hidden",force3D:"auto",scale:D,autoAlpha:B,rotation:t[a].rotate,ease:f}),0);break;case 13:t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg,P,{top:0-Q+"px",overflow:"hidden",force3D:"auto",scale:D,autoAlpha:B,rotation:t[a].rotate,ease:f}),0);break;case 14:t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg,P,{top:Q+"px",overflow:"hidden",force3D:"auto",scale:D,autoAlpha:B,rotation:t[a].rotate,ease:f}),0)}}else if(16==d){var V=1===n?"80% 50% 0":"20%  50% 0";t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_slide,{zIndex:20}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_slide,{zIndex:15}),0),t[a].pr_active_bg.find(".slotslide").each(function(e){t[a].mtl.add(punchgs.TweenLite.fromTo(this,p/1e3,{left:0,rotationZ:0,opacity:1,top:0,z:0,scale:1},{opacity:1,left:1===n?0==e?-t[a].width/1.6:-t[a].width/1.8:0===e?t[a].width/1.6:t[a].width/1.8,rotationZ:1===n?0===e?-35:25:0===e?25:-35,z:0,top:0==e?"-120%":"140%",scale:.8,force3D:"auto",transformPerspective:600,transformOrigin:V,delay:0,ease:g}),0),t[a].mtl.add(punchgs.TweenLite.fromTo(this,p/2e3,{opacity:1},{opacity:0,delay:p/2e3}),0)}),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,p/1e3-p/7e3,{x:100*Math.random()-50,opacity:1,scale:.9,rotationZ:10*Math.random()-5},{x:0,opacity:1,scale:1,rotationZ:0,ease:g,force3D:"auto",delay:p/7e3}),0)}else if(17==d||18==d)t[a].pr_next_bg.find(".slotslide").each(function(e){t[a].mtl.add(punchgs.TweenLite.fromTo(this,p/t[a].slots/1e3,{opacity:0,top:0,left:0,rotationY:17===d?0:90,scale:1,rotationX:17===d?-90:0,force3D:"auto",transformPerspective:600,transformOrigin:17===d?"top center":"center left"},{opacity:1,top:0,left:0,rotationX:0,rotationY:0,force3D:"auto",ease:f,delay:e*(p/t[a].slots/2e3)}),0)}),t[a].pr_active_bg.find(".slotslide").each(function(e){t[a].mtl.add(punchgs.TweenLite.fromTo(this,p/t[a].slots/1e3,{opacity:1,rotationY:0,scale:1,rotationX:0,force3D:"auto",transformPerspective:600,transformOrigin:17===d?"bottom center":"center right"},{opacity:0,rotationX:17===d?110:0,rotationY:17===d?0:110,force3D:"auto",ease:g,delay:e*(p/t[a].slots/2e3)}),0)});else if(19==d||22==d||23==d||24==d){t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_slide,{zIndex:20}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_slide,{zIndex:10}),0);V=19===d?"center center -"+t[a].height/2:22===d?"center center "+t[a].height/2:23===d?"center center -"+t[a].width/2:"center center "+t[a].width/2;punchgs.TweenLite.set(t[a].c,{transformStyle:"flat",backfaceVisibility:"hidden",transformPerspective:600}),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,p/1e3,{rotationX:19==d||22===d?1==n?-90:90:0,rotationY:23==d||24===d?1==n?-90:90:0,left:0,top:0,scale:1,x:0,y:0,overflow:"hidden",autoAlpha:1,transformStyle:"flat",backfaceVisibility:"hidden",force3D:"auto",transformPerspective:1200,transformOrigin:V},{overflow:"hidden",left:0,autoAlpha:1,rotationX:0,rotationY:0,top:0,scale:1,delay:0,ease:g,transformStyle:"flat",backfaceVisibility:"hidden",force3D:"auto",transformPerspective:1200,transformOrigin:V}),0),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,p/2e3,{z:19==d||23===d?-200:0},{z:19===d||23===d?0:-200,ease:"Power3.easeInOut",delay:19===d||23===d?p/2e3:0}),0),22!==d&&24!==d||t[a].mtl.add(punchgs.TweenLite.fromTo([t[a].pr_active_bg,t[a].pr_next_bg],p/2e3,{z:-200},{z:0,ease:"Power2.easeIn",delay:p/2e3}),0),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,p/2e3,{z:0},{z:-200,ease:"Power3.easeInOut",delay:0,force3D:"auto"}),0),19!==d&&23!==d||t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,p/2e3,{autoAlpha:1},{autoAlpha:0,ease:"LinearEase.none",delay:p/2e3,force3D:"auto"}),0),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,p/1e3,{overflow:"hidden",rotationX:0,rotationY:0,rotationZ:0,top:0,left:0,scale:1,transformStyle:"flat",backfaceVisibility:"hidden",force3D:"auto",transformPerspective:1200,transformOrigin:V},{rotationX:19===d||22===d?1==n?90:-90:0,rotationY:23===d||24===d?1==n?90:-90:0,overflow:"hidden",top:0,scale:1,delay:0,force3D:"auto",ease:g,transformStyle:"flat",backfaceVisibility:"hidden",transformPerspective:1200,transformOrigin:V}),0)}else if(20==d){V=1===n?"20% ":"80% ";V+="60% -50%",t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,p/1e3,{left:1===n?-t[a].width:t[a].width,rotationX:20,z:-t[a].width,autoAlpha:0,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:V,rotationY:1===n?50:-50},{left:0,rotationX:0,autoAlpha:1,top:0,z:0,scale:1,rotationY:0,delay:0,ease:g}),0),V=1!=n?"20% ":"80% ",V+="60% -50%",t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,p/1e3,{autoAlpha:1,rotationX:0,top:0,z:0,scale:1,left:0,force3D:"auto",transformPerspective:600,transformOrigin:V,rotationY:0},{autoAlpha:1,rotationX:20,top:0,z:-t[a].width,left:1!=n?-t[a].width/1.2:t[a].width/1.2,force3D:"auto",rotationY:1===n?-50:50,delay:0,ease:"Power2.easeInOut"}),0)}else if(21==d||25==d){var Y=25===d?t[a].rotate:1===n?90:-90,F=25===d?1===n?-90:90:t[a].rotate;V=1===n?25===d?"center top 0":"left center 0":25===d?"center bottom 0":"right center 0";t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,p/1e3,{transformStyle:"flat",rotationX:F,top:0,left:0,autoAlpha:0,force3D:"auto",transformPerspective:1200,transformOrigin:V,rotationY:Y},{autoAlpha:1,rotationX:0,rotationY:0,ease:g}),0),V=1===n?25===d?"center bottom 0":"right center 0":25===d?"center top 0":"left center 0",Y=25!==d?-Y:Y,F=25!==d?F:-F,t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,p/1e3,{rotationX:0,rotationY:0,transformStyle:"flat",transformPerspective:1200,force3D:"auto"},{immediateRender:!0,rotationX:F,transformOrigin:V,rotationY:Y,ease:f}),0)}else if(26==d)p=0,t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,.001,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:g}),0),t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg,.001,{autoAlpha:0,force3D:"auto",ease:g}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg.find("rs-sbg"),{autoAlpha:1}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg.find("rs-sbg"),{autoAlpha:1}),0);else if(27==d||28==d||29==d||30==d){var E=t[a].pr_next_bg.find(".slot"),X=27==d||29==d?"-100%":"+100%",Z=27==d||29==d?"+100%":"-100%",q=27==d||29==d?"-80%":"80%",G=27==d||29==d?"+80%":"-80%",U=27==d||29==d?"+10%":"-10%",J={overwrite:"all"},K={autoAlpha:0,zIndex:1,force3D:"auto",ease:g},$={position:"inherit",autoAlpha:0,overwrite:"all",zIndex:1},ee={autoAlpha:1,force3D:"auto",ease:f},te={overwrite:"all",zIndex:2,opacity:1,autoAlpha:1},ie={autoAlpha:1,force3D:"auto",overwrite:"all",ease:g},ae={overwrite:"all",zIndex:2,autoAlpha:1},re={autoAlpha:1,force3D:"auto",ease:g},oe=1==(27==d||28==d?1:2)?"y":"x";J[oe]="0px",K[oe]=X,$[oe]=U,ee[oe]="0%",te[oe]=Z,ie[oe]=X,ae[oe]=q,re[oe]=G,E.append('<span style="background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;top:0px;left:0px;display:block;z-index:2"></span>'),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,p/1e3,J,K),0),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg.find("rs-sbg"),p/2e3,$,ee),p/2e3),t[a].mtl.add(punchgs.TweenLite.fromTo(E,p/1e3,te,ie),0),t[a].mtl.add(punchgs.TweenLite.fromTo(E.find(".slotslide div"),p/1e3,ae,re),0)}},r=function(e,t,i,a,r){const o=a/r,s=t/i;let n=t,l=i;return(e?o>s:o<s)?l=n/o:n=l*o,{width:n,height:l,x:(t-n)/2,y:(i-l)/2}},o=function(e){e.ctx.save(),e.ctx.beginPath(),e.ctx.moveTo(e.poly[0][0],e.poly[0][1]);for(var t=1;t<e.poly.length;t++)e.ctx.lineTo(e.poly[t][0],e.poly[t][1]);e.ctx.closePath(),e.ctx.lineWidth=2,e.ctx.stroke(),e.ctx.clip(),void 0!==e.bg.img&&e.ctx.drawImage(e.bg.img,e.bg.offsetx,e.bg.offsety,e.bg.width,e.bg.height),"transparent"!==e.bg.col&&void 0!==e.bg.col&&(e.ctx.fillStyle=e.bg.col,e.ctx.fillRect(e.bg.offsetx,e.bg.offsety,e.bg.width,e.bg.height)),void 0!==e.bg.overlay&&(e.ctx.fillStyle=e.bg.overlay,e.ctx.fillRect(e.bg.offsetx,e.bg.offsety,e.bg.width,e.bg.height)),e.ctx.restore()},s=function(e,i,a,r){var o=e.find("rs-sbg"),s=o.data("mediafilter"),n=e.data("zoomstart"),l=e.data("rotationstart");null!=o.data("currotate")&&(l=o.data("currotate")),null!=o.data("curscale")&&"box"==r?n=100*o.data("curscale"):null!=o.data("curscale")&&(n=o.data("curscale")),function(e,i){t[i].slotw=Math.ceil(t[i].width/t[i].slots),"fullscreen"==t[i].sliderLayout?t[i].sloth=Math.ceil(jQuery(window).height()/t[i].slots):t[i].sloth=Math.ceil(t[i].height/t[i].slots),t[i].autoHeight&&void 0!==e&&""!==e&&(t[i].sloth=Math.ceil(e.height()/t[i].slots))}(o,i);var d=void 0!==o[0]&&void 0!==o[0].dataset&&void 0!==o[0].dataset.lazyload?o[0].dataset.lazyload:o.attr("src"),c=t[i].width,p=t[i].autoHeight?t[i].c.height():t[i].height,u=o.data("fxof"),h=0,g=e.data("bgcolor")||o.css("backgroundColor"),f=e.data("bgfit")||"cover",m=e.data("bgrepeat")||"no-repeat",v=e.data("bgposition")||"center center",y=void 0!==g&&g.indexOf("gradient")>=0?"background:"+g:"background-color:"+g+";background-image:url("+d+");background-repeat:"+m+";background-size:"+f+";background-position:"+v,b="";if(u=null==u?0:u,e.find(".slot").each(function(){jQuery(this).remove()}),"box"===r)for(var w=0,_=0,x=0;x<t[i].slots;x++){_=0;for(var k=0;k<t[i].slots;k++)b+='<div class="slot" style="'+(null!=n&&null!=l?"transform:rotateZ("+l+"deg)":"")+";position:absolute;overflow:hidden;top:"+(0+_)+"px;left:"+(u+w)+"px;width:"+t[i].slotw+"px;height:"+t[i].sloth+'px;"><div class="slotslide '+s+'" data-x="'+w+'" data-y="'+_+'" style="position:absolute;top:0px;left:0px;width:'+t[i].slotw+"px;height:"+t[i].sloth+'px;overflow:hidden;"><div style="position:absolute;top:'+(0-_)+"px;left:"+(0-w)+"px;width:"+c+"px;height:"+p+"px;"+y+';"></div></div></div>',_+=t[i].sloth;w+=t[i].slotw}else if("horizontal"===r){if(!a)h=0-t[i].slotw;for(k=0;k<t[i].slots;k++)b+='<div class="slot" style="'+(null!=n&&null!=l?"transform:rotateZ("+l+"deg)":"")+";position:absolute;overflow:hidden;top:0px;left:"+(u+k*t[i].slotw)+"px;width:"+(t[i].slotw+.3)+"px;height:"+p+'px"><div class="slotslide '+s+'" style="position:absolute;top:0px;left:'+h+"px;width:"+(t[i].slotw+.6)+"px;height:"+p+'px;overflow:hidden;"><div style="position:absolute;top:0px;left:'+(0-k*t[i].slotw)+"px;width:"+c+"px;height:"+p+"px;"+y+';"></div></div></div>'}if("vertical"===r){if(!a)h=0-t[i].sloth;for(k=0;k<t[i].slots;k++)b+='<div class="slot" style="'+(null!=n&&null!=l?"transform:rotateZ("+l+"deg)":"")+";position:absolute;overflow:hidden;top:"+(0+k*t[i].sloth)+"px;left:"+u+"px;width:"+c+"px;height:"+t[i].sloth+'px"><div class="slotslide '+s+'" style="position:absolute;top:'+h+"px;left:0px;width:"+c+"px;height:"+t[i].sloth+'px;overflow:hidden;"><div style="position:absolute;top:'+(0-k*t[i].sloth)+"px;left:0px;width:"+c+"px;height:"+p+"px;"+y+';"></div></div></div>'}e.append(b)}}(jQuery),function(e){"use strict";var t=jQuery.fn.revolution,i=t.is_mobile();t.is_android();function a(e){return null==e?-1:jQuery.isNumeric(e)?e:e.split(":").length>1?60*parseInt(e.split(":")[0],0)+parseInt(e.split(":")[1],0):e}jQuery.extend(!0,t,{preLoadAudio:function(e,i){t[i].videos=void 0===t[i].videos?{}:t[i].videos,e.find(".rs-layer-audio").each(function(){var e=jQuery(this),a=t[i].videos[e[0].id]=void 0===t[i].videos[e[0].id]?y(e.data(),"audio"):t[i].videos[e[0].id],r={};0===e.find("audio").length&&(r.src=null!=a.mp4?a.mp4:"",r.pre=a.pload||"",this.id=void 0===this.id||""===this.id?e.attr("audio-layer-"+Math.round(199999*Math.random())):this.id,r.id=this.id,r.status="prepared",r.start=jQuery.now(),r.waittime=void 0!==a.ploadwait?1e3*a.ploadwait:5e3,"auto"!=r.pre&&"canplaythrough"!=r.pre&&"canplay"!=r.pre&&"progress"!=r.pre||(void 0===t[i].audioqueue&&(t[i].audioqueue=[]),t[i].audioqueue.push(r),t.manageVideoLayer(e,i)))})},preLoadAudioDone:function(e,i,a){var r=t[i].videos[e[0].id];t[i].audioqueue&&t[i].audioqueue.length>0&&jQuery.each(t[i].audioqueue,function(e,t){r.mp4!==t.src||t.pre!==a&&"auto"!==t.pre||(t.status="loaded")})},resetVideo:function(e,a,r,o){var s=t[a].videos[e[0].id];switch(s.type){case"youtube":s.rwd&&null!=s.player&&void 0!==s.player.seekTo&&(s.player.seekTo(-1==s.ssec?0:s.ssec),s.player.pauseVideo()),0!=e.find("rs-poster").length||s.bgvideo||"preset"===r||punchgs.TweenLite.to(e.find("iframe"),.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut});break;case"vimeo":void 0!==s.vimeoplayer&&!o&&s.rwd&&(0!==s.ssec&&-1!==s.ssec||s.bgvideo||e.find("rs-poster").length>0)&&(s.vimeoplayer.setCurrentTime(-1==s.ssec?0:s.ssec),s.vimeoplayer.pause()),0!=e.find("rs-poster").length||s.bgvideo||"preset"===r||punchgs.TweenLite.to(e.find("iframe"),.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut});break;case"html5":if(i&&s.notonmobile)return!1;punchgs.TweenLite.to(s.jvideo,.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut}),!s.rwd||e.hasClass("videoisplaying")||isNaN(s.video.duration)||(s.video.currentTime=-1==s.ssec?0:s.ssec),("mute"==s.volume||t.lastToggleState(e.videomutetoggledby)||!0===t[a].globalmute)&&(s.video.muted=!0)}},Mute:function(e,i,a){var r=!1,o=t[i].videos[e[0].id];switch(o.type){case"youtube":o.player&&(!0===a&&o.player.mute(),!1===a&&l(o,parseInt(o.volcache,0)),r=o.player.isMuted());break;case"vimeo":o.volcachecheck||(o.volcache=o.volcache>1?o.volcache/100:o.volcache,o.volcachecheck=!0),o.volume=!0===a?"mute":!1===a?o.volcache:o.volume,void 0!==a&&null!=o.vimeoplayer&&n(o,!0===a?0:o.volcache),r="mute"==o.volume||0===o.volume;break;case"html5":o.volcachecheck||(o.volcache=o.volcache>1?o.volcache/100:o.volcache,o.volcachecheck=!0),o.video.volume=o.volcache,void 0!==a&&o.video&&(o.video.muted=a),r=void 0!==o.video?o.video.muted:r}if(void 0===a)return r},stopVideo:function(e,i){if(void 0!==t[i]&&void 0!==t[i]){var a=t[i].videos[e[0].id];if(void 0!==a)switch(t[i].leaveViewPortBasedStop||(t[i].lastplayedvideos=[]),t[i].leaveViewPortBasedStop=!1,a.type){case"youtube":if(void 0===a.player||2===a.player.getPlayerState()||5===a.player.getPlayerState())return;a.player.pauseVideo(),a.youtubepausecalled=!0,setTimeout(function(){a.youtubepausecalled=!1},80);break;case"vimeo":if(void 0===a.vimeoplayer)return;a.vimeoplayer.pause(),a.vimeopausecalled=!0,setTimeout(function(){a.vimeopausecalled=!1},80);break;case"html5":a.video&&a.video.pause()}}},playVideo:function(e,i){var a=t[i].videos[e[0].id];switch(clearTimeout(a.videoplaywait),a.type){case"youtube":if(0==e.find("iframe").length)e.append(a.videomarkup),h(e,i,!0);else if(null!=a.player.playVideo){var o=a.player.getCurrentTime();a.nseTriggered&&(o=-1,a.nseTriggered=!1),-1!=a.ssec&&a.ssec>o&&a.player.seekTo(a.ssec),!0!==a.youtubepausecalled&&p(a)}else a.videoplaywait=setTimeout(function(){!0!==a.youtubepausecalled&&t.playVideo(e,i)},50);break;case"vimeo":0==e.find("iframe").length?(delete a.vimeoplayer,e.append(a.videomarkup),h(e,i,!0)):e.hasClass("rs-apiready")?(a.vimeoplayer=null==a.vimeoplayer?new Vimeo.Player(e.find("iframe").attr("id")):a.vimeoplayer,a.vimeoplayer.getPaused()?setTimeout(function(){var r=void 0===a.currenttime?0:a.currenttime;a.nseTriggered&&(r=-1,a.nseTriggered=!1),-1!=a.ssec&&a.ssec>r&&a.vimeoplayer.setCurrentTime(a.ssec),("mute"==a.volume||0===a.volume||t.lastToggleState(e.data("videomutetoggledby"))||!0===t[i].globalmute)&&(a.volumetoken=!0,a.vimeoplayer.setVolume(0)),c(a.vimeoplayer)},510):a.videoplaywait=setTimeout(function(){!0!==a.vimeopausecalled&&t.playVideo(e,i)},50)):a.videoplaywait=setTimeout(function(){!0!==a.vimeopausecalled&&t.playVideo(e,i)},100);break;case"html5":if(a.metaloaded){d(a.video);o=a.video.currentTime;a.nseTriggered&&(o=-1,a.nseTriggered=!1),-1!=a.ssec&&a.ssec>o&&(a.video.currentTime=a.ssec)}else r(a.video,"loadedmetadata",function(e){t.resetVideo(e,i),a.video.play();var r=a.video.currentTime;a.nseTriggered&&(r=-1,a.nseTriggered=!1),-1!=a.ssec&&a.ssec>r&&(a.video.currentTime=a.ssec)}(e))}},isVideoPlaying:function(e,i){var a=!1;return null!=t[i].playingvideos&&jQuery.each(t[i].playingvideos,function(t,i){e.attr("id")==i.attr("id")&&(a=!0)}),a},removeMediaFromList:function(e,t){w(e,t)},prepareCoveredVideo:function(e,i){var a=t[e].videos[i[0].id];if(t.updateDimensions(e),void 0===a.vimeoid||void 0!==a.vimeoplayerloaded){if(a.ifr=i.find("iframe, video"),a.vd=a.ratio.split(":").length>1?a.ratio.split(":")[0]/a.ratio.split(":")[1]:1,0===t[e].conw||0===t[e].conh)return t.setSize(e),clearTimeout(a.resizelistener),void(a.resizelistener=setTimeout(function(){t.prepareCoveredVideo(e,i)},100));var r=t[e].conw/t[e].conh,o=r/a.vd*100,s=a.vd/r*100;"html5"===a.type&&"Edge"!==t.get_browser()&&"IE"!==t.get_browser()&&(s=100,o=100),"Edge"===t.get_browser()?r>a.vd?punchgs.TweenLite.set(a.ifr,{minWidth:"100%",height:o+"%",x:"-50%",y:"-50%",top:"50%",left:"50%",position:"absolute"}):punchgs.TweenLite.set(a.ifr,{minHeight:"100%",width:s+"%",x:"-50%",y:"-50%",top:"50%",left:"50%",position:"absolute"}):r>a.vd?punchgs.TweenLite.set(a.ifr,{height:o+"%",width:"100%",top:-(o-100)/2+"%",left:"0px",position:"absolute"}):punchgs.TweenLite.set(a.ifr,{width:s+"%",height:"100%",left:-(s-100)/2+"%",top:"0px",position:"absolute"}),a.ifr.hasClass("resizelistener")||(a.ifr.addClass("resizelistener"),jQuery(window).resize(function(){t.prepareCoveredVideo(e,i),clearTimeout(a.resizelistener),a.resizelistener=setTimeout(function(){t.prepareCoveredVideo(e,i)},90)}))}},checkVideoApis:function(e,i){location.protocol;if(!t[i].youtubeapineeded&&((null!=e.data("ytid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&(t[i].youtubeapineeded=!0),t[i].youtubeapineeded&&!window.rs_addedyt)){t[i].youtubestarttime=jQuery.now(),window.rs_addedyt=!0;var a=document.createElement("script"),r=document.getElementsByTagName("script")[0],o=!0;a.src="https://www.youtube.com/iframe_api",jQuery("head").find("*").each(function(){"https://www.youtube.com/iframe_api"==jQuery(this).attr("src")&&(o=!1)}),o&&r.parentNode.insertBefore(a,r)}if(!t[i].vimeoapineeded&&((null!=e.data("vimeoid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&(t[i].vimeoapineeded=!0),t[i].vimeoapineeded&&!window.rs_addedvim)){t[i].vimeostarttime=jQuery.now(),window.rs_addedvim=!0;var s=document.createElement("script");r=document.getElementsByTagName("script")[0],o=!0;s.src="https://player.vimeo.com/api/player.js",jQuery("head").find("*").each(function(){"https://player.vimeo.com/api/player.js"==jQuery(this).attr("src")&&(o=!1)}),o&&r.parentNode.insertBefore(s,r)}},manageVideoLayer:function(e,a){if(!0===t.gA(e[0],"videoLayerManaged")||"true"===t.gA(e[0],"videoLayerManaged"))return!1;t[a].videos=void 0===t[a].videos?{}:t[a].videos;var o=t[a].videos[e[0].id]=void 0===t[a].videos[e[0].id]?y(e.data()):t[a].videos[e[0].id];if(o.audio=void 0!==o.audio&&o.audio,i&&o.opom)0==e.find("rs-poster").length&&e.append('<rs-poster class="noSwipe" style="background-image:url('+o.poster+');"></rs-poster>');else{switch(o.id=e[0].id,o.pload="auto"===o.pload||"canplay"===o.pload||"canplaythrough"===o.pload||"progress"===o.pload?"auto":o.pload,o.type=null!=o.mp4||null!=o.webm?"html5":null!=o.ytid&&String(o.ytid).length>1?"youtube":null!=o.vimeoid&&String(o.vimeoid).length>1?"vimeo":"none",o.newtype="html5"==o.type&&0==e.find(o.audio?"audio":"video").length?"html5":"youtube"==o.type&&0==e.find("iframe").length?"youtube":"vimeo"==o.type&&0==e.find("iframe").length?"vimeo":"none",!o.audio&&"1sttime"==o.aplay&&o.pausetimer&&o.bgvideo&&e.closest("rs-slide").addClass("rs-pause-timer-once"),o.audio||!o.bgvideo||!o.pausetimer||1!=o.aplay&&"true"!=o.aplay&&"no1sttime"!=o.aplay||e.closest("rs-slide").addClass("rs-pause-timer-always"),o.noInt&&e.addClass("rs-nointeraction"),o.newtype){case"html5":o.audio&&e.addClass("rs-audio"),o.tag=o.audio?"audio":"video";var s="video"===o.tag&&(t.is_mobile()||t.isSafari11())?o.aplay||"true"===o.aplay?"muted playsinline autoplay":o.inline?" playsinline":"":"",n="<"+o.tag+" "+s+" "+(o.controls?" controls ":"")+' style="'+("Edge"!==t.get_browser()?"object-fit:cover;background-size:cover;opacity:0;width:100%; height:100%":"")+'" class="" '+(o.loop?"loop":"")+' preload="'+o.pload+'">';"video"===o.tag&&null!=o.webm&&"firefox"==t.get_browser().toLowerCase()&&(n=n+'<source src="'+o.webm+'" type="video/webm" />'),null!=o.mp4&&(n=n+'<source src="'+o.mp4+'" type="'+("video"===o.tag?"video/mp4":"audio/mpeg")+'" />'),null!=o.ogv&&(n=n+'<source src="'+o.mp4+'" type="'+o.tag+'/ogg" />'),n+="</"+o.tag+">",o.videomarkup=n,i&&o.notonmobile||t.isIE(8)||e.append(n),e.find(o.tag).parent().hasClass("html5vid")||e.find(o.tag).wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>'),o.jvideo=e.find(o.tag),o.video=o.jvideo[0],o.html5vid=o.jvideo.parent(),o.metaloaded||r(o.video,"loadedmetadata",function(e){m(e,a),t.resetVideo(e,a)}(e));break;case"youtube":o.controls||(o.vatr=o.vatr.replace("controls=1","controls=0"),-1==o.vatr.toLowerCase().indexOf("controls")&&(o.vatr=o.vatr+"&controls=0")),(o.inline||"RS-BGVIDEO"===e[0].tagName)&&(o.vatr=o.vatr+"&playsinline=1"),-1!=o.ssec&&(o.vatr+="&start="+o.ssec),-1!=o.esec&&(o.vatr+="&end="+o.esec);var l=o.vatr.split("origin=https://");o.vatrnew=l.length>1?l[0]+"origin=https://"+(self.location.href.match(/www/gi)&&!l[1].match(/www/gi)?"www."+l[1]:l[1]):o.vatr,o.videomarkup='<iframe allow="autoplay; fullscreen" type="text/html" src="https://www.youtube-nocookie.com/embed/'+o.ytid+"?"+o.vatrnew+'" '+(!0===o.afs?"allowfullscreen":"")+' width="100%" height="100%" style="opacity:0;visibility:visible;width:100%;height:100%"></iframe>';break;case"vimeo":o.controls?(o.vatr=o.vatr.replace("background=0","background=1"),-1==o.vatr.toLowerCase().indexOf("background")&&(o.vatr=o.vatr+"&background=1")):(o.vatr=o.vatr.replace("background=1","background=0"),-1==o.vatr.toLowerCase().indexOf("background")&&(o.vatr=o.vatr+"&background=0")),o.vatr="autoplay="+(!0===o.aplay?1:0)+"&"+o.vatr,i&&(o.vatr="muted=1&"+o.vatr),o.loop&&(o.vatr="loop=1&"+o.vatr),o.videomarkup='<iframe  allow="autoplay; fullscreen" src="https://player.vimeo.com/video/'+o.vimeoid+"?"+o.vatr+'" webkitallowfullscreen mozallowfullscreen allowfullscreen width="100%" height="100%" style="opacity:0;visibility:visible;100%;height:100%"></iframe>'}if(!(null!=o.poster&&o.poster.length>2)||i&&o.npom){if(i&&o.notonmobile)return!1;0!=e.find("iframe").length||"youtube"!=o.type&&"vimeo"!=o.type||(delete o.vimeoplayer,e.append(o.videomarkup),h(e,a,!1))}else 0==e.find("rs-poster").length&&e.append('<rs-poster class="noSwipe" style="background-image:url('+o.poster+');"></rs-poster>'),0==e.find("iframe").length&&e.find("rs-poster").click(function(){if(t.playVideo(e,a),i){if(o.notonmobile)return!1;punchgs.TweenLite.to(e.find("rs-poster"),.3,{opacity:0,visibility:"hidden",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut})}});"none"!==o.doverlay&&void 0!==o.doverlay&&(o.bgvideo?1!=e.closest("rs-sbg-wrap").find("rs-dotted").length&&e.closest("rs-sbg-wrap").append('<rs-dotted class="'+o.doverlay+'"></rs-dotted>'):1!=e.find("rs-dotted").length&&e.append('<rs-dotted class="'+o.doverlay+'"></rs-dotted>')),t.sA(e[0],"videoLayerManaged",!0),o.bgvideo&&punchgs.TweenLite.set(e.find("video, iframe"),{opacity:0})}}});var r=function(e,t,i){e.addEventListener?e.addEventListener(t,i,{capture:!1,passive:!0}):e.attachEvent(t,i,{capture:!1,passive:!0})},o=function(e,t,i){var a={};return a.video=e,a.type=t,a.settings=i,a},s=function(e,i){var a=t[e].videos[i[0].id];(a.bgvideo||a.fcover)&&(a.fcover&&i.removeClass("rs-fsv").addClass("coverscreenvideo"),(void 0===a.ratio||a.ratio.split(":").length<=1)&&(a.ratio="16:9"),t.prepareCoveredVideo(e,i))},n=function(e,t){var i=e.vimeoplayer;i.getPaused().then(function(a){e.volumetoken=!0;var r=!a,o=i.setVolume(t);void 0!==o&&o.then(function(t){i.getPaused().then(function(t){r===t&&(e.volume="mute",e.volumetoken=!0,i.setVolume(0),i.play())}).catch(function(e){console.log("Get Paused Function Failed for Vimeo Volume Changes Inside the Promise")})}).catch(function(t){r&&(e.volume="mute",e.volumetoken=!0,i.setVolume(0),i.play())})}).catch(function(){console.log("Get Paused Function Failed for Vimeo Volume Changes")})},l=function(e,t){var i=e.player.getPlayerState();"mute"===t?e.player.mute():(e.player.unMute(),e.player.setVolume(t)),setTimeout(function(){1===i&&1!==e.player.getPlayerState()&&(e.player.mute(),e.player.playVideo())},39)},d=function(e){var t=e.play();void 0!==t&&t.then(function(e){}).catch(function(t){e.pause()})},c=function(e){var t=e.play();void 0!==t&&t.then(function(e){}).catch(function(t){_.volumetoken=!0,e.setVolume(0),e.play()})},p=function(e){e.player.playVideo(),setTimeout(function(){1!==e.player.getPlayerState()&&3!==e.player.getPlayerState()&&(e.volume="mute",e.player.mute(),e.player.playVideo())},39)},u=function(e,i,a){e.vimeostarted=!0,e.nextslidecalled=!1,punchgs.TweenLite.to(i.find("rs-poster"),.3,{opacity:0,visibility:"hidden",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(i.find("iframe"),.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut}),t[a].c.trigger("revolution.slide.onvideoplay",o(e.vimeoplayer,"vimeo",e)),t[a].stopByVideo=e.pausetimer,b(i,a),"mute"==e.volume||0===e.volume||t.lastToggleState(i.data("videomutetoggledby"))||!0===t[a].globalmute?(e.volumetoken=!0,e.vimeoplayer.setVolume(0)):n(e,parseInt(e.volcache,0)/100||.75),t.toggleState(e.videotoggledby)},h=function(e,a,r){var n=t[a].videos[e[0].id],d="iframe"+Math.round(1e5*Math.random()+1);if(n.ifr=e.find("iframe"),s(a,e),n.ifr.attr("id",d),n.startvideonow=r,n.videolistenerexist){if(r)switch(n.type){case"youtube":p(n),-1!=n.ssec&&n.player.seekTo(n.ssec);break;case"vimeo":c(n.vimeoplayer),-1!=n.ssec&&n.vimeoplayer.seekTo(n.ssec)}}else switch(n.type){case"youtube":n.player=new YT.Player(d,{events:{onStateChange:function(i){i.data==YT.PlayerState.PLAYING?(punchgs.TweenLite.to(e.find("rs-poster"),.3,{opacity:0,visibility:"hidden",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(n.ifr,.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut}),"mute"==n.volume||0===n.volume||t.lastToggleState(e.data("videomutetoggledby"))||!0===t[a].globalmute?n.player.mute():l(n,parseInt(n.volcache,0)||75),t[a].stopByVideo=!0,b(e,a),n.pausetimer?t[a].c.trigger("stoptimer"):t[a].stopByVideo=!1,t[a].c.trigger("revolution.slide.onvideoplay",o(n.player,"youtube",n)),t.toggleState(n.videotoggledby)):(0==i.data&&n.loop&&(-1!=n.ssec&&n.player.seekTo(n.ssec),p(n),t.toggleState(n.videotoggledby)),f()||0!=i.data&&2!=i.data||!(n.scop&&e.find("rs-poster").length>0||n.bgvideo&&e.find(".rs-fullvideo-cover").length>0)||(n.bgvideo?punchgs.TweenLite.to(e.find(".rs-fullvideo-cover"),.1,{opacity:1,force3D:"auto",ease:punchgs.Power3.easeInOut}):punchgs.TweenLite.to(e.find("rs-poster"),.1,{opacity:1,visibility:"visible",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(n.ifr,.1,{opacity:0,ease:punchgs.Power3.easeInOut})),-1!=i.data&&3!=i.data&&(t[a].stopByVideo=!1,t[a].tonpause=!1,w(e,a),t[a].c.trigger("starttimer"),t[a].c.trigger("revolution.slide.onvideostop",o(n.player,"youtube",n)),null!=t[a].videoIsPlaying&&t[a].videoIsPlaying.attr("id")!=e.attr("id")||t.unToggleState(n.videotoggledby)),0==i.data&&n.nse?(g(),n.nseTriggered=!0,t[a].c.revnext(),w(e,a)):(w(e,a),t[a].stopByVideo=!1,3!==i.data&&(-1!=n.lasteventdata&&3!=n.lasteventdata&&void 0!==n.lasteventdata||-1!=i.data&&3!=i.data)&&t[a].c.trigger("starttimer"),t[a].c.trigger("revolution.slide.onvideostop",o(n.player,"youtube",n)),null!=t[a].videoIsPlaying&&t[a].videoIsPlaying.attr("id")!=e.attr("id")||t.unToggleState(n.videotoggledby))),n.lasteventdata=i.data},onReady:function(a){var r,o=t.is_mobile(),s=e.hasClass("rs-layer-video");!o&&(!t.isSafari11()||o&&s)||"RS-BGVIDEO"!==e[0].tagName&&(!s||!0!==n.aplay&&"true"!==n.aplay)||(r=!0,n.player.setVolume(0),n.volume="mute",n.player.mute(),clearTimeout(e.data("mobilevideotimr")),e.data("mobilevideotimr",setTimeout(function(){p(n)},500))),r||"mute"!=n.volume||(n.player.setVolume(0),n.player.mute()),e.addClass("rs-apiready"),null==n.speed&&1===n.speed||a.target.setPlaybackRate(parseFloat(n.speed)),e.find("rs-poster").unbind("click"),e.find("rs-poster").click(function(){i||p(n)}),n.startvideonow&&(p(n),-1!=n.ssec&&n.player.seekTo(n.ssec)),n.videolistenerexist=!0}}});break;case"vimeo":for(var h,m=n.ifr.attr("src"),v={},y=m,_=/([^&=]+)=([^&]*)/g;h=_.exec(y);)v[decodeURIComponent(h[1])]=decodeURIComponent(h[2]);m=(m=null!=v.player_id?m.replace(v.player_id,d):m+"&player_id="+d).replace(/&api=0|&api=1/g,"");var x,k=t.is_mobile(),T=k||t.isSafari11(),L="RS-BGVIDEO"===e[0].tagName;if(T&&L&&(m+="&background=1"),n.ifr.attr("src",m),n.vimeoplayer=void 0===n.vimeoplayer||!1===n.vimeoplayer?new Vimeo.Player(d):n.vimeoplayer,T)L?x=!0:(n.aplay||"true"===n.aplay)&&(k&&(n.aplay=!1),x=!0),x&&(n.volumetoken=!0,n.vimeoplayer.setVolume(0),n.volume="mute");n.vimeoplayer.on("play",function(t){n.vimeostarted||u(n,e,a)}),n.vimeoplayer.on("loaded",function(t){var i={};n.vimeoplayer.getVideoWidth().then(function(t){i.width=t,void 0!==i.width&&void 0!==i.height&&(n.ratio=i.width+":"+i.height,n.vimeoplayerloaded=!0,s(a,e))}),n.vimeoplayer.getVideoHeight().then(function(t){i.height=t,void 0!==i.width&&void 0!==i.height&&(n.ratio=i.width+":"+i.height,n.vimeoplayerloaded=!0,s(a,e))}),n.startvideonow&&("mute"===n.volume&&(n.volumetoken=!0,n.vimeoplayer.setVolume(0)),c(n.vimeoplayer),-1!=n.ssec&&n.vimeoplayer.setCurrentTime(n.ssec))}),e.addClass("rs-apiready"),n.vimeoplayer.on("volumechange",function(e){n.volumetoken&&(n.volume=e.volume),n.volumetoken=!1}),n.vimeoplayer.on("timeupdate",function(i){n.vimeostarted||u(n,e,a),n.pausetimer&&"playing"==t[a].sliderstatus&&(t[a].stopByVideo=!0,t[a].c.trigger("stoptimer")),n.currenttime=i.seconds,0!=n.esec&&-1!==n.esec&&n.esec<i.seconds&&!0!==n.nextslidecalled&&(n.loop?(c(n.vimeoplayer),n.vimeoplayer.setCurrentTime(-1!==n.ssec?n.ssec:0)):(n.nse&&(n.nseTriggered=!0,n.nextslidecalled=!0,t[a].c.revnext()),n.vimeoplayer.pause()))}),n.vimeoplayer.on("ended",function(i){n.vimeostarted=!1,w(e,a),t[a].stopByVideo=!1,t[a].c.trigger("starttimer"),t[a].c.trigger("revolution.slide.onvideostop",o(n.vimeoplayer,"vimeo",n)),n.nse&&(n.nseTriggered=!0,t[a].c.revnext()),null!=t[a].videoIsPlaying&&t[a].videoIsPlaying.attr("id")!=e.attr("id")||t.unToggleState(n.videotoggledby)}),n.vimeoplayer.on("pause",function(i){n.vimeostarted=!1,(n.scop&&e.find("rs-poster").length>0||n.bgvideo&&e.find(".rs-fullvideo-cover").length>0)&&(n.bgvideo?punchgs.TweenLite.to(e.find(".rs-fullvideo-cover"),.1,{opacity:1,force3D:"auto",ease:punchgs.Power3.easeInOut}):punchgs.TweenLite.to(e.find("rs-poster"),.1,{opacity:1,visibility:"visible",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.1,{opacity:0,ease:punchgs.Power3.easeInOut})),t[a].stopByVideo=!1,t[a].tonpause=!1,w(e,a),t[a].c.trigger("starttimer"),t[a].c.trigger("revolution.slide.onvideostop",o(n.vimeoplayer,"vimeo",n)),null!=t[a].videoIsPlaying&&t[a].videoIsPlaying.attr("id")!=e.attr("id")||t.unToggleState(n.videotoggledby)}),e.find("rs-poster").unbind("click"),e.find("rs-poster").click(function(){if(!i)return c(n.vimeoplayer),!1}),n.videolistenerexist=!0}},g=function(){document.exitFullscreen&&document.fullscreen?document.exitFullscreen():document.mozCancelFullScreen&&document.mozFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitIsFullScreen&&document.webkitExitFullscreen()},f=function(){if(void 0!==window.fullScreen)return window.fullScreen;if(void 0!==document.fullscreen)return document.fullscreen;if(void 0!==document.mozFullScreen)return document.mozFullScreen;if(void 0!==document.webkitIsFullScreen)return document.webkitIsFullScreen;var e=jQuery.browser.webkit&&/Apple Computer/.test(navigator.vendor)?42:5;return screen.width==window.innerWidth&&Math.abs(screen.height-window.innerHeight)<e},m=function(e,a,s){var n=t[a].videos[e[0].id];if(i&&n.notonmobile)return!1;n.metaloaded=!0,n.control&&!n.audio||(0!=e.find(".tp-video-play-button").length||i||e.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'),e.find("video, rs-poster, .tp-video-play-button").click(function(){e.hasClass("videoisplaying")?n.video.pause():n.video.play()})),(n.fcover||e.hasClass("rs-fsv")||n.bgvideo)&&(n.fcover||n.bgvideo?(n.html5vid.addClass("fullcoveredvideo"),void 0!==n.ratio&&1!=n.ratio.split(":").length||(n.ratio="16:9"),t.prepareCoveredVideo(a,e)):n.html5vid.addClass("rs-fsv")),r(n.video,"canplaythrough",function(){t.preLoadAudioDone(e,a,"canplaythrough")}),r(n.video,"canplay",function(){t.preLoadAudioDone(e,a,"canplay")}),r(n.video,"progress",function(){t.preLoadAudioDone(e,a,"progress")}),r(n.video,"timeupdate",function(e){0!=n.esec&&-1!=n.esec&&n.esec<n.video.currentTime&&!n.nextslidecalled&&(n.loop?(n.video.play(),n.video.currentTime=-1===n.ssec?0:n.ssec):(n.nse&&(n.nseTriggered=!0,n.nextslidecalled=!0,t[a].jcnah=!0,t[a].c.revnext(),setTimeout(function(){t[a].jcnah=!1},1e3)),n.video.pause()))}),r(n.video,"play",function(){n.nextslidecalled=!1,n.volume=null!=n.volume&&"mute"!=n.volume?parseFloat(n.volcache):n.volume,n.volcache=null!=n.volcache&&"mute"!=n.volcache?parseFloat(n.volcache):n.volcache,t.is_mobile()||t.isSafari11()||(!0===t[a].globalmute?n.video.muted=!0:n.video.muted="mute"==n.volume,n.volcache=jQuery.isNumeric(n.volcache)&&n.volcache>1?n.volcache/100:n.volcache,"mute"==n.volume?n.video.muted=!0:null!=n.volcache&&(n.video.volume=n.volcache)),e.addClass("videoisplaying"),b(e,a),!0!==n.pausetimer||"audio"==n.tag?(t[a].stopByVideo=!1,t[a].c.trigger("revolution.slide.onvideostop",o(n.video,"html5",n))):(t[a].stopByVideo=!0,t[a].c.trigger("revolution.slide.onvideoplay",o(n.video,"html5",n))),n.pausetimer&&"playing"==t[a].sliderstatus&&(t[a].stopByVideo=!0,t[a].c.trigger("stoptimer")),punchgs.TweenLite.to(e.find("rs-poster"),.3,{opacity:0,visibility:"hidden",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find(n.tag),.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut}),t.toggleState(n.videotoggledby)}),r(n.video,"pause",function(i){!f()&&e.find("rs-poster").length>0&&n.scop&&(punchgs.TweenLite.to(e.find("rs-poster"),.3,{opacity:1,visibility:"visible",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find(n.tag),.3,{opacity:0,ease:punchgs.Power3.easeInOut})),e.removeClass("videoisplaying"),t[a].stopByVideo=!1,w(e,a),"audio"!=n.tag&&t[a].c.trigger("starttimer"),t[a].c.trigger("revolution.slide.onvideostop",o(n.video,"html5",n)),null!=t[a].videoIsPlaying&&t[a].videoIsPlaying.attr("id")!=e.attr("id")||t.unToggleState(n.videotoggledby)}),r(n.video,"ended",function(){g(),w(e,a),t[a].stopByVideo=!1,w(e,a),"audio"!=n.tag&&t[a].c.trigger("starttimer"),t[a].c.trigger("revolution.slide.onvideostop",o(n.video,"html5",e.data())),n.nse&&n.video.currentTime>0&&(1==!t[a].jcnah&&(n.nseTriggered=!0,t[a].c.revnext(),t[a].jcnah=!0),setTimeout(function(){t[a].jcnah=!1},1500)),e.removeClass("videoisplaying")})},v=function(e){return"t"===e||!0===e||"true"===e||"f"!==e&&!1!==e&&"false"!==e&&e},y=function(e,t){e.audio="audio"===t;var i=void 0===e.video?[]:e.video.split(";"),r={volume:e.audio?1:"mute",pload:"auto",ratio:"16:9",loop:!0,aplay:"true",fcover:1===e.bgvideo,afs:!0,controls:!1,nse:!0,npom:!1,opom:!1,inline:!0,notonmobile:!1,start:-1,end:-1,doverlay:"none",scop:!1,rwd:!0,speed:1,ploadwait:5,stopAV:1!==e.bgvideo,noInt:!1,volcache:75};for(var o in i)if(i.hasOwnProperty(o)){var s=i[o].split(":");switch(s[0]){case"v":r.volume=s[1];break;case"vd":r.volcache=s[1];break;case"p":r.pload=s[1];break;case"ar":r.ratio=s[1]+(void 0!==s[2]?":"+s[2]:"");break;case"ap":r.aplay=v(s[1]);break;case"fc":r.fcover=v(s[1]);break;case"afs":r.afs=v(s[1]);break;case"vc":r.controls=s[1];break;case"nse":r.nse=v(s[1]);break;case"npom":r.npom=v(s[1]);break;case"opom":r.opom=v(s[1]);break;case"t":r.vtype=s[1];break;case"inl":r.inline=v(s[1]);break;case"nomo":r.notonmobile=v(s[1]);break;case"sta":r.start=s[1]+(void 0!==s[2]?":"+s[2]:"");break;case"end":r.end=s[1]+(void 0!==s[2]?":"+s[2]:"");break;case"do":r.doverlay=s[1];break;case"scop":r.scop=v(s[1]);break;case"rwd":r.rwd=v(s[1]);break;case"sp":r.speed=s[1];break;case"vw":r.ploadwait=parseInt(s[1],0)||5;break;case"sav":r.stopAV=v(s[1]);break;case"noint":r.noInt=v(s[1]);break;case"l":r.loopcache=s[1],r.loop="loop"===s[1]||"loopandnoslidestop"===s[1]||"none"!==s[1]&&v(s[1]);break;case"ptimer":r.pausetimer=v(s[1])}}return void 0!==e.bgvideo&&(r.bgvideo=e.bgvideo),void 0===e.bgvideo||!1!==r.fcover&&"false"!==r.fcover||(r.doverlay="none"),r.noInt&&(r.controls=!1),void 0!==e.mp4&&(r.mp4=e.mp4),void 0!==e.videomp4&&(r.mp4=e.videomp4),void 0!==e.ytid&&(r.ytid=e.ytid),void 0!==e.ogv&&(r.ogv=e.ogv),void 0!==e.webm&&(r.webm=e.webm),void 0!==e.vimeoid&&(r.vimeoid=e.vimeoid),void 0!==e.vatr&&(r.vatr=e.vatr),void 0!==e.videoattributes&&(r.vatr=e.videoattributes),void 0!==e.poster&&(r.poster=e.poster),r.aplay="true"===r.aplay||r.aplay,r.aplay=1!=e.audio&&r.aplay,1===r.bgvideo&&(r.volume="mute"),r.ssec=a(r.start),r.esec=a(r.end),r.pausetimer=void 0===r.pausetimer?"loopandnoslidestop"!==r.loopcache:r.pausetimer,r.inColumn=e._incolumn,r.audio=e.audio,!0!==r.loop&&"true"!==r.loop||!0!==r.nse&&"true"!==r.nse||(r.loop=!1),r},b=function(e,i){if(t[i].playingvideos=void 0===t[i].playingvideos?new Array:t[i].playingvideos,t[i].videos[e[0].id].stopAV&&void 0!==t[i].playingvideos&&t[i].playingvideos.length>0)for(var a in t[i].lastplayedvideos=jQuery.extend(!0,[],t[i].playingvideos),t[i].playingvideos)t[i].playingvideos.hasOwnProperty(a)&&t.stopVideo(t[i].playingvideos[a],i);t[i].playingvideos.push(e),t[i].videoIsPlaying=e},w=function(e,i){void 0!==t[i]&&void 0!==t[i]&&null!=t[i].playingvideos&&jQuery.inArray(e,t[i].playingvideos)>=0&&t[i].playingvideos.splice(jQuery.inArray(e,t[i].playingvideos),1)}}(jQuery);var kc_script_data={ajax_url:"http://wp3.commonsupport.com/newwp/fixnox/wp-admin/admin-ajax.php"};function setREVStartSize(t){try{var h,e=document.getElementById(t.c).parentNode.offsetWidth;if(e=0===e||isNaN(e)?window.innerWidth:e,t.tabw=void 0===t.tabw?0:parseInt(t.tabw),t.thumbw=void 0===t.thumbw?0:parseInt(t.thumbw),t.tabh=void 0===t.tabh?0:parseInt(t.tabh),t.thumbh=void 0===t.thumbh?0:parseInt(t.thumbh),t.tabhide=void 0===t.tabhide?0:parseInt(t.tabhide),t.thumbhide=void 0===t.thumbhide?0:parseInt(t.thumbhide),t.mh=void 0===t.mh||""==t.mh||"auto"===t.mh?0:parseInt(t.mh,0),"fullscreen"===t.layout||"fullscreen"===t.l)h=Math.max(t.mh,window.innerHeight);else{for(var i in t.gw=Array.isArray(t.gw)?t.gw:[t.gw],t.rl)void 0!==t.gw[i]&&0!==t.gw[i]||(t.gw[i]=t.gw[i-1]);for(var i in t.gh=void 0===t.el||""===t.el||Array.isArray(t.el)&&0==t.el.length?t.gh:t.el,t.gh=Array.isArray(t.gh)?t.gh:[t.gh],t.rl)void 0!==t.gh[i]&&0!==t.gh[i]||(t.gh[i]=t.gh[i-1]);var r,a=new Array(t.rl.length),n=0;for(var i in t.tabw=t.tabhide>=e?0:t.tabw,t.thumbw=t.thumbhide>=e?0:t.thumbw,t.tabh=t.tabhide>=e?0:t.tabh,t.thumbh=t.thumbhide>=e?0:t.thumbh,t.rl)a[i]=t.rl[i]<window.innerWidth?0:t.rl[i];for(var i in r=a[0],a)r>a[i]&&0<a[i]&&(r=a[i],n=i);var d=e>t.gw[n]+t.tabw+t.thumbw?1:(e-(t.tabw+t.thumbw))/t.gw[n];h=t.gh[n]*d+(t.tabh+t.thumbh)}void 0===window.rs_init_css&&(window.rs_init_css=document.head.appendChild(document.createElement("style"))),document.getElementById(t.c).height=h,window.rs_init_css.innerHTML+="#"+t.c+"_wrapper { height: "+h+"px }"}catch(t){console.log("Failure at Presize of Slider:"+t)}};;setREVStartSize({c:'rev_slider_1_1',rl:[1240,1024,778,480],el:[850,768,960,720],gw:[1200,1024,778,480],gh:[850,768,960,720],layout:'fullwidth',mh:"0"});var revapi1,tpj;jQuery(function(){tpj=jQuery;if(tpj("#rev_slider_1_1").revolution==undefined){revslider_showDoubleJqueryError("#rev_slider_1_1")}else{revapi1=tpj("#rev_slider_1_1").show().revolution({jsFileLocation:"//wp3.commonsupport.com/newwp/fixnox/wp-content/plugins/revslider/public/assets/js/",sliderLayout:"fullwidth",visibilityLevels:"1240,1024,778,480",gridwidth:"1200,1024,778,480",gridheight:"850,768,960,720",minHeight:"",spinner:"spinner0",editorheight:"850,768,960,720",responsiveLevels:"1240,1024,778,480",disableProgressBar:"on",navigation:{mouseScrollNavigation:!1,onHoverStop:!1,arrows:{enable:!0,style:"metis",left:{h_align:"right",v_align:"bottom",h_offset:140},right:{v_align:"bottom",h_offset:70}},bullets:{enable:!0,tmp:"",style:"hesperiden"}},fallbacks:{allowHTML5AutoPlayOnAndroid:!0},})}});var htmlDivCss=unescape("%23rev_slider_1_1_wrapper%20.metis.tparrows%20%7B%0A%20%20background%3A%23ffffff%3B%0A%20%20padding%3A10px%3B%0A%20%20transition%3Aall%200.3s%3B%0A%20%20-webkit-transition%3Aall%200.3s%3B%0A%20%20width%3A60px%3B%0A%20%20height%3A60px%3B%0A%20%20box-sizing%3Aborder-box%3B%0A%20%7D%0A%20%0A%20%23rev_slider_1_1_wrapper%20.metis.tparrows%3Ahover%20%7B%0A%20%20%20background%3Argba%28255%2C255%2C255%2C0.75%29%3B%0A%20%7D%0A%20%0A%20%23rev_slider_1_1_wrapper%20.metis.tparrows%3Abefore%20%7B%0A%20%20color%3A%23000000%3B%20%20%0A%20%20%20transition%3Aall%200.3s%3B%0A%20%20-webkit-transition%3Aall%200.3s%3B%0A%20%7D%0A%20%0A%20%23rev_slider_1_1_wrapper%20.metis.tparrows%3Ahover%3Abefore%20%7B%0A%20%20%20transform%3Ascale%281.5%29%3B%0A%20%20%7D%0A%20%0A%23rev_slider_1_1_wrapper%20.hesperiden.tp-bullets%20%7B%0A%7D%0A%23rev_slider_1_1_wrapper%20.hesperiden.tp-bullets%3Abefore%20%7B%0A%09content%3A%27%20%27%3B%0A%09position%3Aabsolute%3B%0A%09width%3A100%25%3B%0A%09height%3A100%25%3B%0A%09background%3Atransparent%3B%0A%09padding%3A10px%3B%0A%09margin-left%3A-10px%3Bmargin-top%3A-10px%3B%0A%09box-sizing%3Acontent-box%3B%0A%20%20%20border-radius%3A8px%3B%0A%20%20%0A%7D%0A%23rev_slider_1_1_wrapper%20.hesperiden%20.tp-bullet%20%7B%0A%09width%3A12px%3B%0A%09height%3A12px%3B%0A%09position%3Aabsolute%3B%0A%09background%3A%20%23999999%3B%20%2F%2A%20old%20browsers%20%2A%2F%0A%20%20%20%20background%3A%20-moz-linear-gradient%28top%2C%20%20%23999999%200%25%2C%20%23e1e1e1%20100%25%29%3B%20%2F%2A%20ff3.6%2B%20%2A%2F%0A%20%20%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%20%23999999%200%25%2C%23e1e1e1%20100%25%29%3B%20%2F%2A%20chrome10%2B%2Csafari5.1%2B%20%2A%2F%0A%20%20%20%20background%3A%20-o-linear-gradient%28top%2C%20%20%23999999%200%25%2C%23e1e1e1%20100%25%29%3B%20%2F%2A%20opera%2011.10%2B%20%2A%2F%0A%20%20%20%20background%3A%20-ms-linear-gradient%28top%2C%20%20%23999999%200%25%2C%23e1e1e1%20100%25%29%3B%20%2F%2A%20ie10%2B%20%2A%2F%0A%20%20%20%20background%3A%20linear-gradient%28to%20bottom%2C%20%20%23999999%200%25%2C%23e1e1e1%20100%25%29%3B%20%2F%2A%20w3c%20%2A%2F%0A%20%20%20%20filter%3A%20progid%3Adximagetransform.microsoft.gradient%28%20%0A%20%20%20%20startcolorstr%3D%27%23999999%27%2C%20endcolorstr%3D%27%23e1e1e1%27%2Cgradienttype%3D0%20%29%3B%20%2F%2A%20ie6-9%20%2A%2F%0A%09border%3A3px%20solid%20%23e5e5e5%3B%0A%09border-radius%3A50%25%3B%0A%09cursor%3A%20pointer%3B%0A%09box-sizing%3Acontent-box%3B%0A%7D%0A%23rev_slider_1_1_wrapper%20.hesperiden%20.tp-bullet%3Ahover%2C%0A%23rev_slider_1_1_wrapper%20.hesperiden%20.tp-bullet.selected%20%7B%0A%09background%3A%23666666%3B%0A%7D%0A%23rev_slider_1_1_wrapper%20.hesperiden%20.tp-bullet-image%20%7B%0A%7D%0A%23rev_slider_1_1_wrapper%20.hesperiden%20.tp-bullet-title%20%7B%0A%7D%0A%0A");var htmlDiv=document.getElementById('rs-plugin-settings-inline-css');if(htmlDiv){htmlDiv.innerHTML=htmlDiv.innerHTML+htmlDivCss}else{var htmlDiv=document.createElement('div');htmlDiv.innerHTML='<style>'+htmlDivCss+'</style>';document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0])};var htmlDivCss=unescape("%0A%0A%0A%0A%0A%0A");var htmlDiv=document.getElementById('rs-plugin-settings-inline-css');if(htmlDiv){htmlDiv.innerHTML=htmlDiv.innerHTML+htmlDivCss}else{var htmlDiv=document.createElement('div');htmlDiv.innerHTML='<style>'+htmlDivCss+'</style>';document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0])};if(typeof revslider_showDoubleJqueryError==="undefined"){function revslider_showDoubleJqueryError(sliderID){var err="<div class='rs_error_message_box'>";err+="<div class='rs_error_message_oops'>Oops...</div>";err+="<div class='rs_error_message_content'>";err+="You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>";err+="To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' ->  'jQuery & OutPut Filters' -> 'Put JS to Body' to on";err+="<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it";err+="</div>";err+="</div>";jQuery(sliderID).show().html(err)}};(function($){'use strict';if(typeof wpcf7==='undefined'||wpcf7===null){return}
wpcf7=$.extend({cached:0,inputs:[]},wpcf7);$(function(){wpcf7.supportHtml5=(function(){var features={};var input=document.createElement('input');features.placeholder='placeholder' in input;var inputTypes=['email','url','tel','number','range','date'];$.each(inputTypes,function(index,value){input.setAttribute('type',value);features[value]=input.type!=='text'});return features})();$('div.wpcf7 > form').each(function(){var $form=$(this);wpcf7.initForm($form);if(wpcf7.cached){wpcf7.refill($form)}})});wpcf7.getId=function(form){return parseInt($('input[name="_wpcf7"]',form).val(),10)};wpcf7.initForm=function(form){var $form=$(form);$form.submit(function(event){if(typeof window.FormData!=='function'){return}
wpcf7.submit($form);event.preventDefault()});$('.wpcf7-submit',$form).after('<span class="ajax-loader"></span>');wpcf7.toggleSubmit($form);$form.on('click','.wpcf7-acceptance',function(){wpcf7.toggleSubmit($form)});$('.wpcf7-exclusive-checkbox',$form).on('click','input:checkbox',function(){var name=$(this).attr('name');$form.find('input:checkbox[name="'+name+'"]').not(this).prop('checked',!1)});$('.wpcf7-list-item.has-free-text',$form).each(function(){var $freetext=$(':input.wpcf7-free-text',this);var $wrap=$(this).closest('.wpcf7-form-control');if($(':checkbox, :radio',this).is(':checked')){$freetext.prop('disabled',!1)}else{$freetext.prop('disabled',!0)}
$wrap.on('change',':checkbox, :radio',function(){var $cb=$('.has-free-text',$wrap).find(':checkbox, :radio');if($cb.is(':checked')){$freetext.prop('disabled',!1).focus()}else{$freetext.prop('disabled',!0)}})});if(!wpcf7.supportHtml5.placeholder){$('[placeholder]',$form).each(function(){$(this).val($(this).attr('placeholder'));$(this).addClass('placeheld');$(this).focus(function(){if($(this).hasClass('placeheld')){$(this).val('').removeClass('placeheld')}});$(this).blur(function(){if(''===$(this).val()){$(this).val($(this).attr('placeholder'));$(this).addClass('placeheld')}})})}
if(wpcf7.jqueryUi&&!wpcf7.supportHtml5.date){$form.find('input.wpcf7-date[type="date"]').each(function(){$(this).datepicker({dateFormat:'yy-mm-dd',minDate:new Date($(this).attr('min')),maxDate:new Date($(this).attr('max'))})})}
if(wpcf7.jqueryUi&&!wpcf7.supportHtml5.number){$form.find('input.wpcf7-number[type="number"]').each(function(){$(this).spinner({min:$(this).attr('min'),max:$(this).attr('max'),step:$(this).attr('step')})})}
$('.wpcf7-character-count',$form).each(function(){var $count=$(this);var name=$count.attr('data-target-name');var down=$count.hasClass('down');var starting=parseInt($count.attr('data-starting-value'),10);var maximum=parseInt($count.attr('data-maximum-value'),10);var minimum=parseInt($count.attr('data-minimum-value'),10);var updateCount=function(target){var $target=$(target);var length=$target.val().length;var count=down?starting-length:length;$count.attr('data-current-value',count);$count.text(count);if(maximum&&maximum<length){$count.addClass('too-long')}else{$count.removeClass('too-long')}
if(minimum&&length<minimum){$count.addClass('too-short')}else{$count.removeClass('too-short')}};$(':input[name="'+name+'"]',$form).each(function(){updateCount(this);$(this).keyup(function(){updateCount(this)})})});$form.on('change','.wpcf7-validates-as-url',function(){var val=$.trim($(this).val());if(val&&!val.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==val.indexOf('.')){val=val.replace(/^\/+/,'');val='http://'+val}
$(this).val(val)})};wpcf7.submit=function(form){if(typeof window.FormData!=='function'){return}
var $form=$(form);$('.ajax-loader',$form).addClass('is-active');$('[placeholder].placeheld',$form).each(function(i,n){$(n).val('')});wpcf7.clearResponse($form);var formData=new FormData($form.get(0));var detail={id:$form.closest('div.wpcf7').attr('id'),status:'init',inputs:[],formData:formData};$.each($form.serializeArray(),function(i,field){if('_wpcf7'==field.name){detail.contactFormId=field.value}else if('_wpcf7_version'==field.name){detail.pluginVersion=field.value}else if('_wpcf7_locale'==field.name){detail.contactFormLocale=field.value}else if('_wpcf7_unit_tag'==field.name){detail.unitTag=field.value}else if('_wpcf7_container_post'==field.name){detail.containerPostId=field.value}else if(field.name.match(/^_wpcf7_\w+_free_text_/)){var owner=field.name.replace(/^_wpcf7_\w+_free_text_/,'');detail.inputs.push({name:owner+'-free-text',value:field.value})}else if(field.name.match(/^_/)){}else{detail.inputs.push(field)}});wpcf7.triggerEvent($form.closest('div.wpcf7'),'beforesubmit',detail);var ajaxSuccess=function(data,status,xhr,$form){detail.id=$(data.into).attr('id');detail.status=data.status;detail.apiResponse=data;var $message=$('.wpcf7-response-output',$form);switch(data.status){case 'validation_failed':$.each(data.invalidFields,function(i,n){$(n.into,$form).each(function(){wpcf7.notValidTip(this,n.message);$('.wpcf7-form-control',this).addClass('wpcf7-not-valid');$('[aria-invalid]',this).attr('aria-invalid','true')})});$message.addClass('wpcf7-validation-errors');$form.addClass('invalid');wpcf7.triggerEvent(data.into,'invalid',detail);break;case 'acceptance_missing':$message.addClass('wpcf7-acceptance-missing');$form.addClass('unaccepted');wpcf7.triggerEvent(data.into,'unaccepted',detail);break;case 'spam':$message.addClass('wpcf7-spam-blocked');$form.addClass('spam');$('[name="g-recaptcha-response"]',$form).each(function(){if(''===$(this).val()){var $recaptcha=$(this).closest('.wpcf7-form-control-wrap');wpcf7.notValidTip($recaptcha,wpcf7.recaptcha.messages.empty)}});wpcf7.triggerEvent(data.into,'spam',detail);break;case 'aborted':$message.addClass('wpcf7-aborted');$form.addClass('aborted');wpcf7.triggerEvent(data.into,'aborted',detail);break;case 'mail_sent':$message.addClass('wpcf7-mail-sent-ok');$form.addClass('sent');wpcf7.triggerEvent(data.into,'mailsent',detail);break;case 'mail_failed':$message.addClass('wpcf7-mail-sent-ng');$form.addClass('failed');wpcf7.triggerEvent(data.into,'mailfailed',detail);break;default:var customStatusClass='custom-'+data.status.replace(/[^0-9a-z]+/i,'-');$message.addClass('wpcf7-'+customStatusClass);$form.addClass(customStatusClass)}
wpcf7.refill($form,data);wpcf7.triggerEvent(data.into,'submit',detail);if('mail_sent'==data.status){$form.each(function(){this.reset()})}
$form.find('[placeholder].placeheld').each(function(i,n){$(n).val($(n).attr('placeholder'))});$message.html('').append(data.message).slideDown('fast');$message.attr('role','alert');$('.screen-reader-response',$form.closest('.wpcf7')).each(function(){var $response=$(this);$response.html('').attr('role','').append(data.message);if(data.invalidFields){var $invalids=$('<ul></ul>');$.each(data.invalidFields,function(i,n){if(n.idref){var $li=$('<li></li>').append($('<a></a>').attr('href','#'+n.idref).append(n.message))}else{var $li=$('<li></li>').append(n.message)}
$invalids.append($li)});$response.append($invalids)}
$response.attr('role','alert').focus()})};$.ajax({type:'POST',url:wpcf7.apiSettings.getRoute('/contact-forms/'+wpcf7.getId($form)+'/feedback'),data:formData,dataType:'json',processData:!1,contentType:!1}).done(function(data,status,xhr){ajaxSuccess(data,status,xhr,$form);$('.ajax-loader',$form).removeClass('is-active')}).fail(function(xhr,status,error){var $e=$('<div class="ajax-error"></div>').text(error.message);$form.after($e)})};wpcf7.triggerEvent=function(target,name,detail){var $target=$(target);var event=new CustomEvent('wpcf7'+name,{bubbles:!0,detail:detail});$target.get(0).dispatchEvent(event);$target.trigger('wpcf7:'+name,detail);$target.trigger(name+'.wpcf7',detail)};wpcf7.toggleSubmit=function(form,state){var $form=$(form);var $submit=$('input:submit',$form);if(typeof state!=='undefined'){$submit.prop('disabled',!state);return}
if($form.hasClass('wpcf7-acceptance-as-validation')){return}
$submit.prop('disabled',!1);$('.wpcf7-acceptance',$form).each(function(){var $span=$(this);var $input=$('input:checkbox',$span);if(!$span.hasClass('optional')){if($span.hasClass('invert')&&$input.is(':checked')||!$span.hasClass('invert')&&!$input.is(':checked')){$submit.prop('disabled',!0);return!1}}})};wpcf7.notValidTip=function(target,message){var $target=$(target);$('.wpcf7-not-valid-tip',$target).remove();$('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);if($target.is('.use-floating-validation-tip *')){var fadeOut=function(target){$(target).not(':hidden').animate({opacity:0},'fast',function(){$(this).css({'z-index':-100})})};$target.on('mouseover','.wpcf7-not-valid-tip',function(){fadeOut(this)});$target.on('focus',':input',function(){fadeOut($('.wpcf7-not-valid-tip',$target))})}};wpcf7.refill=function(form,data){var $form=$(form);var refillCaptcha=function($form,items){$.each(items,function(i,n){$form.find(':input[name="'+i+'"]').val('');$form.find('img.wpcf7-captcha-'+i).attr('src',n);var match=/([0-9]+)\.(png|gif|jpeg)$/.exec(n);$form.find('input:hidden[name="_wpcf7_captcha_challenge_'+i+'"]').attr('value',match[1])})};var refillQuiz=function($form,items){$.each(items,function(i,n){$form.find(':input[name="'+i+'"]').val('');$form.find(':input[name="'+i+'"]').siblings('span.wpcf7-quiz-label').text(n[0]);$form.find('input:hidden[name="_wpcf7_quiz_answer_'+i+'"]').attr('value',n[1])})};if(typeof data==='undefined'){$.ajax({type:'GET',url:wpcf7.apiSettings.getRoute('/contact-forms/'+wpcf7.getId($form)+'/refill'),beforeSend:function(xhr){var nonce=$form.find(':input[name="_wpnonce"]').val();if(nonce){xhr.setRequestHeader('X-WP-Nonce',nonce)}},dataType:'json'}).done(function(data,status,xhr){if(data.captcha){refillCaptcha($form,data.captcha)}
if(data.quiz){refillQuiz($form,data.quiz)}})}else{if(data.captcha){refillCaptcha($form,data.captcha)}
if(data.quiz){refillQuiz($form,data.quiz)}}};wpcf7.clearResponse=function(form){var $form=$(form);$form.removeClass('invalid spam sent failed');$form.siblings('.screen-reader-response').html('').attr('role','');$('.wpcf7-not-valid-tip',$form).remove();$('[aria-invalid]',$form).attr('aria-invalid','false');$('.wpcf7-form-control',$form).removeClass('wpcf7-not-valid');$('.wpcf7-response-output',$form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked')};wpcf7.apiSettings.getRoute=function(path){var url=wpcf7.apiSettings.root;url=url.replace(wpcf7.apiSettings.namespace,wpcf7.apiSettings.namespace+path);return url}})(jQuery);(function(){if(typeof window.CustomEvent==="function")return!1;function CustomEvent(event,params){params=params||{bubbles:!1,cancelable:!1,detail:undefined};var evt=document.createEvent('CustomEvent');evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);return evt}
CustomEvent.prototype=window.Event.prototype;window.CustomEvent=CustomEvent})();jQuery(function(t){if("undefined"==typeof wc_add_to_cart_params)return!1;var a=function(){t(document.body).on("click",".add_to_cart_button",this.onAddToCart).on("click",".remove_from_cart_button",this.onRemoveFromCart).on("added_to_cart",this.updateButton).on("added_to_cart",this.updateCartPage).on("added_to_cart removed_from_cart",this.updateFragments)};a.prototype.onAddToCart=function(a){var o=t(this);if(o.is(".ajax_add_to_cart")){if(!o.attr("data-product_id"))return!0;a.preventDefault(),o.removeClass("added"),o.addClass("loading");var r={};t.each(o.data(),function(t,a){r[t]=a}),t(document.body).trigger("adding_to_cart",[o,r]),t.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","add_to_cart"),r,function(a){a&&(a.error&&a.product_url?window.location=a.product_url:"yes"!==wc_add_to_cart_params.cart_redirect_after_add?t(document.body).trigger("added_to_cart",[a.fragments,a.cart_hash,o]):window.location=wc_add_to_cart_params.cart_url)})}},a.prototype.onRemoveFromCart=function(a){var o=t(this),r=o.closest(".woocommerce-mini-cart-item");a.preventDefault(),r.block({message:null,overlayCSS:{opacity:.6}}),t.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","remove_from_cart"),{cart_item_key:o.data("cart_item_key")},function(a){a&&a.fragments?t(document.body).trigger("removed_from_cart",[a.fragments,a.cart_hash]):window.location=o.attr("href")}).fail(function(){window.location=o.attr("href")})},a.prototype.updateButton=function(a,o,r,e){(e=void 0!==e&&e)&&(e.removeClass("loading"),e.addClass("added"),wc_add_to_cart_params.is_cart||0!==e.parent().find(".added_to_cart").length||e.after(' <a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>"),t(document.body).trigger("wc_cart_button_updated",[e]))},a.prototype.updateCartPage=function(){var a=window.location.toString().replace("add-to-cart","added-to-cart");t(".shop_table.cart").load(a+" .shop_table.cart:eq(0) > *",function(){t(".shop_table.cart").stop(!0).css("opacity","1").unblock(),t(document.body).trigger("cart_page_refreshed")}),t(".cart_totals").load(a+" .cart_totals:eq(0) > *",function(){t(".cart_totals").stop(!0).css("opacity","1").unblock(),t(document.body).trigger("cart_totals_refreshed")})},a.prototype.updateFragments=function(a,o){o&&(t.each(o,function(a){t(a).addClass("updating").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}})}),t.each(o,function(a,o){t(a).replaceWith(o),t(a).stop(!0).css("opacity","1").unblock()}),t(document.body).trigger("wc_fragments_loaded"))},new a});/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!function(){"use strict";function e(e){function t(t,n){var s,h,k=t==window,y=n&&n.message!==undefined?n.message:undefined;if(!(n=e.extend({},e.blockUI.defaults,n||{})).ignoreIfBlocked||!e(t).data("blockUI.isBlocked")){if(n.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,n.overlayCSS||{}),s=e.extend({},e.blockUI.defaults.css,n.css||{}),n.onOverlayClick&&(n.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,n.themedCSS||{}),y=y===undefined?n.message:y,k&&p&&o(window,{fadeOut:0}),y&&"string"!=typeof y&&(y.parentNode||y.jquery)){var m=y.jquery?y[0]:y,g={};e(t).data("blockUI.history",g),g.el=m,g.parent=m.parentNode,g.display=m.style.display,g.position=m.style.position,g.parent&&g.parent.removeChild(m)}e(t).data("blockUI.onUnblock",n.onUnblock);var v,I,w,U,x=n.baseZ;v=e(r||n.forceIframe?'<iframe class="blockUI" style="z-index:'+x+++';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+n.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),I=e(n.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x+++';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+x+++';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),n.theme&&k?(U='<div class="blockUI '+n.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):n.theme?(U='<div class="blockUI '+n.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+n.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+n.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),y&&(n.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(s)),n.theme||I.css(n.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||n.forceIframe)&&v.css("opacity",0);var C=[v,I,w],S=e(k?"body":t);e.each(C,function(){this.appendTo(S)}),n.theme&&n.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:t).length>0);if(u||O){if(k&&n.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=a(t,"borderTopWidth"),T=a(t,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,t){var o=t[0].style;if(o.position="absolute",e<2)k?o.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+n.quirksmodeOffsetHack+') + "px"'):o.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?o.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):o.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&o.setExpression("left",B),M&&o.setExpression("top",M);else if(n.centerY)k&&o.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),o.marginTop=0;else if(!n.centerY&&k){var i="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+(n.css&&n.css.top?parseInt(n.css.top,10):0)+') + "px"';o.setExpression("top",i)}})}if(y&&(n.theme?w.find(".ui-widget-content").append(y):w.append(y),(y.jquery||y.nodeType)&&e(y).show()),(r||n.forceIframe)&&n.showOverlay&&v.show(),n.fadeIn){var j=n.onBlock?n.onBlock:c,H=n.showOverlay&&!y?j:c,z=y?j:c;n.showOverlay&&I._fadeIn(n.fadeIn,H),y&&w._fadeIn(n.fadeIn,z)}else n.showOverlay&&I.show(),y&&w.show(),n.onBlock&&n.onBlock.bind(w)();if(i(1,t,n),k?(p=w[0],b=e(n.focusableElements,p),n.focusInput&&setTimeout(l,20)):d(w[0],n.centerX,n.centerY),n.timeout){var W=setTimeout(function(){k?e.unblockUI(n):e(t).unblock(n)},n.timeout);e(t).data("blockUI.timeout",W)}}}function o(t,o){var s,l=t==window,d=e(t),a=d.data("blockUI.history"),c=d.data("blockUI.timeout");c&&(clearTimeout(c),d.removeData("blockUI.timeout")),o=e.extend({},e.blockUI.defaults,o||{}),i(0,t,o),null===o.onUnblock&&(o.onUnblock=d.data("blockUI.onUnblock"),d.removeData("blockUI.onUnblock"));var r;r=l?e(document.body).children().filter(".blockUI").add("body > .blockUI"):d.find(">.blockUI"),o.cursorReset&&(r.length>1&&(r[1].style.cursor=o.cursorReset),r.length>2&&(r[2].style.cursor=o.cursorReset)),l&&(p=b=null),o.fadeOut?(s=r.length,r.stop().fadeOut(o.fadeOut,function(){0==--s&&n(r,a,o,t)})):n(r,a,o,t)}function n(t,o,n,i){var s=e(i);if(!s.data("blockUI.isBlocked")){t.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),o&&o.el&&(o.el.style.display=o.display,o.el.style.position=o.position,o.el.style.cursor="default",o.parent&&o.parent.appendChild(o.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof n.onUnblock&&n.onUnblock(i,n);var l=e(document.body),d=l.width(),a=l[0].style.width;l.width(d-1).width(d),l[0].style.width=a}}function i(t,o,n){var i=o==window,l=e(o);if((t||(!i||p)&&(i||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",t),i&&n.bindEvents&&(!t||n.showOverlay))){var d="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(d,n,s):e(document).unbind(d,s)}}function s(t){if("keydown"===t.type&&t.keyCode&&9==t.keyCode&&p&&t.data.constrainTabKey){var o=b,n=!t.shiftKey&&t.target===o[o.length-1],i=t.shiftKey&&t.target===o[0];if(n||i)return setTimeout(function(){l(i)},10),!1}var s=t.data,d=e(t.target);return d.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(t),d.parents("div."+s.blockMsgClass).length>0||0===d.parents().children().filter("div.blockUI").length}function l(e){if(b){var t=b[!0===e?b.length-1:0];t&&t.focus()}}function d(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-a(n,"borderLeftWidth"),l=(n.offsetHeight-e.offsetHeight)/2-a(n,"borderTopWidth");t&&(i.left=s>0?s+"px":"0"),o&&(i.top=l>0?l+"px":"0")}function a(t,o){return parseInt(e.css(t,o),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),f=(document.documentMode,e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){t(window,e)},e.unblockUI=function(e){o(window,e)},e.growlUI=function(t,o,n,i){var s=e('<div class="growlUI"></div>');t&&s.append("<h1>"+t+"</h1>"),o&&s.append("<h2>"+o+"</h2>"),n===undefined&&(n=3e3);var l=function(t){t=t||{},e.blockUI({message:s,fadeIn:"undefined"!=typeof t.fadeIn?t.fadeIn:700,fadeOut:"undefined"!=typeof t.fadeOut?t.fadeOut:1e3,timeout:"undefined"!=typeof t.timeout?t.timeout:n,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};l();s.css("opacity");s.mouseover(function(){l({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop(),t.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(o){if(this[0]===window)return e.blockUI(o),this;var n=e.extend({},e.blockUI.defaults,o||{});return this.each(function(){var t=e(this);n.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,t(this,o)})},e.fn.unblock=function(t){return this[0]===window?(e.unblockUI(t),this):this.each(function(){o(this,t)})},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var p=null,b=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(m){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var f="";for(var s in i)i[s]&&(f+="; "+s,!0!==i[s]&&(f+="="+i[s]));return document.cookie=n+"="+r+f}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");'"'===C.charAt(0)&&(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(m){}if(n===g){c=C;break}n||(c[g]=C)}catch(m){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});jQuery(function(o){o(".woocommerce-ordering").on("change","select.orderby",function(){o(this).closest("form").submit()}),o("input.qty:not(.product-quantity input.qty)").each(function(){var e=parseFloat(o(this).attr("min"));e>=0&&parseFloat(o(this).val())<e&&o(this).val(e)}),jQuery(".woocommerce-store-notice__dismiss-link").click(function(){Cookies.set("store_notice","hidden",{path:"/"}),jQuery(".woocommerce-store-notice").hide()}),"hidden"===Cookies.get("store_notice")?jQuery(".woocommerce-store-notice").hide():jQuery(".woocommerce-store-notice").show()});jQuery(function(e){function t(){o&&sessionStorage.setItem("wc_cart_created",(new Date).getTime())}function n(e){o&&(localStorage.setItem(a,e),sessionStorage.setItem(a,e))}function r(){e.ajax(s)}if("undefined"==typeof wc_cart_fragments_params)return!1;var o=!0,a=wc_cart_fragments_params.cart_hash_key;try{o="sessionStorage"in window&&null!==window.sessionStorage,window.sessionStorage.setItem("wc","test"),window.sessionStorage.removeItem("wc"),window.localStorage.setItem("wc","test"),window.localStorage.removeItem("wc")}catch(w){o=!1}var s={url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",success:function(r){r&&r.fragments&&(e.each(r.fragments,function(t,n){e(t).replaceWith(n)}),o&&(sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(r.fragments)),n(r.cart_hash),r.cart_hash&&t()),e(document.body).trigger("wc_fragments_refreshed"))}};if(o){var i=null;e(document.body).on("wc_fragment_refresh updated_wc_div",function(){r()}),e(document.body).on("added_to_cart removed_from_cart",function(e,r,o){var s=sessionStorage.getItem(a);null!==s&&s!==undefined&&""!==s||t(),sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(r)),n(o)}),e(document.body).on("wc_fragments_refreshed",function(){clearTimeout(i),i=setTimeout(r,864e5)}),e(window).on("storage onstorage",function(e){a===e.originalEvent.key&&localStorage.getItem(a)!==sessionStorage.getItem(a)&&r()}),e(window).on("pageshow",function(t){t.originalEvent.persisted&&(e(".widget_shopping_cart_content").empty(),e(document.body).trigger("wc_fragment_refresh"))});try{var c=e.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),_=sessionStorage.getItem(a),g=Cookies.get("woocommerce_cart_hash"),m=sessionStorage.getItem("wc_cart_created");if(null!==_&&_!==undefined&&""!==_||(_=""),null!==g&&g!==undefined&&""!==g||(g=""),_&&(null===m||m===undefined||""===m))throw"No cart_created";if(m){var d=1*m+864e5,f=(new Date).getTime();if(d<f)throw"Fragment expired";i=setTimeout(r,d-f)}if(!c||!c["div.widget_shopping_cart_content"]||_!==g)throw"No fragment";e.each(c,function(t,n){e(t).replaceWith(n)}),e(document.body).trigger("wc_fragments_loaded")}catch(w){r()}}else r();Cookies.get("woocommerce_items_in_cart")>0?e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show():e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(),e(document.body).on("adding_to_cart",function(){e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()})});/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(a){var e,t,n,i;function r(e,t){var n,i,r=e.nodeName.toLowerCase();return"area"===r?(i=(n=e.parentNode).name,!(!e.href||!i||"map"!==n.nodeName.toLowerCase())&&(!!(i=a("img[usemap='#"+i+"']")[0])&&o(i))):(/^(input|select|textarea|button|object)$/.test(r)?!e.disabled:"a"===r&&e.href||t)&&o(e)}function o(e){return a.expr.filters.visible(e)&&!a(e).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}a.ui=a.ui||{},a.extend(a.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({scrollParent:function(e){var t=this.css("position"),n="absolute"===t,i=e?/(auto|scroll|hidden)/:/(auto|scroll)/,e=this.parents().filter(function(){var e=a(this);return(!n||"static"!==e.css("position"))&&i.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==t&&e.length?e:a(this[0].ownerDocument||document)},uniqueId:(e=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(t){return function(e){return!!a.data(e,t)}}):function(e,t,n){return!!a.data(e,n[3])},focusable:function(e){return r(e,!isNaN(a.attr(e,"tabindex")))},tabbable:function(e){var t=a.attr(e,"tabindex"),n=isNaN(t);return(n||0<=t)&&r(e,!n)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(e,n){var r="Width"===n?["Left","Right"]:["Top","Bottom"],i=n.toLowerCase(),o={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};function s(e,t,n,i){return a.each(r,function(){t-=parseFloat(a.css(e,"padding"+this))||0,n&&(t-=parseFloat(a.css(e,"border"+this+"Width"))||0),i&&(t-=parseFloat(a.css(e,"margin"+this))||0)}),t}a.fn["inner"+n]=function(e){return void 0===e?o["inner"+n].call(this):this.each(function(){a(this).css(i,s(this,e)+"px")})},a.fn["outer"+n]=function(e,t){return"number"!=typeof e?o["outer"+n].call(this,e):this.each(function(){a(this).css(i,s(this,e,!0,t)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=(t=a.fn.removeData,function(e){return arguments.length?t.call(this,a.camelCase(e)):t.call(this)})),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.fn.extend({focus:(i=a.fn.focus,function(t,n){return"number"==typeof t?this.each(function(){var e=this;setTimeout(function(){a(e).focus(),n&&n.call(e)},t)}):i.apply(this,arguments)}),disableSelection:(n="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.bind(n+".ui-disableSelection",function(e){e.preventDefault()})}),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(e){if(void 0!==e)return this.css("zIndex",e);if(this.length)for(var t,n,i=a(this[0]);i.length&&i[0]!==document;){if(t=i.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(n=parseInt(i.css("zIndex"),10),!isNaN(n)&&0!==n))return n;i=i.parent()}return 0}}),a.ui.plugin={add:function(e,t,n){var i,r=a.ui[e].prototype;for(i in n)r.plugins[i]=r.plugins[i]||[],r.plugins[i].push([t,n[i]])},call:function(e,t,n,i){var r,o=e.plugins[t];if(o&&(i||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(r=0;r<o.length;r++)e.options[o[r][0]]&&o[r][1].apply(e.element,n)}}});;/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);(function(window,document,$,undefined){'use strict';if(!$){return}
if($.fn.fancybox){if('console' in window){console.log('fancyBox already initialized')}
return}
var defaults={loop:!1,margin:[44,0],gutter:50,keyboard:!0,arrows:!0,infobar:!0,toolbar:!0,buttons:['slideShow','fullScreen','thumbs','share','close'],idleTime:3,smallBtn:'auto',protect:!1,modal:!1,image:{preload:"auto"},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,css:{},attr:{scrolling:'auto'}},defaultType:'image',animationEffect:"zoom",animationDuration:500,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:'',baseClass:'',baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1">'+'<div class="fancybox-bg"></div>'+'<div class="fancybox-inner">'+'<div class="fancybox-infobar">'+'<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>'+'</div>'+'<div class="fancybox-toolbar">{{buttons}}</div>'+'<div class="fancybox-navigation">{{arrows}}</div>'+'<div class="fancybox-stage"></div>'+'<div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div>'+'</div>'+'</div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}<p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" />'+'</svg>'+'</a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" />'+'</svg>'+'</button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M10,10 L30,30 M30,10 L10,30" />'+'</svg>'+'</button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path>'+'</svg>'+'</button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path>'+'</svg>'+'</button>'},parentEl:'body',autoFocus:!1,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1,},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:4000},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:'.fancybox-container',axis:'y'},wheel:'auto',onInit:$.noop,beforeLoad:$.noop,afterLoad:$.noop,beforeShow:$.noop,afterShow:$.noop,beforeClose:$.noop,afterClose:$.noop,onActivate:$.noop,onDeactivate:$.noop,clickContent:function(current,event){return current.type==='image'?'zoom':!1},clickSlide:'close',clickOutside:'close',dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{idleTime:!1,margin:0,clickContent:function(current,event){return current.type==='image'?'toggleControls':!1},clickSlide:function(current,event){return current.type==='image'?'toggleControls':'close'},dblclickContent:function(current,event){return current.type==='image'?'zoom':!1},dblclickSlide:function(current,event){return current.type==='image'?'zoom':!1}},lang:'en',i18n:{'en':{CLOSE:'Close',NEXT:'Next',PREV:'Previous',ERROR:'The requested content cannot be loaded. <br/> Please try again later.',PLAY_START:'Start slideshow',PLAY_STOP:'Pause slideshow',FULL_SCREEN:'Full screen',THUMBS:'Thumbnails',DOWNLOAD:'Download',SHARE:'Share',ZOOM:'Zoom'},'de':{CLOSE:'Schliessen',NEXT:'Weiter',PREV:'Zurück',ERROR:'Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.',PLAY_START:'Diaschau starten',PLAY_STOP:'Diaschau beenden',FULL_SCREEN:'Vollbild',THUMBS:'Vorschaubilder',DOWNLOAD:'Herunterladen',SHARE:'Teilen',ZOOM:'Maßstab'}}};var $W=$(window);var $D=$(document);var called=0;var isQuery=function(obj){return obj&&obj.hasOwnProperty&&obj instanceof $};var requestAFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(callback){return window.setTimeout(callback,1000/60)}})();var transitionEnd=(function(){var t,el=document.createElement("fakeelement");var transitions={"transition":"transitionend","OTransition":"oTransitionEnd","MozTransition":"transitionend","WebkitTransition":"webkitTransitionEnd"};for(t in transitions){if(el.style[t]!==undefined){return transitions[t]}}
return'transitionend'})();var forceRedraw=function($el){return($el&&$el.length&&$el[0].offsetHeight)};var FancyBox=function(content,opts,index){var self=this;self.opts=$.extend(!0,{index:index},$.fancybox.defaults,opts||{});if($.fancybox.isMobile){self.opts=$.extend(!0,{},self.opts,self.opts.mobile)}
if(opts&&$.isArray(opts.buttons)){self.opts.buttons=opts.buttons}
self.id=self.opts.id||++called;self.group=[];self.currIndex=parseInt(self.opts.index,10)||0;self.prevIndex=null;self.prevPos=null;self.currPos=0;self.firstRun=null;self.createGroup(content);if(!self.group.length){return}
self.$lastFocus=$(document.activeElement).blur();self.slides={};self.init()};$.extend(FancyBox.prototype,{init:function(){var self=this,firstItem=self.group[self.currIndex],firstItemOpts=firstItem.opts,scrollbarWidth=$.fancybox.scrollbarWidth,$scrollDiv,$container,buttonStr;self.scrollTop=$D.scrollTop();self.scrollLeft=$D.scrollLeft();if(!$.fancybox.getInstance()){$('body').addClass('fancybox-active');if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream){if(firstItem.type!=='image'){$('body').css('top',$('body').scrollTop()*-1).addClass('fancybox-iosfix')}}else if(!$.fancybox.isMobile&&document.body.scrollHeight>window.innerHeight){if(scrollbarWidth===undefined){$scrollDiv=$('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo('body');scrollbarWidth=$.fancybox.scrollbarWidth=$scrollDiv[0].offsetWidth-$scrollDiv[0].clientWidth;$scrollDiv.remove()}
$('head').append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: '+scrollbarWidth+'px; }</style>');$('body').addClass('compensate-for-scrollbar')}}
buttonStr='';$.each(firstItemOpts.buttons,function(index,value){buttonStr+=(firstItemOpts.btnTpl[value]||'')});$container=$(self.translate(self,firstItemOpts.baseTpl.replace('\{\{buttons\}\}',buttonStr).replace('\{\{arrows\}\}',firstItemOpts.btnTpl.arrowLeft+firstItemOpts.btnTpl.arrowRight))).attr('id','fancybox-container-'+self.id).addClass('fancybox-is-hidden').addClass(firstItemOpts.baseClass).data('FancyBox',self).appendTo(firstItemOpts.parentEl);self.$refs={container:$container};['bg','inner','infobar','toolbar','stage','caption','navigation'].forEach(function(item){self.$refs[item]=$container.find('.fancybox-'+item)});self.trigger('onInit');self.activate();self.jumpTo(self.currIndex)},translate:function(obj,str){var arr=obj.opts.i18n[obj.opts.lang];return str.replace(/\{\{(\w+)\}\}/g,function(match,n){var value=arr[n];if(value===undefined){return match}
return value})},createGroup:function(content){var self=this;var items=$.makeArray(content);$.each(items,function(i,item){var obj={},opts={},$item,type,found,src,srcParts;if($.isPlainObject(item)){obj=item;opts=item.opts||item}else if($.type(item)==='object'&&$(item).length){$item=$(item);opts=$item.data();opts=$.extend({},opts,opts.options||{});opts.$orig=$item;obj.src=opts.src||$item.attr('href');if(!obj.type&&!obj.src){obj.type='inline';obj.src=item}}else{obj={type:'html',src:item+''}}
obj.opts=$.extend(!0,{},self.opts,opts);if($.isArray(opts.buttons)){obj.opts.buttons=opts.buttons}
type=obj.type||obj.opts.type;src=obj.src||'';if(!type&&src){if(src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)){type='image'}else if(src.match(/\.(pdf)((\?|#).*)?$/i)){type='pdf'}else if(found=src.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)){type='video';if(!obj.opts.videoFormat){obj.opts.videoFormat='video/'+(found[1]==='ogv'?'ogg':found[1])}}else if(src.charAt(0)==='#'){type='inline'}}
if(type){obj.type=type}else{self.trigger('objectNeedsType',obj)}
obj.index=self.group.length;if(obj.opts.$orig&&!obj.opts.$orig.length){delete obj.opts.$orig}
if(!obj.opts.$thumb&&obj.opts.$orig){obj.opts.$thumb=obj.opts.$orig.find('img:first')}
if(obj.opts.$thumb&&!obj.opts.$thumb.length){delete obj.opts.$thumb}
if($.type(obj.opts.caption)==='function'){obj.opts.caption=obj.opts.caption.apply(item,[self,obj])}
if($.type(self.opts.caption)==='function'){obj.opts.caption=self.opts.caption.apply(item,[self,obj])}
if(!(obj.opts.caption instanceof $)){obj.opts.caption=obj.opts.caption===undefined?'':obj.opts.caption+''}
if(type==='ajax'){srcParts=src.split(/\s+/,2);if(srcParts.length>1){obj.src=srcParts.shift();obj.opts.filter=srcParts.shift()}}
if(obj.opts.smallBtn=='auto'){if($.inArray(type,['html','inline','ajax'])>-1){obj.opts.toolbar=!1;obj.opts.smallBtn=!0}else{obj.opts.smallBtn=!1}}
if(type==='pdf'){obj.type='iframe';obj.opts.iframe.preload=!1}
if(obj.opts.modal){obj.opts=$.extend(!0,obj.opts,{infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})}
self.group.push(obj)})},addEvents:function(){var self=this;self.removeEvents();self.$refs.container.on('click.fb-close','[data-fancybox-close]',function(e){e.stopPropagation();e.preventDefault();self.close(e)}).on('click.fb-prev touchend.fb-prev','[data-fancybox-prev]',function(e){e.stopPropagation();e.preventDefault();self.previous()}).on('click.fb-next touchend.fb-next','[data-fancybox-next]',function(e){e.stopPropagation();e.preventDefault();self.next()}).on('click.fb','[data-fancybox-zoom]',function(e){self[self.isScaledDown()?'scaleToActual':'scaleToFit']()});$W.on('orientationchange.fb resize.fb',function(e){if(e&&e.originalEvent&&e.originalEvent.type==="resize"){requestAFrame(function(){self.update()})}else{self.$refs.stage.hide();setTimeout(function(){self.$refs.stage.show();self.update()},600)}});$D.on('focusin.fb',function(e){var instance=$.fancybox?$.fancybox.getInstance():null;if(instance.isClosing||!instance.current||!instance.current.opts.trapFocus||$(e.target).hasClass('fancybox-container')||$(e.target).is(document)){return}
if(instance&&$(e.target).css('position')!=='fixed'&&!instance.$refs.container.has(e.target).length){e.stopPropagation();instance.focus();$W.scrollTop(self.scrollTop).scrollLeft(self.scrollLeft)}});$D.on('keydown.fb',function(e){var current=self.current,keycode=e.keyCode||e.which;if(!current||!current.opts.keyboard){return}
if($(e.target).is('input')||$(e.target).is('textarea')){return}
if(keycode===8||keycode===27){e.preventDefault();self.close(e);return}
if(keycode===37||keycode===38){e.preventDefault();self.previous();return}
if(keycode===39||keycode===40){e.preventDefault();self.next();return}
self.trigger('afterKeydown',e,keycode)});if(self.group[self.currIndex].opts.idleTime){self.idleSecondsCounter=0;$D.on('mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle',function(e){self.idleSecondsCounter=0;if(self.isIdle){self.showControls()}
self.isIdle=!1});self.idleInterval=window.setInterval(function(){self.idleSecondsCounter++;if(self.idleSecondsCounter>=self.group[self.currIndex].opts.idleTime&&!self.isDragging){self.isIdle=!0;self.idleSecondsCounter=0;self.hideControls()}},1000)}},removeEvents:function(){var self=this;$W.off('orientationchange.fb resize.fb');$D.off('focusin.fb keydown.fb .fb-idle');this.$refs.container.off('.fb-close .fb-prev .fb-next');if(self.idleInterval){window.clearInterval(self.idleInterval);self.idleInterval=null}},previous:function(duration){return this.jumpTo(this.currPos-1,duration)},next:function(duration){return this.jumpTo(this.currPos+1,duration)},jumpTo:function(pos,duration,slide){var self=this,firstRun,loop,current,previous,canvasWidth,currentPos,transitionProps;var groupLen=self.group.length;if(self.isDragging||self.isClosing||(self.isAnimating&&self.firstRun)){return}
pos=parseInt(pos,10);loop=self.current?self.current.opts.loop:self.opts.loop;if(!loop&&(pos<0||pos>=groupLen)){return!1}
firstRun=self.firstRun=(self.firstRun===null);if(groupLen<2&&!firstRun&&!!self.isDragging){return}
previous=self.current;self.prevIndex=self.currIndex;self.prevPos=self.currPos;current=self.createSlide(pos);if(groupLen>1){if(loop||current.index>0){self.createSlide(pos-1)}
if(loop||current.index<groupLen-1){self.createSlide(pos+1)}}
self.current=current;self.currIndex=current.index;self.currPos=current.pos;self.trigger('beforeShow',firstRun);self.updateControls();currentPos=$.fancybox.getTranslate(current.$slide);current.isMoved=(currentPos.left!==0||currentPos.top!==0)&&!current.$slide.hasClass('fancybox-animated');current.forcedDuration=undefined;if($.isNumeric(duration)){current.forcedDuration=duration}else{duration=current.opts[firstRun?'animationDuration':'transitionDuration']}
duration=parseInt(duration,10);if(firstRun){if(current.opts.animationEffect&&duration){self.$refs.container.css('transition-duration',duration+'ms')}
self.$refs.container.removeClass('fancybox-is-hidden');forceRedraw(self.$refs.container);self.$refs.container.addClass('fancybox-is-open');current.$slide.addClass('fancybox-slide--current');self.loadSlide(current);self.preload('image');return}
$.each(self.slides,function(index,slide){$.fancybox.stop(slide.$slide)});current.$slide.removeClass('fancybox-slide--next fancybox-slide--previous').addClass('fancybox-slide--current');if(current.isMoved){canvasWidth=Math.round(current.$slide.width());$.each(self.slides,function(index,slide){var pos=slide.pos-current.pos;$.fancybox.animate(slide.$slide,{top:0,left:(pos*canvasWidth)+(pos*slide.opts.gutter)},duration,function(){slide.$slide.removeAttr('style').removeClass('fancybox-slide--next fancybox-slide--previous');if(slide.pos===self.currPos){current.isMoved=!1;self.complete()}})})}else{self.$refs.stage.children().removeAttr('style')}
if(current.isLoaded){self.revealContent(current)}else{self.loadSlide(current)}
self.preload('image');if(previous.pos===current.pos){return}
transitionProps='fancybox-slide--'+(previous.pos>current.pos?'next':'previous');previous.$slide.removeClass('fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous');previous.isComplete=!1;if(!duration||(!current.isMoved&&!current.opts.transitionEffect)){return}
if(current.isMoved){previous.$slide.addClass(transitionProps)}else{transitionProps='fancybox-animated '+transitionProps+' fancybox-fx-'+current.opts.transitionEffect;$.fancybox.animate(previous.$slide,transitionProps,duration,function(){previous.$slide.removeClass(transitionProps).removeAttr('style')})}},createSlide:function(pos){var self=this;var $slide;var index;index=pos%self.group.length;index=index<0?self.group.length+index:index;if(!self.slides[pos]&&self.group[index]){$slide=$('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);self.slides[pos]=$.extend(!0,{},self.group[index],{pos:pos,$slide:$slide,isLoaded:!1,});self.updateSlide(self.slides[pos])}
return self.slides[pos]},scaleToActual:function(x,y,duration){var self=this;var current=self.current;var $what=current.$content;var imgPos,posX,posY,scaleX,scaleY;var canvasWidth=parseInt(current.$slide.width(),10);var canvasHeight=parseInt(current.$slide.height(),10);var newImgWidth=current.width;var newImgHeight=current.height;if(!(current.type=='image'&&!current.hasError)||!$what||self.isAnimating){return}
$.fancybox.stop($what);self.isAnimating=!0;x=x===undefined?canvasWidth*0.5:x;y=y===undefined?canvasHeight*0.5:y;imgPos=$.fancybox.getTranslate($what);scaleX=newImgWidth/imgPos.width;scaleY=newImgHeight/imgPos.height;posX=(canvasWidth*0.5-newImgWidth*0.5);posY=(canvasHeight*0.5-newImgHeight*0.5);if(newImgWidth>canvasWidth){posX=imgPos.left*scaleX-((x*scaleX)-x);if(posX>0){posX=0}
if(posX<canvasWidth-newImgWidth){posX=canvasWidth-newImgWidth}}
if(newImgHeight>canvasHeight){posY=imgPos.top*scaleY-((y*scaleY)-y);if(posY>0){posY=0}
if(posY<canvasHeight-newImgHeight){posY=canvasHeight-newImgHeight}}
self.updateCursor(newImgWidth,newImgHeight);$.fancybox.animate($what,{top:posY,left:posX,scaleX:scaleX,scaleY:scaleY},duration||330,function(){self.isAnimating=!1});if(self.SlideShow&&self.SlideShow.isActive){self.SlideShow.stop()}},scaleToFit:function(duration){var self=this;var current=self.current;var $what=current.$content;var end;if(!(current.type=='image'&&!current.hasError)||!$what||self.isAnimating){return}
$.fancybox.stop($what);self.isAnimating=!0;end=self.getFitPos(current);self.updateCursor(end.width,end.height);$.fancybox.animate($what,{top:end.top,left:end.left,scaleX:end.width/$what.width(),scaleY:end.height/$what.height()},duration||330,function(){self.isAnimating=!1})},getFitPos:function(slide){var self=this;var $what=slide.$content;var imgWidth=slide.width;var imgHeight=slide.height;var margin=slide.opts.margin;var canvasWidth,canvasHeight,minRatio,width,height;if(!$what||!$what.length||(!imgWidth&&!imgHeight)){return!1}
if($.type(margin)==="number"){margin=[margin,margin]}
if(margin.length==2){margin=[margin[0],margin[1],margin[0],margin[1]]}
canvasWidth=parseInt(self.$refs.stage.width(),10)-(margin[1]+margin[3]);canvasHeight=parseInt(self.$refs.stage.height(),10)-(margin[0]+margin[2]);minRatio=Math.min(1,canvasWidth/imgWidth,canvasHeight/imgHeight);width=Math.floor(minRatio*imgWidth);height=Math.floor(minRatio*imgHeight);return{top:Math.floor((canvasHeight-height)*0.5)+margin[0],left:Math.floor((canvasWidth-width)*0.5)+margin[3],width:width,height:height}},update:function(){var self=this;$.each(self.slides,function(key,slide){self.updateSlide(slide)})},updateSlide:function(slide,duration){var self=this,$what=slide&&slide.$content;if($what&&(slide.width||slide.height)){self.isAnimating=!1;$.fancybox.stop($what);$.fancybox.setTranslate($what,self.getFitPos(slide));if(slide.pos===self.currPos){self.updateCursor()}}
slide.$slide.trigger('refresh');self.trigger('onUpdate',slide)},centerSlide:function(slide,duration){var self=this,canvasWidth,pos;if(self.current){canvasWidth=Math.round(slide.$slide.width());pos=slide.pos-self.current.pos;$.fancybox.animate(slide.$slide,{top:0,left:(pos*canvasWidth)+(pos*slide.opts.gutter),opacity:1},duration===undefined?0:duration,null,!1)}},updateCursor:function(nextWidth,nextHeight){var self=this;var isScaledDown;var $container=self.$refs.container.removeClass('fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut');if(!self.current||self.isClosing){return}
if(self.isZoomable()){$container.addClass('fancybox-is-zoomable');if(nextWidth!==undefined&&nextHeight!==undefined){isScaledDown=nextWidth<self.current.width&&nextHeight<self.current.height}else{isScaledDown=self.isScaledDown()}
if(isScaledDown){$container.addClass('fancybox-can-zoomIn')}else{if(self.current.opts.touch){$container.addClass('fancybox-can-drag')}else{$container.addClass('fancybox-can-zoomOut')}}}else if(self.current.opts.touch){$container.addClass('fancybox-can-drag')}},isZoomable:function(){var self=this;var current=self.current;var fitPos;if(!current||self.isClosing){return}
if(current.type==='image'&&current.isLoaded&&!current.hasError&&(current.opts.clickContent==='zoom'||($.isFunction(current.opts.clickContent)&&current.opts.clickContent(current)==="zoom"))){fitPos=self.getFitPos(current);if(current.width>fitPos.width||current.height>fitPos.height){return!0}}
return!1},isScaledDown:function(){var self=this;var current=self.current;var $what=current.$content;var rez=!1;if($what){rez=$.fancybox.getTranslate($what);rez=rez.width<current.width||rez.height<current.height}
return rez},canPan:function(){var self=this;var current=self.current;var $what=current.$content;var rez=!1;if($what){rez=self.getFitPos(current);rez=Math.abs($what.width()-rez.width)>1||Math.abs($what.height()-rez.height)>1}
return rez},loadSlide:function(slide){var self=this,type,$slide;var ajaxLoad;if(slide.isLoading){return}
if(slide.isLoaded){return}
slide.isLoading=!0;self.trigger('beforeLoad',slide);type=slide.type;$slide=slide.$slide;$slide.off('refresh').trigger('onReset').addClass('fancybox-slide--'+(type||'unknown')).addClass(slide.opts.slideClass);switch(type){case 'image':self.setImage(slide);break;case 'iframe':self.setIframe(slide);break;case 'html':self.setContent(slide,slide.src||slide.content);break;case 'inline':if($(slide.src).length){self.setContent(slide,$(slide.src))}else{self.setError(slide)}
break;case 'ajax':self.showLoading(slide);ajaxLoad=$.ajax($.extend({},slide.opts.ajax.settings,{url:slide.src,success:function(data,textStatus){if(textStatus==='success'){self.setContent(slide,data)}},error:function(jqXHR,textStatus){if(jqXHR&&textStatus!=='abort'){self.setError(slide)}}}));$slide.one('onReset',function(){ajaxLoad.abort()});break;case 'video':self.setContent(slide,'<video controls>'+'<source src="'+slide.src+'" type="'+slide.opts.videoFormat+'">'+'Your browser doesn\'t support HTML5 video'+'</video>');break;default:self.setError(slide);break}
return!0},setImage:function(slide){var self=this;var srcset=slide.opts.srcset||slide.opts.image.srcset;var found,temp,pxRatio,windowWidth;if(srcset){pxRatio=window.devicePixelRatio||1;windowWidth=window.innerWidth*pxRatio;temp=srcset.split(',').map(function(el){var ret={};el.trim().split(/\s+/).forEach(function(el,i){var value=parseInt(el.substring(0,el.length-1),10);if(i===0){return(ret.url=el)}
if(value){ret.value=value;ret.postfix=el[el.length-1]}});return ret});temp.sort(function(a,b){return a.value-b.value});for(var j=0;j<temp.length;j++){var el=temp[j];if((el.postfix==='w'&&el.value>=windowWidth)||(el.postfix==='x'&&el.value>=pxRatio)){found=el;break}}
if(!found&&temp.length){found=temp[temp.length-1]}
if(found){slide.src=found.url;if(slide.width&&slide.height&&found.postfix=='w'){slide.height=(slide.width/slide.height)*found.value;slide.width=found.value}}}
slide.$content=$('<div class="fancybox-image-wrap"></div>').addClass('fancybox-is-hidden').appendTo(slide.$slide);if(slide.opts.preload!==!1&&slide.opts.width&&slide.opts.height&&(slide.opts.thumb||slide.opts.$thumb)){slide.width=slide.opts.width;slide.height=slide.opts.height;slide.$ghost=$('<img />').one('error',function(){$(this).remove();slide.$ghost=null;self.setBigImage(slide)}).one('load',function(){self.afterLoad(slide);self.setBigImage(slide)}).addClass('fancybox-image').appendTo(slide.$content).attr('src',slide.opts.thumb||slide.opts.$thumb.attr('src'))}else{self.setBigImage(slide)}},setBigImage:function(slide){var self=this;var $img=$('<img />');slide.$image=$img.one('error',function(){self.setError(slide)}).one('load',function(){clearTimeout(slide.timouts);slide.timouts=null;if(self.isClosing){return}
slide.width=slide.opts.width||this.naturalWidth;slide.height=slide.opts.height||this.naturalHeight;if(slide.opts.image.srcset){$img.attr('sizes','100vw').attr('srcset',slide.opts.image.srcset)}
self.hideLoading(slide);if(slide.$ghost){slide.timouts=setTimeout(function(){slide.timouts=null;slide.$ghost.hide()},Math.min(300,Math.max(1000,slide.height/1600)))}else{self.afterLoad(slide)}}).addClass('fancybox-image').attr('src',slide.src).appendTo(slide.$content);if(($img[0].complete||$img[0].readyState=="complete")&&$img[0].naturalWidth&&$img[0].naturalHeight){$img.trigger('load')}else if($img[0].error){$img.trigger('error')}else{slide.timouts=setTimeout(function(){if(!$img[0].complete&&!slide.hasError){self.showLoading(slide)}},100)}},setIframe:function(slide){var self=this,opts=slide.opts.iframe,$slide=slide.$slide,$iframe;slide.$content=$('<div class="fancybox-content'+(opts.preload?' fancybox-is-hidden':'')+'"></div>').css(opts.css).appendTo($slide);$iframe=$(opts.tpl.replace(/\{rnd\}/g,new Date().getTime())).attr(opts.attr).appendTo(slide.$content);if(opts.preload){self.showLoading(slide);$iframe.on('load.fb error.fb',function(e){this.isReady=1;slide.$slide.trigger('refresh');self.afterLoad(slide)});$slide.on('refresh.fb',function(){var $wrap=slide.$content,frameWidth=opts.css.width,frameHeight=opts.css.height,scrollWidth,$contents,$body;if($iframe[0].isReady!==1){return}
try{$contents=$iframe.contents();$body=$contents.find('body')}catch(ignore){}
if($body&&$body.length){if(frameWidth===undefined){scrollWidth=$iframe[0].contentWindow.document.documentElement.scrollWidth;frameWidth=Math.ceil($body.outerWidth(!0)+($wrap.width()-scrollWidth));frameWidth+=$wrap.outerWidth()-$wrap.innerWidth()}
if(frameHeight===undefined){frameHeight=Math.ceil($body.outerHeight(!0));frameHeight+=$wrap.outerHeight()-$wrap.innerHeight()}
if(frameWidth){$wrap.width(frameWidth)}
if(frameHeight){$wrap.height(frameHeight)}}
$wrap.removeClass('fancybox-is-hidden')})}else{this.afterLoad(slide)}
$iframe.attr('src',slide.src);if(slide.opts.smallBtn===!0){slide.$content.prepend(self.translate(slide,slide.opts.btnTpl.smallBtn))}
$slide.one('onReset',function(){try{$(this).find('iframe').hide().attr('src','//about:blank')}catch(ignore){}
$(this).empty();slide.isLoaded=!1})},setContent:function(slide,content){var self=this;if(self.isClosing){return}
self.hideLoading(slide);slide.$slide.empty();if(isQuery(content)&&content.parent().length){content.parent('.fancybox-slide--inline').trigger('onReset');slide.$placeholder=$('<div></div>').hide().insertAfter(content);content.css('display','inline-block')}else if(!slide.hasError){if($.type(content)==='string'){content=$('<div>').append($.trim(content)).contents();if(content[0].nodeType===3){content=$('<div>').html(content)}}
if(slide.opts.filter){content=$('<div>').html(content).find(slide.opts.filter)}}
slide.$slide.one('onReset',function(){$(this).find('video,audio').trigger('pause');if(slide.$placeholder){slide.$placeholder.after(content.hide()).remove();slide.$placeholder=null}
if(slide.$smallBtn){slide.$smallBtn.remove();slide.$smallBtn=null}
if(!slide.hasError){$(this).empty();slide.isLoaded=!1}});slide.$content=$(content).appendTo(slide.$slide);this.afterLoad(slide)},setError:function(slide){slide.hasError=!0;slide.$slide.removeClass('fancybox-slide--'+slide.type);this.setContent(slide,this.translate(slide,slide.opts.errorTpl))},showLoading:function(slide){var self=this;slide=slide||self.current;if(slide&&!slide.$spinner){slide.$spinner=$(self.opts.spinnerTpl).appendTo(slide.$slide)}},hideLoading:function(slide){var self=this;slide=slide||self.current;if(slide&&slide.$spinner){slide.$spinner.remove();delete slide.$spinner}},afterLoad:function(slide){var self=this;if(self.isClosing){return}
slide.isLoading=!1;slide.isLoaded=!0;self.trigger('afterLoad',slide);self.hideLoading(slide);if(slide.opts.smallBtn&&!slide.$smallBtn){slide.$smallBtn=$(self.translate(slide,slide.opts.btnTpl.smallBtn)).appendTo(slide.$content.filter('div,form').first())}
if(slide.opts.protect&&slide.$content&&!slide.hasError){slide.$content.on('contextmenu.fb',function(e){if(e.button==2){e.preventDefault()}
return!0});if(slide.type==='image'){$('<div class="fancybox-spaceball"></div>').appendTo(slide.$content)}}
self.revealContent(slide)},revealContent:function(slide){var self=this;var $slide=slide.$slide;var effect,effectClassName,duration,opacity,end,start=!1;effect=slide.opts[self.firstRun?'animationEffect':'transitionEffect'];duration=slide.opts[self.firstRun?'animationDuration':'transitionDuration'];duration=parseInt(slide.forcedDuration===undefined?duration:slide.forcedDuration,10);if(slide.isMoved||slide.pos!==self.currPos||!duration){effect=!1}
if(effect==='zoom'&&!(slide.pos===self.currPos&&duration&&slide.type==='image'&&!slide.hasError&&(start=self.getThumbPos(slide)))){effect='fade'}
if(effect==='zoom'){end=self.getFitPos(slide);end.scaleX=end.width/start.width;end.scaleY=end.height/start.height;delete end.width;delete end.height;opacity=slide.opts.zoomOpacity;if(opacity=='auto'){opacity=Math.abs(slide.width/slide.height-start.width/start.height)>0.1}
if(opacity){start.opacity=0.1;end.opacity=1}
$.fancybox.setTranslate(slide.$content.removeClass('fancybox-is-hidden'),start);forceRedraw(slide.$content);$.fancybox.animate(slide.$content,end,duration,function(){self.complete()});return}
self.updateSlide(slide);if(!effect){forceRedraw($slide);slide.$content.removeClass('fancybox-is-hidden');if(slide.pos===self.currPos){self.complete()}
return}
$.fancybox.stop($slide);effectClassName='fancybox-animated fancybox-slide--'+(slide.pos>=self.prevPos?'next':'previous')+' fancybox-fx-'+effect;$slide.removeAttr('style').removeClass('fancybox-slide--current fancybox-slide--next fancybox-slide--previous').addClass(effectClassName);slide.$content.removeClass('fancybox-is-hidden');forceRedraw($slide);$.fancybox.animate($slide,'fancybox-slide--current',duration,function(e){$slide.removeClass(effectClassName).removeAttr('style');if(slide.pos===self.currPos){self.complete()}},!0)},getThumbPos:function(slide){var self=this;var rez=!1;var isElementVisible=function($el){var element=$el[0];var elementRect=element.getBoundingClientRect();var parentRects=[];var visibleInAllParents;while(element.parentElement!==null){if($(element.parentElement).css('overflow')==='hidden'||$(element.parentElement).css('overflow')==='auto'){parentRects.push(element.parentElement.getBoundingClientRect())}
element=element.parentElement}
visibleInAllParents=parentRects.every(function(parentRect){var visiblePixelX=Math.min(elementRect.right,parentRect.right)-Math.max(elementRect.left,parentRect.left);var visiblePixelY=Math.min(elementRect.bottom,parentRect.bottom)-Math.max(elementRect.top,parentRect.top);return visiblePixelX>0&&visiblePixelY>0});return visibleInAllParents&&elementRect.bottom>0&&elementRect.right>0&&elementRect.left<$(window).width()&&elementRect.top<$(window).height()};var $thumb=slide.opts.$thumb;var thumbPos=$thumb?$thumb.offset():0;var slidePos;if(thumbPos&&$thumb[0].ownerDocument===document&&isElementVisible($thumb)){slidePos=self.$refs.stage.offset();rez={top:thumbPos.top-slidePos.top+parseFloat($thumb.css("border-top-width")||0),left:thumbPos.left-slidePos.left+parseFloat($thumb.css("border-left-width")||0),width:$thumb.width(),height:$thumb.height(),scaleX:1,scaleY:1}}
return rez},complete:function(){var self=this,current=self.current,slides={},promise;if(current.isMoved||!current.isLoaded||current.isComplete){return}
current.isComplete=!0;current.$slide.siblings().trigger('onReset');self.preload('inline');forceRedraw(current.$slide);current.$slide.addClass('fancybox-slide--complete');$.each(self.slides,function(key,slide){if(slide.pos>=self.currPos-1&&slide.pos<=self.currPos+1){slides[slide.pos]=slide}else if(slide){$.fancybox.stop(slide.$slide);slide.$slide.off().remove()}});self.slides=slides;self.updateCursor();self.trigger('afterShow');current.$slide.find('video,audio').first().trigger('play');if($(document.activeElement).is('[disabled]')||(current.opts.autoFocus&&!(current.type=='image'||current.type==='iframe'))){self.focus()}},preload:function(type){var self=this,next=self.slides[self.currPos+1],prev=self.slides[self.currPos-1];if(next&&next.type===type){self.loadSlide(next)}
if(prev&&prev.type===type){self.loadSlide(prev)}},focus:function(){var current=this.current;var $el;if(this.isClosing){return}
if(current&&current.isComplete){$el=current.$slide.find('input[autofocus]:enabled:visible:first');if(!$el.length){$el=current.$slide.find('button,:input,[tabindex],a').filter(':enabled:visible:first')}}
$el=$el&&$el.length?$el:this.$refs.container;$el.focus()},activate:function(){var self=this;$('.fancybox-container').each(function(){var instance=$(this).data('FancyBox');if(instance&&instance.id!==self.id&&!instance.isClosing){instance.trigger('onDeactivate');instance.removeEvents();instance.isVisible=!1}});self.isVisible=!0;if(self.current||self.isIdle){self.update();self.updateControls()}
self.trigger('onActivate');self.addEvents()},close:function(e,d){var self=this;var current=self.current;var effect,duration;var $what,opacity,start,end;var done=function(){self.cleanUp(e)};if(self.isClosing){return!1}
self.isClosing=!0;if(self.trigger('beforeClose',e)===!1){self.isClosing=!1;requestAFrame(function(){self.update()});return!1}
self.removeEvents();if(current.timouts){clearTimeout(current.timouts)}
$what=current.$content;effect=current.opts.animationEffect;duration=$.isNumeric(d)?d:(effect?current.opts.animationDuration:0);current.$slide.off(transitionEnd).removeClass('fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated');current.$slide.siblings().trigger('onReset').remove();if(duration){self.$refs.container.removeClass('fancybox-is-open').addClass('fancybox-is-closing')}
self.hideLoading(current);self.hideControls();self.updateCursor();if(effect==='zoom'&&!(e!==!0&&$what&&duration&&current.type==='image'&&!current.hasError&&(end=self.getThumbPos(current)))){effect='fade'}
if(effect==='zoom'){$.fancybox.stop($what);start=$.fancybox.getTranslate($what);start.width=start.width*start.scaleX;start.height=start.height*start.scaleY;opacity=current.opts.zoomOpacity;if(opacity=='auto'){opacity=Math.abs(current.width/current.height-end.width/end.height)>0.1}
if(opacity){end.opacity=0}
start.scaleX=start.width/end.width;start.scaleY=start.height/end.height;start.width=end.width;start.height=end.height;$.fancybox.setTranslate(current.$content,start);forceRedraw(current.$content);$.fancybox.animate(current.$content,end,duration,done);return!0}
if(effect&&duration){if(e===!0){setTimeout(done,duration)}else{$.fancybox.animate(current.$slide.removeClass('fancybox-slide--current'),'fancybox-animated fancybox-slide--previous fancybox-fx-'+effect,duration,done)}}else{done()}
return!0},cleanUp:function(e){var self=this,$body=$('body'),instance,offset;self.current.$slide.trigger('onReset');self.$refs.container.empty().remove();self.trigger('afterClose',e);if(self.$lastFocus&&!!self.current.opts.backFocus){self.$lastFocus.focus()}
self.current=null;instance=$.fancybox.getInstance();if(instance){instance.activate()}else{$W.scrollTop(self.scrollTop).scrollLeft(self.scrollLeft);$body.removeClass('fancybox-active compensate-for-scrollbar');if($body.hasClass('fancybox-iosfix')){offset=parseInt(document.body.style.top,10);$body.removeClass('fancybox-iosfix').css('top','').scrollTop(offset*-1)}
$('#fancybox-style-noscroll').remove()}},trigger:function(name,slide){var args=Array.prototype.slice.call(arguments,1),self=this,obj=slide&&slide.opts?slide:self.current,rez;if(obj){args.unshift(obj)}else{obj=self}
args.unshift(self);if($.isFunction(obj.opts[name])){rez=obj.opts[name].apply(obj,args)}
if(rez===!1){return rez}
if(name==='afterClose'||!self.$refs){$D.trigger(name+'.fb',args)}else{self.$refs.container.trigger(name+'.fb',args)}},updateControls:function(force){var self=this;var current=self.current,index=current.index,caption=current.opts.caption,$container=self.$refs.container,$caption=self.$refs.caption;current.$slide.trigger('refresh');self.$caption=caption&&caption.length?$caption.html(caption):null;if(!self.isHiddenControls&&!self.isIdle){self.showControls()}
$container.find('[data-fancybox-count]').html(self.group.length);$container.find('[data-fancybox-index]').html(index+1);$container.find('[data-fancybox-prev]').prop('disabled',(!current.opts.loop&&index<=0));$container.find('[data-fancybox-next]').prop('disabled',(!current.opts.loop&&index>=self.group.length-1));if(current.type==='image'){$container.find('[data-fancybox-download]').attr('href',current.opts.image.src||current.src).show()}else{$container.find('[data-fancybox-download],[data-fancybox-zoom]').hide()}},hideControls:function(){this.isHiddenControls=!0;this.$refs.container.removeClass('fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav')},showControls:function(){var self=this;var opts=self.current?self.current.opts:self.opts;var $container=self.$refs.container;self.isHiddenControls=!1;self.idleSecondsCounter=0;$container.toggleClass('fancybox-show-toolbar',!!(opts.toolbar&&opts.buttons)).toggleClass('fancybox-show-infobar',!!(opts.infobar&&self.group.length>1)).toggleClass('fancybox-show-nav',!!(opts.arrows&&self.group.length>1)).toggleClass('fancybox-is-modal',!!opts.modal);if(self.$caption){$container.addClass('fancybox-show-caption ')}else{$container.removeClass('fancybox-show-caption')}},toggleControls:function(){if(this.isHiddenControls){this.showControls()}else{this.hideControls()}},});$.fancybox={version:"3.2.10",defaults:defaults,getInstance:function(command){var instance=$('.fancybox-container:not(".fancybox-is-closing"):last').data('FancyBox');var args=Array.prototype.slice.call(arguments,1);if(instance instanceof FancyBox){if($.type(command)==='string'){instance[command].apply(instance,args)}else if($.type(command)==='function'){command.apply(instance,args)}
return instance}
return!1},open:function(items,opts,index){return new FancyBox(items,opts,index)},close:function(all){var instance=this.getInstance();if(instance){instance.close();if(all===!0){this.close()}}},destroy:function(){this.close(!0);$D.off('click.fb-start')},isMobile:document.createTouch!==undefined&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:(function(){var div=document.createElement('div');return window.getComputedStyle&&window.getComputedStyle(div).getPropertyValue('transform')&&!(document.documentMode&&document.documentMode<11)}()),getTranslate:function($el){var matrix;if(!$el||!$el.length){return!1}
matrix=$el.eq(0).css('transform');if(matrix&&matrix.indexOf('matrix')!==-1){matrix=matrix.split('(')[1];matrix=matrix.split(')')[0];matrix=matrix.split(',')}else{matrix=[]}
if(matrix.length){if(matrix.length>10){matrix=[matrix[13],matrix[12],matrix[0],matrix[5]]}else{matrix=[matrix[5],matrix[4],matrix[0],matrix[3]]}
matrix=matrix.map(parseFloat)}else{matrix=[0,0,1,1];var transRegex=/\.*translate\((.*)px,(.*)px\)/i;var transRez=transRegex.exec($el.eq(0).attr('style'));if(transRez){matrix[0]=parseFloat(transRez[2]);matrix[1]=parseFloat(transRez[1])}}
return{top:matrix[0],left:matrix[1],scaleX:matrix[2],scaleY:matrix[3],opacity:parseFloat($el.css('opacity')),width:$el.width(),height:$el.height()}},setTranslate:function($el,props){var str='';var css={};if(!$el||!props){return}
if(props.left!==undefined||props.top!==undefined){str=(props.left===undefined?$el.position().left:props.left)+'px, '+(props.top===undefined?$el.position().top:props.top)+'px';if(this.use3d){str='translate3d('+str+', 0px)'}else{str='translate('+str+')'}}
if(props.scaleX!==undefined&&props.scaleY!==undefined){str=(str.length?str+' ':'')+'scale('+props.scaleX+', '+props.scaleY+')'}
if(str.length){css.transform=str}
if(props.opacity!==undefined){css.opacity=props.opacity}
if(props.width!==undefined){css.width=props.width}
if(props.height!==undefined){css.height=props.height}
return $el.css(css)},animate:function($el,to,duration,callback,leaveAnimationName){if($.isFunction(duration)){callback=duration;duration=null}
if(!$.isPlainObject(to)){$el.removeAttr('style')}
$el.on(transitionEnd,function(e){if(e&&e.originalEvent&&(!$el.is(e.originalEvent.target)||e.originalEvent.propertyName=='z-index')){return}
$.fancybox.stop($el);if($.isPlainObject(to)){if(to.scaleX!==undefined&&to.scaleY!==undefined){$el.css('transition-duration','');to.width=Math.round($el.width()*to.scaleX);to.height=Math.round($el.height()*to.scaleY);to.scaleX=1;to.scaleY=1;$.fancybox.setTranslate($el,to)}
if(leaveAnimationName===!1){$el.removeAttr('style')}}else if(leaveAnimationName!==!0){$el.removeClass(to)}
if($.isFunction(callback)){callback(e)}});if($.isNumeric(duration)){$el.css('transition-duration',duration+'ms')}
if($.isPlainObject(to)){$.fancybox.setTranslate($el,to)}else{$el.addClass(to)}
if(to.scaleX&&$el.hasClass('fancybox-image-wrap')){$el.parent().addClass('fancybox-is-scaling')}
$el.data("timer",setTimeout(function(){$el.trigger('transitionend')},duration+16))},stop:function($el){clearTimeout($el.data("timer"));$el.off('transitionend').css('transition-duration','');if($el.hasClass('fancybox-image-wrap')){$el.parent().removeClass('fancybox-is-scaling')}}};function _run(e){var $target=$(e.currentTarget),opts=e.data?e.data.options:{},value=$target.attr('data-fancybox')||'',index=0,items=[];if(e.isDefaultPrevented()){return}
e.preventDefault();if(value){items=opts.selector?$(opts.selector):(e.data?e.data.items:[]);items=items.length?items.filter('[data-fancybox="'+value+'"]'):$('[data-fancybox="'+value+'"]');index=items.index($target);if(index<0){index=0}}else{items=[$target]}
$.fancybox.open(items,opts,index)}
$.fn.fancybox=function(options){var selector;options=options||{};selector=options.selector||!1;if(selector){$('body').off('click.fb-start',selector).on('click.fb-start',selector,{options:options},_run)}else{this.off('click.fb-start').on('click.fb-start',{items:this,options:options},_run)}
return this};$D.on('click.fb-start','[data-fancybox]',_run)}(window,document,window.jQuery||jQuery));(function($){'use strict';var format=function(url,rez,params){if(!url){return}
params=params||'';if($.type(params)==="object"){params=$.param(params,!0)}
$.each(rez,function(key,value){url=url.replace('$'+key,value||'')});if(params.length){url+=(url.indexOf('?')>0?'&':'?')+params}
return url};var defaults={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:'transparent',enablejsapi:1,html5:1},paramPlace:8,type:'iframe',url:'//www.youtube.com/embed/$4',thumb:'//img.youtube.com/vi/$4/hqdefault.jpg'},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:'iframe',url:'//player.vimeo.com/video/$2'},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:'iframe',url:'//www.metacafe.com/embed/$1/?ap=1'},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:'iframe',url:'//www.dailymotion.com/embed/video/$1'},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:'iframe',url:'//vine.co/v/$1/embed/simple'},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:'image',url:'//$1/p/$2/media/?size=l'},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:'iframe',url:function(rez){return'//maps.google.'+rez[2]+'/?ll='+(rez[9]?rez[9]+'&z='+Math.floor(rez[10])+(rez[12]?rez[12].replace(/^\//,"&"):''):rez[12])+'&output='+(rez[12]&&rez[12].indexOf('layer=c')>0?'svembed':'embed')}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:'iframe',url:function(rez){return'//maps.google.'+rez[2]+'/maps?q='+rez[5].replace('query=','q=').replace('api=1','')+'&output=embed'}}};$(document).on('objectNeedsType.fb',function(e,instance,item){var url=item.src||'',type=!1,media,thumb,rez,params,urlParams,paramObj,provider;media=$.extend(!0,{},defaults,item.opts.media);$.each(media,function(providerName,providerOpts){rez=url.match(providerOpts.matcher);if(!rez){return}
type=providerOpts.type;paramObj={};if(providerOpts.paramPlace&&rez[providerOpts.paramPlace]){urlParams=rez[providerOpts.paramPlace];if(urlParams[0]=='?'){urlParams=urlParams.substring(1)}
urlParams=urlParams.split('&');for(var m=0;m<urlParams.length;++m){var p=urlParams[m].split('=',2);if(p.length==2){paramObj[p[0]]=decodeURIComponent(p[1].replace(/\+/g," "))}}}
params=$.extend(!0,{},providerOpts.params,item.opts[providerName],paramObj);url=$.type(providerOpts.url)==="function"?providerOpts.url.call(this,rez,params,item):format(providerOpts.url,rez,params);thumb=$.type(providerOpts.thumb)==="function"?providerOpts.thumb.call(this,rez,params,item):format(providerOpts.thumb,rez);if(providerName==='vimeo'){url=url.replace('&%23','#')}
return!1});if(type){item.src=url;item.type=type;if(!item.opts.thumb&&!(item.opts.$thumb&&item.opts.$thumb.length)){item.opts.thumb=thumb}
if(type==='iframe'){$.extend(!0,item.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}});item.contentProvider=provider;item.opts.slideClass+=' fancybox-slide--'+(provider=='gmap_place'||provider=='gmap_search'?'map':'video')}}else if(url){item.type=item.opts.defaultType}})}(window.jQuery||jQuery));(function(window,document,$){'use strict';var requestAFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(callback){return window.setTimeout(callback,1000/60)}})();var cancelAFrame=(function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(id){window.clearTimeout(id)}})();var pointers=function(e){var result=[];e=e.originalEvent||e||window.e;e=e.touches&&e.touches.length?e.touches:(e.changedTouches&&e.changedTouches.length?e.changedTouches:[e]);for(var key in e){if(e[key].pageX){result.push({x:e[key].pageX,y:e[key].pageY})}else if(e[key].clientX){result.push({x:e[key].clientX,y:e[key].clientY})}}
return result};var distance=function(point2,point1,what){if(!point1||!point2){return 0}
if(what==='x'){return point2.x-point1.x}else if(what==='y'){return point2.y-point1.y}
return Math.sqrt(Math.pow(point2.x-point1.x,2)+Math.pow(point2.y-point1.y,2))};var isClickable=function($el){if($el.is('a,area,button,[role="button"],input,label,select,summary,textarea')||$.isFunction($el.get(0).onclick)||$el.data('selectable')){return!0}
for(var i=0,atts=$el[0].attributes,n=atts.length;i<n;i++){if(atts[i].nodeName.substr(0,14)==='data-fancybox-'){return!0}}
return!1};var hasScrollbars=function(el){var overflowY=window.getComputedStyle(el)['overflow-y'];var overflowX=window.getComputedStyle(el)['overflow-x'];var vertical=(overflowY==='scroll'||overflowY==='auto')&&el.scrollHeight>el.clientHeight;var horizontal=(overflowX==='scroll'||overflowX==='auto')&&el.scrollWidth>el.clientWidth;return vertical||horizontal};var isScrollable=function($el){var rez=!1;while(!0){rez=hasScrollbars($el.get(0));if(rez){break}
$el=$el.parent();if(!$el.length||$el.hasClass('fancybox-stage')||$el.is('body')){break}}
return rez};var Guestures=function(instance){var self=this;self.instance=instance;self.$bg=instance.$refs.bg;self.$stage=instance.$refs.stage;self.$container=instance.$refs.container;self.destroy();self.$container.on('touchstart.fb.touch mousedown.fb.touch',$.proxy(self,'ontouchstart'))};Guestures.prototype.destroy=function(){this.$container.off('.fb.touch')};Guestures.prototype.ontouchstart=function(e){var self=this;var $target=$(e.target);var instance=self.instance;var current=instance.current;var $content=current.$content;var isTouchDevice=(e.type=='touchstart');if(isTouchDevice){self.$container.off('mousedown.fb.touch')}
if(e.originalEvent&&e.originalEvent.button==2){return}
if(!$target.length||isClickable($target)||isClickable($target.parent())){return}
if(!$target.is('img')&&e.originalEvent.clientX>$target[0].clientWidth+$target.offset().left){return}
if(!current||self.instance.isAnimating||self.instance.isClosing){e.stopPropagation();e.preventDefault();return}
self.realPoints=self.startPoints=pointers(e);if(!self.startPoints){return}
e.stopPropagation();self.startEvent=e;self.canTap=!0;self.$target=$target;self.$content=$content;self.opts=current.opts.touch;self.isPanning=!1;self.isSwiping=!1;self.isZooming=!1;self.isScrolling=!1;self.sliderStartPos=self.sliderLastPos||{top:0,left:0};self.contentStartPos=$.fancybox.getTranslate(self.$content);self.contentLastPos=null;self.startTime=new Date().getTime();self.distanceX=self.distanceY=self.distance=0;self.canvasWidth=Math.round(current.$slide[0].clientWidth);self.canvasHeight=Math.round(current.$slide[0].clientHeight);$(document).off('.fb.touch').on(isTouchDevice?'touchend.fb.touch touchcancel.fb.touch':'mouseup.fb.touch mouseleave.fb.touch',$.proxy(self,"ontouchend")).on(isTouchDevice?'touchmove.fb.touch':'mousemove.fb.touch',$.proxy(self,"ontouchmove"));if($.fancybox.isMobile){document.addEventListener('scroll',self.onscroll,!0)}
if(!(self.opts||instance.canPan())||!($target.is(self.$stage)||self.$stage.find($target).length)){if($target.is('img')){e.preventDefault()}
return}
if(!($.fancybox.isMobile&&(isScrollable($target)||isScrollable($target.parent())))){e.preventDefault()}
if(self.startPoints.length===1){if(current.type==='image'&&(self.contentStartPos.width>self.canvasWidth+1||self.contentStartPos.height>self.canvasHeight+1)){$.fancybox.stop(self.$content);self.$content.css('transition-duration','');self.isPanning=!0}else{self.isSwiping=!0}
self.$container.addClass('fancybox-controls--isGrabbing')}
if(self.startPoints.length===2&&!instance.isAnimating&&!current.hasError&&current.type==='image'&&(current.isLoaded||current.$ghost)){self.canTap=!1;self.isSwiping=!1;self.isPanning=!1;self.isZooming=!0;$.fancybox.stop(self.$content);self.$content.css('transition-duration','');self.centerPointStartX=((self.startPoints[0].x+self.startPoints[1].x)*0.5)-$(window).scrollLeft();self.centerPointStartY=((self.startPoints[0].y+self.startPoints[1].y)*0.5)-$(window).scrollTop();self.percentageOfImageAtPinchPointX=(self.centerPointStartX-self.contentStartPos.left)/self.contentStartPos.width;self.percentageOfImageAtPinchPointY=(self.centerPointStartY-self.contentStartPos.top)/self.contentStartPos.height;self.startDistanceBetweenFingers=distance(self.startPoints[0],self.startPoints[1])}};Guestures.prototype.onscroll=function(e){self.isScrolling=!0};Guestures.prototype.ontouchmove=function(e){var self=this,$target=$(e.target);if(self.isScrolling||!($target.is(self.$stage)||self.$stage.find($target).length)){self.canTap=!1;return}
self.newPoints=pointers(e);if(!(self.opts||self.instance.canPan())||!self.newPoints||!self.newPoints.length){return}
if(!(self.isSwiping&&self.isSwiping===!0)){e.preventDefault()}
self.distanceX=distance(self.newPoints[0],self.startPoints[0],'x');self.distanceY=distance(self.newPoints[0],self.startPoints[0],'y');self.distance=distance(self.newPoints[0],self.startPoints[0])
if(self.distance>0){if(self.isSwiping){self.onSwipe(e)}else if(self.isPanning){self.onPan()}else if(self.isZooming){self.onZoom()}}};Guestures.prototype.onSwipe=function(e){var self=this,swiping=self.isSwiping,left=self.sliderStartPos.left||0,angle;if(swiping===!0){if(Math.abs(self.distance)>10){self.canTap=!1;if(self.instance.group.length<2&&self.opts.vertical){self.isSwiping='y'}else if(self.instance.isDragging||self.opts.vertical===!1||(self.opts.vertical==='auto'&&$(window).width()>800)){self.isSwiping='x'}else{angle=Math.abs(Math.atan2(self.distanceY,self.distanceX)*180/Math.PI);self.isSwiping=(angle>45&&angle<135)?'y':'x'}
self.canTap=!1;if(self.isSwiping==='y'&&$.fancybox.isMobile&&(isScrollable(self.$target)||isScrollable(self.$target.parent()))){self.isScrolling=!0;return}
self.instance.isDragging=self.isSwiping;self.startPoints=self.newPoints;$.each(self.instance.slides,function(index,slide){$.fancybox.stop(slide.$slide);slide.$slide.css('transition-duration','');slide.inTransition=!1;if(slide.pos===self.instance.current.pos){self.sliderStartPos.left=$.fancybox.getTranslate(slide.$slide).left}});if(self.instance.SlideShow&&self.instance.SlideShow.isActive){self.instance.SlideShow.stop()}}
return}
if(swiping=='x'){if(self.distanceX>0&&(self.instance.group.length<2||(self.instance.current.index===0&&!self.instance.current.opts.loop))){left=left+Math.pow(self.distanceX,0.8)}else if(self.distanceX<0&&(self.instance.group.length<2||(self.instance.current.index===self.instance.group.length-1&&!self.instance.current.opts.loop))){left=left-Math.pow(-self.distanceX,0.8)}else{left=left+self.distanceX}}
self.sliderLastPos={top:swiping=='x'?0:self.sliderStartPos.top+self.distanceY,left:left};if(self.requestId){cancelAFrame(self.requestId);self.requestId=null}
self.requestId=requestAFrame(function(){if(self.sliderLastPos){$.each(self.instance.slides,function(index,slide){var pos=slide.pos-self.instance.currPos;$.fancybox.setTranslate(slide.$slide,{top:self.sliderLastPos.top,left:self.sliderLastPos.left+(pos*self.canvasWidth)+(pos*slide.opts.gutter)})});self.$container.addClass('fancybox-is-sliding')}})};Guestures.prototype.onPan=function(){var self=this;if(distance(self.newPoints[0],self.realPoints[0])<($.fancybox.isMobile?10:5)){self.startPoints=self.newPoints;return}
self.canTap=!1;self.contentLastPos=self.limitMovement();if(self.requestId){cancelAFrame(self.requestId);self.requestId=null}
self.requestId=requestAFrame(function(){$.fancybox.setTranslate(self.$content,self.contentLastPos)})};Guestures.prototype.limitMovement=function(){var self=this;var canvasWidth=self.canvasWidth;var canvasHeight=self.canvasHeight;var distanceX=self.distanceX;var distanceY=self.distanceY;var contentStartPos=self.contentStartPos;var currentOffsetX=contentStartPos.left;var currentOffsetY=contentStartPos.top;var currentWidth=contentStartPos.width;var currentHeight=contentStartPos.height;var minTranslateX,minTranslateY,maxTranslateX,maxTranslateY,newOffsetX,newOffsetY;if(currentWidth>canvasWidth){newOffsetX=currentOffsetX+distanceX}else{newOffsetX=currentOffsetX}
newOffsetY=currentOffsetY+distanceY;minTranslateX=Math.max(0,canvasWidth*0.5-currentWidth*0.5);minTranslateY=Math.max(0,canvasHeight*0.5-currentHeight*0.5);maxTranslateX=Math.min(canvasWidth-currentWidth,canvasWidth*0.5-currentWidth*0.5);maxTranslateY=Math.min(canvasHeight-currentHeight,canvasHeight*0.5-currentHeight*0.5);if(currentWidth>canvasWidth){if(distanceX>0&&newOffsetX>minTranslateX){newOffsetX=minTranslateX-1+Math.pow(-minTranslateX+currentOffsetX+distanceX,0.8)||0}
if(distanceX<0&&newOffsetX<maxTranslateX){newOffsetX=maxTranslateX+1-Math.pow(maxTranslateX-currentOffsetX-distanceX,0.8)||0}}
if(currentHeight>canvasHeight){if(distanceY>0&&newOffsetY>minTranslateY){newOffsetY=minTranslateY-1+Math.pow(-minTranslateY+currentOffsetY+distanceY,0.8)||0}
if(distanceY<0&&newOffsetY<maxTranslateY){newOffsetY=maxTranslateY+1-Math.pow(maxTranslateY-currentOffsetY-distanceY,0.8)||0}}
return{top:newOffsetY,left:newOffsetX,scaleX:contentStartPos.scaleX,scaleY:contentStartPos.scaleY}};Guestures.prototype.limitPosition=function(newOffsetX,newOffsetY,newWidth,newHeight){var self=this;var canvasWidth=self.canvasWidth;var canvasHeight=self.canvasHeight;if(newWidth>canvasWidth){newOffsetX=newOffsetX>0?0:newOffsetX;newOffsetX=newOffsetX<canvasWidth-newWidth?canvasWidth-newWidth:newOffsetX}else{newOffsetX=Math.max(0,canvasWidth/2-newWidth/2)}
if(newHeight>canvasHeight){newOffsetY=newOffsetY>0?0:newOffsetY;newOffsetY=newOffsetY<canvasHeight-newHeight?canvasHeight-newHeight:newOffsetY}else{newOffsetY=Math.max(0,canvasHeight/2-newHeight/2)}
return{top:newOffsetY,left:newOffsetX}};Guestures.prototype.onZoom=function(){var self=this;var currentWidth=self.contentStartPos.width;var currentHeight=self.contentStartPos.height;var currentOffsetX=self.contentStartPos.left;var currentOffsetY=self.contentStartPos.top;var endDistanceBetweenFingers=distance(self.newPoints[0],self.newPoints[1]);var pinchRatio=endDistanceBetweenFingers/self.startDistanceBetweenFingers;var newWidth=Math.floor(currentWidth*pinchRatio);var newHeight=Math.floor(currentHeight*pinchRatio);var translateFromZoomingX=(currentWidth-newWidth)*self.percentageOfImageAtPinchPointX;var translateFromZoomingY=(currentHeight-newHeight)*self.percentageOfImageAtPinchPointY;var centerPointEndX=((self.newPoints[0].x+self.newPoints[1].x)/2)-$(window).scrollLeft();var centerPointEndY=((self.newPoints[0].y+self.newPoints[1].y)/2)-$(window).scrollTop();var translateFromTranslatingX=centerPointEndX-self.centerPointStartX;var translateFromTranslatingY=centerPointEndY-self.centerPointStartY;var newOffsetX=currentOffsetX+(translateFromZoomingX+translateFromTranslatingX);var newOffsetY=currentOffsetY+(translateFromZoomingY+translateFromTranslatingY);var newPos={top:newOffsetY,left:newOffsetX,scaleX:self.contentStartPos.scaleX*pinchRatio,scaleY:self.contentStartPos.scaleY*pinchRatio};self.canTap=!1;self.newWidth=newWidth;self.newHeight=newHeight;self.contentLastPos=newPos;if(self.requestId){cancelAFrame(self.requestId);self.requestId=null}
self.requestId=requestAFrame(function(){$.fancybox.setTranslate(self.$content,self.contentLastPos)})};Guestures.prototype.ontouchend=function(e){var self=this;var dMs=Math.max((new Date().getTime())-self.startTime,1);var swiping=self.isSwiping;var panning=self.isPanning;var zooming=self.isZooming;var scrolling=self.isScrolling;self.endPoints=pointers(e);self.$container.removeClass('fancybox-controls--isGrabbing');$(document).off('.fb.touch');document.removeEventListener('scroll',self.onscroll,!0);if(self.requestId){cancelAFrame(self.requestId);self.requestId=null}
self.isSwiping=!1;self.isPanning=!1;self.isZooming=!1;self.isScrolling=!1;self.instance.isDragging=!1;if(self.canTap){return self.onTap(e)}
self.speed=366;self.velocityX=self.distanceX/dMs*0.5;self.velocityY=self.distanceY/dMs*0.5;self.speedX=Math.max(self.speed*0.5,Math.min(self.speed*1.5,(1/Math.abs(self.velocityX))*self.speed));if(panning){self.endPanning()}else if(zooming){self.endZooming()}else{self.endSwiping(swiping,scrolling)}
return};Guestures.prototype.endSwiping=function(swiping,scrolling){var self=this,ret=!1,len=self.instance.group.length;self.sliderLastPos=null;if(swiping=='y'&&!scrolling&&Math.abs(self.distanceY)>50){$.fancybox.animate(self.instance.current.$slide,{top:self.sliderStartPos.top+self.distanceY+(self.velocityY*150),opacity:0},150);ret=self.instance.close(!0,300)}else if(swiping=='x'&&self.distanceX>50&&len>1){ret=self.instance.previous(self.speedX)}else if(swiping=='x'&&self.distanceX<-50&&len>1){ret=self.instance.next(self.speedX)}
if(ret===!1&&(swiping=='x'||swiping=='y')){if(scrolling||len<2){self.instance.centerSlide(self.instance.current,150)}else{self.instance.jumpTo(self.instance.current.index)}}
self.$container.removeClass('fancybox-is-sliding')};Guestures.prototype.endPanning=function(){var self=this;var newOffsetX,newOffsetY,newPos;if(!self.contentLastPos){return}
if(self.opts.momentum===!1){newOffsetX=self.contentLastPos.left;newOffsetY=self.contentLastPos.top}else{newOffsetX=self.contentLastPos.left+(self.velocityX*self.speed);newOffsetY=self.contentLastPos.top+(self.velocityY*self.speed)}
newPos=self.limitPosition(newOffsetX,newOffsetY,self.contentStartPos.width,self.contentStartPos.height);newPos.width=self.contentStartPos.width;newPos.height=self.contentStartPos.height;$.fancybox.animate(self.$content,newPos,330)};Guestures.prototype.endZooming=function(){var self=this;var current=self.instance.current;var newOffsetX,newOffsetY,newPos,reset;var newWidth=self.newWidth;var newHeight=self.newHeight;if(!self.contentLastPos){return}
newOffsetX=self.contentLastPos.left;newOffsetY=self.contentLastPos.top;reset={top:newOffsetY,left:newOffsetX,width:newWidth,height:newHeight,scaleX:1,scaleY:1};$.fancybox.setTranslate(self.$content,reset);if(newWidth<self.canvasWidth&&newHeight<self.canvasHeight){self.instance.scaleToFit(150)}else if(newWidth>current.width||newHeight>current.height){self.instance.scaleToActual(self.centerPointStartX,self.centerPointStartY,150)}else{newPos=self.limitPosition(newOffsetX,newOffsetY,newWidth,newHeight);$.fancybox.setTranslate(self.content,$.fancybox.getTranslate(self.$content));$.fancybox.animate(self.$content,newPos,150)}};Guestures.prototype.onTap=function(e){var self=this;var $target=$(e.target);var instance=self.instance;var current=instance.current;var endPoints=(e&&pointers(e))||self.startPoints;var tapX=endPoints[0]?endPoints[0].x-self.$stage.offset().left:0;var tapY=endPoints[0]?endPoints[0].y-self.$stage.offset().top:0;var where;var process=function(prefix){var action=current.opts[prefix];if($.isFunction(action)){action=action.apply(instance,[current,e])}
if(!action){return}
switch(action){case "close":instance.close(self.startEvent);break;case "toggleControls":instance.toggleControls(!0);break;case "next":instance.next();break;case "nextOrClose":if(instance.group.length>1){instance.next()}else{instance.close(self.startEvent)}
break;case "zoom":if(current.type=='image'&&(current.isLoaded||current.$ghost)){if(instance.canPan()){instance.scaleToFit()}else if(instance.isScaledDown()){instance.scaleToActual(tapX,tapY)}else if(instance.group.length<2){instance.close(self.startEvent)}}
break}};if(e.originalEvent&&e.originalEvent.button==2){return}
if(!$target.is('img')&&tapX>$target[0].clientWidth+$target.offset().left){return}
if($target.is('.fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container')){where='Outside'}else if($target.is('.fancybox-slide')){where='Slide'}else if(instance.current.$content&&instance.current.$content.find($target).addBack().filter($target).length){where='Content'}else{return}
if(self.tapped){clearTimeout(self.tapped);self.tapped=null;if(Math.abs(tapX-self.tapX)>50||Math.abs(tapY-self.tapY)>50){return this}
process('dblclick'+where)}else{self.tapX=tapX;self.tapY=tapY;if(current.opts['dblclick'+where]&&current.opts['dblclick'+where]!==current.opts['click'+where]){self.tapped=setTimeout(function(){self.tapped=null;process('click'+where)},500)}else{process('click'+where)}}
return this};$(document).on('onActivate.fb',function(e,instance){if(instance&&!instance.Guestures){instance.Guestures=new Guestures(instance)}})}(window,document,window.jQuery||jQuery));(function(document,$){'use strict';$.extend(!0,$.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M13,12 L27,20 L13,27 Z" />'+'<path d="M15,10 v19 M23,10 v19" />'+'</svg>'+'</button>'},slideShow:{autoStart:!1,speed:3000}});var SlideShow=function(instance){this.instance=instance;this.init()};$.extend(SlideShow.prototype,{timer:null,isActive:!1,$button:null,init:function(){var self=this;self.$button=self.instance.$refs.toolbar.find('[data-fancybox-play]').on('click',function(){self.toggle()});if(self.instance.group.length<2||!self.instance.group[self.instance.currIndex].opts.slideShow){self.$button.hide()}},set:function(force){var self=this;if(self.instance&&self.instance.current&&(force===!0||self.instance.current.opts.loop||self.instance.currIndex<self.instance.group.length-1)){self.timer=setTimeout(function(){if(self.isActive){self.instance.jumpTo((self.instance.currIndex+1)%self.instance.group.length)}},self.instance.current.opts.slideShow.speed)}else{self.stop();self.instance.idleSecondsCounter=0;self.instance.showControls()}},clear:function(){var self=this;clearTimeout(self.timer);self.timer=null},start:function(){var self=this;var current=self.instance.current;if(current){self.isActive=!0;self.$button.attr('title',current.opts.i18n[current.opts.lang].PLAY_STOP).removeClass('fancybox-button--play').addClass('fancybox-button--pause');self.set(!0)}},stop:function(){var self=this;var current=self.instance.current;self.clear();self.$button.attr('title',current.opts.i18n[current.opts.lang].PLAY_START).removeClass('fancybox-button--pause').addClass('fancybox-button--play');self.isActive=!1},toggle:function(){var self=this;if(self.isActive){self.stop()}else{self.start()}}});$(document).on({'onInit.fb':function(e,instance){if(instance&&!instance.SlideShow){instance.SlideShow=new SlideShow(instance)}},'beforeShow.fb':function(e,instance,current,firstRun){var SlideShow=instance&&instance.SlideShow;if(firstRun){if(SlideShow&&current.opts.slideShow.autoStart){SlideShow.start()}}else if(SlideShow&&SlideShow.isActive){SlideShow.clear()}},'afterShow.fb':function(e,instance,current){var SlideShow=instance&&instance.SlideShow;if(SlideShow&&SlideShow.isActive){SlideShow.set()}},'afterKeydown.fb':function(e,instance,current,keypress,keycode){var SlideShow=instance&&instance.SlideShow;if(SlideShow&&current.opts.slideShow&&(keycode===80||keycode===32)&&!$(document.activeElement).is('button,a,input')){keypress.preventDefault();SlideShow.toggle()}},'beforeClose.fb onDeactivate.fb':function(e,instance){var SlideShow=instance&&instance.SlideShow;if(SlideShow){SlideShow.stop()}}});$(document).on("visibilitychange",function(){var instance=$.fancybox.getInstance();var SlideShow=instance&&instance.SlideShow;if(SlideShow&&SlideShow.isActive){if(document.hidden){SlideShow.clear()}else{SlideShow.set()}}})}(document,window.jQuery||jQuery));(function(document,$){'use strict';var fn=(function(){var fnMap=[['requestFullscreen','exitFullscreen','fullscreenElement','fullscreenEnabled','fullscreenchange','fullscreenerror'],['webkitRequestFullscreen','webkitExitFullscreen','webkitFullscreenElement','webkitFullscreenEnabled','webkitfullscreenchange','webkitfullscreenerror'],['webkitRequestFullScreen','webkitCancelFullScreen','webkitCurrentFullScreenElement','webkitCancelFullScreen','webkitfullscreenchange','webkitfullscreenerror'],['mozRequestFullScreen','mozCancelFullScreen','mozFullScreenElement','mozFullScreenEnabled','mozfullscreenchange','mozfullscreenerror'],['msRequestFullscreen','msExitFullscreen','msFullscreenElement','msFullscreenEnabled','MSFullscreenChange','MSFullscreenError']];var val;var ret={};var i,j;for(i=0;i<fnMap.length;i++){val=fnMap[i];if(val&&val[1]in document){for(j=0;j<val.length;j++){ret[fnMap[0][j]]=val[j]}
return ret}}
return!1})();if(!fn){if($&&$.fancybox){$.fancybox.defaults.btnTpl.fullScreen=!1}
return}
var FullScreen={request:function(elem){elem=elem||document.documentElement;elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT)},exit:function(){document[fn.exitFullscreen]()},toggle:function(elem){elem=elem||document.documentElement;if(this.isFullscreen()){this.exit()}else{this.request(elem)}},isFullscreen:function(){return Boolean(document[fn.fullscreenElement])},enabled:function(){return Boolean(document[fn.fullscreenEnabled])}};$.extend(!0,$.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" />'+'</svg>'+'</button>'},fullScreen:{autoStart:!1}});$(document).on({'onInit.fb':function(e,instance){var $container;if(instance&&instance.group[instance.currIndex].opts.fullScreen){$container=instance.$refs.container;$container.on('click.fb-fullscreen','[data-fancybox-fullscreen]',function(e){e.stopPropagation();e.preventDefault();FullScreen.toggle($container[0])});if(instance.opts.fullScreen&&instance.opts.fullScreen.autoStart===!0){FullScreen.request($container[0])}
instance.FullScreen=FullScreen}else if(instance){instance.$refs.toolbar.find('[data-fancybox-fullscreen]').hide()}},'afterKeydown.fb':function(e,instance,current,keypress,keycode){if(instance&&instance.FullScreen&&keycode===70){keypress.preventDefault();instance.FullScreen.toggle(instance.$refs.container[0])}},'beforeClose.fb':function(instance){if(instance&&instance.FullScreen){FullScreen.exit()}}});$(document).on(fn.fullscreenchange,function(){var isFullscreen=FullScreen.isFullscreen(),instance=$.fancybox.getInstance();if(instance){if(instance.current&&instance.current.type==='image'&&instance.isAnimating){instance.current.$content.css('transition','none');instance.isAnimating=!1;instance.update(!0,!0,0)}
instance.trigger('onFullscreenChange',isFullscreen);instance.$refs.container.toggleClass('fancybox-is-fullscreen',isFullscreen)}})}(document,window.jQuery||jQuery));(function(document,$){'use strict';$.fancybox.defaults=$.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">'+'<svg viewBox="0 0 120 120">'+'<path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" />'+'</svg>'+'</button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:'.fancybox-container',axis:'y'}},$.fancybox.defaults);var FancyThumbs=function(instance){this.init(instance)};$.extend(FancyThumbs.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(instance){var self=this;self.instance=instance;instance.Thumbs=self;var first=instance.group[0],second=instance.group[1];self.opts=instance.group[instance.currIndex].opts.thumbs;self.$button=instance.$refs.toolbar.find('[data-fancybox-thumbs]');if(self.opts&&first&&second&&((first.type=='image'||first.opts.thumb||first.opts.$thumb)&&(second.type=='image'||second.opts.thumb||second.opts.$thumb))){self.$button.show().on('click',function(){self.toggle()});self.isActive=!0}else{self.$button.hide()}},create:function(){var self=this,instance=self.instance,parentEl=self.opts.parentEl,list,src;self.$grid=$('<div class="fancybox-thumbs fancybox-thumbs-'+self.opts.axis+'"></div>').appendTo(instance.$refs.container.find(parentEl).addBack().filter(parentEl));list='<ul>';$.each(instance.group,function(i,item){src=item.opts.thumb||(item.opts.$thumb?item.opts.$thumb.attr('src'):null);if(!src&&item.type==='image'){src=item.src}
if(src&&src.length){list+='<li data-index="'+i+'"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="'+src+'" /></li>'}});list+='</ul>';self.$list=$(list).appendTo(self.$grid).on('click','li',function(){instance.jumpTo($(this).data('index'))});self.$list.find('img').hide().one('load',function(){var $parent=$(this).parent().removeClass('fancybox-thumbs-loading'),thumbWidth=$parent.outerWidth(),thumbHeight=$parent.outerHeight(),width,height,widthRatio,heightRatio;width=this.naturalWidth||this.width;height=this.naturalHeight||this.height;widthRatio=width/thumbWidth;heightRatio=height/thumbHeight;if(widthRatio>=1&&heightRatio>=1){if(widthRatio>heightRatio){width=width/heightRatio;height=thumbHeight}else{width=thumbWidth;height=height/widthRatio}}
$(this).css({width:Math.floor(width),height:Math.floor(height),'margin-top':height>thumbHeight?(Math.floor(thumbHeight*0.3-height*0.3)):Math.floor(thumbHeight*0.5-height*0.5),'margin-left':Math.floor(thumbWidth*0.5-width*0.5)}).show()}).each(function(){this.src=$(this).data('src')});if(self.opts.axis==='x'){self.$list.width(parseInt(self.$grid.css("padding-right"))+(instance.group.length*self.$list.children().eq(0).outerWidth(!0))+'px')}},focus:function(duration){var self=this,$list=self.$list,thumb,thumbPos;if(self.instance.current){thumb=$list.children().removeClass('fancybox-thumbs-active').filter('[data-index="'+self.instance.current.index+'"]').addClass('fancybox-thumbs-active');thumbPos=thumb.position();if(self.opts.axis==='y'&&(thumbPos.top<0||thumbPos.top>($list.height()-thumb.outerHeight()))){$list.stop().animate({'scrollTop':$list.scrollTop()+thumbPos.top},duration)}else if(self.opts.axis==='x'&&(thumbPos.left<$list.parent().scrollLeft()||thumbPos.left>($list.parent().scrollLeft()+($list.parent().width()-thumb.outerWidth())))){$list.parent().stop().animate({'scrollLeft':thumbPos.left},duration)}}},update:function(){this.instance.$refs.container.toggleClass('fancybox-show-thumbs',this.isVisible);if(this.isVisible){if(!this.$grid){this.create()}
this.instance.trigger('onThumbsShow');this.focus(0)}else if(this.$grid){this.instance.trigger('onThumbsHide')}
this.instance.update()},hide:function(){this.isVisible=!1;this.update()},show:function(){this.isVisible=!0;this.update()},toggle:function(){this.isVisible=!this.isVisible;this.update()}});$(document).on({'onInit.fb':function(e,instance){var Thumbs;if(instance&&!instance.Thumbs){Thumbs=new FancyThumbs(instance);if(Thumbs.isActive&&Thumbs.opts.autoStart===!0){Thumbs.show()}}},'beforeShow.fb':function(e,instance,item,firstRun){var Thumbs=instance&&instance.Thumbs;if(Thumbs&&Thumbs.isVisible){Thumbs.focus(firstRun?0:250)}},'afterKeydown.fb':function(e,instance,current,keypress,keycode){var Thumbs=instance&&instance.Thumbs;if(Thumbs&&Thumbs.isActive&&keycode===71){keypress.preventDefault();Thumbs.toggle()}},'beforeClose.fb':function(e,instance){var Thumbs=instance&&instance.Thumbs;if(Thumbs&&Thumbs.isVisible&&Thumbs.opts.hideOnClose!==!1){Thumbs.$grid.hide()}}})}(document,window.jQuery));(function(document,$){'use strict';$.extend(!0,$.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z">'+'</svg>'+'</button>'},share:{tpl:'<div class="fancybox-share">'+'<h1>{{SHARE}}</h1>'+'<p class="fancybox-share__links">'+'<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">'+'<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>'+'<span>Facebook</span>'+'</a>'+'<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">'+'<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>'+'<span>Pinterest</span>'+'</a>'+'<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">'+'<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>'+'<span>Twitter</span>'+'</a>'+'</p>'+'<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p>'+'</div>'}});function escapeHtml(string){var entityMap={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','/':'&#x2F;','`':'&#x60;','=':'&#x3D;'};return String(string).replace(/[&<>"'`=\/]/g,function(s){return entityMap[s]})}
$(document).on('click','[data-fancybox-share]',function(){var f=$.fancybox.getInstance(),url,tpl;if(f){url=f.current.opts.hash===!1?f.current.src:window.location;tpl=f.current.opts.share.tpl.replace(/\{\{media\}\}/g,f.current.type==='image'?encodeURIComponent(f.current.src):'').replace(/\{\{url\}\}/g,encodeURIComponent(url)).replace(/\{\{url_raw\}\}/g,escapeHtml(url)).replace(/\{\{descr\}\}/g,f.$caption?encodeURIComponent(f.$caption.text()):'');$.fancybox.open({src:f.translate(f,tpl),type:'html',opts:{animationEffect:"fade",animationDuration:250,afterLoad:function(instance,current){current.$content.find('.fancybox-share__links a').click(function(){window.open(this.href,"Share","width=550, height=450");return!1})}}})}})}(document,window.jQuery||jQuery));(function(document,window,$){'use strict';if(!$.escapeSelector){$.escapeSelector=function(sel){var rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;var fcssescape=function(ch,asCodePoint){if(asCodePoint){if(ch==="\0"){return"\uFFFD"}
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" "}
return"\\"+ch};return(sel+"").replace(rcssescape,fcssescape)}}
var shouldCreateHistory=!0;var currentHash=null;var timerID=null;function parseUrl(){var hash=window.location.hash.substr(1);var rez=hash.split('-');var index=rez.length>1&&/^\+?\d+$/.test(rez[rez.length-1])?parseInt(rez.pop(-1),10)||1:1;var gallery=rez.join('-');if(index<1){index=1}
return{hash:hash,index:index,gallery:gallery}}
function triggerFromUrl(url){var $el;if(url.gallery!==''){$el=$("[data-fancybox='"+$.escapeSelector(url.gallery)+"']").eq(url.index-1);if(!$el.length){$el=$("#"+$.escapeSelector(url.gallery)+"")}
if($el.length){shouldCreateHistory=!1;$el.trigger('click')}}}
function getGalleryID(instance){var opts;if(!instance){return!1}
opts=instance.current?instance.current.opts:instance.opts;return opts.hash||(opts.$orig?opts.$orig.data('fancybox'):'')}
$(function(){if($.fancybox.defaults.hash===!1){return}
$(document).on({'onInit.fb':function(e,instance){var url,gallery;if(instance.group[instance.currIndex].opts.hash===!1){return}
url=parseUrl();gallery=getGalleryID(instance);if(gallery&&url.gallery&&gallery==url.gallery){instance.currIndex=url.index-1}},'beforeShow.fb':function(e,instance,current){var gallery;if(!current||current.opts.hash===!1){return}
gallery=getGalleryID(instance);if(gallery&&gallery!==''){if(window.location.hash.indexOf(gallery)<0){instance.opts.origHash=window.location.hash}
currentHash=gallery+(instance.group.length>1?'-'+(current.index+1):'');if('replaceState' in window.history){if(timerID){clearTimeout(timerID)}
timerID=setTimeout(function(){window.history[shouldCreateHistory?'pushState':'replaceState']({},document.title,window.location.pathname+window.location.search+'#'+currentHash);timerID=null;shouldCreateHistory=!1},300)}else{window.location.hash=currentHash}}},'beforeClose.fb':function(e,instance,current){var gallery,origHash;if(timerID){clearTimeout(timerID)}
if(current.opts.hash===!1){return}
gallery=getGalleryID(instance);origHash=instance&&instance.opts.origHash?instance.opts.origHash:'';if(gallery&&gallery!==''){if('replaceState' in history){window.history.replaceState({},document.title,window.location.pathname+window.location.search+origHash)}else{window.location.hash=origHash;$(window).scrollTop(instance.scrollTop).scrollLeft(instance.scrollLeft)}}
currentHash=null}});$(window).on('hashchange.fb',function(){var url=parseUrl();if($.fancybox.getInstance()){if(currentHash&&currentHash!==url.gallery+'-'+url.index&&!(url.index===1&&currentHash==url.gallery)){currentHash=null;$.fancybox.close()}}else if(url.gallery!==''){triggerFromUrl(url)}});setTimeout(function(){triggerFromUrl(parseUrl())},50)})}(document,window,window.jQuery||jQuery));(function(document,$){'use strict';var prevTime=new Date().getTime();$(document).on({'onInit.fb':function(e,instance,current){instance.$refs.stage.on('mousewheel DOMMouseScroll wheel MozMousePixelScroll',function(e){var current=instance.current,currTime=new Date().getTime();if(instance.group.length<1||current.opts.wheel===!1||(current.opts.wheel==='auto'&&current.type!=='image')){return}
e.preventDefault();e.stopPropagation();if(current.$slide.hasClass('fancybox-animated')){return}
e=e.originalEvent||e;if(currTime-prevTime<250){return}
prevTime=currTime;instance[(-e.deltaY||-e.deltaX||e.wheelDelta||-e.detail)<0?'next':'previous']()})}})}(document,window.jQuery||jQuery));/**!
 * MixItUp v2.1.10
 *
 * @copyright Copyright 2015 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://mixitup.kunkalabs.com
 *
 * @license   Commercial use requires a commercial license.
 *            https://mixitup.kunkalabs.com/licenses/
 *
 *            Non-commercial use permitted under terms of CC-BY-NC license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
(function($,undf){'use strict';$.MixItUp=function(){var self=this;self._execAction('_constructor',0);$.extend(self,{selectors:{target:'.mix',filter:'.filter',sort:'.sort'},animation:{enable:!0,effects:'fade scale',duration:600,easing:'ease',perspectiveDistance:'3000',perspectiveOrigin:'50% 50%',queue:!0,queueLimit:1,animateChangeLayout:!1,animateResizeContainer:!0,animateResizeTargets:!1,staggerSequence:!1,reverseOut:!1},callbacks:{onMixLoad:!1,onMixStart:!1,onMixBusy:!1,onMixEnd:!1,onMixFail:!1,_user:!1},controls:{enable:!0,live:!1,toggleFilterButtons:!1,toggleLogic:'or',activeClass:'active'},layout:{display:'inline-block',containerClass:'',containerClassFail:'fail'},load:{filter:'all',sort:!1},_$body:null,_$container:null,_$targets:null,_$parent:null,_$sortButtons:null,_$filterButtons:null,_suckMode:!1,_mixing:!1,_sorting:!1,_clicking:!1,_loading:!0,_changingLayout:!1,_changingClass:!1,_changingDisplay:!1,_origOrder:[],_startOrder:[],_newOrder:[],_activeFilter:null,_toggleArray:[],_toggleString:'',_activeSort:'default:asc',_newSort:null,_startHeight:null,_newHeight:null,_incPadding:!0,_newDisplay:null,_newClass:null,_targetsBound:0,_targetsDone:0,_queue:[],_$show:$(),_$hide:$()});self._execAction('_constructor',1)};$.MixItUp.prototype={constructor:$.MixItUp,_instances:{},_handled:{_filter:{},_sort:{}},_bound:{_filter:{},_sort:{}},_actions:{},_filters:{},extend:function(extension){for(var key in extension){$.MixItUp.prototype[key]=extension[key]}},addAction:function(hook,name,func,priority){$.MixItUp.prototype._addHook('_actions',hook,name,func,priority)},addFilter:function(hook,name,func,priority){$.MixItUp.prototype._addHook('_filters',hook,name,func,priority)},_addHook:function(type,hook,name,func,priority){var collection=$.MixItUp.prototype[type],obj={};priority=(priority===1||priority==='post')?'post':'pre';obj[hook]={};obj[hook][priority]={};obj[hook][priority][name]=func;$.extend(!0,collection,obj)},_init:function(domNode,config){var self=this;self._execAction('_init',0,arguments);config&&$.extend(!0,self,config);self._$body=$('body');self._domNode=domNode;self._$container=$(domNode);self._$container.addClass(self.layout.containerClass);self._id=domNode.id;self._platformDetect();self._brake=self._getPrefixedCSS('transition','none');self._refresh(!0);self._$parent=self._$targets.parent().length?self._$targets.parent():self._$container;if(self.load.sort){self._newSort=self._parseSort(self.load.sort);self._newSortString=self.load.sort;self._activeSort=self.load.sort;self._sort();self._printSort()}
self._activeFilter=self.load.filter==='all'?self.selectors.target:self.load.filter==='none'?'':self.load.filter;self.controls.enable&&self._bindHandlers();if(self.controls.toggleFilterButtons){self._buildToggleArray();for(var i=0;i<self._toggleArray.length;i++){self._updateControls({filter:self._toggleArray[i],sort:self._activeSort},!0)}}else if(self.controls.enable){self._updateControls({filter:self._activeFilter,sort:self._activeSort})}
self._filter();self._init=!0;self._$container.data('mixItUp',self);self._execAction('_init',1,arguments);self._buildState();self._$targets.css(self._brake);self._goMix(self.animation.enable)},_platformDetect:function(){var self=this,vendorsTrans=['Webkit','Moz','O','ms'],vendorsRAF=['webkit','moz'],chrome=window.navigator.appVersion.match(/Chrome\/(\d+)\./)||!1,ff=typeof InstallTrigger!=='undefined',prefix=function(el){for(var i=0;i<vendorsTrans.length;i++){if(vendorsTrans[i]+'Transition' in el.style){return{prefix:'-'+vendorsTrans[i].toLowerCase()+'-',vendor:vendorsTrans[i]}}};return'transition' in el.style?'':!1},transPrefix=prefix(self._domNode);self._execAction('_platformDetect',0);self._chrome=chrome?parseInt(chrome[1],10):!1;self._ff=ff?parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]):!1;self._prefix=transPrefix.prefix;self._vendor=transPrefix.vendor;self._suckMode=window.atob&&self._prefix?!1:!0;self._suckMode&&(self.animation.enable=!1);(self._ff&&self._ff<=4)&&(self.animation.enable=!1);for(var x=0;x<vendorsRAF.length&&!window.requestAnimationFrame;x++){window.requestAnimationFrame=window[vendorsRAF[x]+'RequestAnimationFrame']}
if(typeof Object.getPrototypeOf!=='function'){if(typeof 'test'.__proto__==='object'){Object.getPrototypeOf=function(object){return object.__proto__}}else{Object.getPrototypeOf=function(object){return object.constructor.prototype}}}
if(self._domNode.nextElementSibling===undf){Object.defineProperty(Element.prototype,'nextElementSibling',{get:function(){var el=this.nextSibling;while(el){if(el.nodeType===1){return el}
el=el.nextSibling}
return null}})}
self._execAction('_platformDetect',1)},_refresh:function(init,force){var self=this;self._execAction('_refresh',0,arguments);self._$targets=self._$container.find(self.selectors.target);for(var i=0;i<self._$targets.length;i++){var target=self._$targets[i];if(target.dataset===undf||force){target.dataset={};for(var j=0;j<target.attributes.length;j++){var attr=target.attributes[j],name=attr.name,val=attr.value;if(name.indexOf('data-')>-1){var dataName=self._helpers._camelCase(name.substring(5,name.length));target.dataset[dataName]=val}}}
if(target.mixParent===undf){target.mixParent=self._id}}
if((self._$targets.length&&init)||(!self._origOrder.length&&self._$targets.length)){self._origOrder=[];for(var i=0;i<self._$targets.length;i++){var target=self._$targets[i];self._origOrder.push(target)}}
self._execAction('_refresh',1,arguments)},_bindHandlers:function(){var self=this,filters=$.MixItUp.prototype._bound._filter,sorts=$.MixItUp.prototype._bound._sort;self._execAction('_bindHandlers',0);if(self.controls.live){self._$body.on('click.mixItUp.'+self._id,self.selectors.sort,function(){self._processClick($(this),'sort')}).on('click.mixItUp.'+self._id,self.selectors.filter,function(){self._processClick($(this),'filter')})}else{self._$sortButtons=$(self.selectors.sort);self._$filterButtons=$(self.selectors.filter);self._$sortButtons.on('click.mixItUp.'+self._id,function(){self._processClick($(this),'sort')});self._$filterButtons.on('click.mixItUp.'+self._id,function(){self._processClick($(this),'filter')})}
filters[self.selectors.filter]=(filters[self.selectors.filter]===undf)?1:filters[self.selectors.filter]+1;sorts[self.selectors.sort]=(sorts[self.selectors.sort]===undf)?1:sorts[self.selectors.sort]+1;self._execAction('_bindHandlers',1)},_processClick:function($button,type){var self=this,trackClick=function($button,type,off){var proto=$.MixItUp.prototype;proto._handled['_'+type][self.selectors[type]]=(proto._handled['_'+type][self.selectors[type]]===undf)?1:proto._handled['_'+type][self.selectors[type]]+1;if(proto._handled['_'+type][self.selectors[type]]===proto._bound['_'+type][self.selectors[type]]){$button[(off?'remove':'add')+'Class'](self.controls.activeClass);delete proto._handled['_'+type][self.selectors[type]]}};self._execAction('_processClick',0,arguments);if(!self._mixing||(self.animation.queue&&self._queue.length<self.animation.queueLimit)){self._clicking=!0;if(type==='sort'){var sort=$button.attr('data-sort');if(!$button.hasClass(self.controls.activeClass)||sort.indexOf('random')>-1){$(self.selectors.sort).removeClass(self.controls.activeClass);trackClick($button,type);self.sort(sort)}}
if(type==='filter'){var filter=$button.attr('data-filter'),ndx,seperator=self.controls.toggleLogic==='or'?',':'';if(!self.controls.toggleFilterButtons){if(!$button.hasClass(self.controls.activeClass)){$(self.selectors.filter).removeClass(self.controls.activeClass);trackClick($button,type);self.filter(filter)}}else{self._buildToggleArray();if(!$button.hasClass(self.controls.activeClass)){trackClick($button,type);self._toggleArray.push(filter)}else{trackClick($button,type,!0);ndx=self._toggleArray.indexOf(filter);self._toggleArray.splice(ndx,1)}
self._toggleArray=$.grep(self._toggleArray,function(n){return(n)});self._toggleString=self._toggleArray.join(seperator);self.filter(self._toggleString)}}
self._execAction('_processClick',1,arguments)}else{if(typeof self.callbacks.onMixBusy==='function'){self.callbacks.onMixBusy.call(self._domNode,self._state,self)}
self._execAction('_processClickBusy',1,arguments)}},_buildToggleArray:function(){var self=this,activeFilter=self._activeFilter.replace(/\s/g,'');self._execAction('_buildToggleArray',0,arguments);if(self.controls.toggleLogic==='or'){self._toggleArray=activeFilter.split(',')}else{self._toggleArray=activeFilter.split('.');!self._toggleArray[0]&&self._toggleArray.shift();for(var i=0,filter;filter=self._toggleArray[i];i++){self._toggleArray[i]='.'+filter}}
self._execAction('_buildToggleArray',1,arguments)},_updateControls:function(command,multi){var self=this,output={filter:command.filter,sort:command.sort},update=function($el,filter){try{(multi&&type==='filter'&&!(output.filter==='none'||output.filter===''))?$el.filter(filter).addClass(self.controls.activeClass):$el.removeClass(self.controls.activeClass).filter(filter).addClass(self.controls.activeClass)}catch(e){}},type='filter',$el=null;self._execAction('_updateControls',0,arguments);(command.filter===undf)&&(output.filter=self._activeFilter);(command.sort===undf)&&(output.sort=self._activeSort);(output.filter===self.selectors.target)&&(output.filter='all');for(var i=0;i<2;i++){$el=self.controls.live?$(self.selectors[type]):self['_$'+type+'Buttons'];$el&&update($el,'[data-'+type+'="'+output[type]+'"]');type='sort'}
self._execAction('_updateControls',1,arguments)},_filter:function(){var self=this;self._execAction('_filter',0);for(var i=0;i<self._$targets.length;i++){var $target=$(self._$targets[i]);if($target.is(self._activeFilter)){self._$show=self._$show.add($target)}else{self._$hide=self._$hide.add($target)}}
self._execAction('_filter',1)},_sort:function(){var self=this,arrayShuffle=function(oldArray){var newArray=oldArray.slice(),len=newArray.length,i=len;while(i--){var p=parseInt(Math.random()*len);var t=newArray[i];newArray[i]=newArray[p];newArray[p]=t};return newArray};self._execAction('_sort',0);self._startOrder=[];for(var i=0;i<self._$targets.length;i++){var target=self._$targets[i];self._startOrder.push(target)}
switch(self._newSort[0].sortBy){case 'default':self._newOrder=self._origOrder;break;case 'random':self._newOrder=arrayShuffle(self._startOrder);break;case 'custom':self._newOrder=self._newSort[0].order;break;default:self._newOrder=self._startOrder.concat().sort(function(a,b){return self._compare(a,b)})}
self._execAction('_sort',1)},_compare:function(a,b,depth){depth=depth?depth:0;var self=this,order=self._newSort[depth].order,getData=function(el){return el.dataset[self._newSort[depth].sortBy]||0},attrA=isNaN(getData(a)*1)?getData(a).toLowerCase():getData(a)*1,attrB=isNaN(getData(b)*1)?getData(b).toLowerCase():getData(b)*1;if(attrA<attrB)
return order==='asc'?-1:1;if(attrA>attrB)
return order==='asc'?1:-1;if(attrA===attrB&&self._newSort.length>depth+1)
return self._compare(a,b,depth+1);return 0},_printSort:function(reset){var self=this,order=reset?self._startOrder:self._newOrder,targets=self._$parent[0].querySelectorAll(self.selectors.target),nextSibling=targets.length?targets[targets.length-1].nextElementSibling:null,frag=document.createDocumentFragment();self._execAction('_printSort',0,arguments);for(var i=0;i<targets.length;i++){var target=targets[i],whiteSpace=target.nextSibling;if(target.style.position==='absolute')continue;if(whiteSpace&&whiteSpace.nodeName==='#text'){self._$parent[0].removeChild(whiteSpace)}
self._$parent[0].removeChild(target)}
for(var i=0;i<order.length;i++){var el=order[i];if(self._newSort[0].sortBy==='default'&&self._newSort[0].order==='desc'&&!reset){var firstChild=frag.firstChild;frag.insertBefore(el,firstChild);frag.insertBefore(document.createTextNode(' '),el)}else{frag.appendChild(el);frag.appendChild(document.createTextNode(' '))}}
nextSibling?self._$parent[0].insertBefore(frag,nextSibling):self._$parent[0].appendChild(frag);self._execAction('_printSort',1,arguments)},_parseSort:function(sortString){var self=this,rules=typeof sortString==='string'?sortString.split(' '):[sortString],newSort=[];for(var i=0;i<rules.length;i++){var rule=typeof sortString==='string'?rules[i].split(':'):['custom',rules[i]],ruleObj={sortBy:self._helpers._camelCase(rule[0]),order:rule[1]||'asc'};newSort.push(ruleObj);if(ruleObj.sortBy==='default'||ruleObj.sortBy==='random')break}
return self._execFilter('_parseSort',newSort,arguments)},_parseEffects:function(){var self=this,effects={opacity:'',transformIn:'',transformOut:'',filter:''},parse=function(effect,extract,reverse){if(self.animation.effects.indexOf(effect)>-1){if(extract){var propIndex=self.animation.effects.indexOf(effect+'(');if(propIndex>-1){var str=self.animation.effects.substring(propIndex),match=/\(([^)]+)\)/.exec(str),val=match[1];return{val:val}}}
return!0}else{return!1}},negate=function(value,invert){if(invert){return value.charAt(0)==='-'?value.substr(1,value.length):'-'+value}else{return value}},buildTransform=function(key,invert){var transforms=[['scale','.01'],['translateX','20px'],['translateY','20px'],['translateZ','20px'],['rotateX','90deg'],['rotateY','90deg'],['rotateZ','180deg'],];for(var i=0;i<transforms.length;i++){var prop=transforms[i][0],def=transforms[i][1],inverted=invert&&prop!=='scale';effects[key]+=parse(prop)?prop+'('+negate(parse(prop,!0).val||def,inverted)+') ':''}};effects.opacity=parse('fade')?parse('fade',!0).val||'0':'1';buildTransform('transformIn');self.animation.reverseOut?buildTransform('transformOut',!0):(effects.transformOut=effects.transformIn);effects.transition={};effects.transition=self._getPrefixedCSS('transition','all '+self.animation.duration+'ms '+self.animation.easing+', opacity '+self.animation.duration+'ms linear');self.animation.stagger=parse('stagger')?!0:!1;self.animation.staggerDuration=parseInt(parse('stagger')?(parse('stagger',!0).val?parse('stagger',!0).val:100):100);return self._execFilter('_parseEffects',effects)},_buildState:function(future){var self=this,state={};self._execAction('_buildState',0);state={activeFilter:self._activeFilter===''?'none':self._activeFilter,activeSort:future&&self._newSortString?self._newSortString:self._activeSort,fail:!self._$show.length&&self._activeFilter!=='',$targets:self._$targets,$show:self._$show,$hide:self._$hide,totalTargets:self._$targets.length,totalShow:self._$show.length,totalHide:self._$hide.length,display:future&&self._newDisplay?self._newDisplay:self.layout.display};if(future){return self._execFilter('_buildState',state)}else{self._state=state;self._execAction('_buildState',1)}},_goMix:function(animate){var self=this,phase1=function(){if(self._chrome&&(self._chrome===31)){chromeFix(self._$parent[0])}
self._setInter();phase2()},phase2=function(){var scrollTop=window.pageYOffset,scrollLeft=window.pageXOffset,docHeight=document.documentElement.scrollHeight;self._getInterMixData();self._setFinal();self._getFinalMixData();(window.pageYOffset!==scrollTop)&&window.scrollTo(scrollLeft,scrollTop);self._prepTargets();if(window.requestAnimationFrame){requestAnimationFrame(phase3)}else{setTimeout(function(){phase3()},20)}},phase3=function(){self._animateTargets();if(self._targetsBound===0){self._cleanUp()}},chromeFix=function(grid){var parent=grid.parentElement,placeholder=document.createElement('div'),frag=document.createDocumentFragment();parent.insertBefore(placeholder,grid);frag.appendChild(grid);parent.replaceChild(grid,placeholder)},futureState=self._buildState(!0);self._execAction('_goMix',0,arguments);!self.animation.duration&&(animate=!1);self._mixing=!0;self._$container.removeClass(self.layout.containerClassFail);if(typeof self.callbacks.onMixStart==='function'){self.callbacks.onMixStart.call(self._domNode,self._state,futureState,self)}
self._$container.trigger('mixStart',[self._state,futureState,self]);self._getOrigMixData();if(animate&&!self._suckMode){window.requestAnimationFrame?requestAnimationFrame(phase1):phase1()}else{self._cleanUp()}
self._execAction('_goMix',1,arguments)},_getTargetData:function(el,stage){var self=this,elStyle;el.dataset[stage+'PosX']=el.offsetLeft;el.dataset[stage+'PosY']=el.offsetTop;if(self.animation.animateResizeTargets){elStyle=!self._suckMode?window.getComputedStyle(el):{marginBottom:'',marginRight:''};el.dataset[stage+'MarginBottom']=parseInt(elStyle.marginBottom);el.dataset[stage+'MarginRight']=parseInt(elStyle.marginRight);el.dataset[stage+'Width']=el.offsetWidth;el.dataset[stage+'Height']=el.offsetHeight}},_getOrigMixData:function(){var self=this,parentStyle=!self._suckMode?window.getComputedStyle(self._$parent[0]):{boxSizing:''},parentBS=parentStyle.boxSizing||parentStyle[self._vendor+'BoxSizing'];self._incPadding=(parentBS==='border-box');self._execAction('_getOrigMixData',0);!self._suckMode&&(self.effects=self._parseEffects());self._$toHide=self._$hide.filter(':visible');self._$toShow=self._$show.filter(':hidden');self._$pre=self._$targets.filter(':visible');self._startHeight=self._incPadding?self._$parent.outerHeight():self._$parent.height();for(var i=0;i<self._$pre.length;i++){var el=self._$pre[i];self._getTargetData(el,'orig')}
self._execAction('_getOrigMixData',1)},_setInter:function(){var self=this;self._execAction('_setInter',0);if(self._changingLayout&&self.animation.animateChangeLayout){self._$toShow.css('display',self._newDisplay);if(self._changingClass){self._$container.removeClass(self.layout.containerClass).addClass(self._newClass)}}else{self._$toShow.css('display',self.layout.display)}
self._execAction('_setInter',1)},_getInterMixData:function(){var self=this;self._execAction('_getInterMixData',0);for(var i=0;i<self._$toShow.length;i++){var el=self._$toShow[i];self._getTargetData(el,'inter')}
for(var i=0;i<self._$pre.length;i++){var el=self._$pre[i];self._getTargetData(el,'inter')}
self._execAction('_getInterMixData',1)},_setFinal:function(){var self=this;self._execAction('_setFinal',0);self._sorting&&self._printSort();self._$toHide.removeStyle('display');if(self._changingLayout&&self.animation.animateChangeLayout){self._$pre.css('display',self._newDisplay)}
self._execAction('_setFinal',1)},_getFinalMixData:function(){var self=this;self._execAction('_getFinalMixData',0);for(var i=0;i<self._$toShow.length;i++){var el=self._$toShow[i];self._getTargetData(el,'final')}
for(var i=0;i<self._$pre.length;i++){var el=self._$pre[i];self._getTargetData(el,'final')}
self._newHeight=self._incPadding?self._$parent.outerHeight():self._$parent.height();self._sorting&&self._printSort(!0);self._$toShow.removeStyle('display');self._$pre.css('display',self.layout.display);if(self._changingClass&&self.animation.animateChangeLayout){self._$container.removeClass(self._newClass).addClass(self.layout.containerClass)}
self._execAction('_getFinalMixData',1)},_prepTargets:function(){var self=this,transformCSS={_in:self._getPrefixedCSS('transform',self.effects.transformIn),_out:self._getPrefixedCSS('transform',self.effects.transformOut)};self._execAction('_prepTargets',0);if(self.animation.animateResizeContainer){self._$parent.css('height',self._startHeight+'px')}
for(var i=0;i<self._$toShow.length;i++){var el=self._$toShow[i],$el=$(el);el.style.opacity=self.effects.opacity;el.style.display=(self._changingLayout&&self.animation.animateChangeLayout)?self._newDisplay:self.layout.display;$el.css(transformCSS._in);if(self.animation.animateResizeTargets){el.style.width=el.dataset.finalWidth+'px';el.style.height=el.dataset.finalHeight+'px';el.style.marginRight=-(el.dataset.finalWidth-el.dataset.interWidth)+(el.dataset.finalMarginRight*1)+'px';el.style.marginBottom=-(el.dataset.finalHeight-el.dataset.interHeight)+(el.dataset.finalMarginBottom*1)+'px'}}
for(var i=0;i<self._$pre.length;i++){var el=self._$pre[i],$el=$(el),translate={x:el.dataset.origPosX-el.dataset.interPosX,y:el.dataset.origPosY-el.dataset.interPosY},transformCSS=self._getPrefixedCSS('transform','translate('+translate.x+'px,'+translate.y+'px)');$el.css(transformCSS);if(self.animation.animateResizeTargets){el.style.width=el.dataset.origWidth+'px';el.style.height=el.dataset.origHeight+'px';if(el.dataset.origWidth-el.dataset.finalWidth){el.style.marginRight=-(el.dataset.origWidth-el.dataset.interWidth)+(el.dataset.origMarginRight*1)+'px'}
if(el.dataset.origHeight-el.dataset.finalHeight){el.style.marginBottom=-(el.dataset.origHeight-el.dataset.interHeight)+(el.dataset.origMarginBottom*1)+'px'}}}
self._execAction('_prepTargets',1)},_animateTargets:function(){var self=this;self._execAction('_animateTargets',0);self._targetsDone=0;self._targetsBound=0;self._$parent.css(self._getPrefixedCSS('perspective',self.animation.perspectiveDistance+'px')).css(self._getPrefixedCSS('perspective-origin',self.animation.perspectiveOrigin));if(self.animation.animateResizeContainer){self._$parent.css(self._getPrefixedCSS('transition','height '+self.animation.duration+'ms ease')).css('height',self._newHeight+'px')}
for(var i=0;i<self._$toShow.length;i++){var el=self._$toShow[i],$el=$(el),translate={x:el.dataset.finalPosX-el.dataset.interPosX,y:el.dataset.finalPosY-el.dataset.interPosY},delay=self._getDelay(i),toShowCSS={};el.style.opacity='';for(var j=0;j<2;j++){var a=j===0?a=self._prefix:'';if(self._ff&&self._ff<=20){toShowCSS[a+'transition-property']='all';toShowCSS[a+'transition-timing-function']=self.animation.easing+'ms';toShowCSS[a+'transition-duration']=self.animation.duration+'ms'}
toShowCSS[a+'transition-delay']=delay+'ms';toShowCSS[a+'transform']='translate('+translate.x+'px,'+translate.y+'px)'}
if(self.effects.transform||self.effects.opacity){self._bindTargetDone($el)}(self._ff&&self._ff<=20)?$el.css(toShowCSS):$el.css(self.effects.transition).css(toShowCSS)}
for(var i=0;i<self._$pre.length;i++){var el=self._$pre[i],$el=$(el),translate={x:el.dataset.finalPosX-el.dataset.interPosX,y:el.dataset.finalPosY-el.dataset.interPosY},delay=self._getDelay(i);if(!(el.dataset.finalPosX===el.dataset.origPosX&&el.dataset.finalPosY===el.dataset.origPosY)){self._bindTargetDone($el)}
$el.css(self._getPrefixedCSS('transition','all '+self.animation.duration+'ms '+self.animation.easing+' '+delay+'ms'));$el.css(self._getPrefixedCSS('transform','translate('+translate.x+'px,'+translate.y+'px)'));if(self.animation.animateResizeTargets){if(el.dataset.origWidth-el.dataset.finalWidth&&el.dataset.finalWidth*1){el.style.width=el.dataset.finalWidth+'px';el.style.marginRight=-(el.dataset.finalWidth-el.dataset.interWidth)+(el.dataset.finalMarginRight*1)+'px'}
if(el.dataset.origHeight-el.dataset.finalHeight&&el.dataset.finalHeight*1){el.style.height=el.dataset.finalHeight+'px';el.style.marginBottom=-(el.dataset.finalHeight-el.dataset.interHeight)+(el.dataset.finalMarginBottom*1)+'px'}}}
if(self._changingClass){self._$container.removeClass(self.layout.containerClass).addClass(self._newClass)}
for(var i=0;i<self._$toHide.length;i++){var el=self._$toHide[i],$el=$(el),delay=self._getDelay(i),toHideCSS={};for(var j=0;j<2;j++){var a=j===0?a=self._prefix:'';toHideCSS[a+'transition-delay']=delay+'ms';toHideCSS[a+'transform']=self.effects.transformOut;toHideCSS.opacity=self.effects.opacity}
$el.css(self.effects.transition).css(toHideCSS);if(self.effects.transform||self.effects.opacity){self._bindTargetDone($el)}}
self._execAction('_animateTargets',1)},_bindTargetDone:function($el){var self=this,el=$el[0];self._execAction('_bindTargetDone',0,arguments);if(!el.dataset.bound){el.dataset.bound=!0;self._targetsBound++;$el.on('webkitTransitionEnd.mixItUp transitionend.mixItUp',function(e){if((e.originalEvent.propertyName.indexOf('transform')>-1||e.originalEvent.propertyName.indexOf('opacity')>-1)&&$(e.originalEvent.target).is(self.selectors.target)){$el.off('.mixItUp');delete el.dataset.bound;self._targetDone()}})}
self._execAction('_bindTargetDone',1,arguments)},_targetDone:function(){var self=this;self._execAction('_targetDone',0);self._targetsDone++;(self._targetsDone===self._targetsBound)&&self._cleanUp();self._execAction('_targetDone',1)},_cleanUp:function(){var self=this,targetStyles=self.animation.animateResizeTargets?'transform opacity width height margin-bottom margin-right':'transform opacity',unBrake=function(){self._$targets.removeStyle('transition',self._prefix)};self._execAction('_cleanUp',0);!self._changingLayout?self._$show.css('display',self.layout.display):self._$show.css('display',self._newDisplay);self._$targets.css(self._brake);self._$targets.removeStyle(targetStyles,self._prefix).removeAttr('data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom');self._$hide.removeStyle('display');self._$parent.removeStyle('height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin',self._prefix);if(self._sorting){self._printSort();self._activeSort=self._newSortString;self._sorting=!1}
if(self._changingLayout){if(self._changingDisplay){self.layout.display=self._newDisplay;self._changingDisplay=!1}
if(self._changingClass){self._$parent.removeClass(self.layout.containerClass).addClass(self._newClass);self.layout.containerClass=self._newClass;self._changingClass=!1}
self._changingLayout=!1}
self._refresh();self._buildState();if(self._state.fail){self._$container.addClass(self.layout.containerClassFail)}
self._$show=$();self._$hide=$();if(window.requestAnimationFrame){requestAnimationFrame(unBrake)}
self._mixing=!1;if(typeof self.callbacks._user==='function'){self.callbacks._user.call(self._domNode,self._state,self)}
if(typeof self.callbacks.onMixEnd==='function'){self.callbacks.onMixEnd.call(self._domNode,self._state,self)}
self._$container.trigger('mixEnd',[self._state,self]);if(self._state.fail){(typeof self.callbacks.onMixFail==='function')&&self.callbacks.onMixFail.call(self._domNode,self._state,self);self._$container.trigger('mixFail',[self._state,self])}
if(self._loading){(typeof self.callbacks.onMixLoad==='function')&&self.callbacks.onMixLoad.call(self._domNode,self._state,self);self._$container.trigger('mixLoad',[self._state,self])}
if(self._queue.length){self._execAction('_queue',0);self.multiMix(self._queue[0][0],self._queue[0][1],self._queue[0][2]);self._queue.splice(0,1)}
self._execAction('_cleanUp',1);self._loading=!1},_getPrefixedCSS:function(property,value,prefixValue){var self=this,styles={},prefix='',i=-1;for(i=0;i<2;i++){prefix=i===0?self._prefix:'';prefixValue?styles[prefix+property]=prefix+value:styles[prefix+property]=value}
return self._execFilter('_getPrefixedCSS',styles,arguments)},_getDelay:function(i){var self=this,n=typeof self.animation.staggerSequence==='function'?self.animation.staggerSequence.call(self._domNode,i,self._state):i,delay=self.animation.stagger?n*self.animation.staggerDuration:0;return self._execFilter('_getDelay',delay,arguments)},_parseMultiMixArgs:function(args){var self=this,output={command:null,animate:self.animation.enable,callback:null};for(var i=0;i<args.length;i++){var arg=args[i];if(arg!==null){if(typeof arg==='object'||typeof arg==='string'){output.command=arg}else if(typeof arg==='boolean'){output.animate=arg}else if(typeof arg==='function'){output.callback=arg}}}
return self._execFilter('_parseMultiMixArgs',output,arguments)},_parseInsertArgs:function(args){var self=this,output={index:0,$object:$(),multiMix:{filter:self._state.activeFilter},callback:null};for(var i=0;i<args.length;i++){var arg=args[i];if(typeof arg==='number'){output.index=arg}else if(typeof arg==='object'&&arg instanceof $){output.$object=arg}else if(typeof arg==='object'&&self._helpers._isElement(arg)){output.$object=$(arg)}else if(typeof arg==='object'&&arg!==null){output.multiMix=arg}else if(typeof arg==='boolean'&&!arg){output.multiMix=!1}else if(typeof arg==='function'){output.callback=arg}}
return self._execFilter('_parseInsertArgs',output,arguments)},_execAction:function(methodName,isPost,args){var self=this,context=isPost?'post':'pre';if(!self._actions.isEmptyObject&&self._actions.hasOwnProperty(methodName)){for(var key in self._actions[methodName][context]){self._actions[methodName][context][key].call(self,args)}}},_execFilter:function(methodName,value,args){var self=this;if(!self._filters.isEmptyObject&&self._filters.hasOwnProperty(methodName)){for(var key in self._filters[methodName]){return self._filters[methodName][key].call(self,args)}}else{return value}},_helpers:{_camelCase:function(string){return string.replace(/-([a-z])/g,function(g){return g[1].toUpperCase()})},_isElement:function(el){if(window.HTMLElement){return el instanceof HTMLElement}else{return(el!==null&&el.nodeType===1&&el.nodeName==='string')}}},isMixing:function(){var self=this;return self._execFilter('isMixing',self._mixing)},filter:function(){var self=this,args=self._parseMultiMixArgs(arguments);self._clicking&&(self._toggleString='');self.multiMix({filter:args.command},args.animate,args.callback)},sort:function(){var self=this,args=self._parseMultiMixArgs(arguments);self.multiMix({sort:args.command},args.animate,args.callback)},changeLayout:function(){var self=this,args=self._parseMultiMixArgs(arguments);self.multiMix({changeLayout:args.command},args.animate,args.callback)},multiMix:function(){var self=this,args=self._parseMultiMixArgs(arguments);self._execAction('multiMix',0,arguments);if(!self._mixing){if(self.controls.enable&&!self._clicking){self.controls.toggleFilterButtons&&self._buildToggleArray();self._updateControls(args.command,self.controls.toggleFilterButtons)}(self._queue.length<2)&&(self._clicking=!1);delete self.callbacks._user;if(args.callback)self.callbacks._user=args.callback;var sort=args.command.sort,filter=args.command.filter,changeLayout=args.command.changeLayout;self._refresh();if(sort){self._newSort=self._parseSort(sort);self._newSortString=sort;self._sorting=!0;self._sort()}
if(filter!==undf){filter=(filter==='all')?self.selectors.target:filter;self._activeFilter=filter}
self._filter();if(changeLayout){self._newDisplay=(typeof changeLayout==='string')?changeLayout:changeLayout.display||self.layout.display;self._newClass=changeLayout.containerClass||'';if(self._newDisplay!==self.layout.display||self._newClass!==self.layout.containerClass){self._changingLayout=!0;self._changingClass=(self._newClass!==self.layout.containerClass);self._changingDisplay=(self._newDisplay!==self.layout.display)}}
self._$targets.css(self._brake);self._goMix(args.animate^self.animation.enable?args.animate:self.animation.enable);self._execAction('multiMix',1,arguments)}else{if(self.animation.queue&&self._queue.length<self.animation.queueLimit){self._queue.push(arguments);(self.controls.enable&&!self._clicking)&&self._updateControls(args.command);self._execAction('multiMixQueue',1,arguments)}else{if(typeof self.callbacks.onMixBusy==='function'){self.callbacks.onMixBusy.call(self._domNode,self._state,self)}
self._$container.trigger('mixBusy',[self._state,self]);self._execAction('multiMixBusy',1,arguments)}}},insert:function(){var self=this,args=self._parseInsertArgs(arguments),callback=(typeof args.callback==='function')?args.callback:null,frag=document.createDocumentFragment(),target=(function(){self._refresh();if(self._$targets.length){return(args.index<self._$targets.length||!self._$targets.length)?self._$targets[args.index]:self._$targets[self._$targets.length-1].nextElementSibling}else{return self._$parent[0].children[0]}})();self._execAction('insert',0,arguments);if(args.$object){for(var i=0;i<args.$object.length;i++){var el=args.$object[i];frag.appendChild(el);frag.appendChild(document.createTextNode(' '))}
self._$parent[0].insertBefore(frag,target)}
self._execAction('insert',1,arguments);if(typeof args.multiMix==='object'){self.multiMix(args.multiMix,callback)}},prepend:function(){var self=this,args=self._parseInsertArgs(arguments);self.insert(0,args.$object,args.multiMix,args.callback)},append:function(){var self=this,args=self._parseInsertArgs(arguments);self.insert(self._state.totalTargets,args.$object,args.multiMix,args.callback)},getOption:function(string){var self=this,getProperty=function(obj,prop){var parts=prop.split('.'),last=parts.pop(),l=parts.length,i=1,current=parts[0]||prop;while((obj=obj[current])&&i<l){current=parts[i];i++}
if(obj!==undf){return obj[last]!==undf?obj[last]:obj}};return string?self._execFilter('getOption',getProperty(self,string),arguments):self},setOptions:function(config){var self=this;self._execAction('setOptions',0,arguments);typeof config==='object'&&$.extend(!0,self,config);self._execAction('setOptions',1,arguments)},getState:function(){var self=this;return self._execFilter('getState',self._state,self)},forceRefresh:function(){var self=this;self._refresh(!1,!0)},destroy:function(hideAll){var self=this,filters=$.MixItUp.prototype._bound._filter,sorts=$.MixItUp.prototype._bound._sort;self._execAction('destroy',0,arguments);self._$body.add($(self.selectors.sort)).add($(self.selectors.filter)).off('.mixItUp');for(var i=0;i<self._$targets.length;i++){var target=self._$targets[i];hideAll&&(target.style.display='');delete target.mixParent}
self._execAction('destroy',1,arguments);if(filters[self.selectors.filter]&&filters[self.selectors.filter]>1){filters[self.selectors.filter]--}else if(filters[self.selectors.filter]===1){delete filters[self.selectors.filter]}
if(sorts[self.selectors.sort]&&sorts[self.selectors.sort]>1){sorts[self.selectors.sort]--}else if(sorts[self.selectors.sort]===1){delete sorts[self.selectors.sort]}
delete $.MixItUp.prototype._instances[self._id]}};$.fn.mixItUp=function(){var args=arguments,dataReturn=[],eachReturn,_instantiate=function(domNode,settings){var instance=new $.MixItUp(),rand=function(){return('00000'+(Math.random()*16777216<<0).toString(16)).substr(-6).toUpperCase()};instance._execAction('_instantiate',0,arguments);domNode.id=!domNode.id?'MixItUp'+rand():domNode.id;if(!instance._instances[domNode.id]){instance._instances[domNode.id]=instance;instance._init(domNode,settings)}
instance._execAction('_instantiate',1,arguments)};eachReturn=this.each(function(){if(args&&typeof args[0]==='string'){var instance=$.MixItUp.prototype._instances[this.id];if(args[0]==='isLoaded'){dataReturn.push(instance?!0:!1)}else{var data=instance[args[0]](args[1],args[2],args[3]);if(data!==undf)dataReturn.push(data)}}else{_instantiate(this,args[0])}});if(dataReturn.length){return dataReturn.length>1?dataReturn:dataReturn[0]}else{return eachReturn}};$.fn.removeStyle=function(style,prefix){prefix=prefix?prefix:'';return this.each(function(){var el=this,styles=style.split(' ');for(var i=0;i<styles.length;i++){for(var j=0;j<4;j++){switch(j){case 0:var prop=styles[i];break;case 1:var prop=$.MixItUp.prototype._helpers._camelCase(prop);break;case 2:var prop=prefix+styles[i];break;case 3:var prop=$.MixItUp.prototype._helpers._camelCase(prefix+styles[i])}
if(el.style[prop]!==undf&&typeof el.style[prop]!=='unknown'&&el.style[prop].length>0){el.style[prop]=''}
if(!prefix&&j===1)break}}
if(el.attributes&&el.attributes.style&&el.attributes.style!==undf&&el.attributes.style.value===''){el.attributes.removeNamedItem('style')}})}})(jQuery);/**
 * Owl Carousel v2.2.0
 * Copyright 2013-2016 David Deutsch
 * Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($,window,document,undefined){/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat--) {
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			if (this.settings.center) {
				this.$stage.children('.center').removeClass('center');
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
			.wrap('<div class="' + this.settings.stageOuterClass + '"/>');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.$element.is(':visible')) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.$element.is(':visible')) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			reciprocalItemsWidth = this._items[--iterator].width();
			elementWidth = this.$element.width();
			while (iterator--) {
				reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
				if (reciprocalItemsWidth > elementWidth) {
					break;
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.$element.is(':visible')) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			throw 'Can not detect viewport width.';
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();

		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.$element.is(':visible');
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.$element.is(':visible') === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url(' + url + ')',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
				video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="//player.vimeo.com/video/' + video.id +
				'?autoplay=1" width="' + width + '" height="' + height +
				'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		} else if (video.type === 'vzaar') {
			html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
				'" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
				'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
		}

		$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout.
		 * @type {Timeout}
		 */
		this._timeout = null;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position') {
					//console.log('play?', e);
					if (this._core.settings.autoplay) {
						this._setAutoPlayInterval();
					}
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		this._paused = false;

		if (this._core.is('rotating')) {
			return;
		}

		this._core.enter('rotating');

		this._setAutoPlayInterval();
	};

	/**
	 * Gets a new timeout
	 * @private
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 * @return {Timeout}
	 */
	Autoplay.prototype._getNextTimeout = function(timeout, speed) {
		if ( this._timeout ) {
			window.clearTimeout(this._timeout);
		}
		return window.setTimeout($.proxy(function() {
			if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
				return;
			}
			this._core.next(speed || this._core.settings.autoplaySpeed);
		}, this), timeout || this._core.settings.autoplayTimeout);
	};

	/**
	 * Sets autoplay in motion.
	 * @private
	 */
	Autoplay.prototype._setAutoPlayInterval = function() {
		this._timeout = this._getNextTimeout();
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		window.clearTimeout(this._timeout);
		this._core.leave('rotating');
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		this._paused = true;
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){'use strict';/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<div>')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){'use strict';/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){var style=$('<support>').get(0).style,prefixes='Webkit Moz O ms'.split(' '),events={transition:{end:{WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd',transition:'transitionend'}},animation:{end:{WebkitAnimation:'webkitAnimationEnd',MozAnimation:'animationend',OAnimation:'oAnimationEnd',animation:'animationend'}}},tests={csstransforms:function(){return!!test('transform')},csstransforms3d:function(){return!!test('perspective')},csstransitions:function(){return!!test('transition')},cssanimations:function(){return!!test('animation')}};function test(property,prefixed){var result=!1,upper=property.charAt(0).toUpperCase()+property.slice(1);$.each((property+' '+prefixes.join(upper+' ')+upper).split(' '),function(i,property){if(style[property]!==undefined){result=prefixed?property:!0;return!1}});return result}
function prefixed(property){return test(property,!0)}
if(tests.csstransitions()){$.support.transition=new String(prefixed('transition'))
$.support.transition.end=events.transition.end[$.support.transition]}
if(tests.cssanimations()){$.support.animation=new String(prefixed('animation'))
$.support.animation.end=events.animation.end[$.support.animation]}
if(tests.csstransforms()){$.support.transform=new String(prefixed('transform'));$.support.transform3d=tests.csstransforms3d()}})(window.Zepto||window.jQuery,window,document);/*! WOW - v1.0.1 - 2014-08-15
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d=function(a,b){return function(){return a.apply(b,arguments)}},e=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),this.WOW=function(){function f(a){null==a&&(a={}),this.scrollCallback=d(this.scrollCallback,this),this.scrollHandler=d(this.scrollHandler,this),this.start=d(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return f.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0},f.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start),this.finished=[]},f.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else{for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}return this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},f.prototype.stop=function(){return this.stopped=!0,window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},f.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},f.prototype.doSync=function(a){var b,c,d,f,g;if(!this.stopped){if(null==a&&(a=this.element),1!==a.nodeType)return;for(a=a.parentNode||a,f=a.querySelectorAll("."+this.config.boxClass),g=[],c=0,d=f.length;d>c;c++)b=f[c],e.call(this.all,b)<0?(this.applyStyle(b,!0),this.boxes.push(b),this.all.push(b),g.push(this.scrolled=!0)):g.push(void 0);return g}},f.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},f.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},f.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),f.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.setAttribute("style","visibility: visible;"));return e},f.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},f.prototype.vendors=["moz","webkit"],f.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},f.prototype.vendorCSS=function(a,b){var c,d,e,f,g,h;for(d=window.getComputedStyle(a),c=d.getPropertyCSSValue(b),h=this.vendors,f=0,g=h.length;g>f;f++)e=h[f],c=c||d.getPropertyCSSValue("-"+e+"-"+b);return c},f.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=window.getComputedStyle(a).getPropertyValue("animation-name")}return"none"===b?"":b},f.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},f.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},f.prototype.scrollHandler=function(){return this.scrolled=!0},f.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},f.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},f.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,innerHeight)-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},f.prototype.util=function(){return null!=this._util?this._util:this._util=new b},f.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},f}()}).call(this);/*!
 * The Final Countdown for jQuery v2.0.4 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2014 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function(factory){"use strict";if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){"use strict";var PRECISION=100;var instances=[],matchers=[];matchers.push(/^[0-9]*$/.source);matchers.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);matchers.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);matchers=new RegExp(matchers.join("|"));function parseDateString(dateString){if(dateString instanceof Date){return dateString}
if(String(dateString).match(matchers)){if(String(dateString).match(/^[0-9]*$/)){dateString=Number(dateString)}
if(String(dateString).match(/\-/)){dateString=String(dateString).replace(/\-/g,"/")}
return new Date(dateString)}else{throw new Error("Couldn't cast `"+dateString+"` to a date object.")}}
var DIRECTIVE_KEY_MAP={Y:"years",m:"months",w:"weeks",d:"days",D:"totalDays",H:"hours",M:"minutes",S:"seconds"};function strftime(offsetObject){return function(format){var directives=format.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(directives){for(var i=0,len=directives.length;i<len;++i){var directive=directives[i].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),regexp=new RegExp(directive[0]),modifier=directive[1]||"",plural=directive[3]||"",value=null;directive=directive[2];if(DIRECTIVE_KEY_MAP.hasOwnProperty(directive)){value=DIRECTIVE_KEY_MAP[directive];value=Number(offsetObject[value])}
if(value!==null){if(modifier==="!"){value=pluralize(plural,value)}
if(modifier===""){if(value<10){value="0"+value.toString()}}
format=format.replace(regexp,value.toString())}}}
format=format.replace(/%%/,"%");return format}}
function pluralize(format,count){var plural="s",singular="";if(format){format=format.replace(/(:|;|\s)/gi,"").split(/\,/);if(format.length===1){plural=format[0]}else{singular=format[0];plural=format[1]}}
if(Math.abs(count)===1){return singular}else{return plural}}
var Countdown=function(el,finalDate,callback){this.el=el;this.$el=$(el);this.interval=null;this.offset={};this.instanceNumber=instances.length;instances.push(this);this.$el.data("countdown-instance",this.instanceNumber);if(callback){this.$el.on("update.countdown",callback);this.$el.on("stoped.countdown",callback);this.$el.on("finish.countdown",callback)}
this.setFinalDate(finalDate);this.start()};$.extend(Countdown.prototype,{start:function(){if(this.interval!==null){clearInterval(this.interval)}
var self=this;this.update();this.interval=setInterval(function(){self.update.call(self)},PRECISION)},stop:function(){clearInterval(this.interval);this.interval=null;this.dispatchEvent("stoped")},pause:function(){this.stop.call(this)},resume:function(){this.start.call(this)},remove:function(){this.stop();instances[this.instanceNumber]=null;delete this.$el.data().countdownInstance},setFinalDate:function(value){this.finalDate=parseDateString(value)},update:function(){if(this.$el.closest("html").length===0){this.remove();return}
this.totalSecsLeft=this.finalDate.getTime()-new Date().getTime();this.totalSecsLeft=Math.ceil(this.totalSecsLeft/1e3);this.totalSecsLeft=this.totalSecsLeft<0?0:this.totalSecsLeft;this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,totalDays:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30),years:Math.floor(this.totalSecsLeft/60/60/24/365)};if(this.totalSecsLeft===0){this.stop();this.dispatchEvent("finish")}else{this.dispatchEvent("update")}},dispatchEvent:function(eventName){var event=$.Event(eventName+".countdown");event.finalDate=this.finalDate;event.offset=$.extend({},this.offset);event.strftime=strftime(this.offset);this.$el.trigger(event)}});$.fn.countdown=function(){var argumentsArray=Array.prototype.slice.call(arguments,0);return this.each(function(){var instanceNumber=$(this).data("countdown-instance");if(instanceNumber!==undefined){var instance=instances[instanceNumber],method=argumentsArray[0];if(Countdown.prototype.hasOwnProperty(method)){instance[method].apply(instance,argumentsArray.slice(1))}else if(String(method).match(/^[$A-Z_][0-9A-Z_$]*$/i)===null){instance.setFinalDate.call(instance,method);instance.start()}else{$.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,method))}}else{new Countdown(this,argumentsArray[0],argumentsArray[1])}})}});(function($){$.fn.appear=function(fn,options){var settings=$.extend({data:undefined,one:!0,accX:0,accY:0},options);return this.each(function(){var t=$(this);t.appeared=!1;if(!fn){t.trigger('appear',settings.data);return}
var w=$(window);var check=function(){if(!t.is(':visible')){t.appeared=!1;return}
var a=w.scrollLeft();var b=w.scrollTop();var o=t.offset();var x=o.left;var y=o.top;var ax=settings.accX;var ay=settings.accY;var th=t.height();var wh=w.height();var tw=t.width();var ww=w.width();if(y+th+ay>=b&&y<=b+wh+ay&&x+tw+ax>=a&&x<=a+ww+ax){if(!t.appeared)t.trigger('appear',settings.data)}else{t.appeared=!1}};var modifiedFn=function(){t.appeared=!0;if(settings.one){w.unbind('scroll',check);var i=$.inArray(check,$.fn.appear.checks);if(i>=0)$.fn.appear.checks.splice(i,1)}
fn.apply(this,arguments)};if(settings.one)t.one('appear',settings.data,modifiedFn);else t.bind('appear',settings.data,modifiedFn);w.scroll(check);$.fn.appear.checks.push(check);(check)()})};$.extend($.fn.appear,{checks:[],timeout:null,checkAll:function(){var length=$.fn.appear.checks.length;if(length>0)while(length--)($.fn.appear.checks[length])();},run:function(){if($.fn.appear.timeout)clearTimeout($.fn.appear.timeout);$.fn.appear.timeout=setTimeout($.fn.appear.checkAll,20)}});$.each(['append','prepend','after','before','attr','removeAttr','addClass','removeClass','toggleClass','remove','css','show','hide'],function(i,n){var old=$.fn[n];if(old){$.fn[n]=function(){var r=old.apply(this,arguments);$.fn.appear.run();return r}}})})(jQuery);window.onload=MapLoadScript;function GmapInit(){Gmap=jQuery('.map-canvas');Gmap.each(function(){var $this=jQuery(this),lat='',lng='',zoom=12,scrollwheel=!1,zoomcontrol=!0,draggable=!0,mapType=google.maps.MapTypeId.ROADMAP,title='',contentString='',theme_icon_path=$this.data('icon-path'),dataLat=$this.data('lat'),dataLng=$this.data('lng'),dataZoom=$this.data('zoom'),dataType=$this.data('type'),dataScrollwheel=$this.data('scrollwheel'),dataZoomcontrol=$this.data('zoomcontrol'),dataHue=$this.data('hue'),dataTitle=$this.data('title'),dataContent=$this.data('content');if(dataZoom!==undefined&&dataZoom!==!1){zoom=parseFloat(dataZoom)}
if(dataLat!==undefined&&dataLat!==!1){lat=parseFloat(dataLat)}
if(dataLng!==undefined&&dataLng!==!1){lng=parseFloat(dataLng)}
if(dataScrollwheel!==undefined&&dataScrollwheel!==null){scrollwheel=dataScrollwheel}
if(dataZoomcontrol!==undefined&&dataZoomcontrol!==null){zoomcontrol=dataZoomcontrol}
if(dataType!==undefined&&dataType!==!1){if(dataType=='satellite'){mapType=google.maps.MapTypeId.SATELLITE}else if(dataType=='hybrid'){mapType=google.maps.MapTypeId.HYBRID}else if(dataType=='terrain'){mapType=google.maps.MapTypeId.TERRAIN}}
if(dataTitle!==undefined&&dataTitle!==!1){title=dataTitle}
if(navigator.userAgent.match(/iPad|iPhone|Android/i)){draggable=!1}
var mapOptions={zoom:zoom,scrollwheel:scrollwheel,zoomControl:zoomcontrol,draggable:draggable,center:new google.maps.LatLng(lat,lng),mapTypeId:mapType};var map=new google.maps.Map($this[0],mapOptions);var image=theme_icon_path;if(dataContent!==undefined&&dataContent!==!1){contentString='<div class="map-data">'+'<h6>'+title+'</h6>'+'<div class="map-content">'+dataContent+'</div>'+'</div>'}
var infowindow=new google.maps.InfoWindow({content:contentString});var marker=new google.maps.Marker({position:new google.maps.LatLng(lat,lng),map:map,icon:image,title:title});if(dataContent!==undefined&&dataContent!==!1){google.maps.event.addListener(marker,'click',function(){infowindow.open(map,marker)})}
if(dataHue!==undefined&&dataHue!==!1){var styles=[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];map.setOptions({styles:styles})}})}
function MapLoadScript(){var script=document.createElement('script');script.type='text/javascript';GmapInit();document.body.appendChild(script)};(function($){"use strict";function handlePreloader(){if($('.preloader').length){$('.preloader').delay(200).fadeOut(500)}}
function headerStyle(){if($('.main-header').length){var windowpos=$(window).scrollTop();var siteHeader=$('.main-header');var siteHeaderHeight=$('.main-header').height();var scrollLink=$('.scroll-to-top');if(windowpos>=siteHeaderHeight){siteHeader.addClass('fixed-header');scrollLink.fadeIn(300)}else{siteHeader.removeClass('fixed-header');scrollLink.fadeOut(300)}}}
headerStyle();if($('.main-header li.dropdown ul').length){$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');$('.main-header li.dropdown .dropdown-btn').on('click',function(){$(this).prev('ul').slideToggle(500)});$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click',function(e){e.preventDefault()})}
if($('.appointment-box-btn .appointment-btn').length){$('.appointment-box-btn .appointment-btn').on('click',function(e){e.preventDefault();$('body').toggleClass('app-form-visible')})}
if($('.tabs-box').length){$('.tabs-box .tab-buttons .tab-btn').on('click',function(e){e.preventDefault();var target=$($(this).attr('data-tab'));if($(target).is(':visible')){return!1}else{target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');$(this).addClass('active-btn');target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');$(target).fadeIn(300);$(target).addClass('active-tab')}})}
if($('.two-item-carousel').length){$('.two-item-carousel').owlCarousel({loop:!0,margin:30,nav:!0,smartSpeed:700,autoplay:5000,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},600:{items:1},800:{items:2},1024:{items:2},1200:{items:2},1400:{items:2}}})}
if($('.comparison-carousel').length){$('.comparison-carousel').owlCarousel({loop:!0,margin:0,nav:!0,smartSpeed:700,autoplay:5000,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},600:{items:1},800:{items:1},1024:{items:1},1200:{items:1},1400:{items:1}}})}
if($('.project-carousel').length){$('.project-carousel').owlCarousel({loop:!0,margin:30,nav:!0,smartSpeed:700,autoplay:5000,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},600:{items:2},800:{items:3},1024:{items:4},1200:{items:5},}})}
if($('.project-tab').length){$('.project-tab .product-tab-btns .p-tab-btn').on('click',function(e){e.preventDefault();var target=$($(this).attr('data-tab'));if($(target).hasClass('actve-tab')){return!1}else{$('.project-tab .product-tab-btns .p-tab-btn').removeClass('active-btn');$(this).addClass('active-btn');$('.project-tab .p-tabs-content .p-tab').removeClass('active-tab');$(target).addClass('active-tab')}})}
if($('.quantity-spinner').length){$("input.quantity-spinner").TouchSpin({verticalbuttons:!0})}
if($('.time-countdown').length){$('.time-countdown').each(function(){var $this=$(this),finalDate=$(this).data('countdown');$this.countdown(finalDate,function(event){var $this=$(this).html(event.strftime(''+'<div class="counter-column"><span class="count">%D</span>Days</div> '+'<div class="counter-column"><span class="count">%H</span>Hours</div>  '+'<div class="counter-column"><span class="count">%M</span>Minutes</div>  '+'<div class="counter-column"><span class="count">%S</span>Seconds</div>'))})})}
if($('.accordion-box').length){$(".accordion-box").on('click','.acc-btn',function(){var outerBox=$(this).parents('.accordion-box');var target=$(this).parents('.accordion');if($(this).hasClass('active')!==!0){$(outerBox).find('.accordion .acc-btn').removeClass('active')}
if($(this).next('.acc-content').is(':visible')){return!1}else{$(this).addClass('active');$(outerBox).children('.accordion').removeClass('active-block');$(outerBox).find('.accordion').children('.acc-content').slideUp(300);target.addClass('active-block');$(this).next('.acc-content').slideDown(300)}})}
if($('.four-item-carousel').length){$('.four-item-carousel').owlCarousel({loop:!0,margin:30,nav:!0,smartSpeed:700,autoplay:4000,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},600:{items:2},800:{items:2},1024:{items:3},1200:{items:4}}})}
if($('.sponsors-carousel').length){$('.sponsors-carousel').owlCarousel({loop:!0,margin:0,nav:!0,smartSpeed:500,autoplay:4000,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},480:{items:2},600:{items:4},800:{items:5},1024:{items:6}}})}
if($('.lightbox-image').length){$('.lightbox-image').fancybox({openEffect:'fade',closeEffect:'fade',helpers:{media:{}}})}
if($('#contact-form').length){$('#contact-form').validate({rules:{username:{required:!0},lastname:{required:!0},email:{required:!0,email:!0},phone:{required:!0},subject:{required:!0},message:{required:!0}}})}
if($('.filter-list').length){$('.filter-list').mixItUp({})}
if($('.scroll-to-target').length){$(".scroll-to-target").on('click',function(){var target=$(this).attr('data-target');$('html, body').animate({scrollTop:$(target).offset().top},1500)})}
if($('.wow').length){var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:0,mobile:!1,live:!0});wow.init()}
$(window).on('scroll',function(){headerStyle()});$(window).on('load',function(){handlePreloader()})})(window.jQuery);var addComment={moveForm:function(e,t,n,o){var r,i,d,m=this,l=m.I(e),a=m.I(n),c=m.I("cancel-comment-reply-link"),s=m.I("comment_parent"),e=m.I("comment_post_ID"),p=a.getElementsByTagName("form")[0];if(l&&a&&c&&s&&p){m.respondId=n,o=o||!1,m.I("wp-temp-form-div")||((m=document.createElement("div")).id="wp-temp-form-div",m.style.display="none",a.parentNode.insertBefore(m,a)),l.parentNode.insertBefore(a,l.nextSibling),e&&o&&(e.value=o),s.value=t,c.style.display="",c.onclick=function(){var e=addComment,t=e.I("wp-temp-form-div"),n=e.I(e.respondId);if(t&&n)return e.I("comment_parent").value="0",t.parentNode.insertBefore(n,t),t.parentNode.removeChild(t),this.style.display="none",this.onclick=null,!1};try{for(var f=0;f<p.elements.length;f++)if(r=p.elements[f],d=!1,"getComputedStyle"in window?i=window.getComputedStyle(r):document.documentElement.currentStyle&&(i=r.currentStyle),(r.offsetWidth<=0&&r.offsetHeight<=0||"hidden"===i.visibility)&&(d=!0),"hidden"!==r.type&&!r.disabled&&!d){r.focus();break}}catch(e){}return!1}},I:function(e){return document.getElementById(e)}};eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('C M=(9($){2r.3r(2r.3x,{5B:9(x,t,b,c,d){z((t/=d/2)<1)E c/2*t*t*t*t+b;E-c/2*((t-=2)*t*t*t-2)+b},});C v=$(1h);C w=v.13();v.1F(9(){w=v.13();M.2Y(A)});$.3Z.5A=9(){C c=$(7),3m;c.K(9(){3m=c.1M().1c});9 1p(){C b=v.44();c.K(9(){C a=$(7),1c=a.1M().1c,13=a.39(A);z(1c+13<b||1c>b+w||c.y(\'D-5z\')!==A)E;c.O(\'7M\',"50% "+2o.1H((3m-b)*0.4)+"1g")})}v.18(\'5y 1F\',1p).1b(\'1p\')};$.3Z.2E=9(d){C f={1v:\'7i\',1M:1j,2n:9(a){}};$.3r(f,d);C g=7,w=$(1h).13();7.4c=9(){C c=((8P.67.6c().1N(\'7g\')!=-1)?1h:\'1l\'),3f=$(c).44(),5x=(3f+w);g.K(9(){C a=$(7);z(a.1S(f.1v)&&f.1v!=\'\'){E}C b=2o.1H(a.1M().1c)+f.1M,5w=b+(a.13());z((b<5x)&&(5w>3f)&&7.8K!=A){a.W(f.1v);f.2n(a)}})};$(1h).5y(7.4c);7.4c();$(1h).1F(9(e){w=e.68.5v})};$(3R).1D(9($){M.1K($)});E{7j:0,7p:0,1z:$(\'1z\'),1K:9(){$(\'L[y-D-5z="A"]\').K(9(){$(7).5A()});7.36();7.17();7.1C.1K();z(1h.2C.1y.1N(\'#\')>-1){$(\'a[1y="#\'+1h.2C.1y.1B(\'#\')[1]+\'"]\').1b(\'Y\')}$(\'.6I\').2t(\'.5u\').3H();$(\'.D-3J-7o\').18(\'Y\',9(){$(7).1m().1m().7t(\'3M\',9(){$(7).3O()})});7.5s();7.5r.2k();7.46.2k();7.5q();7.5p();7.5o();7.2j.1K();7.2u.5n();7.5h();7.1V();7.5d();7.57();7.56();7.Z();7.2Y(A)},2J:9(b){2M(9(a){M.2j.1p(a);M.2u.1p(a);M.46.2k(a);z($(\'.55\').1s>0){55.2J(a)}},1j,b)},3s:9(a){C d=3R;z(d.5O===\'65\'){z(a==\'13\')E d.1z.54;J E d.1z.53}J{z(a==\'13\')E d.52.54;J E d.52.53}},2Y:9(c){C d=3R;[].6N.6T(d.51(\'L[y-D-4Z]\'),9(a){C b=d.51(\'.7h\')[0],1w;z(1i b===\'R\')E;1w=b.4Y();a.1q.19=(-1w.19)+\'1g\';z(a.14(\'y-D-4Z\')==\'8z\'){a.1q.4X=1w.19+\'1g\';a.1q.8B=(M.3s(\'V\')-1w.V-1w.19)+\'1g\';a.1q.V=1w.V+\'1g\'}J{a.1q.4X=\'8I\';a.1q.V=M.3s(\'V\')+\'1g\'}z(a.2I!==1W&&a.2I.8Q==\'5G\'){z(a.2I.5J==\'M.2Y(A);\'){a.5L.5M(a.2I)}}})},5s:9(b){$(\'.5N\').K(9(){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});C a=$(7);z(a.y(\'5Y\')==\'63\'){a.Y(9(){a.B(\'4b\').O("4W-34","6g")});a.6u(9(){a.B(\'4b\').O("4W-34","6A")})}a.B(\'.3J\').18(\'Y\',9(){a.B(\'.4V\').4Q("4O");a.B(\'.3a\').7c(\'3M\')});a.B(\'.3a\').18(\'Y\',9(){a.B(\'.4V\').4Q("4O");a.B(\'.3a\').7f(\'3M\')})})},36:9(d){$(\'.3b\').K(9(){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});C c=$(7).y(\'2p-G\')!==R?($(7).y(\'2p-G\')-1):0;z($(7).y(\'3e\')==A)c=\'7l\';$(7).B(\'>F.1e>1f.1d>a, >F.1e>1f.1d>.Q-36-8m-8y\').2H(\'Y\').18(\'Y\',9(e){C a=$(7).1n(\'.3b\'),L=$(7).1n(\'.1e\'),3o=(A===a.y(\'3o\'))?A:H,3e=(A===a.y(\'3e\'))?A:H,4I=L.B(\'>1f.1d\').1S(\'Q-1k-G\'),8N=H;z(3o===H){z(!L.B(\'>1f.1d\').1S(\'Q-1k-G\')){a.B(\'>.1e>.1Z\').3t();a.B(\'>.1e>1f.1d\').U(\'Q-1k-G\');a.B(\'>.1e.D-L-G\').U(\'D-L-G\');L.B(\'>.1Z\').2g().4F(\'4E\',9(){$(7).O({13:\'\'})});L.B(\'>1f.1d\').W(\'Q-1k-G\');L.W(\'D-L-G\')}J{a.B(\'>.1e>.1Z\').3t();a.B(\'>.1e>1f.1d\').U(\'Q-1k-G\');a.B(\'>.1e>.D-L-G\').U(\'D-L-G\');L.U(\'D-L-G\')}}J{z(L.B(\'>1f.1d\').1S(\'Q-1k-G\')){L.B(\'>.1Z\').2g().3t();L.B(\'>1f.1d\').U(\'Q-1k-G\');L.U(\'D-L-G\')}J{L.B(\'>.1Z\').2g().4F(\'4E\',9(){$(7).O({13:\'\'})});L.B(\'>1f.1d\').W(\'Q-1k-G\');L.W(\'D-L-G\')}}z(4I!=L.B(\'>1f.1d\').1S(\'Q-1k-G\'))M.2J(L.B(\'>.1Z\'));e.1I();C b=$(7).1n(\'.1e\');b=b.1m().B(\'>.1e\').4B(b.2f(0));$(7).1n(\'.3b\').y({\'2p-G\':(b+1)})}).2c(c).1b(\'Y\')})},17:9(d){$(\'.28 > .4A\').K(9(b){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});C c=$(7),2v=c.1m(\'.28.6b\'),2w=(\'P\'===2v.y(\'6n-18-4z\'))?\'4z\':\'Y\',4w=(\'P\'===2v.y(\'6F-6G\'))?A:H,4v=2B(2v.y(\'2p-G\'))-1;$(7).B(\'>.Q-17-3S>3T\').2H(\'Y\').18(\'Y\',9(e){e.1I()}).2H(2w).18(2w,9(e){z($(7).1S(\'Q-17-G\')){e.1I();E}C a=$(7).1n(\'.7a,.Q-17-3S\').B(\'>3T\'),b=a.4B(7),3U=$(7).1n(\'.4A\').B(\'>.7d\'),3V=3U.2c(b);a.U(\'Q-17-G\');$(7).W(\'Q-17-G\');3U.U(\'Q-17-1z-G\').U(\'D-L-G\');3V.W(\'Q-17-1z-G\').W(\'D-L-G\');z(4w===A)3V.O({\'27\':0}).Z({27:1});e.1I();$(7).1n(\'.28\').y({\'2p-G\':(b+1)})}).2c(4v).1b(2w)});$(\'.28.D-17-3Y\').K(9(){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});$(7).B(\'.D-17-3Y-3S 3T\').K(9(a){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});$(7).18(\'Y\',a,9(e){$(7).1m().B(\'.D-2D-G\').U(\'D-2D-G\');$(7).W(\'D-2D-G\');4t.7k(e.y);$(7).1n(\'.D-17-3Y\').B(\'.S-45\').1b(\'S.1Q\',e.y);e.1I();$(7).1n(\'.28\').y({\'G\':e.y})});z(a===0)$(7).W(\'D-2D-G\')})});M.3n()},4s:9(){$(\'.4s\').K(9(a){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});$(7).7y({X:1j,7N:7S})})},1C:{1K:9(){$(\'.8k, .8l\').K(9(){C a=$(7),4a,2L;z(a.y(\'D-1r-1U\')){4a=a.y(\'D-1r-1U\');2L=M.1C.4r(4a);z(2L){a.B(\'.2O-1r-1U\').3O();M.1C.2t(a,2L)}}J{a.B(\'.2O-1r-1U\').3O()}})},4r:9(a){z(\'R\'===1i(a)){E H}C b=a.8D(/(?:8F?:\\/{2})?(?:w{3}\\.)?8J(?:4q)?\\.(?:8L|4q)(?:\\/8M\\?v=|\\/)([^\\s&]+)/);z(1W!==b){E b[1]}E H},2t:9(c,d,f){z(38===R)E;z(\'R\'===1i(38.4p)){f=\'R\'===1i(f)?0:f;z(f>1j){4t.8T(\'8U 5D 5E 5F 2R 5H 5I\');E}2M(9(){M.1C.2t(c,d,f++)},1j);E}C g,$4o=c.5K(\'<F N="2O-1r-1U"><F N="4n"></F></F>\').B(\'.4n\'),16=c.y(\'D-1r-16\'),26={5P:d,5Q:3,5V:1,5W:1,30:1,5Z:0,60:0,61:0,62:1};16=16?4m.64(\'{"\'+16.25(/&/g,\'","\').25(/=/g,\'":"\')+\'"}\',9(a,b){E a===""?b:66(b)}):{};z(1i 16==\'3j\')26=$.3r(26,16);g=1Y 38.4p($4o[0],{V:\'1j%\',13:\'1j%\',69:d,26:26,34:{6a:9(e){z(c.y(\'D-1r-4l\')==\'P\')e.4k.4l().6d(A);e.4k.8W()}}});M.1C.1F(c);$(1h).18(\'1F\',9(){M.1C.1F(c)})},1F:9(a){C b=1.77,22,20,2x,2y,2e=a.6H(),24=a.5v();z((2e/24)<b){22=24*b;20=24}J{22=2e;20=2e*(1/b)}2x=-2o.1H((22-2e)/2)+\'1g\';2y=-2o.1H((20-24)/2)+\'1g\';22+=\'1g\';20+=\'1g\';a.B(\'.2O-1r-1U 4b\').O({6L:\'3u%\',2x:2x,2y:2y,V:22,13:20})}},6P:{2J:9(a){M.1V()}},5r:{2k:9(){$(\'.6R\').K(9(){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});C c=$(7),3v=c.B(\'2A\'),1E=3v.1s,1D=0;z(1E>0){3v.K(9(a){C b=1Y 4j();b.4i=9(){1D++;z(1D==1E){1Y 3z(c.2f(0),{3A:\'.1O-1L\',3D:\'.1O-1L\',})}};b.2F=$(7).2G(\'2F\')})}J{1Y 3z(c.2f(0),{3A:\'.1O-1L\',3D:\'.1O-1L\',})}})},},46:{2k:9(){$(\'.7m\').K(9(){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});z((\'P\'===$(7).y(\'7n\'))){C c=$(7).B(\'2A\'),1E=c.1s,1D=0,29=$(7);$(7).y({\'1E\':1E});c.K(9(a){C b=1Y 4j();b.4i=9(){1D++;z(1D==1E){1Y 3z(29.2f(0),{3A:\'.2a-1L\',3D:\'.2a-1L\',})}};b.2F=$(7).2G(\'2F\')})}});M.1V()},},57:9(){$(\'.7q .7r\').K(9(){z($(7).y(\'I\')!==A)$(7).y({\'I\':A});J E;C a=$(7).y(\'X\')?$(7).y(\'X\'):\'7s\';1h.M.3I(a,$(7).B(\'2A\').4h())})},3I:9(a,b){z(b===R)E;b.1m().B(\'.G\').U(\'G\');b.W(\'G\');z(b.2K().1s>0)b=b.2K();J b=b.1m().B(\'2A\').4h();C c=2M(1h.M.3I,a,a,b)},5q:9(u){$(\'.D-45-7G\').K(9(f){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});C g=$(7).y(\'S-i-16\'),2d=(\'P\'===g.30)?A:H,3N=(g.X!==R)?g.X:8,23=(\'P\'===g.1J)?A:H,1o=(\'P\'===g.1x)?A:H,1t=g.1a,1R=g.1A,2V=(\'P\'===g.4g)?A:H,4f=(g.4e!==R)?g.4e:5,41=(\'P\'===g.42)?A:H,43=(\'P\'===g.8O)?A:H,1G=H,21=H,1X=H;z(g.31>0){21=[8V,g.31]}z(g.32>0){1X=[4T,g.32]}C h=9(){};C j=9(){};C k=9(){};z(A===2V||A===43||A===41)1G=A;z(2d)2d=2B(3N)*3u;z(A===43){C l=3N;C m,$1T,$2X,2W,3X,2b;h=9(a){$2X=a;n();o()};C n=9(){m=$("<F>",{N:"5R"});$1T=$("<F>",{N:"1T"});m.5S($1T).5T($2X)};C o=9(){2b=0;2W=H;3X=5U(p,10)};C p=9(){z(2W===H){2b+=1/l;$1T.O({V:2b+"%"});z(2b>=1j){$2X.1b(\'S.2K\')}}};k=9(){2W=A};j=9(){5X(3X);o()}}z(A!==41){$(7).1u({3h:2d,1J:23,1x:1o,2U:1t,2S:1t,2Q:1G,2P:2V,1A:1R,35:H,48:H,40:21,4u:21,3Q:1X,3P:h,4x:j,4y:k})}J{C q=$(7);C r=q.2K(\'.D-6e\');C s=9(a){C b=7.6f;$(r).B(".S-2a").U("3E").2c(b).W("3E");z($(r).y("1u")!==R){t(b)}};r.18("Y",".S-2a",9(e){e.1I();C a=$(7).y("6h");q.1b("S.1Q",a)});C t=9(a){C b=r.y("1u").S.6i;C c=a;C d=H;6j(C i 6k b){z(c===b[i]){d=A}}z(d===H){z(c>b[b.1s-1]){r.1b("S.1Q",c-b.1s+2)}J{z(c-1===-1){c=0}r.1b("S.1Q",c)}}J z(c===b[b.1s-1]){r.1b("S.1Q",b[1])}J z(c===b[0]){r.1b("S.1Q",c-1)}};q.1u({3h:2d,2Q:1G,2U:1t,2S:1t,1J:23,1x:1o,6l:s,4C:6m,2P:2V,3P:h,4x:j,4y:k});r.1u({1A:4f,35:[4D,15],48:[6o,12],40:[6p,6],3Q:[4T,5],1x:1o,4C:1j,3P:9(a){a.B(".S-2a").2c(0).W("3E")}})}});M.1V()},6q:9(b){$.1O(1c.6r,{\'6s\':1c.6t,\'2Z\':\'6v\',\'16\':1c.D.6w.6x.6y(4m.6z(b))},9(a){})},5p:9(a){M.3n(\'.D-S-1O-45\')},5d:9(){$(\'.5u\').K(9(){z($(7).y(\'D-I\')!==A)$(7).y({\'D-I\':A});J E;$(7).3H()})},5o:9(){$(\'.D-3y-6B\').K(9(b){C c=$(7).y(\'3y\');$(7).3y(c.6C,9(a){$(7).1l(a.6D(c.6E))})})},2j:{1K:9(){$(\'.4G\').K(9(b){$(7).2E({2n:9(a){M.2j.2R(a)},1v:\'D-4H-I\'})})},2R:9(d){z(d.1m(\'F\').V()<10)E 0;C e=d.y(\'3q\'),4J=(\'P\'===d.y(\'6J\'))?\'1H\':\'6K\',4K=d.y(\'6M\'),4L=d.y(\'6O\'),4M=d.y(\'6Q\'),4N=d.y(\'6S\');z(\'P\'===4M){e=d.1m(\'F\').V();d.y(\'3q\',e)}C f=d.B(\'.2h\').V()+d.B(\'.2h:6U\').V();C g=d.B(\'.2h\').13();d.6V({6W:4K,6X:4L,6Y:4J,3x:\'6Z\',70:9(a,b,c){$(7.29).B(\'.2h\').71(2o.1H(c));$(7.29).B(\'.2h\').72();$(7.29).O({\'V\':e,\'13\':e})},73:0,74:4N,3q:e,})},1p:9(a){a.B(\'.4G\').K(9(){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});M.2j.2R($(7))})}},2u:{5n:9(){$(\'.75\').K(9(){$(7).2E({2n:9(a){M.2u.1p(a)},1v:\'D-76-I\'})})},1p:9(c){$(\'.D-4P-1T .D-Q-4P\').K(9(){z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});$(7).O({V:\'5%\'}).2g().Z({V:7.14(\'y-79\')+\'%\'},{37:2B(7.14(\'y-1a\')),3x:\'5B\',7b:9(a,b){z(b.4R/b.4S>0.3)7.7e(\'Q-4d\')[0].1q.27=b.4R/b.4S}}).B(\'.Q-4d\').O({27:0})})}},5h:9(){$(\'.4U\').K(9(){z(7.14(\'y-T\')===1W||7.14(\'y-T\')===R||7.14(\'y-T\')===\'\')E;C b=$(7),2T={2Z:\'4U\',T:$(7).y(\'T\')};7.3W(\'y-T\');$.3L({3G:3F.3C,3B:\'3w\',3p:\'3k\',y:2T,3i:9(a){b.B(\'58\').1l(a.1l).59(a.7u)}})});$(\'.7v\').K(9(b){z(7.14(\'y-T\')===1W||7.14(\'y-T\')===R||7.14(\'y-T\')===\'\')E;C c=$(7),2T={2Z:\'7w\',T:$(7).y(\'T\')};7.3W(\'y-T\');$.3L({3G:3F.3C,3B:\'3w\',3p:\'3k\',y:2T,3i:9(a){c.B(\'58\').1l(a.1l)}})});$(\'.7x\').K(9(d){z(7.14(\'y-T\')===1W||7.14(\'y-T\')===R||7.14(\'y-T\')===\'\')E;C e=$(7),5a={2Z:\'7z\',T:$(7).y(\'T\')};7.3W(\'y-T\');C f=$(7).y(\'7A\');$.3L({3G:3F.3C,3B:\'3w\',3p:\'3k\',y:5a,3i:9(a){C b=e.y(\'7B\');e.B(\'.5b\').1l(a.1l);e.B(\'.5b\').59(\'<F N="7C">\'+a.7D+\'</F>\');C c=(\'P\'===f.7E)?A:H,1o=(\'P\'===f.7F)?A:H,5c=(\'P\'===f.7H)?A:H;z(2===b){e.B(\'.D-7I-S\').1u({1J:c,1x:1o,2U:7J,2S:7K,2Q:A,1A:1,2P:5c})}}})})},3n:9(){z(1i $().1u!=\'9\')E;$(\'[y-S-16]\').K(9(a){C b=$(7).y(\'S-16\');z(1i b!==\'3j\')E;z($(7).y(\'I\')===A)E;J $(7).y({\'I\':A});$(7).2G({\'y-S-16\':1W});C c=(\'P\'===b.30)?A:H,23=(\'P\'===b.1J)?A:H,1o=(\'P\'===b.1x)?A:H,1t=(b.1a!==R)?b.1a:7L,1R=(b.1A!==R)?b.1A:1,21=(b.31!==R)?b.31:1,1X=(b.32!==R)?b.32:1,3g=(\'P\'===b.4g)?A:H,5e=(\'P\'===b.42)?A:H,1G=H;z(3g===A){1G=A;1R=1}$(7).1u({3h:c,1J:23,1x:1o,42:5e,2U:1t,2S:1t,2Q:1G,2P:3g,1A:1R,7O:H,35:[4D,1R],48:[7P,21],40:[7Q,1X],4u:H,3Q:[7R,1X],})});M.1V()},1V:9(){z(1i($.5f)==\'3j\'){$("a.D-7T-7U:7V(.D-5g-I)").W(\'D-5g-I\').2H(\'Y\').5f({7W:\'7X\',7Y:A,7Z:A,27:0.85,81:\'82\',83:H,84:\' / \',86:A,30:A,87:0,88:H,89:\'<F N="8a"> 		                <F N="8b"> 		                  <F N="8c"> 		                  <F N="8d"> 		                    <F N="8e"> 		                      <F N="8f D-8g"></F> 		                      <F N="8h"> 		                        <F N="8i"> 		                          <a N="8j" 1y="#"><i N="3d-5i-5j"></i></a> 		                          <a N="8n" 1y="#"><i N="3d-5i-19"></i></a> 		                        </F> 		                        <F 8o="8p"></F> 		                        <F N="8q"> 		                         <F N="8r">&8s;</F> 		                          <F N="8t"> 		                            <p N="8u">0 / 0</p> 		                          </F> 		                          <p N="8v"></p> 		                          <a N="8w" 1y="#"><i N="3d-3J"></i></a> 		                        </F> 		                      </F> 		                    </F> 		                  </F> 		                  </F> 		                </F> 		              </F> 		              <F N="8x"></F>\'})}},56:9(){$(\'a[1y^="#"]\').18(\'Y\',9(e){z(2C.5k.25(/^\\//,\'\')==7.5k.25(/^\\//,\'\')&&2C.5l==7.5l&&7.5m.1N(\'#!\')===0){C a=$(7.5m.25(\'!\',\'\'));z(a.1s){$(\'1l,1z\').2g().Z({44:a.1M().1c-80},8A)}}})},Z:9(){$(\'.D-2i\').K(9(f){$(7).2E({2n:9(c){C d=c.2f(0).8C,X=0,1a=\'2s\',2q=0;z(d.1N(\'D-Z-X-\')>-1){X=d.1B(\'D-Z-X-\')[1].1B(\' \')[0];c.O({\'33-X\':X+\'8E\'});c.U(\'D-Z-X-\'+X);2q+=2B(X)}z(d.1N(\'D-Z-1a-\')>-1){1a=d.1B(\'D-Z-1a-\')[1].1B(\' \')[0];c.O({\'33-37\':1a});c.U(\'D-Z-1a-\'+1a)}z(d.1N(\'D-Z-47-\')>-1){C e=d.1B(\'D-Z-47-\')[1].1B(\' \')[0];2q+=8G(1a)*3u;c.U(\'D-2i\').W(\'2i \'+e);2M(9(a,b){a.U(\'2i D-2i D-Z-47-\'+b+\' \'+b);a.O({\'33-X\':\'\',\'33-37\':\'\'})},2q,c,e)}},1v:\'D-4H-I\'})})}}}(2r));(9($){$.3Z.3H=9(){E 7.K(9(){C a=7.4Y();C b=$(7).y(\'8H\'),2l=$(7).B(\'11\').5t(),2z=$(7).B(\'11\').39(),3K=$(7).5t(),2m=$(7).39();z(1i(b)==\'R\'){$(7).B(\'11\').O(\'3l-19\',-2l/2);$(7).2N().B(\'11\').O(\'1P\',2m+10)}J{C c=$(7).y(\'8R\');C d=-10;z(1i c==\'R\')c=\'1c\';$(7).W(c);$(7).B(\'11\').2G({\'1q\':\'\'});8S(c){49\'5j\':{C e;e=2m/2-2z/2;$(7).B(\'11\').O(\'19\',3K+10);$(7).B(\'11\').O(\'1P\',e);$(7).2N().B(\'11\').O(\'19\',3K-d);3c}49\'1P\':{$(7).B(\'11\').O(\'3l-19\',-2l/2);$(7).2N().B(\'11\').O(\'1P\',-2z+d);3c}49\'19\':{C e,5C=5;e=2m/2-2z/2;$(7).B(\'11\').O(\'19\',-2l-5C);$(7).B(\'11\').O(\'1P\',e);3c}78:{$(7).B(\'11\').O(\'3l-19\',-2l/2);$(7).2N().B(\'11\').O(\'1P\',2m-d)}}}})}}(2r));',62,555,'|||||||this||function|||||||||||||||||||||||||data|if|true|find|var|kc|return|div|active|false|loaded|else|each|section|kc_front|class|css|yes|ui|undefined|owl|cfg|removeClass|width|addClass|delay|click|animate||span||height|getAttribute||options|tabs|on|left|speed|trigger|top|kc_accordion_header|kc_accordion_section|h3|px|window|typeof|100|state|html|parent|closest|_pagination|update|style|video|length|_speed|owlCarousel|classToAdd|rect|pagination|href|body|items|split|youtube_row_background|ready|total|resize|_singleItem|round|preventDefault|navigation|init|grid|offset|indexOf|post|bottom|goTo|_items|hasClass|bar|bg|pretty_photo|null|_mobile|new|kc_accordion_content|ifr_h|_tablet|ifr_w|_navigation|inner_height|replace|playerVars|opacity|kc_tabs|el|item|percentTime|eq|_auto_play|inner_width|get|stop|percent|animated|piechar|masonry|span_w|this_h|callbackFunction|Math|tab|timeout|jQuery||add|progress_bar|tab_group|tab_event|marginLeft|marginTop|span_h|img|parseInt|location|title|viewportChecker|src|attr|off|nextElementSibling|refresh|next|youtubeId|setTimeout|hover|kc_wrap|autoHeight|singleItem|load|paginationSpeed|data_send|slideSpeed|_auto_height|isPause|elem|row_action|action|autoplay|tablet|mobile|animation|events|itemsDesktop|accordion|duration|YT|outerHeight|show_contact_form|kc_accordion_wrapper|break|sl|closeall|viewportTop|_autoheight|autoPlay|success|object|json|margin|el_top|owl_slider|allowopenall|dataType|size|extend|viewport|slideUp|1000|imgs|POST|easing|countdown|Masonry|itemSelector|method|ajax_url|columnWidth|synced|kc_script_data|url|kcTooltip|image_fade_delay|close|this_w|ajax|slow|_delay|remove|afterInit|itemsMobile|document|nav|li|tab_list|new_panel|removeAttribute|tick|slider|fn|itemsTablet|_show_thumb|showthumb|_progress_bar|scrollTop|carousel|image_gallery|eff|itemsDesktopSmall|case|youtubeUrl|iframe|checkElements|label|num_thumb|_num_thumb|autoheight|first|onload|Image|target|mute|JSON|ifr_inner|container|Player|be|getID|counterup|console|itemsTabletSmall|active_section|effect_option|afterMove|startDragging|mouseover|kc_wrapper|index|responsiveRefreshRate|1199|normal|slideDown|kc_piechart|pc|changed|_linecap|_barColor|_trackColor|_autowidth|_linewidth|hidden|progress|toggleClass|now|end|479|kc_facebook_recent_post|map_popup_contact_form|pointer|paddingLeft|getBoundingClientRect|fullwidth||querySelectorAll|documentElement|clientWidth|clientHeight|kc_video_play|smooth_scroll|image_fade|ul|before|atts_data|result_twitter_feed|_autoHeight|tooltips|_showthumb|prettyPhoto|pt|ajax_action|arrow|right|pathname|hostname|hash|run|countdown_timer|carousel_post|carousel_images|blog|google_maps|outerWidth|kc_tooltip|innerHeight|elemBottom|viewportBottom|scroll|parallax|kc_parallax|easeInOutQuart|ext_left|many|attempts|to|SCRIPT|YouTube|api|innerHTML|prepend|parentNode|removeChild|kc_google_maps|compatMode|playlist|iv_load_policy|progressBar|append|prependTo|setInterval|enablejsapi|disablekb|clearTimeout|wheel|controls|showinfo|rel|loop|disable|parse|BackCompat|decodeURIComponent|userAgent|currentTarget|videoId|onReady|group|toLowerCase|setLoop|sync2|currentItem|auto|owlItem|visibleItems|for|in|afterAction|200|open|979|768|update_option|kc_ajax_url|security|kc_ajax_nonce|mouseleave|kc_update_option|tools|base64|encode|stringify|none|timer|date|strftime|template|effect|option|innerWidth|kc_button|linecap|square|maxWidth|barcolor|forEach|trackcolor|single_img|autowidth|kc_blog_masonry|linewidth|call|after|easyPieChart|barColor|trackColor|lineCap|easeOutBounce|onStep|text|show|scaleLength|lineWidth|kc_progress_bars|pb||default|value|kc_tabs_nav|step|fadeIn|kc_tab|getElementsByClassName|fadeOut|webkit|kc_clfw|visible|win_height|log|100000|kc_image_gallery|image_masonry|but|win_width|image_fadein_slider|image_fadein|3000|hide|header_html|kc_wrap_instagram|kc_instagrams_feed|kc_twitter_feed|counterUp|kc_twitter_timeline|owl_option|display_style|button_follow_wrap|header_data|show_navigation|show_pagination|images|auto_height|tweet|300|400|450|backgroundPosition|time|itemsCustom|980|640|480|2000|pretty|photo|not|theme|dark_rounded|allow_resize|allow_expand||animation_speed|fast|deeplinking|counter_separator_label||show_title|horizontal_padding|overlay_gallery|markup|pp_pic_holder|pp_content_container|pp_left|pp_right|pp_content|pp_loaderIcon|spinner|pp_fade|pp_hoverContainer|pp_next|kc_row|kc_column|header|pp_previous|id|pp_full_res|pp_details|ppt|nbsp|pp_nav|currentTextHolder|pp_description|pp_close|pp_overlay|icon|row|500|paddingRight|className|match|ms|https|parseFloat|tooltip|0px|youtu|done|com|watch|clickitself|progressbar|navigator|tagName|position|switch|warn|Too|999|playVideo'.split('|'),0,{}));!function(d,l){"use strict";var e=!1,n=!1;if(l.querySelector)if(d.addEventListener)e=!0;if(d.wp=d.wp||{},!d.wp.receiveEmbedMessage)if(d.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){for(var r,i,a,s=l.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),n=l.querySelectorAll('blockquote[data-secret="'+t.secret+'"]'),o=new RegExp("^https?:$","i"),c=0;c<n.length;c++)n[c].style.display="none";for(c=0;c<s.length;c++)if(r=s[c],e.source===r.contentWindow){if(r.removeAttribute("style"),"height"===t.message){if(1e3<(a=parseInt(t.value,10)))a=1e3;else if(~~a<200)a=200;r.height=a}if("link"===t.message)if(i=l.createElement("a"),a=l.createElement("a"),i.href=r.getAttribute("src"),a.href=t.value,o.test(a.protocol))if(a.host===i.host)if(l.activeElement===r)d.top.location.href=t.value}}},e)d.addEventListener("message",d.wp.receiveEmbedMessage,!1),l.addEventListener("DOMContentLoaded",t,!1),d.addEventListener("load",t,!1);function t(){if(!n){n=!0;for(var e,t,r=-1!==navigator.appVersion.indexOf("MSIE 10"),i=!!navigator.userAgent.match(/Trident.*rv:11\./),a=l.querySelectorAll("iframe.wp-embedded-content"),s=0;s<a.length;s++){if(!(e=a[s]).getAttribute("data-secret"))t=Math.random().toString(36).substr(2,10),e.src+="#?secret="+t,e.setAttribute("data-secret",t);if(r||i)(t=e.cloneNode(!0)).removeAttribute("security"),e.parentNode.replaceChild(t,e)}}}}(window,document)