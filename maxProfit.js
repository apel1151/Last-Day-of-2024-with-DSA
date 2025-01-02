
const maxProfit = (prices) => {
    let minPrice = Infinity; // Initialize the minimum price to a very high value
    let maxProfit = 0; // Initialize the maximum profit to 0

    for (let i = 0; i < prices.length; i++) {
        // Check if the current price is less than the minimum price seen so far
        if (prices[i] < minPrice) {
            minPrice = prices[i]; // Update minPrice to the new lower price
        } else {
            // Calculate the potential profit if we sell at the current price
            const profit = prices[i] - minPrice;

            // Update maxProfit if the current potential profit is greater than the previous maxProfit
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit; // Return the maximum profit found
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5



// prices = [7, 1, 5, 3, 6, 4]

const maxProfit = (prices) =>{
    // assume first price is the minimum price
    let minPrice = prices[0];
    let maxProfit = 0 ;
    
    for(let i=1; i < prices.length; i++){
        const currentPrice = prices[i];
        minPrice = Math.min(currentPrice, minPrice);
       
       const potentialProfit = currentPrice - minPrice;
       
       maxProfit = Math.max(potentialProfit, maxProfit);
    }
    
    return maxProfit;
}
