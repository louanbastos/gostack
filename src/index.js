const express = require("express");

const app = express();
var date = new Date().toLocaleDateString();

/* you can use req (request) or res (response) */
app.get("/", (req, res) => {
  res.status(200);
  return res.json([
    {
      code: "200",
      stats: "Success",
      date: `${date}`,
    },
  ]);
});

app.get("/projects", (req, res) => {
  return res.json(["Project01", "Project02"]);
});

app.post("/projects", (request, response) => {
  return res.json(["Project01", "Project02", "Project03"]);
});

app.listen(3333, () => {
  console.clear();
  console.log("🚀 Backend Started");
});
/*  */
// app.listen(80);
