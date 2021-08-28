let student={
    name:"chandu"
}

Object.defineProperty(student, "changeName",{
    set: function(value){
        this.name=value;
    }
    }
);

Object.defineProperty(student, "getName",{
    get: function(){
        return this.name;
    }
    }

);


console.log(student.name)
student.changeName="raju"
console.log(student.name)