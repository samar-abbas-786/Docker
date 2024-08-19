const express = require("express");
const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      Name: "Samar Abbas Naqvi",
    },
    {
      id: 2,
      Name: "Abbas",
    },
    {
      id: 3,
      Name: "Naqviggg",
    },
    {
      id: 4,
      Name: "Syed",
    },
    {
      id: 5,
      Name: "Hussain",
    },
    {
      id: 6,
      Name: "XYZ",
    },
    {
      id: 7,
      Name: "XYZQ",
    },
  ]);
});

app.listen(PORT, console.log(`App is running at ${PORT}`));
