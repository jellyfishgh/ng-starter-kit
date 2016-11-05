import angular from 'angular'

export default function(currencyConverter) {
    this.qty = 1
    this.cost = 2
    this.inCurr = 'EUR'
    this.currencies = currencyConverter.currencies
    this.total = (outCurr) => {
        return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr)
    }
    this.pay = () => {
        window.alert('谢谢您的惠顾！')
    }
}