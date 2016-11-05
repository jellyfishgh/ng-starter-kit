angular.module('invoiceApp', ['finance'])
    .controller('InvoiceController', [
        'currencyConverter',
        function(currencyConverter) {
            this.qty = 1;
            this.cost = 2;
            this.inCurr = 'EUR';
            this.currencies = currencyConverter.currencies;
            this.total = function(outCurr) {
                return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
            }
            this.pay = function() {
                alert("谢谢惠顾！");
            }
        }
    ]);