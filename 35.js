(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "64cT":
/*!**********************************************************************************************!*\
  !*** /Users/mattyZ/Desktop/Projects/forked-cel-library/dist-stencil/esm/cel-button.entry.js ***!
  \**********************************************************************************************/
/*! exports provided: cel_button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_button", function() { return CelButton; });
/* harmony import */ var _index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-9a8c46b4.js */ "RO4M");
/* harmony import */ var _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cel-icon-constants-33baae7b.js */ "UVxy");
/* harmony import */ var _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cel-button-constants-2362f78a.js */ "5kGd");
/* harmony import */ var _get_hover_color_d543db8b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-hover-color-d543db8b.js */ "/BD/");
/* harmony import */ var _utils_194224bf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils-194224bf.js */ "ldx1");
/* harmony import */ var _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-a06dfd18.js */ "+Be3");







const celButtonCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:-ms-flexbox;display:flex}.default-cursor{cursor:default}button{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.center{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.row-between{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.button{min-width:var(--button-min-width, 80px);min-height:var(--button-min-height, 36px);width:var(--button-width);height:var(--button-height);padding:var(--button-padding, 8px 16px);border-radius:var(--button-border-radius, 4px);font-family:var(--button-font-family, \"Poppins-Medium\");font-size:var(--button-text-size, 1rem)}span{white-space:var(--button-white-space, normal)}@media (hover: hover){.button:hover{background-color:var(--solid-button-bg-color, #006be0)}.button--solid:hover{background-color:var(--solid-button-hover-bg-color, #2150a3)}.button--icon:hover{background-color:var(--icon-button-bg-color-hover, #f3f3f3);color:var(--icon-button-font-color-hover, #2150a3)}.button--text:hover{background-color:var(--text-button-bg-color-hover, #f3f3f3);color:var(--text-button-font-color-hover, #2150a3)}.button--outline:hover{background-color:var(--outline-button-bg-color-hover, #f3f3f3);color:var(--outline-button-font-color-hover, #2150a3)}.button--outline:hover:enabled{background-image:var(--outline-button-bg-image-hover)}}.button.disabled{cursor:var(--button-disabled-cursor, default)}.button--solid{background-color:var(--solid-button-bg-color, #006be0);color:var(--solid-label-color, #fff)}.button--solid:focus,.button--solid:active{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}.button--solid.disabled{background-color:var(--solid-button-disabled-bg-color, #e2e2e2);color:var(--solid-button-disabled-font-color, #767676)}.pressed--solid{background-color:var(--solid-button-hover-bg-color, #2150a3)}.button--outline{background-color:var(--outline-button-bg-color, #fff);border:1px solid var(--outline-border-color, #006be0);color:var(--outlineLabel-color, #006be0)}.button--outline:focus:enabled{background-image:var(--outline-button-bg-image-focus)}.button--outline:focus-visible,.button--outline:focus,.button--outline:active{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}.button--outline.disabled{background-color:var(--outline-button-disabled-bg-color, #fff);color:var(--outline-button-disabled-font-color, #767676);border:1px solid var(--outline-border-color-disabled, #767676)}.pressed--outline{background-color:var(--outline-button-bg-color-hover, #f3f3f3);color:var(--outline-button-font-color-hover, #2150a3)}.button--text{background-color:var(--text-button-bg-color, #fff);color:var(--textLabel-color, #006be0)}.button--text:focus,.button--text:active{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}.button--text.disabled{background-color:var(--text-button-disabled-bg-color, #fff);color:var(--text-button-disabled-font-color, #767676)}.pressed--text{background-color:var(--outline-button-bg-color-hover, #f3f3f3);color:var(--outline-button-font-color-hover, #2150a3)}.button--icon{background-color:var(--icon-button-bg-color, #fff);color:var(--icon-label-color, #006be0)}.button--icon:focus,.button--icon:active{color:var(--icon-button-font-color-focus-active, #2150a3);outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--icon-button-focus-active-outline-color, #2150a3);outline-offset:var(--focus-ring-outline-offset, -4px)}.button--icon:focus.disabled,.button--icon:active.disabled{outline-color:#767676}.button--icon.disabled{background-color:var(--icon-button-disabled-bg-color, #fff);color:var(--icon-button-disabled-font-color, #767676)}.pressed--icon{background-color:var(--icon-button-bg-color-pressed, #f3f3f3);color:var(--icon-button-font-color-pressed, #2150a3)}.small{min-width:10px;width:var(--small-button-width, -webkit-fit-content);width:var(--small-button-width, -moz-fit-content);width:var(--small-button-width, fit-content);height:var(--small-button-height, 26px);padding:var(--small-button-padding, 4px 8px);font-size:var(--small-button-font-size, 0.875rem)}.restrict{max-width:var(--button-max-with, 193px);height:var(--button-restricted-width-height, -webkit-fit-content);height:var(--button-restricted-width-height, -moz-fit-content);height:var(--button-restricted-width-height, fit-content)}.button-icon{margin:var(--button-icon-margin, 0);-ms-flex-negative:0;flex-shrink:0}.icon-only{min-width:var(--icon-only-button-min-width, 36px);min-height:var(--icon-only-button-min-height, 36px);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:var(--icon-only-button-padding)}.icon-only .button-icon{width:var(--icon-only-button-icon-width, 14px);height:var(--icon-only-button-icon-height, 14px)}.icon-only.small{min-width:var(--icon-only-button-min-width, 26px);min-height:var(--icon-only-button-min-height, 26px)}.icon-only.small .button-icon{width:var(--icon-only-button-icon-width, 10px);height:var(--icon-only-button-icon-height, 10px)}.icon-only-large{min-width:var(--icon-only-large-button-min-width, 48px);min-height:var(--icon-only-large-button-min-height, 48px)}.icon-only-large .button-icon{width:var(--icon-only-large-button-icon-width, 24px);height:var(--icon-only-large-button-icon-height, 24px)}.large-button{min-width:var(--large-button-min-width, 99px);min-height:var(--large-button-min-height, 48px);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:var(--large-button-padding, 6px 16px);font-size:var(--large-button-font-size, 1.25rem)}.loader-button{-ms-flex-pack:var(--button-loader-justify-content, center);justify-content:var(--button-loader-justify-content, center);--first-circle-color:var(--button-loader-first-circle-color, #fff);--second-circle-color:var(--button-loader-second-circle-color, #fff);--third-circle-color:var(--button-loader-third-circle-color, #fff);--loader-width:var(--inner-loader-width, 24px);--loader-circle-diameter:var(--loader-height, 6.4px);width:var(--loader-button-width, 102px);height:var(--loader-button-height, 36px)}.loader-button.disabled{--first-circle-color:var(--button-loader-first-circle-color, #767676);--second-circle-color:var(--button-loader-second-circle-color, #767676);--third-circle-color:var(--button-loader-third-circle-color, #767676)}.loader-button.button--outline:not(.disabled),.loader-button.button--text:not(.disabled),.loader-button.button--icon:not(.disabled){--first-circle-color:var(--button-loader-first-circle-color, #006be0);--second-circle-color:var(--button-loader-second-circle-color, #006be0);--third-circle-color:var(--button-loader-third-circle-color, #006be0)}.loader-button.small{width:var(--small-loader-button-width, 63px);height:var(--small-loader-button-height, 26px);--loader-width:var(--small-loader-width, 16px);--loader-circle-diameter:var(--small-loader-height, 4.27px)}.loader-button.small.icon-only{width:var(--small-icon-only-loader-button-width, 26px);height:var(--small-icon-only-loader-button-height, 26px)}.loader-button.large-button{width:var(--large-loader-button-width, 128px);height:var(--large-loader-button-height, 48px);--loader-width:var(--large-loader-width, 32px);--loader-circle-diameter:var(--large-loader-height, 8.53px)}.loader-button.icon-only{width:var(--icon-only-loader-button-width, 36px);height:var(--icon-only-loader-button-height, 36px)}";

const CelButton = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.btnFocused = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celButtonOnFocus", 7);
    this.btnBlurred = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celButtonOnBlur", 7);
    this.btnClicked = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celButtonOnClick", 7);
    this.btnMouseEntered = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celButtonMouseEntered", 7);
    this.btnMouseLeaves = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celButtonMouseLeaves", 7);
    this.componentLoaded = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celButtonLoaded", 7);
    this.onMouseEnter = () => {
      this.hovered = true;
      this.btnMouseEntered.emit();
    };
    this.onMouseLeave = () => {
      this.hovered = false;
      this.btnMouseLeaves.emit();
    };
    this.onClick = () => {
      this.pressed = !this.pressed;
      if (this.disabled || this.displayLoadingState) {
        return;
      }
      else if (this.sendTargetInfoOnButtonClick) {
        const eventObj = {
          id: this.identifier,
          name: this.name ? this.name : null,
          label: this.label ? this.label : null,
          target: this.buttonEl,
        };
        this.btnClicked.emit(eventObj);
      }
      else {
        this.btnClicked.emit(this.buttonType);
      }
    };
    this.passFocus = () => {
      var _a;
      this.tabindex = -1;
      (_a = this.buttonEl) === null || _a === void 0 ? void 0 : _a.focus();
    };
    this.passBlur = () => {
      this.tabindex = 0;
      this.btnBlurred.emit(this.identifier);
    };
    this.getColor = () => {
      if (this.disabled && !this.displayLoadingState) {
        return _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_1__["C"].GRAY;
      }
      else if (this.hovered || (this.toggle && this.pressed) || this.tabindex === -1) {
        return Object(_get_hover_color_d543db8b_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.color);
      }
      else {
        return this.color;
      }
    };
    this.tabindex = 0;
    this.hovered = false;
    this.pressed = false;
    this.buttonType = null;
    this.focusElement = false;
    this.variant = _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_2__["C"].SOLID;
    this.buttonRole = null;
    this.color = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_1__["C"].PRIMARY;
    this.iconType = undefined;
    this.size = undefined;
    this.lazy = false;
    this.restrict = false;
    this.disabled = false;
    this.displayLoadingState = false;
    this.toggle = false;
    this.label = undefined;
    this.name = undefined;
    this.identifier = undefined;
    this.sendTargetInfoOnButtonClick = false;
    this.src = undefined;
    this.hasPopup = undefined;
    this.buttonAriaLabel = undefined;
    this.ariaTitle = undefined;
    this.buttonAriaSelected = undefined;
    this.showComponentLoadInfo = false;
    this.buttonAriaExpanded = null;
    this.buttonAriaControls = null;
    this.isIconOnly = false;
    this.showLoader = false;
    this.buttonSize = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_1__["b"].MEDIUM;
  }
  connectedCallback() {
    this.cel_icon = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_4__["t"])('cel-icon', 'cel-button', this.el);
    this.cel_loader = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_4__["t"])('cel-loader', 'cel-button', this.el);
  }
  handleFocusElement() {
    if (this.focusElement && this.buttonEl) {
      this.buttonEl.focus();
    }
  }
  componentDidLoad() {
    if (this.showComponentLoadInfo) {
      this.componentLoaded.emit(true);
    }
    if (this.focusElement) {
      this.buttonEl.focus();
    }
  }
  getIconPosition() {
    switch (this.iconType) {
      case _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_2__["a"].LEFT:
        return 'row-between';
      case _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_2__["a"].RIGHT:
        return 'row-between';
      default:
        return 'center';
    }
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { id: this.identifier ? this.identifier : null, ref: (el) => (this.buttonEl = el), class: [
        'button',
        'button--' + this.variant,
        this.getIconPosition(),
        this.buttonSize === _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_1__["b"].SMALL ? 'small' : '',
        this.restrict ? 'restrict' : '',
        this.toggle && this.pressed ? 'pressed--' + this.variant : '',
        this.disabled && !this.displayLoadingState ? 'default-cursor disabled' : '',
        this.isIconOnly ? this.buttonSize === _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_1__["b"].LARGE ? 'icon-only-large icon-only' : 'icon-only' : '',
        this.buttonSize === _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_1__["b"].LARGE && !this.isIconOnly ? 'large-button' : '',
        this.showLoader ? 'loader-button' : '',
      ].join(' '), "data-button-size": this.buttonSize, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, onClick: () => this.onClick(), onFocus: this.passFocus, tabIndex: this.tabindex, onBlur: this.passBlur, "aria-label": this.buttonAriaLabel ? this.buttonAriaLabel : (this.isIconOnly ? this.name : null), title: this.ariaTitle ? this.ariaTitle : null, "aria-disabled": this.disabled || this.displayLoadingState ? 'true' : 'false', "aria-pressed": this.toggle ? (this.pressed ? 'true' : 'false') : null, "aria-expanded": this.buttonAriaExpanded, "aria-selected": this.buttonRole === 'tab' ? this.buttonAriaSelected : null, "aria-controls": this.buttonAriaControls, "aria-haspopup": this.hasPopup ? 'true' : null, "data-button-type": this.buttonType, "data-display-loading-state": this.displayLoadingState, role: this.buttonRole }, (this.iconType == 'left' || this.iconType == 'middle' || this.isIconOnly) && !this.showLoader ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { class: 'button-icon', "data-color": this.getColor(), "data-name": this.name, "data-src": this.src, "data-size": this.size ? this.size : 'medium', "data-lazy": this.lazy, "data-icon-aria-label": this.buttonAriaLabel, "aria-hidden": 'true' })) : (''), this.isIconOnly || this.showLoader ? null : Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { style: this.iconType == _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_2__["a"].MIDDLE ? { paddingLeft: '4px' } : null }, this.label), this.iconType == _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_2__["a"].RIGHT && !this.showLoader ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { class: 'button-icon', "data-color": this.getColor(), "data-name": this.name, "data-src": this.src, "data-size": this.size ? this.size : 'medium', "data-lazy": this.lazy, "data-icon-aria-label": this.buttonAriaLabel, "aria-hidden": 'true' })) : (''), this.showLoader ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_loader, { isLiveRegion: "false", loaderAriaLabel: null })
      : null)));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "focusElement": ["handleFocusElement"]
  }; }
};
CelButton.style = celButtonCss;




/***/ })

}]);
//# sourceMappingURL=35.js.map