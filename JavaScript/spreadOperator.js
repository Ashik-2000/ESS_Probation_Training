// Proplem 1
const state = {
    user: {
        name: "Ashik",
        address: {
            city: "Dhaka",
            zip: 1234,
        },
    },
    loggedIn: true,
};

/* Using only the spread operator, create a new object where:

i) city becomes "Chittagong".

ii) Everything else remains unchanged.

iii) The original state must not be modified. */

const newState = {
    ...state,
    user: {
        ...state.user,
        address: {
            ...state.user.address,
            city: "Chittagong"
        },
    },
};

console.log(state);
console.log(newState);

// =============================================================================

// Problem 2
const products = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Phone", price: 200 },
];

/* Using spread operator, create a new array where:

i) You add a new product { id: 3, name: "Tablet", price: 300 } at the end.

ii) You also update the price of the product with id: 2 to 250.

iii) The original products array must stay unchanged. */

const newProducts = [
    ...products.map((product) =>
        product.id === 2 ? { ...product, price: 250 } : product
    ),
    { id: 3, name: "Tablet", price: 300 },
];

console.log(products);
console.log(newProducts);
