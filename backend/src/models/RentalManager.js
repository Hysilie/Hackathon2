const AbstractManager = require("./AbstractManager");

class RentalManager extends AbstractManager {
  constructor() {
    super({ table: "rental" });
  }

  rentalByUser(id) {
    return this.connection.query(
      `select * from ${this.table} left join car on rental.car_id = car.id 
      left join agency on rental.agency_id = agency.id
      where user_id = ?`,
      [id]
    );
  }

  addRentalCarByUser(carRented) {
    return (
      this.connection.query(
        `insert into ${this.table} (departureDate, returnDate, user_id, car_id, agency_id)`
      ),
      [
        carRented.departureDate,
        carRented.returnDate,
        carRented.user_id,
        carRented.car_id,
        carRented.agency_id,
      ]
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
}
module.exports = RentalManager;
