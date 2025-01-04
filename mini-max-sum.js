function miniMaxSum(arr) {
    // Calculate the total sum of all elements
    const totalSum = arr.reduce((sum, num) => sum + num, 0);
    
    let minSum = Infinity;
    let maxSum = -Infinity;
    
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        let currentSum = totalSum - arr[i]; // Subtract the current element from total sum
        
        if (currentSum < minSum) {
            minSum = currentSum; // Update minimum sum
        }
        if (currentSum > maxSum) {
            maxSum = currentSum; // Update maximum sum
        }
    }
    
    // Print the results
    console.log(minSum, maxSum);
}


###################################################


function miniMaxSum(arr) {
    // Write your code here
    const sortedArray = arr.sort();

    let min_sum = 0

    let max_sum = 0

    for(let i =0; i < arr.length; i++){
        if( i < arr.length -1 ) {
            min_sum += arr[i]
        } 
        if (i > 0) {
            max_sum += arr[i]
        }
    }

    console.log(min_sum , max_sum) 

}



#################################################

function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    const min_sum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0);
    const max_sum = arr.slice(1).reduce((sum, num) => sum + num, 0);
    console.log(min_sum, max_sum);
}









