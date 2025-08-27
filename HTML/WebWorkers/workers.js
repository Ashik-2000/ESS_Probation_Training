self.onmessage = function (msg) {
    let total = 0;
    for (let i = 0; i < 10000000000; i++) {
        total += 1;
    }
    self.postMessage(total);
};
