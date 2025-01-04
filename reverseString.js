function reverseString(s) {
    try {
        if (typeof s !== "string") {
            throw new Error("Input must be a string."); // Custom error
        }
        s = s.split("").reverse().join(""); // Reverse the string
    } catch (error) {
        // Handle the custom error and log the message
        console.log("Custom Error: " + error.message);
    }
    return s; // If no error occurs, the reversed string is returned
}

reverseString(1234); // Logs: Custom Error: Input must be a string.


#########
function reverseString(s) {
    try {
        // Example of an error that will naturally occur
        s = s.split("").reverse().join(""); // This will fail if `s` is not a string
    } catch (error) {
        // Catch the error and log the message
        console.log("Custom Error: " + error.message);
    }
    return s; // If no error occurs, the reversed string is returned
}

reverseString(1234); // This will log: Custom Error: s.split is not a function
