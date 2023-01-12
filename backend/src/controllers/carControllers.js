const models = require("../models");

const browseAllCarsByAgency = (req, res) => {
  models.car
    .findAllByAgency(req.params.id)
    .then(([rows]) => {
      console.warn(rows);
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

/* function that retrieves data with "get" by id */
const read = (req, res) => {
  models.car
    .find(req.params.id)
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

const browseAllCarsByLocationAndDate = (req, res) => {
  const { city, startDate, endDate } = req.query;

  if (city && startDate && endDate) {
    models.car
      .findAllByLocationAndDate(city, startDate, endDate)
      .then(([rows]) => {
        console.warn(rows);
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  } else res.sendStatus(400);
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

const editCar = (req, res) => {
  const car = req.body;
  car.id = parseInt(req.params.id, 10);
  models.car
    .edit(car)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateCarPhoto = (req, res) => {
  const id = req.payload.sub;
  const { carPhoto } = req;

  models.user
    .updateCarPhoto(id, carPhoto)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.status(202).send({ carPhoto });
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const deleteCar = (req, res) => {
  models.car
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
module.exports = {
  browseAllCarsByAgency,
  read,
  browseAllCarsByLocationAndDate,
  browseAllCars,
  browseCarRentedByAgency,
  findNonAvailableCarByAgency,
  addNewCar,
  updateCarPhoto,
  deleteCar,
  editCar,
};
