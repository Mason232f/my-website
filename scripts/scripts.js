// This is a single line comment and is ignored by the browser

/*
This is a
multi-line
comment
*/

// script.js
// Welcome to JavaScript!
console.log("JavaScript file loaded successfully!");


console.log('Hello World')       // Same as print() in python
console.warn("Be Careful")
console.error('This is an error message')

// Write a script that logs your name, age,
// and customized warning and error messages.

// arithmetic Operators
// Basic Operators: +, -, *, (Multiplication), / (division)
// Modulus Operator: a%b -> remainder after
// Exponents: a ** b -> a raised to the b power
// Increment (++) & Decrement (--): Quick +1 or -1 operations

let lives = 3
lives--
// console.log(lives)

// Concatenation and Template Literals
// Concatenation: method for combining strings by adding them

const userName = 'Sam'
const userAge = '17'
const favoriteSubject = 'Math'

console.log(Number(userAge) * .12)

// Method 1: Concatenation
// const message = 'Hello, my name is ' + userName + ' and I am ' + userAge + ' old.'
// console.log(message)

// Method 2: Template Literals
// const messageTwo = 'Hello, my name is ${userName} and I am ${userage} years old';
// console.log(messageTwo)

// Challenge day 2
const amount = prompt("Total Cost? ")
const tip = prompt("Tip Percentage? ")
const tipcalc = tip/100
const calculated = Number(amount)*(Number(tip)/100)
const finalamount = amount+calculated
console.log(Number(calculated)+ " tip +  " + amount + " = " + finalamount + " is your total cost")





