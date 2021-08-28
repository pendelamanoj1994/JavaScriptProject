let student = {
    name: "manoj",
    get getName(){
        return this.name;
    },


    set setName(newName){

        this.name=newName;
    }

}


console.log(student.name)
student.setName="Jaya"

console.log(student.name)
console.log(student.getName)