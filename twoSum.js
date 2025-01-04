


const twoSum = (numbers, target) =>{
    
    for(let i = 0; i<numbers.length; i++){
        
        for(let j = i + 1; j<numbers.length; j++){
            if(numbers[i] + numbers[j] === target){
                return [i, j];
            }
        }
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15] , 18)); //target = 9


const twoSum = (numbers, target) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return {
                    indices: [i, j],
                    elements: [numbers[i], numbers[j]],
                };
            }
        }
    }
    return null; // Return null if no solution is found
};

console.log(twoSum([2, 7, 11, 15], 9)); 



const twoSum = (numbers, target) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [[i, j], [numbers[i], numbers[j]]];
            }
        }
    }
    return null;
};

console.log(twoSum([2, 7, 11, 15], 9)); 

const twoSum = (numbers, target) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                console.log(`Indices: ${i}, ${j}`);
                console.log(`Elements: ${numbers[i]}, ${numbers[j]}`);
                return; // Exit the function after printing
            }
        }
    }
    console.log("No solution found");
};

twoSum([2, 7, 11, 15], 9); // Example usage
