// Chapter# 3

// Task 1: Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 15;
alert("I am " + age + " years old" )

// Task 2:     Declare & initialize a variable to keep track of how many times a visitor has visited a web page. 
//             Show his/her number of visits on your web page. 
//             For example: “You have visited this site N times”.
for(var counter = 1; counter <= 14; counter++)
{
    alert("You have visited this site " + counter + " times")
}

// Task 3: Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = 1990;
document.writeln("My birth year is " + birthYear + "<br>")

// Task 4: A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: 
// “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 
var visitorName = "John Doe"
var product = " T-shirts"
var quantity = 5
document.writeln(visitorName + " ordered " + quantity + product + " on XYZ Clothing store <br>")