const AbstractManager = require("./AbstractManager");

class RentalManager extends AbstractManager {
  constructor() {
    super({ table: "rental" });
  }

  rentalByUser(id) {
    return this.connection.query(
      `select * from ${this.table} left join car on rental.car_id = car.id where user_id = ?`,
      [id]
    );
  }
}
module.exports = RentalManager;
