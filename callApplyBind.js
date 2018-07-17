/* Call
It can be used to invoke (call) a function with an owner object as the first argument (parameter).
With the call() method, you can write a method that can be used on different objects.
 */
'use strict';

var user = {
    greetUser: function(userName) {
    console.log(this.greet + " " + userName);
    }
};

var greet1 = {
    greet: "Hola"
};

user.greetUser.call(greet1,"vikash") // Output: "Hola vikash"

/* 
apply is nearly the same as call. The only difference is that you pass arguments as an array and 
not separately Arrays are easier to manipulate in JavaScript
*/
console.log("------------ apply ----------");

user.greetUser.apply(greet1,["vikash"]) // Output: "Hola vikash"

console.log(Math.max.apply(null,[1,2,3]));
/* 
The bind method allows you to pass arguments to a function without invoking it. 
A new function is returned with arguments bounded preceding any further arguments
 */
console.log("------------ bind ----------");
var greetHola = user.greetUser.bind({greet: "Hola"});
var greetBonjour = user.greetUser.bind({greet: "Bonjour"});

greetHola("vikas") // Output: "Hola vikas"
greetBonjour("vikas") // Output: "Bonjour vikas"