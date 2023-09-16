// Chapter 17 - 20 (for Loops)
// Q1
for (let i = 0; i < 10; i++) {
    console.log("This loop will run 10 times.");
  }
//   Q2
for (let i = 0; i <= 11; i++) {
    console.log("This loop will run 12 times.");
  }
//  Q3
for (var i = 0; i <= 4; i++);
// Q4
for (let j = 0; j < 100; j++) {
    console.log("This loop will run 100 times.");
  }
// Q5

for (let i = 3; i > 0; i--) {
    console.log("This loop will run 3 times and decrement 'i' with each iteration.");
  }
// Q6
var firstArr = ["a", "b", "c", "d", "e", "f"];
var numberOfElements = firstArr.length;
console.log(`Number of elements in firstArr: ${numberOfElements}`);

// Q7
let flag = true;
// Q8
var pets = ["cat", "dog", "fish", "bird"];
for (var i = 0; i < pets.length; i++) {
    console.log(`Pet ${i + 1}: ${pets[i]}`);
}

// Q9
for (let i = 0; i < 10; i++) {
  console.log(`Iteration ${i + 1}`);
}
for (let i = 0; i < 10; i++) {
  if (i === 1) {
      alert(`Counter is ${i}`);
  }
  console.log(`Iteration ${i + 1}`);
}
for (let i = 0; i < 10; i++) {
  if (i === 1) {
      alert(`Counter is ${i}`);
      break; 
  }
  console.log(`Iteration ${i + 1}`);
}


// Q10

let userNames = ["ahmed", "hassan", "fahad", "ali", "owais"];

let firstName = prompt("Enter first name");
for (let i = 0; i < userNames.length; i++) {
  if (firstName === userNames[i]) {
    alert("Enter.");
    break; 
  }
  
    if (i === userNames.length - 1) {
    alert("Please write correct user name.");
  }
}

// Q11
var matchFound = false;
var userInput = prompt("Enter a value to search");

var list = ["cake1", "pastery2", "chips3" ,"juice4" ,"beskits5"];
for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}

if (!matchFound) {
  alert("Match not found");
}

// Q12

var firstArr = ["a", "b", "c", "d", "e", "f"];
for (let i = 0; i < firstArr.length; i++) {
    var element = firstArr[i];
    console.log(`Element at index ${i}: ${element}`);
}

