/* 
1.Reduce Activity in Loops
Statements or assignments that can be placed outside the loop will make the loop run faster. 
*/

// bad code
var i;
for (i = 0; i < arr.length; i++) {}

// better code
var i;
var l = arr.length;
for (i = 0; i < l; i++) {}

//2.Reduce DOM Access
var obj;
obj = document.getElementById("demo");
obj.innerHTML = "Hello";

//3.Reduce DOM Size
//This will always improve page loading, and speed up rendering (page display), especially on smaller devices.

//4.Avoid Unnecessary Variables

//5.Delay JavaScript Loading
// Putting your scripts at the bottom of the page body lets the browser load the page first.




