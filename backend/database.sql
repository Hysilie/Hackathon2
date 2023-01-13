DROP TABLE IF EXISTS user;

CREATE TABLE user (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  phone varchar(30) NOT NULL,
  email varchar(50) NOT NULL,
  country varchar(60),
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
  photo varchar(500) DEFAULT "renault-zoe.png",
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
  latitude varchar(60),
  longitude varchar(60),
  agency_id int NOT NULL,
  rented boolean NOT NULL DEFAULT 0,
  FOREIGN KEY (agency_id) REFERENCES agency(id)
);

INSERT INTO car (typeOfCar, brand, model, yearCar, photo, matriculation, kilometers, autonomy, gearbox, power, maxPlace, optionCar, locationCar, available,  pricePerDay, latitude, longitude, agency_id, rented) 
VALUES ('Berline', 'Renault', 'Zoe', 2018, 'renault-zoe.png', 'AZ-354-BK', 10082, 390, 'automatic', 90, 5, 'camera', '76 rue leon jouhaux 69003 Lyon', 1, 80,'45.7540739','4.854421', 1, 0),
('SUV', 'Audi', 'Q4', 2021, 'aud-etron-q4.png', 'AZ-734-BK', 5083, 513, 'automatic', 95, 5, 'camera', '81 avenue Berthelot 69007 Lyon', 1, 210,'45.7445274','4.8444978', 1 ,0),
('SUV', 'Audi', 'E-TRON SPORTBACK', 2021, 'aud-etron-sportback.png', 'JS-736-BG', 7468, 513, 'automatic', 95, 5, 'camera', '2 Montée Bonafous, 69004 Lyon' ,1, 250, '45.77522659301758', '4.837834358215332', 1, 0),
('SUV', 'BMW', 'i4', 2021, 'bmw-i4.png', 'BH-736-MA', 6283, 513, 'automatic', 95, 5, 'camera', 'Rue Bony, 69004 Lyon', 1, 250, '45.773461','4.8190537', 1, 0),
('SUV', 'BMW', 'ix3', 2022, 'bmw-ix3.png', 'JS-729-KP', 8290, 600, 'automatic', 95, 5, 'camera', '1 Rue Henri IV, 69002 Lyon',1, 250, '45.75296857190714','4.828332823431549', 1, 0),
('Berline', 'Peugeot', 'e208', 2020, 'peugeot-e208.png', 'JE-923-MA', 1258, 400, 'automatic', 95, 5, 'camera', '187 Rue Marcel Mérieux, 69007 Lyon ',1, 250, '45.734254599602515', '4.829759651837455', 1,0),
('SUV', 'Citroen', 'ec4', 2020, 'citroen-ec4.png', 'MA-923-KP', 9304, 400, 'automatic', 95, 5, 'camera', '10 Montée du Télégraphe, 69005 Lyon',1, 250, '45.757637077354296', '4.818599405525683', 1,0),
('SUV', 'Peugeot', 'e2008', 2020, 'peugeot-e2008.png', 'NF-748-KP', 29832, 340, 'automatic', 95, 5, 'camera', '245 Cours Lafayette, 69006',1, 250, '45.7639205937304', '4.863677109922655', 1,0),
('SUV', 'Tesla', 's', 2020, 'tesla-s.png', 'NF-748-KP', 1832, 340, 'automatic', 95, 5, 'camera', '2 Rue Victor Hugo, 69002 Lyon',1, 250, '45.75687466303397', '4.831239396578195', 1,0),
('SUV', 'Tesla', 'x', 2020, 'tesla-x.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 1,0),
('SUV', 'Tesla', 'y', 2020, 'tesla-y.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '46 Rue Chevreul, 69007 Lyon',1, 250, '45.74782230988267','4.8413583', 1,0),
('Berline', 'Renault', 'Zoe', 2018, 'renault-zoe.png', 'AZ-354-BK', 10082, 390, 'automatic', 90, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 2,0),
('SUV', 'Audi', 'Q4', 2021, 'aud-etron-q4.png', 'AZ-734-BK', 5083, 513, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 2,0),
('SUV', 'Audi', 'E-TRON SPORTBACK', 2021, 'aud-etron-sportback.png', 'JS-736-BG', 7468, 513, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 2,0),
('SUV', 'BMW', 'i4', 2021, 'bmw-i4.png', 'BH-736-MA', 6283, 513, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 2,0),
('SUV', 'BMW', 'ix3', 2022, 'bmw-ix3.png', 'JS-729-KP', 8290, 600, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 2,0),
('Berline', 'Peugeot', 'e208', 2020, 'peugeot-e208.png', 'JE-923-MA', 1258, 400, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 2,0),
('SUV', 'Citroen', 'ec4', 2020, 'citroen-ec4.png', 'MA-923-KP', 9304, 400, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 2,0),
('SUV', 'Peugeot', 'e2008', 2020, 'peugeot-e2008.png', 'NF-748-KP', 29832, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 2,0),
('SUV', 'Tesla', 's', 2020, 'tesla-s.png', 'NF-748-KP', 1832, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 2,0),
('SUV', 'Tesla', 'x', 2020, 'tesla-x.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 2,0),
('SUV', 'Tesla', 'y', 2020, 'tesla-y.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 2,0),
('Berline', 'Renault', 'Zoe', 2018, 'renault-zoe.png', 'AZ-354-BK', 10082, 390, 'automatic', 90, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 3,0),
('SUV', 'Audi', 'Q4', 2021, 'aud-etron-q4.png', 'AZ-734-BK', 5083, 513, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 3,0),
('SUV', 'Audi', 'E-TRON SPORTBACK', 2021, 'aud-etron-sportback.png', 'JS-736-BG', 7468, 513, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 3,0),
('SUV', 'BMW', 'i4', 2021, 'bmw-i4.png', 'BH-736-MA', 6283, 513, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 3,0),
('SUV', 'BMW', 'ix3', 2022, 'bmw-ix3.png', 'JS-729-KP', 8290, 600, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 3,0),
('Berline', 'Peugeot', 'e208', 2020, 'peugeot-e208.png', 'JE-923-MA', 1258, 400, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 3,0),
('SUV', 'Citroen', 'ec4', 2020, 'citroen-ec4.png', 'MA-923-KP', 9304, 400, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 3,0),
('SUV', 'Peugeot', 'e2008', 2020, 'peugeot-e2008.png', 'NF-748-KP', 29832, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 3,0),
('SUV', 'Tesla', 's', 2020, 'tesla-s.png', 'NF-748-KP', 1832, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 3,0),
('SUV', 'Tesla', 'x', 2020, 'tesla-x.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 3,0),
('SUV', 'Tesla', 'y', 2020, 'tesla-y.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 3,0),
('Berline', 'Renault', 'Zoe', 2018, 'renault-zoe.png', 'AZ-354-BK', 10082, 390, 'automatic', 90, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 4,0),
('SUV', 'Audi', 'Q4', 2021, 'aud-etron-q4.png', 'AZ-734-BK', 5083, 513, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 4,0),
('SUV', 'Audi', 'E-TRON SPORTBACK', 2021, 'aud-etron-sportback.png', 'JS-736-BG', 7468, 513, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 4,0),
('SUV', 'BMW', 'i4', 2021, 'bmw-i4.png', 'BH-736-MA', 6283, 513, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 4,0),
('SUV', 'BMW', 'ix3', 2022, 'bmw-ix3.png', 'JS-729-KP', 8290, 600, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 4,0),
('Berline', 'Peugeot', 'e208', 2020, 'peugeot-e208.png', 'JE-923-MA', 1258, 400, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 4,0),
('SUV', 'Citroen', 'ec4', 2020, 'citroen-ec4.png', 'MA-923-KP', 9304, 400, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 4,0),
('SUV', 'Peugeot', 'e2008', 2020, 'peugeot-e2008.png', 'NF-748-KP', 29832, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 4,0),
('SUV', 'Tesla', 's', 2020, 'tesla-s.png', 'NF-748-KP', 1832, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 4,0),
('SUV', 'Tesla', 'x', 2020, 'tesla-x.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 4,0),
('SUV', 'Tesla', 'y', 2020, 'tesla-y.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 4,0),
('Berline', 'Renault', 'Zoe', 2018, 'renault-zoe.png', 'AZ-354-BK', 10082, 390, 'automatic', 90, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 5,0),
('SUV', 'Audi', 'Q4', 2021, 'aud-etron-q4.png', 'AZ-734-BK', 5083, 513, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 5,0),
('SUV', 'Audi', 'E-TRON SPORTBACK', 2021, 'aud-etron-sportback.png', 'JS-736-BG', 7468, 513, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 5,0),
('SUV', 'BMW', 'i4', 2021, 'bmw-i4.png', 'BH-736-MA', 6283, 513, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 5,0),
('SUV', 'BMW', 'ix3', 2022, 'bmw-ix3.png', 'JS-729-KP', 8290, 600, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 5,0),
('Berline', 'Peugeot', 'e208', 2020, 'peugeot-e208.png', 'JE-923-MA', 1258, 400, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 5,0),
('SUV', 'Citroen', 'ec4', 2020, 'citroen-ec4.png', 'MA-923-KP', 9304, 400, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 5,0),
('SUV', 'Peugeot', 'e2008', 2020, 'peugeot-e2008.png', 'NF-748-KP', 29832, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 5,0),
('SUV', 'Tesla', 's', 2020, 'tesla-s.png', 'NF-748-KP', 1832, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 5,0),
('SUV', 'Tesla', 'x', 2020, 'tesla-x.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 5,0),
('SUV', 'Tesla', 'y', 2020, 'tesla-y.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 5,0),
('Berline', 'Renault', 'Zoe', 2018, 'renault-zoe.png', 'AZ-354-BK', 10082, 390, 'automatic', 90, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 6,0),
('SUV', 'Audi', 'Q4', 2021, 'aud-etron-q4.png', 'AZ-734-BK', 5083, 513, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 6,0),
('SUV', 'Audi', 'E-TRON SPORTBACK', 2021, 'aud-etron-sportback.png', 'JS-736-BG', 7468, 513, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 6,0),
('SUV', 'BMW', 'i4', 2021, 'bmw-i4.png', 'BH-736-MA', 6283, 513, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 6,0),
('SUV', 'BMW', 'ix3', 2022, 'bmw-ix3.png', 'JS-729-KP', 8290, 600, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 6,0),
('Berline', 'Peugeot', 'e208', 2020, 'peugeot-e208.png', 'JE-923-MA', 1258, 400, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 6,0),
('SUV', 'Citroen', 'ec4', 2020, 'citroen-ec4.png', 'MA-923-KP', 9304, 400, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 6,0),
('SUV', 'Peugeot', 'e2008', 2020, 'peugeot-e2008.png', 'NF-748-KP', 29832, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 6,0),
('SUV', 'Tesla', 's', 2020, 'tesla-s.png', 'NF-748-KP', 1832, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 6,0),
('SUV', 'Tesla', 'x', 2020, 'tesla-x.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 6,0),
('SUV', 'Tesla', 'y', 2020, 'tesla-y.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '36 Rue Roger Radisson, 69005 Lyon',1, 250, '45.761328456542515', '4.817592720068409', 6,0), 
('Berline', 'Renault', 'Zoe', 2018, 'renault-zoe.png', 'AZ-354-BK', 10082, 390, 'automatic', 90, 5, 'camera', '51 Rue de Geôle, 14000 Caen',1, 80, '49.184988517219395', '-0.3638734912292674', 7,0),
('SUV', 'Audi', 'Q4', 2021, 'aud-etron-q4.png', 'AZ-734-BK', 5083, 513, 'automatic', 95, 5, 'camera', '38 Route de Trouville, 14120 Mondeville',1, 210, '49.17587104375212', '-0.33316486657045896', 7,0),
('SUV', 'Audi', 'E-TRON SPORTBACK', 2021, 'aud-etron-sportback.png', 'JS-736-BG', 7468, 513, 'automatic', 95, 5, 'camera', '29 Rue Georges Gaillard, 14000 Caen',1, 250, '49.1670742706659', '-0.35450288902842075', 7,0),
('SUV', 'BMW', 'i4', 2021, 'bmw-i4.png', 'BH-736-MA', 6283, 513, 'automatic', 95, 5, 'camera', '49 Rue du Maréchal Gallieni, 14000 Caen',1, 250, '49.17629777493661', '-0.3969287052236803', 7,0),
('SUV', 'BMW', 'ix3', 2022, 'bmw-ix3.png', 'JS-729-KP', 8290, 600, 'automatic', 95, 5, 'camera', '16 Rue Robert Tournières, 14000 Caen,',1, 250, '49.18452309220607', '-0.38945922345087647', 7,0),
('Berline', 'Peugeot', 'e208', 2020, 'peugeot-e208.png', 'JE-923-MA', 1258, 400, 'automatic', 95, 5, 'camera', '25 Rue du Vingtième Siècle, 14000 Caen',1, 250, '49.18749567938887', '-0.3714693230597277', 7,0),
('SUV', 'Citroen', 'ec4', 2020, 'citroen-ec4.png', 'MA-923-KP', 9304, 400, 'automatic', 95, 5, 'camera', '202 bis Rue Caponière, 14000 Caen',1, 250, '49.17596616493577', '-0.38552352727711403', 7,0),
('SUV', 'Peugeot', 'e2008', 2020, 'peugeot-e2008.png', 'NF-748-KP', 29832, 340, 'automatic', 95, 5, 'camera', '48 Rue de Bretagne, 14000 Caen',1, 250, '49.18250283441284', '-0.3806934951203811', 7,0),
('SUV', 'Tesla', 's', 2020, 'tesla-s.png', 'NF-748-KP', 1832, 340, 'automatic', 95, 5, 'camera', '9 Rue Gémare, 14000 Caen',1, 250, '49.18412005685736', '-0.3645648639165877', 7,0),
('SUV', 'Tesla', 'x', 2020, 'tesla-x.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '61 Rue de l Oratoire, 14000 Caen',1, 250, '49.18018665528449', '-0.3618172907792605', 7,0),
('SUV', 'Tesla', 'y', 2020, 'tesla-y.png', 'MA-263-FS', 12724, 340, 'automatic', 95, 5, 'camera', '110 Rue Caponière, 14000 Caen',1, 250, '49.179264042920835', '-0.3787051349981896', 7,0);
 
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
