(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "+Be3":
/*!************************************************************************************************!*\
  !*** /Users/mattyZ/Desktop/Projects/forked-cel-library/dist-stencil/esm/constants-a06dfd18.js ***!
  \************************************************************************************************/
/*! exports provided: A, C, D, E, F, H, K, L, M, O, R, S, T, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return ARROW_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CANCEL_MODAL_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return DataVisualizationColorKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return ESCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return FROM_DATE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return HEADER_CHECKBOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return KEYCODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return LEFT_MODAL_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return MOUSE_ENTER_TYPE_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return OPEN_MODAL_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return RIGHT_MODAL_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPACEBAR_CHAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SPACEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ARROW_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ARROW_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ARROW_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TO_DATE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ERROR_CLOSE_ICON_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return HIDE_TOOLTIP_TYPE_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return FOCUS_TYPE_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ACCEPT_MODAL_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LEFT_ICON_MODAL_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return CLOSE_MODAL_ICON_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return HEADER_ICON_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return MULTI_SELECT_LEFT_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return MULTI_SELECT_CLEAR_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return MULTI_SELECT_APPLY_BUTTON; });
const ENTER = 'Enter';
const ARROW_RIGHT = 'ArrowRight';
const ARROW_LEFT = 'ArrowLeft';
const SPACEBAR = 'Spacebar';
const SPACEBAR_CHAR = ' ';
const ARROW_DOWN = 'ArrowDown';
const ARROW_UP = 'ArrowUp';
const TAB = 'Tab';
const ESCAPE = 'Escape';
const KEYCODE = {
  BOLD: 66,
  ITALIC: 73,
  UNDERLINE: 85,
  UNDO: 89,
  REDO: 90,
};
const FOCUS_TYPE_EVENT = 'focus';
const MOUSE_ENTER_TYPE_EVENT = 'enter';
const HIDE_TOOLTIP_TYPE_EVENT = 'hide-tooltip';
const FROM_DATE_TYPE = 'type-from-date';
const TO_DATE_TYPE = 'type-to-date';
const HEADER_CHECKBOX = 'header-checkbox';
const RIGHT_MODAL_BUTTON = 'right-modal-button';
const LEFT_MODAL_BUTTON = 'left-modal-button';
const CANCEL_MODAL_BUTTON = 'cancel-modal-button';
const ACCEPT_MODAL_BUTTON = 'accept-modal-button';
const LEFT_ICON_MODAL_BUTTON = 'left-icon-modal-button';
const OPEN_MODAL_BUTTON = 'open-modal-button';
const CLOSE_MODAL_ICON_BUTTON = 'close-modal-icon-button';
const ERROR_CLOSE_ICON_BUTTON = 'error-close-icon-button';
const MULTI_SELECT_APPLY_BUTTON = 'multi-select-apply-button';
const MULTI_SELECT_CLEAR_BUTTON = 'multi-select-clear-button';
const MULTI_SELECT_LEFT_BUTTON = 'multi-select-left-button';
const HEADER_ICON_BUTTON = 'header-icon-button';
var DataVisualizationColorKeys;
(function (DataVisualizationColorKeys) {
  DataVisualizationColorKeys["RED"] = "red";
  DataVisualizationColorKeys["YELLOW"] = "yellow";
  DataVisualizationColorKeys["BLUE"] = "blue";
  DataVisualizationColorKeys["GREEN"] = "green";
  DataVisualizationColorKeys["WHITE"] = "white";
  DataVisualizationColorKeys["CUSTOM"] = "custom";
})(DataVisualizationColorKeys || (DataVisualizationColorKeys = {}));
var ProgressStepStatus;
(function (ProgressStepStatus) {
  ProgressStepStatus["COMPLETE"] = "complete";
  ProgressStepStatus["ACTIVE"] = "active";
  ProgressStepStatus["INACTIVE"] = "inactive";
})(ProgressStepStatus || (ProgressStepStatus = {}));




/***/ }),

