(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "ooCS":
/*!**********************************************************************************************!*\
  !*** /Users/mattyZ/Desktop/Projects/forked-cel-library/dist-stencil/esm/cel-loader.entry.js ***!
  \**********************************************************************************************/
/*! exports provided: cel_loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_loader", function() { return CelLoader; });
/* harmony import */ var _index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-9a8c46b4.js */ "RO4M");


const celLoaderCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.loader-label{font-family:var(--cel-loader-label-font-family, \"OpenSans\");font-size:var(--cel-loader-label-font-size, 0.75rem);margin-top:var(--cel-loader-label-margin-top, 13px);margin-bottom:0;color:var(--cel-loader-label-color, #333)}.loader-animation-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:space-evenly;justify-content:space-evenly;-ms-flex-align:center;align-items:center;width:var(--loader-width, 66px);height:var(--loader-circle-diameter, 18px)}.circle-container *{border-radius:50%;width:100%;height:100%}.circle-container{width:var(--loader-circle-diameter, 18px);height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.first-circle{background-color:var(--first-circle-color, #9eca47);-webkit-animation:FirstCirclePulse 1000ms infinite linear;animation:FirstCirclePulse 1000ms infinite linear}.second-circle{background-color:var(--second-circle-color, #d73a59);-webkit-animation:SecondCirclePulse 1000ms infinite linear;animation:SecondCirclePulse 1000ms infinite linear}.third-circle{background-color:var(--third-circle-color, #0072ee);-webkit-animation:ThirdCirclePulse 1000ms infinite linear;animation:ThirdCirclePulse 1000ms infinite linear}@-webkit-keyframes FirstCirclePulse{0%{opacity:100%;width:100%;height:100%}50%{opacity:0%;width:0;height:0}100%{opacity:100%;width:100%;height:100%}}@keyframes FirstCirclePulse{0%{opacity:100%;width:100%;height:100%}50%{opacity:0%;width:0;height:0}100%{opacity:100%;width:100%;height:100%}}@-webkit-keyframes SecondCirclePulse{0%{opacity:60%;width:60%;height:60%}20%{opacity:100%;width:100%;height:100%}70%{opacity:0%;width:0;height:0}100%{opacity:60%;width:60%;height:60%}}@keyframes SecondCirclePulse{0%{opacity:60%;width:60%;height:60%}20%{opacity:100%;width:100%;height:100%}70%{opacity:0%;width:0;height:0}100%{opacity:60%;width:60%;height:60%}}@-webkit-keyframes ThirdCirclePulse{0%{opacity:20%;width:20%;height:20%}40%{opacity:100%;width:100%;height:100%}90%{opacity:0%;width:0;height:0}100%{opacity:20%;width:20%;height:20%}}@keyframes ThirdCirclePulse{0%{opacity:20%;width:20%;height:20%}40%{opacity:100%;width:100%;height:100%}90%{opacity:0%;width:0;height:0}100%{opacity:20%;width:20%;height:20%}}";

const CelLoader = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.loaderLabel = null;
    this.isLiveRegion = false;
    this.loaderAriaLabel = 'Content Loading';
    this.showLoader = false;
  }
  componentDidLoad() {
    setTimeout(() => { this.showLoader = true; }, 0);
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      // role="status" is an implicit aria-live region
      role: this.isLiveRegion ? 'status' : 'none', "aria-label": this.isLiveRegion ? this.loaderAriaLabel : null, "aria-busy": !this.showLoader, id: this.isLiveRegion ? "container" : null
    }, this.showLoader ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "loader-animation-container", role: "none" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "circle-container", role: "none" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "first-circle" })), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "circle-container", role: "none" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "second-circle" })), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "circle-container", role: "none" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "third-circle" }))), this.isLiveRegion ?
        Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: this.loaderLabel ? 'loader-label' : 'cel-visually-hidden' }, this.loaderLabel ? this.loaderLabel : this.loaderAriaLabel)
        : null)
      : null), !this.isLiveRegion && !this.loaderLabel ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: 'cel-visually-hidden' }, this.loaderAriaLabel)
      : null));
  }
};
CelLoader.style = celLoaderCss;




/***/ })

}]);
//# sourceMappingURL=41.js.map