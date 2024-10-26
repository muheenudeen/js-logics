function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(add(1)(2)(3)); // Output: 6



//model

function convertTo(unit) {
    return function(value) {
        return `${value} ${unit}`;
    };
}

const toMiles = convertTo("miles");
const toKilometers = convertTo("kilometers");

console.log(toMiles(5)); // Output: "5 miles"
console.log(toKilometers(10)); // Output: "10 kilometers"