/***/ "36YO":
/*!*********************************************************************************************************!*\
  !*** /Users/mattyZ/Desktop/Projects/forked-cel-library/dist-stencil/esm/cel-searchable-select.entry.js ***!
  \*********************************************************************************************************/
/*! exports provided: cel_searchable_select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_searchable_select", function() { return CelSearchableSelect; });
/* harmony import */ var _index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-9a8c46b4.js */ "RO4M");
/* harmony import */ var _utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-194224bf.js */ "ldx1");
/* harmony import */ var _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cel-icon-constants-33baae7b.js */ "UVxy");
/* harmony import */ var _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants-a06dfd18.js */ "+Be3");





const celSearchableSelectCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}:host(.label-left){gap:var(--left-label-gap, 8px);display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:start;align-items:flex-start}:host(.label-left) label{margin:var(--left-label-margin, 10px 0)}label{font-family:var(--header-label-font-family, \"OpenSans-Semibold\");font-size:var(--header-label-font-size, 0.875rem);color:var(--header-label-font-color, #333);margin-bottom:var(--header-label-margin-bottom, 5px);width:var(--header-label-width, -webkit-fit-content);width:var(--header-label-width, -moz-fit-content);width:var(--header-label-width, fit-content)}label.disabled{color:var(--header-label-disabled-color, #767676)}input{white-space:var(--searchable-select-whitespace, nowrap);overflow:var(--searchable-select-overflow, hidden);text-overflow:var(--searchable-select-text-overflow, ellipsis);border:var(--searchable-select-border, 1px solid #333);width:var(--searchable-select-width, 196px);height:var(--searchable-select-height, 24px);padding:var(--searchable-select-padding, 8px 32px 8px 8px);border-radius:var(--searchable-select-border-radius, 2px);outline:var(--searchable-select-outline, none);font-family:var(--searchable-select-font-family, \"OpenSans\");line-height:var(--searchable-select-line-height, 24px)}input:focus.expanded:not(.disabled),input:active.expanded:not(.disabled){background-color:var(--searchable-select-focus-background-color, #2150a3);border-color:var(--searchable-select-focus-border-color, #2150a3);color:var(--searchable-select-focus-text-color, #fff)}input:focus.expanded:not(.disabled)::-webkit-input-placeholder,input:active.expanded:not(.disabled)::-webkit-input-placeholder{color:var(--searchable-select-focus-placeholder-text-color, #fff);text-overflow:var(--searchable-select-text-overflow, ellipsis)}input:focus.expanded:not(.disabled)::-moz-placeholder,input:active.expanded:not(.disabled)::-moz-placeholder{color:var(--searchable-select-focus-placeholder-text-color, #fff);text-overflow:var(--searchable-select-text-overflow, ellipsis)}input:focus.expanded:not(.disabled):-ms-input-placeholder,input:active.expanded:not(.disabled):-ms-input-placeholder{color:var(--searchable-select-focus-placeholder-text-color, #fff);text-overflow:var(--searchable-select-text-overflow, ellipsis)}input:focus.expanded:not(.disabled)::-ms-input-placeholder,input:active.expanded:not(.disabled)::-ms-input-placeholder{color:var(--searchable-select-focus-placeholder-text-color, #fff);text-overflow:var(--searchable-select-text-overflow, ellipsis)}input:focus.expanded:not(.disabled)::placeholder,input:active.expanded:not(.disabled)::placeholder{color:var(--searchable-select-focus-placeholder-text-color, #fff);text-overflow:var(--searchable-select-text-overflow, ellipsis)}input:focus.expanded:not(.disabled)+.caret-icon,input:active.expanded:not(.disabled)+.caret-icon{--cel-color-base:#fff}input:focus:not(.expanded),input:active:not(.expanded){outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:#333;outline-offset:-6px}input.disabled{background-color:var(--searchable-select-disabled-background-color, #e2e2e2);cursor:var(--searchable-select-disabled-cursor, not-allowed);color:var(--searchable-select-disabled-color, #767676);border:var(--searchable-select-disabled-border, none);outline:var(--searchable-select-disabled-outline, none)}input.error{border:var(--searchable-select-error-outline, 2px solid #cc333f)}input.success{border:var(--searchable-select-success-outline, 2px solid #2A7D14)}.alert-message-wrapper{display:var(--searchable-select-alert-message-display, flex);margin-top:var(--alert-message-margin-top, 2px);-ms-flex-align:var(--alert-message-align-items, center);align-items:var(--alert-message-align-items, center)}.error-icon,.success-icon{margin-top:var(--error-icon-margin-top, 2px);margin-right:var(--error-icon-margin-right, 3px);-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:start;align-self:flex-start}.error-message{margin:var(--error-message-margin, 0);color:var(--error-message-color, #cc333f);font-family:var(--error-message-font-family, \"OpenSans-Bold\");font-size:var(--error-message-font-size, 0.75rem);height:var(--validation-message-height)}.success-message{margin:var(--success-message-margin, 0);color:var(--success-message-color, #2A7D14);font-family:var(--success-message-font-family, \"OpenSans-Bold\");font-size:var(--success-message-font-size, 0.75rem);height:var(--validation-message-height)}.zero-results-message{position:var(--zero-results-message-position, absolute);top:var(--zero-results-message-top, 42px);left:var(--zero-results-message-left, 0);margin:var(--zero-results-message-margin, 0);border-radius:var(--zero-results-message-radius, 4px);-webkit-box-shadow:var(--zero-results-message-shadow, 0px 3px 5px 0px rgba(0, 0, 0, 0.35));box-shadow:var(--zero-results-message-shadow, 0px 3px 5px 0px rgba(0, 0, 0, 0.35));background-color:var(--zero-results-message-background-color, #fff);width:var(--zero-results-message-width, 270px);height:var(--zero-results-message-height, 50px);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:var(--zero-results-message-color, #333);font-family:var(--zero-results-message-font-family, \"OpenSans\");font-size:var(--zero-results-message-font-size, 0.875rem)}ul{position:var(--listbox-position, absolute);top:var(--listbox-top, 42px);left:var(--listbox-left, 0);list-style:none;background-color:var(--listbox-background-color, #fff);padding:var(--listbox-padding, 8px 0);margin:var(--listbox-margin, 0);min-height:34px;max-height:var(--listbox-max-height, 240px);overflow-y:var(--listbox-overflow-y, auto);border-radius:var(--listbox-border-radius, 4px);-webkit-box-shadow:var(--listbox-box-shadow, 0px 3px 5px 0px rgba(0, 0, 0, 0.35));box-shadow:var(--listbox-box-shadow, 0px 3px 5px 0px rgba(0, 0, 0, 0.35));width:var(--listbox-width, 270px);display:var(--listbox-display, flex);-ms-flex-direction:var(--listbox-flex-direction, column);flex-direction:var(--listbox-flex-direction, column);-ms-flex-pack:var(--listbox-justify-content, flex-start);justify-content:var(--listbox-justify-content, flex-start)}.option{color:var(--option-color, #333);font-family:var(--option-font-family, \"OpenSans-Semibold\");font-size:var(--option-font-size, 14px);display:var(--option-display, flex);-ms-flex-align:var(--option-align-items, center);align-items:var(--option-align-items, center);-ms-flex-pack:var(--option-justify-content, space-between);justify-content:var(--option-justify-content, space-between)}.option .option-label{width:var(--option-label-width, 200px);padding:var(--option-label-padding, 16px);margin:var(--option-label-margin, 0)}.option cel-icon{margin-right:var(--searchable-select-option-icon-margin-right, 16px)}.caret-icon{position:absolute;right:8px;top:12px;--cel-color-base:#333;cursor:pointer}.caret-icon.disabled{--cel-color-base:#767676}.input-wrapper{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative}.combobox-wrapper{position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.disabled-option{color:var(--disabled-option-color, #767676)}.visually-focused{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:#333;outline-offset:-2px}@media (hover: hover){li:hover:not(.disabled-option):not(.zero-results-message){background-color:var(--option-hover-color, #eaf3fc);cursor:var(--option-hover-cursor, pointer)}}";

const CelSearchableSelect = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.closeSearchableSelectDropdown = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celSearchableSelectCloseDropdown", 7);
    this.itemSelected = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchableSelectItemSelected", 7);
    this.openSearchableSelectDropdown = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celSearchableSelectOpenDropdown", 7);
    this.searchableSelectId = `cel-searchable-select-${searchableSelectDropdownIds++}`;
    this.selectedItem = undefined;
    this.listboxIndex = null;
    this.expanded = false;
    this.searchQuery = '';
    this.disableUnselect = false;
    this.headerLabel = undefined;
    this.resultsMessage = "Results";
    this.zeroResultsMessage = "No search results";
    this.labelLeft = false;
    this.comboboxAriaLabel = undefined;
    this.listboxAriaLabel = 'options';
    this.dropdownDisabled = false;
    this.menuList = [];
    this.identifier = 'cel-searchable-select';
    this.placeholderLabel = 'Placeholder Text';
    this.errorMessage = undefined;
    this.successMessage = undefined;
    this.enableError = false;
    this.enableSuccess = false;
  }
  onSelectClick() {
    if (!this.dropdownDisabled && !this.expanded) {
      this.selectEl.value = '';
      this.searchQuery = '';
      this.expandDropdown();
      this.selectEl.focus();
    }
  }
  handleInput(event) {
    if (!this.expanded) {
      this.expandDropdown();
    }
    this.searchQuery = event.target.value;
    this.listboxEls = this.el.shadowRoot.querySelectorAll('.option');
    this.listboxIndex = null;
  }
  handleEnter() {
    if (!this.expanded) {
      this.onSelectClick();
    }
    if (this.listboxIndex !== null) {
      const visuallyFocusedElement = this.listboxEls[this.listboxIndex];
      this.handleOptionClick(this.menuList.find(item => item.identifier === visuallyFocusedElement.id));
    }
  }
  handleEscape() {
    if (this.expanded) {
      this.closeDropdown();
    }
    else {
      this.selectEl.value = '';
      this.searchQuery = '';
      this.expandDropdown();
    }
  }
  handleArrowDown() {
    if (!this.expanded) {
      this.expandDropdown();
    }
    else {
      this.listboxEls = this.el.shadowRoot.querySelectorAll('.option');
      if (this.listboxEls.length > 0) {
        if (this.listboxIndex === null) {
          this.listboxIndex = 0;
        }
        else {
          this.listboxEls[this.listboxIndex].classList.remove('visually-focused');
          this.listboxIndex = Math.min(this.listboxIndex + 1, this.listboxEls.length - 1);
        }
        if (this.listboxIndex !== null) {
          this.listboxEls[this.listboxIndex].scrollIntoView({ behavior: 'smooth', block: "nearest" });
          this.listboxEls[this.listboxIndex].classList.add('visually-focused');
        }
      }
    }
  }
  handleArrowUp() {
    if (!this.expanded) {
      this.expandDropdown();
    }
    else {
      this.listboxEls = this.el.shadowRoot.querySelectorAll('.option');
      if (this.listboxEls.length > 0) {
        if (this.listboxIndex === null) {
          this.listboxIndex = this.listboxEls.length - 1;
        }
        else if (this.listboxIndex === 0) {
          this.listboxEls[this.listboxIndex].classList.remove('visually-focused');
          this.listboxIndex = null;
        }
        else {
          this.listboxEls[this.listboxIndex].classList.remove('visually-focused');
          this.listboxIndex = Math.max(this.listboxIndex - 1, 0);
        }
        if (this.listboxIndex !== null) {
          this.listboxEls[this.listboxIndex].scrollIntoView({ behavior: 'smooth', block: "nearest" });
          this.listboxEls[this.listboxIndex].classList.add('visually-focused');
        }
      }
    }
  }
  expandDropdown() {
    if (!this.dropdownDisabled) {
      this.expanded = true;
      this.openSearchableSelectDropdown.emit();
      this.listboxIndex = null;
    }
  }
  closeDropdown() {
    this.expanded = false;
    this.closeSearchableSelectDropdown.emit({ id: this.identifier, items: this.menuList });
    this.selectEl.value = this.selectedItem ?
      (this.selectedItem.displayLabel ? this.selectedItem.displayLabel : this.selectedItem.label) : '';
  }
  getSearchQueryResults() {
    return this.menuList.filter(item => item.label.toLocaleLowerCase().includes(this.searchQuery.toLowerCase())).length;
  }
  /**
   * listener to keydown event
   */
  handleKeyDown(event) {
    switch (event.key) {
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_3__["b"]:
        this.handleEnter();
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_3__["E"]:
        this.handleEscape();
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_3__["e"]:
        event.preventDefault();
        this.handleArrowDown();
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_3__["d"]:
        event.preventDefault();
        this.handleArrowUp();
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_3__["T"]:
        this.closeDropdown();
        break;
    }
  }
  handleOptionClick(item) {
    if (!item.disabled) {
      if (this.selectedItem != item) {
        this.selectedItem = item;
        this.selectEl.placeholder = item.displayLabel ? item.displayLabel : item.label;
        this.selectEl.value = item.displayLabel ? item.displayLabel : item.label;
      }
      else if (!this.disableUnselect) {
        item.selected = false;
        this.selectedItem = null;
        this.selectEl.value = '';
        this.selectEl.placeholder = this.placeholderLabel;
      }
      this.closeDropdown();
      this.itemSelected.emit(item);
    }
  }
  handleClick(event) {
    if (!event.composedPath().includes(this.inputWrapperEl) && !event.composedPath().includes(this.listboxEl) && this.expanded) {
      this.closeDropdown();
    }
  }
  connectedCallback() {
    this.cel_icon = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon', 'cel-searchable-select', this.el);
  }
  componentDidLoad() {
    this.inputEl = this.el.shadowRoot.querySelectorAll('input');
    this.setTitleAttributeByOverflow(this.inputEl);
    this.selectedItem = this.menuList.find(item => item.selected);
    this.selectEl.value = this.selectedItem ?
      (this.selectedItem.displayLabel ? this.selectedItem.displayLabel : this.selectedItem.label) : '';
  }
  handleResize() {
    this.setTitleAttributeByOverflow(this.inputEl);
  }
  componentDidUpdate() {
    this.setTitleAttributeByOverflow(this.inputEl);
  }
  setTitleAttributeByOverflow(elements) {
    elements.forEach(function (element) {
      if (element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth) {
        element.setAttribute('title', element.placeholder);
      }
      else {
        element.removeAttribute('title');
      }
    });
  }
  getTextValidationMessage() {
    if (this.successMessage) {
      return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { "aria-live": "polite", class: `alert-message-wrapper` }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": "true", class: "success-icon", "data-name": 'checkmark-circle', "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_2__["a"].SMALL, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_2__["C"].CONFIRM }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: "success-message" }, this.successMessage)));
    }
    if (this.errorMessage) {
      return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { "aria-live": "polite", class: `alert-message-wrapper` }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": "true", class: "error-icon", "data-name": 'alert-circle', "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_2__["a"].SMALL, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_2__["C"].ERROR }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: "error-message" }, this.errorMessage)));
    }
    return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2', class: this.labelLeft ? 'label-left' : '' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: [
        'header-label',
        this.dropdownDisabled ? 'disabled' : ''
      ].join(' '), htmlFor: this.identifier }, this.headerLabel), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "combobox-wrapper" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-wrapper", ref: (element) => (this.inputWrapperEl = element) }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { id: this.identifier, ref: (element) => (this.selectEl = element), class: [
        this.expanded ? 'expanded' : '',
        this.enableError || this.errorMessage ? 'error' : '',
        this.enableSuccess || this.successMessage ? 'success' : '',
        this.dropdownDisabled ? 'disabled' : ''
      ].join(' '), type: "text", role: "combobox", "aria-label": this.comboboxAriaLabel, "aria-disabled": this.dropdownDisabled ? 'true' : 'false', readOnly: this.dropdownDisabled, "aria-controls": this.searchableSelectId, "aria-expanded": this.expanded ? 'true' : 'false', autocomplete: "off", "aria-activedescendant": this.listboxIndex !== null ? this.listboxEls[this.listboxIndex].id : null, placeholder: this.placeholderLabel, onClick: () => this.onSelectClick(), onInput: (event) => this.handleInput(event) }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "data-name": this.expanded ? 'caret-up' : 'caret-down', "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_2__["a"].REGULAR, "aria-hidden": "true", class: [
        'caret-icon',
        this.dropdownDisabled ? 'disabled' : ''
      ].join(' '), onClick: () => this.onSelectClick() })), this.getTextValidationMessage(), this.expanded ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { ref: (element) => (this.listboxEl = element), role: "listbox", "aria-label": this.listboxAriaLabel, id: this.searchableSelectId }, this.menuList.map((item) => {
        return (item.label.toLocaleLowerCase().includes(this.searchQuery.toLowerCase()) ?
          Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { class: [
              'option',
              item.disabled ? 'disabled-option' : ''
            ].join(' '), "aria-disabled": item.disabled ? 'true' : 'false', "aria-selected": this.selectedItem && this.selectedItem.identifier == item.identifier ? 'true' : 'false', role: "option", id: item.identifier, onClick: () => { this.handleOptionClick(item); } }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: "option-label" }, item.label), this.selectedItem && this.selectedItem.identifier == item.identifier ?
            Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "data-name": "checkmark", "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_2__["a"].REGULAR, "data-color": item.disabled ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_2__["C"].DISABLED : _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_2__["C"].GRAYDARKER }) : '') : null);
      })) : null, this.getSearchQueryResults() > 0 || !this.expanded ?
      null :
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: "zero-results-message" }, this.zeroResultsMessage)), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'cel-visually-hidden', "aria-live": 'polite' }, this.getSearchQueryResults(), " ", this.resultsMessage)));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
let searchableSelectDropdownIds = 0;
CelSearchableSelect.style = celSearchableSelectCss;




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




