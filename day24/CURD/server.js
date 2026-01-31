const fs = require('fs');
function createFile() {
    fs.writeFileSync('Data.txt', 'Hello From server');
    console.log("File is Created")
}

function readFile() {
    let Data = fs.readFileSync('Data.txt','utf-8');
    console.log(Data)
}
function updateFile() {
    fs.appendFileSync('Data.txt', 'Hi novians This is server');
    console.log("File is updated")
}

function deleteFunction() {
    fs.unlinkSync('Data.txt');
}
deleteFunction();