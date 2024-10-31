CREATE TABLE sistema_cine.pelicula (
    Id_pelicula INT AUTO_INCREMENT NOT NULL,
    Nombre VARCHAR(55) NOT NULL,
    Genero VARCHAR(55) NOT NULL,
    Duracion INT NOT NULL,
    Fecha_estreno DATE NOT NULL, PRIMARY KEY(Id_pelicula)
);
