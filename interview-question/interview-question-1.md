## What is JavaScript?
The JavaScript is most popular scripting languages and it developed by Netscape and used to develop the client side web applications.

## Is JavaScript Case Sensitive?
Yes! JavaScript is a case sensitive because a function “str” is not equal to “Str”.

## What Is the Type of JavaScript?
There are different of Type as given below.
* String, 
* Number,
* Boolean,
* Function,
* Object,
* Null,
* Undefined etc.

## What Types of Boolean Operators in JavaScript?
There are three types of Boolean operators as given below.
* AND (&&) operator, 
* OR (||) operator and 
* NOT (!) Operator

## What Is the Difference Between “==” and “===”?
The double equal “==” is an auto-type conversion and it checks only value not type.
The three equal “===” is not auto-type conversion and it check value and type both.﻿

## The real example as given below –
if(1 == ”1”)
//Its returns true because it's an auto-type conversion and it checks only value not type.

if(1 === ”1”)
//Its returns false because it's not auto-type conversion and it check value and type both.

If(1=== parseInt(”1”))
// its returns true.
// alert(0 == false); // return true, because both are same type.
// alert(0 === false); // return false, because both are of a different type.
// alert(1 == "1"); // return true, automatic type conversion for value only.
// alert(1 === "1"); // return false, because both are of a different type.
// alert(null == undefined); // return true.
// alert(null === undefined); // return false.
// alert('0' == false); // return true.
// alert('0' === false); // return false.
// alert(1=== parseInt("1")); // return true.

## What Is an Object?
The object is a collection of properties and the each property associated with the name-value pairs. The object can contain any data types (numbers, arrays, object etc.)

The example as given below –
var myObject= {empId : “001”, empCode :”X0091”};

In the above example, here are two properties one is empId and other is empCode and its values are “001” and “X0091”.

The properties name can me string or number. If a property name is number i.e.

var numObject= {1 : “001”, 2 :”X0091”};

Console.log(numObject.1); //This line throw an error.
Console.log(numObject[“1”]); // will access to this line not get any error.

As per my thought, the number property name should be avoided.

Types of creating an object
* Object literals
* Object constructor

``` Object Literals: This is the most common way to create the object with object literal and the example as given below. ```

The empty object initialized using object literal i.e.
var emptyObj = {};

This is an object with 4 items using object literal i.e.
var emptyObj ={
    empId:”Red”,
    empCode: “X0091”,
    empDetail : function(){
        alert(“Hi”);
    };
};

``` Object Constructor: The second way to create object using object constructor and the constructor is a function used to initialize new object. ```

The example as given below -
var obj = new Object();
Obj.empId=”001”;
Obj.empCode=”X0091”;

Obj.empAddressDetai = function(){
    console.log(“Hi, I vikash”);
};
