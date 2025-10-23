function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBetween(10, 20));

function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCategory = "pretty cheap";
  if (productPrice > 20) {
    priceCategory = "fairly priced";
  }
  // return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
  return { name: productName, price: productPrice };
}

const prodName = "A book";
const prodPrice = 19.99;

const productOutput = productDescription`This product (${prodName}) costs ${prodPrice}.`;
console.log(productOutput);
