// ==========================================================
// IF...ELSE — CONDITIONAL STATEMENTS IN JAVASCRIPT
// ==========================================================

// ---- 1. Simple "if" statement ----
// Syntax: if (condition) { code to run when condition is true }
// The condition is evaluated first. If it evaluates to a truthy
// value, the block runs. If it's falsy, the block is skipped
// entirely and execution jumps to the line after the closing "}".

var age = 34; // declaring a variable to test the condition against

if (age >= 18) {
  // ">=" is a comparison operator -> "greater than or equal to"
  // age (34) >= 18 evaluates to true, so this block executes
  console.log("you're an adult");
}
// there is no "else" here, so if age was < 18, nothing would print at all

// ---- 2. if...else ----
// Syntax: if (condition) { runs if true } else { runs if false }
// Exactly ONE of the two blocks will always execute — never both,
// never neither. Useful when you have exactly two possible outcomes.

if (age >= 18) {
  console.log("you're an adult"); // runs because 34 >= 18 is true
} else {
  console.log("You're a minor"); // skipped, since the "if" already matched
}

// ---- 3. if...else if...else (multi-way branching) ----
// Used when there are MORE than 2 possible outcomes.
// JS checks each condition top to bottom and runs the FIRST one
// that is true, then skips the rest (even if they'd also be true).
// The final "else" is a catch-all/default for when none match.

var marks = 75;

if (marks > 90 && marks <= 100) {
  // "&&" = logical AND -> both sides must be true for this to run
  console.log("A");
} else if (marks > 80 && marks <= 90) {
  console.log("B");
} else if (marks > 70 && marks <= 80) {
  // marks = 75 -> 75 > 70 is true AND 75 <= 80 is true -> this block runs
  console.log("C");
} else if (marks > 60 && marks <= 70) {
  console.log("D");
} else {
  // fallback: runs only if none of the above conditions were true
  console.log("Fail");
}
// Note: once "C" matches and runs, JS does NOT check the remaining
// "else if" / "else" branches — it exits the whole chain immediately.

// ---- 4. Nested if...else (an if...else INSIDE another if...else) ----
// Useful when a decision depends on more than one condition,
// and those conditions have a natural hierarchy (check one thing,
// then within that, check another).

var isLoggedIn = true;
var isAdmin = false;

if (isLoggedIn) {
  // outer condition true -> we go inside and check a second condition
  if (isAdmin) {
    console.log("Welcome Admin");
  } else {
    // isAdmin is false -> this inner else runs
    console.log("Welcome User");
  }
} else {
  // runs only if the OUTER condition (isLoggedIn) was false;
  // in that case we never even look at isAdmin
  console.log("Please Log In");
}

// ---- 5. Truthy and Falsy values ----
// "if" doesn't require a strict boolean — it converts whatever
// value is inside the parentheses to true/false automatically.
// FALSY values in JS (there are only these): false, 0, "", null,
// undefined, NaN. EVERYTHING ELSE IS TRUTHY.

if ("") {
  // "" is an empty string -> falsy -> block never runs
  console.log("this wont run");
}

if ("hello") {
  // any non-empty string is truthy -> block runs
  console.log("this will run");
}

if (0) {
  // 0 is falsy -> block never runs
  console.log("this wont run");
}

if (-1) {
  // -1 is a non-zero number -> truthy (even negative numbers count!)
  console.log("this will run");
}

// ---- 6. Single-line if (no curly braces) ----
// If the "if" body is only ONE statement, the curly braces are
// optional — JS will treat the very next line/statement as the body.
// Use sparingly; braces are safer once you add more than one line.

if (age > 18) console.log("Adult");

// ==========================================================
// PRACTICE TASKS — IF / ELSE / ELSE IF (Real-life scenarios)
// Solve each one using if / if-else / else-if / nested-if as needed.
// Try to predict the output before running the code.
// ==========================================================

// 1. Water state
// Given a temperature in Celsius, print "Ice" if <= 0, "Water" if
// between 0 and 100, and "Steam" if >= 100.

// 2. Traffic light
// Given a string signal ("red", "yellow", "green"), print what a
// driver should do: "Stop", "Get Ready", or "Go".

// 3. Voting eligibility
// Given a person's age, print "Eligible to vote" if 18 or above,
// otherwise print "Not eligible to vote".

// 4. Even or odd
// Given a number, print "Even" or "Odd" using the % (modulus) operator.

// 5. Largest of two numbers
// Given two numbers, print which one is larger, or "Both are equal".

// 6. Largest of three numbers
// Given three numbers a, b, c, print the largest one using nested if.

// 7. Login system
// Given a username and password, check them against fixed correct
// values ("admin" / "1234"). Print "Login Successful" or "Invalid Credentials".

// 8. ATM cash withdrawal
// Given an accountBalance and a withdrawAmount, print "Withdrawal
// Successful" if the balance is enough, otherwise "Insufficient Balance".

// 9. Ticket pricing by age
// Children (<12): "Free ticket", Teens (12-17): "Half price",
// Adults (18-59): "Full price", Seniors (60+): "Discounted price".

// 10. BMI calculator category
// Given weight(kg) and height(m), compute bmi = weight / (height*height).
// Print "Underweight" (<18.5), "Normal" (18.5-24.9), "Overweight" (25-29.9),
// "Obese" (30+).

// 11. Grading system (using else-if chain)
// Given marks out of 100, print grade: A (90+), B (75-89), C (60-74),
// D (40-59), Fail (below 40).

