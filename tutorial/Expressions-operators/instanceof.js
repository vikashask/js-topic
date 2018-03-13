/* 
The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.
 */

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  var auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // expected output: true
  
  console.log(auto instanceof Object);
  // expected output: true
  