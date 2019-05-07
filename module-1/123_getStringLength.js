/*
Write a function called "getStringLength".

Given a string, "getStringLength" returns the length of the given string.

Notes:
* Do NOT use any native 'length' methods.
* You might consider using 'substring' or 'slice' as alternatives.

var output = getStringLength('hello');
console.log(output); // --> 5
*/

function getStringLength(string) {
  var strLength = 0;  
 /* for (var alpha in string ){
    strLength += 1
  } */
  while(string){
    string = string.slice(1);
    strLength++;
  }
  
  return strLength;
}

