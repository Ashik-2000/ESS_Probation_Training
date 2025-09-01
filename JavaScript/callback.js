// function display(x, y, result) {
//     console.log(`The addtion of ${x} & ${y} is: ${result}`);
// }

function calculate(x, y, fun) {
    const result = x + y;
    fun(x, y, result);
}

calculate(10, 5, (x, y, result) => {
    console.log(`The addtion of ${x} & ${y} is: ${result}`);
});