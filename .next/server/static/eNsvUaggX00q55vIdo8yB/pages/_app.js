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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__("KNus");
var config_default = /*#__PURE__*/__webpack_require__.n(config_);

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: external "react-cookie-consent"
var external_react_cookie_consent_ = __webpack_require__("Ckvx");
var external_react_cookie_consent_default = /*#__PURE__*/__webpack_require__.n(external_react_cookie_consent_);

// EXTERNAL MODULE: ./utils/auth.js
var auth = __webpack_require__("SMlj");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("eVuF");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./utils/publicFetch.js
var publicFetch = __webpack_require__("mC2P");

// CONCATENATED MODULE: ./utils/authFetch.js

var __jsx = external_react_default.a.createElement;




const FetchContext = Object(external_react_["createContext"])();
const {
  Provider
} = FetchContext;

const FetchProvider = ({
  children
}) => {
  const {
    authState
  } = Object(external_react_["useContext"])(auth["a" /* AuthContext */]);
  const authAxios = external_axios_default.a.create({
    baseURL: publicFetch["a" /* baseURL */]
  });
  authAxios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${authState.token}`;
    return config;
  }, error => {
    return promise_default.a.reject(error);
  });
  authAxios.interceptors.response.use(response => {
    return response;
  }, error => {
    const code = error && error.response ? error.response.status : 0;

    if (code === 401 || code === 403) {
      console.log('error code', code);
    }

    return promise_default.a.reject(error);
  });
  return __jsx(Provider, {
    value: {
      authAxios
    }
  }, children);
};


// EXTERNAL MODULE: ./node_modules/bootstrap-scss/bootstrap.scss
var bootstrap = __webpack_require__("bkMU");

// EXTERNAL MODULE: ./public/assets/scss/flaticon.scss
var flaticon = __webpack_require__("GqKw");

// EXTERNAL MODULE: ./public/assets/scss/font-awesome.scss
var font_awesome = __webpack_require__("7qSi");

// EXTERNAL MODULE: ./public/assets/scss/color-1.scss
var color_1 = __webpack_require__("EIO+");

// EXTERNAL MODULE: ./public/assets/scss/themify.scss
var themify = __webpack_require__("6FEr");

// EXTERNAL MODULE: ./public/assets/scss/slick.scss
var slick = __webpack_require__("AQPv");

// EXTERNAL MODULE: ./public/assets/scss/slick-theme.scss
var slick_theme = __webpack_require__("HmUi");

// CONCATENATED MODULE: ./pages/_app.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
var _app_jsx = external_react_default.a.createElement;
















const {
  publicRuntimeConfig = {}
} = config_default()() || {};
external_nprogress_default.a.configure({
  showSpinner: publicRuntimeConfig.NProgressShowSpinner
});

router_default.a.onRouteChangeStart = () => {
  external_nprogress_default.a.start();
};

router_default.a.onRouteChangeComplete = () => {
  external_nprogress_default.a.done();
};

router_default.a.onRouteChangeError = () => {
  external_nprogress_default.a.done();
};

function MyFunctionComponent({
  children
}) {
  const {
    0: loader,
    1: setLoader
  } = Object(external_react_["useState"])(true);
  const {
    0: goingUp,
    1: setGoingUp
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
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

  return _app_jsx(external_react_default.a.Fragment, null, _app_jsx(head_default.a, null, _app_jsx("title", null, "DebCoins")), loader && _app_jsx("div", {
    className: "loader-wrapper"
  }, _app_jsx("div", {
    className: "loader"
  }, _app_jsx("div", null), _app_jsx("div", null), _app_jsx("div", null), _app_jsx("div", null), _app_jsx("div", null), _app_jsx("div", null), _app_jsx("div", null), _app_jsx("div", null), _app_jsx("div", null))), _app_jsx(external_react_default.a.Fragment, null, children), _app_jsx("div", {
    className: "tap-top",
    style: goingUp ? {
      display: "block",
      backgroundColor: "#333D79"
    } : {
      display: "none"
    },
    onClick: tapToTop
  }, _app_jsx("div", null, _app_jsx("i", {
    className: "fa fa-angle-double-up"
  }))));
}

function MyApp({
  Component,
  pageProps,
  graphql
}) {
  return _app_jsx(auth["b" /* AuthProvider */], null, _app_jsx(FetchProvider, null, _app_jsx(MyFunctionComponent, null, _app_jsx(Component, pageProps), _app_jsx(external_react_cookie_consent_default.a, {
    style: {
      textAlign: "center"
    }
  }, "This website uses cookies to enhance the user experience.", _app_jsx("a", {
    href: "/privacy-policy",
    style: {
      paddingLeft: "5px",
      textDecoration: "underline"
    }
  }, "Learn More"))), _app_jsx(external_react_toastify_["ToastContainer"], null)));
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6FEr":
/***/ (function(module, exports) {



/***/ }),

/***/ "7qSi":
/***/ (function(module, exports) {



/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AQPv":
/***/ (function(module, exports) {



/***/ }),

/***/ "Ckvx":
/***/ (function(module, exports) {

module.exports = require("react-cookie-consent");

/***/ }),

/***/ "EIO+":
/***/ (function(module, exports) {



/***/ }),

/***/ "GqKw":
/***/ (function(module, exports) {



/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "HmUi":
/***/ (function(module, exports) {



/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "SMlj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthProvider; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

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
    }
  }, children);
};



/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bkMU":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "mC2P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return publicFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseURL; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseURL =  false ? undefined : `https://${process.env.SITE_NAME}/api`;
const publicFetch = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL
});


/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });