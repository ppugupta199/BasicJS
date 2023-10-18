const coding = ['js', 'ruby', 'java', 'c++', 'python'];

// coding.forEach(function (val) {
//   console.log(val);
// });

// coding.forEach((item) => {
//   console.log(item);
// });

// coding.forEach((val1) => {
//   console.log(val1);
// });

coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

const mycoding = [
  {
    languagename: 'javascript',
    languagefile: 'js',
  },
  {
    languagename: 'c++',
    languagefile: 'c++',
  },
  {
    languagename: 'python',
    languagefile: 'py',
  },
];

mycoding.forEach((item) => {
  console.log(item.languagename);
});
