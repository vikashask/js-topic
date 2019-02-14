/* 
The Date object lets you work with dates (years, months, days, hours, minutes, seconds, and milliseconds)
Best approch is http://momentjs.com/docs
There are 4 ways of initiating a date:
*/

var d= new Date();
// new Date(milliseconds)
// new Date(dateString)
// new Date(year, month, day, hours, minutes, seconds, milliseconds)

console.log("date;",d.toString()); // date: Wed Mar 28 2018 11:07:28 GMT+0530 (IST)
console.log("date:",d); // date 2018-03-28T05:35:32.534Z
console.log("date:",d.toDateString()); // date 2018-03-28T05:35:32.534Z

/* 
There are generally 4 types of JavaScript date input formats:
ISO Date 	"2015-03-25" (The International Standard)
Short Date 	"03/25/2015"
Long Date 	"Mar 25 2015" or "25 Mar 2015"
Full Date 	"Wednesday March 25 2015"
 */
var d_iso = new Date("2015-03");
var d_iso_date = new Date("2015-03-25T12:00:00Z"); 

/* 
Date get Method
getDate() 	Get the day as a number (1-31)
getDay() 	Get the weekday as a number (0-6)
getFullYear() 	Get the four digit year (yyyy)
getHours() 	Get the hour (0-23)
getMilliseconds() 	Get the milliseconds (0-999)
getMinutes() 	Get the minutes (0-59)
getMonth() 	Get the month (0-11)
getSeconds() 	Get the seconds (0-59)
getTime() 	Get the time (milliseconds since January 1, 1970)
*/

var d_method = new Date();
console.log(d_method.getDate()); // 28

/* 
Date Set Methods
setDate() 	Set the day as a number (1-31)
setFullYear() 	Set the year (optionally month and day)
setHours() 	Set the hour (0-23)
setMilliseconds() 	Set the milliseconds (0-999)
setMinutes() 	Set the minutes (0-59)
setMonth() 	Set the month (0-11)
setSeconds() 	Set the seconds (0-59)
setTime() 	Set the time (milliseconds since January 1, 1970)
 */
var d_set_method = new Date();
console.log(d_set_method.setFullYear(2020, 0, 14));