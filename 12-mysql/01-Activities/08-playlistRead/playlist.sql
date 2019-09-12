DROP DATABASE IF EXISTS playlist;

CREATE DATABASE playlist;

USE playlist;

CREATE TABLE songs
(
  id INT NOT NULL
  AUTO_INCREMENT,
  title VARCHAR
  (45) NULL,
  artist VARCHAR
  (30) NULL,
  genre VARCHAR
  (20) NULL,
  PRIMARY KEY
  (id)
);

  INSERT INTO songs
    (title, artist, genre)
  VALUES
    ("I Will", "Danny Brow", "Hip-hop");

  INSERT INTO songs
    (title, artist, genre)
  VALUES
    ("Hail tto the King", "Avenged Sevenfold", "Metal");

  INSERT INTO songs
    (title, artist, genre)
  VALUES
    ("96 F**kries", 'JME', "Grime");

  UPDATE songs SET title = "Detroit City" WHERE title = "I Will";


/* <-- HOW TO UPDATE AND CHANGE DATA BASE -->
C - CREATE - INSERT
R - READ - SELECT
U - UPDATE - UPDATE
D DELETE - DELETE
*/