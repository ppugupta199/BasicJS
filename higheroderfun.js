//Higher oder function:-map reduce and filter and forEach loop

const coding = ['js', 'c++', 'nodejs', 'React js', 'python', 'java'];

const values = coding.forEach((item) => {
  //   console.log(item);
  return item;
});

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8];

// const newNum = myNums.filter((num) => {
//   return num > 4;
// });
// console.log(newNum);

// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);

//map
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8];
// const double = myNums.map((num) => {
//   return num * 2;
// });
// console.log(double);

// myNums.forEach((item) => {
//   console.log(item + 10);
// });

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newnumbers = myNums
//   .map((item) => item * 10)
//   .map((item) => item + 1)
//   .filter((item) => {
//     return item > 50;
//   });
// console.log(newnumbers);

//Reduce
const myNums = [1, 2, 3, 4, 5];
const totalnums = myNums.reduce((acc, currVal) => {
  console.log(`acc : ${acc} and currval  : ${currVal}`);
  return acc + currVal;
}, 0);

console.log(totalnums);
