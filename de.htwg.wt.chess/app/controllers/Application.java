package controllers;

import de.htwg.chess.controller.IChessController;
import de.htwg.chess.controller.impl.ChessController;
import play.mvc.Controller;
import play.mvc.Result;
import views.html.chess;

public class Application extends Controller{

    static IChessController controller = new ChessController();

    public Result startChess() {
        return ok(chess.render("Welcome to our Chess"));
    }

}
