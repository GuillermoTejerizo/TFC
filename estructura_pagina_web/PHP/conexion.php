<?php
$host = "192.168.153.104"; // IP Servidor BBDD que es al nos queremos conectar
$user = "webuser";
$password = "897612";
$db = "usuarios_db";

$conn = new mysqli($host, $user, $password, $db);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
