DROP DATABASE IF EXISTS webapp;
CREATE DATABASE webapp;
USE webapp;
DROP TABLE IF EXISTS time; 
CREATE TABLE time(
    id INT auto_increment,
    date INT,
    month INT,
    year INT,
    hours INT,
    primary key(id)

);
INSERT INTO time(date,month,year,hours)VALUES
(1,1,1,1),
(1,1,1,5),
(28,1,1,6),
(2,2,2,2),
(2,2,2,63),
(3,3,3,3),
(3,3,3,10),
(4,4,4,30);

DROP TABLE IF EXISTS Language; 
CREATE TABLE Language(
    id INT auto_increment,
    HTML INT NULL,
    JavaScript INT NULL,
    CSS INT NULL,
    PHP INT NULL,
    ooo INT NULL,
    Laravel INT NULL,
    SHELL INT NULL,
    others INT NULL,
    primary key(id)

);
INSERT INTO Language(HTML,JavaScript,CSS,PHP,ooo,Laravel,SHELL,others)VALUES
(1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,2,NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,3,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,4,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,5,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,NULL,6,NULL,NULL),
(NULL,NULL,NULL,NULL,NULL,NULL,7,NULL),
(NULL,NULL,NULL,NULL,NULL,NULL,NULL,8);

-- select * from time inner join language on time.id = language.id;

DROP TABLE IF EXISTS time_Language; 
CREATE TABLE time_Language(
    id INT auto_increment,
    date INT,
    month INT,
    year INT,
    hours INT,
    -- Language_id INT auto_increment,
    HTML INT NULL,
    JavaScript INT NULL,
    CSS INT NULL,
    PHP INT NULL,
    ooo INT NULL,
    Laravel INT NULL,
    SHELL INT NULL,
    others INT NULL,
    primary key(id)

);
INSERT INTO time_Language(date,month,year,hours,HTML,JavaScript,CSS,PHP,ooo,Laravel,SHELL,others)VALUES
(1,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(1,1,1,5,NULL,2,NULL,NULL,NULL,NULL,NULL,NULL),
(28,1,1,6,NULL,NULL,3,NULL,NULL,NULL,NULL,NULL),
(2,2,2,2,NULL,NULL,NULL,4,NULL,NULL,NULL,NULL),
(2,2,2,63,NULL,NULL,NULL,NULL,5,NULL,NULL,NULL),
(3,3,3,3,NULL,NULL,NULL,NULL,NULL,6,NULL,NULL),
(3,3,3,10,NULL,NULL,NULL,NULL,NULL,NULL,7,NULL),
(4,4,4,30,NULL,NULL,NULL,NULL,NULL,NULL,NULL,8);
