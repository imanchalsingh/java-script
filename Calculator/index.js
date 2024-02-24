const displaySectionContent = document.getElementById(
  "display-section-content"
);
const numberRow1 = document.getElementById("number-row1");
const numberRow2 = document.getElementById("number-row2");
const numberRow3 = document.getElementById("number-row3");
const numberRow4 = document.getElementById("number-row4");

let number1 = "";
let number2 = "";
let currentOperation = "";
let result = "";
// displaySectionContent.innerText = "20 + 15 = 35";
const row1Data = ["9", "8", "7", "/"];
const row2Data = ["6", "5", "4", "*"];
const row3Data = ["3", "2", "1", "+"];
const row4Data = ["C", "0", "=", "-"];

for (let i = 0; i < row1Data.length; i++) {
  const buttons = document.createElement("div");
  buttons.innerText = row1Data[i];
  buttons.classList.add("input-button");

  buttons.onclick = () => {
    //For example: ""+"9" = "9 but "12"+"9" = "129"
    if (row1Data[i] !== "/") {
      number1 = number1 + row1Data[i];
      displaySectionContent.innerText = number1;
    } else {
    }
  };
  if (numberRow1) {
    numberRow1.appendChild(buttons);
  }
}
for (let i = 0; i < row2Data.length; i++) {
  const buttons = document.createElement("div");
  buttons.innerText = row2Data[i];
  buttons.onclick = () => {
    if (row2Data[i] !== "*") {
      number1 = number1 + row2Data[i];
      displaySectionContent.innerText = number1;
    } else {
    }
  };
  buttons.classList.add("input-button");
  if (numberRow2) {
    numberRow2.appendChild(buttons);
  }
}
for (let i = 0; i < row3Data.length; i++) {
  const buttons = document.createElement("div");
  buttons.innerText = row3Data[i];
  buttons.onclick = () => {
    if (row3Data[i] !== "+") {
      number1 = number1 + row3Data[i];
      displaySectionContent.innerText = number1;
    } else {
    }
  };
  buttons.classList.add("input-button");
  if (numberRow3) {
    numberRow3.appendChild(buttons);
  }
}
for (let i = 0; i < row4Data.length; i++) {
  const buttons = document.createElement("div");
  buttons.innerText = row4Data[i];
  buttons.onclick = () => {
    switch (row4Data[i]) {
      case "C":
        number1 = "";
        displaySectionContent.innerText = number1;
        break;
      case "0":
        number1 = number1 + row4Data[i];
        displaySectionContent.innerText = number1;
        break;
      case "=":
        calculateResult()
        break;
      case "-":
        
        break;
    }
  };
  buttons.classList.add("input-button");
  if (numberRow4) {
    numberRow4.appendChild(buttons);
  }
}
const calculateResult = () => {
    console.log("Number calculated")
};
