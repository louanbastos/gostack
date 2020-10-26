const express = require("express");

const app = express();

/* you can use req (request) or res (response) */
app.get("/", (req, res) => {
  return res.json({ message: "Hello GoStack" });
});

app.get("/projects", (request, response) => {
  return response.send("Hello World");
});

app.listen(3333, () => {
  console.clear();
  console.log("🚀 Backend Started");
});
/*  */
// app.listen(80);
