
// string
// sequence of characters (alphabets, numbers, special symbols and whitespace) enclosed in single or double quotes



// note : value taken as input using the prompt function is of type string
// by default but can be changed into supported data type



// numbers of characters in a string can be extracted using the .length property of string 


// concatenation : adding two or more string together

// console.log("12" + 12)
// console.log("12" + "12")
// console.log(12 + +"12")
// console.log(12 + -"12")


// STRING LITERAL / TEMPLATE LITERAL

// STRING IS CREATED USING `` AND VALUE / VARIABLES / EXPRESSIONS ARE INJECTED IN THE ${}

// var name = prompt("Enter your name : ")
// var city = prompt("Enter your city : ")
// var age = parseInt(prompt("Enter your age: "))


// var message = `My name is ${name} and i am from ${city} and i am ${age} years old.`
// console.log(message)



var txt = "hello world"


// indexing :
// counting starting from 0 used to access character / item of a string / array

// h e l l o
// 1 2 3 4 5  : normal counting : length
// 0 1 2 3 4  : positive indexing (L -> R)
//-5-4-3-2-1  : negative indexing (R -> L)


// positive indexing

// first character is always on the 0th position
// last character is always on the str.length - 1 : th position

// negative indexing
// first character is always on the -1th position



console.log(txt[0])
console.log(txt[txt.length - 1])
console.log(txt[-1])

// methods


// return char on the position specified (positive indexing only)
 console.log(txt.charAt(1))
console.log(txt.charAt(-1))

// return char on the position specified (positive and negative indexing )
 console.log(txt.at(1))
console.log(txt.at(-1))


// console.log(txt.slice())
// console.log(txt.slice(5))
// console.log(txt.slice(0,5))



// console.log(txt.slice(-2))
// console.log(txt.substring(-2))

// console.log(txt.substring())
// console.log(txt.substring(5))
// console.log(txt.substring(0,5))




// console.log(txt.startsWith("h"))
// console.log(txt.startsWith("h", 5))
// console.log(txt.startsWith("w", 6))


// console.log(txt.endsWith("ld"))
// console.log(txt.endsWith("o", 5))


// console.log(txt.concat(" this is ", "john doe"))


console.log(txt.indexOf("o"))
console.log(txt.indexOf("o", 5))
console.log(txt.indexOf("z"))

console.log(txt.lastIndexOf("o"))
console.log(txt.lastIndexOf("o", 5))
console.log(txt.lastIndexOf("z"))


console.log(txt.includes("a"))
console.log(txt.includes("h"))
console.log(txt.includes("z"))


console.log("       hello world      ".trim())
console.log("       hello world      ".trimStart())
console.log("       hello world      ".trimEnd())

console.log(txt.replace("o","x"))
console.log(txt.replace(/o/g,"x"))

console.log(txt.padEnd(20))
console.log(txt.padEnd(20 , "#$%"))
console.log(txt.padStart(20))
console.log(txt.padStart(20 , "#$%"))

console.log(
txt.padEnd(15 , "#").padStart(19 , "*")
)

console.log(txt.toUpperCase())
console.log(txt.toLowerCase())


console.log(txt.repeat(3))

var brand = "MCDonalDS"

console.log(brand[0].toUpperCase() + brand[1].toLowerCase() +
brand[2].toUpperCase()  + brand.slice(3).toLowerCase()  );



//////////////////////////////////////////////////////////////
// PRACTICE TASKS (only topics already covered above)
//////////////////////////////////////////////////////////////

var str1 = "JavaScript is Fun"
var str2 = "   Web Development   "
var email = "john.doe@example.com"


// --- length ---

// 1. print the total number of characters in str1


// --- concatenation / template literal ---

// 2. using + concatenation, join str1 and "!!!" into one sentence
// 3. using a template literal, print "str1 has <length> characters"


// --- indexing ---

// 4. print the first character of str1 using positive indexing
// 5. print the last character of str1 using negative indexing


// --- charAt / at ---

// 6. use charAt() to print the 5th character of str1
// 7. use at() to print the last character of str1 (negative indexing)


// --- slice / substring ---

// 8. use slice() to extract "JavaScript" from str1
// 9. use substring() to extract "Fun" from str1
// 10. use slice() with a negative index to get the last 3 characters of str1


// --- startsWith / endsWith ---

// 11. check whether str1 starts with "Java"
// 12. check whether str1 ends with "Fun"


// --- concat ---

// 13. use .concat() to join str1 with " - Learn it today"


// --- indexOf / lastIndexOf / includes ---

// 14. find the first index of "a" in str1
// 15. find the last index of "a" in str1
// 16. check if str1 includes the word "Fun"
// 17. check if email includes "@"


// --- trim / trimStart / trimEnd ---

// 18. remove whitespace from both sides of str2
// 19. remove whitespace only from the start of str2
// 20. remove whitespace only from the end of str2


// --- replace ---

// 21. replace "Fun" with "Awesome" in str1
// 22. use a regex with the /g flag to replace every "a" in str1 with "@"


// --- padStart / padEnd ---

// 23. pad str1 with "*" at the end so the final length is 25
// 24. pad str1 with "0" at the start so the final length is 25


// --- toUpperCase / toLowerCase ---

// 25. print str1 fully in uppercase
// 26. print str1 fully in lowercase


// --- repeat ---

// 27. repeat the word "Fun" 4 times


//////////////////////////////////////////////////////////////
// COMBINATION TASKS (chain multiple methods together)
//////////////////////////////////////////////////////////////

// 28. from email, extract only the username part (before "@") using indexOf() + slice()

// 29. from email, extract only the domain part (after "@") using indexOf() + slice()

// 30. take str2, trim() it, then convert the result to uppercase in a single chained line

// 31. take str1, convert to lowercase, then replace all spaces with "-"
//     (hint: use replace with a regex /\s/g)

// 32. take str1, get its first letter using charAt(0)/at(0), uppercase it,
//     and combine with the rest of the string in lowercase (like the "brand" example above)

// 33. check if email startsWith the first 4 letters of itself AND includes "."
//     (combine startsWith(), slice(), and includes())

// 34. pad the word "Fun" with "-" on both sides (padStart then padEnd) so it
//     reads like "----Fun-----" with a total length of 12