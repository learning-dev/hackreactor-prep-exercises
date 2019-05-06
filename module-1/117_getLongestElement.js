/* 
Write a function called "getLongestElement".

Given an array, "getLongestElement" returns the longest string in the given array.

Notes:
* If there are ties, it returns the first element to appear.
* If the array is empty, tt should return an empty string.

var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
*/ 

function getLongestElement(arr) {
  var max = -9999;
  var max_elm;
  if (arr.length > 0){
    
    for (elm in arr){
    if(max <= arr[elm].length){
      max_elm = arr[elm];    
    }
  }
  return max_elm;
  }
  return 0;

}

