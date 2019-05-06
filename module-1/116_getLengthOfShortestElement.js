/*
Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
*/

function getLengthOfShortestElement(arr) {
  var min = 9999;
  if (arr.length > 0){
    
    for (elm in arr){
    if(min >= arr[elm].length){
      min = arr[elm].length;;    
    }
  }
  return min;
  }
  return 0;
 
}

