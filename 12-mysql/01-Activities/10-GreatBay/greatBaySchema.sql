DROP DATABASE IF EXISTS greatbay_db;

CREATE DATABASE greatbay_db;

USE greatbay_db;

CREATE TABLE listings
(
    id INT NOT NULL
    AUTO_INCREMENT,
  item VARCHAR
    (60) NULL,
  highestBid INTEGER
    default 0,
  currentBid INTEGER
    default 0,
  category VARCHAR
    (60),
    quantity INT
    (50),
  PRIMARY KEY
    (id)
);

    INSERT INTO listings
        (item, highestBid, currentBid, category)
    VALUES
        ("Box of Pencils 2B (12ct)", 1, 0, "School Materials");