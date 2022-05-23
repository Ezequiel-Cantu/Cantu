CREATE DATABASE L19100155;

CREATE TABLE IF NOT EXISTS Usuario
(
    idUsuario SMALLINT NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR (30),
    ApPat VARCHAR (30),
    Edad INT (2),
    Ocupacion VARCHAR (30),
    Usuario VARCHAR (30),
    Telefono BIGINT (10),
    Genero VARCHAR (20),
    Contrasena VARCHAR (30),
    PRIMARY KEY (idUsuario)
);

INSERT INTO Usuario (Nombre,ApPat,Edad,Ocupacion,Usuario, Telefono, Genero, Contrasena)
VALUES ('Ezequiel', 'Cantu', '21', 'Programador', 'L19100155', '8671829812', 'Masculino', '148j3shi');
