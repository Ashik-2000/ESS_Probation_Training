//***** Basic example *****

// function display(x, y, result) {
//     console.log(`The addtion of ${x} & ${y} is: ${result}`);
// }

// function calculate(x, y, fun) {
//     const result = x + y;
//     fun(x, y, result);
// }

// calculate(10, 5, (x, y, result) => {
//     console.log(`The addtion of ${x} & ${y} is: ${result}`);
// });


// ***** Advanced example *****

// A custom map function that works like the famous map method of array.

function myMap(arr, callBack) {
    if (!Array.isArray(arr)) {
        console.log("ERROR!! first argument has to be an array");
        return;
    } else if (typeof callBack !== "function") {
        console.log("ERROR!! second argument has to be a function");
    }
    const newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        newArr.push(callBack(arr[i], i, arr));
    }
    return newArr;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNums = myMap(nums, (item) => {
    return item * item;
});

console.log(`[${nums}] doing sqaure operation on each value of this array`);
console.log(newNums);


// Here, myApp is the main function which takes a function as a parameter.and takes each elements of that array and calls the callBack fucntion for it.Array
// and the function (item) => { return item * item } is an arrow function that hasbeen sent as a callBack fucntion to myMap, myMap will automitically 
// call it from inside and we don't have to explicitely call it ouself.