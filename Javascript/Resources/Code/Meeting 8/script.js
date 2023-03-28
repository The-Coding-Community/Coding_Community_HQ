function myFunction(firstName, lastName){
  let fullName = firstName + " " + lastName
  console.log(fullName)
}

myFunction("Craig", "Lindstrom")

//Arrays - A group of numbers, letter, strings, etc.

let myArray = ["golden retriever", "pug", "border collie", 27, "corgi"]
console.log(myArray[2])

myArray[3] = "german shepard"
console.log(myArray)

console.log(myArray.length)
console.log(myArray[myArray.length - 1])

console.log(myArray.toString())
console.log(myArray.join("**"))

console.log(myArray.pop())
console.log(myArray.push("golden doodle"))
console.log(myArray.shift())
console.log(myArray.unshift("golden doodle"))

myArray.splice(1, 2, "dog breed x", "dog breed y", "dog breed z")
console.log(myArray.slice(0, 5))