// ------------ 1 ------------
// let numbers = [];
// do {
//   for (let i = 0; i < 10; i++) {
//     numbers = Number(prompt(`Enter 10 numbers: `, numbers[i]));
//     console.log(`i = ${i + 1}, number = ${numbers}`);
//   }
//   if (isNaN(numbers)) {
//     console.log("Please enter numbers.");
//   }
// } while (isNaN(numbers));

// ------------ 2 ------------
function printAll(...arr) {
  console.log(`${arr}`);
}
let members = [];
while (true) {
  const input = prompt("Enter members (enter space to exit): ");
  if (input === " " || input === null) {
    break;
  }
  members = input;
  printAll(members);
}

// ------------ 3 ------------
let value = prompt("Enter a value to find: ");
console.log(`value = ${value}, ${members.includes(value)}`);

// ------------ 4 ------------
function maximum(...arr) {
  return Math.max(arr);
}
console.log(`maximum value = ${maximum(members)}`);

// ------------ 5 ------------
function calculateSum(...arr) {
  let sum = 0;
  for (let i = 1; i <= arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(`sum of all elemts = ${calculateSum(members)}`);

// ------------ 6 ------------
function sortAll(...arr) {
  console.log(arr.sort());
}
members.sort((a, b) => b - a);
console.log("sap xep:" + members);

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
