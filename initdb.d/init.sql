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

DROP TABLE IF EXISTS language; 
CREATE TABLE language(
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
INSERT INTO language(HTML,JavaScript,CSS,PHP,ooo,Laravel,SHELL,others)VALUES
(1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,2,NULL,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,3,NULL,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,4,NULL,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,5,NULL,NULL,NULL),
(NULL,NULL,NULL,NULL,NULL,6,NULL,NULL),
(NULL,NULL,NULL,NULL,NULL,NULL,7,NULL),
(NULL,NULL,NULL,NULL,NULL,NULL,NULL,8);

-- select * from time inner join language on time.id = language.id;

DROP TABLE IF EXISTS contents;
CREATE TABLE contents(
    N INT NULL,
    dotinstall INT NULL,
    POSSE INT NULL

);

INSERT INTO contents(N,dotinstall,POSSE)VALUES
(1,NULL,NULL),
(NULL,2,NULL),
(NULL,6,NULL),
(NULL,NULL,2),
(2,NULL,NULL),
(4,NULL,NULL),
(NULL,3,NULL),
(NULL,NULL,5);

DROP TABLE IF EXISTS All_data; 
CREATE TABLE All_data(
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
    N_yobi INT NULL,
    dotinstall INT NULL,
    POSSE INT NULL,
    primary key(id)

);
INSERT INTO All_data(date,month,year,hours,HTML,JavaScript,CSS,PHP,ooo,Laravel,SHELL,others,N_yobi,dotinstall,POSSE)VALUES
(1,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL),
(1,1,1,5,NULL,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL),
(28,1,1,6,NULL,NULL,3,NULL,NULL,NULL,NULL,NULL,NULL,6,NULL),
(2,2,2,2,NULL,NULL,NULL,4,NULL,NULL,NULL,NULL,NULL,NULL,2),
(2,2,2,63,NULL,NULL,NULL,NULL,5,NULL,NULL,NULL,2,NULL,NULL),
(3,3,3,3,NULL,NULL,NULL,NULL,NULL,6,NULL,NULL,4,NULL,NULL),
(3,3,3,10,NULL,NULL,NULL,NULL,NULL,NULL,7,NULL,NULL,3,NULL),
(4,4,4,30,NULL,NULL,NULL,NULL,NULL,NULL,NULL,8,NULL,NULL,5);
