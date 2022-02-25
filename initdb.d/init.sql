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

DROP DATABASE IF EXISTS quizy;
CREATE DATABASE quizy;
USE quizy;
DROP TABLE IF EXISTS big_questions;
CREATE TABLE big_questions(
    id INT auto_increment,
    name VARCHAR(225),
    primary key(id)
);
INSERT INTO big_questions(name)VALUES('東京の難読地名クイズ');
INSERT INTO big_questions(name)VALUES('広島の難読地名クイズ');
-- INSERT INTO big_questions(name)VALUES('鹿児島の難読地名クイズ');

DROP TABLE IF EXISTS Choices;
CREATE TABLE Choices(
    id INT auto_increment,
    question_id INT,
    name VARCHAR(225),
    vaild INT,
    primary key(id)
);
INSERT INTO Choices(question_id,name,vaild)VALUES
(1,'たかなわ',1),
(1,'たかわ',0),
(1,'こうわ',0),
(2,'かめと',0),
(2,'かめど',0),
(2,'かめいど',1),
(3,'むこうひら',0),
(3,'むきひら',0),
(3,'むかいなだ',1);

-- -- insert= データの追加、レコードの追加
-- DROP DATABASE IF EXISTS test;
-- CREATE DATABASE test;




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
