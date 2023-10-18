const user = {
  username: 'pappu',
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
  },
};
// user.welcomeMessage();
// user.username = 'sam';
// user.welcomeMessage();

//This console print the empty object
// console.log(this);

// function hello() {
//   let username = 'pappu';
//   console.log(this);
// }

// const show=function hello() {
//   let username = 'pappu';
//   console.log(this);
// }

// const hello = () => {
//   let username = 'pappu';
//   console.log(this.username);
// };
// hello();
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(2, 3));

//ImmediTELY iNVOKED fUNCTION Expressions (IIFEE)

// (function hello() {
//   console.log(`BD CONNECTED`);
// })();

// ((name) => {
//   console.log(`BD CONNECTEDS TWO3 ${name}`);
// })('pappu');

// How to Execute code call stack .
let val1 = 10; // global valriable
let val2 = 5;
//this is function block
function addTwoNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result = addTwoNum(val1, val2);
let result2 = addTwoNum(10, 2);
