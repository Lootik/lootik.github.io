var constants = require('../../constants');

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
