function outer() {
    const outerVar = "I'm from outer!";

    function inner() {
        const innerVar = "I'm from inner!";
        console.log(outerVar); // Can access outer function's variable
        console.log(innerVar); // Can access its own variable
    }

    inner();
    console.log(innerVar); // Error: innerVar is not defined here
}

outer();
