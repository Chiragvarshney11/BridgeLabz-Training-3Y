// Question 2: String Manipulation Report
// Cleans a product title and formats each word.

const productName = " wireless headphones PRO ";

// Remove leading and trailing spaces and convert to lowercase.
const trimmedName = productName.trim().toLowerCase();

// Capitalize the first letter of each word.
const titleCaseName = trimmedName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace "Pro" with the requested product label.
const finalTitle = titleCaseName.replace("Pro", "Pro Edition");

console.log(`Original title: "${productName}"`);
console.log(`Cleaned title: ${finalTitle}`);
console.log(`Title length: ${finalTitle.length}`);
