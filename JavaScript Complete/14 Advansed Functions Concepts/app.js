function add(a, b) {
  return a + b;
}

console.log(add(1, 2));
console.log(add(1, 5));

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(5, 6));
console.log(previousResult);

const hobbies = ["Sports", "Cooking"];

function printHobbies(h) {
  h.push("New Hobby");
  console.log(h);
}

printHobbies(hobbies);

let multiplier = 1.1;

function createTaxCalculator(tax = 0.19) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

multiplier = 1.3;

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(200));

let userName = "Max";
function greetUser() {
  // let name = "Anna";
  console.log(`Hi ${name}`);
}

let name = "Maximilian";

greetUser();
userName = "Manu";
greetUser();

// function powerOf(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

function powerOf(x, n) {
  if (n === 1) {
    return x;
  }
  return x * powerOf(x, n - 1);
}

console.log(powerOf(3, 3)); // 3 * 3 * 3

const myself = {
  name: "Max",
  friends: [
    {
      name: "Manu",
      friends: [
        {
          name: "Chris",
          friends: [{ name: "Jenny" }],
        },
        {
          name: "Camilia",
        },
      ],
    },
    {
      name: "Julia",
    },
  ],
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }
  return collectedNames;
}

console.log(getFriendNames(myself));
