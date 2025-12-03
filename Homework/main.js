// 1
let a, b;

do {
  a = Number(prompt("Nhập vào số a:"));
  b = Number(prompt("Nhập vào số b:"));
  if (isNaN(a && b)) {
    alert("Vui lòng nhập a và b là số.");
  }
} while (isNaN(a && b));

let c = Number;
c = a;
a = b;
b = c;

alert(`Số a là: ${a} 
    Số b là: ${b}`);

// 2
let math, physics, chemistry;
do {
  math = Number(prompt("Enter math scores: "));
  physics = Number(prompt("Enter physics scores: "));
  chemistry = Number(prompt("Enter chemistry scores "));
  if (isNaN(math && physics && chemistry)) {
    alert("Please enter math, physics, chemistry scores as numbers.");
  }
} while (isNaN(math && physics && chemistry));
let avg = (math, physics, chemistry) / 3;
let rank;
if (avg >= 8) {
  rank = "A";
} else if (avg >= 6.5 || avg < 8) {
  rank = "B";
} else if (avg >= 5 || avg < 6.5) {
  rank = "C";
} else {
  rank = "D";
}
alert(`AVG: ${avg.toFixed(2)}\nRank: ${rank}`);
