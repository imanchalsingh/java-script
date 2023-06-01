// Challenge #1....

// TEST DATA-1

// const MarkMass = 78;
// const MarkHeight = 1.69;
// const JohnMass = 92;
// const JohnHeight = 1.95;
// // Mark's BMI.
// const MarkBMI = MarkMass / (MarkHeight * MarkHeight);
// console.log(MarkBMI);
// // John's BMI.
// const JohnBMI = JohnMass / (JohnHeight * JohnHeight);
// console.log(JohnBMI);

// BMI = MarkBMI > JohnBMI;
// console.log(BMI);

// // TEST DATA-2
// const MarkMass = 95;
// const MarkHeight = 1.88;
// const JohnMass = 85;
// const JohnHeight = 1.76;
// // Mark's BMI.
// const MarkBMI = MarkMass / (MarkHeight * MarkHeight);
// // John's BMI.
// const JohnBMI = JohnMass / (JohnHeight * JohnHeight);
// console.log(MarkBMI, JohnBMI);

// BMI = MarkBMI < JohnBMI;
// console.log(BMI);

// Challenge #2....
// if (MarkBMI > JohnBMI) {
//   console.log(
//     "Mark's BMI " + MarkBMI + " is heigher than john's BMI. " + JohnBMI
//   );
// } else {
//   console.log("Mark's BMI is less than John's BMI.");
// }

// Challenge #3....
// TEST DATA-1
// const teamDolphin = (96, 108, 89);
// const teamDolphinAverage = (96 + 108 + 89) / 3;
// const teamKoalas = (88, 91, 110);
// const teamKoalasAverage = (88 + 91 + 110) / 3;
// TEST DATA-2
// const teamDolphin = (97, 112, 101);
// const teamDolphinAverage = (97 + 112 + 101) / 3;
// const teamKoalas = (109, 95, 123);
// const teamKoalasAverage = (109 + 95 + 123) / 3;
// TEST DATA-3
const teamDolphin = (97, 112, 101);
const teamDolphinAverage = (97 + 112 + 101) / 3;
const teamKoalas = (109, 95, 106);
const teamKoalasAverage = (109 + 95 + 106) / 3;
console.log(teamDolphinAverage, teamKoalasAverage);
if (teamDolphinAverage > teamKoalasAverage && teamDolphinAverage>=100) {
  console.log("Dolphins team is Winner.");
}
else if (teamDolphinAverage < teamKoalasAverage && teamKoalasAverage>=100) {
  console.log("koalas team is Winner.");
} else {
  console.log("The match is draw.");
}
