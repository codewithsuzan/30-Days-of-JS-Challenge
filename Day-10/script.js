// Activity 1: Basic Event Handling

// Task 1:

let btn = document.querySelector("button");
let p = document.querySelector("p");
btn.addEventListener("click", () => {
  p.innerHTML = "Thanks for visiting my website and see you soon!";
});

// Task 2:

let img = document.querySelector("img");
img.addEventListener("dblclick", () => {
  img.style.display = "none";
});

// Activity 2: Mouse Events

// Task 3:

let h1 = document.querySelector("h1");
h1.addEventListener("mouseover", () => {
  h1.style.backgroundColor = "green";
});

// Task 4:

let h1 = document.querySelector("h1");
h1.addEventListener("mouseout", () => {
  h1.style.backgroundColor = "white";
});

// Activity 3: Keyboard Events

// Task 5:

const inputField = document.getElementById("inputField");

inputField.addEventListener("keydown", (event) => {
  console.log(`Key is pressed.Code=${event.code}`);
});

// Task 6:

const inputField = document.getElementById("inputField");
const output = document.getElementById("output");

inputField.addEventListener("keyup", () => {
  output.innerHTML = `Current value=${inputField.value}`;
});

// Activity 4: Form Events

// Task 7:

const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  formData.forEach((value, key) => {
    console.log(`${key}:${value}`);
  });
});

// Task 8:

let dropdown = document.getElementById("dropdown");
let output = document.getElementById("output");
dropdown.addEventListener("change", (event) => {
  output.innerHTML = `Selected value=${dropdown.value}`;
});

// Activity 5: Event Delegation

// Task 9:

const list = document.getElementById("mylist");

list.addEventListener("click", (event) => {
  if (event.target && event.target.nodeName === "LI") {
    console.log(`List item clicked: ${event.target.textContent}`);
  }
});

// Task 10:

const list = document.getElementById("dynamicList");
const addItemButton = document.getElementById("addItem");
list.addEventListener("click", function (event) {
  if (event.target && event.target.matches(".list-item")) {
    alert("List item clicked: " + event.target.textContent);
  }
});
addItemButton.addEventListener("click", function () {
  const listItem = document.createElement("li");
  listItem.className = "list-item";
  listItem.textContent = "List Item " + (list.children.length + 1);
  list.appendChild(listItem);
});
