/*
Write a function called "findMaxLengthOfThreeWords".

Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3
*/

function findMaxLengthOfThreeWords(word1, word2, word3) {
  if ( word1.length >= word2.length){
      if(word1.length >= word3.length){
        return word1.length;
      }
      return word3.length;
  }
  else{
      if(word2.length >= word3.length){
        return word2.length;
      }
      return word3.length;
  }
  
}

