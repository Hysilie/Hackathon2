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

  // function to get all cars, all agencies combined
  findAllCars() {
    return this.connection.query(`select count(id) from ${this.table}`);
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

  insert(car) {
    this.connection.query(
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
}
module.exports = CarManager;
