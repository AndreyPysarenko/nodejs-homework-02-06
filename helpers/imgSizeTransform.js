const Jimp = require("jimp");

const imgSizeTransform = (tempUpload, resultUpload) => {
  Jimp.read(tempUpload, (err, img) => {
    if (err) throw err;
    img.resize(250, 250).quality(60).write(resultUpload);
  });
};

module.exports = imgSizeTransform;