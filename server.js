require("dotenv").config();

const express = require("express");
const path = require("path");
const { connectToDb } = require("./lib/database");
const app = express();
const port = process.env.PORT || 4300;

app.use(express.json());

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

//eslint-disable-next-line
app.use((error, req, res, next) => {
  res.json({
    message: "An unexpected server error occured. Please try again later.",
  });
});

async function run() {
  console.log("Connecting to Database...");
  await connectToDb(process.env.DB_URI, process.env.DB_NAME);
  console.log("Connected to Database");

  app.listen(port, () => {
    console.log(`Listening at https://localhost:${port}`);
  });
}

run();
