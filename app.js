require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;

app.use(express.json);
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json();
});

app.listen(PORT, () => {
  console.log(`server is running at the port ${PORT}`);
});
