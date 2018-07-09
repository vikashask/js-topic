/* 
Example : online transaction
 */
function Foo(email) {
    if(typeof(email) !== 'string'){
      throw 'email type is not valid';
    }
console.log(email);

  }
  
  try {
    console.log("try block here");    
    Foo("admi@gmail.com"); // for catch error pass any integer value
  }
  catch(e) {
    console.log("catch here");
    console.log(e);
  }finally{
    console.log("finally always execute");
    
  }

  