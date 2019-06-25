/* 
A closure is the combination of a function and the lexical environment within which that function was declared.
 */

function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    return displayName();
  }
  init();

  function init2() {
    var name = 'Chrome'; // name is a local variable created by init
    return function displayName() { // displayName() is the inner function, a closure
        return name;// use variable declared in the parent function
    }
    // return displayName();
  }
  var add = init2();
  console.log(add());
  