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

                $scope[modelName] = [];
                config.innerTable.css('height', config.wrapperScrollHeight + 'px');
                $element.on('scroll', scrollHandler);
                calculateScrollPosition($element[0]);
                function scrollHandler(e) {
                    var target = e.target;
                    var scrollPosition = calculateScrollPosition(target);
                    setScrollPosition(innerTableBody, scrollPosition);
                    $scope.$digest();
                }
                /*
                 * Calculating Scroll position
                 * @param {DOM element} el
                 * @returns {number} Amount of wrapper scrolling
                 */
                function calculateScrollPosition(el) {
                    var startIndex,
                        endIndex;
                    config.scrollConfig = {
                        scrollHeight: el.scrollHeight,
                        scrollTop: el.scrollTop,
                        clientHeight: el.clientHeight
                    };
                    config.scrollConfig.scrollMaxVal = config.scrollConfig.scrollHeight - config.scrollConfig.clientHeight;
                    config.scrollConfig.scrollPercent = (config.scrollConfig.scrollTop / config.scrollConfig.scrollMaxVal) * 100;
                    config.scrollConfig.pixelsPerItem = config.scrollConfig.scrollMaxVal / config.itemsLen; // pixels per one item
                    config.scrollConfig.scrollPercentPerItem = (config.scrollConfig.pixelsPerItem / config.scrollConfig.scrollMaxVal) * 100;
                    var showItemNumber = Math.round(config.scrollConfig.scrollPercent / config.scrollConfig.scrollPercentPerItem);
                    startIndex = showItemNumber;
                    endIndex = showItemNumber + config.renderItems;
                    var modelsToShow = model.slice(startIndex, endIndex);
                    $scope[modelName] = modelsToShow;
                    var translateY = null;
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
