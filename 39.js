(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "xCMO":
/*!**************************************************************************************************!*\
  !*** /Users/mattyZ/Desktop/Projects/forked-cel-library/dist-stencil/esm/cel-date-input.entry.js ***!
  \**************************************************************************************************/
/*! exports provided: cel_date_input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_date_input", function() { return CelDateInput; });
/* harmony import */ var _index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-9a8c46b4.js */ "RO4M");
/* harmony import */ var _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cel-icon-constants-33baae7b.js */ "UVxy");
/* harmony import */ var _customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customParseFormat-43dca114.js */ "4Pza");
/* harmony import */ var _utils_194224bf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils-194224bf.js */ "ldx1");
/* harmony import */ var _commonjsHelpers_ba3f0406_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_commonjsHelpers-ba3f0406.js */ "tzaC");
/* harmony import */ var _constants_a06dfd18_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-a06dfd18.js */ "+Be3");







const celDateInputCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}:host{display:-ms-flexbox;display:flex;-ms-flex-positive:inherit;flex-grow:inherit;-ms-flex-direction:column;flex-direction:column;width:var(--date-input-width, -webkit-fit-content);width:var(--date-input-width, -moz-fit-content);width:var(--date-input-width, fit-content);position:relative}div.input-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:space-evenly;justify-content:space-evenly;position:relative}div.input-wrapper.bordered{background-color:var(--date-input-bordered-background-color, #fff);outline:1px solid var(--date-input-bordered-outline-color, #333);border-radius:2px}div.input-wrapper.bordered.bordered--focus{outline:2px solid var(--date-input-bordered-focus-outline-color, #006be0)}div.input-wrapper.bordered.bordered--error{outline:2px solid var(--date-input-bordered-error-outline-color, #cc333f)}div.input-wrapper.bordered.disabled{background-color:var(--date-input-bordered-disabled-background-color, #e2e2e2);outline:none}input[type=text]::-webkit-search-decoration,input[type=text]::-webkit-search-cancel-button,input[type=text]::-webkit-search-results-button,input[type=text]::-webkit-search-results-decoration{-webkit-appearance:none;padding:10px}input[type=text]::-webkit-input-placeholder{color:var(--text-field-placeholder-color, #767676)}input[type=text]::-moz-placeholder{color:var(--text-field-placeholder-color, #767676)}input[type=text]:-ms-input-placeholder{color:var(--text-field-placeholder-color, #767676)}input[type=text]::-ms-input-placeholder{color:var(--text-field-placeholder-color, #767676)}input[type=text]::placeholder{color:var(--text-field-placeholder-color, #767676)}input[type=text]:focus{border-bottom:2px solid var(--date-input-bottom-border-color, none);outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:0}input[type=text]:focus.bordered{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:var(--focus-ring-outline-offset, -4px)}input[type=text]:focus.text-field--error{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:#cc333f;outline-offset:0}input[type=text]:focus.text-field--error.bordered{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:-3px}.date-input-label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;top:var(--date-input-label-top, 0);background-color:var(--date-input-label-bg-clor, transparent);padding:var(--date-input-label-padding, 3px 3px 2px 0);color:var(--date-input-color, #333);font-size:var(--date-input-font-size, 0.875rem);font-family:var(--date-input-font-family, \"OpenSans-Semibold\")}.date-input-label.bordered{padding:var(--date-input-label-bordered-padding, 3px 3px 4px 0)}.date-input-label.disabled{color:var(--date-input-disabled-color, #939393)}.date-input-label.disabled.bordered{color:var(--date-input-bordered-disabled-color, #767676)}.date-input{-webkit-box-sizing:border-box;box-sizing:border-box;border:none;border-bottom:1px solid var(--date-input-bottom-border-color, #333);background-color:var(--date-input-bg-clor, transparent);padding:var(--date-input-label-padding, 8px 45px 8px 8px);color:var(--date-input-color, #333);font-size:var(--date-input-font-size, 1rem);font-family:var(--date-input-font-family, \"OpenSans\")}.date-input.bordered{border-bottom:none;padding:var(--date-input-bordered-padding, 8px 44px 10px 8px)}input[type=text]:disabled{border-bottom:1px solid var(--date-input-disabled-border-color, #939393);color:var(--date-input-disabled-color, #939393);pointer-events:none;cursor:default;background-color:var(--date-input-disabled-bg-color, none)}input[type=text]:disabled.bordered{border:none;color:var(--date-input-bordered-disabled-color, #767676)}.date-input--focus{border-bottom:2px solid var(--date-input-bottom-border-color, #006be0)}.calendar-button{position:absolute;right:0;top:var(--date-input-calendar-button-top, 4px);min-width:var(--calendar-min-width, 1.625rem);padding:var(--date-input-calendar-button-padding, 0 2px 0 0)}.calendar-button.bordered{top:var(--date-input-bordered-calendar-button-top, 6px)}.calendar-button.bordered.disabled{--cel-color-disabled:#767676;--icon-button-hover-color:#767676;--icon-button-disabled-outline-color:#767676}.text-field--error{border-bottom:2px solid var(--text-field-error-border-color, #cc333f)}.cel-calendar-component{position:absolute;top:100%;z-index:var(--date-input-calendar-z-index, 100)}.cel-calendar-component.bordered{top:calc(100% + 2px)}";

const CelDateInput = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.celOpen = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celDateInputOpenChange", 7);
    this.celSelected = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celDateInputSelected", 7);
    this.infoIconClicked = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celInfoIconClicked", 7);
    this.dateInputCleared = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celDateInputCleared", 7);
    this.dateInputId = `cel-date-input-${++dateInputIds}`;
    this.dateInputFormatId = `cel-date-input-format-${++formatIds}`;
    this.isEnterKeyPressed = false;
    this.value = undefined;
    this.lastValidDateString = '';
    this.dateValidatorPatterns = {
      dashOrSlashRegex: /\/|-/,
      globalDashOrSlashRegex: /\/|-/g,
      validChar: /[0-9]|\/|-/,
      monthAndDayValidators: ['MM/DD', 'M/DD', 'MM/D', 'M/D'],
    };
    this.month = undefined;
    this.year = undefined;
    this.label = 'Select date';
    this.placeholder = 'mm/dd/yyyy';
    this.open = undefined;
    this.isToInput = undefined;
    this.from = undefined;
    this.to = undefined;
    this.disabled = false;
    this.disablePast = undefined;
    this.disableBefore = undefined;
    this.disableAfter = undefined;
    this.toggleValueReset = false;
    this.isError = false;
    this.dateInputType = null;
    this.displayInfoIcon = false;
    this.localeEs = false;
    this.iconButtonAriaLabel = "Choose a date";
    this.range = false;
    this.primary = false;
  }
  connectedCallback() {
    this.cel_icon_button = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_3__["t"])('cel-icon-button', 'cel-date-input', this.el);
    this.cel_calendar = Object(_utils_194224bf_js__WEBPACK_IMPORTED_MODULE_3__["t"])('cel-calendar', 'cel-date-input', this.el);
  }
  handleOpenChange(newValue) {
    this.celOpen.emit(newValue);
  }
  handleFromChange(newFrom) {
    if (!newFrom) {
      return;
    }
    const { month, year } = newFrom;
    this.month = +month;
    this.year = year;
    this.updateDate();
  }
  handleToChange(newTo) {
    if (!this.isToInput && this.from == null && this.to == null) {
      this.resetToCurrentMonth();
    }
    else if (!this.isToInput && this.from == null) {
      const { month, year } = newTo;
      this.month = +month;
      this.year = year;
    }
    this.updateDate();
  }
  handleValueReset() {
    if (this.toggleValueReset) {
      this.value = '';
    }
  }
  componentWillLoad() {
    _customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"].extend(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["c"]);
    this.handleOpenChange(this.open);
    this.handleFromChange(this.from);
  }
  /**
   * Update the date when in a cel-date-range component.
   */
  updateDate() {
    if (this.isToInput && this.to) {
      // When the input is a date-range 'to' input, then set its value using the date in the "to" property.
      this.value = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.to.month} ${this.to.day} ${this.to.year}`, 'M D YYYY').format('MM/DD/YYYY');
    }
    else if (this.isToInput && this.from) {
      // When the input is a date-range 'to' input and there is a date in the from property, then set the control value to an empty string.
      this.value = '';
    }
    else if (this.from) {
      // When the input is a date-range 'from' input and there is a date in the from property, then set it's value using the date in the from property.
      this.value = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${this.from.month} ${this.from.day} ${this.from.year}`, 'M D YYYY').format('MM/DD/YYYY');
      this.lastValidDateString = this.value;
    }
    else {
      // When the input is a date-range 'from' input and there is not a date in the from property, then set it's value to an empty string.
      this.value = '';
    }
  }
  /**
   * Listen to close menu on outside click.
   */
  handleClick(event) {
    if (!event.composedPath().includes(this.el)) {
      this.open = false;
    }
  }
  /**
   * Listen for date to be selected in calendar.
   */
  handleDatePress(event) {
    if (!event.detail) {
      this.value = null;
      this.isToInput ? (this.to = null) : (this.from = null);
      this.celSelected.emit(null);
      return;
    }
    const { day, month, year } = event.detail.activeDate;
    const date = { day: day, month: (+month).toString(), year: year };
    this.celSelected.emit({
      activeDate: date,
    });
    this.isToInput ? (this.to = date) : (this.from = date);
    this.value = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${(+month).toString()} ${day} ${year}`, 'M D YYYY').format('MM/DD/YYYY');
    this.lastValidDateString = this.value;
    !this.isToInput ? this.open = false : null;
    this.onFocusCalendarButton();
  }
  handleInputClick() {
    if (this.open) {
      this.open = false;
    }
  }
  handleEsc() {
    this.open = false;
    this.onFocusCalendarButton();
  }
  onFocusCalendarButton() {
    var _a;
    const calendarButton = (_a = this.calendarBtnEl) === null || _a === void 0 ? void 0 : _a.shadowRoot.querySelector('button');
    calendarButton === null || calendarButton === void 0 ? void 0 : calendarButton.focus();
  }
  validateDateString(event) {
    const { dashOrSlashRegex, validChar, globalDashOrSlashRegex, monthAndDayValidators } = this.dateValidatorPatterns;
    const length = event.target.value.length;
    if (event.data === '-') {
      event.target.value = event.target.value.replace('-', '/');
    }
    const dateArray = event.target.value.split(dashOrSlashRegex);
    let [month, day, year] = dateArray;
    const typedDelimiter = dashOrSlashRegex.test(event.data);
    const typedDelete = event.data === null;
    const typedInvalidCharacter = !validChar.test(event.data) && event.data !== null;
    const dayIsTooLong = !!day && day.length > 2;
    const monthIsTooLong = !!month && month.length > 2;
    const yearIsTooLong = !!year && year.length > 4;
    const invalidDatePropertyLength = dateArray.length === 3 && (yearIsTooLong || dayIsTooLong || monthIsTooLong);
    const tooManyDelimiters = event.target.value.match(globalDashOrSlashRegex) !== null && event.target.value.match(/\/|-/g).length > 2;
    const invalidInput = typedInvalidCharacter || tooManyDelimiters || invalidDatePropertyLength;
    if (invalidInput) {
      // When date is invalid, reset it to previous valid date.
      event.target.value = this.lastValidDateString;
      return;
    }
    else if (length === 0 || typedDelete || typedDelimiter) {
      return;
    }
    // Validate the date string
    switch (dateArray.length) {
      // When the date string only contains a month
      case 1:
        this.validateDateWithMonthOnly(month, day, event);
        break;
      // When the date string only has a month and a day
      case 2:
        this.validateDateWithMonthAndDay(month, day, year, event, monthAndDayValidators);
        break;
      // When the date string has a month, day and year.
      case 3:
        this.validateDateWithMonthDayAndYear(month, day, year, event);
        this.lastValidDateString = event.target.value;
        break;
    }
  }
  // Helper function to validate typed string when only the month is present.
  validateDateWithMonthOnly(month, day, event) {
    if (+month <= 12 && +month >= 1 && month.length < 3) {
      // If month is between 1 and 12, then update the placeholder string and the month on the calendar.
      this.lastValidDateString = event.target.value;
      this.month = +month;
    }
    else if (+month < 1) {
      // If month is 0 and more than one character, then update the placeholder string.
      month.length > 1 ? (event.target.value = this.lastValidDateString) : (this.lastValidDateString = event.target.value);
    }
    else if (+month > 12 || month.length > 2) {
      // If month is greater than 12, then convert the last character into a day and format the remaining month string to have 2 characters.
      // Examples: Convert "13" => "1/3" or convert "112" => "11/2"
      day = month.slice(-1);
      month = month.slice(0, -1).padStart(2, '0');
      event.target.value = `${month}/${day}`;
      this.lastValidDateString = event.target.value;
    }
  }
  ;
  // Helper function to validate the typed string when only the month and day are present.
  validateDateWithMonthAndDay(month, day, year, event, monthAndDayValidators) {
    if (Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(`${month}/${day}`, monthAndDayValidators, true).isValid()) {
      // If the month and day combination is valid update the placeholder string and update the month on the calendar.
      this.lastValidDateString = event.target.value;
      this.month = +month;
    }
    else if ((+month === 2 && day > 29) || day > (+month % 2 + 30)) {
      // If the day is too large for the given month, then convert the last character into a year and format the remaining day string to have 2 characters.
      // Then, update the control value and the placeholder. Examples: "03/32" => "03/03/2", "12/42" => "12/04/2"
      year = day.slice(-1);
      day = day.slice(0, -1).padStart(2, '0');
      event.target.value = `${month}/${day}/${year}`;
      this.lastValidDateString = event.target.value;
    }
    else if (+day === 0 && day.length > 2) {
      // If the day "000" reset it to "0"
      event.target.value = this.lastValidDateString;
    }
  }
  ;
  // Helper function to validate event.target.value when month, day and year are all present.
  validateDateWithMonthDayAndYear(month, day, year, event) {
    const monthLength = month.length;
    const dayLength = day.length;
    const yearLength = year.length;
    // Is the user still typing the year.
    const isEditingYear = yearLength === 1 || yearLength === 3 || (yearLength === 2 && (+year === 19 || +year === 20));
    // Is the user still typing the day.
    const isEditingDay = dayLength === 1;
    // Is the user still typing the month.
    const isEditingMonth = monthLength === 1;
    if (isEditingYear || isEditingDay) {
      return;
    }
    else if (isEditingMonth) {
      this.month = +month;
      return;
    }
    // Format date values and the typed value to match 'MM/DD/YYYY' format to make validation simpler to handle.
    day = day.padStart(2, '0');
    month = month.padStart(2, '0');
    year = yearLength === 2 ? `20${year}` : year;
    event.target.value = `${month}/${day}/${year}`;
    if (Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(event.target.value, 'MM/DD/YYYY', true).isValid()) {
      // If the complete date is valid, then set the control value of the input.
      const dateObj = { month: month, day: day, year: year };
      this.celSelected.emit({
        activeDate: dateObj,
      });
      this.isToInput ? this.to = dateObj : this.from = dateObj;
      this.updateDate();
      this.lastValidDateString = event.target.value;
    }
    else {
      // If date is invalid, reset it to previous valid date.
      event.target.value = this.value ? this.value : this.lastValidDateString;
    }
  }
  ;
  clearDate() {
    if (this.isToInput && this.from) {
      this.to = null;
      this.month = +this.from.month;
      this.year = this.from.year;
    }
    else if (!this.isToInput && this.to) {
      this.from = null;
      this.month = +this.to.month;
      this.year = this.to.year;
    }
    else {
      this.from = null;
      this.resetToCurrentMonth();
    }
    this.updateDate();
    this.lastValidDateString = '';
    this.dateInputCleared.emit();
  }
  resetToCurrentMonth() {
    this.month = parseInt(Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])().format('M'));
    this.year = Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])().format('YYYY');
  }
  /**
   * Validate when user presses enter or clicks away from the text input.
   */
  handleTypedChange(event) {
    if (event.target.value == '') {
      this.clearDate();
      return;
    }
    const { dashOrSlashRegex } = this.dateValidatorPatterns;
    const dateArray = event.target.value.split(dashOrSlashRegex);
    const [month, day, year] = dateArray;
    // If the typed value doesn't have a month, day and year, then reset the typed string to the placeholder string.
    if (dateArray.length < 3) {
      event.target.value = this.lastValidDateString;
      return;
    }
    // Create date object and format it and the typed string to 'MM/DD/YYYY' to simplify validation.
    const date = {
      day: day.padStart(2, '0'),
      month: month.padStart(2, '0'),
      year: year.length === 2 ? `20${year}` : year,
    };
    event.target.value = `${date.month}/${date.day}/${date.year}`;
    if (Object(_customParseFormat_43dca114_js__WEBPACK_IMPORTED_MODULE_2__["d"])(event.target.value, 'MM/DD/YYYY', true).isValid()) {
      // If date is valid, then set the control value and the placeholder to the typed string.
      this.lastValidDateString = event.target.value;
      this.celSelected.emit({
        activeDate: date,
      });
      this.isToInput ? (this.to = date) : (this.from = date);
      this.updateDate();
      this.open = false;
    }
    else {
      // If date is invalid and the control has a value, then set the typed string to the control value.
      // If the control doesn't have a value, then set the typed string to the placeholder.
      event.target.value = !!this.value ? this.value : this.lastValidDateString;
    }
  }
  handleToggle(event) {
    if (event.detail.name === 'calendar') {
      if (this.disabled) {
        return;
      }
      if (event.detail || !this.isEnterKeyPressed) {
        this.open = !this.open;
      }
      this.isEnterKeyPressed = false;
    }
  }
  formAriaLabel() {
    return this.value ? `Change date, ${this.value} currently selected` : 'Choose Date';
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2' }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { htmlFor: this.dateInputId, class: ['date-input-label', this.disabled ? 'disabled' : '', this.primary ? 'bordered' : ''].join(' ') }, this.label, this.displayInfoIcon ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { class: "label-info-icon", "data-icon-button-aria-label": 'Date input information', "data-name": 'information-circle', "data-size": _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_1__["a"].SMALL, onClick: (ev) => this.infoIconClicked.emit(ev) })) : null), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: [
        'input-wrapper',
        this.primary ? 'bordered' : '',
        this.isError ? 'bordered--error' : '',
        this.open ? 'bordered--focus' : '',
        this.disabled ? 'disabled' : ''
      ].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { "aria-describedby": this.dateInputFormatId, id: this.dateInputId, class: {
        ['date-input']: true,
        ['date-input--focus']: this.open,
        ['text-field--error']: this.isError,
        ['isToInput']: this.isToInput,
        ['bordered']: this.primary,
      }, type: "text", placeholder: this.placeholder, value: this.value, onClick: () => this.handleInputClick(), onInput: (event) => this.validateDateString(event), disabled: this.disabled, onChange: (event) => this.handleTypedChange(event) }), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { hidden: true, id: this.dateInputFormatId }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { hidden: true, class: "sr-only" }, " date format:"), "mm/dd/yyyy"), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_icon_button, { ref: (el) => (this.calendarBtnEl = el), "data-icon-button-aria-label": this.range ? this.iconButtonAriaLabel : this.formAriaLabel(), class: ['calendar-button', this.primary ? 'bordered' : '', this.disabled ? 'disabled' : ''].join(' '), "data-name": "calendar", "data-size": this.primary ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_1__["a"].REGULAR : _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_1__["a"].MEDIUM, "data-padding": "6px", disabled: this.disabled, "data-color": this.open ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_1__["C"].PRIMARY : this.disabled ? _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_1__["C"].GRAY : _cel_icon_constants_33baae7b_js__WEBPACK_IMPORTED_MODULE_1__["C"].GRAYDARKER })), this.open ? (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this.cel_calendar, { class: ['cel-calendar-component', this.primary ? 'bordered' : ''].join(' '), from: this.from, to: this.to, "data-disable-past": this.disablePast, disableBefore: this.disableBefore, disableAfter: this.disableAfter, "data-month": this.month, "data-year": this.year, "data-date-input-type": this.dateInputType, "data-locale-es": this.localeEs })) : null));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "open": ["handleOpenChange"],
    "from": ["handleFromChange"],
    "to": ["handleToChange"],
    "toggleValueReset": ["handleValueReset"]
  }; }
};
let dateInputIds = 0;
let formatIds = 0;
CelDateInput.style = celDateInputCss;




/***/ })

}]);
//# sourceMappingURL=39.js.map