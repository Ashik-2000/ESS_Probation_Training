// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function stepOne() {
//     console.log("Step 1 started");
//     await delay(1000);
//     console.log("Step 1 completed");
//     return "Data from step 1";
// }

// async function stepTwo(data) {
//     console.log("Step 2 started with:", data);
//     await delay(1500);

//     if (Math.random() > 0.5) {
//         throw new Error("Random failure at step 2");
//     }

//     console.log("Step 2 completed");
//     return "Data from step 2";
// }

// async function stepThree(data) {
//     console.log("Step 3 started with:", data);
//     await delay(500);
//     console.log("Step 3 completed");
//     return "🎉 Final Result";
// }

// async function main() {
//     try {
//         const one = await stepOne();
//         const two = await stepTwo(one);
//         const three = await stepThree(two);
//         console.log("Main completed with:", three);
//     } catch (error) {
//         console.log("Caught error:", error.message);
//     }
// }

// main();

