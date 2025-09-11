// Class, Inheritacne & Static

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    run(speed) {
        console.log(`This can run in ${speed}km/h`);
    }
}

class Model extends Car {
    constructor(brand, year, model) {
        super(brand, year);
        this.model = model;
    }

    intro(speed) {
        console.log(`My car brand is ${this.name} & model is ${this.model}`);
        this.run(speed);
    }

    get cnam() {
        return this.name;
    }

    set cnam(x) {
        this.name = x;
    }

    static hello(x) {
        console.log(`Hello, ${x.name}`);
    }
}
const audi = new Model("Toyota", 1995, "Civic");
const Toyota = new Model("Toyota", 1985, "Land Cruise");

audi.cnam = "Audi";
console.log(audi.cnam);
audi.intro(220);
Toyota.intro(200);
Model.hello(audi);
