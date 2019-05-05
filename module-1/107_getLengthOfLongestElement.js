/*
Write a function called "getLengthOfLongestElement".

Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
*/

function getLengthOfLongestElement(arr) {
  var output = 0;
  for (elem in arr){
    if(output <= arr[elem].length){
      
      output = arr[elem].length;
    }
    
  }
  return output;
}

