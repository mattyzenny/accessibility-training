(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "xzAK":
/*!****************************************************************************************************!*\
  !*** /Users/mattyZ/Desktop/Projects/forked-cel-library/dist-stencil/esm/cel-circle-graph.entry.js ***!
  \****************************************************************************************************/
/*! exports provided: cel_circle_graph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_circle_graph", function() { return CelCircleGraph; });
/* harmony import */ var _index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-9a8c46b4.js */ "RO4M");


const celCircleGraphCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:inline-block;pointer-events:none}.graph-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.button-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.secondary-label{font-family:var(--cel-circle-chart-secondary-label-font-family, \"Poppins-Medium\");font-size:var(--cel-circle-chart-secondary-label-font-size, 0.75rem);color:var(--cel-circle-chart-secondary-label-color, #333);padding:var(--cel-circle-chart-secondary-label-padding, 4px 0 0 0);margin:0;display:var(--cel-circle-chart-secondary-label-display, flex);-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:var(--cel-circle-chart-secondary-label-flex-wrap, wrap);flex-wrap:var(--cel-circle-chart-secondary-label-flex-wrap, wrap);white-space:var(--cel-circle-chart-white-space, break-spaces);-ms-flex-pack:var(--cel-circle-chart-justify-secondary-label, flex-start);justify-content:var(--cel-circle-chart-justify-secondary-label, flex-start)}button{border:none;padding:0;position:absolute;cursor:pointer;pointer-events:all;-webkit-tap-highlight-color:transparent}.single-value-spacer{border:none;padding:0;position:absolute;background-color:var(--cel-circle-chart-single-value-support-color, #e2e2e2)}button:focus{border:none;outline:none}.focusring{position:absolute;pointer-events:none}.border-ring{position:absolute;pointer-events:none}.show{visibility:visible}.hide{visibility:hidden}";

const CelCircleGraph = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.circleGraphMouseEnter = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celCircleGraphMouseEnter", 7);
    this.circleGraphMouseLeave = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celCircleGraphMouseLeave", 7);
    this.circleGraphItemFocus = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celCircleGraphItemFocus", 7);
    this.circleGraphItemBlur = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celCircleGraphItemBlur", 7);
    this.circleGraphItemClick = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celCircleGraphItemClick", 7);
    this.currentAngle = 0;
    this.currentFocusAngle = 0;
    this.activeItem = undefined;
    this.circleGraphItems = [];
    this.circleGraphStyles = {
      focusRingWidth: 4,
      focusRingOffset: 8,
      chartWidth: 300,
      innerRadius: 75,
      dividerWidth: 4,
      borderWidth: 0
    };
    this.showSpacing = false;
    this.secondaryLabelItems = null;
    this.showSecondaryLabel = false;
    this.graphSectionAriaLabel = 'Circle Chart';
  }
  /**
   * listener to close collapsed menu on outside click
   */
  handleOutsideClick(event) {
    if (event.target != this.el) {
      let focusRingList = Array.from(this.el.shadowRoot.querySelectorAll('.focusring'));
      focusRingList.map((ring) => {
        ring.classList.remove('show');
        ring.classList.add('hide');
        return ring;
      });
    }
  }
  calculateGraphPaths() {
    this.graphPaths = [];
    this.circleGraphItems.map((button) => {
      this.graphPaths.push(this.createSectionPath(button.percentage));
    });
  }
  createSectionPath(sectionPercentage) {
    let path = '';
    if (sectionPercentage >= 100) {
      let outerRadius = this.circleGraphStyles.chartWidth / 2;
      path = [
        'M', outerRadius * 2, outerRadius,
        'a', outerRadius, outerRadius, 0, 1, 1, -1 * this.circleGraphStyles.chartWidth, 0,
        'a', outerRadius, outerRadius, 0, 1, 1, this.circleGraphStyles.chartWidth, 0,
        'L', outerRadius + this.circleGraphStyles.innerRadius, outerRadius,
        'a', this.circleGraphStyles.innerRadius, this.circleGraphStyles.innerRadius, 0, 1, 1, -2 * this.circleGraphStyles.innerRadius, 0,
        'a', this.circleGraphStyles.innerRadius, this.circleGraphStyles.innerRadius, 0, 1, 1, 2 * this.circleGraphStyles.innerRadius, 0,
        'L', outerRadius * 2, outerRadius
      ].join(' ');
    }
    else if (sectionPercentage != 0) {
      let innerDividerOffset = this.calculateDividerAngleOffset(this.circleGraphStyles.innerRadius);
      let outerDividerOffset = this.calculateDividerAngleOffset(this.circleGraphStyles.chartWidth / 2);
      let outerRadius = this.circleGraphStyles.chartWidth / 2;
      let startOuterArc = this.polarToCoordinates(this.centerX, this.centerY, outerRadius, this.currentAngle + outerDividerOffset);
      let endInnerArc = this.polarToCoordinates(this.centerX, this.centerY, this.circleGraphStyles.innerRadius, this.currentAngle + innerDividerOffset);
      this.currentAngle += ((sectionPercentage / 100) * 360);
      let endOuterArc = this.polarToCoordinates(this.centerX, this.centerY, outerRadius, this.currentAngle - outerDividerOffset);
      let startInnerArc = this.polarToCoordinates(this.centerX, this.centerY, this.circleGraphStyles.innerRadius, this.currentAngle - innerDividerOffset);
      let largeArcFlag = (sectionPercentage > 50 ? 1 : 0);
      path = [
        'M', startOuterArc.x, startOuterArc.y,
        'A', outerRadius, outerRadius, 0, largeArcFlag, 1, endOuterArc.x, endOuterArc.y,
        'L', startInnerArc.x, startInnerArc.y,
        'A', this.circleGraphStyles.innerRadius, this.circleGraphStyles.innerRadius, 0, largeArcFlag, 0, endInnerArc.x, endInnerArc.y,
        'L', startOuterArc.x, startOuterArc.y
      ].join(' ');
    }
    return path;
  }
  createFocusPath(sectionPercentage) {
    let outerRadius = this.circleGraphStyles.chartWidth / 2 - this.circleGraphStyles.focusRingOffset - this.calculateBorderWidthOffset() - this.circleGraphStyles.focusRingWidth / 2;
    let innerRadius = this.circleGraphStyles.innerRadius + this.circleGraphStyles.focusRingOffset + this.calculateBorderWidthOffset() + this.circleGraphStyles.focusRingWidth / 2;
    let innerAngleOffset = this.calculateFocusAngleOffset(innerRadius) + this.calculateDividerAngleOffset(innerRadius);
    let outerAngleOffset = this.calculateFocusAngleOffset(outerRadius) + this.calculateDividerAngleOffset(outerRadius);
    let startOuterArc = this.polarToCoordinates(this.centerX, this.centerY, outerRadius, this.currentFocusAngle + outerAngleOffset);
    let endInnerArc = this.polarToCoordinates(this.centerX, this.centerY, innerRadius, this.currentFocusAngle + innerAngleOffset);
    let finalPoint = this.polarToCoordinates(this.centerX, this.centerY, outerRadius + this.circleGraphStyles.focusRingWidth / 2, this.currentFocusAngle + outerAngleOffset);
    this.currentFocusAngle += ((sectionPercentage / 100) * 360);
    let endOuterArc = this.polarToCoordinates(this.centerX, this.centerY, outerRadius, this.currentFocusAngle - outerAngleOffset);
    let startInnerArc = this.polarToCoordinates(this.centerX, this.centerY, innerRadius, this.currentFocusAngle - innerAngleOffset);
    let largeArcFlag = (sectionPercentage - this.circleGraphStyles.focusRingOffset * 100 / this.circleGraphStyles.chartWidth > 50 ? 1 : 0);
    let path = [
      'M', startOuterArc.x, startOuterArc.y,
      'A', outerRadius, outerRadius, 0, largeArcFlag, 1, endOuterArc.x, endOuterArc.y,
      'L', startInnerArc.x, startInnerArc.y,
      'A', innerRadius, innerRadius, 0, largeArcFlag, 0, endInnerArc.x, endInnerArc.y,
      'L', finalPoint.x, finalPoint.y
    ].join(' ');
    return path;
  }
  calculateFocusAngleOffset(radius) {
    return 2 * Math.asin(0.5 * (this.circleGraphStyles.focusRingOffset + this.circleGraphStyles.focusRingWidth / 2) / radius) * 180 / Math.PI;
  }
  calculateBorderWidthOffset() {
    if (this.circleGraphStyles.showBorders)
      return this.circleGraphStyles.borderWidth / 2;
    else
      return 0;
  }
  calculateDividerAngleOffset(radius) {
    if (this.showSpacing)
      return Math.asin(0.5 * this.circleGraphStyles.dividerWidth / radius) * 180 / Math.PI;
    else
      return 0;
  }
  polarToCoordinates(centerX, centerY, radius, angleInDegrees) {
    let angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }
  onMouseEnterMouseLeave(event, item) {
    const barChart = this.el.shadowRoot.querySelector(`.slice-${item.id}`);
    if (event.type === 'mouseenter') {
      this.circleGraphMouseEnter.emit(item);
      if (item.fillColor === 'custom' && window.matchMedia('(hover: hover)').matches) {
        barChart.style.backgroundColor = item.customHoverColor;
      }
    }
    else if (event.type === 'mouseleave') {
      this.circleGraphMouseLeave.emit(item);
      if (item.fillColor === 'custom') {
        barChart.style.backgroundColor = item.customFillColor;
      }
    }
  }
  onFocusSection(item, index) {
    let focusRing = this.el.shadowRoot.querySelector(`.focusring${index}`);
    focusRing.classList.remove('hide');
    focusRing.classList.add('show');
    this.circleGraphItemFocus.emit(item);
    return;
  }
  onBlurSection(item, index) {
    let focusRing = this.el.shadowRoot.querySelector(`.focusring${index}`);
    focusRing.classList.remove('show');
    focusRing.classList.add('hide');
    this.circleGraphItemBlur.emit(item);
    return;
  }
  onClickSection(item, index) {
    let focusRingList = Array.from(this.el.shadowRoot.querySelectorAll('.focusring'));
    focusRingList.map((ring) => {
      ring.classList.remove('show');
      ring.classList.add('hide');
      return ring;
    });
    let focusRing = this.el.shadowRoot.querySelector(`.focusring${index}`);
    focusRing.classList.remove('hide');
    focusRing.classList.add('show');
    this.circleGraphItemClick.emit(item);
  }
  render() {
    this.currentAngle = 0;
    this.currentFocusAngle = 0;
    this.centerX = this.circleGraphStyles.chartWidth / 2;
    this.centerY = this.circleGraphStyles.chartWidth / 2;
    this.calculateGraphPaths();
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: "graph-wrapper", "aria-label": this.graphSectionAriaLabel, style: {
        width: `${this.circleGraphStyles.chartWidth}px`,
      } }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "button-wrapper", style: {
        width: `${this.circleGraphStyles.chartWidth}px`,
        height: `${this.circleGraphStyles.chartWidth}px`
      } }, this.circleGraphItems.map((item, index) => {
      return (item.percentage != 0 ?
        Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { onMouseEnter: (event) => this.onMouseEnterMouseLeave(event, item), onMouseLeave: (event) => this.onMouseEnterMouseLeave(event, item), class: `circle-slice slice-${item.id} ${item.fillColor} interactive`, onClick: () => this.onClickSection(item, index), onFocus: () => this.onFocusSection(item, index), onBlur: () => this.onBlurSection(item, index), title: item.ariaLabel, style: {
            width: `${this.circleGraphStyles.chartWidth}px`,
            height: `${this.circleGraphStyles.chartWidth}px`,
            backgroundColor: item.fillColor === 'custom' ? item.customFillColor : 'none',
            'clip-path': `path(${item.percentage >= 100 ? 'evenodd,' : ''}'${this.graphPaths[index]}')`,
          } })
        :
          null);
    }), this.circleGraphItems.length === 1 && ((this.showSpacing && this.circleGraphItems[0].percentage <= 99) || (!this.showSpacing && this.circleGraphItems[0].percentage < 100)) && this.circleGraphItems[0].percentage > 0 ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "single-value-spacer", style: {
          width: `${this.circleGraphStyles.chartWidth}px`,
          height: `${this.circleGraphStyles.chartWidth}px`,
          'clip-path': `path('${this.createSectionPath(100 - this.circleGraphItems[0].percentage)}')`,
        } }) : null, this.circleGraphItems.map((button, index) => {
      return (button.percentage != 0 ?
        Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { xmlns: "http://www.w3.org/2000/svg", height: `${this.circleGraphStyles.chartWidth}`, width: `${this.circleGraphStyles.chartWidth}`, class: `focusring hide focusring${index}` }, button.percentage <= 100 ?
          Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: this.createFocusPath(button.percentage), stroke: "black", "stroke-width": `${this.circleGraphStyles.focusRingWidth}`, fill: "transparent" })
          :
            Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("g", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("circle", { cx: `${this.centerX}`, cy: `${this.centerY}`, "stroke-width": `${this.circleGraphStyles.focusRingWidth}`, fill: "none", stroke: "black", r: `${this.circleGraphStyles.innerRadius + this.circleGraphStyles.focusRingOffset + this.circleGraphStyles.borderWidth / 2 + this.circleGraphStyles.focusRingWidth / 2}` }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("circle", { cx: `${this.centerX}`, cy: `${this.centerY}`, "stroke-width": `${this.circleGraphStyles.focusRingWidth}`, fill: "none", stroke: "black", r: `${this.circleGraphStyles.chartWidth / 2 - this.circleGraphStyles.focusRingOffset - this.circleGraphStyles.borderWidth / 2 - this.circleGraphStyles.focusRingWidth / 2}` })))
        : null);
    }), this.circleGraphStyles.showBorders ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { xmlns: "http://www.w3.org/2000/svg", height: `${this.circleGraphStyles.chartWidth + this.circleGraphStyles.borderWidth}`, width: `${this.circleGraphStyles.chartWidth + this.circleGraphStyles.borderWidth}`, class: "border-ring" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("circle", { cx: `${this.centerX + this.circleGraphStyles.borderWidth / 2}`, cy: `${this.centerY + this.circleGraphStyles.borderWidth / 2}`, "stroke-width": `${this.circleGraphStyles.borderWidth}`, fill: "none", stroke: `${this.circleGraphStyles.borderColor}`, r: `${this.circleGraphStyles.innerRadius}` }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("circle", { cx: `${this.centerX + this.circleGraphStyles.borderWidth / 2}`, cy: `${this.centerY + this.circleGraphStyles.borderWidth / 2}`, "stroke-width": `${this.circleGraphStyles.borderWidth}`, fill: "none", stroke: `${this.circleGraphStyles.borderColor}`, r: `${this.circleGraphStyles.chartWidth / 2}` }))
      : null), this.showSecondaryLabel ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: "secondary-label" }, this.secondaryLabelItems.map((item, index) => {
        return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "secondary-label-item" }, `${item}${index === this.secondaryLabelItems.length - 1 ? '' : ', '}`));
      }))
      : null)));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
CelCircleGraph.style = celCircleGraphCss;




/***/ })

}]);
//# sourceMappingURL=38.js.map