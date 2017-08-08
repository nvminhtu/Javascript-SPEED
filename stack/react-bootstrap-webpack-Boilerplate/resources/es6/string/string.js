// QUOTES
let singleQuoted = 'single-quoted';
let doubleQuoted = 'double-quoted';

let backticks = `backticks`;

// backticks is the best, we can add any expression into the string
// especially function calls

function sum(a,b) {
	return a + b;
}

console.log(`We have a sum: 1 + 2 = ${sum(1,2)}`);

// backticks can be multilined

let stringA = `
	Welcome
	to
	my House`;

console.log(stringA);

// singleQuoted and doubleQuoted => will make errors - cannot be multilined
// they must use special symbol like \n

// string length
console.log(`I love javascript`.length);

// iterate characters

let stringB = `Hello`;

for(let char of `Hello`) {
	console.log(char);
}

// String are immutable
let stringC = `Hi`;
//stringC[0] = 'F';
//console.log(stringC); // error
