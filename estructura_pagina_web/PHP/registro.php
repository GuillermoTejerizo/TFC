<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Solo permitir acceso desde formulario
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    die("Acceso no válido");
}

include "conexion.php";

// Recoger datos de forma segura
$correo = $_POST['correo'] ?? '';
$contrasena_raw = $_POST['contrasena'] ?? '';
$tipo = $_POST['suscripcion'] ?? '';

var_dump($_POST);
// Validar campos
if (empty($correo)) die("Falta correo");
if (empty($contrasena_raw)) die("Falta contraseña");
if (empty($tipo)) die("Falta subscripción");

// Encriptar contraseña
$contrasena = password_hash($contrasena_raw, PASSWORD_DEFAULT);

// Normalizar tipo de suscripción (por si acaso)
switch ($tipo) {
    case "15D": $dias = "+15 days"; break;
    case "01M": $dias = "+1 month"; break;
    case "03M": $dias = "+3 months"; break;
    case "06M": $dias = "+6 months"; break;
    case "12M": $dias = "+12 months"; break;
    default:
        die("Tipo de suscripción no válido");
}

// Calcular fecha de expiración
$fecha = new DateTime();
$fecha->modify($dias);
$fecha_limite = $fecha->format('Y-m-d H:i:s');

// Preparar SQL
$sql = "INSERT INTO usuarios (correo, contrasena, tipo_subscripcion, fecha_limite)
        VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

// Comprobar error en prepare
if (!$stmt) {
    die("Error en SQL: " . $conn->error);
}

$stmt->bind_param("ssss", $correo, $contrasena, $tipo, $fecha_limite);

// Ejecutar
if ($stmt->execute()) {
    header("Location: ../Paginas/iniciar_sesión.html");
    exit;
} else {
    if ($conn->errno == 1062) {
        echo "El correo ya está registrado";
    } else {
        echo "Error al registrar: " . $stmt->error;
    }
}