/*
Write a function called "removeStringValues".

Given an object, "removeStringValues" removes any properties on the given object whose values are strings.

var obj = {
  name: 'Sam',
  age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }
*/

function removeStringValues(obj) {
  for (elem in obj){
   if ( typeof obj[elem] == 'string'){
     delete obj[elem];
   }
 }
return obj;
}

