// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = new Array(5, 2); // []
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ["Sports", "Cooking"];
// const person = {
//   name: "Max",
//   age: 30,
//   hobbies: hobbies,
// };
// console.log(person);

// const analyticsData = [
//   [1, 1.6],
//   [2, 1.7],
//   [3, 1.8],
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Programming");
// hobbies.unshift("Reading");
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = "Coding";
// // hobbies[5] = "Running";  // rarely used
// console.log(hobbies);

// hobbies.splice(1, 0, "Good Food");
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies, removedElements);

// const testResults = [1, 5.3, 1, 4.9, 2.5, 2.0, 8.5];
// // const storedResults = testResults.slice(0, 2);
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(1);

// console.log(storedResults, testResults);
// console.log(testResults.lastIndexOf(1));

// console.log(storedResults.includes(3.99));

// const personData = [
//   { name: "Max", age: 30 },
//   { name: "Manuel", age: 31 },
// ];
// console.log(personData.indexOf({ name: "Max" }));

// const manuel = personData.find((person, idx, persons) => {
//   return person.name === "Manuel";
// });

// manuel.name = "Maximilian";

// console.log(manuel);

// const prices = [10.99, 5.99, 3.99, 6.59];

// const tax = 0.19;

// const taxAdjustedPrices = [];

// for (const price of prices) {
//   const priceWithTax = price * (1 + tax);

//   const roundedPrice = parseFloat(priceWithTax.toFixed(2));

//   taxAdjustedPrices.push(roundedPrice);
// }

// prices.forEach((price, index, pricesArray) => {
//   const priceObject = {
//     index: index,
//     taxAdjustedPrices: price * (1 + tax),
//   };

//   taxAdjustedPrices.push(
//     `Индекс: ${priceObject.index + 1}, Цена: ${priceObject.taxAdjustedPrices}`
//   );
// });

// console.log(taxAdjustedPrices);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, index, pricesArray) => {
//   const priceObj = {
//     index: index,
//     taxAdjustedPrices: price * (1 + tax),
//   };
//   return priceObj;
// });

// // console.log(prices, taxAdjustedPrices);
// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });

// console.log(sortedPrices.toReversed());
// console.log(sortedPrices);
// console.log(prices.toSorted((a, b) => a - b));

// const filteredArray = prices.filter((price) => {
//   return price > 6;
// });
// console.log(filteredArray);

// const sum = prices.reduce((previousValue, currentValue) => {
//   return previousValue + currentValue;
// }, 0);

// console.log(sum.toFixed(2));

// const data = "New york;10.99;2000";

// const transformedData = data.split(";");
// console.log(transformedData);

// const nameFragments = ["Max", "Schwarz"];
// const name = nameFragments.join(" ");
// console.log(name);

// const copiedNameFragments = [...nameFragments];
// nameFragments.push("Mr.");
// console.log(nameFragments);
// console.log(copiedNameFragments);

// console.log(Math.min(...prices));

// const persons = [
//   { name: "Max", age: 30 },
//   { name: "Manuel", age: 31 },
// ];
// const copiedPersons = [...persons.map((person) => ({ ...person }))];
// persons[0].age = 31;

// persons.push({ name: "Maximilian", age: 31 });

// console.log(persons, copiedPersons);

const nameData = ["Max", "Schwarz", "Mr.", 30];
// const firstName = nameData[0];
// const lastName = nameData[1];

const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);
