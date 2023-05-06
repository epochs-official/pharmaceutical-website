const connectToMongo = require("./db");
const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

app.use("/api/auth", require("./routes/Auth"));

const start = async () => {
  try {
    await connectToMongo();
    app.listen(port, () => {
      console.log(`Connected to ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
