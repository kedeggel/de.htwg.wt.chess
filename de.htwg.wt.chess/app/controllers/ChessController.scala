package controllers

import javax.inject._

import de.htwg.chess.Chess
import play.api.mvc._

@Singleton
class ChessController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {
  val controller = Chess.getInstance.getController

  def chess = Action {
    Ok(views.html.chess(controller))
  }
  def newChess = Action {
    controller.restart
    Ok(views.html.chess(controller))
  }
}