const updateAssignment = (assign, propsToUpdate) => {
    return { ...assign, ...propsToUpdate };
};
const assign1 = {
    studentID: "ab30",
    title: "Mid Term",
    grade: 45,
};
console.log(updateAssignment(assign1, { idPass: false }));
const shapeList = {
    circle: { radius: 5 },
    Eclips: { radius: 5 },
    square: { sideLength: 5 },
    Rect: { sideLength: 5 },
    triangle: { base: 5, height: 10 },
};
export {};
