-- CREATE TABLE author (
--     id serial PRIMARY KEY,
--     name VARCHAR(25)
-- );

-- CREATE TABLE article (
--     id serial PRIMARY KEY,
--     title VARCHAR(150),
--     authorID integer REFERENCES author (id)
-- );

-- INSERT INTO author VALUES (
--     DEFAULT,
--     'Alfie Santos'
-- );


-- INSERT INTO article VALUES (
--     DEFAULT,
--     'Living in EADO',
--     1
-- );

-- INSERT INTO author VALUES
-- (DEFAULT, 'Michael Dao'),
-- (DEFAULT, 'Tarek Beb'),
-- (DEFAULT, 'Kevin Evangelista'),
-- (DEFAULT, 'Glen Favorito'),
-- (DEFAULT, 'Ollie Vargas'),
-- (DEFAULT, 'Chris Humphrey'),
-- (DEFAULT, 'Garrett Weaver'),
-- (DEFAULT, 'Deron Smith'),
-- (DEFAULT, 'Sabrina Goldfarb'),
-- (DEFAULT, 'Jeroen Goddijn');

-- INSERT INTO article VALUES
-- (DEFAULT, 'Why I wear nice pants', 7),
-- (DEFAULT, 'Are coding bootcamps worth it?', 12),
-- (DEFAULT, 'Living in America', 10),
-- (DEFAULT, 'Living in Houston', 9),
-- (DEFAULT, 'Dating in Houston', 4),
-- (DEFAULT, 'What is closure', 3),
-- (DEFAULT, 'ES6 and ES7', 5),
-- (DEFAULT, 'Javascript interview questions', 4),
-- (DEFAULT, 'Node interview questions', 11),
-- (DEFAULT, 'The modules', 8);

-- SELECT * FROM article, author WHERE article.authorID = author.id;

-- SELECT * FROM article INNER JOIN author on article.authorID = author.id;

-- SELECT * FROM article RIGHT OUTER JOIN author ON article.authorID = author.id;

-- SELECT * FROM article LEFT OUTER JOIN author ON article.authorID = author.id;

-- SELECT * FROM article FULL OUTER JOIN author ON article.authorID = author.id;

-- SELECT * FROM article RIGHT JOIN author ON article.authorID = author.id;

SELECT
    author.id,
    author.name,
    COUNT(article.id)
FROM
    article
INNER JOIN
    author ON article.authorID = author.id
GROUP BY
    author.id;



-- CREATE TABLE groups (
--     id serial PRIMARY KEY,
--     name VARCHAR(100)
-- );

-- CREATE TABLE member (
--     id serial PRIMARY KEY,
--     name VARCHAR(25)
-- );

-- CREATE TABLE membership (
--     id serial PRIMARY KEY,
--     groupID integer REFERENCES groups (id),
--     memberID integer REFERENCES member (id)
-- );

-- INSERT INTO groups VALUES
--     (DEFAULT, 'Atlanta Javascript Meetup'),
--     (DEFAULT, 'PyLadies'),
--     (DEFAULT, 'Girl Develop It'),
--     (DEFAULT, 'Atlanta Web Design Group');

-- INSERT INTO member values
--     (DEFAULT, 'Alfie'),
--     (DEFAULT, 'Michael'),
--     (DEFAULT, 'Tarek'),
--     (DEFAULT, 'Kevin'),
--     (DEFAULT, 'Glen'),
--     (DEFAULT, 'David'),
--     (DEFAULT, 'Chris'),
--     (DEFAULT, 'Garrett'),
--     (DEFAULT, 'Ollie'),
--     (DEFAULT, 'Sabrina'),
--     (DEFAULT, 'Jeroen'),
--     (DEFAULT, 'Deron');

-- INSERT INTO membership VALUES
--     (DEFAULT, 1, 10),
--     (DEFAULT, 2, 10),
--     (DEFAULT, 3, 10),
--     (DEFAULT, 4, 10),
--     (DEFAULT, 1, 2),
--     (DEFAULT, 2, 2),
--     (DEFAULT, 2, 3),
--     (DEFAULT, 2, 4),
--     (DEFAULT, 3, 5),
--     (DEFAULT, 3, 7),
--     (DEFAULT, 3, 8),
--     (DEFAULT, 4, 9),
--     (DEFAULT, 3, 6);


-- SELECT * FROM groups INNER JOIN membership ON groups.id = membership.groupID
-- INNER JOIN member ON membership.groupID = member.id;