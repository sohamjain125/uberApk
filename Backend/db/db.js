const mogoose = require("mongoose");

function connectToDb() {
  mogoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectToDb;
