const newElement = document.createElement("div");

newElement.className = "red";

newElement.setAttribute("id", "red");

console.log(newElement);

newElement.innerHTML = "Hello, Guys";

const container = document.querySelector(".todo-list");
const firstElement = document.querySelector("#heading");

// container.insertBefore(newElement, firstElement)
container.appendChild(newElement)