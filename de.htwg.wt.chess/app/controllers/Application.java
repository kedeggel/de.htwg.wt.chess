package controllers;

import de.htwg.chess.controller.IChessController;
import de.htwg.chess.controller.impl.ChessController;
import play.mvc.Controller;
import play.mvc.Result;

public class Application extends Controller{

    static IChessController controller = new ChessController();

    public Result startChess() {
        return ok("chess controller: " + controller.toString());
    }

}
