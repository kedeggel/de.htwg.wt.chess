package controllers;

import de.htwg.chess.Chess;
import de.htwg.chess.aview.gui.ChessFrame;
import de.htwg.chess.aview.tui.TextUI;
import de.htwg.chess.controller.IChessController;
import play.mvc.Controller;
import play.mvc.Result;
import views.html.index;

public class Application extends Controller {

    Chess instance = Chess.getInstance();
    IChessController controller = instance.getController();
    TextUI tui = instance.getTui();
    ChessFrame gui = instance.getGui();

    public Result startChess(String command) {
        return ok(index.render(
                command + "\n" +
                tui.processInputLine(command) + "\n" +
                controller.printTotalBoard()));
    }

}
