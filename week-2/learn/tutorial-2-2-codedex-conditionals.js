// ============================================
// TUTORIAL 2-2: CODEDEX CONDITIONALS
// Student: Izzy V
// Date: 1/21/2026
// ============================================

// --------------------------------------------
// EXERCISE 11: COIN FLIP
// Simulate a coin toss using Math.random()
// Output "Heads" or "Tails"
// --------------------------------------------
let num = Math.random();

if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}



// --------------------------------------------
// EXERCISE 12: GOOD MORNING
// Check if hour < 12
// If true, print morning greeting with routines
// --------------------------------------------
let Hour = "11"

if (Hour < 12) {
  console.log("Good morning 🌞");
}



// --------------------------------------------
// EXERCISE 13: GOOD AFTERNOON
// Add else clause to Exercise 12
// If hour < 12: morning greeting
// Else: afternoon greeting
// --------------------------------------------
let hour = "17"

if (hour < 12) {
  console.log("Good morning 🌞");
} else {
  console.log("Good afternoon ☁️");
}



// --------------------------------------------
// EXERCISE 14: pH LEVELS
// Check if pH is basic, acidic, or neutral
// Use else if for multiple conditions
// --------------------------------------------
let ph = 14;

if (ph > 7) {
  console.log("Basic")
} else if (ph < 7) {
  console.log("Acidic")
} else {
  console.log("Neutral")
}



// --------------------------------------------
// EXERCISE 15: MAGIC 8 BALL
// Generate random number 0-8
// Return different responses based on number
// Format: Question / Magic 8 Ball Answer
// --------------------------------------------
const randomNumber = Math.floor(Math.random() * 9) + 1;

if (randomNumber === 1) {
  console.log("You're screwed");
} else if (randomNumber === 3) {
  console.log("Without a doubt");
} else if (randomNumber === 5) {
  console.log("My sources say no");
} else if (randomNumber === 7) {
  console.log("Yes - definitely");
} else if (randomNumber === 9) {
  console.log("Better not tell you now");
} else {
  console.log("Reply hazy, try again")
}



// --------------------------------------------
// EXERCISE 16: AIR QUALITY INDEX
// Check AQI ranges using logical operators
// 0-50: Good, 51-100: Moderate, etc.
// --------------------------------------------
let aqi = 150;

if (aqi >= 0 && aqi <= 50) {
  console.log("Good");
} else if (aqi >= 51 && aqi <= 100) {
  console.log("Moderate");
} else if (aqi >= 101 && aqi <= 150) {
  console.log("Unhealthy (Sensitive Groups)");
} else if (aqi >= 151 && aqi <= 200) {
  console.log("Unhealthy");
} else if (aqi >= 201 && aqi <= 300) {
  console.log("Very Unhealthy");
} else {
  console.log("Hazardous");
} 



// --------------------------------------------
// EXERCISE 17: ROCK PAPER SCISSORS
// Player picks 0, 1, or 2
// Computer picks random 0-2
// Determine winner using conditionals
// --------------------------------------------
let player = 0;
let computer = Math.floor(Math.random() * 3);

function getChoiceName(choice) {
  if (choice === 0) {
    return "Rock";
  } else if (choice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

console.log("Player picked:", getChoiceName(player));
console.log("Computer picked:", getChoiceName(computer));

if (player === computer) {
  console.log("It's a tie!");
} else if (
  (player === 0 && computer === 2) ||
  (player === 1 && computer === 0) ||
  (player === 2 && computer === 1)
) {
  console.log("The player won!");
} else {
  console.log("The computer won!");
}