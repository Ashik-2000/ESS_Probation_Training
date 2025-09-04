// ***** Top to down Traversal *****

// const grandpa = document.querySelector(".todo-list")
// const parent = grandpa.children;
// const childs = parent[1].children

// const childs2 = grandpa.querySelectorAll(".item");

// console.log(childs);
// console.log(childs2);

// ***** Down to top traversal *****

// const child = document.querySelector(".item");
// const parent = child.parentElement;
// const grandpa = child.closest(".box");
// console.log(parent);
// console.log(grandpa);

// ***** Sibling traversal *****

// const child = document.querySelector(".item");
// const childNext = child.nextElementSibling;
// const childPrev = childNext.previousElementSibling;

// childNext.style.color = "red";
// childPrev.style.color = "red";

// ***** Manipulation *****

// const newElement = document.createElement("div");

// newElement.className = "red";

// newElement.setAttribute("id", "red");

// console.log(newElement);

// newElement.innerHTML = "Hello, Guys";

// const container = document.querySelector(".todo-list");
// const firstElement = document.querySelector("#heading");

// // container.insertBefore(newElement, firstElement)
// container.appendChild(newElement);

// ***** Listener *****

const title = document.querySelector(".to-do");
title.addEventListener("mouseenter", (event) => {
    console.log(event);
});

// some most used events
// click
// input
// submit
