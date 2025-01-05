function factorial(n) {
    let result = 1; // Start with the identity value for multiplication

    for (let i = 1; i <= n; i++) {
        result *= i; // Accumulate the product of numbers from 1 to n
    }

    return result; // Final factorial result
}

console.log(factorial(0)); // Output: 1 (Correct because of initialization)
console.log(factorial(4)); // Output: 24 (1 * 1 * 2 * 3 * 4)
