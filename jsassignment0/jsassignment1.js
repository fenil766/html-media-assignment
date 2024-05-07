function wordCount(text) {
    // Split the string into words
    const words = text.split(/\s+/);
    
    // Initialize an object to store word counts
    const wordCounts = {};
    
    // Count occurrences of each word
    words.forEach(word => {
        // Increment count if word is already in object, else set count to 1
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
    
    return wordCounts;
}

// Example usage:
const text = "the quick brown fox jumps over the lazy dog the quick brown fox";
console.log(wordCount(text));
