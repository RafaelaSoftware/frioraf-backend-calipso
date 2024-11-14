require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./api/index.js");
const bodyParser = require("body-parser");

app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  })
);
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(express.urlencoded({ limit: "500mb", extended: true }));
app.use(express.json());
app.use("/", routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
