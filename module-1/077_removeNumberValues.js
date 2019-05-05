/*
Write a function called "removeNumberValues".

Given an object, "removeNumberValues" removes any properties whose valuse are numbers.

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
*/

function removeNumberValues(obj) {
  for (elem in obj){
   if (!isNaN(obj[elem])){
     delete obj[elem];
   }
 }
return obj;

}

