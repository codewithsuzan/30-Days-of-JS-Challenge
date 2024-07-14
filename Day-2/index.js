//Activity 1:Arithmetic Operations

//Task 1:

let num1=10
let num2=20
let result=num1+num2
console.log(result)

//Task 2:

 let num1=10
 let num2=20
 let result=num1-num2
 console.log(result)

//Task 3:

let num1=10
let num2=5
let result=num1*num2
console.log(result)

//Task 4:

let num1=100
let num2=5
let result=num1/num2
console.log(result)

//Task 5:

let num1=10
let num2=4
let result=num1%num2
console.log(result)

//Activity 2:Assignment Operators

//Task 6:

let a=10
a+=5
console.log(a)

// Task 7:
let a=10
a-=5
console.log(a)

// Activity 3:Comparison Operators

//Task 8:

let num1=10
let num2=5
if(num1>num2){
    console.log("num1 is greater than num2")
}else{
    console.log("num2 is greater than num1")
}

// Task 9:

let num1=10
let num2=5
if(num1>=num2){
    console.log("num1 is greater than or equal to num2")
    }else{
        console.log("num2 is greater than or equal to num1")
        }


// Task 10:

let num1=10
let num2=10
console.log(num1 ==  num2)
// Checks if two values are equal 
//Output :true
console.log(num1 === num2)
// Checks if two values are equal and of the same type
//Output :true


//Activity 4:Logical Operators

//Task 11:

let num1=5
let num2=5
if(num1>0 && num2>0){
    console.log("Both are positive")
}

// true and true =true 
// true and false =false
// false and true =false
// false and false =false

// Task 12:

let num1=5
let num2=5
if(num1>0 || num2>0){
    console.log("At least one is positive")
    }
    // true or true =true
    // true or false =true
    // false or true =true
    // false or false =false


//Task 13:

let isLogged = true;

if (!isLogged) {
    console.log("User is not logged in");
} else {
    console.log("User is logged in");
}
// true=false
// false=true



// Activity 5: Ternary Operator
let num1=5
num1>0?console.log("Positive"):console.log("Negative")


// Feature Request:
// Task 1:
let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));
let operation = prompt("Enter Operation:"); 
switch (operation) {
    case "+":
        alert(`${num1} + ${num2} = ${num1 + num2}`);
        break;

    case "-":
        alert(`${num1} -  ${num2} = ${num1 - num2}`);
        break;

    case "*":
        alert(`${num1} * ${num2} = ${num1 * num2}`);
        break;

    case "/":
        if (num2 !== 0) {
            alert(`${num1} / ${num2} = ${num1 / num2}`);
        } else {
            alert("Cannot divide by zero!");
        }
        break;

    default:
        alert("Invalid operation!"); 
}

//Task 2:
let num1 = 10;
let num2 = 5;


console.log(`${num1} > ${num2}:`, num1 > num2);   // true
console.log(`${num1} < ${num2}:`, num1 < num2);   // false
console.log(`${num1} >= ${num2}:`, num1 >= num2); // true
console.log(`${num1} <= ${num2}:`, num1 <= num2); // false
console.log(`${num1} === ${num2}:`, num1 === num2); // false
console.log(`${num1} !== ${num2}:`, num1 !== num2); // true


console.log(`${num1} > 0 && ${num2} > 0:`, num1 > 0 && num2 > 0); // true
console.log(`${num1} > 0 || ${num2} > 0:`, num1 > 0 || num2 > 0); // true


console.log(`(${num1} > ${num2}) && (${num1} !== ${num2}):`, (num1 > num2) && (num1 !== num2)); // true
console.log(`(${num1} < ${num2}) || (${num1} === ${num2}):`, (num1 < num2) || (num1 === num2)); // false


//Task 3:
let num1=5
num1>0?console.log("Positive"):console.log("Negative")
