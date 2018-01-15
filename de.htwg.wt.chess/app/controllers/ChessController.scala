package controllers


import javax.inject._

import akka.actor.{Actor, ActorRef, ActorSystem, Props}
import akka.stream.Materializer
import com.mohiva.play.silhouette.api.Silhouette
import com.mohiva.play.silhouette.api.actions.SecuredRequest
import de.htwg.chess.Chess
import org.webjars.play.WebJarsUtil
import play.api.i18n.I18nSupport
import play.api.libs.streams.ActorFlow
import play.api.mvc._
import utils.auth.DefaultEnv

import scala.concurrent.Future
import scala.util.{Failure, Success, Try}

@Singleton
class ChessController @Inject()(
                                 components: ControllerComponents,
                                 silhouette: Silhouette[DefaultEnv]
                               )(
                                 implicit
                                 webJarsUtil: WebJarsUtil,
                                 assets: AssetsFinder,
                                 system: ActorSystem,
                                 mat: Materializer
                               ) extends AbstractController(components) with I18nSupport {

  val controller = Chess.getInstance.getController
  val tui = Chess.getInstance().getTui


  def chess = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    Future.successful(Ok(views.html.chess(controller, request.identity)))
  }

  def newChess = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    controller.restart
    Future.successful(Ok(views.html.chess(controller, request.identity)))
  }

  def command(command: String) = silhouette.UserAwareAction.async { implicit request =>
    tui.processInputLine(command)
    Future.successful(Ok(controller.printBoard()))
  }

  def printBoard = silhouette.UserAwareAction.async { implicit request =>
    Future.successful(Ok(controller.printBoard()))
  }

  def about = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    Future.successful(Ok(views.html.about(request.identity)))
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
    override def receive: Receive = {
      case msg: String =>
        Try(controller.getStatusMessage()) match {
          case Success(msg) =>
            out ! msg
          case Failure(_) =>
            out ! ""
        }
        println("Sent Status Message to Client")
    }
  }

}