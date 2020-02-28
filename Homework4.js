//1
let n = prompt("Please enter a positive number");

if (isNumber(n) && n > 0) {
	fibonacciNumbers = getFibonacciNumbersUpTo(+n);
	alert(fibonacciNumbers.join(","));
} else {
	alert("Invalid number entered!");
}

function getFibonacciNumbersUpTo(n) {
	if (n == 1) {
		return [0];
	}
	let fibonacciNumbers = [0, 1];
	let sum = fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2];
	
	while (sum < n) {
		fibonacciNumbers.push(sum);
		sum = fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2];
	}
	
	return fibonacciNumbers;
}


//2
let n = prompt("Please enter a number");

if (isNumber(n)) {
	let digits = getDigits(+n);
	let sum = sumOfDigits(digits);
	let product = productOfDigits(digits);
	
	if (sum == 0) {
		alert("Cannot calculate.");
	} else {	
		if (product % sum == 0) {
			alert("Quotient is " + (product / sum) + ".");
		} else {
			alert("Remainder is " + (product % sum) + ".");
		}
	}	
} else {
	alert("Invalid number entered!");
}


function getDigits(n) {
	let digits = [];
	while (n > 0) {
		let lastDigit = n % 10;
		digits.push(lastDigit);
		n = (n - lastDigit) / 10;
	}
	
	return digits;
}

function sumOfDigits(digits) {
	let sum = 0;
	for (let i = 0; i < digits.length; i++) {
		sum += digits[i];
	}
	
	return sum;
}

function productOfDigits(digits) {
	let product = 1;
	for (let i = 0; i < digits.length; i++) {
		product *= digits[i];
	}
	
	return product;
}


//3
let givenArray = [3, -8, 0, 6, 2, 7, -4, 4, 7, 9];
let minMax = getMinMax(givenArray);

if (minMax.length != 2) {
	alert("Invalid array");
} else {
	let min = minMax[0];
	let max = minMax[1];
	let diff = max - min;
	alert(minMax.join(','));
	alert(givenArray.includes(diff));
}


function getMinMax(givenArray) {
	if (!Array.isArray(givenArray) || givenArray.length <= 1) {
		return [];
	}
	
	let min = Infinity;
	let max = -Infinity;
	
	for (let i = 0; i < givenArray.length; i++) {
		if (givenArray[i] > max) {
			max = givenArray[i];		
		}
		if (givenArray[i] < min){
			min = givenArray[i];
		}
	}
	
	return [min, max];
}






//4
let givenArray = [23, -98, 0, -456, 12, 8];
let secondMaxIndex = getIndexOfSecondMax(givenArray);
alert(secondMaxIndex != -1 ? secondMaxIndex : "No second maximum element found!");

function getIndexOfSecondMax(givenArray) {
	let firstMax = -Infinity;
	let firstMaxIndex = -1;
	let secondMax = -Infinity;
	let secondMaxIndex = -1;
	
	for (let i = 0; i < givenArray.length; i++) {
		if (givenArray[i] > firstMax) {
			secondMax = firstMax;
			secondMaxIndex = firstMaxIndex;
			firstMax = givenArray[i];
			firstMaxIndex = i;
		} else if (givenArray[i] > secondMax) {
            secondMax = givenArray[i];
			secondMaxIndex = i;
        }
	}
	
	return secondMaxIndex;
}

//5
let givenArray = [1, 2, 3, 4];
let padAmmount = 4;
let repeat = 3;


if (validateParams(givenArray, padAmmount, repeat)) {
	let paddedArray = getPaddedArray(givenArray, padAmmount, repeat);
	alert(paddedArray.join(', '));
} else {
	alert("Invalid parameter(s)");
}




function getPaddedArray(givenArray, padAmmount, repeat) {
	let firstHalf = padArray(givenArray.slice(0, padAmmount), repeat);
	let secondHalf = padArray(givenArray.slice(givenArray.length - padAmmount, givenArray.length), repeat);
		
	return firstHalf.concat(givenArray, secondHalf);
}

function padArray(subArray, repeat) {
	let newArray = [];
	for (let i = 0; i < repeat; i++) {
		for (let j = 0; j < subArray.length; j++)
		newArray.push(subArray[j]);
	}		
	
	return newArray;
}


function validateParams(givenArray, padAmmount, repeat) {
	if (!Array.isArray(givenArray) || givenArray.length == 0 || padAmmount > givenArray.length || repeat <= 0) {
		return false;
	}
	
	return true;
}



//6
//Console.log()-ov cher tpum nuyn ban@ irar koghq, ughghaki qanakner tsuyts tali, stipvatc matrixov aretsi
let n = prompt("Please enter a positive number");

if (isNumber(n) && n > 0) {	
	printRectangle(fillRectangleWithGivenSymbol(createEmptyRectangle(n), '*  '));
} else {
	alert("Invalid number entered!");
}


//7
let n = prompt("Please enter a positive number");

if (isNumber(n) && n > 0) {	
	let rect = fillRectangleWithGivenSymbol(createEmptyRectangle(n), '   ');
	printRectangle(fillRectangleCircumferenceWithGivenSymbol(rect, '*  '));
} else {
	alert("Invalid number entered!");
}


function fillRectangleCircumferenceWithGivenSymbol(rect, symbol) {
	let i = 1;
	let j = 0;
	
	for (; j < rect.length; j++) {
		rect[0][j] = symbol;
	}
	
	for (; i < rect.length - 1; i++) {
		rect[i][0] = symbol;
		rect[i][rect.length - 1] = ' ' + symbol;
	}
	
	for (j = 0 ; j < rect.length; j++) {
		rect[i][j] = symbol;
	}
	
	return rect;
}



function fillRectangleWithGivenSymbol(rect, symbol) {
	for (let i = 0; i < rect.length; i++) {
		for (let j = 0; j < rect.length; j++) {
			rect[i][j] = symbol;
		}
	}
	
	return rect;
}


function createEmptyRectangle(size) {
	let rect = [size];
	for (let i = 0; i < size; i++) {
		rect[i] = [size];
	}	
	
	return rect;
}

function printRectangle(rect) {
	let str = '';
	for (let i = 0; i < rect.length; i++) {
		str += rect[i].join('') + "\n";
	}
	
	alert(str);
}

//8
let n = prompt("Please enter a positive number");

if (isNumber(n) && n > 0) {	
	printNumbersPattern(n);
} else {
	alert("Invalid number entered!");
}


function printNumbersPattern(n) {	
	for (let i = j = 1; i <= n; i++) {
		let str = '';
		for (j = 1; j <= i; j++) {
			str += j;
		}
		console.log(str + "\n");
	}
	
	for (let i = n; i > 0; i--) {
		let str = '';
		for (j = 1; j < i; j++) {
			str += j;
		}
		console.log(str + "\n");
	}	
}



function isNumber(number) {
	if (number == null || isNaN(+number)) {
		return false;
	}
	
	return true;
}

