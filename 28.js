(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{sAF0:function(t,e,i){"use strict";i.r(e),i.d(e,"cel_notification_board",function(){return r});var o=i("luJw"),a=i("nNSG");i("sOVx");const r=class{constructor(t){Object(o.i)(this,t),this.dismissAllClicked=Object(o.d)(this,"celNotificationBoardDismissAllClicked",7),this.footerClicked=Object(o.d)(this,"celNotificationBoardFooterClicked",7),this.headerLabel="Notifications",this.footerLabel="15 new items have been shared with you in My Library. An item shared with you in My Library has been edited.",this.footerAriaLabel="notification",this.footerHref=void 0,this.disableFooter=!1,this.hideFooter=!1,this.dismissAllLabel="Dismiss all",this.dismissAllAriaLabel="Dismiss all Notifications",this.disableDismissAll=!1,this.hideDismissAll=!1,this.notificationItems=[],this.showLoader=!1,this.loaderAriaLabel="Loading notifications"}handleDismissAllClick(){this.disableDismissAll||this.dismissAllClicked.emit()}handleFooterClick(){this.disableFooter||this.footerClicked.emit()}connectedCallback(){this.cel_notification_item=Object(a.j)("cel-notification-item","cel-notification-board",this.el),this.cel_loader=Object(a.j)("cel-loader","cel-notification-board",this.el)}componentDidLoad(){var t;this.hideDismissAll||null===(t=this.dismissAllEl)||void 0===t||t.focus()}render(){return Object(o.g)(o.a,{"data-cel-version":"9.0.6"},Object(o.g)("div",{role:"region","aria-label":this.showLoader?this.loaderAriaLabel:this.headerLabel,class:"notification-container"},Object(o.g)("div",{class:"container-header"},Object(o.g)("p",null,this.headerLabel),this.hideDismissAll?null:Object(o.g)("button",{ref:t=>this.dismissAllEl=t,class:["dismiss-all-button",this.disableDismissAll&&"disabled-button"].join(" "),"aria-disabled":this.disableDismissAll?"true":"false",onClick:()=>this.handleDismissAllClick(),"aria-label":this.dismissAllAriaLabel},this.dismissAllLabel)),Object(o.g)("div",{class:["notification-menu",this.hideFooter&&"footer-hidden"].join(" "),role:this.showLoader?null:"feed"},this.showLoader?Object(o.g)(this.cel_loader,{class:"notification-loader","data-loader-aria-label":this.loaderAriaLabel,"data-is-live-region":"true"}):this.notificationItems.map((t,e)=>Object(o.g)(this.cel_notification_item,{"data-notification-message":t.notificationMessage,"data-notification-second-message":t.notificationSecondMessage,"data-notification-subtext":t.notificationSubtext,"data-notification-href":t.notificationHref,"data-tag-label":t.tagLabel,"data-show-action-button":t.showActionButton,"data-notification-type":t.notificationType,"data-action-button-aria-label":t.actionButtonAriaLabel,"data-notification-id":t.notificationId,"data-action-button-label":t.actionButtonLabel,"data-notification-index":e})),this.hideFooter||this.showLoader?null:Object(o.g)("article",{"aria-setsize":"-1","aria-label":this.footerAriaLabel},Object(o.g)("a",{"aria-disabled":this.disableFooter?"true":"false",class:["container-footer",this.disableFooter&&"disabled-footer"].join(" "),href:this.disableFooter?null:this.footerHref,tabindex:"0",onClick:()=>this.handleFooterClick()},this.footerLabel)))))}get el(){return Object(o.f)(this)}};r.style='.lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, "OpenSans");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, "OpenSans-Semibold");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}.notification-container{border-radius:var(--notification-container-border-radius, 4px);background-color:var(--notification-container-background-color, #fff);-webkit-box-shadow:var(--notification-container-box-shadow, 0 1px 2px 0 rgba(0, 0, 0, 0.5));box-shadow:var(--notification-container-box-shadow, 0 1px 2px 0 rgba(0, 0, 0, 0.5));width:var(--notification-container-width, calc(100vw - 16px));max-width:var(--notification-container-max-width, 400px);position:absolute;top:var(--notification-container-top, 8px);left:var(--notification-container-left, 8px);overflow-y:auto;max-height:var(--notification-container-max-height, calc(100vh - 16px));max-height:var(--notification-container-max-height, calc(100svh - 16px))}.container-header{font-family:var(--notification-container-header-font-family, "Poppins-Medium");font-size:var(--notification-container-header-text-size, 0.875rem);height:var(--notification-container-header-height, 34px);color:#333;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin:var(--notification-container-header-margin, 0 16px)}.dismiss-all-button{background-color:transparent;border:none;color:#006be0;text-decoration:underline;font-size:0.875rem;font-family:"OpenSans-Semibold";border-radius:2px;padding:0}.dismiss-all-button:focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:0;text-decoration-thickness:var(--dismiss-all-text-focus-decoration-thickness, 1)}.dismiss-all-button.disabled-button{color:#939393}.dismiss-all-button:not(.disabled-button){cursor:pointer}.notification-menu{border-top:1px solid #e2e2e2;padding:0;margin:0}.notification-menu .notification-loader{margin-left:auto;margin-right:auto;padding:24px 16px}.container-footer{display:block;color:#333;text-decoration:none;padding:25px 16px;margin:0;font-family:"OpenSans";line-height:normal;font-size:var(--notification-container-footer-text-size, 0.875rem)}.container-footer:focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:#000;outline-offset:-4px}.container-footer.disabled-footer{text-align:var(--disabled-footer-text-align, center)}.footer-hidden cel-notification-item:last-child{--notification-item-border-bottom:none}@media (hover: hover){.dismiss-all-button:hover:not(.disabled-button),.dismiss-all-button:focus:not(.disabled-button){color:var(--dismiss-all-hover-color, #2150a3)}article:hover *:not(.disabled-footer){background-color:#e5f0f9;cursor:pointer}}'}}]);