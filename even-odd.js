function modifyArray(nums) {
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            // If the number is even, multiply by 2
            nums[i] *= 2;
        } else {
            // If the number is odd, multiply by 3
            nums[i] *= 3;
        }
    }
    // Return the modified array
    return nums;
}

// Example Usage
console.log(modifyArray([1, 2, 3, 4, 5]));  // Output: [3, 4, 9, 8, 15]
