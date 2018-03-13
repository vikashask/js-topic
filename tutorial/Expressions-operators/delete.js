/* 
The JavaScript delete operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically. 

Syntax
delete object.property
delete object['property']
*/
var Employee = {
    firstname: "Mohammed",
    lastname: "Haddad"
  }
  
  console.log(Employee.firstname);
  // expected output: "Mohammed"
  
  delete Employee.firstname;
  
  console.log(Employee.firstname);
  // expected output: undefined

//   / When trying to delete a property that does 
// not exist, true is returned 
delete Employee.age; // returns true

  