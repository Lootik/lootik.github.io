require('style!./virtualScrollGrid.css');
var constants = require('../../constants');


angular.module('customVirtualScroll', [])
    .directive('virtualScroll', function () {
        var RENDER_ITEMS = 25;
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
                        renderItems: RENDER_ITEMS,
                        itemHeight: parseInt($attrs.itemheight),
                        updateNeeded: false
                    };
                config.wrapperScrollHeight = config.itemHeight * config.itemsLen;
                //set initial values to the model
                setModelValue(model.slice(0, config.renderItems));
                config.innerTable.css('height', config.wrapperScrollHeight + 'px');
                $element.on('scroll', scrollHandler);
                calculateScrollPosition($element[0]);
                var lastIndex = 0;
                function scrollHandler(e) {
                    var target = e.target;
                    var scrollPosition = calculateScrollPosition(target);
                    var itemToShow = culculateItemToShow();
                    var indexes = calculateStartandEndIndex(itemToShow);
                    if (indexes.start !== lastIndex) {
                        lastIndex = indexes.start;
                        var modelsToShow = model.slice(indexes.start, indexes.end);
                        if (config.direction === 'start') {
                            modelsToShow = model.slice(0, RENDER_ITEMS);
                        }
                        if (config.direction === 'end') {
                            modelsToShow = model.slice(config.itemsLen - RENDER_ITEMS, config.itemsLen);
                        }
                        setScrollPosition(innerTableBody, scrollPosition);
                        setModelValue(modelsToShow);
                        $scope.$digest();
                    }
                }
                /*
                 * Calculating Scroll position
                 * @param {DOM element} el
                 * @returns {number} Amount of wrapper scrolling
                 */
                function calculateScrollPosition(el) {
                    var translateY = 0;
                    config.scrollConfig = {
                        scrollHeight: el.scrollHeight,
                        scrollTop: el.scrollTop,
                        clientHeight: el.clientHeight
                    };
                    config.scrollConfig.scrollMaxVal = config.scrollConfig.scrollHeight - config.scrollConfig.clientHeight;
                    config.scrollConfig.scrollPercent = (config.scrollConfig.scrollTop / config.scrollConfig.scrollMaxVal) * 100;
                    if (config.scrollConfig.scrollTop < innerTableBody[0].clientHeight / 3) {
                        translateY = 0;
                        config.direction = 'start';
                    } else {
                        if ((config.scrollConfig.scrollTop + innerTableBody[0].clientHeight) >= config.wrapperScrollHeight) {
                            translateY = config.wrapperScrollHeight - innerTableBody[0].clientHeight;
                            config.direction = 'end';
                        } else {
                            translateY = config.scrollConfig.scrollTop - innerTableBody[0].clientHeight / 3;
                            config.direction = 'middle';
                        }
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
                    return Math.floor(config.scrollConfig.scrollTop / config.itemHeight);
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
