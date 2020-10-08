webpackHotUpdate("static\\development\\pages\\login.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "D:\\Working_place\\Hossam\\debcoins_next\\utils\\auth.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
var Provider = AuthContext.Provider;

var AuthProvider = function AuthProvider(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      authState = _useState[0],
      setAuthState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var token = localStorage.getItem('token');
    var userInfo = localStorage.getItem('userInfo');
    var expiresAt = localStorage.getItem('expiresAt');
    var message = localStorage.getItem('message');
    setAuthState({
      token: token,
      expiresAt: expiresAt,
      userInfo: userInfo ? JSON.parse(userInfo) : {},
      message: message
    });
  }, []);

  var setAuthInfo = function setAuthInfo(_ref2) {
    var token = _ref2.token,
        userInfo = _ref2.userInfo,
        expiresAt = _ref2.expiresAt,
        message = _ref2.message;
    localStorage.setItem('token', token);
    localStorage.setItem('userInfo', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(userInfo));
    localStorage.setItem('expiresAt', expiresAt);
    localStorage.setItem('message', message);
    setAuthState({
      token: token,
      userInfo: userInfo,
      expiresAt: expiresAt,
      message: message
    });
  };

  var logout = function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('expiresAt');
    localStorage.removeItem('message');
    setAuthState({});
  };

  var isAuthenticated = function isAuthenticated() {
    if (!authState.token || !authState.expiresAt || authState.message === "not verified") {
      return false;
    }

    console.log(new Date().getTime() / 1000 + " < " + authState.expiresAt);
    return new Date().getTime() / 1000 < authState.expiresAt;
  };

  var isAdmin = function isAdmin() {
    return authState.userInfo && authState.userInfo.role === 'admin';
  };

  return __jsx(Provider, {
    value: {
      authState: authState,
      setAuthState: function setAuthState(authInfo) {
        return setAuthInfo(authInfo);
      },
      logout: logout,
      isAuthenticated: isAuthenticated,
      isAdmin: isAdmin
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, children);
};



/***/ })

})
//# sourceMappingURL=login.js.4e3aadec713a2fd15bee.hot-update.js.map