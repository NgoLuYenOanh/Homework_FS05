// EX1:

// ------------ 1 ------------
let numbers = [];
for (let i = 0; i < 10; i++) {
  let input;
  do {
    input = prompt(`Enter number ${i + 1}: `);
    if (isNaN(input)) {
      alert("Please enter a number.");
    }
    numbers[i] = Number(input);
  } while (isNaN(input));
}
// ------------ 2 ------------
function printValue() {
  console.log(numbers);
}
printValue();
// ------------ 3 ------------
function findValue() {
  let value = Number(prompt("Enter a value to find: "));
  console.log(`value = ${value}, ${numbers.includes(value)}`);
}
findValue();

// ------------ 4 ------------
function maximum(...arr) {
  return Math.max(...arr);
}
console.log(`maximum value = ${maximum(...numbers)}`);

// ------------ 5 ------------
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(`sum of all element = ${calculateSum(numbers)}`);

// ------------ 6 ------------
function sortAll(arr) {
  arr.sort((a, b) => b - a);
  console.log("sap xep:", arr);
}
sortAll(numbers);
// ------------ 7 ------------
let menu = prompt(
  `1. Print Array\n2. Search a member\n3. Find maximum number\n ====================\n Enter a number (1 -> 3): `
);

switch (menu) {
  case 1:
    printAll(members);
    break;
  case 2:
    printAll(members);
    break;

  default:
    break;
}
