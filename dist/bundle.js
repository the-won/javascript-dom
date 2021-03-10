/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dom)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Dom = function Dom() {\n  var _this = this;\n\n  _classCallCheck(this, Dom);\n\n  this.get = function (el) {\n    var p = (_this.util.isString(el) ? _this.doc.getElementById(el) : el) || null;\n\n    if (p && !p.__BEHAVIORS_ATTACHED) {\n      return _this.anchor.attachBehaviors(p);\n    }\n\n    return p;\n  };\n\n  this.$ = function (tag) {\n    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.doc;\n    var tmp = root.querySelectorAll(tag);\n    if (tmp.length === 1) return _this.get(root.querySelector(tag));else return !tmp ? [] : _toConsumableArray(tmp).map(function (el) {\n      return _this.get(el);\n    });\n  };\n\n  this.createEl = function (tag) {\n    return _this.get(_this.doc.createElement(tag));\n  };\n\n  this.append = function (tag, parent) {\n    var p = parent ? _this.get(parent) : _this.doc.body;\n    var d = _this.util.isElement(tag) ? tag : _this.doc.createElement(tag);\n    p.appendChild(d);\n    return _this.get(d);\n  };\n\n  this.fixStyle = function (s) {\n    console.log('fixstyle', s);\n    return s.replace(/;+/gi, ';').replace(/:/gi, ': ') + ';';\n  };\n\n  this.anchor = {\n    attachBehaviors: function attachBehaviors() {}\n  };\n  this.win = window;\n  this.doc = document;\n  this.util = _util_js__WEBPACK_IMPORTED_MODULE_0__.default.create();\n\n  this.anchor.attachBehaviors = function (p) {\n    if (p && _this.util.isElement(p)) {\n      /**\r\n       * @method  $()\r\n       * @param { string }\r\n       * @returns { Object }\r\n       * @description \r\n       */\n      p.$ = function (s) {\n        return _this.$(s, p);\n      };\n      /**\r\n       * @method  hasClass()\r\n       * @param { string }\r\n       * @returns { boolean }\r\n       * @description \r\n       */\n\n\n      p.hasClass = function () {\n        for (var _len = arguments.length, cn = new Array(_len), _key = 0; _key < _len; _key++) {\n          cn[_key] = arguments[_key];\n        }\n\n        return cn.every(function (cn) {\n          return !cn ? false : p.classList.contains(cn) === true;\n        });\n      };\n      /**\r\n       * @method  addClass()\r\n       * @param { string }\r\n       * @returns { Object }\r\n       * @description \r\n       */\n\n\n      p.addClass = function () {\n        var _p$classList;\n\n        (_p$classList = p.classList).add.apply(_p$classList, arguments);\n\n        return p;\n      };\n      /**\r\n       * @method  removeClass()\r\n       * @param { string }\r\n       * @returns { Object }\r\n       * @description \r\n       */\n\n\n      p.removeClass = function () {\n        var _p$classList2;\n\n        (_p$classList2 = p.classList).remove.apply(_p$classList2, arguments);\n\n        return p;\n      };\n      /**\r\n       * @method  toggleClass()\r\n       * @param { string }\r\n       * @returns { Object }\r\n       * @description \r\n       */\n\n\n      p.toggleClass = function () {\n        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n          args[_key2] = arguments[_key2];\n        }\n\n        args.forEach(function (c) {\n          return p.classList.toggle(c);\n        });\n        return p;\n      };\n      /**\r\n       * @method  replaceClass()\r\n       * @param { string, string }\r\n       * @returns { Object }\r\n       * @description \r\n       */\n\n\n      p.replaceClass = function () {\n        var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n        var _o = o.trim();\n\n        var _n = n.trim();\n\n        p.removeClass(_o);\n        p.addClass(_n);\n        return p;\n      };\n      /**\r\n       * @method  empty()\r\n       * @param { }\r\n       * @returns { Object }\r\n       * @description \r\n       */\n\n\n      p.empty = function () {\n        while (p.lastChild) {\n          p.removeChild(p.lastChild);\n        }\n\n        return p;\n      };\n      /**\r\n       * @method  html()\r\n       * @param { string }\r\n       * @returns { Object }\r\n       * @description \r\n       */\n\n\n      p.html = function (s) {\n        if (_this.util.isNil(s)) return p.innerHTML;\n        p.innerHTML = s;\n        return p;\n      };\n      /**\r\n       * @method  destroy()\r\n       * @param {  }\r\n       * @returns {  }\r\n       * @description \r\n       */\n\n\n      p.destroy = function () {\n        if (p.parentNode) {\n          p.parentNode.removeChild(p);\n        }\n      };\n      /**\r\n      * @method  setStyle()\r\n      * @param {  }\r\n      * @returns {  }\r\n      * @description \r\n      */\n\n\n      p.setStyle = function () {\n        var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n        var props = _this.util.isString(o) ? o.split(';') : _this.util.isObject(o) ? function (input) {\n          console.log(Object.keys(input));\n          return Object.keys(input).map(function (k) {\n            var v = input[k];\n\n            if (_this.util.isString(v) || _this.utilisNumber(v)) {\n              var x = _this.util.normalize(k, v);\n\n              console.log(x);\n              return [x.key, x.value].join(':');\n            }\n\n            return null;\n          }).filter(function (item) {\n            return !_this.util.isNil(item);\n          });\n        }(o) : [];\n        console.log(props);\n        var currStyle = p.getAttribute('style') || '';\n        var currStyleList = currStyle.split(';');\n        var combinedPropes = [].concat(_toConsumableArray(currStyleList), _toConsumableArray(props), ['']);\n        var st = combinedPropes.filter(function (item) {\n          return item.trim().length > 0;\n        }).map(function (item) {\n          var parts = item.split(':');\n          return parts.map(function (part) {\n            return part.trim();\n          }).join(':');\n        }).join('; ');\n        p.setAttribute('style', _this.fixStyle(st));\n        console.log('완료', p);\n        return p;\n      };\n\n      p.___BEHAVIORS_ATTACHED = 1;\n    }\n\n    return p;\n  };\n};\n\nDom.create = function () {\n  return new Dom();\n};\n\n\n\n//# sourceURL=webpack://babel/./src/dom.js?");

