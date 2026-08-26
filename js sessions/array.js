// arrays used to store multiple values of similar or different data types

// [ ] are used to create an array where values are seperated using ","

var marks = [23, 34, 3, 45, 4, 4, 23];

// ordered, indexed , changable , allows duplicates

console.log(marks); // ordered and allows duplicates

console.log(marks[0]); // indexed
marks[0] = 1000; // changable
console.log(marks);

// add new item/s at the end of an array
marks.push(2000, 3000);
console.log(marks);

// add new item/s at the start of an array
marks.unshift(2000, 3000);
console.log(marks);

// remove last item from an array
marks.pop();
console.log(marks);

// remove first item from an array
marks.shift();
console.log(marks);

marks.splice(1, 0, 999);

console.log(marks);

marks.splice(2, 3, 90909);

console.log(marks);

marks.splice(2, 3);

console.log(marks);

var total = 0;
// for (var i = 0; i < marks.length; i += 1) {
//   total += marks[i];
// }

// console.log(total);

// array.forEach => lets you access the items (returns nothing)
// marks.forEach((item) => {
//   total += item;
// });
// console.log(total);

// create an array storing double of each number
var doubles = [];

marks.forEach((mark) => doubles.push(mark * 2));

console.log(doubles);

//  lets you access and perform action on each item
// returns a new array containing result of action
// var dbls = marks.map((mark) => mark * 2);

// console.log(dbls);

// var dv = marks.map((m) => {
//   return m % 2 == 0;
// });

// console.log(dv);

// var evens = [];
// marks.forEach((m) => {
//   if (m % 2 === 0) evens.push(m);
// });

// console.log(evens);

// return those items which passed the condition
var evens = marks.filter((m) => m % 2 == 0);

console.log(evens);

console.log(marks.sort((a, b) => a - b));
console.log(marks.sort((a, b) => b - a));

var names = ["Vivek", "Jatin", "Suresh"];
console.log(names.sort((a, b) => a.localeCompare(b)));
console.log(names.sort((a, b) => b.localeCompare(a)));
