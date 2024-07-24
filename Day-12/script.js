// Activity 1: Basic Error Handling with Try-Catch

//Task 1:

function throwErrorFunction() {
    throw new Error ("An error has occurred!");
}
try {
    throwErrorFunction();
} catch (error) {
    console.error("Caught an error:", error);
}
console.log("Program continues after handling the error.");

// Task 2:

let num1 = parseInt(prompt("Enter a number:"));
let num2 = parseInt(prompt("Enter a denominator:"));

divideNumbers=(num1,num2)=>{
    if(num2===0){
        throw new Error ("Denominator can't be zero.")
    }else{
        return num1/num2
    }
}
try {
    let result=divideNumbers(num1,num2)
    console.log("Result:",result)
} catch (error) {
    console.log("Error:",error)
}


// Activity 2: Finally Block

// Task 3:

function divideNumbers(num1, num2) {
    if (num2 === 0) {
        throw new Error("Denominator can't be zero.");
    }
    return num1 / num2;
}
let num1 = parseInt(prompt("Enter a number:"));
let num2 = parseInt(prompt("Enter a denominator:"));
try {
    let result = divideNumbers(num1, num2);
    console.log("Result:", result);
} catch (error) {
    console.log("Caught an error:", error.message);
} finally {
    console.log("Execution completed.");
}


// Activity 3: Custom Error Objects

// Task 4:

// note:
// >The super keyword is used to call methods and access properties from a parent class within a subclass.
// >The extends keyword is used to create a subclass (child class) that inherits from a parent class (base class).

class MyCustomError extends Error {
    constructor(message) {
        super(message)
        this.name = "MyCustomError";
    }
}
function throwError() {
    throw new MyCustomError("Something went wrong!");
}
try {
    throwError();
} catch (error) {
    console.log("Caught an error:", error.message);
} 

// Task 5:

Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class validationError extends Error{
    constructor(message){
        super(message)
        this.message="validationError"
    }
}

const checker=(str)=>{
    if(str===""){
        throw new validationError("String is empty...")
    }else{
        console.log(str)
    }
}

let str=prompt("Enter any sytring:")

try {
    checker(str)
} catch (error) {
    console.log("Error:",error)
}


// Activity 4: Error Handling in Promises

// Task 6:

const randomPromise=new Promise((resolve,reject)=>{
    let randomNumber=Math.random()
    if(randomNumber>0.5){
        resolve("Promise resolved successfully.");
    }else{
        reject("Promise rejected.")
    }
})
randomPromise.then(result=>{
    console.log(result)})
.catch(error=>{
    console.log("Error:",error)
})

// Task 7:

const randomPromise = () => {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random()
           if (randomNumber > 0.5) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    });
}
const handlePromise = async () => {
    try {
        const result = await randomPromise()
        console.log(result)
    } catch (error) {
        console.log("Error:", error)
    }
}
handlePromise();


// Activity 5: Graceful Error Handling in Fetch

// Task 8:

const fetchData=()=>{
    fetch(`https://invalidurl.example.com`)
    .then(response=>{
        if(!response.ok){
            throw new Error(`HTTP error! Status : ${response.status}`)
        }
        return response.json()
    })
    .then(data=>{
        console.log("Data received:",data)
    })
    .catch(error=>{
        console.log("Error:",error)
    })
}

fetchData()

// Task 9:

const fetchData = async () => {
    try {
        const response = await fetch('https://invalidurl.example.com'); 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data received:", data);
    } catch (error) {
        console.error("Fetch error:", error.message);
    }
};
fetchData()