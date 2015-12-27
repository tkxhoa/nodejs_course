function createAdder(baseNumber) {
	return function (numberToAdd) {
		return baseNumber + numberToAdd;
	}
}

var addTen = createAdder(10);
console.log(addTen(2)); //12
console.log(addTen(32));//42