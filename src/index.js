const express = require("express");

const app = express();

app.get("/projects", (req, res) => {
  return res.json(["Project01", "Project02"]);
});

app.post("/projects", (request, response) => {
  return res.json(["Project01", "Project02", "Project03"]);
});

app.put("/projects/:id", (request, response) => {
  return res.json(["Project04", "Project02", "Project03"]);
});

app.delete("/projects/:id", (request, response) => {
  return res.json(["Project02", "Project03"]);
});

var listener = app.listen(3333, () => {
  console.clear();
  console.log(`🚀 Backend Server Started on Port: ${listener.address().port}`);
});
