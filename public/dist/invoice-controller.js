'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (currencyConverter) {
    var _this = this;

    this.qty = 1;
    this.cost = 2;
    this.inCurr = 'EUR';
    this.currencies = currencyConverter.currencies;
    this.total = function (outCurr) {
        return currencyConverter.convert(_this.qty * _this.cost, _this.inCurr, outCurr);
    };
    this.pay = function () {
        window.alert('谢谢您的惠顾！');
    };
};

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }