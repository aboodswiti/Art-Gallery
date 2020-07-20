BEGIN;
DROP TABLE IF EXISTS  users,artwork
  CASCADE;

CREATE TABLE users
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(20) NOT NULL,
  email_adress VARCHAR NOT NULL UNIQUE,
  url VARCHAR(200),
  phone_number VARCHAR(20),
  role VARCHAR(10) NOT NULL,
  rate INT,
  password TEXT NOT NULL
);

CREATE TABLE artwork
(
 id SERIAL PRIMARY KEY NOT NULL,
 title VARCHAR(20) NOT NULL,
 artist_id INT,
 FOREIGN KEY (artist_id) REFERENCES users(id),
 photo_url VARCHAR NOT NULL,
 description TEXT,
 price INT NOT NULL,
 category VARCHAR(50) NOT NULL,
 size VARCHAR(20) NOT NULL,
 sold BOOLEAN,
 type VARCHAR NOT NULL
);


COMMIT;