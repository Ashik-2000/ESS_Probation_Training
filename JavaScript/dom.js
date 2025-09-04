const child = document.querySelector(".item");
const parent = child.parentElement;
const grandpa = child.closest(".box");
console.log(parent);
console.log(grandpa);
