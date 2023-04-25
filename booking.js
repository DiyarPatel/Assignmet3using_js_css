/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 35;
let numOfDaysSelected = 0;
let dayButtons = document.querySelectorAll(".day-button");



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function toggleDayButton(event) {
    let clickedButton = event.target;
// Only toggle the button if it wasn't already clicked
if (!clickedButton.classList.contains("clicked")) {
    clickedButton.classList.add("clicked");
    numOfDaysSelected++;
    } else {
    clickedButton.classList.remove("clicked");
    numOfDaysSelected--;
    }
    
    // Recalculate total cost
    updateTotalCost();
    }
    
    // Add click listeners to day buttons
    for (let i = 0; i < dayButtons.length; i++) {
    dayButtons[i].addEventListener("click", toggleDayButton);
    }




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearDays() {
    for (let i = 0; i < dayButtons.length; i++) {
    dayButtons[i].classList.remove("clicked");
    }
    numOfDaysSelected = 0;
    updateTotalCost();
    }
    
    let clearButton = document.getElementById("clear-button");
    clearButton.addEventListener("click", clearDays);





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let rateFullButton = document.getElementById("rate-full");
let rateHalfButton = document.getElementById("rate-half");

function setRateFull() {
costPerDay = 35;
rateFullButton.classList.add("clicked");
rateHalfButton.classList.remove("clicked");
updateTotalCost();
}

function setRateHalf() {
costPerDay = 20;
rateHalfButton.classList.add("clicked");
rateFullButton.classList.remove("clicked");
updateTotalCost();
}

rateFullButton.addEventListener("click", setRateFull);
rateHalfButton.addEventListener("click", setRateHalf);



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function updateTotalCost() {
    let calculatedCost = costPerDay * numOfDaysSelected;
    let costElement = document.getElementById("calculated-cost");
    costElement.innerHTML = "$" + calculatedCost;
    }
    
    // Initialize total cost to 0
    updateTotalCost();
    
    
    
    
    
