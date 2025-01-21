(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "wutx":
/*!*********************************************************************************************************!*\
  !*** /Users/mattyZ/Desktop/Projects/forked-cel-library/dist-stencil/esm/cel-notification-item.entry.js ***!
  \*********************************************************************************************************/
/*! exports provided: cel_notification_item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cel_notification_item", function() { return CelNotificationItem; });
/* harmony import */ var _index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-9a8c46b4.js */ "RO4M");


var CelNotificationTypes;
(function (CelNotificationTypes) {
  CelNotificationTypes["CREATE"] = "create";
  CelNotificationTypes["EDIT"] = "edit";
  CelNotificationTypes["DELETE"] = "delete";
})(CelNotificationTypes || (CelNotificationTypes = {}));

const celNotificationItemCss = ".lst-table-responsive-wrapper{width:var(--lst-table-responsive-wrapper-width, auto);height:var(--lst-table-responsive-wrapper-height, auto);overflow:var(--lst-table-responsive-wrapper-overflow, scroll)}.lst-table{border-collapse:var(--lst-table-border-collapse, collapse);border:var(--lst-table-border, none);background-color:var(--lst-table-background-color, #fff);font-family:var(--lst-table-font-family, \"OpenSans\");line-height:var(--lst-table-line-height, 20px);font-size:var(--lst-table-font-size, 0.875rem)}.lst-table.compact>thead>tr>th,.lst-table.compact>tbody>tr>td{padding-top:var(--lst-table-padding-top-compact, 8.5px);padding-bottom:var(--lst-table-padding-top-compact, 8.5px)}.lst-table>thead tr{border-top:var(--lst-table-header-row-border-top, none);background-color:var(--lst-table-header-background-color, #fff);line-height:var(--lst-table-header-row-line-height, 20px);padding:var(--lst-table-padding, 17px 8px)}.lst-table>thead>tr>th{border-top:var(--lst-table-th-border-top, none);border-left:var(--lst-table-th-border-left, none);border-right:var(--lst-table-th-border-right, none);border-bottom:var(--lst-table-th-border-bottom, 1px solid #555);font-family:var(--lst-table-th-font-family, \"OpenSans-Semibold\");font-size:var(--lst-table-th-font-size, 0.875rem);line-height:var(--lst-table-th-line-height, 20px);padding:var(--lst-table-th-padding, 8px 4px);min-width:var(--lst-table-th-min-width, 64px);max-width:var(--lst-table-th-max-width, none);text-align:var(--lst-table-th-text-align, left);vertical-align:var(--lst-table-th-vertical-align, middle);white-space:nowrap}.lst-table>thead>tr>th>.lst-table-header-icon{vertical-align:var(--lst-table-header-icon-vertical-align, middle);margin-bottom:var(--lst-table-header-icon-margin-bottom, 1px 0)}.lst-table>thead>tr>th.align-center{text-align:center}.lst-table>thead>tr>th.interactive:hover{background-color:var(--lst-table-th-interactive-hover-bg-color, #e5f0f9);border-radius:var(--interactive-hover-th-border-radius, 4px 4px 0 0)}.lst-table>thead>tr>th.interactive:hover:has(.lst-table-select){border-radius:var(--interactive-hover-select-th-border-radius, 4px 0 0 0);--primary-select-background-color:#e5f0f9;--primary-styling-label-color:#2150a3;--select-caret-down-color-base:#2150a3}.lst-table tbody tr{border-top:var(--lst-table-tr-border-top, none);border-left:var(--lst-table-tr-border-left, none);border-right:var(--lst-table-tr-border-right, none);border-bottom:var(--lst-table-tr-border-bottom, 1px solid #d8d8d8);background-color:var(--lst-table-body-background-color, #fff)}.lst-table tbody tr:hover{background-color:var(--lst-tr-hover-bg-color, #e5f0f9)}.lst-table tbody tr>td{font-size:var(--lst-table-td-font-size, 0.875rem);border-bottom:var(--lst-table-td-border-bottom, none);border-left:var(--lst-table-td-border-left, none);border-right:var(--lst-table-td-border-right, none);padding:var(--lst-table-padding, 17px 8px)}.lst-table tbody tr>td.align-center{text-align:center}.lst-table tbody tr>td.align-left{padding-left:var(--lst-table-td-align-left-padding, none);text-align:left}.lst-table .lst-table-select{margin-right:4px;--single-select-label-font-size:$text-size-small;--single-select-label-font-family:$secondary-font-medium;--label-margin-bottom-borderless:0}button:active:disabled{outline:none}:root{--primary:#006be0;--primaryShade:#2150a3;--errorNotificationOrange:#BD4500}.cel-visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.green{background-color:#35AA35;color:#000}.red{background-color:#CC333F;color:#fff}.yellow{background-color:#FFBA4A;color:#000}.blue{background-color:#584CE4;color:#fff}.white{background-color:#fff;color:#333}@media (hover: hover){.green.interactive:hover{background-color:#2A9A2A}.red.interactive:hover{background-color:#B42934}.yellow.interactive:hover{background-color:#E5A439}.blue.interactive:hover{background-color:#372CB4}}button,input,textarea{letter-spacing:unset;line-height:unset;word-spacing:unset;line-height:unset}.notification-item-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font-family:\"OpenSans\";font-size:0.875rem;color:#333;text-decoration:none;padding:16px 16px 25px 16px;margin:0;border-bottom:var(--notification-item-border-bottom, 1px solid #e2e2e2)}.notification-item-container:focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:#333;outline-offset:-4px}article{position:relative}.second-message{font-family:\"OpenSans-Semibold\"}.notification-lower-line-message{font-family:\"OpenSans-Bold\";font-size:0.875rem;padding-top:6px;padding-right:64px}.notification-tag{color:#fff;font-size:0.75rem;border-radius:4px;background:#2150a3;height:16px;padding:0 4px}.delete-notification{background-color:#f9f9f9}.delete-notification .notification-lower-line-message{color:#555}.delete-notification .notification-tag{background:#767676}.action-button{background-color:transparent;position:absolute;border:none;color:#006be0;text-decoration:underline;font-size:0.875rem;font-family:\"OpenSans-Semibold\";border-radius:2px;padding:0;display:inline;-ms-flex-positive:0;flex-grow:0;right:16px;cursor:pointer}.action-button:focus{outline-width:var(--focus-ring-outline-width, 2px);outline-style:var(--focus-ring-outline-style, solid);outline-color:var(--focus-ring-text-color, currentColor);outline-offset:0}@media (hover: hover){.action-button:hover,.action-button:focus{color:#2150a3}a:hover{background-color:#e5f0f9;cursor:pointer}}";

