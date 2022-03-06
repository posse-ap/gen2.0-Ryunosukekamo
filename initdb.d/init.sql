DROP DATABASE IF EXISTS webapp;
CREATE DATABASE webapp;
USE webapp;
DROP TABLE IF EXISTS time; 
CREATE TABLE time(
    date INT,
    month INT,
    year INT,
    hours INT
);
INSERT INTO time(date,month,year,hours)VALUES
(1,1,1,1),
(1,1,1,100),
(2,2,2,2),
(2,2,2,200),
(3,3,3,3);




