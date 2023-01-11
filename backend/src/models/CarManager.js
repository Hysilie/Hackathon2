const AbstractManager = require("./AbstractManager");

class CarManager extends AbstractManager {
  constructor() {
    super({ table: "car" });
  }

  updateCarPhoto(id, carPhoto) {
    return this.connection.query(
      `update ${this.table} set photo = ? where id = ?`,
      [carPhoto, id]
    );
  }
}
module.exports = CarManager;
