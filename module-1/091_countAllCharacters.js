/*
Write a function called "countAllCharacters".

Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

Notes:
* If given an empty string, countAllCharacters should return an empty object.

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
*/

function countAllCharacters(str) {
  obj = {};
  var count = 0;
  for (var i=0; i< str.length; i++){
     for (var j=0; j< str.length; j++){
      if(str[i] == str[j]){
        count += 1;
      }  
   
     }
    obj[str[i]] = count;
    count = 0;
  }
  return obj;
  
  
}

