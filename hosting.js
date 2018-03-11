/* Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope 
(to the top of the current script or the current function).
*/
'use strict';
console.log("example 1");
let x = 5;
let y = 10;

console.log("x ="+ x + " ,y ="+y );

console.log("example 2");
// To avoid bugs, always declare all variables at the beginning of every scope.

let a = 4;
console.log("a ="+ a + " ,b ="+b );
let b = 8;

