function outerFunction() {
    let outerVariable = "I am outside!";

    function innerFunction() {
        console.log(outerVariable); // Accessing the outer function's variable
    }

    return innerFunction;
}

const closureFunc = outerFunction(); // Call the outer function
closureFunc(); // Output: "I am outside!"
