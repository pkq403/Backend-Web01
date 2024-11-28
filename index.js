const express = require("express");
const cors = require("cors");
const fs = require('node:fs');

const app = express();

const corsOptions = {
  origin: "*", // Permite todos los orígenes
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  allowedHeaders: [ "Origin", "Content-Type", "X-Auth-Token"], // Encabezados permitidos
  credentials: true, // Permite el envío de cookies o credenciales si es necesario
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Maneja solicitudes OPTIONS globalmente

app.use(express.json());


// Ruta de ejemplo
app.post("/", (req, res) => {
console.log(req.body);
fs.appendFile('data.txt', JSON.stringify(req.body)+"\n", err => {
    if (err) { console.error(err); }
  });
  res.status(200).json({ message: "OK" });
});

// Iniciar el servidor
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
