
-- CREATE TABLE student(
--     id SERIAL NOT NULL PRIMARY KEY,
--     name VARCHAR,
--     website VARCHAR,
--     github_username VARCHAR,
--     points INTEGER DEFAULT 0,
--     gender char(1),
--     cohort_start_date date,
--     graduated boolean
-- );


-- INSERT INTO student VALUES (
--     DEFAULT, 'Glen', 'chrislhumphrey.com', 'chris-humphrey', 10, 'M', '2019-04-15', FALSE
-- );
-- INSERT INTO student VALUES (
--     DEFAULT, 'Ollie', 'chrislhumphrey.com', 'chris-humphrey', 4, 'M', '2019-04-15', FALSE
-- );
-- INSERT INTO student VALUES (
--     DEFAULT, 'Tarek', 'chrislhumphrey.com', 'chris-humphrey', 1, 'M', '2019-04-15', FALSE
-- );
-- INSERT INTO student VALUES (
--     DEFAULT, 'Michael', 'chrislhumphrey.com', 'chris-humphrey', 6, 'M', '2019-04-15', FALSE
-- );
-- INSERT INTO student VALUES (
--     DEFAULT, 'David', 'chrislhumphrey.com', 'chris-humphrey', 9, 'M', '2019-04-15', FALSE
-- );

-- SELECT * from student WHERE points > 7;

-- INSERT INTO student (name, github_username) VALUES (
--     'Jessies Mom', 'gotItGoingOn'
-- )

-- UPDATE student SET points = 8 WHERE id = 2;

-- DELETE FROM student WHERE id = 1;


-- CREATE TABLE student2(
--     id SERIAL NOT NULL PRIMARY KEY,
--     name VARCHAR,
--     website VARCHAR,
--     github_username VARCHAR(20) UNIQUE NOT NULL,
--     points INTEGER DEFAULT 0 CHECK (points >= 0),
--     gender char(1),
--     cohort_start_date date NOT NULL,
--     graduated boolean DEFAULT FALSE
-- );

-- INSERT INTO student2 VALUES (
--     DEFAULT, 'Chris', 'chrislhumphrey.com', 'hi', 1, 'M', '2019-04-15', FALSE
-- );



-- CREATE TABLE articles (
--     id SERIAL PRIMARY KEY,
--     NAME varchar(100)
-- );

-- INSERT INTO articles VALUES
-- (DEFAULT, 'Alfie'),
-- (DEFAULT, 'Michael'),
-- (DEFAULT, 'Chris'),
-- (DEFAULT, 'Tarek'),
-- (DEFAULT, 'Garrett'),
-- (DEFAULT, 'Glen'),
-- (DEFAULT, 'David'),
-- (DEFAULT, 'Ollie'),
-- (DEFAULT, 'Sabrina'),
-- (DEFAULT, 'Jeroen'),
-- (DEFAULT, 'Deron');

-- SELECT * FROM articles;

-- SELECT name FROM articles;

-- SELECT name FROM articles WHERE id > 5;

-- SELECT * FROM articles WHERE name like '%er%';

-- ALTER TABLE articles ADD lastName varchar(50);

-- ALTER TABLE articles DROP COLUMN lastName;

-- ALTER TABLE student ALTER COLUMN gender varchar(4);

-- SELECT COUNT(*) FROM articles;

-- SELECT SUM(points) FROM student;

-- SELECT COUNT()

SELECT * FROM articles LIMIT 5 OFFSET 5;