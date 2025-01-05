function getLetter(s) {
    let letter;
    // Get the first character of the string
    let firstChar = s[0];
    
    // Check which group the character belongs to
    if ('aeiou'.includes(firstChar)) {
        letter = 'A';
    } else if ('bcdfg'.includes(firstChar)) {
        letter = 'B';
    } else if ('hjklm'.includes(firstChar)) {
        letter = 'C';
    } else if ('npqrstuvwxyz'.includes(firstChar)) {
        letter = 'D';
    }
    
    return letter;
}

// Example Usage
console.log(getLetter('adfgt')); // Output: A
console.log(getLetter('hello')); // Output: C
console.log(getLetter('zebra')); // Output: D
