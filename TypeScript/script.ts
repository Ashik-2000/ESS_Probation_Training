type User = {
    readonly id: number,
    name: string,
    email: string,
    isActive: boolean,
    address?: string
};

const myUser: User = {
    id: 155,
    name: "Ashik",
    email: "ashik@gmail.com",
    isActive: false
}



export {};
