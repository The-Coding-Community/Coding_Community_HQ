// let cars = ["ram", "fords", "chevy", "jeep", "honda", "mercedes", "bmw", "toyota", "cadillac"]

// // Loops

// // For loop
// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i])
// }

// let number = 1

// // While
// while (number > 0.5){
//   console.log(number);
//   number = number - 1
// }

// // Do While
// do {
//   console.log("hello world")
//   number += 1
// } while (number < 15)


let myNumbers = [1,6,5,2,8] // 22

function addAll(){
let total = 0;
  for (let i = 0; i < myNumbers.length; i++){
    total = total + myNumbers[i]
    console.log(total)
  }
}
addAll();

let firstNames = ["Scott", "Barry", "John", "Susan", "Bob"]
let lastNames = ["Bonds", "Jenkins", "Lewis", "Smith", "Job"]
let currentYear = 2023;
let birthYears = [1918, 1945, 1976, 1982, 1972]
let fullNames = [];
let ages = [];

for (let i=0; i<firstNames.length; i++){
  let fullName = firstNames[i] + " " + lastNames[i]
  fullNames.push(fullName)
}
for (let i=0; i<birthYears.length; i++){
  let age = currentYear - birthYears[i]
  ages.push(age)
}
for (let i=0; i<fullNames.length; i++){
  let message = `Hello, my name is ${fullNames[i]} and I am ${ages[i]} years old`
  console.log(message)
}

