"use strict";

// Q3: Transaction Validator
const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const validTransactions = [];
const invalidTransactions = [];

class TransactionValidationError extends Error {
  constructor(message, category) {
    super(message);
    this.name = "TransactionValidationError";
    this.category = category;
  }
}

for (const transaction of transactions) {
  try {
    if (transaction === null) {
      throw new TransactionValidationError("Transaction entry is null.", "NULL_ENTRY");
    }

    if (transaction.id === undefined || transaction.amount === undefined) {
      throw new TransactionValidationError("Transaction id or amount is missing.", "MISSING_PROPERTY");
    }

    if (typeof transaction.amount !== "number" || !Number.isFinite(transaction.amount)) {
      throw new TransactionValidationError("Amount must be a finite number.", "INVALID_AMOUNT");
    }

    if (transaction.amount < 0) {
      throw new TransactionValidationError("Transaction amount cannot be negative.", "NEGATIVE_AMOUNT");
    }

    validTransactions.push(transaction);
    console.log(`Transaction ${transaction.id}: VALID`);
  } catch (error) {
    invalidTransactions.push({
      transaction,
      category: error.category || "UNKNOWN_ERROR",
      message: error.message
    });
    console.log(`Transaction rejected [${error.category || error.name}]: ${error.message}`);
  }
}

console.log("\\nFINAL TRANSACTION REPORT");
console.log("Valid count:", validTransactions.length);
console.log("Failed count:", invalidTransactions.length);
console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);

// Debugging tip: set a breakpoint on the first line inside the for loop
// and watch transaction, validTransactions and invalidTransactions.
