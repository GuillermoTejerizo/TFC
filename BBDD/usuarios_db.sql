CREATE DATABASE IF NOT EXISTS usuarios_db; -- 'IF NOT EXISTS' ASEGURA Q SI EXISTE LA BBDD no haga nada y no de error
USE usuarios_db; -- 'USE' indica q entramos en la BBDD, así se puede trabajar en ella -> para saber la BBDD en la q estás usa 'SELECT DATABASE();'

CREATE TABLE usuarios (
    -- COLUMNAS
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    -- UNSIGNDE indica que el valor no puede ser negativo
    -- INT indica que el valor deben d ser números enteros
    -- ZEROFILL añade 0 a la izquierda ()
    -- AUTO_INCREMENT aumenta el número de la fila
    correo VARCHAR(255) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    tipo_subscripcion ENUM('15D', '01M', '03M', '06M', '12M') NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_limite TIMESTAMP NOT NULL,
    estado ENUM('activo', 'inactivo') DEFAULT 'activo',
    
    -- CONDICIONES
    PRIMARY KEY (id) -- Indica la clave primaria
    -- CHECK (id BETWEEN 1 AND 9999) -- Comprueba q se cumpla el requisito de estar entre los números 0001 y 9999
); -- AUTO_INCREMENT=1;

-- USUARIOS DE PRUEBA