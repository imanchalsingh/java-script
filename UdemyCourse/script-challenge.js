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

// const number1 = 5;
// const number2 = 10;
// console.log(`Multiply is ${number1*number2}\n`,`Division is ${number1/number2}\n`,`Sum is ${number1+number2}\n`,`Substraction is ${number1-number2}`);

//Fundamental-2 Video Challenge.
// Let Example- Harsh is a 23 years old teacher. Let see he has driver's license or not?
// Good Luck.👍🏻

// const harsh = {
// firstName: "Harsh",
// lastName: "Harsh",
// birthyear: "2000",
// job: "teacher",
// hasDrivingLicence: true,
//
// calcAge: function () {
// this.age = 2023 - this.birthyear;
// return this.age;
// },
// getSummary: function () {
// return `${this.firstName} is a ${this.calcAge()}-year old ${
// harsh.job
// }, and he has ${this.hasDrivingLicence ? "a" : "no"} driver's licence`;
// },
// };
//
// console.log(harsh.calcAge());
// console.log(harsh.getSummary());

// const bills = ['22, 295, 176, 440, 37, 105, 10, 1100, 86, 52']
// const calcTip = function (bill) {
// return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
//
//
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
//
// for (let i = 0; i < bills.length; i++) {
// const tip = calcTip(bills[i]);
// tips.push(tip);
// totals.push(tip + bills[i]);
// }
//
// console.log(bills, tips, totals);
//
//
// With Bonus:

// const calcTip = function (bill) {
// return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
//
//
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
//
// for (let i = 0; i < bills.length; i++) {
// const tip = calcTip(bills[i]);
// tips.push(tip);
// totals.push(tip + bills[i]);
// }
//
// console.log(bills, tips, totals);
//
// const calcAverage = function (arr) {
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// sum = sum + arr[i];
// sum += arr[i];
// }
// return sum / arr.length;
// }
//
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

// let i = 1;
// while (i <= 5) {
// console.log(i);
// i++;
// }
//
//
// for (i = 0; i <= 10; i++) {
// console.log(`This is number:${i}`,typeof i);
// }
//
