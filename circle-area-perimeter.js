
function circle(r) {
    const PI = Math.PI; // Declare constant PI

    r = parseFloat(r); // Parse the radius as a floating-point number (no need to redeclare)

    // Calculate the area and perimeter
    let area = PI * r * r; // Area formula: πr²
    let perimeter = 2 * PI * r; // Perimeter formula: 2πr

    console.log(area);
    console.log(perimeter);
}

// Example usage
circle(6); // Call the function with radius 6
