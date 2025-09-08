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

for (var i = 0; i < 3; i++) {
    ((j) => {
        setTimeout(() => console.log("C:", j), 100);
    })(i);
}
