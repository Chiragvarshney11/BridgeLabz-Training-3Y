"use strict";

// Q9: JSON Audit
const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const auditErrors = [];

for (let index = 0; index < rawData.length; index++) {
  const lineNumber = index + 1;

  try {
    const parsedData = JSON.parse(rawData[index]);

    if (!parsedData || typeof parsedData !== "object" || Array.isArray(parsedData)) {
      throw new Error("JSON value must be an object.");
    }

    if (!Object.prototype.hasOwnProperty.call(parsedData, "user") ||
        !Object.prototype.hasOwnProperty.call(parsedData, "age")) {
      throw new Error("Required key 'user' or 'age' is missing.");
    }

    const age = Number(parsedData.age);
    if (!Number.isFinite(age)) {
      throw new Error("Age must be a valid number.");
    }

    const cleanRecord = { user: String(parsedData.user), age };
    cleanData.push(cleanRecord);

    if (age < 18) {
      console.log(`Line ${lineNumber}: Under-18 user — ${cleanRecord.user}`);
    } else {
      console.log(`Line ${lineNumber}: Valid adult record — ${cleanRecord.user}`);
    }
  } catch (error) {
    auditErrors.push({ line: lineNumber, message: error.message });
    console.log(`Line ${lineNumber}: ERROR — ${error.message}`);
  }
}

console.log("\\nJSON AUDIT SUMMARY");
console.log("Clean records:", cleanData);
console.log("Error count:", auditErrors.length);
console.log("Errors:", auditErrors);

// Debugging tip: put a breakpoint at JSON.parse and step through each loop iteration.
// A parsing or validation error jumps directly to catch for that iteration.
