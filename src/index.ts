import PromisePool = require('es6-promise-pool')

var delayValue = function (value, time) {
    return new Promise(function (resolve, reject) {
        console.log('Resolving ' + value + ' in ' + time + ' ms')
        setTimeout(function () {
            console.log('Resolving: ' + value)
            resolve(value)
        }, time)
    })
}

var count = 0
var promiseProducer = function () {
    if (count < 5) {
        count++
        return delayValue(count, 1000)
    } else {
        return null
    }
}

var pool = new PromisePool(promiseProducer, 3)

pool.start()
    .then(function () {
        console.log('Complete')
    })
