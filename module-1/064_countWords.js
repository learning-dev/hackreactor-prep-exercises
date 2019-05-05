/*
Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string. 

Notes:
* If given an empty string, it should return an empty object.

var output = countWords('ask a bunch get a bunch'); 
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
*/

function countWords(str) {
    var obj = {};
    if (str.length > 0) {

        var arr = str.split(' ');
        var count = 0;
        for (var i = 0; i < arr.length; i++) {

            for (var j = 0; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    count += 1;
                }
            }
            obj[arr[i]] = count;
            count = 0;

        }
    }
    return obj;
}