CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE restaurants(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    category integer REFERENCES categories(id)
);

-- seeds
INSERT INTO categories VALUES
(DEFAULT, 'Thai'),
(DEFAULT, 'BBQ'),
(DEFAULT, 'Ethiopian'),
(DEFAULT, 'Greek'),
(DEFAULT, 'Italian'),
(DEFAULT, 'German'),
(DEFAULT, 'American'),
(DEFAULT, 'Chinese'),
(DEFAULT, 'Lebanese'),
(DEFAULT, 'Syrian'),
(DEFAULT, 'Mexican');

INSERT INTO restaurants VALUES
(DEFAULT, 'Fajitas', 11),
(DEFAULT, 'Pad Kee Mao', 1),
(DEFAULT, 'Pulled Pork', 2),
(DEFAULT, 'Shiro Wett', 3),
(DEFAULT, 'Gyro', 4),
(DEFAULT, 'Pizza', 5),
(DEFAULT, 'Brat Worst', 6),
(DEFAULT, 'Hamburger', 7),
(DEFAULT, 'Orange Chicken', 8),
(DEFAULT, 'Kabob', 9),
(DEFAULT, 'Tabuleh', 10);