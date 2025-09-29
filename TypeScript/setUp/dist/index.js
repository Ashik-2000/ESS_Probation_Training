function getLength(item) {
    return item.length;
}
getLength("Hello");
getLength([1, 2, 3]);
getLength({ length: 10 });
// Correct usage
let n = { length: 10 };
getLength(n);
export {};
