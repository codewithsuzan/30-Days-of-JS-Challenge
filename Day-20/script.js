// // Activites 1:

// // Task 1:

// localStorage.setItem("myString", "Hello, LocalStorage!");
// const retrievedString = localStorage.getItem("myString");
// console.log(retrievedString);

// // Task  2:

// const myObj = {
//   name: "Sujan",
//   age: "18",
// };
// localStorage.setItem("myObj", JSON.stringify(myObj));
// const retrivedObject = JSON.parse(localStorage.getItem("myObj"));
// console.log(retrivedObject);

// // Activity 2: Using LocalStorage

// // Task  3:

// const form = document.getElementById("userForm");
// const savedDataDiv = document.getElementById("savedData");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;

//   localStorage.setItem("userData", JSON.stringify({ name, email }));
//   displaySavedData();
// });

// function displaySavedData() {
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   if (userData) {
//     savedDataDiv.innerHTML = `Name: ${userData.name}, Email: ${userData.email}`;
//   }
// }

// // Task  4:

// localStorage.setItem("testItem", "This is test item....");
// console.log(`Before remove: ${localStorage.getItem("testItem")}`);
// localStorage.removeItem("testItem");
// console.log(`After removal: ${localStorage.getItem("testItem")}`);

// // Activity 3: Understanding SessionStorage

// // Task  5:

// sessionStorage.setItem("myString", "Hello Session...");
// const retrivedString = sessionStorage.getItem("myString");
// console.log(retrivedString);

// // Task  6:

// const myObj = { name: "Sujan", age: "18" };
// sessionStorage.setItem("myObj", JSON.stringify(myObj));
// const retrivedString = JSON.parse(sessionStorage.getItem("myObj"));
// console.log(retrivedString);

// // Activity 4: Using SessionStorage

// // Task  7:

// document
//   .getElementById("userForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;

//     const userData = { name, email };
//     sessionStorage.setItem("userData", JSON.stringify(userData));
//   });

// // Display the saved data on page load
// window.onload = function () {
//   const savedData = JSON.parse(sessionStorage.getItem("userData"));
//   if (savedData) {
//     console.log("Name:", savedData.name);
//     console.log("Email:", savedData.email);
//   }
// };

// // Task  8:

// sessionStorage.setItem("testItem", "This is test item...");
// console.log(`Before removing: ${sessionStorage.getItem("testItem")}`);
// sessionStorage.removeItem("testItem");
// console.log(`After removing: ${sessionStorage.getItem("testItem")}`);

// // Activity 5: Comparing LocalStorage and SessionStorage

// // Task  9:

// function saveToBoth(key, value) {
//   localStorage.setItem(key, value);
//   sessionStorage.setItem(key, value);
// }

// function retrieveAndLog(key) {
//   const localValue = localStorage.getItem(key);
//   const sessionValue = sessionStorage.getItem(key);
//   console.log(`LocalStorage - ${key}: ${localValue}`);
//   console.log(`SessionStorage - ${key}: ${sessionValue}`);
// }
// saveToBoth("testKey", "testValue");
// retrieveAndLog("testKey");

// // Task  10:

// document.querySelector("button").addEventListener(onclick, () => {
//   clearAllStorage();
// });
// function clearAllStorage() {
//   localStorage.clear();
//   sessionStorage.clear();
//   const localStorageIsEmpty = localStorage.length === 0;
//   const sessionStorageIsEmpty = sessionStorage.length === 0;
//   console.log("LocalStorage is empty:", localStorageIsEmpty); // Should log: true
//   console.log("SessionStorage is empty:", sessionStorageIsEmpty); // Should log: true
// }
// // Adding some data to localStorage and sessionStorage for testing
// localStorage.setItem("testLocalStorage", "localStorage data");
// sessionStorage.setItem("testSessionStorage", "sessionStorage data");

// console.log("Before clearing:");
// console.log("LocalStorage:", localStorage.getItem("testLocalStorage")); // Should log: localStorage data
// console.log("SessionStorage:", sessionStorage.getItem("testSessionStorage")); // Should log: sessionStorage data
