/*
Write a function called "doubleSquareRootOf".
Given a number, "doubleSquareRootOf" returns double its square root.
var output = doubleSquareRootOf(121);
console.log(output); // --> 22
*/

function doubleSquareRootOf(num) {
  for ( var i = 1; i * i <= num ; i++){
    if ( i * i === num){
      return  2 * i;
    }
  } 
  
}