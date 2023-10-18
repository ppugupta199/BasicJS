const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ['IronMen', 'Thor'];
const myarr = new Array(1, 2, 3);

//Array method
myArr.push(6);
myArr.pop();
myArr.unshift(9);
myArr.shift();
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));
// console.log(myArr);

// const newArr = myArr.join();
// console.log(myArr);
// console.log( typeof newArr);

// slice ,splice
// console.log('A ', myArr);
// const myn1 = myArr.slice(1, 3);
// console.log(myn1);
// console.log('B ', myArr);

// const myn2 = myArr.splice(1, 3);
// console.log('C ', myArr);
// console.log(myn2);
// const numbers = [1, 2, 3, 4, 5];
// const removed = numbers.splice(2, 2);

// console.log(numbers);
// console.log(removed);

//Removing Element
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);

// const newarr = arr.splice(2, 2);

// console.log(newarr);
// console.log(arr);

//Replacing Elements:
// const fruits = ['Apple', 'Banana', 'orange', 'papaya'];
// fruits.splice(1, 2, 'guava', 'Beet');
// console.log(fruits);

// Adding Elements:
// const color = ['red', 'green', 'blue'];
// color.splice(1, 0, 'purle', 'orange');
// console.log(color);

// Removing All Elements Starting from an Index:
const animals = ['Dog', 'cat', 'rabbit', 'elephant'];
const removedAll = animals.splice(2);
console.log(animals);
console.log(removedAll);

const marvels_heros = ['Ironman', 'Thor', 'Spiderman'];
const Dc_heros = ['Siperman', 'flash', 'batman'];
//push method
// marvels_heros.push(Dc_heros);
// console.log(marvels_heros);
// console.log(marvels_heros[3][1]);

// concat method

const Allheros = marvels_heros.concat(Dc_heros);
// console.log(Allheros);

//sperad operator:-
const all_new_heros = [...marvels_heros, ...Allheros];
// console.log(all_new_heros);

const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const another_new_Array = another_Array.flat(Infinity);
// console.log(another_new_Array);

// console.log(Array.isArray('pappu'));
// console.log(Array.from('pappu'));

let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1, score2, score3));

// const array = [1, 2, 3, 4, 5, 6];
// array.forEach((element, index) => {
//   console.log({ index, element });
// });

// const newArray = array.map((curr, index) => {
//   return { index, curr };
// });
// console.log(newArray);
