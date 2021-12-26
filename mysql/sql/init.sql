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



DROP TABLE IF EXISTS big_questions;
CREATE TABLE big_questions(
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
name VARCHAR(225) NOT NULL,

);
