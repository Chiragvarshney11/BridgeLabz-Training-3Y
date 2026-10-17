// Question 4: Array Performance Analyzer
// Creates eight random scores and summarizes student performance.

const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const totalScore = scores.reduce((total, score) => total + score, 0);
const averageScore = totalScore / scores.length;
const passedStudents = scores.filter((score) => score >= 50);
const scorePercentages = scores.map((score) => `${score}%`);

const summary = {
    scores,
    formattedScores: scorePercentages,
    highestScore,
    lowestScore,
    averageScore: averageScore.toFixed(2),
    passedStudents: passedStudents.length,
    totalStudents: scores.length
};

console.table(summary);
