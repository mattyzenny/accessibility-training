(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "8mWF":
/*!********************************************************************************************************!*\
  !*** /Users/mattyZ/Desktop/Projects/forked-cel-library/dist-stencil/esm/cel-rich-text-footer.entry.js ***!
  \********************************************************************************************************/
/*! exports provided: cel_rich_text_footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_rich_text_footer", function() { return CelRichTextFooter; });
/* harmony import */ var _index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-9a8c46b4.js */ "RO4M");
/* harmony import */ var _utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-194224bf.js */ "ldx1");
/* harmony import */ var _cel_rich_text_interface_83978736_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cel-rich-text.interface-83978736.js */ "7xcI");
/* harmony import */ var _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cel-icon-constants-33baae7b.js */ "UVxy");
/* harmony import */ var _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-a06dfd18.js */ "+Be3");






const celRichTextFooterCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}.sc-quill-cel-rich-text-footer-right{margin-left:auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.sc-quill-cel-rich-text-footer-right .saved-status-text{font-family:OpenSans;font-size:var(--cel-rte-saved-status-font-size, 0.75rem);line-height:16px;color:#333}.sc-quill-cel-rich-text-footer-right .sc-quill-cel-rich-text-status-container{padding:0 16px}.sc-quill-cel-rich-text-footer-right .sc-quill-cel-rich-text-persist-button{--button-height:var(--rich-text-footer-button-height, 26px);--button-min-width:var(--rich-text-footer-button-min-width, 67px);--button-text-size:var(--rich-text-footer-button-text-size, 0.875rem);--button-padding:var(--rich-text-footer-button-padding, 0)}.sc-quill-cel-rich-text-error-msg-container{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none}.sc-quill-cel-rich-text-error-msg-container .sc-quill-cel-rich-text-error-msg-text{font-family:OpenSans-Bold;font-size:var(--cel-rte-error-msg-font-size, 0.75rem);margin-left:4px;color:#cc333f;line-height:16px}.sc-quill-cel-rich-text-bottom-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:8px 0}.sc-quill-cel-rich-text-bottom-container.count-hidden{float:right}.sc-quill-cel-rich-text-char-count{font-family:OpenSans;font-weight:400;font-size:var(--cel-rte-char-count-font-size, 0.75rem);line-height:16px;color:#333}.sc-quill-cel-rich-text-char-count.error{color:#cc333f}";

const CelRichTextFooter = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.textChanges = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "saveTextChanges", 7);
    this.componentLoaded = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celRichTextFooterLoaded", 7);
    this.rteErrorMessage = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "rteErrorMessage", 7);
    this.saveState = undefined;
    this.isMathEditorActive = false;
    this.isTextPersistApplicable = true;
    this.isTextChanged = false;
    this.rteCurrentStates = { message: '', status: _cel_rich_text_interface_83978736_js__WEBPACK_IMPORTED_MODULE_2__["S"].reset };
    this.currentCharCount = undefined;
    this.celRteEditorStore = undefined;
    this.celIconBaseUrl = '';
    this.rteContents = '';
    this.debounceInterval = 0;
    this.maxCharLength = 0;
    this.showFooterButton = false;
    this.footerButtonDisabled = true;
    this.rteButtonLabel = 'Done';
    this.rteMode = 'editor';
  }
  handleFooterButtonDisabledChange() {
    if (this.rteMode === 'editor' && this.saveState !== _cel_rich_text_interface_83978736_js__WEBPACK_IMPORTED_MODULE_2__["s"].savingText && this.isTextPersistApplicable) {
      this.isTextChanged = !this.footerButtonDisabled;
    }
  }
  handleCelButtonOnClick(eventObj) {
    const { detail: { id: buttonType } } = eventObj;
    if (buttonType === 'editor-text-persist-button' && this.isTextPersistApplicable && this.isTextChanged) {
      clearTimeout(this.autoSaveTimer);
      this.handleMaxCharErrorMessage();
      this.saveTextChange('buttonClick', this.currentRteText);
    }
  }
  connectedCallback() {
    this.cel_icon = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon', 'cel-rich-text-footer', this.el);
    this.cel_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-button', 'cel-rich-text-footer', this.el);
  }
  // Called only once after render();
  componentDidLoad() {
    this.celRteEditorStore.onChange('textChange', ({ currentCharCount, currentRteText, source }) => {
      this.currentRteText = currentRteText;
      this.onCountChange(currentCharCount);
      this.onTextChange(source);
    });
    this.celRteEditorStore.onChange('rteStatus', (rteStatus) => {
      this.handleStateChange(rteStatus);
    });
    this.celRteEditorStore.onChange('handleFooter', (initialValues) => {
      const { charCount, rteText } = initialValues;
      this.currentCharCount = charCount;
      this.currentRteText = rteText;
    });
    this.celRteEditorStore.onChange('activeMathEditorStatus', (editorStatus) => {
      this.isMathEditorActive = editorStatus;
    });
    this.isTextChanged = !this.footerButtonDisabled;
    this.componentLoaded.emit(true);
  }
  onCountChange(currentCharCount) {
    this.currentCharCount = currentCharCount;
    this.isTextPersistApplicable = !((this.maxCharLength > 0) && (this.currentCharCount > this.maxCharLength));
    this.handleMaxCharErrorMessage();
  }
  onTextChange(source) {
    const { state: { activeMathEditorStatus } } = this.celRteEditorStore;
    this.isTextChanged = (this.rteContents !== this.currentRteText);
    if (this.isTextPersistApplicable && (this.debounceInterval > 0) && !activeMathEditorStatus && source === 'user') {
      clearTimeout(this.autoSaveTimer);
      this.autoSaveTimer = setTimeout(() => {
        this.saveTextChange('debounce', this.currentRteText);
      }, this.debounceInterval);
    }
    else {
      clearTimeout(this.autoSaveTimer);
    }
  }
  saveTextChange(action, content) {
    this.saveAction = action;
    this.isTextChanged = false;
    this.saveState = _cel_rich_text_interface_83978736_js__WEBPACK_IMPORTED_MODULE_2__["s"].savingText;
    this.rteContents = (this.currentCharCount !== 0) ? content : '';
    this.textChanges.emit({ action, content: this.rteContents });
  }
  handleStateChange(rteStatus) {
    try {
      if (typeof rteStatus === 'object')
        this.rteCurrentStates = rteStatus;
      if (typeof rteStatus === 'string')
        this.rteCurrentStates = JSON.parse(rteStatus);
      const { status = null } = this.rteCurrentStates;
      const { error, saving, success, reset } = _cel_rich_text_interface_83978736_js__WEBPACK_IMPORTED_MODULE_2__["S"];
      switch (status) {
        case error: {
          this.isTextChanged = true;
          this.saveState = '';
          this.rteErrorMessage.emit(this.rteCurrentStates);
          break;
        }
        case saving:
          this.saveState = _cel_rich_text_interface_83978736_js__WEBPACK_IMPORTED_MODULE_2__["s"].savingText;
          break;
        case success: {
          this.saveState = _cel_rich_text_interface_83978736_js__WEBPACK_IMPORTED_MODULE_2__["s"].savedText;
          setTimeout(() => {
            this.saveState = '';
          }, 2000); // After 2 sec the status message will get hidden
          this.handleFooterButtonState();
          break;
        }
        case reset: {
          this.saveState = '';
          this.handleFooterButtonState();
          this.rteErrorMessage.emit(this.rteCurrentStates);
        }
        // DO NOTHING
      }
      this.celRteEditorStore.state.status = status;
    }
    catch (statusError) {
      console.error('RTE status handling exception', statusError);
    }
  }
  handleFooterButtonState() {
    if (((this.currentCharCount === 0) && this.footerButtonDisabled)) {
      this.isTextChanged = !this.footerButtonDisabled;
    }
    else if (this.currentCharCount > 0) {
      this.isTextChanged = true;
    }
    else {
      this.isTextChanged = (this.saveAction === 'debounce');
    }
  }
  handleMaxCharErrorMessage() {
    if ((this.maxCharLength > 0) && !this.isTextPersistApplicable) {
      this.rteCurrentStates = {
        message: `Response must not exceed ${this.maxCharLength} character limit.`,
        status: _cel_rich_text_interface_83978736_js__WEBPACK_IMPORTED_MODULE_2__["S"].error
      };
    }
    else {
      this.rteCurrentStates = {
        message: '',
        status: _cel_rich_text_interface_83978736_js__WEBPACK_IMPORTED_MODULE_2__["S"].reset
      };
    }
    this.handleStateChange(this.rteCurrentStates);
  }
  render() {
    var _a, _b;
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ["sc-quill-cel-rich-text-bottom-container", ((((_a = this.rteCurrentStates) === null || _a === void 0 ? void 0 : _a.status) !== _cel_rich_text_interface_83978736_js__WEBPACK_IMPORTED_MODULE_2__["S"].error) && this.maxCharLength <= 0) ? "count-hidden" : ""].join(' ') }, this.maxCharLength > 0 ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: ['sc-quill-cel-rich-text-char-count', ((this.maxCharLength > 0) && !this.isTextPersistApplicable) ? 'error' : ''].join(' ') }, this.currentCharCount, "/", this.maxCharLength) : null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "sc-quill-cel-rich-text-footer-right" }, (this.saveState && this.rteCurrentStates.status != _cel_rich_text_interface_83978736_js__WEBPACK_IMPORTED_MODULE_2__["S"].error) ? Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "sc-quill-cel-rich-text-status-container", role: "alert" }, this.saveState === _cel_rich_text_interface_83978736_js__WEBPACK_IMPORTED_MODULE_2__["s"].savedText ? Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "cel-visually-hidden" }, this.maxCharLength - this.currentCharCount, " Characters remaining") : null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "saved-status-text" }, this.saveState, this.saveState === _cel_rich_text_interface_83978736_js__WEBPACK_IMPORTED_MODULE_2__["s"].savingText ? Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { "aria-hidden": "true" }, "...") : null))
      : null, this.showFooterButton ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_button, { class: "sc-quill-cel-rich-text-persist-button", "data-button-aria-label": this.rteButtonLabel, "data-label": this.rteButtonLabel, "data-size": "small", "data-disabled": !(this.isTextPersistApplicable && this.isTextChanged && !this.isMathEditorActive), "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].PRIMARY, "data-send-target-info-on-button-click": "true", "data-identifier": "editor-text-persist-button" }) : null)), this.rteCurrentStates.status === _cel_rich_text_interface_83978736_js__WEBPACK_IMPORTED_MODULE_2__["S"].error ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "sc-quill-cel-rich-text-error-msg-container" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": "true", "data-src": this.celIconBaseUrl ? `${this.celIconBaseUrl}alert-circle.svg` : '', "data-name": "alert-circle", "data-color": "error", "data-size": "regular" })), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { role: "alert", class: "sc-quill-cel-rich-text-error-msg-text" }, (_b = this.rteCurrentStates) === null || _b === void 0 ? void 0 : _b.message)) : null));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "footerButtonDisabled": ["handleFooterButtonDisabledChange"]
  }; }
};
CelRichTextFooter.style = celRichTextFooterCss;




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
//# sourceMappingURL=30.js.map