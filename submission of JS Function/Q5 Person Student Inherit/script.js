// Q5: Constructor-function inheritance using prototypes

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

// Connect Student.prototype to Person.prototype.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const student = new Student("Harsh", "AI and Data Science");

student.showName();
student.showBranch();

console.log(
    "Person prototype is in Student prototype chain:",
    Person.prototype.isPrototypeOf(Student.prototype)
);
