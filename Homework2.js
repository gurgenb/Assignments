//1
let num1 = prompt("Enter number #1");
let num2 = prompt("Enter number #2");
let num3 = prompt("Enter number #3");

if (isNumber(num1) && isNumber(num2) && isNumber(num3)) {
	alert(getTheSign(num1, num2, num3));
} else {
	alert("Invalid number(s) entered");
}

function getTheSign(num1, num2, num3) {
    if (num1 == 0 || num2 == 0 || num3 == 0) {
        return 'unsigned';
    }

    let sign = '+';

    if (num1 < 0) {
        sign = reverseTheSign(sign);     
    }

	if (num2 < 0) {
        sign = reverseTheSign(sign);     
    }
	
	if (num3 < 0) {
        sign = reverseTheSign(sign);     
    }
	
	return sign;
}

function reverseTheSign(sign) {
	if (sign == '+') {
		return '-';
	}
	
	return '+';
}

//2
let number = prompt("Enter a number");
let digit = prompt("Enter a digit");

if (isNumber(number) && isValidDigit(digit)) {
	alert(isContainedInNumber(number, digit));
} else {
	alert("Invalid number(s) entered");
}

function isContainedInNumber(number, digit) {
	str = String(number);
	
	for (let i = 0; i < str.length; i++) {
		if (str[i] == digit)
			return 'Yes';
	}
	
	return 'No';
	
}

function isValidDigit(digit) {
	if (digit == null || isNaN(+digit) || digit < 0 || digit > 9){
		return false;
	}
	
	return true;
}


//3
let number = prompt("Enter a number");

if (isNumber(number)) {
	number = Math.abs(number);
	if (number < 10) {
		alert(number);
	} else {
		let digits = String(number).split("");
		let lastDigit = digits[digits.length - 1];
		let firstDigit = digits[0];
		
		digits.pop();		
		digits.shift();
		
		digits.unshift(lastDigit);
		digits.push(firstDigit);
		
		alert(digits.join(""));
	}	
} else {
	alert("Invalid number entered");
}


//4
let num1 = prompt("Enter number #1");
let num2 = prompt("Enter number #2");
let num3 = prompt("Enter number #3");

if (isNumber(num1) && isNumber(num2) && isNumber(num3)) {
	let numbers = [+num1, +num2, +num3];
	
	for (let i = 0; i < numbers.length; i++) {
		for (let j = i; j < numbers.length; j++) {
			if (numbers[i] > numbers[j]) {
				let temp = numbers[j];
				numbers[j] = numbers[i];
				numbers[i] = temp;
			}
		}
	}
	
	alert(numbers);
} else {
	alert("Invalid number(s) entered");
}


//5
let a = prompt("Enter a");
let b = prompt("Enter b");
let c = prompt("Enter c");

if (isNumber(a) && isNumber(b) && isNumber(c) && a != 0) {
	let x1;
	let x2;
	let d = b * b - 4 * a * c;
	if (d < 0 ) {
		alert("Solution does not exists");
	} else if (d == 0) {
		x1 = (-b / (2 * a));
		alert("Solution is " + x1);
	} else {
		x1 = ((-b + Math.sqrt(d)) / (2 * a));
		x2 = ((-b - Math.sqrt(d)) / (2 * a));
		alert("Solutions are " + x1 + " and " + x2 );
	}	
} else {
	alert("Enter valid constants");
}

//6
let n = +prompt();

let i = 0;
let j = 0;

if (n % 2 === 0 && !Math.floor(n / 10)) {
	i += 1;
}

if (n % 3 === 0 && n % 10 === 1) {
	j += 1;

}


//7
let figure = prompt("Enter the figure name");
let num1;
let num2;

if (figure == 'triangle') {
	num1 = prompt("Enter the height of the triangle");
	num2 = prompt("Enter the base of the triangle");
	if (isNumber(num1) && isNumber(num2) && num1 > 0 && num2 > 0) {
		alert("Square of the triangle is " + (num1 * num2) / 2);
	} else {
		alert("Please enter only positive values");
	}	
} else if (figure == 'rectangle') {
	num1 = prompt("Enter the side a of the rectangle");
	num2 = prompt("Enter the side b of the rectangle");
	if (isNumber(num1) && isNumber(num2) && num1 > 0 && num2 > 0) {
		alert("Square of the rectangle is " + (num1 * num2));
	} else {
		alert("Please enter only positive values");
	}	
} else {
	alert("Invalid figure name");
}

//8
let number = prompt("Enter a number");

if (isNumber(number)) {
	number = Math.abs(number);
	if (number < 10) {
		alert("Difference is 0");
	} else {
		let min = number % 10;
		let max = min;
		number = (number - min) / 10;
		
		while (number > 0) {
			let digit = number % 10;
			if (digit < min) {
				min = digit;
			} else if (digit > max) {
				max = digit;
			}
			number = (number - digit) / 10;
		}
		
		alert("Difference is " + max + " - " + min + " = " + (max - min));
	}	
} else {
	alert("Invalid number entered");
}
		


function isNumber(number) {
	if (number == null || isNaN(+number)) {
		return false;
	}
	
	return true;
}

