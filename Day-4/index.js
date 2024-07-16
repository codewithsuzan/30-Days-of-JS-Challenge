// Activity 1: For Loop

//  Task 1:

let i=0
for(i=1;i<=10;i++){
    console.log(i)
}

//Task 2:

let num=5
for(i=1;i<=10;i++){
console.log(`5 X ${i}=${num*i}`)
}



// Activity 2: While Loop

// Task 3:

let i=1
sum=0
while(i<=10){
    sum+=i
    i++
    
}console.log(`Sum from 0 to 10 is ${sum}.`)

// Task 4:

let i=10
while(i>=1){
    console.log(i)
    i--
}


// Activity 3: Do... While Loop

// Task 5:

let i=0
do {
    i++
    console.log(i)
} while (i<5);

// Task 6:

let number = 5;
let result = 1;
let i = 1;

do {
    result *= i;
    i++;
} while (i <= number);

console.log(`Factorial of ${number} is: ${result}`);


// Activity 4: Nested Loops
// Task 7:

let pattern
for (let row = 1; row <= 5; row++) {
  pattern = "";
    for (let column = 1; column <= row; column++) {
        pattern += "* ";
    }
    console.log(pattern);
}

// Activity 5: Loop Control Statements

// Task 8:

let i;
for(i=1;i<=10;i++){
    if(i==5) continue
    console.log(i)
}

// Task 9:

let i
for(i=1;i<=10;i++){
    if(i==7) {
        break
    }
    console.log(i)
}

