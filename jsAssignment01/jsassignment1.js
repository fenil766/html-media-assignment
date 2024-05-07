// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Variable storing input string
var input = "Hello, world!";

// Delay function to reverse string after 2 seconds
function reverseAfterDelay() {
    setTimeout(function() {
        var reversedString = reverseString(input);
        console.log(reversedString);
    }, 2000); // 2000 milliseconds = 2 seconds
}

// Call the function to reverse after delay
reverseAfterDelay();
