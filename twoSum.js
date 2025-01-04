


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




##########################

const twoSum = (numbers, target) => {
    const numIndices = new Map();

    for (let i = 0; i < numbers.length; i++) {
        const complement = target - numbers[i];

        if (numIndices.has(complement)) {
            const index1 = numIndices.get(complement);
            const index2 = i;
            console.log(`Indices: ${index1}, ${index2}`);
            console.log(`Elements: ${numbers[index1]}, ${numbers[index2]}`);
            return; // Exit the function after printing
        }

        numIndices.set(numbers[i], i);
    }

    console.log("No solution found");
};

// Example usage:
twoSum([2, 7, 11, 15], 9);










