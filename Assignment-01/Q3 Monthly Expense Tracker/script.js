// Monthly Expense Tracker
// Calculate total, average, and the final amount after 10% tax.

const expenses = [
    { category: "Food", amount: 4500 },
    { category: "Travel", amount: 1800 },
    { category: "Rent", amount: 9000 },
    { category: "Bills", amount: 1600 },
    { category: "Leisure", amount: 1200 }
];

let totalExpenses = 0;

for (const expense of expenses) {
    totalExpenses += expense.amount;
}

const averageExpense = totalExpenses / expenses.length;
const taxRate = 0.10;
const taxAmount = totalExpenses * taxRate;
const finalAmount = totalExpenses + taxAmount;

console.table(expenses);
console.log(`Total expenses: ₹${totalExpenses.toFixed(2)}`);
console.log(`Average expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Tax (10%): ₹${taxAmount.toFixed(2)}`);
console.log(`Final amount after tax: ₹${finalAmount.toFixed(2)}`);
