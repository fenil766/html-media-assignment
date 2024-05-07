function extractNameAndStreet(person) {
    // Destructure the nested object to extract name and street properties
    const { name, address: { street } } = person;
    
    // Return an object with name and street properties
    return { name, street };
}

// Example usage:
const person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown"
    }
};

const { name, street } = extractNameAndStreet(person);
console.log("Name:", name); // Output: Name: John Doe
console.log("Street:", street); // Output: Street: 123 Main St
