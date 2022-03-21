const fs = require('fs');

async function ConvertStringToObject(fileName) {
    try {
        const fileContent = await fs.promises.readFile(fileName, 'utf-8');            
        const parsedContent = JSON.parse(fileContent);
        return parsedContent;
        
    } catch (error) {
        throw new Error(`An error occurred [Utilities-ConvertStringToObject]: ${error}` );
    }    
}

async function write(fileName, data){
    try {
        await fs.promises.writeFile(this.fileName, data, 'utf-8');        
    } catch (error) {
        
    }
    
}

module.exports = ConvertStringToObject