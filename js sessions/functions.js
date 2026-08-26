// functions are reusable block of code ,
//  where the code inside of a function runs only when called

// function declaration

// function addition(a, b) {
//   console.log(a + b);
// }

// addition(12, 34);

// the primary purpose of return keyword is to terminate the function
// secondrily pass something out of function

// function addition(a, b) {
//   return a + b;
// }

// console.log(addition(12, 34));
// var x = addition(12, 34);

// console.log(x);

// function expressions

// arrow and anonymous functions
// 1. can be assigned as a value to a variable
// 2. use as a callback function
// 3. use as a value of a key in an object

// anonymous (no name)

// var bmiCalculator = function (weight, height) {
//   return weight / height ** 2;
// };

// var res = bmiCalculator(190, 1.8);
// console.log(res);

// // arrow

// var bmiCalc = (weight, height) => weight / height ** 2;

// var bmi = bmiCalc(100, 1.8);
// console.log(bmi);

// callback
// when a function is passed into another function as a parameter , the passed function is considered a callback function

// function calcAge(yob) {
//   return new Date().getFullYear() - yob;
// }

function lifeSpan(averageAge, yob, ageFn) {
  const age = ageFn(yob);
  var years_left = averageAge - age;
  console.log("Years left : ", years_left);
}

lifeSpan(90, 1996, (yob) => {
  return new Date().getFullYear() - yob;
});
