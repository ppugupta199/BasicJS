//create the function:-
function sayMyNumber() {
  console.log('p');
  console.log('A');
  console.log('p');
  console.log('p');
  console.log('U');
}
// sayMyNumber();
function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}
// addTwoNumber(3, 5);

function addTwoNumber(number1, number2) {
  // let result = number1 + number2;
  // console.log(result);

  return number1 + number2;
}
const result = addTwoNumber(2, 3);
// console.log('result', result);

// function loginUserMessage(username = 'sam') {
//This blockof code used if condition behave like a same
// if (username === undefined) {
//   console.log('Please Enter a Number');
//   return;
// }
//   if (!username === undefined) {
//     console.log('Please Enter a Number');
//     return;
//   }
//   return `${username} just  logged in`;
// }
// console.log(loginUserMessage('pappu'));

//using rest operator:- rest operator are used to make a bundle of parameter argument;it denoted by ... ;
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
// console.log(calculateCartPrice(200, 300, 400, 600));

const user = {
  username: 'pappu',
  price: 199,
};
function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username}  and price is ${anyobject.price}`
  );
}
// handleObject(user);
handleObject({
  username: 'sam',
  price: 222,
});

// Array
const myNewArray = [200, 300, 100, 500];
function returnSecondValue(getArray) {
  return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300]));
 