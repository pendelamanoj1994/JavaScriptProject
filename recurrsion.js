function callitself(number) {


	console.log(number);

	const newNumber = number - 1;

	if (number > 0) {
		callitself(newNumber);
	}


}

callitself(4);