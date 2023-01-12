const models = require("../models");

/* function that retrieves data with "get" in the models */
const browse = (req, res) => {
  models.agency
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
};
