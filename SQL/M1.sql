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

