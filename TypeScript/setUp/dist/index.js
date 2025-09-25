let fish = {
    swim() {
        console.log("Swimming");
    },
};
let bird = {
    fly() {
        console.log("Swimming");
    },
};
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
console.log(getFood(fish));
console.log(isFish(fish));
console.log(isFish(bird));
export {};
