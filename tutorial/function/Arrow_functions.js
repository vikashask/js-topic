/* 

In short: context inside arrow functions is lexically or statically defined.
the value of this inside arrow functions is not dependent on how they are invoked or how they are defined.
It depends only on its enclosing context.

An arrow function expression has a shorter syntax than a function expression and does not have its
own this, arguments, super, or new.target. These function expressions are best suited for non-method 
functions, and they cannot be used as constructors.
 */
var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log('------------by using function ------------------');
  materials.map(function(material) { 
    console.log(material);
    // return material.length; // [8, 6, 7, 9]
  }); 
  
  // using arrow function
  console.log('---------- by using arrow function ------------');  
  materials.map((material) => {
    console.log(material);
  }); 
  
  let materialsLength = materials.map(({length}) => length); // [8, 6, 7, 9]
  let materialsArray = materials.map((length) => length); // [8, 6, 7, 9]
  
  console.log(materialsLength); // [ 8, 6, 7, 9 ]
  console.log(materialsArray);  // [ 'Hydrogen', 'Helium', 'Lithium', 'Beryllium' ]
  
  