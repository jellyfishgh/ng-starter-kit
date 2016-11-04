import angular from 'angular'

import FinanceService from './finance-service'
import InvoiceController from './invoice-controller'

angular.module('finance', [])
    .factory('currencyConverter', [
        '$http',
        FinanceService
    ])

angular.module('invoiceApp', ['finance'])
    .controller('InvoiceController', [
        'currencyConverter',
        InvoiceController
    ])