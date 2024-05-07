// Original inventory with prices in USD
var inventory = {
    "item1": 10, // Price in USD
    "item2": 20,
    "item3": 30,
    // Add more items as needed
};

// Exchange rate from USD to INR
var exchangeRate = 80;

// Function to convert USD to INR
function convertToINR(priceUSD) {
    return priceUSD * exchangeRate;
}

// Using map to convert prices to INR
var inventoryINR = Object.fromEntries(
    Object.entries(inventory).map(([item, priceUSD]) => [item, convertToINR(priceUSD)])
);

// Displaying the converted inventory
console.log("Inventory with prices in Indian Rupees:");
console.log(inventoryINR);
