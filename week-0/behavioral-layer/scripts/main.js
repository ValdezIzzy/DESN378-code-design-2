const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/foxImage.jpeg") {
    myImage.setAttribute("src", "images/foxDrawing.jpeg");
  } else {
    myImage.setAttribute("src", "images/foxImage.jpeg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Howdy Doody, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Howdy Doody, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Howdy Doody, ${myName}`;
  }
}


/*
  SUMMARY:
  This file does two things:
  1. The image changes when clicked due to an event listener that swaps the image source.
  2. The heading text changes to greet the user by name, which is stored in local storage and can be updated via a button.
​
  The key pattern I learned: How to use event listeners to make web pages interactive and how to use local storage to remember user preferences.
*/