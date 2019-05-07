/*
Write a function called "findShortestOfOfThreeWords".

Given 3 strings, "findShortestOfOfThreeWords" returns the shortest of the given strings.

Notes:
* If there are ties, it should return the first word in the parameters list.

var output = findShortestOfOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
*/

function findShortestOfOfThreeWords(word1, word2, word3) {
  var min = word1; 
  var x = [];
  x.push(word2);
  x.push(word3);
  
  for (elem in x){
    if(min.length > x[elem].length){
      min = x[elem];
    }
  }
  return min;

}

