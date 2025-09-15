const paymentSuccess = true;
const marks = 85;

function enroll(callback) {
    console.log("Course enrollment is in progress...");

    setTimeout(() => {
        if (paymentSuccess) {
            callback(); // () => progress(() => getCertificate())
        } else {
            console.log("Payment failed.");
        }
    }, 2000);
}

function progress(callback) {
    console.log("Course on progress....");

    setTimeout(() => {
        if (marks >= 80) {
            callback(); // () => getCertificate()
        } else {
            console.log(
                "You could not get enough marks to get the certificate."
            );
        }
    }, 3000);
}

function getCertificate() {
    console.log("Preparing your certificate");

    setTimeout(() => {
        console.log("Congratulations, Here is your certificate.");
    }, 1000);
}

enroll(() => progress(() => getCertificate()));
