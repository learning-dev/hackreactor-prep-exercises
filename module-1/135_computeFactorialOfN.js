/*
Write a function called "computeFactorialOfN".

Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24
*/

function computeFactorialOfN(n) {
  var fact = 1; 

  if(n > 1){
    
    for(var i = 2; i <= n; i++ ){
      fact *= i;
  }
    
  }
  return fact;

}

