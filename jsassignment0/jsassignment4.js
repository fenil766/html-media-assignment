function extractElements(array) {
    // Destructure the array into variables representing the first, second, and last elements
    const [first, second, ...rest] = array;
    const last = rest.pop();
    
    // Return an array with the extracted elements
    return [first, second, last];
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const extractedElements = extractElements(inputArray);
console.log(extractedElements); // Output: [1, 2, 5]
