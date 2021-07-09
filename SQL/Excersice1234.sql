CREATE TABLE science_class(
Enrollment_no INT,
Name VARCHAR,
Science_MARKS INT);

INSERT INTO science_class VALUES
(1,'Popeye',33),
(2,'Olive',54),
(3,'Brutus',98);

COPY science_class FROM 
'C:\Program Files\PostgreSQL\13\data\data_copy\Student.csv' DELIMITER ',' CSV HEADER;

SELECT * FROM Science_class;

SELECT name FROM Science_class WHERE science_marks>60;

SELECT * FROM Science_class 
WHERE science_marks>35 AND science_marks<60;

SELECT * FROM Science_class 
WHERE science_marks<35 OR science_marks>=60;

UPDATE science_class 
SET science_marks = 45 
WHERE name = 'Popeye';

DELETE FROM science_class
WHERE name = 'Robb';
SELECT * FROM Science_class;

ALTER TABLE science_class
RENAME COLUMN name TO student_name 
SELECT * FROM Science_class;
