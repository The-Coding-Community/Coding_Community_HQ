console.log("Hello")

// Numbers
let Answer = 2+5
console.log(Answer)
Answer = 5-2
console.log(Answer)
Answer = 2*5
console.log(Answer)
Answer = 10/2
console.log(Answer)
Answer = 3**4
console.log(Answer)
Answer = Answer++;
console.log(Answer)
Answer = Answer--;
console.log(Answer)
Answer = 91%2;
console.log(Answer)
Answer = 2+6*2**2;
console.log(Answer)

// Strings
let words = 'I\'m a person with words'
console.log(words)
let phrase = `${words} that can talk`
console.log(phrase)
phrase = words + " that can speak"
console.log(phrase)
let myPhrase = "I live on \n 12th street"
let hisNumber = 12
console.log(hisNumber + 6)
hisNumber = hisNumber.toString()
console.log(hisNumber + 6)
number = myPhrase + hisNumber + "th street"
console.log(number)
myPhrase.toUpperCase

// Comparisons
let solution = 5 < 5
solution = 5 > 5
solution = 5 <= 5
solution = 5 >= 5
solution = 5 == 5
solution = 5!=6
let solutionString1 = "big"
let solutionString2 = "bug"
solution = solutionString1 < solutionString2
console.log(solution)

// Conditionals - If, Else

if (solution == true){
  console.log("correct")
}
else if (solution == false){
  console.log("incorrect")
}
else {
  console.log("incorrect input")
}

//Logical Operators - And Or

if (solution == false || solutionString1 == "big"){
  console.log("hello")
}
if (solution == false && solutionString1 == "big"){
  console.log("hello")
}

let one = 1
if (!!one === true){
  console.log("it worked")
}

console.log(0 && "hello")
console.log(1 || true || "hello")

// a = one plus eight
// b = 22 times three
// c = the *remainder* of 5/4
// d = the variable 'a' minus 17
// e = the sum of the previous four variables

let a = 1+8 // 9
console.log(a)
let b = 22*3 // 66 
console.log(b)
let c = 5%4 // 1
console.log(c)
let d = a - 17 // -8
console.log(d)
let e = a + b + c + d
console.log(e)

// 2. Greeting Message
// Must include:
// First name
// Last name
// Current year
// Birth year
// Full name = first name + last name
// Age = current year - birth year

// Create a message that says something like “Hello, my name is Craig Lindstrom and I am 15 years old (won’t work because I haven’t had my birthday yet, but you get the idea)

// Beyond that we’ll just go over some of the basics within chrome dev tools. 

let firstName = "Scott";
let lastName = "Roy";
let currentYear = 2023;
let birthYear = 1996;
let fullName = firstName + " " + lastName;
let age = currentYear - birthYear;

let message = `Hello, my name is ${fullName} and I am ${age} years old`;
console.log(message)