// 12. Leap year checker
// Given a year, print "Leap Year" if divisible by 4 AND (not divisible
// by 100 OR divisible by 400), else "Not a Leap Year".

// 13. Weekday or weekend
// Given a day name as a string, print "Weekend" for Saturday/Sunday,
// otherwise print "Weekday".

// 14. Electricity bill calculator
// Given unitsConsumed, print the bill:
// <=100 units: Rs 5/unit, 101-200: Rs 7/unit, >200: Rs 10/unit.

// 15. Shipping cost calculator
// Given cartTotal, print "Free Shipping" if total >= 500,
// otherwise print "Shipping charge: Rs 50".

// 16. Discount coupon system
// Given cartTotal and a couponCode ("SAVE10", "SAVE20", or anything else),
// print the discount percentage applied, or "Invalid Coupon".

// 17. Number sign checker
// Given a number, print "Positive", "Negative", or "Zero".

// 18. Vowel or consonant
// Given a single character, print "Vowel" if it's a/e/i/o/u
// (uppercase or lowercase), otherwise "Consonant".

// 19. Simple calculator
// Given two numbers and an operator string ("+", "-", "*", "/"),
// print the result using if-else if for each operator.

// 20. Password strength checker
// Given a password string, print "Weak" if length < 6, "Medium" if
// 6-9, "Strong" if 10 or more characters.

// 21. Movie ticket booking (age + student discount)
// Given age and isStudent (boolean): if age < 5 -> "Free",
// else if isStudent -> "Student Discount", else -> "Full Price".

// 22. Restaurant bill with tip
// Given billAmount, if billAmount > 1000 apply 10% tip, else apply 5% tip.
// Print the final amount (bill + tip).

// 23. Exam pass/fail with attendance rule
// Given marks and attendancePercent: if attendance < 75, print
// "Not eligible (low attendance)" regardless of marks. Otherwise,
// check marks >= 40 for "Pass" or "Fail".

// 24. Online shopping delivery estimate
// Given a pincode's distance in km: <=10 -> "Same day delivery",
// <=50 -> "1-2 days", <=200 -> "3-5 days", else -> "1 week+".

// 25. Weather-based clothing suggestion
// Given temperature: <10 -> "Wear a heavy jacket", 10-20 -> "Wear a light
// jacket", 21-30 -> "T-shirt is fine", >30 -> "Stay hydrated, wear light clothes".

// 26. Loan eligibility checker
// Given monthlyIncome and creditScore: if income >= 30000 AND
// creditScore >= 700 -> "Loan Approved", else -> "Loan Rejected".

// 27. Seat availability on a bus/flight
// Given totalSeats and bookedSeats: if bookedSeats >= totalSeats,
// print "Sold Out", else print remaining seats available.

// 28. Food delivery order minimum
// Given orderAmount: if < 200, print "Add more items, minimum order
// is Rs 200", else print "Order placed successfully".

// 29. Gym membership plan suggestor
// Given a person's goal string ("weight loss", "muscle gain",
// "general fitness"), suggest a plan name for each using else-if.

// 30. Age category (child/teen/adult/senior) using nested if
// First check if age is valid (>0 and <120). If valid, use nested/else-if
// to print "Child" (<13), "Teen" (13-19), "Adult" (20-59), "Senior" (60+).
// If invalid, print "Invalid age entered".

// 31. Email validation (very basic)
// Given an email string, check if it includes "@" and "." using
// .includes(). Print "Valid email format" or "Invalid email format".

// 32. Cab fare estimator
// Given distanceInKm: first 5km flat Rs 100, each additional km
// costs Rs 15 extra (use if to check distance <=5 vs greater).

// 33. Class attendance percentage warning
// Given attendancePercent: <50 -> "Danger zone", 50-74 -> "Warning",
// 75-100 -> "Good standing".

// 34. Number divisibility checker (FizzBuzz style, single number)
// Given a number: if divisible by both 3 and 5 print "FizzBuzz",
// else if divisible by 3 print "Fizz", else if divisible by 5 print
// "Buzz", else print the number itself.

// 35. Movie content rating checker
// Given viewerAge and movieRating ("U", "U/A", "A"):
// "A" rated movies need age >= 18, "U/A" needs age >= 12 (or parental
// guidance note), "U" is for everyone. Print whether they can watch.

// 36. Flight check-in baggage fee
// Given baggageWeightKg: <=15kg -> "No extra charge", 15-25kg ->
// "Extra charge: Rs 500", above 25kg -> "Extra charge: Rs 1500".

// 37. OTP verification simulation
// Given enteredOtp and actualOtp (numbers), print "OTP Verified" if
// they match, else "Incorrect OTP, please try again".

// 38. Subscription plan renewal reminder
// Given daysLeftToExpire: <=0 -> "Subscription expired", <=7 ->
// "Renew soon, expiring this week", else -> "Subscription active".

// 39. Temperature-based fan/AC controller (nested if)
// Given roomTemperature and isPersonPresent (boolean): if no person
// is present, print "All appliances OFF". If present, use nested if
// to print "AC ON" (>28), "Fan ON" (22-28), or "Appliances OFF" (<22).

// 40. Insurance premium calculator
// Given age and smoker (boolean): base premium is 5000.
// Add 2000 if age > 40. Add 3000 if smoker is true.
// Print the final calculated premium.

var good_salary = true;
var good_credit_score = true;

if (good_credit_score) {
  if (good_salary) {
    console.log("Loan approved");
  } else {
    console.log("Insufficient Salary");
  }
} else {
  console.log("Ineligible");
}
