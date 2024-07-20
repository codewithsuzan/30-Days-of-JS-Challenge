// Activity 1: Template Literals

// Task 1:

let personName = "Suzan";
let personAge = "18";
console.log(`My name is ${personName} and I am ${personAge} years old. `);

// Task 2:

const multiLineString = `
    Hello there,

  This is a demonstration of
  a multi-line string in JavaScript.
  
  Template literals are awesome! `;
console.log(`${multiLineString}`);

// Activity 2: Destructuring

// Task 3:

let arr = ["Mustang", "f-150", "expedition"];
let [car, truck] = arr;
console.log(car);
console.log(truck);

// Task 4:

let Book = {
  title: "Atomic Habits",
  author: "James Clear",
  year: 2018,
};

let { title, author } = Book;
console.log(title);
console.log(author);

// Activity 3: Spread and Rest Operators

// Task 5:

let originalArray = [1, 2, 3, 4, 5];
let newArray = [...originalArray, 6, 7, 8, 9, 10];
console.log(newArray);

// Task 6:

const sum = (...numbers) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
};
console.log(sum(1, 2, 3, 4, 5));

// Activity 4: Default Parameters

// Task 7:

const Product = (num1, num2 = 1) => {
  return num1 * num2;
};
console.log(Product(5));
console.log(Product(5, 5));

// Activity 5: Enhanced Object Literals

// Task 8:

let dog = {
  name: "COCO",
  age: 4,
  color: "Black",
  food: "Bones",

  bark() {
    console.log("WOOF WOOF");
  },
  eat(food) {
    console.log(`${this.name} eat ${this.food}`);
  },
};
console.log(dog);
dog.bark();
dog.eat();

// Task 9:

let propertyName = "name";
let propertyValue = "COCO";

let dog = {
  [propertyName]: propertyValue,
  age: 4,
  color: "Black",
  food: "Bones",
  bark() {
    console.log("WOOF WOOF");
  },
  eat(food) {
    console.log(`${this.name} eat ${this.food}`);
  },
};

console.log(dog);
dog.bark();
dog.eat();
