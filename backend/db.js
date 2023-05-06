const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/pharmacare?directConnection=true";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => console.log("connection success"))
    .catch((err) => console.log(err));
};
mongoose.set("strictQuery", true);
module.exports = connectToMongo;
