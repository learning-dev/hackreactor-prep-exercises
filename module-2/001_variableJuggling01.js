// DO NOT ADJUST

var x = 7;
var y = 8;
var z = 9;

x = y + z; //17
z = x; // z 17
x = y; // x 8
z = x + y; // 16 z
y = z - x; // y 8
z = y; //z 8
x = y * z; // 64 x
z = y / z; // z 1
x = (z - x) / (y + z); // -63 / 9

/////////////////

var answer = {
  finalValueOfX: -7 // CHANGE 'null' to correct answer
};
  
