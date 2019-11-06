whale.browserAction.onClicked.addListener(() => {

    // var obj = $("#Div1").offset();

    // $("#Div1").css("left", obj.left);
    // $("#Div1").css("top", obj.top);
    // $("#Div1").css("opacity", 0);
})

whale.commands.onCommand.addListener(function (command) {
    if(command === "browser_action") {
        alert("hello command");
        whale.tabs.query({active: true, currentWindow: true}, function(tabs){
            whale.tabs.sendMessage(tabs[0].id, {action: "foo"}, function(response) {});  
        });
    }
});