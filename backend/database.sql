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

INSERT INTO user (firstname, lastname, phone, email, country, adress, dateOfBirth, numberOfIdCard, dateOfIdCard, numberOfLicense, dateOfLicense, hashedPassword, admin, superAdmin)
VALUES ('John', 'Doe', '0629764890', 'john_doe@gmail.com', 'France', '24 rue de la rue 69000 Lyon','1992-10-13', '024670', '1992-10-13', '87242', '1992-10-13', 'fezgfpeziblzjbfzliuflzibflzjbfzlkjbfliuze','0','0'),
('Morgan', 'Freeman', '0629764890', 'morgan.f@gmail.com', 'France', '24 rue de la pierre 75000 Paris','1995-10-13', '024670', '1992-10-13', '87242', '1992-10-13', '$argon2id$v=19$m=65536,t=5,p=1$+I+/jTecqcBO66TI3dUi4A$i0f9wA1Rp3JQqhktX877lkkv+HGYcXTkKEkWrYNJfVs','1','0'),
('Madeline', 'Pharma', '0629764890', 'madeline.p@gmail.com', 'France', '24 rue de la montagne 74000 Annecy','1992-10-13', '024670', '1992-10-13', '87242', '1992-10-13', '$argon2id$v=19$m=65536,t=5,p=1$+I+/jTecqcBO66TI3dUi4A$i0f9wA1Rp3JQqhktX877lkkv+HGYcXTkKEkWrYNJfVs','1','1');

DROP TABLE IF EXISTS agency;

CREATE TABLE agency (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255),
  location varchar(255) NOT NULL,
  latitude varchar(100) NOT NULL,
  longitude varchar(100) NOT NULL
);

