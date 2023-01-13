const AbstractManager = require("./AbstractManager");

class CarManager extends AbstractManager {
  constructor() {
    super({ table: "car" });
  }

  // function to get all cars by agency
  findAllByAgency(id) {
    return this.connection.query(
      `select * from ${this.table} where agency_id = ?`,
      [id]
    );
  }

  // function to get all cars by location and available on search dates
  findAllByLocationAndDate(city, startDate, endDate) {
    return this.connection.query(
      `select *, car.id as carId, car.latitude as carLatitude, car.longitude as carLongitude
      from car 
      JOIN agency on car.agency_id=agency.id
      where agency.name = ? AND
      ${this.table}.id NOT IN (SELECT car_id FROM rental WHERE 
      ("?" NOT BETWEEN rental.departureDate AND rental.returnDate) AND ("?" NOT BETWEEN rental.departureDate AND rental.returnDate));`,
      [city, startDate, endDate]
    );
  }

  findCarByCity(city) {
    return this.connection.query(
      `select *
      from car 
      JOIN agency on car.agency_id=agency.id
      JOIN rental on car.id = rental.car_id
      where agency.name = ? `,
      [city]
    );
  }

  // function to get all cars, all agencies combined
  findAllCars() {
    return this.connection.query(
      `select count(id) as count from ${this.table}`
    );
  }

  // function to get all actual rented cars by agency
  findCarsRentedByAgency(id) {
    return this.connection.query(
      `select count(id) from ${this.table} where agency_id = ?`,
      [id]
    );
  }

  // function to get unvailable (rented or in maintenance) cars by agency
  findNonAvailableCarByAgency(id) {
    return this.connection.query(
      `select sum(id) from ${this.table} where available = 0 and agency_id = ?`,
      [id]
    );
  }

  // ADD a new car
  insert(car) {
    return this.connection.query(
      `insert into ${this.table} (typeOfCar, brand, model, yearCar, photo, matriculation, kilometers, autonomy, gearbox, power, maxPlace, optionCar, locationCar, pricePerDay, agency_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        car.typeOfCar,
        car.brand,
        car.model,
        car.yearCar,
        car.photo,
        car.matriculation,
        car.kilometers,
        car.autonomy,
        car.gearbox,
        car.power,
        car.maxPlace,
        car.optionCar,
        car.locationCar,
        car.pricePerDay,
        car.agency_id,
      ]
    );
  }

  edit(car) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      car,
      car.id,
    ]);
  }

  updateCarPhoto(id, carPhoto) {
    return this.connection.query(
      `update ${this.table} set photo = ? where id = ?`,
      [carPhoto, id]
    );
  }
}
module.exports = CarManager;
