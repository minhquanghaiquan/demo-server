const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
const path = require("path");

app.use(cors());
app.options("*", cors());

app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.send('"quang":"minh"');
});

// app.get("/ota", (req, res) => {
//   res.sendFile(path.join(otaFolderPath, "ota.bin"));
// });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
