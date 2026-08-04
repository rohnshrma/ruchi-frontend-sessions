// arithemetic operators

// perform mathematical operations

console.log(10 + 3); // addition
console.log(10 - 3); // subtraction
console.log(10 * 3); // multiplication
console.log(10 / 3); // division (quotient)
console.log(10 % 3); // division (remainder)
console.log(10 ** 3); // exponentiation

// Assignment operators

var a = 10;
console.log((a += 10));
console.log(a);
console.log((a -= 10));
console.log(a);
console.log((a *= 10));
console.log(a);
console.log((a /= 10));
console.log(a);
console.log((a **= 10));
console.log(a);
console.log((a %= 10));
console.log(a);

//increment / decrement
var b = 4;

console.log(b++); // post-increment
console.log(b);
console.log(++b); // pre-increment

console.log(b--); // post-decrement
console.log(b);
console.log(--b); // pre-decrement

// comparison operators

console.log(12 == "12"); // loose equality (checks value only) -> true
console.log(12 === "12"); // strict equality (checks value + type) -> false
console.log(12 != "12"); // loose not equals -> false
console.log(12 !== "12"); // strict not equals -> true

console.log(12 > 4);
console.log(12 < 4);
console.log(12 >= 4);
console.log(12 <= 4);

// logical operators

console.log(true && true);
console.log(true && false);

console.log(true || true);
console.log(true || false);

console.log(!true);

// short circulting behaviour
console.log(0 && "hello");
console.log(1 && "hello");
console.log(0 || "hello");
console.log("" || "hello");

// nullish coalescing operator (??)

// return right side only if left side is null or undefined

console.log(0 ?? "default");
console.log(null ?? "default");
console.log(undefined ?? "default");
console.log("" ?? "default");

// ternary operator

// condition / valueIfTrue : valueIfFalse

var age = 20;
var result = age >= 18 ? "Adult" : "Minor";

console.log(result);

// typeof operator

console.log(typeof 10);
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof [1, 2, 3]);
console.log(typeof { a: 1 });
console.log(typeof function () {});

var x = (1 + 2, 3 + 4);

function hello(...params) {
  console.log(params);
  return [...params, 123];
}

console.log(hello(12, 24, 2));
