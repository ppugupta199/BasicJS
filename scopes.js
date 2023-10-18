//global scope
// let a = 10;
// const b = 20;
// var c = 30;

// Block scope: ECMA(ES6) introduced block scope let and const have block level scope
// let a = 300;
// const b = 400;
// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
//   console.log(a);
//   console.log(b);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// Gobal scope
// const globalvar = 42;
// function exampleFunction() {
//   console.log(globalvar);
// }
// exampleFunction();

// scope level and  hoisting:-nested function in this function parent to child
function one() {
  const username = 'pappu';
  function two() {
    const website = 'youtube';
    console.log(username);
  }
  //   console.log(website);
  //   two();
}
// one();

if (true) {
  const username = 'pappu';
  if (username === 'pappu') {
    const website = ' youtube ';
    // console.log(username + website);
  }
  //   console.log(website);
}
// console.log(username);
console.log(addone(5));
function addone(num) {
  return num + 1;
}

console.log(addTwo(6));
const addTwo = function (num) {
  return num + 2;
};
