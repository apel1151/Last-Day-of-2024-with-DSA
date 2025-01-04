function findMedian(arr) {
    // Step 1: Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Step 2: Find the middle index
    const middleIndex = Math.floor(arr.length / 2);

    // Step 3: Return the median
    if (arr.length % 2 === 0) {
        // If even number of elements, average the two middle elements
        return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
    } else {
        // If odd number of elements, return the middle element
        return arr[middleIndex];
    }
}

// Example Usage
console.log(findMedian([5, 3, 1, 2, 4])); // Output: 3
console.log(findMedian([1, 3, 2, 4]));    // Output: 2.5
