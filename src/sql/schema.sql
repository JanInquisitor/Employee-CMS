DROP
    DATABASE IF EXISTS employee_cms_db;

CREATE
    DATABASE employee_cms_db;

USE
    employee_cms_db;

CREATE TABLE department
(
    id   INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30)
);

CREATE TABLE role
(
    id            INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title         VARCHAR(30),
    salary        DECIMAL,
    department_id INT,
    CONSTRAINT FOREIGN KEY (department_id) REFERENCES department (id) ON DELETE SET NULL
);

CREATE TABLE employee
(
    id         INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name  VARCHAR(30),
    role_id    INT,
    FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE SET NULL
);