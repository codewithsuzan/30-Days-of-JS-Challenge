// Activity 1: Selecting and Manipulating Elements

// Task 1:

let textArea=document.getElementById("textArea")
textArea.innerHTML="Welcome to my web page..."

// Task 2:

let boxes = document.getElementsByClassName("box");
for(let i=0;i<boxes.length;i++){
    boxes[i].style.backgroundColor="blue"
}



// Activity 2: Creating and Appending Elements

// Task 3:

let body=document.querySelector("body")
let div=document.createElement("div")
div.innerHTML="Welcome to my web page..."
body.appendChild(div)

// Task 4:

let ul=document.querySelector("ul")
let newLi=document.createElement("li")
newLi.innerHTML="Four"
ul.appendChild(newLi)


// Activity 3: Removing Elements

// Task 5:

let li=document.querySelectorAll("li")
let ul=document.querySelector("ul")
li.forEach((items)=>{
    ul.removeChild(items)
})

// Task 6:

let parentElement=document.querySelector("ul")
parentElement.removeChild(parentElement.lastElementChild)


// Activity 4: Modifying Attributes and Classes

// Task 7:

let img=document.querySelector("img")
img.src="https://www.logodesignteam.com/blog/wp-content/uploads/2017/07/Google_Logo.jpg"

// Task 8:

let paragraph=document.querySelector("#paragraph")
paragraph.classList.add("highlight")
paragraph.classList.remove('highlight');



// Activity 5: Event Handling

// Task 9:

let paragraph=document.querySelector("p")
paragraph.addEventListener("click",function(){
    paragraph.innerText="Hello dostooooooooo"
})

Task 10:

let div=document.querySelector("div")
div.addEventListener("mouseover",()=>{
    div.style.border="2px solid red"
})