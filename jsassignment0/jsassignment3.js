function swapValues(x, y) {
    // Destructure the variables into an array and immediately reassign them with swapped positions
    [x, y] = [y, x];
    
    // Return an array with the swapped values
    return [x, y];
}

// Example usage:
let a = 5;
let b = 10;
[a, b] = swapValues(a, b);
console.log(a, b); // Output: 10 5
