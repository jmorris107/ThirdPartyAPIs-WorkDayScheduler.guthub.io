$(document).ready(function() { //tell engine to load HTML and CSS files.
//display day and time.
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// sabeBtn click to input time stamp.
$(".saveBtn").on("click", function () {
    //get values
    console.log(this)
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //set item in local storage.
    localStorage.setItem(time, text);
})
//load save data from local storage (each hour).
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

function hourTracker() {
    //call current number of hours
    var currentHour = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log( blockHour, currentHour)
        
        //check if we moved time
        if(blockHour < currentHour) {
            $(this).addClass("past")
            $(this).removeClass("future")
            $(this).removeClass("present")
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past")
            $(this).addClass("present")
            $(this).removeClass("future")
        }
        else {
            $(this).removeClass("present")
            $(this).removeClass("past")
            $(this).addClass("future")
        }
    })
}
hourTracker();
})

