/*
These global functions—functions which are called globally rather than on an object—directly return their results to the caller.

    eval()
    isFinite()
    isNaN()
    parseFloat()
    parseInt()
    decodeURI()
    decodeURIComponent()
    encodeURI()
    encodeURIComponent()
    escape()
    unescape()
    */
//    You can use this function to determine whether a number is a finite number.
   isFinite(Infinity);  // false
   isFinite(0);         // true

// The isNaN() function determines whether a value is NaN or not. 

isNaN(undefined); // true
isNaN({});        // true
isNaN(37);        // false

// The parseFloat() function parses an argument and returns a floating point number.
console.log(parseFloat(3.14));
console.log(parseFloat('314e-2'));

/* The parseInt() function parses a string argument and returns an integer of the specified
radix (the base in mathematical numeral systems).
parseInt(string, radix);
 */

 /* 
 The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine.
  */
 decodeURI('https://vikask.com/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B');
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"

/* The escape() function computes a new string in which certain characters have been replaced by a hexadecimal escape sequence. 
escape(str)
*/
escape('ć');          // "%u0107"