// function expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Tyson', 'Bloxham'));
// immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Ian', 'Earley');
//# sourceMappingURL=immediately_invoked_function_arguments.js.map