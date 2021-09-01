class Human {
    static planet = "Earth";

    #age;
    constructor(age) {
        this.#age = age;
    }

    get age() {
        return this.#age;
    }

    set age(age) {
        if (age < 0 || isNaN(age)) {
            throw Error("Invalid age passed");
        }

        this.#age = age;
    }

    speak() {
        console.log("Huuga Booga");
    }

    eat() {
        console.log("Eating...");
    }

    static jump() {
        console.log("Jumping high...");
    }
}

class Person extends Human {
    #name;
    constructor(name, age) {
        super(age);
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    speak() {
        console.log(`My name is ${this.name} and I'm ${this.age}`)
    }
}

class Student extends Person {
    #grade;

    constructor(name, age, grade) {
        super(name, age);
        this.#grade = grade;
    }

    get grade() {
        return this.#grade;
    }

    speak() {
        super.speak();
        console.log(`And I'm also in ${this.grade} grade`);
    }

    learn() {
        console.log(`Learning JavaScript...`);
    }

    toString() {
        return `I'm a student and my name is ${this.name}`;
    }
}

class Teacher extends Person {
    constructor(name, age) {
        super(name, age);
    }

    speak() {
        super.speak();
        console.log(`I'm a poor teacher... plz help`);
    }

    teach() {
        console.log("Teaching for money");
    }
}

const person = new Person("Dieter", 34);

const student = new Student("Paul", 12, 6);
const teacher = new Teacher("Müller", 57);

const school = [student, teacher];


school.forEach(person => {
    console.log("------------------");
    person.speak();

    if (person instanceof Student) {
        person.learn();
    } else if (person instanceof Teacher) {
        person.teach();
    }
    console.log("------------------");
});