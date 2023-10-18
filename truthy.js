const userEmail = '';
if (userEmail) {
  console.log('Got user Email');
} else {
  console.log("Don't user Email");
}
//false value :- false, 0,-0,BigInt, 0n,"",null,undefined,NaN its called falsy value
//Truthy value:-"0","false"," ",[],{},function(){}

// if (userEmail.length === 0) {
//   console.log('Array is empty');
// }

// const emptyObj = {};
// if (Object.keys(Object).length === 0) {
//   console.log('Empty object');
// }

//Nullish Coalescing Operator(??):null  undefined
// let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
// val1 = null ?? 10 ?? 19;
// console.log(val1);

//Terniary Operator:-  condition?ture:false
const iceCreamPrice = 100;
iceCreamPrice >= 50 ? console.log('Less than 50') : console.log('more than 50');
