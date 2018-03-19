/* Spread syntax allows an iterable such as an array expression or string to be expanded in places
 where zero or more arguments (for function calls) or elements (for array literals) are expected.
 */
function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // expected output: 6
  
  console.log(sum.apply(null, numbers));
  // expected output: 6
  