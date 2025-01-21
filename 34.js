(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "XCGc":
/*!****************************************************************************************************!*\
  !*** /Users/mattyZ/Desktop/Projects/forked-cel-library/dist-stencil/esm/cel-accordion_29.entry.js ***!
  \****************************************************************************************************/
/*! exports provided: cel_accordion, cel_breadcrumbs, cel_checkbox_group, cel_checkbox_item, cel_chip, cel_date_range, cel_footer, cel_icon_button, cel_icon_panel, cel_menu, cel_modal, cel_modal_window, cel_multi_picture_box, cel_multi_select, cel_navbar, cel_number_input, cel_paginate, cel_popover, cel_popup_menu, cel_progress, cel_radio_button_group, cel_search_field, cel_side_navigation, cel_single_select, cel_text_field, cel_text_link, cel_textarea_field, cel_toast_notification, cel_toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_accordion", function() { return CelAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_breadcrumbs", function() { return CelBreadcrumbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_checkbox_group", function() { return CelCheckboxGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_checkbox_item", function() { return CelCheckboxItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_chip", function() { return CelChip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_date_range", function() { return CelDateRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_footer", function() { return CelFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_icon_button", function() { return CelIconButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_icon_panel", function() { return CelIconPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_menu", function() { return CelMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_modal", function() { return CelModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_modal_window", function() { return CelModalWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_multi_picture_box", function() { return CelMultiPictureBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_multi_select", function() { return CelMultiSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_navbar", function() { return CelNavbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_number_input", function() { return CelNumberInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_paginate", function() { return CelPaginate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_popover", function() { return CelPopover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_popup_menu", function() { return CelPopupMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_progress", function() { return CelProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_radio_button_group", function() { return CelRadioButtonGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_search_field", function() { return CelSearchField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_side_navigation", function() { return CelSideNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_single_select", function() { return CelSingleSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_text_field", function() { return CelTextField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_text_link", function() { return CelTextLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_textarea_field", function() { return CelTextareaField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_toast_notification", function() { return CelToastNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_toggle", function() { return CelToggle; });
/* harmony import */ var _index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-9a8c46b4.js */ "RO4M");
/* harmony import */ var _utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-194224bf.js */ "ldx1");
/* harmony import */ var _cel_icon_label_constants_c23c6c5f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cel-icon-label-constants-c23c6c5f.js */ "y5zg");
/* harmony import */ var _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cel-icon-constants-33baae7b.js */ "UVxy");
/* harmony import */ var _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-a06dfd18.js */ "+Be3");
/* harmony import */ var _truncate_16cfb2aa_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./truncate-16cfb2aa.js */ "TFF/");
/* harmony import */ var _customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customParseFormat-43dca114.js */ "4Pza");
/* harmony import */ var _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cel-button-constants-2362f78a.js */ "5kGd");
/* harmony import */ var _cel_navbar_constants_bce10811_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cel-navbar-constants-bce10811.js */ "oVVw");
/* harmony import */ var _commonjsHelpers_ba3f0406_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_commonjsHelpers-ba3f0406.js */ "tzaC");











const celAccordionCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:-ms-flexbox;display:flex}.row-between{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.cel-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--accordion-container-width, 100%);min-width:var(--accordion-container-min-width, none);max-width:var(--accordion-container-max-width, none)}.cel-container--mobile{width:100%}.accordion-header{width:100%}.header-label{color:var(--accordion-header-color, #333);font-family:var(--accordion-header-font-family, \"Poppins-Medium\");font-size:var(--accordion-header-font-size, 1.375rem)}.icon-label{--iconLabel-fontSize:$text-size-x-small}.accordion-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border-radius:4px;overflow:hidden;margin-top:var(--accordion-container-margin-top, 12px)}.accordion-container--mobile{width:100%}.slot{width:var(--accordion-slot-container, 100%);height:var(--accordion-slot-container, 100%);padding:var(--accordion-slot-padding, 20px);display:-ms-flexbox;display:flex;-ms-flex-pack:var(--accordion-slot-justify-content, center);justify-content:var(--accordion-slot-justify-content, center)}";

const CelAccordion = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.accordionChange = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celAccordionChange", 7);
    this.accordionHeaderIconClicked = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celAccordionHeaderIconClicked", 7);
    this.accordionExpandCollapseClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celAccordionExpandCollapseClick", 7);
    this.focused = false;
    this.showExpandAll = true;
    this.mobile = false;
    this.caretRight = false;
    this.itemList = [];
    this.headerLabel = 'Header Label';
    this.secondaryHeader = undefined;
    this.toggleExpandCollapse = undefined;
  }
  connectedCallback() {
    this.cel_icon_label = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon-label', 'cel-accordion', this.celAccordion);
    this.cel_accordion_item = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-accordion-item', 'cel-accordion', this.celAccordion);
  }
  handleCelAccordionItemPress(event) {
    const updatedList = this.itemList.map((item) => {
      if (event.detail.identifier === item.identifier) {
        return { ...item, pressed: event.detail.pressed };
      }
      else {
        return item;
      }
    });
    const pressed = this.scanList(updatedList);
    if (pressed == updatedList.length) {
      this.showExpandAll = false;
    }
    else {
      this.showExpandAll = true;
    }
    this.itemList = updatedList;
    this.accordionChange.emit(this.itemList);
  }
  componentDidRender() {
    if (this.mobile) {
      this.celAccordion.style.width = '100%';
    }
    else {
      this.celAccordion.style.width = 'auto';
    }
  }
  expandAll(event) {
    //detail == aria-expanded state
    if (!event.detail) {
      this.showExpandAll = false;
      const updatedList = this.itemList.map((item) => ({ ...item, pressed: true }));
      this.itemList = updatedList;
      this.toggleExpandCollapse = undefined;
    }
    else {
      this.collapseAll();
    }
    this.accordionExpandCollapseClick.emit(this.showExpandAll);
  }
  collapseAll() {
    this.showExpandAll = true;
    const updatedList = this.itemList.map((item) => ({ ...item, pressed: false }));
    this.itemList = updatedList;
    this.toggleExpandCollapse = undefined;
  }
  scanList(itemList) {
    let count = 0;
    for (let i = 0; i < itemList.length; i++) {
      if (itemList[i].pressed) {
        count += 1;
      }
    }
    return count;
  }
  handleCelAccordionHeaderIconClick(event) {
    const { detail } = event;
    this.accordionHeaderIconClicked.emit(detail);
  }
  toggleExpandCollapseHandler() {
    if (this.toggleExpandCollapse === undefined) {
      return;
    }
    else if (this.toggleExpandCollapse) {
      this.expandAll({ detail: false });
    }
    else {
      this.collapseAll();
    }
  }
  handleCelPopOverCloseEvent(event) {
    if (event.detail && event.detail.returnFocusIdentifier && event.detail.isKeyboardEvent) {
      const { returnFocusIdentifier } = event.detail;
      const accordionItemIconBtn = this.celAccordion.shadowRoot.querySelector(`.accordion-item[data-identifier="${returnFocusIdentifier}"]`)
        .shadowRoot.querySelector('.secondary-header-icon-button');
      const accordionItemNativeBtn = accordionItemIconBtn.shadowRoot.querySelector('button');
      accordionItemNativeBtn === null || accordionItemNativeBtn === void 0 ? void 0 : accordionItemNativeBtn.focus();
    }
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['cel-container', this.mobile ? 'cel-container--mobile' : ''].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("header", { class: "accordion-header row-between" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "header-label" }, this.headerLabel), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_label, { "data-icon-label-aria-expanded": !this.showExpandAll ? 'true' : 'false', "aria-controls": this.itemList.map((item) => `cai-${item.identifier}`).join(' '), class: ['icon-label', !this.showExpandAll ? 'collapse-all-button' : 'expand-all-button'].join(' '), "data-icon-type": _cel_icon_label_constants_c23c6c5f_js__WEBPACK_IMPORTED_MODULE_2__["C"].RIGHT, "data-name": this.showExpandAll ? 'caret-down' : 'caret-up', "data-label": this.showExpandAll ? 'Expand all' : 'Collapse all', "data-icon-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].SMALL })), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['accordion-container', this.mobile ? 'accordion-container--mobile' : ''].join(' ') }, this.itemList.map((item, i, list) => (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_accordion_item, { id: `cai-${item.identifier}`, "data-index": i, class: "accordion-item", "data-identifier": item.identifier, "data-caret-right": this.caretRight, "data-header-label": item.headerLabel, "data-content-text": !item.html ? item.contentText : null, "data-pressed": item.pressed, "data-last-item": list.length - 1 == i ? 'true' : 'false', "data-secondary-header": this.secondaryHeader, "data-secondary-header-text-label": item.secondaryHeaderTextLabel, "data-secondary-header-text-label-fill-color": item.textLabelFillColor, "data-secondary-header-text-label-custom-fill-color": item.textLabelCustomFillColor, "data-secondary-header-text-label-custom-font-color": item.textLabelCustomFontColor, "data-secondary-header-icon-label": item.secondaryHeaderIconLabel, "data-secondary-header-icon-name": item.secondaryHeaderIconName, "data-secondary-header-icon-color": item.secondaryHeaderIconColor, "data-secondary-header-icon-size": item.secondaryHeaderIconSize, "data-secondary-header-icon-aria-label": item.secondaryHeaderIconAriaLabel, "data-secondary-header-icon-disabled": item.secondaryHeaderIconDisabled, "data-mobile": this.mobile }, item.html ? Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "slot", innerHTML: item.html }) : null)))))));
  }
  get celAccordion() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "toggleExpandCollapse": ["toggleExpandCollapseHandler"]
  }; }
};
CelAccordion.style = celAccordionCss;

const celBreadcrumbsCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:inline-block}.row-start{display:-ms-flexbox;display:flex;-ms-flex-align:var(--breadcrumbs-container-row-start, center);align-items:var(--breadcrumbs-container-row-start, center)}.row-between{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}ul{padding:0;display:inline-block}li{display:inline-block;position:relative}.breadcrumbs-container{max-width:var(--breadcrumbs-container-max-width, none);list-style-type:none;-ms-flex-wrap:var(--breadcrumbs-container-wrap, wrap);flex-wrap:var(--breadcrumbs-container-wrap, wrap);margin:var(--breadcrumbs-container-margin, none)}.icon-link{margin-left:9px;margin-right:9px;margin-top:var(--breadcrumbs-icon-link-margin-top, none);margin-bottom:var(--breadcrumbs-icon-link-margin-bottom, none)}.collapsed-container{position:relative;display:var(--breadcrumbs-collapsed-container-display, inherit)}.collapsed-menu{position:absolute;top:var(--collapsed-menu-top, 39px);border-radius:var(--collapsed-menu-border-radius, 4px);padding:var(--collapsed-menu-padding, 16px);background-color:var(--collapsed-menu-bg-color, #fff);-webkit-box-shadow:var(--collapsed-menu-box-shadow, 0 1px 2px 0 rgba(0, 0, 0, 0.5));box-shadow:var(--collapsed-menu-box-shadow, 0 1px 2px 0 rgba(0, 0, 0, 0.5));max-width:var(--collapsed-menu-max-width, 300px);min-width:var(--collapsed-menu-min-width, none);width:var(--collapsed-menu-width, 300px);display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;z-index:1}.menu-icon{min-width:14px;margin-left:var(--colapsed-menu-icon-margin-left, 9px)}.menu-item{margin-bottom:var(--collapsed-menu-item-margin-bottom, 9px)}.bread-link{margin:var(--bread-link-margin, none);--text-link-disabled-color:#333}";

const CelBreadcrumbs = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.breadcrumbComponentLoaded = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celBreadcrumbComponentLoaded", 7);
    this.ellipsisClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ellipsisClick", 7);
    this.breadcrumbId = `cel-breadcrumbs-id-${breadcrumbsIds++}`;
    this.arrowEvent = (event) => {
      const activeElement = this.el.shadowRoot.activeElement;
      if (Array.from(this.liNodeList).includes(activeElement)) {
        if (event.key === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["e"] && this.focusIndex <= this.liNodeList.length) {
          if (this.breadcrumbItems.length === this.liNodeList.length) {
            this.focusIndex =
              this.focusIndex === this.liNodeList.length - 2 //-2 because last breadcrumb is not an active link that receives focus
                ? this.liNodeList.length - 2
                : this.focusIndex + 1;
          }
          else if (this.breadcrumbItems.length !== this.liNodeList.length) {
            this.focusIndex =
              this.focusIndex === this.liNodeList.length - 1
                ? this.liNodeList.length - 1
                : this.focusIndex + 1;
          }
        }
        else if (event.key === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["d"] && this.focusIndex > 0) {
          this.focusIndex--;
        }
        let focusedItem = this.liNodeList[this.focusIndex];
        focusedItem.shadowRoot.querySelector('a').focus();
      }
    };
    this.escEvent = () => {
      this.openCollapsed = false;
      this.openMenuBtn.shadowRoot.querySelector('button').focus();
      this.focusIndex = -1;
      this.ellipsisClick.emit(this.openCollapsed);
    };
    this.openCollapsed = false;
    this.focusIndex = -1;
    this.liNodeList = undefined;
    this.truncateTo = undefined;
    this.breadcrumbItems = [];
    this.ellipsisColor = undefined;
    this.iconSize = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].SMALL;
    this.breadcrumbsAriaLabel = 'Breadcrumbs';
  }
  connectedCallback() {
    this.cel_icon = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon', 'cel-breadcrumbs', this.el);
    this.cel_icon_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon-button', 'cel-breadcrumbs', this.el);
    this.cel_text_link = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-text-link', 'cel-breadcrumbs', this.el);
  }
  /**
   * listener to close collapsed menu on outside click
   */
  handleClick() {
    if (this.openCollapsed && this.collapseMenuEl) {
      this.openCollapsed = false;
      this.ellipsisClick.emit(this.openCollapsed);
    }
  }
  componentDidLoad() {
    this.breadcrumbComponentLoaded.emit();
  }
  onEllipsisClick() {
    this.openCollapsed = !this.openCollapsed;
    this.ellipsisClick.emit(this.openCollapsed);
  }
  componentDidUpdate() {
    this.openCollapsed && this.focusIndex < 0 ? this.makeFirstMenuItemFocused() : null;
  }
  makeFirstMenuItemFocused() {
    var _a;
    if (this.openCollapsed && this.collapseMenuEl) {
      this.liNodeList = this.collapseMenuEl.querySelectorAll('.collapse-menu-item');
      if ((_a = this.liNodeList) === null || _a === void 0 ? void 0 : _a.length) {
        this.focusIndex = 0;
        const firstFocusableElement = this.liNodeList[this.focusIndex];
        firstFocusableElement.shadowRoot.querySelector('a').focus();
      }
    }
  }
  resetFocusIndex() {
    if (!this.openCollapsed) {
      this.focusIndex = -1;
    }
  }
  keydownListener(event) {
    if (this.openCollapsed) {
      Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["h"])(event, (this.breadcrumbKeyboardActionObject = {
        arrowUpDown: (event) => this.arrowEvent(event),
        escape: this.escEvent,
      }));
    }
  }
  setAriaCurrent(breadcrumbItems, item) {
    return breadcrumbItems[(breadcrumbItems === null || breadcrumbItems === void 0 ? void 0 : breadcrumbItems.length) - 1] === item ? 'page' : null;
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("nav", { "aria-label": this.breadcrumbsAriaLabel }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { class: "breadcrumbs-container row-start" }, !!this.truncateTo && (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { class: this.truncateTo
        ? 'collapsed-container row-start'
        : 'row-start' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { onClick: () => this.onEllipsisClick(), class: "open-menu", "data-icon-button-aria-label": "show all links", "data-name": 'more-horizontal', "data-color": this.ellipsisColor
        ? this.ellipsisColor
        : _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].BLACK, "data-icon-button-aria-haspopup": true, "data-icon-button-aria-controls": this.breadcrumbId, ref: (el) => (this.openMenuBtn =
        el), "data-icon-button-aria-expanded": this.openCollapsed ? 'true' : 'false' }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { role: "presentation", "aria-hidden": "true", class: "icon-link", "data-name": 'breadcrumb', "data-size": this.iconSize, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].BLACK }), ((this.truncateTo > 0) && this.openCollapsed) ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { ref: (el) => (this.collapseMenuEl = el), class: "collapsed-menu", role: "menu", id: this.truncateTo && `${this.breadcrumbId}` }, this.breadcrumbItems
      .slice(0, this.truncateTo)
      .map((item, i, items) => (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { role: "menuitem", class: [
        i < items.length - 1
          ? 'menu-item'
          : 'menu-item-last',
        'row-between',
      ].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_text_link, { class: "collapse-menu-item", "data-label": item.label, "data-link-href": item.href, "data-disabled": item.disabled, "data-identifier": item.identifier, "data-visited": item.visited }), item.disabled ? null : (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { class: "menu-icon", "data-name": 'breadcrumb', "data-size": this.iconSize, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].BLACK }))))))) : null)), this.breadcrumbItems
      .slice(this.truncateTo ? this.truncateTo : 0)
      .map((item, i, items) => {
      return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { class: "row-start" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_text_link, { class: "bread-link", "data-label": item.label, "data-link-href": item.href, "data-disabled": item.disabled, "data-truncate": item.truncate, "data-identifier": item.identifier, "data-visited": item.visited, "data-text-link-aria-current": this.setAriaCurrent(this.breadcrumbItems, item) }), i != items.length - 1 ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { role: "presentation", "aria-hidden": "true", class: "icon-link", "data-name": 'breadcrumb', "data-size": this.iconSize, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].BLACK })) : null));
    })))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "openCollapsed": ["resetFocusIndex"]
  }; }
};
let breadcrumbsIds = 0;
CelBreadcrumbs.style = celBreadcrumbsCss;

const celCheckboxGroupCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:inline-block}.group-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border:0;padding:0;margin:0}.checkbox-list{list-style:none;margin:var(--checkbox-group-margin, 0);padding:var(--checkbox-group-padding, 0 0 0 40px)}.group-label{font-size:var(--checkboxGroupLabel-fontSize, 0.875rem);font-family:var(--checkboxGroupLabel-fontFamily, \"OpenSans-Semibold\");color:var(--checkboxGroupLabel-color, #333);padding:0}.checkbox-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin-top:var(--checkboxGroupContainer-margin-top, 12px)}.checkbox-item{margin-bottom:var(--checkboxItem-margin-bottom, 12px)}";

const CelCheckboxGroup = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.label = undefined;
    this.itemList = [];
  }
  connectedCallback() {
    this.cel_checkbox_item = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-checkbox-item', 'cel-checkbox-group', this.el);
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("fieldset", { class: "group-container" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("legend", { class: "group-label" }, this.label), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "checkbox-container" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { class: "checkbox-list" }, this.itemList.map((item) => (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_checkbox_item, { class: "checkbox-item", "data-identifier": item.identifier, "data-label": item.label, "data-disabled": item.disabled, "data-checked": item.checked, "data-checkbox-item-aria-label": item.ariaLabel, "data-truncate-length": item.truncateLength, "data-subtext": item.subtext })))))))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
CelCheckboxGroup.style = celCheckboxGroupCss;

const celCheckboxItemCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:var(--checkbox-align-items, flex-start);align-items:var(--checkbox-align-items, flex-start);font-family:var(--checkbox-label-font-family, \"OpenSans-Semibold\");font-size:var(--checkbox-label-font-size, 0.875rem);color:var(--checkbox-label-font-color, #333)}*,*:before,*:after{-webkit-box-sizing:border-box;box-sizing:border-box}.form-control{max-width:var(--checkbox-label-maxWidth, 200px);width:var(--checkbox-label-width, 100%);line-height:var(--checkbox-line-height, 24px);color:var(--checkbox-item-color, var(--grayDark));cursor:var(--checkbox-label-pointer, pointer);position:relative;padding-left:var(--checkbox-item-padding-left, 8px)}.form-control+.form-control{margin-top:1em}.checkbox-label{padding-left:var(--checkbox-item-label-padding-left, 0)}.disabled{cursor:not-allowed;pointer-events:none;color:var(--checkbox-label-disabled-color, #939393)}input[type=checkbox]:hover{border:1px solid var(--checkbox-focus-border-color, #555);background-color:var(--checkbox-hover-background-color, #f3f3f3)}input[type=checkbox]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--checkbox-default-bg-color, #fff);margin:var(--checkbox-item-margin, 0);color:currentColor;width:var(--checkbox-default-width, 24px);height:var(--checkbox-default-height, 24px);border:1px solid var(--checkbox-border-color, #555);border-radius:2px;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;place-content:center;-ms-flex-negative:0;flex-shrink:0}input[type=checkbox]::before{content:\"\";width:14px;height:14px;-webkit-mask:url(\"./assets/checkmark.svg\") no-repeat;mask:url(\"./assets/checkmark.svg\") no-repeat;background-color:var(--check-color, #fff);opacity:0;-webkit-transition:opacity 120ms ease-in-out;transition:opacity 120ms ease-in-out}input[type=checkbox]:checked{border:1px solid var(--checkbox-focus-border-color, #006be0);background-color:var(--checkbox-checked-bg-color, #006be0);color:var(--checkbox-color, #fff)}input[type=checkbox]:checked:focus{outline-color:#fff;outline-offset:-4px}input[type=checkbox]:checked:hover{border:1px solid var(--checkbox-focus-border-color, #2150a3);background-color:var(--checkbox-checked-bg-color, #2150a3);color:var(--checkbox-color, #fff)}input[type=checkbox]:checked::before{opacity:1}input[type=checkbox]:focus-visible{outline-width:2px;outline-style:solid;outline-color:#555;outline-offset:-2px}input[type=checkbox]:disabled{border:1px solid var(--checkbox-disabled-border-color, #e2e2e2);cursor:not-allowed;--checkbox-default-bg-color:#e2e2e2}input[type=checkbox]:disabled:checked{background-color:var(--checkbox-disabled-bg-color, #e2e2e2);opacity:var(--checkbox-disabled-opacity, 1);--check-color:#767676}.subtext{max-width:var(--checkbox-subtext-label-maxWidth, 200px);width:var(--checkbox-subtext-label-width, 100%);margin:0;padding-left:var(--checkbox-item-padding-left, 8px);line-height:var(--checkbox-subtext-line-height, 16px);color:var(--checkbox-subtext-color, #767676);font-family:var(--checkbox-subtext-font-family, \"OpenSans\");font-size:var(--checkbox-subtext-font-size, 0.75rem)}";

const CelCheckboxItem = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.inputChangeAttempted = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celCheckboxInputChangeAttempted", 7);
    this.inputChanged = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celCheckboxInputChanged", 7);
    this.headerInputChanged = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celHeaderCheckboxInputChanged", 7);
    this.checkboxItemId = `cel-checkbox-item-${checkboxItemIds++}`;
    this.hovered = false;
    this.truncateLength = 43;
    this.checked = false;
    this.identifier = undefined;
    this.disabled = false;
    this.label = 'Checkbox Item';
    this.handleCheckedExternally = false;
    this.checkboxItemAriaLabel = undefined;
    this.checkboxType = null;
    this.subtext = undefined;
  }
  externalCheckValueChange() {
    if (this.handleCheckedExternally && this.inputEl) {
      this.inputEl.checked = this.checked;
    }
  }
  checkboxChange(event) {
    const checkboxEl = event.target;
    const targetValue = checkboxEl.checked;
    if (!this.handleCheckedExternally) {
      this.checked = targetValue;
    }
    else {
      checkboxEl.checked = this.checked;
    }
    this.emitCheckValueChangeEvent(targetValue);
  }
  emitCheckValueChangeEvent(targetValue) {
    if (this.handleCheckedExternally) {
      this.inputChangeAttempted.emit({ identifier: this.identifier, checked: targetValue, checkboxType: this.checkboxType });
    }
    else if (this.checkboxType) {
      this.headerInputChanged.emit({ identifier: this.identifier, checked: targetValue, checkboxType: this.checkboxType });
    }
    else {
      this.inputChanged.emit({ identifier: this.identifier, checked: targetValue, checkboxType: this.checkboxType });
    }
  }
  showTitleOnLabelHover() {
    if (this.hovered && this.label.length > this.truncateLength) {
      this.labelEl.setAttribute('title', this.label);
    }
    else {
      this.labelEl.removeAttribute('title');
    }
  }
  render() {
    const isTruncated = this.label.length > this.truncateLength;
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2', "data-identifier": this.identifier }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { id: this.checkboxItemId, class: this.disabled ? 'disabled' : '', ref: (el) => (this.inputEl = el), type: 'checkbox', "aria-describedby": `${this.checkboxItemId}-subtext`, checked: this.checked, disabled: this.disabled, onChange: (ev) => this.checkboxChange(ev), "aria-label": this.checkboxItemAriaLabel ? this.checkboxItemAriaLabel : isTruncated ? this.label : null, "data-checkbox-type": this.checkboxType }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), this.subtext ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { onMouseEnter: () => (this.hovered = true), onMouseLeave: () => (this.hovered = false), "aria-hidden": this.checkboxItemAriaLabel || isTruncated ? 'true' : null, htmlFor: this.checkboxItemId, ref: (el) => (this.labelEl = el), class: ['form-control', this.disabled ? 'disabled' : ''].join(' ') }, Object(_truncate_16cfb2aa_js__WEBPACK_IMPORTED_MODULE_5__["t"])(this.label, this.truncateLength)), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: "subtext", id: `${this.checkboxItemId}-subtext` }, this.subtext))
      :
        Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { onMouseEnter: () => (this.hovered = true), onMouseLeave: () => (this.hovered = false), "aria-hidden": this.checkboxItemAriaLabel || isTruncated ? 'true' : null, htmlFor: this.checkboxItemId, ref: (el) => (this.labelEl = el), class: ['form-control', this.disabled ? 'disabled' : ''].join(' ') }, Object(_truncate_16cfb2aa_js__WEBPACK_IMPORTED_MODULE_5__["t"])(this.label, this.truncateLength))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "checked": ["externalCheckValueChange"],
    "hovered": ["showTitleOnLabelHover"]
  }; }
};
let checkboxItemIds = 0;
CelCheckboxItem.style = celCheckboxItemCss;

const celChipCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:inline-block}button{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.row-between{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.chip-container{--icon-button-border-radius:2px;--icon-button-bg-color:#006be0;--icon-button-border-radius:4px;--icon-button-hover-bg-color:#2150a3;--icon-button-focus-color:#e5f0f97f;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--chip-label-color, #fff);background-color:var(--chip-container, #006be0);border-radius:var(--chip-container, 4px);border:1px solid var(--chip-container-border-color, #006be0);font-family:var(--chip-container-font-family, \"OpenSans\");font-size:var(--chip-container-font-size, 0.875rem);padding:2px 3px 2px 4px;word-break:var(--chip-container-word-break, break-word)}.chip-container--secondary{--icon-button-border-radius:2px;--icon-button-bg-color:#f3f3f3;--icon-button-border-radius:4px;--icon-button-hover-bg-color:#cdcdcd;--icon-button-focus-color:#006be07f;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--chip-label-color, #333);background-color:var(--chip-container, #f3f3f3);border-radius:var(--chip-container, 4px);border:1px solid var(--chip-container-border-color, #cdcdcd);font-family:var(--chip-container-font-family, \"OpenSans\");font-size:var(--chip-container-font-size, 0.875rem);padding:2px 3px 2px 4px}.chip-container--secondary:focus,.chip-container--secondary:active{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}.chip-container:focus .chip-container:active{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}.chip-label{margin-right:3px}";

const CelChip = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.chipClose = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celChipClose", 7);
    this.showToolTip = undefined;
    this.primary = undefined;
    this.label = undefined;
    this.closeButtonAriaLabel = 'Remove';
  }
  connectedCallback() {
    this.cel_icon_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon-button', 'cel-chip', this.el);
  }
  pressClose() {
    this.chipClose.emit(this.label);
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: [this.primary ? 'chip-container' : 'chip-container--secondary', 'row-between'].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "chip-label" }, this.label), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { class: `${this.primary ? 'chip-close--primary' : 'chip-close--secondary'}`, onClick: () => this.pressClose(), "data-name": 'close', "data-color": this.primary ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].WHITE : _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER, "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].XSMALL, "data-padding": '4px', "data-icon-button-aria-label": this.label ? `Remove ${this.label}` : this.closeButtonAriaLabel }))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
CelChip.style = celChipCss;

const celDateRangeCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{width:100%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.from,.to{padding:var(--date-range-padding, 0 20px 0 0)}.validation-message{width:100%}.error-container{position:var(--error-container-position, relative);margin-top:var(--error-container-margin-top, 1px);bottom:var(--error-container-bottom, 0)}.error-icon{margin-right:var(--error-icon-margin-right, 3px)}.error-message{color:var(--error-message-color, #cc333f);font-family:var(--error-message-font-family, \"OpenSans-Bold\");font-size:var(--error-message-font-size, 0.75rem)}.row-start{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}";

const CelDateRange = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.celSelected = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celDateRangeSelected", 7);
    this.dateRangeFromCleared = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celDateRangeFromCleared", 7);
    this.dateRangeToCleared = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celDateRangeToCleared", 7);
    this.toDateString = undefined;
    this.fromDateString = undefined;
    this.showFromCalendar = undefined;
    this.showToCalendar = undefined;
    this.isSelectedDateBeforeFrom = false;
    this.isSelectedDateAfterTo = false;
    this.monthView = undefined;
    this.yearView = undefined;
    this.from = undefined;
    this.to = undefined;
    this.disablePast = undefined;
    this.disableBefore = undefined;
    this.disableAfter = undefined;
    this.fromLabel = 'From';
    this.toLabel = 'To';
    this.errorMessage = undefined;
    this.localeEs = false;
    this.iconButtonFromAriaLabel = "Choose a starting date";
    this.iconButtonToAriaLabel = "Choose an end date";
    this.dateRangeErrorMessage = 'Date is not in the range';
    this.showDateRangeError = false;
    this.primary = false;
  }
  connectedCallback() {
    this.cel_date_input = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-date-input', 'cel-date-range', this.el);
    this.cel_icon = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon', 'cel-date-range', this.el);
  }
  formatDateToString(datObj) {
    return Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_6__["d"])(`${datObj.month} ${datObj.day} ${datObj.year}`, 'M D YYYY').format('MM/DD/YYYY');
  }
  validateDateRange(checkDate) {
    const { day: bday, month: bmonth, year: byear } = this.disableBefore;
    const disableBeforeDate = new Date(`${byear}-${bmonth}-${bday}`).getTime();
    const { day: aday, month: amonth, year: ayear } = this.disableAfter;
    const disableAfterDate = new Date(`${ayear}-${amonth}-${aday}`).getTime();
    const { day: cday, month: cmonth, year: cyear } = checkDate;
    const checkDateTime = new Date(`${cyear}-${cmonth}-${cday}`).getTime();
    if (disableBeforeDate <= checkDateTime &&
      disableAfterDate >= checkDateTime) {
      return true;
    }
    return false;
  }
  handleFromChange(newFrom) {
    if (!newFrom) {
      return;
    }
    if (this.disableBefore && "day" in this.disableBefore && this.showDateRangeError) {
      const isValidDateRange = this.validateDateRange(newFrom);
      if (!isValidDateRange) {
        this.errorMessage = this.dateRangeErrorMessage;
        this.isSelectedDateBeforeFrom = true;
        return;
      }
      else {
        !this.isSelectedDateAfterTo && (this.errorMessage = null);
        this.isSelectedDateBeforeFrom = false;
      }
    }
    this.fromDateString = this.formatDateToString(newFrom);
    this.celSelected.emit({ from: newFrom, to: this.to });
    this.iconButtonToAriaLabel = this.updateToButtonAriaLabel();
    this.iconButtonFromAriaLabel = this.updateFromButtonAriaLabel();
    const { month, year } = newFrom;
    this.monthView = parseInt(month);
    this.yearView = year;
  }
  handleToChange(newTo) {
    if (!newTo) {
      return;
    }
    if (this.disableAfter && "day" in this.disableAfter && this.showDateRangeError) {
      const isValidDateRange = this.validateDateRange(newTo);
      if (!isValidDateRange) {
        this.errorMessage = this.dateRangeErrorMessage;
        this.isSelectedDateBeforeFrom = true;
        return;
      }
      else {
        !this.isSelectedDateBeforeFrom && (this.errorMessage = null);
        this.isSelectedDateBeforeFrom = false;
      }
    }
    this.toDateString = this.formatDateToString(newTo);
    this.celSelected.emit({ from: this.from, to: newTo });
    this.iconButtonToAriaLabel = this.updateToButtonAriaLabel();
    this.iconButtonFromAriaLabel = this.updateFromButtonAriaLabel();
  }
  //start date
  updateFromButtonAriaLabel() {
    if (this.to && this.from) {
      return `Change start date, range from ${this.fromDateString} to ${this.toDateString} currently selected`;
    }
    else if (!this.to && this.from) {
      return `Change start date, ${this.fromDateString} currently selected`;
    }
    else
      return 'Choose start date';
  }
  //end date 
  updateToButtonAriaLabel() {
    if (this.to && this.from) {
      return `Change end date, date range from ${this.fromDateString} to ${this.toDateString} currently selected`;
    }
    else if (!this.to && this.from) {
      return `Choose end date`;
    }
    else if (this.to && !this.from) {
      return `Change end date, ${this.toDateString} currently selected`;
    }
    else
      return 'Choose end date';
  }
  componentWillLoad() {
    _customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_6__["d"].extend(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_6__["c"]);
    this.handleFromChange(this.from);
    this.handleToChange(this.to);
  }
  componentDidLoad() {
    this.fromEl.addEventListener('celCalendarDatePressed', (ev) => this.handleFrom(ev));
    this.fromEl.addEventListener('celDateInputOpenChange', (ev) => this.handleFromOpenChange(ev));
    this.fromEl.addEventListener('celDateInputSelected', (ev) => this.handleFrom(ev));
    this.fromEl.addEventListener('celDateInputCleared', () => this.handleFromCleared());
    this.toEl.addEventListener('celCalendarDatePressed', (ev) => this.handleTo(ev));
    this.toEl.addEventListener('celDateInputOpenChange', (ev) => this.handleToOpenChange(ev));
    this.toEl.addEventListener('celDateInputSelected', (ev) => this.handleTo(ev));
    this.toEl.addEventListener('celDateInputCleared', () => this.handleToCleared());
  }
  disconnectedCallback() {
    this.fromEl.removeEventListener('celCalendarDatePressed', (ev) => this.handleFrom(ev));
    this.toEl.removeEventListener('celCalendarDatePressed', (ev) => this.handleTo(ev));
    this.fromEl.removeEventListener('celDateInputOpenChange', (ev) => this.handleFromOpenChange(ev));
    this.toEl.removeEventListener('celDateInputOpenChange', (ev) => this.handleToOpenChange(ev));
    this.fromEl.removeEventListener('celDateInputSelected', (ev) => this.handleFrom(ev));
    this.toEl.removeEventListener('celDateInputSelected', (ev) => this.handleTo(ev));
    this.fromEl.removeEventListener('celDateInputCleared', () => this.handleFromCleared());
    this.toEl.removeEventListener('celDateInputCleared', () => this.handleToCleared());
  }
  handleFrom(ev) {
    if (!ev.detail) {
      this.from = null;
      return;
    }
    const { day, month, year } = ev.detail.activeDate;
    const newFrom = {
      day: day,
      month: ev.type !== 'celDateInputSelected' ? parseInt(month).toString() : month,
      year: year,
    };
    this.toEl.disableBefore = newFrom;
    this.from = newFrom;
    this.showFromCalendar = false;
    const toButton = this.toEl.shadowRoot.querySelector('.calendar-button');
    if (!this.to) {
      toButton.focus();
      this.showToCalendar = true;
    }
    else {
      this.showToCalendar = false;
    }
  }
  handleFromOpenChange(ev) {
    this.showFromCalendar = ev.detail;
  }
  handleTo(ev) {
    if (!ev.detail) {
      this.to = null;
      return;
    }
    const { day, month, year } = ev.detail.activeDate;
    const newTo = {
      day: day,
      //can take away parseint + to string later - check
      month: ev.type !== 'celDateInputSelected' ? parseInt(month).toString() : month,
      year: year,
    };
    this.to = newTo;
    this.showToCalendar = false;
    const fromButton = this.fromEl.shadowRoot.querySelector('.calendar-button');
    if (!this.from) {
      fromButton.focus();
      this.showFromCalendar = true;
    }
    else {
      this.showFromCalendar = false;
    }
  }
  handleToCleared() {
    this.to = null;
    this.dateRangeToCleared.emit();
    if (this.to == null && this.from == null) {
      this.monthView = parseInt(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_6__["d"])().format('M'));
      this.yearView = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_6__["d"])().format('YYYY');
    }
    this.iconButtonToAriaLabel = this.updateToButtonAriaLabel();
    this.iconButtonFromAriaLabel = this.updateFromButtonAriaLabel();
  }
  handleFromCleared() {
    this.from = null;
    this.dateRangeFromCleared.emit();
    if (this.to == null && this.from == null) {
      this.monthView = parseInt(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_6__["d"])().format('M'));
      this.yearView = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_6__["d"])().format('YYYY');
    }
    this.iconButtonToAriaLabel = this.updateToButtonAriaLabel();
    this.iconButtonFromAriaLabel = this.updateFromButtonAriaLabel();
  }
  handleToOpenChange(ev) {
    this.showToCalendar = ev.detail;
  }
  getEarlierDate(toDateObj, disableAfterDateObj) {
    //length == 3 implies that date, month, and year are defined for disableAfter, Empty object was previously considered defined
    if (toDateObj && disableAfterDateObj && Object.keys(disableAfterDateObj).length == 3) {
      let toDateString = this.formatDateToString(toDateObj);
      let disableAfterDateString = this.formatDateToString(disableAfterDateObj);
      return Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_6__["d"])(toDateString).isBefore(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_6__["d"])(disableAfterDateString)) ? toDateObj : disableAfterDateObj;
    }
    else if (toDateObj == null) {
      return disableAfterDateObj;
    }
    else {
      return toDateObj;
    }
  }
  getLaterDate(fromDateObj, disableBeforeDateObj) {
    //length == 3 implies that date, month, and year are defined for disableBefore, Empty object was previously considered defined
    if (fromDateObj && disableBeforeDateObj && Object.keys(disableBeforeDateObj).length == 3) {
      let fromDateString = this.formatDateToString(fromDateObj);
      let disableBeforeDateString = this.formatDateToString(disableBeforeDateObj);
      return Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_6__["d"])(fromDateString).isAfter(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_6__["d"])(disableBeforeDateString)) ? fromDateObj : disableBeforeDateObj;
    }
    else if (fromDateObj == null) {
      return disableBeforeDateObj;
    }
    else {
      return fromDateObj;
    }
  }
  getTextValidationMessage() {
    if (this.errorMessage || this.isSelectedDateAfterTo || this.isSelectedDateBeforeFrom) {
      return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'error-container row-start' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { class: 'error-icon', "aria-hidden": 'true', "data-name": 'alert-circle', "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].SMALL, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].ERROR }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: 'error-message' }, this.errorMessage)));
    }
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_date_input, { class: "from", ref: (el) => (this.fromEl = el), from: this.from, to: this.to, "data-month": this.monthView, "data-year": this.yearView, "data-range": "true", "data-label": this.fromLabel, "data-open": this.showFromCalendar ? 'true' : 'false', "data-disable-past": this.disablePast, disableBefore: this.disableBefore, disableAfter: this.getEarlierDate(this.to, this.disableAfter), "data-is-error": (this.errorMessage || this.isSelectedDateBeforeFrom) ? 'true' : 'false', "data-date-input-type": _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["F"], "data-locale-es": this.localeEs, "data-icon-button-aria-label": this.iconButtonFromAriaLabel, "data-primary": this.primary ? 'true' : 'false' }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_date_input, { class: "to", ref: (el) => (this.toEl = el), "data-is-to-input": 'true', from: this.from, to: this.to, "data-month": this.monthView, "data-year": this.yearView, "data-range": "true", "data-label": this.toLabel, "data-open": this.showToCalendar ? 'true' : 'false', "data-disable-past": this.disablePast, disableBefore: this.getLaterDate(this.from, this.disableBefore), disableAfter: this.disableAfter, "data-is-error": (this.errorMessage || this.isSelectedDateAfterTo) ? 'true' : 'false', "data-date-input-type": _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["f"], "data-locale-es": this.localeEs, "data-icon-button-aria-label": this.iconButtonToAriaLabel, "data-primary": this.primary ? 'true' : 'false' }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "validation-message" }, this.getTextValidationMessage())));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "from": ["handleFromChange"],
    "to": ["handleToChange"]
  }; }
};
CelDateRange.style = celDateRangeCss;

var CelFooterSize;
(function (CelFooterSize) {
  CelFooterSize["DESKTOP"] = "desktop";
  CelFooterSize["TABLET"] = "tablet";
  CelFooterSize["MOBILE"] = "mobile";
})(CelFooterSize || (CelFooterSize = {}));

const celFooterCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:block}*{-webkit-box-sizing:border-box;box-sizing:border-box}.row-start{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.copyright-desktop{margin-right:2px}.row-between{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.col-start{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}a{color:inherit;padding:0 7px}a:focus,a:active{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:0}.remove-padding{padding-left:0}.link-class-first{padding-left:0}.remove-border{border-right:0 solid #fff}.mobile-link{padding-left:0;margin-bottom:var(--mobile-link-margin-bottom, 9px);display:block}.last-link{margin-bottom:0}.border-right{border-right:1px solid #fff}.footer-container{width:100%;background-color:var(--footer-bg-color, #222);color:var(--footer-color, #fff);font-family:var(--footer-font-family, \"OpenSans\");font-size:var(--footer-font-size, 0.75rem);padding:var(--footer-padding, 12px 40px);line-height:16px}.footer-container li{list-style:none}.footer-container-mobile{height:var(--footer-container-mobile-height, auto);padding:var(--footer-mobile-padding, 21px)}.left-container{height:100%;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.left-container-desktop{max-width:var(--footer-desktop-max-width, 789px)}.left-container-tablet{max-width:var(--footer-tablet-max-width, 768px)}.left-container-mobile{max-width:var(--footer-mobile-max-width, 144px)}.links-mobile{margin-bottom:var(--links-margin-bottom, 20px)}.copyright-mobile{margin-bottom:var(--copyright-mobile-margin-bottom, 15px)}.tag{padding:0 7px}.right-container-mobile{height:100%}.links-parent-container,.links-mobile{padding:0;margin-top:0;display:-ms-flexbox;display:flex}.col-footer{margin-bottom:0}.footer-links-parent-wrapper{display:-ms-flexbox;display:flex}";

const CelFooter = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.footerLinkClass = 'footer-link';
    this.copyrightLabel = 'Copyright © 2021 Savvas Learning Company LLC. or its affiliates. All Rights Reserved.';
    this.agreementLabel = 'User Agreement';
    this.agreementHref = '';
    this.privacyLabel = 'Privacy Policy';
    this.privacyHref = '';
    this.creditsLabel = 'Credits';
    this.creditsHref = '';
    this.revisionTag = '';
    this.size = CelFooterSize.DESKTOP;
    this.showRevisionTag = true;
    this.showCredits = true;
    this.openInNewTabLinkText = 'opens in a new tab';
  }
  /**
   * listener to keydown event
   */
  handleKeyDown(event) {
    const activeElement = this.el.shadowRoot.activeElement;
    const activeElementClassList = activeElement.classList;
    switch (event.key) {
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["e"]:
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["d"]:
        if (activeElementClassList.contains(this.footerLinkClass)) {
          this.handleArrowUpDownNavigation(event.key, activeElement);
        }
        break;
    }
  }
  handleArrowUpDownNavigation(keyPressed, activeElement) {
    const parentElement = activeElement.parentElement;
    if (keyPressed === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["e"]) {
      this.onMakeMenuItemFocused(parentElement, 'nextSibling');
    }
    else if (keyPressed === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["d"]) {
      this.onMakeMenuItemFocused(parentElement, 'previousSibling');
    }
  }
  onMakeMenuItemFocused(currentActiveItem, siblingElement) {
    var _a;
    const toBeActiveElement = (_a = currentActiveItem[siblingElement]) === null || _a === void 0 ? void 0 : _a.firstChild;
    if (toBeActiveElement) {
      this.makeItemFocused(toBeActiveElement);
    }
    else {
      if (siblingElement === 'previousSibling') {
        const toBeActiveElementFirstSibling = currentActiveItem.parentElement.lastChild.firstChild;
        this.makeItemFocused(toBeActiveElementFirstSibling);
      }
      else {
        const toBeActiveElementLastSibling = currentActiveItem.parentElement.firstChild.firstChild;
        this.makeItemFocused(toBeActiveElementLastSibling);
      }
    }
  }
  makeItemFocused(item) {
    if (item) {
      item.focus();
    }
  }
  render() {
    const isTablet = this.size == CelFooterSize.TABLET;
    const isMobile = this.size == CelFooterSize.MOBILE;
    const linkClass = isMobile ? 'mobile-link' : 'border-right';
    const logoSrc = 'https://lst-assets.savvasrealize.com/assets/logos/savvas-white.svg';
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("footer", { class: ['footer-container row-between', isMobile ? 'footer-container-mobile' : ''].join(' '), role: "contentinfo" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: [
        'left-container',
        isTablet || isMobile ? 'col-start' : 'row-start',
        isTablet ? 'left-container-tablet' : isMobile ? 'left-container-mobile' : 'left-container-desktop',
      ].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: isMobile ? 'copyright-mobile' : 'copyright-desktop' }, this.copyrightLabel), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer-links-parent-wrapper" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { class: [isMobile ? 'col-start links-mobile' : 'col-footer links-parent-container'].join(' '), role: "menu" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { role: "presentation" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { target: "_blank", role: "menuitem", rel: "noopener noreferrer", class: [`${this.footerLinkClass}`, linkClass, !isMobile ? 'link-class-first' : '', isTablet ? 'remove-padding' : ''].join(' '), href: this.agreementHref, "aria-label": `${this.agreementLabel} ${this.openInNewTabLinkText}` }, this.agreementLabel)), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { role: "presentation" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { target: "_blank", role: "menuitem", rel: "noopener noreferrer", class: [`${this.footerLinkClass}`, this.showCredits || this.showRevisionTag ? linkClass : ' ', isMobile ? 'mobile-link' : null].join(' '), href: this.privacyHref, "aria-label": `${this.privacyLabel} ${this.openInNewTabLinkText}` }, this.privacyLabel)), this.showCredits ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { role: "presentation" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { target: "_blank", role: "menuitem", rel: "noopener noreferrer", class: [`${this.footerLinkClass}`, this.showRevisionTag ? linkClass : 'remove-border', 'last-link', isMobile ? 'mobile-link' : null].join(' '), href: this.creditsHref, "aria-label": `${this.creditsLabel} ${this.openInNewTabLinkText}` }, this.creditsLabel)) : null), this.showRevisionTag ? isMobile ? null : Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: [isMobile ? 'remove-padding' : 'tag'].join(' ') }, this.revisionTag) : null), this.showRevisionTag ? isMobile ? Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: [isMobile ? 'remove-padding' : 'tag'].join(' ') }, this.revisionTag) : null : null), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['right-container', isMobile ? 'col-start right-container-mobile' : ''].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: logoSrc, alt: "Savvas logo" })))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
CelFooter.style = celFooterCss;

const celIconButtonCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}button{background:none;color:inherit;border:none;border-right:var(--icon-button-border-right, none);border-left:var(--icon-button-border-left, none);padding:0;font:inherit;cursor:pointer;outline:inherit;margin-right:var(--icon-button-margin-right, 0)}:host{display:inline-block;position:relative}*,*:before,*:after{-webkit-box-sizing:border-box;box-sizing:border-box}.center{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.icon-button{background-color:var(--icon-button-bg-color, transparent);border-radius:var(--icon-button-border-radius, 50%);padding:var(--icon-button-padding)}.icon-button.disabled-stroke{--icon-button-outline-color:var(--icon-button-disabled-stroke-outline, #cdcdcd)}.icon-button.disabled-stroke.disabled-stroke{--cel-color-base:var(--icon-button-disabled-stroke-color, var(--icon-button-disabled-stroke-base-color, #cdcdcd));--outline-color:var(--icon-button-disabled-stroke-outline-color, var(--icon-button-disabled-stroke-base-color, #cdcdcd))}.icon-button.primary-stroke{--icon-button-outline-color:#006be0}.icon-button.primary-shade-stroke{--icon-button-outline-color:#2150a3}.icon-button.error-stroke{--icon-button-outline-color:#cc333f}.icon-button.error-shade-stroke{--icon-button-outline-color:#a71622}.icon-button.plum-stroke{--icon-button-outline-color:#902364}.icon-button.confirm-stroke{--icon-button-outline-color:#2A7D14}.icon-button.white-stroke{--icon-button-outline-color:#fff;background-color:none}.icon-button.notification-stroke{--icon-button-outline-color:#C6720C}.icon-button.gray-stroke{--icon-button-outline-color:#767676}.icon-button.gray-dusty-stroke{--icon-button-outline-color:#939393}.icon-button.gray-light-stroke{--icon-button-outline-color:#cdcdcd}.icon-button.gray-lighter-stroke{--icon-button-outline-color:#e2e2e2}.icon-button.gray-darker-stroke{--icon-button-outline-color:#333}.icon-button.black-stroke{--icon-button-outline-color:#000}.icon-button:focus,.icon-button:active{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--icon-button-outline-color, var(--focus-ring-text-color, currentColor));outline-offset:var(--icon-button-outline-offset, var(--focus-ring-outline-offset, -4px))}@media (hover: hover){.icon-button:hover{background-color:var(--icon-button-hover-bg-color, rgba(0, 0, 0, 0.05))}.icon-button:hover.black-stroke:focus,.icon-button:hover.black-stroke:active,.icon-button:hover.primary-stroke:focus,.icon-button:hover.primary-stroke:active,.icon-button:hover.primary-shade-stroke:active,.icon-button:hover.gray-darker-stroke:focus{--icon-button-outline-color:#2150a3}.icon-button:hover .button-icon.disabled-stroke{--cel-color-base:var(--icon-button-disabled-stroke-color, var(--icon-button-hover-color, #cdcdcd));--outline-color:var(--icon-button-disabled-stroke-outline-color, var(--icon-button-hover-color, #cdcdcd))}.icon-button:hover .button-icon.primary-stroke{--cel-color-base:var(--icon-button-primary-stroke-color, var(--icon-button-hover-color, #2150a3));--outline-color:var(--icon-button-primary-stroke-outline-color, var(--icon-button-hover-color, #2150a3))}.icon-button:hover .button-icon.primary-shade-stroke{--cel-color-base:var(--icon-button-primary-shade-stroke-color, var(--icon-button-hover-color, #2150a3));--outline-color:var(--icon-button-primary-shade-stroke-outline-color, var(--icon-button-hover-color, #2150a3))}.icon-button:hover .button-icon.error-stroke{--cel-color-base:var(--icon-button-error-stroke-color, var(--icon-button-hover-color, #cc333f));--outline-color:var(--icon-button-error-stroke-outline-color, var(--icon-button-hover-color, #cc333f))}.icon-button:hover .button-icon.error-shade-stroke{--cel-color-base:var(--icon-button-error-shade-stroke-color, var(--icon-button-hover-color, #a71622));--outline-color:var(--icon-button-error-shade-stroke-outline-color, var(--icon-button-hover-color, #a71622))}.icon-button:hover .button-icon.plum-stroke{--cel-color-base:var(--icon-button-plum-stroke-color, var(--icon-button-hover-color, #902364));--outline-color:var(--icon-button-plum-stroke-outline-color, var(--icon-button-hover-color, #902364))}.icon-button:hover .button-icon.confirm-stroke{--cel-color-base:var(--icon-button-confirm-stroke-color, var(--icon-button-hover-color, #2A7D14));--outline-color:var(--icon-button-confirm-stroke-outline-color, var(--icon-button-hover-color, #2A7D14))}.icon-button:hover .button-icon.white-stroke{--cel-color-base:var(--icon-button-white-stroke-color, var(--icon-button-hover-color, #fff));--outline-color:var(--icon-button-white-stroke-outline-color, var(--icon-button-hover-color, #fff))}.icon-button:hover .button-icon.notification-stroke{--cel-color-base:var(--icon-button-notification-stroke-color, var(--icon-button-hover-color, #C6720C));--outline-color:var(--icon-button-notification-stroke-outline-color, var(--icon-button-hover-color, #C6720C))}.icon-button:hover .button-icon.gray-dusty-stroke{--cel-color-base:var(--icon-button-gray-dusty-stroke-color, var(--icon-button-hover-color, #939393));--outline-color:var(--icon-button-gray-dusty-stroke-outline-color, var(--icon-button-hover-color, #939393))}.icon-button:hover .button-icon.gray-light-stroke{--cel-color-base:var(--icon-button-gray-light-stroke-color, var(--icon-button-hover-color, #cdcdcd));--outline-color:var(--icon-button-gray-light-stroke-outline-color, var(--icon-button-hover-color, #cdcdcd))}.icon-button:hover .button-icon.gray-lighter-stroke{--cel-color-base:var(--icon-button-gray-lighter-stroke-color, var(--icon-button-hover-color, #e2e2e2));--outline-color:var(--icon-button-gray-lighter-stroke-outline-color, var(--icon-button-hover-color, #e2e2e2))}.icon-button:hover .button-icon.gray-darker-stroke{--cel-color-base:var(--icon-button-gray-darker-stroke-color, var(--icon-button-hover-color, #2150a3));--outline-color:var(--icon-button-gray-darker-stroke-outline-color, var(--icon-button-hover-color, #2150a3))}.icon-button:hover .button-icon.black-stroke{--cel-color-base:var(--icon-button-black-stroke-color, var(--icon-button-hover-color, #2150a3));--outline-color:var(--icon-button-black-stroke-outline-color, var(--icon-button-hover-color, #2150a3))}}.icon-button.disabled-stroke{background-color:var(--icon-button-disabled-bg-color, transparent);color:var(--icon-button-disabled-color, #cdcdcd);outline-color:var(--icon-button-disabled-outline-color, #cdcdcd)}.icon-button.disabled-stroke:focus{outline-color:var(--icon-button-disabled-outline-color, #cdcdcd)}.disabled{cursor:default}.notification-badge{width:var(--icon-button-notification-badge-width, 10px);height:var(--icon-button-notification-badge-height, 10px);position:absolute;border-radius:50%;top:var(--icon-button-notification-badge-top, 5px);right:var(--icon-button-notification-badge-right, 3px)}.notification-badge.show{border:var(--icon-button-notification-badge-border, 1px solid #fff);background-color:var(--icon-button-notification-badge-background-color, #f8961e)}.notification-badge.hide{display:none}.popover{--popover-padding:0 4px 16px 16px;--popover-width:var(--icon-button-popover-width, fit-content);--popover-top:var(--icon-button-popover-top, 4px);--popover-left:var(--icon-button-popover-left, none);--popover-right:var(--icon-button-popover-right, none);--popover-bottom:var(--icon-button-popover-bottom, none);--popover-border-radius:var(--icon-button-popover-border-radius, 4px);--popover-z-index:var(--icon-button-popover-z-index, 101);--popover-body-padding:var(--icon-button-popover-body-padding, 16px 0 0 0)}.popover-wrapper{position:absolute;top:var(--icon-button-popover-wrapper-top, none);right:var(--icon-button-popover-wrapper-right, none);left:var(--icon-button-popover-wrapper-left, none);bottom:var(--icon-button-popover-wrapper-bottom, none);width:var(--icon-button-popover-max-width, 280px);z-index:var(--icon-button-popover-z-index, 101)}";

const CelIconButton = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.btnFocused = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celButtonOnFocus", 7);
    this.btnBlurred = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celButtonOnBlur", 7);
    this.btnClicked = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celButtonOnClick", 7);
    this.btnMouseEntered = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celButtonMouseEntered", 7);
    this.btnMouseLeaves = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celButtonMouseLeaves", 7);
    this.celPressedChange = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celIconButtonPressedChange", 7);
    this.componentLoaded = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celIconButtonLoaded", 7);
    this.popoverWindowClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celIconButtonPopoverWindowClick", 7);
    this.closeButtonId = `cel-icon-button-close-id-${++closeButtonIds}`;
    this.onMouseEnter = () => {
      if (this.disabled) {
        return;
      }
      this.btnMouseEntered.emit();
    };
    this.onMouseLeave = () => {
      if (this.disabled) {
        return;
      }
      this.btnMouseLeaves.emit();
    };
    this.onClick = (event) => {
      let xClickCoordinate = event.x || event.clientX;
      let yClickCoordinate = event.y || event.clientY;
      if (this.disabled) {
        return;
      }
      if (this.hasPopover) {
        this.openPopover = !this.openPopover;
      }
      this.pressed = !this.pressed;
      const eventObj = {
        id: this.identifier,
        name: this.name,
        event: event,
        buttonType: this.buttonType,
        isKeyboardEvent: xClickCoordinate && yClickCoordinate || xClickCoordinate && yClickCoordinate != 0 ? false : true
      };
      this.btnClicked.emit(eventObj);
    };
    this.previousColor = undefined;
    this.tabindex = 0;
    this.focusElement = false;
    this.color = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].BLACK;
    this.size = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].MEDIUM;
    this.lazy = false;
    this.disabled = false;
    this.enableCaret = false;
    this.toggle = false;
    this.pressed = false;
    this.tooltipLabel = undefined;
    this.padding = '8px';
    this.name = undefined;
    this.src = undefined;
    this.iconButtonAriaLabel = undefined;
    this.showComponentLoadInfo = false;
    this.iconButtonAriaHaspopup = undefined;
    this.iconButtonAriaControls = undefined;
    this.iconButtonAriaExpanded = null;
    this.identifier = undefined;
    this.showNotificationBadge = false;
    this.notificationBadgeAriaLabel = 'new comment';
    this.buttonType = null;
    this.isExternalLink = false;
    this.elementRole = undefined;
    this.elementAriaSelected = undefined;
    this.elementTabIndex = undefined;
    this.hasPopover = false;
    this.openPopover = false;
    this.popoverConfig = {};
  }
  handlePressedChange() {
    this.celPressedChange.emit(this.pressed);
  }
  handleFocusElement() {
    if (this.focusElement && this.buttonEl) {
      this.buttonEl.focus();
    }
  }
  connectedCallback() {
    this.cel_icon = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon', 'cel-icon-button', this.el);
    this.cel_popover = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-popover', 'cel-icon-button', this.el);
  }
  componentWillRender() {
    if (this.disabled) {
      this.tabindex = -1;
    }
  }
  componentDidRender() {
    this.buttonEl.style.padding = this.padding;
    this.resize();
  }
  componentDidUpdate() {
    if (this.popoverEl && this.popoverConfig) {
      document.fonts.ready.then(() => {
        if (this.popoverConfig.label) {
          this.popoverEl.setAttribute('data-label', this.popoverConfig.label);
        }
        this.popoverEl.innerHTML += this.popoverConfig.html ? this.popoverConfig.html : '<slot></slot>';
      });
    }
  }
  componentDidLoad() {
    if (this.showComponentLoadInfo) {
      this.componentLoaded.emit(true);
    }
    if (this.focusElement) {
      setTimeout(() => this.focusButton, 0);
    }
    if (!this.disabled) {
      this.previousColor = this.color;
    }
  }
  focusButton() {
    this.buttonEl.focus();
  }
  resize() {
    let { width, height } = window.getComputedStyle(this.buttonEl);
    const w = parseFloat(width);
    const h = parseFloat(height);
    const diff = Math.abs(w - h);
    if (diff > 1) {
      this.buttonEl.style.padding = this.padding;
      const { width, height } = window.getComputedStyle(this.buttonEl);
      const w = parseFloat(width);
      const h = parseFloat(height);
      const diff = Math.abs(w - h);
      const p = diff / 2 + parseFloat(this.padding);
      this.buttonEl.style.padding = p + 'px ' + this.padding;
    }
  }
  blurHandler(event) {
    const eventObj = {
      id: this.identifier,
      name: this.name,
      event: event,
      buttonType: this.buttonType,
    };
    this.btnBlurred.emit(eventObj);
  }
  onColorChange(newValue, oldValue) {
    if (!this.disabled) {
      this.previousColor = oldValue;
    }
    this.color = newValue;
  }
  updateDisabledState(newValue) {
    if (!newValue) {
      this.previousColor = this.color;
    }
  }
  handleCelPopOverCloseEvent(event) {
    this.openPopover = false;
    this.pressed = false;
    if (event.detail && event.detail.returnFocusIdentifier && event.detail.isKeyboardEvent) {
      const buttonEl = this.el.shadowRoot.querySelector('#' + event.detail.returnFocusIdentifier);
      buttonEl.focus();
    }
  }
  handleCelPopoverWindowClick() {
    this.openPopover = false;
    this.pressed = false;
    this.popoverWindowClick.emit({ iconButtonIdentifier: this.identifier });
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { ref: (el) => (this.buttonEl = el), id: this.identifier, class: `icon-button center ${this.disabled ? 'disabled' : this.color}-stroke`, onMouseEnter: () => this.onMouseEnter(), onMouseLeave: () => this.onMouseLeave(), "aria-disabled": this.disabled ? 'true' : 'false', title: this.tooltipLabel ? this.tooltipLabel : this.iconButtonAriaLabel, onClick: (ev) => this.onClick(ev), "aria-pressed": this.toggle ? (this.toggle && this.pressed ? 'true' : 'false') : null, onBlur: (event) => this.blurHandler(event), onFocus: () => this.btnFocused.emit(this.identifier), "aria-haspopup": (this.iconButtonAriaHaspopup || this.hasPopover) && 'true', "aria-controls": this.iconButtonAriaHaspopup && this.iconButtonAriaControls, "aria-expanded": this.hasPopover ? (this.openPopover ? 'true' : 'false') : this.iconButtonAriaExpanded, "data-button-type": this.buttonType, role: this.isExternalLink ? "link" : this.elementRole ? this.elementRole : null, "aria-selected": this.elementAriaSelected ? this.elementAriaSelected : null, tabindex: this.elementTabIndex ? this.elementTabIndex : null }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": "true", "data-color": this.disabled ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].DISABLED : this.color, "data-name": this.name, "data-src": this.src, "data-size": this.size, "data-lazy": this.lazy, class: `button-icon ${this.disabled ? 'disabled' : this.color}-stroke` }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: ['notification-badge', this.showNotificationBadge ? 'show' : 'hide'].join(' '), role: "log", "aria-live": "polite", "aria-label": this.showNotificationBadge ? this.notificationBadgeAriaLabel : '' }), this.enableCaret ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": "true", "data-color": this.disabled ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].DISABLED : this.color, "data-name": this.pressed ? 'caret-up' : 'caret-down', "data-src": this.src, "data-size": this.size, "data-lazy": this.lazy, class: `button-icon ${this.disabled ? '' : this.color}-stroke` })) : null), (this.openPopover && this.hasPopover) ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "popover-wrapper" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_popover, { ref: (el) => (this.popoverEl = el), "data-show-close": "true", "data-close-icon-size": this.popoverConfig.closeIconSize, "data-prevent-return-focus-on-tab-forwards": this.popoverConfig.preventReturnFocusOnTabForwards, "data-close-button-identifier": this.closeButtonId, "data-focus-close": "true", "data-return-focus-identifier": this.identifier, class: "popover" }))) : null));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "pressed": ["handlePressedChange"],
    "focusElement": ["handleFocusElement"],
    "color": ["onColorChange"],
    "disabled": ["updateDisabledState"]
  }; }
};
let closeButtonIds = 0;
CelIconButton.style = celIconButtonCss;

const celIconPanelCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:inline-block}.icon-panel-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:var(--icon-panel-container-min-width, 48px);-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background:var(--icon-panel-background-color, #fff);border-right:var(--icon-panel-border-right, none)}.icon-panel-button{width:48px;height:48px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;--icon-button-border-radius:0;--icon-button-border-left:2px solid transparent;--icon-button-border-right:2px solid transparent;-webkit-transition:border-right-color 0.3s ease;transition:border-right-color 0.3s ease;margin-bottom:2px;-webkit-box-sizing:border-box;box-sizing:border-box;background-clip:content-box;--icon-button-notification-badge-top:var(--icon-panel-notification-badge-top, 12px);--icon-button-notification-badge-right:var(--icon-panel-notification-badge-right, 12px);--icon-button-notification-badge-background-color:var(--icon-panel-notification-badge-color, #C6720C)}.icon-panel-button:focus,.icon-panel-button:active{--focus-ring-text-color:#333;--focus-ring-outline-offset:-2px}.panel-item-selected{--icon-button-border-right:2px solid #006be0;background:#F2F2F2;-webkit-transition:border-right-color 0.3s ease, background-color 0.3s ease;transition:border-right-color 0.3s ease, background-color 0.3s ease}.panel-item-selected:focus{--focus-ring-text-color:#006be0}@media (hover: hover){.icon-panel-button:hover{--icon-button-hover-bg-color:#f2f2f2;--icon-button-border-right:2px solid #e2e2e2;--icon-button-border-left:2px solid #f2f2f2;--icon-button-hover-color:#2150a3}.panel-item-selected:hover{--icon-button-hover-bg-color:#e2e2e2;--icon-button-border-left:2px solid #e2e2e2;--icon-button-border-right:2px solid #2150a3;background-color:#e2e2e2}}";

const CelIconPanel = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.iconPanelButtonClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celIconPanelButtonClick", 7);
    this.iconPanelBtns = [];
    this.selectedItemIndex = undefined;
    this.panelItems = [];
    this.iconPanelAriaLabel = 'icon panel';
    this.iconPanelOpen = false;
    this.enableIconDeselection = false;
  }
  connectedCallback() {
    this.cel_icon_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon-button', 'cel-icon-panel', this.el);
  }
  componentWillLoad() {
    if (this.iconPanelOpen) {
      this.selectedItemIndex =
        this.panelItems.find(item => item.selected === true) ?
          this.panelItems.findIndex(item => item.selected === true) : 0;
      setTimeout(() => this.handleIconClick(this.selectedItemIndex, this.panelItems[this.selectedItemIndex]), 0);
    }
    else {
      this.resetPanelItems();
    }
  }
  handleIconHover(index) {
    this.panelItems = this.panelItems.map((item, i) => ({
      ...item,
      hovered: i === index
    }));
  }
  resetPanelItems() {
    this.panelItems = this.panelItems.map((item) => ({
      ...item,
      selected: false,
      hovered: false
    }));
    this.selectedItemIndex = 0;
  }
  deselectIcon() {
    this.iconPanelOpen = false;
    this.resetPanelItems();
  }
  selectIcon(index) {
    this.iconPanelOpen = true;
    this.panelItems = this.panelItems.map((item, i) => ({
      ...item,
      selected: i === index
    }));
    this.selectedItemIndex = index;
  }
  handleIconClick(index, item) {
    if (this.enableIconDeselection && this.iconPanelOpen && this.selectedItemIndex === index) {
      this.deselectIcon();
    }
    else {
      this.selectIcon(index);
    }
    if (item) {
      this.iconPanelButtonClick.emit({
        id: item['id'],
        label: item['label'],
        iconName: item['iconName'],
        href: item['href'],
        ariaLabel: item['ariaLabel']
      });
    }
  }
  handleKeyDown(event, index) {
    let selectedButton = this.panelItems.findIndex(item => item.selected === true);
    if (selectedButton === -1) {
      this.selectedItemIndex = this.selectedItemIndex = event.key === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["T"] ? 0 : -1;
    }
    const nextIndex = (index + 1) % this.panelItems.length;
    const previousIndex = (index - 1 + this.panelItems.length) % this.panelItems.length;
    switch (event.key) {
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["A"]:
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["e"]:
        event.preventDefault();
        this.iconPanelBtns[nextIndex].shadowRoot.querySelector('button').focus();
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["c"]:
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["d"]:
        event.preventDefault();
        this.iconPanelBtns[previousIndex].shadowRoot.querySelector('button').focus();
        break;
    }
  }
  watchIconPanelOpen(newValue) {
    if (!newValue) {
      this.resetPanelItems();
    }
    else if (newValue && this.selectedItemIndex !== undefined) {
      this.panelItems = this.panelItems.map((item, i) => ({
        ...item,
        selected: i === this.selectedItemIndex
      }));
    }
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { role: "tablist", "aria-label": this.iconPanelAriaLabel, class: ['icon-panel-container row-between'].join(' '), "aria-orientation": "vertical" }, this.panelItems.map((item, index) => (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { ref: (el) => this.iconPanelBtns[index] = el, class: ['icon-panel-button', item.selected && 'panel-item-selected', item.hovered && 'panel-item-hovered'].join(' '), "data-element-role": "tab", "data-element-aria-selected": item.selected ? 'true' : 'false', "data-element-tab-index": this.selectedItemIndex === index ? '0' : '-1', "data-name": item.iconName, "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].MEDIUM, "data-icon-button-aria-label": item.label, "data-identifier": `icon-panel-button`, "data-color": item.selected ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].PRIMARY : _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER, "data-button-type": 'icon-panel', "data-padding": '13px', onCelButtonOnClick: () => this.handleIconClick(index, item), onCelButtonMouseEntered: () => this.handleIconHover(index), onCelButtonMouseLeaves: () => this.handleIconHover(-1), onKeyDown: (event) => this.handleKeyDown(event, index), "data-show-notification-badge": item.showNotificationBadge, "data-notification-badge-aria-label": item.notificationBadgeAriaLabel }))))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "iconPanelOpen": ["watchIconPanelOpen"]
  }; }
};
CelIconPanel.style = celIconPanelCss;

const celMenuCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:var(--cel-menu-display, flex);color:var(--cel-menu-font-color, #000)}.first-secondary-list-item{border-top:var(--secondary-menu-border-top, 2px solid #cdcdcd)}.menu-item-img{height:var(--menu-item-img-height, 32px);width:var(--menu-item-img-width, 32px);border-radius:var(--menu-item-img-border-radius, 10%);min-height:var(--menu-item-min-height, 32px);min-width:var(--menu-item-min-width, 32px)}a,a:hover,a:active{text-decoration:none;color:inherit;outline:none}li{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;background-color:var(--menu-item-li-bg-color, #fff)}li.menu-list-item-container--wrap-text{min-height:var(--menu-item-wrap-text-min-height, 38px);height:var(--menu-item-wrap-text-height, 54px)}li:has(a:focus),li:has(a:active){outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}.row-start{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.menu-container{overflow:hidden;position:var(--menu-container-position, absolute);border-radius:var(--menu-container-border-radius, 4px);-webkit-box-shadow:var(--pop-up-menu-box-shadow, 0 1px 2px 0 rgba(0, 0, 0, 0.5));box-shadow:var(--pop-up-menu-box-shadow, 0 1px 2px 0 rgba(0, 0, 0, 0.5));left:var(--menu-container-left, 0);right:var(--menu-container-right, none);top:var(--menu-container-top, 37px);bottom:var(--menu-container-bottom, none);z-index:var(--menu-menu-container-z-index, 2);width:var(--menu-container-width, none);min-width:var(--menu-container-min-width, none);max-height:var(--menu-container-height, none);overflow-y:var(--menu-container-overflow-y, none);background-color:var(--menu-container-background-color, inherit);list-style-type:none;-webkit-padding-start:0;padding-inline-start:0;-webkit-margin-before:0;margin-block-start:0;margin:var(--menu-container-margin);scrollbar-width:var(--menu-container-scrollbar-width, thin)}.menu-container::-webkit-scrollbar{width:var(--menu-container-common-scroll-width, 4px)}.menu-container::-webkit-scrollbar-thumb{border-radius:var(--menu-container-scroll-border-radius, 2px);border:var(--menu-container-thumb-border, none)}.item-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-align:center;align-items:center;background-color:var(--menu-item-bg-color, inherit);color:var(--menu-item-container-label-color);cursor:pointer;padding:var(--menu-item-container-padding, 9px 8px);white-space:var(--menu-item-white-space, nowrap);gap:var(--menu-item-container-gap, 0)}.item-container.img-reduced-padding{padding:var(--menu-item-container-reduced-padding, 5px 8px)}.item-container.item-container--wrap-text{white-space:var(--menu-item-wrap-text-white-space, wrap);--menu-item-container-padding:8px;min-height:inherit}.icon-label-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-align:center;align-items:center;min-height:inherit}.icon-label-container.item-icon-right{-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-pack:end;justify-content:flex-end}.item-icon{pointer-events:none;--cel-color-base:var(--menu-item-icon-color, #333)}.external-link-icon{padding-left:var(--menu-external-link-icon-left-padding, 8px)}.selected-icon-container{display:-ms-flexbox;display:flex;height:var(--selected-icon-container-height, 12px);width:var(--selected-icon-container-width, 12px);padding:var(--selected-icon-padding)}.selected-icon-container .show{visibility:visible}.selected-icon-container .hide{visibility:hidden}.selected-icon-container-icon-right{--selected-icon-padding:0 4px 0 2px}.item-label{background-color:var(--menu-label-bg-color, inherit);color:var(--menu-item-label-color, #333);font-family:var(--menu-label-font, \"OpenSans-Semibold\");font-size:var(--menu-label-fontSize, 0.875rem);margin-left:var(--menu-label-margin-left, 6px);pointer-events:none;text-overflow:var(--menu-label-text-overflow, none);overflow:var(--menu-label-overflow, none);width:var(--menu-item-label-width, none)}.item-label.item-label--wrap-text{width:var(--menu-label-wrap-text-width, 250px)}.item-label-subtext{color:var(--menu-subtext-color, #333);font-size:var(--menu-subtext-fontSize, 10px);font-family:var(--menu-subtext-font, \"OpenSans\");margin-left:var(--menu-label-margin-left, 6px)}.item-label-subtext-disabled{color:var(--menu-subtext-color, #cdcdcd)}.item-support-button{padding:var(--menu-item-support-button-padding, 8px 8px 8px 0);--small-button-width:max-content;--button-width:var(--menu-support-button-width, none);--button-height:var(--menu-support-button-height, none);--button-padding:var(--menu-support-button-padding, 8px 16px);--button-border-radius:var(--menu-support-button-border-radius, 4px);--button-text-size:var(--menu-support-button-text-size, 1rem);--button-font-family:var(--menu-support-button-font-family, Poppins-Medium)}.item-support-button.left{--button-icon-margin:var(--menu-support-button-icon-left-margin, 0 6px 0 0)}.item-support-button.right{--button-icon-margin:var(--menu-support-button-icon-right-margin, 0 0 0 6px)}.item-support-button.middle{--button-icon-margin:var(--menu-support-button-icon-right-margin, 0 2px 0 0)}.item-label-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.item-label-container-icon-right{padding-right:4px}.item-label-disabled{color:#cdcdcd}.menu-item-list-disabled{cursor:unset}.menu-item-list-disabled .item-container>.icon-label-container>.item-icon,.menu-item-list-disabled .item-container>.item-icon{--cel-color-base:#cdcdcd}.menu-item-list-disabled a>.icon-label-container>.menu-item-img,.menu-item-list-disabled a>.menu-item-img{opacity:0.4}@media (hover: hover){.menu-item-list:hover,.menu-item-list:hover a{background-color:var(--menu-item-bg-hover-color, #EDEDED);color:var(--menu-item-focus-ring-hover-color);cursor:pointer}.menu-item-list:hover .item-container>.item-label-container>.item-label,.menu-item-list:hover a .item-container>.item-label-container>.item-label{color:var(--menu-item-label-hover-color, #333)}.menu-item-list:hover .item-container:hover,.menu-item-list:hover a .item-container:hover{background-color:var(--menu-item-hover-bg-color, inherit)}.menu-item-list:hover .item-container:hover .item-icon,.menu-item-list:hover a .item-container:hover .item-icon{--cel-color-base:var(--menu-item-icon-hover-color, #333)}.menu-item-list-disabled:hover,.menu-item-list-disabled:hover a{cursor:unset;background-color:var(--menu-item-hover-bg-color, #fff)}.menu-item-list-disabled:hover .item-container>.item-label-container>.item-label,.menu-item-list-disabled:hover a .item-container>.item-label-container>.item-label{color:var(--menu-item-label-hover-color, #cdcdcd)}.menu-item-list-disabled:hover .item-container:hover,.menu-item-list-disabled:hover a .item-container:hover{background-color:var(--menu-item-hover-bg-color, inherit)}.menu-item-list-disabled:hover .item-container:hover .item-icon,.menu-item-list-disabled:hover a .item-container:hover .item-icon{--cel-color-base:var(--menu-item-icon-hover-color, #cdcdcd)}}";

const CelMenu = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.itemClicked = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celMenuItemClicked", 7);
    this.parentTargetElementEmitter = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celMenuParentTargetElementEmitter", 7);
    this.closeEvent = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celMenuCloseEvent", 7);
    this.supportButtonClicked = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celMenuSupportButtonClicked", 7);
    this.linkElList = [];
    this.secondaryLinkElList = [];
    this.focusedClassName = 'menu-focused-item';
    this.showTooltip = undefined;
    this.selectedId = undefined;
    this.items = [];
    this.secondaryItemList = [];
    this.truncateLength = 43;
    this.parentTargetElement = null;
    this.supportButtonVariant = _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_7__["C"].SOLID;
    this.supportButtonIconColor = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].WHITE;
    this.supportButtonIconType = _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_7__["a"].MIDDLE;
    this.supportButtonIconSize = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].SMALL;
    this.wrapText = false;
    this.isSupportButtonPresentInItem = false;
    this.openInNewTabLinkText = 'opens a new tab';
    this.currentPageText = 'current page';
    this.endToEndId = 'cel-menu';
    this.upArrowPressed = false;
  }
  connectedCallback() {
    this.cel_icon = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon', 'cel-menu', this.el);
    this.cel_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-button', 'cel-menu', this.el);
  }
  handleFocusNextItemEvent(event, shiftKey) {
    const activeElement = this.el.shadowRoot.activeElement;
    const classListOfSelectedItem = Array.from(activeElement.classList);
    if (activeElement && (classListOfSelectedItem === null || classListOfSelectedItem === void 0 ? void 0 : classListOfSelectedItem.includes('item-container'))) {
      if (activeElement) {
        activeElement.blur();
        activeElement.classList.remove(this.focusedClassName);
        const buttonElement = activeElement.nextSibling;
        if (buttonElement && ((event === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["T"]) || (event === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["e"])) && !shiftKey) {
          this.focusCelButton(buttonElement);
        }
        else {
          this.onFindParentElementOfActiveElement(activeElement, event, shiftKey);
        }
      }
    }
    else if (classListOfSelectedItem === null || classListOfSelectedItem === void 0 ? void 0 : classListOfSelectedItem.includes('item-support-button')) {
      activeElement.shadowRoot.querySelector('button').blur();
      if ((event === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["T"] && shiftKey) || event === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["d"]) {
        this.makeItemFocused(activeElement.previousSibling);
      }
      else {
        this.onFindParentElementOfActiveElement(activeElement, event, shiftKey);
      }
    }
  }
  onFindParentElementOfActiveElement(activeElement, event, shiftKey) {
    const parentElement = activeElement.parentElement;
    if (event === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["e"] || (event === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["T"] && !shiftKey)) {
      this.onMakeItemFocused(parentElement, 'nextSibling');
    }
    else if (event === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["d"] || (event === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["T"] && shiftKey)) {
      this.onMakeItemFocused(parentElement, 'previousSibling');
    }
  }
  onMakeItemFocused(currentActiveItem, siblingElement) {
    const toBeActiveElement = currentActiveItem[siblingElement];
    if (toBeActiveElement) {
      const toBeActiveElementLastChild = toBeActiveElement.lastChild;
      const toBeActiveElementLastChildClassList = Array.from(toBeActiveElementLastChild.classList);
      if (siblingElement === 'previousSibling' && toBeActiveElementLastChildClassList.includes('item-support-button')) {
        this.focusCelButton(toBeActiveElementLastChild);
      }
      else {
        this.makeItemFocused(toBeActiveElement.firstChild);
      }
    }
    else {
      if (siblingElement === 'previousSibling') {
        const toBeActiveElementLastSibling = currentActiveItem.parentElement.lastChild.lastChild;
        const lastSiblingClassList = Array.from(toBeActiveElementLastSibling.classList);
        if (lastSiblingClassList.includes('item-support-button')) {
          this.focusCelButton(toBeActiveElementLastSibling);
        }
        else {
          this.makeItemFocused(toBeActiveElementLastSibling);
        }
      }
      else {
        const toBeActiveElementLastSibling = currentActiveItem.parentElement.firstChild.firstChild;
        this.makeItemFocused(toBeActiveElementLastSibling);
      }
    }
  }
  focusCelButton(celButtonElement) {
    celButtonElement.shadowRoot.querySelector('button').focus();
  }
  makeItemFocused(item) {
    if (item) {
      item.classList.add(this.focusedClassName);
      item.focus();
    }
  }
  componentDidLoad() {
    setTimeout(() => this.focusMenuItemOnOpen(), 0);
    this.onHandleKeyDownEvent();
  }
  focusMenuItemOnOpen() {
    const focusableElements = this.parentULElement.querySelectorAll('.item-container');
    if (focusableElements === null || focusableElements === void 0 ? void 0 : focusableElements.length) {
      const focusableElementsLength = focusableElements === null || focusableElements === void 0 ? void 0 : focusableElements.length;
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElementsLength - 1];
      if (this.upArrowPressed) {
        lastFocusableElement.classList.add(this.focusedClassName);
        lastFocusableElement.focus();
      }
      else {
        firstFocusableElement.classList.add(this.focusedClassName);
        firstFocusableElement.focus();
      }
    }
  }
  onHandleKeyDownEvent() {
    if (this.parentULElement) {
      this.parentULElement.addEventListener('keydown', this.handleKeyDownEvent.bind(this));
    }
  }
  handleKeyDownEvent(event) {
    switch (event.key) {
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["T"]:
        event.preventDefault();
        this.onHandleCloseEvent();
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["e"]:
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["d"]:
        this.handleFocusNextItemEvent(event.key, event.shiftKey);
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["b"]:
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["a"]:
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["S"]:
        event.preventDefault();
        this.handleSpaceEvent(event);
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["E"]:
        this.onHandleCloseEvent();
        break;
    }
  }
  handleSpaceEvent(event) {
    const target = event.target;
    const dataset = target.dataset;
    const classList = Array.from(target.classList);
    if (classList.includes('item-support-button')) {
      if (!dataset.hasOwnProperty("disabled")) {
        this.handleCelButtonClick(event);
      }
    }
    else {
      if ((target === null || target === void 0 ? void 0 : target.ariaDisabled) === 'false') {
        this.itemClicked.emit({ id: dataset['id'], iconName: dataset['iconName'], label: dataset['label'], isExternalLink: dataset['isExternalLink'] ? true : false });
        if (this.parentTargetElement) {
          this.parentTargetElementEmitter.emit(this.parentTargetElement);
        }
      }
    }
  }
  onItemClick(index, isSecondaryItem) {
    const target = isSecondaryItem ? this.secondaryLinkElList[index] : this.linkElList[index];
    const dataset = target.dataset;
    this.itemClicked.emit({ id: dataset['id'], iconName: dataset['iconName'], label: dataset['label'], isExternalLink: dataset['isExternalLink'] ? true : false });
  }
  onHandleCloseEvent() {
    this.closeEvent.emit({ isClose: true, parentTargetElement: this.parentTargetElement });
  }
  disconnectedCallback() {
    this.parentULElement.removeEventListener('keydown', this.handleKeyDownEvent);
  }
  showTitleOnLabelTruncation(label) {
    return this.truncateLength && label.length > this.truncateLength ? label : null;
  }
  formAriaLabel(item) {
    let formedAriaLabel = item.ariaLabel;
    if (!formedAriaLabel) {
      formedAriaLabel = `${item.label} ${item.subtext ? item.subtext : ''} ${item.isExternalLink ? this.openInNewTabLinkText : ''}`;
    }
    formedAriaLabel = `${item.menuItemChecked ? this.currentPageText : ''} ${formedAriaLabel}`;
    return formedAriaLabel;
  }
  handleCelButtonClick(event) {
    this.supportButtonClicked.emit(event.detail);
    this.onHandleCloseEvent();
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2', "data-end-to-end-id": this.endToEndId }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { role: "menu", class: "menu-container", ref: (el) => (this.parentULElement = el) }, this.items.map((menuItem, index) => (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { role: "presentation", class: ['menu-item-list', !!this.wrapText && 'menu-list-item-container--wrap-text',
        menuItem.menuItemDisabled && 'menu-item-list-disabled'].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { ref: (el) => (this.linkElList[index] = el), href: menuItem.href, tabindex: "0", role: "menuitem", "aria-current": menuItem.menuItemChecked ? 'page' : null, "aria-haspopup": menuItem.hasPopup ? 'true' : null, "aria-label": menuItem.ariaLabel ? menuItem.ariaLabel : this.formAriaLabel(menuItem), title: menuItem.menuItemDisabled ? null : this.showTitleOnLabelTruncation(menuItem.label), onClick: menuItem.menuItemDisabled ? null : () => this.onItemClick(index, false), class: [
        'item-container row-start',
        !!menuItem.imgSrc && 'img-reduced-padding',
        !!this.wrapText && 'item-container--wrap-text',
      ].join(' '), "data-id": menuItem.id, onMouseMove: () => { this.selectedId = menuItem.id; }, onFocus: () => { this.selectedId = menuItem.id; }, "data-icon-name": menuItem.iconName, "data-label": menuItem.label, "data-is-external-link": menuItem.isExternalLink ? 'true' : null, target: menuItem.isExternalLink && !menuItem.linkTarget ? '_blank' : menuItem.linkTarget, "aria-disabled": menuItem.menuItemDisabled ? 'true' : 'false', onKeyPress: (event) => this.handleKeyDownEvent(event) }, this.items.find(item => item.menuItemChecked == true) || this.secondaryItemList.find(item => item.menuItemChecked == true) ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: ['selected-icon-container', !!menuItem.setIconRight && 'selected-icon-container-icon-right'].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": 'true', class: menuItem.menuItemChecked ? 'show' : 'hide', "data-name": 'checkmark', "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].XSMALL, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER })) : null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: ['icon-label-container', !!menuItem.setIconRight && 'item-icon-right'].join(' ') }, menuItem.iconName ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": "true", class: "item-icon", "data-name": menuItem.iconName, "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].REGULAR })) : menuItem.imgSrc ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { class: "menu-item-img", src: menuItem.imgSrc, alt: menuItem.imgSrcAltText })) : null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: ['item-label-container', !!menuItem.setIconRight && 'item-label-container-icon-right'].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: ['item-label', !!this.wrapText && 'item-label--wrap-text', menuItem.menuItemDisabled && 'item-label-disabled'].join(' ') }, Object(_truncate_16cfb2aa_js__WEBPACK_IMPORTED_MODULE_5__["t"])(menuItem.label, this.truncateLength)), menuItem.subtext ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: ['item-label-subtext', menuItem.menuItemDisabled && 'item-label-subtext-disabled'].join(' ') }, menuItem.subtext)
      : null)), menuItem.isExternalLink ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": "true", class: "item-icon external-link-icon", "data-name": "maximize", "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].REGULAR })
      : null), menuItem.hasSupportButton ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_button, { class: `item-support-button button ${this.supportButtonIconType}`, "data-identifier": `cm-btn-${menuItem.id}`, "data-label": menuItem.supportButtonLabel, "data-name": menuItem.supportButtonIconName, "data-src": menuItem.supportButtonIconSrc, "data-variant": this.supportButtonVariant, "data-color": this.supportButtonIconColor, "data-icon-type": this.supportButtonIconType, "data-size": this.supportButtonIconSize, "data-button-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["b"].SMALL, "data-button-aria-label": menuItem.supportButtonAriaLabel, "data-disabled": menuItem.supportButtonDisabled, "data-send-target-info-on-button-click": true, "data-button-role": "menuitem", "data-end-to-end-id": `${this.endToEndId}-${menuItem.supportButtonLabel}-support-button` })) : null))), !!this.secondaryItemList &&
      this.secondaryItemList.map((menuItem, itemIndex) => (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { role: "presentation", class: ['menu-item-list', itemIndex === 0 && 'first-secondary-list-item',
          !!this.wrapText && 'menu-list-item-container--wrap-text',
          menuItem.menuItemDisabled && 'menu-item-list-disabled'].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { ref: (el) => (this.secondaryLinkElList[itemIndex] = el), href: menuItem.href, tabindex: "0", role: "menuitem", "data-is-external-link": menuItem.isExternalLink ? 'true' : null, target: menuItem.isExternalLink && !menuItem.linkTarget ? '_blank' : menuItem.linkTarget, "aria-label": menuItem.ariaLabel ? menuItem.ariaLabel : menuItem.label, title: menuItem.menuItemDisabled ? null : this.showTitleOnLabelTruncation(menuItem.label), onClick: menuItem.menuItemDisabled ? null : () => this.onItemClick(itemIndex, true), class: [
          'item-container row-start',
          !!menuItem.imgSrc && 'img-reduced-padding',
          !!this.wrapText && 'item-container--wrap-text'
        ].join(' '), "data-id": menuItem.id, onMouseMove: () => {
          this.selectedId = menuItem.id;
        }, onFocus: () => {
          this.selectedId = menuItem.id;
        }, "data-icon-name": menuItem.iconName, "data-label": menuItem.label, "aria-disabled": menuItem.menuItemDisabled ? 'true' : 'false', onKeyPress: (event) => this.handleKeyDownEvent(event) }, this.items.find(item => item.menuItemChecked == true) || this.secondaryItemList.find(item => item.menuItemChecked == true) ?
        Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: 'selected-icon-container' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": 'true', class: menuItem.menuItemChecked ? 'show' : 'hide', "data-name": 'checkmark', "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].XSMALL, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER })) : null, menuItem.iconName ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": "true", class: "item-icon", "data-name": menuItem.iconName, "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].REGULAR })) : menuItem.imgSrc ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { class: "menu-item-img", src: menuItem.imgSrc, alt: menuItem.imgSrcAltText })) : null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "item-label-container" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: ['item-label', !!this.wrapText && 'item-label--wrap-text', menuItem.menuItemDisabled && 'item-label-disabled'].join(' ') }, Object(_truncate_16cfb2aa_js__WEBPACK_IMPORTED_MODULE_5__["t"])(menuItem.label, this.truncateLength)), menuItem.subtext ?
        Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: ['item-label-subtext', menuItem.menuItemDisabled && 'item-label-subtext-disabled'].join(' ') }, menuItem.subtext)
        : null)), menuItem.hasSupportButton ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_button, { class: `item-support-button button ${this.supportButtonIconType}`, "data-identifier": `cm-btn-secondary-${menuItem.id}`, "data-label": menuItem.supportButtonLabel, "data-name": menuItem.supportButtonIconName, "data-src": menuItem.supportButtonIconSrc, "data-variant": this.supportButtonVariant, "data-color": this.supportButtonIconColor, "data-icon-type": this.supportButtonIconType, "data-size": this.supportButtonIconSize, "data-button-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["b"].SMALL, "data-button-aria-label": menuItem.supportButtonAriaLabel, "data-disabled": menuItem.supportButtonDisabled, "data-send-target-info-on-button-click": true, "data-button-role": "menuitem", "data-end-to-end-id": `${this.endToEndId}-${menuItem.supportButtonLabel}-support-button` })) : null))))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
CelMenu.style = celMenuCss;

const celModalCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:inline-block}.overlay{overflow-x:var(--modal-overlay-overflow-x, none);overflow-y:var(--modal-overlay-overflow-y, auto);position:fixed;width:100vw;height:var(--modal-overlay-height, 100vh);top:0;left:var(--modal-overlay-left, 0);right:var(--modal-overlay-right, 0);background:rgba(0, 0, 0, 0.35);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);z-index:var(--overlay-z-index, 100);display:var(--modal-overlay-display, flex);-ms-flex-align:var(--modal-overlay-align-items, center);align-items:var(--modal-overlay-align-items, center);-ms-flex-pack:var(--modal-overlay-justify-content, center);justify-content:var(--modal-overlay-justify-content, center)}.is-transparent{opacity:0}.modal-window{background-color:var(--modal-background-color, #fff);border-radius:var(--modal-window-border-radius, 4px);width:var(--modal-window-width, 66vw);height:var(--modal-window-height, auto);max-width:var(--modal-window-max-width, none);-webkit-box-shadow:var(--modal-window-box-shadow, 0 3px 5px 0 rgba(0, 0, 0, 0.36));box-shadow:var(--modal-window-box-shadow, 0 3px 5px 0 rgba(0, 0, 0, 0.36));max-height:var(--modal-window-max-height, 75vh);position:absolute;top:var(--modal-window-top, 60px);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:space-evenly;justify-content:space-evenly;overflow:hidden}.top-container{width:100%;height:var(--modal-top-container-height, 100%);font-size:var(--modal-top-container-font-size, 1rem);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-positive:var(--modal-top-container-flex-grow, 0);flex-grow:var(--modal-top-container-flex-grow, 0);-ms-flex-pack:var(--modal-top-container-justify-content, space-between);justify-content:var(--modal-top-container-justify-content, space-between)}.header-container{width:100%;position:relative;display:-ms-flexbox;display:flex;height:var(--modal-header-container-height, auto);max-height:var(--modal-header-container-max-height, auto)}.header-icon{margin-left:var(--modal-header-icon-margin-left, 0);cursor:pointer;-ms-flex-negative:0;flex-shrink:0;top:2px}@media (hover: hover){.header-icon:hover{color:#2150a3}}.header{margin:0;font:var(--modal-title-font-family, \"Poppins-Medium\");color:var(--cel-modal-header-color, #333);font-weight:var(--modal-title-font-weight, 500);-ms-flex-align:var(--modal-title-header-align-items, unset);align-items:var(--modal-title-header-align-items, unset);display:var(--modal-title-header-display, unset)}.close-button{position:absolute;top:9px;right:9px}.body-container{width:100%;height:var(--modal-body-height, 100%);overflow:var(--modal-body-overflow, auto)}.body-container:focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}.borders{background-color:var(--modal-border-color, #f9f9f9);border-top:1px solid var(--modal-border-top, #cdcfd1);border-bottom:1px solid var(--modal-border-bottom, #cdcfd1)}.context{padding:var(--modal-context-padding, 1.125rem);max-height:var(--modal-context-max-height, 28rem);font-family:var(--body-font, \"OpenSans\");width:var(--modal-context-width, auto);color:#333}.title-container{height:auto;width:var(--header-width, 80%);font-size:var(--header-text-size, 1.125rem);font-weight:bold;font-family:var(--header-font-family, \"Poppins-Medium\");padding:var(--header-padding, 0.875rem);margin:var(--header-margin, 0);display:var(--header-display, flex);-ms-flex-pack:var(--header-justify-content, start);justify-content:var(--header-justify-content, start)}.footer-container{width:100%;display:var(--modal-window-footer-container-display, flex);-ms-flex-align:var(--modal-window-footer-container-align-items, flex-start);align-items:var(--modal-window-footer-container-align-items, flex-start);-ms-flex-pack:var(--modal-window-footer-container-justify-content, flex-end);justify-content:var(--modal-window-footer-container-justify-content, flex-end);height:var(--modal-window-footer-container-height, -webkit-fit-content);height:var(--modal-window-footer-container-height, -moz-fit-content);height:var(--modal-window-footer-container-height, fit-content);max-height:var(--modal-window-footer-container-max-height, -webkit-fit-content);max-height:var(--modal-window-footer-container-max-height, -moz-fit-content);max-height:var(--modal-window-footer-container-max-height, fit-content)}.button-container{display:var(--modal-button-container-display, flex);border-radius:4px;-ms-flex-flow:var(--modal-button-container-flex-flow, row wrap);flex-flow:var(--modal-button-container-flex-flow, row wrap);-ms-flex-pack:var(--modal-button-container-justify-content, flex-end);justify-content:var(--modal-button-container-justify-content, flex-end);-ms-flex-align:var(--modal-button-container-align-items, center);align-items:var(--modal-button-container-align-items, center);width:inherit;height:var(--modal-button-container-height, auto);padding:var(--footer-button-padding, 1.125rem);overflow-y:var(--modal-button-container-overflow-y, scroll);max-height:var(--modal-button-container-max-height, none)}.cel-modal-button{padding:var(--cel-modal-button-margin, 0)}.ok-button{margin-left:9px}.blank:focus-within{position:absolute;right:8px;padding:10px;margin:10px}.left-button{margin-right:auto;padding:var(--leftButtonPadding)}@media only screen and (max-width: 576px){.title-container{padding:var(--header-padding-mobile, 0.875rem)}.modal-window{position:var(--modal-window-position-mobile, fixed);bottom:var(--modal-window-mobile-bottom, 0);top:var(--modal-window-mobile-top, 0);left:var(--modal-window-mobile-left, 0);right:var(--modal-window-mobile-right, 0);width:var(--modal-window-width-mobile, auto);height:var(--modal-window-height-mobile, auto);overflow-x:var(--modal-window-overflow-x-mobile, none);overflow-y:var(--modal-window-overflow-y-mobile, auto);border-radius:var(--modal-window-border-radius-mobile, 0);overflow:var(--modal-window-overflow-mobile, hidden);max-height:var(--modal-window-max-height-mobile, none)}.button-container{padding:var(--footer-button-padding-mobile, 0.3rem)}}@media only screen and (min-device-width: 390px) and (max-device-width: 844px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape){.title-container{padding:var(--header-padding-mobile-landscape, 0.875rem)}.modal-window{position:var(--modal-window-position-landscape, fixed);bottom:var(--modal-window-landscape-bottom, 0);top:var(--modal-window-landscape-top, 0);left:var(--modal-window-landscape-left, 0);right:var(--modal-window-landscape-right, 0);width:var(--modal-window-width-landscape, auto);height:auto;overflow-x:var(--modal-window-overflow-x-landscape, none);overflow-y:var(--modal-window-overflow-y-landscape, auto);border-radius:var(--modal-window-border-radius-landscape, 0);overflow:var(--modal-window-overflow-landscape, hidden);max-height:var(--modal-window-max-height-landscape, none)}.button-container{padding:var(--footer-button-padding-mobile, 0.3rem)}.mobile-ok-button{margin-left:0.5rem}}";

const CelModal = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.acceptEvent = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "acceptEvent", 7);
    this.cancelEvent = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "cancelEvent", 7);
    this.closeIconClickEvent = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "closeEvent", 7);
    this.headerIconClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celModalHeaderIconClick", 7);
    this.headerIconEnter = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celModalHeaderIconEnter", 7);
    this.headerIconLeave = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celModalHeaderIconLeave", 7);
    this.leftButtonEvent = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "leftButtonEvent", 7);
    this.leftIconButtonEvent = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "leftIconButtonEvent", 7);
    this.openEvent = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "openModal", 7);
    this.rightIconButtonEvent = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "rightIconButtonEvent", 7);
    this.modalHeaderId = `cel-modal-${modalIds++}`;
    this.focusFirstElement = true;
    this.leftButtonIsInteractive = this.showLeftButton;
    this.cancelIsInteractive = this.showCancel && !this.disableCancelButton;
    this.acceptButtonIsInteractive = !this.hideAccept && !this.disableAcceptButton;
    this.leftIconButtonIsInteractive = this.showLeftIconButton && !this.disableLeftIconButton;
    this.rightIconButtonIsInteractive = this.showRightIconButton && !this.disableRightIconButton;
    this.focusableElementsArray = [];
    this.handleEscapeKeyPress = () => {
      this.cancelEvent.emit(this.identifier);
      this.closeModal();
    };
    this.openModal = () => {
      this.open = true;
      this.openEvent.emit(this.identifier);
    };
    this.closeModal = () => {
      if (!this.disableCancelButton) {
        this.cancelEvent.emit(this.identifier);
        if (this.closeModalOnButtonPress) {
          this.open = false;
        }
        this.focusFirstElement = true;
        if (this.openEl) {
          this.openEl.focus();
        }
      }
    };
    this.acceptModal = () => {
      if (!this.disableAcceptButton) {
        this.acceptEvent.emit(this.identifier);
        if (this.closeModalOnButtonPress) {
          this.open = false;
        }
        this.focusFirstElement = true;
        if (this.openEl) {
          this.openEl.focus();
        }
      }
    };
    this.handleLeftIconButtonClick = () => {
      this.leftIconButtonEvent.emit(this.identifier);
    };
    this.handleRightIconButtonClick = () => {
      this.rightIconButtonEvent.emit(this.identifier);
    };
    this.handleHeaderIconMouseEnter = () => {
      this.headerIconEnter.emit();
    };
    this.handleHeaderIconMouseLeave = () => {
      this.headerIconLeave.emit();
    };
    this.acceptAriaLabel = 'accept modal content';
    this.acceptLabel = 'OK';
    this.modalAriaLabel = undefined;
    this.cancelAriaLabel = 'cancel modal content';
    this.cancelLabel = 'Cancel';
    this.closeIconSize = undefined;
    this.closeModalOnButtonPress = true;
    this.color = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].BLACK;
    this.disableAcceptButton = false;
    this.disableCancelButton = false;
    this.disableCloseButton = false;
    this.disabled = false;
    this.disableLeftIconButton = false;
    this.disableRightIconButton = false;
    this.header = 'Title goes here';
    this.headerIcon = '';
    this.hideAccept = undefined;
    this.hideClose = false;
    this.iconType = undefined;
    this.identifier = 0;
    this.label = 'OK';
    this.lazy = false;
    this.leftButtonAriaLabel = 'back';
    this.leftButtonLabel = 'Back';
    this.leftIconButtonLabel = 'Next';
    this.message = '';
    this.mobile = false;
    this.name = undefined;
    this.open = false;
    this.overlayCloseModal = true;
    this.removeIconInRightButton = false;
    this.regionAriaLabel = 'content';
    this.restrict = false;
    this.rightIconButtonLabel = 'Back';
    this.showCancel = true;
    this.showLeftButton = false;
    this.showLeftIconButton = false;
    this.showOpen = true;
    this.showRightIconButton = false;
    this.size = undefined;
    this.small = false;
    this.src = undefined;
    this.transparent = false;
    this.variant = _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_7__["C"].SOLID;
    this.closeButtonTooltipLabel = 'Close';
    this.refocusFirstEl = false;
    this.headerTooltipLabel = '';
  }
  connectedCallback() {
    this.cel_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-button', 'cel-modal', this.el);
    this.cel_icon_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon-button', 'cel-modal', this.el);
  }
  /** on modal's first render check to see if modal is open, focus the first element  */
  componentDidLoad() {
    if (this.open) {
      this.focusableElementsArray = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["a"])(this.windowEl);
      Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["f"])(this.firstEl);
    }
    if (this.showOpen) {
      this.openEl = this.hostEl.shadowRoot.querySelector(`[data-button-type=${_constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["O"]}]`).shadowRoot.querySelector('button');
    }
  }
  /** if the modal re renders, focus the first element  */
  componentDidUpdate() {
    if (this.open && this.focusFirstElement) {
      Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["f"])(this.firstEl);
      this.focusFirstElement = false;
    }
  }
  refocusFirstFocusable() {
    Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["f"])(this.firstEl);
  }
  /**
   * listener to open modal via event
   */
  openModalListener() {
    this.open = true;
  }
  /**
   * listener to trap tab-related navigation within modal and escape out of modal via 'esc' key
   */
  handleTabDown(ev) {
    if (this.open && this.windowEl) {
      this.focusableElementsArray = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["a"])(this.windowEl);
      let keyboardActionsObject = {
        escape: () => this.handleEscapeKeyPress(),
      };
      Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["b"])(ev, this.windowEl, this.focusableElementsArray, keyboardActionsObject);
    }
  }
  /**
   * listener to close modal on overlay click
   */
  handleClick(event) {
    if (this.open && this.overlayCloseModal) {
      if (event.composedPath()[0] == this.overlayEl) {
        this.open = false;
        this.focusFirstElement = true;
        this.cancelEvent.emit(this.identifier);
      }
    }
  }
  handleCloseIconClick() {
    this.closeIconClickEvent.emit(this.identifier);
    if (this.closeModalOnButtonPress && !this.disableCloseButton) {
      this.open = false;
      this.focusFirstElement = true;
      if (this.openEl) {
        this.openEl.focus();
      }
    }
  }
  ;
  handleButtonClick(event) {
    const btnType = event.detail;
    switch (btnType) {
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["O"]:
        this.openModal();
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["k"]:
        this.handleLeftIconButtonClick();
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["L"]:
        this.leftButtonEvent.emit();
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["j"]:
        this.acceptModal();
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["R"]:
        this.handleRightIconButtonClick();
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["C"]:
        this.closeModal();
        break;
    }
    if (event.detail.buttonType === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["l"]) {
      this.handleCloseIconClick();
    }
    else if (event.detail.buttonType === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["m"]) {
      this.headerIconClick.emit();
    }
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2', ref: (el) => (this.hostEl = el) }, !!this.showOpen && (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_button, { "data-button-type": _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["O"], "data-variant": this.variant, "data-color": this.color, "data-icon-type": this.iconType, "data-size": this.size, "data-lazy": this.lazy, "data-button-size": this.small ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["b"].SMALL : _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["b"].MEDIUM, "data-restrict": this.restrict, "data-disabled": this.disabled, "data-label": this.label, "data-name": this.name, "data-src": this.src, "data-has-popup": true })), !!this.open && (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { tabindex: "-1", ref: (el) => (this.overlayEl = el), class: ['overlay center ', this.transparent ? 'is-transparent' : ''].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { ref: (el) => (this.windowEl = el), class: [this.mobile ? 'modal-window modal-window--mobile' : 'modal-window', 'col-between'].join(' '), role: "dialog", "aria-labelledby": this.modalHeaderId }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-container" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "title-container" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", { id: this.modalHeaderId, class: "header" }, this.header, this.headerIcon ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { "data-tooltip-label": this.headerTooltipLabel ? this.headerTooltipLabel : null, "aria-hidden": "true", class: "header-icon interactive", "data-name": this.headerIcon, "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].REGULAR, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER, onMouseEnter: () => this.handleHeaderIconMouseEnter(), onMouseLeave: () => this.handleHeaderIconMouseLeave(), "data-button-type": _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["m"], ref: (el) => this.firstEl = el })) : null)), this.hideClose ? null :
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { class: "close-button interactive", "data-tooltip-label": this.closeButtonTooltipLabel, "data-name": 'close', "data-disabled": this.disableCloseButton, "data-size": this.closeIconSize, "data-button-type": _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["l"], ref: (el) => !this.headerIcon ? this.firstEl = el : null })), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { ref: this.hideClose ? (el) => this.firstEl = el : null, role: "region", "aria-label": this.regionAriaLabel, tabindex: 0, class: ['body-container interactive', this.message ? '' : 'borders'].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['context'].join(' ') }, this.message ? Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { innerHTML: this.message }) : '', Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer-container row-end" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: [
        this.mobile
          ? ['button-container button-container--mobile', !this.showCancel ? 'row-end' : 'row-between'].join(' ')
          : 'button-container row-end',
      ].join(' ') }, !!this.showLeftButton &&
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_button, { "data-button-type": _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["L"], class: ['left-button cel-modal-button interactive',
        ].join(' '), "data-variant": _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_7__["C"].OUTLINE, "data-label": this.leftButtonLabel, "data-button-aria-label": this.leftButtonAriaLabel }), !!this.showCancel &&
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_button, { "data-button-type": _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["C"], "data-variant": _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_7__["C"].TEXT, "data-label": this.cancelLabel, "data-button-aria-label": this.cancelAriaLabel, "data-disabled": this.disableCancelButton, class: 'cancel-button cel-modal-button interactive' }), !this.hideAccept &&
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_button, { "data-button-type": _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["j"], "data-variant": _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_7__["C"].SOLID, "data-label": this.acceptLabel, "data-button-aria-label": this.acceptAriaLabel, "data-disabled": this.disableAcceptButton, class: "interactive ok-button cel-modal-button" }), !!this.showLeftIconButton &&
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_button, { "data-button-type": _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["k"], class: 'interactive cel-modal-button', "data-variant": 'outline', "data-color": 'primary', "data-icon-type": 'left', "data-label": this.leftIconButtonLabel, "data-name": 'caret-left', "data-disabled": this.disableLeftIconButton }), !!this.showRightIconButton &&
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_button, { "data-button-type": _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["R"], "data-variant": 'outline', "data-color": 'primary', "data-icon-type": this.removeIconInRightButton ? '' : 'right', "data-label": this.rightIconButtonLabel, "data-name": 'caret-right', "data-disabled": this.disableRightIconButton, class: "interactive ok-button cel-modal-button" }))))))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "refocusFirstEl": ["refocusFirstFocusable"]
  }; }
};
let modalIds = 0;
CelModal.style = celModalCss;

const celModalWindowCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:inline-block}.overlay{overflow-x:var(--modal-overlay-overflow-x, none);overflow-y:var(--modal-overlay-overflow-y, auto);position:fixed;width:100vw;height:var(--modal-overlay-height, 100vh);top:0;left:var(--modal-overlay-left, 0);right:var(--modal-overlay-right, 0);background:rgba(0, 0, 0, 0.35);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);z-index:var(--modal-overlay-z-index, 2147483638);display:var(--modal-window-overlay-display, flex);-ms-flex-align:var(--modal-window-overlay-align-items, center);align-items:var(--modal-window-overlay-align-items, center);-ms-flex-pack:var(--modal-window-overlay-justify-content, center);justify-content:var(--modal-window-overlay-justify-content, center)}.is-transparent{opacity:0}.modal-window{background-color:var(--modal-background-color, #fff);border-radius:var(--modal-window-border-radius, 4px);width:var(--modal-window-width, 44vw);height:var(--modal-window-height, auto);max-width:var(--modal-window-max-width, none);max-height:var(--modal-window-max-height, 75vh);position:absolute;top:var(--modal-window-top);-webkit-box-shadow:var(--modal-window-box-shadow, 0 3px 5px 0 rgba(0, 0, 0, 0.36));box-shadow:var(--modal-window-box-shadow, 0 3px 5px 0 rgba(0, 0, 0, 0.36));display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;overflow:var(--modal-window-overflow, hidden)}.modal-window.three-buttons{width:var(--modal-window-width, 66vw)}@media only screen and (max-width: 991px){.modal-window:has(.center-footer-content){max-height:var(--modal-window-max-height, 80vh)}.modal-window:has(.center-footer-content)>.body-container>.header-container .title-container{padding:8px 14px}.modal-window:has(.center-footer-content)>.body-container>.header-container .close-button{top:4px}}@media only screen and (max-width: 576px){.modal-window{position:var(--modal-window-position-mobile, fixed);bottom:var(--modal-window-mobile-bottom, 0);top:var(--modal-window-mobile-top, 0);left:var(--modal-window-mobile-left, 0);right:var(--modal-window-mobile-right, 0);width:var(--modal-window-width-mobile, auto);height:var(--modal-window-height-mobile, 100vh);overflow-x:var(--modal-window-overflow-x-mobile, none);overflow-y:var(--modal-window-overflow-y-mobile, auto);border-radius:var(--modal-window-border-radius-mobile, 0);overflow:var(--modal-window-overflow-mobile, hidden);max-height:var(--modal-window-max-height-mobile, 100%);width:100%}}.left-button{margin-right:var(--modal-widow-left-button-margin-right, auto);padding:var(--modal-window-left-button-padding)}.top-container{width:100%;height:var(--modal-top-container-height, 100%);font-size:1rem;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-positive:var(--modal-top-container-flex-grow, 0);flex-grow:var(--modal-top-container-flex-grow, 0);-ms-flex-pack:justify;justify-content:space-between}.header-container{width:100%;position:relative;display:-ms-flexbox;display:flex;height:var(--modal-window-header-container-height, auto);max-height:var(--modal-window-header-container-max-height, auto);background:#fff}.header-container.borders{border-bottom:1px solid var(--modal-border-bottom, #cdcfd1)}@media only screen and (max-width: 576px){.header-container{padding:var(--header-padding-mobile, 0)}}.header-icon{margin-left:var(--modal-header-icon-margin-left, 0);cursor:pointer;-ms-flex-negative:0;flex-shrink:0;top:2px}@media (hover: hover){.header-icon:hover{color:#2150a3}}.header{margin:0;font:var(--modal-title-font-family, \"Poppins-Medium\");color:var(--cel-modal-header-color, #333);font-weight:var(--modal-title-font-weight, 500);-ms-flex-align:var(--modal-title-header-align-items, unset);align-items:var(--modal-title-header-align-items, unset);display:var(--modal-title-header-display, unset)}.close-button{position:absolute;top:9px;right:9px}.body-container{width:100%;height:var(--modal-body-height, 100%);overflow:var(--modal-body-overflow, hidden);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:var(--modal-body-justify-content, space-between);justify-content:var(--modal-body-justify-content, space-between)}.body-container.borders{background-color:var(--modal-border-color, #f9f9f9)}@media only screen and (max-width: 576px){.body-container{display:unset;overflow-y:auto}}.body-container:focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}.context{color:var(--modal-window-context-color, #333);padding:var(--modal-context-padding, 18px);font-family:var(--body-font, \"OpenSans\");width:var(--modal-context-width, auto);overflow-y:var(--modal-context-overflow-y, auto);height:var(--modal-context-height, auto)}.context:focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px);border:none}@media only screen and (max-width: 576px){.context{height:auto;max-height:auto}}.message{margin:0;display:inherit}.title-container{width:var(--header-width, 80%);font-size:var(--header-text-size, 1.125rem);font-weight:bold;font-family:var(--header-font-family, \"Poppins-Medium\");padding:var(--header-padding, 14px);margin:var(--header-margin, 0);display:var(--header-display, flex);-ms-flex-pack:var(--header-justify-content, start);justify-content:var(--header-justify-content, start)}.footer-container{width:100%;display:var(--modal-window-footer-container-display, flex);-ms-flex-align:var(--modal-window-footer-container-align-items, flex-start);align-items:var(--modal-window-footer-container-align-items, flex-start);-ms-flex-pack:var(--modal-window-footer-container-justify-content, flex-end);justify-content:var(--modal-window-footer-container-justify-content, flex-end);height:var(--modal-window-footer-container-height, -webkit-fit-content);height:var(--modal-window-footer-container-height, -moz-fit-content);height:var(--modal-window-footer-container-height, fit-content);max-height:var(--modal-window-footer-container-max-height, 75px)}.footer-container.borders{border-top:1px solid var(--modal-border-top, #cdcfd1)}.ok-button{padding-left:9px}.button-container{width:100%;padding:var(--footer-button-padding, 18px);display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:end;justify-content:flex-end;--button-white-space:nowrap}@media only screen and (max-width: 576px){.button-container{padding:var(--footer-button-padding-mobile, 4px)}}.button-container--mobile{width:var(--mobile-footer-button-container-width, 100%)}.blank:focus-within{position:absolute;right:8px;padding:10px;margin:10px}@media only screen and (max-width: 576px){.title-container{padding:var(--header-padding-mobile, 14px)}.modal-window,.modal-window.three-buttons,.modal-window:has(.center-footer-content){position:var(--modal-window-position-mobile, fixed);bottom:var(--modal-window-mobile-bottom, 0);top:var(--modal-window-mobile-top, 0);left:var(--modal-window-mobile-left, 0);right:var(--modal-window-mobile-right, 0);width:var(--modal-window-width-mobile, auto);height:var(--modal-window-height-mobile, auto);overflow-x:var(--modal-window-overflow-x-mobile, none);overflow-y:var(--modal-window-overflow-y-mobile, auto);border-radius:var(--modal-window-border-radius-mobile, 0);overflow:var(--modal-window-overflow-mobile, hidden);max-height:var(--modal-window-max-height-mobile, none);width:100%}.mobile-ok-button{margin-left:8px}}@media only screen and (min-device-width: 390px) and (max-device-width: 844px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape){.title-container{padding:var(--header-padding-mobile-landscape, 14px)}.modal-window,.modal-window.three-buttons{position:var(--modal-window-position-landscape, fixed);bottom:var(--modal-window-landscape-bottom, 0);top:var(--modal-window-landscape-top, 0);left:var(--modal-window-landscape-left, 0);right:var(--modal-window-landscape-right, 0);width:var(--modal-window-width-landscape, auto);height:auto;overflow-x:var(--modal-window-overflow-x-landscape, none);overflow-y:var(--modal-window-overflow-y-landscape, auto);border-radius:var(--modal-window-border-radius-landscape, 0);overflow:var(--modal-window-overflow-landscape, hidden);max-height:var(--modal-window-max-height-landscape, none);width:100%}.mobile-ok-button{margin-left:8px}.button-container{padding:var(--footer-button-padding-mobile, 4px)}}@media only screen and (min-device-width: 390px) and (max-device-width: 844px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) and (max-width: 576px){.button-container{padding:var(--footer-button-padding-mobile, 4px)}}footer.hidden-footer{margin:16px;height:16px;width:16px;border-radius:4px}footer.hidden-footer:focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}.center-footer-content .button-container{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column;gap:var(--modal-window-centered-buttons-gap, 10px);--button-width:100%;--loader-button-width:100%;--button-height:var(--modal-window-centered-buttons-height, 36px);width:100%}.center-footer-content .button-container .cancel-button,.center-footer-content .button-container .left-button{--text-button-bg-color:var(--modal-window-centered-buttons-cancel-bg-color, #f3f3f3);--text-button-disabled-bg-color:#f3f3f3;--text-button-disabled-font-color:#939393;--text-button-bg-color-hover:#e2e2e2}.center-footer-content .ok-button{padding-left:0}.center-footer-content .left-button{margin-right:0}.center-footer-content.footer-container{max-height:var(--modal-window-footer-container-max-height, 160px);-ms-flex-pack:center;justify-content:center}";

const CelModalWindow = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.acceptEvent = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celModalAcceptEvent", 7);
    this.cancelEvent = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celModalCancelEvent", 7);
    this.leftButtonEvent = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "leftButtonEvent", 7);
    this.closeIconClickEvent = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celModalCloseEvent", 7);
    this.headerIconEnter = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celModalHeaderIconEnter", 7);
    this.headerIconLeave = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celModalHeaderIconLeave", 7);
    this.overlayEvent = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celModalOverlayEvent", 7);
    this.headerIconClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celModalHeaderIconClick", 7);
    this.modalWindowId = `cel-modal-window-${modalWindowIds++}`;
    this.focusableElementsArray = [];
    this.footerButtonsWidth = 0;
    this.escapeEvent = () => {
      this.cancelEvent.emit(this.identifier);
    };
    this.acceptModal = () => {
      if (this.displayLoadingState)
        return;
      this.acceptEvent.emit(this.identifier);
      if (this.returnFocus) {
        this.returnFocusToTriggerElement();
      }
    };
    this.cancelModal = () => {
      if (this.displayLoadingState)
        return;
      if (this.returnFocus) {
        this.returnFocusToTriggerElement();
      }
      this.cancelEvent.emit(this.identifier);
    };
    this.handleOverlayClick = () => {
      this.overlayEvent.emit(this.identifier);
    };
    this.handleHeaderIconMouseEnter = () => {
      this.headerIconEnter.emit();
    };
    this.handleHeaderIconMouseLeave = () => {
      this.headerIconLeave.emit();
    };
    this.showFooterButtonsInCenter = false;
    this.isFirstLoad = true;
    this.acceptAriaLabel = 'Ok';
    this.acceptLabel = 'OK';
    this.cancelAriaLabel = 'Cancel';
    this.cancelLabel = 'Cancel';
    this.headerTooltipLabel = '';
    this.customContent = '';
    this.disableAcceptButton = false;
    this.disableCloseButton = false;
    this.displayLoadingState = false;
    this.modalAriaLabel = 'modal';
    this.header = 'Title goes here';
    this.headerIcon = '';
    this.hideAccept = undefined;
    this.hideClose = undefined;
    this.closeIconSize = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].MEDIUM;
    this.identifier = 0;
    this.message = '';
    this.mobile = false;
    this.regionAriaLabel = 'content';
    this.returnFocus = undefined;
    this.showCancel = true;
    this.cancelDisabled = false;
    this.showLeftButton = false;
    this.leftButtonConfig = undefined;
    this.transparent = false;
    this.closeButtonTooltipLabel = 'Close';
    this.refocusFirstEl = false;
    this.endToEndId = 'cel-modal-window';
  }
  connectedCallback() {
    this.cel_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-button', 'cel-modal-window', this.el);
    this.cel_icon_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon-button', 'cel-modal-window', this.el);
  }
  /**
   * listener to trap tab-related navigation within modal and escape out of modal via 'esc' key
   */
  handleTabDown(event) {
    this.modalWindowKeyboardActionObject = {
      escape: () => this.escapeEvent(),
    };
    Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["b"])(event, this.el, this.focusableElementsArray, this.modalWindowKeyboardActionObject);
  }
  /** on modal's first load set the leftButtonConfig default values if they are not defined */
  componentWillLoad() {
    if (this.isFirstLoad) {
      this.leftButtonConfig = !this.leftButtonConfig ? { label: 'Back', ariaLabel: 'Back', variant: _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_7__["C"].TEXT, disabled: false } : this.leftButtonConfig;
      this.isFirstLoad = false;
    }
  }
  /** on modal's first render check to see if modal is open, focus available interactive element  */
  componentDidLoad() {
    if (this.el) {
      let elementsArray = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["a"])(this.el);
      this.footerButtonsWidth = this.calculateFooterButtonsWidth();
      this.focusableElementsArray = elementsArray;
      Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["f"])(this.firstEl);
      this.checkIfButtonsInFooterNeedToBeCentered();
    }
  }
  componentDidUpdate() {
    if (this.el && !this.showFooterButtonsInCenter) {
      this.footerButtonsWidth = this.calculateFooterButtonsWidth();
    }
  }
  refocusFirstFocusable() {
    Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["f"])(this.firstEl);
  }
  handleCloseIconClick() {
    if (this.displayLoadingState)
      return;
    this.closeIconClickEvent.emit(this.identifier);
    if (this.returnFocus) {
      this.returnFocusToTriggerElement();
    }
  }
  ;
  returnFocusToTriggerElement() {
    const returnElement = document.querySelector(`${`[data-identifier=${this.returnFocus}]`}`);
    const nestedReturnElement = document.querySelector(`${`[data-identifier=${this.returnFocus}]`}`).shadowRoot.querySelector(`${`[data-identifier=${this.returnFocus}]`}`);
    if (nestedReturnElement) {
      nestedReturnElement.shadowRoot.querySelector('button').focus();
    }
    else if (returnElement.shadowRoot) {
      returnElement.shadowRoot.querySelector('button').focus();
    }
    else {
      returnElement.focus();
    }
  }
  handleButtonClick(event) {
    const btnType = event.detail;
    // for cel buttons
    switch (btnType) {
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["C"]:
        this.cancelModal();
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["j"]:
        this.acceptModal();
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["L"]:
        this.leftButtonEvent.emit();
        break;
    }
    // for cel icon button
    if (event.detail.buttonType === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["l"]) {
      this.handleCloseIconClick();
    }
    else if (event.detail.buttonType === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["m"]) {
      this.headerIconClick.emit();
    }
  }
  handleResize() {
    this.checkIfButtonsInFooterNeedToBeCentered();
  }
  checkIfButtonsInFooterNeedToBeCentered() {
    const footerElement = this.overlayEl.querySelector('.footer-container');
    const buttonContainerElement = this.overlayEl.querySelector('.button-container');
    if (footerElement) {
      const footerWidth = footerElement.getBoundingClientRect().width;
      const ButtonContainerWidth = buttonContainerElement.getBoundingClientRect().width;
      const ButtonContainerWidthUnpadded = this.getElementWidthWithoutPadding(buttonContainerElement);
      if (ButtonContainerWidthUnpadded <= this.footerButtonsWidth || footerWidth < ButtonContainerWidth) {
        this.showFooterButtonsInCenter = true;
      }
      else {
        this.showFooterButtonsInCenter = false;
      }
    }
  }
  getElementWidthWithoutPadding(element) {
    let computedStyle = getComputedStyle(element);
    let elementWidth = element.clientWidth; // width with padding
    elementWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
    return elementWidth;
  }
  calculateFooterButtonsWidth() {
    const footerButtons = this.overlayEl.querySelector('.footer-container').querySelectorAll('.interactive');
    if (footerButtons) {
      let footerButtonsWidth = 0;
      footerButtons.forEach(footerButton => {
        footerButtonsWidth += footerButton.getBoundingClientRect().width;
      });
      return footerButtonsWidth;
    }
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2', "data-end-to-end-id": this.endToEndId }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { ref: (el) => (this.overlayEl = el), tabindex: "-1", class: ['overlay center ', this.transparent ? 'is-transparent' : ''].join(' '), onClick: () => this.handleOverlayClick() }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { role: "dialog", ref: (el) => (this.windowEl = el), "aria-label": this.header !== '' ? this.header : this.modalAriaLabel, class: `modal-window ${this.showLeftButton && this.showCancel && !this.hideAccept ? 'three-buttons' : ''}` }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['body-container', this.message ? '' : 'borders'].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['header-container', this.message ? '' : 'borders'].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "title-container" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", { id: this.modalWindowId, class: "header" }, this.header, this.headerIcon ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { "data-tooltip-label": this.headerTooltipLabel ? this.headerTooltipLabel : null, class: "header-icon interactive", "data-name": this.headerIcon, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER, onMouseEnter: () => this.handleHeaderIconMouseEnter(), onMouseLeave: () => this.handleHeaderIconMouseLeave(), "data-end-to-end-id": `${this.endToEndId}-header-icon`, "data-button-type": _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["m"], "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].REGULAR, ref: (el) => this.firstEl = el })) : null)), this.hideClose ? null :
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { class: "close-button focusable-element interactive", "data-tooltip-label": this.closeButtonTooltipLabel, "data-name": "close", "data-size": this.closeIconSize, "data-disabled": this.displayLoadingState || this.disableCloseButton, "data-color": this.displayLoadingState || this.disableCloseButton ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].DISABLED : _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER, "data-button-type": _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["l"], "data-end-to-end-id": `${this.endToEndId}-close-button`, ref: (el) => !this.headerIcon ? this.firstEl = el : null })), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { ref: this.hideClose && this.headerIcon === '' ? (el) => this.firstEl = el : null, role: "region", "aria-label": this.regionAriaLabel, tabindex: 0, class: ['context interactive'].join(' '), innerHTML: this.customContent ? this.customContent : null }, this.message ? Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: 'message' }, this.message) : null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: `footer-container ${this.showFooterButtonsInCenter ? 'center-footer-content' : ''} ${this.message ? '' : 'borders'}` }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: [
        this.mobile
          ? ['button-container button-container--mobile', !this.showCancel ? 'row-end' : 'row-between'].join(' ')
          : 'button-container row-end',
      ].join(' ') }, this.showLeftButton ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_button, { "data-button-type": _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["L"], class: `left-button interactive ${this.leftButtonConfig.disabled ? 'left-button-disabled' : ''}`, "data-variant": this.leftButtonConfig.variant, "data-label": this.leftButtonConfig.label, "data-button-aria-label": this.leftButtonConfig.ariaLabel, "data-disabled": this.leftButtonConfig.disabled, "data-end-to-end-id": `${this.endToEndId}-${this.leftButtonConfig.label}-button` }) : null, this.showCancel ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_button, { "data-button-type": _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["C"], "data-variant": _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_7__["C"].TEXT, "data-label": this.cancelLabel, "data-button-aria-label": this.cancelAriaLabel, "data-disabled": this.cancelDisabled || this.displayLoadingState, class: "cancel-button interactive", "data-end-to-end-id": `${this.endToEndId}-cancel-button` })
      : null, this.hideAccept ? null :
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_button, { "data-variant": _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_7__["C"].SOLID, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].WHITE, "data-name": this.displayLoadingState ? 'spinner' : null, "data-pulse": this.displayLoadingState ? true : null, "data-icon-type": this.displayLoadingState ? _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_7__["a"].MIDDLE : null, "data-button-type": _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["j"], "data-label": this.displayLoadingState ? null : this.acceptLabel, "data-button-aria-label": this.acceptAriaLabel, "data-disabled": this.disableAcceptButton || this.displayLoadingState ? 'true' : 'false', "data-display-loading-state": this.displayLoadingState, class: `ok-button focusable-element interactive ${this.displayLoadingState ? 'display-loading' : ''}`, "data-end-to-end-id": `${this.endToEndId}-accept-button`, "data-show-loader": this.displayLoadingState })), !this.showCancel && this.hideAccept ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("footer", { class: "interactive hidden-footer", tabindex: 0, "aria-label": "end of dialog" }) : null)))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "refocusFirstEl": ["refocusFirstFocusable"]
  }; }
};
let modalWindowIds = 0;
CelModalWindow.style = celModalWindowCss;

const celMultiPictureBoxCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}.header{line-height:var(--headerLineHeight, 18px);width:var(--headerWidth, auto);height:var(--headerHeight, auto);font-family:var(--headerFontFamily, \"OpenSans-Semibold\");font-size:var(--headerFontSize, --font-size-small)}.header:focus-visible{outline:2px solid #8db2f1}.img-picture-box{border:var(--pictureBoxBorder, none);width:var(--imageWidth, 112px);height:var(--imageHeight, 72px);cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}img.img-picture-box:focus-visible,.picture-box-list-item{outline:none}.picture-box-list{-ms-flex-wrap:wrap;flex-wrap:wrap;overflow-x:hidden;width:100%;margin:6px 0 0 0;display:-ms-flexbox;display:flex;padding-top:var(--cel-multi-picture-box-list-padding-top, 1px);padding-left:var(--cel-multi-picture-box-list-padding-left, 1px)}.picture-box{padding:1px}.picture-box.selected-picture-box{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;outline-width:2px;outline-style:var(--focus-ring-outline-style, solid);outline-color:#006be0;outline-offset:1px}.picture-box-list-item{margin:var(--cel-multi-picture-box-item-margin, 0 6px 6px 0);display:inline-block;padding:var(--cel-multi-picture-box-item-padding, 2px);vertical-align:var(--multi-dropdown-toggle-vertical-align, top);position:relative}.cel-icon-picture-box{height:17px;position:absolute;bottom:3px;left:3px;right:3px;text-align:center;background:#006be0}.multi-picture-box{outline:none;margin-top:var(--sectionMarginTop, 16px)}";

const CelMultiPictureBox = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.celChange = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celMutliPictureBoxChange", 7);
    this.cel_multi_picture_box_id = `cel-multi-picture-box-id-${++multiPictureBoxIdCounter}`;
    this.handleClick = (index) => {
      this.selectedIndex = index;
      this.focusedIndex = index;
      this.onChangeEvent(index);
    };
    this.handleHeaderFocus = () => {
      this.focusedIndex = -2;
    };
    this.defaultSelectedIndex = 0;
    this.header = undefined;
    this.headerAriaLevel = '2';
    this.thumbnailUrlList = [];
    this.focusedIndex = -1;
    this.selectedIndex = 0;
  }
  /** on components first render user selected picture is selected */
  componentDidLoad() {
    this.selectedIndex = this.defaultSelectedIndex;
    this.focusedIndex = this.defaultSelectedIndex;
    const tdNodeList = this.getAllItemsBySelector();
    const selectedItem = tdNodeList[this.selectedIndex];
    if (selectedItem) {
      selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.focus();
      selectedItem.tabIndex = 0;
    }
    else {
      const firstItem = tdNodeList[0];
      if (firstItem) {
        firstItem.tabIndex = 0;
      }
    }
  }
  connectedCallback() {
    this.cel_icon = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon', 'cel-multi-picture-box', this.el);
  }
  /**
   * listener to trap Tab, Arrow keys to navigate between picture box
   * listener to trap Enter and Spacebar to select the picture box
   */
  handleTabDown(event) {
    var inputElementArray = [];
    const tdNodeList = this.getAllItemsBySelector();
    tdNodeList === null || tdNodeList === void 0 ? void 0 : tdNodeList.forEach((celTd) => {
      inputElementArray.push(celTd);
    });
    const inputArrayLength = this.thumbnailUrlList.length;
    const previousIndex = (this.focusedIndex - 1 + inputArrayLength) % inputArrayLength;
    const nextIndex = (this.focusedIndex + 1) % inputArrayLength;
    switch (event.key) {
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["b"]:
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["S"]:
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["a"]:
        if (this.focusedIndex >= 0) {
          event.preventDefault();
          if (inputElementArray[this.selectedIndex]) {
            inputElementArray[this.selectedIndex].ariaChecked = 'false';
          }
          this.selectedIndex = this.focusedIndex;
          if (inputElementArray[this.selectedIndex]) {
            inputElementArray[this.selectedIndex].ariaChecked = 'true';
          }
          this.onChangeEvent(this.focusedIndex);
        }
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["A"]:
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["e"]:
        event.preventDefault();
        if (this.focusedIndex < inputArrayLength - 1) {
          this.onNavigation(inputElementArray);
        }
        this.focusedIndex = this.selectedIndex = nextIndex;
        this.handleClick(this.selectedIndex);
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["c"]:
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["d"]:
        event.preventDefault();
        if (this.focusedIndex > 0) {
          this.onNavigation(inputElementArray, false);
        }
        this.focusedIndex = this.selectedIndex = previousIndex;
        this.handleClick(this.selectedIndex);
        break;
    }
  }
  onNavigation(items, isIncrement = true) {
    const currentFocusedIndex = this.focusedIndex;
    if (isIncrement) {
      this.focusedIndex++;
    }
    else {
      this.focusedIndex--;
    }
    this.putFocusOnAvailableItemOnNavigation(items, currentFocusedIndex, 0);
  }
  getAllItemsBySelector() {
    var _a, _b;
    return (_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelectorAll('.img-picture-box');
  }
  putFocusOnAvailableItemOnNavigation(items, currentFocusedIndex, tabIndexValue) {
    var _a;
    if (items[currentFocusedIndex]) {
      items[currentFocusedIndex].tabIndex = -1;
    }
    if (items[this.focusedIndex]) {
      (_a = items[this.focusedIndex]) === null || _a === void 0 ? void 0 : _a.focus();
      items[this.focusedIndex].tabIndex = tabIndexValue;
      this.onChangeEvent(this.focusedIndex);
    }
  }
  onChangeEvent(index) {
    this.celChange.emit(index);
  }
  render() {
    let thumbnailUrlItems = [];
    this.thumbnailUrlList.length > 0
      ? this.thumbnailUrlList.forEach((item, index) => {
        const elementNumber = index;
        const altText = item.altText ? item.altText : `${this.header} ${elementNumber}`;
        thumbnailUrlItems.push(Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { role: 'radio', "aria-label": altText, tabindex: this.selectedIndex === index ? '0' : '-1', "aria-checked": this.focusedIndex === index ? 'true' : 'false', onClick: () => this.handleClick(index), class: 'picture-box-list-item' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { role: 'none', class: {
            'selected-picture-box': this.selectedIndex === index,
            'picture-box': true,
          } }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { alt: altText, title: altText, class: 'img-picture-box', src: item.url })), this.selectedIndex === index ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { role: 'none', class: 'cel-icon-picture-box' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { role: 'none', dialogCloseIconRole: 'none', "aria-hidden": 'true', class: 'cel-icon', name: 'checkmark', color: _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].WHITE, size: _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].SMALL }))) : null));
      })
      : null;
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, thumbnailUrlItems.length ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: 'multi-picture-box' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { id: this.cel_multi_picture_box_id, role: 'heading', "aria-level": this.headerAriaLevel, onFocus: () => this.handleHeaderFocus, class: 'header' }, this.header), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'picture-box-list', role: 'radiogroup', "aria-labelledby": this.cel_multi_picture_box_id }, thumbnailUrlItems))) : ('')));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
let multiPictureBoxIdCounter = 0;
CelMultiPictureBox.style = celMultiPictureBoxCss;

var MultiDropdownAlignment;
(function (MultiDropdownAlignment) {
  MultiDropdownAlignment["LEFT"] = "left";
  MultiDropdownAlignment["RIGHT"] = "right";
  MultiDropdownAlignment["CENTER"] = "center";
  MultiDropdownAlignment["CUSTOM"] = "custom";
})(MultiDropdownAlignment || (MultiDropdownAlignment = {}));

const celMultiSelectCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:inline-block;font-family:\"OpenSans\"}.header-label{display:inline-block;margin-bottom:var(--header-label-margin-bottom, 5px);margin-right:var(--header-label-margin-right, 10px);color:var(--multi-select-header-color, #333);font-size:var(--multi-select-header-font-size, 0.875rem);font-family:var(--multi-select-header-font-family, \"OpenSans-Semibold\")}button{background:none;color:var(--multi-select-open-button-font-color, #333);border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.row-between{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.row-end{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.multi-container{display:-ms-flexbox;display:flex;min-width:var(--multi-select-min-width, 272px);max-width:var(--multi-select-max-width, none);position:relative}.multi-container.side-header{-ms-flex-direction:row;flex-direction:row}.multi-container.top-header{-ms-flex-direction:column;flex-direction:column}.multi{height:var(--multi-select-height, 40px);padding:var(--multi-select-padding, 8px);background-color:var(--multi-select-bg-color, #fff);width:100%;border-radius:var(--multi-select-border-radius, 2px);-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;border:1px solid var(--multi-select-border-color, #333)}.multi:hover:not(.multi--disabled):not(.multi--open){background-color:rgba(0, 0, 0, 0.05)}.multi>.pre-selection{color:#767676}.multi.success{border:2px solid var(--multi-select-success-border, #2A7D14)}.multi.success.multi--open{border-bottom:none}.multi:hover:not(.multi--disabled):not(.multi--open):has(.pre-selection){color:#555;background-color:#f3f3f3}.multi:hover:not(.multi--disabled):not(.multi--open):has(.pre-selection) .pre-selection{color:inherit}.placeholder{color:var(--multi-select-placeholder-color, #333)}.error{border:2px solid var(--multi-select-error-border, #cc333f)}.error.multi--open{border-bottom:none}.error-dropdown{border:2px solid var(--multi-select-error-dropdown-border, #cc333f)}.success-dropdown{border:2px solid var(--multi-select-error-dropdown-border, #2A7D14)}.success-message,.error-message{font-family:\"OpenSans-Bold\";font-size:0.75rem;height:var(--validation-message-height)}.error-container:not(.open-menu),.success-container{margin-top:4px}.error-container{padding-bottom:var(--error-message-padding-bottom, 0.25rem)}.open-menu{margin:0}.multi--disabled{color:var(--multi-select-disabled--color, #767676);border:none;background-color:var(--multi-select-disabled-bg-color, #e2e2e2);cursor:not-allowed}.multi--open{color:#fff;background-color:#2150a3}.multi:focus,.multi:active{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}.multi:focus.success,.multi:focus.error,.multi:active.success,.multi:active.error{--focus-ring-outline-offset:-5px}.label{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;color:inherit;font-family:var(--multi-select-label-font-family, \"OpenSans\");font-size:var(--multi-select-label-font-size, 1rem);pointer-events:none;margin-right:var(--multi-select-label-margin-right, 20px)}.truncate-label{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden;overflow-wrap:anywhere;-ms-flex-negative:inherit;flex-shrink:inherit;text-align:start}.multi-dropdown{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--multi-dropdown-bg-color, #fff);border-radius:var(--multi-dropdown--border-radius, 2px);overflow:hidden;padding:var(--multi-dropdown, 16px);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:var(--multi-dropdown-box-shadow, 0 3px 5px 0 rgba(0, 0, 0, 0.36));box-shadow:var(--multi-dropdown-box-shadow, 0 3px 5px 0 rgba(0, 0, 0, 0.36));z-index:var(--multi-select-z-index, 100);box-sizing:border-box;position:absolute;top:100%;width:var(--multi-dropdown-width, 100%)}.multi-dropdown.align-left{left:var(--multi-dropdown-align-left, 0)}.multi-dropdown.align-right{right:var(--multi-dropdown-align-right, 0)}.multi-dropdown.align-center{left:var(--multi-dropdown-align-center-left, 50%);-webkit-transform:var(--multi-dropdown-align-center-transform, translateX(-50%));transform:var(--multi-dropdown-align-center-transform, translateX(-50%))}.multi-dropdown.align-custom{left:var(--multi-dropdown-align-custom-left);right:var(--multi-dropdown-align-custom-right);-webkit-transform:var(--multi-dropdown-align-custom-transform);transform:var(--multi-dropdown-align-custom-transform)}.support-heading{color:var(--support-heading-color, #333);font-family:var(--support-heading-font-family, \"Poppins-SemiBold\");font-size:var(--support-heading-font-size, 1rem)}.support-subheading{color:var(--support-subheading-color, var(--grayDarker));font-family:var(--support-subheading-font-family, \"Poppins-Regular\");font-size:var(--support-font-size, 0.75rem)}.search{margin-top:var(--multi-select-search-margin-top, 8px)}.multi-checkbox{--multi-checkbox-box-shadow:none;margin-top:var(--multi-checkbox-margin-top, 12px);margin-bottom:var(--multi-checkbox-margin-bottom, 16px);border-bottom:1px solid var(--multi-checkbox-border-color, #cdcdcd)}.multi-checkbox-mt-none{margin-top:0}.cel-button{padding:var(--cel-button-padding, 0 4px)}.success-container,.error-container{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:start;justify-content:flex-start}.loading-spinner-container{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:var(--loading-spinner-container-height, 5rem)}span.validation{padding-left:var(--validation-message-padding-left, 4px)}span.validation.error-message{color:var(--error-message-color, #cc333f)}span.validation.success-message{color:var(--success-message-color, #2A7D14)}.button-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--button-container-width, 100%);max-width:var(--button-container-max-width, 272px)}.search-result-message{border:0;clip:rect(0 0 0 0);height:1px;overflow:hidden;padding:0;position:absolute;width:1px}.error-icon,.success-icon{margin-top:var(--error-icon-margin-top, 1px);margin-right:var(--error-icon-margin-right, 3px);-ms-flex-negative:0;flex-shrink:0}.multi-icon{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}.multi-checkbox-no-border-bottom{border-bottom:none;margin-bottom:0}.bottom-buttons{display:-ms-flexbox;display:flex}";

const CelMultiSelect = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.leftClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celMultiSelectLeftClick", 7);
    this.selectedEvent = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celMultiSelectChange", 7);
    this.showErrorMessageEvent = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celMultiSelectShowErrorMessage", 7);
    this.searchSubmit = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celMultiSelectSearchSubmit", 7);
    this.closeMultiSelectDropdown = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celMultiSelectCloseDropdown", 7);
    this.openMultiSelectDropdown = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celMultiSelectOpenDropdown", 7);
    this.applyButtonClicked = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celMultiSelectApplyButtonClicked", 7);
    this.timeToDelayForSearchResultMessageToAnnounce = 1000;
    this.truncatePlaceholder = true;
    this.filter = undefined;
    this.selected = [];
    this.selectedID = [];
    this.selectedItems = new Map();
    this.searchResultsMessage = '';
    this.responsivePlaceholderLabel = undefined;
    this.open = undefined;
    this.showErrorMessage = false;
    this.identifier = undefined;
    this.placeholder = 'Select Placeholder';
    this.showFieldLabel = false;
    this.showLoadingSpinner = false;
    this.showSelectedAllValuesCount = false;
    this.searchPlaceholder = 'Search (Topic)';
    this.searchFieldLabel = undefined;
    this.searchFieldAriaLabel = undefined;
    this.truncateLength = 43;
    this.disabled = undefined;
    this.header = undefined;
    this.sideHeader = false;
    this.supportHeading = undefined;
    this.subheader = undefined;
    this.hideAll = undefined;
    this.hideSearch = undefined;
    this.hideClear = undefined;
    this.menuList = [];
    this.leftLabel = undefined;
    this.emptyResultLabel = 'No data found';
    this.sendIdList = false;
    this.errorMessage = undefined;
    this.successMessage = '';
    this.disableApplyButton = false;
    this.dropdownAlignment = MultiDropdownAlignment.LEFT;
    this.applyButtonLabel = 'Apply';
    this.localeEs = false;
    this.maxCheckboxEnabled = undefined;
    this.hideApply = false;
    this.clearButtonLabel = 'Clear';
    this.loaderAriaLabel = 'Content Loading';
    this.responsivePlaceholder = false;
  }
  connectedCallback() {
    this.cel_icon = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon', 'cel-multi-select', this.el);
    this.cel_multi_checkbox = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-multi-checkbox', 'cel-multi-select', this.el);
    this.cel_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-button', 'cel-multi-select', this.el);
    this.cel_search_field = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-search-field', 'cel-multi-select', this.el);
    this.cel_loader = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-loader', 'cel-multi-select', this.el);
  }
  componentWillLoad() {
    this.selectedItems = new Map();
    this.menuList.forEach((item) => (item.checked ? this.selectedItems.set(item.identifier, item.label) : null));
    this.selected = Array.from(this.selectedItems.values());
    this.selectedID = Array.from(this.selectedItems.keys());
  }
  handeSelectedChange(newSelectedValue, oldSelectedValue) {
    if (!this.sendIdList && JSON.stringify(oldSelectedValue) !== JSON.stringify(newSelectedValue)) {
      this.selectedEvent.emit(this.selected);
    }
    const checkedItems = this.menuList.filter((item) => item.checked);
    checkedItems.length > this.maxCheckboxEnabled ? (this.showErrorMessage = true) : (this.showErrorMessage = false);
  }
  handeSelectedIDChange() {
    if (this.sendIdList) {
      this.selectedEvent.emit(this.selectedID);
    }
  }
  handleShowErrorMessage() {
    this.showErrorMessageEvent.emit(this.showErrorMessage);
  }
  handleMenuListChange() {
    this.selectedItems = new Map();
    this.menuList.forEach((item) => (item.checked ? this.selectedItems.set(item.identifier, item.label) : null));
    this.selected = Array.from(this.selectedItems.values());
    this.selectedID = Array.from(this.selectedItems.keys());
  }
  /**
   * Listen to close menu on outside click.
   */
  handleClick(event) {
    if (!event.composedPath().includes(this.el)) {
      if (this.open) {
        this.open = false;
        this.closeMultiSelectDropdown.emit({ id: this.identifier, items: this.menuList });
      }
    }
  }
  /**
   * Listen to an item select.
   */
  handleItemSelect(event) {
    const id = event.detail.identifier;
    const checked = event.detail.checked;
    const label = this.menuList.filter((item) => item.identifier == id)[0]
      ? this.menuList.filter((item) => item.identifier == id)[0].label
      : null;
    if (checked) {
      if (id)
        this.selectedItems.set(id, label);
      this.selected = Array.from(this.selectedItems.values());
      this.selectedID = Array.from(this.selectedItems.keys());
    }
    else {
      this.selectedItems.delete(id);
      this.selected = Array.from(this.selectedItems.values());
      this.selectedID = Array.from(this.selectedItems.keys());
    }
  }
  /**
   * Listen to an item select.
   */
  handleListChange(event) {
    this.menuList = event.detail;
    this.selectedItems = new Map();
    this.menuList.forEach((item) => (item.checked ? this.selectedItems.set(item.identifier, item.label) : null));
    this.selected = Array.from(this.selectedItems.values());
    this.selectedID = Array.from(this.selectedItems.keys());
    if (this.responsivePlaceholder) {
      this.getResponsivePlaceholderLabel();
    }
  }
  /**
   * Listen to celMultiCheckboxFilteredListLength event.
   */
  handleSearchResults(event) {
    if (this.menuList.length && event) {
      let searchResultsCount = event.detail;
      if (!this.filter) {
        searchResultsCount = this.menuList.length;
      }
      setTimeout(() => {
        if (!searchResultsCount) {
          this.searchResultsMessage = 'No item found';
        }
        else {
          const itemString = searchResultsCount === 1 ? 'item' : 'items';
          this.searchResultsMessage = `${this.filter}: ${searchResultsCount} number of ${itemString} available below`;
        }
      }, this.timeToDelayForSearchResultMessageToAnnounce);
    }
  }
  toggleDropdown(event) {
    this.open = !this.open;
    if (!this.open) {
      this.closeMultiSelectDropdown.emit({ event: event, id: this.identifier, items: this.menuList });
    }
    else {
      this.openMultiSelectDropdown.emit({ event: event, id: this.identifier });
    }
  }
  focusMainButton() {
    let btn = this.el.shadowRoot.querySelector('.multi');
    btn.focus();
  }
  pressLink(event) {
    this.leftClick.emit(event);
  }
  pressClear(event) {
    this.celMultiCheckbox.dispatchEvent(new CustomEvent('celMultiSelectDeselectAll'));
    this.selectedItems = new Map();
    this.selected = Array.from(this.selectedItems.values());
    this.selectedID = Array.from(this.selectedItems.keys());
    this.filter = '';
    this.toggleDropdown(event);
    this.focusMainButton();
  }
  pressApply(event) {
    if (!this.checkIfApplyButtonDisabled()) {
      this.toggleDropdown(event);
      this.focusMainButton();
      this.applyButtonClicked.emit();
    }
  }
  componentDidLoad() {
    this.responsivePlaceholderLabel = this.placeholder;
  }
  componentWillRender() {
    if (this.responsivePlaceholder) {
      this.checkResponsivePlaceholderBreakpoints();
    }
  }
  getResponsivePlaceholderLabel() {
    var _a;
    const selectedCount = this.selected.length;
    const totalOptions = this.menuList.length;
    const isAllSelected = selectedCount === totalOptions;
    const labelElement = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.label');
    this.concatinatedLabelWidth = (labelElement === null || labelElement === void 0 ? void 0 : labelElement.getBoundingClientRect().width) || 0;
    if (selectedCount == 0) {
      this.responsivePlaceholderLabel = this.placeholder;
      this.truncatePlaceholder = true;
      return;
    }
    else if (selectedCount >= 1) {
      if (!isAllSelected) {
        this.responsivePlaceholderLabel = this.selected.join(', ');
        return;
      }
      else {
        this.responsivePlaceholderLabel = this.localeEs ? '(Todas) ' : '(All) ' + this.selected.join(', ');
        return;
      }
    }
  }
  checkResponsivePlaceholderBreakpoints() {
    var _a;
    const minimumBreakpointWidth = 112;
    const selectedCount = this.selected.length;
    const totalOptions = this.menuList.length;
    const isAllSelected = selectedCount === totalOptions;
    const isAnySelected = selectedCount > 0 && selectedCount < totalOptions;
    const labelElement = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.label');
    this.concatinatedLabelWidth = (labelElement === null || labelElement === void 0 ? void 0 : labelElement.getBoundingClientRect().width) || 0;
    const buttonWidth = this.calculateButtonWidth();
    if (selectedCount != 0) {
      this.truncatePlaceholder = false;
    }
    if (buttonWidth < minimumBreakpointWidth) {
      if (this.concatinatedLabelWidth >= buttonWidth) {
        if (isAnySelected) {
          this.responsivePlaceholderLabel = `(${selectedCount})`;
          return;
        }
        else if (isAllSelected) {
          this.responsivePlaceholderLabel = this.localeEs ? '(Todas)' : '(All)';
          return;
        }
      }
    }
    else if (this.concatinatedLabelWidth > buttonWidth) {
      if (isAnySelected) {
        this.responsivePlaceholderLabel = this.localeEs ? `(${selectedCount}) Seleccionadas` : `(${selectedCount}) Selected`;
        return;
      }
      else if (isAllSelected) {
        this.responsivePlaceholderLabel = this.localeEs ? `(Todas) Seleccionadas` : `(All) Selected`;
        return;
      }
    }
  }
  calculateButtonWidth() {
    var _a, _b, _c;
    const labelElement = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.label');
    const labelMarginRight = labelElement ? parseFloat(window.getComputedStyle(labelElement).marginRight) : 0;
    const buttonPadding = parseFloat(window.getComputedStyle(this.buttonEl).paddingRight) + parseFloat(window.getComputedStyle(this.buttonEl).paddingLeft);
    this.placeholderButtonWidth = (_c = (_b = this.el.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.button-wrapper')) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect().width;
    const buttonWidth = this.placeholderButtonWidth - buttonPadding - 18 - labelMarginRight;
    return buttonWidth;
  }
  getLabel() {
    if (this.selected.length > 1 && this.selected.length === this.menuList.length) {
      let selectAllPlaceholder = this.localeEs ? '(Todas) Seleccionadas' : '(All) Selected';
      return this.showSelectedAllValuesCount ? (this.localeEs ? `(${this.selected.length}) Seleccionadas` : `(${this.selected.length}) Selected`) : selectAllPlaceholder;
    }
    else if (this.selected.length > 1 && this.maxCheckboxEnabled) {
      let rangePlaceholder = `(${this.selected.length} ${this.localeEs ? 'de' : 'of'} ${this.maxCheckboxEnabled}) ${this.localeEs ? 'Seleccionadas' : 'Selected'}`;
      return rangePlaceholder;
    }
    else if (this.selected.length === 0 && this.maxCheckboxEnabled) {
      let rangeZeroStatePlaceholder = this.localeEs ? `Selecciona hasta ${this.maxCheckboxEnabled}` : `Choose up to ${this.maxCheckboxEnabled}`;
      return rangeZeroStatePlaceholder;
    }
    else if (this.selected.length > 1) {
      let quantitySelectedPlaceholder = this.localeEs ? `(${this.selected.length}) Seleccionadas` : `(${this.selected.length}) Selected`;
      return quantitySelectedPlaceholder;
    }
    else
      return this.placeholder;
  }
  getAriaLabel() {
    if (this.responsivePlaceholder) {
      return this.header ? `${this.header} ` + this.responsivePlaceholderLabel : this.responsivePlaceholderLabel;
    }
    else {
      return this.header ? `${this.header} ` + this.getLabel() : this.getLabel();
    }
  }
  handleSearchValueChange(ev) {
    this.searchSubmit.emit(ev.detail);
    this.filter = ev.detail;
  }
  // error logic same as logic used in cel-text-field, added !this.open here
  getTextValidationMessage() {
    if (this.successMessage && !this.open) {
      return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'success-container row-start' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { class: 'success-icon', "data-name": 'checkmark-circle', "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].SMALL, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].CONFIRM }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { role: 'alert', class: 'validation success-message' }, this.successMessage)));
    }
    if ((!this.maxCheckboxEnabled && this.errorMessage) || (this.maxCheckboxEnabled && this.showErrorMessage)) {
      return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['error-container row-start', this.open ? 'open-menu' : ''].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { class: 'error-icon', "data-name": 'alert-circle', "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].SMALL, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].ERROR }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { role: 'alert', class: 'validation error-message' }, this.errorMessage)));
    }
  }
  checkIfApplyButtonDisabled() {
    return this.disableApplyButton || (this.menuList.some(({ checked }) => checked === true) ? false : true);
  }
  handleCelButtonClick(event) {
    const btnType = event.detail;
    switch (btnType) {
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["p"]:
        this.pressApply(event);
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["o"]:
        this.pressClear(event);
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["n"]:
        this.pressLink(event);
        break;
      default:
        return;
    }
    return btnType;
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['multi-container', this.sideHeader ? 'side-header' : 'top-header'].join(' ') }, this.header ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { "aria-label": this.header, class: 'header-label' }, this.header)) : null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'button-wrapper' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { id: this.identifier, ref: (el) => (this.buttonEl = el), role: 'button', title: this.responsivePlaceholder ? this.responsivePlaceholderLabel : this.selected.length == 1 ? this.selected[0] : this.getLabel(), "aria-expanded": this.open ? 'true' : 'false', "aria-label": this.getAriaLabel(), onClick: (e) => this.toggleDropdown(e), disabled: this.disabled, class: [
        'multi row-between',
        this.disabled ? 'multi--disabled' : '',
        this.open ? 'multi--open' : '',
        (!this.maxCheckboxEnabled && this.errorMessage) || (this.maxCheckboxEnabled && this.showErrorMessage) ? 'error' : '',
        this.successMessage ? 'success' : '',
      ].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: [
        'label',
        this.truncatePlaceholder ? 'truncate-label' : '',
        this.selected && !this.open ? 'placeholder' : '',
        this.selected.length === 0 && !this.disabled && !this.open ? 'pre-selection' : '',
      ].join(' ') }, this.responsivePlaceholder ? this.responsivePlaceholderLabel
      : this.selected.length == 1 ? this.selected[0] : this.getLabel()), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": 'true', class: 'multi-icon', "data-name": this.open ? 'caret-up' : 'caret-down', "data-color": this.disabled ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAY : this.open ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].WHITE : _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].BLACK })), this.open ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: `multi-dropdown align-${this.dropdownAlignment} ${(!this.maxCheckboxEnabled && this.errorMessage) || (this.maxCheckboxEnabled && this.showErrorMessage)
        ? 'error-dropdown'
        : ''} ${this.successMessage ? 'success-dropdown' : null} ` }, this.getTextValidationMessage(), this.supportHeading ? Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: 'support-heading' }, this.supportHeading) : null, this.subheader && !this.showLoadingSpinner ? Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: 'support-subheading' }, this.subheader) : null, this.hideSearch ? null : (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_search_field, { class: 'search', "data-field-placeholder": this.searchPlaceholder, "data-show-search-results": 'false', onCelSearchFieldValue: this.showLoadingSpinner ? null : (ev) => this.handleSearchValueChange(ev), "data-value": this.filter, "data-show-field-label": this.showFieldLabel, "data-field-aria-label": this.searchFieldAriaLabel, "data-field-label": this.searchFieldLabel })), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { "aria-live": 'polite', "aria-atomic": 'true' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: 'search-result-message' }, this.searchResultsMessage)), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_multi_checkbox, { ref: (el) => (this.celMultiCheckbox = el), class: [
        this.hideClear && !this.leftLabel && this.hideApply ? 'multi-checkbox multi-checkbox-no-border-bottom' : 'multi-checkbox',
        !this.header && !this.subheader && this.hideSearch ? 'multi-checkbox-mt-none' : '',
      ].join(' '), itemList: this.menuList, "data-hide-all": this.hideAll, "data-filter": this.filter, "data-truncate-length": this.truncateLength, "data-empty-result-label": this.emptyResultLabel, "data-max-checkbox-enabled": this.maxCheckboxEnabled, "data-announce-filtered-items-count": "true", "data-show-loader": this.showLoadingSpinner }), this.showLoadingSpinner ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "loading-spinner-container" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_loader, { "data-is-live-region": "true", "data-loader-aria-label": this.loaderAriaLabel }))
      : null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: [this.leftLabel ? 'row-between' : 'row-end'].join(' ') }, this.leftLabel ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_button, { "data-button-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["b"].SMALL, "data-variant": _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_7__["C"].TEXT, "data-label": this.leftLabel, "data-button-type": _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["n"] })) : null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'bottom-buttons' }, this.hideClear || this.showLoadingSpinner ? null : (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_button, { class: 'cel-button', "data-button-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["b"].SMALL, "data-label": this.clearButtonLabel, "data-button-type": _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["o"] })), this.hideApply || this.showLoadingSpinner ? null : (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_button, { "data-disabled": this.checkIfApplyButtonDisabled(), class: 'cel-button', "data-button-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["b"].SMALL, "data-label": this.applyButtonLabel, "data-button-type": _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["p"] })))))) : null, !this.open && this.getTextValidationMessage()))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "selected": ["handeSelectedChange"],
    "selectedID": ["handeSelectedIDChange"],
    "showErrorMessage": ["handleShowErrorMessage"],
    "menuList": ["handleMenuListChange"]
  }; }
};
CelMultiSelect.style = celMultiSelectCss;

const celNavbarCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start}.show{visibility:visible}.hide{visibility:hidden}.top-nav-wrapper{position:var(--cel-navbar-position, fixed);top:0;left:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;width:100%;background-color:var(--cel-navbar-bg-color, #fff);height:var(--cel-navbar-height, var(--navbar-height, 57px));z-index:var(--cel-navbar-z-index, 101);-webkit-box-shadow:0px 2px 8px 0px #00000014;box-shadow:0px 2px 8px 0px #00000014;border-bottom:var(--cel-navbar-border-bottom, 1px solid #cdcdcd)}.top-nav-wrapper-title-bar{-webkit-box-shadow:none;box-shadow:none;border-bottom:var(--cel-navbar-border-bottom-program-title-bar, 1px solid #e2e2e2)}a,a.mobile-nav-item:focus,a.mobile-help-item:focus{text-decoration:none;color:inherit}a:focus,a:focus-visible,a.mobile-nav-item:focus:focus,a.mobile-nav-item:focus:focus-visible,a.mobile-help-item:focus:focus,a.mobile-help-item:focus:focus-visible{outline:none}a:not(.help-item-a):focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:-2px}a.mobile-help-item:focus{outline:none;text-decoration:underline}button:not(.help-item-a):focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:#333;outline-offset:-4px}button.accordion-button:focus{outline:none}a.logo:focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}li:has(a.help-item-a:focus){outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}li:has(button.help-item-a:focus){outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}button{background:none;color:inherit;border:none;padding:var(--cel-navbar-button-padding, 0);font:inherit;cursor:pointer;outline:inherit}ul{list-style:none;display:-ms-flexbox;display:flex;margin:0;padding:0;font-family:var(--cel-navbar-tabs-font-family, \"Poppins-Medium\");color:var(--cel-navbar-tabs-color, #333);white-space:nowrap}.logo{padding:var(--cel-navbar-tab-padding, 1rem 0.666rem 1rem 0.666rem);margin-left:var(--cel-navbar-logo-margin-left, 1rem)}.logo--mobile{padding:var(--cel-navbar-logo-mobile-padding, 1rem 0.3rem);margin-left:var(--cel-navbar-logo-mobile-margin-left, 2px)}.tab-anchor{cursor:pointer;padding:var(--cel-navbar-tab-padding, 1rem 0.666rem 1rem 0.666rem);display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}.tab-anchor-dropdown-open{background-color:var(--cel-navbar-tab-hover-bg-color, #f3f3f3);color:var(--cel-navbar-tab-hover-color, #2150a3)}.tab-anchor-dropdown-open .dropdown-icon{--cel-color-base:var(--nav-dropdown-icon-hover-color, $primaryShade)}.tab,.tab-animated{position:absolute;height:var(--cel-navbar-tab-height, 0.375rem);background-color:var(--cel-navbar-bg-color, #006be0);left:var(--cel-navbar-tab-left, -10rem);bottom:var(--cel-navbar-tab-bottom, 0)}.tab-animated{-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:200ms;transition-duration:200ms}.tab-item--selected{color:#006be0}.tab-item{padding-top:1px;height:var(--cel-navbar-tab-item-height, 56px)}.nav-dropdown{position:var(--nav-dropdown-position, relative);left:var(--nav-dropdown-left-position, 0);top:var(--nav-dropdown-top-position, -56px);--menu-label-margin-left:var(--nav-dropdown-menu-label-margin-left, 9px);--menu-item-container-padding:var(--nav-dropdown-menu-item-container-padding, 9px 8px 9px 11px)}.dropdown-icon--selected{--cel-color-base:var(--nav-dropdown-icon-selected-color, $primary)}.left-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.mid-container{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer}.mid-container .sync-state-details-container{position:absolute;width:var(--cel-navbar-sync-state-details-container-width, 210px);top:var(--cel-navbar-sync-state-details-container-top, 56px);left:var(--cel-navbar-sync-state-details-container-left, 0px)}.sync-icon{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}.synced-label{color:var(--cel-navbar-sync-label-color, #333);font-family:var(--cel-navbar-label-font, \"Poppins-Medium\");font-size:var(--cel-navbar-label-size, 0.75rem);margin:var(--cel-navbar-label-margin, 0 0 0 0.5rem)}.right-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.utility-container{position:relative;padding:var(--cel-navbar-utility-container-padding, 0 0.5rem)}.utility-container--mobile{padding:0 0.25rem}.search-dropdown{position:absolute;border-radius:0.25rem;-webkit-box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.5);box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.5);-webkit-transform:translateX(-14.5rem) translateY(-2.3rem);transform:translateX(-14.5rem) translateY(-2.3rem);width:var(--cel-navbar-search-dropdown-width, 17rem);padding:var(--cel-navbar-search-dropdown-padding, 0.5rem);background-color:var(--cel-navbar-search-dropdown-bg-color, #fff)}.search-dropdown--mobile{-webkit-transform:translateX(-15.5rem) translateY(-2.3rem);transform:translateX(-15.5rem) translateY(-2.3rem)}.search-checkbox{margin:var(--cel-navbar-search-checkbox-mt, 0.5rem 0 0 0)}.new{position:absolute;pointer-events:none;-o-object-fit:cover;object-fit:cover;border-radius:50%;width:0.5rem;height:0.5rem;-webkit-transform:translateX(-1rem) translateY(0.5rem);transform:translateX(-1rem) translateY(0.5rem);background-color:#d73a59}.notifications-dropdown{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-pack:space-evenly;justify-content:space-evenly;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.5);box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.5);border-radius:0.25rem;min-width:var(--cel-navbar-notif-dropdown-min-width, 15rem);background-color:var(--cel-navbar-notif-dropdown-bg-color, #fff);padding:var(--cel-navbar-notif-dropdown-padding, 1rem 0.5rem);color:var(--cel-navbar-notif-dropdown-color, #333);font-family:var(--cel-navbar-notif-dropdown-font, \"OpenSans-Semibold\");font-size:var(--cel-navbar-notif-dropdown-size, 0.875rem);-webkit-transform:translateX(-12.9rem) translateY(0.25rem);transform:translateX(-12.9rem) translateY(0.25rem)}.enhanced-notifications-dropdown{position:fixed;right:min(100vw, var(--notification-container-max-width, 400px) + 16px);--notification-container-max-width:var(--notification-container-max-width, 400px);--notification-container-max-height:calc(100vh - var(--navbar-height, 57px) - 16px);--notification-container-max-height:calc(100svh - var(--navbar-height, 57px) - 16px)}.help-search-container{display:block;padding:var(--cel-navbar-help-dropdown-padding, 0.5rem)}.help-dropdown{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.5);box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.5);border-radius:0.25rem;background-color:var(--cel-navbar-help-dropdown-bg-color, #fff);min-width:var(--cel-navbar-help-dropdown-min-width, 15rem);-webkit-transform:translateX(-12.9rem) translateY(0.25rem);transform:translateX(-12.9rem) translateY(0.25rem);overflow-y:auto;max-height:calc(95vh - 60px);max-height:calc(95svh - 60px)}.help-item-container{-ms-flex-direction:column;flex-direction:column}.help-item{background-color:var(--menu-item-bg-color, #fff);cursor:pointer;font-family:var(--menu-label-font, \"OpenSans-Semibold\");font-size:var(--menu-label-fontSize, 0.875rem)}.help-item .help-item-a{display:block;padding:var(--menu-item-container, 9px 12px)}.help-item-button{width:100%;text-align:start}.help-item-button:focus,.help-item-button:focus-visible{outline:none}.profile-container{position:relative;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:var(--cel-navbar-profile-container-bg-color, #fff);padding:var(--cel-navbar-profile-container-padding, 5px 8px);margin:var(--cel-navbar-profile-container-margin, 0 0.5rem 0 1rem)}.profile-container:disabled{background-color:var(--cel-navbar-profile-container-disabled-bg-color, transparent);opacity:var(--cel-navbar-profile-container-opacity, 0.5)}.profile-container-dashboard-reader{gap:6px;border-radius:8px;border:1px solid #d8d8d8;max-width:168px;min-width:56px}.enhanced-profile-icon:focus,.enhanced-profile-icon:active{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}.profile-container--mobile{margin:var(--cel-navbar-profile-container-margin, 0 0.5rem)}@media (hover: hover){.profile-container--hover{background-color:var(--cel-navbar-profile-hover-container-bg-color, #f3f3f3)}.profile-name--hover{color:var(--cel-navbar-profile-name-color, currentColor)}.mobile-nav-item-wrapper:hover,.mobile-help-container ul li:hover{background:rgba(0, 0, 0, 0.05);color:#2150a3}.mobile-nav-item-wrapper:hover>.mobile-nav-accordion-header>.mobile-nav-item.accordion-button,.mobile-help-container ul li:hover>.mobile-nav-accordion-header>.mobile-nav-item.accordion-button{color:var(--mobile-nav-item-hover-color, #2150a3)}.mobile-nav-item-wrapper:hover.expanded,.mobile-help-container ul li:hover.expanded{background:rgba(0, 0, 0, 0.1)}.mobile-nav-item-wrapper:hover a,.mobile-help-container ul li:hover a{color:var(--mobile-nav-item-hover-color, #2150a3)}.mobile-nav-item-wrapper:hover .checkbox-wrapper>.checkmark,.mobile-help-container ul li:hover .checkbox-wrapper>.checkmark,.mobile-nav-item-wrapper:hover .mobile-nav-accordion-header>.mobile-nav-accordion-caret-down,.mobile-help-container ul li:hover .mobile-nav-accordion-header>.mobile-nav-accordion-caret-down{--cel-color-base:#2150a3}.help-item:hover{background-color:var(--menu-item-bg-color, #cdcdcd)}.tab-anchor:hover{background-color:var(--cel-navbar-tab-hover-bg-color, #f3f3f3);color:var(--cel-navbar-tab-hover-color, #2150a3)}.tab-anchor:hover .dropdown-icon{--cel-color-base:var(--nav-dropdown-icon-hover-color, $primaryShade)}.menu-trigger:hover,.menu-trigger.enhanced-menu-trigger:hover,.menu-trigger-icon:hover{background-color:var(--icon-button-hover-bg-color, rgba(0, 0, 0, 0.05));color:#2150a3}.menu-trigger:hover .hamburger-icon>span,.menu-trigger.enhanced-menu-trigger:hover .hamburger-icon>span,.menu-trigger-icon:hover .hamburger-icon>span{background-color:#2150a3}}.avatar{pointer-events:none;-o-object-fit:cover;object-fit:cover;border-radius:50%;margin:var(--cel-navbar-avatar-margin, 0)}.profile-container-wrapper{position:relative}.avatar-dropdown{position:absolute;top:0;right:10px;--menu-container-left:none;--menu-container-right:0;--cel-account-menu-sign-out-btn-padding:var(--cel-account-menu-sign-out-btn-padding, 0 0 2px)}.avatar-dropdown.enhanced-dropdown{top:42px;--cel-account-menu-container-max-height:calc(95vh - 60px);--cel-account-menu-container-max-height:calc(95svh - 60px)}.size-dropdown{--cel-radio-menu-container-left:none;--cel-radio-menu-container-right:0}.menu-trigger{position:relative;width:48px;height:48px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.menu-trigger:focus,.menu-trigger:active{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}.menu-trigger:disabled{background-color:var(--cel-navbar-menu-trigger-disabled-bg-color, transparent);pointer-events:none}.menu-trigger:disabled .hamburger-icon span{background-color:#767676}.menu-trigger .sync-state-details-container{position:absolute;width:var(--cel-navbar-sync-state-details-container-width, 210px);top:var(--cel-navbar-sync-state-details-container-top, 55px)}.menu-trigger.enhanced-menu-trigger{background-color:var(--icon-button-bg-color, transparent);border-radius:var(--icon-button-border-radius, 50%)}.menu-trigger-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.menu-trigger-container+.logo--mobile img{position:relative;top:2px}.menu-sync{position:absolute;bottom:var(--cel-menu-sync-bottom, 0.25rem);right:var(--cel-menu-sync-right, 0.25rem);width:var(--cel-menu-sync-width, 16px)}.mobile-nav-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);background-color:#f3f3f3;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:auto;height:100%}.enhanced-mobile-menu{position:fixed;left:0;right:0;width:100%;z-index:100}.enhanced-mobile-menu.top-ease-in{-webkit-transition-property:all;transition-property:all;top:var(--navbar-height, 57px);bottom:0;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-duration:250ms;transition-duration:250ms}.enhanced-mobile-menu.top-ease-out{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;-webkit-transition:250ms;transition:250ms;top:-10px;bottom:100%}.enhanced-mobile-menu .mobile-nav-item{font-size:var(--mobile-nav-item-font-size, 1.125rem);border-bottom:none}.enhanced-mobile-menu .mobile-nav-item:not(:first-child){margin-top:2px}.enhanced-mobile-menu .mobile-help-container{margin-top:0;padding:var(--mobile-help-container-padding, 0 0 32px 0)}.enhanced-mobile-menu .mobile-help-item:first-child{margin-top:0}.mobile-menu-avatar{-o-object-fit:cover;object-fit:cover;border-radius:50%}.mobile-profile-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:var(--mobile-profile-container-width, 100%);height:var(--mobile-profile-container-height, 7.625rem)}.mobile-menu-header{background-color:#fff;height:24px;padding:17px 17px 15px 17px;border-bottom:1px solid #e2e2e2;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.mobile-menu-header a{display:block;cursor:pointer;height:22px;margin-left:16px}.mobile-menu-header a:focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:4px}.mobile-menu-header .mobile-menu-close-inner-container{padding-right:16px;border-right:1px solid #e2e2e2}.mobile-nav-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--mobile-nav-container-width, 100%)}.mobile-nav-container:first-child{padding:var(--mobile-nav-container-padding, 32px 0 0 0)}.mobile-nav-item-wrapper,.mobile-help-container ul li{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;cursor:pointer}.mobile-nav-item-wrapper:focus-within,.mobile-help-container ul li:focus-within{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:-6px}.mobile-nav-item-wrapper.expanded,.mobile-help-container ul li.expanded{background:rgba(0, 0, 0, 0.05)}.mobile-nav-item{color:var(--mobile-nav-item-color, #333);font-family:var(--mobile-nav-item-font, \"Poppins-Medium\");position:relative}.mobile-nav-item:not(:first-child){margin-top:2px}.mobile-nav-item:last-child{margin-bottom:2px}.mobile-nav-item>.accordion-button:focus{outline:none}.mobile-help-container{margin-top:8px}.mobile-help-container ul{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.mobile-help-item{cursor:pointer;text-decoration:underline;color:var(--mobile-help-item-color, #333);font-family:var(--mobile-help-item-font, \"Poppins-Regular\");font-size:var(--mobile-help-item-size, 0.75rem);padding:var(--mobile-help-item-padding, 16px 16px 16px 48px);width:100%}.mobile-help-item:first-child{margin-top:2px}.mobile-menu-close{position:absolute;top:0.01rem;right:-3.4rem;--icon-button-hover-bg-color:transparent}.launch-realize-button{--button-width:var(--launch-realize-button-width, 148px);--button-height:var(--launch-realize-button-height, 40px);--button-padding:var(--launch-realize-button-padding, 0 9px 0 13px);--cel-icon-width:var(--launch-realize-button-width, 122px);--cel-icon-height:var(--launch-realize-button-height, 23px)}.enhanced-mobile-menu>.mobile-nav-wrapper{-webkit-box-shadow:inset 0 7px 9px -7px rgba(0, 0, 0, 0.2);box-shadow:inset 0 7px 9px -7px rgba(0, 0, 0, 0.2);background:rgba(255, 255, 255, 0.8);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px)}.checkbox-wrapper{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:48px;width:48px;-ms-flex-negative:0;flex-shrink:0}.mobile-nav-accordion-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.mobile-nav-accordion-header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;width:100%}.mobile-nav-accordion-header .mobile-nav-accordion-caret-down{padding-right:20px}.accordion-menu-container{position:relative;--menu-container-position:static;--cel-menu-display:flex;--cel-menu-flex-direction:columm;--menu-container-border-radius:none;--menu-container-width:100%;--menu-item-container-padding:9px 8px 9px 48px;--menu-container-margin:0;--pop-up-menu-box-shadow:none;--menu-item-li-bg-color:none;--menu-item-bg-color:rgba(0, 0, 0, 0.05);--menu-item-bg-hover-color:rgba(0, 0, 0, 0.05);--menu-item-label-hover-color:#2150a3;--menu-item-focus-ring-hover-color:#2150a3}.hamburger-icon{width:16px;height:16px;position:relative;margin:0;color:#333;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:0.5s ease-in-out;-moz-transition:0.5s ease-in-out;-o-transition:0.5s ease-in-out;transition:0.5s ease-in-out;cursor:pointer}.hamburger-icon span{display:block;margin:0;padding:0;position:absolute;height:3px;width:100%;background:#333;border-radius:9px;opacity:1;left:0;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:0.25s ease-in-out;-moz-transition:0.25s ease-in-out;-o-transition:0.25s ease-in-out;transition:0.25s ease-in-out}.hamburger-icon span:nth-child(1){top:0px;margin:1px 0}.hamburger-icon span:nth-child(2),.hamburger-icon span:nth-child(3){top:7.5px}.hamburger-icon span:nth-child(4){top:14px}.hamburger-icon.open span:nth-child(1){top:6px;width:0%;left:50%}.hamburger-icon.open span:nth-child(2){-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.hamburger-icon.open span:nth-child(3){-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}.hamburger-icon.open span:nth-child(4){top:6px;width:0%;left:50%}.profile-name-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;color:#333;font-size:12px;font-family:\"Poppins-Regular\"}.profile-name-initials-container{-ms-flex-direction:row;flex-direction:row}.first-name,.last-name{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden;overflow-wrap:anywhere}.sync-state-button{--focus-ring-outline-offset:-2px;--small-button-font-size:12px;--button-icon-margin:0 4px 0 0;--cel-icon-contain:none;--text-button-bg-color:transparent;--small-button-padding:4px}";

const CelNavbar = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.logoClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNavbarLogoClick", 7);
    this.navClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNavbarNavClick", 7);
    this.navEnter = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNavbarNavEnter", 7);
    this.navFocus = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNavbarNavFocus", 7);
    this.navBlur = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNavbarNavBlur", 7);
    this.navLeave = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNavbarNavLeave", 7);
    this.utilityClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNavbarUtilityClick", 7);
    this.searchSubmit = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNavbarSearchSubmit", 7);
    this.helpSearchSubmit = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNavbarHelpSearchSubmit", 7);
    this.helpClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNavbarHelpClick", 7);
    this.onLink = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNavbarNotificationLink", 7);
    this.syncEnter = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNavbarSyncMouseEnter", 7);
    this.syncLeave = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNavbarSyncMouseLeave", 7);
    this.sizeSelected = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNavbarSizeSelected", 7);
    this.avatarMenuClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNavbarAvatarMenuClick", 7);
    this.navDropdownClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNavbarNavDropdownClick", 7);
    this.mobileMenuToggleClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNavbarMobileMenuToggleClick", 7);
    this.hamBurgerFocused = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNavbarHamBurgerFocused", 7);
    this.textSizeRefString = 'text-size';
    this.accordionRefString = 'accordion-button';
    this.isLoadingForFirstTime = true;
    this.linkElList = [];
    this.minimumInterContainerSpace = 28;
    this.avatarHovered = undefined;
    this.activeUtility = null;
    this.openMobileMenu = false;
    this.selectedTabEl = undefined;
    this.activeUtilityEl = undefined;
    this.navItemHover = false;
    this.isFirstLoadOfHamburgerMenu = true;
    this.showSyncStateDetails = false;
    this.navContainerWidth = undefined;
    this.view = undefined;
    this.logoSrc = './assets/realize-savvas.svg';
    this.logoAltText = 'logo image';
    this.logoWidth = undefined;
    this.logoHeight = undefined;
    this.logoHref = undefined;
    this.logoAriaLabel = undefined;
    this.selectedId = undefined;
    this.navItems = [];
    this.helpMenuItems = [];
    this.sizeMenuItems = [];
    this.avatarMenuItems = [];
    this.avatarSrc = undefined;
    this.profileName = undefined;
    this.showHamburger = undefined;
    this.showSyncStatusWithHamburgerButton = false;
    this.hamburgerButtonIconName = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["c"].MENU;
    this.hamburgerButtonAriaLabel = 'navigation menu';
    this.hamburgerButtonAriaExpanded = null;
    this.hamburgerButtonAriaHaspopup = 'true';
    this.offlineSupport = undefined;
    this.syncStateConfig = null;
    this.disableTabs = undefined;
    this.showSearch = undefined;
    this.searchPlaceholder = undefined;
    this.searchAriaLabel = 'search';
    this.restrictSearchLabel = undefined;
    this.disableDefaultSearch = undefined;
    this.notificationInterface = undefined;
    this.showBookmark = undefined;
    this.bookmarkSelected = undefined;
    this.bookmarkAriaLabel = 'bookmark';
    this.showAnnouncements = undefined;
    this.announcementAriaLabel = 'announcement';
    this.showTextSize = undefined;
    this.textSizeAriaLabel = 'text size';
    this.showNotifications = undefined;
    this.showEnhancedNotifications = undefined;
    this.notificationBoardInterface = undefined;
    this.notificationItems = undefined;
    this.notificationAriaLabel = 'notification';
    this.showHelp = undefined;
    this.enableHelpWithExternalLink = false;
    this.externalNavItemsTooltip = undefined;
    this.helpPlaceholder = undefined;
    this.helpSearchFieldLabel = 'Search Help';
    this.showHelpSearchFieldLabel = false;
    this.navbarMenuItemsAriaLabel = 'Selected';
    this.navbarSelectedItemAriaLabel = 'Of';
    this.navbarTabItemLabel = 'Tab';
    this.helpAriaLabel = 'help';
    this.userSettingsAriaLabel = 'User Setting ';
    this.hideMobileMenu = false;
    this.iconSize = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].REGULAR;
    this.disableNavItems = _cel_navbar_constants_bce10811_js__WEBPACK_IMPORTED_MODULE_8__["d"];
    this.avatarWidth = 30;
    this.avatarHeight = 30;
    this.hamburgerIconSize = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].MLARGE;
    this.showEnhancedAccountDropdown = false;
    this.userFirstName = '';
    this.userLastName = '';
    this.copyrightLabel = 'Copyright © &year Savvas Learning Company LLC. and its affiliates. All Rights Reserved.';
    this.agreementLabel = 'User Agreement';
    this.agreementHref = '';
    this.privacyLabel = 'Privacy Policy';
    this.privacyHref = '';
    this.creditsLabel = 'Credits';
    this.creditsHref = '';
    this.revisionTag = '';
    this.showRevisionTag = true;
    this.showCredits = true;
    this.openInNewTabLinkText = 'This link will open in an external page and logout is still required';
    this.animateTab = true;
    this.selectTabOnClick = true;
    this.hideEnhancedSignOutStyling = false;
    this.hideDropdownAvatar = false;
    this.showUserProfileIcon = false;
    this.showLaunchRealizeLogo = false;
    this.hideSideMenuLogo = false;
    this.whitelistedClassesUserDropdown = [];
    this.endToEndId = 'cel-navbar';
    this.alwaysShowHamburger = false;
    this.hasTitleBar = false;
  }
  connectedCallback() {
    this.cel_icon = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon', 'cel-navbar', this.el);
    this.cel_icon_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon-button', 'cel-navbar', this.el);
    this.cel_search_field = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-search-field', 'cel-navbar', this.el);
    this.cel_menu = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-menu', 'cel-navbar', this.el);
    this.cel_checkbox_item = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-checkbox-item', 'cel-navbar', this.el);
    this.cel_text_link = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-text-link', 'cel-navbar', this.el);
    this.cel_popover = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-popover', 'cel-navbar', this.el);
    this.cel_account_menu = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-account-menu-component', 'cel-navbar', this.el);
    this.cel_radio_popup = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-radio-popup', 'cel-navbar', this.el);
    this.cel_notification_board = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-notification-board', 'cel-navbar', this.el);
    this.cel_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-button', 'cel-navbar', this.el);
  }
  handleSelectedIdChange(newSelectedId) {
    if (this.isLoadingForFirstTime) {
      document.fonts.ready.then(() => this.createUnderlineForSelectedItem(newSelectedId));
      this.isLoadingForFirstTime = false;
    }
    else {
      this.createUnderlineForSelectedItem(newSelectedId);
    }
  }
  createUnderlineForSelectedItem(newSelectedId) {
    const Break = {};
    try {
      this.el.shadowRoot.querySelectorAll('.tab-item').forEach((item) => {
        if (item.dataset['id'] == newSelectedId) {
          const { width } = item.getBoundingClientRect();
          const left = item.offsetLeft + 'px';
          this.tabEl.style.width = width + 'px';
          this.tabEl.style.left = left;
          this.tabEl.className = this.animateTab ? 'tab-animated' : 'tab';
          throw Break;
        }
      });
    }
    catch (error) {
      if (error !== Break)
        throw error;
    }
  }
  /**
   * Listen to close menu on outside click.
   */
  handleClick(event) {
    const composedPath = event.composedPath();
    if (!composedPath.includes(this.el)) {
      for (let i = 0; i < composedPath.length; i++) {
        const el = composedPath[i];
        for (let j = 0; j < this.whitelistedClassesUserDropdown.length; j++) {
          if (el.classList && el.classList.contains(this.whitelistedClassesUserDropdown[j])) {
            return;
          }
        }
      }
      this.activeUtility = null;
      this.openMobileMenu = false;
      return;
    }
    const whiteList = ['utility', 'search-dropdown', 'size-dropdown', 'notifications-dropdown', 'help-dropdown', 'avatar-dropdown', 'profile-container', 'tab-anchor', 'mobile-nav-item', 'mobile-help-item', 'accordion-menu', 'accordion-menu-container', 'mobile-nav-wrapper', 'enhanced-notifications-dropdown'];
    for (let i = 0; i < composedPath.length; i++) {
      const el = composedPath[i];
      for (let j = 0; j < whiteList.length; j++) {
        if (el.classList && el.classList.contains(whiteList[j])) {
          return;
        }
      }
    }
    this.activeUtility = null;
  }
  /**
   * listener to trap tab-related navigation within sidebar of cel-navbar
   */
  handleTabDown(event) {
    if (this.openMobileMenu) {
      switch (event.key) {
        case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["E"]:
          const hamburgerActiveElement = document.activeElement.shadowRoot.activeElement;
          const activeElementIsExpanded = hamburgerActiveElement.classList.contains('is-expanded');
          if ((hamburgerActiveElement != this.activeAccordion) || !activeElementIsExpanded) {
            this.hamburgerEl.classList.remove('open');
            this.openMobileMenu = false;
            this.hamburgerButtonAriaExpanded = 'false';
            this.menuEl.focus();
          }
          else if (hamburgerActiveElement == this.activeAccordion) {
            this.isFirstLoadOfHamburgerMenu = false;
            this.activeAccordion.focus();
          }
          break;
        case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["T"]:
          const activeElement = this.el.shadowRoot.activeElement;
          if (!event.shiftKey && activeElement === this.focusableHamburgerItemsArray[this.focusableHamburgerItemsArray.length - 1]) {
            event.preventDefault();
            this.focusFirstHamburgerItem();
          }
          else if (event.shiftKey && activeElement === this.focusableHamburgerItemsArray[0]) {
            event.preventDefault();
            this.focusLastHamburgerItem();
          }
          break;
      }
    }
    if (this.activeUtility === 'help') {
      if (event.key === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["T"]) {
        const selectedItem = document.activeElement.shadowRoot.activeElement;
        if (event.shiftKey === false) {
          const classListOfSelectedItem = [...selectedItem.classList];
          if (classListOfSelectedItem.includes('help-item-a')) {
            this.handleTabEvent(selectedItem, event);
          }
        }
        else {
          const classListOfSelectedParent = [...selectedItem.parentElement.classList];
          if (classListOfSelectedParent.includes('help-search-container')) {
            this.handleShiftTabEvent(event);
          }
        }
      }
      if (event.key === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["e"] || event.key === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["d"]) {
        const selectedItem = document.activeElement.shadowRoot.activeElement;
        const classListOfSelectedItem = [...selectedItem.classList];
        if (classListOfSelectedItem.includes('help-item-a')) {
          this.handleArrowUpDownEvent(event.key, selectedItem);
        }
      }
    }
    if (event.key === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["E"]) {
      if (this.activeUtility) {
        this.activeUtility = null;
        this.activeUtilityEl.shadowRoot.querySelector('button').focus();
      }
    }
  }
  /**
   * listen to celIconButtonLoaded event
   */
  getCelIconButtonLoadedInfo(event) {
    if (event.detail) {
      if (this.closeEl) {
        const closeBtn = this.closeEl.shadowRoot.querySelector('button');
        closeBtn.focus();
      }
    }
  }
  /**
   * listener to close cel-menu on esc key press
   */
  handleCelMenuCloseEvent(event) {
    var _a;
    if ((_a = event.detail) === null || _a === void 0 ? void 0 : _a.isClose) {
      this.activeUtility = null;
      const parentEl = event.detail.parentTargetElement;
      if (typeof parentEl === 'string' && parentEl.includes(this.accordionRefString)) {
        this.activeAccordion.focus();
        this.collapseAccordionHamburgerItems();
      }
      else if (typeof parentEl === 'string' && parentEl === this.textSizeRefString) {
        this.textSizeEl.shadowRoot.querySelector('button').focus();
      }
      else {
        parentEl.focus();
      }
    }
  }
  /**
   * listener to close cel-account-menu-component event on esc key press
   */
  handleCelAccountMenuCloseEvent(event) {
    var _a;
    if ((_a = event.detail) === null || _a === void 0 ? void 0 : _a.isClose) {
      this.activeUtility = null;
      const parentEl = event.detail.parentTargetElement;
      if (parentEl) {
        parentEl.focus();
      }
    }
  }
  /**
   * listen to celAccountMenuItemClick event
   */
  onCelAccountMenuItemClick(event) {
    this.avatarMenuClick.emit(event.detail);
  }
  componentDidLoad() {
    var _a, _b;
    const Break = {};
    try {
      this.el.shadowRoot.querySelectorAll('.tab-item').forEach((item) => {
        if (item.dataset['id'] == this.selectedId) {
          this.selectedTabEl = item;
          this.handleSelectedIdChange(this.selectedId);
          throw Break;
        }
      });
    }
    catch (error) {
      if (error !== Break)
        throw error;
    }
    if (!this.mobileNavWrapper) {
      this.mobileNavWrapper = this.el.shadowRoot.querySelector('.outer-mobile-nav-wrapper');
    }
    this.calculateDefaultWidths();
    this.navContainerWidth = (_b = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.top-nav-wrapper')) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().width;
    if (!this.alwaysShowHamburger) {
      this.updateCurrentNavView();
    }
  }
  setFocusableHamburgerItems() {
    this.focusableHamburgerItemsArray = this.mobileNavWrapper.querySelectorAll('.mobile-nav-item, .mobile-help-item');
  }
  focusFirstHamburgerItem() {
    var _a;
    let firstItem = ((_a = this.focusableHamburgerItemsArray) === null || _a === void 0 ? void 0 : _a.length) ? this.focusableHamburgerItemsArray[0] : null;
    if (firstItem)
      firstItem.focus();
  }
  focusLastHamburgerItem() {
    this.focusableHamburgerItemsArray[this.focusableHamburgerItemsArray.length - 1].focus();
  }
  componentDidRender() {
    if (this.view !== _cel_navbar_constants_bce10811_js__WEBPACK_IMPORTED_MODULE_8__["C"].MOBILE && this.tabEl && !this.tabEl.style.width) {
      this.createUnderlineForSelectedItem(this.selectedId);
    }
    if (this.openMobileMenu && this.isFirstLoadOfHamburgerMenu) {
      this.setFocusableHamburgerItems();
      this.focusFirstHamburgerItem();
      this.isFirstLoadOfHamburgerMenu = false;
    }
  }
  handleTabSelect(event, item) {
    if (!item.isDropdown) {
      this.activeUtility = null;
      this.clearNavItemDropdowns();
    }
    if (!this.selectTabOnClick)
      return;
    const target = event.target;
    if (target.tagName == 'A') {
      const parent = target.parentNode;
      this.selectedId = parent.dataset['id'];
    }
    else if ((target.tagName != 'CEL-MENU')) {
      this.selectedId = target.dataset['id'];
    }
  }
  handleUtility(event) {
    const target = event.target;
    this.activeUtilityEl = target;
    const id = target.dataset['utilityId'];
    if (id == this.activeUtility) {
      this.activeUtility = null;
    }
    else {
      this.activeUtility = id;
    }
    this.utilityClick.emit(id);
  }
  handleNavClick(event, item, menuType) {
    this.navClick.emit(item);
    if (item.isDropdown) {
      this.handleUtility(event);
    }
    else {
      this.clearNavItemDropdowns();
    }
    if (menuType === 'accordion') {
      let navItems = [...this.navItems];
      const expandedItem = navItems.find((navItem) => navItem.id === item.id);
      expandedItem.isDropdownExpanded = !item.isDropdownExpanded;
      this.navItems = navItems;
    }
  }
  handleNavDropdownClick(event, index, menuType) {
    this.navDropdownClick.emit(event.detail);
    this.selectedId = this.navItems[index].id;
    if (!event.detail.isExternalLink) {
      this.clearNavItemDropdowns();
      this.navItems[index].dropdownSubmenuItems.map((item) => {
        item.menuItemChecked = (item.id == event.detail.id ? true : false);
        return item;
      });
    }
    if (menuType === 'mobile') {
      this.openMobileMenu = false;
    }
    this.activeUtility = null;
  }
  handleMobileMenu() {
    if (this.disableNavItems.disableHamburger) {
      return;
    }
    if (!this.hideMobileMenu) {
      this.toggleMobileMenu();
      if (this.openMobileMenu) {
        this.hamburgerEl.classList.add('open');
        this.hamburgerButtonAriaExpanded = 'true';
        this.focusFirstHamburgerItem();
      }
      if (!this.openMobileMenu) {
        this.hamburgerEl.classList.remove('open');
        this.hamburgerButtonAriaExpanded = 'false';
        let closeAllAccordions = this.navItems.map((item) => {
          item.isDropdownExpanded = item.isDropdown ? false : undefined;
          return item;
        });
        this.navItems = closeAllAccordions;
        this.openMobileMenu = false;
      }
    }
    else {
      this.mobileMenuToggleClick.emit();
    }
  }
  onHamburgerEvent(isFocused) {
    this.hamBurgerFocused.emit(isFocused);
  }
  toggleMobileMenu() {
    this.openMobileMenu = !this.openMobileMenu;
  }
  handleArrowUpDownEvent(event, currentActiveItem) {
    if (currentActiveItem) {
      currentActiveItem.blur();
      const parentElement = currentActiveItem.parentElement;
      if (event === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["e"]) {
        this.onMakeItemFocused(parentElement, 'nextSibling');
      }
      else if (event === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["d"]) {
        this.onMakeItemFocused(parentElement, 'previousSibling');
      }
    }
  }
  handleTabEvent(currentActiveItem, event) {
    var _a;
    if (currentActiveItem) {
      const parentElement = currentActiveItem.parentElement;
      event.preventDefault();
      const toBeActiveElement = (_a = parentElement['nextSibling']) === null || _a === void 0 ? void 0 : _a.firstChild;
      if (toBeActiveElement) {
        this.makeItemFocused(toBeActiveElement);
      }
      else {
        const helpSearchField = this.helpSearchEl.shadowRoot.querySelector('input');
        if (helpSearchField) {
          this.makeItemFocused(helpSearchField);
        }
      }
    }
  }
  handleShiftTabEvent(event) {
    const currentActiveItem = document.activeElement.shadowRoot.activeElement;
    const activeSearchElement = currentActiveItem.shadowRoot.activeElement;
    const classListOfActiveSearchElement = [...activeSearchElement.classList];
    if (classListOfActiveSearchElement.includes('input-search-field')) {
      event.preventDefault();
      const helpMenuItemList = currentActiveItem.parentElement.parentElement.querySelectorAll('.help-item-a');
      this.makeItemFocused(helpMenuItemList[helpMenuItemList.length - 1]);
    }
  }
  onMakeItemFocused(currentActiveItem, siblingElement) {
    var _a;
    const toBeActiveElement = (_a = currentActiveItem[siblingElement]) === null || _a === void 0 ? void 0 : _a.firstChild;
    if (toBeActiveElement) {
      this.makeItemFocused(toBeActiveElement);
    }
    else {
      if (siblingElement === 'previousSibling') {
        const toBeActiveElementFirstSibling = currentActiveItem.parentElement.lastChild.firstChild;
        this.makeItemFocused(toBeActiveElementFirstSibling);
      }
      else {
        const toBeActiveElementLastSibling = currentActiveItem.parentElement.firstChild.firstChild;
        this.makeItemFocused(toBeActiveElementLastSibling);
      }
    }
  }
  makeItemFocused(item) {
    if (item) {
      item.focus();
    }
  }
  clearNavItemDropdowns() {
    this.navItems.map((item) => {
      if (item.dropdownSubmenuItems) {
        item.dropdownSubmenuItems.map((subItem) => {
          subItem.menuItemChecked = false;
          return subItem;
        });
      }
      return item;
    });
  }
  handleAriaLabelNavItems(item, selectedId, index) {
    const navItemAriaLabel = `${item.label} ${this.navbarTabItemLabel}`;
    const navItemIndex = index + 1;
    const navItemCountAriaLabel = `${navItemAriaLabel} ${navItemIndex} ${this.navbarSelectedItemAriaLabel} ${this.navItems.length}`;
    const navItemSelectedAriaLabel = `${navItemAriaLabel} ${this.navbarMenuItemsAriaLabel} ${navItemIndex} ${this.navbarSelectedItemAriaLabel} ${this.navItems.length}`;
    if (selectedId) {
      return (item.id == this.selectedId) ? navItemSelectedAriaLabel : navItemCountAriaLabel;
    }
    else {
      return navItemCountAriaLabel;
    }
  }
  onLoadMobileMenu() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: [!this.hideMobileMenu && this.openMobileMenu ? 'show' : 'hide', 'outer-mobile-nav-wrapper'].join(' '), ref: (el) => this.mobileNavWrapper = el }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: `mobile-menu enhanced-mobile-menu ${!this.hideMobileMenu && this.openMobileMenu ? 'top-ease-in' : 'top-ease-out'}` }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mobile-nav-wrapper" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { ref: (el) => this.hamburgerMenuUL = el, class: "mobile-nav-container" }, this.navItems.map((item, index) => {
      var _a;
      return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['mobile-nav-item-wrapper', item.isDropdown && item.isDropdownExpanded ? 'expanded' : null].join(' '), onClick: (event) => {
          this.handleNavClick(event, item, 'accordion');
          !item.isDropdown && this.toggleMobileMenu();
          !item.isDropdown && (this.selectedId = item.id);
        } }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'checkbox-wrapper' }, (!item.dropdownSubmenuItems || ((_a = item.dropdownSubmenuItems) === null || _a === void 0 ? void 0 : _a.length) === 0) && this.selectedId === item.id ||
        item.dropdownSubmenuItems && item.dropdownSubmenuItems.length > 0 && !item.isDropdownExpanded && item.id == this.selectedId ?
        (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": 'true', "data-name": 'checkmark', class: 'checkmark', "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER }))
        : null), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: [
          item.isDropdown ? 'mobile-nav-accordion-header' : null,
          item.isDropdown && item.isDropdownExpanded ? 'expanded' : null
        ].join(' ') }, item.dropdownSubmenuItems && item.dropdownSubmenuItems.length > 0 ?
        Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { id: `accordion-button-${item.id}`, class: ['mobile-nav-item accordion-button', item.isDropdownExpanded ? 'is-expanded' : ''].join(' '), "aria-label": this.handleAriaLabelNavItems(item, this.selectedId, index), "aria-expanded": item.isDropdownExpanded ? 'true' : 'false', "aria-hasPopup": 'true', onClick: (event) => {
            this.activeAccordion = event.target;
          } }, item.label) :
        Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { id: `sidebar-nav-item-${item.id}`, class: "mobile-nav-item", "aria-label": this.handleAriaLabelNavItems(item, this.selectedId, index), href: item.href }, item.label), item.dropdownSubmenuItems && item.dropdownSubmenuItems.length > 0 &&
        Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { class: 'mobile-nav-accordion-caret-down', "aria-hidden": "true", "data-name": item.isDropdownExpanded ? 'caret-up' : 'caret-down', "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER }))), item.isDropdown && item.isDropdownExpanded ?
        Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'accordion-menu-container' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_menu, { "data-id": `accordion-menu-${item.id}`, class: 'accordion-menu', items: item.dropdownSubmenuItems, parentTargetElement: `accordion-button-${item.id}`, isLinksDropdown: "true", onHandleCloseEvent: (event) => this.handleNavDropdownClick(event, index, 'mobile'), onCelMenuItemClicked: (event) => this.handleNavDropdownClick(event, index, 'mobile'), enableMenuCheckboxes: "true", "data-end-to-end-id": `${this.endToEndId}-${item.label}-mobile-tab-dropdown-menu` }))
        : null));
    })), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mobile-help-container" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", null, this.helpMenuItems.map((item, index) => (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { class: "mobile-help-item", id: `sidebar-help-item-${index}`, tabindex: "0", href: item.href, onClick: () => { this.helpClick.emit(item); }, "aria-label": item.label }, item.label))))))))));
  }
  collapseAccordionHamburgerItems() {
    let navItems = [...this.navItems];
    const collapseAllItems = navItems.map((navItem) => {
      if (navItem.isDropdown && navItem.isDropdownExpanded) {
        navItem.isDropdownExpanded = false;
      }
      return navItem;
    });
    this.navItems = collapseAllItems;
  }
  handleOpenMobileMenuChange() {
    if (this.openMobileMenu) {
      this.hamburgerEl.classList.add('open');
      setTimeout(() => {
        this.focusFirstHamburgerItem();
      }, 50);
    }
    else {
      this.hamburgerEl.classList.remove('open');
      this.collapseAccordionHamburgerItems();
      this.menuEl.focus();
      this.isFirstLoadOfHamburgerMenu = true;
    }
  }
  handleResize() {
    var _a, _b;
    this.navContainerWidth = (_b = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.top-nav-wrapper')) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().width;
    if (!this.alwaysShowHamburger) {
      this.updateCurrentNavView();
    }
  }
  calculateDefaultWidths() {
    var _a, _b, _c, _d;
    this.leftNavItemsDefaultWidth = (_b = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.left-container')) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().width;
    this.rightNavItemsDefaultWidth = (_d = (_c = this.el.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('.right-container')) === null || _d === void 0 ? void 0 : _d.getBoundingClientRect().width;
  }
  ;
  updateCurrentNavView() {
    if (this.navContainerWidth && this.leftNavItemsDefaultWidth && this.rightNavItemsDefaultWidth) {
      if (((this.navContainerWidth - (this.leftNavItemsDefaultWidth + this.rightNavItemsDefaultWidth)) >= this.minimumInterContainerSpace) || this.navItems.length == 0) {
        this.view = _cel_navbar_constants_bce10811_js__WEBPACK_IMPORTED_MODULE_8__["C"].DESKTOP;
        this.showHamburger = false;
      }
      else {
        this.view = _cel_navbar_constants_bce10811_js__WEBPACK_IMPORTED_MODULE_8__["C"].MOBILE;
        this.showHamburger = true;
      }
    }
  }
  componentDidUpdate() {
    this.updateNavbarItemsSpacing();
  }
  updateNavbarItemsSpacing() {
    if (this.tabEl && this.selectedId && !this.alwaysShowHamburger) {
      this.createUnderlineForSelectedItem(this.selectedId);
    }
    if (this.tabEl && this.view == _cel_navbar_constants_bce10811_js__WEBPACK_IMPORTED_MODULE_8__["C"].MOBILE) {
      this.tabEl.style.width = 'unset';
    }
  }
  getNavContainerBreakpoint() {
    return this.navContainerWidth <= 576 ? true : false;
  }
  handleCelPopOverCloseEvent(event) {
    if (event.detail && event.detail.returnFocusIdentifier && event.detail.isKeyboardEvent) {
      const { returnFocusIdentifier } = event.detail;
      const syncDeviceBtn = this.el.shadowRoot.querySelector(`.sync-state-button[data-identifier="${returnFocusIdentifier}"]`)
        .shadowRoot.querySelector('.button--text');
      syncDeviceBtn === null || syncDeviceBtn === void 0 ? void 0 : syncDeviceBtn.focus();
    }
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const style = { backgroundColor: 'var(--primaryShade)' };
    const notDesktop = this.view != _cel_navbar_constants_bce10811_js__WEBPACK_IMPORTED_MODULE_8__["C"].DESKTOP;
    const accountMenuItems = [];
    let signOutButtonConfig;
    if (this.showEnhancedAccountDropdown) {
      if (!this.hideEnhancedSignOutStyling) {
        signOutButtonConfig = this.avatarMenuItems[this.avatarMenuItems.length - 1];
      }
      this.avatarMenuItems.forEach((item) => {
        if (item !== signOutButtonConfig) {
          accountMenuItems.push(item);
        }
      });
    }
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2', "data-end-to-end-id": this.endToEndId }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { role: "navigation", class: [(this.hasTitleBar ? 'top-nav-wrapper top-nav-wrapper-title-bar' : 'top-nav-wrapper')].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "left-container" }, this.showHamburger ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "menu-trigger-container" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { disabled: this.disableNavItems.disableHamburger, class: 'menu-trigger enhanced-menu-trigger', ref: (el) => (this.menuEl = el), "aria-label": this.hamburgerButtonAriaLabel, "aria-disabled": this.disableNavItems.disableHamburger ? 'true' : 'false', "aria-expanded": this.hamburgerButtonAriaExpanded, "aria-haspopup": this.hamburgerButtonAriaHaspopup, title: ((_a = this.externalNavItemsTooltip) === null || _a === void 0 ? void 0 : _a.menuTitle) ? this.externalNavItemsTooltip.menuTitle : null, onFocus: () => this.onHamburgerEvent(true), onBlur: () => this.onHamburgerEvent(false), onClick: () => this.handleMobileMenu() }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { ref: (el) => this.hamburgerEl = el, class: "hamburger-icon menu-trigger-icon" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null)), this.offlineSupport && this.showSyncStatusWithHamburgerButton ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { onMouseEnter: () => { this.syncEnter.emit(); this.showSyncStateDetails = true; }, onMouseLeave: () => { this.syncLeave.emit(); this.showSyncStateDetails = false; } }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": "true", class: "menu-sync", "data-name": this.syncStateConfig.iconName, "data-color": this.syncStateConfig.iconColor, "data-size": this.hamburgerIconSize ? this.hamburgerIconSize : this.iconSize }), this.showSyncStateDetails ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "sync-state-details-container" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_popover, { "data-label": this.syncStateConfig.tooltipText, "data-end-to-end-id": `${this.endToEndId}-${this.syncStateConfig.tooltipText}-popover` }))) : null)) : null))) : null, this.showLaunchRealizeLogo ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("cel-button", { color: _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].WHITE, class: [(notDesktop ? 'logo logo--mobile' : 'logo'), 'launch-realize-button'].join(' '), "data-button-aria-label": this.logoAriaLabel ? this.logoAriaLabel : "Launch Realize", onClick: () => this.logoClick.emit(), "data-name": "launch-realize", iconType: _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_7__["a"].MIDDLE, variant: _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_7__["C"].SOLID, "data-end-to-end-id": `${this.endToEndId}-launch-realize-logo-button` })
      :
        Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { "aria-label": this.logoAriaLabel, title: ((_b = this.externalNavItemsTooltip) === null || _b === void 0 ? void 0 : _b.logoTitle) ? this.externalNavItemsTooltip.logoTitle : null, class: { ['logo']: true, ['logo--mobile']: notDesktop }, href: this.logoHref, onClick: () => {
            this.logoClick.emit();
            this.openMobileMenu = false;
            this.hamburgerButtonAriaExpanded = 'false';
          }, tabindex: "0", role: "link" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { width: this.logoWidth, height: this.logoHeight, src: this.logoSrc, alt: this.logoAltText, ref: (el) => (this.logoEl = el) })), this.view == _cel_navbar_constants_bce10811_js__WEBPACK_IMPORTED_MODULE_8__["C"].DESKTOP && !this.disableTabs ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", null, this.navItems.map((item, index) => (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { class: { ['tab-item']: true, ['tab-item--selected']: item.id == this.selectedId }, "data-id": item.id, onClick: (event) => this.handleTabSelect(event, item) }, item.isDropdown ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: {
          ['tab-anchor']: true,
          ['tab-anchor-dropdown-open']: (this.activeUtility == `${item.id}`),
        }, id: item.id, "aria-label": this.handleAriaLabelNavItems(item, this.selectedId, index), onClick: (event) => this.handleNavClick(event, item), onMouseEnter: () => { this.navEnter.emit(item); item.id == this.selectedId ? this.navItemHover = true : false; }, onMouseLeave: () => { this.navLeave.emit(item); this.navItemHover = false; }, onFocus: () => { this.navFocus.emit(item); }, onBlur: () => { this.navBlur.emit(item); }, "data-utility-id": item.id, "aria-expanded": this.activeUtility == `${item.id}` ? 'true' : 'false', "aria-haspopup": "true", ref: (el) => (this.linkElList[index] = el) }, item.label, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": "true", class: { ['dropdown-icon']: true, ['dropdown-icon--selected']: item.id == this.selectedId }, "data-name": "caret-down", "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER, "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].REGULAR, "data-utility-id": item.id })) :
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { class: "tab-anchor", id: item.id, href: item.href, "aria-label": this.handleAriaLabelNavItems(item, this.selectedId, index), onClick: (event) => this.handleNavClick(event, item), onMouseEnter: () => { this.navEnter.emit(item); item.id == this.selectedId ? this.navItemHover = true : false; }, onMouseLeave: () => { this.navLeave.emit(item); this.navItemHover = false; }, onFocus: () => { this.navFocus.emit(item); }, onBlur: () => { this.navBlur.emit(item); }, "data-utility-id": item.id, ref: (el) => (this.linkElList[index] = el) }, item.label), this.activeUtility == `${item.id}` && item.dropdownSubmenuItems && item.dropdownSubmenuItems.length > 0 && item.isDropdown ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_menu, { class: "nav-dropdown", items: item.dropdownSubmenuItems, parentTargetElement: this.linkElList[index], isLinksDropdown: "true", onCelMenuItemClicked: (event) => this.handleNavDropdownClick(event, index), enableMenuCheckboxes: "true", "data-end-to-end-id": `${this.endToEndId}-${item.label}-tab-dropdown-menu` })
      : null))))) : null, this.view == _cel_navbar_constants_bce10811_js__WEBPACK_IMPORTED_MODULE_8__["C"].DESKTOP && !this.disableTabs && Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.animateTab ? "tab-animated" : "tab", style: this.navItemHover && style, ref: (el) => (this.tabEl = el) })), this.offlineSupport && !this.showSyncStatusWithHamburgerButton ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mid-container", "aria-live": "polite" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_button, { class: "sync-state-button", "data-label": this.syncStateConfig.label, "data-color": this.syncStateConfig.iconColor, "data-name": this.syncStateConfig.iconName, "data-icon-type": "left", "data-variant": "text", "data-button-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["b"].SMALL, "data-button-aria-label": this.syncStateConfig.label, onClick: () => { this.syncEnter.emit(); this.showSyncStateDetails = true; }, "aria-haspopup": true, "data-identifier": "sync-state-cel-button" }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "sync-state-details-container" }, this.showSyncStateDetails ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_popover, { class: "sync-state-popover", "data-label": this.syncStateConfig.tooltipText, "data-end-to-end-id": `${this.endToEndId}-${this.syncStateConfig.tooltipText}-popover`, "data-show-close": true, onCelPopOverCloseEvent: () => { this.showSyncStateDetails = false; this.syncLeave.emit(); }, onCelPopoverWindowClick: () => { this.showSyncStateDetails = false; this.syncLeave.emit(); }, onCelPopOverBlurEvent: () => { this.showSyncStateDetails = false; this.syncLeave.emit(); }, "data-return-focus-identifier": "sync-state-cel-button", "data-focus-close": true, "data-close-button-identifier": "popover-close-button", "data-close-icon-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].REGULAR })) : null))) : null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "right-container" }, this.showSearch ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: { ['utility-container']: true, ['utility-container--mobile']: notDesktop } }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { "data-tooltip-label": (_c = this.externalNavItemsTooltip) === null || _c === void 0 ? void 0 : _c.searchTitle, "data-icon-button-aria-label": this.searchAriaLabel, "data-utility-id": "search", class: "utility", "data-name": "search", onClick: (event) => this.disableNavItems.disableSearch ? '' : this.handleUtility(event), "data-size": this.iconSize, "data-disabled": this.disableNavItems.disableSearch, "data-end-to-end-id": `${this.endToEndId}-search-icon-button`, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER }), this.activeUtility == 'search' && !this.disableDefaultSearch ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: { ['search-dropdown']: true, ['search-dropdown--mobile']: notDesktop }, ref: (el) => (this.searchDropdownEl = el) }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_search_field, { "data-focus-element": "true", "data-show-search-results": 'false', "data-field-placeholder": this.searchPlaceholder, onCelSearchFieldSubmit: (event) => this.searchSubmit.emit(event.detail), "data-end-to-end-id": `${this.endToEndId}-search-field` }), this.restrictSearchLabel ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_checkbox_item, { "data-label": this.restrictSearchLabel, class: "search-checkbox", "data-end-to-end-id": `${this.endToEndId}-${this.restrictSearchLabel}-checkbox` }) : null)) : null)) : null, this.showBookmark ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: { ['utility-container']: true, ['utility-container--mobile']: notDesktop } }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { "data-tooltip-label": this.bookmarkSelected ? (_e = (_d = this.externalNavItemsTooltip) === null || _d === void 0 ? void 0 : _d.bookmarkTitle) === null || _e === void 0 ? void 0 : _e.pageBookmarked : (_g = (_f = this.externalNavItemsTooltip) === null || _f === void 0 ? void 0 : _f.bookmarkTitle) === null || _g === void 0 ? void 0 : _g.pageNotBookmarked, "data-utility-id": "bookmark", "data-icon-button-aria-label": this.bookmarkAriaLabel, class: "utility", "data-name": this.bookmarkSelected ? 'bookmark-selected' : 'bookmark-unselected', "data-toggle": true, "data-size": this.iconSize, "data-pressed": this.bookmarkSelected, "data-disabled": this.disableNavItems.disableBookmark, onClick: (event) => { this.disableNavItems.disableBookmark ? '' : this.bookmarkSelected = !this.bookmarkSelected; this.disableNavItems.disableBookmark ? '' : this.handleUtility(event); }, "data-end-to-end-id": `${this.endToEndId}-bookmark-icon-button`, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER }))) : null, this.showAnnouncements ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: { ['utility-container']: true, ['utility-container--mobile']: notDesktop } }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { "data-icon-button-aria-label": this.announcementAriaLabel, "data-utility-id": "announcements", class: "utility", "data-name": "announcements", "data-toggle": true, "data-size": this.iconSize, "data-pressed": this.activeUtility == 'announcements', onClick: (event) => this.handleUtility(event), "data-end-to-end-id": `${this.endToEndId}-announcements-icon-button`, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER }))) : null, this.showTextSize ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: { ['utility-container']: true, ['utility-container--mobile']: notDesktop } }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_radio_popup, { class: "size-dropdown", "data-icon-name": 'text-size', menuItems: this.sizeMenuItems, "data-button-disabled": this.disableNavItems.disableTextsize, "data-button-tooltip-label": (this.externalNavItemsTooltip
        && this.externalNavItemsTooltip.fontSizeTitle) ?
        this.externalNavItemsTooltip.fontSizeTitle
        : this.textSizeAriaLabel, "data-button-size": this.iconSize, onCelRadioPopupButtonClicked: () => {
        this.disableNavItems.disableTextsize ? ''
          : this.utilityClick.emit('size');
      }, onCelRadioPopupMenuItemSelectedEvent: (event) => this.sizeSelected.emit(event.detail), "data-end-to-end-id": `${this.endToEndId}-text-size-radio-popup`, "data-icon-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER }))) : null, this.showNotifications ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: { ['utility-container']: true, ['utility-container--mobile']: notDesktop } }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { "data-utility-id": "notif", "data-icon-button-aria-label": this.notificationAriaLabel, class: "utility", "data-name": "alarm-bell", "data-toggle": true, "data-size": this.iconSize, "data-pressed": this.activeUtility == 'notif', onClick: (event) => this.handleUtility(event), "data-end-to-end-id": `${this.endToEndId}-notifications-icon-button`, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER }), this.notificationInterface && this.notificationInterface.notificationCount ? Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "new" }) : null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { "aria-live": "polite" }, this.activeUtility == 'notif' && !this.showEnhancedNotifications && this.notificationInterface ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "notifications-dropdown" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "notification-label" }, this.notificationInterface.notificationCount
      ? this.notificationInterface.notificationSecondMessage
      : this.notificationInterface.notificationFirstMessage), this.notificationInterface.notificationSecondMessage && this.notificationInterface.notificationCount ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_text_link, { "data-focus-element": "true", "data-label": this.notificationInterface.viewLinkLabel, "data-link-href": "javascript://", onClick: () => this.onLink.emit(), "data-end-to-end-id": `${this.endToEndId}-notification-link` })) : null)) : null, this.activeUtility == 'notif' && this.showEnhancedNotifications ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_notification_board, { class: "enhanced-notifications-dropdown", headerLabel: this.notificationBoardInterface.headerLabel, footerLabel: this.notificationBoardInterface.footerLabel, footerAriaLabel: this.notificationBoardInterface.footerAriaLabel, footerHref: this.notificationBoardInterface.footerHref, hideFooter: this.notificationBoardInterface.hideFooter, disableFooter: this.notificationBoardInterface.disableFooter, dismissAllLabel: this.notificationBoardInterface.dismissAllLabel, dismissAllAriaLabel: this.notificationBoardInterface.dismissAllAriaLabel, disableDismissAll: this.notificationBoardInterface.disableDismissAll, hideDismissAll: this.notificationBoardInterface.hideDismissAll, loaderAriaLabel: this.notificationBoardInterface.loaderAriaLabel, showLoader: this.notificationBoardInterface.showLoader, notificationItems: this.notificationItems }) : null))) : null, this.showHelp && !this.showHamburger ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: { ['utility-container']: true, ['utility-container--mobile']: notDesktop } }, this.enableHelpWithExternalLink ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { "data-utility-id": "external-help-link", "data-icon-button-aria-label": this.helpAriaLabel, class: "utility", "data-name": "question-circle", "data-size": this.iconSize, onClick: (event) => this.handleUtility(event), "data-is-external-link": "true", "data-end-to-end-id": `${this.endToEndId}-external-link-help-icon-button`, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER }))
      : (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { "data-utility-id": "help", "data-icon-button-aria-label": this.helpAriaLabel, class: "utility", "data-name": "question-circle", "data-toggle": true, "data-size": this.iconSize, "data-pressed": this.activeUtility == 'help', onClick: (event) => this.handleUtility(event), "data-end-to-end-id": `${this.endToEndId}-help-icon-button`, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER }), this.activeUtility == 'help' ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "help-dropdown" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "help-search-container" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_search_field, { ref: (el) => (this.helpSearchEl = el), "data-focus-element": "true", "data-show-search-results": 'false', "data-show-field-label": this.showHelpSearchFieldLabel, "data-field-label": this.helpSearchFieldLabel, "data-field-aria-label": this.helpSearchFieldLabel, "data-field-placeholder": this.helpPlaceholder, onCelSearchFieldSubmit: (event) => this.helpSearchSubmit.emit(event.detail), "data-end-to-end-id": `${this.endToEndId}-help-search-field` })), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { class: "help-item-container" }, this.helpMenuItems.map((item) => (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { class: "help-item", onClick: () => { this.helpClick.emit(item); this.activeUtility = null; } }, item.isButton ?
        Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "help-item-a help-item-button", tabindex: "0", "aria-label": item.ariaLabel ? item.ariaLabel : null }, item.label)
        :
          Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { class: "help-item-a", tabindex: "0", role: "link", href: item.href }, item.label))))))) : null)))) : null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "profile-container-wrapper" }, this.showUserProfileIcon ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { "data-utility-id": "profile", "data-icon-button-aria-label": this.userSettingsAriaLabel + (this.profileName ? this.profileName : ''), "data-icon-button-aria-expanded": this.activeUtility == 'profile' ? 'true' : 'false', "data-icon-button-aria-haspopup": true, class: {
          ['utility']: true,
          ['profile-container']: true,
          ['profile-container--mobile']: notDesktop,
          ['profile-container--hover']: this.avatarHovered || this.activeUtility == 'profile',
        }, "data-name": "user", "data-size": this.iconSize, "data-pressed": this.activeUtility == 'profile', "data-disabled": this.disableNavItems.disableSettings ? 'true' : 'false', onClick: (event) => this.handleUtility(event), "data-end-to-end-id": `${this.endToEndId}-user-profile-icon-button`, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER }) :
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { disabled: this.disableNavItems.disableSettings, ref: (el) => this.avatarButtonEl = el, "aria-label": this.userSettingsAriaLabel, "aria-disabled": this.disableNavItems.disableSettings ? 'true' : 'false', title: ((_h = this.externalNavItemsTooltip) === null || _h === void 0 ? void 0 : _h.userSettingsTitle) ? this.externalNavItemsTooltip.userSettingsTitle : this.profileName, "data-utility-id": "profile", "aria-expanded": this.activeUtility == 'profile' ? 'true' : 'false', "aria-haspopup": "true", class: {
          ['profile-container']: true,
          ['enhanced-profile-icon']: true,
          ['profile-container--mobile']: notDesktop,
          ['profile-container--hover']: this.avatarHovered || this.activeUtility == 'profile',
          ['profile-container-dashboard-reader']: true
        }, onMouseEnter: () => (this.avatarHovered = true), onMouseLeave: () => { this.avatarHovered = false; }, onClick: (event) => this.handleUtility(event) }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { width: this.avatarWidth, height: this.avatarHeight, class: "avatar", src: this.avatarSrc, "aria-hidden": "true", alt: _cel_navbar_constants_bce10811_js__WEBPACK_IMPORTED_MODULE_8__["n"] }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { "data-utility-id": "profile", class: ['profile-name-container', this.getNavContainerBreakpoint() && 'profile-name-initials-container'].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { "data-utility-id": "profile", class: 'first-name' }, this.getNavContainerBreakpoint() ? (_j = this.userFirstName) === null || _j === void 0 ? void 0 : _j.charAt(0) : this.userFirstName), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { "data-utility-id": "profile", class: 'last-name' }, this.getNavContainerBreakpoint() ? (_k = this.userLastName) === null || _k === void 0 ? void 0 : _k.charAt(0) : this.userLastName))), this.activeUtility == 'profile' ? (this.showEnhancedAccountDropdown ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_account_menu, { class: "avatar-dropdown enhanced-dropdown", "data-user-first-name": this.userFirstName, "data-user-last-name": this.userLastName, "data-avatar-image-src": this.avatarSrc, accountMenuItems: accountMenuItems, signOutButtonConfig: signOutButtonConfig, "data-copyright-label": this.copyrightLabel, "data-agreement-label": this.agreementLabel, "data-agreement-href": this.agreementHref, "data-privacy-label": this.privacyLabel, "data-privacy-href": this.privacyHref, "data-credits-label": this.creditsLabel, "data-credits-href": this.creditsHref, "data-revision-tag": this.revisionTag, "data-show-revision-tag": this.showRevisionTag, "data-show-credits": this.showCredits, "data-hide-sign-out": this.hideEnhancedSignOutStyling, "data-hide-avatar": this.hideDropdownAvatar, "data-open-in-new-tab-link-text": this.openInNewTabLinkText, parentTargetElement: this.avatarButtonEl, "data-end-to-end-id": `${this.endToEndId}-account-dropdown` })
      : Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_menu, { onCelMenuItemClicked: (event) => this.avatarMenuClick.emit(event.detail), class: "avatar-dropdown", items: this.avatarMenuItems, parentTargetElement: this.avatarButtonEl, "data-end-to-end-id": `${this.endToEndId}-simple-account-dropdown` })) : null))), this.onLoadMobileMenu()));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "selectedId": ["handleSelectedIdChange"],
    "openMobileMenu": ["handleOpenMobileMenuChange"]
  }; }
};
CelNavbar.style = celNavbarCss;

const celNumberInputCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:-ms-flexbox;display:flex}label{font-family:var(--number-input-font-family, \"OpenSans-Semibold\");font-size:var(--number-input-font-size, 0.875rem);color:var(--number-input-label-color, #333)}.quantity input{-webkit-box-sizing:border-box;box-sizing:border-box;width:66%;line-height:1.65;margin:0;padding:7px 10px;border-radius:2px;border:none;-webkit-box-shadow:0 0 0 1px rgba(0, 0, 0, 0.08);box-shadow:0 0 0 1px rgba(0, 0, 0, 0.08);font-size:1rem;-moz-appearance:textfield}.quantity input:focus,.quantity input.active{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}.quantity input:disabled{border:none;outline:none;background-color:#e2e2e2}.input-wrapper{display:-ms-flexbox;display:flex;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:var(--input-wrapper-margin-top, 5px);outline:var(--number-input-wrapper-outline, 1px solid #333)}.button-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:33%;margin:0;padding:0;position:absolute;right:0;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;-ms-flex-negative:1;flex-shrink:1;-ms-flex-align:center;align-items:center;border-left:1px solid #e2e2e2}.quantity-button{-webkit-box-sizing:border-box;box-sizing:border-box;height:50%;cursor:pointer;border:none;width:100%;text-align:center;padding:0;background-color:var(--number-input-field-button-background, #f9f9f9)}button:disabled{cursor:not-allowed;background-color:#e2e2e2}.quantity-up{border-top-right-radius:2px;border-bottom:1px solid #e2e2e2;width:100%}.quantity-down{border-bottom-right-radius:2px;width:100%}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0}.quantity-button:hover{background-color:#e2e2e2}.quantity-button:active{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:#006be0;outline-offset:var(--focus-ring-outline-offset, -4px)}.quantity-button:disabled{border:none}";

const CelNumberInput = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.celNumberInputOnValueChange = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNumberInputOnValueChange", 7);
    this.numberInputId = `cel-sb-${numberInputIds++}`;
    this.isPreviousValueEmptyWithMinDefined = false;
    this.getColor = () => {
      if (this.disabled) {
        return _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].DISABLED;
      }
      else {
        return this.color;
      }
    };
    this.countNumber = (num, stepCount, decrementStep) => {
      if (decrementStep && this.min != undefined && num <= this.min) {
        return num;
      }
      if (!decrementStep && this.max != undefined && num >= this.max) {
        return num;
      }
      const numberIncrement = (Number(num) + stepCount);
      const decimals = String(this.step).split('.');
      const decimalsCount = decimals[1] ? decimals[1].length : 0;
      const numberIncrementDecimals = String(num).split('.');
      const numberIncrementDecimalsCount = numberIncrementDecimals[1] ? numberIncrementDecimals[1].length : 0;
      const toFixedValue = decimalsCount > numberIncrementDecimalsCount ? decimalsCount : numberIncrementDecimalsCount;
      const roundOfNumber = Number(numberIncrement).toFixed(toFixedValue);
      if (decrementStep && this.min != undefined && Number(roundOfNumber) < this.min) {
        return num;
      }
      if (!decrementStep && this.max != undefined && Number(roundOfNumber) > this.max) {
        return num;
      }
      return Number(roundOfNumber);
    };
    this.value = undefined;
    this.color = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].PRIMARY;
    this.step = 1;
    this.min = undefined;
    this.max = undefined;
    this.width = '80px';
    this.disabled = false;
    this.placeholder = undefined;
    this.label = undefined;
    this.required = false;
    this.incrementButtonAriaLabel = 'increase value';
    this.decrementButtonAriaLabel = 'decrease value';
  }
  connectedCallback() {
    this.cel_icon = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon', 'cel-number-input', this.el);
  }
  emitValueChange() {
    this.value = this.numberInputElement.value;
    this.celNumberInputOnValueChange.emit(this.numberInputElement.value);
  }
  onUpValue() {
    this.checkIfValueIsNotEmpty();
    const stepValue = this.isPreviousValueEmptyWithMinDefined ? 0 : this.step;
    this.value = this.countNumber(Number(this.value), stepValue, false);
    this.isPreviousValueEmptyWithMinDefined = false;
  }
  onDownValue() {
    this.checkIfValueIsNotEmpty();
    this.value = this.countNumber(Number(this.value), -this.step, true);
    this.isPreviousValueEmptyWithMinDefined = false;
  }
  /* Set value for number input field when value is undefined */
  checkIfValueIsNotEmpty() {
    if (this.value === undefined) {
      if (this.min !== undefined) {
        this.isPreviousValueEmptyWithMinDefined = true;
        if ((this.min > 0 && this.min < 1) || this.min >= 1) {
          this.value = this.min;
        }
        else if (this.min === 0) {
          this.value = this.step;
        }
      }
      else {
        this.isPreviousValueEmptyWithMinDefined = false;
        this.value = 0;
      }
    }
  }
  componentWillLoad() {
    /* Negative number is not supported so min will be 0 if it is undefined or less than 0 */
    if (this.min === undefined || this.min < 0) {
      this.min = 0;
    }
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "quantity", style: { minWidth: "80px", width: this.width } }, this.label && (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { id: this.label, htmlFor: this.numberInputId }, this.label)), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-wrapper" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { "aria-labelledby": this.label, type: "number", ref: (el) => (this.numberInputElement = el), id: this.numberInputId, onInput: this.emitValueChange.bind(this), disabled: this.disabled, placeholder: (this.placeholder && this.placeholder.slice(0, 4)), required: this.required && true, max: this.max, min: this.min, step: this.step, value: this.value }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "button-wrapper" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { tabindex: -1, class: "quantity-button quantity-up", onClick: this.onUpValue.bind(this), disabled: this.disabled, "aria-label": this.incrementButtonAriaLabel }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "data-name": "caret-up", "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].MEDIUM, "data-padding": "3px", "data-color": this.getColor(), "data-toggle": true, "aria-hidden": "true" })), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { tabindex: -1, class: "quantity-button quantity-down", onClick: this.onDownValue.bind(this), disabled: this.disabled, "aria-label": this.decrementButtonAriaLabel }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "data-name": "caret-down", "data-padding": "3px", "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].MEDIUM, "data-color": this.getColor(), "data-toggle": true, "aria-hidden": "true" })))))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
let numberInputIds = 0;
CelNumberInput.style = celNumberInputCss;

const celPaginateCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;color:var(--paginate-color, #333);font-family:var(--paginate-items-font-family, \"OpenSans-Semibold\");font-size:var(--paginate-items-dont-size, 0.875rem)}.select{--single-select-width:var(--paginate-select-width, 5rem);margin:var(--paginate-select-margin, 0 0.5rem)}.first{margin:var(--paginate-first-margin, 0 0.5rem 0 2rem)}.pages{margin:var(--paginate-pages-margin, 0 1rem)}.items{margin:var(--paginate-items-margin, 0)}.last{margin:var(--paginate-last-margin, 0 0 0 0.5rem)}.paginate-container{display:-ms-flexbox;display:flex;padding:0;margin:0}.paginate-container li{list-style:none;padding:0;margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.paginate-container ul{display:-ms-flexbox;display:flex;padding:0;margin:0}";

const CelPaginate = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.nextClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celPaginateNextClick", 7);
    this.backClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celPaginateBackClick", 7);
    this.firstClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celPaginateFirstClick", 7);
    this.lastClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celPaginateLastClick", 7);
    this.compact = undefined;
    this.itemsPerPage = undefined;
    this.selectedPerPage = undefined;
    this.dropdownPlaceholder = "Rows per page";
    this.selectItems = [];
    this.currentPage = undefined;
    this.totalItems = undefined;
    this.firstButtonAriaLabel = 'Go to first page';
    this.previousButtonAriaLabel = 'Go to previous page';
    this.nextButtonAriaLabel = 'Go to next page';
    this.lastButtonAriaLabel = 'Go to last page';
    this.paginationAriaLabel = 'Page navigation controls';
    this.ofLabel = 'of';
    this.pagesLabel = 'Pages';
    this.rowsPerPageLabel = 'Rows per page';
    this.rowsPerPageSelectAriaLabel = 'Select an option';
    this.hideSelect = false;
    this.hideRowCount = false;
  }
  connectedCallback() {
    this.cel_single_select = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-single-select', 'cel-paginate', this.el);
    this.cel_icon_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon-button', 'cel-paginate', this.el);
  }
  handleSelected(newSelected) {
    this.itemsPerPage = parseInt(newSelected);
  }
  componentWillLoad() {
    if (!this.selectedPerPage)
      return;
    this.handleSelected(this.selectedPerPage);
  }
  showCurrentPageItemsView(ofText) {
    return `${this.currentPage * this.itemsPerPage - this.itemsPerPage + 1} - ${Math.min(this.currentPage * this.itemsPerPage, this.totalItems)} ${ofText}`;
  }
  render() {
    const first = this.currentPage == 1;
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    const last = this.currentPage == totalPages;
    const withSelect = !!this.selectItems && !this.compact;
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { class: "paginate-container" }, withSelect && !this.hideSelect ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: "rows-label", htmlFor: "per-page-items" }, this.rowsPerPageLabel), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_single_select, { id: "per-page-items", class: "select", menuList: this.selectItems, primary: true, selected: this.selectedPerPage, placeholder: this.dropdownPlaceholder, ariaLabel: this.rowsPerPageSelectAriaLabel, onSingleSelectItemClicked: (ev) => (this.selectedPerPage = ev.detail.identifier) }))) : null, this.hideRowCount ? null : Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "items" }, this.showCurrentPageItemsView(this.ofLabel), ' ', this.totalItems)), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("nav", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { "aria-label": this.paginationAriaLabel }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { class: "first", "data-name": "chevron-first", "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].PRIMARY, "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].SMALL, "data-padding": "8px", "data-disabled": first ? 'true' : 'false', onClick: (ev) => this.firstClick.emit(ev), "data-icon-button-aria-label": this.firstButtonAriaLabel })), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { "data-name": "chevron-left", "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].PRIMARY, "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].SMALL, "data-padding": "8px", "data-disabled": first ? 'true' : 'false', onClick: (ev) => this.backClick.emit(ev), "data-icon-button-aria-label": this.previousButtonAriaLabel })), !this.compact ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "pages" }, this.pagesLabel, " ", this.currentPage, " ", this.ofLabel, " ", totalPages))) : null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { "data-name": "chevron-right", "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].PRIMARY, "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].SMALL, "data-padding": "8px", "data-disabled": last ? 'true' : 'false', onClick: (ev) => this.nextClick.emit(ev), "data-icon-button-aria-label": this.nextButtonAriaLabel })), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { class: "last", "data-name": "chevron-last", "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].PRIMARY, "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].SMALL, "data-padding": "8px", "data-disabled": last ? 'true' : 'false', onClick: (ev) => this.lastClick.emit(ev), "data-icon-button-aria-label": this.lastButtonAriaLabel }))))))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "selectedPerPage": ["handleSelected"]
  }; }
};
CelPaginate.style = celPaginateCss;

const celPopoverCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}.popover-container{display:-ms-flexbox;display:flex;-ms-flex-direction:var(--popover-flex-direction, row-reverse);flex-direction:var(--popover-flex-direction, row-reverse);-ms-flex-pack:var(--popover-justify-content, space-between);justify-content:var(--popover-justify-content, space-between);position:absolute;width:var(--popover-width, -webkit-fit-content);width:var(--popover-width, -moz-fit-content);width:var(--popover-width, fit-content);max-width:var(--popover-max-width, 240px);max-height:var(--popover-max-height, auto);height:var(--popover-height, -webkit-fit-content);height:var(--popover-height, -moz-fit-content);height:var(--popover-height, fit-content);top:var(--popover-top, 0);left:var(--popover-left, 0);right:var(--popover-right, 0);bottom:var(--popover-bottom, 0);color:var(--popover-color, #333);font-family:var(--popover-font-family, \"OpenSans\");font-size:var(--popoover-font-size, 0.75rem);padding:var(--popover-padding, 0 2px 16px 16px);border-radius:var(--popover-border-radius, 4px);background-color:var(--popover-bg-color, #fff);-webkit-box-shadow:var(--popover-box-shadow, 0 3px 5px 0 rgba(0, 0, 0, 0.36));box-shadow:var(--popover-box-shadow, 0 3px 5px 0 rgba(0, 0, 0, 0.36));z-index:var(--popoover-z-index, 101)}.popover-container.hide-close{padding:var(--popover-hide-close-padding, 0 16px 16px 16px)}.popover-container .header-container{display:var(--popover-header-display, flex);background-color:var(--header-background-color);padding:var(--popover-header-padding, 4px 0 0 0)}.popover-container .body-container{padding:var(--popover-body-padding, 16px 0 0 0);margin:var(--popover-body-margin, 0);font-family:var(--popover-body-font, \"OpenSans\");font-size:var(--popover-body-font-size, 0.75rem);color:var(--popover-body-font-color, #333)}.popover-container .slot-container{padding-top:var(--popover-slot-container-padding-top, 16px)}";

const CelPopover = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.celPopOverCloseEvent = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celPopOverCloseEvent", 7);
    this.celPopOverBlurEvent = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celPopOverBlurEvent", 7);
    this.celPopOverFocusEvent = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celPopOverFocusEvent", 7);
    this.celPopoverWindowClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celPopoverWindowClick", 7);
    this.identifier = undefined;
    this.label = undefined;
    this.showClose = false;
    this.focusClose = false;
    this.returnFocusIdentifier = undefined;
    this.preventReturnFocusOnTabForwards = false;
    this.tooltipLabel = 'close popover';
    this.closeButtonIdentifier = undefined;
    this.closeIconSize = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].MEDIUM;
  }
  connectedCallback() {
    this.cel_icon_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon-button', 'cel-popover', this.el);
  }
  componentDidLoad() {
    if (this.showClose && this.closeIconBtn && this.focusClose) {
      setTimeout(() => {
        this.handleFocusClose();
      }, 0);
    }
  }
  handleFocusClose() {
    const closeButton = this.popoverElement.querySelector('.close-icon').shadowRoot.querySelector('button');
    closeButton === null || closeButton === void 0 ? void 0 : closeButton.focus();
  }
  handleFocusCloseChange() {
    if (this.focusClose && this.closeIconBtn) {
      setTimeout(() => {
        this.handleFocusClose();
      }, 0);
    }
  }
  handleCloseIconClick(event) {
    event.stopPropagation();
    if (event.detail && event.detail.id === this.closeButtonIdentifier) {
      if (this.returnFocusIdentifier) {
        let emittedBlurObj = {
          popoverCloseIdentifier: this.closeButtonIdentifier,
          returnFocusIdentifier: this.returnFocusIdentifier,
          isKeyboardEvent: event.type === 'mouseevent' ? false : true
        };
        this.celPopOverCloseEvent.emit(emittedBlurObj);
      }
      else {
        this.celPopOverCloseEvent.emit();
      }
    }
    if (this.openEl) {
      this.openEl.focus();
    }
  }
  ;
  handleIconButtonFocusEvent(event) {
    this.celPopOverFocusEvent.emit(event.detail);
  }
  handleWindowClick(event) {
    if (event.composedPath().includes(this.popoverElement)) {
      return;
    }
    else {
      this.celPopoverWindowClick.emit();
    }
  }
  blurHandler(event, isKeyboardEvent = false) {
    if (this.returnFocusIdentifier) {
      let emittedBlurObj = {
        popoverCloseIdentifier: event.detail,
        returnFocusIdentifier: this.returnFocusIdentifier,
        isKeyboardEvent: isKeyboardEvent
      };
      this.celPopOverBlurEvent.emit(emittedBlurObj);
    }
    else {
      this.celPopOverBlurEvent.emit(event.detail);
    }
  }
  handleKeyDown(event) {
    let emittedBlurObj = {
      popoverCloseIdentifier: event.detail,
      returnFocusIdentifier: this.returnFocusIdentifier,
      isKeyboardEvent: true
    };
    switch (event.key) {
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["E"]:
        if (this.showClose && event.composedPath().includes(this.closeIconBtn)) {
          if (this.returnFocusIdentifier) {
            this.celPopOverCloseEvent.emit(emittedBlurObj);
          }
          else {
            this.celPopOverCloseEvent.emit();
          }
        }
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["T"]:
        if (this.showClose && event.composedPath().includes(this.closeIconBtn) && event.shiftKey) {
          event.preventDefault();
          this.blurHandler(event, true);
        }
        else if (this.showClose && this.preventReturnFocusOnTabForwards && event.composedPath().includes(this.closeIconBtn) && !event.shiftKey) {
          return;
        }
        else if (this.showClose && event.composedPath().includes(this.closeIconBtn) && !this.preventReturnFocusOnTabForwards) {
          event.preventDefault();
          this.blurHandler(event, true);
        }
        break;
    }
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { id: this.identifier, ref: (el) => this.popoverElement = el, class: `popover-container ${!this.showClose ? 'hide-close' : ''} ` }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-container" }, this.showClose ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { ref: (el) => this.closeIconBtn = el, class: "close-icon", "data-identifier": this.closeButtonIdentifier, "data-name": "close", "data-size": this.closeIconSize, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER, "data-tooltip-label": this.tooltipLabel }) : null), this.label ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: "body-container" }, this.label)
      : null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "slot-container" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "focusClose": ["handleFocusCloseChange"]
  }; }
};
CelPopover.style = celPopoverCss;

const celPopupMenuCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:inline-block;position:relative;--pop-up-menu-box-shadow:var(--pop-up-menu-item-container-box-shadow, 0px 16px 42px 6px rgba(0, 0, 0, 0.25))}.open-button{z-index:var(--popup-menu-open-button-z-index, 1)}.menu-container{overflow:hidden;position:absolute;border-radius:var(--popup-menu-container-border-radius, 4px);-webkit-box-shadow:var(--pop-up-menu-box-shadow, 0 1px 2px 0 rgba(0, 0, 0, 0.5));box-shadow:var(--pop-up-menu-box-shadow, 0 1px 2px 0 rgba(0, 0, 0, 0.5));left:var(--popup-menu-container-left, 0);right:var(--popup-menu-container-right, none);top:var(--popup-menu-container-top, 37px);bottom:var(--popup-menu-container-bottom, none);z-index:var(--popup-menu-menu-container-z-index, 2)}.item-container{background-color:var(--popup-menu-item-bg-color, #fff);cursor:pointer;padding:var(--popup-menu-item-container, 9px 12px)}.item-container:hover{background-color:var(--popup-menu-item-bg-color, #cdcdcd)}.item-icon{pointer-events:none}.item-label{background-color:var(--popup-menu-label-bg-color, inherit);font-family:var(--popup-menu-label-font, \"OpenSans-Semibold\");font-size:var(--pop-menu-label-fontSize, 0.875rem);margin-left:var(--popup-menu-label-margin-left, 6px);pointer-events:none}.icon-label{--icon-label-color:var(--popup-menu-icon-label-color, #006be0);--icon-label-font-size:var(--popup-menu-icon-label-font-size, 1rem);--icon-label-font-family:var(--popup-menu-icon-label-font-family, Poppins-Medium);--icon-label-button-padding:var(--popup-menu-icon-label-padding, 6px 8px);--icon-label-gap:var(--popup-menu-icon-label-gap, 6px)}.icon-label:hover{--icon-label-hovered-color:var(--popup-menu-icon-label-hovered-color, #2150a3)}.icon-label:focus{--icon-label-focus-radius:var(--popup-menu-icon-label-focus-radius, 4px)}.menu{--menu-container-left:var(--popup-menu-container-left, 0);--menu-container-right:var(--popup-menu-container-right, none);--selected-icon-padding:var(--popup-menu-selected-icon-padding, 0 10px 0 2px)}.menu-item{--menu-item-img-height:var(--popup-menu-item-img-height, 30px);--menu-item-img-width:var(--popup-menu-item-img-width, 30px);--menu-item-container-reduced-padding:var(--popup-menu-item-container-reduced-padding, 5px 8px);--menu-item-wrap-text-height:var(--popup-menu-item-wrap-text-height, 54px);--menu-item-bg-color:var(--popup-menu-item-bg-color, #fff);--menu-item-bg-hover-color:var(--popup-menu-item-bg-hover-color, #EDEDED)}.menu-item-label{--menu-label-font:var(--popup-menu-item-label-font, OpenSans-Semibold);--menu-label-fontSize:var(--popup-menu-item-label-font-size, 0.875rem);--menu-label-margin-left:var(--popup-menu-item-label-margin-left, 6px);--menu-label-wrap-text-width:var(--popup-menu-item-label-wrap-text-width, 250px)}.menu-support-button{--menu-item-support-button-padding:var(--popup-menu-item-support-button-padding, 8px 8px 8px 0);--menu-support-button-width:var(--popup-menu-support-button-width, none);--menu-support-button-height:var(--popup-menu-support-button-height, none);--menu-support-button-padding:var(--popup-menu-support-button-padding, 8px 16px);--menu-support-button-border-radius:var(--popup-menu-support-button-border-radius, 4px);--menu-support-button-text-size:var(--popup-menu-support-button-text-size, 1rem);--menu-support-button-font-family:var(--popup-menu-support-button-font-family, Poppins-Medium)}";

const CelPopupMenu = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.itemSupportButtonClicked = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celPopUpMenuSupportButtonClicked", 7);
    this.itemClicked = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "popupMenuItemClicked", 7);
    this.open = false;
    this.buttonDisabled = false;
    this.iconName = 'more-vertical';
    this.iconSrc = undefined;
    this.buttonAriaLabel = 'quick actions menu';
    this.menuItems = [];
    this.secondaryMenuItems = [];
    this.showIconLabel = false;
    this.iconLabel = 'Menu Label';
    this.iconSize = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].SMALL;
    this.iconColor = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].PRIMARY;
    this.iconPosition = _cel_icon_label_constants_c23c6c5f_js__WEBPACK_IMPORTED_MODULE_2__["C"].LEFT;
    this.truncateLength = 74;
    this.itemSupportButtonVariant = _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_7__["C"].SOLID;
    this.itemSupportButtonIconColor = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].WHITE;
    this.itemSupportButtonIconType = _cel_button_constants_2362f78a_js__WEBPACK_IMPORTED_MODULE_7__["a"].MIDDLE;
    this.itemSupportButtonIconSize = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].SMALL;
    this.wrapText = false;
    this.isSupportButtonPresentInItem = false;
    this.iconLabelAriaLabel = null;
    this.identifier = undefined;
    this.enablePopupMenuCheckboxes = false;
    this.endToEndId = 'cel-popup-menu';
    this.returnFocus = undefined;
    this.upArrowPressed = false;
  }
  connectedCallback() {
    this.cel_menu = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-menu', 'cel-popup-menu', this.el);
    this.cel_icon_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon-button', 'cel-popup-menu', this.el);
    this.cel_icon_label = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon-label', 'cel-popup-menu', this.el);
  }
  /**
   * listener to close modal on overlay click
   */
  handleClick(event) {
    if (!event.composedPath().includes(this.el)) {
      this.open = false;
    }
  }
  handleCelMenuClick(event) {
    this.open = false;
    this.itemClicked.emit(event.detail);
    if (this.enablePopupMenuCheckboxes) {
      (this.menuItems.map(item => {
        item.menuItemChecked = (item.id == event.detail.id ? true : false);
        return item;
      }));
      (this.secondaryMenuItems.map(item => {
        item.menuItemChecked = (item.id == event.detail.id ? true : false);
        return item;
      }));
    }
    if (this.returnFocus) {
      this.returnFocusToTriggerElement();
    }
    else {
      this.popupMenuEl.shadowRoot.querySelector('button').focus();
    }
  }
  /**
   * listener to close cel-menu on esc key press
   */
  handleCelMenuCloseEvent(event) {
    var _a;
    if ((_a = event.detail) === null || _a === void 0 ? void 0 : _a.isClose) {
      this.open = false;
    }
    if (this.returnFocus) {
      this.returnFocusToTriggerElement();
    }
    else {
      this.popupMenuEl.shadowRoot.querySelector('button').focus();
    }
  }
  /**
   * Function to handle return the focus to triggered element
   */
  returnFocusToTriggerElement() {
    const returnElement = document.querySelector(`${`[data-return-focus=${this.returnFocus}]`}`);
    const nestedReturnElement = returnElement.shadowRoot.querySelector(`${`[data-return-focus=${this.returnFocus}]`}`);
    if (nestedReturnElement) {
      nestedReturnElement.shadowRoot.querySelector('button').focus();
    }
    else if (returnElement.shadowRoot) {
      returnElement.shadowRoot.querySelector('button').focus();
    }
    else {
      returnElement.focus();
    }
  }
  /**
   * listener to open/close menu with icon label
   */
  handleCelIconLabelClick() {
    this.toggleOpen();
  }
  toggleOpen() {
    if (!this.buttonDisabled) {
      this.open = !this.open;
    }
    this.upArrowPressed = false;
  }
  /**
   * listener to emit event details of menu item support button
   */
  handleCelMenuSupportButtonClick(event) {
    this.open = true;
    this.itemSupportButtonClicked.emit(event.detail);
  }
  /**
   * Function to handle keydown event
   * @param event
   */
  handleKeyDownEvent(event) {
    this.upArrowPressed = false;
    switch (event.key) {
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["e"]:
        this.toggleOpen();
        break;
      case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["d"]:
        this.toggleOpen();
        this.upArrowPressed = true;
        break;
    }
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, this.showIconLabel ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_label, { ref: (el) => (this.popupMenuEl = el), class: 'open-button icon-label', "data-label": this.iconLabel, "data-icon-label-aria-label": this.iconLabelAriaLabel, "data-name": this.iconName, "data-src": this.iconSrc, "data-color": this.iconColor, "data-icon-type": this.iconPosition, "data-disabled": this.buttonDisabled, "data-icon-size": this.iconSize, "data-icon-label-aria-expanded": this.open ? 'true' : 'false', "data-identifier": this.identifier, "data-end-to-end-id": `${this.endToEndId}-icon-label`, "data-return-focus": this.returnFocus, onKeyDown: (event) => this.handleKeyDownEvent(event) }) :
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { ref: (el) => (this.popupMenuEl = el), onClick: () => this.toggleOpen(), class: 'open-button', "data-name": this.iconName, "data-src": this.iconSrc, "data-color": this.iconColor, "data-size": this.iconSize, "data-icon-button-aria-label": this.buttonAriaLabel, "data-disabled": this.buttonDisabled, "data-icon-button-aria-expanded": this.open ? 'true' : 'false', "data-identifier": this.identifier, "data-end-to-end-id": `${this.endToEndId}-icon-button`, "data-return-focus": this.returnFocus, onKeyDown: (event) => this.handleKeyDownEvent(event) }), this.open ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_menu, { class: 'menu-item menu-item-label menu-support-button menu', items: this.menuItems, secondaryItemList: this.secondaryMenuItems, parentTargetElement: this.popupMenuEl, truncateLength: this.truncateLength, supportButtonVariant: this.itemSupportButtonVariant, supportButtonIconColor: this.itemSupportButtonIconColor, supportButtonIconType: this.itemSupportButtonIconType, supportButtonIconSize: this.itemSupportButtonIconSize, wrapText: this.wrapText, isSupportButtonPresentInItem: this.isSupportButtonPresentInItem, "data-end-to-end-id": `${this.endToEndId}-menu`, upArrowPressed: this.upArrowPressed })) : null));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
CelPopupMenu.style = celPopupMenuCss;

var CelProgressSizes;
(function (CelProgressSizes) {
  CelProgressSizes["SMALL"] = "small";
  CelProgressSizes["MEDIUM"] = "medium";
  CelProgressSizes["LARGE"] = "large";
  CelProgressSizes["XLARGE"] = "xlarge";
})(CelProgressSizes || (CelProgressSizes = {}));

const celProgressCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.container{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;width:var(--progress-width, 100%);-ms-flex-align:center;align-items:center}.label{font-family:var(--progress-label-font-family, \"Poppins-Medium\");font-size:var(--progress-label-font-size, 0.875rem);color:var(--progress-label-color, #333);padding:var(--progress-label-padding, 0)}.progress-container{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;width:100%;height:var(--progress-height, 0.5rem);border:var(--progress-container-border, none);border-radius:var(--progress-container-border-radius, 1rem);background-color:var(--progress-container-bg-color, #cdcdcd);overflow:hidden}.progress-container-small{height:var(--progress-small-height, 0.25rem)}.progress-container-large{height:var(--progress-large-height, 1rem)}.progress-container-xlarge{height:var(--progress-xlarge-height, 1.5rem)}.progress{height:100%;background-color:var(--progress-bg-color, #006be0)}.show-percent{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:end;align-items:flex-end;min-width:1.5rem;font-family:var(--show-percent-font-family, \"Poppins-Medium\");font-size:var(--show-percent-font-size, 0.75rem);color:var(--show-percent-color, #333);margin:var(--show-percent-margin, 0 0 0 0.25rem)}.inner-label{visibility:hidden;width:-webkit-max-content;width:-moz-max-content;width:max-content;white-space:nowrap;margin:0;padding:var(--progress-inner-label-inside-padding, 0 8px);font-family:var(--progress-inner-label-font-family, \"OpenSans-Semibold\");font-size:var(--progress-inner-label-font-size, 0.75rem)}.inner-label-inside{position:absolute;color:var(--progress-inner-label-inside-color, #fff)}.inner-label-outside{position:relative;padding:var(--progress-inner-label-outside-padding, 0 0 0 4px);color:var(--progress-inner-label-outside-color, #333)}.truncate-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";

const CelProgress = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.innerLabelId = `cel-progress-inner-label-id-${++innerLabelids}`;
    this.percentageId = `cel-progress-percentage-id-${++percentageIds}`;
    this.progressBarId = `cel-progress-bar-id-${++progressBarIds}`;
    this.innerLabelWithinProgress = true;
    this.label = undefined;
    this.progressAriaLabel = undefined;
    this.percentage = undefined;
    this.showPercentage = undefined;
    this.size = undefined;
    this.innerLabel = undefined;
    this.innerLabelAriaLabel = undefined;
    this.truncateLabel = false;
  }
  componentDidLoad() {
    if (this.innerLabel) {
      this.innerLabelEl.classList.remove('inner-label-outside'); // ensure initial padding retrieved is for inside
      document.fonts.ready.then(() => {
        const innerLabelStyle = getComputedStyle(this.innerLabelEl);
        this.innerLabelPadding = parseFloat(innerLabelStyle.paddingLeft) + parseFloat(innerLabelStyle.paddingRight);
        this.displayInnerLabel();
        this.innerLabelEl.style.visibility = 'visible'; // for reducing flickering on initial load
      });
    }
    if (this.truncateLabel) {
      this.labelEl = this.el.shadowRoot.querySelectorAll('.label');
      Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["s"])(this.labelEl);
    }
  }
  componentDidUpdate() {
    this.displayInnerLabel();
    if (this.truncateLabel) {
      Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["s"])(this.labelEl);
    }
  }
  handleResize() {
    this.displayInnerLabel();
    if (this.truncateLabel) {
      Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["s"])(this.labelEl);
    }
  }
  displayInnerLabel() {
    if (this.innerLabel) {
      const progressEl = this.el.shadowRoot.querySelector('.progress');
      if ((progressEl != null) && (!this.innerLabelEl != null)) {
        let progressWidth = progressEl.getBoundingClientRect().width;
        let innerLabelWidth = parseFloat(getComputedStyle(this.innerLabelEl).width) + this.innerLabelPadding;
        if (innerLabelWidth < progressWidth) {
          this.innerLabelEl.classList.remove('inner-label-outside');
          this.innerLabelEl.classList.add('inner-label-inside');
          this.innerLabelWithinProgress = true;
        }
        else {
          this.innerLabelEl.classList.remove('inner-label-inside');
          this.innerLabelEl.classList.add('inner-label-outside');
          this.innerLabelWithinProgress = false;
        }
      }
    }
  }
  render() {
    const percentage = this.percentage > 100 ? 100 : this.percentage < 0 ? 0 : this.percentage;
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, this.label ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { htmlFor: this.progressBarId, class: {
        ['label']: true,
        ['truncate-label']: this.truncateLabel,
      } }, this.label)) : null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
        ['progress-container']: true,
        ['progress-container-small']: this.size == CelProgressSizes.SMALL,
        ['progress-container-large']: this.size == CelProgressSizes.LARGE,
        ['progress-container-xlarge']: this.size == CelProgressSizes.XLARGE
      } }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { id: this.progressBarId, role: "progressbar", "aria-label": this.label ? this.label : this.progressAriaLabel, "aria-describedby": `${this.innerLabelId}`, "aria-valuenow": percentage, class: "progress", style: { width: `${percentage}%` } }), this.innerLabel ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { id: this.innerLabelId, "aria-label": this.innerLabelAriaLabel, "aria-hidden": "true", ref: (el) => this.innerLabelEl = el, class: "inner-label" }, this.innerLabel)) : null), this.showPercentage ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { id: this.percentageId, "aria-hidden": "true", class: "show-percent" }, `${percentage}%`) : null)));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
let innerLabelids = 0;
let percentageIds = 0;
let progressBarIds = 0;
CelProgress.style = celProgressCss;

const celRadioButtonGroupCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:inline-block}.center{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.header{font-family:var(--radio-button-group-header-font-family, \"Poppins-SemiBold\");font-size:var(--radio-button-group-header-font-size, 1rem);text-align:start;margin:0;margin-bottom:var(--radio-button-group-header-margin-bottom, 8px);color:var(--radio-button-group-font-color, #333)}.radio-group-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start}.radio-button-container{display:-ms-flexbox;display:flex;-ms-flex-direction:var(--radio-button-group-direction, column);flex-direction:var(--radio-button-group-direction, column);-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start;width:var(--radio-button-container-width, unset)}.radio-button-container-horizontal{-ms-flex-direction:row;flex-direction:row;overflow-x:hidden;-ms-flex-wrap:wrap;flex-wrap:wrap}.radio-label{height:var(--radio-button-container-height, auto);width:var(--radio-button-width);margin-bottom:var(--radio-button-container-margin-bottom, 16px);display:-ms-flexbox;display:flex;-ms-flex-align:var(--radio-button-align, center);align-items:var(--radio-button-align, center);margin-top:1px;cursor:pointer;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--radio-label-font, \"OpenSans-Semibold\");font-size:var(--text-size-small, 0.875rem);color:var(--radio-label-font-color, #333)}.radio-label.disabled{pointer-events:none;color:#939393}.radio-label-horizontal{text-wrap:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:var(--radio-label-horizontal-padding-right, 16px)}input[type=radio]{display:grid;place-content:center}input[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;font:inherit;color:var(--radio-button-border-color, #333);min-width:var(--radio-button-min-width, 24px);height:var(--radio-button-height, 24px);border:1px solid var(--radio-button-border-color, #555);border-radius:50%;-webkit-transform:translateY(-0.075rem);transform:translateY(-0.075rem);margin:0 var(--radio-button-margin-right, 8px) 0 0;cursor:pointer;position:relative;top:1.2px}input[type=radio]+.radio-label{font-family:var(--radio-label-font, \"OpenSans-Semibold\");font-size:var(--radio-label-font-size, 0.875rem);height:100%;cursor:pointer;color:var(--radio-label-color, #333)}input[type=radio]:focus{outline-width:3px;outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:-3px;border:none}input[type=radio]:focus:checked{outline-width:3px;outline-style:var(--focus-ring-outline-style, solid);outline-color:#006be0;outline-offset:-3px;border:none}input[type=radio]::before{content:\"\";width:14px;height:14px;border-radius:50%;-webkit-transform:scale(0);transform:scale(0);-webkit-transition:120ms -webkit-transform ease-in-out;transition:120ms -webkit-transform ease-in-out;transition:120ms transform ease-in-out;transition:120ms transform ease-in-out, 120ms -webkit-transform ease-in-out;-webkit-box-shadow:inset 14px 14px var(--radio-button-selected-color, #006be0);box-shadow:inset 14px 14px var(--radio-button-selected-color, #006be0)}input[type=radio]:disabled{border:1px solid var(--radio-button-disabled-border-color, none);pointer-events:none;cursor:default;background-color:#e2e2e2}@media (hover: hover){input[type=radio]:hover:not(:disabled){background-color:#f3f3f3}input[type=radio]:disabled:hover{-webkit-box-shadow:none;box-shadow:none}input[type=radio]:hover::before{-webkit-box-shadow:inset 14px 14px var(--radio-button-selected-color, #2150a3);box-shadow:inset 14px 14px var(--radio-button-selected-color, #2150a3)}input[type=radio]:focus:hover:checked{outline-width:3px;outline-style:var(--focus-ring-outline-style, solid);outline-color:#2150a3;outline-offset:-3px;border:none}}input[type=radio]:checked::before{-webkit-transform:scale(1);transform:scale(1)}input[type=radio]:disabled+.radio-label{font-family:var(--radio-label-font, \"OpenSans-Semibold\");font-size:var(--radio-label-font-size, 0.875rem);cursor:default;color:var(--label-disabled-font-color, #939393)}input[type=radio]:disabled::before{content:\"\";width:14px;height:14px;border-radius:50%;-webkit-transform:scale(0);transform:scale(0);-webkit-transition:120ms -webkit-transform ease-in-out;transition:120ms -webkit-transform ease-in-out;transition:120ms transform ease-in-out;transition:120ms transform ease-in-out, 120ms -webkit-transform ease-in-out;-webkit-box-shadow:inset 14px 14px var(--radio-button-disabled-selected-color, #767676);box-shadow:inset 14px 14px var(--radio-button-disabled-selected-color, #767676)}input[type=radio]:disabled:checked::before{-webkit-transform:scale(1);transform:scale(1)}fieldset{border:0;margin-inline:0;padding-inline:0;padding-block:0}legend{padding-inline:0}";

const CelRadioButtonGroup = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.celRadioButtonChange = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celRadioButtonChange", 7);
    this.onCheck = (checkedButton) => {
      this.list = this.list.map(radio => {
        radio.checked = (radio.radioId === checkedButton.target.id);
        return radio;
      });
    };
    this.isHorizontal = false;
    this.header = '';
    this.groupName = 'default';
    this.list = [];
    this.showRadioGroupHorizontal = false;
  }
  handleListChange() {
    this.list.map(radio => {
      if (radio.checked) {
        this.celRadioButtonChange.emit(radio);
      }
    });
  }
  componentDidLoad() {
    if (this.showRadioGroupHorizontal) {
      const radioGroupWrapper = this.el.shadowRoot.querySelector('.radio-button-container');
      const radioButtons = radioGroupWrapper.querySelectorAll('.radio-label');
      this.totalRadioWidth = Array.from(radioButtons).reduce((radioWidthAccumulator, radioButton) => {
        return radioWidthAccumulator + radioButton.offsetWidth;
      }, 0);
      this.updateRadioGroupView();
    }
  }
  handleResize() {
    if (this.showRadioGroupHorizontal)
      this.updateRadioGroupView();
  }
  updateRadioGroupView() {
    this.isHorizontal = this.showRadioGroupHorizontal && this.totalRadioWidth <= window.innerWidth ? true : false;
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("fieldset", null, this.header ? Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("legend", { class: "header" }, this.header) : null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "radio-group-wrapper" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['radio-button-container', this.isHorizontal && 'radio-button-container-horizontal'].join(' ') }, this.list.map((radioButton) => {
      return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: ['radio-label', radioButton.disabled && 'disabled', this.isHorizontal && 'radio-label-horizontal'].join(' '), htmlFor: radioButton.radioId }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { class: "center", id: radioButton.radioId, type: "radio", name: this.groupName, checked: radioButton.checked, disabled: radioButton.disabled, onChange: (ev) => this.onCheck(ev), value: radioButton.radioId }), radioButton.html ? Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "center", innerHTML: radioButton.html }) : !!radioButton.label && radioButton.label, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }))))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "list": ["handleListChange"]
  }; }
};
CelRadioButtonGroup.style = celRadioButtonGroupCss;

const celSearchFieldCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:inline-block;width:100%;--icon-button-margin-right:1px}input[type=text]::-webkit-search-decoration,input[type=text]::-webkit-search-cancel-button,input[type=text]::-webkit-search-results-button,input[type=text]::-webkit-search-results-decoration{-webkit-appearance:none}input[type=text]{-webkit-appearance:var(--search-field-webkit-appearance, auto)}input[type=text]::-webkit-input-placeholder{color:var(--search-field-placeholder-color, #767676);opacity:1}input[type=text]::-moz-placeholder{color:var(--search-field-placeholder-color, #767676);opacity:1}input[type=text]:-ms-input-placeholder{color:var(--search-field-placeholder-color, #767676);opacity:1}input[type=text]::-ms-input-placeholder{color:var(--search-field-placeholder-color, #767676);opacity:1}input[type=text]::placeholder{color:var(--search-field-placeholder-color, #767676);opacity:1}ul{list-style-type:none;margin:0;padding:0}.search-field:focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}.search-field-with-chips:focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}.search-field-container{position:relative;width:100%}.search-field-container-label{position:relative;width:100%;outline:var(--search-field-container-label-focus-outline, none);-webkit-box-shadow:0 0 0 2px var(--search-field-container-label-focus-outline-color, none);box-shadow:0 0 0 2px var(--search-field-container-label-focus-outline-color, none)}form{width:100%;border:1px solid var(--search-field-form-border-color, #333)}.search-field,.search-field-with-chips{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--search-field-bg-color, #fff);height:var(--search-field-height, 40px);border-radius:var(--search-field-border-radius, 4px);border:var(--search-field-border-color, none);padding:var(--search-field-padding, 0 0 0 8px);color:var(--search-field-color, #333);font-size:var(--search-field-font-size, 1rem);font-family:var(--search-field-font-family, \"OpenSans\")}.search-field-with-chips{border-radius:var(--search-field-border-radius-w-chips, 4px 4px 0 0)}.search-field-label{display:-ms-flexbox;display:flex;outline:none;-ms-flex-direction:column;flex-direction:column;font-size:var(--search-field-label-font-size, 0.875rem);font-family:var(--search-field-label-font-family, \"OpenSans-Semibold\");margin:var(--search-field-label-margin, 0);white-space:var(--search-field-white-space, nowrap);color:var(--searc-field-label-font-color, #333);height:var(--search-field-label-height)}.form-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:var(--form-wrapper-justify-content, flex-end);justify-content:var(--form-wrapper-justify-content, flex-end)}.form-wrapper.wrapper-chips{-ms-flex-align:var(--form-wrapper-with-chips-align-items, flex-end);align-items:var(--form-wrapper-with-chips-align-items, flex-end)}.form-wrapper.wrapper-no-chips{-ms-flex-align:var(--form-wrapper-no-chips-align-items, center);align-items:var(--form-wrapper-no-chips-align-items, center)}.search-field-icon{position:absolute;padding:var(--search-field-icon-padding, 4px);bottom:1px}.search-field-icon.disabled{--cel-color-disabled:#767676;--icon-button-hover-color:#767676;--icon-button-disabled-outline-color:#767676}.search-field-icon-label{top:var(--search-field-icon-label-top, none)}.search-field:disabled{border:none;background-color:var(--search-field-disabled-bg-color, #e2e2e2)}.search-dropdown{position:absolute;left:var(--search-dropdown-left, 0);right:var(--search-dropdown-right, 0);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--search-dropdown-width, 100%);position:var(--search-dropdown-position, absolute);background-color:var(--search-dropdown-bg-color, #fff);border-radius:var(--search-dropdown--border-radius, 2px);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:var(--search-dropdown-box-shadow, 0 3px 5px 0 rgba(0, 0, 0, 0.36));box-shadow:var(--search-dropdown-box-shadow, 0 3px 5px 0 rgba(0, 0, 0, 0.36));z-index:var(--search-select-z-index, 200);max-height:var(--search-dropdown-max-height, 40vh);overflow-y:var(--search-dropdown-overflow-y, auto);overflow-x:hidden}.search-item{padding:var(--search-item-padding, 8px);background-color:var(--search-item-bg-color, #fff);width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;position:relative;color:var(--search-item-label-color, #333);font-family:var(--search-item-label-font-family, \"OpenSans\");font-size:var(--search-item-label-font-size, 1rem);margin-right:var(--search-item-label-margin-right, 24px)}.search-item.focused{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}.search-item--no-data{padding:var(--search-item-padding, 8px);background-color:var(--search-item-no-data-bg-color, #fff);width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;color:var(--search-item-no-data-label-color, #333);font-family:var(--search-item-no-data-label-font-family, \"OpenSans\");font-size:var(--search-item-no-data-label-font-size, 1rem);margin-right:var(--search-item-no-data-label-margin-right, 24px)}.search-item--disabled{pointer-events:none}.search-item:focus{outline:none;background-color:var(--search-item-hover-bg-color, #cdcdcd)}.search-item--disabled:focus{background-color:var(--search-item-bg-color, #fff)}.search-item:hover{background-color:var(--search-item-hover-bg-color, #cdcdcd)}.item-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;pointer-events:none}.item-label{font-size:var(--search-item-label-font-size, 0.875rem);font-family:var(--search-item-label-font-family, \"OpenSans-Semibold\")}.item-support{font-family:var(--search-support-label-font-family, \"OpenSans\");font-size:var(--search-support-label-font-size, 0.75rem)}.item-label--disabled{color:var(--search-item-label-disabled-color, #767676)}.item-support--disabled{color:var(--search-support-label-disabled-color, #767676)}.chip-container{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--search-chip-container-bg-color, #fff);border-bottom:var(--search-chip-container-border-bottom, 1px solid #cdcdcd);padding:var(--search-chip-container-padding, 0.5rem)}.chip{margin:var(--search-chip-margin, 0.25rem 0.25rem 0 0)}.active{outline:var(--search-field-active-outline, none);position:relative;width:100%;-webkit-box-shadow:0 0 0 2px var(--search-field-input-active-outline-color, #006be07f);box-shadow:0 0 0 2px var(--search-field-input-active-outline-color, #006be07f)}.container--disabled{pointer-events:none;opacity:var(--search-field-container-disabled-opacity, 0.5)}.container--disabled .search-field-label{color:var(--search-field-label-disabled-color, #767676)}.container--disabled .input-search-field{border:none;background-color:var(--input-search-field-disabled-bg-color, #e2e2e2)}";

const CelSearchField = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.onChange = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celSearchFieldValue", 7);
    this.onCelSubmit = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celSearchFieldSubmit", 7);
    this.onSelect = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celSearchFieldSelect", 7);
    this.onCancel = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celSearchFieldCancel", 7);
    this.onChipChange = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celSearchFieldChipsChange", 7);
    this.scrollFetch = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celSearchFetch", 7);
    this.searchItemFocusedClass = 'focused';
    this.searchBarId = `cel-sf-${searchBarIds++}`;
    this.searchBarDropdownId = `cel-sf-dropdown-${searchBarIds++}`;
    this.index = -1;
    this.isInputFocus = 0;
    this.hideDropdown = undefined;
    this.foundList = undefined;
    this.makeSelectedItemFocused = false;
    this.isSearchListUpdated = false;
    this.showCrossIcon = false;
    this.noDataLabel = "No results found";
    this.showSearchResults = false;
    this.fieldLabel = undefined;
    this.showFieldLabel = false;
    this.fieldTabIndex = 0;
    this.closeActionButtonTooltipLabel = 'clear';
    this.searchActionButtonTooltipLabel = 'search';
    this.closeActionButtonAriaLabel = 'clear search';
    this.searchActionButtonAriaLabel = 'search';
    this.scrollThreshold = 0.8;
    this.browserAutocomplete = 'off';
    this.fieldAriaActivedescendant = undefined;
    this.fieldAriaControls = undefined;
    this.disabled = false;
    this.useSearchResult = false;
    this.fieldAriaErrorMessage = undefined;
    this.fieldAriaHaspopup = false;
    this.fieldAriaInvalid = false;
    this.fieldAriaKeyshortcuts = undefined;
    this.fieldAriaLabel = undefined;
    this.fieldAriaLabelledBy = undefined;
    this.fieldAriaOwns = undefined;
    this.fieldPlaceholder = 'Search';
    this.fieldAriaRoledescription = undefined;
    this.searchList = [];
    this.selectedChips = [];
    this.enableChips = undefined;
    this.value = '';
    this.focusElement = false;
    this.hideSearchFieldInputActionButton = false;
    this.searchOnClickOrEnter = false;
  }
  connectedCallback() {
    this.cel_icon_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon-button', 'cel-search-field', this.el);
    this.cel_chip = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-chip', 'cel-search-field', this.el);
  }
  /**
   * listener to implement accesibility navigation
   */
  handKeyUp(ev) {
    var _a;
    if (this.searchOnClickOrEnter && ((_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.value) !== this.value && ev.key !== _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["b"]) {
      this.showCrossIcon = false;
    }
    if (this.searchOnClickOrEnter && ev.key === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["b"] && !this.showCrossIcon) {
      this.hideDropdown = false;
    }
  }
  handleKeyDown(ev) {
    let listItems = this.el.shadowRoot.querySelectorAll('.search-item');
    const selectedItem = listItems[this.index];
    if (this.foundList.length > 0) {
      switch (ev.key) {
        case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["b"]:
          this.handleItemSelection(selectedItem);
          break;
        case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["e"]:
        case _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["d"]:
          this.handleArrowUpDownEvent(ev.key, listItems);
          break;
      }
    }
    else
      return;
  }
  handleChipsChange(newValue) {
    this.onChipChange.emit(newValue);
  }
  handleValueChange(newValue) {
    if (newValue && !this.useSearchResult) {
      this.foundList = this.searchList.filter((item) => item.label.toLocaleLowerCase().includes(newValue.toLocaleLowerCase()));
    }
    else {
      this.foundList = [];
    }
    this.onChange.emit(this.value);
  }
  handleSearchListChange(searchResult) {
    this.isSearchListUpdated = false;
    if (searchResult && this.useSearchResult) {
      this.foundList = searchResult;
    }
  }
  componentWillLoad() {
    this.handleValueChange(this.value);
    this.handleChipsChange(this.selectedChips);
  }
  componentDidLoad() {
    if (this.focusElement) {
      this.handleSearchFieldFocus();
    }
  }
  handleSearchFieldInput(event) {
    if (!this.searchOnClickOrEnter) {
      this.hideDropdown = false;
      this.value = event.target.value;
      if (this.value === '') {
        this.index = -1;
        this.showCrossIcon = false;
      }
      else {
        this.showCrossIcon = true;
      }
    }
    else if (event.target.value === '') {
      this.handleSearchFieldCancel();
    }
  }
  handleSearchFieldFocus() {
    this.inputEl.focus();
  }
  handleSearchFieldCancel() {
    this.inputEl.value = '';
    this.value = '';
    this.showCrossIcon = false;
    this.hideDropdown = false;
    this.onCancel.emit();
  }
  handleItemSelection(item) {
    if (item) {
      const selectedItem = {
        id: item.getAttribute('id'),
        label: item.getAttribute('data-item'),
      };
      this.selectItem(selectedItem);
    }
  }
  handleArrowUpDownEvent(event, listItems) {
    let currentItem = listItems[this.index];
    if (currentItem) {
      currentItem.style.backgroundColor = 'white';
      currentItem.classList.remove(this.searchItemFocusedClass);
    }
    if (event === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["e"] && this.index < listItems.length) {
      this.index =
        this.index === listItems.length - 1
          ? listItems.length - 1
          : this.index + 1;
    }
    else if ((event === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["d"] && this.index > 0)) {
      this.index = this.index > 0 ? this.index - 1 : listItems.length - 1;
    }
    currentItem = listItems[this.index];
    currentItem.style.backgroundColor = '#cdcdcd';
    currentItem.classList.add(this.searchItemFocusedClass);
    currentItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    this.fieldAriaActivedescendant = currentItem.id;
  }
  handleSubmit(ev) {
    var _a;
    if (this.searchOnClickOrEnter && !this.showCrossIcon) {
      this.hideDropdown = false;
    }
    ev.preventDefault();
    if (this.value || this.inputEl.value) {
      this.showCrossIcon = true;
      this.handleValueChange(this.inputEl.value);
      this.value = this.inputEl.value ? this.inputEl.value : this.value;
      if (this.value === '') {
        this.index = -1;
      }
      const first = (_a = this.el.shadowRoot.querySelector('#dropdown')) === null || _a === void 0 ? void 0 : _a.firstChild;
      const submitValue = first && !this.value ? first.dataset['item'] : this.value;
      this.onCelSubmit.emit(submitValue);
    }
  }
  selectItem(item) {
    if (this.enableChips && !!!this.selectedChips.filter((chipItem) => chipItem.id == item.id).length) {
      this.selectedChips = [...this.selectedChips, item];
    }
    else if (!this.enableChips) {
      this.inputEl.value = item.label;
      this.value = item.label;
      this.onSelect.emit(item);
      this.hideDropdown = true;
    }
    this.index = -1; //reset index when an item is selected
    this.resetFieldAriaActivedescendant();
  }
  removeChip(evChip) {
    const newChips = this.selectedChips.filter((chip) => chip.id != evChip.id);
    this.selectedChips = newChips;
  }
  handleBlur() {
    if (!this.makeSelectedItemFocused) {
      this.hideDropdown = true;
    }
    this.makeSelectedItemFocused = false;
    this.resetFieldAriaActivedescendant();
  }
  resetFieldAriaActivedescendant() {
    this.fieldAriaActivedescendant = null;
  }
  handleIconButtonClick(event) {
    var _a;
    this.value && ((_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.name) === 'close' && this.handleSearchFieldCancel();
    this.handleSearchFieldFocus();
  }
  checkIfDropdownIsPresent(positiveReturnValue, defaultReturnValue) {
    let returnValue = defaultReturnValue;
    if (this.value && this.searchList && !this.hideDropdown) {
      returnValue = positiveReturnValue;
    }
    return returnValue;
  }
  scrollingContent() {
    const currentThreshold = this.dropDownEl.scrollTop / (this.dropDownEl.scrollHeight - this.dropDownEl.clientHeight);
    if (currentThreshold && currentThreshold > this.scrollThreshold && !this.isSearchListUpdated) {
      this.scrollFetch.emit(this.value);
      this.isSearchListUpdated = true;
    }
  }
  onInputKeyDownHandler() {
    if (this.fieldAriaActivedescendant) {
      this.resetFieldAriaActivedescendant();
    }
  }
  render() {
    const hasChips = this.selectedChips.length > 0;
    const hasFoundList = this.foundList && this.foundList.length > 0;
    const hasSearchList = this.searchList.length > 0;
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2', onBlur: () => this.handleBlur() }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: [
        this.isInputFocus === 1 && hasChips && !this.fieldLabel
          ? ' active'
          : this.fieldLabel
            ? 'search-field-container-label'
            : 'search-field-container',
        this.disabled ? 'container--disabled' : '',
      ].join(' ') }, !!this.showFieldLabel && (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { htmlFor: this.searchBarId, class: "search-field-label" }, this.fieldLabel)), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['form-wrapper', hasChips ? 'wrapper-chips' : 'wrapper-no-chips'].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", { onSubmit: (ev) => this.handleSubmit(ev) }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { "aria-live": "assertive", "aria-atomic": "true", "aria-relevant": "additions removals" }, hasChips ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "chip-container" }, this.selectedChips.map((chip) => (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_chip, { class: "chip", "data-id": chip.id, "data-label": chip.label, "data-close-button-aria-label": `Remove ${chip.label}`, "data-primary": "true", "data-close-button-disabled": this.disabled, onCelChipClose: () => this.removeChip(chip) }))))) : null), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { class: [hasChips ? 'search-field-with-chips' : 'search-field', 'input-search-field'].join(' '), type: "text", id: this.searchBarId, ref: (el) => (this.inputEl = el), value: this.value, role: hasSearchList ? 'combobox' : null, onKeyDown: () => this.searchOnClickOrEnter ? null : this.onInputKeyDownHandler(), tabIndex: this.fieldTabIndex, onFocus: () => (this.isInputFocus = 1), onBlur: () => (this.isInputFocus = 0), onInput: (e) => this.handleSearchFieldInput(e), disabled: this.disabled, placeholder: this.fieldPlaceholder, "aria-label": this.fieldAriaLabel, autocomplete: "off", "aria-autocomplete": hasFoundList && !this.hideDropdown ? 'list' : 'none', "aria-activedescendant": this.fieldAriaActivedescendant, "aria-disabled": this.disabled ? 'true' : 'false', "aria-errormessage": this.fieldAriaErrorMessage, "aria-haspopup": hasSearchList ? 'listbox' : null, "aria-invalid": this.fieldAriaInvalid, "aria-keyshortcuts": this.fieldAriaKeyshortcuts, "aria-owns": this.fieldAriaOwns, "aria-expanded": !hasSearchList ? null : hasSearchList && hasFoundList ? 'true' : 'false', "aria-controls": hasFoundList ? this.searchBarDropdownId : null })), (this.searchOnClickOrEnter || !this.hideSearchFieldInputActionButton) ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { onClick: (ev) => this.searchOnClickOrEnter ? this.handleSubmit(ev) : null, "data-tooltip-label": this.value ? this.closeActionButtonTooltipLabel : this.searchActionButtonTooltipLabel, "data-icon-button-aria-label": this.value ? this.closeActionButtonAriaLabel : this.searchActionButtonAriaLabel, ref: (el) => (this.iconButtonEl = el), class: ['search-field-icon', this.fieldLabel ? 'search-field-icon-label' : '', this.disabled ? 'disabled' : ''].join(' '), "data-disabled": this.disabled, "data-name": this.showCrossIcon ? 'close' : 'search', "data-color": this.disabled ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAY : _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER, "data-padding": "6px" })) : null), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { "aria-live": "assertive", "aria-atomic": "true", "aria-relevant": "additions" }, this.showSearchResults && this.value && this.searchList ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { class: "search-dropdown", id: this.searchBarDropdownId, role: "listbox", ref: (el) => (this.dropDownEl = el), onScroll: () => this.scrollingContent(), "aria-disabled": this.hideDropdown ? 'true' : 'false', "aria-label": 'search results' }, !this.hideDropdown ? (hasFoundList ?
      (this.foundList.map((item) => {
        const disabled = item.disabled || !!this.selectedChips.filter((chipItem) => chipItem.id == item.id).length;
        return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { id: item.id, tabIndex: -1, role: "option", class: { ['search-item']: true, ['search-item--disabled']: disabled }, "data-item": item.label, onClick: () => this.selectItem(item), "aria-label": item.label, "aria-selected": this.foundList.indexOf(item) === this.index ? 'true' : 'false' }, item.support ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "item-container" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: { ['item-label']: true, ['item-label--disabled']: disabled } }, item.label), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: { ['item-support']: true, ['item-support--disabled']: disabled } }, item.support))) : (item.label)));
      })) : (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { role: "option", class: "search-item--no-data search-item--disabled", "aria-label": this.noDataLabel }, this.noDataLabel))) : null)) : null))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "selectedChips": ["handleChipsChange"],
    "value": ["handleValueChange"],
    "searchList": ["handleSearchListChange"]
  }; }
};
let searchBarIds = 0;
CelSearchField.style = celSearchFieldCss;

const celSideNavigationCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column}*{-webkit-box-sizing:border-box;box-sizing:border-box}nav,ul{padding:var(--side-nav-padding, 0);margin:var(--side-nav-margin, 0)}li{list-style:none;margin:var(--side-item-li-margin, 0)}li:not(:last-child){border-bottom:var(--side-nav-border-bottom, 2px solid #e2e2e2)}.side-item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-width:var(--side-item-min-width, 264px);max-width:var(--side-item-max-width, 264px);background-color:var(--side-item-bg-color, #fff);color:var(--side-item-color, #333);padding:var(--side-item-padding, 16px);font-family:var(--side-item-font-family, \"Poppins-Regular\");font-size:var(--side-item-font-size, 0.875rem);font-weight:var(--side-item-font-weight, 400);position:relative;min-height:var(--side-item-height, 48px);border-bottom:var(--side-item-border, none);cursor:pointer;border:none;outline:inherit;white-space:normal;margin:var(--side-item-margin, 0)}.side-item .button-label{display:-ms-flexbox;display:flex;-ms-flex-align:var(--align-items-button-label, center);align-items:var(--align-items-button-label, center);-ms-flex-pack:var(--justify-content-button-label, center);justify-content:var(--justify-content-button-label, center);text-align:var(--text-align-button-label, left)}.side-item:focus{z-index:1}button:focus,button:active{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}.side-item-active{background-color:var(--side-item-active-bg-color, #006be0);color:var(--side-item-active-color, #fff);font-family:var(--side-item-active-font-family, \"Poppins-SemiBold\");font-size:var(--side-item-active-font-size, 0.875rem);font-weight:var(--side-item-active-font-weight, 600)}@media (hover: hover){.side-item:hover{background-color:var(--side-item-hover-bg-color, #e5f0f9)}.side-item-active:hover{background-color:var(--side-item-active-hover-bg-color, #2150a3)}}.icon{margin-right:var(--side-item-icon-margin-right, 8px);-ms-flex-negative:0;flex-shrink:0}.icon.expandable{padding-left:var(--side-item-expandable-icon-padding, 8px)}";

const CelSideNavigation = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.activeChange = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "activeItemChanged", 7);
    this.expandableItemClicked = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "expandableItemClicked", 7);
    this.activeItem = undefined;
    this.activeId = 'a';
    this.itemList = [];
    this.expandableItemIconName = 'caret-down';
    this.expandableItemIconColor = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].BLACK;
  }
  handleActiveIdChange() {
    this.activeItem = this.itemList.filter((item) => item.identifier === this.activeId)[0] || this.activeItem;
  }
  pressItem(item) {
    this.activeItem = item;
    this.activeId = item.identifier;
    this.activeChange.emit(this.activeItem);
  }
  pressExpandableItem(expandableItem) {
    this.itemList = this.itemList.map((item) => {
      if (item === expandableItem) {
        item.isExpanded = !item.isExpanded;
      }
      return item;
    });
    this.expandableItemClicked.emit(expandableItem);
  }
  connectedCallback() {
    this.cel_icon = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon', 'cel-side-navigation', this.el);
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("nav", { "aria-label": "side navigation" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", null, this.itemList.map((item) => {
      const isActiveNavItem = this.activeId === item.identifier;
      return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { "aria-current": item === this.activeItem ? 'true' : null, "aria-expanded": item.isExpandable && item.isExpanded ? 'true' : item.isExpandable && !item.isExpanded ? 'false' : null, onClick: () => item.isExpandable ? this.pressExpandableItem(item) : this.pressItem(item), class: ['side-item', !!isActiveNavItem && 'side-item-active'].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: 'button-label' }, item.iconName ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": "true", class: "icon", "data-name": item.iconName, "data-color": isActiveNavItem ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].WHITE : _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].BLACK })) : (''), item.label), item.isExpandable ?
        Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": "true", class: "icon expandable", "data-name": this.expandableItemIconName, "data-color": this.expandableItemIconColor })
        : null)));
    })))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "activeId": ["handleActiveIdChange"]
  }; }
};
CelSideNavigation.style = celSideNavigationCss;

const celSingleSelectCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:var(--single-select-host-display, unset);font-family:\"OpenSans\";font-size:1rem}div.wrapper{display:-ms-flexbox;display:flex;font-family:var(--header-label-font-family, \"OpenSans-Semibold\");font-size:var(--header-label-font-size, 0.875rem);color:var(--header-label-font-color, #333);width:var(--single-select-width, 200px)}div.wrapper.header-label{-ms-flex-align:start;align-items:flex-start;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start}div.wrapper.header-label label{width:var(--single-select-label-width, auto)}div.wrapper.header-label .dropdown-label{width:var(--single-select-label-width, auto)}div.wrapper.header-label label.secondary-label{margin-bottom:var(--label-margin-bottom, 5px);-ms-flex-negative:1;flex-shrink:1;width:var(--single-select-secondary-label-width, auto)}div.wrapper.header-label label.secondary-label.disabled{color:#767676}div.wrapper.header-label:has(.borderless){margin-bottom:var(--label-margin-bottom-borderless, 5px)}div.wrapper.label-left{-ms-flex-align:center;align-items:center}div.wrapper.label-left label.secondary-label{padding-right:5px;-ms-flex-negative:1;flex-shrink:1}div.wrapper.label-left label.secondary-label.disabled{color:#767676}div.wrapper-display-block{display:var(--single-select-wrapper-display, inline-block)}select{width:inherit;background:var(--single-select-default-background, none);border:none;padding:0;font-family:var(--single-select-font-family, \"OpenSans\");font-size:var(--single-select-font-size, 1rem);cursor:pointer;outline:none;color:var(--single-select-font-color, #333);-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:var(--single-select-z-index, 0);-webkit-transform:translateY(-100%);transform:translateY(-100%);height:100%}select.primary-style-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;opacity:1}select:disabled{cursor:disabled}select:hover:not(:disabled),option:hover{cursor:pointer}.single-icon{min-width:var(--single-select-caret-min-width, 15px);-ms-flex-negative:0;flex-shrink:0}.single-container{display:-ms-flexbox;display:flex;-ms-flex-align:var(--single-container-align-items, center);align-items:var(--single-container-align-items, center);-ms-flex-negative:0;flex-shrink:0;min-width:var(--single-select-min-width, none);max-width:var(--single-select-max-width, none);width:var(--single-select-container-width, inherit);height:var(--single-select-bordered-height, 38px);color:var(--single-container-font-color, #333);border-radius:var(--single-container-border-radius, 2px);-webkit-box-sizing:var(--single-container-border-box, border-box);box-sizing:var(--single-container-border-box, border-box);margin-left:var(--single-container-label-margin, 0)}.single-container.alert-message{position:relative}.single-container.borderless{padding:var(--single-container-borderless-padding, 0);border-radius:0;height:var(--single-select-borderless-height, 30px)}.single-container:not(.borderless).border-error{outline:2px solid #cc333f;border-radius:2px}.single-container:not(.borderless).border-error:focus-within{outline:2px solid #cc333f;border-radius:1px}.single-container:not(.borderless).border-error:focus-within .select-text-overlay.borderless{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:-3px;border-radius:1px}.single-container:not(.borderless).border-success{outline:2px solid #2A7D14;border-radius:1px}.single-container:not(.borderless).border-success:focus-within{outline:2px solid #2A7D14;border-radius:1px}.single-container:not(.borderless).border-success:focus-within .select-text-overlay.borderless{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:-3px;border-radius:1px}.single-container:not(.borderless):focus-within{outline:1px solid #333}.single-container:not(.borderless):focus-within.border-success{outline:2px solid #2A7D14;border-radius:1px}.single-container:not(.borderless):focus-within.border-error{outline:2px solid #cc333f;border-radius:1px}.single-container:not(.borderless):focus-within .select-text-overlay{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px);border-radius:1px}.single-container:not(.borderless) .select-text-overlay.borderless{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:2px}.single-container.border-active:not(:focus-within):not(.border-success):not(.border-error){outline:1px solid var(--single-container-border-color, #333);border-radius:1px}.single-container.border-disabled{outline:1px solid var(--single-container-border-disabled, none)}.select-text-overlay{display:-ms-flexbox;display:flex;-ms-flex-pack:var(--select-text-overlay-justify-content, space-between);justify-content:var(--select-text-overlay-justify-content, space-between);-ms-flex-align:var(--selecttext-overlay-align-items, center);align-items:var(--selecttext-overlay-align-items, center);position:relative;top:0;left:0;width:var(--select-text-overlay-width, inherit);height:var(--select-text-overlay-height, 100%);-webkit-box-sizing:var(--select-text-overlay-border-box, border-box);box-sizing:var(--select-text-overlay-border-box, border-box);color:var(--single-select-overlay-font-color, #333);background-color:var(--primary-select-background-color, #fff);pointer-events:none;padding:var(--select-text-overlay-padding, 10px);border-radius:var(--select-text-overlay-border-radius, 2px);z-index:var(--select-text-overlay-z-index, 1)}.select-text-overlay.borderless:not(.lst-table-select){width:var(--borderless-select-width, -webkit-fit-content);width:var(--borderless-select-width, -moz-fit-content);width:var(--borderless-select-width, fit-content);max-width:var(--borderless-select-max-width, none);-ms-flex-pack:var(--borderless-select-justify-content, space-between);justify-content:var(--borderless-select-justify-content, space-between);background-color:var(--borderless-select-background-color, #f9f9f9);padding:var(--borderless-select-padding, 4px);border-radius:var(--select-text-overlay-border-radius, inherit);-ms-flex-pack:var(--borderless-select-justify-content, flex-start);justify-content:var(--borderless-select-justify-content, flex-start)}.select-text-overlay.lst-table-select{-ms-flex-pack:start;justify-content:flex-start}.select-text-overlay.lst-table-select.disabled-overlay{background-color:var(--lst-table-background-color, #fff)}.select-text-overlay .single-icon{margin-left:var(--single-icon-margin-left, 4px)}.disabled-overlay{background-color:#e2e2e2;cursor:not-allowed;color:#767676;border:none;outline:none}span.dropdown-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:var(--single-select-label-font-family, \"OpenSans\");font-size:var(--single-select-label-font-size, 1rem)}span.dropdown-label.dropdown-placeholder{color:#767676}.alert-message-wrapper{display:-ms-flexbox;display:flex;position:var(--alert-message-position, absolute);margin-top:var(--alert-message-margin-top, 2px);left:0;top:var(--alert-message-top, 2.5rem);-ms-flex-align:var(--alert-message-align-items, flex-start);align-items:var(--alert-message-align-items, flex-start)}.alert-message-wrapper.borderless{top:var(--alert-message-top-borderless, 2rem)}.error-icon,.success-icon{margin-top:var(--error-icon-margin-top, 1px);margin-right:var(--error-icon-margin-right, 3px);-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:start;align-self:flex-start}.error-message{color:var(--error-message-color, #cc333f);font-family:var(--error-message-font-family, \"OpenSans-Bold\");font-size:var(--error-message-font-size, 0.75rem);height:var(--validation-message-height)}.success-message{color:var(--success-message-color, #2A7D14);font-family:var(--success-message-font-family, \"OpenSans-Bold\");font-size:var(--success-message-font-size, 0.75rem);height:var(--validation-message-height)}.wrapper:has(.borderless)~.alert-message-wrapper{margin-top:4px}.borderless.lst-table-select:hover>.select-text-overlay{color:#2150a3;-ms-flex-pack:var(--single-select-justify-content-lst-table, flex-start);justify-content:var(--single-select-justify-content-lst-table, flex-start);background-color:#e5f0f9}.borderless.lst-table-select:hover>.select-text-overlay .single-icon{--cel-color-base:#2150a3}.borderless.lst-table-select:hover>.select-text-overlay .single-icon-disabled{--cel-color-base:#767676}.borderless.lst-table-select:hover>.select-text-overlay.disabled-overlay{background-color:var(--lst-table-background-hover-color, #fff);color:#767676}.width-wrapper{display:inline-block;height:var(--width-wrapper-height, inherit)}.width-wrapper:not(.borderless){width:var(--select-width-wrapper-width, 100%)}.width-wrapper.borderless{width:var(--select-width-wrapper-width, -webkit-fit-content);width:var(--select-width-wrapper-width, -moz-fit-content);width:var(--select-width-wrapper-width, fit-content)}.width-wrapper.borderless.border-error{outline:2px solid #cc333f;border-radius:2px}.width-wrapper.borderless.border-error:focus-within{outline:2px solid #cc333f;border-radius:1px}.width-wrapper.borderless.border-error:focus-within .select-text-overlay.borderless{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:-3px;border-radius:1px}.width-wrapper.borderless.border-success{outline:2px solid #2A7D14;border-radius:1px}.width-wrapper.borderless.border-success:focus-within{outline:2px solid #2A7D14;border-radius:1px}.width-wrapper.borderless.border-success:focus-within .select-text-overlay.borderless{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:-3px;border-radius:1px}.width-wrapper.borderless:focus-within .select-text-overlay{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:2px}.width-wrapper.borderless:focus-within.border-success{outline:2px solid #2A7D14;border-radius:1px}.width-wrapper.borderless:focus-within.border-error{outline:2px solid #cc333f;border-radius:1px}";

const CelSingleSelect = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.onChange = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celSingleSelect", 7);
    this.itemEntered = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "singleSelectItemClicked", 7);
    this.openSingleSelectDropdown = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celSingleSelectOpenDropdown", 7);
    this.singleSelectId = `cel-single-select-${singleSelectDropdownIds++}`;
    this.validDefaultItem = false;
    this.selectedItem = undefined;
    this.selected = undefined;
    this.labelLeft = false;
    this.primary = false;
    this.secondaryLabel = undefined;
    this.placeholder = 'Select Placeholder';
    this.singleSelectAriaLabel = 'Select an option';
    this.disabled = false;
    this.menuList = [];
    this.caretSize = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].MEDIUM;
    this.isRequired = false;
    this.caretSrc = undefined;
    this.titleCharLength = 18;
    this.errorMessage = undefined;
    this.successMessage = undefined;
    this.enableError = false;
    this.enableSuccess = false;
    this.lstTable = false;
    this.none = 'None';
    this.toggleValueReset = false;
  }
  handleValueReset() {
    this.selectedItem = null;
    this.selectEl.selectedIndex = -1;
    this.menuList.forEach((menuItem) => {
      if (menuItem.identifier == this.selected) {
        this.selectedItem = menuItem;
        this.selectEl.selectedIndex = this.menuList.indexOf(menuItem);
        return;
      }
    });
  }
  updateSelectedItem() {
    this.menuList.forEach((menuItem) => {
      if (menuItem.identifier == this.selected) {
        this.selectedItem = menuItem;
        return;
      }
    });
    this.validDefaultItem = !!this.selectedItem;
  }
  resizeSelectTag() {
    if (!this.primary) {
      let overlayEl = this.el.shadowRoot.querySelector('.select-text-overlay');
      if (overlayEl) {
        let overlayWidth = overlayEl.getBoundingClientRect().width;
        this.selectEl.style.width = `${overlayWidth}px`;
      }
    }
  }
  connectedCallback() {
    this.cel_icon = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon', 'cel-single-select', this.el);
  }
  componentWillLoad() {
    this.updateSelectedItem();
  }
  componentDidLoad() {
    if (!this.primary) {
      this.resizeSelectTag();
    }
    this.placeholderEl = this.el.shadowRoot.querySelector('.dropdown-label');
    this.setSelectTitleAttributeByOverflow();
  }
  componentDidUpdate() {
    if (!this.primary) {
      this.resizeSelectTag();
    }
    this.setSelectTitleAttributeByOverflow();
  }
  handleResize() {
    this.setSelectTitleAttributeByOverflow();
    if (!this.primary) {
      this.resizeSelectTag();
    }
  }
  setSelectTitleAttributeByOverflow() {
    if (this.placeholderEl) {
      if (this.placeholderEl.scrollHeight > this.placeholderEl.clientHeight || this.placeholderEl.scrollWidth > this.placeholderEl.clientWidth) {
        this.selectEl.setAttribute('title', this.placeholderEl.textContent);
      }
      else {
        this.selectEl.removeAttribute('title');
      }
    }
  }
  handleSelectedChange() {
    this.onChange.emit(this.selectedItem);
  }
  handleSelectItem(event) {
    this.menuList.forEach((item) => {
      if (item.identifier === event.target.value) {
        this.selectedItem = item;
      }
    });
    if (!this.validDefaultItem) {
      if (this.none === event.target.value) {
        this.selectedItem = { identifier: this.none, label: this.none };
      }
    }
  }
  getTextValidationMessage() {
    if (this.successMessage) {
      return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { "aria-live": "polite", class: `alert-message-wrapper ${!this.primary ? 'borderless' : ''}` }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": "true", class: "success-icon", "data-name": 'checkmark-circle', "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].SMALL, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].CONFIRM }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "success-message" }, this.successMessage)));
    }
    if (this.errorMessage) {
      return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { "aria-live": "polite", class: `alert-message-wrapper ${!this.primary ? 'borderless' : ''}` }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": "true", class: "error-icon", "data-name": 'alert-circle', "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].SMALL, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].ERROR }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "error-message" }, this.errorMessage)));
    }
    return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
  }
  handleOnOpen() {
    this.openSingleSelectDropdown.emit();
  }
  handleOnInitialFocus() {
    // for ensuring placeholder text updates appropriately when None option is the first item selected
    if (!this.selectedItem) {
      this.selectEl.selectedIndex = -1;
    }
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: [
        'wrapper',
        this.labelLeft ? 'label-left' : 'header-label',
        !this.secondaryLabel && !this.labelLeft ? 'wrapper-display-block' : ''
      ].join(' ') }, this.secondaryLabel ? Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { id: `select-label-${this.singleSelectId}`, class: `secondary-label ${this.disabled ? 'disabled' : ''}` }, this.secondaryLabel) : null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['single-container',
        this.errorMessage || this.enableError || this.successMessage || this.enableSuccess ? 'alert-message' : null,
        this.disabled && this.primary ? 'border-disabled' : null,
        (this.errorMessage || this.enableError) ? 'border-error'
          : (this.successMessage || this.enableSuccess)
            ? 'border-success' : null,
        this.primary && !this.disabled ? 'border-active' : '',
        this.lstTable ? 'borderless lst-table-select' : '',
        !this.primary ? 'borderless' : ''].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['width-wrapper',
        (this.errorMessage || this.enableError) ? 'border-error' : (this.successMessage || this.enableSuccess)
          ? 'border-success' : null,
        this.primary && !this.disabled ? 'border-active' : '',
        this.lstTable ? 'borderless lst-table-select' : '',
        !this.primary ? 'borderless' : ''].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['select-text-overlay',
        this.disabled && 'disabled-overlay',
        this.primary ? null :
          this.lstTable ? 'borderless lst-table-select' : '',
        !this.primary ? 'borderless' : ''].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: ['dropdown-label', !this.selectedItem && this.primary ? 'dropdown-placeholder' : ''].join(' '), "aria-hidden": "true" }, this.selectedItem ? this.selectedItem.displayLabel ? this.selectedItem.displayLabel : this.selectedItem.label :
      this.placeholder ? this.placeholder : 'invalid placeholder'), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { class: ['single-icon', this.disabled ? 'single-icon-disabled' : ''].join(' '), "data-size": this.caretSize, "data-name": 'caret-down', "data-src": this.caretSrc, "data-color": this.disabled ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAY
        : this.primary && !this.selectedItem ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].BLACK
          : _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDARKER, "aria-hidden": "true" })), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("select", { ref: (element) => (this.selectEl = element), "aria-label": !this.secondaryLabel ? this.singleSelectAriaLabel : this.secondaryLabel, class: [this.primary && 'primary-style-select', this.disabled && 'disabled-overlay'].join(' '), disabled: this.disabled, name: "dropdown", id: this.singleSelectId, onChange: (event) => this.handleSelectItem(event), "data-selected": this.selected, required: this.isRequired ? true : false, onClick: () => this.handleOnOpen(), onFocus: () => this.handleOnInitialFocus(), onTouchStart: () => this.handleOnInitialFocus() }, !this.validDefaultItem ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("option", { selected: true, "aria-selected": !this.selectedItem ? 'true' : this.selectedItem.identifier === this.none ? 'true' : 'false', value: this.none, title: this.none.length > this.titleCharLength ? this.none : null }, this.none)
      : null, this.menuList.map((item) => {
      return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("option", { selected: this.selectedItem ? (this.selectedItem.identifier === item.identifier) : false, "aria-selected": this.selectedItem && (this.selectedItem.identifier === item.identifier) ? 'true' : 'false', disabled: item.disabled, value: item.identifier, title: item.label.length > this.titleCharLength ? item.label : null }, item.label));
    }))), this.getTextValidationMessage()))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "toggleValueReset": ["handleValueReset"],
    "selected": ["updateSelectedItem"],
    "selectedItem": ["handleSelectedChange"]
  }; }
};
let singleSelectDropdownIds = 0;
CelSingleSelect.style = celSingleSelectCss;

const celTextFieldCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:block}.row-start{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}input[type=password]::-ms-reveal,input[type=password]::-ms-clear{display:none}input[type=text]::-webkit-search-decoration,input[type=text]::-webkit-search-cancel-button,input[type=text]::-webkit-search-results-button,input[type=text]::-webkit-search-results-decoration{-webkit-appearance:none}input[type=text]::-webkit-input-placeholder{color:var(--text-field-placeholder-color, #767676)}input[type=text]::-moz-placeholder{color:var(--text-field-placeholder-color, #767676)}input[type=text]:-ms-input-placeholder{color:var(--text-field-placeholder-color, #767676)}input[type=text]::-ms-input-placeholder{color:var(--text-field-placeholder-color, #767676)}input[type=text]::placeholder{color:var(--text-field-placeholder-color, #767676)}input[type=text]:focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}input[type=text]:focus.text-field--error,input[type=text]:focus.text-field--success{outline-offset:-5px}input[type=password]:focus-visible{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}input[type=password]:focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}input[type=password]:focus.text-field--error,input[type=password]:focus.text-field--success{outline-offset:-5px}.text-field-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:var(--text-field-container-position, relative)}.text-field-label{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font-size:var(--text-field-label-font-size, 0.875rem);font-family:var(--text-field-label-font-family, \"OpenSans-Semibold\");color:var(--text-field-label-color, #333);height:var(--text-field-label-height)}.text-field-label--disabled{color:var(--text-field-label-disabled--color, #767676)}.text-field.text-field--error{border:2px solid #cc333f}.text-field.text-field--success{border:2px solid #2A7D14}.helper-label{color:var(--helper-label-color, #333);font-family:var(--helper-label-font-family, \"OpenSans\");font-size:var(--helper-label-font-size, 0.75rem)}.helper-label--disabled{color:var(--helper-label-disabled--color, #767676)}.text-field{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;height:var(--text-field-height, 40px);border-radius:var(--text-field-border-radius, 4px);border:1px solid var(--text-field-border-color, #333);padding-left:var(--text-field-padding-left, 8px);color:var(--text-field-color, #333);font-size:var(--text-field-font-size, 1rem);font-family:var(--text-field-font-family, \"OpenSans\");margin-top:var(--text-field-label-margin-top, 3px)}.text-field--password{padding-right:var(--text-field-padding-right, 36px)}.text-field--disabled{border:none;background-color:var(--text-field-disabled-bg-color, #e2e2e2)}.error-container{position:var(--error-container-position, relative);margin-top:var(--error-container-margin-top, 1px);bottom:var(--error-container-bottom, 0);-ms-flex-align:start;align-items:flex-start}.error-icon,.success-icon{margin-top:var(--error-icon-margin-top, 1px);margin-right:var(--error-icon-margin-right, 3px);-ms-flex-negative:0;flex-shrink:0}.error-message{color:var(--error-message-color, #cc333f);font-family:var(--error-message-font-family, \"OpenSans-Bold\");font-size:var(--error-message-font-size, 0.75rem);height:var(--validation-message-height)}.success-container{margin-top:var(--success-container-margin-top, 1px);-ms-flex-align:start;align-items:flex-start}.success-message{color:var(--success-message-color, #2A7D14);font-family:var(--success-message-font-family, \"OpenSans-Bold\");font-size:var(--success-message-font-size, 0.75rem);height:var(--validation-message-height)}.eye-icon{position:absolute;right:12px;top:var(--password-field-icon-top, 20%)}#eye-icon-button{--cel-color-disabled:#767676;--icon-button-hover-color:#767676;--icon-button-disabled-outline-color:#767676}.input-field-container{position:relative}";

const CelTextField = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.onChange = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celTextFieldValue", 7);
    this.value = undefined;
    this.ariaDescribedby = undefined;
    this.disabled = false;
    this.fieldAriaLabel = undefined;
    this.fieldAriaPlaceholder = undefined;
    this.errorMessage = undefined;
    this.successMessage = '';
    this.enableError = false;
    this.enableSuccess = false;
    this.fieldLabel = 'Text Field Label';
    this.helperLabel = undefined;
    this.maxFieldLength = undefined;
    this.inputType = 'text';
    this.togglePassword = false;
    this.passwordIconColor = 'secondary';
    this.required = false;
    this.toggleInputType = this.inputType;
    this.fieldTabIndex = 0;
  }
  connectedCallback() {
    this.cel_icon_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon-button', 'cel-text-field', this.element);
    this.cel_icon = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon', 'cel-text-field', this.element);
  }
  handleTextFieldInput(event) {
    this.value = event.target.value;
  }
  handleTabDown(event) {
    var _a, _b, _c, _d, _e, _f;
    if (event.shiftKey && event.key === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_4__["T"]) {
      if (((_c = (_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.activeElement) === null || _c === void 0 ? void 0 : _c.getAttribute('id')) === 'eye-icon-button') {
        event.preventDefault();
        this.fieldTabIndex = 1;
        (_f = (_e = (_d = this.element) === null || _d === void 0 ? void 0 : _d.shadowRoot) === null || _e === void 0 ? void 0 : _e.getElementById('textField')) === null || _f === void 0 ? void 0 : _f.focus();
      }
    }
  }
  focus() {
    this.inputEl.focus();
  }
  toggleInput() {
    if (!this.disabled) {
      this.toggleInputType = this.toggleInputType === 'password' ? 'text' : 'password';
    }
  }
  handeValueChange() {
    this.onChange.emit(this.value);
  }
  getTextValidationMessage() {
    if (this.successMessage) {
      return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "success-container row-start" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": "true", class: "success-icon", "data-name": 'checkmark-circle', "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].SMALL, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].CONFIRM }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { role: 'alert', class: "success-message" }, this.successMessage)));
    }
    if (this.errorMessage && this.ariaDescribedby) {
      return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { "aria-live": "polite", role: "alert", id: "errorMessage", class: "error-container row-start" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "data-icon-aria-label": "Error", class: "error-icon", "data-name": 'alert-circle', "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].SMALL, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].ERROR }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "error-message" }, this.errorMessage)));
    }
    else if (this.errorMessage) {
      return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { id: "alertMessage", class: "error-container row-start" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { "aria-hidden": "true", class: "error-icon", "data-name": 'alert-circle', "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].SMALL, "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].ERROR }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { role: 'alert', class: "error-message" }, this.errorMessage)));
    }
    return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "text-field-container" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { htmlFor: "textField", class: [
        "text-field-label",
        this.disabled ? "text-field-label--disabled" : "",
      ].join(" ") }, this.fieldLabel, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: [
        "helper-label",
        this.disabled ? "helper-label--disabled" : "",
      ].join(" ") }, this.helperLabel)), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-field-container" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { id: "textField", class: [
        "text-field",
        this.togglePassword ? "text-field--password" : "",
        this.disabled ? "text-field--disabled" : (this.errorMessage || this.enableError)
          ? "text-field--error" : (this.successMessage || this.enableSuccess)
          ? "text-field--success" : ""
      ].join(" "), type: this.toggleInputType, value: this.value, placeholder: this.fieldAriaPlaceholder, readonly: this.disabled, maxlength: this.maxFieldLength, onInput: (e) => this.handleTextFieldInput(e), "aria-disabled": this.disabled ? 'true' : 'false', "aria-label": this.fieldAriaLabel, "aria-describedby": this.ariaDescribedby, "aria-placeholder": this.fieldAriaPlaceholder, tabIndex: this.fieldTabIndex, ref: (el) => (this.inputEl = el), required: this.required }), this.togglePassword ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: [
        "eye-icon",
        this.toggleInputType === "password"
          ? "show-icon"
          : "hide-icon",
      ].join(" ") }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { disabled: this.disabled, id: "eye-icon-button", "data-name": this.toggleInputType === 'password' ? 'show' : 'hide', "data-size": "medium", "data-color": this.disabled ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAY : this.passwordIconColor, "data-toggle": "true", "data-icon-button-aria-label": this.toggleInputType === 'password' ? 'show password - password is currently hidden' : 'hide password, password is currently visible', onFocus: () => (this.fieldTabIndex = -1), onBlur: () => (this.fieldTabIndex = 0), "data-padding": "5px" }))) : ("")), this.getTextValidationMessage())));
  }
  static get delegatesFocus() { return true; }
  get element() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "value": ["handeValueChange"]
  }; }
};
CelTextField.style = celTextFieldCss;

const celTextLinkCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:inline-block}.align-external-link-icon::after{display:var(--text-link-display, flex)}a{color:var(--text-link-color, #006be0);font-size:var(--text-link-font-size, 0.875rem);font-family:var(--text-link-font-family, \"OpenSans-Semibold\");-webkit-text-decoration:var(--text-link-decoration, underline);text-decoration:var(--text-link-decoration, underline);cursor:pointer;border-radius:2px;white-space:var(--text-link-white-space-wrap, normal);position:relative;text-decoration-thickness:var(--text-link-text-decoration-thickness, 1)}a:hover:not(.disabled-link):not(.current-step-link),a:focus:not(.disabled-link):not(.current-step-link){color:var(--text-link-hover-color, #2150a3);text-decoration:underline;text-decoration-thickness:var(--text-link-text-hover-decoration-thickness, 1)}a:hover:not(.disabled-link):not(.current-step-link)+.decorative-icon,a:focus:not(.disabled-link):not(.current-step-link)+.decorative-icon{--cel-color-base:var(--decorative-icon-hover-color, #2150a3)}a:not(.disabled-link):not(.current-step-link):has(+.decorative-icon:hover){color:var(--text-link-hover-color, #2150a3);text-decoration:underline;text-decoration-thickness:var(--text-link-text-hover-decoration-thickness, 1)}a:not(.disabled-link):not(.current-step-link):has(+.decorative-icon:hover) .external-link-icon{--cel-color-base:var(--external-link-icon-hover-color, #2150a3)}a:focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:0;text-decoration-thickness:var(--text-link-text-focus-decoration-thickness, 1)}.visited{color:var(--text-link-visited-color, #902364)}.external-link-icon{position:var(--text-link-external-link-icon-position, relative);top:var(--text-link-external-link-icon-top, 2px);margin-left:var(--text-link-external-link-icon-margin-left, 4px);--cel-color-disabled:var(--external-link-icon-disabled-color, #939393)}.text-link-wrapper{display:var(--text-link-wrapper-display, flex);-ms-flex-pack:var(--text-link-wrapper-justify-content, center);justify-content:var(--text-link-wrapper-justify-content, center);-ms-flex-align:var(--text-link-wrapper-align-items, center);align-items:var(--text-link-wrapper-align-items, center)}.text-link-wrapper:has(.decorative-icon.left){-ms-flex-direction:row-reverse;flex-direction:row-reverse}.decorative-icon{--cel-color-disabled:var(--decorative-icon-disabled-color, #939393);display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}.decorative-icon:hover:not(.disabled){--cel-color-base:var(--decorative-icon-hover-color, #2150a3)}.decorative-icon.left{margin-right:var(--decorative-icon-left-margin-right, 6px)}.decorative-icon:not(.left){margin-left:var(--decorative-icon-left-margin-left, 6px)}.current-step-link{text-decoration:none;cursor:pointer;color:var(--text-link-disabled-color, #939393)}.disabled-link{color:var(--text-link-disabled-color, #939393);font-size:var(--text-link-disabled-font-size, 0.875rem);font-family:var(--text-link-disabled-font-family, \"OpenSans-Semibold\");margin:0;white-space:var(--text-link-white-space-wrap, normal);cursor:default}";

const CelTextLink = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.textLinkClicked = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celTextLinkClicked", 7);
    this.celTextLinkOnBlur = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celTextLinkOnBlur", 7);
    this.disabled = undefined;
    this.identifier = undefined;
    this.linkHref = undefined;
    this.truncate = undefined;
    this.label = '';
    this.visited = undefined;
    this.role = 'link';
    this.focusElement = false;
    this.openInNewTab = false;
    this.openInNewTabLinkText = 'opens a new window';
    this.externalLinkIconColor = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].PRIMARY;
    this.externalLinkIconHoveredColor = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].PRIMARY_SHADE;
    this.textLinkAriaLabel = null;
    this.textLinkTabIndex = 0;
    this.showIcon = false;
    this.showIconLeft = false;
    this.iconSize = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].REGULAR;
    this.iconName = undefined;
    this.iconColor = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].PRIMARY;
    this.textLinkAriaCurrent = null;
    this.externalLinkIconInitialColor = this.externalLinkIconColor;
    this.externaLinkIconHover = false;
    this.onFocus = false;
  }
  celTextLinkClicked() {
    if (!this.disabled) {
      this.textLinkClicked.emit({
        identifier: this.identifier,
        label: this.label,
        linkHref: this.linkHref,
      });
    }
  }
  focusHandler() {
    if (!this.disabled) {
      this.onFocus = true;
      this.changeExternalLinkIconColor(this.externalLinkIconHoveredColor);
      this.externaLinkIconHover = true;
    }
  }
  mouseMoveHandler() {
    if (!this.disabled) {
      this.changeExternalLinkIconColor(this.externalLinkIconHoveredColor);
      this.externaLinkIconHover = true;
    }
  }
  connectedCallback() {
    this.cel_icon = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon', 'cel-text-link', this.el);
  }
  componentDidLoad() {
    if (this.focusElement) {
      this.anchortagEl.focus();
    }
  }
  changeExternalLinkIconColor(color, event, iconHoverStatus) {
    this.externalLinkIconInitialColor = color;
    if (event && event.type === 'blur') {
      this.celTextLinkOnBlur.emit();
      this.onFocus = false;
    }
    if (!iconHoverStatus && !this.onFocus) {
      this.externaLinkIconHover = iconHoverStatus;
    }
    if (this.onFocus) {
      this.externalLinkIconInitialColor = _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].PRIMARY_SHADE;
    }
  }
  formAriaLabel() {
    let formedAriaLabel = this.textLinkAriaLabel;
    if (!formedAriaLabel) {
      formedAriaLabel = `${this.label} ${this.openInNewTab ? this.openInNewTabLinkText : ''}`;
    }
    return formedAriaLabel;
  }
  handleFocusElement() {
    if (this.focusElement) {
      this.anchortagEl.focus();
    }
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: [!!this.showIcon && 'text-link-wrapper', 'align-external-link-icon'].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { role: this.role, ref: (el) => (this.anchortagEl = el), class: [
        this.disabled ? 'disabled-link' : '',
        this.visited ? 'visited' : '',
        this.textLinkAriaCurrent ? 'current-step-link' : ''
      ].join(' '), tabIndex: this.textLinkTabIndex, href: this.disabled ? null : (this.linkHref || (this.textLinkAriaCurrent && typeof this.linkHref !== undefined) ? this.linkHref : 'javascript:void(0)'), "aria-current": this.textLinkAriaCurrent, onClick: () => this.celTextLinkClicked(), "data-identifier": this.identifier, onMouseMove: () => {
        this.mouseMoveHandler();
      }, "aria-label": this.truncate ? null : this.formAriaLabel(), "aria-disabled": this.disabled ? "true" : "false", onMouseLeave: (event) => {
        this.changeExternalLinkIconColor(this.externalLinkIconColor, event, false);
      }, target: this.openInNewTab ? '_blank' : '_self', onFocus: () => this.focusHandler(), onBlur: (event) => { this.changeExternalLinkIconColor(this.externalLinkIconColor, event); },
      // Per conversation with accessibility: Title is not needed when full text is visible (not truncated). aria-label hidden when truncated to prevent double announcement
      title: this.truncate ? this.formAriaLabel() : null }, this.truncate ? '...' : this.label, this.openInNewTab ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { class: "external-link-icon", "aria-hidden": "true", "data-name": "maximize", "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].SMALL, "data-color": this.disabled ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].DISABLED : (this.visited && !this.externaLinkIconHover) ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].PLUM : this.externalLinkIconInitialColor })) : (null)), !!this.showIcon && (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { class: ['decorative-icon', this.showIconLeft ? 'left' : null, this.disabled ? 'disabled' : null].join(' '), "aria-hidden": "true", "data-name": this.iconName, "data-size": this.iconSize, "data-color": this.disabled ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].DISABLED : this.visited ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].PLUM : this.iconColor, onClick: () => this.celTextLinkClicked() })))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "focusElement": ["handleFocusElement"]
  }; }
};
CelTextLink.style = celTextLinkCss;

const celTextareaFieldCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:block}.row-start{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}textarea{border:none;overflow:auto;outline:none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;resize:none;}textarea::-webkit-input-placeholder{color:var(--textarea-field-placeholder-color, #767676);text-align:var(--textarea-field-placeholder-text-align, left);font-size:var(--textarea-field-placeholder-font-size, --font-size-small);line-height:var(--textarea-field-placeholder-line-height, normal)}textarea::-moz-placeholder{color:var(--textarea-field-placeholder-color, #767676);text-align:var(--textarea-field-placeholder-text-align, left);font-size:var(--textarea-field-placeholder-font-size, --font-size-small);line-height:var(--textarea-field-placeholder-line-height, normal)}textarea:-ms-input-placeholder{color:var(--textarea-field-placeholder-color, #767676);text-align:var(--textarea-field-placeholder-text-align, left);font-size:var(--textarea-field-placeholder-font-size, --font-size-small);line-height:var(--textarea-field-placeholder-line-height, normal)}textarea::-ms-input-placeholder{color:var(--textarea-field-placeholder-color, #767676);text-align:var(--textarea-field-placeholder-text-align, left);font-size:var(--textarea-field-placeholder-font-size, --font-size-small);line-height:var(--textarea-field-placeholder-line-height, normal)}textarea::placeholder{color:var(--textarea-field-placeholder-color, #767676);text-align:var(--textarea-field-placeholder-text-align, left);font-size:var(--textarea-field-placeholder-font-size, --font-size-small);line-height:var(--textarea-field-placeholder-line-height, normal)}textarea:focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}textarea:focus.textarea-field--error,textarea:focus.textarea-field--confirm{outline-offset:-5px}.textarea-field-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.textarea-field-label{font-size:var(--textarea-field-label-font-size, 0.875rem);font-family:var(--textarea-field-label-font-area-family, \"OpenSans-Semibold\");color:var(--textarea-field-label-font-color, #333)}.textarea-field-label--disabled,.textarea-field-label--disabled .textarea-charCount{color:var(--textarea-field-label-disabled--color, #767676)}.helper-label{color:var(--helper-label-color, #333);font-family:var(--helper-label-font-area-family, \"OpenSans\");font-size:var(--helper-label-font-size, 0.75rem)}.helper-label--disabled{color:var(--helper-label-disabled--color, #767676)}.textarea-field{width:var(--textarea-field-width, 400px);height:var(--textarea-field-height, 106px);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:var(--textarea-field-border-radius, 2px);border:1px solid var(--textarea-field-border-color, #333);padding:var(--textarea-field-padding-left, 8px);color:var(--textarea-field-color, #333);font-size:var(--textarea-field-font-size, 1rem);font-family:var(--textarea-field-font-area-family, \"OpenSans\");margin-top:var(--textarea-field-label-margin-top, 3px);line-height:var(--textarea-field-line-height, normal);background-color:var(--textarea-field-bg-color, #fff);cursor:inherit}.textarea-field.textarea-field--error{border:var(--textarea-field-error-border, 2px solid #cc333f)}.textarea-field.textarea-field--confirm{border:var(--textarea-field-confirm-border, 2px solid #2A7D14)}.textarea-field--disabled{border:1px solid var(--textarea-field-disabled-border-color, #e2e2e2);background-color:var(--textarea-field-disabled-bg-color, #e2e2e2);color:var(--textarea-field-disabled-color, #767676)}.textarea-field--resize{resize:var(--textarea-field-resize, both)}.message-container{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;margin-top:var(--message-container-margin-top, 1px);max-width:--textarea-field-width}.message-container.message-container-less-width{width:var(--textarea-field-message-container-less-width, 90%)}.message-container cel-icon{margin-top:var(--textarea-field-message-cel-icon-margin-top, 2px)}.message-icon{margin-right:var(--message-icon-margin-right, 3px);-ms-flex-negative:0;flex-shrink:0}.message-text{font-family:var(--message-text-font-area-family, \"OpenSans-Bold\");font-size:var(--message-text-font-size, 0.75rem)}.message-text.error{color:var(--message-text-color, #cc333f)}.message-text.confirm{color:var(--message-text-color, #2A7D14)}.message-text.general{color:var(--message-text-color, #006be0)}.textarea-charCount{position:absolute;font-family:var(--character-count-font-family, \"OpenSans\");font-size:var(--character-count-font-size, 0.75rem);color:var(--character-count-color, #333);margin-top:4px;min-width:60px;text-align:right}.textarea-charCount--disabled{color:var(--character-count-disabled--color, #333)}.textarea-charCount-align{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.textarea-field-info-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:var(--textarea-field-info-container, space-between);justify-content:var(--textarea-field-info-container, space-between);height:var(--validation-message-height);width:var(--textarea-field-info-container-width, 400px)}";

const CelTextareaField = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.onChange = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celTextareaFieldValue", 7);
    this.textareaId = `cel-text-area-${textareaIdIncrementor++}`;
    this.value = undefined;
    this.disabled = false;
    this.fieldAriaLabel = undefined;
    this.fieldAriaPlaceholder = undefined;
    this.fieldLabel = 'Text Area Label';
    this.maxFieldLength = undefined;
    this.helperLabel = undefined;
    this.inputText = '';
    this.autoFocus = false;
    this.showCharCount = false;
    this.enableResize = false;
    this.showMessage = false;
    this.messageConfig = null;
    this.required = false;
    this.textareaCharCount = 0;
  }
  handleTextareaFieldInput(event) {
    this.value = event.target.value;
    this.onChange.emit(this.value);
    this.getCharCount();
  }
  connectedCallback() {
    this.cel_icon = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon', 'cel-textarea-field', this.element);
  }
  componentDidLoad() {
    if (this.autoFocus) {
      this.textareaElement.focus();
    }
    this.textareaCharCount = this.textareaElement.value.length;
    if (this.maxFieldLength) {
      this.textareaElement.maxLength = this.maxFieldLength;
    }
    this.resizeObserver = new ResizeObserver(this.handleResize.bind(this));
    this.resizeObserver.observe(this.textareaElement);
  }
  handleResize() {
    if (this.showCharCount) {
      this.charCountElement.style.left = `${(this.textareaElement.offsetWidth - 58)}px`;
    }
  }
  getCharCount() {
    this.textareaCharCount = this.textareaElement.value.length;
  }
  disconnectedCallback() {
    this.resizeObserver.disconnect();
  }
  getMessage() {
    return this.showMessage && this.messageConfig && !this.disabled ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['message-container row-start', this.showCharCount && 'message-container-less-width'].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { class: "message-icon", "data-name": this.messageConfig.iconName, "data-size": 'small', "data-color": this.messageConfig.iconColor, "aria-hidden": "true" }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { role: 'alert', class: `message-text ${this.messageConfig.type}` }, this.messageConfig.label))) : null;
  }
  render() {
    var _a;
    let charCount;
    if (this.showCharCount && this.maxFieldLength > 0) {
      charCount = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: ['textarea-charCount', this.disabled ? 'textarea-charCount--disabled' : ''].join(' '), ref: (el) => (this.charCountElement = el) }, `${this.textareaCharCount}/${this.maxFieldLength}`);
    }
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "textarea-field-container" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: ['textarea-field-label', this.disabled ? 'textarea-field-label--disabled' : ''].join(' '), htmlFor: this.textareaId }, this.fieldLabel), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: ['helper-label', this.disabled ? 'helper-label--disabled' : ''].join(' ') }, this.helperLabel), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("textarea", { id: this.textareaId, ref: (el) => (this.textareaElement = el), class: ['textarea-field',
        this.showMessage && ((_a = this.messageConfig) === null || _a === void 0 ? void 0 : _a.type) && `textarea-field--${this.messageConfig.type}`,
        this.enableResize && 'textarea-field--resize',
        this.disabled ? 'textarea-field--disabled' : ''].join(' '), placeholder: this.fieldAriaPlaceholder, disabled: this.disabled, onInput: (e) => this.handleTextareaFieldInput(e), "aria-disabled": this.disabled ? 'true' : 'false', "aria-label": this.fieldAriaLabel, "aria-placeholder": this.fieldAriaPlaceholder, value: this.inputText, maxlength: this.maxFieldLength, required: this.required }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['textarea-field-info-container', this.showMessage ? '' : 'textarea-charCount-align'].join(' ') }, this.getMessage(), charCount))));
  }
  get element() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
let textareaIdIncrementor = 0;
CelTextareaField.style = celTextareaFieldCss;

const celToastNotificationCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:inline-block}.row-between{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.left-container{display:var(--left-container-display, flex)}.toast-button{-ms-flex-item-align:var(--toast-button-align-self, center);align-self:var(--toast-button-align-self, center);--small-button-height:fit-content}.toast-container{position:fixed;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:var(--toast-container-max-width, 40vw);left:50%;bottom:0;-webkit-transform:var(--toast-container-transform, translate(-50%, 0%));transform:var(--toast-container-transform, translate(-50%, 0%));margin:0 auto;background-color:var(--toast-container-bg-color, #222);border-radius:var(--toast-container-borderRadius, 4px);border:var(--toast-notification-container-border, none);padding:var(--toast-container-padding, 17px 24px);-webkit-box-shadow:var(--toast-container-box-shadow, 0 3px 5px 0 rgba(0, 0, 0, 0.36));box-shadow:var(--toast-container-box-shadow, 0 3px 5px 0 rgba(0, 0, 0, 0.36));z-index:var(--cel-toast-notification-z-index, 200)}.toast-label{color:var(--toast-label-color, #fff);font-size:var(--toast-label-font-size, 1rem);font-family:var(--toast-label-font-family, \"OpenSans\");margin-right:var(--toast-label-margin-right, 16px)}@media only screen and (max-width: 390px){.toast-container{-webkit-box-sizing:border-box;box-sizing:border-box;max-width:var(--toast-container-max-width, 100vw);width:var(--toast-container-mobile-width, 100vw);padding:var(--toast-container-mobile-padding, 12px 16px 12px 24px);border-radius:var(--toast-container-mobile-borderRadius, 0);--toast-container-transform:var(--toast-container-transform-moble, translate(-50%, 0%))}.toast-label{color:var(--toast-label-mobile-color, #fff);font-size:var(--toast-label-mobile-font-size, 1rem);font-family:var(--toast-label-mobile-font-family, \"OpenSans\");margin-right:var(--toast-label-mobile-margin-right, 16px)}}.toast-close-button{margin-left:var(--toast-close-button-margin-left, 0);--icon-button-bg-color:#222;--icon-button-hover-bg-color:rgba(255, 255, 255, 0.08)}";

const CelToastNotification = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.toastClose = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celToastClose", 7);
    this.buttonClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celToastButtonClick", 7);
    this.toastLabel = 'This is the text of the toast message';
    this.toastButton = false;
    this.toastButtonLabel = 'Toast Button';
    this.closeButtonAriaLabel = 'Dismiss notification';
  }
  connectedCallback() {
    this.cel_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-button', 'cel-toast-notification', this.el);
    this.cel_icon_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon-button', 'cel-toast-notification', this.el);
  }
  pressClose() {
    this.toastClose.emit();
  }
  buttonPress() {
    this.buttonClick.emit();
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toast-container row-between" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "left-container" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "toast-label" }, this.toastLabel), this.toastButton ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_button, { class: "toast-button", "data-button-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["b"].SMALL, "data-label": this.toastButtonLabel, onClick: () => this.buttonPress(), "data-button-aria-label": this.toastButtonLabel }) : null), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { onClick: () => this.pressClose(), class: "toast-close-button", "data-color": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].WHITE, "data-name": 'close', "data-icon-button-aria-label": this.closeButtonAriaLabel }))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
CelToastNotification.style = celToastNotificationCss;

const celToggleCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:-ms-flexbox;display:flex}.parent-container{display:-ms-flexbox;display:flex;-ms-flex-direction:var(--parent-container-flex-direction, column);flex-direction:var(--parent-container-flex-direction, column);-ms-flex-pack:var(--parent-container-justify-content, flex-start);justify-content:var(--parent-container-justify-content, flex-start);position:relative}.toggle-container{display:-ms-flexbox;display:flex;-ms-flex-direction:var(--toggle-container-flex-direction, row);flex-direction:var(--toggle-container-flex-direction, row);-ms-flex-align:var(--toggle-container-align-items, center);align-items:var(--toggle-container-align-items, center);-ms-flex-pack:var(--toggle-container-justify-content, flex-start);justify-content:var(--toggle-container-justify-content, flex-start);position:var(--toggle-container-position, relative)}.toggle-switch-container{display:-ms-flexbox;display:flex;-ms-flex-direction:var(--toggle-switch-contianer-flex-direction, row);flex-direction:var(--toggle-switch-contianer-flex-direction, row);-ms-flex-align:var(--toggle-switch-container-align-items, center);align-items:var(--toggle-switch-container-align-items, center);-ms-flex-pack:var(--toggle-switch-container-justify-content, space-between);justify-content:var(--toggle-switch-container-justify-content, space-between);margin-left:var(--toggle-switch-container-margin-left)}button{color:inherit;border:none;padding:4px;font:inherit;cursor:pointer;outline:inherit;width:40px;height:24px;background-color:var(--toggle-bg-color, #767676);border-radius:14.5px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;-webkit-transition:0.2s;transition:0.2s}button.toggle-active{background-color:var(--slider-bg-color, #006be0);-ms-flex-pack:end;justify-content:flex-end}.center{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.row-start{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:var(--toggle-label-color, #333);font-family:var(--toggle-state-label-font-family, \"Poppins-Medium\");font-size:var(--toggle-state-label-font-size, 0.75rem);margin-left:var(--toggle-label-margin-left, 4px)}.row-between{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.circle{height:16px;width:16px;background-color:var(--toggle-circle-color, #e2e2e2);border-radius:50%;-webkit-box-shadow:var(--toggle-circle-box-shadow, 0 3px 5px 0 rgba(0, 0, 0, 0.36));box-shadow:var(--toggle-circle-box-shadow, 0 3px 5px 0 rgba(0, 0, 0, 0.36));overflow:hidden}button:focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px);color:white}.circle-active{background-color:var(--active-circle-color, #fff);border:1px solid #fff}.toggle-label{font-size:var(--toggle-label-font-size, 0.875rem);font-family:var(--toggle-label-font-family, \"OpenSans-Semibold\");color:var(--toggle-label-color, #333);margin-right:var(--toggle-label-margin-right, 8px);margin-bottom:var(--toggle-label-margin-bottom);width:var(--toggle-label-width)}.disabled .toggle-label{color:var(--toggle-label-disabled-color, #939393)}.disabled .state-label{color:var(--state-label-disabled-color, #939393)}.disabled button{background-color:var(--toggle-disabled-bg-color, #939393);cursor:default}.disabled button.toggle-active{background-color:var(--slider-disabled-bg-color, #939393)}.toggle-active-label-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.toggle-subText{color:var(--toggle-sub-text-color, #767676);font-family:var(--toggle-sub-text-font-family, \"OpenSans\");font-size:var(--toggle-sub-text-font-size, 0.625rem);margin:0;margin-left:4px;white-space:var(--toggle-sub-text-white-space, nowrap)}.subtext-row{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;position:absolute;top:var(--toggle-sub-text-top, 16px)}.subtext-row .subtext-spacer{height:10px}";

const CelToggle = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.onChange = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celToggleState", 7);
    this.toggleLabelId = `cel-toggle-label-id-${++toggleIds}`;
    this.spacerWidth = undefined;
    this.active = false;
    this.activeLabel = 'On';
    this.inactiveLabel = 'Off';
    this.toggleAriaLabel = undefined;
    this.toggleLabel = undefined;
    this.disabled = false;
    this.showSubText = '';
  }
  connectedCallback() {
    this.cel_icon = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_1__["t"])('cel-icon', 'cel-toggle', this.el);
  }
  componentDidLoad() {
    this.spacerWidth = this.calculateSpacerWidth();
  }
  componentDidUpdate() {
    this.spacerWidth = this.calculateSpacerWidth();
  }
  togglePress() {
    if (!this.disabled) {
      this.active = !this.active;
      this.onChange.emit(this.active);
    }
  }
  getSubText() {
    if (this.showSubText) {
      return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: "toggle-subText" }, this.showSubText));
    }
    return;
  }
  calculateSpacerWidth() {
    var _a, _b, _c, _d;
    const widthGap = 9;
    let activeLabelWidth = this.toggleLabel ? ((_b = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('label')) === null || _b === void 0 ? void 0 : _b.offsetWidth) + widthGap : 0;
    let toggleSwitchContainerWidth = (_d = (_c = this.el.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('button')) === null || _d === void 0 ? void 0 : _d.offsetWidth;
    let totalWidth = activeLabelWidth + toggleSwitchContainerWidth;
    return totalWidth;
  }
  recalculateSpacerWidthIfLabelUpdates() {
    this.spacerWidth = this.calculateSpacerWidth();
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'parent-container' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: `toggle-container ${this.disabled ? 'disabled' : ''}` }, this.toggleLabel ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: "toggle-label", id: this.toggleLabelId }, this.toggleLabel)
      :
        '', Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toggle-switch-container" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { role: "switch", "aria-labelledby": this.toggleLabel ? this.toggleLabelId : null, "aria-label": this.toggleLabel ? null : this.toggleAriaLabel, "aria-checked": this.active ? "true" : "false", class: this.active && 'toggle-active', "aria-disabled": this.disabled ? 'true' : 'false', onClick: () => this.togglePress() }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: ['circle center', this.active ? 'circle-active' : ''].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon, { style: { padding: "2px" }, "data-name": this.active ? 'checkmark' : 'close', "aria-hidden": "true", "data-icon-aria-label": this.active ? this.activeLabel : this.inactiveLabel, "data-color": this.disabled ?
        (this.active ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].GRAYDUSTY : _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].DISABLED)
        : _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["C"].BLACK, "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_3__["a"].XXSMALL }))), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { "aria-hidden": "true", class: "row-start state-label" }, this.active ? this.activeLabel : this.inactiveLabel))), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { role: 'presentation', class: 'subtext-row' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { role: 'presentation', class: 'subtext-spacer', style: { width: `${this.spacerWidth}px` } }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { "aria-live": "polite" }, this.getSubText())))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "toggleLabel": ["recalculateSpacerWidthIfLabelUpdates"]
  }; }
};
let toggleIds = 0;
CelToggle.style = celToggleCss;




/***/ })

}]);
//# sourceMappingURL=34.js.map