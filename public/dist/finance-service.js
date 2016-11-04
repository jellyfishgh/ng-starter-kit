'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function ($http) {
    var q = 'select * from yahoo.finance.xchange where pair in ("PAIRS")';
    var format = 'json';
    var env = 'store://datatables.org/alltableswithkeys';
    var YAHOO_FINANCE_PATTERN = '//query.yahooapis.com/v1/public/yql?q=' + q + '&format=' + format + '&env=' + env;
    var currencies = ['USD', 'EUR', 'CNY'];
    var usdToForeignRates = {};
    var convert = function convert(amount, inCurr, outCurr) {
        return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
    };
    (function () {
        var url = YAHOO_FINANCE_PATTERN.replace('PAIRS', 'USD' + currencies.join('","USD'));
        return $http.get(url).then(function (response) {
            var newUsdToForeignRates = {};
            response.data.query.results.rate.map(function (rate) {
                newUsdToForeignRates[rate.id.substring(3, 6)] = parseFloat(rate.Rate);
            });
            usdToForeignRates = newUsdToForeignRates;
        });
    })();
    return {
        currencies: currencies,
        convert: convert
    };
};