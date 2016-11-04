'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (currencyConverter) {
    undefined.qty = 1;
    undefined.cost = 2;
    undefined.inCurr = 'EUR';
    undefined.currencies = currencyConverter.currencies;
    undefined.total = function (outCurr) {
        return currencyConverter.convert(undefined.qty * undefined.cost, undefined.inCurr, outCurr);
    };
    undefined.pay = function () {
        window.alert('谢谢您的惠顾！');
    };
};