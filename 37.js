(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "cPtE":
/*!************************************************************************************************!*\
  !*** /Users/mattyZ/Desktop/Projects/forked-cel-library/dist-stencil/esm/cel-calendar.entry.js ***!
  \************************************************************************************************/
/*! exports provided: cel_calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_calendar", function() { return CelCalendar; });
/* harmony import */ var _index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-9a8c46b4.js */ "RO4M");
/* harmony import */ var _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cel-icon-constants-33baae7b.js */ "UVxy");
/* harmony import */ var _customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customParseFormat-43dca114.js */ "4Pza");
/* harmony import */ var _commonjsHelpers_ba3f0406_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_commonjsHelpers-ba3f0406.js */ "tzaC");
/* harmony import */ var _utils_194224bf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils-194224bf.js */ "ldx1");
/* harmony import */ var _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-a06dfd18.js */ "+Be3");







var isBetween = Object(_commonjsHelpers_ba3f0406_js__WEBPACK_IMPORTED_MODULE_3__["c"])(function (module, exports) {
!function(e,i){module.exports=i();}(_commonjsHelpers_ba3f0406_js__WEBPACK_IMPORTED_MODULE_3__["a"],(function(){return function(e,i,t){i.prototype.isBetween=function(e,i,s,f){var n=t(e),o=t(i),r="("===(f=f||"()")[0],u=")"===f[1];return (r?this.isAfter(n,s):!this.isBefore(n,s))&&(u?this.isBefore(o,s):!this.isAfter(o,s))||(r?this.isBefore(n,s):!this.isAfter(n,s))&&(u?this.isAfter(o,s):!this.isBefore(o,s))};}}));
});

var isSameOrBefore = Object(_commonjsHelpers_ba3f0406_js__WEBPACK_IMPORTED_MODULE_3__["c"])(function (module, exports) {
!function(e,i){module.exports=i();}(_commonjsHelpers_ba3f0406_js__WEBPACK_IMPORTED_MODULE_3__["a"],(function(){return function(e,i){i.prototype.isSameOrBefore=function(e,i){return this.isSame(e,i)||this.isBefore(e,i)};}}));
});

var isSameOrAfter = Object(_commonjsHelpers_ba3f0406_js__WEBPACK_IMPORTED_MODULE_3__["c"])(function (module, exports) {
!function(e,t){module.exports=t();}(_commonjsHelpers_ba3f0406_js__WEBPACK_IMPORTED_MODULE_3__["a"],(function(){return function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)};}}));
});

var localeData = Object(_commonjsHelpers_ba3f0406_js__WEBPACK_IMPORTED_MODULE_3__["c"])(function (module, exports) {
!function(n,e){module.exports=e();}(_commonjsHelpers_ba3f0406_js__WEBPACK_IMPORTED_MODULE_3__["a"],(function(){return function(n,e,t){var r=e.prototype,o=function(n){return n&&(n.indexOf?n:n.s)},u=function(n,e,t,r,u){var i=n.name?n:n.$locale(),a=o(i[e]),s=o(i[t]),f=a||s.map((function(n){return n.slice(0,r)}));if(!u)return f;var d=i.weekStart;return f.map((function(n,e){return f[(e+(d||0))%7]}))},i=function(){return t.Ls[t.locale()]},a=function(n,e){return n.formats[e]||function(n){return n.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(n,e,t){return e||t.slice(1)}))}(n.formats[e.toUpperCase()])},s=function(){var n=this;return {months:function(e){return e?e.format("MMMM"):u(n,"months")},monthsShort:function(e){return e?e.format("MMM"):u(n,"monthsShort","months",3)},firstDayOfWeek:function(){return n.$locale().weekStart||0},weekdays:function(e){return e?e.format("dddd"):u(n,"weekdays")},weekdaysMin:function(e){return e?e.format("dd"):u(n,"weekdaysMin","weekdays",2)},weekdaysShort:function(e){return e?e.format("ddd"):u(n,"weekdaysShort","weekdays",3)},longDateFormat:function(e){return a(n.$locale(),e)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};r.localeData=function(){return s.bind(this)()},t.localeData=function(){var n=i();return {firstDayOfWeek:function(){return n.weekStart||0},weekdays:function(){return t.weekdays()},weekdaysShort:function(){return t.weekdaysShort()},weekdaysMin:function(){return t.weekdaysMin()},months:function(){return t.months()},monthsShort:function(){return t.monthsShort()},longDateFormat:function(e){return a(n,e)},meridiem:n.meridiem,ordinal:n.ordinal}},t.months=function(){return u(i(),"months")},t.monthsShort=function(){return u(i(),"monthsShort","months",3)},t.weekdays=function(n){return u(i(),"weekdays",null,null,n)},t.weekdaysShort=function(n){return u(i(),"weekdaysShort","weekdays",3,n)},t.weekdaysMin=function(n){return u(i(),"weekdaysMin","weekdays",2,n)};}}));
});

