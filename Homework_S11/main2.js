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
  { id: 6, name: "Mouse", price: 50, category: "Electronics", inStock: true },
  { id: 7, name: "Jeans", price: 75, category: "Apparel", inStock: true },
];

//7
const apparelProducts = products.filter((e) => e.category === "Apparel");
const saleProducts = apparelProducts.map((e) => (e.price *= 10 / 100));
console.log(saleProducts);

//8
const groupProducts = products.reduce((acc, cur) => {
  const key = cur.category;

  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(cur.price);
  return acc;
});
console.log(groupProducts);

//9
const cheapProducts = products.reduce((acc, cur) => {
  if (cur.inStock === true) {
    acc.price = Math.min(cur.price);
    console.log(acc);
  }
});

//10
const under100Products = products.filter((e) => e.price < 100);
const formatProducts = under100Products.map((e) => `${e.name} - $${e.price}`);
const stringProducts = formatProducts.join("; ");
console.log(stringProducts);
