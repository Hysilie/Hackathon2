const AbstractManager = require("./AbstractManager");

class AgencyManager extends AbstractManager {
  constructor() {
    super({ table: "agency" });
  }
}

module.exports = AgencyManager;
