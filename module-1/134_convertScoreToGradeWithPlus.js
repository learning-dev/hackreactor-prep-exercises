/*
Write a function called "convertScoreToGradeWithPlusAndMinus".

Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (60  -  0) --> 'F'
* If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
* If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
* If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a '+'
* There are is no F+ and there is no F-.

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
*/

function convertScoreToGradeWithPlusAndMinus(score) {
  
  var grade = 'INVALID SCORE';
  if(score <= 100 && score >= 0){
    if (score <=100 && score >= 90){
      if(score <= 92){
        grade = 'A-';
      }
      else if(score >= 93 && score <= 97){
            grade = 'A';  
              }
      else{
        grade = 'A+';
      }
      
        
   }
   else if(score <= 89 && score >= 80){
     if(score <= 82){
        grade = 'B-';
      }
     else if(score >= 83 && score <= 87){
            grade = 'B';  
              }
     else{
       grade = 'B+';
     }
      
   }
   else if(score <=79 && score >= 70 ){
     if(score <= 72){
        grade = 'C-';
      }
     else if(score >= 73 && score <= 77){
            grade = 'C';  
              }
     else{
      grade = 'C+'; 
     }
      
   }
   else if(score <= 69 && score >= 60){
     if(score <= 62){
        grade = 'D-';
      }else if(score >= 63 && score <= 67){
            grade = 'D';  
              }
     else{
        grade = 'D+';  
      }
      
   }
   else {
     grade = 'F';
   }
   
 }
  return grade;

}

