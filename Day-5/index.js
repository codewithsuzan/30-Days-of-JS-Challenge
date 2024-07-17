// Activity 1: Function Declaration
// Task 1:

let number = 10;
function numberChecker(number) {
  return number % 2 == 0 ? console.log("Even") : console.log("Odd");
}
numberChecker(number);

// Task 2:

let number = 10;
function squareGiver(number) {
  return Math.pow(number, 2);
}
console.log(`The square of ${number} is ${squareGiver(number)}`);

// Activity 2: Function Expression

// Task 3:

const maxFinder = function maxBetween2Numbers(a, b) {
  return a > b ? console.log(`${a} is max`) : console.log(`${b} is max`);
};
maxFinder(10, 20);

// Task 4:

const stringConcatenate = function concatenator(str1, str2) {
  return str1.concat(" ", str2);
};
console.log(stringConcatenate("Hello", "World"));

// Activity 3: Arrow Functions

// Task 5:

let num1 = 10;
let num2 = 100;
const sumCalculator = (num1, num2) => {
  return num1 + num2;
};
console.log(sumCalculator(num1, num2));

// Task 6:

let str = "Coding";

const specificWordChecker = (str) => {
  return str.includes("i");
};
console.log(specificWordChecker(str));

// Activity 4: Function Parameters and Default Values

// Task 7:

let num1, num2;
const productProvider = (num1, num2 = 1) => {
  return num1 * num2;
};
console.log(productProvider(5));

// Task 8:

const greatPerson = (name, age = 18) => {
  return `Hello ${name} .You are currently ${age} years old.`;
};
console.log(greatPerson("ROhan", 24));

// Task 9:

const callNthTimes = (func, n) => {
  for (let i = 1; i <= n; i++) {
    func();
  }
};

const helloPrint = () => {
  console.log("Hello World");
};

callNthTimes(helloPrint, 5);

// Task 10:

const double = (x) => x * 2;
const square = (x) => x * x;
const applyFunctions = (func1, func2, value) => {
  const resultFromFunc1 = func1(value);
  const finalResult = func2(resultFromFunc1);
  return finalResult;
};
const initialValue = 3;
const result = applyFunctions(double, square, initialValue);
console.log(result);
