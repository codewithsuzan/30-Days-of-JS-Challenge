// Activity 1: Understanding Closures

// Task 1:

function outerFunction() {
    let outerVariable = "I am from the outer scope!";
    return function () {
      return outerVariable;
    };
  }
  
  const innerFunction = outerFunction();
  console.log(innerFunction());
  
  // Task 2:
  
  function createCount() {
    let count = 0;
    return {
      increment: function () {
        count++;
      },
      getValue: function () {
        return count;
      },
    };
  }
  const myCounter = createCount();
  myCounter.increment();
  console.log(myCounter.getValue());
  
  // Activity 2: Practical Closures
  
  // Task 3:
  
  function createIDGenerator() {
    let lastID = 0;
    return function () {
      return ++lastID;
    };
  }
  
  const generateID = createIDGenerator();
  console.log(generateID());
  console.log(generateID());
  
  // Task 4:
  
  const greetingFunction = () => {
    let userName = "Sujan Timalsina";
    return function greet() {
      console.log(`Hello and Namaste everyone.My name is ${userName}`);
    };
  };
  const myFunction = greetingFunction();
  myFunction();
  
  // Activity 3: Closures in Loops
  
  // Task 5:
  
  function createFunctionArray() {
    let array = [];
    for (let i = 0; i < 5; i++) {
      array.push(function () {
        console.log(i);
      });
    }
    return array;
  }
  
  const functionArray = createFunctionArray();
  functionArray[0]();
  functionArray[1]();
  functionArray[2]();
  functionArray[3]();
  functionArray[4]();
  
  // Activity 4: Module Pattern
  
  // Task 6:
  
  const itemManager = (function () {
    let items = [];
  
    return {
      addItem: function (item) {
        items.push(item);
      },
      removeItem: function (item) {
        items = items.filter((i) => i !== item);
      },
      listItems: function () {
        return items;
      },
    };
  })();
  itemManager.addItem("item1");
  itemManager.addItem("item2");
  console.log(itemManager.listItems());
  
  itemManager.removeItem("item1");
  console.log(itemManager.listItems());
  
  // Activity 5: Memoization
  
  // Task 7:
  
  function memoize(fn) {
    const cache = {};
    return function (...args) {
      const key = args.toString();
      if (cache[key]) {
        return cache[key];
      }
      const result = fn(...args);
      cache[key] = result;
      return result;
    };
  }
  function add(a, b) {
    return a + b;
  }
  const memoizedAdd = memoize(add);
  console.log(memoizedAdd(1, 2));
  console.log(memoizedAdd(1, 3));
  
  // Task 8:
  
  function memoize(fn) {
    const cache = {};
  
    return function (...args) {
      const key = JSON.stringify(args);
      if (cache[key] !== undefined) {
        return cache[key];
      } else {
        const result = fn(...args);
        cache[key] = result;
        return result;
      }
    };
  }
  
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  const memoizedFactorial = memoize(factorial);
  console.log(memoizedFactorial(5));
  console.log(memoizedFactorial(6));
  console.log(memoizedFactorial(7));
  