// Chapter# 6-9

// Task 1: Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
document.writeln("Result: <br>");
var a = prompt("Enter value of a: ");
document.writeln("The value of a is: " + a + "<br>");

document.writeln(".................................... <br>");

document.writeln("The value ++a is: " + ++a + "<br>");
document.writeln("Now the value a is: " + a + "<br>");

document.writeln("The value a++ is: " + a++ + "<br>");
document.writeln("Now the value a is: " + a + "<br>");

document.writeln("The value --a is: " + --a + "<br>");
document.writeln("Now the value a is: " + a + "<br>");

document.writeln("The value a-- is: " + a-- + "<br>");
document.writeln("Now the value a is: " + a + "<br>");

// Task 2: What will be the output in variables a, b & result after execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//             1 -  0  +  1  + 1   =  3

// Explain the output at each stage:
// output:  --a = 1;
// output:  --a - --b = 1;
// output:  --a - --b + ++b = 2;
// output:  --a - --b + ++b + b-- = 3; 
// reult = 3

document.writeln("a is: " + a + "<br>");
document.writeln("b is: " + b + "<br>");
document.writeln("result is: " + result + "<br>");

// Task 3: Write a program that takes input a name from user & greet the user.
var name = prompt("Enter Your Name: ");
alert("Welcome " + name + " here");

// Task 4: not mentioned

// Task 5:  Write a program to take input a number from user & display it’s multiplication table on your browser. 
//          If user does not enter a new number, multiplication table of 5 should be displayed by default.
var table = prompt("Enter a no: ");

for (var i = 1; i <= 10; i++) 
{
    document.writeln(table + " X " + i + " = " + table * i + "<br>");
}

// Task 6: Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable. 
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

var sub1 = prompt("Enter Subject 1: ");
var sub2 = prompt("Enter Subject 2: ");
var sub3 = prompt("Enter Subject 3: ");

var sub1Marks = prompt("Enter Subject 1 Marks: ");
var sub2Marks = prompt("Enter Subject 2 Marks: ");
var sub3Marks = prompt("Enter Subject 3 Marks: ");
var totalMarks = 300;
var totalObtainedMarks = +sub1Marks + +sub2Marks + +sub3Marks;
var percent = (totalObtainedMarks / totalMarks) * 100;

document.writeln("Marks in " + sub1 + ": " + sub1Marks + "<br>");
document.writeln("Marks in " + sub2 + ": " + sub2Marks + "<br>");
document.writeln("Marks in " + sub3 + ": " + sub3Marks + "<br>");
document.writeln("Obtained Marks in all Subjects: " + totalObtainedMarks  + "<br>");
document.writeln("Total Marks: " + totalMarks + "<br>");
document.writeln("Percentage: " + percent + "%<br>");



