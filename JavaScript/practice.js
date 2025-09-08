// const num = [12, 45, 7, 89, 34, 22];
// const num2 = [3, 8, 11, 24, 15, 42];
// const num3 = [1, 2, 3, 4, 5];

// function largestNum(arr) {
//     let largest = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (largest < arr[i]) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }

// function evenNumber(arr) {
//     let even = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             even.push(arr[i]);
//         }
//     }
//     return even;
// }

// console.log(largestNum(num));
// console.log(evenNumber(num2));

// function reverseArr(arr) {
//     const reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }

// console.log(reverseArr(num3));

// function outer() {
//     var arr = [];
//     for (var i = 0; i < 3; i++) {
//         arr.push(function () {
//             return i;
//         });
//     }
//     return arr;
// }

// var funcns = outer();
// console.log(funcns[0]());
// console.log(funcns[1]());
// console.log(funcns[2]());

// let text = "Visit W3Schools";
// let n = text.match(/W3schools/i);

// console.log(n);

// let text = "Visit Microsoft!";
// let result = text.replace(/Microsoft/i, "W3Schools");

// console.log(result);

let text = "Visit W3Schools";
let n = text.search(/W3Schools/);

console.log(n);