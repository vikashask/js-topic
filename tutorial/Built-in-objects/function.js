/* 
The Function constructor creates a new Function object. Calling the constructor directly can create 
functions dynamically, but suffers from security and performance issues similar to eval.
 */
var sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));
// expected output: 8

/* Difference between Function constructor and function declaration
Functions created with the Function constructor do not create closures to their creation contexts;
 they always are created in the global scope.  
 */

var x = 10;

function createFunction1() {
    var x = 20;
    return new Function('return x;'); // this |x| refers global |x|
}

function createFunction2() {
    var x = 20;
    function f() {
        return x; // this |x| refers local |x| above
    }
    return f;
}

var f1 = createFunction1();
console.log(f1());          // 10
var f2 = createFunction2();
console.log(f2());          // 20
