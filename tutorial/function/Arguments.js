/* 
The arguments object is an Array-like object corresponding to the arguments passed to a function.
The arguments object is a local variable available within all (non-arrow) functions. 
 */
function func1(a, b, c) {
    console.log(arguments[0]);
    // expected output: 1
  
    console.log(arguments[1]);
    // expected output: 2
  
    console.log(arguments[2]);
    // expected output: 3
  }
  
  func1(1, 2, 3);
  
