let n = parseInt(prompt("Enter a number n:"));
let sum = 0;

for (let i = 0; i < n; i++) {
  let number = parseInt(prompt('Choose a number to add'));
  
  if (!isNaN(number)) {
    sum += number;
  } else {
    alert("Invalid input");
    i--;
  }
}

alert("The sum of the numbers is: " + sum);
