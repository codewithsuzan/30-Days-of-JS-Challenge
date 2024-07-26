// Activity 1: Class Definition

// Task 1

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Namaste,my name is ${this.name} and i am ${this.age} years old `
    );
  }
}
const personInstance = new Person("Sujan", 18);
console.log(personInstance.greet());

// Task 2:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Namaste,my name is ${this.name} and i am ${this.age} years old `
    );
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age is: ${newAge}`);
  }
}
const personInstance = new Person("Sujan", 18);
console.log(personInstance.greet());
personInstance.updateAge(15);

// Activity 2: Class Inheritance

// Task 3:

class Person {
  constructor(name, age, Id) {
    this.name = name;
    this.age = age;
    this.Id = Id;
  }
}

class Student extends Person {
  getStudentId() {
    return this.Id;
  }
}

const studentInheritancePerson = new Student("Sujan", 18, 137);
console.log(`Student id is: ${studentInheritancePerson.getStudentId()}`);

// Task 4:

class Person {
  constructor(name) {
    this.name = name;
  }
  greeting() {
    return `Hello, my name is ${this.name}.`;
  }
}

class Student extends Person {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }
  greeting() {
    return `Hello, my name is ${this.name} and my student ID is ${this.studentId}.`;
  }
}
const student = new Student("Sujan", "137");
console.log(student.greeting());

// Activity 3: Static Methods and Properties

// Task 5:

class Person {
  constructor(name) {
    this.name = name;
  }
  static genericGreeting() {
    return `Hello! Welcome to our community.`;
  }
}

console.log(Person.genericGreeting());

// Task 6:

class Student {
  static studentCount = 0;

  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
    Student.studentCount++;
  }
}

let student1 = new Student("Sujan", 137);
let student2 = new Student("Nirmal", 136);
let student3 = new Student("Aryan", 112);
console.log(Student.studentCount);

// Activity 4: Getters and Setters

// Task 7:

class Persons {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Person extends Persons {
  get FullName() {
    return `${firstName} ${lastName}`;
  }
}

const person = new Person("Sujan", "Timalsina");
console.log(person.FullName());

// Task 8:

class Persons {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
class Person extends Persons {
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const person = new Person("Sujan", "Timalsina");
console.log(person.fullName);
person.fullName = "Nirmal Gajurel";
console.log(person.fullName);
