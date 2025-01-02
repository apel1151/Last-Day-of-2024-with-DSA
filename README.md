# DSA-
Overview of Datastructure and Algorithm

31-12-2024 >> Today's exercise

const groceryList = ["Bread", "Meat", "Milk", "Oil", "Rice", "Sauce", "Sugar"].sort(); // Sorted list

const binarySearch = (arr, item)=>{
    
let left = 0;
let right = groceryList.length-1;

while(left<=right){
     const mid = Math.floor((left + right) / 2);
     if(arr[mid] === item){
         console.log(`Item is found: ${item} at index ${mid}`);
            return mid;
        
     }else if(arr[mid] < item){
         left  = mid + 1; // search in the right
     }else{
         right = mid -1 // search in the left
     }
     
  
}
  console.log("Item not found");
  return -1; // Item not found


}

binarySearch(groceryList, "Meat");


const groceryList = ["Bread", "Meat", "Milk", "Oil", "Rice", "Sauce", "Sugar"];

const findItem = (arr, item) =>{
    for(let i=0; i<arr.length; i++){
        if(arr[i] === item){
            console.log(`Item is found: ${item} at index- ${i}`);
        }else{
            console.log("Item is not found")
        }
    }
}

//call the func
findItem(groceryList, "Sauce")





const bigO = (n) =>{
  for(let i= 0; i<=Math.min(5, n); i++){
      console.log(i)
  }
}

bigO(8)


const arr = [1, 3, 4, 5]

const getItems = (arr) =>{
    for (let value of arr) {
    console.log(value);
}

}

getItems(arr);


const arr = [1, 3, 4, 5]



const getItems = (arr) =>{
    arr.forEach((value, index) =>{
        console.log(`Value is ${value} Index is ${index}`)
    })
}

getItems(arr)

const secondLargest = (arr) => {
    if (arr.length < 2) return null;
    let first = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }
    
    console.log(`Largest Number is: ${first} \nSecond Largest Number is : ${second}`)
};


secondLargest([10, 20, 30, 40])


const arr = [];
console.log(typeof(arr); // true

const arr = [];
console.log(Array.isArray(arr)); // true


class customArray {
    constructor() {
        this.data = {}; // Store elements in an object like an array
        this.length = 0;
        console.log(`Previous array is ${JSON.stringify(this.data)} and length is ${this.length}`);
        
    }

    // push method to add an element at the end of the array-like object
    push(element) {
        this.data[this.length] = element;
        this.length++;
        return this.length;
    }
}

const newArray = new customArray();

newArray.push(10); // Adds 10 to the custom array
console.log(`Present array is ${JSON.stringify(newArray.data)} and length is ${newArray.length}`); // Outputs the updated array


newArray.push(10); // Adds 10 to the custom array
newArray.push(20);
newArray.push(30);
newArray.push(40);


newArray.pop()
newArray.pop()
newArray.pop()
newArray.pop()
newArray.pop()
newArray.push(10)
console.log(`Present array is ${JSON.stringify(newArray.data)} and length is ${newArray.length}`); // Outputs the updated array







/ Delete an element by index
    deleteByIndex(index) {
        if (index >= 0 && index < this.length) {
            const deletedElement = this.data[index];
            // Shift elements to the left from the deleted index
            for (let i = index; i < this.length - 1; i++) {
                this.data[i] = this.data[i + 1];
            }
            delete this.data[this.length - 1]; // Remove the last (now duplicate) element
            this.length--; // Update length
            return deletedElement; // Return the deleted element
        }
        return undefined; // Return undefined for invalid index
    }
}


const myArray = [10,20,30.40];



const reverseString = (str) =>{
    const arr = str.split("")
    const reverseArray = arr.reverse();
    const newArr = reverseArray.join("")
    return newArr
    
}
    console.log(reverseString("Hello"));
    

const reverseString = (str) =>{
    const newArray = str.split("").reverse().join("")
    return newArray;
}
console.log(reverseString("Apel Mahmud"));


const reverseString = (str) =>{
    let reversed = ""
    for(i=str.length -1; i>=0; i--){
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("Hello"));


const reverseInt = (n) =>{
    const reversed = n.toString().split("").reverse().join("");
    return parseInt(reversed);
}

console.log(reverseInt(-123))



const capitalizeString = (str) =>{
    const words = str.split(" ");
    let result = "";
    for(i=0; i<words.length; i++){
        const capitalizedWord = words[i].charAt(0).toUpperCase()+words[i].slice(1);
        result += capitalizedWord + " ";
        // if(i < words.length -1){
        //     result += " ";
        // }
    }
    return result;
    
}

console.log(capitalizeString("hello world "));


const capitalizeString = (str) =>{

    return str
          .toLowerCase()
          .split(" ")
          .map((word) =>{
            return word[0].toUpperCase() + word.slice(1);
             
          })
          .join(" ");
    
}

console.log(capitalizeString("hello world"))









