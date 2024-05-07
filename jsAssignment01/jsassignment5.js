// Regular expression for matching valid URLs
var urlRegex = /^(http|https):\/\/[\w\-\.]+(\.[a-zA-Z]+)+$/;

// Function to validate URL
function validateURL(url) {
    if (urlRegex.test(url)) {
        console.log("The input URL is valid.");
    } else {
        console.log("The input URL is not valid.");
    }
}

// Test cases
validateURL("http://www.example.com"); // Valid URL
validateURL("https://example.com"); // Valid URL
validateURL("ftp://example.com"); // Invalid URL
validateURL("http://123.45"); // Invalid URL
