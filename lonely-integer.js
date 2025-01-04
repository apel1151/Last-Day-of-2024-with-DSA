function findUnique(arr) {
    let unique = 0; // Step 1: Initialize 'unique' with 0
    
    // Step 2: XOR all elements in the array
    for (let num of arr) {
        unique ^= num; // XOR the current number with 'unique'
    }
    
    return unique; // Step 3: Return the unique number
}


