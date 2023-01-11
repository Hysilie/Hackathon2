const models = require("../models");

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

module.exports = {
  updateCarPhoto,
};
