function createPerson(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        },
    };
}

const person1 = createPerson("Alice", 25);
const person2 = createPerson("Bob", 30);

person1.greet(); // Output: "Hello, my name is Alice and I am 25 years old."
person2.greet(); // Output: "Hello, my name is Bob and I am 30 years old."
