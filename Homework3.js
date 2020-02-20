//1
let sentence = '_, we have a _.';
let missingWords = ['Houston', 'problem'];
let newSentence = replaceMissingWords(sentence, missingWords);

alert(newSentence);

function replaceMissingWords(sentence, missingWords) {
	let newSentence = sentence.split("");	
	let index = 0;

	for (let i = 0; i < newSentence.length; i++) {
		if (newSentence[i] == '_') {
			newSentence[i] = missingWords[index++];		
		}
	}
	
	return newSentence.join("");
}


//2
let givenArray = [8, 0, 1, 'hey', 'false', 15, 5, true, '2', null, 7, 3];
let numbers = getNumbers(givenArray);

alert(numbers.join(", "));


function getNumbers(givenArray) {
	let numbers = [];
	
	for (let i = 0; i < givenArray.length; i++) {
		if (isNumber(givenArray[i])) {
			numbers.push(givenArray[i]);		
		}
	}
	
	return numbers;
}


//3
let givenArray = [8, '1', 'hi', 2, 15, 5];
printNumberOfIntegersAndStrings(givenArray);

function printNumberOfIntegersAndStrings(givenArray) {
	let numCounter = 0;
	let strCounter = 0;
	
	for (let i = 0; i < givenArray.length; i++) {
		if (isNumber(givenArray[i])) {
			numCounter++;		
		} else {
			strCounter++;
		}
	}
	
	alert("Numbers: " + numCounter + ", Strings: " + strCounter);
}


//4
let givenArray = ['anymore', 'raven', 'me', 'communicate'];
printMaxMinLengths(givenArray);

function printMaxMinLengths(givenArray) {
	let min = Infinity;
	let max = -Infinity;
	
	for (let i = 0; i < givenArray.length; i++) {
		currentElement = givenArray[i];
		if (currentElement.length > max) {
			max = currentElement.length;		
		} else if (currentElement.length < min){
			min = currentElement.length;
		}
	}
	
	alert(min+max);
}

//5
let numbersArray = [1, 12, 4];
let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
	sum += numbersArray[i];
}

alert(sum)


//6 
let numbersArray = [3, 7, 12, 5, 20, 0];
let newArray = [];

for (let i = 0; i < numbersArray.length - 1; i++) {
	newArray.push(numbersArray[i] * numbersArray[i + 1]);
}

alert(newArray.join(", "));





function isNumber(value) {
	if (typeof value !== 'number') {
		return false
	}

	//NaN is not equal to NaN
	if (value !== Number(value)) {
		return false
	}
	
	return false;
}


