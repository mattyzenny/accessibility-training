(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"5nyy":function(t,e,r){"use strict";r.r(e),r.d(e,"cel_error_notification",function(){return s});var o,a=r("luJw"),i=r("nNSG"),l=r("2rhu"),n=r("sOVx");!function(t){t.ALERT_ONE="alertOne",t.ALERT_TWO="alertTwo",t.PRIMARY="primary",t.CUSTOM="custom"}(o||(o={}));const s=class{constructor(t){Object(a.g)(this,t),this.errorNotificationClose=Object(a.c)(this,"celErrorNotificationClose",7),this.iconColor=l.a.WHITE,this.errorMessage="There was an error loading your content. Some features might not work as expected. Please reopen this book.",this.iconName=void 0,this.src=void 0,this.closeButtonAriaLabel="Dismiss error",this.errorNotificationType=o.PRIMARY,this.iconSize=l.b.MLARGE,this.closeIdentifier=void 0,this.errorSectionAriaLabel="Error message"}connectedCallback(){this.cel_icon=Object(i.j)("cel-icon","cel-error-notification",this.el),this.cel_icon_button=Object(i.j)("cel-icon-button","cel-error-notification",this.el)}closeNotification(t){t.detail&&t.detail.buttonType===n.t&&this.errorNotificationClose.emit(t.detail)}render(){return Object(a.e)(a.a,{"data-cel-version":"9.0.6"},Object(a.e)("section",{"aria-label":this.errorSectionAriaLabel,class:{"error-banner":!0,[`${this.errorNotificationType}`]:!!this.errorNotificationType}},this.iconName||this.src?Object(a.e)(this.cel_icon,{class:"error-icon","data-color":this.iconColor,"data-name":this.iconName,"data-src":this.src,"data-size":this.iconSize,"aria-hidden":"true"}):null,this.errorNotificationType===o.ALERT_ONE||this.errorNotificationType===o.ALERT_TWO||this.errorNotificationType===o.CUSTOM?Object(a.e)("slot",null):Object(a.e)("span",{class:"error-message"},this.errorMessage),this.errorNotificationType===o.ALERT_ONE||this.errorNotificationType===o.ALERT_TWO||this.errorNotificationType===o.CUSTOM?Object(a.e)(this.cel_icon_button,{"data-identifier":this.closeIdentifier,"data-button-type":n.t,class:"close-icon","data-color":this.iconColor,"data-name":"close","data-icon-button-aria-label":this.closeButtonAriaLabel,"data-size":l.b.REGULAR}):null))}get el(){return Object(a.d)(this)}};s.style='.lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, "OpenSans");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, "OpenSans-Semibold");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{min-height:32px;display:-ms-flexbox;display:flex}.error-banner{width:var(--error-notification-width, 100%);min-width:var(--error-notification-min-width);height:var(--error-notification-height);-ms-flex-direction:row;flex-direction:row;display:-ms-flexbox;display:flex;-ms-flex-align:var(--error-notification-align-items, center);align-items:var(--error-notification-align-items, center);-ms-flex-pack:var(--error-notification-justify-content, center);justify-content:var(--error-notification-justify-content, center);background-color:var(--error-banner-bg-color, #006be0)}.alertOne{background-color:#2150a3}.alertTwo{background-color:var(--errorNotificationOrange)}.primary{background-color:var(--error-banner-primary-bg-color, #006be0)}.custom{background-color:var(--error-banner-custom-bg-color, #006be0)}.error-icon{margin:var(--icon-error-margin, 0 24px);-ms-flex-negative:0;flex-shrink:0}.close-icon{margin:var(--error-close-icon-margin, 0 24px);--icon-button-hover-bg-color:var(--error-close-icon-hover-bg-color, rgba(255, 255, 255, 0.08))}.error-message{min-height:var(--error-message-min-height, 16px);font-family:var(--error-message-font-family, "Poppins-Medium");font-size:var(--error-font-size, 0.875rem);color:var(--error-message-color, #fff);padding:var(--error-message-padding, 0);margin:var(--error-message-margin, 0)}'}}]);