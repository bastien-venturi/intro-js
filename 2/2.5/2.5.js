let a;

while (true) {
  a = parseInt(prompt("What is your favorite number?"));
  
  if (a === 42) {
    console.log("That's the answer to the ultimate question of life, the universe, and everything!");
    break;
  } else {
    console.log("Are you sure?");
  }
}