$(".saveBtn").on("click", function(){
    var hourblock = $(this).attr("id")
    var button= hourblock.split("-")[0]
    var plan= $("#" + button + "-txt").val()
    console.log(hourblock, plan)
});
