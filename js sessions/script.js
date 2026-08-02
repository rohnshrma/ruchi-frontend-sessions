// output

// console.log("hello world")

// alert("hello world")
// window.alert("hello world")


// input 

// prompt("Enter your name " , "john doe")


// variables : 
// empty containers used to store data,
// having a label on them known as "variable name" or "identifier"


// how to create a variable ?
// "var" / let / const keywords are used to create a variable followed by the variable name

var age; // declaration 

// var => declaration keyword
// age => variable name


age = 34; // initialization
// age => variable name
// "=" => assignment operator
// 34  => value
// ";" => end of statement



var age = 34;


// var : 1.redeclarations allowed within same scope
//       2. hoisted and initialized as undefined
//       3. var at global scope attached to window object (browser env)

// let / const : hoisted but not initialized
// accessing before declaration throws a ReferenceError (this gap is called 'Temporal dead zone')
// do not attach to window



// let : redeclaration is not allowed within same scope
// const : 1. needs to be initialized   
//         2. redeclaration is not allowed within same scope
//         3. cannot re assign a value 


// const x;



// variable naming conventions : 

// no space
// cannot start with a number but can include or end with a number
// cannot start, include or end with a special symbol except "_" and "$"
// cannot use reserved keywords as variable name , but can be used in a variable

// start variable name with a lowercase letter
//use camelCasing or snake_casing for multi word variable name





// var x = null;

// console.log(x)




// var a = 23
// var b  = a //  a copy of value of a is stored in b
// console.log(a, b)


// a = 100
// console.log(a, b)




// var marks = [12,34,2,4,23,23,4]

// var yourMarks = marks

// console.log(marks , yourMarks)

// yourMarks[1] = 100;

// console.log(marks , yourMarks)


