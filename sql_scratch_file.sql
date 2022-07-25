CREATE DATABASE	courseology;
USE courseology;

CREATE TABLE courses (
	id INT NOT NULL AUTO_INCREMENT,
    course_name VARCHAR(255) NOT NULL,
    course_subject VARCHAR(255) NOT NULL,
    duration VARCHAR(255),
    price DOUBLE,
    tutor VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    user_password VARCHAR(255) NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE user_courses (
	user_id INT NOT NULL,
    course_id INT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(course_id) REFERENCES courses(id)
);

INSERT INTO courses
VALUES (0, "Genetics", "Biology", "4 weeks", 200.00, "Prof. Bob");

SELECT * FROM courses;