const CelNotificationItem = class {
  constructor(hostRef) {
    Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.actionButtonClicked = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNotificationItemActionButtonClicked", 7);
    this.clicked = Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "celNotificationItemClicked", 7);
    this.notificationId = '';
    this.notificationIndex = undefined;
    this.notificationAriaLabel = 'notification';
    this.notificationMessage = 'Your admin has created an assignment for ';
    this.notificationSecondMessage = undefined;
    this.notificationSubtext = undefined;
    this.notificationHref = undefined;
    this.tagLabel = undefined;
    this.showActionButton = false;
    this.actionButtonLabel = 'Dismiss';
    this.actionButtonAriaLabel = '';
    this.notificationType = CelNotificationTypes.CREATE;
  }
  handleActionButtonClick() {
    const eventObj = {
      id: this.notificationId,
      label: this.actionButtonLabel
    };
    this.actionButtonClicked.emit(eventObj);
  }
  handleNotificationItemClick() {
    this.clicked.emit({
      index: this.notificationIndex,
      id: this.notificationId
    });
  }
  componentDidLoad() {
    if (this.showActionButton) {
      this.calculateActionButtonPosition();
    }
  }
  handleResize() {
    if (this.showActionButton) {
      this.calculateActionButtonPosition();
    }
  }
  calculateActionButtonPosition() {
    const lowerMessage = this.el.shadowRoot.querySelector('.notification-lower-line-message');
    const actionButton = this.el.shadowRoot.querySelector('.action-button');
    const listItem = this.el.shadowRoot.querySelector('.notification-item-container');
    const lowerMessageHeight = lowerMessage.offsetHeight - parseFloat(getComputedStyle(lowerMessage).paddingTop);
    const calculatedBottomPosition = parseFloat(getComputedStyle(listItem).paddingBottom) + (lowerMessageHeight - actionButton.offsetHeight) / 2;
    actionButton.style.setProperty('bottom', `${calculatedBottomPosition}px`);
  }
  render() {
    return (Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-cel-version": '9.0.2', ref: (el) => (this.parentEl = el) }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("article", { "aria-setsize": "-1", "aria-label": this.notificationAriaLabel }, this.notificationType == CelNotificationTypes.DELETE ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: ['notification-item-container', this.notificationType == CelNotificationTypes.DELETE && 'delete-notification'].join(' ') }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, " ", this.notificationMessage, " "), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "second-message" }, " ", this.notificationSecondMessage, " ")), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "notification-lower-line-message" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, " ", this.notificationSubtext, " "), this.tagLabel ? Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "notification-tag" }, " ", this.tagLabel, " ") : null)))
      :
        Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { onClick: () => this.handleNotificationItemClick(), class: "notification-item-container", href: this.notificationHref }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, " ", this.notificationMessage, " "), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "second-message" }, " ", this.notificationSecondMessage, " ")), Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "notification-lower-line-message" }, Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, " ", this.notificationSubtext, " "), this.tagLabel ? Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "notification-tag" }, " ", this.tagLabel, " ") : null))), this.showActionButton ?
      Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "action-button", "aria-label": this.actionButtonAriaLabel, onClick: () => this.handleActionButtonClick() }, this.actionButtonLabel)
      : null)));
  }
  get el() { return Object(_index_9a8c46b4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
CelNotificationItem.style = celNotificationItemCss;




/***/ })

}]);
//# sourceMappingURL=42.js.map