const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/:id", (req, res) => {
  res.send(`Hello World ${req.params.id}`);
});

app.get("/crash", (req, res) => {
  res.send("App is crashing...");
  process.exit(1); // Simulate a crash
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 