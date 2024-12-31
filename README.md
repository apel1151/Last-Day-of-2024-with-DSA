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
