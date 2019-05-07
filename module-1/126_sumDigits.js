/*
Write a function called "sumDigits".

Given a number, "sumDigits" returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14

If the number is negative, the first digit should count as negative.

var output = sumDigits(-316);
console.log(output); // --> 4

Notes:
* In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
* Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

*/

function sumDigits(num) {
  var sumOfDigits = 0;
  // 
  num = num.toString();
  var i = 0;
  while( i < num.length ){
    if (num[i] != '-'){
      
      sumOfDigits += Number(num[i])
      i++;
    }
    else{
      sumOfDigits -= Number(num[i + 1])
      i += 2;
    }
  }
  return sumOfDigits;

}

