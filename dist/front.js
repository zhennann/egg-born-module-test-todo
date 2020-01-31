window["test-todo"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3).default
var update = add("8c55a00a", content, true, {});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/yangjian/Documents/data/cabloy/egg-born-demo/node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: /Users/yangjian/Documents/data/cabloy/egg-born-demo/node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

(function() { module.exports = window["Vue"]; }());

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _assets_css_module_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_module_css__WEBPACK_IMPORTED_MODULE_0__);
var Vue;


function install(_Vue, cb) {
  if (Vue) return console.error('already installed.');
  Vue = _Vue;
  return cb({
    routes: __webpack_require__(8)["default"],
    store: __webpack_require__(13)["default"](Vue),
    config: __webpack_require__(14)["default"],
    locales: __webpack_require__(15)["default"],
    components: __webpack_require__(17)["default"]
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  install: install
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3).default
var update = add("17edd74d", content, true, {});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// Module
exports.push([module.i, "\n", "",{"version":3,"sources":[],"names":[],"mappings":"","file":"module.css"}]);



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function load(name) {
  return __webpack_require__(9)("./".concat(name, ".vue"))["default"];
}

/* harmony default export */ __webpack_exports__["default"] = ([{
  path: 'testvue',
  component: load('testvue')
}, {
  path: 'test',
  component: load('test')
}, {
  path: 'test2',
  component: load('test2')
}]);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./test.vue": 18,
	"./test2.vue": 19,
	"./testvue.vue": 20
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_28df42da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_28df42da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_28df42da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_28df42da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// Module
exports.push([module.i, "\n.test[data-v-28df42da] {\n  color: red;\n}\n\n", "",{"version":3,"sources":["test.vue?vue&type=style&index=0&id=28df42da&scoped=true&lang=css&"],"names":[],"mappings":";AACA;EACE,UAAU;AACZ","file":"test.vue?vue&type=style&index=0&id=28df42da&scoped=true&lang=css&","sourcesContent":["\n.test[data-v-28df42da] {\n  color: red;\n}\n\n"]}]);



/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/user.4819d46124c424b8e299f0f5ed68fb6d.png";

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (Vue) {
  return {
    state: {},
    getters: {},
    mutations: {},
    actions: {}
  };
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'zh-cn': __webpack_require__(16)["default"]
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'What to do': '要做什么',
  Completed: '已完成',
  Imcompleted: '未完成'
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/yangjian/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/yangjian/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib??vue-loader-options!./front/src/pages/test.vue?vue&type=template&id=28df42da&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('eb-page',[_c('eb-navbar',{attrs:{"title":"test","eb-back-link":"Back"}}),_vm._v(" "),_c('f7-block',{staticClass:"no-padding-horizontal",attrs:{"strong":""}},[_c('f7-treeview',[_c('f7-treeview-item',{attrs:{"label":"images","icon-f7":"folder_fill"}},[_c('f7-treeview-item',{attrs:{"label":"avatar.png","icon-f7":"images_fill"}}),_vm._v(" "),_c('f7-treeview-item',{attrs:{"label":"background.jpg","icon-f7":"images_fill"}})],1),_vm._v(" "),_c('f7-treeview-item',{attrs:{"label":"documents","icon-f7":"folder_fill"}},[_c('f7-treeview-item',{attrs:{"label":"cv.docx","icon-f7":"document_text_fill"}}),_vm._v(" "),_c('f7-treeview-item',{attrs:{"label":"info.docx","icon-f7":"document_text_fill"}})],1),_vm._v(" "),_c('f7-treeview-item',{attrs:{"label":".gitignore","icon-f7":"logo_github"}}),_vm._v(" "),_c('f7-treeview-item',{attrs:{"label":"index.html","icon-f7":"document_text_fill"}})],1)],1),_vm._v(" "),_c('f7-block',[_c('div',{staticClass:"test"},[_vm._v(_vm._s(_vm.message))]),_vm._v(" "),_c('eb-button',{attrs:{"id":"downlogs"},on:{"click":_vm.onClick}},[_vm._v("click")]),_vm._v(" "),_c('eb-button',{on:{"click":_vm.onClickReload}},[_vm._v("reload")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./front/src/pages/test.vue?vue&type=template&id=28df42da&scoped=true&

// CONCATENATED MODULE: /Users/yangjian/Documents/data/cabloy/egg-born-demo/node_modules/babel-loader/lib!/Users/yangjian/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib??vue-loader-options!./front/src/pages/test.vue?vue&type=script&lang=js&
function install(_Vue) {
  var Vue = _Vue;
  return {
    components: {},
    data: function data() {
      return {
        message: '1'
      };
    },
    beforeCreate: function beforeCreate() {},
    beforeDestroy: function beforeDestroy() {},
    methods: {
      onClick: function onClick() {
        var app = this.$f7;
        var vm = app.calendar.create({
          openIn: "auto",
          inputEl: "#downlogs"
        });
        vm.open();
      },
      onClickReload: function onClickReload() {
        return this.$api.post('todo/reload');
      }
    }
  };
}

/* harmony default export */ var testvue_type_script_lang_js_ = ({
  install: install
});
// CONCATENATED MODULE: ./front/src/pages/test.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_testvue_type_script_lang_js_ = (testvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./front/src/pages/test.vue?vue&type=style&index=0&id=28df42da&scoped=true&lang=css&
var testvue_type_style_index_0_id_28df42da_scoped_true_lang_css_ = __webpack_require__(10);

// EXTERNAL MODULE: /Users/yangjian/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./front/src/pages/test.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_testvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "28df42da",
  null
  
)

/* harmony default export */ var test = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/yangjian/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/yangjian/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib??vue-loader-options!./front/src/pages/test2.vue?vue&type=template&id=3fdfc394&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("aaa")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./front/src/pages/test2.vue?vue&type=template&id=3fdfc394&

// CONCATENATED MODULE: /Users/yangjian/Documents/data/cabloy/egg-born-demo/node_modules/babel-loader/lib!/Users/yangjian/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib??vue-loader-options!./front/src/pages/test2.vue?vue&type=script&lang=js&
/* harmony default export */ var test2vue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./front/src/pages/test2.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_test2vue_type_script_lang_js_ = (test2vue_type_script_lang_js_); 
// EXTERNAL MODULE: /Users/yangjian/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./front/src/pages/test2.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_test2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var test2 = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/yangjian/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/yangjian/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib??vue-loader-options!./front/src/pages/testvue.vue?vue&type=template&id=3fc1d70e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('eb-page',[_c('eb-navbar',{attrs:{"title":"test","eb-back-link":"Back"}}),_vm._v(" "),_c('f7-block',[_c('div',{staticClass:"test"},[_vm._v("test red")]),_vm._v(" "),_c('f7-link',{on:{"click":_vm.onClickTest}},[_vm._v("Test")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('f7-link',{on:{"click":_vm.onClickSelectSingleAtom}},[_vm._v("Select Single Atom")]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.atomId))]),_vm._v(" "),_c('br'),_vm._v(" "),_c('f7-link',{on:{"click":_vm.onClickSelectAtoms}},[_vm._v("Select Atoms")]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.atomIds))]),_vm._v(" "),_c('img',{attrs:{"src":__webpack_require__(12)}})],1),_vm._v(" "),_c('f7-list',[_c('f7-list-group',[_c('eb-list-item',{attrs:{"group-title":"","title":"A"}}),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"A1"}},[_c('f7-list-group',[_c('eb-list-item',{attrs:{"group-title":"","title":"AA"}}),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"AA1"}}),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"AA2"}})],1)],1),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"A2"}})],1),_vm._v(" "),_c('f7-list-group',[_c('eb-list-item',{attrs:{"group-title":"","title":"B"}}),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"B1"}},[_c('f7-list-group',[_c('eb-list-item',{attrs:{"group-title":"","title":"BB"}}),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"BB1"}}),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"BB2"}})],1)],1),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"B2"}})],1),_vm._v(" "),_c('f7-list-group',[_c('eb-list-item',{attrs:{"group-title":"","title":"C"}}),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"C1"}}),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"C2"}}),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"C2"}}),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"C2"}}),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"C2"}}),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"C2"}}),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"C2"}}),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"C2"}}),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"C2"}}),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"C2"}}),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"C2"}}),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"C2"}}),_vm._v(" "),_c('eb-list-item',{attrs:{"title":"C2"}})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./front/src/pages/testvue.vue?vue&type=template&id=3fc1d70e&

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(4);
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: /Users/yangjian/Documents/data/cabloy/egg-born-demo/node_modules/babel-loader/lib!/Users/yangjian/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib??vue-loader-options!./front/src/pages/testvue.vue?vue&type=script&lang=js&

var ebPageContext = external_Vue_default.a.prototype.$meta.module.get('a-components').options.components.ebPageContext;
/* harmony default export */ var testvuevue_type_script_lang_js_ = ({
  mixins: [ebPageContext],
  components: {},
  data: function data() {
    return {
      atomId: null,
      atomIds: null
    };
  },
  beforeCreate: function beforeCreate() {},
  beforeDestroy: function beforeDestroy() {},
  methods: {
    onClickTest: function onClickTest() {
      var _this = this;

      this.$api.post('todo/progress').then(function (data) {
        var progressId = data.progressId;

        _this.$view.dialog.progressbar({
          progressId: progressId,
          title: 'This is a test'
        }).then(function (data) {
          console.log(data);
        })["catch"](function (err) {
          console.log(err);
        });
      });
    },
    onClickSelectSingleAtom: function onClickSelectSingleAtom() {
      var _this2 = this;

      var url = '/a/base/atom/select';
      this.$view.navigate(url, {
        target: '_self',
        context: {
          params: {
            selectMode: 'single',
            selectedAtomId: this.atomId,
            atomClass: {
              module: 'a-cms',
              atomClassName: 'article'
            },
            where: {
              'f.sticky': 1
            }
          },
          callback: function callback(code, selectedAtom) {
            if (code === 200) {
              _this2.atomId = selectedAtom && selectedAtom.atomId;
            }
          }
        }
      });
    },
    onClickSelectAtoms: function onClickSelectAtoms() {
      var _this3 = this;

      var url = '/a/base/atom/select';
      this.$view.navigate(url, {
        target: '_self',
        context: {
          params: {
            selectMode: 'multiple',
            selectedAtomIds: this.atomIds,
            atomClass: null
          },
          callback: function callback(code, selectedAtoms) {
            if (code === 200) {
              _this3.atomIds = selectedAtoms && selectedAtoms.map(function (item) {
                return item.atomId;
              });
            }
          }
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./front/src/pages/testvue.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_testvuevue_type_script_lang_js_ = (testvuevue_type_script_lang_js_); 
// EXTERNAL MODULE: /Users/yangjian/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./front/src/pages/testvue.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_testvuevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var testvue = __webpack_exports__["default"] = (component.exports);

/***/ })
/******/ ]);