const models = require("../models");

const browseAllCarsByAgency = (req, res) => {
  models.car
    .findAllByAgency(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browseAllCars = (req, res) => {
  models.car
    .findAllCars()
    .then(([rows]) => {
      if (rows[0] === null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browseCarRentedByAgency = (req, res) => {
  models.car
    .findCarsRentedByAgency(req.params.id)
    .then(([rows]) => {
      if (rows[0] === null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const findNonAvailableCarByAgency = (req, res) => {
  models.car
    .findNonAvailableCarByAgency(req.params.id)
    .then(([rows]) => {
      if (rows[0] === null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addNewCar = (req, res) => {
  const car = req.body;
  console.warn(car);
  models.car
    .insert(car)
    .then(([result]) => {
      res.location(`/newCar/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browseAllCarsByAgency,
  browseAllCars,
  browseCarRentedByAgency,
  findNonAvailableCarByAgency,
  addNewCar,
};
