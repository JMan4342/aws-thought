const { v4: uuidv4 } = require("uuid");

const params = (fileName) => {
  const myFile = fileName.originalname.split(".");
  const fileType = myFile[myFile.length - 1];

  const imageParams = {
    Bucket: "user-images-de053fe9-95f2-4183-bb6a-6c84249b7a56",
    Key: `${uuidv4()}.${fileType}`,
    Body: fileName.buffer,
  };

  return imageParams;
};

module.exports = params;