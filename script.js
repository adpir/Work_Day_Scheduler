$(".saveBtn").on("click", function(){
    var hourblock = $(this).attr("id")
    var button= hourblock.split("-")[0]
    var plan= $("#" + button + "-txt").val()
    console.log(hourblock, plan)
    localStorage.setItem(button,plan);
});
for (let i=7;i<=15;i++){
    var userplan = localStorage.getItem(i);
    $("#" + i + "-txt").val(userplan)
}
