CREATE TABLE sistema_cine.funcion_pelicula(
    Id_funcion int AUTO_INCREMENT PRIMARY KEY,
    Pelicula_id INT,
    Foreign Key (Pelicula_id) REFERENCES pelicula(Id_pelicula),
    Sala_id INT,
    Foreign Key (Sala_id) REFERENCES sala(Id_sala),
    Fecha_inicio DATE NOT NULL,
    Precio_funcion DECIMAL(10,2),
    Hora_inicio TIME,
    Metodo_pago_id INT,
    Foreign Key (Metodo_pago_id) REFERENCES metodos_pago(Id_metodo_pago)
);
