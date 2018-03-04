/* A closure in JavaScript is an inner function that has access to its outer function's scope,
 even after the outer function has returned control. A closure makes the variables of the inner
  function private
  */

  'use strict';
  
  console.log("example 1");
   let count = (function (){
        let _counter = 0;        
        return function () {
        _counter += 1;
        }
   });

   count(); // // the counter is now 1
   count(); // // the counter is now 2
   count(); // // the counter is now 3
   
   console.log("example 2");
   function showFullName(firstName,lastName){
       let nameHd = "Your full name ";
        function makeFullName(){
            return nameHd + firstName + ' ' + lastName;
        }
    return makeFullName();
   }

   console.log(showFullName('vikash','verma'));