INSERT INTO agency (name, location, latitude, longitude) 
VALUES ('Lyon', '11 rue de la rue 69000', '45.764042', '4.835659'),('Paris', '12 rue de la rue 75000', '48.856613', '2.352222'),
('Marseille', '11 rue de la rue 69000', '43.296482', '5.369780'),('Nice', '13 rue de la rue 13000', '43.710175', '7.261953'),
('Biarritz', '11 rue de la rue', '43.4832523', '1.5592776'), ('Bordeaux', '13 rue de la rue', '44.841225', '-0.5800364'),
('Caen', '15 rue de la rue', '49.1813403', '-0.3635615');

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
VALUES ('Berline', 'Renault', 'Zoe', 2018, 'renault-zoe.png', 'AZ-354-BK', 10082, 390, 'automatic', 90, 5, 'camera', '14 avenue de la canebière 69000 Lyon', 80, 1),
 ('SUV', 'Audi', 'Q4', 2021, 'aud-etron-q4.png', 'AZ-734-BK', 5083, 513, 'automatic', 95, 5, 'camera', '15 avenue de la juin 69000 Lyon', 210, 1),
 ('SUV', 'Audi', 'E-TRON SPORTBACK', 2021, 'aud-etron-sportback.png', 'JS-736-BG', 7468, 513, 'automatic', 95, 5, 'camera', '30 avenue de la frisson 69000 Lyon', 250, 1),
 ('SUV', 'BMW', 'i4', 2021, 'bmw-i4.png', 'BH-736-MA', 6283, 513, 'automatic', 95, 5, 'camera', '30 avenue du soleil 69000 Lyon', 250, 1),
 ('SUV', 'BMW', 'ix3', 2022, 'bmw-ix3.png', 'JS-729-KP', 8290, 600, 'automatic', 95, 5, 'camera', '10 avenue de la potion 69000 Lyon', 250, 1),
 ('Berline', 'Peugeot', 'e208', 2020, 'peugeot-e208.png', 'JE-923-MA', 1258, 400, 'automatic', 95, 5, 'camera', '30 avenue de la sauvage 69000 Lyon', 250, 1),
 ('SUV', 'Citroen', 'ec4', 2020, 'citroen-ec4.png', 'MA-923-KP', 9304, 400, 'automatic', 95, 5, 'camera', '20 avenue de la fleur 69000 Lyon', 250, 1),
 ('SUV', 'Peugeot', 'e2008', 2020, 'peugeot-e2008.png', 'NF-748-KP', 29832, 340, 'automatic', 95, 5, 'camera', '20 avenue de la fleur 69000 Lyon', 250, 1),
 ('SUV', 'Tesla', 's', 2020, 'tesla-s.png', 'NF-748-KP', 1832, 340, 'automatic', 95, 5, 'camera', '10 avenue de la camomille 69000 Lyon', 250, 1),
 ('SUV', 'Tesla', 'x', 2020, 'tesla-x.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '374 avenue de la rose 69000 Lyon', 250, 1),
 ('SUV', 'Tesla', 'y', 2020, 'tesla-y.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '30 avenue de la tulipe 69000 Lyon', 250, 1),('Berline', 'Renault', 'Zoe', 2018, 'renault-zoe.png', 'AZ-354-BK', 10082, 390, 'automatic', 90, 5, 'camera', '14 avenue de la canebière 69000 Lyon', 80, 2),
 ('SUV', 'Audi', 'Q4', 2021, 'aud-etron-q4.png', 'AZ-734-BK', 5083, 513, 'automatic', 95, 5, 'camera', '15 avenue de la juin 69000 Lyon', 210, 2),
 ('SUV', 'Audi', 'E-TRON SPORTBACK', 2021, 'aud-etron-sportback.png', 'JS-736-BG', 7468, 513, 'automatic', 95, 5, 'camera', '30 avenue de la frisson 69000 Lyon', 250, 2),
 ('SUV', 'BMW', 'i4', 2021, 'bmw-i4.png', 'BH-736-MA', 6283, 513, 'automatic', 95, 5, 'camera', '30 avenue du soleil 69000 Lyon', 250, 2),
 ('SUV', 'BMW', 'ix3', 2022, 'bmw-ix3.png', 'JS-729-KP', 8290, 600, 'automatic', 95, 5, 'camera', '10 avenue de la potion 69000 Lyon', 250, 2),
 ('Berline', 'Peugeot', 'e208', 2020, 'peugeot-e208.png', 'JE-923-MA', 1258, 400, 'automatic', 95, 5, 'camera', '30 avenue de la sauvage 69000 Lyon', 250, 2),
 ('SUV', 'Citroen', 'ec4', 2020, 'citroen-ec4.png', 'MA-923-KP', 9304, 400, 'automatic', 95, 5, 'camera', '20 avenue de la fleur 69000 Lyon', 250, 2),
 ('SUV', 'Peugeot', 'e2008', 2020, 'peugeot-e2008.png', 'NF-748-KP', 29832, 340, 'automatic', 95, 5, 'camera', '20 avenue de la fleur 69000 Lyon', 250, 2),
 ('SUV', 'Tesla', 's', 2020, 'tesla-s.png', 'NF-748-KP', 1832, 340, 'automatic', 95, 5, 'camera', '10 avenue de la camomille 69000 Lyon', 250, 2),
 ('SUV', 'Tesla', 'x', 2020, 'tesla-x.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '374 avenue de la rose 69000 Lyon', 250, 2),
 ('SUV', 'Tesla', 'y', 2020, 'tesla-y.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '30 avenue de la tulipe 69000 Lyon', 250, 2),('Berline', 'Renault', 'Zoe', 2018, 'renault-zoe.png', 'AZ-354-BK', 10082, 390, 'automatic', 90, 5, 'camera', '14 avenue de la canebière 69000 Lyon', 80, 3),
 ('SUV', 'Audi', 'Q4', 2021, 'aud-etron-q4.png', 'AZ-734-BK', 5083, 513, 'automatic', 95, 5, 'camera', '15 avenue de la juin 69000 Lyon', 210, 3),
 ('SUV', 'Audi', 'E-TRON SPORTBACK', 2021, 'aud-etron-sportback.png', 'JS-736-BG', 7468, 513, 'automatic', 95, 5, 'camera', '30 avenue de la frisson 69000 Lyon', 250, 3),
 ('SUV', 'BMW', 'i4', 2021, 'bmw-i4.png', 'BH-736-MA', 6283, 513, 'automatic', 95, 5, 'camera', '30 avenue du soleil 69000 Lyon', 250, 3),
 ('SUV', 'BMW', 'ix3', 2022, 'bmw-ix3.png', 'JS-729-KP', 8290, 600, 'automatic', 95, 5, 'camera', '10 avenue de la potion 69000 Lyon', 250, 3),
 ('Berline', 'Peugeot', 'e208', 2020, 'peugeot-e208.png', 'JE-923-MA', 1258, 400, 'automatic', 95, 5, 'camera', '30 avenue de la sauvage 69000 Lyon', 250, 3),
 ('SUV', 'Citroen', 'ec4', 2020, 'citroen-ec4.png', 'MA-923-KP', 9304, 400, 'automatic', 95, 5, 'camera', '20 avenue de la fleur 69000 Lyon', 250, 3),
 ('SUV', 'Peugeot', 'e2008', 2020, 'peugeot-e2008.png', 'NF-748-KP', 29832, 340, 'automatic', 95, 5, 'camera', '20 avenue de la fleur 69000 Lyon', 250, 3),
 ('SUV', 'Tesla', 's', 2020, 'tesla-s.png', 'NF-748-KP', 1832, 340, 'automatic', 95, 5, 'camera', '10 avenue de la camomille 69000 Lyon', 250, 3),
 ('SUV', 'Tesla', 'x', 2020, 'tesla-x.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '374 avenue de la rose 69000 Lyon', 250, 3),
 ('SUV', 'Tesla', 'y', 2020, 'tesla-y.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '30 avenue de la tulipe 69000 Lyon', 250, 3),('Berline', 'Renault', 'Zoe', 2018, 'renault-zoe.png', 'AZ-354-BK', 10082, 390, 'automatic', 90, 5, 'camera', '14 avenue de la canebière 69000 Lyon', 80, 4),
 ('SUV', 'Audi', 'Q4', 2021, 'aud-etron-q4.png', 'AZ-734-BK', 5083, 513, 'automatic', 95, 5, 'camera', '15 avenue de la juin 69000 Lyon', 210, 4),
 ('SUV', 'Audi', 'E-TRON SPORTBACK', 2021, 'aud-etron-sportback.png', 'JS-736-BG', 7468, 513, 'automatic', 95, 5, 'camera', '30 avenue de la frisson 69000 Lyon', 250, 4),
 ('SUV', 'BMW', 'i4', 2021, 'bmw-i4.png', 'BH-736-MA', 6283, 513, 'automatic', 95, 5, 'camera', '30 avenue du soleil 69000 Lyon', 250, 4),
 ('SUV', 'BMW', 'ix3', 2022, 'bmw-ix3.png', 'JS-729-KP', 8290, 600, 'automatic', 95, 5, 'camera', '10 avenue de la potion 69000 Lyon', 250, 4),
 ('Berline', 'Peugeot', 'e208', 2020, 'peugeot-e208.png', 'JE-923-MA', 1258, 400, 'automatic', 95, 5, 'camera', '30 avenue de la sauvage 69000 Lyon', 250, 4),
 ('SUV', 'Citroen', 'ec4', 2020, 'citroen-ec4.png', 'MA-923-KP', 9304, 400, 'automatic', 95, 5, 'camera', '20 avenue de la fleur 69000 Lyon', 250, 4),
 ('SUV', 'Peugeot', 'e2008', 2020, 'peugeot-e2008.png', 'NF-748-KP', 29832, 340, 'automatic', 95, 5, 'camera', '20 avenue de la fleur 69000 Lyon', 250, 4),
 ('SUV', 'Tesla', 's', 2020, 'tesla-s.png', 'NF-748-KP', 1832, 340, 'automatic', 95, 5, 'camera', '10 avenue de la camomille 69000 Lyon', 250, 4),
 ('SUV', 'Tesla', 'x', 2020, 'tesla-x.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '374 avenue de la rose 69000 Lyon', 250, 4),
 ('SUV', 'Tesla', 'y', 2020, 'tesla-y.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '30 avenue de la tulipe 69000 Lyon', 250, 4),('Berline', 'Renault', 'Zoe', 2018, 'renault-zoe.png', 'AZ-354-BK', 10082, 390, 'automatic', 90, 5, 'camera', '14 avenue de la canebière 69000 Lyon', 80, 5),
 ('SUV', 'Audi', 'Q4', 2021, 'aud-etron-q4.png', 'AZ-734-BK', 5083, 513, 'automatic', 95, 5, 'camera', '15 avenue de la juin 69000 Lyon', 210, 5),
 ('SUV', 'Audi', 'E-TRON SPORTBACK', 2021, 'aud-etron-sportback.png', 'JS-736-BG', 7468, 513, 'automatic', 95, 5, 'camera', '30 avenue de la frisson 69000 Lyon', 250, 5),
 ('SUV', 'BMW', 'i4', 2021, 'bmw-i4.png', 'BH-736-MA', 6283, 513, 'automatic', 95, 5, 'camera', '30 avenue du soleil 69000 Lyon', 250, 5),
 ('SUV', 'BMW', 'ix3', 2022, 'bmw-ix3.png', 'JS-729-KP', 8290, 600, 'automatic', 95, 5, 'camera', '10 avenue de la potion 69000 Lyon', 250, 5),
 ('Berline', 'Peugeot', 'e208', 2020, 'peugeot-e208.png', 'JE-923-MA', 1258, 400, 'automatic', 95, 5, 'camera', '30 avenue de la sauvage 69000 Lyon', 250, 5),
 ('SUV', 'Citroen', 'ec4', 2020, 'citroen-ec4.png', 'MA-923-KP', 9304, 400, 'automatic', 95, 5, 'camera', '20 avenue de la fleur 69000 Lyon', 250, 5),
 ('SUV', 'Peugeot', 'e2008', 2020, 'peugeot-e2008.png', 'NF-748-KP', 29832, 340, 'automatic', 95, 5, 'camera', '20 avenue de la fleur 69000 Lyon', 250, 5),
 ('SUV', 'Tesla', 's', 2020, 'tesla-s.png', 'NF-748-KP', 1832, 340, 'automatic', 95, 5, 'camera', '10 avenue de la camomille 69000 Lyon', 250, 5),
 ('SUV', 'Tesla', 'x', 2020, 'tesla-x.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '374 avenue de la rose 69000 Lyon', 250, 5),
 ('SUV', 'Tesla', 'y', 2020, 'tesla-y.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '30 avenue de la tulipe 69000 Lyon', 250, 5),('Berline', 'Renault', 'Zoe', 2018, 'renault-zoe.png', 'AZ-354-BK', 10082, 390, 'automatic', 90, 5, 'camera', '14 avenue de la canebière 69000 Lyon', 80, 6),
 ('SUV', 'Audi', 'Q4', 2021, 'aud-etron-q4.png', 'AZ-734-BK', 5083, 513, 'automatic', 95, 5, 'camera', '15 avenue de la juin 69000 Lyon', 210, 6),
 ('SUV', 'Audi', 'E-TRON SPORTBACK', 2021, 'aud-etron-sportback.png', 'JS-736-BG', 7468, 513, 'automatic', 95, 5, 'camera', '30 avenue de la frisson 69000 Lyon', 250, 6),
 ('SUV', 'BMW', 'i4', 2021, 'bmw-i4.png', 'BH-736-MA', 6283, 513, 'automatic', 95, 5, 'camera', '30 avenue du soleil 69000 Lyon', 250, 6),
 ('SUV', 'BMW', 'ix3', 2022, 'bmw-ix3.png', 'JS-729-KP', 8290, 600, 'automatic', 95, 5, 'camera', '10 avenue de la potion 69000 Lyon', 250, 6),
 ('Berline', 'Peugeot', 'e208', 2020, 'peugeot-e208.png', 'JE-923-MA', 1258, 400, 'automatic', 95, 5, 'camera', '30 avenue de la sauvage 69000 Lyon', 250, 6),
 ('SUV', 'Citroen', 'ec4', 2020, 'citroen-ec4.png', 'MA-923-KP', 9304, 400, 'automatic', 95, 5, 'camera', '20 avenue de la fleur 69000 Lyon', 250, 6),
 ('SUV', 'Peugeot', 'e2008', 2020, 'peugeot-e2008.png', 'NF-748-KP', 29832, 340, 'automatic', 95, 5, 'camera', '20 avenue de la fleur 69000 Lyon', 250, 6),
 ('SUV', 'Tesla', 's', 2020, 'tesla-s.png', 'NF-748-KP', 1832, 340, 'automatic', 95, 5, 'camera', '10 avenue de la camomille 69000 Lyon', 250, 6),
 ('SUV', 'Tesla', 'x', 2020, 'tesla-x.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '374 avenue de la rose 69000 Lyon', 250, 6),
 ('SUV', 'Tesla', 'y', 2020, 'tesla-y.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '30 avenue de la tulipe 69000 Lyon', 250, 6),('Berline', 'Renault', 'Zoe', 2018, 'renault-zoe.png', 'AZ-354-BK', 10082, 390, 'automatic', 90, 5, 'camera', '14 avenue de la canebière 69000 Lyon', 80, 7),
 ('SUV', 'Audi', 'Q4', 2021, 'aud-etron-q4.png', 'AZ-734-BK', 5083, 513, 'automatic', 95, 5, 'camera', '15 avenue de la juin 69000 Lyon', 210, 7),
 ('SUV', 'Audi', 'E-TRON SPORTBACK', 2021, 'aud-etron-sportback.png', 'JS-736-BG', 7468, 513, 'automatic', 95, 5, 'camera', '30 avenue de la frisson 69000 Lyon', 250, 7),
 ('SUV', 'BMW', 'i4', 2021, 'bmw-i4.png', 'BH-736-MA', 6283, 513, 'automatic', 95, 5, 'camera', '30 avenue du soleil 69000 Lyon', 250, 6),
 ('SUV', 'BMW', 'ix3', 2022, 'bmw-ix3.png', 'JS-729-KP', 8290, 600, 'automatic', 95, 5, 'camera', '10 avenue de la potion 69000 Lyon', 250, 7),
 ('Berline', 'Peugeot', 'e208', 2020, 'peugeot-e208.png', 'JE-923-MA', 1258, 400, 'automatic', 95, 5, 'camera', '30 avenue de la sauvage 69000 Lyon', 250, 7),
 ('SUV', 'Citroen', 'ec4', 2020, 'citroen-ec4.png', 'MA-923-KP', 9304, 400, 'automatic', 95, 5, 'camera', '20 avenue de la fleur 69000 Lyon', 250, 7),
 ('SUV', 'Peugeot', 'e2008', 2020, 'peugeot-e2008.png', 'NF-748-KP', 29832, 340, 'automatic', 95, 5, 'camera', '20 avenue de la fleur 69000 Lyon', 250, 7),
 ('SUV', 'Tesla', 's', 2020, 'tesla-s.png', 'NF-748-KP', 1832, 340, 'automatic', 95, 5, 'camera', '10 avenue de la camomille 69000 Lyon', 250, 7),
 ('SUV', 'Tesla', 'x', 2020, 'tesla-x.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '374 avenue de la rose 69000 Lyon', 250, 7),
 ('SUV', 'Tesla', 'y', 2020, 'tesla-y.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '30 avenue de la tulipe 69000 Lyon', 250, 7);


DROP TABLE IF EXISTS rental;

CREATE TABLE rental (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  departureDate datetime NOT NULL,
  returnDate datetime NOT NULL,
  user_id int,
  car_id int,
  agency_id int,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (car_id) REFERENCES car(id),
  FOREIGN KEY (agency_id) REFERENCES agency(id)
);

insert into rental (departureDate, returnDate, user_id, car_id, agency_id) values ("2022-10-14 12:12:23", "2022-10-18 12:12:30", "1", "1", "1"); 


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
  