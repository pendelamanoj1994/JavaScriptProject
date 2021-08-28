function student(){
 this.name="manoj"
}
let Chandu=new student()

student.prototype.age=22

console.log(Chandu.name)
console.log(student.prototype)
console.log(Chandu.age)