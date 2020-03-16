-- to create a new database
CREATE DATABASE elearning;

-- to use database
use elearning;

-- creating category table
CREATE TABLE category (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  category VARCHAR(1000) NOT NULL
);


-- create class table
CREATE TABLE class (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  lesson_number VARCHAR(1000) NOT NULL,
  lesson_title VARCHAR(1000) NOT NULL
);



-- to show all tables
show tables;

-- to describe table
describe customer;
