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
    return this.connection.query(
      `insert into ${this.table} (departureDate, returnDate, user_id, car_id, agency_id) values (?,?,?,?,?)`,
      [
        carRented.departureDate,
        carRented.returnDate,
        carRented.user_id,
        carRented.car_id,
        carRented.agency_id,
      ]
    );
  }
}

module.exports = RentalManager;
