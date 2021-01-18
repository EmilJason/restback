const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("homepage");
});

app.get("/about", (req, res) => {
  res.send("aboutPage");
});

app.listen(3000, () => console.log("listening!"));
