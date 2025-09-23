// interface Family {
//     id: number;
//     name: string;
//     area: string;
// }
// interface Message {
//     showMessage(): void;
// }
class Family {
    id;
    name;
    area;
    constructor(id, name, area) {
        this.id = id;
        this.name = name;
        this.area = area;
    }
}
class Cousins {
    id;
    name;
    area;
    relation;
    constructor(id, name, area, relation) {
        this.id = id;
        this.name = name;
        this.area = area;
        this.relation = relation;
    }
    showMessage() {
        console.log(`${this.name} is my ${this.relation} who lives in ${this.area}.`);
    }
}
const member1 = new Cousins(5, "Rafina", "Mirpur", "sister");
member1.showMessage();
export {};
