// const multiply = (a, b) => a * b

// let n = multiply(5, 8)

// console.log(n)

// can run with "node script"


// const fs = require('fs')
// console.log(fs)

// fs.writeFile('./hello.txt', 'Hello!', function() {
//     console.log('done creating file')
// })

// let daysOfWeek = require('./days-of-the-week')

// console.log(daysOfWeek.weekdays)

// let day = daysOfWeek.getWeekDay(5)

// console.log(day)

// console.log(global)

// npm init
// npm init -y

const request = require('request')

request(
    'http://jsonplaceholder.typicode.com/users',
    function(err, res, body) {
        console.log(body)
    }
)

