const worker = new Worker("workers.js");

const totalButton = document.getElementById("total");
const bgButton = document.getElementById("bg");
const totalBox = document.getElementById("result");

totalButton.addEventListener("click", () => {
    worker.postMessage("Start counting.");
    totalBox.innerHTML = "Worker is counting...";
});

worker.onmessage = function (msg) {
    totalBox.innerHTML = `Total count ${msg.data}`;
};

bgButton.addEventListener("click", () => {
    if (document.body.style.background !== "green") {
        document.body.style.background = "green";
    } else {
        document.body.style.background = "red";
    }
});
