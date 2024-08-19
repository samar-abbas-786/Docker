const express = require("express");
const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      Name: "Samar",
    },
    {
      id: 2,
      Name: "Abbas",
    },
    {
      id: 3,
      Name: "Naqvi",
    },
  ]);
});

app.listen(PORT, console.log(`App is running at ${PORT}`));
