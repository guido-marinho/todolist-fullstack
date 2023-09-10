CREATE DATABASE IF NOT EXISTS todo_list;

USE todo_list;

CREATE TABLE
    IF NOT EXISTS tasks (
        id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        status VARCHAR(255) NOT NULL,
        created_at VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    );