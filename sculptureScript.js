const sculptureList = require("./data.js"); // import data.js

//const element = sculptureList[1] // <---- comment out this line in your solution!
const sculptureListLengths = [];

for (let i = 0; i < sculptureList.length; i++) {
  let dummyobject = {};
  for (const key in sculptureList[i]) {
    dummyobject[key] = sculptureList[i][key].length;
  }
  sculptureListLengths.push(dummyobject);
}

// <---- comment out this line in your solution!

// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
//for (const key in  element){
//console.log(`${key}: ${element[key].length}`)
console.log(sculptureListLengths);
