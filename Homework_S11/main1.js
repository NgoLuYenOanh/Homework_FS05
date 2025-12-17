const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    category: "Electronics",
    inStock: true,
  },
  { id: 2, name: "T-Shirt", price: 25, category: "Apparel", inStock: true },
  {
    id: 3,
    name: "Coffee Maker",
    price: 80,
    category: "Home Goods",
    inStock: false,
  },
  {
    id: 4,
    name: "Smartphone",
    price: 950,
    category: "Electronics",
    inStock: true,
  },
  { id: 5, name: "Book", price: 15, category: "Literature", inStock: true },
];

//1
const newProducts = products.map((e) => e.name);
console.log(`1. ${newProducts}`);

//2
const electronicsProducts = products.filter(
  (e) => e.category === "Electronics" && e.inStock === true
);
console.log("2.", electronicsProducts);

//3
const costsProducts = products.forEach((e) => {
  console.log(`3. Product ${e.name} costs ${e.price}`);
});

//4
totalProducts = products.reduce((acc, cur) => {
  if (cur.inStock == true) {
    return (acc += cur.price);
  } else {
    return acc;
  }
}, 0);
console.log(`4. ${totalProducts}`);

//5
const someProducts = products.some((e) => e.price > 1000);
console.log(`5. ${someProducts}`);

//6
const everyProducts = products.every((e) => e.price > 10);
console.log(`6. ${everyProducts}`);
