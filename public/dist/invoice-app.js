'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _financeService = require('./finance-service');

var _financeService2 = _interopRequireDefault(_financeService);

var _invoiceController = require('./invoice-controller');

var _invoiceController2 = _interopRequireDefault(_invoiceController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('finance', []).factory('currencyConverter', ['$http', _financeService2.default]);


_angular2.default.module('invoiceApp', ['finance']).controller('InvoiceController', ['currencyConverter', _invoiceController2.default]);