function getNumber() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
                resolve(randomNumber);
            } else {
                reject("Number is smaller than 0.5");
            }
        }, 1000);
    });
    return promise;
}

// Inside the async function the codes behaves like synchronous.
// async function getAsyncAwaitResult() {
//     try {
//         console.log("Function started");
//         const result = await getNumber();
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
//     console.log("This is outside of the try/catch");
// }
// getAsyncAwaitResult();
// console.log("This is outside of the function");

function getThenCatchResult() {
    console.log("Function started");
    getNumber()
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        });
    console.log("This is outside of the then/catch");
}
getThenCatchResult();
console.log("This is outside of the function");
