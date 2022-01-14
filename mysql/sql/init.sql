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
