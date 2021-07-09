CREATE TABLE Customer_table (
	Cust_id int,
First_name varchar,
Last_name varchar,
age int,
email_id varchar);

SELECT * FROM public.customer_table

SELECT * FROM public.customer_table ORDER BY cust_id

INSERT INTO customer_table values
(1,'bee','honey',32,'bh@xyz.com');

INSERT INTO customer_table (cust_id, first_name, last_name, age, email_id)values
(2,'honey','bee',36,'honeybee.com');

INSERT INTO customer_table values
(3,'crack','jack',7,'crackjack.com'),
(4,'U','V',7,'UV.com');

copy Customer_table from 'C:\Program Files\PostgreSQL\13\data\data_copy\copy.csv' delimiter ',' csv header;
copy Customer_table from 'C:\Program Files\PostgreSQL\13\data\data_copy\copy.csv' delimiter '|' csv header;
copy Customer_table from 'C:\Program Files\PostgreSQL\13\data\data_copy\copy.csv' delimiter '&' csv header;

copy Customer_table from 'C:\Program Files\PostgreSQL\13\data\Data_copy\copytext.txt' delimiter ',' csv header;

SELECT * FROM customer_table;

SELECT first_name from customer_table;
SELECT first_name, last_name from customer_table;
SELECT * FROM customer_table;

SELECT DISTINCT first_name FROM customer_table;
SELECT DISTINCT first_name, age FROM customer_table;
SELECT DISTINCT * FROM customer_table;

SELECT first_name FROM customer_table WHERE age > 25;
SELECT DISTINCT first_name FROM customer_table WHERE age > 25;

SELECT first_name, last_name, age FROM customer_table WHERE age>20 and age<30;
SELECT first_name, last_name, age from customer_table WHERE age<20 OR age>30;

SELECT * FROM customer_table WHERE NOT age = 25;
SELECT * FROM customer_table WHERE NOT age = 25 AND NOT first_name = 'Jay';

UPDATE Customer_table
SET last_name='Pe', age = 17 WHERE cust_id=6;

SELECT * FROM customer_table;

UPDATE Customer_table SET email_id = 'gee@xyz.com' WHERE first_name='Gee' or first_name = 'gee';
SELECT * FROM customer_table;

ALTER TABLE customer_table ADD tesT VARCHAR(255);
SELECT * FROM customer_table;

ALTER TABLE customer_table DROP test;
SELECT * FROM customer_table;

ALTER TABLE customer_table DROP COLUMN test;

ALTER TABLE customer_table ALTER COLUMN age TYPE varchar(255);
SELECT * FROM customer_table;

ALTER TABLE customer_table RENAME COLUMN email_id TO customer_email;
SELECT * FROM customer_table;

ALTER TABLE customer_table ALTER COLUMN cust_id SET NOT null;
SELECT * FROM customer_table;
INSERT INTO customer_table(first_name,last_name,age,customer_email) VALUES
('aa','bb','25','ab@xyz.com');

ALTER TABLE customer_table ALTER COLUMN cust_id SET NOT null;

ALTER TABLE customer_table ADD CONSTRAINT cust_id CHECK (cust_id>0);
INSERT INTO customer_table VALUES (-1,'cc','dd','67','cd@xyz.com');

SELECT * FROM customer_table;
ALTER TABLE customer_table ADD PRIMARY KEY (cust_id);
SELECT * FROM customer_table;

