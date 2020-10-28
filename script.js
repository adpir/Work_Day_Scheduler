$(".saveBtn").on("click", function(){
    var hourblock = $(this).attr("id")
    var button= hourblock.split("-")[0]
    var plan= $("#" + button + "-txt").val()
    console.log(hourblock, plan)
    localStorage.setItem(button,plan);
});
var currentdate = moment()
$("#currentDay").val(currentdate);
var currentHour= moment().hours()
for (let i=7;i<=15;i++){
    var userplan = localStorage.getItem(i);
    $("#" + i + "-txt").val(userplan)
    if(currentHour <i){
    $("#" + i + "-txt").addClass("future")
    }
    else if ( currentHour== i){
   $("#" + i + "-txt").addClass("present")    
    }
    else {
     $("#" + i + "-txt").addClass("past")
    }
}
