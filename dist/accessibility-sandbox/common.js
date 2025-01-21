(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "5kGd":
/*!***********************************************************************************************************!*\
  !*** /Users/mattyZ/Desktop/Projects/forked-cel-library/dist-stencil/esm/cel-button-constants-2362f78a.js ***!
  \***********************************************************************************************************/
/*! exports provided: C, a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CelButtonVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CelButtonIconType; });
var CelButtonVariant;
(function (CelButtonVariant) {
  CelButtonVariant["SOLID"] = "solid";
  CelButtonVariant["OUTLINE"] = "outline";
  CelButtonVariant["TEXT"] = "text";
  CelButtonVariant["ICON"] = "icon";
})(CelButtonVariant || (CelButtonVariant = {}));
var CelButtonIconType;
(function (CelButtonIconType) {
  CelButtonIconType["LEFT"] = "left";
  CelButtonIconType["MIDDLE"] = "middle";
  CelButtonIconType["RIGHT"] = "right";
})(CelButtonIconType || (CelButtonIconType = {}));




/***/ }),

/***/ "TFF/":
/*!***********************************************************************************************!*\
  !*** /Users/mattyZ/Desktop/Projects/forked-cel-library/dist-stencil/esm/truncate-16cfb2aa.js ***!
  \***********************************************************************************************/
/*! exports provided: t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return truncate; });
function truncate(s, truncateLimit) {
  if (s && s.length > truncateLimit && (s.length + truncateLimit) > 3) {
    let truncatedString = s.slice(0, (truncateLimit)) + '...';
    return truncatedString;
  }
  else {
    return s;
  }
}




/***/ }),

/***/ "oVVw":
/*!***********************************************************************************************************!*\
  !*** /Users/mattyZ/Desktop/Projects/forked-cel-library/dist-stencil/esm/cel-navbar-constants-bce10811.js ***!
  \***********************************************************************************************************/
/*! exports provided: C, d, n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CelNavbarView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultDisabledNavItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return navbarAvatarImgAltText; });
var CelNavbarView;
(function (CelNavbarView) {
  CelNavbarView["DESKTOP"] = "d";
  CelNavbarView["TABLET"] = "t";
  CelNavbarView["MOBILE"] = "m";
})(CelNavbarView || (CelNavbarView = {}));
const defaultDisabledNavItems = {
  disableHamburger: false,
  disableSearch: false,
  disableBookmark: false,
  disableTextsize: false,
  disableSettings: false,
};
const navbarAvatarImgAltText = 'avatar image';




/***/ }),

/***/ "y5zg":
/*!***************************************************************************************************************!*\
  !*** /Users/mattyZ/Desktop/Projects/forked-cel-library/dist-stencil/esm/cel-icon-label-constants-c23c6c5f.js ***!
  \***************************************************************************************************************/
/*! exports provided: C */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CelIconLabelType; });
var CelIconLabelType;
(function (CelIconLabelType) {
  CelIconLabelType["LEFT"] = "left";
  CelIconLabelType["RIGHT"] = "right";
})(CelIconLabelType || (CelIconLabelType = {}));




/***/ })

}]);
//# sourceMappingURL=common.js.map