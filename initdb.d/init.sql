DROP DATABASE IF EXISTS webapp;
CREATE DATABASE webapp;
USE webapp;
DROP TABLE IF EXISTS language_study; 
CREATE TABLE language_study(
    id_language INT auto_increment,
    language VARCHAR(225),
    time_language INT(),
    primary key(id) 
);

DROP TABLE IF EXISTS contents_study; 
CREATE TABLE _study(
    id_contents INT auto_increment,
    language VARCHAR(225),
    time_contents INT(),
    primary key(id) 
);



