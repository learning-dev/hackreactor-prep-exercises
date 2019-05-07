/*
Write a function called "multiply".

Given 2 numbers, "multiply" returns their product.

Notes:
* It should not use the multiply operator (*).\

var output = multiply(4, 7);
console.log(output); // --> 28
*/

function multiply(num1, num2) {
  var mul =0;
  var symbol = '';
  
  if (num1 < 0 ){
    num1 = num1.toString();
    symbol = num1[0];
    num1 = num1.slice(1);
    num1 = Number(num1);
  }
  
  if(num2 < 0){
    if(symbol === '-'){
      symbol = '';
    }
    else{
       num2 = num2.toString();
    symbol = num2[0];
    num2 = num2.slice(1);
    num2 = Number(num2);
    }
  }
  
  for (i = 1; i<= num1; i++){
    mul += num2;
  }
  
  mul = symbol + mul.toString();
  return Number(mul);
}

