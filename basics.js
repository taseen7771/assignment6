var oldStyle = "I'm a var variable";
let name = "Taseen";
const pi = 3.14159;

let myString = "Hello, JavaScript!";
let myNumber = 42;
let myBoolean = true;
let myArray = [1, 2, 3, 4];
let myObject = { name: "John", age: 25 };

console.log(oldStyle);
console.log(name);
console.log(pi);
console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myArray);
console.log(myObject);

let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));

let sum = num1 + num2;
let diff = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("Addition: " + sum);
console.log("Subtraction: " + diff);
console.log("Multiplication: " + product);
console.log("Division: " + quotient);

let marks = parseInt(prompt("Enter your marks:"));
let grade;

if (marks >= 90) {
  grade = "A";
} else if (marks >= 80) {
  grade = "B";
} else if (marks >= 70) {
  grade = "C";
} else if (marks >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Your grade is: " + grade);

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

let i = 2;
while (i <= 10) {
  console.log(i);
  i += 2;
}

function greetUser(name) {
  console.log("Welcome, " + name + "!");
}
greetUser("Taseen");

function square(num) {
  return num * num;
}
console.log("Square of 5 is: " + square(5));
