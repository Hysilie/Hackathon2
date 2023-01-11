DROP TABLE IF EXISTS user;

CREATE TABLE user (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  phone varchar(30) NOT NULL,
  email varchar(50) NOT NULL,
  country varchar(60) NULL,
  adress text NULL,
  dateOfBirth date, 
  numberOfIdCard float,
  dateOfIdCard DATE,
  numberOfLicense float,
  dateOfLicense DATE,
  hashedPassword varchar(255) NOT NULL,
  admin boolean NOT NULL DEFAULT 0,
  superAdmin boolean NOT NULL DEFAULT 0,
  creationDate DATETIME NOT NULL DEFAULT NOW()
);

INSERT INTO user (firstname, lastname, phone, email, country, adress, dateOfBirth, numberOfIdCard, dateOfIdCard, numberOfLicense, dateOfLicense, hashedPassword)
VALUES ('John', 'Doe', '0629764890', 'john_doe@gmail.com', 'France', '24 rue de la rue 69000 Lyon','1992-10-13', '024670', '1992-10-13', '87242', '1992-10-13', 'fezgfpeziblzjbfzliuflzibflzjbfzlkjbfliuze');

DROP TABLE IF EXISTS agency;

CREATE TABLE agency (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255),
  location varchar(255) NOT NULL
);

INSERT INTO agency (name, location) 
VALUES ('Lyon', '11 rue de la rue 69000');

DROP TABLE IF EXISTS car; 

CREATE TABLE car (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  typeOfCar varchar(60) NOT NULL,
  brand varchar(60) NOT NULL,
  model varchar(60) NOT NULL,
  yearCar int NOT NULL,
  photo text NOT NULL,
  matriculation varchar(30) NOT NULL,
  kilometers int NOT NULL,
  autonomy varchar(20) NOT NULL,
  gearbox varchar(20) NOT NULL,
  power int NOT NULL,
  maxPlace int NOT NULL,
  optionCar text,
  locationCar text NOT NULL,
  available boolean NOT NULL DEFAULT 1,
  pricePerDay int NOT NULL,
  agency_id int NOT NULL,
  rented boolean NOT NULL DEFAULT 0,
  FOREIGN KEY (agency_id) REFERENCES agency(id)
);

INSERT INTO car (typeOfCar, brand, model, yearCar, photo, matriculation, kilometers, autonomy, gearbox, power, maxPlace, optionCar, locationCar, pricePerDay, agency_id)
VALUES ('berline', 'Renault', 'Zoe', 2018, 'imageZoe.jpg', 'AZ-354-BK', 10082, 500, 'automatic', 90, 5, 'camera', '14 avenue de la canebière 13001 Marseille', 80, 1);


DROP TABLE IF EXISTS rental;

CREATE TABLE rental (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  departureDate datetime NOT NULL,
  returnDate datetime NOT NULL,
  user_id int,
  car_id int,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (car_id) REFERENCES car(id)
);

INSERT INTO rental (departureDate, returnDate)
VALUES ('2022-10-13 12:12:23', '2022-10-15 12:12:23'); 


DROP TABLE IF EXISTS invoice;

CREATE TABLE invoice (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  dateOfInvoice datetime NOT NULL,
  total int,
  rental_id int,
  FOREIGN KEY (rental_id) REFERENCES rental(id)
);

INSERT INTO invoice ( dateOfInvoice, total)
VALUES ('2022-10-13 12:12:23', '100'); 
  