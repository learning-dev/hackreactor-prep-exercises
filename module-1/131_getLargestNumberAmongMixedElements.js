/*
Write a function called "getLargestNumberAmongMixedElements". 

Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

Notes:
* The array might contain values of a type other than numbers.
* If the array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
*/

function getLargestNumberAmongMixedElements(arr) {
  var num = -9999;
  var maxNumber = 0;
  
  for (elem in arr){
    if (isNaN(arr[elem]) == false && arr[elem] > num){
      
      maxNumber = arr[elem];
      num = arr[elem];
    }
  }
  return maxNumber;

}

