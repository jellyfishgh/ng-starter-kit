angular.module('finance', [])
    .factory('currencyConverter', [
        '$http',
        function($http) {
            var YAHOO_FINANCE_PATTERN = '//query.yahooapis.com/v1/public/yql?q=' +
            'select * from yahoo.finance.xchange where pair in ("PAIRS")' +
            '&format=json&env=' +
            'store://datatables.org/alltableswithkeys';
            var currencies = ['USD', 'EUR', 'CNY'];
            var usdToForeignRates = {};
            var convert = function(amount, inCurr, outCurr) {
                return amount * usdToForeignRates[inCurr] / usdToForeignRates[outCurr];
            };
            function refresh() {
                var url = YAHOO_FINANCE_PATTERN.replace('PAIRS', 'USD' + currencies.join('","USD'));
                return $http.get(url).then(function(response) {
                    var newUsdToForeignRates = {};
                    angular.forEach(response.data.query.results.rate, function(rate) {
                        newUsdToForeignRates[rate.id.substring(3, 6)] = parseFloat(rate.Rate);
                    });
                    usdToForeignRates = newUsdToForeignRates;
                });
            }
            refresh();
            return {
                currencies: currencies,
                convert: convert
            }
        }
    ]);