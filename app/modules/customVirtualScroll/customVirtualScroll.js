require('style!./virtualScrollGrid.css');
var constants = require('../../constants');


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
        template: require('./templates/virtualScrollGrid.html'),
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
