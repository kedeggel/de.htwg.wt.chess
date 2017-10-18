package controllers;

import de.htwg.chess.Chess;
import de.htwg.chess.controller.IChessController;
import play.mvc.Controller;
import play.mvc.Result;
import views.html.chess;

public class Application extends Controller{

    static IChessController controller = Chess.getInstance().getController();

    public Result startChess() {
        return ok(chess.render(controller.printTotalBoard()));
    }

}
