// Activity 1:If-Else Statements

// Task 1:
let num=10;
if(num>0){
    console.log("Positive Number");
    }
    else if(num<0){
        console.log("Negative Number");
        }else{
            console.log("Zero");
    }

// Task 2:
let age=20
if(age>=18){
    console.log("You can vote");
    }
    else{
        console.log("You can't vote");
        }

// Activity 2: Nested If-Else Statements

// Task 3:
let num1=10,num2=80,num3=50
if(num1>num2 && num1>num3){
    console.log(`${num1} is greater.`)
}else if(num2>num1 && num2 > num3){
    console.log(`${num2} is greater.`)
}else{
    console.log(`${num3} is greater.`)
}

//Activity 3: Switch Case

// Task 4:

let numberOfDays = 3;
switch (numberOfDays) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;

    default:
        console.log("Invalid Input");
}

// Task 5:

let score = 93;

switch (true) {
  case score >= 90 && score <= 100:
    console.log("A");
    break;
  case score >= 80 && score < 90:
    console.log("B");
    break;
  case score >= 70 && score < 80:
    console.log("C");
    break;
  case score >= 60 && score < 70:
    console.log("D");
    break;
  default:
    console.log("F");
}


// Activity 4: Conditional (Ternary) Operator

// Task 6:
let num=1
let result=num%2==0? "Even": "Odd"
console.log(result)



// Activity 5: Combining Conditions

// Task 7:

const year=2024
let result=year%4===0 &&( year%400===0 || year%100!==0)?"Leap Year":"Not Leap Year"
console.log(result)


