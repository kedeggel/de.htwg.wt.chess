package controllers

import javax.inject._

import akka.actor.{Actor, ActorRef, ActorSystem, Props}
import akka.stream.Materializer
import de.htwg.chess.Chess
import play.api.mvc._
import play.api.libs.streams.ActorFlow

@Singleton
class ChessController @Inject()(cc: ControllerComponents) (implicit system: ActorSystem, mat: Materializer) extends AbstractController(cc) {
  val controller = Chess.getInstance.getController
  val tui = Chess.getInstance().getTui

  def chess = Action {
    Ok(views.html.chess(controller))
  }
  def newChess = Action {
    controller.restart
    Ok(views.html.chess(controller))
  }
  def command(command: String) = Action {
    tui.processInputLine(command)
    Ok(views.html.chess(controller))
  }
  def printBoard() = Action {
    Ok(controller.printBoard())
  }


  def socket = WebSocket.accept[String, String] { request =>
    ActorFlow.actorRef { out =>
      println("Connect received")
      ChessWebSocketActorFactory.create(out)
    }
  }
  object ChessWebSocketActorFactory {
    def create(out: ActorRef) = {
      Props(new ChessWebSocketActor(out))
    }
  }
  class ChessWebSocketActor(out: ActorRef) extends Actor {
    def receive = {
      case msg: String =>
        out ! controller.printBoard()
        println("Sent Message: " + msg.getClass)
    }
  }

}