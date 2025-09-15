// Promise.all(), Promise.allSettled(), Promise.any() Promise.race()

function getSaquare(n, delay) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n % 2 === 0) resolve(n * n);
            else reject("The number is odd");
        }, delay);
    });
    return promise;
}

async function all() {
    try {
        const all = await Promise.all([
            getSaquare(2, 1000),
            getSaquare(5, 1000),
        ]); // If at least one gets rejected then whole response gets rejected.
        console.log(all);
    } catch (error) {
        console.log(error);
    }
    console.log("-------------------------------------");
}
async function allSettled() {
    try {
        const allSettled = await Promise.allSettled([
            getSaquare(2, 1500),
            getSaquare(3, 1000),
        ]); // Response always comes with an array of objects. {status: 'resolve', value: } or {status: 'reject', reason: }
        console.log(allSettled);
    } catch (error) {
        console.log(error);
    }
    console.log("-------------------------------------");
}
async function race() {
    try {
        const result = await Promise.race([
            getSaquare(2, 1500),
            getSaquare(3, 1000),
        ]); // .Shows whichever one get's completed first wether resolve or reject.
        console.log(result);
    } catch (error) {
        console.log(error);
    }
    console.log("-------------------------------------");
}
async function any() {
    try {
        const any = await Promise.any([
            getSaquare(2, 1500),
            getSaquare(3, 1000),
        ]); // .Shows the one get's completed first only when if its resolved.
        console.log(any);
    } catch (error) {
        console.log(error);
    }
    console.log("-------------------------------------");
}

all();
allSettled();
race();
any();
