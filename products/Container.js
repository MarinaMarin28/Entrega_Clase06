const fs = require('fs');
const ConvertStringToObject = require('../utilities.js')

const messageError = 'An error occurred:';

class Container{
    constructor(fileName){
        this.fileName = fileName;
    }

     async write(data){
        try {
            await fs.promises.writeFile(this.fileName, data, 'utf-8');
            console.log('Correctly typed file!!!');
        } catch (error) {
            throw new Error(`${messageError} ${error}`);
        }
    }

    async getAll(){
        try{            
            const parsedContent =  await ConvertStringToObject(this.fileName);            
            return parsedContent;
           
        } catch(error) {
            throw new Error(`${messageError} ${error}`);
        }
    }

    async getById(id){
        try {
            const parsedContent =  await ConvertStringToObject(this.fileName);
            let product = parsedContent.filter(c => c.id === id)
            return product;
        } catch (error) {
            throw new Error(`${messageError} ${error}`);
        }

    }

    async deleteById(id){
        try {
            const parsedContent =  await ConvertStringToObject(this.fileName);
            let data = parsedContent.filter(c => c.id !== id)
            let dataObjectToString = JSON.stringify(data);
            await fs.promises.writeFile(this.fileName,dataObjectToString);
            console.log(`The id ${id} was successfully deleted!!!`);
        } catch (error) {
            throw new Error(`${messageError} ${error}`);
        }

    }

    async deleteAll(){
        try {
            await fs.promises.writeFile(this.fileName, '[]');
            console.log('Data successfully deleted!!!');            
        } catch (error) {
            throw new Error(`${messageError} ${error}`);
        }
    }

    async save({title,price,thumbnail}){
        try {
            let newId = 0;            
            const products =  await ConvertStringToObject(this.fileName);          
            newId = products.length + 1;
            
            const newProduct = {title:title,price: price,thumbnail:thumbnail,id:newId};
            products.push(newProduct);
            
            const newProductObjectToString = JSON.stringify(products);
            
            await this.write(newProductObjectToString);
            
            console.log(`The id ${newId} was successfully added!!!`);

        } catch (error) {
            throw new Error(`${messageError} ${error}`);
        }        
    }    
}

module.exports = Container