
---- Paso 01 — Prepararamos la base de datos:
-- Creamos la tabla de conductores e insertamos los datos:
DROP TABLE IF EXISTS conductores;
CREATE TABLE conductores (
    nombre VARCHAR(255),
    edad INTEGER
);

INSERT INTO conductores (nombre, edad) VALUES
('Don Pepe', 55),
('Pedro', 25),
('Maria', 33),
('Francisco', 19),
('Camilo', 29),
('Andres', 35),
('Mario', 48),
('Felipe', 33);



-- Creamos la tabla de automoviles e insertamos los datos:
DROP TABLE IF EXISTS automoviles;
CREATE TABLE automoviles (
    marca VARCHAR(255),
    patente VARCHAR(255),
    nombre_conductor VARCHAR(255)
);

INSERT INTO automoviles (marca, patente, nombre_conductor) VALUES
('Ford', 'HXJH55', 'Felipe'),
('Toyota', 'HLSA26', 'Pedro'),
('Mercedes', 'JFTS47', 'Maria'),
('Chevrolet', 'RTPP97', 'Francisco'),
('Nissan', 'SDTR51', 'Don Pepe'),
('Mazda', 'RDCS19', 'Francisco'),
('Kia', 'KDTZ28', 'Don Pepe'),
('Jeep', 'FFDF88', 'Paulina'),
('Suzuki', 'DRTS41', 'Heriberto'),
('Honda', 'BXVZ67', 'Manuel');


---Verificamos que todo este cargado:
SELECT * FROM conductores;
SELECT * FROM automoviles;



--Cambié la contraseña del usuario postgres para poder conectarme a la base de datos, ya que no me dejaba conectarme con la contraseña anterior.
ALTER USER postgres WITH PASSWORD 'Nina123';

--Luego de esto, al dia siguiente, ya no pude conectarme más en postgres porque no me reconocia ninguna de las dos contraseñas anteriores... Pero si logre finalizar la tarea antes de estos incovenientes.. y estos son los codigos que cargue en mi base de datos que me permitieron realizar la tarea solicitada.