CREATE TABLE sistema_cine.sala (
    Id_sala int AUTO_INCREMENT NOT NULL,
    Nombre VARCHAR(55) NOT NULL,
    Capacidad INT NOT NULL,
    Numero_asientos INT NOT NULL,
    Tipo_pantalla VARCHAR(20),
    PRIMARY key (Id_sala)
);
