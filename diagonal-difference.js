function diagonalDifference(arr) {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    
    // Loop through each row of the matrix
    for (let i = 0; i < arr.length; i++) {
        primaryDiagonalSum += arr[i][i];  // Elements from top-left to bottom-right
        secondaryDiagonalSum += arr[i][arr.length - 1 - i];  // Elements from top-right to bottom-left
    }
    
    // Return the absolute difference
    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

// Sample input
let matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

console.log(diagonalDifference(matrix));  // Output: 15
