// Create a progress bar that shows how much of the form is filled in
const progressBar = document.getElementById("progress-bar");
const progressBarInner = document.getElementById("progress-bar-inner");

// Initialize the progress variable
let progress = 0;

//total number of questions
let num = 6;

// calculate Percentage
function calculatePercentage(x) {
  return 100 / x;
}

let percent = calculatePercentage(num);
console.log(percent);

// Add an event listener for the input change event
document.querySelectorAll("input, select").forEach(function (element) {
  element.addEventListener("change", function () {
    // Increment the progress variable by percent
    progress += percent;
    // Update the progress bar
    progressBarInner.style.width = `${progress}%`;
  });
});
