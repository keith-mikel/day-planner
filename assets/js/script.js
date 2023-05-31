$(document).ready(function() {

  //header time update by second
  function updateTime() {
  var now = dayjs().format('dddd, MMMM D, h:mm:ss A');
  console.log(now);
  $("#currentDay").text(now);
  }
  updateTime();
  setInterval(updateTime, 1000);

  //button for clearing local storage and day
  $('#clearButton').on('click' ,clearButtonDay)

  function clearButtonDay() {
    localStorage.clear();
    $("textarea").val("");
  }

  //iterate accross all hour-items
  for (var i = 9; i <= 17; i++) {
    var timeBlockId = "hour-" + i;

    // Load the stored text from local storage and populate the textarea
    var storedText = localStorage.getItem(timeBlockId);
    if (storedText) {
      $("#" + timeBlockId + " textarea").val(storedText);
    }


    $("#" + timeBlockId + " .saveBtn").on("click", createSaveButtonHandler(timeBlockId));
  }

  // Save button click event handler
  function createSaveButtonHandler(timeBlockId) {
    return function() {
      var text = $("#" + timeBlockId + " textarea").val();
      localStorage.setItem(timeBlockId, text);
    } 
}

var currentHour = dayjs().format('hA');
  for (var i = 9; i <= 17; i++) {
    var timeBlockId = "hour-" + i;
    if (currentHour === $("#" + timeBlockId + " .hour").text()) {
      $("#" + timeBlockId + " textarea").addClass("present");
    }
    else if (currentHour > $("#" + timeBlockId + " .hour").text()) {
      $("#" + timeBlockId + " textarea").addClass("past");
    }
    else {
      $("#" + timeBlockId + " textarea").addClass("future");
    }
    

}

}
);
