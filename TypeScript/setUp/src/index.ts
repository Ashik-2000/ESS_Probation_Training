type Fish = { swim: () => void };
type Bird = { fly: () => void };

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

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    } else {
        pet;
        return "bird food";
    }
}

console.log(getFood(fish));

console.log(isFish(fish));
console.log(isFish(bird));
