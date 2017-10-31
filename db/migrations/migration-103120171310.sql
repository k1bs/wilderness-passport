ALTER TABLE users_parks ADD visited BOOLEAN;

ALTER TABLE users_parks RENAME COLUMN id to passport_id;
