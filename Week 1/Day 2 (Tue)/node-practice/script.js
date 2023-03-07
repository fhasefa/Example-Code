/*   YOU CAN RUN WITH THIS WITH "node script" IN THE TERMINAL
 
const multiply = (a, b) => a * b

let n = multiply(5, 8)

 console.log(n)

*/




/*  LOADS THE "fs" OR FILESYSTEM MODULE THAT IS BUILT-IN TO NODE

    const fs = require('fs')
    console.log(fs)

    fs.writeFile('./hello.txt', 'Hello!', function() {
        console.log('done creating file')
    })
*/




/*  LOADS THE "days-of-the-week" MODULE WE CREATED OURSELVES

    let daysOfWeek = require('./days-of-the-week')

    console.log(daysOfWeek.weekdays)

    let day = daysOfWeek.getWeekDay(5)

    console.log(day)

*/


/* ACCESSES THE "global" OBJECT WHICH IS THE NODE EQUIVALENT OF "window" OBJECT IN THE BROWSER

    console.log(global)

*/

/* INITIALIZE A PROJECT AND CREATE A "package.json" FILE THAT KEEPS TRACK OF DEPENDENCIES

    npm init
    npm init -y

*/


/*  LOAD A MODULE CALLED "request" WHICH IS THIRD PARTY AND MUST BE INSTALLED THROUGH NPM: "npm i request"

    const request = require('request')

    request(
        'http://jsonplaceholder.typicode.com/users',
        function(err, res, body) {
            console.log(body)
        }
    )

*/

