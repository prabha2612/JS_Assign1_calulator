"use strict";

// functions for each operations conducted in the calculation
function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  if (num2 === 0) {
    displayError("Cannot divide by zero.");
    return;
  } else {
    return n1 / n2;
  }
}

//Clear1 function helps in resetting the form field to original state
function clear1() {
  console.log("Clear button clicked");
  document.querySelector("button").style.backgroundColor = "#007bff";
  document.getElementById("calculator").reset();
  document.getElementById("result").innerText = "";
}
// Function to calculate the result based on user input
function calculate() {
  console.log("calculate button clicked");
  // Get user input
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operator = document.getElementById("operator").value;

  // Checking if the inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    displayError("Please enter valid numbers.");
    return;
  }

  // Perform calculation based on selected operator
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      displayError("Invalid operator.");
      return;
  }
  // Display the result
  displayResult(result);
}

// Function to display the result
function displayResult(result) {
  document.querySelector("button").style.backgroundColor = "#60b347";
  document.getElementById("result").innerText = `Result: ${result}`;
}

// Function to display error message
function displayError(message) {
  alert(message);
}
