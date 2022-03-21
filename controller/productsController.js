const Container = require('../products/Container');
const random = require('random');
const container1 = new Container('./products.txt');

const productsAll = async () => {
    return await container1.getAll()
}

const productsRandom = async() => {
    const products = await container1.getAll();
    const max = products.length;
    const idRandom = random.int(1, max);
    return await container1.getById(idRandom);
}

module.exports = {productsAll, productsRandom};