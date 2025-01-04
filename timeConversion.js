function timeConversion(s) {
    // Write your code here
// Extract the period (AM/PM)
    const period = s.slice(-2);
    
    // Extract the hour, minutes, and seconds
    let hour = parseInt(s.slice(0, 2)); // Convert hour to an integer
    const minutesAndSeconds = s.slice(2, 8); // Extract minutes and seconds
    
    // Convert hour based on AM/PM
    if (period === "AM" && hour === 12) {
        hour = 0; // Convert 12 AM to 00
    } else if (period === "PM" && hour !== 12) {
        hour += 12; // Convert PM hour to 24-hour format
    }
    
    // Ensure hour is two digits
    const militaryHour = hour.toString().padStart(2, "0");
    
    // Combine everything
    return militaryHour + minutesAndSeconds;
}

// Sample Input
const inputTime = "07:05:45PM";
console.log(timeConversion(inputTime)); // Output: 19:05:45


###################################################

function timeConversion(s) {
  let [time, part] = [s.substring(0, s.length - 2), s.substring(s.length - 2)]
  time = time.split(":").map(Number)
  if (part === "PM" && time[0] === 12) time[0] = 12
  if (part === "PM" && time[0] !== 12) time[0] = (time[0] + 12) % 24
  if (part === "AM" && time[0] === 12) time[0] = 0
  return time
    .map(String)
    .map(s => s.padStart(2, "0"))
    .join(":")
}
