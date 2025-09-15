const paymentSuccess = true;
const marks = 45;

// Approach 1
/*
function enroll() {
    console.log("Course enrollment is in progress...");

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (paymentSuccess) {
                resolve();
            } else {
                reject(new Error("Payment failed."));
            }
        }, 2000);
    });

    return promise;
}

function progress() {
    console.log("Course on progress....");
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (marks >= 80) {
                resolve();
            } else {
                reject(
                    new Error(
                        "You could not get enough marks to get the certificate."
                    )
                );
            }
        }, 3000);
    });

    return promise;
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
*/

// Approach 2 [Modern way]
async function enroll() {
    console.log("Course enrollment is in progress...");
    await new Promise((res) => setTimeout(res, 2000));
    if (!paymentSuccess) {
        throw new Error("Payment failed.");
    }
}

async function progress() {
    console.log("Course on progress....");
    await new Promise((res) => setTimeout(res, 3000));
    if (marks < 80) {
        throw new Error(
            "You could not get enough marks to get the certificate."
        );
    }
}

async function getCertificate() {
    console.log("Preparing your certificate");
    await new Promise((res) => setTimeout(res, 1000));
    return "Congratulations, Here is your certificate.";
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
