let obj = { name: "Alice" };

function changeProperty(objRef) {
    objRef.name = "Bob";
    console.log("Inside function:", objRef.name); // Outputs: Inside function: Bob
}

changeProperty(obj);
console.log("Outside function:", obj.name); // Outputs: Outside function: Bob





//value


