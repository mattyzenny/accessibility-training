(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"6ymd":function(e,t,r){"use strict";r.r(t),r.d(t,"cel_error_message",function(){return l});var o=r("luJw"),a=r("nNSG"),i=r("2rhu");r("sOVx");const l=class{constructor(e){Object(o.g)(this,e),this.componentLoaded=Object(o.c)(this,"celButtonLoaded",7),this.errorMessageButtonClick=Object(o.c)(this,"celErrorMessageButtonClick",7),this.errorMessageTextLinkClicked=Object(o.c)(this,"celErrorMessageTextLinkClicked",7),this.errorIcon="error-cloud.svg",this.errorMessage="Sorry, something went wrong",this.directions=void 0,this.celIconBaseUrl="",this.hasCustomDirection=!1,this.hasErrorCode=void 0,this.errorCodeLabel="Error Code",this.errorCode="#####",this.errorMessageAriaLabel=void 0,this.showComponentLoadInfo=!1,this.hideErrorIcon=!1,this.hasButton=!1,this.buttonLabel=void 0,this.buttonAriaLabel=void 0,this.buttonIdentifier=void 0,this.hasLink=!1,this.errorLinkLabel=void 0,this.errorLinkIdentifier=void 0,this.errorLinkHref=void 0,this.errorLinkAriaLabel=void 0,this.tabindex=0}connectedCallback(){this.cel_icon=Object(a.j)("cel-icon","cel-error-message",this.el),this.cel_button=Object(a.j)("cel-button","cel-error-message",this.el),this.cel_text_link=Object(a.j)("cel-text-link","cel-error-message",this.el)}componentDidLoad(){this.showComponentLoadInfo&&this.componentLoaded.emit(!0)}buttonPress(){this.errorMessageButtonClick.emit(this.buttonIdentifier)}celTextLinkClickedHandler(e){this.errorMessageTextLinkClicked.emit(e.detail)}render(){return Object(o.e)(o.a,{"data-cel-version":"9.0.6",role:"alert","aria-label":this.errorMessageAriaLabel},this.hideErrorIcon?null:Object(o.e)(this.cel_icon,{class:"error-icon","data-name":"error-cloud","data-src":this.celIconBaseUrl?`${this.celIconBaseUrl}${this.errorIcon}`:"","data-size":i.b.CUSTOM,"aria-hidden":"true","data-padding":"0"}),Object(o.e)("p",{class:"error"},this.errorMessage),this.hasCustomDirection?Object(o.e)("slot",null):Object(o.e)("p",{class:"directions"},this.directions),this.hasErrorCode&&Object(o.e)("p",{class:"error-code"},this.errorCodeLabel,": ",this.errorCode),this.hasButton?Object(o.e)(this.cel_button,{class:"error-message-button","data-button-size":i.c.SMALL,"data-label":this.buttonLabel,onClick:()=>this.buttonPress(),"data-button-aria-label":this.buttonAriaLabel,"data-identifier":this.buttonIdentifier}):null,this.hasLink?Object(o.e)(this.cel_text_link,{"data-identifier":this.errorLinkIdentifier,class:"error-message-link","data-label":this.errorLinkLabel,"data-link-href":this.errorLinkHref,"data-text-link-aria-label":this.errorLinkAriaLabel}):null)}get el(){return Object(o.d)(this)}};l.style='.lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, "OpenSans");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, "OpenSans-Semibold");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.error{color:var(--error-color, #333);font-family:var(--error-font-family, "Poppins-Medium");font-size:var(--error-font-size, 1.125rem);margin:var(--error-text-margin, none)}.error-icon{--cel-icon-width:var(--error-message-icon-width, 138px);--cel-icon-height:var(--error-message-icon-height, 68px)}.directions{color:var(--directions-color, #333);font-family:var(--directions-font-family, "OpenSans");font-size:var(--directions-font-size, 1rem);margin:var(--directions-text-margin, none);line-height:var(--direction-line-height, 24px)}.error-code{color:var(--errorCode-color, #333);font-family:var(--errorCode-font-family, "OpenSans");font-size:var(--errorCode-font-size, 1rem);line-height:var(--errorCode-line-height, 1.5);margin:var(--errorCode-text-margin, none)}.error-message-button{margin:var(--error-mesage-button-margin, 8px 0 0 0);--small-button-width:var(--error-mesage-button-width);--small-button-padding:var(--error-mesage-button-padding, 4px 8px);--button-border-radius:var(--error-mesage-button-border-radius, 4px);--small-button-font-size:var(--error-mesage-button-text-size, 0.875rem);--button-font-family:var(--error-mesage-button-font-family, Poppins-Medium)}.error-message-link{margin:var(--error-mesage-link-margin, 8px 0 0 0);--text-link-color:var(--error-message-link-color);--text-link-font-size:var(--error-message-link-font-size);--text-link-font-family:var(--error-message-link-font-family)}'}}]);