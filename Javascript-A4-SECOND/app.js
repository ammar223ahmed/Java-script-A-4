// Chapter no ("ARRAYS AND LOOP...")
// Q1
for (var i = 1; i <=10;i++){
    console.log(i  )
}

// Q2
var user = +prompt("enter a number to show its multiplication table")
var userlenght = prompt("enter length multiplication table")
for (var i = 1; i<=userlenght; i++){
    document.write(user + "x" + i + "=" + user*i + "<br>")
}
// Q3                                                                                                                                                                                                              
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// Q4
console.log( Array.from(  { length: 15 }, (_, i) => i + 1).join(", "));
console.log( Array.from({ length: 10 }, (_, i) => 10 - i).join(", "));
var series = [];
for (var i = 0; i <= 20; i += 2) {
  series.push(i);
}
var evenSeries = [];
for (var i = 0; i <= 20; i += 2) {
  evenSeries.push(i);
}
var evenSeriesString = evenSeries.join(", ");
console.log("Even Series: " + evenSeriesString);
var oddSeries = [];
for (var i = 1; i <= 19; i += 2) {
  oddSeries.push(i);
}
var oddSeriesString = oddSeries.join(", ");
console.log("Odd Series: " + oddSeriesString);


var series = [];
for (var k = 1; k <= 10; k++) {
  series.push(2 * k + "k");
}
console.log(series);





// Q5
// Array of items
var A = ["cake", "apple pie", "cookie", "chips", "patties"];


function searchItem() {
  
  var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/maam?");


  userInput = userInput.toLowerCase();
   if (A.includes(userInput)) {
    alert("Item found in the list!");
  } else {
    alert("Item not found in the list.");
  }
}
searchItem();

// Q6
var A = [24, 53, 78, 91, 12];

// Find the largest number in the array
var largest = Math.max(...A);

// Print the largest number
console.log("The largest number in the array is:", largest);






// Q7
var A = [24, 53, 78, 91, 12];

// Find the smallest number in the array
var smallest = Math.min(...A);

// Print the smallest number
console.log("The smallest number in the array is:", smallest);



// Q8
for (let num = 1; num <= 100; num++) {
  if (num % 5 === 0) {
      console.log(num);
  }
}


                 









