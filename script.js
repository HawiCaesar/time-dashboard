// Get what's been clicked and add the active class
var btns = document.getElementsByClassName("slot-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

let workCurrent = document.querySelector('#work .slot-info .duration-current')
let workPrevious = document.querySelector('#work .slot-info .duration-previous')

let playCurrent = document.querySelector('#play .slot-info .duration-current')
let playPrevious = document.querySelector('#play .slot-info .duration-previous')

let studyCurrent = document.querySelector('#study .slot-info .duration-current')
let studyPrevious = document.querySelector('#study .slot-info .duration-previous')

let exerciseCurrent = document.querySelector('#exercise .slot-info .duration-current')
let exercisePrevious = document.querySelector('#exercise .slot-info .duration-previous')

let socialCurrent = document.querySelector('#social .slot-info .duration-current')
let socialPrevious = document.querySelector('#social .slot-info .duration-previous')

let selfCurrent = document.querySelector('#self .slot-info .duration-current')
let selfPrevious = document.querySelector('#self .slot-info .duration-previous')


var initialLoad = document.getElementById("weekly");
initialLoad.className += " active"

var timeSlotData = []

function showTimeSlots(period, periodText) {
    // set up daily time slots
    workCurrent.innerHTML = `${timeSlotData[0].timeframes[period].current} hrs`
    workPrevious.innerHTML = `${periodText} - ${timeSlotData[0].timeframes[period].previous} hrs`

    playCurrent.innerHTML = `${timeSlotData[1].timeframes[period].current} hrs`
    playPrevious.innerHTML = `${periodText} - ${timeSlotData[1].timeframes[period].previous} hrs`

    studyCurrent.innerHTML = `${timeSlotData[2].timeframes[period].current} hrs`
    studyPrevious.innerHTML = `${periodText} - ${timeSlotData[2].timeframes[period].previous} hrs`

    exerciseCurrent.innerHTML = `${timeSlotData[3].timeframes[period].current} hrs`
    exercisePrevious.innerHTML = `${periodText} - ${timeSlotData[3].timeframes[period].previous} hrs`

    socialCurrent.innerHTML = `${timeSlotData[4].timeframes[period].current} hrs`
    socialPrevious.innerHTML = `${periodText} - ${timeSlotData[4].timeframes[period].previous} hrs`

    selfCurrent.innerHTML = `${timeSlotData[5].timeframes[period].current} hrs`
    selfPrevious.innerHTML = `${periodText} - ${timeSlotData[5].timeframes[period].previous} hrs`
}

console.log(document.PROCESSING_INSTRUCTION_NODE)

window.fetch('https://api.jsonbin.io/b/617716d2aa02be1d445ec7a3', {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
   })
  .then(function(response) {
    return response.json();
  }).then(function(data) {
   
    timeSlotData = data

    // set up daily time slots
    showTimeSlots('weekly', 'Last Week')

  })
  .catch(function(e) {
      console.log(e)
  })


function getTimeSlotPeriod(period) {
    if(period === 'daily')
        showTimeSlots('daily', 'Yesterday')
    else if (period === 'weekly') {
        showTimeSlots('weekly', 'Last Week')
    } else if (period === 'monthly') {
        showTimeSlots('monthly', 'Last Month')
    }
    return
}