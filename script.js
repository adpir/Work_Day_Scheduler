$(".saveBtn").on("click", function(){
    let hourblock = $(this).attr("id")
    let button= hourblock.split("-")[0]
    let plan= $("#" + button + "-txt").val()
    console.log(hourblock, plan)
    localStorage.setItem(button,plan);
});
let currentdate =moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(currentdate)
$("#currentDay").text(currentdate);
let currentHour= moment().hours();
for (let i=9;i<=17;i++){
    let userplan = localStorage.getItem(i);
    $("#" + i + "-txt").val(userplan)
    if(currentHour <i){
    $("#" + i + "-txt").addClass("future")
    }
    else if(currentHour == i){
   $("#" + i + "-txt").addClass("present")    
    }
    else {
     $("#" + i + "-txt").addClass("past")
    }
}
