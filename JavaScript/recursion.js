function fibonacciRecursive(n) {
    function fib(num) {
        if (num <= 1) return num;
        return fib(num - 1) + fib(num - 2);
    }

    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fib(i));
    }
    console.log(result);
}

fibonacciRecursive(9);


function sumToN(n) {
    if (n === 0) return 0;
    return n + sumToN(n - 1);
}

console.log(sumToN(5));

