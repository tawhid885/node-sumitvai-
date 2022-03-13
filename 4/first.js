// console.log(global);
// const a =5;
// console.log(global.a);
// setTimeout(() => {
//     console.log("test");
// }, 1000);

// console.log(__dirname);
// console.log(__filename);

const people = require("./people");
const l = require("lodash");
console.log(l.last(people));
