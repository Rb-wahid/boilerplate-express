var express = require("express");
var app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
}
app.use(logger);
app.get("/json", (req, res) => {
  let mes = { message: "Hello json"};
  if (process.env.MESSAGE_STYLE === "uppercase") {
    mes = mes.message.toUpperCase();
  }

  res.json(mes);
});

module.exports = app;
