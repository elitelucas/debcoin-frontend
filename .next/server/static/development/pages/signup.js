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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-light-accordion/demo/css/index.css":
/*!***************************************************************!*\
  !*** ./node_modules/react-light-accordion/demo/css/index.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/layouts/sections/Accordian/GiftCardInformation.js":
/*!*****************************************************************!*\
  !*** ./pages/layouts/sections/Accordian/GiftCardInformation.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Working_place\\Hossam\\debcoins_next\\pages\\layouts\\sections\\Accordian\\GiftCardInformation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const giftCardInformation = props => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    class: " d-flex row  p-2",
    style: {
      backgroundColor: "#ebf9f4"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "col-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("span", {
    class: "text-left font-14-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Giftcard Amount"), __jsx("span", {
    class: "float-right font-14-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "BTC Value"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  })), __jsx("div", {
    class: "col-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "$25"), __jsx("span", {
    class: "float-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "0.000183411 / $20.66"))), __jsx("div", {
    className: "login-modal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "mt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    for: "Card Number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "Card Number *"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "cardNumber",
    id: "cardNumber",
    placeholder: "Prepaid Giftcard Number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    for: "examplePassword",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "Expiration Date *"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "expirationDate",
    id: "expirationDate",
    placeholder: "MM/YY",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    for: "examplePassword",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, "CVV*"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "cvv",
    id: "cvv",
    placeholder: "3 or 4 digits",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  })))), __jsx("button", {
    className: "btn primary-btn btn-default text-uppercase mt-0",
    onClick: e => {
      e.preventDefault();
      props.isClicked();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, "Verify"))));
};

/* harmony default export */ __webpack_exports__["default"] = (giftCardInformation);

/***/ }),

/***/ "./pages/layouts/sections/Accordian/StartYourOrder.js":
/*!************************************************************!*\
  !*** ./pages/layouts/sections/Accordian/StartYourOrder.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Working_place\\Hossam\\debcoins_next\\pages\\layouts\\sections\\Accordian\\StartYourOrder.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const startYourOrder = props => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    class: " d-flex row  p-2 w-100",
    style: {
      backgroundColor: "#ebf9f4"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "col-12 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("span", {
    class: "text-left font-14-18",
    style: {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("i", {
    class: "fab fa-btc pr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), "Bitcoins"), __jsx("span", {
    class: "float-right font-14-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "1BTC = $13922.53USD"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  })), __jsx("div", {
    class: "col-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "Bitcoin price has all Conversion Rate fees included"), __jsx("span", {
    class: "float-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "12s"))), __jsx("div", {
    class: "col-12 mt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "login-modal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    row: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
    addonType: "prepend",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupText"], {
    style: {
      borderTopLeftRadius: "20px",
      borderBottomLeftRadius: "20px",
      border: "0"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, "USD")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "number",
    name: "usd",
    id: "usd",
    placeholder: "USD",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    row: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
    addonType: "prepend",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupText"], {
    style: {
      borderTopLeftRadius: "20px",
      borderBottomLeftRadius: "20px",
      border: "0"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, "BTC")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "number",
    name: "BTC",
    id: "BTC",
    placeholder: "BTC",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  })))), __jsx("button", {
    className: "btn primary-btn btn-default text-uppercase mt-0",
    onClick: e => {
      e.preventDefault();
      props.isClicked();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "Buy Bitcoins")))));
};

/* harmony default export */ __webpack_exports__["default"] = (startYourOrder);

/***/ }),

/***/ "./pages/layouts/sections/Accordian/VerifySms.js":
/*!*******************************************************!*\
  !*** ./pages/layouts/sections/Accordian/VerifySms.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Working_place\\Hossam\\debcoins_next\\pages\\layouts\\sections\\Accordian\\VerifySms.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const verifySms = props => {
  return __jsx("div", {
    class: "col-12 mt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "A one-time SMS has been sent to your registered mobile number.", " ", __jsx("span", {
    className: "text-dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "+19165810509")), __jsx("div", {
    className: "login-modal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "form-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    className: "col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    for: "inputEmail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, "SMS"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "form-control",
    id: "SMS",
    placeholder: "SMS",
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }))), __jsx("button", {
    className: "btn primary-btn btn-default text-uppercase mt-0",
    onClick: e => {
      e.preventDefault();
      props.isClicked();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "Verify"))));
};

/* harmony default export */ __webpack_exports__["default"] = (verifySms);

/***/ }),

/***/ "./pages/layouts/sections/Accordian/accordian.js":
/*!*******************************************************!*\
  !*** ./pages/layouts/sections/Accordian/accordian.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StartYourOrder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StartYourOrder */ "./pages/layouts/sections/Accordian/StartYourOrder.js");
/* harmony import */ var _VerifySms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerifySms */ "./pages/layouts/sections/Accordian/VerifySms.js");
/* harmony import */ var _selectWallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectWallet */ "./pages/layouts/sections/Accordian/selectWallet.js");
/* harmony import */ var _uploadImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uploadImages */ "./pages/layouts/sections/Accordian/uploadImages.js");
/* harmony import */ var _GiftCardInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GiftCardInformation */ "./pages/layouts/sections/Accordian/GiftCardInformation.js");
/* harmony import */ var react_light_accordion_demo_css_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-light-accordion/demo/css/index.css */ "./node_modules/react-light-accordion/demo/css/index.css");
/* harmony import */ var react_light_accordion_demo_css_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_light_accordion_demo_css_index_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\Working_place\\Hossam\\debcoins_next\\pages\\layouts\\sections\\Accordian\\accordian.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const AccordionElementSection = () => {
  const {
    0: condition,
    1: setCondition
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("1st");
  const {
    0: isFirstOpen,
    1: setFirstOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isSecondOpen,
    1: setSecondOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isThirdOpen,
    1: setThirdOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isFourthOpen,
    1: setFourthOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isFifthOpen,
    1: setFifthOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggle1 = () => setFirstOpen(!isFirstOpen);

  const toggle2 = () => setSecondOpen(!isSecondOpen);

  const toggle3 = () => setThirdOpen(!isThirdOpen);

  const toggle4 = () => setFourthOpen(!isFourthOpen);

  const toggle5 = () => setFifthOpen(!isFifthOpen);

  const width = {
    width: "45px",
    height: "45px",
    backgroundColor: "#333D7A"
  };

  const clicked = () => [console.log("clicked")];

  let cardToShow = "";

  if (condition === "1st") {
    cardToShow = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
      className: "bg-white",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }, __jsx("div", {
      class: " p-3 d-flex",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, __jsx("div", {
      class: "rounded-circle text-white mr-4",
      style: width,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }, __jsx("span", {
      class: "text-white ",
      style: {
        fontSize: "2rem",
        padding: "15px"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, "1")), __jsx("span", {
      class: "h6 align-self-center mb-0",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 15
      }
    }, "START YOUR ORDER")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
      isOpen: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
      className: "w-100",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, __jsx(_StartYourOrder__WEBPACK_IMPORTED_MODULE_1__["default"], {
      isClicked: () => setCondition("2nd"),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }))));
  } else if (condition === "2nd") {
    cardToShow = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
      className: "bg-white",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }
    }, __jsx("div", {
      class: " p-3 d-flex",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, __jsx("div", {
      class: "rounded-circle  text-white mr-4",
      style: width,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }
    }, __jsx("span", {
      class: "text-white ",
      style: {
        fontSize: "2rem",
        padding: "12px"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }
    }, "2")), __jsx("span", {
      class: "h6 align-self-center mb-0",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 15
      }
    }, "Verify SMS")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
      isOpen: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }
    }, __jsx(_VerifySms__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isClicked: () => setCondition("3rd"),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }
    }))));
  } else if (condition === "3rd") {
    cardToShow = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
      className: "bg-white",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }
    }, __jsx("div", {
      class: " p-3 d-flex",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }
    }, __jsx("div", {
      class: "rounded-circle  text-white mr-4",
      style: width,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 15
      }
    }, __jsx("span", {
      class: "text-white ",
      style: {
        fontSize: "2rem",
        padding: "12px"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }
    }, "3")), __jsx("span", {
      class: "h6 align-self-center mb-0",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 15
      }
    }, "Select Wallet")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
      isOpen: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }
    }, __jsx(_selectWallet__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isClicked: () => setCondition("4th"),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }
    }))));
  } else if (condition === "4th") {
    cardToShow = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
      className: "bg-white",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }
    }, __jsx("div", {
      class: " p-3 d-flex",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    }, __jsx("div", {
      class: "rounded-circle  text-white mr-4",
      style: width,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 15
      }
    }, __jsx("span", {
      class: "text-white ",
      style: {
        fontSize: "2rem",
        padding: "12px"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }, "4")), __jsx("span", {
      class: "h6 align-self-center mb-0",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 15
      }
    }, "Upload Images")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
      isOpen: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 11
      }
    }, __jsx(_uploadImages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isClicked: () => setCondition("5th"),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }
    }))));
  } else if (condition == "5th") {
    cardToShow = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
      className: "bg-white",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }
    }, __jsx("div", {
      class: " p-3 d-flex",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }
    }, __jsx("div", {
      class: "rounded-circle text-white mr-4",
      style: width,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 15
      }
    }, __jsx("span", {
      class: "text-white ",
      style: {
        fontSize: "2rem",
        padding: "12px"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }
    }, "5")), __jsx("span", {
      class: "h6 align-self-center mb-0",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 15
      }
    }, "Gift card Information")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
      isOpen: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 11
      }
    }, __jsx(_GiftCardInformation__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isClicked: () => setCondition("1st"),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 13
      }
    }))));
  }

  return __jsx("div", {
    className: "w-100 h-50 mt-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    className: "shadow  w-95 m-auto",
    style: {
      width: "95%",
      zIndex: "9999"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, cardToShow));
};

/* harmony default export */ __webpack_exports__["default"] = (AccordionElementSection);

/***/ }),

/***/ "./pages/layouts/sections/Accordian/selectWallet.js":
/*!**********************************************************!*\
  !*** ./pages/layouts/sections/Accordian/selectWallet.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Working_place\\Hossam\\debcoins_next\\pages\\layouts\\sections\\Accordian\\selectWallet.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const selectWallet = props => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    class: " d-flex row  p-2",
    style: {
      backgroundColor: "#ebf9f4"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "col-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("span", {
    class: "text-left font-14-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, "Giftcard Amount"), __jsx("span", {
    class: "float-right font-14-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "BTC Value"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  })), __jsx("div", {
    class: "col-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "$25"), __jsx("span", {
    class: "float-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "0.000183411 / $20.66"))), __jsx("div", {
    className: " d-flex row mt-2 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-6  p-3 text-center",
    style: {
      backgroundColor: "#eaecf3 "
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    check: true,
    className: "float-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "checkbox",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  })), __jsx("img", {
    src: "/assets/images/home/btc.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), "MYBTC")), __jsx("button", {
    className: "btn primary-btn btn-default text-uppercase mt-3",
    onClick: e => {
      e.preventDefault();
      props.isClicked();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "select"));
};

/* harmony default export */ __webpack_exports__["default"] = (selectWallet);

/***/ }),

/***/ "./pages/layouts/sections/Accordian/uploadImages.js":
/*!**********************************************************!*\
  !*** ./pages/layouts/sections/Accordian/uploadImages.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ "react-dropzone");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Working_place\\Hossam\\debcoins_next\\pages\\layouts\\sections\\Accordian\\uploadImages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const uploadImages = props => {
  const onDrop = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(acceptedFiles => {// Do something with the files
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_2__["useDropzone"])({
    onDrop
  });
  const {
    0: modalFor,
    1: setModalFor
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: modalFogc,
    1: setModalFogc
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: modalBogc,
    1: setModalBogc
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggleFor = () => setModalFor(!modalFor);

  const toggleFogc = () => setModalFogc(!modalFogc);

  const toggleBogc = () => setModalBogc(!modalBogc);

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    class: " d-flex row  p-2",
    style: {
      backgroundColor: "#ebf9f4"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "col-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("span", {
    class: "text-left font-14-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "Giftcard Amount"), __jsx("span", {
    class: "float-right font-14-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "BTC Value"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  })), __jsx("div", {
    class: "col-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "$25"), __jsx("span", {
    class: "float-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "0.000183411 / $20.66"))), __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx("p", {
    class: "text-left ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "Front of reciept", __jsx("i", {
    onClick: toggleFor,
    className: "fa fa-question-circle pl-3 mb-3 font-14-18",
    style: {
      cursor: "pointer"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: modalFor,
    toggle: toggleFor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], {
    toggle: toggleFor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "Front of Receipt"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/home/receipt.svg",
    style: {
      maxHeight: "350px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalFooter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "secondary",
    onClick: toggleFor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Cancel"))), __jsx("p", {
    class: "text-left ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, "Front of Gift Card beside Reciept", __jsx("i", {
    onClick: toggleFogc,
    className: "fa fa-question-circle pl-3 mb-3 font-14-18",
    style: {
      cursor: "pointer"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: modalFogc,
    toggle: toggleFogc,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], {
    toggle: toggleFogc,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "Front of Gift Card beside Reciept"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/home/card-front.svg",
    style: {
      maxHeight: "350px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalFooter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "secondary",
    onClick: toggleFogc,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, "Cancel"))), __jsx("p", {
    class: "text-left ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, "Back of Gift Card beside Receipt", __jsx("i", {
    onClick: toggleBogc,
    className: "fa fa-question-circle pl-3 mb-3 font-14-18",
    "aria-hidden": "true",
    style: {
      cursor: "pointer"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: modalBogc,
    toggle: toggleBogc,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], {
    toggle: toggleBogc,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, "Back of Gift Card beside Receipt"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/home/card-back.svg",
    style: {
      maxHeight: "350px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalFooter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "secondary",
    onClick: toggleBogc,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, "Cancel"))), __jsx("small", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, "Upload a picture of the back side of your prepaid gift card beside the written reeipt."), __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps(), {
    className: "p-5 mt-2 text-center",
    style: {
      border: "1px dotted #aaaaaa",
      cursor: "pointer"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }), __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  })), isDragActive ? __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, "Drop the files here ...") : __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, "Tap to add a photo.")), __jsx("button", {
    className: "btn primary-btn btn-default text-uppercase mt-3",
    onClick: e => {
      e.preventDefault();
      props.isClicked();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, "Upload"));
};

/* harmony default export */ __webpack_exports__["default"] = (uploadImages);

/***/ }),

/***/ "./pages/layouts/sections/Banner/Banner.js":
/*!*************************************************!*\
  !*** ./pages/layouts/sections/Banner/Banner.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lottie */ "react-lottie");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Accordian_accordian__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Accordian/accordian */ "./pages/layouts/sections/Accordian/accordian.js");
/* harmony import */ var _public_assets_animation_animation_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../public/assets/animation/animation.json */ "./public/assets/animation/animation.json");
var _public_assets_animation_animation_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../public/assets/animation/animation.json */ "./public/assets/animation/animation.json", 1);
var _jsxFileName = "D:\\Working_place\\Hossam\\debcoins_next\\pages\\layouts\\sections\\Banner\\Banner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Banner = () => {
  const scrollToRef = val => {
    document.querySelector(`#${val}`).scrollIntoView({
      behavior: "smooth"
    });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: _public_assets_animation_animation_json__WEBPACK_IMPORTED_MODULE_4__,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return __jsx("section", {
    className: "saas2 header",
    id: "home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "saas2-content ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "bg saas2-bg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    style: {
      paddingBottom: "13rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    className: " order-2 order-lg-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, __jsx(_Accordian_accordian__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    className: "order-1 order-lg-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "center-text bannerHomePadding ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "header-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx("h1", {
    style: {
      fontFamily: "Graphik_Semibold"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 23
    }
  }, " ", "Buy Bitcoin with Visa, Mastercard & Amex Gift Cards")), __jsx("div", {
    className: "header-sub-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "sub-para text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 23
    }
  }, "Get your Bitcoin instantly using our service - no more \"temporary holds\" on your Bitcoin that traditional exchanges have in place. Exchange your nonreloadable prepaid gift card today!")), __jsx(react_lottie__WEBPACK_IMPORTED_MODULE_2___default.a, {
    options: defaultOptions,
    isClickToPauseDisabled: true,
    height: "auto",
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  })))))), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs background-animate",
    src: "/assets/images/background2.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "center-content set-abs bottom-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "down",
    onClick: () => scrollToRef("feature"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/down.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./pages/layouts/sections/Footer/footer.js":
/*!*************************************************!*\
  !*** ./pages/layouts/sections/Footer/footer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Working_place\\Hossam\\debcoins_next\\pages\\layouts\\sections\\Footer\\footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => __jsx("footer", {
  className: "saas2 footer2",
  id: "contact",
  style: {
    backgroundColor: "#333D7A"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  className: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "4",
  md: "6",
  sm: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "logo-sec",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "footer-contant",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 13
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid footer-logo",
  src: "/assets/images/home/logo.png",
  style: {
    maxWidth: "200px"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 15
  }
}), __jsx("div", {
  className: "footer-para text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 15
  }
}, __jsx("p", {
  className: "text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 17
  }
}, "Debcoins is a pending trademark of Debcoins, LLC. Debcoins has no relation to Visa, Mastercard, or American-express branded gift cards. Their respective wordmarks and trademarks belong to them alone."))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "2",
  md: "6",
  sm: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "footer-title mobile-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 11
  }
}, __jsx("h3", {
  className: "text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 13
  }
}, "Pages")), __jsx("div", {
  className: "footer-contant",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 11
  }
}, __jsx("h5", {
  className: "footer-headings",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 13
  }
}, "QUICK LINKS"), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 13
  }
}, __jsx("ul", {
  className: "footer-lists",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 15
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 17
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 19
  }
}, "Home")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 17
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 19
  }
}, "Support")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 17
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 19
  }
}, "Sign Up")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "2",
  md: "6",
  sm: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "footer-title mobile-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 11
  }
}, __jsx("h3", {
  className: "text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 13
  }
}, "LEGAL")), __jsx("div", {
  className: "footer-contant",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 11
  }
}, __jsx("h5", {
  className: "footer-headings",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 13
  }
}, "LEGAL"), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 13
  }
}, __jsx("ul", {
  className: "footer-lists",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 15
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 17
  }
}, __jsx("a", {
  href: "aml-kyc",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 19
  }
}, "AML/KYC")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 17
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 19
  }
}, "Support")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 17
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 19
  }
}, "Term of Use")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 17
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 19
  }
}, "privacy Policy")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 17
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 19
  }
}, "Limit and Compliance")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 17
  }
}, __jsx("a", {
  href: "/fraud-notice",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 19
  }
}, " Fraud Notice")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "4",
  md: "6",
  sm: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "logo-sec",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "footer-title mobile-title p-t-0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 13
  }
}, __jsx("h3", {
  className: "text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 15
  }
}, "COMPANY INFO")), __jsx("div", {
  className: "footer-contant",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 13
  }
}, __jsx("h5", {
  className: "footer-headings",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 15
  }
}, "COMPANY INFO"), __jsx("div", {
  className: "footer-para text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 15
  }
}, __jsx("h6", {
  className: "text-white para-address",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 17
  }
}, "ABC Street New york City,", " "), __jsx("h6", {
  className: "text-white para-address",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 17
  }
}, "NY 10001.")), __jsx("ul", {
  className: "d-d-flex footer-social social",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 15
  }
}, __jsx("li", {
  className: "footer-social-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 17
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 19
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-facebook",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 21
  }
}))), __jsx("li", {
  className: "footer-social-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 17
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 19
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-twitter",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 21
  }
}))), __jsx("li", {
  className: "footer-social-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 17
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 19
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-google",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 21
  }
}))))))))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/layouts/sections/Header/header.js":
/*!*************************************************!*\
  !*** ./pages/layouts/sections/Header/header.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./pages/layouts/sections/Header/nav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Working_place\\Hossam\\debcoins_next\\pages\\layouts\\sections\\Header\\header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Header = props => {
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: sidebar,
    1: setSidebar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const clickSidebar = () => {
    setSidebar(!sidebar);
    document.querySelector(".navbar").classList.add("openSidebar");
  };

  return __jsx("header", {
    className: `${props.className || "app2"} loding-header nav-abs custom-scroll  `,
    style: {
      padding: "1rem",
      backgroundColor: props.isHome ? "" : "#333D7A"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("nav", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "m-r-auto",
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/home/logo.png",
    style: {
      maxWidth: "200px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "responsive-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "toggle-nav",
    onClick: clickSidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-bars text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 19
    }
  }))), __jsx(_nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }), props.shop && __jsx("div", {
    className: "top-header-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, __jsx("li", {
    className: "search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    onClick: () => setSearch(!search),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "icon-search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  })), __jsx("div", {
    "aria-labelledby": "dropdownMenuButton",
    className: `dropdown-menu ${search && `show`} dropdown-menu-right`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 23
    }
  }, __jsx("form", {
    className: "form-inline search-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 27
    }
  }, __jsx("label", {
    className: "sr-only",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, "Email"), __jsx("input", {
    className: "form-control-plaintext",
    placeholder: "Search....",
    type: "search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "d-sm-none mobile-search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }))))), __jsx("li", {
    className: "account ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    onClick: () => setShow(!show),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "icon-user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: `dropdown-menu ${show && `show`} dropdown-menu-right`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/auth/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 27
    }
  }, "Login")), __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, "Account"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 27
    }
  }, "Wishlist")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/checkout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 27
    }
  }, "checkout")))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/layouts/sections/Header/nav.js":
/*!**********************************************!*\
  !*** ./pages/layouts/sections/Header/nav.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Working_place\\Hossam\\debcoins_next\\pages\\layouts\\sections\\Header\\nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Nav = () => {
  const {
    0: sidebar,
    1: setSidebar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function closeSidebar() {
    setSidebar(!sidebar);
    document.querySelector(".navbar").classList.remove("openSidebar");
  }

  return __jsx("div", {
    className: `navbar`,
    id: "togglebtn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "responsive-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "btn-back",
    onClick: closeSidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "back"))), __jsx("ul", {
    className: "main-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "mega-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/support",
    className: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Support")), __jsx("li", {
    className: "mega-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/term-of-use",
    className: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Term of Use")), __jsx("li", {
    className: "mega-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/privacy-policy",
    className: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "Privacy Policy")), __jsx("li", {
    className: "mega-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/limits-and-compliance",
    className: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Limits & Compliance")), __jsx("li", {
    className: "mega-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/login",
    className: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "btn btn-default primary-btn ",
    style: {
      padding: "10px 20px",
      marginRight: "5px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Login"))), __jsx("li", {
    className: "mega-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signup",
    className: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "btn btn-default primary-btn transparent",
    style: {
      padding: "10px 20px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "Sign Up")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_sections_Header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/sections/Header/header */ "./pages/layouts/sections/Header/header.js");
/* harmony import */ var _layouts_sections_Banner_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/sections/Banner/Banner */ "./pages/layouts/sections/Banner/Banner.js");
/* harmony import */ var _layouts_sections_Accordian_accordian__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/sections/Accordian/accordian */ "./pages/layouts/sections/Accordian/accordian.js");
/* harmony import */ var _layouts_sections_Footer_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/sections/Footer/footer */ "./pages/layouts/sections/Footer/footer.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-google-recaptcha */ "react-google-recaptcha");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\Working_place\\Hossam\\debcoins_next\\pages\\signup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import Custom Components

 // import Header from "../containers/common/header";







const index = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.body.style.setProperty("--primary", "#333D7A");
    document.body.style.setProperty("--secondary", "##FAEBEE");
    document.body.style.setProperty("--light", "#f3f1e8");
    document.body.style.setProperty("--dark", "#9647DB");
  });

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "DebCoins ")), __jsx(_layouts_sections_Header_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "saas2",
    isHome: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: "12",
    md: "4",
    className: "ml-auto mr-auto",
    style: {
      marginTop: "10rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `p-5 shadow-showcase  shadow`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "login-modal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "text-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: " text-dark  mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "Sign Up"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "Create your account to continue."), __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
    row: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 12,
    className: "m-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
    for: "Email address",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, "Username *"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
    addonType: "prepend",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 23
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], {
    style: {
      borderTopLeftRadius: "20px",
      borderBottomLeftRadius: "20px",
      border: "0"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "fa fa-user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 27
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    type: "text",
    name: "usd",
    id: "usd",
    placeholder: "Username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 23
    }
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
    row: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
    for: "Mobile Number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, "Mobile Number *"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
    addonType: "prepend",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 23
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], {
    style: {
      borderTopLeftRadius: "20px",
      borderBottomLeftRadius: "20px",
      border: "0"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, "+1")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    type: "text",
    name: "number",
    id: "number",
    placeholder: "xxx-xxx-xxxx",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 23
    }
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
    row: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
    for: "Email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, "Email *"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
    addonType: "prepend",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 23
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], {
    style: {
      borderTopLeftRadius: "20px",
      borderBottomLeftRadius: "20px",
      border: "0"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "fa fa-envelope",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 27
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    type: "email",
    name: "email",
    id: "email",
    placeholder: "name@example.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 23
    }
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
    row: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
    for: "Password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, "Password *"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
    addonType: "prepend",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 23
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], {
    style: {
      borderTopLeftRadius: "20px",
      borderBottomLeftRadius: "20px",
      border: "0"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "fa fa-lock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 27
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    type: "password",
    name: "password",
    id: "password",
    placeholder: "Password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 23
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
    check: true,
    className: "mt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    type: "checkbox",
    style: {
      width: "unset"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 23
    }
  }), " ", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 23
    }
  }, "I've read and accept the", __jsx("a", {
    href: "/term-of-use",
    style: {
      textDecoration: "underline",
      paddingLeft: "5px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 25
    }
  }, "Terms of service")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
    check: true,
    className: "mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
    check: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 23
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    type: "checkbox",
    style: {
      width: "unset"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 25
    }
  }), " ", "I've read and accept the", " ", __jsx("a", {
    href: "/term-of-use",
    style: {
      textDecoration: "underline",
      paddingLeft: "5px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 25
    }
  }, "Privacy policy")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 12,
    className: "mt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 19
    }
  }, __jsx(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_7___default.a, {
    sitekey: "6LcGYNEZAAAAAJcbNy-gij3qs1zGNo-ajvNOiR0t",
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 21
    }
  }))), __jsx("button", {
    className: "btn primary-btn btn-default  mt-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }
  }, "Sign Up")), __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 15
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 15
    }
  }, "Already have an account?? ", __jsx("a", {
    href: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 43
    }
  }, "Login")))))), __jsx(_layouts_sections_Footer_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./public/assets/animation/animation.json":
/*!************************************************!*\
  !*** ./public/assets/animation/animation.json ***!
  \************************************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.6.7\",\"fr\":30,\"ip\":0,\"op\":190,\"w\":1280,\"h\":720,\"nm\":\"Debcoin\",\"ddd\":0,\"assets\":[{\"id\":\"comp_0\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Isolation Mode\",\"parent\":3,\"td\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0.25,0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[3.641,-2.102],[0,0],[4.205,2.428],[0,0],[-3.641,2.102],[0,0],[-4.205,-2.428],[0,0]],\"o\":[[0,0],[-3.641,2.102],[0,0],[-4.205,-2.428],[0,0],[3.641,-2.102],[0,0],[4.205,2.428]],\"v\":[[122.449,-8.666],[-15.009,70.696],[-29.216,70.107],[-121.429,16.868],[-122.449,8.666],[15.009,-70.696],[29.216,-70.107],[121.429,-16.868]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.705882370472,0.588235318661,0.392156869173,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":-8,\"op\":503,\"st\":53,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"light\",\"parent\":3,\"tt\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":20,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.342},\"t\":110,\"s\":[-100.588,58.888,0],\"to\":[33.833,-19.625,0],\"ti\":[-33.833,19.625,0]},{\"i\":{\"x\":0.667,\"y\":0.667},\"o\":{\"x\":0.333,\"y\":0.333},\"t\":140,\"s\":[102.412,-58.862,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":160,\"s\":[102.412,-58.862,0],\"to\":[-33.833,19.625,0],\"ti\":[33.833,-19.625,0]},{\"t\":190,\"s\":[-100.588,58.888,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-20.588,12.138,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[60.301,27.082],[34.049,42.239],[-101.477,-3.465],[-76.366,-17.963]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":-8,\"op\":503,\"st\":53,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"golden card\",\"parent\":4,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-428,66.641,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-6.424,13.708],[-33.129,2.276],[-5.743,14.919],[0.065,0.126],[0,0],[6.007,-15.641],[25.016,-8.969],[0,0],[6.242,-13.3],[-0.096,-0.137]],\"o\":[[-0.027,-0.408],[6.475,-13.814],[24.522,-8.807],[5.775,-14.998],[0,0],[0.28,0.537],[-5.903,15.37],[0,0],[-32.606,2.226],[-6.061,12.915],[0,0]],\"v\":[[-65.091,49.007],[-68.231,23.084],[-8.547,-1.165],[37.062,-36.921],[36.499,-65.935],[37.044,-65.028],[38.473,-36.393],[-8.124,0.288],[-8.323,0.329],[-66.867,23.728],[-63.26,50.474]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.627451002598,0.486274510622,0.258823543787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-5.472,-1.567],[-8.73,0.533],[5.075,-4.31],[-1.481,-2.646]],\"o\":[[1.596,2.852],[7.227,2.07],[-22.701,-17.854],[-2.131,1.809],[0,0]],\"v\":[[-52.693,-9.021],[-41.889,-2.266],[-10.366,-1.044],[-51.606,-16.469],[-52.693,-9.021]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[9.994,2.862],[1.798,3.212],[0,0],[-2.691,2.284],[-30.624,-24.601]],\"o\":[[-0.974,0.071],[-5.866,-1.681],[0,0],[-1.844,-3.295],[2.736,-2.325],[0,0]],\"v\":[[-8.319,0.33],[-42.283,-0.818],[-53.998,-8.296],[-53.998,-8.297],[-52.582,-17.624],[-7.92,-1.006]],\"c\":false},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.627451002598,0.486274510622,0.258823543787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[1.729,-2.697],[-1.524,-2.022],[0,0],[-1.702,2.655],[-8.599,1.073],[-13.455,-3.158]],\"o\":[[-34.905,-8.192],[-1.374,2.144],[0,0],[-1.894,-2.513],[1.521,-2.373],[8.335,-1.041],[0,0]],\"v\":[[-8.548,0.311],[-53.536,2.983],[-53.297,9.637],[-54.488,10.536],[-54.799,2.157],[-41.062,-4.344],[-8.224,-1.154]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.627451002598,0.486274510622,0.258823543787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.603,-0.36],[0.398,-1.651],[-27.069,-20.391],[5.247,8.617],[2.245,-0.318],[0,0]],\"o\":[[-1.274,0.76],[-0.738,3.057],[-1.273,-7.385],[-5.161,-8.476],[0,0],[-0.741,0.105]],\"v\":[[-32.564,-40.928],[-35.16,-37.228],[-9.065,-2.345],[-18.594,-32.743],[-30.537,-41.634],[-30.537,-41.634]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-1.033,4.283],[-2.93,0.415],[-5.333,-8.759],[-1.064,-6.646]],\"o\":[[0,0],[-28.512,-21.049],[0.735,-3.046],[3.191,-0.451],[5.862,9.627],[0,0]],\"v\":[[-7.786,-0.143],[-8.462,-0.032],[-36.617,-37.599],[-30.765,-43.124],[-17.318,-33.516],[-7.283,-0.747]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.627451002598,0.486274510622,0.258823543787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.942,-1.158],[-0.389,-2.485],[-32.655,-8.523],[8.11,5.983]],\"o\":[[-1.996,1.19],[0.489,3.123],[-3.988,-6.367],[-7.977,-5.885]],\"v\":[[-44.357,-30.045],[-46.923,-24.176],[-9.633,-1.822],[-29.989,-26.383]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.685,4.375],[-2.535,1.512],[-8.243,-6.082],[-3.514,-5.761]],\"o\":[[-34.232,-8.579],[-0.487,-3.11],[2.76,-1.646],[9.06,6.684],[0,0]],\"v\":[[-8.196,0.093],[-48.404,-23.961],[-45.134,-31.342],[-29.111,-27.591],[-7.385,-1.024]],\"c\":false},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.627451002598,0.486274510622,0.258823543787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-1.493,-7.345],[-1.782,9.856],[1.753,2.752],[2.373,-0.506],[1.749,-9.699]],\"o\":[[-1.777,9.861],[3.955,-6.289],[1.005,-5.561],[-1.451,-2.278],[-2.216,0.473],[0,0]],\"v\":[[-9.8,-34.299],[-7.669,-2.596],[5.377,-31.352],[4.251,-43.88],[-1.856,-46.711],[-9.8,-34.299]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-1.986,11.018],[0,0],[-3.148,0.67],[-1.78,-2.793],[1.075,-5.948],[3.62,-5.605]],\"o\":[[-1.42,-6.582],[0,0],[1.808,-10.022],[2.968,-0.632],[1.965,3.086],[-1.991,11.013],[0,0]],\"v\":[[-8.755,-0.486],[-11.275,-34.586],[-11.275,-34.586],[-2.185,-48.183],[5.512,-44.68],[6.852,-31.066],[-7.392,-0.222]],\"c\":false},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.627451002598,0.486274510622,0.258823543787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.08,-1.24],[-1.427,-9.792],[0,0],[-3.74,-6.515],[1.445,9.954],[2.526,2.059]],\"o\":[[-1.942,1.158],[0,0],[1.451,9.956],[1.737,-7.251],[-0.816,-5.616],[-2.093,-1.704]],\"v\":[[-16.821,-46.468],[-20.381,-32.113],[-20.381,-32.113],[-8.311,-2.615],[-5.121,-34.161],[-10.158,-45.727]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[1.621,11.125],[0,0],[-2.76,1.646],[-2.566,-2.09],[-0.873,-6.006],[1.638,-6.493]],\"o\":[[-3.428,-5.811],[0,0],[-1.475,-10.119],[2.601,-1.551],[2.833,2.308],[1.615,11.122],[0,0]],\"v\":[[-8.667,-0.259],[-21.864,-31.914],[-21.864,-31.914],[-17.599,-47.765],[-9.223,-46.891],[-3.637,-34.36],[-7.296,-0.443]],\"c\":false},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.627451002598,0.486274510622,0.258823543787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.889,-1.127],[5.865,-20.968],[-4.613,5.868],[0.408,3.233],[0,0],[2.807,0.227]],\"o\":[[-5.971,3.562],[7.379,-4.633],[3.492,-4.442],[0,0],[-0.378,-2.989],[-1.601,-0.13]],\"v\":[[12.452,-37.45],[-6.433,-2.502],[18.336,-21.779],[23.05,-33.511],[23.05,-33.511],[17.725,-38.888]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-3.595,-0.291],[-0.471,-3.724],[3.743,-4.763],[0.83,-0.507]],\"o\":[[10.107,-37.648],[3.543,0.287],[0.46,3.64],[-6.38,8.115],[0,0]],\"v\":[[-8.39,-1.053],[17.827,-40.388],[24.536,-33.682],[19.518,-20.837],[-7.27,-0.205]],\"c\":false},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.627451002598,0.486274510622,0.258823543787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":8,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-96.203,2.835],[-98.899,4.392],[-99.582,3.998],[-93.614,0.552],[-92.931,0.946],[-95.627,2.503],[-86.374,7.845],[-86.95,8.178]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-100.331,9.879],[-96.036,7.4],[-95.311,7.818],[-99.606,10.298],[-95.1,12.9],[-95.675,13.232],[-105.64,7.479],[-100.62,4.581],[-99.852,5.024],[-104.297,7.59]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-97.896,14.498],[-107.846,8.753],[-107.281,8.427],[-97.331,14.171]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.842,-0.486],[-2.314,-1.323],[-2.174,1.255],[0.143,0.821],[0,0],[0,0],[0,0],[0,0],[0,0],[1.108,-0.64],[2.715,1.568],[-2.27,1.311],[-1.752,-0.138]],\"o\":[[-1.503,-0.117],[-2.185,1.261],[2.345,1.354],[0.799,-0.461],[0,0],[0,0],[0,0],[0,0],[0,0],[0.259,1.048],[-2.537,1.465],[-3.124,-1.791],[0.98,-0.566],[0,0]],\"v\":[[-107.996,10.956],[-111.672,11.602],[-110.531,16.064],[-102.873,16.682],[-101.755,14.707],[-104.541,13.098],[-107.142,14.6],[-107.81,14.214],[-104.665,12.399],[-100.941,14.549],[-102.149,17.101],[-111.071,16.392],[-112.369,11.2],[-108.148,10.487]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.206,-0.022],[0,0],[-0.235,0.048],[-0.162,0.094],[-0.048,0.054],[-0.008,0.051],[0.031,0.045],[0.065,0.037],[0.105,0.018],[0.123,-0.004],[0.143,-0.02],[0.159,-0.028],[0.339,0.047],[0.298,0.172],[0.097,0.137],[-0.013,0.132],[-0.108,0.122],[-0.178,0.103],[-0.164,0.062],[-0.172,0.033],[0,0],[0.106,-0.015],[0.097,-0.025],[0.082,-0.033],[0.063,-0.036],[0.049,-0.053],[0.009,-0.051],[-0.029,-0.047],[-0.068,-0.039],[-0.09,-0.017],[-0.108,0.001],[-0.129,0.015],[-0.153,0.026],[-0.191,0.013],[-0.183,-0.017],[-0.177,-0.055],[-0.18,-0.104],[-0.098,-0.139],[0.017,-0.131],[0.116,-0.12],[0.18,-0.104],[0.208,-0.072]],\"o\":[[0,0],[0.288,0.01],[0.236,-0.048],[0.096,-0.055],[0.049,-0.055],[0.007,-0.051],[-0.032,-0.046],[-0.087,-0.05],[-0.107,-0.018],[-0.123,0.003],[-0.143,0.02],[-0.408,0.067],[-0.339,-0.047],[-0.233,-0.135],[-0.098,-0.138],[0.013,-0.133],[0.109,-0.121],[0.175,-0.101],[0.163,-0.062],[0,0],[-0.109,0.003],[-0.106,0.016],[-0.096,0.026],[-0.082,0.033],[-0.086,0.05],[-0.048,0.053],[-0.009,0.051],[0.028,0.047],[0.075,0.043],[0.088,0.017],[0.107,-0.001],[0.129,-0.016],[0.209,-0.034],[0.192,-0.013],[0.182,0.017],[0.178,0.055],[0.25,0.144],[0.099,0.139],[-0.017,0.131],[-0.117,0.119],[-0.184,0.107],[-0.207,0.072]],\"v\":[[95.529,-6.889],[94.529,-7.466],[95.314,-7.524],[95.911,-7.736],[96.126,-7.9],[96.209,-8.058],[96.172,-8.203],[96.027,-8.327],[95.737,-8.429],[95.393,-8.451],[94.994,-8.415],[94.54,-8.344],[93.419,-8.314],[92.464,-8.642],[91.969,-9.05],[91.842,-9.454],[92.023,-9.835],[92.453,-10.172],[92.96,-10.415],[93.462,-10.557],[94.396,-10.017],[94.075,-9.99],[93.772,-9.929],[93.504,-9.841],[93.288,-9.738],[93.086,-9.584],[93.001,-9.428],[93.03,-9.281],[93.176,-9.151],[93.422,-9.06],[93.717,-9.035],[94.072,-9.06],[94.495,-9.122],[95.095,-9.193],[95.656,-9.187],[96.196,-9.079],[96.732,-8.839],[97.255,-8.414],[97.378,-8.009],[97.18,-7.632],[96.736,-7.298],[96.148,-7.03]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.206,-0.022],[0,0],[-0.235,0.048],[-0.162,0.094],[-0.048,0.054],[-0.008,0.051],[0.031,0.045],[0.065,0.037],[0.105,0.018],[0.123,-0.004],[0.143,-0.02],[0.159,-0.028],[0.339,0.047],[0.298,0.172],[0.097,0.137],[-0.013,0.132],[-0.108,0.122],[-0.178,0.103],[-0.164,0.062],[-0.172,0.033],[0,0],[0.106,-0.015],[0.097,-0.025],[0.082,-0.033],[0.063,-0.036],[0.049,-0.053],[0.009,-0.051],[-0.029,-0.047],[-0.068,-0.039],[-0.09,-0.017],[-0.108,0.001],[-0.129,0.015],[-0.153,0.026],[-0.191,0.013],[-0.183,-0.017],[-0.177,-0.055],[-0.18,-0.104],[-0.098,-0.139],[0.017,-0.131],[0.116,-0.12],[0.18,-0.104],[0.208,-0.072]],\"o\":[[0,0],[0.288,0.01],[0.236,-0.048],[0.096,-0.055],[0.049,-0.055],[0.007,-0.051],[-0.032,-0.046],[-0.087,-0.05],[-0.107,-0.018],[-0.123,0.003],[-0.143,0.02],[-0.408,0.067],[-0.339,-0.047],[-0.233,-0.135],[-0.098,-0.138],[0.013,-0.133],[0.109,-0.121],[0.175,-0.101],[0.163,-0.062],[0,0],[-0.109,0.003],[-0.106,0.016],[-0.096,0.026],[-0.082,0.033],[-0.086,0.05],[-0.048,0.053],[-0.009,0.051],[0.028,0.047],[0.075,0.043],[0.088,0.017],[0.107,-0.001],[0.129,-0.016],[0.209,-0.034],[0.192,-0.013],[0.182,0.017],[0.178,0.055],[0.25,0.144],[0.099,0.139],[-0.017,0.131],[-0.117,0.119],[-0.184,0.107],[-0.207,0.072]],\"v\":[[92.84,-5.337],[91.841,-5.914],[92.625,-5.971],[93.222,-6.184],[93.437,-6.348],[93.52,-6.506],[93.483,-6.65],[93.338,-6.774],[93.049,-6.877],[92.704,-6.898],[92.305,-6.863],[91.851,-6.792],[90.731,-6.761],[89.776,-7.09],[89.28,-7.498],[89.153,-7.902],[89.334,-8.283],[89.764,-8.619],[90.271,-8.863],[90.774,-9.004],[91.708,-8.465],[91.386,-8.438],[91.083,-8.377],[90.816,-8.289],[90.599,-8.186],[90.397,-8.031],[90.312,-7.875],[90.342,-7.728],[90.487,-7.599],[90.734,-7.508],[91.029,-7.483],[91.384,-7.508],[91.806,-7.57],[92.407,-7.641],[92.968,-7.635],[93.507,-7.526],[94.044,-7.286],[94.567,-6.862],[94.69,-6.457],[94.491,-6.08],[94.048,-5.746],[93.46,-5.478]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[92.628,-5.016],[90.614,-3.853],[86.136,-6.438],[88.073,-7.556],[88.894,-7.082],[87.713,-6.401],[88.71,-5.826],[89.808,-6.46],[90.627,-5.987],[89.528,-5.353],[90.552,-4.762],[91.81,-5.488]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.027,0.129],[0.187,0.108],[0.351,-0.203]],\"o\":[[0,0],[0,0],[0.162,-0.094],[-0.027,-0.131],[-0.391,-0.226],[0,0]],\"v\":[[84.517,-4.63],[85.763,-3.911],[86.091,-4.1],[86.294,-4.434],[85.973,-4.793],[84.858,-4.828]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.105,0.019],[0.085,0.007],[0.065,-0.008],[0.047,-0.027],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.812,-0.469],[-0.096,-0.097],[-0.04,-0.099],[0.017,-0.098],[0.07,-0.092],[0,0],[-0.094,0],[-0.106,-0.011],[-0.111,-0.018],[-0.101,-0.021]],\"o\":[[0,0],[0,0],[-0.126,-0.028],[-0.104,-0.019],[-0.086,-0.007],[-0.066,0.008],[0,0],[0,0],[0,0],[0,0],[0,0],[0.816,-0.471],[0.156,0.09],[0.096,0.097],[0.041,0.1],[-0.015,0.098],[0,0],[0.071,-0.017],[0.093,0],[0.106,0.011],[0.112,0.019],[0,0]],\"v\":[[90.299,-3.671],[89.431,-3.17],[87.756,-3.533],[87.409,-3.604],[87.124,-3.643],[86.897,-3.641],[86.728,-3.589],[86.525,-3.471],[88.239,-2.481],[87.482,-2.045],[83.004,-4.63],[84.203,-5.322],[86.644,-5.325],[87.022,-5.044],[87.228,-4.75],[87.264,-4.454],[87.136,-4.17],[87.149,-4.163],[87.395,-4.188],[87.695,-4.172],[88.021,-4.128],[88.341,-4.069]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.47,0.272],[0.403,-0.232]],\"o\":[[0,0],[0,0],[0.403,-0.232],[-0.46,-0.266],[0,0]],\"v\":[[81.589,-2.919],[82.985,-2.113],[83.282,-2.285],[83.181,-3.041],[81.887,-3.091]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[-0.951,-0.549],[-0.035,-0.3],[0.406,-0.235]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0.846,-0.489],[0.45,0.26],[0.035,0.301],[0,0]],\"v\":[[83.75,-1.671],[85.293,-0.781],[84.536,-0.344],[80.058,-2.929],[81.243,-3.613],[83.94,-3.522],[84.667,-2.682],[84.111,-1.879]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.17,0.071],[0,0],[-0.098,-0.104],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.174,-0.067],[0,0],[0.122,0.129],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[-0.075,-0.018],[0,0],[0.059,0.046],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.143,0.04],[0,0],[-0.069,-0.061],[0,0],[0,0],[0,0],[0,0]],\"v\":[[84.136,-0.113],[83.239,0.405],[81.201,-0.103],[80.834,-0.237],[80.825,-0.231],[81.059,-0.006],[81.925,1.164],[81.023,1.685],[79.855,-0.226],[76.637,-0.954],[77.557,-1.485],[79.38,-0.987],[79.858,-0.827],[79.868,-0.833],[79.583,-1.118],[78.787,-2.195],[79.63,-2.682],[80.843,-0.819]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[80.855,1.782],[78.84,2.945],[74.362,0.359],[76.299,-0.759],[77.12,-0.285],[75.94,0.397],[76.936,0.972],[78.035,0.338],[78.853,0.81],[77.755,1.444],[78.779,2.036],[80.037,1.309]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.115,0.03],[0,0],[-0.325,-0.188],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.172,-0.04],[0,0],[0.305,0.176],[0,0],[0,0]],\"o\":[[0,0],[0,0],[-0.246,-0.048],[0,0],[0.17,0.084],[0,0],[0,0],[0,0],[0,0],[0,0],[0.184,0.036],[0,0],[-0.117,-0.053],[0,0],[0,0],[0,0]],\"v\":[[92.91,-14.04],[92.147,-13.599],[87.95,-14.424],[87.409,-14.542],[87.4,-14.536],[88.143,-14.129],[90.604,-12.708],[89.889,-12.296],[85.411,-14.881],[86.226,-15.351],[90.285,-14.547],[90.819,-14.433],[90.828,-14.439],[90.195,-14.783],[87.718,-16.213],[88.432,-16.625]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0.167,0.084],[0,0],[-0.098,-0.093],[0,0]],\"o\":[[0,0],[-0.139,-0.049],[0,0],[0.123,0.08],[0,0],[0,0]],\"v\":[[86.463,-12.362],[84.598,-13.023],[84.138,-13.223],[84.119,-13.212],[84.451,-12.952],[85.603,-11.866]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[89.47,-12.053],[88.646,-11.578],[87.41,-12.015],[86.216,-11.326],[86.976,-10.614],[86.156,-10.14],[82.9,-13.431],[83.798,-13.949]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.395,-0.228],[0.699,0.063],[0.672,0.388],[0.113,0.449],[-0.529,0.306],[-0.335,0.066],[0,0],[0.287,-0.166],[-0.071,-0.264],[-0.452,-0.261],[-0.439,-0.043],[-0.309,0.178],[-0.054,0.252]],\"o\":[[-0.086,0.233],[-0.516,0.298],[-0.699,-0.063],[-0.716,-0.413],[-0.114,-0.449],[0.328,-0.189],[0,0],[-0.404,0.026],[-0.316,0.182],[0.07,0.265],[0.433,0.25],[0.44,0.043],[0.295,-0.17],[0,0]],\"v\":[[85.772,-10.103],[85.049,-9.412],[83.228,-9.059],[81.171,-9.736],[79.926,-11.029],[80.55,-12.161],[81.544,-12.543],[82.515,-11.983],[81.478,-11.694],[81.112,-11.025],[81.895,-10.237],[83.204,-9.797],[84.328,-10.001],[84.851,-10.634]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[78.564,-10.928],[79.345,-10.477],[79.063,-10.315],[81.98,-8.631],[82.261,-8.793],[83.042,-8.342],[81.723,-7.581],[80.942,-8.031],[81.223,-8.194],[78.307,-9.878],[78.025,-9.715],[77.245,-10.166]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.027,0.129],[0.187,0.108],[0.351,-0.203]],\"o\":[[0,0],[0,0],[0.162,-0.094],[-0.027,-0.131],[-0.391,-0.226],[0,0]],\"v\":[[75.907,-8.521],[77.153,-7.801],[77.481,-7.991],[77.684,-8.325],[77.363,-8.684],[76.249,-8.718]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.105,0.019],[0.085,0.007],[0.065,-0.008],[0.047,-0.027],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.812,-0.469],[-0.096,-0.097],[-0.04,-0.099],[0.017,-0.098],[0.07,-0.092],[0,0],[-0.094,0],[-0.106,-0.011],[-0.111,-0.018],[-0.101,-0.021]],\"o\":[[0,0],[0,0],[-0.126,-0.028],[-0.104,-0.019],[-0.086,-0.007],[-0.066,0.008],[0,0],[0,0],[0,0],[0,0],[0,0],[0.816,-0.471],[0.156,0.09],[0.096,0.097],[0.041,0.1],[-0.015,0.098],[0,0],[0.071,-0.017],[0.093,0],[0.106,0.011],[0.112,0.019],[0,0]],\"v\":[[81.69,-7.562],[80.821,-7.06],[79.146,-7.423],[78.8,-7.494],[78.515,-7.533],[78.287,-7.532],[78.119,-7.479],[77.915,-7.361],[79.629,-6.372],[78.872,-5.935],[74.394,-8.52],[75.593,-9.213],[78.034,-9.216],[78.412,-8.935],[78.618,-8.641],[78.655,-8.345],[78.526,-8.061],[78.539,-8.053],[78.785,-8.079],[79.085,-8.063],[79.411,-8.019],[79.731,-7.96]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 12\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[78.334,-5.624],[76.319,-4.461],[71.842,-7.046],[73.778,-8.165],[74.599,-7.691],[73.419,-7.009],[74.416,-6.434],[75.514,-7.068],[76.332,-6.596],[75.234,-5.962],[76.258,-5.37],[77.516,-6.097]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 13\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":13,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.331,0.213],[0,0],[-0.089,-0.087],[0,0],[0,0],[0,0],[0.383,0.166],[0,0],[-0.333,-0.192],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.239,-0.109],[0,0],[0.136,0.133],[0,0],[0,0]],\"o\":[[0,0],[0,0],[-0.289,-0.167],[0,0],[0.236,0.181],[0,0],[0,0],[0,0],[-0.104,-0.035],[0,0],[0.461,0.243],[0,0],[0,0],[0,0],[0,0],[0,0],[0.267,0.091],[0,0],[-0.204,-0.167],[0,0],[0,0],[0,0]],\"v\":[[75.556,-4.021],[74.809,-3.589],[72.13,-5.136],[71.2,-5.706],[71.181,-5.695],[71.668,-5.292],[73.926,-3.08],[73.308,-2.723],[69.494,-4],[68.764,-4.299],[68.743,-4.287],[69.935,-3.634],[72.411,-2.205],[71.729,-1.811],[67.251,-4.396],[68.359,-5.036],[71.7,-3.9],[72.459,-3.599],[72.473,-3.607],[71.961,-4.058],[69.998,-5.982],[71.078,-6.606]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 14\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":14,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0.167,0.084],[0,0],[-0.098,-0.093],[0,0]],\"o\":[[0,0],[-0.139,-0.049],[0,0],[0.123,0.08],[0,0],[0,0]],\"v\":[[68.303,-1.878],[66.438,-2.538],[65.978,-2.738],[65.96,-2.727],[66.291,-2.468],[67.443,-1.381]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[71.31,-1.569],[70.486,-1.093],[69.25,-1.53],[68.056,-0.841],[68.816,-0.129],[67.996,0.344],[64.741,-2.947],[65.638,-3.465]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 15\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":15,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":15,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[107.823,-8.198],[78.477,8.745],[57.211,-3.533],[86.557,-20.475]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.282352954149,0.537254929543,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-14.564,42.744],[-15.265,44.767],[-18.069,43.149]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.01,-0.006],[-0.031,-0.132],[-0.189,-0.109],[-0.252,-0.025],[-0.128,0.024],[-0.042,0.016],[-0.023,0.039],[0.044,0.146],[0.192,0.111],[0.229,0.018],[0.142,-0.082],[0.011,-0.01]],\"o\":[[-0.017,0.007],[-0.14,0.081],[0.032,0.132],[0.192,0.111],[0.252,0.026],[0.067,-0.013],[0.027,-0.025],[0.039,-0.073],[-0.043,-0.146],[-0.189,-0.109],[-0.229,-0.018],[-0.008,0.005],[0,0]],\"v\":[[1.942,29.471],[1.901,29.49],[1.738,29.809],[2.069,30.172],[2.735,30.376],[3.305,30.379],[3.471,30.336],[3.546,30.241],[3.539,29.912],[3.186,29.527],[2.559,29.335],[2.002,29.431],[1.973,29.453]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.327,0.189],[0.057,0.236],[0.332,0.191],[0.424,0.043],[0.419,-0.138],[-0.08,-0.245],[-0.335,-0.194],[-0.408,-0.034]],\"o\":[[0.325,-0.188],[-0.057,-0.236],[-0.335,-0.194],[-0.426,-0.046],[-0.241,0.243],[0.076,0.244],[0.332,0.191],[0.408,0.034]],\"v\":[[6.96,32.35],[7.361,31.715],[6.778,31.073],[5.639,30.719],[4.372,30.857],[4.13,31.59],[4.748,32.245],[5.857,32.583]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.506,-0.292],[0.707,0.059],[0.57,0.329],[-0.016,0.658],[0.428,0.247],[0.079,0.306],[-0.325,0.188],[0,0],[-0.531,-0.045],[-0.42,-0.242],[-0.089,-0.398],[-0.702,-0.405],[-0.102,-0.408]],\"o\":[[-0.506,0.292],[-0.707,-0.059],[-0.702,-0.405],[-0.676,-0.07],[-0.42,-0.242],[-0.079,-0.306],[0,0],[0.325,-0.188],[0.531,0.045],[0.428,0.247],[1.171,-0.018],[0.57,0.329],[0.102,0.408]],\"v\":[[7.832,32.854],[6.012,33.204],[4.096,32.622],[3.067,31.026],[1.412,30.551],[0.664,29.729],[1.033,28.989],[1.134,28.93],[2.418,28.716],[3.843,29.147],[4.619,30.116],[7.429,30.698],[8.438,31.803]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.002,0.386],[0,0.273],[0.086,0.264],[0.332,0.191],[0.409,0.033],[0.249,-0.144],[-0.056,-0.237],[-0.454,-0.305],[0,0],[0.084,0.326],[-0.426,0.246],[-0.704,-0.059],[-0.573,-0.331],[-0.127,-0.411],[0,-0.283],[-0.001,-0.348],[-0.158,-0.127],[0,0],[0,0],[0,0]],\"o\":[[0.002,-0.386],[0.001,-0.273],[-0.085,-0.264],[-0.332,-0.191],[-0.409,-0.033],[-0.245,0.142],[0.05,0.202],[0,0],[-0.504,-0.367],[-0.104,-0.409],[0.43,-0.248],[0.704,0.059],[0.565,0.326],[0.081,0.261],[-0.001,0.284],[-0.003,0.302],[0,0],[0,0],[0,0],[-0.936,-0.673]],\"v\":[[0.789,34.428],[0.793,33.44],[0.666,32.635],[0.041,31.951],[-1.07,31.614],[-2.057,31.78],[-2.34,32.347],[-1.584,33.108],[-2.532,33.298],[-3.413,32.259],[-2.929,31.276],[-1.228,30.992],[0.689,31.577],[1.727,32.682],[1.849,33.499],[1.85,34.446],[2.083,35.09],[4.428,33.736],[5.284,34.23],[2.189,36.017]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-5.424,32.811],[-4.712,32.4],[-0.366,37.492],[-1.076,37.902]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.406,-0.234],[-0.5,-0.04],[-0.304,0.176],[0.071,0.289],[0.406,0.234],[0.5,0.04],[0.302,-0.175],[-0.071,-0.289]],\"o\":[[0.406,0.234],[0.5,0.041],[0.302,-0.175],[-0.07,-0.289],[-0.406,-0.234],[-0.5,-0.041],[-0.304,0.176],[0.07,0.289]],\"v\":[[-6.237,38.302],[-4.878,38.715],[-3.671,38.512],[-3.323,37.817],[-4.037,37.032],[-5.396,36.62],[-6.6,36.821],[-6.951,37.517]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.337,-0.556],[-0.424,0.245],[-0.658,-0.054],[-0.647,-0.374],[-0.115,-0.461],[0.486,-0.28],[0.799,0.064],[0.786,0.452],[0,0],[0.275,0.522],[0.27,0.778],[0,0]],\"o\":[[-0.08,-0.258],[0.425,-0.246],[0.799,0.067],[0.645,0.372],[0.115,0.461],[-0.483,0.279],[-0.771,-0.065],[0,0],[-0.776,-0.448],[-0.276,-0.525],[0,0],[0.285,1.027]],\"v\":[[-7.693,37.034],[-7.178,36.28],[-5.553,35.993],[-3.383,36.655],[-2.244,37.904],[-2.799,39.015],[-4.722,39.337],[-7.058,38.562],[-7.07,38.555],[-8.647,37.1],[-9.466,35.145],[-8.627,34.66]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.5,0.041],[0.305,-0.176],[-0.07,-0.289],[-0.403,-0.233],[0,0],[-0.5,-0.04],[-0.302,0.175],[0.07,0.289],[0.406,0.234]],\"o\":[[-0.403,-0.233],[-0.5,-0.04],[-0.302,0.175],[0.07,0.289],[0,0],[0.406,0.234],[0.5,0.04],[0.305,-0.176],[-0.071,-0.289],[0,0]],\"v\":[[-10.038,38.174],[-11.393,37.764],[-12.601,37.967],[-12.948,38.662],[-12.238,39.444],[-10.226,40.605],[-8.867,41.018],[-7.664,40.817],[-7.312,40.12],[-8.027,39.336]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.114,-0.461],[0.486,-0.28],[0.799,0.066],[0.645,0.372],[0,0],[0.114,0.461],[-0.483,0.279],[-0.8,-0.066],[-0.645,-0.372]],\"o\":[[0.645,0.372],[0.114,0.461],[-0.483,0.279],[-0.799,-0.066],[0,0],[-0.645,-0.372],[-0.115,-0.462],[0.486,-0.28],[0.799,0.066],[0,0]],\"v\":[[-7.372,38.958],[-6.235,40.208],[-6.792,41.321],[-8.715,41.64],[-10.881,40.983],[-12.892,39.822],[-14.03,38.572],[-13.477,37.461],[-11.549,37.139],[-9.384,37.796]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.266,-0.149],[-0.494,-0.285],[-0.488,0.17],[-0.667,-0.385],[0.388,-0.224],[0.652,0.169],[0,0],[-0.285,0.165],[0.548,0.316],[0.478,-0.164],[0.569,0.329],[-0.382,0.22],[-0.683,-0.13]],\"o\":[[-0.531,-0.112],[-0.272,0.157],[0.393,0.227],[0.562,-0.192],[0.694,0.404],[-0.362,0.209],[0,0],[0.518,0.134],[0.285,-0.164],[-0.461,-0.269],[-0.535,0.181],[-0.664,-0.372],[0.331,-0.191],[0,0]],\"v\":[[-17.931,46.251],[-19.052,46.414],[-19.129,47.182],[-17.837,47.108],[-16.038,47.095],[-16.091,48.124],[-17.714,48.286],[-17.66,48.133],[-16.308,47.999],[-16.221,47.195],[-17.646,47.253],[-19.298,47.29],[-19.273,46.287],[-17.899,46.1]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-20.507,48.696],[-19.147,47.912],[-18.932,48.036],[-20.291,48.821],[-19.073,49.524],[-17.608,48.678],[-17.378,48.811],[-19.019,49.758],[-22.108,47.974],[-20.507,47.05],[-20.282,47.18],[-21.707,48.003]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0.43,0.252],[0.385,-0.222],[0,0]],\"o\":[[0,0],[0.404,-0.234],[-0.358,-0.211],[0,0],[0,0]],\"v\":[[-22.554,50.188],[-21.732,49.714],[-21.882,48.949],[-23.186,48.851],[-24.028,49.337]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.341,0.197],[-0.484,-0.276],[0.507,-0.293]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.341,-0.197],[0.504,-0.291],[0.507,0.288],[0,0]],\"v\":[[-19.488,50.029],[-19.724,50.165],[-21.695,49.953],[-22.328,50.318],[-21.159,50.994],[-21.338,51.097],[-24.427,49.313],[-23.406,48.724],[-21.682,48.84],[-21.49,49.819]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-22.169,51.577],[-25.259,49.793],[-25.083,49.692],[-21.994,51.475]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.772,-0.446]],\"o\":[[0,0],[0,0],[0.772,-0.446],[0,0]],\"v\":[[-27.078,51.098],[-25.494,52.013],[-24.656,51.529],[-26.24,50.614]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[-0.338,0.195],[1.008,-0.582]],\"o\":[[0,0],[0,0],[0,0],[0.338,-0.195],[1.008,-0.582],[0,0]],\"v\":[[-25.277,52.138],[-24.209,52.755],[-24.388,52.858],[-27.478,51.074],[-26.46,50.487],[-24.439,51.654]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-28.095,51.436],[-27.903,51.326],[-27.899,51.328],[-27.191,52.647],[-24.76,53.068],[-24.756,53.07],[-24.968,53.193],[-27.129,52.81],[-26.466,54.058],[-26.678,54.18],[-26.682,54.178],[-27.41,52.773],[-29.695,52.365],[-29.7,52.363],[-29.504,52.25],[-27.482,52.606]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-30.027,54.193],[-28.668,53.408],[-28.452,53.533],[-29.811,54.318],[-28.594,55.021],[-27.128,54.175],[-26.899,54.307],[-28.539,55.255],[-31.629,53.471],[-30.028,52.547],[-29.802,52.677],[-31.228,53.5]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.672,0.376],[0.669,-0.387]],\"o\":[[0,0],[0,0],[0.69,-0.398],[-0.654,-0.366],[0,0]],\"v\":[[-29.419,46.336],[-26.785,47.856],[-26.179,47.506],[-26.531,46.151],[-28.813,45.985]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.772,-0.43],[0.813,-0.469],[0.262,-0.151],[0,0],[-0.261,0.151]],\"o\":[[0.799,0.446],[-0.261,0.151],[0,0],[0.262,-0.151],[0.785,-0.453]],\"v\":[[-26.352,46.047],[-25.949,47.639],[-26.734,48.092],[-29.824,46.309],[-29.038,45.855]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0.43,0.252],[0.385,-0.222],[0,0]],\"o\":[[0,0],[0.404,-0.234],[-0.358,-0.211],[0,0],[0,0]],\"v\":[[-30.269,48.522],[-29.446,48.048],[-29.597,47.283],[-30.901,47.185],[-31.742,47.671]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.341,0.197],[-0.484,-0.276],[0.507,-0.293]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.341,-0.197],[0.504,-0.291],[0.507,0.288],[0,0]],\"v\":[[-27.203,48.363],[-27.439,48.499],[-29.41,48.287],[-30.043,48.652],[-28.874,49.328],[-29.053,49.431],[-32.142,47.647],[-31.121,47.058],[-29.397,47.174],[-29.205,48.153]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-30.962,49.402],[-33.465,48.676],[-32.209,50.122]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-29.657,49.78],[-30.672,49.489],[-32.058,50.289],[-31.55,50.873],[-31.743,50.984],[-33.791,48.599],[-33.595,48.486],[-29.465,49.669]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.305,-0.176],[0.837,0.48],[-0.795,0.459],[-0.541,-0.044],[0,0],[0.262,-0.151],[-0.745,-0.426],[-0.669,0.387],[0.061,0.265]],\"o\":[[0.077,0.312],[-0.782,0.451],[-0.832,-0.473],[0.305,-0.176],[0,0],[-0.464,-0.038],[-0.676,0.39],[0.73,0.414],[0.262,-0.151],[0,0]],\"v\":[[-32.378,50.856],[-32.76,51.612],[-35.515,51.399],[-35.92,49.788],[-34.611,49.567],[-34.592,49.72],[-35.708,49.91],[-35.352,51.294],[-32.981,51.485],[-32.648,50.839]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":11,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.733,-0.423],[-2.621,-1.513],[-0.767,0.443],[2.545,1.469]],\"o\":[[-0.782,0.452],[2.468,1.425],[0.748,-0.432],[-2.545,-1.469]],\"v\":[[60.933,-23.727],[63.69,-20.779],[68.543,-19.306],[65.849,-22.158]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.973,-0.562],[3.659,2.113],[0.466,0.88],[-1.004,0.58],[-3.72,-2.148],[-0.466,-0.871]],\"o\":[[-1.954,1.128],[-1.898,-1.096],[-0.466,-0.879],[1.908,-1.102],[1.852,1.069],[0.466,0.871]],\"v\":[[70.333,-18.207],[61.914,-19.683],[58.367,-22.647],[59.174,-24.835],[67.616,-23.266],[71.093,-20.356]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0.032,-0.139],[0.068,-0.137],[0.105,-0.129],[0.134,-0.107],[0,0],[-0.131,0.405],[0.005,0.391]],\"o\":[[0,0],[0,0],[0,0],[0.018,0.125],[-0.03,0.139],[-0.069,0.136],[-0.106,0.128],[0,0],[0.286,-0.377],[0.131,-0.405],[0,0]],\"v\":[[53.645,-21.714],[64.835,-15.253],[63.032,-14.212],[54.559,-19.104],[54.539,-18.709],[54.39,-18.296],[54.128,-17.898],[53.767,-17.545],[51.737,-18.717],[52.363,-19.889],[52.551,-21.082]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.733,-0.423],[-2.621,-1.513],[-0.767,0.443],[2.545,1.469]],\"o\":[[-0.782,0.452],[2.468,1.425],[0.748,-0.432],[-2.545,-1.469]],\"v\":[[47.445,-15.939],[50.202,-12.992],[55.055,-11.519],[52.361,-14.37]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.973,-0.562],[3.659,2.113],[0.466,0.88],[-1.004,0.58],[-3.72,-2.148],[-0.466,-0.871]],\"o\":[[-1.954,1.128],[-1.898,-1.096],[-0.466,-0.879],[1.908,-1.102],[1.852,1.069],[0.466,0.871]],\"v\":[[56.845,-10.42],[48.426,-11.896],[44.879,-14.859],[45.686,-17.048],[54.128,-15.479],[57.605,-12.568]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.224,0.129],[0.3,0.111],[0.274,0.048],[0.242,-0.019],[0.164,-0.095],[0.041,-0.129],[-0.066,-0.148],[-0.171,-0.16],[-0.26,-0.15],[-0.276,-0.097],[-0.25,-0.032],[-0.215,0.034],[-0.168,0.097],[-0.047,0.123],[0.049,0.136],[0.142,0.142]],\"o\":[[-0.28,-0.161],[-0.301,-0.112],[-0.273,-0.048],[-0.241,0.019],[-0.157,0.091],[-0.04,0.129],[0.064,0.147],[0.171,0.16],[0.285,0.165],[0.274,0.097],[0.25,0.032],[0.217,-0.034],[0.16,-0.093],[0.045,-0.124],[-0.049,-0.136],[-0.143,-0.141]],\"v\":[[43.699,-11.458],[42.829,-11.868],[41.968,-12.107],[41.195,-12.15],[40.587,-11.98],[40.291,-11.651],[40.33,-11.236],[40.682,-10.774],[41.327,-10.309],[42.167,-9.917],[42.954,-9.724],[43.653,-9.727],[44.229,-9.923],[44.539,-10.246],[44.534,-10.636],[44.248,-11.053]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.809,-0.467],[-0.605,-0.535],[-0.222,-0.483],[0.161,-0.418],[0.561,-0.324],[0.77,-0.115],[0,0],[-0.606,0.35],[0.213,0.529],[1.064,0.619],[0,0],[0.74,-0.427],[0.452,-0.067],[0.506,0.052],[0.528,0.171],[0.493,0.285],[0.331,0.355],[0.087,0.343],[-0.17,0.312],[-0.431,0.249],[-0.586,0.072],[-0.688,-0.108],[-0.768,-0.291]],\"o\":[[0.972,0.561],[0.606,0.535],[0.222,0.483],[-0.16,0.419],[-0.672,0.388],[0,0],[0.808,-0.032],[0.622,-0.359],[-0.214,-0.529],[0,0],[0.355,0.623],[-0.336,0.194],[-0.452,0.067],[-0.505,-0.051],[-0.529,-0.171],[-0.575,-0.332],[-0.333,-0.354],[-0.087,-0.343],[0.169,-0.312],[0.447,-0.258],[0.587,-0.071],[0.688,0.108],[0.769,0.291]],\"v\":[[46.808,-11.772],[49.174,-10.129],[50.415,-8.602],[50.507,-7.25],[49.426,-6.136],[47.264,-5.381],[45.279,-6.527],[47.401,-7.1],[48.014,-8.432],[46.096,-10.154],[46.046,-10.143],[45.468,-8.566],[44.286,-8.175],[42.848,-8.152],[41.298,-8.486],[39.764,-9.169],[38.404,-10.199],[37.775,-11.247],[37.898,-12.23],[38.798,-13.071],[40.348,-13.565],[42.259,-13.509],[44.442,-12.91]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.194,-0.112],[-0.221,-0.069],[-0.212,-0.021],[-0.192,0.028],[-0.134,0.077],[-0.047,0.11],[0.037,0.125],[0.116,0.127],[0.194,0.112],[0.221,0.07],[0.214,0.02],[0.192,-0.028],[0.137,-0.079],[0.047,-0.112],[-0.039,-0.122],[-0.123,-0.126]],\"o\":[[0.194,0.112],[0.222,0.069],[0.213,0.021],[0.192,-0.028],[0.137,-0.079],[0.047,-0.11],[-0.037,-0.125],[-0.117,-0.126],[-0.198,-0.115],[-0.219,-0.07],[-0.214,-0.02],[-0.192,0.028],[-0.145,0.084],[-0.046,0.112],[0.038,0.121],[0.122,0.126]],\"v\":[[31.028,-4.972],[31.651,-4.701],[32.302,-4.566],[32.909,-4.576],[33.396,-4.735],[33.673,-5.018],[33.687,-5.37],[33.457,-5.748],[32.992,-6.105],[32.363,-6.382],[31.712,-6.517],[31.104,-6.505],[30.61,-6.343],[30.323,-6.05],[30.312,-5.699],[30.554,-5.328]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.234,-0.135],[-0.256,-0.082],[-0.244,-0.018],[-0.221,0.042],[-0.183,0.106],[-0.071,0.129],[0.03,0.141],[0.138,0.15],[0.244,0.141],[0.256,0.082],[0.253,0.022],[0.233,-0.035],[0.183,-0.105],[0.07,-0.132],[-0.039,-0.146],[-0.138,-0.15]],\"o\":[[0.249,0.144],[0.256,0.081],[0.244,0.018],[0.22,-0.042],[0.175,-0.101],[0.07,-0.129],[-0.03,-0.141],[-0.137,-0.15],[-0.219,-0.126],[-0.256,-0.081],[-0.251,-0.022],[-0.234,0.035],[-0.172,0.099],[-0.07,0.131],[0.037,0.145],[0.137,0.15]],\"v\":[[35.623,-2.027],[36.381,-1.689],[37.131,-1.541],[37.829,-1.577],[38.434,-1.8],[38.804,-2.145],[38.864,-2.55],[38.612,-2.986],[38.039,-3.423],[37.328,-3.734],[36.566,-3.89],[35.838,-3.87],[35.213,-3.659],[34.851,-3.313],[34.803,-2.898],[35.066,-2.455]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.463,0.267],[0.215,0.201],[0.109,0.217],[-0.011,0.226],[-0.149,0.227],[0.659,0.116],[0.524,0.302],[0.224,0.282],[0.026,0.284],[-0.178,0.27],[-0.382,0.221],[-0.47,0.103],[-0.492,-0.013],[-0.481,-0.128],[-0.412,-0.238],[-0.181,-0.386],[0.157,-0.408],[-0.393,0.007],[-0.382,-0.062],[-0.356,-0.126],[-0.31,-0.179],[-0.243,-0.303],[-0.02,-0.309],[0.204,-0.294],[0.431,-0.249],[0.508,-0.119],[0.533,0.01],[0.529,0.138]],\"o\":[[-0.305,-0.176],[-0.216,-0.202],[-0.108,-0.216],[0.009,-0.226],[-0.691,0.081],[-0.659,-0.116],[-0.417,-0.241],[-0.224,-0.282],[-0.027,-0.284],[0.177,-0.27],[0.389,-0.224],[0.469,-0.104],[0.492,0.013],[0.481,0.128],[0.519,0.3],[0.18,0.386],[0.39,-0.084],[0.394,-0.006],[0.382,0.062],[0.357,0.126],[0.468,0.27],[0.243,0.303],[0.019,0.309],[-0.204,0.294],[-0.424,0.245],[-0.507,0.12],[-0.533,-0.01],[-0.529,-0.138]],\"v\":[[34.118,-0.92],[33.337,-1.487],[32.85,-2.115],[32.703,-2.778],[32.94,-3.458],[30.916,-3.509],[29.14,-4.137],[28.178,-4.921],[27.801,-5.77],[28.028,-6.601],[28.866,-7.337],[30.154,-7.829],[31.596,-7.966],[33.054,-7.754],[34.394,-7.206],[35.444,-6.177],[35.48,-4.986],[36.653,-5.121],[37.816,-5.039],[38.922,-4.757],[39.923,-4.298],[40.989,-3.437],[41.384,-2.519],[41.107,-1.615],[40.154,-0.8],[38.757,-0.255],[37.198,-0.09],[35.606,-0.312]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.481,-0.613],[-0.529,-0.561],[-0.62,-0.538],[-0.797,-0.574],[0,0],[0.613,0.557],[0.51,0.561],[0.422,0.567],[0.359,0.569],[0,0],[0,0],[0,0]],\"o\":[[0.514,0.72],[0.481,0.612],[0.529,0.562],[0.62,0.539],[0,0],[-0.744,-0.552],[-0.614,-0.557],[-0.509,-0.56],[-0.422,-0.567],[0,0],[0,0],[0,0],[0,0]],\"v\":[[26.568,-4.195],[28.061,-2.196],[29.576,-0.436],[31.299,1.214],[33.423,2.883],[31.534,3.974],[29.5,2.31],[27.815,0.634],[26.419,-1.059],[25.248,-2.762],[21.435,-0.561],[19.466,-1.698],[25.179,-4.997]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.27,0.156],[0.721,-0.416],[0.052,-0.124],[-0.052,-0.141],[-0.149,-0.145],[-0.244,-0.141],[-0.287,-0.104],[-0.274,-0.046],[-0.235,0.018],[-0.164,0.095],[-0.042,0.128],[0.066,0.146],[0.176,0.159]],\"o\":[[-1.176,-0.679],[-0.164,0.095],[-0.052,0.124],[0.053,0.14],[0.15,0.146],[0.27,0.156],[0.287,0.104],[0.272,0.045],[0.235,-0.018],[0.164,-0.095],[0.043,-0.128],[-0.068,-0.147],[-0.178,-0.159]],\"v\":[[24.216,4.171],[21.37,3.778],[21.046,4.106],[21.045,4.503],[21.348,4.931],[21.939,5.362],[22.774,5.752],[23.616,5.976],[24.378,6.016],[24.977,5.847],[25.286,5.513],[25.251,5.103],[24.886,4.644]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.509,-0.294],[-0.327,-0.352],[-0.092,-0.344],[0.151,-0.314],[0.412,-0.238],[0.593,-0.078],[0.688,0.106],[0.764,0.287],[0.799,0.461],[0.592,0.543],[0.222,0.501],[-0.161,0.436],[-0.573,0.331],[-0.55,0.088],[0,0],[0.493,-0.285],[0.091,-0.234],[-0.113,-0.27],[-0.308,-0.295],[-0.496,-0.295],[0,0],[-0.759,0.438],[-0.438,0.064],[-0.493,-0.06],[-0.523,-0.179]],\"o\":[[0.539,0.311],[0.327,0.352],[0.09,0.344],[-0.152,0.314],[-0.462,0.266],[-0.594,0.078],[-0.686,-0.105],[-0.764,-0.287],[-0.942,-0.544],[-0.592,-0.542],[-0.223,-0.5],[0.16,-0.437],[0.633,-0.366],[0,0],[-0.732,0.058],[-0.305,0.176],[-0.091,0.234],[0.112,0.27],[0.309,0.295],[0,0],[-0.328,-0.639],[0.34,-0.196],[0.438,-0.064],[0.492,0.059],[0.524,0.179]],\"v\":[[25.832,3.062],[27.131,4.056],[27.76,5.1],[27.67,6.086],[26.824,6.913],[25.241,7.43],[23.32,7.389],[21.143,6.8],[18.798,5.677],[16.497,4.048],[15.276,2.483],[15.184,1.078],[16.283,-0.072],[18.058,-0.753],[20.073,0.411],[18.237,0.924],[17.643,1.54],[17.677,2.296],[18.308,3.143],[19.515,4.029],[19.55,4.009],[20.196,2.393],[21.362,2.002],[22.758,1.994],[24.282,2.352]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.854,-0.128],[0,0],[-0.633,0.366],[0.034,0.331],[0.519,0.3],[1.149,-0.664],[0.467,-0.37],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.214,0.124],[-1.068,-0.065],[-0.997,-0.576],[-0.131,-0.732],[0.973,-0.562]],\"o\":[[0,0],[1.019,-0.059],[0.477,-0.275],[-0.033,-0.33],[-1.084,-0.626],[-0.424,0.245],[0,0],[0,0],[0,0],[0,0],[0,0],[0.263,-0.187],[0.844,-0.487],[1.068,0.065],[1.104,0.637],[0.131,0.733],[-0.79,0.456]],\"v\":[[16.905,12.094],[14.844,10.904],[17.322,10.266],[17.987,9.357],[17.158,8.413],[13.809,8.469],[12.473,9.39],[6.676,5.686],[11.021,3.177],[12.991,4.314],[10.025,6.026],[12.101,7.357],[12.817,6.891],[15.683,6.259],[18.781,7.221],[20.633,9.275],[19.37,11.217]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.106,-0.251],[0,0],[0,0],[-0.182,-0.286],[-0.156,-0.288],[-0.133,-0.279]],\"o\":[[0,0],[0,0],[0.198,0.268],[0.182,0.285],[0.157,0.289],[0.132,0.279]],\"v\":[[4.193,15.088],[6.15,13.957],[2.326,11.749],[2.895,12.58],[3.402,13.441],[3.836,14.294]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.223,0.521],[0.278,0.527],[0.329,0.505],[0.358,0.428]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.157,-0.456],[-0.223,-0.521],[-0.279,-0.527],[-0.331,-0.506],[0,0]],\"v\":[[0.899,9.021],[7.799,13.005],[8.784,12.437],[10.586,13.477],[9.601,14.045],[11.845,15.341],[10.196,16.293],[7.952,14.997],[4.374,17.063],[2.489,15.974],[1.92,14.509],[1.168,12.938],[0.255,11.39],[-0.778,9.99]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.896,-0.094],[0,0],[-0.733,0.423],[0.007,0.301],[0.473,0.273],[0.583,-0.031],[0.558,-0.322],[0,0],[0,0],[0,0],[0.947,0.546],[0.821,-0.474],[0.046,-0.573],[0,0],[-0.767,0.443],[-0.971,-0.021],[-0.804,-0.464],[0.726,-0.837],[0,0],[-0.801,-0.074],[-0.677,-0.391],[-0.034,-0.668],[0.988,-0.57]],\"o\":[[0,0],[1.084,-0.009],[0.462,-0.267],[-0.007,-0.301],[-0.489,-0.282],[-0.583,0.032],[0,0],[0,0],[0,0],[1.068,-0.617],[-0.89,-0.514],[-0.549,0.317],[0,0],[0.19,-0.556],[0.84,-0.485],[0.971,0.021],[1.43,0.826],[0,0],[0.676,-0.279],[0.802,0.075],[1.023,0.591],[0.035,0.667],[-0.847,0.489]],\"v\":[[-0.038,21.787],[-2.137,20.575],[0.588,19.928],[1.27,19.075],[0.55,18.213],[-1.058,17.837],[-2.769,18.367],[-3.53,18.806],[-5.378,17.74],[-4.673,17.333],[-4.49,15.588],[-7.057,15.527],[-7.95,16.863],[-9.919,15.726],[-8.484,14.227],[-5.768,13.531],[-3.105,14.259],[-2.049,16.752],[-2.011,16.774],[0.206,16.468],[2.424,17.166],[4.009,19.054],[2.579,20.911]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.142,-0.082],[0,0],[0,0],[0,0],[0,0],[0.304,0.338],[0.14,0.328],[0.018,0.303],[-0.01,0.258],[0.027,0.225],[0.081,0.19],[0.15,0.157],[0.239,0.138],[0.438,0.024],[0.409,-0.236],[-0.103,-0.804],[0,0],[-0.897,0.518],[-0.476,0.107],[-0.499,-0.024],[-0.505,-0.153],[-0.473,-0.273],[-0.275,-0.294],[-0.128,-0.296],[-0.016,-0.3],[0.022,-0.3],[-0.001,-0.196],[-0.035,-0.17],[-0.081,-0.135]],\"o\":[[0,0],[0,0],[0,0],[0,0],[-0.56,-0.323],[-0.304,-0.339],[-0.139,-0.327],[-0.019,-0.304],[0.011,-0.271],[-0.028,-0.225],[-0.083,-0.191],[-0.151,-0.157],[-0.468,-0.27],[-0.438,-0.024],[-0.706,0.408],[0,0],[0.098,-0.768],[0.416,-0.24],[0.474,-0.107],[0.499,0.024],[0.504,0.152],[0.504,0.291],[0.276,0.293],[0.128,0.296],[0.015,0.299],[-0.01,0.206],[0.001,0.197],[0.036,0.171],[0.081,0.135]],\"v\":[[-6.637,23.702],[-3.156,21.693],[-1.156,22.847],[-6.618,26],[-7.442,25.524],[-8.738,24.532],[-9.404,23.532],[-9.641,22.586],[-9.654,21.742],[-9.678,20.998],[-9.841,20.375],[-10.19,19.853],[-10.774,19.41],[-12.133,18.969],[-13.402,19.288],[-14.306,21.105],[-16.428,19.88],[-14.936,17.952],[-13.599,17.432],[-12.139,17.307],[-10.633,17.571],[-9.167,18.209],[-7.999,19.085],[-7.393,19.97],[-7.178,20.864],[-7.188,21.764],[-7.203,22.367],[-7.148,22.917],[-6.973,23.376]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0.032,-0.139],[0.068,-0.137],[0.105,-0.129],[0.134,-0.107],[0,0],[-0.131,0.405],[0.005,0.391]],\"o\":[[0,0],[0,0],[0,0],[0.018,0.125],[-0.03,0.139],[-0.069,0.136],[-0.106,0.128],[0,0],[0.286,-0.377],[0.131,-0.405],[0,0]],\"v\":[[-20.264,20.958],[-9.074,27.418],[-10.877,28.46],[-19.35,23.568],[-19.37,23.963],[-19.519,24.376],[-19.781,24.773],[-20.142,25.127],[-22.172,23.954],[-21.546,22.782],[-21.358,21.589]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 12\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.733,-0.423],[-2.621,-1.513],[-0.767,0.443],[2.545,1.469]],\"o\":[[-0.782,0.452],[2.468,1.425],[0.748,-0.432],[-2.545,-1.469]],\"v\":[[-29.699,28.6],[-26.941,31.547],[-22.088,33.02],[-24.783,30.168]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.973,-0.562],[3.659,2.113],[0.466,0.88],[-1.004,0.58],[-3.72,-2.148],[-0.466,-0.871]],\"o\":[[-1.954,1.128],[-1.898,-1.096],[-0.466,-0.879],[1.908,-1.102],[1.852,1.069],[0.466,0.871]],\"v\":[[-20.298,34.119],[-28.718,32.643],[-32.264,29.679],[-31.458,27.491],[-23.015,29.06],[-19.538,31.97]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 13\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":13,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.733,-0.423],[-2.621,-1.513],[-0.767,0.443],[2.545,1.469]],\"o\":[[-0.782,0.452],[2.468,1.425],[0.748,-0.432],[-2.545,-1.469]],\"v\":[[-36.442,32.493],[-33.685,35.44],[-28.832,36.913],[-31.527,34.062]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.973,-0.562],[3.659,2.113],[0.466,0.88],[-1.004,0.58],[-3.72,-2.148],[-0.466,-0.871]],\"o\":[[-1.954,1.128],[-1.898,-1.096],[-0.466,-0.879],[1.908,-1.102],[1.852,1.069],[0.466,0.871]],\"v\":[[-27.042,38.013],[-35.462,36.537],[-39.008,33.573],[-38.202,31.385],[-29.759,32.953],[-26.282,35.864]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 14\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":14,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.733,-0.423],[-2.621,-1.513],[-0.767,0.443],[2.545,1.469]],\"o\":[[-0.782,0.452],[2.468,1.425],[0.748,-0.432],[-2.545,-1.469]],\"v\":[[-43.186,36.387],[-40.429,39.334],[-35.576,40.807],[-38.271,37.956]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.973,-0.562],[3.659,2.113],[0.466,0.88],[-1.004,0.58],[-3.72,-2.148],[-0.466,-0.871]],\"o\":[[-1.954,1.128],[-1.898,-1.096],[-0.466,-0.879],[1.908,-1.102],[1.852,1.069],[0.466,0.871]],\"v\":[[-33.786,41.906],[-42.206,40.43],[-45.752,37.467],[-44.945,35.278],[-36.503,36.847],[-33.026,39.758]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 15\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":15,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.27,0.156],[0.721,-0.416],[0.052,-0.124],[-0.052,-0.141],[-0.149,-0.145],[-0.244,-0.141],[-0.287,-0.104],[-0.274,-0.046],[-0.235,0.018],[-0.164,0.095],[-0.042,0.128],[0.066,0.146],[0.176,0.159]],\"o\":[[-1.176,-0.679],[-0.164,0.095],[-0.052,0.124],[0.053,0.14],[0.15,0.146],[0.27,0.156],[0.287,0.104],[0.272,0.045],[0.235,-0.018],[0.164,-0.095],[0.043,-0.128],[-0.068,-0.147],[-0.178,-0.159]],\"v\":[[-42.949,42.949],[-45.795,42.555],[-46.119,42.884],[-46.12,43.281],[-45.817,43.709],[-45.226,44.14],[-44.391,44.53],[-43.549,44.754],[-42.788,44.794],[-42.188,44.625],[-41.879,44.291],[-41.914,43.88],[-42.279,43.422]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.509,-0.294],[-0.327,-0.352],[-0.092,-0.344],[0.151,-0.314],[0.412,-0.238],[0.593,-0.078],[0.688,0.106],[0.764,0.287],[0.799,0.461],[0.592,0.543],[0.222,0.501],[-0.161,0.436],[-0.573,0.331],[-0.55,0.088],[0,0],[0.493,-0.285],[0.091,-0.234],[-0.113,-0.27],[-0.308,-0.295],[-0.496,-0.295],[0,0],[-0.759,0.438],[-0.438,0.064],[-0.493,-0.06],[-0.523,-0.179]],\"o\":[[0.539,0.311],[0.327,0.352],[0.09,0.344],[-0.152,0.314],[-0.462,0.266],[-0.594,0.078],[-0.686,-0.105],[-0.764,-0.287],[-0.942,-0.544],[-0.592,-0.542],[-0.223,-0.5],[0.16,-0.437],[0.633,-0.366],[0,0],[-0.732,0.058],[-0.305,0.176],[-0.091,0.234],[0.112,0.27],[0.309,0.295],[0,0],[-0.328,-0.639],[0.34,-0.196],[0.438,-0.064],[0.492,0.059],[0.524,0.179]],\"v\":[[-41.333,41.839],[-40.034,42.834],[-39.405,43.878],[-39.495,44.864],[-40.341,45.691],[-41.924,46.208],[-43.845,46.167],[-46.022,45.578],[-48.367,44.455],[-50.668,42.826],[-51.889,41.261],[-51.981,39.856],[-50.882,38.706],[-49.107,38.025],[-47.092,39.188],[-48.929,39.702],[-49.522,40.318],[-49.488,41.074],[-48.857,41.921],[-47.65,42.807],[-47.615,42.787],[-46.969,41.171],[-45.803,40.779],[-44.407,40.772],[-42.883,41.13]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 16\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":16,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":16,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[3.641,-2.102],[0,0],[4.205,2.428],[0,0],[-3.641,2.102],[0,0],[-4.205,-2.428],[0,0]],\"o\":[[0,0],[-3.641,2.102],[0,0],[-4.205,-2.428],[0,0],[3.641,-2.102],[0,0],[4.205,2.428]],\"v\":[[122.449,-8.666],[-15.009,70.696],[-29.216,70.107],[-121.429,16.868],[-122.449,8.666],[15.009,-70.696],[29.216,-70.107],[121.429,-16.868]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.705882370472,0.588235318661,0.392156869173,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-3.104,-1.846],[0,0],[-6.976,4.138],[0,0],[0.063,2.988],[0,0],[0,0],[2.93,1.686]],\"o\":[[0,0],[0,3.611],[0,0],[6.971,4.146],[0,0],[2.57,-1.525],[0,0],[0,0],[-2.934,1.679],[0,0]],\"v\":[[-124.027,9.948],[-124.885,12.742],[-119.878,21.544],[-32.063,72.075],[-11.922,72.768],[120.42,-4.208],[124.905,-9.965],[124.807,-12.792],[-17.224,66.141],[-26.692,66.13]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.647058844566,0.537254929543,0.368627458811,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":-8,\"op\":503,\"st\":53,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":3,\"nm\":\"Gold card\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.357},\"t\":110,\"s\":[198.606,437.626,0],\"to\":[0,-39.931,0],\"ti\":[0,22.708,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":140,\"s\":[198.606,294.266,0],\"to\":[0,-26.667,0],\"ti\":[0,22.708,0]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":160,\"s\":[198.606,294.266,0],\"to\":[0,-26.667,0],\"ti\":[0,6.961,0]},{\"t\":190,\"s\":[198.606,437.626,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-441.394,94.266,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ip\":-8,\"op\":503,\"st\":53,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Shadow 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":85,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[198.101,480.826,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-441.899,120.826,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-1.976,-0.929],[0,0],[-6.598,3.318],[0,0],[0.402,2.571],[0,0],[0,0.05],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-2.813,1.151],[0,0],[0,0]],\"v\":[[-553.555,75.836],[-551.899,79.804],[-454.234,136.608],[-443.124,136.148],[-305.051,55.792],[-302.567,51.683],[-303.154,39.269],[-444.688,121.411],[-453.97,121.38],[-553.131,64.204]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.745098054409,0.674509823322,0.521568655968,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shadow\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":-8,\"op\":503,\"st\":53,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"Shadow\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[198.101,480.826,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-441.899,120.826,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.179},\"t\":110,\"s\":[{\"i\":[[0,0],[-2.101,-0.992],[0,0],[-4.688,1.789],[0,0],[0.497,5.286],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-552.899,65.586],[-551.242,69.554],[-454.422,125.171],[-443.312,124.711],[-304.801,43.98],[-302.747,38.464],[-302.883,37.332],[-552.955,62.955]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0},\"t\":140,\"s\":[{\"i\":[[0,0],[-2.101,-0.992],[0,0],[-4.688,1.789],[0,0],[0.497,5.286],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-552.899,65.586],[-551.242,69.554],[-454.422,125.171],[-443.312,124.711],[-304.801,43.98],[-302.747,38.464],[-302.985,-107.043],[-552.423,-82.358]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":147,\"s\":[{\"i\":[[0,0],[-2.101,-0.992],[0,0],[-4.688,1.789],[0,0],[0.497,5.286],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-552.899,65.586],[-551.242,69.554],[-454.422,125.171],[-443.312,124.711],[-304.801,43.98],[-302.747,38.464],[-302.985,-114.543],[-552.798,-87.483]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":154,\"s\":[{\"i\":[[0,0],[-2.101,-0.992],[0,0],[-4.688,1.789],[0,0],[0.497,5.286],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-552.899,65.586],[-551.242,69.554],[-454.422,125.171],[-443.312,124.711],[-304.801,43.98],[-302.747,38.464],[-302.985,-100.009],[-552.496,-75.373]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":160,\"s\":[{\"i\":[[0,0],[-2.101,-0.992],[0,0],[-4.688,1.789],[0,0],[0.497,5.286],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-552.899,65.586],[-551.242,69.554],[-454.422,125.171],[-443.312,124.711],[-304.801,43.98],[-302.747,38.464],[-302.985,-107.043],[-552.298,-79.858]],\"c\":true}]},{\"t\":190,\"s\":[{\"i\":[[0,0],[-2.101,-0.992],[0,0],[-4.688,1.789],[0,0],[0.497,5.286],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-552.899,65.586],[-551.242,69.554],[-454.422,125.171],[-443.312,124.711],[-304.801,43.98],[-302.747,38.464],[-302.883,37.332],[-552.955,62.955]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.745098054409,0.674509823322,0.521568655968,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":15,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shadow\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[3.641,-2.102],[0,0],[4.205,2.428],[0,0],[-3.641,2.102],[0,0],[-4.205,-2.428],[0,0]],\"o\":[[0,0],[-3.641,2.102],[0,0],[-4.205,-2.428],[0,0],[3.641,-2.102],[0,0],[4.205,2.428]],\"v\":[[122.449,-8.666],[-15.009,70.696],[-29.216,70.107],[-121.429,16.868],[-122.449,8.666],[15.009,-70.696],[29.216,-70.107],[121.429,-16.868]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.701960784314,0.630720549939,0.484490577847,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-428,53],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":-8,\"op\":503,\"st\":53,\"bm\":0}]},{\"id\":\"comp_1\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Shape Layer 4\",\"parent\":3,\"td\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-379.5,-50,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[3.641,-2.102],[0,0],[4.205,2.428],[0,0],[-3.641,2.102],[0,0],[-4.205,-2.428],[0,0]],\"o\":[[0,0],[-3.641,2.102],[0,0],[-4.205,-2.428],[0,0],[3.641,-2.102],[0,0],[4.205,2.428]],\"v\":[[122.449,-8.666],[-15.009,70.696],[-29.216,70.107],[-121.429,16.868],[-122.449,8.666],[15.009,-70.696],[29.216,-70.107],[121.429,-16.868]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.847058832645,0.839215695858,0.831372559071,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[380.25,50.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":-21,\"op\":429,\"st\":-21,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"light\",\"parent\":3,\"tt\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":20,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.357},\"t\":60,\"s\":[-101.359,59.03,0],\"to\":[33.708,-19.542,0],\"ti\":[-33.708,19.542,0]},{\"i\":{\"x\":0.667,\"y\":0.667},\"o\":{\"x\":0.333,\"y\":0.333},\"t\":90,\"s\":[100.891,-58.22,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":110,\"s\":[100.891,-58.22,0],\"to\":[-33.708,19.542,0],\"ti\":[33.708,-19.542,0]},{\"t\":140,\"s\":[-101.359,59.03,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-21.859,12.78,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[59.03,27.725],[32.778,42.881],[-102.748,-2.822],[-77.637,-17.32]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":-21,\"op\":429,\"st\":-21,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"mastercard\",\"parent\":4,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-426.5,68.641,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.28,0.144],[0,0],[20.407,-24.706],[7.175,-4.143],[8.886,-2.43],[0.018,-0.004],[3.105,-0.488],[3.252,-0.816],[3.223,-1.479],[1.941,-6.909],[0,0],[-6.761,3.103],[-9.548,1.508],[-15.198,18.398]],\"o\":[[0,0],[-0.274,0.14],[-5.032,6.091],[-9.834,5.678],[-0.018,0.004],[-4.393,1.201],[-4.056,0.643],[-4.292,1.082],[-6.725,3.088],[0,0],[2.137,-6.853],[5.775,-2.649],[13.841,-2.184],[20.496,-24.818]],\"v\":[[50.573,-57.805],[51.074,-57.487],[2.936,-18.457],[-15.933,-3.152],[-45.444,8.887],[-45.497,8.899],[-56.924,11.418],[-67.844,13.591],[-79.022,17.405],[-94.852,32.212],[-95.546,31.812],[-79.462,17.059],[-57.015,10.968],[2.218,-18.601]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.607843160629,0.607843160629,0.607843160629,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":19,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.262,0.133],[0,0],[20.407,-24.706],[7.169,-4.139],[8.797,-2.439],[0.024,-0.008],[3.221,-0.507],[3.294,-0.834],[0.053,-0.012],[3.145,-1.446],[1.4,-7.555],[0,0],[-7.143,3.28],[-3.545,0.973],[-4.93,0.777],[-3.554,0.911],[-0.018,0.004],[-12.319,14.916]],\"o\":[[0,0],[-0.262,0.133],[-5.032,6.091],[-9.655,5.574],[-0.018,0.004],[-4.577,1.265],[-4.119,0.649],[-0.053,0.012],[-4.158,1.06],[-7.112,3.263],[0,0],[1.64,-7.488],[2.782,-1.279],[3.783,-1.049],[2.601,-0.41],[0.018,-0.004],[15.333,-3.938],[20.491,-24.821]],\"v\":[[51.547,-57.214],[52.067,-56.914],[5.115,-18.556],[-13.754,-3.251],[-42.789,8.658],[-42.854,8.677],[-54.745,11.319],[-65.817,13.532],[-65.97,13.571],[-76.843,17.306],[-92.95,33.31],[-93.68,32.889],[-77.283,16.96],[-67.844,13.591],[-54.836,10.869],[-45.497,8.899],[-45.444,8.887],[4.397,-18.7]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.607843160629,0.607843160629,0.607843160629,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":19,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.25,0.126],[0,0],[20.407,-24.706],[7.175,-4.143],[8.797,-2.439],[0.041,-0.012],[3.198,-0.506],[3.258,-0.819],[3.206,-1.475],[0.756,-8.24],[0,0],[-7.529,3.455],[-3.419,0.961],[-0.053,0.012],[-5.006,0.791],[-3.744,0.972],[-0.018,0.004],[-12.197,14.766]],\"o\":[[0,0],[-0.25,0.126],[-5.032,6.091],[-9.649,5.571],[-0.047,0.009],[-4.554,1.258],[-4.079,0.644],[-4.274,1.078],[-7.493,3.44],[0,0],[1.034,-8.157],[2.709,-1.243],[0.053,-0.012],[3.819,-1.064],[2.717,-0.428],[0.024,-0.008],[15.318,-3.989],[20.491,-24.821]],\"v\":[[52.551,-56.635],[53.076,-56.331],[7.294,-18.655],[-11.581,-3.347],[-40.61,8.559],[-40.745,8.594],[-52.566,11.22],[-63.538,13.405],[-74.664,17.207],[-90.953,34.463],[-91.715,34.023],[-75.104,16.86],[-65.97,13.571],[-65.817,13.532],[-52.657,10.769],[-42.854,8.677],[-42.789,8.658],[6.577,-18.8]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.607843160629,0.607843160629,0.607843160629,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":19,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.243,0.122],[0,0],[20.401,-24.703],[7.175,-4.143],[8.79,-2.436],[0.041,-0.012],[3.21,-0.506],[3.294,-0.834],[0.018,-0.004],[3.175,-1.457],[-0.045,-8.972],[0,0],[-7.923,3.64],[-3.529,0.975],[-4.959,0.782],[-3.715,0.968],[-0.047,0.009],[-12.19,14.762]],\"o\":[[0,0],[-0.237,0.119],[-5.032,6.091],[-9.655,5.574],[-0.041,0.012],[-4.548,1.254],[-4.119,0.649],[-0.018,0.004],[-4.21,1.065],[-7.898,3.626],[0,0],[0.276,-8.872],[2.776,-1.275],[3.795,-1.056],[2.706,-0.427],[0.041,-0.012],[15.318,-3.989],[20.491,-24.821]],\"v\":[[53.554,-56.055],[54.08,-55.752],[9.473,-18.755],[-9.402,-3.446],[-38.43,8.459],[-38.566,8.495],[-50.387,11.121],[-61.459,13.333],[-61.501,13.345],[-72.485,17.108],[-88.825,35.692],[-89.629,35.228],[-72.925,16.761],[-63.538,13.405],[-50.484,10.674],[-40.745,8.594],[-40.61,8.559],[8.756,-18.899]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.607843160629,0.607843160629,0.607843160629,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":19,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.225,0.112],[0,0],[20.401,-24.703],[7.175,-4.143],[8.79,-2.436],[0.035,-0.008],[3.203,-0.502],[3.264,-0.823],[3.206,-1.475],[-0.993,-9.754],[0,0],[-8.322,3.822],[-3.465,0.963],[-0.018,0.004],[-5,0.787],[-3.715,0.968],[-0.041,0.012],[-12.191,14.762]],\"o\":[[0,0],[-0.231,0.115],[-5.032,6.091],[-9.655,5.575],[-0.041,0.012],[-4.565,1.258],[-4.074,0.647],[-4.274,1.078],[-8.303,3.811],[0,0],[-0.602,-9.628],[2.74,-1.26],[0.018,-0.004],[3.825,-1.067],[2.706,-0.427],[0.041,-0.012],[15.318,-3.989],[20.491,-24.821]],\"v\":[[54.583,-55.49],[55.084,-55.172],[11.652,-18.854],[-7.223,-3.545],[-36.251,8.36],[-36.369,8.392],[-48.207,11.022],[-59.175,13.21],[-70.306,17.009],[-86.571,36.993],[-87.432,36.496],[-70.746,16.662],[-61.501,13.345],[-61.459,13.333],[-48.305,10.575],[-38.566,8.495],[-38.43,8.459],[10.935,-18.998]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.607843160629,0.607843160629,0.607843160629,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":19,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.219,0.108],[0,0],[20.401,-24.703],[7.175,-4.143],[8.79,-2.436],[0.041,-0.012],[3.21,-0.506],[3.294,-0.834],[0.017,-0.004],[3.169,-1.453],[-2.114,-10.593],[0,0],[-8.733,4.011],[-3.528,0.969],[-4.953,0.779],[-3.715,0.968],[-0.041,0.012],[-12.191,14.769]],\"o\":[[0,0],[-0.218,0.102],[-5.032,6.091],[-9.655,5.575],[-0.041,0.012],[-4.548,1.254],[-4.119,0.649],[-0.018,0.004],[-4.216,1.069],[-8.715,4],[0,0],[-1.653,-10.441],[2.77,-1.272],[3.795,-1.056],[2.706,-0.427],[0.035,-0.008],[15.318,-3.989],[20.502,-24.822]],\"v\":[[55.556,-54.899],[56.082,-54.596],[13.831,-18.953],[-5.044,-3.644],[-34.072,8.261],[-34.208,8.297],[-46.029,10.923],[-57.101,13.135],[-57.143,13.147],[-68.127,16.91],[-84.169,38.38],[-85.094,37.846],[-68.567,16.563],[-59.175,13.21],[-46.126,10.476],[-36.369,8.392],[-36.251,8.36],[13.108,-19.1]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.607843160629,0.607843160629,0.607843160629,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":19,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.207,0.101],[0,0],[20.389,-24.696],[7.175,-4.143],[8.885,-2.424],[0.006,-0.004],[3.111,-0.492],[3.264,-0.823],[3.206,-1.475],[-3.431,-11.496],[0,0],[-9.151,4.203],[-3.465,0.963],[-0.018,0.004],[-5,0.787],[-3.715,0.968],[-0.041,0.012],[-12.185,14.765]],\"o\":[[0,0],[-0.212,0.098],[-5.032,6.091],[-9.834,5.678],[-0.006,0.004],[-4.404,1.202],[-4.074,0.647],[-4.274,1.078],[-9.138,4.196],[0,0],[-2.883,-11.314],[2.74,-1.26],[0.017,-0.004],[3.825,-1.068],[2.706,-0.427],[0.041,-0.012],[15.318,-3.989],[20.508,-24.825]],\"v\":[[56.555,-54.323],[57.086,-54.017],[16.01,-19.052],[-2.865,-3.743],[-32.382,8.292],[-32.405,8.3],[-43.849,10.824],[-54.817,13.011],[-65.948,16.81],[-81.6,39.863],[-82.598,39.287],[-66.388,16.464],[-57.143,13.147],[-57.101,13.135],[-43.947,10.376],[-34.208,8.297],[-34.072,8.261],[15.281,-19.196]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.607843160629,0.607843160629,0.607843160629,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":19,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.194,0.094],[0,0],[20.395,-24.699],[7.175,-4.143],[9.403,-1.485],[5.655,-2.597],[-4.605,-12.237],[0,0],[-9.592,4.403],[-3.528,0.969],[-4.953,0.778],[-3.565,0.912],[-0.006,0.004],[-12.314,14.919]],\"o\":[[0,0],[-0.189,0.097],[-5.032,6.091],[-14.714,8.495],[-9.415,1.485],[-9.483,4.352],[0,0],[-4.342,-12.256],[2.77,-1.271],[3.795,-1.056],[2.607,-0.413],[0.006,-0.004],[15.339,-3.935],[20.508,-24.825]],\"v\":[[57.564,-53.74],[58.084,-53.44],[18.189,-19.151],[-0.686,-3.842],[-41.67,10.724],[-63.769,16.711],[-78.83,41.462],[-79.913,40.837],[-64.209,16.365],[-54.817,13.011],[-41.768,10.277],[-32.405,8.3],[-32.382,8.292],[17.46,-19.295]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.607843160629,0.607843160629,0.607843160629,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":19,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":8,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-5.081,-2.933],[0,0],[1.231,-0.711],[-1.504,-1.117],[0,0],[0,0],[0,0],[-2.603,1.503]],\"o\":[[0,0],[-4.235,-2.445],[-1.852,1.069],[0,0],[0,0],[0,0],[-3.908,-2.256],[1.871,-1.08]],\"v\":[[21.471,-61.561],[20.24,-60.85],[12.647,-61.923],[13.176,-58.413],[14.647,-59.262],[16.068,-58.441],[13.28,-56.832],[11.226,-62.743]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.20000000298,0.20000000298,0.20000000298,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0.403,-0.232],[0,0],[0.56,0.191],[0,0],[0,0],[0,0],[0.161,0.155],[0,0]],\"o\":[[0,0],[0.331,0.324],[0,0],[-0.403,0.232],[0,0],[0,0],[0,0],[0.269,0.093],[0,0],[0,0]],\"v\":[[22.236,-61.145],[31.443,-52.134],[31.322,-51.197],[31.261,-51.162],[29.638,-51.092],[14.031,-56.408],[15.436,-57.219],[28.16,-52.811],[28.532,-53.026],[20.897,-60.372]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.20000000298,0.20000000298,0.20000000298,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-4.435,-2.561],[3.841,-2.217],[4.435,2.561],[-3.841,2.217]],\"o\":[[4.435,2.561],[-3.841,2.217],[-4.435,-2.561],[3.841,-2.217]],\"v\":[[97.313,-16.437],[98.388,-7.786],[83.404,-8.407],[82.328,-17.059]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.800000011921,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":66,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-4.435,-2.561],[3.841,-2.217],[4.435,2.561],[-3.841,2.217]],\"o\":[[4.435,2.561],[-3.841,2.217],[-4.435,-2.561],[3.841,-2.217]],\"v\":[[104.267,-20.453],[105.343,-11.801],[90.358,-12.422],[89.282,-21.074]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.913725495338,0.239215686917,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":66,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.581,-0.335],[-0.375,0.217],[0.557,0.322],[0.371,-0.214]],\"o\":[[0.568,0.328],[0.371,-0.214],[-0.546,-0.315],[-0.375,0.217]],\"v\":[[116.577,-13.511],[118.174,-13.365],[117.925,-14.29],[116.329,-14.43]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0.285,-0.164],[0.936,0.54],[-0.617,0.356],[-0.471,-0.113],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0.194,0.306],[-0.616,0.356],[-0.966,-0.558],[0.258,-0.149],[0,0],[0,0]],\"v\":[[115.801,-16.064],[119.818,-13.744],[119.401,-13.503],[118.927,-13.747],[118.695,-13.029],[116.133,-13.255],[115.733,-14.73],[116.984,-14.869],[115.358,-15.808]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.228,0.132],[-0.264,-0.013],[0,0],[0.163,-0.094],[-0.523,-0.302],[0,0],[0,0],[0,0]],\"o\":[[0,0],[-0.207,-0.299],[0.207,-0.119],[0,0],[-0.223,-0.004],[-0.306,0.177],[0,0],[0,0],[0,0],[0,0]],\"v\":[[113.414,-13.318],[113.818,-13.12],[114.006,-13.733],[114.773,-13.897],[115.087,-13.482],[114.54,-13.365],[114.743,-12.586],[116.277,-11.7],[115.833,-11.443],[113,-13.079]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.581,-0.335],[-0.379,0.219],[0.918,-0.53]],\"o\":[[0.586,0.338],[0.918,-0.53],[-0.379,0.219]],\"v\":[[111.989,-10.863],[113.621,-10.717],[111.741,-11.802]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.942,-0.544],[0,0],[0,0],[0.263,-0.152],[0.965,0.557],[-0.612,0.354],[-0.455,-0.108]],\"o\":[[0,0],[0.942,0.544],[0,0],[0,0],[0.219,0.291],[-0.615,0.361],[-0.949,-0.548],[0.302,-0.174],[0,0]],\"v\":[[111.967,-12.483],[112.397,-12.732],[115.231,-11.096],[114.808,-10.852],[114.328,-11.105],[114.129,-10.373],[111.545,-10.606],[111.167,-12.094],[112.402,-12.217]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.306,-0.177],[0.977,0.564],[-0.617,0.356],[-0.527,-0.04],[0,0],[0.168,-0.097],[-0.563,-0.325],[-0.367,0.212],[0.051,0.189]],\"o\":[[0.073,0.316],[-0.612,0.354],[-0.977,-0.564],[0.293,-0.169],[0,0],[-0.307,-0.022],[-0.384,0.222],[0.597,0.345],[0.181,-0.104],[0,0]],\"v\":[[112.382,-9.876],[112.019,-9.155],[109.41,-9.367],[109.042,-10.874],[110.228,-11.074],[110.341,-10.681],[109.61,-10.551],[109.854,-9.624],[111.444,-9.487],[111.684,-9.93]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.228,0.132],[-0.264,-0.013],[0,0],[0.163,-0.094],[-0.523,-0.302],[0,0],[0,0],[0,0]],\"o\":[[0,0],[-0.207,-0.299],[0.207,-0.119],[0,0],[-0.223,-0.004],[-0.306,0.177],[0,0],[0,0],[0,0],[0,0]],\"v\":[[106.698,-9.441],[107.102,-9.242],[107.29,-9.856],[108.057,-10.02],[108.372,-9.604],[107.825,-9.487],[108.027,-8.708],[109.561,-7.823],[109.117,-7.566],[106.284,-9.202]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.358,-0.206],[-0.38,-0.298]],\"o\":[[-0.474,-0.244],[-0.323,0.187],[0,0]],\"v\":[[106.544,-8.038],[105.231,-8.069],[105.255,-7.294]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.388,0.224],[0.066,0.188],[0,0],[0.328,-0.189],[0.908,0.524],[-0.663,0.383],[-1.074,-0.714]],\"o\":[[0.47,0.226],[0.216,-0.125],[0,0],[0.102,0.313],[-0.698,0.403],[-0.862,-0.498],[0.686,-0.396],[0,0]],\"v\":[[105.747,-7],[107.153,-6.99],[107.465,-7.522],[108.127,-7.472],[107.696,-6.666],[105.05,-6.87],[104.689,-8.367],[107.471,-7.995]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.207,0.119],[-0.028,0.083],[0,0],[0.151,-0.087],[0.666,0.385],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0.298,0.172],[0.087,-0.05],[0,0],[-0.06,0.134],[-0.444,0.276],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[101.893,-7.609],[102.715,-7.134],[103.336,-7.493],[103.847,-7.197],[103.222,-6.837],[104.573,-6.057],[105.344,-5.965],[105.518,-6.178],[106.153,-5.961],[105.853,-5.641],[104.129,-5.8],[102.778,-6.58],[102.369,-6.344],[101.857,-6.639],[102.267,-6.875],[101.508,-7.314]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.211,-0.122],[-0.224,-0.129],[-0.306,0.137],[-0.725,-0.423],[0.552,-0.319],[0.7,0.08],[0,0],[-0.256,0.141],[0.26,0.155],[0.354,-0.159],[0.631,0.359],[-0.396,0.229],[-0.519,-0.026]],\"o\":[[-0.375,-0.022],[-0.277,0.154],[0.24,0.134],[0.438,-0.2],[0.525,0.308],[-0.345,0.199],[0,0],[0.491,0.055],[0.212,-0.122],[-0.248,-0.149],[-0.453,0.201],[-0.627,-0.362],[0.328,-0.189],[0,0]],\"v\":[[101.927,-5.884],[101.102,-5.713],[100.989,-5.256],[101.812,-5.313],[103.604,-5.319],[103.595,-4.279],[102.103,-4.02],[101.916,-4.397],[103.081,-4.585],[103.166,-5.059],[102.284,-5.001],[100.567,-4.992],[100.588,-5.999],[101.786,-6.253]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.581,-0.335],[-0.379,0.219],[0.918,-0.53]],\"o\":[[0.586,0.338],[0.918,-0.53],[-0.379,0.219]],\"v\":[[98.863,-3.285],[100.495,-3.139],[98.616,-4.224]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.942,-0.544],[0,0],[0,0],[0.263,-0.152],[0.965,0.557],[-0.612,0.354],[-0.455,-0.108]],\"o\":[[0,0],[0.942,0.544],[0,0],[0,0],[0.219,0.291],[-0.615,0.361],[-0.949,-0.548],[0.302,-0.174],[0,0]],\"v\":[[98.841,-4.905],[99.272,-5.154],[102.105,-3.518],[101.683,-3.274],[101.202,-3.527],[101.003,-2.795],[98.419,-3.028],[98.041,-4.516],[99.277,-4.639]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0.315,-0.182],[-0.42,-0.242],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.224,0.129],[-0.541,-0.173],[-0.288,0.167],[-0.816,-0.471],[0,0],[0,0],[0,0],[0.315,-0.182],[-0.42,-0.242],[0,0]],\"o\":[[0,0],[-0.42,-0.242],[-0.314,0.181],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.19,-0.249],[0.272,-0.157],[-0.247,-0.342],[0.587,-0.339],[0,0],[0,0],[0,0],[-0.419,-0.242],[-0.314,0.181],[0,0],[0,0]],\"v\":[[97.513,-0.867],[95.956,-1.766],[94.69,-1.924],[94.948,-1.183],[96.505,-0.284],[96.061,-0.028],[93.222,-1.667],[93.636,-1.906],[94.046,-1.704],[94.215,-2.293],[95.452,-2.35],[95.617,-3.096],[97.828,-2.86],[99.397,-1.954],[98.948,-1.695],[97.379,-2.601],[96.157,-2.764],[96.404,-2.024],[97.962,-1.125]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":10,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.346,-0.193],[-0.643,-0.371],[-0.635,0.221],[-0.868,-0.501],[0.504,-0.291],[0.848,0.22],[0,0],[-0.371,0.214],[0.713,0.411],[0.623,-0.213],[0.741,0.428],[-0.496,0.286],[-0.889,-0.17]],\"o\":[[-0.691,-0.145],[-0.354,0.204],[0.511,0.295],[0.732,-0.249],[0.903,0.526],[-0.47,0.271],[0,0],[0.673,0.175],[0.37,-0.214],[-0.6,-0.351],[-0.695,0.236],[-0.864,-0.484],[0.431,-0.249],[0,0]],\"v\":[[41.456,30.339],[39.996,30.551],[39.898,31.55],[41.579,31.455],[43.92,31.438],[43.853,32.777],[41.742,32.987],[41.812,32.788],[43.571,32.614],[43.682,31.569],[41.828,31.643],[39.678,31.691],[39.709,30.385],[41.497,30.143]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[38.073,33.54],[39.84,32.519],[40.122,32.682],[38.354,33.702],[39.94,34.618],[41.845,33.518],[42.144,33.691],[40.011,34.922],[35.988,32.6],[38.07,31.398],[38.363,31.567],[36.509,32.637]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.508,33.779],[33.418,34.409],[33.142,34.249],[35.555,32.856],[35.832,33.015],[34.741,33.645],[38.482,35.805],[38.249,35.939]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[35.553,36.023],[32.295,35.077],[33.932,36.959]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[37.251,36.516],[35.931,36.137],[34.13,37.177],[34.79,37.936],[34.54,38.081],[31.871,34.977],[32.125,34.83],[37.501,36.371]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.348,36.759],[28.258,37.388],[27.982,37.229],[30.395,35.835],[30.671,35.995],[29.58,36.624],[33.321,38.784],[33.089,38.919]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.346,-0.193],[-0.643,-0.371],[-0.635,0.221],[-0.868,-0.501],[0.504,-0.291],[0.848,0.22],[0,0],[-0.371,0.214],[0.713,0.411],[0.623,-0.213],[0.741,0.428],[-0.496,0.286],[-0.889,-0.17]],\"o\":[[-0.691,-0.145],[-0.354,0.204],[0.511,0.295],[0.732,-0.249],[0.903,0.526],[-0.47,0.271],[0,0],[0.673,0.175],[0.37,-0.214],[-0.6,-0.351],[-0.695,0.236],[-0.864,-0.484],[0.431,-0.249],[0,0]],\"v\":[[28.215,37.984],[26.755,38.196],[26.657,39.195],[28.338,39.1],[30.678,39.083],[30.611,40.422],[28.5,40.632],[28.57,40.433],[30.329,40.259],[30.44,39.214],[28.586,39.288],[26.436,39.336],[26.468,38.03],[28.255,37.788]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.874,0.49],[0.871,-0.503]],\"o\":[[0,0],[0,0],[0.897,-0.518],[-0.852,-0.477],[0,0]],\"v\":[[21.747,41.16],[25.178,43.141],[25.967,42.685],[25.506,40.921],[22.536,40.704]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.006,-0.56],[1.056,-0.61],[0.341,-0.197],[0,0],[-0.341,0.197]],\"o\":[[1.04,0.58],[-0.341,0.197],[0,0],[0.341,-0.197],[1.022,-0.59]],\"v\":[[25.739,40.786],[26.266,42.858],[25.245,43.448],[21.222,41.125],[22.243,40.535]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[20.683,43.58],[22.45,42.559],[22.732,42.722],[20.964,43.742],[22.55,44.658],[24.455,43.558],[24.754,43.731],[22.621,44.962],[18.598,42.64],[20.68,41.438],[20.973,41.607],[19.119,42.677]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[17.118,43.819],[16.028,44.449],[15.752,44.289],[18.166,42.896],[18.442,43.055],[17.351,43.685],[21.092,45.845],[20.859,45.979]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[18.972,47.069],[14.95,44.746],[15.178,44.614],[19.201,46.937]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[12.016,46.44],[17.374,47.189],[14.046,45.268],[14.275,45.136],[18.297,47.458],[18.207,47.51],[12.851,46.767],[16.173,48.685],[15.94,48.82],[11.917,46.497]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[2.11,1.218],[0,0],[0,0],[0,0],[1.724,0.996],[0,0]],\"o\":[[0,0],[2.103,1.214],[0,0],[0,0],[0,0],[1.73,0.999],[0,0],[0,0]],\"v\":[[11.281,46.864],[13.78,48.308],[11.47,49.641],[8.971,48.198],[9.199,48.066],[11.699,49.509],[13.552,48.439],[11.052,46.996]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 12\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[4.857,50.573],[10.215,51.322],[6.887,49.401],[7.116,49.269],[11.138,51.592],[11.048,51.644],[5.691,50.901],[9.013,52.819],[8.781,52.953],[4.758,50.63]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 13\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":13,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[7.885,53.47],[3.862,51.148],[4.09,51.016],[8.113,53.338]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 14\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":14,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[3.252,54.287],[-0.333,53.576],[-0.338,53.573],[-0.066,53.416],[3.07,54.047],[1.98,52.234],[2.252,52.077],[2.258,52.08],[3.485,54.152],[5.094,55.082],[4.861,55.216]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 15\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":15,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-1.678,54.346],[2.052,56.499],[3.751,55.519],[4.043,55.688],[2.112,56.803],[-1.91,54.48]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 16\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":16,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-4.839,56.171],[0.518,56.92],[-2.809,54.999],[-2.581,54.868],[1.442,57.19],[1.352,57.242],[-4.005,56.499],[-0.683,58.417],[-0.916,58.551],[-4.938,56.229]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 17\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":17,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.953,-0.545],[-0.858,0.495],[0.908,0.524],[0.866,-0.5]],\"o\":[[0.912,0.522],[0.862,-0.498],[-0.931,-0.538],[-0.867,0.5]],\"v\":[[-6.295,59.335],[-3.209,59.623],[-3.705,57.839],[-6.789,57.556]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.082,-0.629],[1.013,-0.585],[1.063,0.614],[-1.017,0.587]],\"o\":[[1.053,0.613],[-1.013,0.585],[-1.08,-0.624],[1.017,-0.587]],\"v\":[[-3.475,57.713],[-2.922,59.789],[-6.53,59.463],[-7.077,57.39]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 18\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":18,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.874,0.49],[0.871,-0.503]],\"o\":[[0,0],[0,0],[0.897,-0.518],[-0.852,-0.477],[0,0]],\"v\":[[-12.141,60.725],[-8.711,62.706],[-7.921,62.251],[-8.382,60.486],[-11.352,60.27]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.006,-0.56],[1.056,-0.61],[0.341,-0.197],[0,0],[-0.341,0.197]],\"o\":[[1.04,0.58],[-0.341,0.197],[0,0],[0.341,-0.197],[1.022,-0.59]],\"v\":[[-8.15,60.352],[-7.622,62.423],[-8.644,63.013],[-12.667,60.691],[-11.645,60.101]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 19\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":19,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-9.514,63.515],[-13.536,61.193],[-13.308,61.061],[-9.285,63.383]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 20\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":20,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-15.678,62.429],[-11.948,64.582],[-10.249,63.602],[-9.957,63.771],[-11.887,64.886],[-15.91,62.563]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 21\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":21,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-14.264,64.785],[-17.523,63.84],[-15.885,65.721]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-12.566,65.278],[-13.886,64.899],[-15.688,65.939],[-15.027,66.699],[-15.277,66.843],[-17.947,63.739],[-17.693,63.592],[-12.316,65.133]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 22\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":22,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-19.389,64.572],[-16.596,67.618],[-16.846,67.762],[-22.122,66.149],[-21.872,66.005],[-17.078,67.484],[-19.639,64.716]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 23\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":23,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":23,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.557,0.322],[0.62,-0.358]],\"o\":[[0,0],[0,0],[0.627,-0.362],[-0.557,-0.322],[0,0]],\"v\":[[55.486,10.824],[57.715,12.112],[59.216,11.245],[58.996,10.085],[56.986,9.958]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.829,0.478],[-1.204,-0.695],[0.724,-0.729],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.829,-0.478],[1.242,-0.705],[0.956,0.552],[0,0],[0,0]],\"v\":[[64.872,12.037],[63.699,12.714],[59.847,12.248],[58.9,12.796],[61.229,14.14],[60.243,14.709],[53.266,10.681],[55.761,9.251],[59.952,9.498],[60.82,11.526],[64.782,11.985]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[2.319,1.339],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[-2.319,-1.339],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[59.477,15.152],[55.565,17.41],[48.597,13.387],[52.509,11.129],[53.783,11.864],[50.849,13.558],[52.452,14.484],[55.281,12.85],[56.506,13.557],[53.676,15.19],[55.249,16.098],[58.183,14.404]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[1.157,0.642],[1.135,-0.655],[0,0]],\"o\":[[0,0],[1.187,-0.685],[-1.107,-0.613],[0,0],[0,0]],\"v\":[[49.981,19.174],[51.056,18.553],[50.402,16.288],[46.597,15.979],[45.522,16.599]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.745,-0.981],[1.829,-1.056],[0.642,-0.371],[0,0],[-0.642,0.371]],\"o\":[[1.783,1.004],[-0.642,0.371],[0,0],[0.642,-0.371],[1.791,-1.034]],\"v\":[[51.39,15.729],[52.321,19.283],[50.268,20.468],[43.3,16.446],[45.353,15.26]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[39.987,18.358],[45.741,21.68],[48.428,20.128],[49.643,20.829],[45.97,22.95],[39.003,18.927]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.196,-0.665],[-1.231,0.711],[1.129,0.669],[1.232,-0.711]],\"o\":[[1.168,0.648],[1.232,-0.711],[-1.16,-0.687],[-1.231,0.711]],\"v\":[[37.438,23.933],[41.524,24.31],[40.855,21.949],[36.657,21.5]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.807,-1.06],[1.837,-1.06],[1.832,1.058],[-1.806,1.043]],\"o\":[[1.786,1.049],[-1.836,1.06],[-1.831,-1.057],[1.799,-1.039]],\"v\":[[41.805,21.378],[42.728,25.005],[36.448,24.482],[35.462,20.81]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[38.222,27.434],[35.406,25.808],[32.838,27.29],[35.654,28.917],[34.669,29.486],[27.702,25.463],[28.687,24.894],[31.623,26.589],[34.191,25.107],[31.255,23.412],[32.233,22.847],[39.2,26.87]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[1.157,0.642],[1.135,-0.655],[0,0]],\"o\":[[0,0],[1.187,-0.685],[-1.107,-0.613],[0,0],[0,0]],\"v\":[[29.053,31.257],[30.128,30.636],[29.473,28.371],[25.669,28.062],[24.594,28.682]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.745,-0.981],[1.829,-1.056],[0.642,-0.371],[0,0],[-0.642,0.371]],\"o\":[[1.783,1.004],[-0.642,0.371],[0,0],[0.642,-0.371],[1.791,-1.034]],\"v\":[[30.462,27.812],[31.392,31.366],[29.339,32.551],[22.372,28.529],[24.424,27.343]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.557,0.322],[0.62,-0.358]],\"o\":[[0,0],[0,0],[0.627,-0.362],[-0.557,-0.322],[0,0]],\"v\":[[19.62,31.531],[21.85,32.818],[23.351,31.952],[23.131,30.791],[21.121,30.665]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.829,0.478],[-1.204,-0.695],[0.724,-0.729],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.829,-0.478],[1.242,-0.705],[0.956,0.552],[0,0],[0,0]],\"v\":[[29.006,32.744],[27.834,33.421],[23.982,32.955],[23.035,33.502],[25.363,34.847],[24.378,35.416],[17.4,31.387],[19.896,29.958],[24.087,30.205],[24.955,32.232],[28.917,32.692]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[15.547,34.158],[17.543,36.431],[19.484,35.31]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[21.104,35.789],[18.372,37.367],[19.238,38.383],[18.17,39],[13.547,33.624],[14.622,33.003],[23.933,35.673],[22.858,36.293]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.754,-0.435],[1.82,1.042],[-1.889,1.09],[-1.244,-0.098],[0,0],[0.455,-0.263],[-1.172,-0.668],[-1.291,0.746],[0.115,0.463]],\"o\":[[0.169,0.718],[-1.941,1.121],[-1.828,-1.047],[0.709,-0.409],[0,0],[-0.791,-0.061],[-1.262,0.729],[1.162,0.663],[0.455,-0.263],[0,0]],\"v\":[[17.514,38.368],[16.563,40.112],[10.2,39.636],[9.297,35.917],[12.28,35.424],[12.47,36.292],[10.551,36.641],[11.17,39.076],[15.329,39.399],[15.935,38.232]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[1.157,0.642],[1.135,-0.655],[0,0]],\"o\":[[0,0],[1.187,-0.685],[-1.107,-0.613],[0,0],[0,0]],\"v\":[[6.677,44.175],[7.752,43.555],[7.098,41.289],[3.293,40.98],[2.218,41.601]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.745,-0.981],[1.829,-1.056],[0.642,-0.371],[0,0],[-0.642,0.371]],\"o\":[[1.783,1.004],[-0.642,0.371],[0,0],[0.642,-0.371],[1.791,-1.034]],\"v\":[[8.087,40.73],[9.017,44.285],[6.964,45.47],[-0.004,41.447],[2.049,40.262]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[5.129,46.529],[-1.839,42.507],[-0.861,41.942],[6.106,45.965]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 12\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-3.627,45.229],[-1.632,47.502],[0.309,46.381]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[1.929,46.86],[-0.803,48.437],[0.063,49.454],[-1.005,50.071],[-5.628,44.694],[-4.553,44.074],[4.758,46.743],[3.683,47.364]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 13\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":13,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[1.254,-0.724],[0,0]],\"o\":[[0,0],[1.261,-0.728],[0,0],[0,0]],\"v\":[[-7.78,50.224],[-6.302,49.371],[-8.771,47.945],[-10.249,48.799]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.561,-1.478],[0,0],[0,0],[0,0],[0,0],[-0.822,0.474]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0.821,-0.474],[2.553,-1.474]],\"v\":[[-5.098,50.066],[-6.576,50.92],[-4.526,52.103],[-5.511,52.672],[-12.479,48.649],[-10.025,47.221]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 14\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":14,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[2.319,1.339],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[-2.319,-1.339],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-6.27,53.11],[-10.181,55.369],[-17.149,51.346],[-13.238,49.088],[-11.963,49.823],[-14.897,51.517],[-13.294,52.442],[-10.465,50.809],[-9.241,51.516],[-12.07,53.149],[-10.498,54.057],[-7.564,52.363]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 15\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":15,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.557,0.322],[0.62,-0.358]],\"o\":[[0,0],[0,0],[0.627,-0.362],[-0.557,-0.322],[0,0]],\"v\":[[-19.953,54.379],[-17.723,55.666],[-16.222,54.8],[-16.442,53.639],[-18.452,53.512]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.829,0.478],[-1.204,-0.695],[0.724,-0.729],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.829,-0.478],[1.242,-0.705],[0.956,0.552],[0,0],[0,0]],\"v\":[[-10.567,55.591],[-11.739,56.268],[-15.591,55.803],[-16.538,56.35],[-14.21,57.694],[-15.195,58.263],[-22.173,54.235],[-19.677,52.805],[-15.486,53.053],[-14.618,55.08],[-10.656,55.539]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 16\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":16,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[1.254,-0.724],[0,0]],\"o\":[[0,0],[1.261,-0.728],[0,0],[0,0]],\"v\":[[-22.516,58.732],[-21.037,57.878],[-23.506,56.453],[-24.985,57.307]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.561,-1.478],[0,0],[0,0],[0,0],[0,0],[-0.822,0.474]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0.821,-0.474],[2.553,-1.474]],\"v\":[[-19.834,58.574],[-21.312,59.427],[-19.261,60.611],[-20.246,61.18],[-27.214,57.157],[-24.76,55.729]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 17\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":17,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":17,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.01,-0.006],[-0.031,-0.132],[-0.189,-0.109],[-0.252,-0.025],[-0.128,0.024],[-0.042,0.016],[-0.023,0.039],[0.044,0.146],[0.192,0.111],[0.229,0.018],[0.142,-0.082],[0.011,-0.01]],\"o\":[[-0.017,0.007],[-0.14,0.081],[0.032,0.132],[0.192,0.111],[0.252,0.026],[0.067,-0.013],[0.027,-0.025],[0.039,-0.073],[-0.043,-0.146],[-0.189,-0.109],[-0.229,-0.018],[-0.008,0.005],[0,0]],\"v\":[[-3.345,27.38],[-3.386,27.398],[-3.549,27.718],[-3.218,28.08],[-2.552,28.285],[-1.982,28.288],[-1.816,28.244],[-1.741,28.149],[-1.749,27.821],[-2.101,27.435],[-2.729,27.244],[-3.285,27.34],[-3.314,27.362]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.327,0.189],[0.057,0.236],[0.332,0.191],[0.424,0.043],[0.419,-0.138],[-0.08,-0.245],[-0.335,-0.194],[-0.408,-0.034]],\"o\":[[0.325,-0.188],[-0.057,-0.236],[-0.335,-0.194],[-0.426,-0.046],[-0.241,0.243],[0.076,0.244],[0.332,0.191],[0.408,0.034]],\"v\":[[1.673,30.259],[2.074,29.623],[1.491,28.982],[0.352,28.627],[-0.915,28.765],[-1.157,29.498],[-0.539,30.154],[0.57,30.492]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.506,-0.292],[0.707,0.059],[0.57,0.329],[-0.016,0.658],[0.428,0.247],[0.079,0.306],[-0.325,0.188],[0,0],[-0.531,-0.045],[-0.42,-0.242],[-0.089,-0.398],[-0.702,-0.405],[-0.102,-0.408]],\"o\":[[-0.506,0.292],[-0.707,-0.059],[-0.702,-0.405],[-0.676,-0.07],[-0.42,-0.242],[-0.079,-0.306],[0,0],[0.325,-0.188],[0.531,0.045],[0.428,0.247],[1.171,-0.018],[0.57,0.329],[0.102,0.408]],\"v\":[[2.545,30.762],[0.725,31.112],[-1.191,30.53],[-2.22,28.934],[-3.875,28.46],[-4.623,27.638],[-4.254,26.897],[-4.153,26.839],[-2.869,26.625],[-1.444,27.056],[-0.668,28.024],[2.142,28.606],[3.151,29.712]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.002,0.386],[0,0.273],[0.086,0.264],[0.332,0.191],[0.409,0.033],[0.249,-0.144],[-0.056,-0.237],[-0.454,-0.305],[0,0],[0.084,0.326],[-0.426,0.246],[-0.704,-0.059],[-0.573,-0.331],[-0.127,-0.411],[0,-0.283],[-0.001,-0.348],[-0.158,-0.127],[0,0],[0,0],[0,0]],\"o\":[[0.002,-0.386],[0.001,-0.273],[-0.085,-0.264],[-0.332,-0.191],[-0.409,-0.033],[-0.245,0.142],[0.05,0.202],[0,0],[-0.504,-0.367],[-0.104,-0.409],[0.43,-0.248],[0.704,0.059],[0.565,0.326],[0.081,0.261],[-0.001,0.284],[-0.003,0.302],[0,0],[0,0],[0,0],[-0.936,-0.673]],\"v\":[[-4.498,32.337],[-4.494,31.349],[-4.621,30.543],[-5.246,29.859],[-6.357,29.522],[-7.344,29.688],[-7.627,30.256],[-6.871,31.016],[-7.819,31.207],[-8.7,30.167],[-8.216,29.185],[-6.515,28.9],[-4.599,29.485],[-3.56,30.591],[-3.438,31.407],[-3.437,32.354],[-3.204,32.998],[-0.859,31.644],[-0.003,32.138],[-3.098,33.925]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-10.711,30.72],[-9.999,30.308],[-5.653,35.4],[-6.363,35.81]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.406,-0.234],[-0.5,-0.04],[-0.304,0.176],[0.071,0.289],[0.406,0.234],[0.5,0.04],[0.302,-0.175],[-0.071,-0.289]],\"o\":[[0.406,0.234],[0.5,0.041],[0.302,-0.175],[-0.07,-0.289],[-0.406,-0.234],[-0.5,-0.041],[-0.304,0.176],[0.07,0.289]],\"v\":[[-11.524,36.211],[-10.165,36.623],[-8.959,36.42],[-8.61,35.725],[-9.324,34.94],[-10.684,34.528],[-11.888,34.729],[-12.238,35.426]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.337,-0.556],[-0.424,0.245],[-0.658,-0.054],[-0.647,-0.374],[-0.115,-0.461],[0.486,-0.28],[0.799,0.064],[0.786,0.452],[0,0],[0.275,0.522],[0.27,0.778],[0,0]],\"o\":[[-0.08,-0.258],[0.425,-0.246],[0.799,0.067],[0.645,0.372],[0.115,0.461],[-0.483,0.279],[-0.771,-0.065],[0,0],[-0.776,-0.448],[-0.276,-0.525],[0,0],[0.285,1.027]],\"v\":[[-12.98,34.942],[-12.466,34.188],[-10.84,33.901],[-8.67,34.563],[-7.531,35.812],[-8.086,36.924],[-10.009,37.246],[-12.345,36.47],[-12.357,36.463],[-13.934,35.008],[-14.753,33.053],[-13.914,32.569]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.5,0.041],[0.305,-0.176],[-0.07,-0.289],[-0.403,-0.233],[0,0],[-0.5,-0.04],[-0.302,0.175],[0.07,0.289],[0.406,0.234]],\"o\":[[-0.403,-0.233],[-0.5,-0.04],[-0.302,0.175],[0.07,0.289],[0,0],[0.406,0.234],[0.5,0.04],[0.305,-0.176],[-0.071,-0.289],[0,0]],\"v\":[[-15.326,36.082],[-16.68,35.672],[-17.888,35.875],[-18.236,36.57],[-17.525,37.352],[-15.513,38.514],[-14.155,38.926],[-12.951,38.725],[-12.599,38.028],[-13.314,37.244]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.114,-0.461],[0.486,-0.28],[0.799,0.066],[0.645,0.372],[0,0],[0.114,0.461],[-0.483,0.279],[-0.8,-0.066],[-0.645,-0.372]],\"o\":[[0.645,0.372],[0.114,0.461],[-0.483,0.279],[-0.799,-0.066],[0,0],[-0.645,-0.372],[-0.115,-0.462],[0.486,-0.28],[0.799,0.066],[0,0]],\"v\":[[-12.659,36.866],[-11.522,38.116],[-12.079,39.229],[-14.003,39.548],[-16.168,38.892],[-18.18,37.73],[-19.317,36.48],[-18.764,35.369],[-16.837,35.048],[-14.671,35.705]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.252,-0.146],[-0.23,-0.133],[-0.322,0.135],[-0.737,-0.425],[0.517,-0.298],[0.737,0.227],[0,0],[-0.282,0.163],[0.336,0.194],[0.353,-0.152],[0.693,0.4],[-0.423,0.249],[-0.652,-0.174]],\"o\":[[-0.256,-0.056],[-0.325,0.187],[0.269,0.155],[0.564,-0.233],[0.688,0.397],[-0.474,0.274],[0,0],[0.443,0.137],[0.275,-0.159],[-0.291,-0.168],[-0.548,0.23],[-0.636,-0.367],[0.362,-0.209],[0,0]],\"v\":[[-19.253,41.443],[-20.147,41.563],[-20.217,42.077],[-19.312,42.003],[-17.394,42.031],[-17.384,43.162],[-19.153,43.307],[-19.041,42.952],[-17.898,42.857],[-17.827,42.282],[-18.819,42.329],[-20.666,42.315],[-20.668,41.277],[-19.143,41.105]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[1.028,0.594],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[-1.028,-0.594],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-18.748,43.858],[-20.485,44.861],[-23.574,43.077],[-21.838,42.074],[-21.273,42.401],[-22.575,43.152],[-21.864,43.563],[-20.608,42.838],[-20.066,43.151],[-21.322,43.876],[-20.624,44.279],[-19.322,43.527]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.247,0.143],[0.275,-0.159]],\"o\":[[0,0],[0,0],[0.279,-0.161],[-0.247,-0.143],[0,0]],\"v\":[[-24.819,44.423],[-23.831,44.994],[-23.165,44.609],[-23.261,44.094],[-24.153,44.039]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.368,0.212],[-0.534,-0.308],[0.322,-0.324],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.368,-0.212],[0.552,-0.313],[0.423,0.244],[0,0],[0,0]],\"v\":[[-20.656,44.959],[-21.176,45.26],[-22.885,45.054],[-23.305,45.297],[-22.273,45.893],[-22.71,46.146],[-25.804,44.36],[-24.696,43.725],[-22.837,43.834],[-22.453,44.733],[-20.695,44.937]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-23.558,46.635],[-26.648,44.852],[-26.214,44.601],[-23.124,46.385]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0.557,-0.322],[0,0]],\"o\":[[0,0],[0.561,-0.324],[0,0],[0,0]],\"v\":[[-26.808,46.845],[-26.151,46.466],[-27.246,45.834],[-27.902,46.213]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.137,-0.656],[0,0],[0,0],[0,0],[0,0],[-0.364,0.21]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0.365,-0.211],[1.134,-0.655]],\"v\":[[-25.617,46.774],[-26.273,47.153],[-25.364,47.678],[-25.802,47.93],[-28.891,46.147],[-27.801,45.513]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-29.651,46.586],[-29.17,46.308],[-29.143,46.324],[-28.429,47.643],[-26.075,48.068],[-26.058,48.078],[-26.549,48.362],[-28.303,48.034],[-27.735,49.047],[-28.226,49.33],[-28.243,49.32],[-28.982,47.963],[-31.265,47.549],[-31.292,47.533],[-30.811,47.255],[-29.079,47.586]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[1.028,0.594],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[-1.028,-0.594],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-28.474,49.473],[-30.21,50.476],[-33.3,48.692],[-31.563,47.689],[-30.998,48.016],[-32.3,48.767],[-31.59,49.178],[-30.334,48.452],[-29.791,48.766],[-31.047,49.491],[-30.35,49.894],[-29.047,49.142]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0.513,0.285],[0.504,-0.291],[0,0]],\"o\":[[0,0],[0.527,-0.304],[-0.491,-0.272],[0,0],[0,0]],\"v\":[[-28.724,42.85],[-28.247,42.575],[-28.535,41.57],[-30.224,41.433],[-30.701,41.709]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.774,-0.435],[0.813,-0.469],[0.285,-0.164],[0,0],[-0.285,0.164]],\"o\":[[0.791,0.446],[-0.285,0.164],[0,0],[0.285,-0.164],[0.796,-0.459]],\"v\":[[-28.097,41.321],[-27.686,42.898],[-28.597,43.424],[-31.686,41.641],[-30.775,41.115]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.247,0.143],[0.275,-0.159]],\"o\":[[0,0],[0,0],[0.279,-0.161],[-0.247,-0.143],[0,0]],\"v\":[[-32.908,42.973],[-31.92,43.544],[-31.254,43.159],[-31.35,42.644],[-32.242,42.589]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.368,0.212],[-0.534,-0.308],[0.322,-0.324],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.368,-0.212],[0.552,-0.313],[0.423,0.244],[0,0],[0,0]],\"v\":[[-28.745,43.51],[-29.265,43.81],[-30.974,43.604],[-31.395,43.847],[-30.362,44.443],[-30.8,44.696],[-33.893,42.91],[-32.786,42.275],[-30.926,42.384],[-30.542,43.283],[-28.784,43.487]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-34.717,44.14],[-33.833,45.148],[-32.971,44.65]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-32.252,44.862],[-33.465,45.563],[-33.082,46.014],[-33.556,46.287],[-35.605,43.903],[-35.128,43.627],[-30.997,44.81],[-31.474,45.085]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.335,-0.193],[0.806,0.462],[-0.838,0.484],[-0.552,-0.043],[0,0],[0.203,-0.117],[-0.52,-0.296],[-0.573,0.331],[0.05,0.205]],\"o\":[[0.075,0.319],[-0.862,0.498],[-0.811,-0.464],[0.315,-0.182],[0,0],[-0.351,-0.027],[-0.56,0.323],[0.515,0.294],[0.203,-0.117],[0,0]],\"v\":[[-33.847,46.007],[-34.27,46.781],[-37.092,46.571],[-37.492,44.921],[-36.167,44.702],[-36.084,45.087],[-36.935,45.242],[-36.662,46.322],[-34.817,46.465],[-34.547,45.947]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":11,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.733,-0.423],[-2.621,-1.513],[-0.767,0.443],[2.545,1.469]],\"o\":[[-0.782,0.452],[2.468,1.425],[0.748,-0.432],[-2.545,-1.469]],\"v\":[[59.434,-28.605],[62.191,-25.657],[67.044,-24.184],[64.349,-27.036]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.973,-0.562],[3.659,2.113],[0.466,0.88],[-1.004,0.58],[-3.72,-2.148],[-0.466,-0.871]],\"o\":[[-1.954,1.128],[-1.898,-1.096],[-0.466,-0.879],[1.908,-1.102],[1.852,1.069],[0.466,0.871]],\"v\":[[68.834,-23.085],[60.414,-24.561],[56.868,-27.525],[57.675,-29.713],[66.117,-28.144],[69.594,-25.234]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0.032,-0.139],[0.068,-0.137],[0.105,-0.129],[0.134,-0.107],[0,0],[-0.131,0.405],[0.005,0.391]],\"o\":[[0,0],[0,0],[0,0],[0.018,0.125],[-0.03,0.139],[-0.069,0.136],[-0.106,0.128],[0,0],[0.286,-0.377],[0.131,-0.405],[0,0]],\"v\":[[52.146,-26.592],[63.336,-20.131],[61.533,-19.09],[53.06,-23.982],[53.039,-23.587],[52.891,-23.174],[52.629,-22.776],[52.268,-22.423],[50.238,-23.595],[50.864,-24.767],[51.052,-25.96]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.733,-0.423],[-2.621,-1.513],[-0.767,0.443],[2.545,1.469]],\"o\":[[-0.782,0.452],[2.468,1.425],[0.748,-0.432],[-2.545,-1.469]],\"v\":[[45.946,-20.817],[48.703,-17.87],[53.556,-16.397],[50.862,-19.248]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.973,-0.562],[3.659,2.113],[0.466,0.88],[-1.004,0.58],[-3.72,-2.148],[-0.466,-0.871]],\"o\":[[-1.954,1.128],[-1.898,-1.096],[-0.466,-0.879],[1.908,-1.102],[1.852,1.069],[0.466,0.871]],\"v\":[[55.346,-15.298],[46.927,-16.774],[43.38,-19.737],[44.187,-21.926],[52.629,-20.357],[56.106,-17.446]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.224,0.129],[0.3,0.111],[0.274,0.048],[0.242,-0.019],[0.164,-0.095],[0.041,-0.129],[-0.066,-0.148],[-0.171,-0.16],[-0.26,-0.15],[-0.276,-0.097],[-0.25,-0.032],[-0.215,0.034],[-0.168,0.097],[-0.047,0.123],[0.049,0.136],[0.142,0.142]],\"o\":[[-0.28,-0.161],[-0.301,-0.112],[-0.273,-0.048],[-0.241,0.019],[-0.157,0.091],[-0.04,0.129],[0.064,0.147],[0.171,0.16],[0.285,0.165],[0.274,0.097],[0.25,0.032],[0.217,-0.034],[0.16,-0.093],[0.045,-0.124],[-0.049,-0.136],[-0.143,-0.141]],\"v\":[[42.2,-16.336],[41.33,-16.746],[40.469,-16.985],[39.696,-17.029],[39.088,-16.858],[38.792,-16.529],[38.83,-16.114],[39.183,-15.652],[39.828,-15.187],[40.668,-14.795],[41.454,-14.602],[42.154,-14.605],[42.73,-14.801],[43.04,-15.124],[43.035,-15.514],[42.749,-15.931]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.809,-0.467],[-0.605,-0.535],[-0.222,-0.483],[0.161,-0.418],[0.561,-0.324],[0.77,-0.115],[0,0],[-0.606,0.35],[0.213,0.529],[1.064,0.619],[0,0],[0.74,-0.427],[0.452,-0.067],[0.506,0.052],[0.528,0.171],[0.493,0.285],[0.331,0.355],[0.087,0.343],[-0.17,0.312],[-0.431,0.249],[-0.586,0.072],[-0.688,-0.108],[-0.768,-0.291]],\"o\":[[0.972,0.561],[0.606,0.535],[0.222,0.483],[-0.16,0.419],[-0.672,0.388],[0,0],[0.808,-0.032],[0.622,-0.359],[-0.214,-0.529],[0,0],[0.355,0.623],[-0.336,0.194],[-0.452,0.067],[-0.505,-0.051],[-0.529,-0.171],[-0.575,-0.332],[-0.333,-0.354],[-0.087,-0.343],[0.169,-0.312],[0.447,-0.258],[0.587,-0.071],[0.688,0.108],[0.769,0.291]],\"v\":[[45.308,-16.65],[47.674,-15.007],[48.916,-13.48],[49.008,-12.128],[47.927,-11.014],[45.764,-10.259],[43.78,-11.405],[45.902,-11.978],[46.515,-13.31],[44.597,-15.032],[44.547,-15.021],[43.969,-13.444],[42.786,-13.053],[41.349,-13.03],[39.798,-13.364],[38.265,-14.047],[36.905,-15.077],[36.276,-16.125],[36.399,-17.108],[37.299,-17.949],[38.849,-18.443],[40.76,-18.387],[42.943,-17.788]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.194,-0.112],[-0.221,-0.069],[-0.212,-0.021],[-0.192,0.028],[-0.134,0.077],[-0.047,0.11],[0.037,0.125],[0.116,0.127],[0.194,0.112],[0.221,0.07],[0.214,0.02],[0.192,-0.028],[0.137,-0.079],[0.047,-0.112],[-0.039,-0.122],[-0.123,-0.126]],\"o\":[[0.194,0.112],[0.222,0.069],[0.213,0.021],[0.192,-0.028],[0.137,-0.079],[0.047,-0.11],[-0.037,-0.125],[-0.117,-0.126],[-0.198,-0.115],[-0.219,-0.07],[-0.214,-0.02],[-0.192,0.028],[-0.145,0.084],[-0.046,0.112],[0.038,0.121],[0.122,0.126]],\"v\":[[29.529,-9.85],[30.152,-9.579],[30.803,-9.444],[31.41,-9.454],[31.897,-9.613],[32.174,-9.896],[32.188,-10.248],[31.958,-10.626],[31.492,-10.983],[30.864,-11.26],[30.213,-11.395],[29.605,-11.383],[29.111,-11.221],[28.824,-10.928],[28.813,-10.577],[29.055,-10.206]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.234,-0.135],[-0.256,-0.082],[-0.244,-0.018],[-0.221,0.042],[-0.183,0.106],[-0.071,0.129],[0.03,0.141],[0.138,0.15],[0.244,0.141],[0.256,0.082],[0.253,0.022],[0.233,-0.035],[0.183,-0.105],[0.07,-0.132],[-0.039,-0.146],[-0.138,-0.15]],\"o\":[[0.249,0.144],[0.256,0.081],[0.244,0.018],[0.22,-0.042],[0.175,-0.101],[0.07,-0.129],[-0.03,-0.141],[-0.137,-0.15],[-0.219,-0.126],[-0.256,-0.081],[-0.251,-0.022],[-0.234,0.035],[-0.172,0.099],[-0.07,0.131],[0.037,0.145],[0.137,0.15]],\"v\":[[34.124,-6.905],[34.882,-6.567],[35.632,-6.419],[36.33,-6.455],[36.935,-6.678],[37.305,-7.023],[37.364,-7.428],[37.112,-7.864],[36.54,-8.301],[35.828,-8.612],[35.066,-8.768],[34.339,-8.748],[33.714,-8.537],[33.351,-8.191],[33.304,-7.776],[33.567,-7.333]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.463,0.267],[0.215,0.201],[0.109,0.217],[-0.011,0.226],[-0.149,0.227],[0.659,0.116],[0.524,0.302],[0.224,0.282],[0.026,0.284],[-0.178,0.27],[-0.382,0.221],[-0.47,0.103],[-0.492,-0.013],[-0.481,-0.128],[-0.412,-0.238],[-0.181,-0.386],[0.157,-0.408],[-0.393,0.007],[-0.382,-0.062],[-0.356,-0.126],[-0.31,-0.179],[-0.243,-0.303],[-0.02,-0.309],[0.204,-0.294],[0.431,-0.249],[0.508,-0.119],[0.533,0.01],[0.529,0.138]],\"o\":[[-0.305,-0.176],[-0.216,-0.202],[-0.108,-0.216],[0.009,-0.226],[-0.691,0.081],[-0.659,-0.116],[-0.417,-0.241],[-0.224,-0.282],[-0.027,-0.284],[0.177,-0.27],[0.389,-0.224],[0.469,-0.104],[0.492,0.013],[0.481,0.128],[0.519,0.3],[0.18,0.386],[0.39,-0.084],[0.394,-0.006],[0.382,0.062],[0.357,0.126],[0.468,0.27],[0.243,0.303],[0.019,0.309],[-0.204,0.294],[-0.424,0.245],[-0.507,0.12],[-0.533,-0.01],[-0.529,-0.138]],\"v\":[[32.618,-5.798],[31.837,-6.365],[31.351,-6.993],[31.204,-7.656],[31.441,-8.336],[29.417,-8.387],[27.641,-9.015],[26.679,-9.799],[26.302,-10.648],[26.529,-11.479],[27.367,-12.215],[28.655,-12.707],[30.097,-12.844],[31.555,-12.632],[32.895,-12.084],[33.945,-11.055],[33.981,-9.864],[35.154,-9.999],[36.317,-9.917],[37.423,-9.635],[38.424,-9.176],[39.49,-8.315],[39.885,-7.397],[39.608,-6.493],[38.654,-5.678],[37.258,-5.133],[35.699,-4.968],[34.107,-5.19]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.481,-0.613],[-0.529,-0.561],[-0.62,-0.538],[-0.797,-0.574],[0,0],[0.613,0.557],[0.51,0.561],[0.422,0.567],[0.359,0.569],[0,0],[0,0],[0,0]],\"o\":[[0.514,0.72],[0.481,0.612],[0.529,0.562],[0.62,0.539],[0,0],[-0.744,-0.552],[-0.614,-0.557],[-0.509,-0.56],[-0.422,-0.567],[0,0],[0,0],[0,0],[0,0]],\"v\":[[25.069,-9.073],[26.562,-7.074],[28.077,-5.314],[29.8,-3.665],[31.924,-1.995],[30.035,-0.904],[28.001,-2.568],[26.316,-4.244],[24.92,-5.937],[23.749,-7.64],[19.936,-5.439],[17.967,-6.576],[23.68,-9.875]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.27,0.156],[0.721,-0.416],[0.052,-0.124],[-0.052,-0.141],[-0.149,-0.145],[-0.244,-0.141],[-0.287,-0.104],[-0.274,-0.046],[-0.235,0.018],[-0.164,0.095],[-0.042,0.128],[0.066,0.146],[0.176,0.159]],\"o\":[[-1.176,-0.679],[-0.164,0.095],[-0.052,0.124],[0.053,0.14],[0.15,0.146],[0.27,0.156],[0.287,0.104],[0.272,0.045],[0.235,-0.018],[0.164,-0.095],[0.043,-0.128],[-0.068,-0.147],[-0.178,-0.159]],\"v\":[[22.717,-0.707],[19.871,-1.1],[19.547,-0.772],[19.546,-0.375],[19.849,0.053],[20.44,0.484],[21.275,0.874],[22.117,1.098],[22.878,1.138],[23.478,0.969],[23.787,0.635],[23.752,0.224],[23.387,-0.234]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.509,-0.294],[-0.327,-0.352],[-0.092,-0.344],[0.151,-0.314],[0.412,-0.238],[0.593,-0.078],[0.688,0.106],[0.764,0.287],[0.799,0.461],[0.592,0.543],[0.222,0.501],[-0.161,0.436],[-0.573,0.331],[-0.55,0.088],[0,0],[0.493,-0.285],[0.091,-0.234],[-0.113,-0.27],[-0.308,-0.295],[-0.496,-0.295],[0,0],[-0.759,0.438],[-0.438,0.064],[-0.493,-0.06],[-0.523,-0.179]],\"o\":[[0.539,0.311],[0.327,0.352],[0.09,0.344],[-0.152,0.314],[-0.462,0.266],[-0.594,0.078],[-0.686,-0.105],[-0.764,-0.287],[-0.942,-0.544],[-0.592,-0.542],[-0.223,-0.5],[0.16,-0.437],[0.633,-0.366],[0,0],[-0.732,0.058],[-0.305,0.176],[-0.091,0.234],[0.112,0.27],[0.309,0.295],[0,0],[-0.328,-0.639],[0.34,-0.196],[0.438,-0.064],[0.492,0.059],[0.524,0.179]],\"v\":[[24.332,-1.816],[25.632,-0.822],[26.261,0.222],[26.171,1.208],[25.325,2.035],[23.742,2.552],[21.821,2.511],[19.644,1.922],[17.299,0.799],[14.998,-0.83],[13.777,-2.395],[13.685,-3.8],[14.784,-4.95],[16.559,-5.631],[18.574,-4.468],[16.737,-3.954],[16.144,-3.338],[16.178,-2.582],[16.809,-1.735],[18.016,-0.849],[18.05,-0.869],[18.697,-2.485],[19.863,-2.876],[21.259,-2.884],[22.783,-2.526]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.854,-0.128],[0,0],[-0.633,0.366],[0.034,0.331],[0.519,0.3],[1.149,-0.663],[0.467,-0.37],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.214,0.124],[-1.068,-0.065],[-0.997,-0.576],[-0.131,-0.732],[0.973,-0.562]],\"o\":[[0,0],[1.019,-0.059],[0.477,-0.275],[-0.033,-0.33],[-1.084,-0.626],[-0.424,0.245],[0,0],[0,0],[0,0],[0,0],[0,0],[0.263,-0.187],[0.844,-0.487],[1.068,0.065],[1.104,0.637],[0.131,0.733],[-0.79,0.456]],\"v\":[[15.406,7.216],[13.345,6.026],[15.823,5.388],[16.488,4.479],[15.659,3.535],[12.31,3.591],[10.974,4.512],[5.177,0.808],[9.522,-1.701],[11.492,-0.564],[8.526,1.148],[10.602,2.479],[11.318,2.013],[14.184,1.381],[17.281,2.343],[19.134,4.397],[17.871,6.339]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.106,-0.251],[0,0],[0,0],[-0.182,-0.286],[-0.156,-0.288],[-0.133,-0.279]],\"o\":[[0,0],[0,0],[0.198,0.268],[0.182,0.285],[0.157,0.289],[0.132,0.279]],\"v\":[[2.694,10.21],[4.652,9.079],[0.827,6.871],[1.396,7.702],[1.903,8.563],[2.337,9.415]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.223,0.521],[0.278,0.527],[0.329,0.505],[0.358,0.428]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.157,-0.456],[-0.223,-0.521],[-0.279,-0.527],[-0.331,-0.506],[0,0]],\"v\":[[-0.6,4.143],[6.301,8.127],[7.286,7.558],[9.087,8.598],[8.102,9.167],[10.346,10.463],[8.697,11.415],[6.453,10.119],[2.876,12.185],[0.99,11.096],[0.421,9.631],[-0.33,8.06],[-1.244,6.512],[-2.277,5.111]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.896,-0.094],[0,0],[-0.733,0.423],[0.007,0.301],[0.473,0.273],[0.583,-0.031],[0.558,-0.322],[0,0],[0,0],[0,0],[0.947,0.546],[0.821,-0.474],[0.046,-0.573],[0,0],[-0.767,0.443],[-0.971,-0.021],[-0.804,-0.464],[0.726,-0.837],[0,0],[-0.801,-0.074],[-0.677,-0.391],[-0.034,-0.668],[0.988,-0.57]],\"o\":[[0,0],[1.084,-0.009],[0.462,-0.267],[-0.007,-0.301],[-0.489,-0.282],[-0.583,0.032],[0,0],[0,0],[0,0],[1.068,-0.617],[-0.89,-0.514],[-0.549,0.317],[0,0],[0.19,-0.556],[0.84,-0.485],[0.971,0.021],[1.43,0.826],[0,0],[0.676,-0.279],[0.802,0.075],[1.023,0.591],[0.035,0.667],[-0.847,0.489]],\"v\":[[-1.536,16.909],[-3.636,15.697],[-0.911,15.05],[-0.229,14.197],[-0.949,13.335],[-2.557,12.959],[-4.268,13.488],[-5.029,13.928],[-6.876,12.861],[-6.172,12.455],[-5.988,10.709],[-8.556,10.649],[-9.449,11.984],[-11.418,10.847],[-9.983,9.349],[-7.266,8.653],[-4.603,9.381],[-3.548,11.874],[-3.51,11.896],[-1.293,11.59],[0.925,12.288],[2.511,14.176],[1.08,16.033]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.142,-0.082],[0,0],[0,0],[0,0],[0,0],[0.304,0.338],[0.14,0.328],[0.018,0.303],[-0.01,0.258],[0.027,0.225],[0.081,0.19],[0.15,0.157],[0.239,0.138],[0.438,0.024],[0.409,-0.236],[-0.103,-0.804],[0,0],[-0.897,0.518],[-0.476,0.107],[-0.499,-0.024],[-0.505,-0.153],[-0.473,-0.273],[-0.275,-0.294],[-0.128,-0.296],[-0.016,-0.3],[0.022,-0.3],[-0.001,-0.196],[-0.035,-0.17],[-0.081,-0.135]],\"o\":[[0,0],[0,0],[0,0],[0,0],[-0.56,-0.323],[-0.304,-0.339],[-0.139,-0.327],[-0.019,-0.304],[0.011,-0.271],[-0.028,-0.225],[-0.083,-0.191],[-0.151,-0.157],[-0.468,-0.27],[-0.438,-0.024],[-0.706,0.408],[0,0],[0.098,-0.768],[0.416,-0.24],[0.474,-0.107],[0.499,0.024],[0.504,0.152],[0.504,0.291],[0.276,0.293],[0.128,0.296],[0.015,0.299],[-0.01,0.206],[0.001,0.197],[0.036,0.171],[0.081,0.135]],\"v\":[[-8.136,18.824],[-4.655,16.814],[-2.655,17.969],[-8.116,21.122],[-8.941,20.646],[-10.236,19.654],[-10.903,18.654],[-11.14,17.708],[-11.153,16.864],[-11.176,16.12],[-11.34,15.496],[-11.689,14.975],[-12.273,14.532],[-13.632,14.091],[-14.901,14.409],[-15.805,16.227],[-17.927,15.002],[-16.435,13.074],[-15.097,12.553],[-13.637,12.428],[-12.132,12.692],[-10.666,13.331],[-9.497,14.207],[-8.892,15.092],[-8.677,15.986],[-8.687,16.886],[-8.702,17.489],[-8.647,18.039],[-8.472,18.498]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0.032,-0.139],[0.068,-0.137],[0.105,-0.129],[0.134,-0.107],[0,0],[-0.131,0.405],[0.005,0.391]],\"o\":[[0,0],[0,0],[0,0],[0.018,0.125],[-0.03,0.139],[-0.069,0.136],[-0.106,0.128],[0,0],[0.286,-0.377],[0.131,-0.405],[0,0]],\"v\":[[-21.763,16.08],[-10.572,22.54],[-12.376,23.581],[-20.849,18.69],[-20.869,19.084],[-21.018,19.497],[-21.28,19.895],[-21.64,20.248],[-23.671,19.076],[-23.045,17.904],[-22.856,16.711]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 12\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.733,-0.423],[-2.621,-1.513],[-0.767,0.443],[2.545,1.469]],\"o\":[[-0.782,0.452],[2.468,1.425],[0.748,-0.432],[-2.545,-1.469]],\"v\":[[-31.197,23.721],[-28.44,26.669],[-23.587,28.141],[-26.282,25.29]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.973,-0.562],[3.659,2.113],[0.466,0.88],[-1.004,0.58],[-3.72,-2.148],[-0.466,-0.871]],\"o\":[[-1.954,1.128],[-1.898,-1.096],[-0.466,-0.879],[1.908,-1.102],[1.852,1.069],[0.466,0.871]],\"v\":[[-21.797,29.241],[-30.217,27.765],[-33.763,24.801],[-32.956,22.613],[-24.514,24.182],[-21.037,27.092]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 13\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":13,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.733,-0.423],[-2.621,-1.513],[-0.767,0.443],[2.545,1.469]],\"o\":[[-0.782,0.452],[2.468,1.425],[0.748,-0.432],[-2.545,-1.469]],\"v\":[[-37.941,27.615],[-35.184,30.562],[-30.331,32.035],[-33.026,29.184]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.973,-0.562],[3.659,2.113],[0.466,0.88],[-1.004,0.58],[-3.72,-2.148],[-0.466,-0.871]],\"o\":[[-1.954,1.128],[-1.898,-1.096],[-0.466,-0.879],[1.908,-1.102],[1.852,1.069],[0.466,0.871]],\"v\":[[-28.541,33.135],[-36.961,31.658],[-40.507,28.695],[-39.7,26.506],[-31.258,28.075],[-27.781,30.986]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 14\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":14,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.733,-0.423],[-2.621,-1.513],[-0.767,0.443],[2.545,1.469]],\"o\":[[-0.782,0.452],[2.468,1.425],[0.748,-0.432],[-2.545,-1.469]],\"v\":[[-44.685,31.509],[-41.928,34.456],[-37.075,35.929],[-39.769,33.077]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.973,-0.562],[3.659,2.113],[0.466,0.88],[-1.004,0.58],[-3.72,-2.148],[-0.466,-0.871]],\"o\":[[-1.954,1.128],[-1.898,-1.096],[-0.466,-0.879],[1.908,-1.102],[1.852,1.069],[0.466,0.871]],\"v\":[[-35.285,37.028],[-43.704,35.552],[-47.251,32.588],[-46.444,30.4],[-38.002,31.969],[-34.525,34.879]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 15\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":15,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.854,-0.128],[0,0],[-0.633,0.366],[0.034,0.331],[0.519,0.3],[1.149,-0.663],[0.467,-0.37],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.214,0.124],[-1.068,-0.065],[-0.997,-0.576],[-0.131,-0.732],[0.973,-0.562]],\"o\":[[0,0],[1.019,-0.059],[0.477,-0.275],[-0.033,-0.33],[-1.084,-0.626],[-0.424,0.245],[0,0],[0,0],[0,0],[0,0],[0,0],[0.263,-0.187],[0.844,-0.487],[1.068,0.065],[1.104,0.637],[0.131,0.733],[-0.79,0.456]],\"v\":[[-45.015,42.1],[-47.076,40.91],[-44.598,40.272],[-43.933,39.363],[-44.762,38.419],[-48.111,38.475],[-49.447,39.396],[-55.244,35.692],[-50.899,33.183],[-48.929,34.32],[-51.894,36.032],[-49.819,37.363],[-49.103,36.897],[-46.237,36.265],[-43.139,37.227],[-41.287,39.281],[-42.55,41.223]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 16\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":16,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":16,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.799,-0.462],[-0.478,0.276],[0.707,0.408],[0.491,-0.283]],\"o\":[[0.787,0.454],[0.5,-0.289],[-0.706,-0.408],[-0.478,0.276]],\"v\":[[15.915,-47.154],[17.975,-46.97],[17.65,-48.163],[15.59,-48.347]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0.362,-0.209],[0.942,0.544],[-0.594,0.343],[-0.632,-0.166],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0.254,0.351],[-0.594,0.343],[-0.937,-0.541],[0.367,-0.212],[0,0],[0,0]],\"v\":[[15.264,-49.785],[19.287,-47.462],[19.08,-47.343],[18.453,-47.705],[18.238,-46.804],[15.708,-47.035],[15.311,-48.498],[16.862,-48.624],[15.057,-49.665]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.272,0.157],[-0.258,0.016],[0,0],[0.125,-0.072],[-0.517,-0.298],[0,0],[0,0],[0,0]],\"o\":[[0,0],[-0.252,-0.299],[0.153,-0.096],[0,0],[-0.203,0.012],[-0.391,0.232],[0,0],[0,0],[0,0],[0,0]],\"v\":[[12.915,-47.061],[13.43,-46.775],[13.602,-47.491],[14.225,-47.659],[14.36,-47.471],[13.867,-47.339],[14.112,-46.386],[15.767,-45.43],[15.555,-45.308],[12.717,-46.947]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.713,-0.411],[-0.483,0.279],[1.185,-0.684]],\"o\":[[0.712,0.411],[1.185,-0.684],[-0.483,0.279]],\"v\":[[11.612,-44.67],[13.672,-44.486],[11.299,-45.856]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.948,-0.547],[0,0],[0,0],[0.345,-0.199],[0.867,0.501],[-0.595,0.343],[-0.619,-0.153],[0,0]],\"o\":[[0.948,0.547],[0,0],[0,0],[0.235,0.375],[-0.595,0.343],[-0.868,-0.501],[0.345,-0.199],[0,0],[0,0]],\"v\":[[12.144,-46.617],[14.983,-44.978],[14.772,-44.856],[14.169,-45.204],[13.947,-44.327],[11.401,-44.548],[11.028,-46.012],[12.554,-46.137],[11.934,-46.495]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.28,-0.162],[0.896,0.517],[-0.616,0.356],[-0.497,-0.038],[0,0],[0.228,-0.132],[-0.765,-0.441],[-0.483,0.279],[0.059,0.232]],\"o\":[[0.072,0.29],[-0.599,0.346],[-0.897,-0.518],[0.28,-0.162],[0,0],[-0.402,-0.033],[-0.483,0.279],[0.764,0.441],[0.228,-0.132],[0,0]],\"v\":[[12.111,-43.777],[11.759,-43.083],[9.217,-43.287],[8.864,-44.755],[10.064,-44.958],[10.105,-44.776],[9.128,-44.603],[9.424,-43.407],[11.495,-43.236],[11.778,-43.804]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.272,0.157],[-0.258,0.016],[0,0],[0.125,-0.072],[-0.517,-0.298],[0,0],[0,0],[0,0]],\"o\":[[0,0],[-0.252,-0.299],[0.153,-0.096],[0,0],[-0.203,0.012],[-0.391,0.232],[0,0],[0,0],[0,0],[0,0]],\"v\":[[6.432,-43.318],[6.947,-43.032],[7.119,-43.748],[7.742,-43.916],[7.877,-43.728],[7.383,-43.595],[7.629,-42.643],[9.284,-41.687],[9.072,-41.565],[6.233,-43.204]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.513,-0.296],[-0.648,-0.429]],\"o\":[[-0.705,-0.402],[-0.44,0.254],[0,0]],\"v\":[[6.802,-42.026],[4.848,-42.159],[5.074,-41.028]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.902,0.521],[-0.599,0.346],[-1.027,-0.687],[0,0],[-0.44,0.254],[0.122,0.255],[0,0],[0.34,-0.196]],\"o\":[[-0.851,-0.491],[0.599,-0.346],[0,0],[0.71,0.36],[0.28,-0.162],[0,0],[0.156,0.328],[-0.599,0.346]],\"v\":[[4.974,-40.837],[4.59,-42.308],[7.239,-41.993],[5.321,-40.886],[7.239,-40.779],[7.575,-41.47],[7.887,-41.465],[7.515,-40.619]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.332,0.192],[-0.039,0.102],[0,0],[0.133,-0.077],[0.558,0.322],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0.385,0.222],[0.103,-0.06],[0,0],[-0.047,0.127],[-0.453,0.262],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[1.609,-41.523],[2.465,-41.028],[3.189,-41.446],[3.425,-41.31],[2.701,-40.892],[4.43,-39.894],[5.478,-39.742],[5.691,-39.997],[5.993,-39.906],[5.736,-39.592],[4.223,-39.774],[2.494,-40.773],[2.042,-40.511],[1.806,-40.648],[2.258,-40.909],[1.431,-41.386]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.237,-0.137],[-0.371,-0.204],[-0.33,0.118],[-0.639,-0.394],[0.375,-0.217],[0.565,0.112],[0,0],[-0.285,0.164],[0.436,0.266],[0.423,-0.158],[0.573,0.326],[-0.436,0.246],[-0.476,-0.031]],\"o\":[[-0.468,-0.021],[-0.338,0.188],[0.388,0.214],[0.466,-0.17],[0.614,0.369],[-0.375,0.217],[0,0],[0.516,0.094],[0.258,-0.149],[-0.399,-0.241],[-0.506,0.186],[-0.563,-0.319],[0.311,-0.179],[0,0]],\"v\":[[1.806,-40.051],[0.844,-39.84],[0.725,-39.168],[1.888,-39.242],[3.6,-39.269],[3.519,-38.306],[2.018,-38.097],[1.99,-38.293],[3.253,-38.464],[3.377,-39.159],[2.12,-39.084],[0.528,-39.047],[0.579,-39.993],[1.752,-40.232]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.713,-0.411],[-0.483,0.279],[1.185,-0.684]],\"o\":[[0.712,0.411],[1.185,-0.684],[-0.483,0.279]],\"v\":[[-1.276,-37.229],[0.784,-37.045],[-1.589,-38.415]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.948,-0.547],[0,0],[0,0],[0.345,-0.199],[0.867,0.501],[-0.595,0.343],[-0.619,-0.153],[0,0]],\"o\":[[0.948,0.547],[0,0],[0,0],[0.235,0.375],[-0.595,0.343],[-0.868,-0.501],[0.345,-0.199],[0,0],[0,0]],\"v\":[[-0.744,-39.176],[2.095,-37.537],[1.884,-37.415],[1.281,-37.763],[1.059,-36.886],[-1.487,-37.107],[-1.86,-38.571],[-0.334,-38.696],[-0.955,-39.054]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.112,0.065],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.112,-0.065],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-4.421,-37.902],[-3.22,-35.875],[-3.298,-35.83],[-6.818,-36.518],[-3.243,-34.455],[-3.476,-34.32],[-7.498,-36.643],[-7.223,-36.802],[-3.723,-36.115],[-4.925,-38.129],[-4.641,-38.293],[-0.618,-35.97],[-0.847,-35.838]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.799,-0.462],[-0.478,0.276],[0.707,0.408],[0.491,-0.283]],\"o\":[[0.787,0.454],[0.5,-0.289],[-0.706,-0.408],[-0.478,0.276]],\"v\":[[-8.681,-32.954],[-6.621,-32.77],[-6.945,-33.963],[-9.006,-34.147]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0.362,-0.209],[0.942,0.544],[-0.594,0.343],[-0.632,-0.166],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0.254,0.351],[-0.594,0.343],[-0.937,-0.541],[0.367,-0.212],[0,0],[0,0]],\"v\":[[-9.332,-35.584],[-5.309,-33.262],[-5.516,-33.142],[-6.143,-33.504],[-6.358,-32.603],[-8.888,-32.834],[-9.285,-34.298],[-7.734,-34.423],[-9.539,-35.465]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-11.017,-33.257],[-8.167,-31.612],[-7.955,-31.734],[-10.805,-33.38]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.299,-0.173],[0.298,0.172]],\"o\":[[0.298,0.172],[-0.299,-0.173]],\"v\":[[-11.65,-33.947],[-11.991,-33.75]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 12\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.713,-0.411],[-0.483,0.279],[1.185,-0.684]],\"o\":[[0.712,0.411],[1.185,-0.684],[-0.483,0.279]],\"v\":[[-12.11,-30.974],[-10.05,-30.79],[-12.423,-32.16]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.948,-0.547],[0,0],[0,0],[0.345,-0.199],[0.867,0.501],[-0.595,0.343],[-0.619,-0.153],[0,0]],\"o\":[[0.948,0.547],[0,0],[0,0],[0.235,0.375],[-0.595,0.343],[-0.868,-0.501],[0.345,-0.199],[0,0],[0,0]],\"v\":[[-11.577,-32.921],[-8.738,-31.282],[-8.949,-31.16],[-9.553,-31.509],[-9.774,-30.631],[-12.321,-30.852],[-12.694,-32.317],[-11.168,-32.441],[-11.788,-32.799]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 13\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":13,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.799,0.461],[0.483,-0.279],[-0.695,-0.401],[-0.487,0.281]],\"o\":[[-0.799,-0.462],[-0.496,0.286],[0.695,0.401],[0.483,-0.279]],\"v\":[[-12.932,-30.499],[-14.992,-30.684],[-14.659,-29.496],[-12.602,-29.304]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[-0.413,0.239],[-0.914,-0.528],[0.599,-0.346],[0.652,0.168],[0,0]],\"o\":[[0,0],[0,0],[0,0],[-0.263,-0.346],[0.607,-0.317],[0.953,0.55],[-0.362,0.209],[0,0],[0,0]],\"v\":[[-12.282,-27.869],[-16.304,-30.192],[-16.097,-30.312],[-15.425,-29.923],[-15.215,-30.867],[-12.72,-30.622],[-12.331,-29.148],[-13.917,-29.048],[-12.078,-27.987]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 14\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":14,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.513,-0.296],[-0.648,-0.429]],\"o\":[[-0.705,-0.402],[-0.44,0.254],[0,0]],\"v\":[[-15.735,-29.014],[-17.689,-29.147],[-17.463,-28.016]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.902,0.521],[-0.599,0.346],[-1.027,-0.687],[0,0],[-0.44,0.254],[0.122,0.255],[0,0],[0.34,-0.196]],\"o\":[[-0.851,-0.491],[0.599,-0.346],[0,0],[0.71,0.36],[0.28,-0.162],[0,0],[0.156,0.328],[-0.599,0.346]],\"v\":[[-17.563,-27.826],[-17.947,-29.296],[-15.298,-28.981],[-17.216,-27.874],[-15.298,-27.767],[-14.962,-28.459],[-14.65,-28.453],[-15.022,-27.608]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 15\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":15,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.272,0.157],[-0.258,0.016],[0,0],[0.125,-0.072],[-0.517,-0.298],[0,0],[0,0],[0,0]],\"o\":[[0,0],[-0.252,-0.299],[0.153,-0.096],[0,0],[-0.203,0.012],[-0.391,0.232],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-20.353,-27.854],[-19.838,-27.567],[-19.666,-28.284],[-19.042,-28.452],[-18.908,-28.264],[-19.401,-28.131],[-19.156,-27.178],[-17.501,-26.223],[-17.712,-26.101],[-20.551,-27.74]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 16\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":16,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[1.004,-0.58]],\"o\":[[0,0],[0,0],[1.004,-0.58],[0,0]],\"v\":[[-23.903,-26.84],[-21.84,-25.649],[-20.75,-26.278],[-22.813,-27.469]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[-0.44,0.254],[1.31,-0.756]],\"o\":[[0,0],[0,0],[0,0],[0.44,-0.254],[1.31,-0.756],[0,0]],\"v\":[[-21.559,-25.486],[-20.168,-24.683],[-20.4,-24.549],[-24.423,-26.871],[-23.1,-27.635],[-20.468,-26.116]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 17\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":17,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.713,-0.411],[-0.483,0.279],[1.185,-0.684]],\"o\":[[0.712,0.411],[1.185,-0.684],[-0.483,0.279]],\"v\":[[-25.567,-23.204],[-23.507,-23.021],[-25.88,-24.391]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.948,-0.547],[0,0],[0,0],[0.345,-0.199],[0.867,0.501],[-0.595,0.343],[-0.619,-0.153],[0,0]],\"o\":[[0.948,0.547],[0,0],[0,0],[0.235,0.375],[-0.595,0.343],[-0.868,-0.501],[0.345,-0.199],[0,0],[0,0]],\"v\":[[-25.034,-25.151],[-22.196,-23.512],[-22.406,-23.391],[-23.01,-23.739],[-23.231,-22.861],[-25.778,-23.083],[-26.151,-24.547],[-24.625,-24.672],[-25.245,-25.03]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 18\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":18,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-28.855,-24.313],[-24.833,-21.99],[-25.044,-21.868],[-29.067,-24.19]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 19\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":19,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-28.708,-23.043],[-25.858,-21.398],[-25.647,-21.52],[-28.497,-23.165]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.299,-0.173],[0.298,0.172]],\"o\":[[0.298,0.172],[-0.299,-0.173]],\"v\":[[-29.342,-23.733],[-29.682,-23.536]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 20\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":20,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.292,0.175],[-0.788,-0.455],[0,0],[0,0],[0,0],[0.455,-0.269],[-0.586,-0.339],[0,0],[0,0],[0,0]],\"o\":[[0,0],[-0.227,-0.32],[0.569,-0.329],[0,0],[0,0],[0,0],[-0.643,-0.371],[-0.434,0.257],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-30.966,-21.727],[-30.461,-21.435],[-30.259,-22.194],[-28.046,-22.026],[-26.408,-21.08],[-26.619,-20.958],[-28.251,-21.901],[-29.992,-22.03],[-29.703,-21.002],[-28.123,-20.09],[-28.335,-19.968],[-31.174,-21.607]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 21\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":21,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.713,-0.411],[-0.483,0.279],[1.185,-0.684]],\"o\":[[0.712,0.411],[1.185,-0.684],[-0.483,0.279]],\"v\":[[-32.278,-19.33],[-30.218,-19.146],[-32.591,-20.516]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.948,-0.547],[0,0],[0,0],[0.345,-0.199],[0.867,0.501],[-0.595,0.343],[-0.619,-0.153],[0,0]],\"o\":[[0.948,0.547],[0,0],[0,0],[0.235,0.375],[-0.595,0.343],[-0.868,-0.501],[0.345,-0.199],[0,0],[0,0]],\"v\":[[-31.745,-21.277],[-28.906,-19.638],[-29.117,-19.516],[-29.721,-19.865],[-29.942,-18.987],[-32.489,-19.208],[-32.862,-20.672],[-31.336,-20.797],[-31.956,-21.155]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 22\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":22,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-34.975,-20.779],[-32.182,-17.733],[-32.432,-17.589],[-37.708,-19.201],[-37.458,-19.346],[-32.664,-17.867],[-35.225,-20.635]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 23\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":23,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.513,-0.296],[-0.648,-0.429]],\"o\":[[-0.705,-0.402],[-0.44,0.254],[0,0]],\"v\":[[-36.95,-16.766],[-38.904,-16.899],[-38.678,-15.768]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.902,0.521],[-0.599,0.346],[-1.027,-0.687],[0,0],[-0.44,0.254],[0.122,0.255],[0,0],[0.34,-0.196]],\"o\":[[-0.851,-0.491],[0.599,-0.346],[0,0],[0.71,0.36],[0.28,-0.162],[0,0],[0.156,0.328],[-0.599,0.346]],\"v\":[[-38.778,-15.577],[-39.162,-17.048],[-36.513,-16.733],[-38.431,-15.625],[-36.513,-15.519],[-36.177,-16.21],[-35.865,-16.204],[-36.237,-15.359]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 24\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":24,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.292,0.175],[-0.788,-0.455],[0,0],[0,0],[0,0],[0.455,-0.269],[-0.586,-0.339],[0,0],[0,0],[0,0]],\"o\":[[0,0],[-0.227,-0.32],[0.569,-0.329],[0,0],[0,0],[0,0],[-0.643,-0.371],[-0.434,0.257],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-42.347,-15.156],[-41.841,-14.864],[-41.64,-15.623],[-39.427,-15.455],[-37.789,-14.509],[-38,-14.388],[-39.632,-15.33],[-41.373,-15.459],[-41.084,-14.432],[-39.504,-13.519],[-39.716,-13.397],[-42.555,-15.036]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 25\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":25,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.953,-0.545],[-0.858,0.495],[0.908,0.524],[0.866,-0.5]],\"o\":[[0.912,0.522],[0.862,-0.498],[-0.931,-0.538],[-0.867,0.5]],\"v\":[[-45.052,-12.638],[-41.966,-12.35],[-42.462,-14.134],[-45.546,-14.417]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.082,-0.629],[1.013,-0.585],[1.063,0.614],[-1.017,0.587]],\"o\":[[1.053,0.613],[-1.013,0.585],[-1.08,-0.624],[1.017,-0.587]],\"v\":[[-42.232,-14.26],[-41.679,-12.184],[-45.287,-12.51],[-45.834,-14.583]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.46274510026,0.392156869173,0.349019616842,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 26\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":26,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":26,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[3.641,-2.102],[0,0],[4.205,2.428],[0,0],[-3.641,2.102],[0,0],[-4.205,-2.428],[0,0]],\"o\":[[0,0],[-3.641,2.102],[0,0],[-4.205,-2.428],[0,0],[3.641,-2.102],[0,0],[4.205,2.428]],\"v\":[[122.449,-8.666],[-15.009,70.696],[-29.216,70.107],[-121.429,16.868],[-122.449,8.666],[15.009,-70.696],[29.216,-70.107],[121.429,-16.868]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.847058832645,0.839215695858,0.831372559071,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-3.104,-1.846],[0,0],[-6.976,4.138],[0,0],[0.063,2.988],[0,0],[0,0],[2.93,1.686]],\"o\":[[0,0],[0,3.611],[0,0],[6.971,4.146],[0,0],[2.57,-1.525],[0,0],[0,0],[-2.934,1.679],[0,0]],\"v\":[[-124.027,9.723],[-124.884,12.517],[-119.878,21.319],[-32.063,71.85],[-11.922,72.543],[120.42,-4.433],[124.906,-10.189],[124.807,-13.017],[-17.223,65.916],[-26.692,65.905]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.776470601559,0.776470601559,0.776470601559,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":-21,\"op\":429,\"st\":-21,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":3,\"nm\":\"Gold card 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.357},\"t\":60,\"s\":[1006.606,437.626,0],\"to\":[0,-39.931,0],\"ti\":[0,22.708,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":90,\"s\":[1006.606,294.266,0],\"to\":[0,-26.667,0],\"ti\":[0,22.708,0]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":110,\"s\":[1006.606,294.266,0],\"to\":[0,-26.667,0],\"ti\":[0,6.961,0]},{\"t\":140,\"s\":[1006.606,437.626,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-441.394,94.266,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ip\":53,\"op\":495,\"st\":45,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Shadow\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1007.851,482.826,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-441.899,120.826,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.179},\"t\":60,\"s\":[{\"i\":[[0,0],[-2.101,-0.992],[0,0],[-4.688,1.789],[0,0],[0.497,5.286],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-552.899,65.586],[-551.242,69.554],[-454.422,125.171],[-443.312,124.711],[-304.801,43.98],[-302.747,38.464],[-302.883,37.332],[-552.955,62.955]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0},\"t\":90,\"s\":[{\"i\":[[0,0],[-2.101,-0.992],[0,0],[-4.688,1.789],[0,0],[0.497,5.286],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-552.899,65.586],[-551.242,69.554],[-454.422,125.171],[-443.312,124.711],[-304.801,43.98],[-302.747,38.464],[-302.985,-107.043],[-552.423,-82.358]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":97,\"s\":[{\"i\":[[0,0],[-2.101,-0.992],[0,0],[-4.688,1.789],[0,0],[0.497,5.286],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-552.899,65.586],[-551.242,69.554],[-454.422,125.171],[-443.312,124.711],[-304.801,43.98],[-302.747,38.464],[-302.985,-114.543],[-552.798,-87.483]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":104,\"s\":[{\"i\":[[0,0],[-2.101,-0.992],[0,0],[-4.688,1.789],[0,0],[0.497,5.286],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-552.899,65.586],[-551.242,69.554],[-454.422,125.171],[-443.312,124.711],[-304.801,43.98],[-302.747,38.464],[-302.985,-100.009],[-552.496,-75.373]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":110,\"s\":[{\"i\":[[0,0],[-2.101,-0.992],[0,0],[-4.688,1.789],[0,0],[0.497,5.286],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-552.899,65.586],[-551.242,69.554],[-454.422,125.171],[-443.312,124.711],[-304.801,43.98],[-302.747,38.464],[-302.985,-107.043],[-552.298,-79.858]],\"c\":true}]},{\"t\":140,\"s\":[{\"i\":[[0,0],[-2.101,-0.992],[0,0],[-4.688,1.789],[0,0],[0.497,5.286],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-552.899,65.586],[-551.242,69.554],[-454.422,125.171],[-443.312,124.711],[-304.801,43.98],[-302.747,38.464],[-302.883,37.332],[-552.955,62.955]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.8,0.8,0.8,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":15,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shadow\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[3.641,-2.102],[0,0],[4.205,2.428],[0,0],[-3.641,2.102],[0,0],[-4.205,-2.428],[0,0]],\"o\":[[0,0],[-3.641,2.102],[0,0],[-4.205,-2.428],[0,0],[3.641,-2.102],[0,0],[4.205,2.428]],\"v\":[[122.449,-8.666],[-15.009,70.696],[-29.216,70.107],[-121.429,16.868],[-122.449,8.666],[15.009,-70.696],[29.216,-70.107],[121.429,-16.868]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.764705882353,0.758708160999,0.758708160999,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-427.699,52.768],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":-23,\"op\":461,\"st\":11,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"Shadow 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1007.851,482.826,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-441.899,120.826,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-1.976,-0.929],[0,0],[-6.598,3.318],[0,0],[0.402,2.571],[0,0],[0,0.05],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-2.813,1.151],[0,0],[0,0]],\"v\":[[-553.555,75.836],[-551.899,79.804],[-454.234,136.608],[-443.124,136.148],[-305.051,55.792],[-302.567,51.683],[-303.154,39.269],[-444.688,121.411],[-453.97,121.38],[-553.131,64.204]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.8,0.8,0.8,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0.5],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shadow\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":-23,\"op\":461,\"st\":11,\"bm\":0}]},{\"id\":\"comp_2\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Shape Layer 1\",\"parent\":3,\"td\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[15.25,10.418,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.313,-0.181],[0,0],[-0.327,-0.246],[-0.298,-0.328],[0,0],[1.186,-1.546],[0.336,-0.268],[0,0],[0.314,-0.181],[0,0],[3.75,1.035],[0,0],[0.234,0.078],[0.228,0.082],[0.618,0.357],[0,0],[0.18,0.126],[0,0],[0,0],[0,0],[-3.323,1.919],[0,0],[-0.069,0.031],[-0.824,0.213],[-0.31,0.056],[-0.629,0.035],[-0.316,0.002],[-0.622,-0.068],[-0.323,-0.051],[-1.032,-0.397],[-0.309,-0.15]],\"o\":[[0,0],[0.391,0.226],[0.407,0.306],[0,0],[1.546,1.667],[-0.233,0.299],[0,0],[-0.259,0.199],[0,0],[-2.751,1.588],[0,0],[-0.239,-0.067],[-0.24,-0.075],[-0.705,-0.258],[0,0],[-0.206,-0.119],[0,0],[0,0],[0,0],[-3.246,-2.393],[0,0],[0.062,-0.036],[0.673,-0.372],[0.301,-0.075],[0.6,-0.108],[0.314,-0.017],[0.627,-0.001],[0.314,0.032],[1.118,0.183],[0.333,0.128],[0.329,0.155]],\"v\":[[29.214,-70.107],[121.426,-16.868],[122.511,-16.157],[123.566,-15.207],[123.573,-15.203],[124.148,-10.095],[123.299,-9.236],[123.293,-9.232],[122.453,-8.665],[-15.011,70.699],[-25.815,71.489],[-25.822,71.485],[-26.534,71.273],[-27.23,71.034],[-29.219,70.107],[-121.431,16.868],[-122.017,16.501],[-122.428,16.221],[-122.435,16.217],[-122.436,16.209],[-122.45,8.669],[15.013,-70.696],[15.199,-70.795],[17.465,-71.668],[18.383,-71.87],[20.236,-72.086],[21.182,-72.116],[23.061,-72.011],[24.013,-71.888],[27.281,-71.017],[28.249,-70.608]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.686274528503,0.670588254929,0.658823549747,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-15,-10],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":-37,\"op\":413,\"st\":-37,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"light\",\"parent\":3,\"tt\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":20,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.357},\"t\":10,\"s\":[-101.597,59.448,0],\"to\":[33.667,-19.625,0],\"ti\":[-33.667,19.625,0]},{\"i\":{\"x\":0.667,\"y\":0.667},\"o\":{\"x\":0.333,\"y\":0.333},\"t\":40,\"s\":[100.403,-58.302,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":60,\"s\":[100.403,-58.302,0],\"to\":[-33.667,19.625,0],\"ti\":[33.667,-19.625,0]},{\"t\":90,\"s\":[-101.597,59.448,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[288.653,11.78,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[369.542,26.724],[343.29,41.881],[207.764,-3.823],[232.875,-18.321]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":-37,\"op\":413,\"st\":-37,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Visa card\",\"parent\":4,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-429.25,66.141,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0.284,0.143],[0,0],[-0.166,-0.157],[0,0]],\"o\":[[0,0],[-0.237,-0.085],[0,0],[0.21,0.136],[0,0],[0,0]],\"v\":[[112.675,-10.144],[109.499,-11.269],[108.718,-11.609],[108.686,-11.591],[109.25,-11.15],[111.212,-9.299]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[117.795,-9.619],[116.391,-8.809],[114.288,-9.553],[112.255,-8.379],[113.548,-7.167],[112.153,-6.362],[106.611,-11.964],[108.138,-12.846]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.141176477075,0.172549024224,0.435294121504,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.349,-0.038],[0,0],[-0.4,0.082],[-0.276,0.16],[-0.081,0.093],[-0.012,0.087],[0.055,0.077],[0.11,0.063],[0.181,0.031],[0.21,-0.007],[0.244,-0.034],[0.271,-0.046],[0.577,0.08],[0.507,0.293],[0.166,0.234],[-0.022,0.226],[-0.184,0.207],[-0.303,0.175],[-0.277,0.105],[-0.293,0.055],[0,0],[0.18,-0.026],[0.164,-0.043],[0.139,-0.056],[0.106,-0.061],[0.083,-0.091],[0.015,-0.086],[-0.049,-0.081],[-0.117,-0.067],[-0.151,-0.029],[-0.183,0.002],[-0.22,0.027],[-0.26,0.044],[-0.326,0.022],[-0.311,-0.029],[-0.301,-0.094],[-0.309,-0.178],[-0.168,-0.236],[0.028,-0.223],[0.198,-0.204],[0.305,-0.176],[0.354,-0.123]],\"o\":[[0,0],[0.49,0.016],[0.401,-0.082],[0.162,-0.093],[0.083,-0.093],[0.011,-0.087],[-0.053,-0.077],[-0.149,-0.086],[-0.18,-0.031],[-0.209,0.006],[-0.243,0.035],[-0.694,0.115],[-0.577,-0.08],[-0.397,-0.229],[-0.166,-0.234],[0.022,-0.225],[0.185,-0.207],[0.297,-0.172],[0.278,-0.105],[0,0],[-0.185,0.004],[-0.18,0.026],[-0.164,0.043],[-0.14,0.056],[-0.146,0.084],[-0.082,0.091],[-0.015,0.086],[0.049,0.08],[0.128,0.074],[0.152,0.029],[0.183,-0.002],[0.22,-0.027],[0.356,-0.058],[0.326,-0.022],[0.31,0.029],[0.302,0.094],[0.425,0.246],[0.168,0.237],[-0.028,0.223],[-0.198,0.204],[-0.314,0.181],[-0.354,0.123]],\"v\":[[107.635,-4.091],[105.933,-5.073],[107.269,-5.172],[108.285,-5.534],[108.65,-5.813],[108.792,-6.082],[108.728,-6.328],[108.483,-6.538],[107.988,-6.714],[107.403,-6.75],[106.723,-6.689],[105.951,-6.569],[104.043,-6.517],[102.417,-7.076],[101.573,-7.77],[101.357,-8.459],[101.665,-9.107],[102.397,-9.679],[103.26,-10.094],[104.117,-10.334],[105.707,-9.417],[105.16,-9.371],[104.643,-9.266],[104.188,-9.117],[103.819,-8.941],[103.476,-8.678],[103.33,-8.413],[103.381,-8.163],[103.629,-7.941],[104.047,-7.787],[104.55,-7.745],[105.154,-7.788],[105.874,-7.893],[106.896,-8.014],[107.851,-8.003],[108.769,-7.819],[109.684,-7.41],[110.574,-6.687],[110.783,-5.997],[110.445,-5.357],[109.691,-4.787],[108.689,-4.331]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.141176477075,0.172549024224,0.435294121504,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[99.746,-8.001],[101.075,-7.234],[100.597,-6.958],[105.562,-4.091],[106.04,-4.367],[107.369,-3.6],[105.125,-2.304],[103.796,-3.071],[104.274,-3.347],[99.309,-6.214],[98.831,-5.938],[97.502,-6.705]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.141176477075,0.172549024224,0.435294121504,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.232,-0.119],[0,0],[0.22,0.201],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0.351,0.129],[0,0],[-0.219,-0.148],[0,0],[0,0]],\"v\":[[97.294,-6.585],[102.947,-1.047],[101.488,-0.205],[91.919,-3.482],[93.307,-4.283],[99.804,-1.909],[100.68,-1.537],[100.704,-1.551],[100.046,-2.073],[95.946,-5.807]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.141176477075,0.172549024224,0.435294121504,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-16.065,37.866],[-16.766,39.889],[-19.57,38.27]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-5.081,-2.933],[0,0],[1.231,-0.711],[-1.504,-1.117],[0,0],[0,0],[0,0],[-2.603,1.503]],\"o\":[[0,0],[-4.235,-2.445],[-1.852,1.069],[0,0],[0,0],[0,0],[-3.908,-2.256],[1.871,-1.08]],\"v\":[[-87.889,12.105],[-89.12,12.815],[-96.713,11.743],[-96.184,15.253],[-94.713,14.404],[-93.292,15.224],[-96.08,16.834],[-98.134,10.922]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.20000000298,0.20000000298,0.20000000298,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0.403,-0.232],[0,0],[0.56,0.191],[0,0],[0,0],[0,0],[0.161,0.155],[0,0]],\"o\":[[0,0],[0.331,0.324],[0,0],[-0.403,0.232],[0,0],[0,0],[0,0],[0.269,0.093],[0,0],[0,0]],\"v\":[[-87.125,12.521],[-77.917,21.532],[-78.038,22.469],[-78.099,22.504],[-79.723,22.574],[-95.33,17.258],[-93.925,16.447],[-81.2,20.855],[-80.829,20.64],[-88.463,13.294]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.20000000298,0.20000000298,0.20000000298,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.04,0.276],[0,0],[0.307,-0.233],[0.13,-0.177],[-0.05,-0.225],[-0.393,-0.227],[-0.414,-0.023],[-0.361,0.208],[-0.072,0.247]],\"o\":[[0,0],[-0.205,0.15],[-0.307,0.233],[-0.154,0.212],[0.05,0.225],[0.444,0.256],[0.414,0.023],[0.309,-0.178],[0.071,-0.247]],\"v\":[[-57.911,2.118],[-60.062,0.876],[-60.83,1.451],[-61.487,2.067],[-61.643,2.722],[-60.979,3.4],[-59.691,3.819],[-58.529,3.54],[-57.958,2.902]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.007,-0.158],[0.042,-0.12],[0.097,-0.131],[0.291,-0.168],[0.335,-0.055],[0.38,0.031],[0.406,0.126],[0.347,0.2],[0.207,0.316],[-0.146,0.341],[-0.368,0.301],[-0.477,0.318],[0,0],[0.256,0.068],[0.226,-0.013],[0.215,-0.084],[0.191,-0.11],[0.215,-0.228],[0.134,-0.275],[0,0],[0,0],[-0.253,0.242],[-0.33,0.19],[-0.358,0.11],[-0.435,0.001],[-0.442,-0.135],[-0.486,-0.28],[0,0],[0,0]],\"o\":[[-0.002,0.091],[0.007,0.158],[-0.054,0.17],[-0.097,0.13],[-0.239,0.138],[-0.335,0.055],[-0.369,-0.033],[-0.406,-0.126],[-0.536,-0.31],[-0.207,-0.315],[0.127,-0.303],[0.368,-0.3],[0,0],[-0.305,-0.176],[-0.257,-0.068],[-0.231,0.011],[-0.216,0.084],[-0.225,0.13],[-0.215,0.228],[0,0],[0,0],[0.111,-0.145],[0.253,-0.242],[0.398,-0.23],[0.357,-0.11],[0.425,0.001],[0.443,0.135],[0,0],[0,0],[0,0]],\"v\":[[-56.829,2.743],[-56.819,3.118],[-56.87,3.536],[-57.095,3.986],[-57.677,4.435],[-58.539,4.724],[-59.613,4.759],[-60.776,4.521],[-61.905,4.031],[-63.02,3.092],[-63.112,2.108],[-62.37,1.202],[-61.103,0.275],[-61.353,0.131],[-62.196,-0.236],[-62.921,-0.318],[-63.591,-0.176],[-64.2,0.116],[-64.861,0.653],[-65.385,1.409],[-65.442,1.442],[-66.768,0.677],[-66.221,0.096],[-65.346,-0.553],[-64.212,-1.063],[-63.022,-1.229],[-61.723,-1.026],[-60.332,-0.403],[-55.03,2.658],[-56.003,3.219]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.20000000298,0.20000000298,0.20000000298,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-60.687,5.924],[-61.666,6.489],[-72.463,0.255],[-71.484,-0.31]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.20000000298,0.20000000298,0.20000000298,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-63.154,7.348],[-64.133,7.913],[-74.93,1.679],[-73.951,1.114]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.20000000298,0.20000000298,0.20000000298,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-65.6,8.76],[-66.579,9.325],[-74.33,4.85],[-73.351,4.285]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-74.581,3.497],[-75.695,4.14],[-77.048,3.359],[-75.934,2.716]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.20000000298,0.20000000298,0.20000000298,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.334,0.162],[0.258,0.065],[0.237,-0.027],[0.246,-0.142],[0.085,-0.249],[-0.031,-0.303],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.1,0.271],[-0.316,0.182],[-0.824,-0.103],[-0.953,-0.55]],\"o\":[[0,0],[0,0],[-0.356,-0.206],[-0.333,-0.163],[-0.274,-0.066],[-0.237,0.027],[-0.243,0.14],[-0.085,0.249],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.055,-0.369],[0.099,-0.271],[0.572,-0.33],[0.824,0.103],[0,0]],\"v\":[[-67.973,10.13],[-68.952,10.695],[-73.365,8.147],[-74.4,7.595],[-75.287,7.254],[-76.054,7.196],[-76.779,7.45],[-77.271,8.035],[-77.351,8.862],[-71.564,12.204],[-72.543,12.769],[-80.294,8.293],[-79.315,7.729],[-78.455,8.225],[-78.389,7.266],[-77.766,6.586],[-75.671,6.245],[-73.004,7.226]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.20000000298,0.20000000298,0.20000000298,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.04,0.276],[0,0],[0.307,-0.233],[0.13,-0.177],[-0.05,-0.225],[-0.393,-0.227],[-0.414,-0.023],[-0.361,0.208],[-0.072,0.247]],\"o\":[[0,0],[-0.205,0.15],[-0.307,0.233],[-0.154,0.212],[0.05,0.225],[0.444,0.256],[0.414,0.023],[0.309,-0.178],[0.071,-0.247]],\"v\":[[-76.798,13.022],[-78.949,11.78],[-79.717,12.356],[-80.373,12.971],[-80.53,13.626],[-79.866,14.304],[-78.578,14.723],[-77.416,14.445],[-76.845,13.806]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.007,-0.158],[0.042,-0.12],[0.097,-0.131],[0.291,-0.168],[0.335,-0.055],[0.38,0.031],[0.406,0.126],[0.347,0.2],[0.207,0.316],[-0.146,0.341],[-0.368,0.301],[-0.477,0.318],[0,0],[0.256,0.068],[0.226,-0.013],[0.215,-0.084],[0.191,-0.11],[0.215,-0.228],[0.134,-0.275],[0,0],[0,0],[-0.253,0.242],[-0.33,0.19],[-0.358,0.11],[-0.435,0.001],[-0.442,-0.135],[-0.486,-0.28],[0,0],[0,0]],\"o\":[[-0.002,0.091],[0.007,0.158],[-0.054,0.17],[-0.097,0.13],[-0.239,0.138],[-0.335,0.055],[-0.369,-0.033],[-0.406,-0.126],[-0.536,-0.31],[-0.207,-0.315],[0.127,-0.303],[0.368,-0.3],[0,0],[-0.305,-0.176],[-0.257,-0.068],[-0.231,0.011],[-0.216,0.084],[-0.225,0.13],[-0.215,0.228],[0,0],[0,0],[0.111,-0.145],[0.253,-0.242],[0.398,-0.23],[0.357,-0.11],[0.425,0.001],[0.443,0.135],[0,0],[0,0],[0,0]],\"v\":[[-75.716,13.647],[-75.706,14.022],[-75.757,14.44],[-75.982,14.891],[-76.564,15.339],[-77.426,15.628],[-78.5,15.663],[-79.663,15.425],[-80.792,14.935],[-81.907,13.997],[-81.999,13.012],[-81.256,12.107],[-79.99,11.179],[-80.24,11.035],[-81.083,10.668],[-81.808,10.586],[-82.478,10.728],[-83.087,11.02],[-83.748,11.558],[-84.272,12.313],[-84.329,12.346],[-85.655,11.581],[-85.108,11.001],[-84.233,10.352],[-83.099,9.841],[-81.909,9.675],[-80.61,9.878],[-79.218,10.501],[-73.917,13.562],[-74.89,14.124]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.20000000298,0.20000000298,0.20000000298,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":6,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[101.796,-17.601],[100.582,-16.9],[100.274,-17.077],[102.961,-18.629],[103.269,-18.451],[102.055,-17.75],[106.219,-15.346],[105.96,-15.197]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[103.859,-13.984],[99.381,-16.569],[99.635,-16.716],[104.113,-14.13]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0.71,0.41],[0.451,-0.261],[0.403,-0.233]],\"o\":[[0,0],[0.422,-0.244],[-0.702,-0.4],[-0.403,0.232],[0,0]],\"v\":[[100.567,-12.467],[101.685,-13.112],[101.805,-14.156],[99.927,-14.166],[98.775,-13.501]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0.64,0.369],[0.418,-0.241],[0,0]],\"o\":[[0,0],[0.403,-0.233],[-0.653,-0.377],[0,0],[0,0]],\"v\":[[98.449,-13.689],[99.6,-14.354],[99.62,-15.296],[97.833,-15.336],[96.716,-14.69]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.851,-0.491],[0.196,-0.275],[-0.518,-0.299],[0.576,-0.333],[0.489,-0.282],[0,0],[-0.489,0.282]],\"o\":[[0.46,0.266],[0.576,-0.155],[0.921,0.532],[-0.489,0.282],[0,0],[0.484,-0.28],[0.567,-0.327]],\"v\":[[99.865,-15.437],[100.277,-14.568],[102.066,-14.3],[102.017,-12.92],[100.64,-12.125],[96.162,-14.711],[97.539,-15.505]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[95.534,-11.961],[97.501,-13.097],[97.814,-12.917],[95.846,-11.781],[97.613,-10.761],[99.733,-11.985],[100.066,-11.794],[97.691,-10.422],[93.213,-13.008],[95.53,-14.346],[95.856,-14.157],[93.793,-12.966]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.974,0.546],[0.969,-0.56]],\"o\":[[0,0],[0,0],[0.998,-0.576],[-0.948,-0.531],[0,0]],\"v\":[[90.373,-10.992],[94.192,-8.786],[95.07,-9.293],[94.558,-11.258],[91.251,-11.498]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.12,-0.624],[1.176,-0.679],[0.379,-0.219],[0,0],[-0.379,0.219]],\"o\":[[1.158,0.646],[-0.379,0.219],[0,0],[0.379,-0.219],[1.138,-0.657]],\"v\":[[94.817,-11.407],[95.403,-9.101],[94.266,-8.445],[89.788,-11.03],[90.925,-11.687]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.342,-0.191],[-0.636,-0.367],[-0.629,0.218],[-0.858,-0.495],[0.499,-0.288],[0.838,0.218],[0,0],[-0.367,0.212],[0.704,0.407],[0.615,-0.211],[0.733,0.423],[-0.49,0.283],[-0.879,-0.168]],\"o\":[[-0.683,-0.143],[-0.35,0.202],[0.506,0.292],[0.724,-0.247],[0.894,0.521],[-0.465,0.269],[0,0],[0.666,0.173],[0.367,-0.212],[-0.593,-0.347],[-0.688,0.233],[-0.854,-0.478],[0.426,-0.246],[0,0]],\"v\":[[40.845,30.732],[39.401,30.943],[39.305,31.93],[40.967,31.837],[43.281,31.819],[43.214,33.144],[41.127,33.352],[41.195,33.155],[42.935,32.983],[43.045,31.949],[41.212,32.023],[39.085,32.07],[39.117,30.779],[40.885,30.539]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[37.496,33.899],[39.244,32.89],[39.522,33.051],[37.775,34.06],[39.342,34.965],[41.226,33.878],[41.522,34.048],[39.412,35.266],[35.435,32.97],[37.494,31.782],[37.783,31.949],[35.951,33.007]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[33.97,34.138],[32.891,34.76],[32.619,34.603],[35.006,33.225],[35.278,33.382],[34.2,34.005],[37.899,36.14],[37.669,36.273]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[35,36.357],[31.778,35.423],[33.397,37.283]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[36.679,36.844],[35.374,36.47],[33.592,37.498],[34.245,38.25],[33.997,38.393],[31.36,35.323],[31.611,35.178],[36.927,36.701]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[28.863,37.086],[27.784,37.709],[27.511,37.552],[29.898,36.174],[30.171,36.331],[29.093,36.953],[32.791,39.089],[32.561,39.222]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.342,-0.191],[-0.636,-0.367],[-0.629,0.218],[-0.858,-0.495],[0.499,-0.288],[0.838,0.218],[0,0],[-0.367,0.212],[0.704,0.407],[0.615,-0.211],[0.733,0.423],[-0.49,0.283],[-0.879,-0.168]],\"o\":[[-0.683,-0.143],[-0.35,0.202],[0.506,0.292],[0.724,-0.247],[0.894,0.521],[-0.465,0.269],[0,0],[0.666,0.173],[0.367,-0.212],[-0.593,-0.347],[-0.688,0.233],[-0.854,-0.478],[0.426,-0.246],[0,0]],\"v\":[[27.739,38.299],[26.296,38.509],[26.199,39.497],[27.861,39.403],[30.175,39.385],[30.108,40.71],[28.021,40.918],[28.089,40.721],[29.83,40.55],[29.939,39.515],[28.107,39.589],[25.98,39.636],[26.012,38.345],[27.779,38.105]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.865,0.485],[0.861,-0.497]],\"o\":[[0,0],[0,0],[0.886,-0.512],[-0.843,-0.472],[0,0]],\"v\":[[21.34,41.442],[24.732,43.401],[25.512,42.95],[25.057,41.206],[22.12,40.992]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.994,-0.554],[1.044,-0.603],[0.337,-0.194],[0,0],[-0.337,0.195]],\"o\":[[1.028,0.574],[-0.337,0.195],[0,0],[0.337,-0.194],[1.01,-0.583]],\"v\":[[25.287,41.073],[25.808,43.121],[24.797,43.704],[20.821,41.408],[21.831,40.825]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[20.285,43.836],[22.032,42.827],[22.311,42.988],[20.563,43.997],[22.131,44.902],[24.015,43.815],[24.311,43.985],[22.201,45.203],[18.224,42.907],[20.283,41.719],[20.572,41.886],[18.739,42.944]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[16.759,44.075],[15.68,44.697],[15.407,44.54],[17.794,43.162],[18.067,43.319],[16.989,43.942],[20.687,46.077],[20.457,46.21]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[18.59,47.288],[14.613,44.992],[14.839,44.862],[18.815,47.158]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[11.709,46.668],[17.006,47.408],[13.717,45.509],[13.943,45.379],[17.92,47.675],[17.831,47.727],[12.535,46.992],[15.819,48.888],[15.588,49.021],[11.611,46.725]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[2.085,1.204],[0,0],[0,0],[0,0],[1.705,0.984],[0,0]],\"o\":[[0,0],[2.08,1.201],[0,0],[0,0],[0,0],[1.711,0.988],[0,0],[0,0]],\"v\":[[10.98,47.09],[13.451,48.516],[11.166,49.835],[8.695,48.409],[8.921,48.278],[11.392,49.705],[13.225,48.647],[10.754,47.22]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 12\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[4.624,50.759],[9.921,51.499],[6.631,49.6],[6.857,49.47],[10.834,51.766],[10.745,51.818],[5.449,51.083],[8.733,52.979],[8.502,53.112],[4.526,50.816]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 13\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":13,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[7.615,53.624],[3.639,51.328],[3.865,51.198],[7.841,53.494]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 14\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":14,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[3.032,54.433],[-0.513,53.731],[-0.518,53.728],[-0.25,53.573],[2.852,54.197],[1.776,52.404],[2.044,52.249],[2.05,52.252],[3.262,54.301],[4.853,55.219],[4.623,55.352]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 15\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":15,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-1.844,54.493],[1.843,56.622],[3.523,55.652],[3.813,55.82],[1.903,56.922],[-2.074,54.626]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 16\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":16,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-4.974,56.3],[0.323,57.04],[-2.966,55.141],[-2.74,55.011],[1.237,57.307],[1.147,57.359],[-4.148,56.624],[-0.865,58.52],[-1.095,58.653],[-5.072,56.357]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 17\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":17,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.942,-0.539],[-0.848,0.49],[0.898,0.518],[0.857,-0.495]],\"o\":[[0.902,0.516],[0.853,-0.492],[-0.92,-0.531],[-0.857,0.495]],\"v\":[[-6.417,59.429],[-3.365,59.715],[-3.855,57.95],[-6.905,57.671]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.07,-0.623],[1.002,-0.578],[1.051,0.607],[-1.006,0.581]],\"o\":[[1.041,0.606],[-1.002,0.578],[-1.068,-0.617],[1.006,-0.581]],\"v\":[[-3.627,57.826],[-3.081,59.879],[-6.649,59.557],[-7.189,57.507]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 18\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":18,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.865,0.485],[0.861,-0.497]],\"o\":[[0,0],[0,0],[0.886,-0.512],[-0.843,-0.472],[0,0]],\"v\":[[-12.2,60.807],[-8.808,62.765],[-8.028,62.315],[-8.483,60.57],[-11.42,60.356]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.994,-0.554],[1.044,-0.603],[0.337,-0.194],[0,0],[-0.337,0.195]],\"o\":[[1.028,0.574],[-0.337,0.195],[0,0],[0.337,-0.194],[1.01,-0.583]],\"v\":[[-8.253,60.437],[-7.732,62.485],[-8.743,63.069],[-12.72,60.772],[-11.709,60.189]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 19\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":19,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-9.604,63.566],[-13.581,61.27],[-13.355,61.14],[-9.378,63.436]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 20\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":20,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-15.7,62.493],[-12.013,64.622],[-10.334,63.652],[-10.044,63.82],[-11.954,64.922],[-15.93,62.626]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 21\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":21,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-14.306,64.824],[-17.528,63.89],[-15.909,65.749]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-12.627,65.311],[-13.932,64.937],[-15.714,65.965],[-15.061,66.716],[-15.309,66.859],[-17.947,63.79],[-17.695,63.645],[-12.38,65.168]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 22\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":22,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-19.376,64.615],[-16.615,67.627],[-16.862,67.769],[-22.078,66.176],[-21.831,66.033],[-17.09,67.495],[-19.623,64.758]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 23\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":23,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":23,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-1.515,0.875],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[1.508,-0.871],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[49.664,14.149],[48.007,15.106],[46.812,14.416],[51.112,11.934],[52.307,12.624],[50.65,13.58],[56.423,16.913],[55.437,17.482]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[45.222,15.323],[46.207,14.754],[53.185,18.783],[52.573,19.136],[52.583,19.142],[45.128,18.01],[49.826,20.722],[48.84,21.291],[41.873,17.268],[42.671,16.807],[49.552,17.823]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[2.319,1.339],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[-2.319,-1.339],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[47.851,21.862],[43.939,24.121],[36.971,20.098],[40.883,17.84],[42.157,18.575],[39.223,20.269],[40.826,21.195],[43.655,19.561],[44.879,20.268],[42.05,21.901],[43.623,22.809],[46.556,21.115]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[42.051,25.211],[35.083,21.188],[36.061,20.624],[43.029,24.646]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[1.254,-0.724],[0,0]],\"o\":[[0,0],[1.261,-0.728],[0,0],[0,0]],\"v\":[[34.731,25.679],[36.209,24.826],[33.74,23.4],[32.262,24.254]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.561,-1.478],[0,0],[0,0],[0,0],[0,0],[-0.822,0.474]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0.821,-0.474],[2.553,-1.474]],\"v\":[[37.413,25.521],[35.935,26.374],[37.985,27.558],[37,28.127],[30.033,24.104],[32.486,22.676]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[35.097,29.226],[28.129,25.203],[29.107,24.638],[36.075,28.661]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.754,-0.435],[1.82,1.042],[-1.889,1.09],[-1.244,-0.098],[0,0],[0.455,-0.263],[-1.172,-0.668],[-1.291,0.746],[0.115,0.463]],\"o\":[[0.169,0.718],[-1.941,1.121],[-1.828,-1.047],[0.709,-0.409],[0,0],[-0.791,-0.061],[-1.262,0.729],[1.162,0.663],[0.455,-0.263],[0,0]],\"v\":[[33.657,29.046],[32.706,30.79],[26.343,30.314],[25.441,26.595],[28.423,26.102],[28.613,26.97],[26.695,27.319],[27.314,29.754],[31.472,30.077],[32.079,28.911]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[2.319,1.339],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[-2.319,-1.339],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[29.168,32.649],[25.256,34.907],[18.289,30.884],[22.2,28.626],[23.474,29.362],[20.541,31.055],[22.143,31.981],[24.973,30.347],[26.197,31.054],[23.368,32.688],[24.94,33.595],[27.874,31.902]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.557,0.322],[0.62,-0.358]],\"o\":[[0,0],[0,0],[0.627,-0.362],[-0.557,-0.322],[0,0]],\"v\":[[15.485,33.917],[17.715,35.204],[19.215,34.338],[18.996,33.177],[16.986,33.051]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.829,0.478],[-1.204,-0.695],[0.724,-0.729],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.829,-0.478],[1.242,-0.705],[0.956,0.552],[0,0],[0,0]],\"v\":[[24.871,35.13],[23.699,35.807],[19.847,35.341],[18.899,35.888],[21.228,37.233],[20.243,37.802],[13.265,33.773],[15.761,32.344],[19.951,32.591],[20.82,34.618],[24.782,35.078]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[1.157,0.642],[1.135,-0.655],[0,0]],\"o\":[[0,0],[1.187,-0.685],[-1.107,-0.613],[0,0],[0,0]],\"v\":[[13.129,40.449],[14.204,39.828],[13.55,37.563],[9.745,37.254],[8.67,37.874]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.745,-0.981],[1.829,-1.056],[0.642,-0.371],[0,0],[-0.642,0.371]],\"o\":[[1.783,1.004],[-0.642,0.371],[0,0],[0.642,-0.371],[1.791,-1.034]],\"v\":[[14.538,37.004],[15.469,40.558],[13.416,41.743],[6.448,37.721],[8.501,36.535]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.557,0.322],[0.62,-0.358]],\"o\":[[0,0],[0,0],[0.627,-0.362],[-0.557,-0.322],[0,0]],\"v\":[[3.697,40.723],[5.926,42.01],[7.427,41.144],[7.207,39.983],[5.197,39.857]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.829,0.478],[-1.204,-0.695],[0.724,-0.729],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.829,-0.478],[1.242,-0.705],[0.956,0.552],[0,0],[0,0]],\"v\":[[13.083,41.936],[11.91,42.613],[8.059,42.147],[7.111,42.694],[9.44,44.039],[8.454,44.608],[1.477,40.579],[3.973,39.15],[8.163,39.397],[9.032,41.424],[12.993,41.884]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-0.376,43.35],[1.619,45.623],[3.56,44.502]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[5.18,44.981],[2.448,46.559],[3.314,47.575],[2.246,48.192],[-2.377,42.816],[-1.302,42.195],[8.01,44.865],[6.934,45.485]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 12\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.754,-0.435],[1.82,1.042],[-1.889,1.09],[-1.244,-0.098],[0,0],[0.455,-0.263],[-1.172,-0.668],[-1.291,0.746],[0.115,0.463]],\"o\":[[0.169,0.718],[-1.941,1.121],[-1.828,-1.047],[0.709,-0.409],[0,0],[-0.791,-0.061],[-1.262,0.729],[1.162,0.663],[0.455,-0.263],[0,0]],\"v\":[[1.59,47.56],[0.639,49.304],[-5.724,48.828],[-6.626,45.109],[-3.644,44.616],[-3.454,45.484],[-5.372,45.833],[-4.753,48.268],[-0.595,48.591],[0.012,47.424]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 13\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":13,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-1.515,0.875],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[1.508,-0.871],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-12.658,50.131],[-14.315,51.088],[-15.51,50.398],[-11.21,47.916],[-10.016,48.606],[-11.672,49.562],[-5.9,52.895],[-6.885,53.464]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 14\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":14,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-12.899,56.936],[-19.856,52.919],[-16.102,50.752],[-14.838,51.481],[-17.608,53.08],[-15.706,54.178],[-13.086,52.665],[-11.872,53.366],[-14.492,54.879],[-11.914,56.368]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 15\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":15,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-14.802,58.035],[-21.769,54.012],[-20.792,53.447],[-13.824,57.47]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 16\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":16,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.456,-0.263],[-1.434,-0.828],[-1.299,0.75],[0.027,0.49],[0,0],[0,0],[0,0],[0,0],[0,0],[0.918,-0.53],[1.831,1.057],[-1.844,1.064],[-1.244,-0.097]],\"o\":[[-0.799,-0.056],[-1.12,0.646],[1.144,0.661],[0.41,-0.237],[0,0],[0,0],[0,0],[0,0],[0,0],[0.271,0.751],[-1.963,1.134],[-1.961,-1.132],[0.702,-0.405],[0,0]],\"v\":[[-21.632,55.898],[-23.657,56.263],[-22.888,58.785],[-18.76,59.09],[-18.138,58.088],[-19.372,57.375],[-20.709,58.146],[-21.883,57.469],[-19.643,56.175],[-16.707,57.871],[-17.536,59.797],[-23.851,59.34],[-24.861,55.568],[-21.856,55.062]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 17\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":17,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":17,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.01,-0.006],[-0.031,-0.132],[-0.189,-0.109],[-0.252,-0.025],[-0.128,0.024],[-0.042,0.016],[-0.023,0.039],[0.044,0.146],[0.192,0.111],[0.229,0.018],[0.142,-0.082],[0.011,-0.01]],\"o\":[[-0.017,0.007],[-0.14,0.081],[0.032,0.132],[0.192,0.111],[0.252,0.026],[0.067,-0.013],[0.027,-0.025],[0.039,-0.073],[-0.043,-0.146],[-0.189,-0.109],[-0.229,-0.018],[-0.008,0.005],[0,0]],\"v\":[[0.441,24.593],[0.4,24.612],[0.237,24.931],[0.568,25.293],[1.234,25.498],[1.805,25.501],[1.97,25.458],[2.045,25.362],[2.038,25.034],[1.685,24.648],[1.058,24.457],[0.502,24.553],[0.472,24.575]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.327,0.189],[0.057,0.236],[0.332,0.191],[0.424,0.043],[0.419,-0.138],[-0.08,-0.245],[-0.335,-0.194],[-0.408,-0.034]],\"o\":[[0.325,-0.188],[-0.057,-0.236],[-0.335,-0.194],[-0.426,-0.046],[-0.241,0.243],[0.076,0.244],[0.332,0.191],[0.408,0.034]],\"v\":[[5.459,27.472],[5.86,26.836],[5.277,26.195],[4.138,25.84],[2.871,25.978],[2.629,26.711],[3.247,27.367],[4.356,27.705]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.506,-0.292],[0.707,0.059],[0.57,0.329],[-0.016,0.658],[0.428,0.247],[0.079,0.306],[-0.325,0.188],[0,0],[-0.531,-0.045],[-0.42,-0.242],[-0.089,-0.398],[-0.702,-0.405],[-0.102,-0.408]],\"o\":[[-0.506,0.292],[-0.707,-0.059],[-0.702,-0.405],[-0.676,-0.07],[-0.42,-0.242],[-0.079,-0.306],[0,0],[0.325,-0.188],[0.531,0.045],[0.428,0.247],[1.171,-0.018],[0.57,0.329],[0.102,0.408]],\"v\":[[6.331,27.976],[4.511,28.325],[2.595,27.743],[1.566,26.147],[-0.089,25.673],[-0.837,24.851],[-0.468,24.11],[-0.367,24.052],[0.917,23.838],[2.342,24.269],[3.118,25.237],[5.928,25.819],[6.937,26.925]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.002,0.386],[0,0.273],[0.086,0.264],[0.332,0.191],[0.409,0.033],[0.249,-0.144],[-0.056,-0.237],[-0.454,-0.305],[0,0],[0.084,0.326],[-0.426,0.246],[-0.704,-0.059],[-0.573,-0.331],[-0.127,-0.411],[0,-0.283],[-0.001,-0.348],[-0.158,-0.127],[0,0],[0,0],[0,0]],\"o\":[[0.002,-0.386],[0.001,-0.273],[-0.085,-0.264],[-0.332,-0.191],[-0.409,-0.033],[-0.245,0.142],[0.05,0.202],[0,0],[-0.504,-0.367],[-0.104,-0.409],[0.43,-0.248],[0.704,0.059],[0.565,0.326],[0.081,0.261],[-0.001,0.284],[-0.003,0.302],[0,0],[0,0],[0,0],[-0.936,-0.673]],\"v\":[[-0.712,29.55],[-0.707,28.562],[-0.835,27.756],[-1.46,27.073],[-2.571,26.736],[-3.558,26.902],[-3.841,27.469],[-3.085,28.229],[-4.033,28.42],[-4.914,27.38],[-4.43,26.398],[-2.729,26.114],[-0.812,26.699],[0.226,27.804],[0.348,28.62],[0.349,29.567],[0.582,30.211],[2.927,28.858],[3.783,29.352],[0.689,31.138]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-6.925,27.933],[-6.213,27.521],[-1.867,32.613],[-2.576,33.023]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.406,-0.234],[-0.5,-0.04],[-0.304,0.176],[0.071,0.289],[0.406,0.234],[0.5,0.04],[0.302,-0.175],[-0.071,-0.289]],\"o\":[[0.406,0.234],[0.5,0.041],[0.302,-0.175],[-0.07,-0.289],[-0.406,-0.234],[-0.5,-0.041],[-0.304,0.176],[0.07,0.289]],\"v\":[[-7.738,33.424],[-6.379,33.836],[-5.172,33.633],[-4.824,32.938],[-5.538,32.154],[-6.897,31.741],[-8.101,31.942],[-8.452,32.639]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.337,-0.556],[-0.424,0.245],[-0.658,-0.054],[-0.647,-0.374],[-0.115,-0.461],[0.486,-0.28],[0.799,0.064],[0.786,0.452],[0,0],[0.275,0.522],[0.27,0.778],[0,0]],\"o\":[[-0.08,-0.258],[0.425,-0.246],[0.799,0.067],[0.645,0.372],[0.115,0.461],[-0.483,0.279],[-0.771,-0.065],[0,0],[-0.776,-0.448],[-0.276,-0.525],[0,0],[0.285,1.027]],\"v\":[[-9.194,32.156],[-8.679,31.402],[-7.054,31.115],[-4.884,31.776],[-3.745,33.025],[-4.3,34.137],[-6.223,34.459],[-8.559,33.684],[-8.571,33.676],[-10.148,32.221],[-10.967,30.266],[-10.128,29.782]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.5,0.041],[0.305,-0.176],[-0.07,-0.289],[-0.403,-0.233],[0,0],[-0.5,-0.04],[-0.302,0.175],[0.07,0.289],[0.406,0.234]],\"o\":[[-0.403,-0.233],[-0.5,-0.04],[-0.302,0.175],[0.07,0.289],[0,0],[0.406,0.234],[0.5,0.04],[0.305,-0.176],[-0.071,-0.289],[0,0]],\"v\":[[-11.539,33.296],[-12.894,32.885],[-14.102,33.088],[-14.449,33.783],[-13.739,34.566],[-11.727,35.727],[-10.368,36.14],[-9.165,35.938],[-8.813,35.242],[-9.528,34.457]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.114,-0.461],[0.486,-0.28],[0.799,0.066],[0.645,0.372],[0,0],[0.114,0.461],[-0.483,0.279],[-0.8,-0.066],[-0.645,-0.372]],\"o\":[[0.645,0.372],[0.114,0.461],[-0.483,0.279],[-0.799,-0.066],[0,0],[-0.645,-0.372],[-0.115,-0.462],[0.486,-0.28],[0.799,0.066],[0,0]],\"v\":[[-8.873,34.079],[-7.736,35.329],[-8.293,36.442],[-10.216,36.762],[-12.382,36.105],[-14.393,34.943],[-15.531,33.693],[-14.978,32.582],[-13.05,32.261],[-10.885,32.918]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.266,-0.149],[-0.494,-0.285],[-0.488,0.17],[-0.667,-0.385],[0.388,-0.224],[0.652,0.169],[0,0],[-0.285,0.165],[0.548,0.316],[0.478,-0.164],[0.569,0.329],[-0.382,0.22],[-0.683,-0.13]],\"o\":[[-0.531,-0.112],[-0.272,0.157],[0.393,0.227],[0.562,-0.192],[0.694,0.404],[-0.362,0.209],[0,0],[0.518,0.134],[0.285,-0.164],[-0.461,-0.269],[-0.535,0.181],[-0.664,-0.372],[0.331,-0.191],[0,0]],\"v\":[[-19.431,41.372],[-20.553,41.536],[-20.63,42.303],[-19.338,42.23],[-17.539,42.216],[-17.592,43.245],[-19.214,43.407],[-19.161,43.255],[-17.809,43.12],[-17.722,42.316],[-19.147,42.375],[-20.799,42.412],[-20.774,41.408],[-19.4,41.222]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-22.008,43.818],[-20.648,43.033],[-20.433,43.158],[-21.792,43.942],[-20.574,44.646],[-19.109,43.8],[-18.879,43.932],[-20.52,44.88],[-23.609,43.096],[-22.008,42.172],[-21.783,42.302],[-23.208,43.125]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0.43,0.252],[0.385,-0.222],[0,0]],\"o\":[[0,0],[0.404,-0.234],[-0.358,-0.211],[0,0],[0,0]],\"v\":[[-24.055,45.31],[-23.233,44.835],[-23.383,44.071],[-24.687,43.973],[-25.529,44.459]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.341,0.197],[-0.484,-0.276],[0.507,-0.293]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.341,-0.197],[0.504,-0.291],[0.507,0.288],[0,0]],\"v\":[[-20.989,45.15],[-21.225,45.286],[-23.196,45.075],[-23.829,45.44],[-22.66,46.115],[-22.839,46.218],[-25.928,44.435],[-24.907,43.845],[-23.183,43.961],[-22.991,44.941]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-23.67,46.698],[-26.759,44.915],[-26.584,44.813],[-23.495,46.597]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.772,-0.446]],\"o\":[[0,0],[0,0],[0.772,-0.446],[0,0]],\"v\":[[-28.579,46.22],[-26.995,47.135],[-26.156,46.651],[-27.741,45.736]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[-0.338,0.195],[1.008,-0.582]],\"o\":[[0,0],[0,0],[0,0],[0.338,-0.195],[1.008,-0.582],[0,0]],\"v\":[[-26.778,47.26],[-25.71,47.876],[-25.889,47.98],[-28.979,46.196],[-27.961,45.609],[-25.94,46.776]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-29.596,46.558],[-29.404,46.447],[-29.4,46.45],[-28.692,47.769],[-26.261,48.189],[-26.257,48.192],[-26.469,48.314],[-28.63,47.931],[-27.967,49.179],[-28.179,49.302],[-28.183,49.299],[-28.911,47.895],[-31.196,47.487],[-31.2,47.484],[-31.005,47.372],[-28.983,47.727]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-31.528,49.314],[-30.169,48.53],[-29.953,48.654],[-31.312,49.439],[-30.094,50.142],[-28.629,49.296],[-28.4,49.429],[-30.04,50.376],[-33.13,48.592],[-31.529,47.668],[-31.303,47.798],[-32.729,48.621]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.672,0.376],[0.669,-0.387]],\"o\":[[0,0],[0,0],[0.69,-0.398],[-0.654,-0.366],[0,0]],\"v\":[[-30.92,41.457],[-28.286,42.978],[-27.68,42.628],[-28.032,41.272],[-30.314,41.107]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.772,-0.43],[0.813,-0.469],[0.262,-0.151],[0,0],[-0.261,0.151]],\"o\":[[0.799,0.446],[-0.261,0.151],[0,0],[0.262,-0.151],[0.785,-0.453]],\"v\":[[-27.853,41.169],[-27.45,42.76],[-28.235,43.214],[-31.325,41.43],[-30.539,40.977]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0.43,0.252],[0.385,-0.222],[0,0]],\"o\":[[0,0],[0.404,-0.234],[-0.358,-0.211],[0,0],[0,0]],\"v\":[[-31.77,43.644],[-30.947,43.169],[-31.098,42.405],[-32.401,42.307],[-33.243,42.793]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.341,0.197],[-0.484,-0.276],[0.507,-0.293]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.341,-0.197],[0.504,-0.291],[0.507,0.288],[0,0]],\"v\":[[-28.704,43.484],[-28.94,43.621],[-30.911,43.409],[-31.544,43.774],[-30.375,44.449],[-30.554,44.552],[-33.643,42.769],[-32.622,42.179],[-30.898,42.295],[-30.706,43.275]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-32.463,44.523],[-34.966,43.798],[-33.71,45.243]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-31.158,44.901],[-32.173,44.611],[-33.559,45.411],[-33.051,45.994],[-33.244,46.105],[-35.292,43.721],[-35.096,43.608],[-30.966,44.79]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.305,-0.176],[0.837,0.48],[-0.795,0.459],[-0.541,-0.044],[0,0],[0.262,-0.151],[-0.745,-0.426],[-0.669,0.387],[0.061,0.265]],\"o\":[[0.077,0.312],[-0.782,0.451],[-0.832,-0.473],[0.305,-0.176],[0,0],[-0.464,-0.038],[-0.676,0.39],[0.73,0.414],[0.262,-0.151],[0,0]],\"v\":[[-33.879,45.978],[-34.261,46.734],[-37.016,46.521],[-37.421,44.91],[-36.112,44.689],[-36.093,44.841],[-37.209,45.032],[-36.853,46.416],[-34.482,46.606],[-34.149,45.96]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.137254908681,0.121568627656,0.1254902035,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":11,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.733,-0.423],[-2.621,-1.513],[-0.767,0.443],[2.545,1.469]],\"o\":[[-0.782,0.452],[2.468,1.425],[0.748,-0.432],[-2.545,-1.469]],\"v\":[[59.432,-28.605],[62.189,-25.658],[67.042,-24.185],[64.348,-27.036]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.973,-0.562],[3.659,2.113],[0.466,0.88],[-1.004,0.58],[-3.72,-2.148],[-0.466,-0.871]],\"o\":[[-1.954,1.128],[-1.898,-1.096],[-0.466,-0.879],[1.908,-1.102],[1.852,1.069],[0.466,0.871]],\"v\":[[68.832,-23.085],[60.413,-24.561],[56.866,-27.525],[57.673,-29.714],[66.115,-28.145],[69.593,-25.234]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0.032,-0.139],[0.068,-0.137],[0.105,-0.129],[0.134,-0.107],[0,0],[-0.131,0.405],[0.005,0.391]],\"o\":[[0,0],[0,0],[0,0],[0.018,0.125],[-0.03,0.139],[-0.069,0.136],[-0.106,0.128],[0,0],[0.286,-0.377],[0.131,-0.405],[0,0]],\"v\":[[52.144,-26.592],[63.334,-20.131],[61.531,-19.09],[53.058,-23.982],[53.038,-23.587],[52.889,-23.174],[52.627,-22.776],[52.267,-22.423],[50.236,-23.595],[50.862,-24.768],[51.051,-25.961]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.733,-0.423],[-2.621,-1.513],[-0.767,0.443],[2.545,1.469]],\"o\":[[-0.782,0.452],[2.468,1.425],[0.748,-0.432],[-2.545,-1.469]],\"v\":[[45.944,-20.818],[48.701,-17.87],[53.554,-16.398],[50.86,-19.249]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.973,-0.562],[3.659,2.113],[0.466,0.88],[-1.004,0.58],[-3.72,-2.148],[-0.466,-0.871]],\"o\":[[-1.954,1.128],[-1.898,-1.096],[-0.466,-0.879],[1.908,-1.102],[1.852,1.069],[0.466,0.871]],\"v\":[[55.344,-15.298],[46.925,-16.774],[43.378,-19.738],[44.185,-21.926],[52.627,-20.357],[56.105,-17.447]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.224,0.129],[0.3,0.111],[0.274,0.048],[0.242,-0.019],[0.164,-0.095],[0.041,-0.129],[-0.066,-0.148],[-0.171,-0.16],[-0.26,-0.15],[-0.276,-0.097],[-0.25,-0.032],[-0.215,0.034],[-0.168,0.097],[-0.047,0.123],[0.049,0.136],[0.142,0.142]],\"o\":[[-0.28,-0.161],[-0.301,-0.112],[-0.273,-0.048],[-0.241,0.019],[-0.157,0.091],[-0.04,0.129],[0.064,0.147],[0.171,0.16],[0.285,0.165],[0.274,0.097],[0.25,0.032],[0.217,-0.034],[0.16,-0.093],[0.045,-0.124],[-0.049,-0.136],[-0.143,-0.141]],\"v\":[[42.198,-16.337],[41.328,-16.747],[40.467,-16.986],[39.694,-17.029],[39.086,-16.858],[38.791,-16.529],[38.829,-16.114],[39.181,-15.653],[39.826,-15.188],[40.666,-14.795],[41.453,-14.602],[42.152,-14.605],[42.728,-14.801],[43.038,-15.125],[43.033,-15.515],[42.747,-15.931]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.809,-0.467],[-0.605,-0.535],[-0.222,-0.483],[0.161,-0.418],[0.561,-0.324],[0.77,-0.115],[0,0],[-0.606,0.35],[0.213,0.529],[1.064,0.619],[0,0],[0.74,-0.427],[0.452,-0.067],[0.506,0.052],[0.528,0.171],[0.493,0.285],[0.331,0.355],[0.087,0.343],[-0.17,0.312],[-0.431,0.249],[-0.586,0.072],[-0.688,-0.108],[-0.768,-0.291]],\"o\":[[0.972,0.561],[0.606,0.535],[0.222,0.483],[-0.16,0.419],[-0.672,0.388],[0,0],[0.808,-0.032],[0.622,-0.359],[-0.214,-0.529],[0,0],[0.355,0.623],[-0.336,0.194],[-0.452,0.067],[-0.505,-0.051],[-0.529,-0.171],[-0.575,-0.332],[-0.333,-0.354],[-0.087,-0.343],[0.169,-0.312],[0.447,-0.258],[0.587,-0.071],[0.688,0.108],[0.769,0.291]],\"v\":[[45.307,-16.651],[47.673,-15.007],[48.914,-13.481],[49.006,-12.128],[47.925,-11.014],[45.763,-10.26],[43.778,-11.405],[45.9,-11.978],[46.513,-13.311],[44.595,-15.033],[44.545,-15.021],[43.967,-13.445],[42.785,-13.053],[41.347,-13.03],[39.797,-13.364],[38.263,-14.047],[36.903,-15.078],[36.274,-16.125],[36.397,-17.108],[37.297,-17.95],[38.847,-18.444],[40.758,-18.388],[42.941,-17.788]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.194,-0.112],[-0.221,-0.069],[-0.212,-0.021],[-0.192,0.028],[-0.134,0.077],[-0.047,0.11],[0.037,0.125],[0.116,0.127],[0.194,0.112],[0.221,0.07],[0.214,0.02],[0.192,-0.028],[0.137,-0.079],[0.047,-0.112],[-0.039,-0.122],[-0.123,-0.126]],\"o\":[[0.194,0.112],[0.222,0.069],[0.213,0.021],[0.192,-0.028],[0.137,-0.079],[0.047,-0.11],[-0.037,-0.125],[-0.117,-0.126],[-0.198,-0.115],[-0.219,-0.07],[-0.214,-0.02],[-0.192,0.028],[-0.145,0.084],[-0.046,0.112],[0.038,0.121],[0.122,0.126]],\"v\":[[29.527,-9.85],[30.15,-9.58],[30.802,-9.445],[31.408,-9.455],[31.896,-9.613],[32.172,-9.896],[32.186,-10.248],[31.956,-10.626],[31.491,-10.984],[30.862,-11.26],[30.211,-11.395],[29.603,-11.383],[29.109,-11.222],[28.822,-10.928],[28.811,-10.577],[29.053,-10.206]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.234,-0.135],[-0.256,-0.082],[-0.244,-0.018],[-0.221,0.042],[-0.183,0.106],[-0.071,0.129],[0.03,0.141],[0.138,0.15],[0.244,0.141],[0.256,0.082],[0.253,0.022],[0.233,-0.035],[0.183,-0.105],[0.07,-0.132],[-0.039,-0.146],[-0.138,-0.15]],\"o\":[[0.249,0.144],[0.256,0.081],[0.244,0.018],[0.22,-0.042],[0.175,-0.101],[0.07,-0.129],[-0.03,-0.141],[-0.137,-0.15],[-0.219,-0.126],[-0.256,-0.081],[-0.251,-0.022],[-0.234,0.035],[-0.172,0.099],[-0.07,0.131],[0.037,0.145],[0.137,0.15]],\"v\":[[34.122,-6.906],[34.88,-6.568],[35.63,-6.419],[36.328,-6.456],[36.934,-6.678],[37.303,-7.024],[37.363,-7.428],[37.111,-7.864],[36.539,-8.301],[35.827,-8.613],[35.065,-8.768],[34.337,-8.749],[33.712,-8.538],[33.35,-8.191],[33.302,-7.776],[33.565,-7.334]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.463,0.267],[0.215,0.201],[0.109,0.217],[-0.011,0.226],[-0.149,0.227],[0.659,0.116],[0.524,0.302],[0.224,0.282],[0.026,0.284],[-0.178,0.27],[-0.382,0.221],[-0.47,0.103],[-0.492,-0.013],[-0.481,-0.128],[-0.412,-0.238],[-0.181,-0.386],[0.157,-0.408],[-0.393,0.007],[-0.382,-0.062],[-0.356,-0.126],[-0.31,-0.179],[-0.243,-0.303],[-0.02,-0.309],[0.204,-0.294],[0.431,-0.249],[0.508,-0.119],[0.533,0.01],[0.529,0.138]],\"o\":[[-0.305,-0.176],[-0.216,-0.202],[-0.108,-0.216],[0.009,-0.226],[-0.691,0.081],[-0.659,-0.116],[-0.417,-0.241],[-0.224,-0.282],[-0.027,-0.284],[0.177,-0.27],[0.389,-0.224],[0.469,-0.104],[0.492,0.013],[0.481,0.128],[0.519,0.3],[0.18,0.386],[0.39,-0.084],[0.394,-0.006],[0.382,0.062],[0.357,0.126],[0.468,0.27],[0.243,0.303],[0.019,0.309],[-0.204,0.294],[-0.424,0.245],[-0.507,0.12],[-0.533,-0.01],[-0.529,-0.138]],\"v\":[[32.617,-5.799],[31.836,-6.365],[31.349,-6.993],[31.202,-7.657],[31.439,-8.336],[29.415,-8.388],[27.64,-9.016],[26.677,-9.8],[26.3,-10.649],[26.527,-11.48],[27.365,-12.216],[28.654,-12.708],[30.095,-12.844],[31.554,-12.633],[32.893,-12.084],[33.944,-11.055],[33.979,-9.864],[35.152,-10],[36.315,-9.917],[37.421,-9.635],[38.422,-9.177],[39.489,-8.316],[39.883,-7.398],[39.606,-6.493],[38.653,-5.679],[37.256,-5.133],[35.698,-4.969],[34.105,-5.19]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.481,-0.613],[-0.529,-0.561],[-0.62,-0.538],[-0.797,-0.574],[0,0],[0.613,0.557],[0.51,0.561],[0.422,0.567],[0.359,0.569],[0,0],[0,0],[0,0]],\"o\":[[0.514,0.72],[0.481,0.612],[0.529,0.562],[0.62,0.539],[0,0],[-0.744,-0.552],[-0.614,-0.557],[-0.509,-0.56],[-0.422,-0.567],[0,0],[0,0],[0,0],[0,0]],\"v\":[[25.068,-9.073],[26.56,-7.074],[28.075,-5.314],[29.798,-3.665],[31.922,-1.995],[30.033,-0.905],[27.999,-2.569],[26.314,-4.245],[24.918,-5.937],[23.747,-7.641],[19.934,-5.44],[17.965,-6.577],[23.678,-9.875]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.27,0.156],[0.721,-0.416],[0.052,-0.124],[-0.052,-0.141],[-0.149,-0.145],[-0.244,-0.141],[-0.287,-0.104],[-0.274,-0.046],[-0.235,0.018],[-0.164,0.095],[-0.042,0.128],[0.066,0.146],[0.176,0.159]],\"o\":[[-1.176,-0.679],[-0.164,0.095],[-0.052,0.124],[0.053,0.14],[0.15,0.146],[0.27,0.156],[0.287,0.104],[0.272,0.045],[0.235,-0.018],[0.164,-0.095],[0.043,-0.128],[-0.068,-0.147],[-0.178,-0.159]],\"v\":[[22.715,-0.708],[19.869,-1.101],[19.545,-0.772],[19.545,-0.376],[19.847,0.053],[20.438,0.484],[21.273,0.874],[22.115,1.098],[22.877,1.138],[23.476,0.968],[23.785,0.635],[23.75,0.224],[23.385,-0.235]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.509,-0.294],[-0.327,-0.352],[-0.092,-0.344],[0.151,-0.314],[0.412,-0.238],[0.593,-0.078],[0.688,0.106],[0.764,0.287],[0.799,0.461],[0.592,0.543],[0.222,0.501],[-0.161,0.436],[-0.573,0.331],[-0.55,0.088],[0,0],[0.493,-0.285],[0.091,-0.234],[-0.113,-0.27],[-0.308,-0.295],[-0.496,-0.295],[0,0],[-0.759,0.438],[-0.438,0.064],[-0.493,-0.06],[-0.523,-0.179]],\"o\":[[0.539,0.311],[0.327,0.352],[0.09,0.344],[-0.152,0.314],[-0.462,0.266],[-0.594,0.078],[-0.686,-0.105],[-0.764,-0.287],[-0.942,-0.544],[-0.592,-0.542],[-0.223,-0.5],[0.16,-0.437],[0.633,-0.366],[0,0],[-0.732,0.058],[-0.305,0.176],[-0.091,0.234],[0.112,0.27],[0.309,0.295],[0,0],[-0.328,-0.639],[0.34,-0.196],[0.438,-0.064],[0.492,0.059],[0.524,0.179]],\"v\":[[24.331,-1.817],[25.631,-0.822],[26.259,0.221],[26.169,1.208],[25.323,2.035],[23.74,2.552],[21.819,2.511],[19.642,1.921],[17.297,0.798],[14.996,-0.831],[13.775,-2.395],[13.683,-3.8],[14.782,-4.95],[16.557,-5.631],[18.572,-4.468],[16.736,-3.954],[16.142,-3.339],[16.176,-2.582],[16.807,-1.735],[18.014,-0.85],[18.049,-0.869],[18.695,-2.486],[19.862,-2.877],[21.257,-2.884],[22.781,-2.526]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.854,-0.128],[0,0],[-0.633,0.366],[0.034,0.331],[0.519,0.3],[1.149,-0.663],[0.467,-0.37],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.214,0.124],[-1.068,-0.065],[-0.997,-0.576],[-0.131,-0.732],[0.973,-0.562]],\"o\":[[0,0],[1.019,-0.059],[0.477,-0.275],[-0.033,-0.33],[-1.084,-0.626],[-0.424,0.245],[0,0],[0,0],[0,0],[0,0],[0,0],[0.263,-0.187],[0.844,-0.487],[1.068,0.065],[1.104,0.637],[0.131,0.733],[-0.79,0.456]],\"v\":[[15.404,7.215],[13.343,6.025],[15.821,5.388],[16.486,4.479],[15.657,3.534],[12.309,3.59],[10.973,4.512],[5.175,0.807],[9.52,-1.701],[11.49,-0.564],[8.525,1.148],[10.601,2.479],[11.316,2.013],[14.182,1.38],[17.28,2.342],[19.133,4.397],[17.869,6.338]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.106,-0.251],[0,0],[0,0],[-0.182,-0.286],[-0.156,-0.288],[-0.133,-0.279]],\"o\":[[0,0],[0,0],[0.198,0.268],[0.182,0.285],[0.157,0.289],[0.132,0.279]],\"v\":[[2.692,10.209],[4.65,9.079],[0.826,6.871],[1.395,7.702],[1.902,8.563],[2.336,9.415]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.223,0.521],[0.278,0.527],[0.329,0.505],[0.358,0.428]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.157,-0.456],[-0.223,-0.521],[-0.279,-0.527],[-0.331,-0.506],[0,0]],\"v\":[[-0.602,4.143],[6.299,8.127],[7.284,7.558],[9.085,8.598],[8.1,9.167],[10.344,10.462],[8.695,11.414],[6.451,10.119],[2.874,12.184],[0.988,11.096],[0.419,9.63],[-0.332,8.059],[-1.245,6.511],[-2.279,5.111]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.896,-0.094],[0,0],[-0.733,0.423],[0.007,0.301],[0.473,0.273],[0.583,-0.031],[0.558,-0.322],[0,0],[0,0],[0,0],[0.947,0.546],[0.821,-0.474],[0.046,-0.573],[0,0],[-0.767,0.443],[-0.971,-0.021],[-0.804,-0.464],[0.726,-0.837],[0,0],[-0.801,-0.074],[-0.677,-0.391],[-0.034,-0.668],[0.988,-0.57]],\"o\":[[0,0],[1.084,-0.009],[0.462,-0.267],[-0.007,-0.301],[-0.489,-0.282],[-0.583,0.032],[0,0],[0,0],[0,0],[1.068,-0.617],[-0.89,-0.514],[-0.549,0.317],[0,0],[0.19,-0.556],[0.84,-0.485],[0.971,0.021],[1.43,0.826],[0,0],[0.676,-0.279],[0.802,0.075],[1.023,0.591],[0.035,0.667],[-0.847,0.489]],\"v\":[[-1.538,16.909],[-3.637,15.697],[-0.913,15.049],[-0.23,14.197],[-0.951,13.335],[-2.558,12.958],[-4.27,13.488],[-5.031,13.928],[-6.878,12.861],[-6.174,12.454],[-5.99,10.709],[-8.557,10.649],[-9.45,11.984],[-11.42,10.847],[-9.985,9.349],[-7.268,8.653],[-4.605,9.38],[-3.55,11.874],[-3.512,11.896],[-1.295,11.589],[0.923,12.288],[2.509,14.175],[1.078,16.033]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.142,-0.082],[0,0],[0,0],[0,0],[0,0],[0.304,0.338],[0.14,0.328],[0.018,0.303],[-0.01,0.258],[0.027,0.225],[0.081,0.19],[0.15,0.157],[0.239,0.138],[0.438,0.024],[0.409,-0.236],[-0.103,-0.804],[0,0],[-0.897,0.518],[-0.476,0.107],[-0.499,-0.024],[-0.505,-0.153],[-0.473,-0.273],[-0.275,-0.294],[-0.128,-0.296],[-0.016,-0.3],[0.022,-0.3],[-0.001,-0.196],[-0.035,-0.17],[-0.081,-0.135]],\"o\":[[0,0],[0,0],[0,0],[0,0],[-0.56,-0.323],[-0.304,-0.339],[-0.139,-0.327],[-0.019,-0.304],[0.011,-0.271],[-0.028,-0.225],[-0.083,-0.191],[-0.151,-0.157],[-0.468,-0.27],[-0.438,-0.024],[-0.706,0.408],[0,0],[0.098,-0.768],[0.416,-0.24],[0.474,-0.107],[0.499,0.024],[0.504,0.152],[0.504,0.291],[0.276,0.293],[0.128,0.296],[0.015,0.299],[-0.01,0.206],[0.001,0.197],[0.036,0.171],[0.081,0.135]],\"v\":[[-8.137,18.824],[-4.657,16.814],[-2.657,17.969],[-8.118,21.122],[-8.943,20.646],[-10.238,19.653],[-10.905,18.654],[-11.142,17.707],[-11.155,16.864],[-11.178,16.119],[-11.342,15.496],[-11.69,14.974],[-12.275,14.531],[-13.633,14.09],[-14.903,14.409],[-15.807,16.227],[-17.929,15.002],[-16.437,13.074],[-15.099,12.553],[-13.639,12.428],[-12.134,12.692],[-10.668,13.33],[-9.499,14.207],[-8.894,15.091],[-8.679,15.986],[-8.689,16.886],[-8.703,17.488],[-8.649,18.039],[-8.473,18.498]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0.032,-0.139],[0.068,-0.137],[0.105,-0.129],[0.134,-0.107],[0,0],[-0.131,0.405],[0.005,0.391]],\"o\":[[0,0],[0,0],[0,0],[0.018,0.125],[-0.03,0.139],[-0.069,0.136],[-0.106,0.128],[0,0],[0.286,-0.377],[0.131,-0.405],[0,0]],\"v\":[[-21.765,16.079],[-10.574,22.54],[-12.378,23.581],[-20.851,18.689],[-20.871,19.084],[-21.02,19.497],[-21.282,19.895],[-21.642,20.248],[-23.673,19.076],[-23.047,17.904],[-22.858,16.711]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 12\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.733,-0.423],[-2.621,-1.513],[-0.767,0.443],[2.545,1.469]],\"o\":[[-0.782,0.452],[2.468,1.425],[0.748,-0.432],[-2.545,-1.469]],\"v\":[[-31.199,23.721],[-28.442,26.668],[-23.589,28.141],[-26.283,25.29]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.973,-0.562],[3.659,2.113],[0.466,0.88],[-1.004,0.58],[-3.72,-2.148],[-0.466,-0.871]],\"o\":[[-1.954,1.128],[-1.898,-1.096],[-0.466,-0.879],[1.908,-1.102],[1.852,1.069],[0.466,0.871]],\"v\":[[-21.799,29.241],[-30.218,27.764],[-33.765,24.801],[-32.958,22.612],[-24.516,24.181],[-21.039,27.092]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 13\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":13,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.733,-0.423],[-2.621,-1.513],[-0.767,0.443],[2.545,1.469]],\"o\":[[-0.782,0.452],[2.468,1.425],[0.748,-0.432],[-2.545,-1.469]],\"v\":[[-37.943,27.614],[-35.186,30.562],[-30.333,32.035],[-33.027,29.183]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.973,-0.562],[3.659,2.113],[0.466,0.88],[-1.004,0.58],[-3.72,-2.148],[-0.466,-0.871]],\"o\":[[-1.954,1.128],[-1.898,-1.096],[-0.466,-0.879],[1.908,-1.102],[1.852,1.069],[0.466,0.871]],\"v\":[[-28.543,33.134],[-36.962,31.658],[-40.509,28.694],[-39.702,26.506],[-31.26,28.075],[-27.782,30.985]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 14\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":14,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.733,-0.423],[-2.621,-1.513],[-0.767,0.443],[2.545,1.469]],\"o\":[[-0.782,0.452],[2.468,1.425],[0.748,-0.432],[-2.545,-1.469]],\"v\":[[-44.687,31.508],[-41.93,34.455],[-37.077,35.928],[-39.771,33.077]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.973,-0.562],[3.659,2.113],[0.466,0.88],[-1.004,0.58],[-3.72,-2.148],[-0.466,-0.871]],\"o\":[[-1.954,1.128],[-1.898,-1.096],[-0.466,-0.879],[1.908,-1.102],[1.852,1.069],[0.466,0.871]],\"v\":[[-35.287,37.028],[-43.706,35.552],[-47.253,32.588],[-46.446,30.4],[-38.004,31.968],[-34.526,34.879]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 15\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":15,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.106,-0.251],[0,0],[0,0],[-0.182,-0.286],[-0.156,-0.288],[-0.133,-0.279]],\"o\":[[0,0],[0,0],[0.198,0.268],[0.182,0.285],[0.157,0.289],[0.132,0.279]],\"v\":[[-47.75,39.332],[-45.792,38.201],[-49.616,35.993],[-49.047,36.824],[-48.54,37.685],[-48.106,38.538]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.223,0.521],[0.278,0.527],[0.329,0.505],[0.358,0.428]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.157,-0.456],[-0.223,-0.521],[-0.279,-0.527],[-0.331,-0.506],[0,0]],\"v\":[[-51.044,33.265],[-44.143,37.249],[-43.158,36.681],[-41.357,37.721],[-42.342,38.289],[-40.098,39.585],[-41.747,40.537],[-43.991,39.241],[-47.568,41.307],[-49.454,40.218],[-50.023,38.753],[-50.774,37.182],[-51.687,35.634],[-52.721,34.234]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.149019613862,0.04705882445,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 16\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":16,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":16,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.298,-0.328],[0,0],[0,0],[0.336,-0.268]],\"o\":[[0.407,0.306],[0,0],[0,0],[-0.233,0.299],[0,0]],\"v\":[[122.511,-16.157],[123.566,-15.207],[123.573,-15.203],[124.148,-10.095],[123.299,-9.236]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[45.863,35.554],[44.903,36.108],[39.091,36.149],[39.641,39.146],[38.78,39.643],[38.04,35.607],[38.502,35.603]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.78,33.453],[49.675,33.353],[48.714,33.908],[35.37,33.998],[36.63,40.885],[36.206,41.129],[35.868,41.324],[34.318,33.456]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[118.158,-18.756],[119.138,-18.189],[119.936,-7.212],[119.032,-6.69]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[30.452,30.954],[54.371,30.642],[53.398,31.204],[31.035,31.495],[33.122,42.91],[32.268,43.403],[29.991,30.958]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0.527,-0.148],[0,0],[0,0],[0.459,0.17]],\"o\":[[0,0],[-0.474,0.208],[0,0],[0,0],[-0.482,-0.132],[0,0]],\"v\":[[-27.25,70.922],[-15.698,71.03],[-17.209,71.567],[-25.814,71.488],[-25.821,71.484],[-27.231,71.035]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":6,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[113.83,-21.254],[114.811,-20.688],[115.955,-4.914],[115.05,-4.391]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[26.125,28.456],[58.897,28.029],[57.923,28.591],[26.708,28.997],[29.626,44.928],[28.767,45.424],[25.663,28.459]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-31.577,68.424],[-11.394,68.611],[-12.329,69.151],[-31.173,68.978],[-31.514,68.781]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[109.496,-23.757],[110.484,-23.186],[111.979,-2.618],[111.068,-2.093]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[21.797,25.957],[63.429,25.412],[62.455,25.974],[22.381,26.498],[26.125,46.95],[25.272,47.442],[21.336,25.961]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-35.904,65.925],[-7.203,66.192],[-8.139,66.732],[-35.5,66.48],[-35.841,66.283]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[105.168,-26.255],[106.156,-25.685],[107.992,-0.316],[107.087,0.206]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[17.47,23.459],[67.954,22.8],[66.981,23.362],[18.053,24],[22.623,48.971],[21.77,49.464],[17.009,23.462]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-40.232,63.427],[-3.006,63.769],[-3.948,64.312],[-39.828,63.981],[-40.169,63.785]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[100.841,-28.754],[101.829,-28.183],[104.01,1.983],[103.105,2.505]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[13.135,20.956],[72.486,20.183],[71.506,20.749],[13.726,21.501],[19.122,50.993],[18.268,51.486],[12.681,20.964]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-44.559,60.929],[1.184,61.349],[0.249,61.889],[-44.162,61.479],[-44.503,61.282]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[96.513,-31.252],[97.501,-30.682],[100.029,4.281],[99.124,4.804]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[8.808,18.458],[77.011,17.57],[76.032,18.136],[9.398,19.003],[15.62,53.015],[14.767,53.507],[8.354,18.466]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-48.887,58.43],[5.375,58.93],[4.439,59.47],[-48.49,58.98],[-48.831,58.784]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[92.186,-33.75],[93.174,-33.18],[96.053,6.577],[95.142,7.102]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[4.48,15.959],[81.537,14.958],[80.563,15.52],[5.071,16.505],[12.119,55.036],[11.272,55.525],[4.026,15.967]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-53.221,55.928],[9.565,56.51],[8.63,57.051],[-52.817,56.482],[-53.158,56.285]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[87.859,-36.249],[88.846,-35.679],[92.066,8.879],[91.161,9.401]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[0.153,13.461],[86.069,12.341],[85.095,12.903],[0.743,14.006],[8.166,54.586],[-57.145,53.984],[-57.486,53.787],[-57.549,53.429],[7.119,54.025],[-0.301,13.469]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[83.531,-38.747],[84.519,-38.177],[88.022,10.311],[-3.594,11.505],[3.84,52.087],[-61.472,51.485],[-61.813,51.288],[-61.877,50.931],[2.794,51.525],[-4.63,10.971],[-4.176,10.963],[87.039,9.771]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[79.197,-41.25],[80.184,-40.68],[83.695,7.812],[-7.921,9.007],[-0.487,49.588],[-65.799,48.987],[-66.141,48.79],[-66.205,48.433],[-1.533,49.027],[-8.965,8.468],[-8.503,8.465],[82.711,7.273]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[74.869,-43.748],[75.857,-43.178],[79.367,5.314],[-12.249,6.508],[-4.815,47.09],[-70.127,46.488],[-70.468,46.291],[-70.532,45.934],[-5.861,46.528],[-13.292,5.97],[-12.831,5.966],[78.384,4.774]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[70.542,-46.247],[71.529,-45.676],[75.04,2.815],[-16.576,4.01],[-9.142,44.591],[-74.454,43.99],[-74.795,43.793],[-74.86,43.436],[-10.188,44.03],[-17.619,3.472],[-17.165,3.464],[74.056,2.276]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 12\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[66.214,-48.745],[67.202,-48.175],[70.713,0.317],[-20.904,1.511],[-13.477,42.089],[-78.789,41.487],[-79.13,41.29],[-79.187,40.938],[-14.516,41.532],[-21.947,0.973],[-21.493,0.965],[69.729,-0.223]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 13\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":13,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[61.887,-51.244],[62.875,-50.673],[66.385,-2.182],[-25.231,-0.987],[-17.804,39.59],[-83.116,38.989],[-83.457,38.792],[-83.514,38.439],[-18.843,39.033],[-26.274,-1.525],[-25.82,-1.533],[65.401,-2.721]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 14\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":14,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[57.559,-53.742],[58.547,-53.172],[62.058,-4.68],[-29.559,-3.486],[-22.132,37.092],[-87.444,36.49],[-87.785,36.293],[-87.842,35.941],[-23.17,36.535],[-30.602,-4.024],[-30.148,-4.032],[61.074,-5.22]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 15\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":15,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[53.232,-56.241],[54.22,-55.67],[57.723,-7.183],[-33.893,-5.988],[-26.459,34.593],[-91.771,33.992],[-92.112,33.795],[-92.176,33.438],[-27.505,34.032],[-34.929,-6.522],[-34.475,-6.53],[56.739,-7.722]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 16\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":16,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[48.905,-58.739],[49.885,-58.173],[53.396,-9.681],[-38.221,-8.486],[-30.786,32.095],[-96.099,31.493],[-96.44,31.297],[-96.504,30.94],[-31.832,31.534],[-39.257,-9.021],[-38.802,-9.028],[52.412,-10.221]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 17\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":17,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[44.57,-61.242],[45.558,-60.671],[49.068,-12.18],[-42.548,-10.985],[-35.114,29.596],[-100.426,28.995],[-100.767,28.798],[-100.831,28.441],[-36.16,29.035],[-43.591,-11.523],[-43.13,-11.527],[48.084,-12.719]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 18\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":18,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[40.243,-63.74],[41.23,-63.17],[44.741,-14.678],[-46.875,-13.483],[-39.441,27.098],[-104.753,26.497],[-105.095,26.3],[-105.159,25.943],[-40.487,26.537],[-47.918,-14.022],[-47.457,-14.025],[43.757,-15.218]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 19\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":19,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[35.915,-66.238],[36.903,-65.668],[40.414,-17.176],[-51.203,-15.982],[-43.769,24.6],[-109.088,23.994],[-109.429,23.797],[-109.486,23.444],[-44.815,24.038],[-52.246,-16.52],[-51.792,-16.528],[39.43,-17.716]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 20\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":20,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[31.588,-68.737],[32.575,-68.167],[36.086,-19.675],[-55.53,-18.48],[-48.103,22.097],[-113.415,21.496],[-113.756,21.299],[-113.814,20.946],[-49.142,21.54],[-56.573,-19.019],[-56.119,-19.026],[35.102,-20.214]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 21\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":21,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.309,-0.15],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.333,0.128]],\"v\":[[28.249,-70.608],[31.759,-22.173],[-59.858,-20.979],[-52.431,19.599],[-117.743,18.997],[-118.084,18.8],[-118.141,18.447],[-53.47,19.041],[-60.901,-21.517],[-60.447,-21.525],[30.775,-22.713],[27.281,-71.017]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 22\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":22,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-13.971,-53.962],[-13.569,-48.343],[-23.934,-48.209],[-22.956,-48.774],[-14.553,-48.883],[-14.882,-53.436]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 23\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":23,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-8.623,-57.049],[-7.757,-44.988],[-30.02,-44.696],[-29.036,-45.264],[-8.741,-45.527],[-9.534,-56.523]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 24\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":24,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-93.158,-8.243],[-92.273,-3.404],[-101.392,-3.489],[-100.457,-4.029],[-93.319,-3.966],[-94.014,-7.749]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 25\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":25,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-3.235,-59.873],[-1.914,-41.616],[-36.129,-41.168],[-35.15,-41.734],[-2.899,-42.155],[-4.16,-59.626],[-3.705,-59.889]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-89.02,-10.632],[-88.166,-11.125],[-86.1,0.162],[-107.374,-0.035],[-106.439,-0.575],[-87.147,-0.399]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 26\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":26,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[2.163,-62.989],[3.955,-38.227],[-42.267,-37.625],[-41.287,-38.191],[2.971,-38.767],[1.238,-62.742],[1.693,-63.005]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-84.273,-13.373],[-83.42,-13.866],[-80.23,3.55],[-113.056,3.245],[-112.121,2.705],[-81.277,2.99]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 27\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":27,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[7.56,-66.105],[9.825,-34.839],[-48.41,-34.078],[-47.43,-34.644],[8.84,-35.378],[6.635,-65.859],[7.09,-66.121]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-79.526,-16.113],[-78.673,-16.606],[-74.368,6.935],[-118.739,6.526],[-117.803,5.986],[-75.408,6.378]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 28\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":28,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[12.958,-69.222],[15.694,-31.45],[-54.547,-30.535],[-53.568,-31.1],[14.709,-31.989],[12.033,-68.975],[12.488,-69.238]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[-0.21,0.171],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0.155,-0.188],[0,0],[0,0]],\"v\":[[-74.779,-18.854],[-73.926,-19.347],[-68.499,10.324],[-123.838,9.815],[-123.284,9.273],[-69.538,9.767]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 29\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":29,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.31,0.056],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0.301,-0.075]],\"v\":[[18.383,-71.87],[21.562,-28.06],[-60.691,-26.988],[-59.712,-27.553],[20.578,-28.6],[17.465,-71.668]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0.019,0.186],[0,0]],\"o\":[[0,0],[0,0],[0,0],[-0.045,-0.179],[0,0],[0,0]],\"v\":[[-70.033,-21.594],[-69.179,-22.087],[-62.629,13.712],[-124.739,13.141],[-124.835,12.589],[-63.669,13.156]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 30\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":30,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.323,-0.051],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.314,0.032]],\"v\":[[24.013,-71.888],[27.431,-24.672],[-64.185,-23.477],[-56.758,17.1],[-122.017,16.501],[-122.428,16.221],[-122.435,16.217],[-122.436,16.209],[-122.475,15.945],[-57.797,16.543],[-65.228,-24.015],[-64.774,-24.023],[26.447,-25.211],[23.061,-72.011]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 31\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":31,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":20,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"pattern\",\"np\":31,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.313,-0.181],[0,0],[-0.327,-0.246],[-0.298,-0.328],[0,0],[1.186,-1.546],[0.336,-0.268],[0,0],[0.314,-0.181],[0,0],[3.75,1.035],[0,0],[0.234,0.078],[0.228,0.082],[0.618,0.357],[0,0],[0.18,0.126],[0,0],[0,0],[0,0],[-3.323,1.919],[0,0],[-0.069,0.031],[-0.824,0.213],[-0.31,0.056],[-0.629,0.035],[-0.316,0.002],[-0.622,-0.068],[-0.323,-0.051],[-1.032,-0.397],[-0.309,-0.15]],\"o\":[[0,0],[0.391,0.226],[0.407,0.306],[0,0],[1.546,1.667],[-0.233,0.299],[0,0],[-0.259,0.199],[0,0],[-2.751,1.588],[0,0],[-0.239,-0.067],[-0.24,-0.075],[-0.705,-0.258],[0,0],[-0.206,-0.119],[0,0],[0,0],[0,0],[-3.246,-2.393],[0,0],[0.062,-0.036],[0.673,-0.372],[0.301,-0.075],[0.6,-0.108],[0.314,-0.017],[0.627,-0.001],[0.314,0.032],[1.118,0.183],[0.333,0.128],[0.329,0.155]],\"v\":[[29.214,-70.107],[121.426,-16.868],[122.511,-16.157],[123.566,-15.207],[123.573,-15.203],[124.148,-10.095],[123.299,-9.236],[123.293,-9.232],[122.453,-8.665],[-15.011,70.699],[-25.815,71.489],[-25.822,71.485],[-26.534,71.273],[-27.23,71.034],[-29.219,70.107],[-121.431,16.868],[-122.017,16.501],[-122.428,16.221],[-122.435,16.217],[-122.436,16.209],[-122.45,8.669],[15.013,-70.696],[15.199,-70.795],[17.465,-71.668],[18.383,-71.87],[20.236,-72.086],[21.182,-72.116],[23.061,-72.011],[24.013,-71.888],[27.281,-71.017],[28.249,-70.608]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.686274528503,0.670588254929,0.658823549747,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-3.104,-1.846],[0,0],[-6.976,4.138],[0,0],[0.063,2.988],[0,0],[0,0],[2.93,1.686]],\"o\":[[0,0],[0,3.611],[0,0],[6.971,4.146],[0,0],[2.57,-1.525],[0,0],[0,0],[-2.934,1.679],[0,0]],\"v\":[[-124.199,10.135],[-125.056,12.929],[-120.05,21.731],[-32.235,72.262],[-12.094,72.956],[120.248,-4.021],[124.734,-9.777],[124.635,-12.604],[-17.396,66.329],[-26.864,66.317]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.627451002598,0.61960786581,0.615686297417,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":-37,\"op\":413,\"st\":-37,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":3,\"nm\":\"Gold card 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.357},\"t\":10,\"s\":[612.606,437.626,0],\"to\":[0,-39.931,0],\"ti\":[0,22.708,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":40,\"s\":[612.606,294.266,0],\"to\":[0,-26.667,0],\"ti\":[0,22.708,0]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":60,\"s\":[612.606,294.266,0],\"to\":[0,-26.667,0],\"ti\":[0,6.961,0]},{\"t\":90,\"s\":[612.606,437.626,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-441.394,94.266,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ip\":3,\"op\":445,\"st\":-5,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Shadow 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[611.351,478.326,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-441.899,120.826,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-1.976,-0.929],[0,0],[-6.598,3.318],[0,0],[0.402,2.571],[0,0],[0,0.05],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-2.813,1.151],[0,0],[0,0]],\"v\":[[-553.555,75.836],[-551.899,79.804],[-454.234,136.608],[-443.124,136.148],[-305.051,55.792],[-302.567,51.683],[-303.154,39.269],[-444.688,121.411],[-453.97,121.38],[-553.131,64.204]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.549019607843,0.544713637408,0.544713637408,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,1],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shadow\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":-39,\"op\":445,\"st\":-5,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"Shadow\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[611.351,478.326,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-441.899,120.826,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.179},\"t\":10,\"s\":[{\"i\":[[0,0],[-2.101,-0.992],[0,0],[-4.688,1.789],[0,0],[0.497,5.286],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-552.899,65.586],[-551.242,69.554],[-454.422,125.171],[-443.312,124.711],[-304.801,43.98],[-302.747,38.464],[-302.883,37.332],[-552.955,62.955]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0},\"t\":40,\"s\":[{\"i\":[[0,0],[-2.101,-0.992],[0,0],[-4.688,1.789],[0,0],[0.497,5.286],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-552.899,65.586],[-551.242,69.554],[-454.422,125.171],[-443.312,124.711],[-304.801,43.98],[-302.747,38.464],[-302.985,-107.043],[-552.423,-82.358]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":47,\"s\":[{\"i\":[[0,0],[-2.101,-0.992],[0,0],[-4.688,1.789],[0,0],[0.497,5.286],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-552.899,65.586],[-551.242,69.554],[-454.422,125.171],[-443.312,124.711],[-304.801,43.98],[-302.747,38.464],[-302.985,-114.543],[-552.798,-87.483]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":54,\"s\":[{\"i\":[[0,0],[-2.101,-0.992],[0,0],[-4.688,1.789],[0,0],[0.497,5.286],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-552.899,65.586],[-551.242,69.554],[-454.422,125.171],[-443.312,124.711],[-304.801,43.98],[-302.747,38.464],[-302.985,-100.009],[-552.496,-75.373]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[-2.101,-0.992],[0,0],[-4.688,1.789],[0,0],[0.497,5.286],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-552.899,65.586],[-551.242,69.554],[-454.422,125.171],[-443.312,124.711],[-304.801,43.98],[-302.747,38.464],[-302.985,-107.043],[-552.298,-79.858]],\"c\":true}]},{\"t\":90,\"s\":[{\"i\":[[0,0],[-2.101,-0.992],[0,0],[-4.688,1.789],[0,0],[0.497,5.286],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-552.899,65.586],[-551.242,69.554],[-454.422,125.171],[-443.312,124.711],[-304.801,43.98],[-302.747,38.464],[-302.883,37.332],[-552.955,62.955]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.6,0.6,0.6,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":25,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shadow\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.313,-0.181],[0,0],[-0.327,-0.246],[-0.298,-0.328],[0,0],[1.186,-1.546],[0.336,-0.268],[0,0],[0.314,-0.181],[0,0],[3.75,1.035],[0,0],[0.234,0.078],[0.228,0.082],[0.618,0.357],[0,0],[0.18,0.126],[0,0],[0,0],[0,0],[-3.323,1.919],[0,0],[-0.069,0.031],[-0.824,0.213],[-0.31,0.056],[-0.629,0.035],[-0.316,0.002],[-0.622,-0.068],[-0.323,-0.051],[-1.032,-0.397],[-0.309,-0.15]],\"o\":[[0,0],[0.391,0.226],[0.407,0.306],[0,0],[1.546,1.667],[-0.233,0.299],[0,0],[-0.259,0.199],[0,0],[-2.751,1.588],[0,0],[-0.239,-0.067],[-0.24,-0.075],[-0.705,-0.258],[0,0],[-0.206,-0.119],[0,0],[0,0],[0,0],[-3.246,-2.393],[0,0],[0.062,-0.036],[0.673,-0.372],[0.301,-0.075],[0.6,-0.108],[0.314,-0.017],[0.627,-0.001],[0.314,0.032],[1.118,0.183],[0.333,0.128],[0.329,0.155]],\"v\":[[29.214,-70.107],[121.426,-16.868],[122.511,-16.157],[123.566,-15.207],[123.573,-15.203],[124.148,-10.095],[123.299,-9.236],[123.293,-9.232],[122.453,-8.665],[-15.011,70.699],[-25.815,71.489],[-25.822,71.485],[-26.534,71.273],[-27.23,71.034],[-29.219,70.107],[-121.431,16.868],[-122.017,16.501],[-122.428,16.221],[-122.435,16.217],[-122.436,16.209],[-122.45,8.669],[15.013,-70.696],[15.199,-70.795],[17.465,-71.668],[18.383,-71.87],[20.236,-72.086],[21.182,-72.116],[23.061,-72.011],[24.013,-71.888],[27.281,-71.017],[28.249,-70.608]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.509803921569,0.507804721009,0.507804721009,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-428.5,53],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":-39,\"op\":445,\"st\":-5,\"bm\":0}]}],\"layers\":[{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Logo 2\",\"td\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[640,132.57,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,-227.43,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.775,0.775,0.333],\"y\":[0,0,0]},\"t\":0,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.554,0.554,0.333],\"y\":[0,0,0]},\"t\":66,\"s\":[105,105,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.554,0.554,0.333],\"y\":[0,0,0]},\"t\":126,\"s\":[100,100,100]},{\"t\":156,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0]],\"o\":[[0,0]],\"v\":[[-12.559,-270.232]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-2.123,2.851],[-3.488,3.002],[-15.075,2.003],[-4.278,-0.545],[-12.709,-15.895],[-1.911,0],[-0.729,1.153],[0.607,1.122],[3.276,3.337],[18.898,2.911],[5.551,-0.819],[8.827,-4.337],[7.25,-7.249],[0.607,-1.791],[-1.911,-0.97]],\"o\":[[2.244,1.123],[2.578,-3.458],[11.587,-10.041],[4.429,-0.607],[20.171,2.427],[2.851,3.549],[1.365,0],[0.696,-1.153],[-0.727,-1.425],[-12.952,-13.317],[-5.824,-0.91],[-10.192,1.486],[-8.888,4.369],[-5.065,5.036],[-0.638,1.941],[0,0]],\"v\":[[-12.559,-270.232],[-6.068,-272.78],[4.458,-284.003],[44.467,-302.082],[62.666,-302.233],[113.474,-273.902],[118.994,-269.777],[122.604,-271.779],[122.846,-276.208],[114.535,-286.096],[66.124,-310.756],[43.253,-310.908],[16.864,-302.84],[-5.31,-286.915],[-14.834,-275.418],[-12.559,-270.232]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.301960796118,0.301960796118,0.301960796118,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0]],\"o\":[[0,0]],\"v\":[[-12.559,-184.628]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.638,-1.941],[-5.065,-5.036],[-8.888,-4.369],[-10.192,-1.486],[-5.824,0.91],[-12.952,13.317],[-0.727,1.425],[0.696,1.153],[1.365,0],[2.851,-3.549],[20.171,-2.427],[4.429,0.607],[11.587,10.041],[2.578,3.458],[2.244,-1.123]],\"o\":[[-1.911,0.97],[0.607,1.791],[7.25,7.249],[8.827,4.337],[5.551,0.819],[18.898,-2.911],[3.276,-3.337],[0.607,-1.122],[-0.729,-1.153],[-1.911,0],[-12.709,15.895],[-4.278,0.545],[-15.075,-2.003],[-3.488,-3.002],[-2.123,-2.851],[0,0]],\"v\":[[-12.559,-184.628],[-14.834,-179.442],[-5.31,-167.945],[16.864,-152.02],[43.253,-143.952],[66.124,-144.104],[114.535,-168.764],[122.846,-178.652],[122.604,-183.082],[118.994,-185.083],[113.474,-180.958],[62.666,-152.627],[44.467,-152.778],[4.458,-170.857],[-6.068,-182.08],[-12.559,-184.628]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.301960796118,0.301960796118,0.301960796118,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0]],\"o\":[[0,0]],\"v\":[[-96.883,-225.333]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-1.565,-5.027],[0.812,-2.649],[3.251,-1.656],[16.013,0],[0,0],[0,0],[0,0],[-1.023,-0.21]],\"o\":[[5.117,1.054],[0.812,2.649],[-1.113,3.642],[-3.22,1.625],[0,0],[0,0],[0,0],[9.331,0],[0,0]],\"v\":[[-96.883,-225.333],[-85.505,-214.917],[-85.505,-205.435],[-93.03,-196.315],[-112.505,-194.659],[-127.345,-194.659],[-127.345,-225.663],[-112.897,-225.663],[-96.883,-225.333]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-1.596,-3.191],[0,0],[0,0],[0,0],[2.618,-1.324],[13.906,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[3.13,1.505],[0,0],[0,0],[0,0],[-1.445,2.919],[-2.919,1.476],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-96.552,-259.316],[-89.538,-252.333],[-88.365,-249.925],[-88.365,-242.038],[-89.629,-239.449],[-96.1,-232.707],[-114.462,-231.081],[-127.345,-231.081],[-127.345,-260.61],[-113.107,-260.52],[-98.9,-260.429]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.029,-21.041],[0,0],[0,0],[-3.732,1.355],[6.562,11.077],[2.8,1.445],[0,0],[0,0],[-1.565,4.906],[1.113,3.4],[7.917,1.143],[0.181,-0.452]],\"o\":[[-0.091,0.21],[0,0],[0,0],[17.879,0.09],[12.221,-4.484],[-1.536,-2.618],[0,0],[0,0],[4.245,-2.799],[1.024,-3.282],[-2.499,-7.586],[-3.191,-0.452],[0,0]],\"v\":[[-133.215,-265.938],[-133.305,-227.318],[-133.215,-189.09],[-117.111,-189.001],[-92.729,-190.416],[-81.802,-220.486],[-89.719,-227.891],[-91.946,-229.064],[-91.224,-229.547],[-83.037,-240.412],[-83.188,-252.001],[-99.863,-265.998],[-133.215,-265.938]],\"c\":true},\"ix\":2},\"nm\":\"Path 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.301960796118,0.301960796118,0.301960796118,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0]],\"o\":[[0,0]],\"v\":[[-191.911,-265.938]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.029,-21.041],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.091,-0.271]],\"o\":[[-0.091,0.21],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-17.188,0],[0,0]],\"v\":[[-191.911,-265.938],[-192.002,-227.318],[-191.911,-189.09],[-169.696,-189.001],[-147.513,-188.94],[-147.513,-194.659],[-186.041,-194.659],[-186.041,-225.362],[-150.824,-225.362],[-150.824,-230.78],[-186.041,-230.78],[-186.041,-260.58],[-148.115,-260.58],[-148.115,-266.299],[-169.938,-266.299],[-191.911,-265.938]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.301960796118,0.301960796118,0.301960796118,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0]],\"o\":[[0,0]],\"v\":[[-234.654,-259.587]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-4.094,-6.261],[0,-7.465],[2.499,-5.146],[8.548,-2.379],[13.485,-0.12],[0,0],[0,0],[0,0],[0,0]],\"o\":[[7.193,2.228],[3.672,5.629],[0,6.11],[-4.004,8.158],[-2.228,0.632],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-234.654,-259.587],[-218.008,-247.065],[-212.53,-227.619],[-216.082,-211.637],[-235.316,-195.502],[-251.871,-194.72],[-266.109,-194.63],[-266.109,-260.61],[-251.721,-260.52],[-237.363,-260.4]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-5.057,1.656],[-2.258,14.659],[0.722,3.4],[5.298,5.298],[8.397,0.903],[8.218,0],[0,0]],\"o\":[[0,0],[0,0],[17.91,-0.15],[13.003,-4.275],[0.571,-3.703],[-1.715,-7.947],[-5.9,-5.93],[-1.565,-0.151],[0,0],[0,0]],\"v\":[[-272.129,-227.59],[-272.129,-188.88],[-255.483,-189.031],[-231.735,-190.896],[-207.232,-221.298],[-207.563,-236.198],[-217.948,-255.794],[-239.32,-265.998],[-257.139,-266.299],[-272.129,-266.299]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.301960796118,0.301960796118,0.301960796118,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-1.679],[-0.007,-1.704],[-0.569,-0.004],[-2.308,0.134],[-0.526,2.03],[3.34,1.093],[0.922,0.112],[1.98,-0.001],[0.001,-0.668]],\"o\":[[0,1.704],[0.002,0.576],[2.306,0.017],[2.612,-0.152],[0.659,-2.54],[-0.885,-0.29],[-1.974,-0.241],[-0.633,0],[-0.004,1.679]],\"v\":[[51.633,-237.385],[51.636,-232.272],[52.22,-231.673],[59.136,-231.756],[64.261,-235.937],[60.922,-242.374],[58.211,-242.954],[52.275,-243.103],[51.634,-242.423]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-1.857],[-0.007,-1.907],[-0.526,-0.011],[-1.079,-0.005],[-2.145,0.504],[-1.027,0.9],[0.041,1.995],[1.191,0.87],[0.566,0.215],[1.553,0.13],[2.433,-0.044],[0.001,-0.627]],\"o\":[[0,1.907],[0.002,0.536],[1.079,0.023],[2.184,0.01],[1.307,-0.307],[1.553,-1.36],[-0.031,-1.481],[-0.489,-0.357],[-1.469,-0.557],[-2.433,-0.203],[-0.586,0.011],[-0.004,1.857]],\"v\":[[51.634,-218.804],[51.637,-213.084],[52.179,-212.524],[55.417,-212.48],[61.93,-212.971],[65.505,-214.64],[67.542,-219.774],[65.68,-223.294],[64.087,-224.133],[59.528,-225.022],[52.23,-225.019],[51.635,-224.374]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.485,-0.448],[-0.273,-0.106],[-0.951,-3.296],[2.892,-3.791],[2.386,-0.768],[2.118,-0.025],[0.701,-0.098],[-0.004,-0.348],[0.002,-1.431],[0.7,-0.174],[1.704,-0.126],[0.002,0.611],[0.004,1.757],[0.6,-0.002],[0.828,0.017],[-0.003,-0.376],[0,-1.682],[-0.015,-0.174],[0.272,0.031],[0.914,0.154],[0.926,0.222],[0.002,0.653],[0.012,1.28],[1.135,0.012],[1.205,0.009],[2.109,0.016],[0.125,-0.005],[-0.008,0.331],[0,0.703],[-0.008,1.205],[-0.552,0.011],[-0.878,-0.02],[-0.627,0.059],[-0.256,0.733],[0,0.627],[0.003,8.71],[0.04,0.221],[1.008,0.152],[0.979,-0.065],[0.828,0.094],[-0.007,0.346],[-0.012,1.832],[-0.796,0],[-3.365,0],[0,1.323],[-0.002,1.029],[-0.669,0.188],[-1.773,0.184],[-0.002,-0.652],[-0.004,-1.657],[-0.701,-0.003],[-0.778,-0.023],[0.003,0.398],[-0.011,1.456],[0.016,0.324],[-0.361,-0.024],[-1.807,-0.449],[0.001,-0.324],[-0.004,-1.406],[-0.693,-0.067],[-3.032,-2.045],[-0.393,-2.651],[1.791,-2.354],[0.387,-0.461]],\"o\":[[0.247,0.305],[3.241,1.264],[1.324,4.59],[-1.541,2.019],[-2.025,0.652],[-0.702,0.008],[-0.35,0.049],[0.017,1.43],[-0.001,0.71],[-1.659,0.412],[-0.616,0.046],[-0.004,-1.757],[-0.001,-0.624],[-0.829,0.003],[-0.408,-0.008],[0.014,1.682],[0,0.176],[0.028,0.313],[-0.922,-0.105],[-0.938,-0.158],[-0.603,-0.144],[-0.004,-1.28],[-0.008,-0.924],[-1.205,-0.012],[-2.109,-0.015],[-0.126,-0.001],[-0.31,0.012],[0.017,-0.702],[0,-1.205],[0.004,-0.554],[0.878,-0.018],[0.628,0.014],[0.786,-0.074],[0.209,-0.598],[0.005,-8.71],[0,-0.224],[-0.186,-1.017],[-0.975,-0.147],[-0.828,0.055],[-0.301,-0.034],[0.038,-1.831],[0.005,-0.775],[3.365,0],[1.286,0],[0,-1.029],[0.001,-0.731],[1.72,-0.483],[0.596,-0.062],[0.004,1.657],[0.002,0.694],[0.779,0.004],[0.385,0.011],[-0.009,-1.455],[0.002,-0.326],[-0.021,-0.423],[1.857,0.125],[0.405,0.101],[-0.005,1.406],[0.002,0.692],[3.595,0.35],[2.216,1.495],[0.425,2.866],[-0.364,0.478],[-0.392,0.466]],\"v\":[[72.007,-230.028],[72.822,-229.535],[79.144,-222.636],[76.714,-209.99],[70.601,-206.056],[64.371,-205.145],[62.267,-205.035],[61.811,-204.512],[61.817,-200.22],[61.115,-199.33],[56.07,-198.518],[55.442,-199.105],[55.439,-204.376],[54.83,-205.007],[52.345,-204.985],[51.84,-204.456],[51.846,-199.411],[51.847,-198.884],[51.44,-198.513],[48.676,-198.844],[45.884,-199.449],[45.278,-200.267],[45.274,-204.107],[44.327,-205.025],[40.711,-205.048],[34.384,-205.097],[34.007,-205.098],[33.564,-205.541],[33.569,-207.649],[33.571,-211.263],[34.165,-211.891],[36.801,-211.866],[38.682,-211.902],[40.238,-213.125],[40.515,-214.977],[40.516,-241.106],[40.445,-241.777],[38.762,-243.409],[35.832,-243.48],[33.351,-243.503],[32.942,-243.961],[32.994,-249.457],[33.722,-250.198],[43.818,-250.199],[45.104,-251.521],[45.105,-254.608],[45.775,-255.531],[51.026,-256.474],[51.632,-255.869],[51.634,-250.9],[52.343,-250.199],[54.678,-250.192],[55.209,-250.701],[55.226,-255.068],[55.256,-256.045],[55.808,-256.51],[61.298,-255.635],[61.734,-254.984],[61.733,-250.767],[62.435,-250.025],[72.463,-246.691],[76.48,-240.503],[74.601,-232.601],[73.428,-231.228]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.800000011921,0.003921568859,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,12.523],[-0.002,12.523],[-1.073,0.001],[-5.248,0],[-0.149,0.018],[0.033,-0.372],[0,-0.176],[0.003,-25.047],[1.191,-0.001],[5.198,0],[0.173,-0.021],[-0.03,0.369],[0,0.201]],\"o\":[[0,-12.523],[0,-1.105],[5.248,-0.005],[0.151,0],[0.414,-0.049],[-0.016,0.174],[0,25.047],[0,1.198],[-5.198,0.006],[-0.176,0],[-0.42,0.052],[0.016,-0.199],[0,-12.523]],\"v\":[[112.716,-227.59],[112.717,-265.159],[113.681,-266.118],[129.426,-266.12],[129.878,-266.122],[130.377,-265.593],[130.374,-265.066],[130.372,-189.926],[129.333,-188.894],[113.738,-188.891],[113.211,-188.888],[112.713,-189.418],[112.716,-190.02]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.800000011921,0.003921568859,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.196,-0.317],[5.06,-2.932],[0.422,0.558],[4.316,1.09],[5.005,-1.951],[2.062,-5.599],[-2.14,-6.152],[-7.251,-1.757],[-4.653,1.641],[-2.291,3.759],[-0.442,-0.256],[-4.754,-2.756],[0.38,-0.599],[4.288,-2.838],[5.468,-0.925],[3.69,0.35],[6.718,6.373],[1.732,7.803],[0.007,2.99],[-5.453,7.366],[-8.806,2.318],[-4.287,-0.219],[-7.339,-7.616],[-1.167,-1.794]],\"o\":[[-5.094,2.952],[-0.432,-0.631],[-2.711,-3.588],[-5.207,-1.315],[-5.569,2.171],[-2.257,6.127],[2.457,7.064],[4.758,1.153],[4.11,-1.45],[0.276,-0.452],[4.757,2.751],[0.521,0.302],[-2.758,4.347],[-4.625,3.061],[-3.662,0.62],[-9.164,-0.868],[-5.815,-5.517],[-0.65,-2.926],[-0.022,-9.091],[5.43,-7.336],[4.156,-1.094],[10.495,0.537],[1.484,1.54],[0.163,0.25]],\"v\":[[2.967,-249.77],[-12.237,-240.961],[-13.464,-242.744],[-24.105,-249.673],[-39.484,-248.747],[-50.975,-237.017],[-51.158,-218.505],[-36.417,-205.307],[-22.251,-205.901],[-12.541,-213.603],[-11.81,-213.803],[2.457,-205.543],[2.598,-204.63],[-7.996,-193.869],[-23.157,-187.942],[-34.189,-187.534],[-58.159,-198.133],[-69.334,-218.218],[-70.319,-227.101],[-62.524,-251.93],[-41.058,-266.293],[-28.376,-267.616],[-1.501,-255.615],[2.456,-250.594]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.800000011921,0.003921568859,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.151,0.075],[-0.386,-0.701],[-5.099,-0.848],[-3.126,0.876],[-0.852,0.647],[1.658,1.911],[0.999,0.544],[2.197,0.708],[3.024,1],[3.147,2.172],[1.586,3.388],[0.177,2.655],[-0.914,2.907],[-4.437,2.913],[-4.221,0.53],[-5.328,-2.134],[-3.411,-5.394],[-0.503,-0.955],[-0.079,-0.174],[0.343,-0.201],[4.379,-2.552],[0.46,0.885],[1.06,1.19],[2.649,0.545],[2.334,-0.593],[0.923,-0.775],[-1.941,-1.942],[-0.9,-0.506],[-2.649,-0.86],[-3.243,-1.211],[-2.785,-2.027],[-0.619,-5.593],[1.564,-3.934],[4.618,-2.551],[3.832,-0.554],[3.415,0.287],[4.744,2.959],[2.296,5.69],[-0.502,0.291],[-4.8,2.777]],\"o\":[[0.394,0.769],[2.475,4.499],[3.176,0.528],[1.022,-0.286],[2.558,-1.941],[-0.752,-0.867],[-2.037,-1.109],[-3.03,-0.977],[-3.61,-1.194],[-3.053,-2.108],[-1.131,-2.415],[-0.202,-3.033],[1.6,-5.088],[3.563,-2.34],[5.686,-0.714],[5.961,2.388],[0.577,0.913],[0.069,0.13],[-0.355,0.218],[-4.375,2.56],[-0.777,0.453],[-0.731,-1.407],[-1.794,-2.015],[-2.34,-0.481],[-1.156,0.294],[-2.428,2.039],[0.735,0.735],[2.44,1.371],[3.29,1.068],[3.206,1.197],[4.549,3.31],[0.457,4.125],[-1.967,4.948],[-3.398,1.877],[-3.397,0.491],[-5.526,-0.465],[-5.225,-3.259],[-0.237,-0.587],[4.798,-2.78],[0.085,-0.049]],\"v\":[[227.778,-215.243],[228.905,-213.05],[240.198,-204.895],[249.675,-205.288],[252.491,-206.683],[253.289,-214.37],[250.631,-216.442],[244.21,-218.991],[235.053,-221.699],[224.813,-226.531],[217.714,-234.656],[215.823,-242.278],[216.792,-251.201],[225.953,-263.139],[237.665,-267.377],[254.218,-265.344],[268.137,-253.482],[269.737,-250.67],[269.94,-250.228],[268.906,-249.595],[255.778,-241.922],[254.661,-242.257],[252.034,-246.191],[245.387,-250.055],[238.373,-250.028],[235.241,-248.454],[234.895,-240.713],[237.367,-238.88],[245.081,-235.724],[254.955,-232.538],[264.046,-227.909],[271.911,-214.58],[270.62,-202.432],[260.607,-191.303],[249.711,-187.8],[239.494,-187.519],[223.985,-192.356],[212.787,-205.858],[213.055,-206.746],[227.452,-215.08]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.800000011921,0.003921568859,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.268,0.004],[0,-0.264],[0.002,-13.28],[1.069,-0.001],[5.25,0],[0.05,0],[0,0.906],[0,17.572],[0,7.531],[-0.002,0.151],[-0.658,0],[-3.994,0.027],[-0.258,-0.364],[-4.553,-6.403],[-5.077,-7.139],[-0.145,-0.192],[0,0.278],[0,11.899],[-0.004,1.481],[-0.587,0],[-5.501,-0.003],[-0.018,-0.57],[0,-0.176],[0.002,-25.003],[1.243,-0.003],[3.793,-0.032],[0.319,0.45],[9.133,12.848],[0.515,0.712]],\"o\":[[0,0.263],[0,13.28],[0,1.103],[-5.25,0.004],[-0.05,0],[-0.852,-0.006],[0,-17.572],[0,-7.531],[0,-0.151],[0.009,-0.647],[3.994,-0.002],[0.517,-0.003],[4.546,6.408],[5.076,7.139],[0.1,0.141],[0.175,-0.317],[0.004,-11.899],[0,-1.481],[0.002,-0.639],[5.501,-0.003],[0.581,0],[0.006,0.176],[0,25.003],[0,1.319],[-3.793,0.01],[-0.583,0.005],[-9.122,-12.855],[-0.509,-0.716],[-0.081,-0.111]],\"v\":[[161.273,-230.503],[161.273,-229.711],[161.271,-189.872],[160.327,-188.893],[144.578,-188.891],[144.427,-188.891],[143.614,-189.703],[143.614,-242.42],[143.614,-265.013],[143.615,-265.465],[144.282,-266.119],[156.264,-266.134],[157.277,-265.531],[170.929,-246.319],[186.159,-224.902],[186.512,-224.433],[186.614,-225.326],[186.618,-261.023],[186.619,-265.467],[187.215,-266.118],[203.718,-266.118],[204.318,-265.535],[204.319,-265.008],[204.317,-189.999],[203.186,-188.894],[191.807,-188.874],[190.586,-189.525],[163.197,-228.075],[161.666,-230.22]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.800000011921,0.003921568859,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.125,8.335],[0.371,1.929],[8.019,4.862],[8.224,-1.7],[4.703,-7.253],[-1.897,-8.758],[-5.711,-4.531],[-9.224,1.335],[-4.941,5.239]],\"o\":[[-0.061,-1.993],[-1.772,-9.199],[-7.203,-4.367],[-8.466,1.75],[-4.897,7.553],[1.541,7.116],[7.334,5.819],[7.125,-1.031],[5.782,-6.131]],\"v\":[[85.431,-227.502],[84.88,-233.374],[70.293,-254.608],[47.025,-258.46],[27.156,-244.947],[22.841,-220.349],[33.73,-202.786],[58.685,-196.238],[76.839,-205.658]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-5.12,0.031],[-9.818,-7.825],[-2.938,-11.466],[0.231,-5.241],[9.365,-9.793],[9.533,-2.55],[3.62,-0.204],[10.06,6.769],[3.182,13.604],[-0.249,4.908],[-9.87,9.82],[-9.888,2.241]],\"o\":[[11.424,0.11],[9.258,7.379],[1.304,5.089],[-0.594,13.491],[-6.819,7.131],[-3.5,0.936],[-12.093,0.682],[-11.594,-7.801],[-1.121,-4.793],[0.702,-13.857],[7.184,-7.147],[3.932,-0.891]],\"v\":[[54.733,-280.918],[87.267,-269.284],[105.508,-240.937],[107.123,-225.425],[92.375,-190.369],[67.763,-175.923],[57.083,-174.221],[23.745,-183.137],[1.64,-215.353],[0.342,-229.924],[16.005,-265.578],[41.698,-279.575]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.800000011921,0.003921568859,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":6,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":450,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"light\",\"tt\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":20,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":0,\"s\":[939.07,130.429,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":66,\"s\":[319.07,130.429,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":126,\"s\":[899.07,130.429,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"t\":157,\"s\":[319.07,130.429,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-220.93,-229.571,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-304.081,-321.964],[-157.297,-124.393],[-137.779,-144.245],[-283.63,-334.75]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":148,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Logo\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[640,132.57,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,-227.43,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.775,0.775,0.333],\"y\":[0,0,0]},\"t\":0,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.554,0.554,0.333],\"y\":[0,0,0]},\"t\":66,\"s\":[105,105,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.554,0.554,0.333],\"y\":[0,0,0]},\"t\":126,\"s\":[100,100,100]},{\"t\":156,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0]],\"o\":[[0,0]],\"v\":[[-12.559,-270.232]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-2.123,2.851],[-3.488,3.002],[-15.075,2.003],[-4.278,-0.545],[-12.709,-15.895],[-1.911,0],[-0.729,1.153],[0.607,1.122],[3.276,3.337],[18.898,2.911],[5.551,-0.819],[8.827,-4.337],[7.25,-7.249],[0.607,-1.791],[-1.911,-0.97]],\"o\":[[2.244,1.123],[2.578,-3.458],[11.587,-10.041],[4.429,-0.607],[20.171,2.427],[2.851,3.549],[1.365,0],[0.696,-1.153],[-0.727,-1.425],[-12.952,-13.317],[-5.824,-0.91],[-10.192,1.486],[-8.888,4.369],[-5.065,5.036],[-0.638,1.941],[0,0]],\"v\":[[-12.559,-270.232],[-6.068,-272.78],[4.458,-284.003],[44.467,-302.082],[62.666,-302.233],[113.474,-273.902],[118.994,-269.777],[122.604,-271.779],[122.846,-276.208],[114.535,-286.096],[66.124,-310.756],[43.253,-310.908],[16.864,-302.84],[-5.31,-286.915],[-14.834,-275.418],[-12.559,-270.232]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.301960796118,0.301960796118,0.301960796118,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0]],\"o\":[[0,0]],\"v\":[[-12.559,-184.628]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.638,-1.941],[-5.065,-5.036],[-8.888,-4.369],[-10.192,-1.486],[-5.824,0.91],[-12.952,13.317],[-0.727,1.425],[0.696,1.153],[1.365,0],[2.851,-3.549],[20.171,-2.427],[4.429,0.607],[11.587,10.041],[2.578,3.458],[2.244,-1.123]],\"o\":[[-1.911,0.97],[0.607,1.791],[7.25,7.249],[8.827,4.337],[5.551,0.819],[18.898,-2.911],[3.276,-3.337],[0.607,-1.122],[-0.729,-1.153],[-1.911,0],[-12.709,15.895],[-4.278,0.545],[-15.075,-2.003],[-3.488,-3.002],[-2.123,-2.851],[0,0]],\"v\":[[-12.559,-184.628],[-14.834,-179.442],[-5.31,-167.945],[16.864,-152.02],[43.253,-143.952],[66.124,-144.104],[114.535,-168.764],[122.846,-178.652],[122.604,-183.082],[118.994,-185.083],[113.474,-180.958],[62.666,-152.627],[44.467,-152.778],[4.458,-170.857],[-6.068,-182.08],[-12.559,-184.628]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.301960796118,0.301960796118,0.301960796118,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0]],\"o\":[[0,0]],\"v\":[[-96.883,-225.333]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-1.565,-5.027],[0.812,-2.649],[3.251,-1.656],[16.013,0],[0,0],[0,0],[0,0],[-1.023,-0.21]],\"o\":[[5.117,1.054],[0.812,2.649],[-1.113,3.642],[-3.22,1.625],[0,0],[0,0],[0,0],[9.331,0],[0,0]],\"v\":[[-96.883,-225.333],[-85.505,-214.917],[-85.505,-205.435],[-93.03,-196.315],[-112.505,-194.659],[-127.345,-194.659],[-127.345,-225.663],[-112.897,-225.663],[-96.883,-225.333]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-1.596,-3.191],[0,0],[0,0],[0,0],[2.618,-1.324],[13.906,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[3.13,1.505],[0,0],[0,0],[0,0],[-1.445,2.919],[-2.919,1.476],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-96.552,-259.316],[-89.538,-252.333],[-88.365,-249.925],[-88.365,-242.038],[-89.629,-239.449],[-96.1,-232.707],[-114.462,-231.081],[-127.345,-231.081],[-127.345,-260.61],[-113.107,-260.52],[-98.9,-260.429]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.029,-21.041],[0,0],[0,0],[-3.732,1.355],[6.562,11.077],[2.8,1.445],[0,0],[0,0],[-1.565,4.906],[1.113,3.4],[7.917,1.143],[0.181,-0.452]],\"o\":[[-0.091,0.21],[0,0],[0,0],[17.879,0.09],[12.221,-4.484],[-1.536,-2.618],[0,0],[0,0],[4.245,-2.799],[1.024,-3.282],[-2.499,-7.586],[-3.191,-0.452],[0,0]],\"v\":[[-133.215,-265.938],[-133.305,-227.318],[-133.215,-189.09],[-117.111,-189.001],[-92.729,-190.416],[-81.802,-220.486],[-89.719,-227.891],[-91.946,-229.064],[-91.224,-229.547],[-83.037,-240.412],[-83.188,-252.001],[-99.863,-265.998],[-133.215,-265.938]],\"c\":true},\"ix\":2},\"nm\":\"Path 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.301960796118,0.301960796118,0.301960796118,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0]],\"o\":[[0,0]],\"v\":[[-191.911,-265.938]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.029,-21.041],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.091,-0.271]],\"o\":[[-0.091,0.21],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-17.188,0],[0,0]],\"v\":[[-191.911,-265.938],[-192.002,-227.318],[-191.911,-189.09],[-169.696,-189.001],[-147.513,-188.94],[-147.513,-194.659],[-186.041,-194.659],[-186.041,-225.362],[-150.824,-225.362],[-150.824,-230.78],[-186.041,-230.78],[-186.041,-260.58],[-148.115,-260.58],[-148.115,-266.299],[-169.938,-266.299],[-191.911,-265.938]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.301960796118,0.301960796118,0.301960796118,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0]],\"o\":[[0,0]],\"v\":[[-234.654,-259.587]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-4.094,-6.261],[0,-7.465],[2.499,-5.146],[8.548,-2.379],[13.485,-0.12],[0,0],[0,0],[0,0],[0,0]],\"o\":[[7.193,2.228],[3.672,5.629],[0,6.11],[-4.004,8.158],[-2.228,0.632],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-234.654,-259.587],[-218.008,-247.065],[-212.53,-227.619],[-216.082,-211.637],[-235.316,-195.502],[-251.871,-194.72],[-266.109,-194.63],[-266.109,-260.61],[-251.721,-260.52],[-237.363,-260.4]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-5.057,1.656],[-2.258,14.659],[0.722,3.4],[5.298,5.298],[8.397,0.903],[8.218,0],[0,0]],\"o\":[[0,0],[0,0],[17.91,-0.15],[13.003,-4.275],[0.571,-3.703],[-1.715,-7.947],[-5.9,-5.93],[-1.565,-0.151],[0,0],[0,0]],\"v\":[[-272.129,-227.59],[-272.129,-188.88],[-255.483,-189.031],[-231.735,-190.896],[-207.232,-221.298],[-207.563,-236.198],[-217.948,-255.794],[-239.32,-265.998],[-257.139,-266.299],[-272.129,-266.299]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.301960796118,0.301960796118,0.301960796118,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-1.679],[-0.007,-1.704],[-0.569,-0.004],[-2.308,0.134],[-0.526,2.03],[3.34,1.093],[0.922,0.112],[1.98,-0.001],[0.001,-0.668]],\"o\":[[0,1.704],[0.002,0.576],[2.306,0.017],[2.612,-0.152],[0.659,-2.54],[-0.885,-0.29],[-1.974,-0.241],[-0.633,0],[-0.004,1.679]],\"v\":[[51.633,-237.385],[51.636,-232.272],[52.22,-231.673],[59.136,-231.756],[64.261,-235.937],[60.922,-242.374],[58.211,-242.954],[52.275,-243.103],[51.634,-242.423]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-1.857],[-0.007,-1.907],[-0.526,-0.011],[-1.079,-0.005],[-2.145,0.504],[-1.027,0.9],[0.041,1.995],[1.191,0.87],[0.566,0.215],[1.553,0.13],[2.433,-0.044],[0.001,-0.627]],\"o\":[[0,1.907],[0.002,0.536],[1.079,0.023],[2.184,0.01],[1.307,-0.307],[1.553,-1.36],[-0.031,-1.481],[-0.489,-0.357],[-1.469,-0.557],[-2.433,-0.203],[-0.586,0.011],[-0.004,1.857]],\"v\":[[51.634,-218.804],[51.637,-213.084],[52.179,-212.524],[55.417,-212.48],[61.93,-212.971],[65.505,-214.64],[67.542,-219.774],[65.68,-223.294],[64.087,-224.133],[59.528,-225.022],[52.23,-225.019],[51.635,-224.374]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.485,-0.448],[-0.273,-0.106],[-0.951,-3.296],[2.892,-3.791],[2.386,-0.768],[2.118,-0.025],[0.701,-0.098],[-0.004,-0.348],[0.002,-1.431],[0.7,-0.174],[1.704,-0.126],[0.002,0.611],[0.004,1.757],[0.6,-0.002],[0.828,0.017],[-0.003,-0.376],[0,-1.682],[-0.015,-0.174],[0.272,0.031],[0.914,0.154],[0.926,0.222],[0.002,0.653],[0.012,1.28],[1.135,0.012],[1.205,0.009],[2.109,0.016],[0.125,-0.005],[-0.008,0.331],[0,0.703],[-0.008,1.205],[-0.552,0.011],[-0.878,-0.02],[-0.627,0.059],[-0.256,0.733],[0,0.627],[0.003,8.71],[0.04,0.221],[1.008,0.152],[0.979,-0.065],[0.828,0.094],[-0.007,0.346],[-0.012,1.832],[-0.796,0],[-3.365,0],[0,1.323],[-0.002,1.029],[-0.669,0.188],[-1.773,0.184],[-0.002,-0.652],[-0.004,-1.657],[-0.701,-0.003],[-0.778,-0.023],[0.003,0.398],[-0.011,1.456],[0.016,0.324],[-0.361,-0.024],[-1.807,-0.449],[0.001,-0.324],[-0.004,-1.406],[-0.693,-0.067],[-3.032,-2.045],[-0.393,-2.651],[1.791,-2.354],[0.387,-0.461]],\"o\":[[0.247,0.305],[3.241,1.264],[1.324,4.59],[-1.541,2.019],[-2.025,0.652],[-0.702,0.008],[-0.35,0.049],[0.017,1.43],[-0.001,0.71],[-1.659,0.412],[-0.616,0.046],[-0.004,-1.757],[-0.001,-0.624],[-0.829,0.003],[-0.408,-0.008],[0.014,1.682],[0,0.176],[0.028,0.313],[-0.922,-0.105],[-0.938,-0.158],[-0.603,-0.144],[-0.004,-1.28],[-0.008,-0.924],[-1.205,-0.012],[-2.109,-0.015],[-0.126,-0.001],[-0.31,0.012],[0.017,-0.702],[0,-1.205],[0.004,-0.554],[0.878,-0.018],[0.628,0.014],[0.786,-0.074],[0.209,-0.598],[0.005,-8.71],[0,-0.224],[-0.186,-1.017],[-0.975,-0.147],[-0.828,0.055],[-0.301,-0.034],[0.038,-1.831],[0.005,-0.775],[3.365,0],[1.286,0],[0,-1.029],[0.001,-0.731],[1.72,-0.483],[0.596,-0.062],[0.004,1.657],[0.002,0.694],[0.779,0.004],[0.385,0.011],[-0.009,-1.455],[0.002,-0.326],[-0.021,-0.423],[1.857,0.125],[0.405,0.101],[-0.005,1.406],[0.002,0.692],[3.595,0.35],[2.216,1.495],[0.425,2.866],[-0.364,0.478],[-0.392,0.466]],\"v\":[[72.007,-230.028],[72.822,-229.535],[79.144,-222.636],[76.714,-209.99],[70.601,-206.056],[64.371,-205.145],[62.267,-205.035],[61.811,-204.512],[61.817,-200.22],[61.115,-199.33],[56.07,-198.518],[55.442,-199.105],[55.439,-204.376],[54.83,-205.007],[52.345,-204.985],[51.84,-204.456],[51.846,-199.411],[51.847,-198.884],[51.44,-198.513],[48.676,-198.844],[45.884,-199.449],[45.278,-200.267],[45.274,-204.107],[44.327,-205.025],[40.711,-205.048],[34.384,-205.097],[34.007,-205.098],[33.564,-205.541],[33.569,-207.649],[33.571,-211.263],[34.165,-211.891],[36.801,-211.866],[38.682,-211.902],[40.238,-213.125],[40.515,-214.977],[40.516,-241.106],[40.445,-241.777],[38.762,-243.409],[35.832,-243.48],[33.351,-243.503],[32.942,-243.961],[32.994,-249.457],[33.722,-250.198],[43.818,-250.199],[45.104,-251.521],[45.105,-254.608],[45.775,-255.531],[51.026,-256.474],[51.632,-255.869],[51.634,-250.9],[52.343,-250.199],[54.678,-250.192],[55.209,-250.701],[55.226,-255.068],[55.256,-256.045],[55.808,-256.51],[61.298,-255.635],[61.734,-254.984],[61.733,-250.767],[62.435,-250.025],[72.463,-246.691],[76.48,-240.503],[74.601,-232.601],[73.428,-231.228]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.800000011921,0.003921568859,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,12.523],[-0.002,12.523],[-1.073,0.001],[-5.248,0],[-0.149,0.018],[0.033,-0.372],[0,-0.176],[0.003,-25.047],[1.191,-0.001],[5.198,0],[0.173,-0.021],[-0.03,0.369],[0,0.201]],\"o\":[[0,-12.523],[0,-1.105],[5.248,-0.005],[0.151,0],[0.414,-0.049],[-0.016,0.174],[0,25.047],[0,1.198],[-5.198,0.006],[-0.176,0],[-0.42,0.052],[0.016,-0.199],[0,-12.523]],\"v\":[[112.716,-227.59],[112.717,-265.159],[113.681,-266.118],[129.426,-266.12],[129.878,-266.122],[130.377,-265.593],[130.374,-265.066],[130.372,-189.926],[129.333,-188.894],[113.738,-188.891],[113.211,-188.888],[112.713,-189.418],[112.716,-190.02]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.800000011921,0.003921568859,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.196,-0.317],[5.06,-2.932],[0.422,0.558],[4.316,1.09],[5.005,-1.951],[2.062,-5.599],[-2.14,-6.152],[-7.251,-1.757],[-4.653,1.641],[-2.291,3.759],[-0.442,-0.256],[-4.754,-2.756],[0.38,-0.599],[4.288,-2.838],[5.468,-0.925],[3.69,0.35],[6.718,6.373],[1.732,7.803],[0.007,2.99],[-5.453,7.366],[-8.806,2.318],[-4.287,-0.219],[-7.339,-7.616],[-1.167,-1.794]],\"o\":[[-5.094,2.952],[-0.432,-0.631],[-2.711,-3.588],[-5.207,-1.315],[-5.569,2.171],[-2.257,6.127],[2.457,7.064],[4.758,1.153],[4.11,-1.45],[0.276,-0.452],[4.757,2.751],[0.521,0.302],[-2.758,4.347],[-4.625,3.061],[-3.662,0.62],[-9.164,-0.868],[-5.815,-5.517],[-0.65,-2.926],[-0.022,-9.091],[5.43,-7.336],[4.156,-1.094],[10.495,0.537],[1.484,1.54],[0.163,0.25]],\"v\":[[2.967,-249.77],[-12.237,-240.961],[-13.464,-242.744],[-24.105,-249.673],[-39.484,-248.747],[-50.975,-237.017],[-51.158,-218.505],[-36.417,-205.307],[-22.251,-205.901],[-12.541,-213.603],[-11.81,-213.803],[2.457,-205.543],[2.598,-204.63],[-7.996,-193.869],[-23.157,-187.942],[-34.189,-187.534],[-58.159,-198.133],[-69.334,-218.218],[-70.319,-227.101],[-62.524,-251.93],[-41.058,-266.293],[-28.376,-267.616],[-1.501,-255.615],[2.456,-250.594]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.800000011921,0.003921568859,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.151,0.075],[-0.386,-0.701],[-5.099,-0.848],[-3.126,0.876],[-0.852,0.647],[1.658,1.911],[0.999,0.544],[2.197,0.708],[3.024,1],[3.147,2.172],[1.586,3.388],[0.177,2.655],[-0.914,2.907],[-4.437,2.913],[-4.221,0.53],[-5.328,-2.134],[-3.411,-5.394],[-0.503,-0.955],[-0.079,-0.174],[0.343,-0.201],[4.379,-2.552],[0.46,0.885],[1.06,1.19],[2.649,0.545],[2.334,-0.593],[0.923,-0.775],[-1.941,-1.942],[-0.9,-0.506],[-2.649,-0.86],[-3.243,-1.211],[-2.785,-2.027],[-0.619,-5.593],[1.564,-3.934],[4.618,-2.551],[3.832,-0.554],[3.415,0.287],[4.744,2.959],[2.296,5.69],[-0.502,0.291],[-4.8,2.777]],\"o\":[[0.394,0.769],[2.475,4.499],[3.176,0.528],[1.022,-0.286],[2.558,-1.941],[-0.752,-0.867],[-2.037,-1.109],[-3.03,-0.977],[-3.61,-1.194],[-3.053,-2.108],[-1.131,-2.415],[-0.202,-3.033],[1.6,-5.088],[3.563,-2.34],[5.686,-0.714],[5.961,2.388],[0.577,0.913],[0.069,0.13],[-0.355,0.218],[-4.375,2.56],[-0.777,0.453],[-0.731,-1.407],[-1.794,-2.015],[-2.34,-0.481],[-1.156,0.294],[-2.428,2.039],[0.735,0.735],[2.44,1.371],[3.29,1.068],[3.206,1.197],[4.549,3.31],[0.457,4.125],[-1.967,4.948],[-3.398,1.877],[-3.397,0.491],[-5.526,-0.465],[-5.225,-3.259],[-0.237,-0.587],[4.798,-2.78],[0.085,-0.049]],\"v\":[[227.778,-215.243],[228.905,-213.05],[240.198,-204.895],[249.675,-205.288],[252.491,-206.683],[253.289,-214.37],[250.631,-216.442],[244.21,-218.991],[235.053,-221.699],[224.813,-226.531],[217.714,-234.656],[215.823,-242.278],[216.792,-251.201],[225.953,-263.139],[237.665,-267.377],[254.218,-265.344],[268.137,-253.482],[269.737,-250.67],[269.94,-250.228],[268.906,-249.595],[255.778,-241.922],[254.661,-242.257],[252.034,-246.191],[245.387,-250.055],[238.373,-250.028],[235.241,-248.454],[234.895,-240.713],[237.367,-238.88],[245.081,-235.724],[254.955,-232.538],[264.046,-227.909],[271.911,-214.58],[270.62,-202.432],[260.607,-191.303],[249.711,-187.8],[239.494,-187.519],[223.985,-192.356],[212.787,-205.858],[213.055,-206.746],[227.452,-215.08]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.800000011921,0.003921568859,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.268,0.004],[0,-0.264],[0.002,-13.28],[1.069,-0.001],[5.25,0],[0.05,0],[0,0.906],[0,17.572],[0,7.531],[-0.002,0.151],[-0.658,0],[-3.994,0.027],[-0.258,-0.364],[-4.553,-6.403],[-5.077,-7.139],[-0.145,-0.192],[0,0.278],[0,11.899],[-0.004,1.481],[-0.587,0],[-5.501,-0.003],[-0.018,-0.57],[0,-0.176],[0.002,-25.003],[1.243,-0.003],[3.793,-0.032],[0.319,0.45],[9.133,12.848],[0.515,0.712]],\"o\":[[0,0.263],[0,13.28],[0,1.103],[-5.25,0.004],[-0.05,0],[-0.852,-0.006],[0,-17.572],[0,-7.531],[0,-0.151],[0.009,-0.647],[3.994,-0.002],[0.517,-0.003],[4.546,6.408],[5.076,7.139],[0.1,0.141],[0.175,-0.317],[0.004,-11.899],[0,-1.481],[0.002,-0.639],[5.501,-0.003],[0.581,0],[0.006,0.176],[0,25.003],[0,1.319],[-3.793,0.01],[-0.583,0.005],[-9.122,-12.855],[-0.509,-0.716],[-0.081,-0.111]],\"v\":[[161.273,-230.503],[161.273,-229.711],[161.271,-189.872],[160.327,-188.893],[144.578,-188.891],[144.427,-188.891],[143.614,-189.703],[143.614,-242.42],[143.614,-265.013],[143.615,-265.465],[144.282,-266.119],[156.264,-266.134],[157.277,-265.531],[170.929,-246.319],[186.159,-224.902],[186.512,-224.433],[186.614,-225.326],[186.618,-261.023],[186.619,-265.467],[187.215,-266.118],[203.718,-266.118],[204.318,-265.535],[204.319,-265.008],[204.317,-189.999],[203.186,-188.894],[191.807,-188.874],[190.586,-189.525],[163.197,-228.075],[161.666,-230.22]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.800000011921,0.003921568859,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.125,8.335],[0.371,1.929],[8.019,4.862],[8.224,-1.7],[4.703,-7.253],[-1.897,-8.758],[-5.711,-4.531],[-9.224,1.335],[-4.941,5.239]],\"o\":[[-0.061,-1.993],[-1.772,-9.199],[-7.203,-4.367],[-8.466,1.75],[-4.897,7.553],[1.541,7.116],[7.334,5.819],[7.125,-1.031],[5.782,-6.131]],\"v\":[[85.431,-227.502],[84.88,-233.374],[70.293,-254.608],[47.025,-258.46],[27.156,-244.947],[22.841,-220.349],[33.73,-202.786],[58.685,-196.238],[76.839,-205.658]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-5.12,0.031],[-9.818,-7.825],[-2.938,-11.466],[0.231,-5.241],[9.365,-9.793],[9.533,-2.55],[3.62,-0.204],[10.06,6.769],[3.182,13.604],[-0.249,4.908],[-9.87,9.82],[-9.888,2.241]],\"o\":[[11.424,0.11],[9.258,7.379],[1.304,5.089],[-0.594,13.491],[-6.819,7.131],[-3.5,0.936],[-12.093,0.682],[-11.594,-7.801],[-1.121,-4.793],[0.702,-13.857],[7.184,-7.147],[3.932,-0.891]],\"v\":[[54.733,-280.918],[87.267,-269.284],[105.508,-240.937],[107.123,-225.425],[92.375,-190.369],[67.763,-175.923],[57.083,-174.221],[23.745,-183.137],[1.64,-215.353],[0.342,-229.924],[16.005,-265.578],[41.698,-279.575]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.800000011921,0.003921568859,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":6,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":450,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":0,\"nm\":\"gold\",\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1648,490,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[640,360,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[155,155,100],\"ix\":6}},\"ao\":0,\"w\":1280,\"h\":720,\"ip\":0,\"op\":450,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":0,\"nm\":\"master\",\"refId\":\"comp_1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[38,498,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[640,360,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[155,155,100],\"ix\":6}},\"ao\":0,\"w\":1280,\"h\":720,\"ip\":0,\"op\":450,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":0,\"nm\":\"visa\",\"refId\":\"comp_2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[304,508.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[640,360,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[155,155,100],\"ix\":6}},\"ao\":0,\"w\":1280,\"h\":720,\"ip\":0,\"op\":450,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":4,\"nm\":\"golden\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":40,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[972,318,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-330,-42,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[-100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.357},\"t\":131,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-352,-226],[-352,200]],\"c\":false}]},{\"t\":153,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-352,-226],[-352,28]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.760784313725,0.63137254902,0.419607843137,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":12,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":90,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":131,\"s\":[-77]},{\"t\":151,\"s\":[-360]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":134,\"op\":150,\"st\":55,\"bm\":0},{\"ddd\":0,\"ind\":10,\"ty\":4,\"nm\":\"golden\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":40,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[972,318,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-330,-42,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[-100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.357},\"t\":132,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-352,-226],[-352,200]],\"c\":false}]},{\"t\":154,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-352,-226],[-352,28]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.705882352941,0.588235294118,0.392156862745,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":12,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":90,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":132,\"s\":[-77]},{\"t\":152,\"s\":[-360]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":135,\"op\":151,\"st\":56,\"bm\":0},{\"ddd\":0,\"ind\":11,\"ty\":4,\"nm\":\"golden\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":40,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[972,318,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-330,-42,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[-100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.357},\"t\":133,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-352,-226],[-352,200]],\"c\":false}]},{\"t\":155,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-352,-226],[-352,28]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.647058823529,0.537254901961,0.36862745098,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":12,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":90,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":133,\"s\":[-77]},{\"t\":153,\"s\":[-360]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":136,\"op\":152,\"st\":57,\"bm\":0},{\"ddd\":0,\"ind\":12,\"ty\":4,\"nm\":\"golden\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":40,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[972,318,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-330,-42,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[-100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.357},\"t\":107,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-352,-226],[-352,200]],\"c\":false}]},{\"t\":137,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-352,-226],[-352,28]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.760784313725,0.633241062538,0.420668987199,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":12,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":90,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":107,\"s\":[0]},{\"t\":127,\"s\":[-360]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":110,\"op\":126,\"st\":31,\"bm\":0},{\"ddd\":0,\"ind\":13,\"ty\":4,\"nm\":\"golden\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":40,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[972,318,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-330,-42,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[-100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.357},\"t\":108,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-352,-226],[-352,200]],\"c\":false}]},{\"t\":138,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-352,-226],[-352,28]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.705882352941,0.588235294118,0.392156892664,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":12,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":90,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":108,\"s\":[0]},{\"t\":128,\"s\":[-360]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":111,\"op\":127,\"st\":32,\"bm\":0},{\"ddd\":0,\"ind\":14,\"ty\":4,\"nm\":\"golden\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":40,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[972,318,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-330,-42,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[-100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.357},\"t\":109,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-352,-226],[-352,200]],\"c\":false}]},{\"t\":139,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-352,-226],[-352,28]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.647058823529,0.537254901961,0.36862745098,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":12,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":90,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":109,\"s\":[0]},{\"t\":129,\"s\":[-360]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":112,\"op\":128,\"st\":33,\"bm\":0},{\"ddd\":0,\"ind\":16,\"ty\":4,\"nm\":\"white\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":40,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[634,358,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-12,-2,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.335},\"t\":43,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[-12,202],[-12,-156]],\"c\":false}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":75,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[-12,22],[-12,-156]],\"c\":false}]},{\"t\":95,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[-12,22],[-12,-156]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.886274509804,0.878431372549,0.878431372549,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":12,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":90,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":75,\"s\":[90]},{\"t\":95,\"s\":[360]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":79,\"op\":95,\"st\":3,\"bm\":0},{\"ddd\":0,\"ind\":17,\"ty\":4,\"nm\":\"white\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":40,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[634,358,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-12,-2,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.335},\"t\":44,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[-12,202],[-12,-156]],\"c\":false}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":76,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[-12,22],[-12,-156]],\"c\":false}]},{\"t\":96,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[-12,22],[-12,-156]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.803921568627,0.803921568627,0.803921568627,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":12,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":90,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":76,\"s\":[88]},{\"t\":96,\"s\":[360]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":80,\"op\":96,\"st\":4,\"bm\":0},{\"ddd\":0,\"ind\":18,\"ty\":4,\"nm\":\"white\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":40,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[634,358,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-12,-2,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.335},\"t\":45,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[-12,202],[-12,-156]],\"c\":false}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":77,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[-12,22],[-12,-156]],\"c\":false}]},{\"t\":97,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[-12,22],[-12,-156]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.717647058824,0.713725490196,0.713725490196,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":12,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":90,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":77,\"s\":[86]},{\"t\":97,\"s\":[360]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":81,\"op\":97,\"st\":5,\"bm\":0},{\"ddd\":0,\"ind\":19,\"ty\":4,\"nm\":\"white\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":40,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[634,358,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-12,-2,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.335},\"t\":54,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[-12,202],[-12,-156]],\"c\":false}]},{\"t\":77,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[-12,22],[-12,-156]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.886274509804,0.878431372549,0.878431372549,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":12,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":90,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":56,\"s\":[4]},{\"t\":74,\"s\":[360]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":61,\"op\":74,\"st\":14,\"bm\":0},{\"ddd\":0,\"ind\":20,\"ty\":4,\"nm\":\"white\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":40,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[634,358,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-12,-2,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.335},\"t\":55,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[-12,202],[-12,-156]],\"c\":false}]},{\"t\":78,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[-12,22],[-12,-156]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.803921568627,0.803921568627,0.803921568627,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":12,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":90,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":57,\"s\":[2]},{\"t\":75,\"s\":[360]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":62,\"op\":75,\"st\":15,\"bm\":0},{\"ddd\":0,\"ind\":21,\"ty\":4,\"nm\":\"white\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":40,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[634,358,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-12,-2,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.335},\"t\":56,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[-12,202],[-12,-156]],\"c\":false}]},{\"t\":79,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[-12,22],[-12,-156]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.717647058824,0.713725490196,0.713725490196,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":12,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":90,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":58,\"s\":[0]},{\"t\":76,\"s\":[360]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":63,\"op\":76,\"st\":16,\"bm\":0},{\"ddd\":0,\"ind\":23,\"ty\":4,\"nm\":\"grey\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":40,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[310,318,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-330,-42,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.357},\"t\":37,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-380,-226],[-380,188]],\"c\":false}]},{\"t\":58,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-380,-226],[-380,0.875]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.694117647059,0.694117647059,0.694117647059,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":12,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"d\":[{\"n\":\"d\",\"nm\":\"dash\",\"v\":{\"a\":0,\"k\":0,\"ix\":1}},{\"n\":\"g\",\"nm\":\"gap\",\"v\":{\"a\":0,\"k\":0,\"ix\":2}},{\"n\":\"o\",\"nm\":\"offset\",\"v\":{\"a\":0,\"k\":0,\"ix\":7}}],\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":90,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":37,\"s\":[-77]},{\"t\":58,\"s\":[-360]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":41,\"op\":56,\"st\":28,\"bm\":0},{\"ddd\":0,\"ind\":24,\"ty\":4,\"nm\":\"grey\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":40,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[310,318,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-330,-42,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.357},\"t\":38,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-380,-226],[-380,188]],\"c\":false}]},{\"t\":59,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-380,-226],[-380,0.875]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.6,0.6,0.6,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":12,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"d\":[{\"n\":\"d\",\"nm\":\"dash\",\"v\":{\"a\":0,\"k\":0,\"ix\":1}},{\"n\":\"g\",\"nm\":\"gap\",\"v\":{\"a\":0,\"k\":0,\"ix\":2}},{\"n\":\"o\",\"nm\":\"offset\",\"v\":{\"a\":0,\"k\":0,\"ix\":7}}],\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":90,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":38,\"s\":[-77]},{\"t\":59,\"s\":[-360]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":42,\"op\":57,\"st\":29,\"bm\":0},{\"ddd\":0,\"ind\":25,\"ty\":4,\"nm\":\"grey\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":40,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[310,318,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-330,-42,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.357},\"t\":39,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-380,-226],[-380,188]],\"c\":false}]},{\"t\":60,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-380,-226],[-380,0.875]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.541176470588,0.537254901961,0.537254901961,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":12,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"d\":[{\"n\":\"d\",\"nm\":\"dash\",\"v\":{\"a\":0,\"k\":0,\"ix\":1}},{\"n\":\"g\",\"nm\":\"gap\",\"v\":{\"a\":0,\"k\":0,\"ix\":2}},{\"n\":\"o\",\"nm\":\"offset\",\"v\":{\"a\":0,\"k\":0,\"ix\":7}}],\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":90,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":39,\"s\":[-77]},{\"t\":60,\"s\":[-360]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":43,\"op\":58,\"st\":30,\"bm\":0},{\"ddd\":0,\"ind\":26,\"ty\":4,\"nm\":\"grey\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":40,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[310,318,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-330,-42,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.357},\"t\":9,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-380,-226],[-380,188]],\"c\":false}]},{\"t\":35,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-380,-226],[-380,0.875]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.694117647059,0.694117647059,0.694117647059,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":12,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"d\":[{\"n\":\"d\",\"nm\":\"dash\",\"v\":{\"a\":0,\"k\":0,\"ix\":1}},{\"n\":\"g\",\"nm\":\"gap\",\"v\":{\"a\":0,\"k\":0,\"ix\":2}},{\"n\":\"o\",\"nm\":\"offset\",\"v\":{\"a\":0,\"k\":0,\"ix\":7}}],\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":90,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":9,\"s\":[0]},{\"t\":35,\"s\":[-360]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":10,\"op\":31,\"st\":1,\"bm\":0},{\"ddd\":0,\"ind\":27,\"ty\":4,\"nm\":\"grey\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":40,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[310,318,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-330,-42,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.357},\"t\":10,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-380,-226],[-380,188]],\"c\":false}]},{\"t\":36,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-380,-226],[-380,0.875]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.6,0.6,0.6,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":12,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"d\":[{\"n\":\"d\",\"nm\":\"dash\",\"v\":{\"a\":0,\"k\":0,\"ix\":1}},{\"n\":\"g\",\"nm\":\"gap\",\"v\":{\"a\":0,\"k\":0,\"ix\":2}},{\"n\":\"o\",\"nm\":\"offset\",\"v\":{\"a\":0,\"k\":0,\"ix\":7}}],\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":90,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":10,\"s\":[0]},{\"t\":36,\"s\":[-360]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":11,\"op\":32,\"st\":2,\"bm\":0},{\"ddd\":0,\"ind\":28,\"ty\":4,\"nm\":\"grey\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":40,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[310,318,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-330,-42,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.357},\"t\":11,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-380,-226],[-380,188]],\"c\":false}]},{\"t\":37,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-280,-226],[-380,-226],[-380,0.875]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.541176470588,0.537254901961,0.537254901961,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":12,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"d\":[{\"n\":\"d\",\"nm\":\"dash\",\"v\":{\"a\":0,\"k\":0,\"ix\":1}},{\"n\":\"g\",\"nm\":\"gap\",\"v\":{\"a\":0,\"k\":0,\"ix\":2}},{\"n\":\"o\",\"nm\":\"offset\",\"v\":{\"a\":0,\"k\":0,\"ix\":7}}],\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":90,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":11,\"s\":[0]},{\"t\":37,\"s\":[-360]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":12,\"op\":33,\"st\":3,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/signup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Working_place\Hossam\debcoins_next\pages\signup.js */"./pages/signup.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dropzone":
/*!*********************************!*\
  !*** external "react-dropzone" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ "react-google-recaptcha":
/*!*****************************************!*\
  !*** external "react-google-recaptcha" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-recaptcha");

/***/ }),

/***/ "react-lottie":
/*!*******************************!*\
  !*** external "react-lottie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lottie");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=signup.js.map