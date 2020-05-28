/*

Objective
Today, we're discussing data types. Check out the attached tutorial for more details.

Task
Variables named , , and  are declared for you in the editor below. You must use the  operator to perform the following sequence of operations:

Convert  to an integer (Number type), then sum it with  and print the result on a new line using console.log.
Convert  to a floating-point number (Number type), then sum it with  and print the result on a new line using console.log.
Print the concatenation of  and  on a new line using console.log. Note that  must be printed first.

Input Format
Data Type	Parameter	Description
string		The string representation of an integer you must sum with .
string		The string representation of a floating-point number you must sum with .
string		A string of one or more space-separated words you must append to .

Output Format
Print the following three lines of output:
On the first line, print the sum of  and the integer representation of .
On the second line, print the sum of  and the floating-point representation of .
On the third line, print  concatenated with . You must print  before .

Sample Input 0
12
4.32
is the best place to learn and practice coding!
Sample Output 0
16
8.32
HackerRank is the best place to learn and practice coding!
Explanation 0
When we sum the integers  and , we get the integer .
When we sum the floating-point numbers  and , we get . When we concatenate HackerRank with is the best place to learn and practice coding!, we get HackerRank is the best place to learn and practice coding!.

You will not pass this challenge if you attempt to assign the Sample Case values to your variables instead of following the instructions above.

*/

// SOLUTION

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .trim()
    .split("\n")
    .map(string => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function performOperation(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;
  const firstDecimal = 4.0;
  const firstString = "HackerRank ";
  const parseSecInt = Number.parseInt(secondInteger);
  const sum1 = firstInteger + parseSecInt;
  console.log(sum1);

  const parseSecDec = Number.parseFloat(secondDecimal);
  const sum2 = firstDecimal + parseSecDec;
  console.log(sum2);

  const concat = firstString + secondString;
  console.log(concat);
}
