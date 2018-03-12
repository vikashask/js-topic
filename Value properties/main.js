/*
These global properties return a simple value; they have no properties or methods.

    Infinity
    NaN
    undefined
    null literal
 */

console.log(Infinity          ); /* Infinity */  
console.log(Infinity + 1      ); /* Infinity */  
console.log(Math.pow(10, 1000)); /* Infinity */  
console.log(Math.log(0)       ); /* -Infinity */  
console.log(1 / Infinity      ); /* 0 */

console.log(isNaN(NaN));         // true
console.log(isNaN(Number.NaN));  // true

var x;
if (typeof x === 'undefined') {
   // these statements execute
}

typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true