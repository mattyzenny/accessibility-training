(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"8mWF":function(t,e,r){"use strict";r.r(e),r.d(e,"cel_rich_text_footer",function(){return l});var a=r("RO4M"),s=r("z81R"),i=r("7xcI"),o=r("UVxy");r("1wBy");const l=class{constructor(t){Object(a.i)(this,t),this.textChanges=Object(a.d)(this,"saveTextChanges",7),this.componentLoaded=Object(a.d)(this,"celRichTextFooterLoaded",7),this.rteErrorMessage=Object(a.d)(this,"rteErrorMessage",7),this.saveState=void 0,this.isMathEditorActive=!1,this.isTextPersistApplicable=!0,this.isTextChanged=!1,this.rteCurrentStates={message:"",status:i.a.reset},this.currentCharCount=void 0,this.celRteEditorStore=void 0,this.celIconBaseUrl="",this.rteContents="",this.debounceInterval=0,this.maxCharLength=0,this.showFooterButton=!1,this.footerButtonDisabled=!0,this.rteButtonLabel="Done",this.rteMode="editor"}handleFooterButtonDisabledChange(){"editor"===this.rteMode&&this.saveState!==i.h.savingText&&this.isTextPersistApplicable&&(this.isTextChanged=!this.footerButtonDisabled)}handleCelButtonOnClick(t){const{detail:{id:e}}=t;"editor-text-persist-button"===e&&this.isTextPersistApplicable&&this.isTextChanged&&(clearTimeout(this.autoSaveTimer),this.handleMaxCharErrorMessage(),this.saveTextChange("buttonClick",this.currentRteText))}connectedCallback(){this.cel_icon=Object(s.j)("cel-icon","cel-rich-text-footer",this.el),this.cel_button=Object(s.j)("cel-button","cel-rich-text-footer",this.el)}componentDidLoad(){this.celRteEditorStore.onChange("textChange",({currentCharCount:t,currentRteText:e,source:r})=>{this.currentRteText=e,this.onCountChange(t),this.onTextChange(r)}),this.celRteEditorStore.onChange("rteStatus",t=>{this.handleStateChange(t)}),this.celRteEditorStore.onChange("handleFooter",t=>{const{charCount:e,rteText:r}=t;this.currentCharCount=e,this.currentRteText=r}),this.celRteEditorStore.onChange("activeMathEditorStatus",t=>{this.isMathEditorActive=t}),this.isTextChanged=!this.footerButtonDisabled,this.componentLoaded.emit(!0)}onCountChange(t){this.currentCharCount=t,this.isTextPersistApplicable=!(this.maxCharLength>0&&this.currentCharCount>this.maxCharLength),this.handleMaxCharErrorMessage()}onTextChange(t){const{state:{activeMathEditorStatus:e}}=this.celRteEditorStore;this.isTextChanged=this.rteContents!==this.currentRteText,this.isTextPersistApplicable&&this.debounceInterval>0&&!e&&"user"===t?(clearTimeout(this.autoSaveTimer),this.autoSaveTimer=setTimeout(()=>{this.saveTextChange("debounce",this.currentRteText)},this.debounceInterval)):clearTimeout(this.autoSaveTimer)}saveTextChange(t,e){this.saveAction=t,this.isTextChanged=!1,this.saveState=i.h.savingText,this.rteContents=0!==this.currentCharCount?e:"",this.textChanges.emit({action:t,content:this.rteContents})}handleStateChange(t){try{"object"==typeof t&&(this.rteCurrentStates=t),"string"==typeof t&&(this.rteCurrentStates=JSON.parse(t));const{status:e=null}=this.rteCurrentStates,{error:r,saving:a,success:s,reset:o}=i.a;switch(e){case r:this.isTextChanged=!0,this.saveState="",this.rteErrorMessage.emit(this.rteCurrentStates);break;case a:this.saveState=i.h.savingText;break;case s:this.saveState=i.h.savedText,setTimeout(()=>{this.saveState=""},2e3),this.handleFooterButtonState();break;case o:this.saveState="",this.handleFooterButtonState(),this.rteErrorMessage.emit(this.rteCurrentStates)}this.celRteEditorStore.state.status=e}catch(e){console.error("RTE status handling exception",e)}}handleFooterButtonState(){this.isTextChanged=0===this.currentCharCount&&this.footerButtonDisabled?!this.footerButtonDisabled:this.currentCharCount>0||"debounce"===this.saveAction}handleMaxCharErrorMessage(){this.rteCurrentStates=this.maxCharLength>0&&!this.isTextPersistApplicable?{message:`Response must not exceed ${this.maxCharLength} character limit.`,status:i.a.error}:{message:"",status:i.a.reset},this.handleStateChange(this.rteCurrentStates)}render(){var t,e;return Object(a.g)(a.a,{"data-cel-version":"9.0.5"},Object(a.g)("div",{class:["sc-quill-cel-rich-text-bottom-container",(null===(t=this.rteCurrentStates)||void 0===t?void 0:t.status)!==i.a.error&&this.maxCharLength<=0?"count-hidden":""].join(" ")},this.maxCharLength>0?Object(a.g)("span",{class:["sc-quill-cel-rich-text-char-count",this.maxCharLength>0&&!this.isTextPersistApplicable?"error":""].join(" ")},this.currentCharCount,"/",this.maxCharLength):null,Object(a.g)("span",{class:"sc-quill-cel-rich-text-footer-right"},this.saveState&&this.rteCurrentStates.status!=i.a.error?Object(a.g)("span",{class:"sc-quill-cel-rich-text-status-container",role:"alert"},this.saveState===i.h.savedText?Object(a.g)("span",{class:"cel-visually-hidden"},this.maxCharLength-this.currentCharCount," Characters remaining"):null,Object(a.g)("span",{class:"saved-status-text"},this.saveState,this.saveState===i.h.savingText?Object(a.g)("span",{"aria-hidden":"true"},"..."):null)):null,this.showFooterButton?Object(a.g)(this.cel_button,{class:"sc-quill-cel-rich-text-persist-button","data-button-aria-label":this.rteButtonLabel,"data-label":this.rteButtonLabel,"data-size":"small","data-disabled":!(this.isTextPersistApplicable&&this.isTextChanged&&!this.isMathEditorActive),"data-color":o.a.PRIMARY,"data-send-target-info-on-button-click":"true","data-identifier":"editor-text-persist-button"}):null)),this.rteCurrentStates.status===i.a.error?Object(a.g)("div",{class:"sc-quill-cel-rich-text-error-msg-container"},Object(a.g)("span",null,Object(a.g)(this.cel_icon,{"aria-hidden":"true","data-src":this.celIconBaseUrl?`${this.celIconBaseUrl}alert-circle.svg`:"","data-name":"alert-circle","data-color":"error","data-size":"regular"})),Object(a.g)("span",{role:"alert",class:"sc-quill-cel-rich-text-error-msg-text"},null===(e=this.rteCurrentStates)||void 0===e?void 0:e.message)):null)}get el(){return Object(a.f)(this)}static get watchers(){return{footerButtonDisabled:["handleFooterButtonDisabledChange"]}}};l.style='.lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, "OpenSans");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, "OpenSans-Semibold");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}.sc-quill-cel-rich-text-footer-right{margin-left:auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.sc-quill-cel-rich-text-footer-right .saved-status-text{font-family:OpenSans;font-size:var(--cel-rte-saved-status-font-size, 0.75rem);line-height:16px;color:#333}.sc-quill-cel-rich-text-footer-right .sc-quill-cel-rich-text-status-container{padding:0 16px}.sc-quill-cel-rich-text-footer-right .sc-quill-cel-rich-text-persist-button{--button-height:var(--rich-text-footer-button-height, 26px);--button-min-width:var(--rich-text-footer-button-min-width, 67px);--button-text-size:var(--rich-text-footer-button-text-size, 0.875rem);--button-padding:var(--rich-text-footer-button-padding, 0)}.sc-quill-cel-rich-text-error-msg-container{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none}.sc-quill-cel-rich-text-error-msg-container .sc-quill-cel-rich-text-error-msg-text{font-family:OpenSans-Bold;font-size:var(--cel-rte-error-msg-font-size, 0.75rem);margin-left:4px;color:#cc333f;line-height:16px}.sc-quill-cel-rich-text-bottom-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:8px 0}.sc-quill-cel-rich-text-bottom-container.count-hidden{float:right}.sc-quill-cel-rich-text-char-count{font-family:OpenSans;font-weight:400;font-size:var(--cel-rte-char-count-font-size, 0.75rem);line-height:16px;color:#333}.sc-quill-cel-rich-text-char-count.error{color:#cc333f}'}}]);