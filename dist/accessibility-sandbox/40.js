(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "1s0n":
/*!**************************************************************************************************!*\
  !*** /Users/mattyZ/Desktop/Projects/forked-cel-library/dist-stencil/esm/cel-icon-label.entry.js ***!
  \**************************************************************************************************/
/*! exports provided: cel_icon_label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_icon_label", function() { return CelIconLabel; });
/* harmony import */ var _index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-9a8c46b4.js */ "RO4M");
/* harmony import */ var _utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-194224bf.js */ "ldx1");
/* harmony import */ var _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cel-icon-constants-33baae7b.js */ "UVxy");
/* harmony import */ var _cel_icon_label_constants_c23c6c5f_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cel-icon-label-constants-c23c6c5f.js */ "y5zg");
/* harmony import */ var _get_hover_color_d543db8b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-hover-color-d543db8b.js */ "/BD/");
/* harmony import */ var _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-a06dfd18.js */ "+Be3");







const celIconLabelCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:inline-block}button{background:none;color:inherit;border:none;padding:var(--icon-label-button-padding, 5px);font:inherit;cursor:pointer;outline:inherit}button:disabled,button:disabled:hover{color:var(--icon-label-button-disabled-color, #939393);--cel-color-disabled:var(--icon-disabled-color, $grayDusty)}button:hover{color:var(--icon-label-hovered-color, #2150a3)}*,*:before,*:after{-webkit-box-sizing:border-box;box-sizing:border-box}.row-start{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.icon-label{color:var(--icon-label-color, #333);font-family:var(--icon-label-font-family, \"OpenSans-Semibold\");font-size:var(--icon-label-font-size, 0.875rem);cursor:pointer;border-radius:2px;text-align:var(--icon-label-text-align, left)}.icon-label:focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px);border-radius:var(--icon-label-focus-radius, 0)}.icon{min-width:var(--icon-label-icon-min-width, 18px)}.icon--left{margin-right:var(--icon-label-gap, 3px)}.icon--right{margin-left:var(--icon-label-gap, 3px)}";

const CelIconLabel = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.iconLabelClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celIconLabelClick", 7);
    this.getColor = () => {
      if (this.disabled) {
        return _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_2__["C"].DISABLED;
      }
      else if (this.hovered || this.hovered && this.focused) {
        return Object(_get_hover_color_d543db8b_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.color);
      }
      else {
        return this.color;
      }
    };
    this.hovered = false;
    this.focused = false;
    this.disabled = false;
    this.label = '';
    this.color = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_2__["C"].BLACK;
    this.iconType = _cel_icon_label_constants_c23c6c5f_js__WEBPACK_IMPORTED_MODULE_3__["C"].RIGHT;
    this.iconSize = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_2__["a"].MEDIUM;
    this.name = '';
    this.src = undefined;
    this.iconLabelAriaExpanded = null;
    this.iconLabelAriaControls = null;
    this.iconLabelAriaLabel = null;
  }
  labelMouseEnter() {
    this.hovered = true;
  }
  labelMouseLeave() {
    this.hovered = false;
  }
  connectedCallback() {
    this.cel_icon = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon', 'cel-icon-label', this.el);
  }
  handleIconLabelClick() {
    this.iconLabelClick.emit(this.iconLabelAriaExpanded);
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { onFocus: () => (this.focused = true), onBlur: () => (this.focused = false), onClick: () => this.handleIconLabelClick(), class: "icon-label row-start", onMouseEnter: () => this.labelMouseEnter(), onMouseLeave: () => this.labelMouseLeave(), disabled: this.disabled, "aria-expanded": this.iconLabelAriaExpanded ? 'true' : 'false', "aria-controls": this.iconLabelAriaControls, "aria-label": this.iconLabelAriaLabel ? this.iconLabelAriaLabel : this.label }, (this.name || this.src) && this.iconType == _cel_icon_label_constants_c23c6c5f_js__WEBPACK_IMPORTED_MODULE_3__["C"].LEFT ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": "true", class: "icon icon--left", "data-name": this.name, "data-src": this.src, "data-color": this.getColor(), "data-size": this.iconSize })) : null, this.label, (this.name || this.src) && this.iconType == _cel_icon_label_constants_c23c6c5f_js__WEBPACK_IMPORTED_MODULE_3__["C"].RIGHT ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": "true", class: "icon icon--right", "data-name": this.name, "data-src": this.src, "data-color": this.getColor(), "data-size": this.iconSize })) : null)));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
CelIconLabel.style = celIconLabelCss;




/***/ })

}]);
//# sourceMappingURL=40.js.map