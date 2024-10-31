CREATE TABLE sistema_cine.metodos_pago (
    Id_metodo_pago INT AUTO_INCREMENT NOT NULL,
    Nombre VARCHAR(55) NOT NULL,
    Descripcion VARCHAR(200),
    referencia INT NOT NULL,
    PRIMARY KEY(Id_metodo_pago)
);
