/* 
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
  
  materials.map(function(material) { 
    return material.length; 
  }); // [8, 6, 7, 9]
  
  // using arrow function
  materials.map((material) => {
    return material.length;
  }); // [8, 6, 7, 9]
  
  materials.map(({length}) => length); // [8, 6, 7, 9]