const AbstractManager = require("./AbstractManager");

class AgencyManager extends AbstractManager {
  constructor() {
    super({ table: "agency" });
  }

  insert(agency) {
    return this.connection.query(
      `insert into ${this.table} (name, location, latitude, longitude) values (?, ?, ?, ?)`,
      [agency.name, agency.location, agency.latitude, agency.longitude]
    );
  }
}

module.exports = AgencyManager;
