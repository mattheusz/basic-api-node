const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

// Iniciando o App
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const db = mongoose.connection;

// Verifica se conexão foi consolidada
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    // we're connected!
    console.log("conetado com sucesso");
});

// Iniciando o DB
mongoose.connect("mongodb://192.168.99.101:27017/nodeapi", {
    useNewUrlParser: true,
});

requireDir("./src/models");

// Rotas
// Toda vez que receber uma requisição a partir da rota 'api', a gente vai mandar para src/routes.js
app.use("/api", require("./src/routes"));

app.listen(3001);
