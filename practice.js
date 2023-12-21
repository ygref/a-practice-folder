// var number = 0;
// while (number <= 100) {
//   console.log(number);
//   number = number + 5;
// }

const { endpoint } = require("mtgsdk/src/config");

// var count = 0;
// while (count <= 144) {
//   console.log("Around the world");
//   console.log(count);
//   count += 1;
// }

// var array = ["Hello", "there"];
// array.push("General", "Kenobi");
// console.log(array);

// var sentence = "";
// for (let index = 0; index < array.length; index++) {
//   sentence += array[index] + " ";
// }
// console.log(sentence + "!");

// const numbers = [2, 4, 5, 1, 8, 9, 7];
// var evenNumbers = [];
// index = 0;

// Write a program that stores a customer's age and a movie's time in two separate variables. Then calculate the price of a movie ticket based on the following conditions:

// If the age is 12 years old or younger, the ticket price is $5.
// If the age is between 13 and 59 years old and the movie is before 6 PM, the ticket price is $7. After 6 PM, the ticket price is $10.
// If the customer is 60 years old or older, the ticket price is $7.

// var customerAge = 60;
// var movieTime = 8;
// var ticketPrice;

// if (customerAge <= 12) {
//   ticketPrice = 5;
// } else if (customerAge >= 13 && customerAge <= 59) {
//   if (movieTime < 18) {
//     ticketPrice = 7;
//   } else {
//     ticketPrice = 10;
//   }
// } else if (customerAge >= 60) {
//   ticketPrice = 7;
// }
// console.log(ticketPrice);

// Write a method that takes in a number and returns the number times two. Then run the method and print the result.

// function getDouble(number) {
//   return number * 2;
// }
// console.log(getDouble(8));

// Write a method that takes in a string and returns the string with all capital letters. Then run the method and print the result.

// function makeCaps(string) {
//   return string.toUpperCase();
// }
// console.log(makeCaps("lowercase"));

// Write a method that takes in two numbers and returns the first number subtracted by the second. Then run the method and print the result.

// function subtract(number1, number2) {
//   return number1 - number2;
// }
// console.log(subtract(10, 5));

// Write a method that takes in a number and returns the number times itself. Then run the method and print the result.

// function squared(number) {
//   return number * number;
// }
// console.log(squared(6));

// Write a method that takes in a string and returns the first letter of the string. Then run the method and print the result.

// function firstLetter(string) {
//   return string[0];
// }

// console.log(firstLetter("First"));

// Write a method that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the method and print the result.

// function combineStrings(string1, string2, string3) {
//   return string1 + " " + string2 + " " + string3;
// }
// console.log(combineStrings("hi", "how", "are"));

// Write a method that takes in a number and returns the number as a string. Then run the method and print the result.

// function stringify(number) {
//   return number.toString();
// }

// console.log(stringify(4));

// console.log(typeof stringify(4));

// Write a method that takes in a string and returns the string repeated 5 times. Then run the method and print the result.

// function five(string) {
//   return string.repeat(5);
// }
// console.log(five("hello"));

// Write a method that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the method and print the result.

function average(number1, number2, number3) {
  return (number1 + number2 + number3) / 3;
}
console.log(average(1, 2, 3));
