

$(document).ready(function(){
    console.log("Document ready!");

    // this is the output of printTotalBoard() which should be sent by a websocket later.
    var pieceLocation = "A1: Rook WHITE B1: Knight WHITE C1: Bishop WHITE D1: Queen WHITE E1: King WHITE F1: Bishop WHITE G1: Knight WHITE H1: Rook WHITE A2: Pawn WHITE B2: Pawn WHITE C2: Pawn WHITE D2: Pawn WHITE E2: Pawn WHITE F2: Pawn WHITE G2: Pawn WHITE H2: Pawn WHITE A7: Pawn BLACK B7: Pawn BLACK C7: Pawn BLACK D7: Pawn BLACK E7: Pawn BLACK F7: Pawn BLACK G7: Pawn BLACK H7: Pawn BLACK A8: Rook BLACK B8: Knight BLACK C8: Bishop BLACK D8: Queen BLACK E8: King BLACK F8: Bishop BLACK G8: Knight BLACK H8: Rook BLACK"
    updateBoard(pieceLocation);

    //overwriting with attr() works. (for later updateBoard()-calls)
    $("#B2").attr("piece", "QueenBLACK");
});

function updateBoard(board) {
    var list = board.split(" ");
    for (var i = 0; i < list.length; i++) {
        list[i] = list[i].substring(0, list[i].length - 1);
        $("#" + list[i]).attr("piece", list[++i] + list[++i]);
    }
}