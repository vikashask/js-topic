/* A closure in JavaScript is an inner function that has access to its outer function's scope,
 even after the outer function has returned control. A closure makes the variables of the inner
  function private

Use of Closures : Closures are one of the most powerful features of JavaScript. 
JavaScript allows for the nesting of functions and grants the inner function full access to all the variables
and functions defined inside the outer function (and all other variables and functions that the outer function has access to)
  */

'use strict';

console.log("example 1");
let count = (function () {
    let _counter = 0;
    return function () {
        _counter += 1;
    }
});

count(); // // the counter is now 1
count(); // // the counter is now 2
count(); // // the counter is now 3

console.log("example 2");

function showFullName(firstName, lastName) {
    let nameHd = "Your full name ";

    function makeFullName() {
        return nameHd + firstName + ' ' + lastName;
    }
    return makeFullName();
}

console.log(showFullName('vikash', 'verma'));

console.log("example 3");

function celebrity() {
    let celebrityId = 22;
    // returning  an object with some inner functions​
    // All the inner functions have access to the outer function's variables
    return {
        getId: function () {
            // This inner function will return the UPDATED celebrityID variable​
            // It will return the current value of celebrityID, even after the changeTheID function changes it​    
            return celebrityId;
        },
        setId: function (newId) {
             // This inner function will change the outer function's variable anytime
            return newId;
        }
    }
}

let celeObj = celebrity();
celeObj.getId;
console.log(celeObj.setId(33));
console.log(celeObj.getId());

