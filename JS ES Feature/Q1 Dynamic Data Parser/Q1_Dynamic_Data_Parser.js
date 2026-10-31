"use strict";

// Q1: Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", "                     ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

console.log("DYNAMIC DATA PARSER REPORT");
console.log("-------------------------");

for (let index = 0; index < apiData.length; index++) {
  const originalValue = apiData[index];
  const numberValue = Number(originalValue);
  const booleanValue = Boolean(originalValue);
  const stringValue = String(originalValue);

  console.log(`\\nItem ${index + 1}`);
  console.log(`Original: ${stringValue}`);
  console.log(`Number: ${numberValue}`);
  console.log(`Boolean: ${booleanValue}`);
  console.log(`String: "${stringValue}"`);

  // The assignment explicitly treats NaN, whitespace-only strings and "100px" as invalid.
  const isWhitespaceOnly = typeof originalValue === "string" && originalValue.trim() === "";
  const isInvalidByAssignment = Number.isNaN(numberValue) || isWhitespaceOnly ||
    (typeof originalValue === "string" && originalValue.trim() === "100px");

  if (isInvalidByAssignment) {
    invalidNumbers.push(originalValue);
    console.log("Status: INVALID numeric data");
  } else {
    validNumbers.push(numberValue);
    console.log("Status: VALID numeric data");
  }
}

console.log("\\nFINAL ARRAYS");
console.log("Valid numeric data:", validNumbers);
console.log("Invalid data:", invalidNumbers);
