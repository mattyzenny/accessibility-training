(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "OgTs":
/*!*********************************************************************************************!*\
  !*** /Users/mattyZ/Desktop/Projects/forked-cel-library/dist-stencil/esm/cel-image.entry.js ***!
  \*********************************************************************************************/
/*! exports provided: cel_image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_image", function() { return CelImage; });
/* harmony import */ var _index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-9a8c46b4.js */ "RO4M");
/* harmony import */ var _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cel-icon-constants-33baae7b.js */ "UVxy");



const celImageCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:inline-block}img{width:var(--cel-image-width);height:var(--cel-image-height)}img.custom{height:var(--cel-custom-height, 24px) !important;width:var(--cel-custom-width, 24px) !important}img.xxsmall{height:8px !important;width:8px !important}img.xsmall{height:12px !important;width:12px !important}img.small{height:14px !important;width:14px !important}img.regular{height:16px !important;width:16px !important}img.medium{height:18px !important;width:18px !important}img.mlarge{height:24px !important;width:24px !important}img.large{height:32px !important;width:32px !important}img.xlarge{height:50px !important;width:50px !important}img.xxlarge{height:68px !important;width:68px !important}img.xxxlarge{height:138px !important;width:138px !important}";

const CelImage = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.altText = null;
    this.role = null;
    this.name = undefined;
    this.src = undefined;
    this.size = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_1__["a"].MEDIUM;
  }
  formImageSource() {
    if (this.src) {
      return this.src;
    }
    else {
      return `https://lst-assets.savvasrealize.com/assets/images/${this.name}.svg`;
    }
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { class: `${this.size}`, role: this.role, src: this.formImageSource(), alt: this.altText })));
  }
};
CelImage.style = celImageCss;




/***/ }),

/***/ "UVxy":
/*!*********************************************************************************************************!*\
  !*** /Users/mattyZ/Desktop/Projects/forked-cel-library/dist-stencil/esm/cel-icon-constants-33baae7b.js ***!
  \*********************************************************************************************************/
/*! exports provided: C, a, b, c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CelIconColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CelIconSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CelButtonSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CelIconNames; });
var CelIconColors;
(function (CelIconColors) {
  CelIconColors["PRIMARY"] = "primary";
  CelIconColors["PRIMARY_SHADE"] = "primary-shade";
  CelIconColors["BLACK"] = "black";
  CelIconColors["WHITE"] = "white";
  CelIconColors["PLUM"] = "plum";
  CelIconColors["ERROR"] = "error";
  CelIconColors["ERROR_SHADE"] = "error-shade";
  CelIconColors["NOTIFICATION"] = "notification";
  CelIconColors["CONFIRM"] = "confirm";
  CelIconColors["DISABLED"] = "disabled";
  CelIconColors["GRAYDARKER"] = "gray-darker";
  CelIconColors["GRAYDUSTY"] = "gray-dusty";
  CelIconColors["GRAYLIGHT"] = "gray-light";
  CelIconColors["GRAYLIGHTER"] = "gray-lighter";
  CelIconColors["GRAY"] = "gray";
  CelIconColors["FEEDBACKGREEN"] = "feedback-green";
})(CelIconColors || (CelIconColors = {}));
var CelIconSizes;
(function (CelIconSizes) {
  CelIconSizes["CUSTOM"] = "custom";
  CelIconSizes["XSMALL"] = "xsmall";
  CelIconSizes["XXSMALL"] = "xxsmall";
  CelIconSizes["SMALL"] = "small";
  CelIconSizes["REGULAR"] = "regular";
  CelIconSizes["MEDIUM"] = "medium";
  CelIconSizes["MLARGE"] = "mlarge";
  CelIconSizes["LARGE"] = "large";
  CelIconSizes["XLARGE"] = "xlarge";
  CelIconSizes["XXLARGE"] = "xxlarge";
  CelIconSizes["XXXLARGE"] = "xxlarge";
})(CelIconSizes || (CelIconSizes = {}));
var CelIconNames;
(function (CelIconNames) {
  CelIconNames["MENU"] = "menu";
  CelIconNames["CLOSE"] = "close";
})(CelIconNames || (CelIconNames = {}));
var CelButtonSizes;
(function (CelButtonSizes) {
  CelButtonSizes["SMALL"] = "small";
  CelButtonSizes["MEDIUM"] = "medium";
  CelButtonSizes["LARGE"] = "large";
})(CelButtonSizes || (CelButtonSizes = {}));




/***/ })

}]);
//# sourceMappingURL=29.js.map