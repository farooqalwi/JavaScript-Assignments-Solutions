 // Chapter# 5

 // Task 1: Write a program that take two numbers & add them in a new variable. Show the result in your browser.
 var firstNum = prompt("Enter First Number: ");
 var secondNum = prompt("Enter Second Number: ");
 var sum = +firstNum + +secondNum;
 document.writeln("Sum of " + firstNum + " and " + secondNum + " is " + sum + "<br>");

 // Task 2: Repeat task1 for subtraction, multiplication, division & modulus.
 var sub = +firstNum - +secondNum;
 document.writeln("Subtraction of " + firstNum + " and " + secondNum + " is " + sub + "<br>");

 var mul = +firstNum * +secondNum;
 document.writeln("Multiplication of " + firstNum + " and " + secondNum + " is " + mul + "<br>");

 var div = +firstNum / +secondNum;
 document.writeln("Division of " + firstNum + " and " + secondNum + " is " + div + "<br>");

//  Task 3: Do the following using JS Mathematic Expressions
//  a. Declare a variable.
//  b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
//  c. Initialize the variable with some number.
//  d. Show the value of variable in your browser like “Initial value: 5”.
//  e. Increment the variable.
//  f. Show the value of variable in your browser like “Value after increment is: 6”.
//  g. Add 7 to the variable.
//  h. Show the value of variable in your browser like “Value MATH EXPRESSIONS | JAVASCRIPT Page 2 of 9 after addition is: 13”.
//  i. Decrement the variable.
//  j. Show the value of variable in your browser like “Value after decrement is: 12”.
//  k. Show the remainder after dividing the variable’s value by 3. 
//  l. Output : “The remainder is : 0”.

 var number;
  document.writeln("Value after variable declaration is: " + number + "<br>");
 number = 5;
  document.writeln("Initial value: " + number + "<br>");
 number++;
 document.writeln("Value after increment is: " + number + "<br>");
number += 7;
document.writeln("Value MATH EXPRESSIONS | JAVASCRIPT Page 2 of 9 after addition is: " + number + "<br>");
number--;
document.writeln("Value after decrement is: " + number + "<br>");
number %= 3;
document.writeln("The remainder is : " + number + "<br>");

// Task 4:  Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the 
//          cost of buying 5 tickets to a movie. Example output:
var ticketPrice = 600;
document.writeln("Total cost to by 5 tickets to a movie is " + ticketPrice*5 + " PKR <br>");

// Task 5: Write a script to display multiplication table of any number in your browser. E.g
var table = 4;
for(var i = 1; i <= 10; i++)
{
    document.writeln(table + " X " + i + " = " + table*i + "<br>");
}

// Task 6: The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var celsius = prompt("Enter Celsius temperature: ");
var celsiusTofahrenheit = celsius * (9 / 5) + 32;
document.writeln(celsius + "<sup>o</sup>C is " + celsiusTofahrenheit + "<sup>o</sup>F <br>");

var fahrenheit = prompt("Enter Fahrenheit temperature: ");
var fahrenheitTocelsius = (fahrenheit - 32) * 5 / 9;
document.writeln(fahrenheit + "<sup>o</sup>F is " + fahrenheitTocelsius + "<sup>o</sup>C <br>");

// Task 7:  Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
//          Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
document.writeln("<h1>Shopping Cart</h1>")
var item1Price = prompt("Enter Item 1 price: ");
var item1Quantity = prompt("Enter Item 1 Quantity: ");
var item2Price = prompt("Enter Item 2 price: ");
var item2Quantity = prompt("Enter Item 2 Quantity: ");
var shippingCharges = prompt("Shipping Charges: ");
var item1Cost = item1Price * +item1Quantity;
var item2Cost = item2Price * +item2Quantity;

var totalCost = item1Cost + item2Cost + +shippingCharges;

document.writeln("Price of Item 1 is: " + item1Price + "<br>");
document.writeln("Quantity of Item 1 is: " + item1Quantity + "<br>");
document.writeln("Price of Item 2 is: " + item2Price + "<br>");
document.writeln("Quantity of Item 2 is: " + item2Quantity + "<br>");
document.writeln("Shipping Charges: " + shippingCharges + "<br><br>");

document.writeln("Total Cost of your order is: " + totalCost + "<br>");

// Task 8:  Store total marks & marks obtained by a student in 2 variables.
//          Compute the percentage & show the result in your browser
var totalMarks = prompt("Enter Total Marks: ");
var obtainedMarks = prompt("Enter Obtained Marks: ");
var percnet = (obtainedMarks / totalMarks) * 100;

document.writeln("<h1>Mark Sheet</h1>");
document.writeln("Total Makrs: " + totalMarks + "<br>");
document.writeln("Makrs obtained: " + totalMarks + "<br>");
document.writeln("Percentage: " + percnet + " % <br>");

// Task 9:  Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
//          Perform all calculations in a single expression.
//          (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

var usDollar = prompt("Enter US Dollar amount: ");
var saudiRiyal = prompt("Enter Saudi Riyal amount: ");

var convertToPKR = (usDollar * 104.80) + (saudiRiyal * 28);

document.writeln("<h1>Currency in PKR</h1>");
document.writeln("Total Currency in PKR: " + convertToPKR + "<br>");

// Task 10: Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var num = 10;
num = (num + 5) * 10 / 2;
document.writeln("Result: " + num + "<br>"); 

// Task 11: The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.

var currentYear = 2016;
var birthYear = 1992;
var age = currentYear - birthYear;

document.writeln("<h1>Age Calculator</h1>")
document.writeln("Current Year: " + currentYear + "<br>");
document.writeln("Birth Year: " + birthYear + "<br>");
document.writeln("Your age is: " + age + "<br>");

// Task 12: The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = prompt("Enter radius of a circle: ");
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * (radius * radius);

document.writeln("<h1>The Geometerizer</h1>");
document.writeln("Radius of a circle: " + radius + "<br>");
document.writeln("The circumference is: " + circumference + "<br>");
document.writeln("The area is: " + area + "<br>");


// Task 13: The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

document.writeln("<h1>The Lifetime Supply Calculator</h1>");

var snack = prompt("Enter you favorite snack: ");
var currentAge = prompt("Enter Current Age: ");
var maxAge = prompt("Enter Estimated Maximum Age: ");
var amountSnack = prompt("Amount of snack per day: ");

document.writeln("You will need " + ((maxAge - currentAge) * amountSnack) + " chocolate chip to last you until the ripe old age of " + maxAge + "<br>");

