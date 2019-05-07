/*
Write a function called "getLongestOfThreeWords".

Given 3 words, "getLongestOfThreeWords" returns the longest of three words. 

Notes:
* If there is a tie, it should return the first word in the tie.

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
*/

function getLongestOfThreeWords(word1, word2, word3) {
 var max = word1; 
  var x = [];
  x.push(word2);
  x.push(word3);
  
  for (elem in x){
    if(max.length < x[elem].length){
      max = x[elem];
    }
  }
  return max;

}

