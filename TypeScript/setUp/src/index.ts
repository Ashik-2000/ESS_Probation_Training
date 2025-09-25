interface Assignment {
    studentID: string;
    title: string;
    grade: number;
    idPass?: boolean;
}

type Shapes = "circle" | "triangle" | "square" | "Rect" | "Eclips";

interface ShapeProperties {
    radius?: number;
    sideLength?: number;
    base?: number;
    height?: number;
}

const updateAssignment = (
    assign: Assignment,
    propsToUpdate: Partial<Assignment>
) => {
    return { ...assign, ...propsToUpdate };
};

const assign1: Readonly<Assignment> = {
    studentID: "ab30",
    title: "Mid Term",
    grade: 45,
};

console.log(updateAssignment(assign1, { idPass: false }));

const shapeList: Record<Shapes, ShapeProperties> = {
    circle: { radius: 5 },
    Eclips: { radius: 5 },
    square: { sideLength: 5 },
    Rect: { sideLength: 5 },
    triangle: { base: 5, height: 10 },
};

interface ShapeList {
    circle: { radius: 5 };
    Eclips: { radius: 5 };
    square: { sideLength: 5 }; 
    Rect: { sideLength: 5 };
    triangle: { base: 5; height: 10 };
}

type circularValue = Pick<ShapeList, "circle" | "Rect">;
type circularShapes = Extract<Shapes, "circle" | "Eclips">
type squareValue = Omit<ShapeList, "circle" | "Rect">;
type sqaureShapes = Exclude<Shapes, "circle" | "Eclips">
type namesOnly = NonNullable<Shapes>