function getSecondLargest(nums) {
    let first = -Infinity;  // To store the largest number
    let second = -Infinity; // To store the second largest number
    
    // Loop through the array to find the largest and second largest
    for (let num of nums) {
        if (num > first) {
            second = first; // Update second largest to the old largest
            first = num;    // Update largest to the new number
        } else if (num > second && num !== first) {
            second = num;   // Update second largest if it's a unique smaller number
        }
    }
    
    return second;
}

// Example usage
console.log(getSecondLargest([2, 3, 6, 6, 5])); // Output: 5
