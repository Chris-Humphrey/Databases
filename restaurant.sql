-- ++ CREATE THE TABLE ++

-- CREATE TABLE restaurant (
--     id serial primary key,
--     name VARCHAR(50),
--     distance INTEGER,
--     stars INTEGER DEFAULT 0 CHECK (stars <=5 AND stars >=0),
--     category VARCHAR(20),
--     favoriteDish VARCHAR,
--     takeout boolean DEFAULT FALSE,
--     lastVisit Integer CHECK (lastVisit >=0)
-- );



-- ++ INSERT DATA INTO TABLE ++

-- INSERT INTO restaurant VALUES (
--     DEFAULT, 'Jimmys Buffet', 1, 1, 'American', 'Fried Shrimp', FALSE, 20
-- );
-- INSERT INTO restaurant VALUES (
--     DEFAULT, 'Steller Stump', 4, 5, 'Greek', 'Hummus', TRUE, 3
-- );
-- INSERT INTO restaurant VALUES (
--     DEFAULT, 'Groovey Grub', 2, 4, 'Cajun', 'Blackened Catfish', TRUE, 45
-- );
-- INSERT INTO restaurant VALUES (
--     DEFAULT, 'City Wok', 5, 5, 'Chinese', 'City Chicken', FALSE, 6
-- );
-- INSERT INTO restaurant VALUES (
--     DEFAULT, 'Dungeonous Takeaway', 1, 1, 'Steakhouse', 'Surf And Turf', TRUE, 17
-- );
-- INSERT INTO restaurant VALUES (
--     DEFAULT, 'Ollies BBQ', 1, 5, 'BBQ', 'Brisket', TRUE, 22
-- );
-- INSERT INTO restaurant VALUES (
--     DEFAULT, 'Coltivare', 4, 5, 'American', 'Chicken Pizza', TRUE, 55
-- );
-- INSERT INTO restaurant VALUES (
--     DEFAULT, 'Curly', 3, 3, 'Mexican', 'Enchiladas', TRUE, 0
-- );
-- INSERT INTO restaurant VALUES (
--     DEFAULT, 'Umbrella', 3, 3, 'Chinese', 'Egg Rolls', TRUE, 0
-- );
-- INSERT INTO restaurant VALUES (
--     DEFAULT, 'Dino', 3, 2, 'BBQ', 'Ribs', TRUE, 0
-- );



-- ++ QUERY DATA FROM TABLE ++

-- + name 5 star restaurants
    -- SELECT name FROM restaurant WHERE stars = 5;

-- + favorite dishes of all 5-star restaurants
    -- SELECT favoriteDish FROM restaurant WHERE stars = 5;

-- + id of specific restaurant name
    -- SELECT id FROM restaurant WHERE name = 'City Wok';

-- + rest with category 'bbq'
    -- SELECT * FROM restaurant WHERE category = 'BBQ';

-- + rest that do takeout
    -- SELECT * FROM restaurant WHERE takeout = TRUE;

-- + rest that do takeout and is BBQ
    -- SELECT * FROM restaurant WHERE takeout = TRUE AND category = 'BBQ';

-- + rest within 2 miles
    -- SELECT * FROM restaurant WHERE distance <= 2;

-- + rest haven't ate at in the last week
    -- SELECT * FROM restaurant WHERE lastVisit <= 7;

-- + rest haven't ate at in the last week and has 5 stars
    -- SELECT * FROM restaurant WHERE lastVisit <= 7 AND stars = 5;



-- ++ AGGREGATION AND SORTING QUERIES ++

-- + list rest closest
    -- SELECT * FROM restaurant ORDER BY distance;

-- + list top 2 rest by dist
    -- SELECT * FROM restaurant ORDER BY distance LIMIT 2;

-- + list top 2 rest by stars
    -- SELECT * FROM restaurant ORDER BY stars DESC LIMIT 2;

-- + list top 2 rest by stars where dist < 2 miles
    -- SELECT * FROM restaurant WHERE distance < 2 ORDER BY stars DESC LIMIT 2;
-- + count # rest in db
    -- SELECT COUNT(*) FROM restaurant;

-- + count # rest by category
    -- SELECT COUNT(category) FROM restaurant WHERE category = 'Chinese';

-- + get avg stars per rest by category
    -- SELECT AVG(stars) FROM restaurant WHERE category = 'BBQ';

-- + get max stars of rest by category
    -- SELECT MAX(stars) FROM restaurant WHERE category = 'BBQ';