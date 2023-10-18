//for of loop are used to find the key and value in array
//for in  loop are used to find the key and value in object
// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//   //   console.log(num);
// }

const greetings = 'Hello World';
for (const greet of greetings) {
  //   console.log(greet);
}

const map1 = new Map();

map1.set('In', 'India');
map1.set('usa', 'united state america');
map1.set('fr', 'france');
// console.log(map1);

for (const [key, value] of map1) {
  // console.log(key, ':-', value);
}

//object
// const myObj = {
//   name: 'pappu',
//   game: 'spiderman',
// };

// for (const [key, value] of myObj) {
//   console.log(key, ':-', value);
// }

const myObj = {
  js: 'javascript',
  cpp: 'c++',
  rb: 'ruby',
  swift: 'swift by apple',
};

for (const key in myObj) {
  // console.log(myObj[key]);
}

const myarr = [1, 2, 3, 4, 5];
for (const key in myarr) {
  console.log(myarr[key]);
} 


