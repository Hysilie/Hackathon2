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

/* function that retrieves data with "post" */
const add = (req, res) => {
  const agency = req.body;

  // TODO validations (length, format...)

  models.agency
    .insert(agency)
    .then(([result]) => {
      res.location(`/agency/${result.insertId}`);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  add,
};
