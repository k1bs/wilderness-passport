CREATE TABLE IF NOT EXISTS parks (
  id SERIAL PRIMARY KEY,
  code VARCHAR(5),
  name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  password_digest TEXT,
  email VARCHAR(255),
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  zip INTEGER
);

CREATE TABLE IF NOT EXISTS users_parks (
  id SERIAL PRIMARY KEY,
  park_id INTEGER REFERENCES parks(id),
  user_id INTEGER REFERENCES users(id)
);
