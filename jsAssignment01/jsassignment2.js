// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
}

// Delay in milliseconds
var delay = 3000; // 3 seconds

// Function to display progress indication and generate random number after delay
function generateNumberWithDelay() {
    console.log("Generating random number in " + delay / 1000 + " seconds...");
    var remainingTime = delay / 1000;
    var countdownInterval = setInterval(function() {
        remainingTime--;
        if (remainingTime > 0) {
            console.log("Time remaining: " + remainingTime + " seconds...");
        } else {
            clearInterval(countdownInterval);
            var randomNumber = generateRandomNumber();
            console.log("Random number generated: " + randomNumber);
        }
    }, 1000); // Update progress indication every second
}

// Call the function to generate number with delay
generateNumberWithDelay();
