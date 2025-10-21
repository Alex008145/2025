const button = document.querySelector("button");

// button.onclick = function () {  // old way
//   alert("You clicked me!");
// };

const buttonClickHandler = (event) => {
  event.target.disabled = true;
  event.target.style.backgroundColor = "#777";
  console.log(event);
};

const anotherButtonClickHandler = function () {
  console.log("Another button was clicked");
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

// button.addEventListener("click", buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

// for (const button of buttons) {
//   button.addEventListener("mouseenter", buttonClickHandler);
// }

// window.addEventListener("scroll", (event) => {
//   console.log(event);
// });

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector("div");

div.addEventListener("click", (event) => {
  console.log("Clicked div");
  console.log(event);
});

button.addEventListener("click", function (event) {
  event.stopPropagation();
  // event.stopImmediatePropagation();
  console.log("Clicked button");
  console.log(event);
  console.log(this);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// listItems.forEach((listItem) => {
//   listItem.addEventListener("click", (event) => {
//     event.target.classList.toggle("highlight");
//   });
// });

list.addEventListener("click", function (event) {
  // console.log(event.currentTarget);
  // event.target.classList.toggle("highlight");
  event.target.closest("li").classList.toggle("highlight");
  button.click();
  console.log(this);
});

list.addEventListener("dra");
