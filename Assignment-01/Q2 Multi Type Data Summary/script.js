// Multi-Type Data Summary
// Identify each value's data type and print a formatted report.

const userName = "Harsh";
const userAge = 20;
const isStudent = true;
const favoriteSubjects = ["JavaScript", "CSS", "AI"];
const userProfile = { city: "Mathura", course: "Computer Science" };
const middleName = null;
let phoneNumber;

const report = [
    {
        label: "User Name",
        value: userName,
        type: typeof userName
    },
    {
        label: "User Age",
        value: userAge,
        type: typeof userAge
    },
    {
        label: "Student",
        value: isStudent,
        type: typeof isStudent
    },
    {
        label: "Favorite Subjects",
        value: favoriteSubjects.join(", "),
        type: Array.isArray(favoriteSubjects) ? "array" : typeof favoriteSubjects
    },
    {
        label: "User Profile",
        value: JSON.stringify(userProfile),
        type: typeof userProfile
    },
    {
        label: "Middle Name",
        value: middleName,
        type: middleName === null ? "null" : typeof middleName
    },
    {
        label: "Phone Number",
        value: phoneNumber,
        type: typeof phoneNumber
    }
];

console.table(report);
