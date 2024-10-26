let obj = { name: "Alice" };

function changeProperty(objRef) {
    objRef.name = "Bob";
    console.log("Inside function:", objRef.name); // Outputs: Inside function: Bob
}

changeProperty(obj);
console.log("Outside function:", obj.name); // Outputs: Outside function: Bob





//value


let x = 10;

function changeValue(val) {
    val = 20;
    console.log("Inside function:", val); // Outputs: Inside function: 20
}

changeValue(x);
console.log("Outside efunction:", x); // Outputs: Outside function: 10
