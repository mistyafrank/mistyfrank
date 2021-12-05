let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let lengths = names.map(function (names) {
  return names.length;
});
//create a new array called lengths (#2 a)

let arrNames2 = " ";
for (i = 0; i < names.length; i++) {
  arrNames2 += names[i] + " ";
  console.log(arrNames2);
}
//(#2 b)

let nameLengths = names.map(function (names) {
  return names.length;
});
console.log(nameLengths);
//created new array containing the lenghts of all names(#5)

let sum = 0;
for (i = 0; i < nameLengths.length; i++) {
  sum += nameLengths[i];
}
console.log(sum);
//calculated the sum of all elements in the nameLenghts array (#6)

function repeatWordNTimes(word, n) {
  let repeatedWord = "";
  while (n > 0) {
    repeatedWord += word;
    n - 1;
  }
  return "repeatedWord() returns => " + repeatedWord;
}
//function to concatenate a word to itself "n" number of times (#7)

function createFullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}
//function to return persons full name (#8)

function ifSumIsGreaterThan100() {
  if (sum > 100) {
    return true;
  }
}
//checks array sum and returns boolean value of true if the sum is greater than 100 (#9)

array = [];
array.forEach(function ([], n) {
  sum += n;
});
console.log(sum / array.length);
//function to take array of numbers and return the average of all elements in the array

array = [];
array.reduce((sum, currentValue) => sum + currentValue) / array.length;
console.log(sum);
//function to find the average of all elements in an array (#10)

let array1 = [];
let array2 = [];
let i, x;

for (i = 0; i < array1.length; i++) {
  sum += array1[i];
}
for (x = 0; x < array2.length; x++) {
  sum += array2[x];
}
console.log((sum /= i + x));
let array1Sum = (sum /= i);
let array2Sum = (sum /= x);
if (array1Sum >= array2Sum) {
  console.log("true");
}
//function to find the sums of two arrays and compare them (#11)

function willBuyDrink(isHotOutside, moneyInPocket) {
  if (Boolean(isHotOutside) == true && Number(moneyInPocket) > 10.5)
    return true;
}
//(#12)

function calculateFoodAmount(numPeople, avgFood) {
  if (Number(numPeople) >= 0 && Number(avgFood) >= 0) {
    return numPeople * avgFood;
  } else {
    return -1;
  }
}
//created a simple function to help calculate how much food is need based on the number of people in 
//household and the average amount they consume. I chose to attempt a function that will be personally 
//useful for me when I do the grocery shopping! (#13)
