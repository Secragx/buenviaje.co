CREATE DATABASE turismo_web;
USE turismo_web;

-- Tabla de Roles
CREATE TABLE roles (
    idRol INT PRIMARY KEY AUTO_INCREMENT,
    nombreRol VARCHAR(50) UNIQUE NOT NULL
);

-- Tabla de Paises
CREATE TABLE paises (
    idPais INT PRIMARY KEY AUTO_INCREMENT,
    nombrePais VARCHAR(50) NOT NULL UNIQUE
);

-- Tabla de Destinos
CREATE TABLE destinos (
    idDestino INT PRIMARY KEY AUTO_INCREMENT,
    ciudadDestino VARCHAR(100) NOT NULL,
    departamentoDestino VARCHAR(100) NOT NULL,
    idPais INT,
    descripcion TEXT,
    FOREIGN KEY (idPais) REFERENCES paises(idPais)
);

-- Tabla de Tipos de Documento
CREATE TABLE tiposDocumento (
    idTipoDocumento INT PRIMARY KEY AUTO_INCREMENT,
    nombreTipo VARCHAR(50) NOT NULL UNIQUE
);

-- Tabla de Usuarios
CREATE TABLE usuarios (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    passwordHash VARCHAR(255) NOT NULL,
    telefono VARCHAR(15),
    fechaRegistro DATE NOT NULL,
    -- idRol INT,
    idTipoDocumento INT,
    numeroIdentificacion VARCHAR(20) NOT NULL,
    -- FOREIGN KEY (idRol) REFERENCES roles(idRol),
    FOREIGN KEY (idTipoDocumento) REFERENCES tiposDocumento(idTipoDocumento)
);

-- Tabla de Permisos
CREATE TABLE permisos (
    idPermiso INT PRIMARY KEY AUTO_INCREMENT,
    nombrePermiso VARCHAR(100) NOT NULL
);

-- Tabla de Roles_Permisos
CREATE TABLE rolesPermisos (
    idRol INT,
    idPermiso INT,
    PRIMARY KEY (idRol, idPermiso),
    FOREIGN KEY (idRol) REFERENCES roles(idRol),
    FOREIGN KEY (idPermiso) REFERENCES permisos(idPermiso)
);

-- Tabla de Tours
CREATE TABLE tours (
    idTour INT PRIMARY KEY AUTO_INCREMENT,
    nombreTour VARCHAR(100) NOT NULL,
    idDestino INT,
    precio DECIMAL(10, 2) NOT NULL,
    descripcion TEXT,
    fechaInicio DATE NOT NULL,
    fechaFin DATE NOT NULL,
    FOREIGN KEY (idDestino) REFERENCES destinos(idDestino)
);

-- Tabla de Estados de Reservacion
CREATE TABLE estadosReservacion (
    idEstadoReservacion INT PRIMARY KEY AUTO_INCREMENT,
    nombreEstado VARCHAR(50) NOT NULL UNIQUE
);

-- Tabla de Reservaciones
CREATE TABLE reservaciones (
    idReservacion INT PRIMARY KEY AUTO_INCREMENT,
    idUsuario INT,
    idTour INT,
    fechaReservacion DATE NOT NULL,
    numeroPersonas INT NOT NULL,
    idEstadoReservacion INT,
    FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario),
    FOREIGN KEY (idTour) REFERENCES tours(idTour),
    FOREIGN KEY (idEstadoReservacion) REFERENCES estadosReservacion(idEstadoReservacion)
);

-- Tabla de Estados de Pago
CREATE TABLE estadosPago (
    idEstadoPago INT PRIMARY KEY AUTO_INCREMENT,
    nombreEstado VARCHAR(50) NOT NULL UNIQUE
);

-- Tabla de Metodos de Pago
CREATE TABLE metodosPago (
    idMetodoPago INT PRIMARY KEY AUTO_INCREMENT,
    nombreMetodo VARCHAR(50) NOT NULL UNIQUE
);

-- Tabla de Pagos
CREATE TABLE pagos (
    idPago INT PRIMARY KEY AUTO_INCREMENT,
    idReservacion INT,
    monto DECIMAL(10, 2) NOT NULL,
    fechaPago DATE NOT NULL,
    idMetodoPago INT,
    idEstadoPago INT,
    FOREIGN KEY (idReservacion) REFERENCES reservaciones(idReservacion),
    FOREIGN KEY (idMetodoPago) REFERENCES metodosPago(idMetodoPago),
    FOREIGN KEY (idEstadoPago) REFERENCES estadosPago(idEstadoPago)
);


-- Queries
SELECT * FROM tiposDocumento;
SELECT * FROM usuarios;