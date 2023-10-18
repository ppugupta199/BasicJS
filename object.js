// const mySym = Symbol('keys1');
// const JsUser = {
//   name: 'pappu',
//   'full name': 'pappu kumar',
//   [mySym]: 'myKey1',
//   age: 18,
//   location: 'Daltonganj',
//   email: 'Abc@test.com',
//   isLoggedIn: false,
//   lastLoginDays: ['Monday', 'Saturday'],
// };
// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser['full name']);
// console.log(JsUser[mySym]);
// JsUser.email = 'rahul@abc.com';
// Object.freeze(JsUser);
// JsUser.email = 'gautam@abc.com';
// console.log(JsUser);

// JsUser.greeting = function () {
// console.log('Hello JS user');
// };

// JsUser.greetingTwo = function () {
// console.log(`Hello JS user,${this.name}`);
// };
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

//  singleTone object Declaration
// const tinderUser = new Object();

//Non-singletone object Declaration
const tinderUser = {};
tinderUser.id = '123ABC';
tinderUser.name = 'pappu';
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: 'abc@test.com',
  fullname: {
    userfullname: {
      firstname: {
        name: 'pappu',
        lastname: 'kumar',
      },
    },
  },
};
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: 'a', 2: 'b', 3: 'c' };
const obj2 = { 4: 'a', 5: 'b', 6: 'c' };
// const obj3 = { obj1, obj2 };

// const obj3 = Object.assign({}, obj1, obj2);

//sperad operator
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: 'h2@gmail.com',
  },
  {
    id: 1,
    email: 'h2@gmail.com',
  },
  {
    id: 1,
    email: 'h2@gmail.com',
  },
];

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
  coursename: 'js in hindi',
  price: '999',
  courseInstruction: 'pappu',
};
// console.log(course.courseInstruction);

//Destructuring in obejet
const { courseInstruction: instructor } = course;
// console.log(courseInstruction);
// console.log(instructor);

const person = { name: 'pappu', age: 30, city: 'Daltonganj' };
const { name: n, age: a } = person;
// console.log(n);
// console.log(a);
