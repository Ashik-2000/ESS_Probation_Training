// Problem 1: Write a function multiply that takes any number of arguments and returns their product.
function multiply(...args) {
    let sum = args.reduce((total, value) => total * value, 1);
    console.log(sum);
}

multiply();

console.log("=====================================");

// Problem 2:
const scores = [95, 87, 76, 88, 92, 81];
// Extract the top 2 scores into variables and gather the remaining scores into another array using the rest operator.
const [top1, top2, ...rest] = scores;
console.log(top1);
console.log(top2);
console.log(rest);

console.log("=====================================");

// Problem 3:
const user = {
    id: 101,
    name: "Ashik",
    email: "ashik@example.com",
    age: 22,
    country: "Bangladesh",
    role: "Developer",
};
/* Write code that extracts id and name into separate variables, and gathers the remaining properties into a new object called extraInfo. */

const { id, name, ...extraInfo } = user;
console.log(id);
console.log(name);
console.log(extraInfo);
