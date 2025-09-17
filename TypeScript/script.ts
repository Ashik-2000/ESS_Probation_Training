let value: number | string;
value = 50;
value = "ashik";

type User = {
    name: string;
    id: number;
};

type Admin = {
    username: string;
    id: number;
};

let ashik: User | Admin;
ashik = {
    username: "ashik",
    id: 54,
};

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}

getDbId("5");

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number)[] = [1, "2", 3];

export {};
