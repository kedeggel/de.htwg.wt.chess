var firstClick = "";

$(document).ready(function(){
    console.log("Document ready!");

    //websockets not used yet
    //connectWebSocket();
    updateBoard();
    registerFieldbuttonListener();
});

function updateBoard() {
    var board = "A1: Rook WHITE B1: Knight WHITE C1: Bishop WHITE D1: Queen WHITE E1: King WHITE F1: Bishop WHITE G1: Knight WHITE H1: Rook WHITE A2: Pawn WHITE B2: Pawn WHITE C2: Pawn WHITE D2: Pawn WHITE E2: Pawn WHITE F2: Pawn WHITE G2: Pawn WHITE H2: Pawn WHITE A7: Pawn BLACK B7: Pawn BLACK C7: Pawn BLACK D7: Pawn BLACK E7: Pawn BLACK F7: Pawn BLACK G7: Pawn BLACK H7: Pawn BLACK A8: Rook BLACK B8: Knight BLACK C8: Bishop BLACK D8: Queen BLACK E8: King BLACK F8: Bishop BLACK G8: Knight BLACK H8: Rook BLACK";
    // Ajax-call not working yet
    //var board = getBoardAjax();

    $("button.fieldbutton").attr("piece", "");
    var list = board.split(" ");
    for (var i = 0; i < list.length; i++) {
        list[i] = list[i].substring(0, list[i].length - 1);
        $("#" + list[i]).attr("piece", list[++i] + list[++i]);
    }
}

function getBoardAjax() {
    var board = "";
    $.ajax({
        type: "GET",
        url: "/printBoard",
        done: function(data){
            alert("ajax returned board: " + data);
            board = data;
        },
        error: function(xhr){
            alert("Error in getBoardAjax(): " + xhr.status + " " + xhr.statusText);
        }
    });
    return board;
}

function registerFieldbuttonListener() {
    $("button.fieldbutton").click(function() {
        var id = this.getAttribute("id");
        if (firstClick == "") {
            firstClick = id;
            alert("firstClick has been set to: " + firstClick);
        } else {
            sendCommandAjax(firstClick + "-" + id);
            firstClick = "";
            updateBoard();
        }
    });
}

function sendCommandAjax(command) {
    $.ajax({
        type: "GET",
        url: "/" + command,
        done: [function(data){
            alert("ajax command invoked, " + data);
        }],
        error: function(xhr){
            alert("Error in sendCommandAjax(): " + xhr.status + " " + xhr.statusText);
    }
    });
}


function connectWebSocket() {
    var websocket = new WebSocket("ws://localhost:9000/websocket");
    websocket.setTimeout

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

    websocket.onmessage = function (e) {
        console.log("Connection sent a Message: " + e.data)
        if (typeof e.data === "string") {
            updateBoard(e.data);
        }
    };
}