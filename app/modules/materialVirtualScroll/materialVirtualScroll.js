var constants = require('../../constants');

require('style!./materialVirtualScroll.css');
angular.module('materialVirtualScroll', [])

    .component('materialScrollGrid', {
        template: require('./templates/materialScrollGrid.html'),
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