/***/ }),

/***/ "ldx1":
/*!********************************************************************************************!*\
  !*** /Users/mattyZ/Desktop/Projects/forked-cel-library/dist-stencil/esm/utils-194224bf.js ***!
  \********************************************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setFocusableElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleTabTrapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dragElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return focusFirstFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getRGBColorFromImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return handleKeyDownEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setTitleAttributeByOverflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transformTagName; });
/* harmony import */ var _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants-a06dfd18.js */ "+Be3");


function setTitleAttributeByOverflow(elements) {
  elements.forEach(function (element) {
    if (element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth) {
      element.setAttribute('title', element.textContent);
    }
    else {
      element.removeAttribute('title');
    }
  });
}
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter((c) => c != null)
      .map((c) => c.trim())
      .filter((c) => c != '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach((c) => (map[c] = true));
  return map;
};
const createColorClasses = (color) => {
  return color ? {
    'cel-color': true,
    [`cel-color-${color}`]: true,
  }
    : null;
};
const dragElement = (el) => {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  // otherwise, move the DIV from anywhere inside the DIV:
  el.onmousedown = dragMouseDown;
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    el.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    el.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    el.style.top = (el.offsetTop - pos2) + 'px';
    el.style.left = (el.offsetLeft - pos1) + 'px';
  }
  function closeDragElement() {
    // stop moving when mouse button is released:
    el.onmouseup = null;
    el.onmousemove = null;
  }
};
const transformTagName = (tagToBeTransformed, knownUntransformedTag, knownUntransformedTagElementReference) => {
  const actualCurrentTag = knownUntransformedTagElementReference.tagName.toLowerCase(); // 'PREFIX-cel-navbar-SUFFIX'
  const [prefix, suffix] = actualCurrentTag.split(knownUntransformedTag); // ['PREFIX-', '-SUFFIX']
  return prefix + tagToBeTransformed + suffix; // 'PREFIX-cel_icon_button-SUFFIX'
};
const handleKeyDownEvent = (event, keyBoardActionsObject) => {
  switch (event.key) {
    case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_0__["e"]:
    case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_0__["d"]:
      if (keyBoardActionsObject.arrowUpDown !== undefined) {
        keyBoardActionsObject.arrowUpDown(event);
      }
      break;
    case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_0__["c"]:
    case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_0__["A"]:
      if (keyBoardActionsObject.arrowLeftRight !== undefined) {
        keyBoardActionsObject.arrowLeftRight(event);
      }
      break;
    case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_0__["b"]:
    case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_0__["a"]:
    case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_0__["S"]:
      if (keyBoardActionsObject.spaceEnter !== undefined) {
        keyBoardActionsObject.spaceEnter();
      }
      break;
    case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_0__["E"]:
      if (keyBoardActionsObject.escape !== undefined) {
        keyBoardActionsObject.escape();
      }
    case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_0__["T"]:
      if (keyBoardActionsObject.tab !== undefined) {
        keyBoardActionsObject.tab();
      }
      break;
  }
};
const getRGBColorFromImage = (imgEl) => {
  const defaultRGB = { r: 255, g: 255, b: 255 }; // for non-supporting envs
  const canvas = document.createElement('canvas');
  const context = canvas.getContext && canvas.getContext('2d');
  let data;
  let width;
  let height;
  let rgb = { r: 0, g: 0, b: 0 };
  if (!context) {
    return defaultRGB;
  }
  height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
  width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
  context.drawImage(imgEl, 0, 0);
  try {
    data = context.getImageData(0, 0, width, height);
  }
  catch (e) {
    /* security error, img on diff domain */
    return defaultRGB;
  }
  rgb.r = data.data[0];
  rgb.g = data.data[1];
  rgb.b = data.data[2];
  return rgb;
};
/*
    * Generic Focus Functionality
*/
function handleTabTrapping(event, element, focusableElementsArray, keyBoardActionsObject) {
  var _a, _b, _c, _d;
  switch (event.key) {
    case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_0__["E"]:
      if (keyBoardActionsObject.escape !== undefined) {
        keyBoardActionsObject.escape(event);
      }
      break;
    case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_0__["T"]:
      const activeElement = ((_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.activeElement) ||
        ((_c = (_b = document.activeElement.shadowRoot) === null || _b === void 0 ? void 0 : _b.activeElement.shadowRoot) === null || _c === void 0 ? void 0 : _c.activeElement) ||
        ((_d = document.activeElement.shadowRoot) === null || _d === void 0 ? void 0 : _d.activeElement) ||
        document.activeElement;
      if (!event.shiftKey && activeElement === focusableElementsArray[focusableElementsArray.length - 1]) {
        event.preventDefault();
        focusFirstFocusable(focusableElementsArray[0]);
        if (keyBoardActionsObject.tab !== undefined) {
          keyBoardActionsObject.tab(event);
        }
      }
      else if (event.shiftKey && activeElement === focusableElementsArray[0]) {
        event.preventDefault();
        focusLastFocusable(focusableElementsArray[focusableElementsArray.length - 1]);
        if (keyBoardActionsObject.shiftTab !== undefined) {
          keyBoardActionsObject.shiftTab(event);
        }
      }
      break;
  }
}
function focusFirstFocusable(firstFocusableElement) {
  if (firstFocusableElement.shadowRoot) {
    firstFocusableElement.shadowRoot.querySelector('button').focus();
  }
  else {
    firstFocusableElement.focus();
  }
}
function focusLastFocusable(lastFocusableElement) {
  if (lastFocusableElement.shadowRoot) {
    lastFocusableElement.shadowRoot.querySelector('button').focus();
  }
  else {
    lastFocusableElement.focus();
  }
}
function setFocusableElements(hostElement) {
  let hasShadowRoot = !!hostElement.shadowRoot;
  if (!hasShadowRoot) {
    let focusableElementsArray = hostElement.querySelectorAll('.interactive');
    return focusableElementsArray;
  }
  else {
    let focusableElementsArray = hostElement.shadowRoot.querySelectorAll('.interactive');
    return focusableElementsArray;
  }
}




/***/ })

}]);
//# sourceMappingURL=15.js.map