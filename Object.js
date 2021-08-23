let student = {

	name: 'Manoj',
	age: 22,
	rollNo: 1234,
	greet: function(raj) {

		console.log("Hi" + raj);
	}
}


console.log(student["name"]);
student.greet("Manoj");


let student1 = {}

student1.name = "jay";
student1.age = 33;
student1.num = 225;

student1.hello = function(ja) {  console.log("hello" + ja); }
student1.hello("katraj");





function manoj(age,name,rollNo){
/*age =22;*/
console.log(age,name,rollNo);
}

manoj(22,"Manoj",2284);