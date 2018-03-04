/* 
Currying is a method of making functions more flexible. With a curried function, you can pass all of the
 arguments that the function is expecting and get the result, or you can pass only a subset of arguments and receive a function back that waits for the rest of the arguments
 */
'use strict';

var myFirstCurry = function(word) {
    return function(user) {
           return [word , ", " , user].join("");
    };
};

var HelloUser = myFirstCurry("Hello");
console.log(HelloUser("vikash")); // Output: "Hello, vikash"

/* 
original curried function can be called directly by passing each of the parameters in a separate set of parentheses 
*/
console.log(myFirstCurry("Hey, wassup!")("vikash")); // Output: "Hey, wassup!, vikash"