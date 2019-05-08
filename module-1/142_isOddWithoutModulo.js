/*
Write a function called "isOddWithoutModulo".

Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

Note:
* It does so without using the modulo operator (%). 
* It should work for negative numbers and zero.

var output = isOddWithoutModulo(17);
console.log(output); // --> true
*/

function isOddWithoutModulo(num) {
   var quo = Math.floor(Math.abs(num) / 2);
   var mod = Math.abs(num) - 2 * quo;
  return mod == 1;
}

