//Higher oder function and call function
//promiss closure array object loops  map filter reduce  array Destruturing speard  rest truthy and falsy value callby applied

//1) first class  Citizen function in javascript:-
//strored in variables:-
// const greet = function (name) {
//   console.log(`hello ${name}`);
// };
// greet('pappu');

//functions can be assigned as properties of objects.
// const person = {
//   name: 'pappu',
//   age: function (age) {
//     console.log(`I am  ${this.name} `);
//   },
// };

// person.age('10');

//function passed as arguments to other function:-
// function addOperation(x, number) {
//   return number(x);
// }
// function adding(x) {
//   return x + 10;
// }
// console.log(addOperation(2, adding));

//returned from Function:- function retrun as  value from other function closure and higher oder function

// function multiply(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }

// const double = multiply(5);
// console.log(double(2));

//2)Higher oder in javascript:-higher oder function used in build in function

// map filter,reduce

// const number = [1, 2, 3, 4, 5];
// const doubleNumber = number.map(function (number) {
//   return number * 2;
// });
// console.log(doubleNumber);
//simple array
// const array = [1, 2, 3, 4, 5];
// const newArray = array.map((x) => x * 2);
// console.log(newArray);
// const array = [1, 2, 3, 4, 5];
// const newArray = array.map(function (index, number) {
//   return { index, number };
// });
// console.log(newArray);
// const array = [1, 2, 3, 4, 5];
// const newArray = array.map((number, index) => {
//   return { number, index };
// });
// console.log(newArray);

//filter is a build in array  the array from the given condition
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArray = array.filter((number, index) => {
//   return number % 2 == 0;
// });
// console.log(newArray);

// 1)Filtering objects based on a property value:-
// const users = [
//   { name: 'pappu', age: 20 },
//   { name: 'pappu', age: 25 },
//   { name: 'pappu', age: 30 },
// ];
// const adults = users.filter((item) => item.age >= 20);
// console.log(adults);

// 2)Filtering elements containing a specific substring:
// const fruits = ['apple', 'banana', 'cherry', 'date'];
// const filterFruits = fruits.filter((fruit) => fruit.includes('a'));
// console.log(filterFruits);

// const context = {
//   minAge: 25,
// };

// function filterByAge(user) {
//   return user.age >= this.minAge;
// }

// const users = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 35 },
// ];

// const filteredUsers = users.filter(filterByAge, context);

// console.log(filteredUsers);

// Reduce function:-  reduce function reduce the array toa single value.

// const number = [1, 2, 3, 4, 5];
// const sum = number.reduce((accumulator, currentValue, currentIndex) => {
//   console.log(`At index value ${currentIndex} ${currentValue}`);
//   return accumulator + currentValue;
// }, 0);
// console.log(`final result ${sum}`);

// const Alphabet = ['a', 'p', 'p', 'l', 'e'];
// const makestring = Alphabet.reduce((acc, currValue) => {
//   return acc + currValue;
// });
// console.log(makestring);

//Loops in javascript:-

//for loop:-
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
//while Loop:-
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// do-while loop:-
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// for in loop

// const person = {
//   name: 'pappu',
//   age: 30,
//   profession: 'Engineer',
// };
// for (let key in person) {
//   console.log(key + ' ' + person[key]);
// }

// for of loop:-

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let number of numbers) {
//   console.log(number);
// }

// for-each loop:-
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// numbers.forEach((number) => {
//   console.log(number);
// });

// JavaScript Promises:-
// async function getAllUsers() {
//   try {
//     const response = await fetch('https://dummyjson.com/users');

//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// getAllUsers();

// fetch('https://dummyjson.com/users')
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));




// function prom(completed) {
//   return new Promise(function (resolved, rejected) {
//     console.log('fetching data, please wait');

//     setTimeout(() => {
//       if (completed) {
//         resolved('I am successful');
//       } else {
//         rejected('I am Rejection');
//       }
//     }, 3000);
//   });
// }
// let onfulfilment = (result) => {
//   console.log(result);
// };
// let onRejection = (result) => {
//   console.log(result);
// };
// prom(true).then(onfulfilment).catch(onRejection);
