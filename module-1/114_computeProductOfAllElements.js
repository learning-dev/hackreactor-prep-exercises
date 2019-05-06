/*
Write a function called "computeProductOfAllElements".

Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.

Notes:
* If given array is empty, it should return 0.

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
*/

function computeProductOfAllElements(arr) {
 var pro = 1;
  
  if (arr.length > 0){
    
      for (elm in arr){
        pro *= arr[elm];
      }
    console.log(pro);
    return pro;
  }  
  return 0;
}



