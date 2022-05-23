DROP DATABASE if exists vets_db;

CREATE DATABASE vets_db;

USE vets_db

CREATE TABLE pet(
    id INT NOT NULL AUTO_INCREMENT,
    pet VARCHAR(30) NOT NULL,
    is_microchipped BIT(1,0),
    owner VARCHAR(30) NOT NULL 
);



