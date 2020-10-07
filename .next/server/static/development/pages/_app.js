module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/bootstrap-scss/bootstrap.scss":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap-scss/bootstrap.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookie-consent */ "react-cookie-consent");
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_cookie_consent__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
/* harmony import */ var _utils_authFetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/authFetch */ "./utils/authFetch.js");
/* harmony import */ var bootstrap_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap-scss */ "./node_modules/bootstrap-scss/bootstrap.scss");
/* harmony import */ var bootstrap_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_assets_scss_flaticon_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/assets/scss/flaticon.scss */ "./public/assets/scss/flaticon.scss");
/* harmony import */ var _public_assets_scss_flaticon_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_flaticon_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_assets_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/assets/scss/font-awesome.scss */ "./public/assets/scss/font-awesome.scss");
/* harmony import */ var _public_assets_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_assets_scss_color_1_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/assets/scss/color-1.scss */ "./public/assets/scss/color-1.scss");
/* harmony import */ var _public_assets_scss_color_1_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_color_1_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_assets_scss_themify_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../public/assets/scss/themify.scss */ "./public/assets/scss/themify.scss");
/* harmony import */ var _public_assets_scss_themify_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_themify_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_assets_scss_slick_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../public/assets/scss/slick.scss */ "./public/assets/scss/slick.scss");
/* harmony import */ var _public_assets_scss_slick_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_slick_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_assets_scss_slick_theme_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../public/assets/scss/slick-theme.scss */ "./public/assets/scss/slick-theme.scss");
/* harmony import */ var _public_assets_scss_slick_theme_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_slick_theme_scss__WEBPACK_IMPORTED_MODULE_16__);

var _jsxFileName = "D:\\Working_place\\Hossam\\debcoins_next\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
















const {
  publicRuntimeConfig = {}
} = next_config__WEBPACK_IMPORTED_MODULE_5___default()() || {};
nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.configure({
  showSpinner: publicRuntimeConfig.NProgressShowSpinner
});

next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeStart = () => {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeComplete = () => {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeError = () => {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

function MyFunctionComponent({
  children
}) {
  const {
    0: loader,
    1: setLoader
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: goingUp,
    1: setGoingUp
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // Page Loader
    setTimeout(() => {
      setLoader(false);
    }, 1500); // Tap to Top Scroll

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 500) setGoingUp(true);else setGoingUp(false);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const tapToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "DebCoins")), loader && __jsx("div", {
    className: "loader-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "loader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }))), __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, children), __jsx("div", {
    className: "tap-top",
    style: goingUp ? {
      display: "block",
      backgroundColor: "#333D79"
    } : {
      display: "none"
    },
    onClick: tapToTop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fa fa-angle-double-up",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }))));
}

function MyApp({
  Component,
  pageProps,
  graphql
}) {
  return __jsx(_utils_auth__WEBPACK_IMPORTED_MODULE_8__["AuthProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, __jsx(_utils_authFetch__WEBPACK_IMPORTED_MODULE_9__["FetchProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx(MyFunctionComponent, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  })), __jsx(react_cookie_consent__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, "This website uses cookies to enhance the user experience.", __jsx("a", {
    href: "/privacy-policy",
    style: {
      paddingLeft: "5px",
      textDecoration: "underline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, "Learn More"))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./public/assets/scss/color-1.scss":
/*!*****************************************!*\
  !*** ./public/assets/scss/color-1.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/assets/scss/flaticon.scss":
/*!******************************************!*\
  !*** ./public/assets/scss/flaticon.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/assets/scss/font-awesome.scss":
/*!**********************************************!*\
  !*** ./public/assets/scss/font-awesome.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/assets/scss/slick-theme.scss":
/*!*********************************************!*\
  !*** ./public/assets/scss/slick-theme.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/assets/scss/slick.scss":
/*!***************************************!*\
  !*** ./public/assets/scss/slick.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/assets/scss/themify.scss":
/*!*****************************************!*\
  !*** ./public/assets/scss/themify.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/*! exports provided: AuthContext, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Working_place\\Hossam\\debcoins_next\\utils\\auth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
const {
  Provider
} = AuthContext;

const AuthProvider = ({
  children
}) => {
  const {
    0: authState,
    1: setAuthState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const token = localStorage.getItem('token');
    const userInfo = localStorage.getItem('userInfo');
    const expiresAt = localStorage.getItem('expiresAt');
    const message = localStorage.getItem('message');
    setAuthState({
      token,
      expiresAt,
      userInfo: userInfo ? JSON.parse(userInfo) : {},
      message
    });
  }, []);

  const setAuthInfo = ({
    token,
    userInfo,
    expiresAt,
    message
  }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userInfo', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(userInfo));
    localStorage.setItem('expiresAt', expiresAt);
    localStorage.setItem('message', message);
    setAuthState({
      token,
      userInfo,
      expiresAt,
      message
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('expiresAt');
    localStorage.removeItem('message');
    setAuthState({});
  };

  const isAuthenticated = () => {
    if (!authState.token || !authState.expiresAt || authState.message === "not verified") {
      return false;
    }

    return new Date().getTime() / 1000 < authState.expiresAt;
  };

  const isAdmin = () => {
    return authState.userInfo && authState.userInfo.role === 'admin';
  };

  return __jsx(Provider, {
    value: {
      authState,
      setAuthState: authInfo => setAuthInfo(authInfo),
      logout,
      isAuthenticated,
      isAdmin
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, children);
};



/***/ }),

/***/ "./utils/authFetch.js":
/*!****************************!*\
  !*** ./utils/authFetch.js ***!
  \****************************/
/*! exports provided: FetchContext, FetchProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchContext", function() { return FetchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchProvider", function() { return FetchProvider; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ "./utils/auth.js");
/* harmony import */ var _publicFetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./publicFetch */ "./utils/publicFetch.js");

var _jsxFileName = "D:\\Working_place\\Hossam\\debcoins_next\\utils\\authFetch.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const FetchContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
const {
  Provider
} = FetchContext;

const FetchProvider = ({
  children
}) => {
  const {
    authState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_auth__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]);
  const authAxios = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
    baseURL: _publicFetch__WEBPACK_IMPORTED_MODULE_4__["baseURL"]
  });
  authAxios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${authState.token}`;
    return config;
  }, error => {
    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
  });
  authAxios.interceptors.response.use(response => {
    return response;
  }, error => {
    const code = error && error.response ? error.response.status : 0;

    if (code === 401 || code === 403) {
      console.log('error code', code);
    }

    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
  });
  return __jsx(Provider, {
    value: {
      authAxios
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, children);
};



/***/ }),

/***/ "./utils/publicFetch.js":
/*!******************************!*\
  !*** ./utils/publicFetch.js ***!
  \******************************/
/*! exports provided: publicFetch, baseURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicFetch", function() { return publicFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseURL =  true ? undefined : undefined;
const publicFetch = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL
});


/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-cookie-consent":
/*!***************************************!*\
  !*** external "react-cookie-consent" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookie-consent");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map