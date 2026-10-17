// Question 1: Scope Conflict Resolver
// Demonstrates global and local variables.

let bonus = 5000; // Global variable

function calculateSalary(isPermanent) {
    let salary = 40000; // Local variable

    // Add the global bonus only for permanent employees.
    if (isPermanent) {
        salary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ₹${salary}`);
}

// Test both cases.
calculateSalary(true);
calculateSalary(false);

console.log(`Global bonus remains: ₹${bonus}`);
