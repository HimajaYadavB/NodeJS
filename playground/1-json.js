const fs = require('fs')

//challenge
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data);

data.name = "Himaja"
data.age=22

console.log(data)
const updatedDate = JSON.stringify(data)
fs.writeFileSync('1-json.json',updatedDate)

// const book = {
//     title:'title1',
//     author: 'author1'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON["title"])
// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();

// const data = JSON.parse(dataJSON)
// console.log(data.title);


// console.log(bookJSON)
// // console.log(bookJSON[1])

// const parsedDate = JSON.parse(bookJSON)
// console.log(parsedDate.author);
