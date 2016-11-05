import angular from 'angular'

import FinanceService from './finance-service'
import InvoiceController from './invoice-controller'

export default angular.module('finance', [])
    .factory('currencyConverter', [
        '$http',
        FinanceService
    ])

angular.module('invoiceApp', ['finance'])
    .controller('InvoiceController', [
        'currencyConverter',
        InvoiceController
    ])