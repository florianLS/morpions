<?php

class Connect
{

    private $dsn = 'mysql:dbname=morpions;host=127.0.0.1';
    private $user = "root"; 
    private $password = ""; 

    public function __construct()
    {
        $this->connect = new PDO($this->dsn, $this->user, $this->password);
    }

    public function connect()
    {
        return $this->connect;
    }
}