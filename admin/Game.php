<?php

require_once("./Connect.php");

class Game
{
    private $server;

    public function __construct()
    {
        $connection = new Connect();
        $this->server = $connection->connect();
    }

    public function setCase($idCase)
    {
        $sql = 'SELECT state FROM game_case WHERE id = :id ORDER BY id';
        $query = $this->server->prepare($sql);
        $query->execute(
            array('id' => $idCase)
        );
        $result = $query->fetch(PDO::FETCH_ASSOC);

        if (!isset($_SESSION["count"])) {
            $_SESSION["count"] = "cross";
        }

        if ($result["state"] === 0 && $_SESSION["count"] == "cross") {
            $this->setNewState($idCase, 1);
            $_SESSION["count"] = "circle";
        } else if ($result["state"] === 0 && $_SESSION["count"] == "circle") {
            $this->setNewState($idCase, 2);
            $_SESSION["count"] = "cross";
        }

        return $result;
    }

    public function setNewState($idCase, $state)
    {
        $sql = 'UPDATE game_case SET state = :state WHERE id = :id';
        $query = $this->server->prepare($sql);
        $query->execute(
            array(
                'id' => $idCase,
                'state' => $state
            )
        );
        return;
    }

    public function clear()
    {
        $sql = 'UPDATE game_case SET state = 0';
        $query = $this->server->prepare($sql);
        $query->execute();
    }

    public function verifyEndGame()
    {
        $sql = 'SELECT id, state FROM game_case ORDER BY id';
        $query = $this->server->prepare($sql);
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }
}
