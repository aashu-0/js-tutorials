// primitive datatypes => call by value

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt


// Javascript is a dynamically typed language 
// because data type will automatically assigned at the time of compilation or code execution.

const score = 100
const scoreValue = 100.3
console.log(typeof scoreValue)

const isLoggedIn = false
const outsideTemp = null
console.log(typeof outsideTemp);

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(anotherId)

// id and anotherId are different 
console.log(id == anotherId)

const bigNumber = 12345678998456678n
console.log(typeof bigNumber);


// non-primitive or (reference) datatypes

// Array, Objects, Functions


const heros = ["spider-man", "captain-america", "thor","bat-man"]
let myObj= {
    name: "aashutosh",
    age: "18"

}

const myFunction = function(){
    console.log("Hello world!")
}
console.log(typeof myFunction)  // datatype of function is called as function object.