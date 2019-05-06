/*
Write a function called "findSmallestElement".

Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
*/

function findSmallestElement(arr) {
 var min = 9999;
  if (arr.length > 0){
    
    for (elm in arr){
    if(min >= arr[elm]){
      min = arr[elm];    
    }
  }
  return min;
  }
  return 0;

}

