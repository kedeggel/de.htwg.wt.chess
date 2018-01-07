var websocket = new WebSocket("ws://localhost:9000/websocket");
var firstClick = "";

$(document).ready(function(){
    console.log("Document ready!");

    updateBoardAjax();
    registerFieldbuttonListener();
    connectWebSocket();
});

function updateBoardAjax() {
    $.ajax({
        type: "GET",
        cache: false,
        url: "/printBoard",
        dataType: 'text',
        complete: function(data){
            console.log("getBoardAjax() was successful");
            setPiecesToBoard(data.responseText);
            //update history via websocket
            websocket.send(JSON.stringify({
                update: "do it"
            }));
        },
        error: function(xhr){
            console.log("ERROR in getBoardAjax(): " + xhr.status + " " + xhr.statusText);
        }
    });
}

function setPiecesToBoard(board) {
    // clear all piece-info on buttons
    $("button.fieldbutton").attr("piece", "");
    // replace line breaks with spaces
    board = board.split("\n").join(" ");
    // split string to process value by value
    var list = board.split(" ");
    //remove last trailing space
    list.pop();
    for (var i = 0; i < list.length; i++) {
        list[i] = list[i].substring(0, list[i].length - 1);
        $("#" + list[i]).attr("piece", list[++i] + list[++i]);
    }
}

function registerFieldbuttonListener() {
    $("button.fieldbutton").click(function() {
        var id = this.getAttribute("id");
        if (firstClick == "") {
            firstClick = id;
            console.log("firstClick set to: " + firstClick);
            $("#" + firstClick).addClass("clickedFirst");
        } else {
            sendCommandAjax("/" + firstClick + "-" + id);
            $("#" + firstClick).removeClass("clickedFirst");
            firstClick = "";
        }
    });
}

function sendCommandAjax(command) {
    $.ajax({
        type: "GET",
        cache: false,
        url: command,
        complete: function(data){
            console.log("sendCommandAjax() was successful: " + command);
            updateBoardAjax();
        },
        error: function(xhr){
            alert("ERROR in sendCommandAjax(): " + xhr.status + " " + xhr.statusText);
    }
    });
}


function connectWebSocket() {
    websocket.onopen = function(event) {
        console.log("Connected to Websocket");
        websocket.send(JSON.stringify({
            update: "do it"
        }));
    };

    websocket.onclose = function () {
        console.log('Connection with Websocket Closed!');
    };

    websocket.onerror = function (error) {
        console.log('Error in Websocket Occured: ' + error);
    };

    // websocket updates the client with the newest status messages. (controller.getStatusMessage())
    websocket.onmessage = function (e) {
        console.log("Connection sent a Message: " + e.data)
        $(".historyPanel").append($("<p></p>").text(e.data));
    };
}