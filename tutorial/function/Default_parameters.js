/* 
Default function parameters allow formal parameters to be initialized with default values if 
no value or undefined is passed.
 */

function multiply(a, b) {
    // checking in the function body is no longer necessary
    b = (typeof b !== 'undefined') ?  b : 1;
    return a * b;
  }
  
  multiply(5, 2); // 10
  multiply(5, 1); // 5
  multiply(5);    // 5

//   With default parameters in ES2015, the check in the function body is no longer necessary. 
// Now, you can simply put 1 as the default value for b in the function head:

function multiply(a, b = 1) {
    return a * b;
  }
  
  multiply(5, 2); // 10
  multiply(5, 1); // 5
  multiply(5);    // 5