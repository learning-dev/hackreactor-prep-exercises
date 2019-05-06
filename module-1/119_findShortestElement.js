/*
Write a function called "findShortestElement".

Given an array, "findShortestElement" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear.
* If the given array is empty, it should return an empty string.

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
*/

function findShortestElement(arr) {
 
  var min = 9999;
  var min_elm;
  if (arr.length > 0){
    
    for (elm in arr){
    if(min > arr[elm].length){
      min = arr[elm].length;
      min_elm = arr[elm];
    }
  }
  return min_elm;
  }
  return 0;

}

