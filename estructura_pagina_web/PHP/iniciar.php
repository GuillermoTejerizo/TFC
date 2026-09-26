<?php
session_start();
include "conexion.php";

$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];

$sql = "SELECT * FROM usuarios WHERE correo = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $correo);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();

    // Verificar contraseña
    if (password_verify($contrasena, $user['contrasena'])) {

        // Verificar expiración
        $now = new DateTime();
        $exp = new DateTime($user['fecha_expiracion']);

        if ($now > $exp) {
            // Expirado → actualizar estado
            $conn->query("UPDATE usuarios SET estado='inactivo' WHERE id=" . $user['id']);
            echo "Cuenta expirada";
            exit;
        }
        if ($user['estado'] === 'activo') {
            $_SESSION['usuario'] = $correo;
            header("Location: ../Paginas/buscador.html");
        } else {
            echo "Cuenta inactiva";
        }
    } else {
        echo "Contraseña incorrecta";
    }
} else {
    echo "Usuario no existe";
}
