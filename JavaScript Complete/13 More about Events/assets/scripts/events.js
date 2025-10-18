const buttons = document.querySelectorAll("button");

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

for (const button of buttons) {
  button.addEventListener("mouseenter", buttonClickHandler);
}

window.addEventListener("scroll", (event) => {
  console.log(event);
});
