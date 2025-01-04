function getDayName(dateString) {
    let dayName;
    
    // Create a new Date object from the dateString
    const date = new Date(dateString);
    
    // Array containing the day names
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Get the day index (0 for Sunday, 1 for Monday, etc.)
    const dayIndex = date.getDay();
    
    // Set the day name
    dayName = dayNames[dayIndex];
    
    // Return the day name
    return dayName;
}

// Sample usage:
console.log(getDayName("10/11/2009"));  // Output: Sunday
console.log(getDayName("11/10/2010"));  // Output: Wednesday
