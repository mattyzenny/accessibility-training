(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{RaFr:function(t,e,i){"use strict";i.r(e),i.d(e,"cel_sub_navigation",function(){return s});var o=i("RO4M"),a=i("z81R"),n=i("UVxy"),l=i("1wBy");const s=class{constructor(t){Object(o.i)(this,t),this.itemClickedEvent=Object(o.d)(this,"celSubNavigationItemClickedEvent",7),this.isLoadingFirstTime=!0,this.showNavigationButtons=!1,this.disablePreviousButton=!1,this.disableNextButton=!1,this.hoveredItem=null,this.touchEventState=-1,this.activeId=null,this.itemList=[],this.horizontalScrollValue=40,this.celIconBaseUrl=void 0,this.previousButtonTooltip="Scroll Left",this.nextButtonTooltip="Scroll Right",this.previousButtonDisabledTooltip="Scroll Left",this.nextButtonDisabledTooltip="Scroll Right",this.navigationAriaLabel="navigation items"}connectedCallback(){this.cel_icon=Object(a.j)("cel-icon","cel-sub-navigation",this.el),this.cel_icon_button=Object(a.j)("cel-icon-button","cel-sub-navigation",this.el)}onItemClick(t,e){t.isDisabled||(this.activeId=t.identifier,this.itemClickedEvent.emit(t));const i=e.target.parentNode;i&&this.onScrollIntoView(i)}componentDidLoad(){this.getULListElement(),this.putActiveItemInView(),this.isLoadingFirstTime=!1,this.calculateNavButtonWidth()}componentDidUpdate(){this.getULListElement(),this.calculateNavButtonWidth()}calculateNavButtonWidth(){var t;let e,i;e=null===(t=this.el.shadowRoot)||void 0===t?void 0:t.querySelectorAll(".sub-nav-item-btn"),i=Array.from(e),this.sumOfNavButtonWidths=i.map(t=>{var e;return+(null===(e=getComputedStyle(t).width)||void 0===e?void 0:e.slice(0,-2))}).reduce((t,e)=>t+e,0),this.checkIfItemsAreHidden(this.sumOfNavButtonWidths)}putActiveItemInView(){var t;const e=null===(t=this.ulListElement)||void 0===t?void 0:t.querySelector("li.active-item");e&&(this.isLoadingFirstTime?setTimeout(()=>{this.onScrollIntoView(e),this.checkIfReachedEdges(e),this.isLoadingFirstTime=!1},100):(this.onScrollIntoView(e),this.checkIfReachedEdges(e)))}onScrollIntoView(t){t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}checkIfReachedEdges(t){if(this.showNavigationButtons){const e=t.offsetLeft;t.offsetLeft+t.offsetWidth+this.horizontalScrollValue>=this.ulListElement.scrollWidth?this.disableNextButton=!0:this.enableNextButton();const i=this.el.shadowRoot.querySelector(".previous");i&&e-i.offsetWidth-this.horizontalScrollValue<=0?this.disablePreviousButton=!0:this.enablePreviousButton()}}onHandleScrollEvent(){this.touchEventState&&(this.ulListElement.scrollLeft<=0?this.disablePreviousButton=!0:this.enablePreviousButton(),Math.ceil(this.ulListElement.scrollLeft+this.ulListElement.offsetWidth)>=this.ulListElement.scrollWidth?this.disableNextButton=!0:this.enableNextButton())}onHandleTouchEvent(t){this.touchEventState=t,0===this.touchEventState&&(this.touchEventState=-1)}handleResize(){this.isLoadingFirstTime=!0,this.getULListElement(),this.checkIfItemsAreHidden(this.sumOfNavButtonWidths),this.putActiveItemInView()}getULListElement(){this.ulListElement=this.el.shadowRoot.querySelector(".sub-nav-list")}handleKeyDown(t){if(t.key===l.n){const e=this.el.shadowRoot.activeElement;let i,o=Math.ceil(this.ulListElement.scrollLeft+this.ulListElement.offsetWidth)>=this.ulListElement.scrollWidth;this.ulListElement.scrollLeft||(this.disablePreviousButton=!0),t.shiftKey?(i=e.parentNode.previousSibling,o?this.disableNextButton=!0:this.enableNextButton()):e?i=e.parentNode.nextSibling:(t.preventDefault(),i=this.ulListElement.querySelector("li"),this.ulListElement.querySelector("li > button").focus(),o&&(this.disableNextButton=!0)),i&&setTimeout(()=>{this.onScrollIntoView(i)},0)}}checkIfItemsAreHidden(t){var e;this.showNavigationButtons=t>(null===(e=this.ulListElement)||void 0===e?void 0:e.clientWidth)}onActionButtonClick(t,e){if(!e){let e;const i=this.ulListElement.scrollLeft;t?(e=i+this.horizontalScrollValue,this.performHorizontalScroll(e),this.enablePreviousButton(),i+this.ulListElement.offsetWidth+this.horizontalScrollValue>=this.ulListElement.scrollWidth&&(this.disableNextButton=!0)):(e=i-this.horizontalScrollValue,this.performHorizontalScroll(e),this.enableNextButton(),e<=0&&(this.disablePreviousButton=!0))}}enablePreviousButton(){this.disablePreviousButton&&(this.disablePreviousButton=!1)}enableNextButton(){this.disableNextButton&&(this.disableNextButton=!1)}performHorizontalScroll(t){this.ulListElement.scroll({left:t,behavior:"smooth"})}onItemMouseOver(t){this.hoveredItem=t}calculateIconColor(t,e){let i=n.a.BLACK;return t&&(i=n.a.PRIMARY),e===this.hoveredItem&&(i=n.a.PRIMARY_SHADE),e.isDisabled&&(i=n.a.DISABLED),i}showActionButton(t,e,i,a,l,s){return Object(o.g)("div",{class:`action-button-container ${t} ${l?"disabled":"enabled"}`},Object(o.g)(this.cel_icon_button,{class:e,"data-element-tab-index":"-1","data-tooltip-label":i,"data-name":a,"data-src":this.celIconBaseUrl?`${this.celIconBaseUrl}${a}.svg`:this.formImageSource(a),"data-color":n.a.PRIMARY,"data-size":n.b.REGULAR,"data-disabled":l,onClick:()=>this.onActionButtonClick(s,l)}))}formImageSource(t){return`https://lst-assets.savvasrealize.com/assets/${t}.svg`}render(){return Object(o.g)(o.a,{"data-cel-version":"9.0.5"},Object(o.g)("div",{class:"sub-navigation-container"},this.showNavigationButtons?this.showActionButton("previous","previous-button",this.disablePreviousButton&&this.previousButtonDisabledTooltip?this.previousButtonDisabledTooltip:this.previousButtonTooltip,"chevron-left",this.disablePreviousButton,!1):null,Object(o.g)("nav",{class:"sub-navigation "+(this.showNavigationButtons?"padding":""),"aria-label":this.navigationAriaLabel},Object(o.g)("ul",{class:"sub-nav-list",onScroll:()=>this.onHandleScrollEvent(),onTouchStart:()=>this.onHandleTouchEvent(1),onTouchEnd:()=>this.onHandleTouchEvent(0)},this.itemList.map(t=>{const e=t.identifier===this.activeId;return Object(o.g)("li",{class:e?`active-item ${t.identifier}`:""},Object(o.g)("button",{class:["sub-nav-item-btn",t.isDisabled&&"disabled"].join(" "),id:t.identifier,"aria-disabled":t.isDisabled?"true":"false","aria-current":!t.isExpandedMenu&&e?"true":null,"aria-expanded":t.isExpandedMenu?e?"true":"false":null,"aria-controls":t.isExpandedMenu&&t.ariaControls?t.ariaControls:null,"aria-haspopup":t.ariaHaspopup?t.ariaHaspopup:null,onClick:e=>this.onItemClick(t,e),onMouseOver:()=>this.onItemMouseOver(t),onMouseLeave:()=>this.onItemMouseOver(null),onKeyDown:t=>this.handleKeyDown(t)},t.label,t.isExpandedMenu?Object(o.g)(this.cel_icon,{"aria-hidden":"true",class:"expanded-icon","data-name":t.expandedIconName,"data-color":this.calculateIconColor(e,t)}):null))}))),this.showNavigationButtons?this.showActionButton("next","next-button",this.disableNextButton&&this.nextButtonDisabledTooltip?this.nextButtonDisabledTooltip:this.nextButtonTooltip,"chevron-right",this.disableNextButton,!0):null))}get el(){return Object(o.f)(this)}};s.style='.lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, "OpenSans");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, "OpenSans-Semibold");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:inline-block;width:100%}.sub-navigation-container{position:relative;width:var(--cel-sub-navigation-container-width, 100%);background:var(--cel-sub-navigation-container-background, #fff);-webkit-box-shadow:var(--cel-sub-navigation-container-box-shadow, 0px 2px 8px 0px #00000014);box-shadow:var(--cel-sub-navigation-container-box-shadow, 0px 2px 8px 0px #00000014);border-bottom:var(--cel-sub-navigation-container-border-bottom, 1px solid #cdcdcd);-webkit-clip-path:var(--cel-sub-navigation-container-clip-path, inset(0 0 -15px 0));clip-path:var(--cel-sub-navigation-container-clip-path, inset(0 0 -15px 0))}.sub-navigation-container .action-button-container{position:absolute;top:0;height:var(--cel-sub-navigation-action-button-container-height, 35px);width:var(--cel-sub-navigation-action-button-container-width, 35px);background:#fff;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.sub-navigation-container .action-button-container.enabled{-webkit-box-shadow:var(--cel-sub-navigation-action-button-container-box-shadow, 0px 10px 16px -2px #00000073);box-shadow:var(--cel-sub-navigation-action-button-container-box-shadow, 0px 10px 16px -2px #00000073)}.sub-navigation-container .action-button-container.enabled.next{-webkit-clip-path:inset(0 0 0 -15px);clip-path:inset(0 0 0 -15px)}.sub-navigation-container .action-button-container.enabled.previous{-webkit-clip-path:inset(0 -15px 0 0);clip-path:inset(0 -15px 0 0)}.sub-navigation-container .action-button-container.next{right:0}.sub-navigation-container .action-button-container.previous{left:0}.sub-navigation{height:var(--cel-sub-navigation-height, 35px)}.sub-navigation.padding{padding:var(--cel-sub-navigation-padding, 0 36px)}.sub-navigation ul{margin:0;padding:0;display:-ms-flexbox;display:flex;height:100%;width:auto;overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none;}.sub-navigation ul::-webkit-scrollbar{display:none;}.sub-navigation ul li{list-style:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.sub-navigation ul li.active-item button:not(.disabled){border-bottom:var(--cel-sub-nav-item-btn-active-border-bottom, 3px solid #006be0);color:var(--cel-sub-nav-item-btn-active-color, #006be0)}.sub-navigation ul li.active-item button:not(.disabled):hover{color:var(--cel-sub-nav-item-btn-active-hover-color, #2150a3);border-bottom:var(--cel-sub-nav-item-btn-active-hover-border-bottom, 3px solid #2150a3)}.sub-navigation ul .sub-nav-item-btn{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:100%;background:var(--cel-sub-nav-item-btn-background, #fff);border:none;border-bottom:var(--cel-sub-nav-item-btn-border-bottom, 3px solid #fff);padding:4px 12px 1px 12px;color:var(--cel-sub-nav-item-btn-color, #333);font-family:var(--cel-sub-nav-item-btn-font-family, "Poppins-Regular");font-size:var(--cel-sub-nav-item-btn-font-size, 0.875rem);cursor:pointer;white-space:nowrap}.sub-navigation ul .sub-nav-item-btn .expanded-icon{--cel-icon-width:var(--cel-sub-nav-expanded-icon-width, 16px);--cel-icon-height:var(--cel-sub-nav-expanded-icon-height, 16px)}.sub-navigation ul .sub-nav-item-btn.disabled{cursor:var(--cel-sub-nav-item-btn-disabled-cursor, default);color:var(--cel-sub-nav-item-btn-disabled-font-color, #767676)}.sub-navigation ul .sub-nav-item-btn:not(.disabled):hover{background:var(--cel-sub-nav-item-btn-hover-background, #e5f0f9);color:var(--cel-sub-nav-item-btn-hover-color, #2150a3);border-bottom:var(--cel-sub-nav-item-btn-hover-border-bottom, 3px solid #e5f0f9)}.sub-navigation ul .sub-nav-item-btn:focus,.sub-navigation ul .sub-nav-item-btn:active{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:-2px;background:var(--cel-sub-nav-item-btn-active-focus-background, #fff)}.sub-navigation ul .sub-nav-item-btn:focus.disabled,.sub-navigation ul .sub-nav-item-btn:active.disabled{outline-color:#767676}'}}]);