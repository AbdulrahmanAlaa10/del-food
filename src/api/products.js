import Food from "./products.json";

export function getAll(){
    return Promise.resolve(Food);
}

export function getById(id) {
    const foood =  Food.find(item => item.id === id);

    return Promise.resolve(foood);
}

export default {
    getAll,
    getById
}