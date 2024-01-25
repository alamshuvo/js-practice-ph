// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
let mathematics=75.25;
let biology=65;
let chemistry=80;
let physics=35.45;
let bangla=99.50;
let n=(mathematics+biology+chemistry+physics+bangla);
let averageMarks= (n/5);
// toFixed() use korle number string e convert hoye jai ei jonno kono number k interger e convert korar jonno parsInt use kora hoy.
let roundded= parseFloat( averageMarks.toFixed(2)); 
console.log(typeof roundded);
console.log(roundded);
