const models = require("../models");

const browse = (req, res) => {
  models.rental
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const rentalsByUser = (req, res) => {
  models.rental
    .rentalByUser(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send([rows]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const rentalCarByUser = (req, res) => {
  const car = req.body;
  models.rental
    .addRentalCarByUser(car)
    .then(([result]) => {
      res.location(`/rental/${result.insertId}`);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { browse, rentalsByUser, rentalCarByUser };
