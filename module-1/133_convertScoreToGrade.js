/*
Write a function called "convertScoreToGrade".

Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (59  -  0) --> 'F'
* If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.

var output = convertScoreToGrade(91);
console.log(output); // --> 'A'
*/

function convertScoreToGrade(score) {
 var grade = 'INVALID SCORE';
  if(score <= 100 && score >= 0){
    if (score <=100 && score >= 90){
     grade = 'A';
   }
   else if(score <= 89 && score >= 80){
     grade = 'B';
   }
   else if(score <=79 && score >= 70 ){
     grade = 'C';
   }
   else if(score <= 69 && score >= 60){
     grade = 'D';
   }
   else {
     grade = 'F';
   }
   
 }
  return grade;

}

