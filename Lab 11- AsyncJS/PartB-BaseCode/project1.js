import fs from 'fs'
//Synchronous code. Change it to async using callback.


/*
1.Convert this code to asynchronous form using a separate callback function (callBack).
2.Change the callback function to an anonymous one.
2.Take care of error handling in the callback function
*/
/*
    1. you order food [using your phone]
    2. until they finish the food
    3. bring the to your home
    4. hung up
    5. people will be able to call

    1. ordeer =>    3. call you back [your call back number] [home]
    2. hang up the phone
    -->he can revieve more calls


 */

// let data = fs.readFileSync('data/student.json');
// console.log(JSON.parse(data));

fs.readFile('data/course.json', (err, data) => {
    if (!err) console.log(JSON.parse(data))
    else console.log(err)
})

console.log('the rest of your program starts here')
console.log('..............................')
console.log('..............................')
console.log('..............................')
console.log('..............................')
