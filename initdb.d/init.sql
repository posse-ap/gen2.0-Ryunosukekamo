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
    big_question_name VARCHAR(225),
    primary key(id)
);
INSERT INTO big_questions(big_question_name)VALUES('東京の難読地名クイズ');
INSERT INTO big_questions(big_question_name)VALUES('広島の難読地名クイズ');

DROP TABLE IF EXISTS Choices;
CREATE TABLE Choices(
    id INT auto_increment,
    question_id INT,
    name VARCHAR(225),
    valid INT,
    primary key(id)
);
INSERT INTO Choices(question_id,name,valid)VALUES
(1,'たかなわ',1),
(1,'たかわ',0),
(1,'こうわ',0),
(2,'かめと',0),
(2,'かめど',0),
(2,'かめいど',1),
(3,'むこうひら',0),
(3,'むきひら',0),
(3,'むかいなだ',1);

DROP TABLE IF EXISTS questions;
CREATE TABLE questions(
    id INT auto_increment,
    big_question_id INT,
    image VARCHAR(225),
    primary key(id)

);
INSERT INTO questions(big_question_id,image)VALUES
(1,'takanawa.png'),
(1,'kameido.png'),
(2,'mukainada.png');

create table mix as (select 
Choices.id, 
Choices.question_id, 
Choices.name, 
Choices.valid, 
questions.big_question_id, 
questions.image, 
big_questions.big_question_name 
from  
(Choices 
left outer join questions
 on Choices.question_id = questions.id)
 left outer join big_questions 
 on questions.big_question_id = big_questions.id);

