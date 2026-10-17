// Academic Performance Evaluator
// A mark below 35 in any subject results in detention.

const marks = [88, 91, 76, 84, 79];
const totalMarks = marks.reduce((total, mark) => total + mark, 0);
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

let result;

if (marks.some(mark => mark < 35)) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50) {
    result = "Promoted";
} else {
    result = "Detained";
}

console.log(`Marks: ${marks.join(", ")}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
