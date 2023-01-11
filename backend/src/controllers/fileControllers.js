const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const CarPhotoDirectory = process.env.UPLOAD_DIR;

const renameCarPhoto = (req, res, next) => {
  const { originalname } = req.file;
  const { filename } = req.file;

  // For rename the files
  const uuid = uuidv4();

  fs.rename(
    `${CarPhotoDirectory}${filename}`,
    `${CarPhotoDirectory}${uuid}-${originalname}`,
    (err) => {
      if (err) throw err;
      req.CarPhoto = `${uuid}-${originalname}`;
      console.warn(req.avatar);
      next();
    }
  );
};

const sendCarPhoto = (req, res) => {
  const { fileName } = req.params;

  res.download(CarPhotoDirectory + fileName, fileName, (err) => {
    if (err) {
      res.status(404).send({
        message: `Car photo not found.`,
      });
    }
  });
};

module.exports = { renameCarPhoto, sendCarPhoto };
