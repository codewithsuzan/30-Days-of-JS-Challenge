// Task 1:

const task1String = "JavaScript is awesome. I love JavaScript!";
const task1Regex = /JavaScript/g;
console.log("Task 1 matches:", task1String.match(task1Regex));

// Task 2:

const task2String = "There are 42 apples and 7 oranges.";
const task2Regex = /\d/g;
console.log("Task 2 matches:", task2String.match(task2Regex));

// Task 3:

const task3String = "The Quick Brown fox Jumps Over The Lazy Dog.";
const task3Regex = /\b[A-Z][a-z]*\b/g;
console.log("Task 3 matches:", task3String.match(task3Regex));

// Task 4:

const task4String = "There are 42 apples, 7 oranges, and 365 days in a year.";
const task4Regex = /\d+/g;
console.log("Task 4 matches:", task4String.match(task4Regex));

// Task 5:

const task5String = "(123) 456-7890";
const task5Regex = /\((\d{3})\)\s*(\d{3})-(\d{4})/;
const task5Match = task5String.match(task5Regex);
console.log("Task 5 captures:", task5Match ? task5Match.slice(1) : "No match");

// Task 6:

const task6String = "user@example.com";
const task6Regex = /^(\w+)@(\w+\.\w+)/;
const task6Match = task6String.match(task6Regex);
console.log("Task 6 captures:", task6Match ? task6Match.slice(1) : "No match");

// Task 7:

const task7String = "Start with this word";
const task7Regex = /^\w+/;
console.log("Task 7 matches:", task7String.match(task7Regex));

// Task 8:

const task8String = "JavaScript is awesome";
const task8Regex = /\w+$/;
console.log("Task 8 matches:", task8String.match(task8Regex));

// Task 9:

function validatePassword(task9String) {
  const task9Regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  return task9Regex.test(task9String);
}
const task9String = "P@ssW0rd!";
console.log("Task 9-Password valid:", validatePassword(task9String));

// Task 10:

const validateURL = (URL) => {
  const task10Regex =
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;
  return task10Regex.test(URL);
};
const URL = "https://www.example.com";
console.log("Task 10-URL validate:", validateURL(URL));
