/*
Write a function called "isEvenWithoutModulo".

Given a number, "isEvenWithoutModulo" returns whether it is even. 

Notes:
* It does so without using the modulo operator (%). 
* It should work for negative numbers and zero.

var output = isEvenWithoutModulo(8);
console.log(output); // --> true
*/

function isEvenWithoutModulo(num) {
  var quo = Math.floor(Math.abs(num) / 2);
   var mod = Math.abs(num) - 2 * quo;
  return mod == 0;

}

