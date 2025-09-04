const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let text = "";
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + " ";
}
console.log("Classic for loop:");
console.log(text);

const person = { fname: "John", lname: "Doe", age: 25 };
const nums = [5, 9, 7, 3, 6, 8, 1, 2];

// **********
console.log("For in loop with object:");
for (let x in person) {
    console.log(person[x]);
}

// **********
console.log("For in loop with array:");
for (let x in nums) {
    console.log(nums[x]);
}

// **********
console.log("For of loop with array:");
for (let x of nums) {
    console.log(x);
}

// **********
console.log("for Each method in array:");
nums.forEach((val, index, arr) => {
    console.log(val);
    console.log(index);
    console.log(arr);
    console.log("--------");
});
