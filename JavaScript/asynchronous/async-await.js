const paymentSuccess = true;
const marks = 45;

function enroll() {
    console.log("Course enrollment is in progress...");

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (paymentSuccess) {
                resolve();
            } else {
                reject("Payment failed.");
            }
        }, 2000);
    });

    return promise;
}

// function progress() {
//     console.log("Course on progress....");
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (marks >= 80) {
//                 resolve();
//             } else {
//                 reject(
//                     "You could not get enough marks to get the certificate."
//                 );
//             }
//         }, 3000);
//     });

//     return promise;
// }
async function progress() {
    console.log("Course on progress....");

    // Wait for 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));

    if (marks >= 80) {
        return; // resolves (undefined)
    } else {
        throw new Error(
            "You could not get enough marks to get the certificate."
        );
    }
}

function getCertificate() {
    console.log("Preparing your certificate");

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Congratulations, Here is your certificate.");
        }, 1000);
    });
    return promise;
}

async function course() {
    try {
        await enroll();
        await progress();
        const message = await getCertificate();
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

course();

// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then((msg) => console.log(msg))
//     .catch((err) => console.log(err));
