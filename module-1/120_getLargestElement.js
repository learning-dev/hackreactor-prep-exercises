/*
Write a function called "getLargestElement".

Given an array, "getLargestElement" returns the largest number in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
*/

function getLargestElement(arr) {
  var max = -9999;
  
  if (arr.length > 0){
    
    for (elm in arr){
    if(max <= arr[elm]){
      max = arr[elm];
      
    }
  }
  return max;
  }
  return 0;

}

