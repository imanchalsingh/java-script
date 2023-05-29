// TEST DATA-1

const MarkMass = 78;
const MarkHeight = 1.69;
const JohnMass = 92;
const JohnHeight = 1.95;
// Mark's BMI.
const MarkBMI = MarkMass / (MarkHeight * MarkHeight);
console.log(MarkBMI);
// John's BMI.
const JohnBMI = JohnMass / (JohnHeight * JohnHeight);
console.log(JohnBMI);

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

if (MarkBMI > JohnBMI) {
  console.log(
    "Mark's BMI " + MarkBMI + " is heigher than john's BMI. " + JohnBMI
  );
} else {
  console.log("Mark's BMI is less than John's BMI.");
}
