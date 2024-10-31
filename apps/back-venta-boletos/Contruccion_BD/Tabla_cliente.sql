CREATE TABLE sistema_cine.cliente (
  Id_cuenta_plataforma INT,
  Nombre VARCHAR(50) NOT NULL,
  Apellido VARCHAR(50) NOT NULL,
  Telefono VARCHAR(20),
  Fecha_nacimiento DATE,
  FOREIGN KEY (Id_cuenta_plataforma) REFERENCES Cuenta_Plataforma(Id_cuenta_plataforma) ON DELETE CASCADE);
