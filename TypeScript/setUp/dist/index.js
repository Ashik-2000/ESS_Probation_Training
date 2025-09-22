class User {
    name;
    email;
    _idNumber = 5;
    city = "Dhaka";
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    get getIdNumber() {
        return this._idNumber;
    }
    set setIdNumber(id) {
        if (id < 5) {
            throw new Error("Course count canot be less than 5");
        }
        this._idNumber = id;
    }
}
class FamilyUser extends User {
    relationship;
    constructor(name, email, relationship) {
        super(name, email);
        this.relationship = relationship;
    }
    details() {
        console.log(`name: ${this.name}, email: ${this.email}, ID: ${this._idNumber}, city: ${this.city}, relationship`);
    }
}
const ashik = new User("Ashik", "ashikulislamfb@gmail.com");
const rafin = new FamilyUser("Rafina", "rafin@gmail.com", "cousin");
console.log(rafin.name);
console.log(rafin.email);
console.log(rafin.city);
console.log(rafin.getIdNumber);
console.log(rafin.relationship);
export {};
