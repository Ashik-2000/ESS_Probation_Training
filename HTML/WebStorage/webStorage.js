const x = document.getElementById("result");
function clickCounter() {
    if (typeof Storage !== "undefined") {
        if (localStorage.clickCount) {
            localStorage.clickCount = Number(localStorage.clickCount) + 1;
        } else {
            localStorage.clickCount = 1;
        }
        x.innerHTML = `You have clicked the button ${localStorage.clickCount} times`;
    } else {
        x.innerHTML = "Sorry, No web storage suppport. Update your browser.";
    }
}

function removeCounter() {
    localStorage.removeItem("clickCount");
    x.innerHTML = "Storage cleared.";
}

// For session storage. It would automatically be cleared after closing the tab;

// const x = document.getElementById("result");
// function clickCounter() {
//     if (typeof Storage !== "undefined") {
//         if (sessionStorage.clickCount) {
//             sessionStorage.clickCount = Number(sessionStorage.clickCount) + 1;
//         } else {
//             sessionStorage.clickCount = 1;
//         }
//         x.innerHTML = `You have clicked the button ${sessionStorage.clickCount} times`;
//     } else {
//         x.innerHTML = "Sorry, No web storage suppport. Update your browser.";
//     }
// }
