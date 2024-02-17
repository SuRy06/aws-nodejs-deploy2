const express = require("express");
const app = express();
require("dotenv").config();

app.get("/api/get", (req, res) => {
  res.send({ message: "hello back to nodejs" });
});

app.get("/api/get_user_details", (req, res) => {
  res.send({
    user: {
      name: "satyam",
      age: 22,
      contact: 12254,
    },
    env: "Sudeep",
  });
});

app.listen(8000, () => {
  console.log("listening to 8000");
});
