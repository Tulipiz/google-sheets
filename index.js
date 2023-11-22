const express = require("express");
const { google } = require("googleapis");

const app = express();

app.listen(3001, () => {
  console.log("Servidor Rodando!!!");
});
