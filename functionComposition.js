function double(x) {
    return x * 2;
}

function square(x) {
    return x * x;
}


//model


function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

const doubleThenSquare = compose(square, double);
console.log(doubleThenSquare(3)); // Output: 36 (3 * 2 = 6; 6 * 6 = 36)
