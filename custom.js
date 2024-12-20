// Question 1

var a = 55;
var b = 35;

if (a > b) {
  console.log("Varibal a Is Bigger.");
} else {
  console.log("Variable b Is Bigger!");
}

// Question 2

let q_num = -5;

if (q_num > 0) {
  console.log("The number is positive.");
} else if (q_num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// Question 3

let qq_num = 10;
let new_qq = qq_num % 10;

if (new_qq == 0) {
  console.log("The number is divisible.");
} else {
  console.log("The number isn't divisible.");
}

// Question 4

let c = 35;
let d = c % 2;

if (d == 0) {
  console.log("The Number is Odd!");
} else {
  console.log("The Number is Even!");
}

// Question 5

let aa = "N";

if ((aa >= "A" && aa <= "Z") || (aa >= "a" && aa <= "z")) {
  console.log("The character is in the alphabet.");
} else {
  console.log("The character is not in the alphabet.");
}

// Question 6

let mytem = 31;

if (mytem >= 30) {
  console.log("Weather is Hot!");
} else if (mytem >= 20) {
  console.log("Temparature is Noraml");
} else {
  console.log("temparate is cold!");
}

// Question 7

var f = 5;
var g = 10;
var h = 25;

console.log(Math.max(f, g, h));

// Question 8

// Input number
let x = 25;

// Convert input to a number type
x = Number(x);

// Check if the number is even or odd using a ternary operator
let result = x % 2 === 0 ? "Even Number" : "Odd Number";

// Print the result
console.log(result);

// Question 9

let zz = 35;
let xx = 29;

if (zz >= 30 && xx >= 30) {
  console.log("And Condition Matched");
} else {
  console.log("And Condition didn't Matched!");
}

// Question 10

let age = 15;

if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else {
  console.log("Not a Teenager!");
}
