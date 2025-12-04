// --------- 1 ---------
// let a, b;
// do {
//   a = Number(prompt("Enter number a:"));
//   b = Number(prompt("Enter number b:));
//   if (isNaN(a && b)) {
//     alert("Please enter a and b as numbers.");
//   }
// } while (isNaN(a && b));
// let c = Number;
// c = a;
// a = b;
// b = c;
// alert(`Số a là: ${a}
//     Số b là: ${b}`);

// --------- 2 ---------
// let math, physics, chemistry;
// do {
//   math = Number(prompt("Enter math scores: "));
//   physics = Number(prompt("Enter physics scores: "));
//   chemistry = Number(prompt("Enter chemistry scores "));
//   if (isNaN(math && physics && chemistry)) {
//     alert("Please enter math, physics, chemistry scores as numbers.");
//   }
// } while (isNaN(math && physics && chemistry));
// let avg = (math, physics, chemistry) / 3;
// let rank;
// if (avg >= 8) {
//   rank = "A";
// } else if (avg >= 6.5 || avg < 8) {
//   rank = "B";
// } else if (avg >= 5 || avg < 6.5) {
//   rank = "C";
// } else {
//   rank = "D";
// }
// alert(`AVG: ${avg.toFixed(2)}\nRank: ${rank}`);

// --------- 3 ---------
// let a, b;
// do {
//   a = Number(prompt("Enter number a:"));
//   b = Number(prompt("Enter number b:"));
//   if (isNaN(a && b)) {
//     alert("Please enter a and b as numbers.");
//   } else if (a === 0) {
//     alert("Please enter a non-zero.");
//   }
// } while (isNaN(a && b) || a === 0);

// let x = -b / a;
// alert(`ax + b = 0\n ${a}x + ${b} = 0\n => x = ${x}`);

// --------- 4 ---------
// let a, b, c;
// do {
//   a = Number(prompt("Enter number a:"));
//   b = Number(prompt("Enter number b:"));
//   c = Number(prompt("Enter number c:"));
//   if (isNaN(a && b && c)) {
//     alert("Please enter a and b and c as numbers.");
//   }
// } while (isNaN(a && b && c));

// let x, x2;
// if (a === 0) {
//   x = -c / b;
//   alert(`ax^2 + bx + c = 0\n ${a}x^2 + ${b}x + c = 0\n => x = ${x}`);
// } else {
//   let delta = Math.pow(b, 2) - 4 * a * c;
//   if (delta < 0) {
//     alert("Unsolved equation.");
//   } else if (delta === 0) {
//     x = -b / a;
//     alert(`The equation has a double solution: x1 = x2 = ${x}`);
//   } else {
//     x = ((-b + Math.sqrt(delta)) / 2) * a;
//     x2 = ((-b - Math.sqrt(delta)) / 2) * a;
//     alert(`The equation has two distinct solutions: x1 = ${x}; x2 = ${x2}`);
//   }
// }

// --------- 5 ---------
// let n = 50;
// let sum = (n * (n + 1)) / 2;
// alert(`Sum of first 50 integer number: ${sum}`);

// --------- 6 ---------
// let fn = 1,
//   f0 = 0,
//   f1 = 1,
//   n;
// do {
//   n = Number(prompt("Enter number: "));
//   if (isNaN(n)) {
//     alert("Please enter a number.");
//   } else if (n < 2) {
//     alert("Please enter number greater than 2. ");
//   }
// } while (isNaN(n) && n < 2);

// for (let i = 2; i <= n; i++) {
//   fn = f1 + f0;
//   f0 = f1;
//   f1 = fn;
// }
// alert(fn);
