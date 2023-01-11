DROP TABLE IF EXISTS user;

CREATE DATABASE user (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  phone varchar(30) NOT NULL,
  email varchar(30) NOT NULL,
  country varchar(60) NOT NULL,
  adress text NOT NULL,
  dateOfBirth date, 
  numberOfIdCard int,
  dateOfIdCard int,
  numberOfLicense int,
  dateOfLicense date,
  hashedPassword varchar(255) NOT NULL,
  admin boolean NOT NULL DEFAULT 0,
  superAdmin boolean NOT NULL DEFAULT 0,
  creationDate DATETIME NOT NULL DEFAULT NOW()
);

INSERT INTO user (firstname, lastname, phone, email, country, adress, dateOfBirth, numberOfIdCard, dateOfIdCard, numberOfLicense, dateOfLicense, hashedPassword, creationDate)
VALUES ('John', 'Doe', '0629764890', 'john_doe@gmail.com', 'France', '13/10/1992', '0246702949732764', '13/92/2032', '8724298702', '13/10/2002', 'fezgfpeziblzjbfzliuflzibflzjbfzlkjbfliuze', '2022-10-13 12:12:23');

DROP TABLE IF EXISTS agency;

CREATE DATABASE agency (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255),
  location varchar(255) NOT NULL
);

INSERT INTO agency (name, location) 
VALUES ('Lyon', '11 rue de la rue 69000');

DROP TABLE IF EXISTS vehicule; 

CREATE DATABASE vehicule (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  type varchar(60) NOT NULL,
  brand varchar(60) NOT NULL,
  model varchar(60) NOT NULL,
  year int NOT NULL,
  photo text NOT NULL,
  matriculation int NOT NULL,
  kilometers int NOT NULL,
  autonomy varchar(20) NOT NULL,
  gearbox varchar(20) NOT NULL,
  power text NOT NULL,
  maxPlace int NOT NULL,
  option text,
  location varchar(255) NOT NULL,
  available boolean NOT NULL,
  pricePerDay in NOT NULL,
  agency_id int,
  FOREIGN KEY agency_id REFERENCES agency(id)
);

INSERT INTO vehicule (type, brand, model, year, photo, matriculation, kilometers, autonomy, gearbox, power, maxPlace, option, location, available, pricePerDay)
VALUES ('berline', 'Renault', 'Zoe', '2018', 'imageZoe', 'AZ-354-BK', '10082', '500km', 'automatic', '90kW', '5', 'camera', '14 avenue de la canebière 13001 Marseille', '1', '80');

DROP TABLE IF EXISTS rental;

CREATE DATABASE rental (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  departureDate date NOT NULL,
  returnDate date NOT NULL,
  user_id,
  vehicule_id,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (vehicule_id) REFERENCES vehicule(id)
);

INSERT INTO rental (departureDate, returnDate, user_id, vehicule_id)
VALUES ('2022-10-13 12:12:23', '2022-10-15 12:12:23', '1' , '1');


DROP TABLE IF EXISTS invoice;

CREATE DATABASE invoice (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  dateOfInvoice date NOT NULL,
  total int,
  rental_id int,
  FOREIGN KEY rental_id REFERENCES rental(id)
);

INSERT INTO invoice ( dateOfInvoice, total, rental_id)
VALUES ('2022-10-13 12:12:23', '100', '1');
