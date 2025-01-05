class Polygon {
    constructor(sides) {
        this.sides = sides; // Store the array of side lengths
    }

    // Method to calculate and return the perimeter
    perimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
}

// Example usage:
const triangle = new Polygon([3, 4, 5]); // A triangle with sides 3, 4, and 5
console.log(triangle.perimeter()); // Output: 12

const square = new Polygon([5, 5, 5, 5]); // A square with all sides of length 5
console.log(square.perimeter()); // Output: 20
