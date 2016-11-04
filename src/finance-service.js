export default ($http) => {
    const q = 'select * from yahoo.finance.xchange where pair in ("PAIRS")'
    const format = 'json'
    const env = 'store://datatables.org/alltableswithkeys'
    const YAHOO_FINANCE_PATTERN = `//query.yahooapis.com/v1/public/yql?q=${q}&format=${format}&env=${env}`
    const currencies = ['USD', 'EUR', 'CNY']
    let usdToForeignRates = {}
    const convert = (amount, inCurr, outCurr) => {
        return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr]
    }
    (() => {
        const url = YAHOO_FINANCE_PATTERN.replace('PAIRS', `USD${currencies.join('","USD')}`)
        return $http.get(url).then((response) => {
            const newUsdToForeignRates = {}
            response.data.query.results.rate.map((rate) => {
                newUsdToForeignRates[rate.id.substring(3, 6)] = parseFloat(rate.Rate)
            })
            usdToForeignRates = newUsdToForeignRates
        })
    })()
    return {
        currencies: currencies,
        convert: convert
    }
}