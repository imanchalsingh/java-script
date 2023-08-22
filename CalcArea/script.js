// Area of triangle.
const triangleBase = document.getElementById("triangle-base");
const triangleHeight = document.getElementById("triangle-height");
const areaTriangleResult = document.getElementById("triangleArea-of-result");

const calculateTriangleArea = () => {
  if (triangleBase && triangleHeight) {
    const baseValue = triangleBase.value;
    const heightValue = triangleHeight.value;
    if (baseValue && heightValue) {
      const triangleArea = 0.5 * baseValue * heightValue;
      if (areaTriangleResult) {
        areaTriangleResult.style.color = "green";
        areaTriangleResult.innerText = `The area of triangle is : ${triangleArea}`;
      }
    }
  }
};
// Check number if positive, negative or Zero.
const integerNumber = document.getElementById("integer-number");
const integerTypeResult = document.getElementById("integer-type-result");

const checkTypeOfNumber = () => {
  if (integerNumber) {
    const numberValue = integerNumber.value;
    if (numberValue && integerTypeResult) {
      if (numberValue > 0) {
        integerTypeResult.style.color = "green";
        integerTypeResult.innerText = `The type of number ${numberValue} is positive.`;
      } else if (numberValue < 0) {
        integerTypeResult.style.color = "red";
        integerTypeResult.innerText = `The type of number ${numberValue} is negative.`;
      } else {
        integerTypeResult.style.color = "blue";
        integerTypeResult.innerText = `The number is Zero.`;
      }
    }
  }
};

// Area of square.
const squareSide = document.getElementById("square-side");
const areaSquareResult = document.getElementById("squareArea-of-result");

const calculateSquareArea = () => {
  if (squareSide) {
    const squareValue = squareSide.value;
    if (squareValue) {
      const squareArea = squareValue * squareValue;
      if (areaSquareResult) {
        areaSquareResult.style.color = "green";
        areaSquareResult.innerText = `The area of square is : ${squareArea}`;
      }
    }
  }
};

// Area of cirle.
const cirleRadius = document.getElementById("circle-radius");
const areaCircleResult = document.getElementById("circleArea-of-result");

const calculateCircleArea = () => {
  if (cirleRadius) {
    const circleValue = cirleRadius.value;
    if (circleValue) {
      const pi = 3.14;
      const circleArea = circleValue * 2* pi;
      if (areaCircleResult) {
        areaCircleResult.style.color = "green";
        areaCircleResult.innerText = `The area of circle is : ${circleArea}`;
      }
    }
  }
};
