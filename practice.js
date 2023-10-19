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

var array = ["Hello", "there"];
array.push("General", "Kenobi");
console.log(array);

var sentence = "";
for (let index = 0; index < array.length; index++) {
  sentence += array[index] + " ";
}
console.log(sentence + "!");
