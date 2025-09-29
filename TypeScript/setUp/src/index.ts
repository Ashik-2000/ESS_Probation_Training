interface Length {
    length: number;
}

function getLength<T extends Length>(item: T): number {
    return item.length;
}

getLength("Hello");
getLength([1, 2, 3]);
getLength({ length: 10 });

// Correct usage
let n: Length = { length: 10 };
getLength(n);
