CREATE TABLE sistema_cine.entrada_cine(
    Id_entrada INT AUTO_INCREMENT PRIMARY KEY,
    Cuenta_plataforma_id INT,
    Funcion_id INT,
    Numero_asientos INT,
    Fecha_compra DATE NOT NULL,
    Codigo_validacion INT,
    Foreign Key (Cuenta_plataforma_id) REFERENCES cuenta_plataforma(Id_cuenta_plataforma),
    Foreign Key (Funcion_id) REFERENCES funcion_pelicula(Id_funcion)
);
