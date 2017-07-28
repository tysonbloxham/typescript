// function expression
var fullName : (first: string, last: string) => string;

fullName = function(first: string, last: string) {
	return first + " " + last;
}

console.log(fullName('Tyson', 'Bloxham'));

// immediately invoked version

(function(first: string, last: string) {
	console.log(first + " " + last);
})('Ian', 'Earley');

