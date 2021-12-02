CREATE TYPE "engines" AS ENUM (
  'PETROL',
  'DIESEL',
  'HYBRID',
  'ELECTRIC',
  'HYDROGEN'
);

CREATE TABLE "cars" (
  "id" SERIAL PRIMARY KEY,
  "type" varchar,
  "make" varchar,
  "model" varchar,
  "engine" engines,
  "price_per_day" int
);

CREATE TABLE "customers" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "surname" varchar,
  "phone" varchar,
  "email" varchar,
  "driving_license_id" int,
  "street" varchar,
  "street_number" int,
  "postcode" int,
  "city" varchar
);

CREATE TABLE "rentals" (
  "id" SERIAL PRIMARY KEY,
  "customer_id" int,
  "car_id" int,
  "date_begin" datetime,
  "date_end" datetime,
  "total_price" int
);

ALTER TABLE "rentals" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("id");
ALTER TABLE "rentals" ADD FOREIGN KEY ("car_id") REFERENCES "cars" ("id");

/*Kwerendy - Insert*/
  INSERT INTO cars (id, type, make, model, engine, price_per_day VALUES 
  ( id, type, make, model, engine, price_per_day ) 

  INSERT INTO customers (id, name, surname, phone, email, driving_license_id, street, street_number, postcode, city VALUES 
  ( id, name, surname, phone, email, driving_license_id, street, street_number, postcode, city )

  INSERT INTO rentals (id, customer_id, car_id, date_begin, date_end, total_price VALUES 
  ( id, customer_id, car_id, date_begin, date_end, total_price )

/*Zmiany danych*/
  UPDATE cars SET 'type' = new_string_value    WHERE 'id' = existing_int_value;
  UPDATE cars SET 'make' = new_string_value    WHERE 'id' = existing_int_value;
  UPDATE cars SET 'model' = new_string_value    WHERE 'id' = existing_int_value;
  UPDATE cars SET 'engine' = new_engine_value    WHERE 'id' = existing_int_value;
  UPDATE cars SET 'price_per_day' = new_int_value    WHERE 'id' = existing_int_value;
  
  UPDATE customers SET 'name' = new_string_value    WHERE 'id' = existing_int_value;
  UPDATE customers SET 'surname' = new_string_value    WHERE 'id' = existing_int_value;
  UPDATE customers SET 'phone' = new_string_value    WHERE 'id' = existing_int_value;
  UPDATE customers SET 'email' = new_string_value    WHERE 'id' = existing_int_value;
  UPDATE customers SET 'driving_license_id' = new_string_value    WHERE 'id' = existing_int_value;
  UPDATE customers SET 'street' = new_string_value    WHERE 'id' = existing_int_value;
  UPDATE customers SET 'street_number' = new_string_value    WHERE 'id' = existing_int_value;
  UPDATE customers SET 'postcode' = new_string_value    WHERE 'id' = existing_int_value;
  UPDATE customers SET 'city' = new_string_value    WHERE 'id' = existing_int_value;

  UPDATE retals SET 'customer_id' = new_int_value WHERE 'id' = existing_int_value;
  UPDATE retals SET 'car_id' = new_int_value WHERE 'id' = existing_int_value;
  UPDATE retals SET 'date_begin' = new_int_value WHERE 'id' = existing_int_value;
  UPDATE retals SET 'date_end' = new_int_value WHERE 'id' = existing_int_value;
  UPDATE retals SET 'total_price' = new_int_value WHERE 'id' = existing_int_value;
 
--  SELECT * FROM cars WHERE
--  SELECT * FROM customers WHERE
--  SELECT * FROM rentals WHERE

/*Usuwanie danych*/
  DELETE FROM cars  WHERE 'id' = existing_int_value;
  DELETE FROM customers  WHERE 'id' = existing_int_value;
  DELETE FROM rentals     WHERE 'id' = existing_int_value;