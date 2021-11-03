const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.set("port", process.env.PORT || 4567);

app.use("/api", require("./routes"));

app.get("/", (req, res) =>
  res.status(200).json({
    ok: true,
    msg: "Hello",
  })
);

module.exports = {
  app,
};
