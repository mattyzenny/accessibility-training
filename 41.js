(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{aZiW:function(t,e,r){"use strict";r.r(e),r.d(e,"cel_rich_text_toolbar",function(){return M});var o=r("luJw"),n=r("nNSG"),i=r("s8o5"),a=r("sOVx"),s=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var r=-1;return t.some(function(t,o){return t[0]===e&&(r=o,!0)}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var r=t(this.__entries__,e),o=this.__entries__[r];return o&&o[1]},e.prototype.set=function(e,r){var o=t(this.__entries__,e);~o?this.__entries__[o][1]=r:this.__entries__.push([e,r])},e.prototype.delete=function(e){var r=this.__entries__,o=t(r,e);~o&&r.splice(o,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var r=0,o=this.__entries__;r<o.length;r++){var n=o[r];t.call(e,n[1],n[0])}},e}()}(),l="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,c="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),d="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(c):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},h=["top","right","bottom","left","width","height","size","weight"],b="undefined"!=typeof MutationObserver,u=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var r=!1,o=!1,n=0;function i(){r&&(r=!1,t()),o&&s()}function a(){d(i)}function s(){var t=Date.now();if(r){if(t-n<2)return;o=!0}else r=!0,o=!1,setTimeout(a,20);n=t}return s}(this.refresh.bind(this))}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,r=e.indexOf(t);~r&&e.splice(r,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},t.prototype.connect_=function(){l&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),b?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){l&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,r=void 0===e?"":e;h.some(function(t){return!!~r.indexOf(t)})&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),f=function(t,e){for(var r=0,o=Object.keys(e);r<o.length;r++){var n=o[r];Object.defineProperty(t,n,{value:e[n],enumerable:!1,writable:!1,configurable:!0})}return t},p=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||c},v=w(0,0,0,0);function g(t){return parseFloat(t)||0}function m(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e.reduce(function(e,r){return e+g(t["border-"+r+"-width"])},0)}var _="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof p(t).SVGGraphicsElement}:function(t){return t instanceof p(t).SVGElement&&"function"==typeof t.getBBox};function w(t,e,r,o){return{x:t,y:e,width:r,height:o}}var y=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=w(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t,e=(t=this.target,l?_(t)?function(t){var e=t.getBBox();return w(0,0,e.width,e.height)}(t):function(t){var e=t.clientWidth,r=t.clientHeight;if(!e&&!r)return v;var o=p(t).getComputedStyle(t),n=function(t){for(var e={},r=0,o=["top","right","bottom","left"];r<o.length;r++){var n=o[r];e[n]=g(t["padding-"+n])}return e}(o),i=n.left+n.right,a=n.top+n.bottom,s=g(o.width),l=g(o.height);if("border-box"===o.boxSizing&&(Math.round(s+i)!==e&&(s-=m(o,"left","right")+i),Math.round(l+a)!==r&&(l-=m(o,"top","bottom")+a)),!function(t){return t===p(t).document.documentElement}(t)){var c=Math.round(s+i)-e,d=Math.round(l+a)-r;1!==Math.abs(c)&&(s-=c),1!==Math.abs(d)&&(l-=d)}return w(n.left,n.top,s,l)}(t):v);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),x=function(t,e){var r,o,n,i,a,s,l,c=(o=(r=e).x,n=r.y,i=r.width,a=r.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(s.prototype),f(l,{x:o,y:n,width:i,height:a,top:n,right:o+i,bottom:a+n,left:o}),l);f(this,{target:t,contentRect:c})},O=function(){function t(t,e,r){if(this.activeObservations_=[],this.observations_=new s,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=r}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof p(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new y(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof p(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new x(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),E="undefined"!=typeof WeakMap?new WeakMap:new s,k=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=u.getInstance(),o=new O(e,r,this);E.set(this,o)};["observe","unobserve","disconnect"].forEach(function(t){k.prototype[t]=function(){var e;return(e=E.get(this))[t].apply(e,arguments)}});var A=void 0!==c.ResizeObserver?c.ResizeObserver:k;const M=class{constructor(t){Object(o.i)(this,t),this.toolbarItemList=void 0,this.buttonPadding=i.f.regularViewPadding,this.bold=!1,this.italic=!1,this.underline=!1,this.bullet=!1,this.ordered=!1,this.undo=!1,this.redo=!1,this.toolbarSelectedText="",this.celRteEditorStore=void 0,this.celRteToolbarStore=void 0,this.celIconBaseUrl="",this.toolbarAriaLabel="",this.enableMathEditor=void 0}handleCelButtonOnClick(t){const{detail:{toolType:e,labelMessage:r,pressed:o}}=t,{bold:n,italic:a,underline:s,bullet:l,ordered:c}=i.i;switch(e){case n:case a:case s:case l:case c:this.toolbarSelectedText=o?`${r} toggle button pressed`:`${r} Toggle button not pressed`}}handleArrowKeySelection(t){[a.a,a.q,a.s,a.r].includes(t.code)&&this.handleKeyDown(t)}connectedCallback(){this.cel_rich_text_toolbar_icon_button=Object(n.j)("cel-rich-text-toolbar-icon","cel-rich-text-toolbar",this.el)}componentWillLoad(){const t=[];i.g.forEach(e=>{!this.enableMathEditor&&e.math||t.push(e)}),this.toolbarItemList=t}componentDidLoad(){this.observeToolBarWidth()}observeToolBarWidth(){this.toolbarElement=this.el.querySelector(".sc-quill-cel-rich-text-toolbar-container"),this.resizeObserver=new A(this.handleResize.bind(this)),this.resizeObserver.observe(this.toolbarElement)}handleResize(){this.buttonPadding=this.toolbarElement.offsetWidth<=320?i.f.mobileViewPadding:i.f.regularViewPadding}handleKeyDown(t){var e,r,o,n;const i=Array.from(this.toolbarContainer.querySelectorAll(".sc-quill-cel-rich-text-toolbar-button")),s=i.indexOf(t.target),l=(s+1)%i.length,c=(s-1+i.length)%i.length;switch(t.key){case a.a:case a.s:const s=i[l];t.preventDefault(),null===(r=null===(e=null==s?void 0:s.shadowRoot)||void 0===e?void 0:e.querySelector("button"))||void 0===r||r.focus();break;case a.q:case a.r:const d=i[c];t.preventDefault(),null===(n=null===(o=null==d?void 0:d.shadowRoot)||void 0===o?void 0:o.querySelector("button"))||void 0===n||n.focus()}}render(){return Object(o.g)(o.a,{"data-cel-version":"9.0.6"},Object(o.g)("div",{class:"sc-quill-cel-rich-text-toolbar-container",role:"toolbar","aria-orientation":"horizontal"},Object(o.g)("div",{class:"cel-visually-hidden",role:"alert"},this.toolbarSelectedText),Object(o.g)("div",{class:"sc-quill-cel-rich-text-inner-container",ref:t=>this.toolbarContainer=t},this.toolbarItemList.map((t,e)=>Object.keys(t).map(r=>t[r].map((n,i)=>Object(o.g)(this.cel_rich_text_toolbar_icon_button,{celRteEditorStore:this.celRteEditorStore,celRteToolbarStore:this.celRteToolbarStore,"data-rte-icon-group-type":r,"data-rte-icon-type":n,"data-cel-icon-src":this.celIconBaseUrl,"data-cel-icon-padding":this.buttonPadding,"data-add-icon-group-separator":this.toolbarItemList.length!==e+1&&t[r].length===i+1})))))))}get el(){return Object(o.f)(this)}};M.style='.lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, "OpenSans");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, "OpenSans-Semibold");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}.sc-quill-cel-rich-text-toolbar-container{background-color:#f3f3f3;border:1px solid #767676;border-width:1px 1px 0 1px;border-radius:var(--rich-text-editor-border-radius, 4px 4px 0 0);display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:40px;-ms-flex-align:center;align-items:center;padding:0 4px}'}}]);