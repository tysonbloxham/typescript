console.log(fullName('Tyson', 'Bloxham'));
// console.log(otherFullName('Tyson', 'Bloxham'));
// console.log(thirdFullName('Tyson', 'Bloxham'));

// Function declaration
function fullName(first: string, last: string) : string {
	return first + " " + last;
}


// Function Expression

var otherFullName : (first: string, last: string) => string;
otherFullName = function(first: string, last: string) {
	return first + " " + last;
}

var thirdFullName : (first: string, last: string) => string = function(first: string, last: string) {
	return first + " " + last;
}
