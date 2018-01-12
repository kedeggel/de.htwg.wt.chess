

name := "play-silhouette-seed"

version := "5.0.0"

scalaVersion := "2.12.3"

resolvers += Resolver.jcenterRepo

resolvers += "Sonatype snapshots" at "https://oss.sonatype.org/content/repositories/snapshots/"

libraryDependencies += "net.codingwell" %% "scala-guice" % "4.1.0"

libraryDependencies += "org.scalatest" %% "scalatest" % "3.0.4" % "test"

libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "3.1.2" % Test

libraryDependencies += "com.h2database" % "h2" % "1.4.196"

libraryDependencies += "org.scala-lang.modules" % "scala-swing_2.12" % "2.0.1"

libraryDependencies += "ch.qos.logback" % "logback-classic" % "1.2.3"

libraryDependencies += "com.typesafe.scala-logging" %% "scala-logging" % "3.7.2"


libraryDependencies ++= Seq(
  "com.mohiva" %% "play-silhouette" % "5.0.0",
  "com.mohiva" %% "play-silhouette-password-bcrypt" % "5.0.0",
  "com.mohiva" %% "play-silhouette-persistence" % "5.0.0",
  "com.mohiva" %% "play-silhouette-crypto-jca" % "5.0.0",
  "org.webjars" %% "webjars-play" % "2.6.1",
  "org.webjars" % "bootstrap" % "3.3.7-1" exclude("org.webjars", "jquery"),
  "org.webjars" % "jquery" % "3.2.1",
  "net.codingwell" %% "scala-guice" % "4.1.0",
  "com.iheart" %% "ficus" % "1.4.1",
  "com.typesafe.play" %% "play-mailer" % "6.0.1",
  "com.typesafe.play" %% "play-mailer-guice" % "6.0.1",
  "com.enragedginger" %% "akka-quartz-scheduler" % "1.6.1-akka-2.5.x",
  "com.adrianhurt" %% "play-bootstrap" % "1.2-P26-B3",
  "com.mohiva" %% "play-silhouette-testkit" % "5.0.0" % "test",
  specs2 % Test,
  ehcache,
  guice,
  filters
)

lazy val root = (project in file(".")).enablePlugins(PlayScala)

routesGenerator := InjectedRoutesGenerator

routesImport += "utils.route.Binders._"


