// variables and Document //
$(document).ready(function() {
  let timeDate = document.querySelector("#currentDay");
  let currentHour = document.querySelectorAll("textarea")
  let timeNow = parseInt(moment().format("H"))


  // 1nd Function. Local Storage//

  function primaryFunction(){
    getFromLocalStorage()
    $(currentHour).addClass("userInput")
    timeDate.textContent = moment().format("dddd, MMMM Do YYYY");

  // Loop to determine area is present,future, past in present time//

  for(let i = 0; i < currentHour.length; i++){
    if(parseInt(currentHour[i].id.slice(4)) === timeNow){
      $(currentHour[i].addClass("present"))
    } else if(parseInt(currentHour[i].id.slice(4)) > timeNow){
      $(currentHour[i]).addClass("future")
    } else(parseInt(currentHour[i].id.slice(4)) < timeNow)
    $(currentHour[i]).addClass("past")
  }

  // adding event listener //

  var btnClick = document.querySelectorAll("button");
  for (let i = 0; i < btnClick.length; i++){
    console.log(btnClick)
    btnClick[i].addEventListener("click", saveToLocalStorage);
  }
  }

function saveToLocalStorage() {
  var hNum = this.id
  var x = "#hour" + hNum
  var w = document.querySelector(x).value 
  localStorage.setItem(x, w)
}

function getFromLocalStorage(){
  for (let i = 9; i<=19; i++){
    var x = "#hour" + i
    if(localStorage.getItem(x)){
      var w = (localStorage.getItem(x))
      let p = document.querySelector(x)
      p.value = w
    }
  }
}

primaryFunction()
})









// $("#currentDay").text(moment().local().format("dddd, MMM Do"));

// var eventsArray = [];
// for (var i = 0; i < localStorage.length; i++) {
//   eventsArray.push(localStorage.key(i));
// }

// // create a for loop to iterate thought numbers 9 to 17.

// for (var hourIterator = 9; hourIterator <= 17; hourIterator++) {
//   var timeBlock = $("<div>");

//   timeBlock.addClass("time-block, row");
//   timeBlock.attr("hour-block", hourIterator);
//   $(".container").append(timeBlock);

//   var hourColum = $("<div>");
//   var eventColum = $("<div>");
//   var saveEventColum = $("<div>");

//   hourColum.addClass("col-2");
//   eventColum.addClass("col-9");
//   saveEventColum.addClass("col-1");

//   timeBlock.append(hourColum, eventColum, saveEventColum);

//   if (hourIterator < 12) {
//     hourColum.append(`<h2 class="hour">${hourIterator} AM</h2>)`);
//   } else if (hourIterator === 12) {
//     hourColum.append(`<h2 class="hour">${hourIterator} PM</h2>)`);
//   } else {
//     formattedHour = hourIterator - 12;
//     hourColum.append(`<h2 class="hour">${formattedHour} PM</h2>)`);
//   }

// }


// // Get event from local storage //

// var eventDescription = $("<input>");
// eventDescription.addClass("description");
// if (!(saveEventDetails === null)){
//   eventDescription.val(savedEventDetails);
// }

// // Append Each //

// eventColum.append(eventDescription);

// //Call funtion//

// saveEventColum.append(
//   `<button class="saveBtn"><i class="fas fa-save"></i></button>`
// );


// {
//   saveEventColum.on("click", function(){});
// function changeEventColumnColors(){
//   var currentHour = parseInt(moment().local().format("HH"));

//   if (hourIterator < currentHour){
//     eventColum.addClass("past");
//   } else if (hourIterator === currentHour){
//     eventColum.addClass("present");
//   } else {
//     eventColum.addClass("future");
//   }
// }

// $(".saveBtn").on("click", function (){
//   var matchingHour = $(this).parent().parent().attr("hour-block");
//   var matchingEvent = $(this).parent().parent().find("input").val();
//   addEvent(matchingHour, matchingEvent);
// });

// function addEvent(hour, event) {
//   localStorage.setItem(hour, event);
// }}

// $(document).ready(function () {

//   console.log(parseInt(moment().format('H')))

//   const currentTime = moment().format('Do YYYY MMMM')
//   $("#currentTime").text(currentTime)
//   $("span").attr("style", "width: 75px")
//   $("button").text("Submit")

//   const times = [21, 22, 23]

//   times.forEach(time => {
//     const timeCheck = window.localStorage.getItem(time)
//     const currentHour = moment().hour()
//     const timeId = "#" + time

//     if (currentHour > time) {
//       $(timeId).addClass("bg-danger text-light")
//       $(timeId).attr("disabled", true)
//     } else if (currentHour === time) {
//       $(timeId).addClass("bg-secondary text-light")
//     } else {
//       $(timeId).addClass("bg-success text-light")
//     }

//     if (timeCheck === null) window.localStorage.setItem(time, "")
//     if (timeCheck.length > 0) $(timeId).attr("value", window.localStorage.getItem(time))
//   })


//   $("form").on("submit", function (e) {
//     e.preventDefault()

//     const time = e.target.querySelector("input").getAttribute("id")
//     const text = e.target.querySelector("input").value

//     window.localStorage.setItem(time, text)
//   })
// })
