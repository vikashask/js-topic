/* 
A common use of JSON is to exchange data to/from a web server.
When sending data to a web server, the data has to be a string.
Convert a JavaScript object into a string with JSON.stringify().
 */
var obj = { "name":"John", "age":30, "city":"New York"}; 
var myJSON = JSON.stringify(obj); 
// myJSON is now a string, and ready to be sent to a server:

