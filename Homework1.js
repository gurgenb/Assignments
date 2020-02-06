//1
let number1 = prompt("Please enter number 1");
let number2 = prompt("Please enter number 2");
if (number1 % number2 == 0 || number2 % number1 == 0) {
    alert("1");
} else {
    alert("0");
}

//2
let angle1 = prompt("Please enter angel 1");
let angle2 = prompt("Please enter angel 2");
let angle3 = 180 - angle1 - angle2;
alert("Angle 3 = 180 - " + angle1 + " - " + angle2 + " = " + angle3);

//3
let n = prompt("Please enter positive integer");
alert(Number(n) + Number(n + n) + Number(n + n + n));

//4
let num = prompt("Please enter positive integer");
if (num < 10 || num % 10 == 0) {
    alert(num);
} else {
    let lastDigit = num % 10;
    num = num/10 - lastDigit/10;
    alert(lastDigit + "" + num);
}

//5
let n1 = Number(prompt("Please enter positive integer #1"));
let n2 = Number(prompt("Please enter positive integer #2"));
let n3 = Number(prompt("Please enter positive integer #3"));
let n4 = Number(prompt("Please enter positive integer #4"));
let n5 = Number(prompt("Please enter positive integer #5"));

alert((n1+n2+n3+n4+n5)/5);

