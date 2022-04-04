CREATE TABLE timelogs(
    id SERIAL PRIMARY KEY,
    start TIMESTAMP NOT NULL,
    end TIMESTAMP NOT NULL,
    description TEXT NOT NULL
);