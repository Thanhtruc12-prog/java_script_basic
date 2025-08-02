console.log("Bài tập Lab 01");

const fullName = "Võ Trình Thanh Trúc";
const birthYear = 2005;

const today = new Date();
console.log(today);
const currentYear = today.getFullYear();
console.log(currentYear, typeof currentYear);


const Age = currentYear - birthYear;

const isStudent = true;

console.log(`
Tên: ${fullName}
Tuổi: ${Age}
Sinh viên: ${isStudent}`);