var weekday = Object(_commonjsHelpers_ba3f0406_js__WEBPACK_IMPORTED_MODULE_3__["c"])(function (module, exports) {
!function(e,t){module.exports=t();}(_commonjsHelpers_ba3f0406_js__WEBPACK_IMPORTED_MODULE_3__["a"],(function(){return function(e,t){t.prototype.weekday=function(e){var t=this.$locale().weekStart||0,i=this.$W,n=(i<t?i+7:i)-t;return this.$utils().u(e)?n:this.subtract(n,"day").add(e,"day")};}}));
});

Object(_commonjsHelpers_ba3f0406_js__WEBPACK_IMPORTED_MODULE_3__["c"])(function (module, exports) {
!function(e,o){module.exports=o(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"]);}(_commonjsHelpers_ba3f0406_js__WEBPACK_IMPORTED_MODULE_3__["a"],(function(e){function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=o(e),d={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return s.default.locale(d,null,!0),d}));
});

const celCalendarCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Poppins-Medium\";font-size:0.75rem;box-sizing:border-box}.calendar-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:230px;background-color:var(--date-popup-bg-color, #fff);-webkit-box-shadow:var(--date-popup-box-shadow, 0 3px 5px 0 rgba(0, 0, 0, 0.36));box-shadow:var(--date-popup-box-shadow, 0 3px 5px 0 rgba(0, 0, 0, 0.36));border-radius:4px;z-index:var(--date-popup-z-index, 200);-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--date-popup-padding, 0.25rem)}table{width:100%;border-spacing:0}th,td{color:#000;max-width:20px;max-height:20px;text-align:center;padding:4px}td[aria-selected=true]:focus>.day-circle{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}td:focus:not(:disabled){outline:none}.days{color:var(--calendar-days-color, #333)}.today>.day-circle{outline:1px solid black;background-color:#f3f3f3}.today>.day-circle:focus{outline-width:var(--focus-ring-outline-width, 2px)}span:hover:not(.disabled){color:#000;outline:none;background-color:#cdcdcd}.day-circle{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:14px;height:14px;border-radius:50%;padding:4px}.disabled,.disabled>.day-circle{pointer-events:none;color:var(--day-disabled-color, #767676)}td.disabled:hover{background-color:none;outline:none;cursor:not-allowed}.selected>.day-circle{background-color:#006be0;outline:none;color:#fff}.selected>.day-circle:focus:not(.disabled){outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}.range-start{background:-webkit-gradient(linear, left top, right top, color-stop(25%, rgba(255, 255, 255, 0)), to(#eaf3fc));background:linear-gradient(90deg, rgba(255, 255, 255, 0) 25%, #eaf3fc)}.day--included{background-color:var(--date-included-bg-color, #eaf3fc);-webkit-box-sizing:border-box;box-sizing:border-box}.range-end{background:-webkit-gradient(linear, left top, right top, from(#eaf3fc), color-stop(75%, rgba(255, 255, 255, 0)));background:linear-gradient(90deg, #eaf3fc, rgba(255, 255, 255, 0) 75%)}.keyboard-active>.day-circle{outline:1px solid currentColor}.today.selected.keyboard-active:focus>.day-circle{outline-offset:-4px}.selected.keyboard-active>.day-circle{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}.keyboard-active.focused>.day-circle{outline:2px solid currentColor}.keyboard-active:not(.focused).selected>.day-circle{outline:none}.content{color:var(--calendar-item-color, #222);font-size:var(--calendar-item-font-size, 0.75rem);font-family:var(--calendar-item-font-family, \"Poppins-Medium\")}.calendar-header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.month{color:var(--calendar-month-color, #222);font-size:var(--calendar-month-font-size, 1rem);font-family:var(--calendar-month-font-family, \"Poppins-SemiBold\");text-align:center;width:var(--calendar-month-width, inherit);margin:var(--calendar-month-margin, 8px)}.dialog-message{font-size:0.75rem;text-align:center;background-color:#006be0;color:#fff;border-top-left-radius:4px;border-top-right-radius:4px}";

const CelCalendar = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.celPressed = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celCalendarDatePressed", 7);
    this.escPressed = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celCalendarEscPressed", 7);
    // private cel_calendar_id: string = `cel-calendar-id-${calendarIds}`;
    this.cel_calendar_header_id = `cel-calendar-header-id-${++headerIds}`;
    // Array for keeping focusable elements
    this.focusableElementsList = [];
    this.activeDateJs = undefined;
    this.activeDateString = undefined;
    this.isFirstLoaded = true;
    this.currentFocusedElement = null;
    this.month = parseInt(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])().format('M'));
    this.year = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])().format('YYYY');
    this.disablePast = undefined;
    this.disableBefore = undefined;
    this.disableAfter = undefined;
    this.from = undefined;
    this.to = undefined;
    this.dateInputType = _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_5__["F"];
    this.localeEs = false;
  }
  connectedCallback() {
    this.cel_icon_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_4__["t"])('cel-icon-button', 'cel-calendar', this.el);
  }
  componentWillLoad() {
    _customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"].extend(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["c"]);
    _customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"].extend(isBetween);
    _customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"].extend(isSameOrBefore);
    _customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"].extend(isSameOrAfter);
    _customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"].extend(localeData);
    _customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"].extend(weekday);
    if (this.localeEs) {
      _customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"].locale('es');
    }
    else {
      _customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"].locale('en');
    }
    // --- Setting initial active date ---
    //if there is no to or from date, the calendar's active date should be today (which is === dayjs())
    this.parent = this.el.parentNode.getRootNode();
    if (!this.to && !this.from) {
      this.activeDateJs = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])();
    }
    //if there is a from date and the parent element is NOT the to input, the activeDateJs should be this.from
    if (this.from && this.dateInputType === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_5__["F"]) {
      this.activeDateJs = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.from.day} ${this.from.month} ${this.from.year}`, 'D M YYYY');
    }
    if (!this.from && this.dateInputType === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_5__["F"]) {
      this.activeDateJs = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])();
    }
    if (this.from && !this.to && this.dateInputType === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_5__["f"]) {
      this.activeDateJs = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.from.day} ${this.from.month} ${this.from.year}`, 'D M YYYY');
    }
    //if the parent element is the to input, the activeDateJs should be this.to
    if (this.dateInputType === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_5__["f"] && this.to) {
      this.activeDateJs = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.to.day} ${this.to.month} ${this.to.year}`, 'D M YYYY');
      this.month = this.activeDateJs.month() + 1;
      this.year = this.activeDateJs.year().toString();
    }
  }
  // --- Setting tab index for today's date to be 0 ONLY if no date is already selected ---
  // --- If a to or from date exists, the 'today' should NOT have tabindex ---
  componentDidLoad() {
    this.isFirstLoaded = false;
    if (!this.to && !this.from) {
      this.makeADayFocused('td.today');
    }
    else if (this.to && !this.from && this.dateInputType === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_5__["F"]) {
      this.makeADayFocused('td.today');
    }
    else if (this.to && this.from && this.dateInputType) {
      if (JSON.stringify(this.to) === JSON.stringify(this.from)) {
        this.makeADayFocused('td.from');
      }
      else {
        const selectorTarget = this.dateInputType.split('-')[1];
        this.makeADayFocused(`td.${selectorTarget}`);
        if (this.to.month === this.from.month && this.to.year === this.from.year) {
          let secondDay = this.el.shadowRoot
            .querySelector(`td.${_constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_5__["f"].split('-')[1]}`);
          if (this.dateInputType === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_5__["F"]) {
            this.focusableElementsList.push(secondDay);
          }
          else {
            secondDay = this.el.shadowRoot
              .querySelector(`td.${_constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_5__["F"].split('-')[1]}`);
            this.focusableElementsList.unshift(secondDay);
          }
        }
      }
    }
    else if (this.from) {
      this.makeADayFocused('td.from');
    }
    else if (this.to && !this.from) {
      this.makeADayFocused('td.to');
    }
    this.focusableElementsList.unshift(this.secondIconBtn);
    this.focusableElementsList.unshift(this.firstIconBtn);
  }
  /* This is used when calendar is opened */
  makeADayFocused(selector) {
    const day = this.el.shadowRoot.querySelector(selector);
    day.focus();
    day.tabIndex = 0;
    this.focusableElementsList.push(day);
    this.setCurrentFocusedElement(day);
  }
  addMonth(disableForwardMonth = false) {
    if (disableForwardMonth)
      return;
    if (this.month < 12) {
      this.month++;
    }
    else {
      this.month = 1;
      this.year = (parseInt(this.year) + 1).toString();
    }
  }
  subtractMonth(disabled) {
    if (disabled)
      return;
    if (this.month > 1) {
      this.month--;
    }
    else {
      this.month = 12;
      this.year = (parseInt(this.year) - 1).toString();
    }
  }
  getWeekCount(startOfMonth, daysInMonth) {
    const day = Math.ceil((startOfMonth.weekday() + daysInMonth) / 7);
    return [...Array(day).keys()];
  }
  getDay(week, dayOfWeek, startOfMonth) {
    if (week == 0) {
      if (dayOfWeek == startOfMonth.weekday()) {
        return startOfMonth;
      }
      else if (dayOfWeek > startOfMonth.weekday()) {
        return startOfMonth.add(dayOfWeek - startOfMonth.weekday(), 'day');
      }
    }
    else {
      if (startOfMonth.add(week, 'week').startOf('week').add(dayOfWeek, 'day').isBefore(startOfMonth.add(1, 'month'))) {
        return startOfMonth.add(week, 'week').startOf('week').add(dayOfWeek, 'day');
      }
    }
    return null;
  }
  handleDatePress(event, date, keyPressed = '') {
    event.preventDefault();
    this.activeDateJs = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(date);
    this.activeDateString = this.formatActiveDateJsToString(this.activeDateJs);
    this.celPressed.emit({
      activeDate: this.activeDateString,
      keyPressed,
    });
  }
  keydownListener(event) {
    var _a, _b;
    if (event.key === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_5__["E"]) {
      this.escEvent();
    }
    // if the user does 'keydown' on a valid grid element, keyboard functions will fire (will not fire on icon btns)
    if (((_b = (_a = this.el.shadowRoot.activeElement) === null || _a === void 0 ? void 0 : _a.getAttributeNode('role')) === null || _b === void 0 ? void 0 : _b.value) === 'gridcell') {
      Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_4__["h"])(event, (this.calendarKeyboardActionObject = {
        arrowUpDown: (event) => this.arrowUpDown(event),
        arrowLeftRight: (event) => this.arrowLeftRight(event),
        spaceEnter: () => this.spaceEnterEvent(event, event.key),
        escape: () => this.escEvent(),
        tab: () => this.tabEventHandler(),
      }));
    }
    if (event.key === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_5__["T"]) {
      const focusedDay = this.el.shadowRoot.querySelector('td.tab-active');
      if (focusedDay) {
        focusedDay.classList.remove('keyboard-active');
        focusedDay.classList.remove('tab-active');
        focusedDay.tabIndex = -1;
      }
      if (!event.shiftKey) {
        this.trapFocusInTabAction();
      }
      else {
        this.trapFocusInShiftTabAction();
      }
    }
  }
  trapFocusInTabAction() {
    switch (this.currentFocusedElement) {
      case this.focusableElementsList[2]:
        this.focusableElementsList[2].tabIndex = -1;
        if (this.focusableElementsList[3] && !this.checkIfADayIsNotInteracted(3)) {
          this.makeADayFocusedForFocusTrapping(3, 1);
        }
        else {
          const element = this.focusableElementsList[0].shadowRoot.querySelector('button');
          if (!element.classList.contains('disabled')) {
            this.setCurrentFocusedElement(this.focusableElementsList[0]);
          }
          else {
            this.checkIfFirstIndexedElementIsAvailableInTabAction(2, 1);
          }
        }
        break;
      case this.focusableElementsList[0]:
        this.checkIfFirstIndexedElementIsAvailableInTabAction(2, 0);
        break;
      case this.focusableElementsList[1]:
        this.makeADayFocusedForFocusTrapping(2, 0);
        break;
      case this.focusableElementsList[3]:
        this.focusableElementsList[3].tabIndex = -1;
        const element = this.focusableElementsList[0].shadowRoot.querySelector('button');
        if (!element.classList.contains('disabled')) {
          this.setCurrentFocusedElement(this.focusableElementsList[0]);
        }
        else {
          this.checkIfFirstIndexedElementIsAvailableInTabAction(2, 0);
        }
        break;
    }
  }
  checkIfFirstIndexedElementIsAvailableInTabAction(alternativeElementIndex, tabIndex) {
    const firstElement = this.focusableElementsList[1].shadowRoot
      .querySelector('button');
    if (!firstElement.classList.contains('disabled')) {
      this.setCurrentFocusedElement(this.focusableElementsList[1]);
    }
    else {
      this.makeADayFocusedForFocusTrapping(alternativeElementIndex, tabIndex);
    }
  }
  trapFocusInShiftTabAction() {
    switch (this.currentFocusedElement) {
      case this.focusableElementsList[1]:
        this.checkIfZerothIndexedElementIsAvailableInShiftTabAction(this.focusableElementsList.length - 1, 1);
        break;
      case this.focusableElementsList[0]:
        const elementIndex = this.focusableElementsList.length - 1;
        if (!this.checkIfADayIsNotInteracted(elementIndex)) {
          this.makeADayFocusedForFocusTrapping(elementIndex, 1);
        }
        else {
          this.makeADayFocusedForFocusTrapping(2, 1);
        }
        break;
      case this.focusableElementsList[2]:
        this.focusableElementsList[2].tabIndex = -1;
        const firstElement = this.focusableElementsList[1].shadowRoot.querySelector('button');
        if (!firstElement.classList.contains('disabled')) {
          this.setCurrentFocusedElement(this.focusableElementsList[1]);
        }
        else {
          this.checkIfZerothIndexedElementIsAvailableInShiftTabAction(this.focusableElementsList.length - 1, 1);
        }
        break;
      case this.focusableElementsList[3]:
        this.focusableElementsList[3].tabIndex = -1;
        this.makeADayFocusedForFocusTrapping(2, 1);
        break;
    }
  }
  checkIfZerothIndexedElementIsAvailableInShiftTabAction(alternativeElementIndex, tabIndex) {
    const zerothElement = this.focusableElementsList[0].shadowRoot
      .querySelector('button');
    if (!zerothElement.classList.contains('disabled')) {
      this.setCurrentFocusedElement(this.focusableElementsList[0]);
    }
    else {
      this.makeADayFocusedForFocusTrapping(alternativeElementIndex, tabIndex);
    }
  }
  makeADayFocusedForFocusTrapping(elementIndex, tabIndex) {
    const day = this.focusableElementsList[elementIndex];
    let focusableDay = null;
    let focusableElementTabIndex = tabIndex;
    focusableDay = day;
    focusableDay.tabIndex = focusableElementTabIndex;
    this.focusableElementsList[elementIndex] = day;
    this.setCurrentFocusedElement(this.focusableElementsList[elementIndex]);
  }
  checkIfADayIsNotInteracted(elementIndex) {
    const targetClasses = this.focusableElementsList[elementIndex].getAttribute('class');
    return targetClasses === 'valid' || targetClasses === 'disabled';
  }
  setCurrentFocusedElement(element) {
    this.currentFocusedElement = element;
  }
  tabEventHandler() { }
  arrowUpDown(event) {
    const endofMonth = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.activeDateJs).endOf('month')).startOf('day');
    let firstOfMonth = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.activeDateJs).startOf('month')).startOf('day');
    const backBtnDisabled = this.firstIconBtn.className.includes('disableSubtract');
    let nextWeek = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.activeDateJs).add(7, 'day');
    let prevWeek = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.activeDateJs).subtract(7, 'day');
    if (event.key === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_5__["d"]) {
      if ((this.disablePast && Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])().isSameOrAfter(this.activeDateJs, 'day')) ||
        (this.disableBefore &&
          prevWeek.isBefore(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.disableBefore.day} ${this.disableBefore.month} ${this.disableBefore.year}`, 'D M YYYY'))) ||
        (this.disablePast &&
          this.disableBefore &&
          prevWeek.isBefore(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.disableBefore.day} ${this.disableBefore.month} ${this.disableBefore.year}`, 'D M YYYY')))) {
        return;
      }
      if (this.disableBefore &&
        prevWeek.isBefore(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.disableBefore.day} ${this.disableBefore.month} ${this.disableBefore.year}`, 'D M YYYY'))) {
        return;
      }
      this.activeDateJs = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.activeDateJs).subtract(7, 'day');
      if (this.activeDateJs.isBefore(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(firstOfMonth), 'day') && !backBtnDisabled) {
        this.subtractMonth(backBtnDisabled);
      }
    }
    else if (event.key === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_5__["e"]) {
      if (this.disableAfter &&
        nextWeek.isAfter(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.disableAfter.day} ${this.disableAfter.month} ${this.disableAfter.year}`, 'D M YYYY'), 'day')) {
        return;
      }
      this.activeDateJs = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.activeDateJs).add(7, 'day');
      if (this.activeDateJs.isAfter(endofMonth, 'day')) {
        this.addMonth();
      }
    }
  }
  arrowLeftRight(event) {
    let endOfMonth = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.activeDateJs).endOf('month')).startOf('day');
    let firstOfMonth = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.activeDateJs).startOf('month')).startOf('day');
    const backBtnDisabled = this.firstIconBtn.className.includes('disableSubtract'); // T if disabled, F is not disabled
    if (event.key === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_5__["c"]) {
      if ((this.disablePast && Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])().isSameOrAfter(this.activeDateJs, 'day')) ||
        (this.disableBefore &&
          Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.activeDateJs).isSameOrBefore(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.disableBefore.day} ${this.disableBefore.month} ${this.disableBefore.year}`, 'D M YYYY'), 'day'))) {
        return;
      }
      this.activeDateJs = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.activeDateJs).subtract(1, 'day');
      if (this.activeDateJs.isBefore(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(firstOfMonth), 'day') && !backBtnDisabled) {
        this.subtractMonth(backBtnDisabled);
      }
    }
    else if (event.key === _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_5__["A"]) {
      //if there is a 'to' date and user is in 'from' input, do not allow days after 'to' date be accessible
      if (this.to &&
        !this.parent.querySelector('.isToInput') &&
        this.activeDateJs.isSameOrAfter(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.to.day} ${this.to.month} ${this.to.year}`, 'D M YYYY'), 'day')) {
        return;
      }
      //if disableAfter is set, do not allow days after that to be accessible by keyboard
      if (this.disableAfter && this.disableAfter.month && this.disableAfter.day && this.disableAfter.year &&
        this.activeDateJs.isSameOrAfter(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.disableAfter.day} ${this.disableAfter.month} ${this.disableAfter.year}`, 'D M YYYY'), 'day')) {
        return;
      }
      this.activeDateJs = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.activeDateJs).add(1, 'day');
      if (this.activeDateJs.isAfter(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(endOfMonth), 'day')) {
        this.addMonth();
      }
    }
  }
  spaceEnterEvent(event, keyPressed) {
    const activeKeyboardEl = this.el.shadowRoot.querySelector('.keyboard-active');
    if (activeKeyboardEl.classList.contains('valid')) {
      this.handleDatePress(event, this.activeDateJs, keyPressed);
    }
  }
  escEvent() {
    this.escPressed.emit();
  }
  formatActiveDateJsToString(date) {
    return (this.activeDateString = {
      day: Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(date).format('D').toString(),
      month: this.month.toString(),
      year: this.year,
    });
  }
  handleAddMonthClick(disableForwardMonth) {
    this.addMonth(disableForwardMonth);
    this.setCurrentFocusedElement(this.focusableElementsList[1]);
    if (this.disableAfter &&
      Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.activeDateJs).add(1, 'month')).isAfter(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.disableAfter.month} ${this.disableAfter.day} ${this.disableAfter.year}`, 'M D YYYY'), 'day')) {
      this.activeDateJs = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.disableAfter.month} ${this.disableAfter.day} ${this.disableAfter.year}`, 'M D YYYY');
    }
    else {
      this.activeDateJs = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.activeDateJs).add(1, 'month');
    }
  }
  handleSubtractMonthClick(disableForwardMonth) {
    this.subtractMonth(disableForwardMonth);
    this.setCurrentFocusedElement(this.focusableElementsList[0]);
    if (Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.activeDateJs).subtract(1, 'month')).isBefore(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.disableBefore.month} ${this.disableBefore.day} ${this.disableBefore.year}`, 'M D YYYY'), 'day')) {
      this.activeDateJs = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.disableBefore.month} ${this.disableBefore.day} ${this.disableBefore.year}`, 'M D YYYY');
    }
    else {
      this.activeDateJs = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.activeDateJs).subtract(1, 'month');
    }
  }
  render() {
    const dayJs = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.month} ${this.year}`, 'M YYYY');
    const fromDayJs = this.from ? Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.from.day} ${this.from.month} ${this.from.year}`, 'D M YYYY') : null;
    const toDayJs = this.to ? Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.to.day} ${this.to.month} ${this.to.year}`, 'D M YYYY') : null;
    const disableSubtract = (this.disablePast && dayJs.isSameOrBefore(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(), 'month')) ||
      (this.disableBefore && parseInt(this.disableBefore.year) === dayJs.year()
        && parseInt(this.disableBefore.month) === dayJs.month() + 1) ? true : false;
    let disableForwardMonth = false;
    if (this.disableAfter) {
      if (parseInt(this.disableAfter.year) === dayJs.year()) {
        disableForwardMonth = (parseInt(this.disableAfter.month) <= dayJs.month() + 1);
      }
      else if (parseInt(this.disableAfter.year) < dayJs.year()) {
        disableForwardMonth = true;
      }
    }
    const weekCount = this.getWeekCount(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(dayJs).startOf('month'), dayJs.daysInMonth());
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'calendar-container', role: 'dialog', "aria-modal": 'true', "aria-label": 'Choose Date' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'calendar-header' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { ref: (el) => (this.firstIconBtn = el), class: ['firstIconBtn', disableSubtract ? 'disableSubtract' : null].join(' '), onClick: () => this.handleSubtractMonthClick(disableSubtract), "data-name": 'chevron-left', "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_1__["a"].SMALL, "data-disabled": disableSubtract ? 'true' : 'false', "data-icon-button-aria-label": 'previous month' }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { "aria-live": 'polite', id: this.cel_calendar_header_id, class: 'month' }, `${dayJs.format('MMMM')} ${dayJs.format('YYYY')}`, ' '), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { ref: (el) => (this.secondIconBtn = el), onClick: () => this.handleAddMonthClick(disableForwardMonth), "data-name": 'chevron-right', "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_1__["a"].SMALL, "data-disabled": disableForwardMonth ? 'true' : 'false', "data-icon-button-aria-label": 'next month' })), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("table", { role: 'grid', "aria-labelledby": this.cel_calendar_header_id }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("thead", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("tr", null, [0, 1, 2, 3, 4, 5, 6].map((day) => (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("th", { scope: 'col', title: Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(dayJs.weekday(day)).format('dddd'), "aria-label": Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(dayJs.weekday(day)).format('dddd') }, Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(dayJs.weekday(day)).format('dd')))))), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("tbody", null, weekCount.map((week) => {
      return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("tr", { class: 'row' }, [0, 1, 2, 3, 4, 5, 6].map((dayOfWeek) => {
        const day = this.getDay(week, dayOfWeek, Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(dayJs).startOf('month'));
        const isFrom = day ? day.isSame(fromDayJs, 'day') : null;
        const isTo = day ? day.isSame(toDayJs, 'day') : null;
        const isToday = day ? day.isSame(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(), 'day') : null;
        const isDisabled = this.disablePast && day && day.isBefore(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(), 'day') ? true : false;
        const disabledBefore = this.disableBefore &&
          day &&
          day.isBefore(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.disableBefore.day} ${this.disableBefore.month} ${this.disableBefore.year}`, 'D M YYYY'), 'day');
        const disabledAfter = this.disableAfter &&
          day &&
          day.isAfter(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.disableAfter.day} ${this.disableAfter.month} ${this.disableAfter.year}`, 'D M YYYY'), 'day');
        const rangeDefined = this.from && this.to ? true : false;
        return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("td", { tabindex: !isDisabled && (isTo || isFrom) ? 0 : -1, role: 'gridcell', class: [
            isToday ? 'today' : null,
            isDisabled ||
              disabledBefore ||
              disabledAfter ||
              !day ||
              (isFrom && rangeDefined && day.isAfter(fromDayJs, 'day'))
              ? 'disabled'
              : 'valid',
            isFrom || isTo ? 'selected' : null,
            isFrom ? 'from' : isTo ? 'to' : null,
            day && day.isBetween(fromDayJs, toDayJs) ? 'day--included' : null,
            isFrom && rangeDefined && !fromDayJs.isSame(toDayJs, 'day')
              ? 'range-start'
              : isTo && rangeDefined && !fromDayJs.isSame(toDayJs, 'day')
                ? 'range-end'
                : null,
            !isDisabled && (isFrom || isTo || isToday) ? 'focusable' : null,
            !isDisabled && day && day.isSame(this.activeDateJs, 'day') ? 'keyboard-active' : null,
            !isDisabled && (this.currentFocusedElement != this.firstIconBtn) && (this.currentFocusedElement != this.secondIconBtn) ? 'focused' : null,
          ].join(' '), "aria-selected": isFrom || isTo ? 'true' : 'false', "aria-label": day ? `${Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(day).format('MMMM D YYYY')}, ${Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(day).format('dddd')}` : null, onClick: !(isDisabled || disabledBefore || disabledAfter) && day
            ? (event) => this.handleDatePress(event, day)
            : () => { } }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: [
            'day-circle',
            isToday ? 'today' : null,
            isFrom || isTo ? 'selected' : null,
            isDisabled || disabledBefore || disabledAfter || !day ? 'disabled' : null,
          ].join(' ') }, day ? day.date() : null)));
      })));
    }))))));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
// let calendarIds = 0;
let headerIds = 0;
CelCalendar.style = celCalendarCss;




/***/ })

}]);
//# sourceMappingURL=37.js.map