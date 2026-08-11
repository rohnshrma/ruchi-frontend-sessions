// do something till a condition is true

// fixed iteration : start : stop : update

for (var i = 1; i <= 10; i += 1) {
  console.log("hello ruchi");
}

var txt = "hello ruchi";
// 0
// length - 1
// increment by 1

// for (var i = 0; i < txt.length; i += 1) {
//   console.log(txt[i], i);
// }

// for (var i = 1; i <= 10; i += 1) {
//   var word = prompt("Enter a word : ");
//   for (var j = 0; j < word.length; j += 1) {
//     if (["a", "e", "i", "o", "u"].includes(word[j])) alert(word);
//   }
// }

var count = 0;

var word = "hello";

for (var i = 0; i < word.length; i += 1) {
  if (["a", "e", "i", "o", "u"].includes(word[i])) count += 1;
}

console.log(count);

var rev = "";

for (var i = word.length - 1; i >= 0; i -= 1) {
  rev += word[i];
}

if (rev === word) console.log("Palindrome");

var numCount = 0;

var num = 1234586687778;
for (; num > 0; num = Math.floor(num / 10)) {
  numCount += 1;
}

console.log(numCount);

// ==========================================================
// PRACTICE TASKS — FOR LOOP WITH STRINGS & NUMBERS
// (tasks below skip: char-by-char printing, vowel counting,
// string reversal/palindrome check, digit counting — already done above)
// Solve each one using a for loop (nested for loop where noted).
// ==========================================================

// ---- STRING TASKS ----

// 1. Count the number of consonants in a string using a for loop.

// 2. Count the number of uppercase letters in a string using a for loop.

// 3. Count the number of lowercase letters in a string using a for loop.

// 4. Given a mixed string like "abc123xyz", count how many digit
// characters it contains using a for loop.

// 5. Count the number of spaces in a sentence using a for loop.

// 6. Given a string and a target character, count how many times that
// character appears using a for loop.

// 7. Count the total number of words in a sentence using a for loop
// (count spaces, don't use .split()).

// 8. Manually convert a string to uppercase using a for loop and
// character codes (hint: charCodeAt() / String.fromCharCode()),
// without using .toUpperCase().

// 9. Manually convert a string to lowercase using a for loop and
// character codes, without using .toLowerCase().

// 10. Remove all vowels from a string and build a new string using a
// for loop (loop through, skip vowels, concatenate the rest).

// 11. Check whether a string contains ONLY digits using a for loop
// (print true/false).

// 12. Find the first non-repeating character in a string using a
// nested for loop.

// 13. Find the most frequently occurring character in a string using
// a nested for loop.

// 14. Capitalize the first letter of every word in a sentence using a
// for loop (loop through words, uppercase index 0 of each).

// 15. Find the longest word in a sentence using a for loop.

// 16. Check if a string is a pangram (contains every letter a-z at
// least once) using a for loop.

// 17. Check if two strings are anagrams of each other using a nested
// for loop (same letters, same counts, order doesn't matter).

// ---- NUMBER TASKS ----

// 18. Print the multiplication table (1 to 10) of a given number
// using a for loop.

// 19. Find the factorial of a number using a for loop.

// 20. Check whether a number is prime using a for loop.

// 21. Print all prime numbers between 1 and 100 using a nested for
// loop.

// 22. Find the sum of the digits of a number using a for loop
// (e.g. 1234 -> 1+2+3+4 = 10).

// 23. Find the sum of the first N natural numbers using a for loop.

// 24. Reverse a NUMBER (not a string) using a for loop
// (e.g. 1234 -> 4321), using only math operations (%, Math.floor).

// 25. Check if a number is an Armstrong number using a for loop
// (e.g. 153 = 1^3 + 5^3 + 3^3).

// 26. Find the largest digit in a number using a for loop.

// 27. Print the Fibonacci series up to N terms using a for loop.

// 28. Find the GCD (greatest common divisor) of two numbers using a
// for loop.

// 29. Find the sum of all numbers between two given numbers (inclusive)
// using a for loop.

// 30. List all factors of a number using a for loop.

// 31. Check whether a number is a perfect number using a for loop
// (sum of its factors, excluding itself, equals the number).

// while loop

// fixed iteration

// var i = 100;

// while (i >= 1) {
//   i -= 1;
//   console.log("i");
// }

// var email = prompt("Enter email : ");

// while (!email.includes("@") || !email.endsWith(".com") || email.length < 8) {
//   email = prompt("Enter email : ");
// }

// while (true) {
//   var email = prompt("Enter email : ");

//   if (email.includes("@") && email.endsWith(".com") && email.length >= 8) {
//     alert("correct");
//     break;
//   }
// }

// ==========================================================
// PRACTICE TASKS — WHILE LOOP
// Solve each one using a while loop only (no for loop).
// ==========================================================

// ---- FIXED ITERATION (count is known before the loop starts) ----

// 1. Print numbers from 1 to 20 using a while loop.

// 2. Print numbers from 20 down to 1 using a while loop.

// 3. Print the multiplication table (1 to 10) of a given number using
// a while loop.

// 4. Find the factorial of a number using a while loop.

// 5. Find the sum of the first N natural numbers using a while loop.

// 6. Print all even numbers between 1 and 50 using a while loop.

// 7. Given a word, print each character one by one using a while loop
// (loop from index 0 to word.length - 1).

// 8. Count the number of vowels in a string using a while loop.

// ---- NON-FIXED ITERATION (loop keeps running until a condition met,
// count is NOT known in advance — e.g. validating input, user retries) ----

