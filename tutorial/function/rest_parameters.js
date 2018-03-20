/* 
The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
function f(a, b, ...theArgs) {
  // ...
}
*/
function fun1(...theArgs) {
    console.log(theArgs.length);
  }
  
  fun1();  // 0
  fun1(5); // 1
  fun1(5, 6, 7); // 3


  function multiply(multiplier, ...theArgs) {
    return theArgs.map(function(element) {
      return multiplier * element;
    });
  }
  
  var arr = multiply(2, 1, 2, 3); 
  console.log(arr); // [2, 4, 6]
