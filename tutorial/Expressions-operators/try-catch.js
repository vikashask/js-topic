/* 
The new.target property lets you detect whether a function or constructor was called using the new operator.
 */
function Foo() {
    if (!new.target) throw 'Foo() must be called with new';
  }
  
  try {
    Foo();
  }
  catch(e) {
    console.log(e);
    // expected output: "Foo() must be called with new"
  }

  