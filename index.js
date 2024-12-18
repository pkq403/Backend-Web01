const express = require("express");
const cors = require("cors");
const fs = require('node:fs');
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());


// Ruta de ejemplo
app.get("/", (req, res) => {
  res.send("<h1>home</h1>");
})
app.post("/", (req, res) => {
  console.log("data: ", JSON.stringify(req.body));
// fs.appendFile('data.txt', JSON.stringify(req.body)+"\n", err => {
//     if (err) { console.error(err); }
//   });
  res.status(200).json({ message: "OK" });
});

app.get("/test", (req, res) => {
  res.send("<h1>test</h1>");
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
