// constructor function
function Person(person_name, person_age, person_gender) {

	// assigning  parameter values to the calling object
		this.name = person_name,
		this.age = person_age,
		this.gender = person_gender,

		this.greet = function() {
			return ('Hi' + ' ' + this.name);
		}

}

let person1 = new Person("jay", 20, "male")
let person2 = new Person("Manoj", 22, "female")

console.log(person1.age);
console.log(person2.name);
console.log(person1.greet());
