/* 
A string representing a JavaScript expression, statement, or sequence of statements. The expression can include variables and properties of existing objects.
eval(string)
*/
console.log(eval('2 + 2'));
// expected output: 4

console.log(eval(new String('2 + 2')));
// expected output: 2 + 2