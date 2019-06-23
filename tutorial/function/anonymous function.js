/* 
An anonymous function is a function that was declared without any named identifier to refer to it. 
anonymous function is usually not accessible after its initial creation.

*/

// Normal function
function hello() {
    console.log('Hello world');
  }
  hello();

// Anonymous function definition:
var anonymousFun = function() {
  console.log('I am anonymous');
  
}
anonymousFun();

// One common use for anonymous functions is as arguments to other functions. Another common use is as a closure.
setTimeout(function() {
    console.log('hello');
  }, 1000);

//   Use as a closure:
  (function() {
    console.log('foo-----');
  })();