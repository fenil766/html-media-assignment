function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example usage:
const numbers = [1, 2, 3, 4, 4, 5, 5, 6];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]
