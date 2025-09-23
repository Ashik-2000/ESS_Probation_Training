// interface Family {
//     id: number;
//     name: string;
//     area: string;
// }

// interface Message {
//     showMessage(): void;
// }

abstract class Family {
    constructor(public id: number, public name: string, public area: string) { }
}

class Cousins implements Family {
    constructor(
        public id: number,
        public name: string,
        public area: string,
        public relation: string
    ) {}
    showMessage(): void {
        console.log(
            `${this.name} is my ${this.relation} who lives in ${this.area}.`
        );
    }
}

const member1 = new Cousins(5, "Rafina", "Mirpur", "sister");

member1.showMessage();
