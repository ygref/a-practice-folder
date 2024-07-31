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

// function average(number1, number2, number3) {
//   return (number1 + number2 + number3) / 3;
// }
// console.log(average(1, 2, 3));

// Write a method that takes in a number and returns the number times 10 plus 30. Then run the method and print the result.

// function algo(number) {
//   return number * 10 + 30;
// }

// console.log(algo(5));

// Write a Song class with attributes for name, artist, and duration.

// class Song {
//   constructor(name, artist, duration) {
//     this.name = name;
//     this.artist = artist;
//     this.duration = duration;
//   }
// }

// var song = new Song("What's my Age again?", "Blink 182", "4:00");

// console.log(song);

// Write a Rectangle class with attributes for width and height.

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
// }

// var rekt = new Rectangle(5, 10);
// console.log(rekt);

// Write a while loop to print the numbers 1 through 10.

// var number = 1;

// while (number <= 10) {
//   console.log(number);
//   number = number + 1;
// }

// Write a while loop that prints the word "hello" 5 times.

// var five = 0;
// while (five < 5) {
//   console.log("hello");
//   five = five + 1;
// }

// Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.

// var number = 0;
// while (number <= 100) {
//   console.log(number);
//   number = number + 5;
// }

// Write a while loop that prints the number 9000 ten times.

// var number = 9000;
// var index = 0;

// while (index <= 10) {
//   console.log(number);
//   index = index + 1;
// }

// Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.

// var array = [1, 2, 3, 4];

// array.push(5);

// console.log(array);

// function push(array, pushedNumber) {
//   array.push(pushedNumber);
//   return array;
// }

// console.log(push((usedArray = [1, 2, 3, 4]), (usedNumber = 5)));

// var number = 1;
// while (number <= 10) {
//   console.log(number);
//   number = number + 1;
// }

var count = 0;

while (count < 5) {
  console.log("hello");
  count += 1;
}
// var number = 0;
// while (number <= 100) {
//   console.log(number);
//   number = number + 5;
// }

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

var numbers = [1, 2, 3];
var newNumbers = [];
index = 0

while (index < numbers.length) {
  number = numbers[index];
  newNumbers.push(number * 3);
  index = index + 1
}
console.log(newNumbers)



