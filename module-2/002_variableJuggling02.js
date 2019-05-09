// BEGIN ORIGINAL CODE -- DO NOT MODIFIY THIS CODE

var x = [1, 2, 3];
var y = [4, 5, 6];
var z = x;

z[2] = y[0]; // [1, 2, 4]
z[1] = y[2]; // [1, 6, 4] z
y[1] = z[1];  // [4, 6, 6] y
x[0] = y[0]; // [4, 6, 4] x
x[2] = 1; // [4, 6, 1] x

// END ORIGINAL CODE

/*
What is the final value of x?

IMPORTANT: DO NOT just rewrite this code and run it in a terminal.

There is ZERO POINT to that, you'd just be cheating yourself.

Having the computer keep track of the variable assignments for you does not help you learn!!!
*/

var answer = {
  finalValueOfX: [4, 6, 1], // FILL THIS IN
  finalValueOfY: [4, 6, 6], // FILL THIS IN
  finalValueOfZ: [4, 6, 1], // FILL THIS IN
};




