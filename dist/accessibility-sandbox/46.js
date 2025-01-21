(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "xZXt":
/*!*********************************************************************************************************!*\
  !*** /Users/mattyZ/Desktop/Projects/forked-cel-library/dist-stencil/esm/cel-stacked-bar-chart.entry.js ***!
  \*********************************************************************************************************/
/*! exports provided: cel_stacked_bar_chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_stacked_bar_chart", function() { return CelStackedBarChart; });
/* harmony import */ var _index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-9a8c46b4.js */ "RO4M");


const celStackedBarChartCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:-ms-flexbox;display:flex;width:var(--cel-stacked-bar-chart-width, 100%)}@media only screen and (max-width: 576px){:host{width:var(--cel-stacked-bar-chart-mobilewidth, 100%);min-width:var(--cel-stacked-bar-chart-min-mobilewidth, 300px)}}.bar-chart-container{position:relative;width:var(--cel-stacked-bar-chart-width, 100%);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.bar-chart-container .bar-chart{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:var(--cel-stacked-bar-chart-align-items, center);align-items:var(--cel-stacked-bar-chart-align-items, center);min-width:var(--bar-chart-min-width, 10px);-ms-flex-pack:var(--cel-stacked-bar-chart-justify-text, center);justify-content:var(--cel-stacked-bar-chart-justify-text, center)}.bar-chart-container .bar-chart span{margin:var(--cel-stacked-bar-chart-text-margin, 0 6px);font-size:var(--cel-stacked-bar-chart-font-family, 0.875rem);font-family:var(--cel-stacked-bar-chart-font-family, \"Poppins-Medium\")}.bar-chart-container .button-wrapper{display:-ms-flexbox;display:flex;height:var(--cel-stacked-bar-chart-height, 26px);border:var(--cel-stacked-bar-chart-border, none)}.bar-chart-container button{color:inherit;background:transparent;border:none;width:100%;height:100%;padding:0;cursor:pointer}.bar-chart-container button:focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}.bar-chart-container .interactive-button{display:-ms-flexbox;display:flex;-ms-flex-align:var(--cel-stacked-bar-chart-align-items, center);align-items:var(--cel-stacked-bar-chart-align-items, center)}.bar-chart-container .rounded-wrapper>.interactive-wrapper:first-child,.bar-chart-container .rounded-wrapper>.interactive-wrapper:first-child>button,.bar-chart-container .rounded-wrapper>.interactive-wrapper:first-child>button>span{border-top-left-radius:var(--cel-stacked-bar-chart-left-rounded-border-radius, 8px);border-bottom-left-radius:var(--cel-stacked-bar-chart-left-rounded-border-radius, 8px)}.bar-chart-container .rounded-wrapper>.interactive-wrapper:last-child,.bar-chart-container .rounded-wrapper>.interactive-wrapper:last-child>button,.bar-chart-container .rounded-wrapper>.interactive-wrapper:last-child>button>span{border-top-right-radius:var(--cel-stacked-bar-chart-left-rounded-border-radius, 8px);border-bottom-right-radius:var(--cel-stacked-bar-chart-left-rounded-border-radius, 8px)}.bar-chart-container .divider{border-right:var(--cel-stacked-bar-chart-divider-border, 2px solid #fff)}.secondary-label{font-family:var(--cel-stacked-bar-chart-secondary-label-font-family, \"Poppins-Medium\");font-size:var(--cel-stacked-bar-chart-secondary-label-font-size, 0.75rem);padding:var(--cel-stacked-bar-chart-secondary-label-padding, 8px 0 0 0);color:var(--cel-stacked-bar-chart-secondary-label-color, #333);margin:0}";

const CelStackedBarChart = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.stackedBarChartMouseEnter = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celStackedBarChartMouseEnter", 7);
    this.stackedBarChartMouseLeave = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celStackedBarChartMouseLeave", 7);
    this.stackedBarChartItemFocus = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celStackedBarChartItemFocus", 7);
    this.stackedBarChartItemBlur = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celStackedBarChartItemBlur", 7);
    this.stackedBarChartItemClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celStackedBarChartItemClick", 7);
    /*
     * Total percentage for the whole progress bar
     */
    this.totalPercentage = 0;
    this.interactiveBtnClass = 'interactive-button';
    this.popupWrapperClass = 'popup-wrapper';
    this.activeItem = undefined;
    this.stackedBarChartItems = [];
    this.showSpacing = false;
    this.rounded = false;
    this.borderRadius = 10;
    this.secondaryLabel = null;
    this.showSecondaryLabel = false;
    this.graphSectionAriaLabel = 'Stacked Bar Chart';
  }
  /* This is for checking if the total width of all progress bars is within 100% */
  checkTotalPercentage(barChartWidth) {
    let isPercentageComplete = false;
    if (barChartWidth >= 0 && barChartWidth <= 100) {
      // Sum up all the percentage values of individual segments here and render component only if parts are within boundary
      this.totalPercentage += barChartWidth;
      isPercentageComplete = this.totalPercentage <= 100;
    }
    else {
      return false;
    }
    return isPercentageComplete;
  }
  toggleCustomHoverColor(event, item) {
    const barChart = this.el.shadowRoot.querySelector(`.bar-${item.id}`);
    if (event.type === 'mouseenter' && item.fillColor === 'custom' && window.matchMedia('(hover: hover)').matches) {
      barChart.style.backgroundColor = item.customHoverColor;
    }
    else if (event.type === 'mouseleave' && item.fillColor === 'custom' && window.matchMedia('(hover: hover)').matches) {
      barChart.style.backgroundColor = item.customFillColor;
    }
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: `bar-chart-container`, "aria-label": this.graphSectionAriaLabel }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['button-wrapper', this.rounded ? 'rounded-wrapper' : ''].join(' '), style: this.rounded ? { borderRadius: `${this.borderRadius}px` } : null }, this.stackedBarChartItems.map((item, index) => {
      return (item.percentage != 0 ?
        Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { style: { width: `${item.percentage}%` }, class: `interactive-wrapper
                                        ${this.showSpacing &&
            this.stackedBarChartItems.length > 1 &&
            index !== this.stackedBarChartItems.length - 1
            ? 'divider'
            : ''}` }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { onMouseEnter: () => this.stackedBarChartMouseEnter.emit(item), onMouseLeave: () => this.stackedBarChartMouseLeave.emit(item), class: `${this.interactiveBtnClass} ${this.interactiveBtnClass}-${item.id} ${item.fillColor}`, onClick: () => this.stackedBarChartItemClick.emit(item), onFocus: () => this.stackedBarChartItemFocus.emit(item), onBlur: () => this.stackedBarChartItemBlur.emit(item), title: item.ariaLabel }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { onMouseEnter: (event) => this.toggleCustomHoverColor(event, item), onMouseLeave: (event) => this.toggleCustomHoverColor(event, item), class: `bar-chart bar-${item.id} ${item.fillColor} interactive`, style: {
            color: item.fillColor === 'custom' ? item.customFontColor : null,
            backgroundColor: item.fillColor === 'custom' ? item.customFillColor : 'none'
          } }, item.label ? Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, item.label) : null)))
        :
          null);
    })), this.showSecondaryLabel ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: "secondary-label" }, this.secondaryLabel) : null)));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
CelStackedBarChart.style = celStackedBarChartCss;




/***/ })

}]);
//# sourceMappingURL=46.js.map