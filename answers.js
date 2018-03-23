//1.

const printCool = (name) => {
	console.log(`${name} is cool`);
}

console.log(printCool("captain reynolds"));

//2.

const calculateCube = (num) =>{
	return num**3;
}

calculateCube(5);

//3. 

const isAVowel = (letter) => {
	return /[aeiou]/i.test(letter);
}

isaVowel("b");

//4.

const getTwoLengths = (a, b) =>{
	let newArray = []
	newArray.push(a.length), newArray.push(b.length)
	return newArray
};

getTwoLengths("two", "three");

//5.

const getMultipleLengths = (oneWord) =>{
	let newArray = [];
	for(let i=0; i<oneWord.length; i++){
		let a = oneWord[i].length;	
	newArray.push(a)
	}
	return newArray
}

//6.

const maxOfThree = (num1, num2, num3) =>{
	let theKing = ''
	if(num1 >= num2 && num1 >= num3) {
		theKing = num1;
	} else if(num2 >= num1 && num2 >= num3) {
		theKing = num2;
	} else if(num3 >= num1 && num3 >= num2) {
		theKing = num3;
	}
return theKing;
}

//7. 

const printLongestWord = (word) =>{
	let theKing = word[0]
	word.forEach(value  => {
		if(value.length > theKing.length){
			theKing = value;
		};
	});	
	return theKing;
}


//8. 

const transmogrify = (a, b, c) =>{
	return ((a*b)**c);
}

console.log(transmogrify(2, 3, 8));

//9.
// Write a function that takes a parameter, a number. 
// The function should print the Fibonacci sequence up to that number.
// 1 2 3 5 8 13 = 
// 1+2 = 3 2+3 = 5 3+5 = 8

const fSequence = (a) =>{
//create an empty array
	let newArray = [];
//it is going to start at 0, up until it is one less than the argument
	for(i=0; i<a; i++){

//setting up the first two numbers as 1.... creating an OR for the first two indexes
	  if(i===0 || i===1){

//each time, just push 1
	    	newArray.push(1)  
	  } else {
//once that's done - push into that new array the value 1 index back + 2 index back
//each index from this point forward is the sum of those two
	   		newArray.push(newArray[i-1]+newArray[i-2])
	  }
//while it is adding, needs to check if the index it is at is equal to the argument
//if arguent matches one of the index values, get out of there by returning the array
	if(newArray[i] == a){
		return newArray
	}
	}
//outside of the loop, after it is finished by running the argument's amount of times... it didn't find the number
//so, return something that states that it couldn't be found
	return 'Argument is not fibonacci number'
}
fSequence(6);

const fSequence = (a) =>{
	let newArray = [];
//needs to only push even numbers into the array
	for(i=0; i<a; i++){	  
		if((newArray[i-1]+newArray[i-2])%2===0){
			newArray.push(newArray[i-1]+newArray[i-2])
		}
	if(newArray[i] == a){
		return newArray;
	}
	}
	return 'Argument is not fibonacci number'
}
fSequence(4);



// const fSequence = (yourWord) =>{
// 	let newArray = [];
// 	//find out the maximum number of iterations
// 	for(i=0; i<yourWord; i++){
// 		// add all previous numbers up until that number
// 		for(x=0; x<)
// 	}
// }