// 9. Keep asking the user (prompt) to enter a number greater than 0
// using a while loop, until they actually enter one.

// 10. Keep asking the user to enter a password using a while loop,
// until the password entered is at least 6 characters long.

// 11. Starting from a given number, keep dividing it by 2 (using a
// while loop) until it becomes less than 1, and count how many steps
// it took.

// 12. Keep adding random numbers (Math.random()) using a while loop
// until their total sum crosses 100, and print how many numbers were
// added.

// 13. Number guessing game:
// - Pick a fixed target number, e.g. var target = 7;
// - Use a while loop (with true, and break) since we don't know how
//   many guesses the user will need — this is non-fixed iteration.
// - Inside the loop, prompt the user to guess a number.
// - If the guess equals target, alert "correct" and break.
// - If the guess is less than target, alert "too low" and loop again.
// - If the guess is greater than target, alert "too high" and loop
//   again.

// var secret = Math.floor(Math.random() * 100) + 1;

// var max = 10;

// var attempts = 0;

// while (attempts < max) {
//   attempts += 1;

//   var guess = parseInt(prompt("Enter guess : "));

//   if (guess < secret) {
//     alert("Too Low! Try High");
//   } else if (guess > secret) {
//     alert("Too High! Try Low");
//   } else {
//     alert("You've Guessed the correct number " + guess);
//     break;
//   }
// }

// ==========================================================
// PRACTICE TASKS — HANGMAN GAME (using loops)
// Build this step by step. Tasks only, no solutions.
// Use while/for loops + prompt/alert (or console.log) like above.
// ==========================================================

// 1. Create a list (array) of words, e.g. ["javascript", "hangman",
// "developer", "computer"], and randomly pick one word from it as the
// secretWord (hint: Math.random() + Math.floor, like the guessing
// game above).

// 2. Set a maxAttempts variable (e.g. 6) and a wrongGuesses counter
// starting at 0.

// 3. Create a "guessedLetters" array (empty at the start) to keep
// track of every letter the player has already guessed.

// 4. Create a "display" array that represents the word on screen —
// same length as secretWord, filled with "_" for every letter (use a
// for loop to build it, don't hardcode the underscores).

// 5. Write a function (or inline loop) that prints/joins the display
// array into a string like "_ _ n g _ a n" so the player can see
// current progress.

// 6. Use a while loop (non-fixed iteration, similar to the number
// guessing game) that keeps running until either:
//    - the player has revealed the whole word, OR
//    - wrongGuesses reaches maxAttempts

// 7. Inside the loop, prompt the player to guess a single letter.

// 8. Validate the guess using a loop or condition: reject inputs that
// are empty, more than one character, or not a letter — ask again
// until valid (similar style to the email validation while loop
// above).

// 9. Check if the guessed letter is already in guessedLetters (use a
// for loop to search the array). If yes, alert "Already guessed that
// letter" and skip to the next loop iteration (continue).

// 10. If the letter is new, push it into guessedLetters.

// 11. Use a for loop to check if the guessed letter exists anywhere
// in secretWord. If it exists, loop through secretWord and update
// every matching position in the display array with that letter
// (don't just replace the first match — handle repeated letters).

// 12. If the guessed letter does NOT exist in secretWord, increment
// wrongGuesses by 1, and alert how many attempts are left
// (maxAttempts - wrongGuesses).

// 13. After each guess, print the current display progress (reuse
// task 5's logic) so the player can track the word so far.

// 14. After each guess, check (using a loop, e.g. .includes() is not
// allowed — compare display array against secretWord character by
// character) whether the display array no longer contains any "_".
// If true, this means the player has won — break out of the loop and
// alert "You win! The word was " + secretWord.

// 15. If wrongGuesses reaches maxAttempts, break out of the loop and
// alert "You lose! The word was " + secretWord.

// 16. (Stretch) Keep a "wrong guesses" array too (separate from
// guessedLetters) and print it alongside the display so the player
// can see which letters they've already gotten wrong.

// 17. (Stretch) Draw a simple text-based hangman stage using a for
// loop or a switch/if-else based on wrongGuesses count (e.g. print
// more parts of a stick figure as wrongGuesses increases).

// 18. (Stretch) After the game ends (win or lose), ask the player
// (prompt) if they want to play again; if yes, reset all counters
// and arrays and restart the whole game loop from task 6.

// for (var i = 1; i <= 5; i++) {
//   var row = "";
//   for (var j = 1; j <= i; j++) {
//     row += i;
//   }
//   console.log(row);
// }

let words = ["apple", "banana", "orange", "pineapple"];
let word = words[Math.floor(Math.random() * 3) + 1];
let maxGuess = 6;
let wrongGuess = 0;

let guessedLetters = []; // tried letters both correct/incorrect

let display = [];

for (let i = 0; i <= word.length; i++) {
  display.push("_");
}

while (wrongGuess < maxGuess || display.includes("_")) {
  alert(`Word : ${display.join(" ")}\n
        Guessed Letters : ${guessedLetters.join(", ")}\n
        Attempts Remaining : ${maxGuess - wrongGuess}`);

  let guess = prompt("Guess any alphabet: ").toLowerCase();

  if (guess.length != 1) {
    continue;
  }

  if (guessedLetters.includes(guess)) {
    continue;
  }

  guessedLetters.push(guess);

  if (word.includes(guess)) {
    for (var i = 0; i < word.length; i += 1) {
      if (word[i] === guess) {
        display[i] = guess;
      }
    }
    alert("Right Guess");
    alert(`Word : ${display.join(" ")}`);
  } else {
    wrongGuess += 1;
    alert("Wrong Guess : -1");
  }
}
