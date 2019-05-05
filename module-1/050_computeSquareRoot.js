
/*
Write a function called "computeSquareRoot".
Given a number, "computeSquareRoot" returns its square root.
var output = computeSquareRoot(9);
console.log(output); // --> 3

Do not use Math.sqrt(); for this problem. Instead, use this iterative way of solving the problem:

https://blogs.sas.com/content/iml/2016/05/16/babylonian-square-roots.html
*/
// perfect squares
function computeSquareRoot(num) {
 for ( var i = 1; i * i <= num ; i++){
    if ( i * i === num){
      return i;
    }
 }
  
}