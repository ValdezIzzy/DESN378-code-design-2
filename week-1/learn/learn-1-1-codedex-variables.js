// ============================================
// TUTORIAL 1-0: CODEDEX VARIABLES
// Student: Izzy Valdez
// Date: 1/12/2026
// ============================================

// --------------------------------------------
// EXERCISE 6: LET & CONST
// Create 4 variables for a user profile:
// - Two const variables 
// - Two let variables 
// Print them all, then reassign one let variable
// --------------------------------------------
const favoriteColor = "purple";
const name = "Izzy";
let currentLocation = "catalyst building";
let currentMood = "meh";
console.log(favoriteColor, name, currentLocation, currentMood)



// --------------------------------------------
// EXERCISE 7: DATA TYPES
// Create variables for your favorite company:
// 
// Print them all
// --------------------------------------------
let companyName = "Mojang";
let foundingYear = 2009;
let isActive = true;
let fundingAmount;
console.log(companyName, foundingYear, isActive, fundingAmount);



// --------------------------------------------
// EXERCISE 8: TEMPERATURE
// Convert Spokane's temperature from °F to °C
// Formula: (fahrenheit - 32) / 1.8
// --------------------------------------------
let temp_f = 45;
let temp_c = (temp_f - 32) / 1.8;

console.log(temp_c);



// --------------------------------------------
// EXERCISE 9: TIP CALCULATOR
// Calculate tip and total from a bill
// - billAmount, tipPercent
// - tipAmount = billAmount * (tipPercent / 100)
// - total = billAmount + tipAmount
// --------------------------------------------
let billAmount = 24.87;
let tipPercent = 15;
let tipAmount = billAmount * (tipPercent / 100);
let total = tipAmount + billAmount;

console.log(total);



// --------------------------------------------
// EXERCISE 10: PLAYLIST DURATION
// Calculate total playlist length
// - numberOfSongs, avgSongLength (in minutes)
// - totalMinutes, hours, remainingMinutes
// Format the output nicely
// --------------------------------------------

let numSongs = 18;
let avgSongMinutes = 3.5;
let totalMinutes = numSongs * avgSongMinutes;
let totalWholeMinutes = Math.round(totalMinutes);
let hours = Math.floor(totalWholeMinutes / 60);
let minutes = totalWholeMinutes % 60;

console.log(`My playlist is ${hours} hours and ${minutes} minutes long with a song average of ${avgSongMinutes} minutes.`);

// ChatGPT helped me with this last one :) the hours and minutes calculation was tricky!