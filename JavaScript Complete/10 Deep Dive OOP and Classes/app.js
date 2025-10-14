class AgedPerson {
  constructor() {
    console.log(this.name);
  }

  printAge() {
    console.log(this.age);
  }
}

class Person {
  name = "Max";

  constructor() {
    // super();
    this.age = 30;
    // this.greet = function () { .... };
  }

  greet = () => {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old."
    );
  };
}
//   greet() {
//     console.log(
//       "Hi, I am " + this.name + " and I am " + this.age + " years old."
//     );
//   }
// }

// function Person() {
//   this.age = 30;
//   this.name = "Max";
// }
// Person.prototype.greet = function () {
//   console.log(
//     "Hi, I am " + this.name + " and I am " + this.age + " years old."
//   );
// };

// Person.describe = function () {
//   console.log("Creating persons...");
// };

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// console.dir(Person);

// const p = new Person();
// p.name = "Manuel";
// console.log(p.name);
// p.greet();
// p.printAge();
// console.log(p.length);
// console.log(p.toString());

// const p2 = new p.__proto__.constructor();
// console.dir(Object.prototype);

// // console.log(Object.getPrototypeOf(p));

// const p = new Person();
// p.name = "Manuel";
// console.log(p);
// p.greet();

// const button = document.getElementById("btn");
// button.addEventListener("click", p.greet.bind(p));

const course = {
  title: "JavaScript for Beginners",
  rating: 5,
};

// course.printRating = function () {
//   console.log(this.rating);
// };

Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course), // сохранить прототип
  printRating() {
    console.log(`${this.rating}/5`);
  },
});

const student = Object.create({
  printProgress: function () {
    console.log(this.progress);
  },
  name: "Manuel",
  progress: 0.8,
});

// Object.defineProperty(student, "progress", {
//   configurable: true,
//   enumerable: true,
//   value: 0.8,
//   writable: true,
// });

// Object.defineProperties(student, {
//   progress: {
//     get: function () {
//       return this._progress;
//     },
//     set: function (value) {
//       this._progress = value;
//     },
//   },
// });

console.log(Object.getPrototypeOf(course));
course.printRating();
console.log(student);
console.log(student.progress);