/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\nvar Event = function Event() {\n  var _this = this;\n\n  _classCallCheck(this, Event);\n\n  this.evt = function (s, en, fn) {\n    var _this$util = _this.util,\n        isFunction = _this$util.isFunction,\n        isString = _this$util.isString,\n        isElement = _this$util.isElement;\n    var get = _this.dom.get;\n    return !isFunction(fn) ? false : function () {\n      var el = isString(s) ? get(s) : s;\n      return !isElement(el) ? false : function () {\n        el.addEventListener(en, fn, false);\n      }();\n    }();\n  };\n\n  this.click = function (s, fn) {\n    s.length === undefined ? _this.evt(s, 'click', fn) : s.forEach(function (s) {\n      return _this.evt(s, 'click', fn);\n    });\n  };\n\n  this.mouseover = function (s, fn) {\n    s.length === undefined ? _this.evt(s, 'mouseover', fn) : s.forEach(function (s) {\n      return _this.evt(s, 'mouseover', fn);\n    });\n  };\n\n  this.mouseout = function (s, fn) {\n    s.length === undefined ? _this.evt(s, 'mouseout', fn) : s.forEach(function (s) {\n      return _this.evt(s, 'mouseout', fn);\n    });\n  };\n\n  this.change = function (s, fn) {\n    s.length === undefined ? _this.evt(s, 'change', fn) : s.forEach(function (s) {\n      return _this.evt(s, 'change', fn);\n    });\n  };\n\n  this.scroll = function (s, fn) {\n    s.length === undefined ? _this.evt(s, 'scroll', fn) : s.forEach(function (s) {\n      return _this.evt(s, 'scroll', fn);\n    });\n  };\n\n  this.util = _util_js__WEBPACK_IMPORTED_MODULE_0__.default.create();\n  this.dom = _dom_js__WEBPACK_IMPORTED_MODULE_1__.default.create();\n};\n\nEvent.create = function () {\n  return new Event();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Event);\n\n//# sourceURL=webpack://babel/./src/event.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event.js */ \"./src/event.js\");\n\n\nconsole.log('webpack start');\nwindow.DOM = _dom_js__WEBPACK_IMPORTED_MODULE_0__.default;\nwindow.EVENT = _event_js__WEBPACK_IMPORTED_MODULE_1__.default;\n\n//# sourceURL=webpack://babel/./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Util)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Util = function Util() {\n  var _this = this;\n\n  _classCallCheck(this, Util);\n\n  this.ob2Str = function (val) {\n    return Object.prototype.toString.call(val);\n  };\n\n  this.isString = function (val) {\n    return String(val) === val;\n  };\n\n  this.isNumber = function (val) {\n    return Number(val) === val;\n  };\n\n  this.isNil = function (val) {\n    return val === null || val === undefined;\n  };\n\n  this.isArray = function (val) {\n    return Array.isArray(val) === val;\n  };\n\n  this.isFunction = function (val) {\n    return _this.ob2Str(val) === '[object Function]';\n  };\n\n  this.isObject = function (val) {\n    return _this.ob2Str(val) === '[object Object]' && !_this.isArray(val);\n  };\n\n  this.isElement = function (val) {\n    return _this.ob2Str(val).match(/^\\[object HTML\\w*Element]$/) !== null;\n  };\n\n  this.getNormalize = function (k, v) {\n    var reg = /^([a-z]+)([A-Z]{1})([a-z]+)$/;\n    var mat = k.match(reg);\n\n    if (mat || mat.index === 0) {\n      var a = [];\n      a.push(mat[1]);\n      a.push('-');\n      a.push(mat[2]);\n      a.push(mat[3]);\n      k = a.join('').toLowerCase();\n    }\n\n    if (_this.isNumber(v)) v += 'px';\n    return {\n      key: k,\n      value: v\n    };\n  };\n\n  this.normalize = function (k, v) {\n    var reg = /^([a-z]+)([A-Z]{1})([a-z]+)$/;\n    var mat = k.match(reg); //fontSize 이러한 경우 소문자 뒤에 대분자의 경우 \n\n    if (mat && mat.index === 0) {\n      var a = [];\n      a.push(mat[1]);\n      a.push('-');\n      a.push(mat[2]);\n      a.push(mat[3]);\n      k = a.join('').toLowerCase();\n    }\n\n    if (_this.isNumber(v)) {\n      v += 'px';\n    }\n\n    return {\n      key: k,\n      value: v\n    };\n  };\n};\n\nUtil.create = function () {\n  return new Util();\n};\n\n\n\n//# sourceURL=webpack://babel/./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;