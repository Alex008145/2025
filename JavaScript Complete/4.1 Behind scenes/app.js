function getName() {
  return prompt("What's your name?", "");
}

function greet() {
  const userName = getName();
  console.log("Hello, " + userName);
}

greet();
