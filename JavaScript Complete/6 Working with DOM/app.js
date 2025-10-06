// const h1 = document.getElementById("main-title");

// h1.textContent = "Hello world";
// h1.style.color = "red";
// h1.style.backgroundColor = "black";

// const li = document.querySelector("li:last-of-type");
// li.textContent = li.textContent + " (edited)";

// const body = document.body;

// // const listItemElements = document.querySelectorAll("li");
// const listItemElements = document.getElementsByTagName("li");

// for (const listItemEl of listItemElements) {
//   console.log(listItemEl);
// }

const section = document.querySelector("section");

section.className = "red-bg";

// section.style.backgroundColor = "blue";

// section.className = "";

const button = document.querySelector("button");

button.addEventListener("click", () => {
  // section.classList.toggle("visible");
  section.classList.toggle("invisible");
});
