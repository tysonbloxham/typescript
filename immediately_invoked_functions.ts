var names : string[] = ['Tyson', 'Natalie', 'Slagathor'];
var counter : number = 0;

(function() {
	for (let name in names) {
		counter++;
	}
})();

console.log(counter);