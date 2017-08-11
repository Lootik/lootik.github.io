/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	var constants = __webpack_require__(7);

	VS = angular.module('VS', [
	    'customVirtualScroll',
	    'materialVirtualScroll',
	    'ngMaterial',
	    'ui.router'
	]).config(['$sceDelegateProvider', function ($sceDelegateProvider) {
	        $sceDelegateProvider.resourceUrlWhitelist([
	            'https://en.wikipedia.org/**'
	        ]);
	    }]);

	VS.run(['$rootScope', '$state', '$timeout', function ($rootScope, $state, $timeout) {
	        $rootScope.pagesAmount = constants.WIKI_PAGES_DISPLAY;
	        $timeout(function () {
	            $rootScope.currentNavItem = $state.current.name;
	        }, 0, false);
	    }]);
	//router
	__webpack_require__(8);

	//modules
	__webpack_require__(10);
	__webpack_require__(15);

	//Serveces
	__webpack_require__(20);
	  

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;

	var options = {}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/style-loader/index.js!../node_modules/css-loader/index.js!./main.css", function() {
				var newContent = require("!!../node_modules/style-loader/index.js!../node_modules/css-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;

	var options = {}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!./main.css", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)(undefined);
	// imports


	// module
	exports.push([module.id, "#mask {\r\n    background: gray;\r\n    opacity: 0.5;\r\n    position: fixed;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    right: 0px;\r\n    left: 0px;\r\n    z-index: 99999;\r\n}\r\n\r\n#mask p {\r\n    opacity: 1;   \r\n    font-size: 40px;\r\n}", ""]);

	// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function(useSourceMap) {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			return this.map(function (item) {
				var content = cssWithMappingToString(item, useSourceMap);
				if(item[2]) {
					return "@media " + item[2] + "{" + content + "}";
				} else {
					return content;
				}
			}).join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
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
				return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
			});

			return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
		}

		return [content].join('\n');
	}

	// Adapted from convert-source-map (MIT)
	function toComment(sourceMap) {
		// eslint-disable-next-line no-undef
		var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
		var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

		return '/*# ' + data + ' */';
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/

	var stylesInDom = {};

	var	memoize = function (fn) {
		var memo;

		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	};

	var isOldIE = memoize(function () {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	});

	var getElement = (function (fn) {
		var memo = {};

		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}

			return memo[selector]
		};
	})(function (target) {
		return document.querySelector(target)
	});

	var singleton = null;
	var	singletonCounter = 0;
	var	stylesInsertedAtTop = [];

	var	fixUrls = __webpack_require__(6);

	module.exports = function(list, options) {
		if (false) {
			if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};

		options.attrs = typeof options.attrs === "object" ? options.attrs : {};

		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (!options.singleton) options.singleton = isOldIE();

		// By default, add <style> tags to the <head> element
		if (!options.insertInto) options.insertInto = "head";

		// By default, add <style> tags to the bottom of the target
		if (!options.insertAt) options.insertAt = "bottom";

		var styles = listToStyles(list, options);

		addStylesToDom(styles, options);

		return function update (newList) {
			var mayRemove = [];

			for (var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];

				domStyle.refs--;
				mayRemove.push(domStyle);
			}

			if(newList) {
				var newStyles = listToStyles(newList, options);
				addStylesToDom(newStyles, options);
			}

			for (var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];

				if(domStyle.refs === 0) {
					for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

					delete stylesInDom[domStyle.id];
				}
			}
		};
	};

	function addStylesToDom (styles, options) {
		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			if(domStyle) {
				domStyle.refs++;

				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}

				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];

				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}

				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles (list, options) {
		var styles = [];
		var newStyles = {};

		for (var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = options.base ? item[0] + options.base : item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};

			if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
			else newStyles[id].parts.push(part);
		}

		return styles;
	}

	function insertStyleElement (options, style) {
		var target = getElement(options.insertInto)

		if (!target) {
			throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
		}

		var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

		if (options.insertAt === "top") {
			if (!lastStyleElementInsertedAtTop) {
				target.insertBefore(style, target.firstChild);
			} else if (lastStyleElementInsertedAtTop.nextSibling) {
				target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				target.appendChild(style);
			}
			stylesInsertedAtTop.push(style);
		} else if (options.insertAt === "bottom") {
			target.appendChild(style);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement (style) {
		if (style.parentNode === null) return false;
		style.parentNode.removeChild(style);

		var idx = stylesInsertedAtTop.indexOf(style);
		if(idx >= 0) {
			stylesInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement (options) {
		var style = document.createElement("style");

		options.attrs.type = "text/css";

		addAttrs(style, options.attrs);
		insertStyleElement(options, style);

		return style;
	}

	function createLinkElement (options) {
		var link = document.createElement("link");

		options.attrs.type = "text/css";
		options.attrs.rel = "stylesheet";

		addAttrs(link, options.attrs);
		insertStyleElement(options, link);

		return link;
	}

	function addAttrs (el, attrs) {
		Object.keys(attrs).forEach(function (key) {
			el.setAttribute(key, attrs[key]);
		});
	}

	function addStyle (obj, options) {
		var style, update, remove, result;

		// If a transform function was defined, run it on the css
		if (options.transform && obj.css) {
		    result = options.transform(obj.css);

		    if (result) {
		    	// If transform returns a value, use that instead of the original css.
		    	// This allows running runtime transformations on the css.
		    	obj.css = result;
		    } else {
		    	// If the transform function returns a falsy value, don't add this css.
		    	// This allows conditional loading of css
		    	return function() {
		    		// noop
		    	};
		    }
		}

		if (options.singleton) {
			var styleIndex = singletonCounter++;

			style = singleton || (singleton = createStyleElement(options));

			update = applyToSingletonTag.bind(null, style, styleIndex, false);
			remove = applyToSingletonTag.bind(null, style, styleIndex, true);

		} else if (
			obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function"
		) {
			style = createLinkElement(options);
			update = updateLink.bind(null, style, options);
			remove = function () {
				removeStyleElement(style);

				if(style.href) URL.revokeObjectURL(style.href);
			};
		} else {
			style = createStyleElement(options);
			update = applyToTag.bind(null, style);
			remove = function () {
				removeStyleElement(style);
			};
		}

		update(obj);

		return function updateStyle (newObj) {
			if (newObj) {
				if (
					newObj.css === obj.css &&
					newObj.media === obj.media &&
					newObj.sourceMap === obj.sourceMap
				) {
					return;
				}

				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;

			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag (style, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (style.styleSheet) {
			style.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = style.childNodes;

			if (childNodes[index]) style.removeChild(childNodes[index]);

			if (childNodes.length) {
				style.insertBefore(cssNode, childNodes[index]);
			} else {
				style.appendChild(cssNode);
			}
		}
	}

	function applyToTag (style, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			style.setAttribute("media", media)
		}

		if(style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			while(style.firstChild) {
				style.removeChild(style.firstChild);
			}

			style.appendChild(document.createTextNode(css));
		}
	}

	function updateLink (link, options, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		/*
			If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
			and there is no publicPath defined then lets turn convertToAbsoluteUrls
			on by default.  Otherwise default to the convertToAbsoluteUrls option
			directly
		*/
		var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

		if (options.convertToAbsoluteUrls || autoFixUrls) {
			css = fixUrls(css);
		}

		if (sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = link.href;

		link.href = URL.createObjectURL(blob);

		if(oldSrc) URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	
	/**
	 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
	 * embed the css on the page. This breaks all relative urls because now they are relative to a
	 * bundle instead of the current page.
	 *
	 * One solution is to only use full urls, but that may be impossible.
	 *
	 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
	 *
	 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
	 *
	 */

	module.exports = function (css) {
	  // get current location
	  var location = typeof window !== "undefined" && window.location;

	  if (!location) {
	    throw new Error("fixUrls requires window.location");
	  }

		// blank or null?
		if (!css || typeof css !== "string") {
		  return css;
	  }

	  var baseUrl = location.protocol + "//" + location.host;
	  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

		// convert each url(...)
		/*
		This regular expression is just a way to recursively match brackets within
		a string.

		 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
		   (  = Start a capturing group
		     (?:  = Start a non-capturing group
		         [^)(]  = Match anything that isn't a parentheses
		         |  = OR
		         \(  = Match a start parentheses
		             (?:  = Start another non-capturing groups
		                 [^)(]+  = Match anything that isn't a parentheses
		                 |  = OR
		                 \(  = Match a start parentheses
		                     [^)(]*  = Match anything that isn't a parentheses
		                 \)  = Match a end parentheses
		             )  = End Group
	              *\) = Match anything and then a close parens
	          )  = Close non-capturing group
	          *  = Match anything
	       )  = Close capturing group
		 \)  = Match a close parens

		 /gi  = Get all matches, not the first.  Be case insensitive.
		 */
		var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
			// strip quotes (if they exist)
			var unquotedOrigUrl = origUrl
				.trim()
				.replace(/^"(.*)"$/, function(o, $1){ return $1; })
				.replace(/^'(.*)'$/, function(o, $1){ return $1; });

			// already a full url? no change
			if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			  return fullMatch;
			}

			// convert the url to a full url
			var newUrl;

			if (unquotedOrigUrl.indexOf("//") === 0) {
			  	//TODO: should we add protocol?
				newUrl = unquotedOrigUrl;
			} else if (unquotedOrigUrl.indexOf("/") === 0) {
				// path should be relative to the base url
				newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
			} else {
				// path should be relative to current directory
				newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
			}

			// send back the fixed url(...)
			return "url(" + JSON.stringify(newUrl) + ")";
		});

		// send back the fixed css
		return fixedCss;
	};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = {
	    WIKI_PAGES_DISPLAY: 10000,
	    WIKI_PAGES_FETCH_URL: "https://en.wikipedia.org/w/api.php?action=query&list=recentchanges&rcprop=title%7Cids%7Csizes%7Cflags%7Cuser&rclimit=500&format=json"
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	VS.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	        $stateProvider
	            .state('main', {
	                url: "/",
	                template: __webpack_require__(9)
	            })
	            .state('main.custom', {
	                url: "custom",
	                template: "<virtual-scroll-grid></virtual-scroll-grid>"
	            })
	            .state('main.material', {
	                url: "material",
	                template: "<material-scroll-grid></material-scroll-grid>"
	            });
	        $urlRouterProvider.otherwise("custom");
	    }]);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = "<md-nav-bar md-selected-nav-item=\"currentNavItem\" nav-bar-aria-label=\"navigation links\">\r\n    <md-nav-item  ui-sref=\"main.custom\" md-nav-click=\"goto('custom')\" name=\"main.custom\">\r\n        Custom Implementation\r\n    </md-nav-item>\r\n    <md-nav-item   ui-sref=\"main.material\" md-nav-click=\"goto('material')\" name=\"main.material\">\r\n        Angular Material Implementation\r\n    </md-nav-item>\r\n    <div layout=\"row\" layout-align=\"end center\" flex>\r\n        <md-content>\r\n            <div>\r\n                Wikipedia Pages Amount -  {{pagesAmount}}\r\n            </div>\r\n        </md-content>  \r\n\r\n    </div>\r\n</md-nav-bar>\r\n\r\n<div class=\"wrapper\" ui-view></div>\r\n<div id=\"mask\"  ng-show=\"showMask\" layout=\"row\" ngMouseover=\"console.log($rootScope)\" layout-align=\"center center\">\r\n    <p>Loading... <p>\r\n</div>";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(11);
	var constants = __webpack_require__(7);


	angular.module('customVirtualScroll', [])
	    .directive('virtualScroll', function () {
	        var RENDER_ITEMS = 50;
	        return{
	            restrict: 'A',
	            scope: true,
	            link: function ($scope, $element, $attrs) {
	                var modelName = $attrs.model || 'items',
	                    innerTable = angular.element($element[0].querySelector('table')),
	                    innerTableBody = angular.element(innerTable[0].querySelector('tbody')),
	                    model = angular.copy($scope[modelName]),
	                    config = {
	                        modelName: modelName,
	                        itemsLen: $scope[modelName].length,
	                        wrapperScrollHeight: parseInt($attrs.scrollheight),
	                        innerTable: innerTable,
	                        renderItems: RENDER_ITEMS
	                    };
	                //set initial values to the model
	                setModelValue(model.slice(0, config.renderItems));
	                config.innerTable.css('height', config.wrapperScrollHeight + 'px');
	                $element.on('scroll', scrollHandler);
	                calculateScrollPosition($element[0]);

	                function scrollHandler(e) {
	                    var target = e.target;
	                    var scrollPosition = calculateScrollPosition(target);
	                    setScrollPosition(innerTableBody, scrollPosition);
	                    var itemToShow = culculateItemToShow();
	                    var indexes = calculateStartandEndIndex(itemToShow);
	                    var modelsToShow = model.slice(indexes.start, indexes.end);
	                    setModelValue(modelsToShow);
	                    $scope.$digest();
	                }
	                /*
	                 * Calculating Scroll position
	                 * @param {DOM element} el
	                 * @returns {number} Amount of wrapper scrolling
	                 */
	                function calculateScrollPosition(el) {
	                    var translateY = null;
	                    config.scrollConfig = {
	                        scrollHeight: el.scrollHeight,
	                        scrollTop: el.scrollTop,
	                        clientHeight: el.clientHeight
	                    };
	                    config.scrollConfig.scrollMaxVal = config.scrollConfig.scrollHeight - config.scrollConfig.clientHeight;
	                    config.scrollConfig.scrollPercent = (config.scrollConfig.scrollTop / config.scrollConfig.scrollMaxVal) * 100;
	                    config.scrollConfig.pixelsPerItem = config.scrollConfig.scrollMaxVal / config.itemsLen; // pixels per one item
	                    config.scrollConfig.scrollPercentPerItem = (config.scrollConfig.pixelsPerItem / config.scrollConfig.scrollMaxVal) * 100;

	                    if ((config.scrollConfig.scrollTop + innerTableBody[0].clientHeight) >= config.wrapperScrollHeight) {
	                        translateY = config.wrapperScrollHeight - innerTableBody[0].clientHeight;
	                    } else {
	                        translateY = config.scrollConfig.scrollTop;
	                    }
	                    return translateY;
	                }

	                /*
	                 *
	                 * @param {DOM element} el
	                 * @param {int} pos
	                 * @returns {undefined}
	                 */
	                function setScrollPosition(el, pos) {
	                    el.css('transform', 'translateY(' + pos + 'px)');
	                }

	                /*
	                 * 
	                 * @param {number} itemIndex
	                 * @returns {object} start and end indexes
	                 */

	                function calculateStartandEndIndex(itemIndex) {
	                    var start = itemIndex,
	                        end = itemIndex + config.renderItems;
	                    if (end >= config.itemsLen) {
	                        start = config.itemsLen - config.renderItems;
	                        end = config.itemsLen;
	                    }
	                    return {
	                        start: start,
	                        end: end
	                    };
	                }

	                /* 
	                 * Calculate model index on scroll position
	                 * @returns {number} index of item to show
	                 */
	                function culculateItemToShow() {
	                    return Math.round(config.scrollConfig.scrollPercent / config.scrollConfig.scrollPercentPerItem);
	                }

	                /* Fill model with values
	                 * @param {array} itemList
	                 * @returns {undefined}
	                 */
	                function setModelValue(itemList) {
	                    $scope[config.modelName] = itemList;
	                }
	            }
	        };
	    })

	    .component('virtualScrollGrid', {
	        template: __webpack_require__(14),
	        controller: ['$scope', 'wikiService', '$rootScope', function ($scope, wikiService, $rootScope) {
	                this.$onInit = function () {
	                    $rootScope.showMask = true;
	                    wikiService.getWikiPages({limit: constants.WIKI_PAGES_DISPLAY}).then(function (pages) {
	                        $rootScope.showMask = false;
	                        $scope.pages = pages;
	                    });
	                };
	            }]
	    });


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;

	var options = {}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/style-loader/index.js!../../../node_modules/css-loader/index.js!./virtualScrollGrid.css", function() {
				var newContent = require("!!../../../node_modules/style-loader/index.js!../../../node_modules/css-loader/index.js!./virtualScrollGrid.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;

	var options = {}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!./virtualScrollGrid.css", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!./virtualScrollGrid.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)(undefined);
	// imports


	// module
	exports.push([module.id, "#grid-container{\r\n    height: 500px;\r\n    overflow: auto;\r\n    display: block;\r\n    border: solid 1px grey;\r\n}\r\n#virtul-scroll-grid-container{\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n#virtul-scroll-grid-container .virtul-scroll-grid-body {\r\n    display: block;\r\n}\r\n\r\n#virtul-scroll-grid-container .virtul-scroll-grid-body tr{\r\n    border-top: 1px solid #ddd;\r\n}\r\n\r\n#virtul-scroll-grid-container .virtul-scroll-grid-body td{\r\n    border-right: 1px solid #ddd;\r\n    padding-left: 16px; \r\n    border-right: 1px solid #ddd;\r\n    white-space: nowrap;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n}", ""]);

	// exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = "<md-content layout=\"column\">\r\n    <div virtual-scroll flex model=\"pages\" scrollheight='100000' id=\"grid-container\" ng-if=\"pages\">\r\n        <table id=\"virtul-scroll-grid-container\" >\r\n            <tbody class='virtul-scroll-grid-body'>\r\n                <tr flex layout=\"row\" ng-repeat=\"page in pages\">\r\n                    <td flex=\"20\" ng-bind=\"::page.title\"></td>\r\n                    <td flex=\"20\" ng-bind=\"::page.type\"></td>\r\n                    <td flex=\"20\" ng-bind=\"::page.user\"></td>\r\n                    <td flex=\"20\" ng-bind=\"::page.oldlen\"></td>\r\n                    <td flex=\"20\" ng-bind=\"::page.newlen\"></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</md-content>\r\n";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var constants = __webpack_require__(7);

	__webpack_require__(16);
	angular.module('materialVirtualScroll', [])

	    .component('materialScrollGrid', {
	        template: __webpack_require__(19),
	        controller: ['wikiService', '$rootScope', function (wikiService, $rootScope) {

	                var DynamicItems = function () {
	                    /**
	                     * @type {!Object<?Array>} Data pages, keyed by page number (0-index).
	                     */
	                    this.loadedPages = {};

	                    /** @type {number} Total number of items. */
	                    this.numItems = 0;

	                    /** @const {number} Number of items to fetch per request. */
	                    this.PAGE_SIZE = 50;

	                    this.fetchNumItems_();
	                };

	                // Required.
	                DynamicItems.prototype.getItemAtIndex = function (index) {
	                    var pageNumber = Math.floor(index / this.PAGE_SIZE);
	                    var page = this.loadedPages[pageNumber];

	                    if (page) {
	                        return page[index % this.PAGE_SIZE];
	                    } else if (page !== null) {
	                        this.fetchPage_(pageNumber);
	                    }
	                };

	                // Required.
	                DynamicItems.prototype.getLength = function () {
	                    return this.numItems;
	                };

	                DynamicItems.prototype.fetchPage_ = function (pageNumber) {
	                    var pages = this.pages;
	                    this.loadedPages[pageNumber] = [];
	                    var pageOffset = pageNumber * this.PAGE_SIZE;
	                    for (var i = pageOffset; i < pageOffset + this.PAGE_SIZE; i++) {
	                        this.loadedPages[pageNumber].push(pages[i]);
	                    }
	                };
	                DynamicItems.prototype.fetchNumItems_ = function () {
	                    var self = this;
	                    $rootScope.showMask = true;
	                    wikiService.getWikiPages({limit: constants.WIKI_PAGES_DISPLAY}).then(function (pages) {
	                        $rootScope.showMask = false;
	                        self.numItems = pages.length;
	                        self.pages = pages;
	                    });
	                };

	                this.dynamicItems = new DynamicItems();
	            }]
	    });


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;

	var options = {}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/style-loader/index.js!../../../node_modules/css-loader/index.js!./materialVirtualScroll.css", function() {
				var newContent = require("!!../../../node_modules/style-loader/index.js!../../../node_modules/css-loader/index.js!./materialVirtualScroll.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;

	var options = {}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!./materialVirtualScroll.css", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!./materialVirtualScroll.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)(undefined);
	// imports


	// module
	exports.push([module.id, "#vertical-container {\r\n    height: 500px;\r\n    width: 100%;\r\n    max-width: 100%;\r\n}\r\n\r\n.repeated-item {\r\n    border-bottom: 1px solid #ddd;\r\n    box-sizing: border-box;\r\n    height: 40px;\r\n}\r\n\r\nmd-content {\r\n    margin: 16px;\r\n}\r\n\r\nmd-virtual-repeat-container {\r\n    border: solid 1px grey; }\r\n\r\n.md-virtual-repeat-container .md-virtual-repeat-offsetter div {\r\n    padding-left: 16px;\r\n    border-right: 1px solid #ddd;\r\n    white-space: nowrap;\r\n    overflow:hidden !important;\r\n    text-overflow: ellipsis;\r\n}", ""]);

	// exports


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = "<md-content layout=\"column\">\r\n    <md-virtual-repeat-container id=\"vertical-container\">\r\n        <div md-virtual-repeat=\"page in $ctrl.dynamicItems\" md-on-demand  class=\"repeated-item\" flex layout=\"row\" >\r\n            <div flex=\"20\"  ng-bind=\"::page.title\"></div>\r\n            <div flex=\"20\"  ng-bind=\"::page.type\"></div>\r\n            <div flex=\"20\"  ng-bind=\"::page.user\"></div>\r\n            <div flex=\"20\"  ng-bind=\"::page.oldlen\"></div>\r\n            <div flex=\"20\"  ng-bind=\"::page.newlen\"> </div>\r\n        </div>\r\n    </md-virtual-repeat-container>\r\n</md-content>";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var constants = __webpack_require__(7);

	VS.service('wikiService', ['$http', '$q', function ($http, $q) {
	        var self = this;

	        this.get = function (continueToken) {
	            var url = constants.WIKI_PAGES_FETCH_URL;
	            if (continueToken) {
	                url += '&rccontinue=' + continueToken;
	            }
	            return $http.jsonp(url);
	        };

	        this.getWikiPages = function (opt) {
	            var deffer = opt.deffer || $q.defer(),
	                limit = opt.limit || constants.WIKI_PAGES_DISPLAY,
	                wikiPages = opt.wikiPages || [];
	            self.get(opt.continueToken).then(function (res) {
	                var data = res.data;
	                if (data) {
	                    wikiPages = wikiPages.concat(data.query.recentchanges);
	                    if (wikiPages.length < limit) {
	                        opt.continueToken = data.continue.rccontinue;
	                        opt.wikiPages = wikiPages;
	                        opt.deffer = deffer;
	                        self.getWikiPages(opt);
	                    } else {
	                        deffer.resolve(wikiPages);
	                    }
	                }
	            });
	            return deffer.promise;
	        };
	    }
	]);


/***/ })
/******/ ]);