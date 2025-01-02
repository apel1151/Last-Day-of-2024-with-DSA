
const arrayChunk = (arr, chunkSize) => {
    const newArray = [];
    let index = 0;

    while (index < arr.length) {
        newArray.push(arr.slice(index, index + chunkSize));
        index += chunkSize;
    }

    return newArray;
};

console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
// Output: [[1, 2, 3], [4, 5, 6], [7, 8]]



const arrayChunk = (arr, chunkSize) => {
    const newArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const extractedChunk = arr.slice(i, i + chunkSize); // Extract a chunk of size 'chunkSize'
        newArray.push(extractedChunk); // Add the chunk to the newArray
    }
    return newArray;
};

console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
// Expected result: [[1, 2, 3], [4, 5, 6], [7, 8]]
