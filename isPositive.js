function isPositive(a) {
    if (a > 0) {
        return "YES";
    } else if (a === 0) {
        throw new Error("Zero Error");
    } else if (a < 0) {
        throw new Error("Negative Error");
    }
}

console.log(isPositive(-1));



###############


function isPositive(a) {
    try {
        if (a > 0) {
            return "YES"; // Positive number
        } else if (a === 0) {
            throw new Error("Zero Error"); // Custom error for zero
        } else if (a < 0) {
            throw new Error("Negative Error"); // Custom error for negative numbers
        }
    } catch (error) {
        console.log("Caught error: " + error.message); // Catch and log the error
    }
}

console.log(isPositive(5));  // Output: "YES"
console.log(isPositive(0));  // Output: "Caught error: Zero Error"
console.log(isPositive(-1)); // Output: "Caught error: Negative Error"
