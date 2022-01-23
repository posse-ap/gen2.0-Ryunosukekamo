-- DROP TABLE IF EXISTS choices;
-- CREATE TABLE choices (
-- id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
-- big_question_id INT NOT NULL,
-- question_id INT NOT NULL,
-- choice0 VARCHAR(225) NOT NULL,
-- choice1 VARCHAR(225) NOT NULL,
-- choice2 VARCHAR(225) NOT NULL,
-- image VARCHAR(225) NOT NULL
-- );

DROP SCHEMA IF EXISTS quizy;
CREATE DATABASE quizy;
USE quizy;
DROP TABLE IF EXISTS big_questions;
CREATE TABLE big_questions(
id INT(50),
name VARCHAR(225)
);
INSERT INTO big_questions(id,name)VALUES(1,'東京の難読地名クイズ');
INSERT INTO big_questions(id,name)VALUES(2,'広島の難読地名クイズ');

-- insert= データの追加、レコードの追加

-- DROP SCHEMA IF EXISTS quizy;
-- CREATE DATABASE quizy;
-- USE quizy;
-- DROP TABLE IF EXISTS questions;
-- CREATE TABLE questions(
-- id INT(50),
-- name VARCHAR(225)
-- );
-- INSERT INTO questions(id,big_question_id,image)VALUES(1,takanawa.png);
-- INSERT INTO questions(id,big_question_id,image)VALUES(2,kameido.png);
-- INSERT INTO questions(id,big_question_id,image)VALUES(3,1,mukainada.png);


-- DROP SCHEMA IF EXISTS quizy;
-- CREATE DATABASE quizy;
-- USE quizy;
-- DROP TABLE IF EXISTS Choices;
-- CREATE TABLE Choices(
-- id INT(50),
-- name VARCHAR(225)
-- );
-- INSERT INTO questions(id,question_id,name,vaild)VALUES(1,'たかなわ',1);
-- INSERT INTO questions(id,question_id,name,vaild)VALUES(2,'たかわ',0);
-- INSERT INTO questions(id,question_id,name,vaild)VALUES(3,'こうわ',0);
-- INSERT INTO questions(id,question_id,name,vaild)VALUES(4,'かめと',0);
-- INSERT INTO questions(id,question_id,name,vaild)VALUES(5,'かめど',0);
-- INSERT INTO questions(id,question_id,name,vaild)VALUES(6,'かめいど',1);
-- INSERT INTO questions(id,question_id,name,vaild)VALUES(7,'むこうひら',0);
-- INSERT INTO questions(id,question_id,name,vaild)VALUES(8,'むきひら',0);
-- INSERT INTO questions(id,question_id,name,vaild)VALUES(9,'むかいなだ',1);
