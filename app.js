// Ask the user for name
var name = prompt("Please enter your name:");

// Ask the user for gender
var gender = prompt("Please enter your gender (male or female):");

// Ask the user for age
var age = parseInt(prompt("Please enter your age:"));

// Check if age is less than or equal to zero
if (age <= 0) {
  alert("Invalid age!");
}

// Ask the user if they want to skip the welcoming message
var confirmation = confirm("Do you want to skip the welcoming message?");

var message = "Welcome";
if (gender === "male") {
  message += " Mr";
} else if (gender === "female") {
  message += " Ms";
}

if (!confirmation) {
  message += " " + name;
}

alert(message);

// Function to handle Yes/No questions
function handleQuestion(question) {
  var answer = prompt(question + " (Yes/No):");
  
  // Check if the answer is empty
  if (answer === "") {
    answer = "invalid";
  }
  
  return answer;
}

// Array to store the answers
var answers = [];

// Ask additional questions and store the answers in the array
answers.push(handleQuestion("are you a morning bird?"));
answers.push(handleQuestion("Do you consider yourself a punctual person?"));
answers.push(handleQuestion("Do you consider yourself a helpful person?"));

console.log("Answers:");
answers.forEach(function(answer, index) {
  console.log("Question " + (index + 1) + ": " + answer);
});