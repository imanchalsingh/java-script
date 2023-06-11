// Challenge #1....

// TEST DATA-1

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const BMIMark = massMark / (heightMark * heightMark);
// console.log(BMIMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIJohn);
// BMI = BMIMark > BMIJohn;
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
// if (BMIMark > BMIJohn) {
//   console.log("Mark's BMI is higher than John's!");
// } else {
//   console.log("John's BMI is higher than Mark's!");
// }

// Challenge #3....

// TEST DATA-2
// const teamDolphin = (97, 112, 101);
// const teamDolphinAverage = (97 + 112 + 101) / 3;
// const teamKoalas = (109, 95, 123);
// const teamKoalasAverage = (109 + 95 + 123) / 3;
// TEST DATA-3
// const teamDolphin = (97, 112, 101);
// const teamDolphinAverage = (97 + 112 + 101) / 3;
// const teamKoalas = (109, 95, 106);
// const teamKoalasAverage = (109 + 95 + 106) / 3;
// TEST DATA-1
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);
// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy");
// } else {
//   console.log("Both win the trophy");
// }
// const bill = 275;
// const tip = 41.25; 
// console.log("The bill was 275, the tip was 41.25, and the total value 316.25");

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));
 
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);
 
// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No team wins...');
//   }
// };
 
// checkWinner(scoreDolphins, scoreKoalas);


const number1 = 5;
const number2 = 10;
console.log(`Multiply is ${number1*number2}\n`,`Division is ${number1/number2}\n`,`Sum is ${number1+number2}\n`,`Substraction is ${number1-number2}`);