const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const db = require("./app/models");

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Time Logs API." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
