function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "triangle":
            return 0.5 * shape.base * shape.height;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
// interface Shape {
//     kind: "circle" | "square" | "triangle";
//     radius?: number;
//     sideLength?: number;
//     base?: number;
//     height?: number;
// }
// function getArea(shape: Shape) {
//     switch (shape.kind) {
//         case "circle":
//             return Math.PI * shape.radius ** 2;
//         case "square":
//             return shape.sideLength ** 2;
//         case "triangle":
//             return 0.5 * shape.base * shape.height;
//         default:
//             const _exhaustiveCheck: never = shape;
//             return _exhaustiveCheck;
//     }
// }
console.log(getArea({
    kind: "square",
    sideLength: 5,
}));
export {};
