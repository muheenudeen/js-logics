const person = {
    firstName: "John",
    lastName: "Doe",
};

function greet(greeting) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}`);
}

// Using `call` to set `this` to `person`
greet.call(person, "Hello"); // Output: "Hello, John Doe"
