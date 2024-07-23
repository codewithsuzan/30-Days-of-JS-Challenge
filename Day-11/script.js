// Activity 1: Understanding Promises

// Task 1:

new Promise((resolve) =>
  setTimeout(() => resolve("Promise is resolved."), 2000)
).then((message) => console.log(message));

// Task 2:

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise is rejected.");
  }, 2000);
})
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Caught an error:", error);
  });

// Activity 2: Chaining Promises

// Task 3:

let promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Fetching data from server 1...");
  }, 1000);
});

promise1
  .then((message) => {
    console.log(message);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Fetching data from server 2...");
      }, 1000);
    });
  })
  .then((message) => {
    console.log(message);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Fetching data from server 3...");
      }, 1000);
    });
  })
  .then((message) => {
    console.log(message);
  });

// Activity 3: Using Async/Await

// Task 4:

async function fetchData() {
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetching data from server ...");
    }, 2000);
  });

  const result = await promise;
  console.log(result);
}
fetchData();

// Task 5:

async function fetchData() {
  let promise = new Promise((reject) => {
    setTimeout(() => {
      reject("Error fetching data from server ...");
    }, 2000);
  });

  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
fetchData();

// Activity 4: Fetching Data from an API

// Task 6:

const URL = `https://jsonplaceholder.typicode.com/posts/1`;
fetch(URL)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Error:", error));

// Task 7:

const URL = `https://jsonplaceholder.typicode.com/posts/1`;

async function fetchData() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
fetchData();

// Activity 5: Concurrent Promises

// Task 8:

const URL1 = "https://jsonplaceholder.typicode.com/posts/1";
const URL2 = "https://jsonplaceholder.typicode.com/posts/2";
const URL3 = "https://jsonplaceholder.typicode.com/posts/3";

async function fetchData() {
  try {
    const promises = [
      fetch(URL1).then((responce) => responce.json()),
      fetch(URL2).then((responce) => responce.json()),
      fetch(URL3).then((responce) => responce.json()),
    ];

    const result = await Promise.all(promises);
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();

// Task 9:

const URL1 = "https://jsonplaceholder.typicode.com/posts/1";
const URL2 = "https://jsonplaceholder.typicode.com/posts/2";

Promise.race([
  fetch(URL1).then((response) => response.json()),
  fetch(URL2).then((response) => response.json()),
])
  .then((result) => console.log(result))
  .catch((error) => console.log("Error:", error));
