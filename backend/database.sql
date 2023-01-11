DROP TABLE IF EXISTS user;

CREATE TABLE user (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(100) NOT NULL,
  lastname varchar(100) NOT NULL,
  email varchar(200) NOT NULL,
  city varchar(100),
  phone varchar(20),
  avatar varchar(255),
  hashedPassword varchar(100) NOT NULL,
  is_admin tinyint NOT NULL DEFAULT 0,
  date_creation DATETIME NOT NULL DEFAULT NOW() 
);

INSERT INTO user (firstname, lastname, email, city, phone, avatar, hashedPassword, is_admin, date_creation) VALUES ('Iris', 'Tracer', 'iris.tracer@gmail.com', 'Teahupo', '0606080907', 'monplusbelavatariris.jpg', '12345', '1', '2022-10-13 12:12:23'),('Madeline', 'Phara', 'madeline.phara@gmail.com', 'Lyon', '0606080907', 'monplusbelavatarmadeline.jpg', '12345', '1', '2022-10-13 12:12:23'),('John', 'Doe', 'test@test.com', 'Katmandu', '0606080907', 'monplusbelavatarjohn.jpg', '$argon2id$v=19$m=65536,t=5,p=1$cHKCeWcTAbFAoQip2FBoSQ$YEwzjtbjy/r88czZmo+Ess3AGPYvhonN2HTureWf3NY', '1', '2022-10-13 12:12:23'),('Marion', 'Lagothique', 'marion.lagothique@gmail.com', 'Rome', '0606080907', 'monplusbelavatarmarion.jpg', '12345', '1', '2022-10-13 12:12:23')('Morgan', 'freeman', 'morgan.freeman@gmail.com', 'USA', '0606080907', 'monplusbelavatarmorgan.jpg', '12345', '1', '2022-10-13 12:12:23');
