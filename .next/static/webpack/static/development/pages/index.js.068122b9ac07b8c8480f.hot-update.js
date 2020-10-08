webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_sections_Header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/sections/Header/header */ "./pages/layouts/sections/Header/header.js");
/* harmony import */ var _layouts_sections_Banner_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/sections/Banner/Banner */ "./pages/layouts/sections/Banner/Banner.js");
/* harmony import */ var _layouts_sections_Accordian_accordianold__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/sections/Accordian/accordianold */ "./pages/layouts/sections/Accordian/accordianold.js");
/* harmony import */ var _layouts_sections_Footer_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/sections/Footer/footer */ "./pages/layouts/sections/Footer/footer.js");
/* harmony import */ var _layouts_sections_BeforeFooter_BeforeFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/sections/BeforeFooter/BeforeFooter */ "./pages/layouts/sections/BeforeFooter/BeforeFooter.js");
/* harmony import */ var _layouts_sections_Licenses_Licenses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/sections/Licenses/Licenses */ "./pages/layouts/sections/Licenses/Licenses.js");
/* harmony import */ var _layouts_sections_Guide_Guide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/sections/Guide/Guide */ "./pages/layouts/sections/Guide/Guide.js");
/* harmony import */ var _utils_publicFetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/publicFetch */ "./utils/publicFetch.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
var _this = undefined,
    _jsxFileName = "D:\\Working_place\\Hossam\\debcoins_next\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var index = function index() {
  var _useContext = useContext(_utils_auth__WEBPACK_IMPORTED_MODULE_10__["AuthContext"]),
      isAuthenticated = _useContext.isAuthenticated;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.body.style.setProperty("--primary", "#333D7A");
    document.body.style.setProperty("--secondary", "##FAEBEE");
    document.body.style.setProperty("--light", "#f3f1e8");
    document.body.style.setProperty("--dark", "#9647DB");
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "DebCoins ")), __jsx(_layouts_sections_Header_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "saas2",
    isHome: true,
    shop: isAuthenticated(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx(_layouts_sections_Banner_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx(_layouts_sections_Guide_Guide__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx(_layouts_sections_Licenses_Licenses__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx(_layouts_sections_BeforeFooter_BeforeFooter__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx(_layouts_sections_Footer_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.068122b9ac07b8c8480f.hot-update.js.map