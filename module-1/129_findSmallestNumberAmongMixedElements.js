/*
Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
*/

function findSmallestNumberAmongMixedElements(arr) {
  var num = 9999;
  var minNumber = 0;
  
  for (elem in arr){
    if (isNaN(arr[elem]) == false && arr[elem] < num){
      
      minNumber = arr[elem];
      num = arr[elem];
    }
  }
  return minNumber;

}

