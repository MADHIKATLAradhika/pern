CREATE DATABASE perncustomer;


CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    phone VARCHAR(20),
    location VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

