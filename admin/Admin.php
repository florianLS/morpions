<?php

require_once("./Game.php");

session_start();
$game = new Game();


if (isset($_POST["case"])) {
    $idCase = $_POST["case"];
    $result = $game->setCase($idCase);
    echo json_encode($result);
}

if (isset($_POST["clear"])) {
    $result = $game->clear();
    session_destroy();
    header('Location: http://localhost/training/JeuMorpions/');
}

if (isset($_POST["verify"])) {
    $result = $game->verifyEndGame();
    echo json_encode($result);
}

if (isset($_POST["end"])) {
    $result = $game->clear();
    session_destroy();
}
