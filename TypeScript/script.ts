{
    // interface obj {
    //     name: string;
    //     age: number;
    // }

    // const addID = (obj: obj) => {
    //     let id = Math.floor(Math.random() * 100);
    //     return { ...obj, id };
    // };

    // const addID = <T extends {}>(obj: T) => {
    //     let id = Math.floor(Math.random() * 100);
    //     return { ...obj, id };
    // };

    // let user = addID({
    //     name: "ashik",
    //     age: 40,
    // });

    // let user2 = addID({
    //     name: "ashik",
    //     age: 40,
    //     address: "Dhaka",
    // });

    // let user3 = addID("Anna");
    // let user4 = addID(5);
    // let user5 = addID(true);

    // console.log(user);
    // console.log(user2);
    // console.log(user3);
    // console.log(user4);
    // console.log(user5);

    // function swap<T>(a: T, b: T): [T, T] {
    //     return [b, a];
    // }

    // let [x, y] = swap("10", 20);

    // console.log(x, y);
    function combine(a: number, b: number): number;
    function combine(a: string, b: string): string;
    function combine(a: number, b: string): string;
    function combine(a: any, b: any) {
        return a + b;
    }

    console.log(typeof combine(1, "oops",));
}
