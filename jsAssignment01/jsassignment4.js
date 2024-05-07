// Input list of books with authors and publication years
var books = [
    { title: "Book 1", author: "author1", year: 2005 },
    { title: "Book 2", author: "author2", year: 2012 },
    { title: "Book 3", author: "author3", year: 2008 },
    { title: "Book 4", author: "author4", year: 2015 }
    // Add more books as needed
];

// Function to filter books published after 2010 and capitalize author names
function filterAndCapitalize(books) {
    return books.filter(book => book.year > 2010)
                .map(book => ({...book, author: book.author.toUpperCase()}));
}

// Filtered and capitalized list of books
var filteredBooks = filterAndCapitalize(books);

// Displaying the filtered and capitalized list of books
console.log("Filtered and Capitalized Books Published After 2010:");
console.log(filteredBooks);
