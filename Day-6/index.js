// Activity 1: Array Creation and Access
// Task 1:

let arr = ["Nepal", "India", "US", "UK", "China"];
console.log(arr);

// Task 2:

let arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
console.log(arr[arr.length - 1]);

// Activity 2: Array Methods (Basic)

// Task 3:

let fruits = ["mango", "banana", "grape", "cherry", "apple", "orange"];
fruits.push("blueberry");
console.log(fruits);

// Task 4:

let fruits = ["mango", "banana", "grape", "cherry", "apple", "orange"];
fruits.pop();
console.log(fruits);

// Task 5:

let fruits = ["mango", "banana", "grape", "cherry", "apple", "orange"];
fruits.shift();
console.log(fruits);

// Task 6:

let fruits = ["mango", "banana", "grape", "cherry", "apple", "orange"];
fruits.unshift("blueberry");
console.log(fruits);

// Activity 3: Array Methods (Intermediate)

// Task 7:

let numbers = [1, 2, 3, 4, 5];
let dblNumbers = numbers.map((value) => value * 2);
console.log(dblNumbers);

// Task 8:

let numbers = [1, 2, 3, 4, 5];
let evenFinder = numbers.filter((value) => (value % 2 == 0 ? true : false));
console.log(evenFinder);

// Task 9:

let numbers = [1, 3, 5, 7, 9];
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);

// Activity 4: Array Iteration

// Task 10:

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Task 11:

let numbers = [1, 2, 3, 4, 5];
numbers.forEach((value) => {
  console.log(value);
});

// Activity 5: Multi-dimensional Arrays

// Task 12:

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(matrix);

// Task 13:

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(matrix[0][0]);
console.log(matrix[0][1]);
console.log(matrix[0][2]);
console.log(matrix[1][0]);
console.log(matrix[1][1]);
console.log(matrix[1][2]);
