var express = require("express");
var router = express.Router();

/*GET home page*/
router.get("/productos", function(req, res, next) {
  const productos = [
    {id: 1, nombre:"Bolso1", precio:20000, imagen:"https://raw.githubusercontent.com/lmaya10/LaMharaPagina/master/images/BolsoCafe.jpg"},
    {id: 2, nombre:"Bolso2", precio:25000, imagen:"https://raw.githubusercontent.com/lmaya10/LaMharaPagina/master/images/BolsoCafe.jpg"},
    {id: 3, nombre:"Bolso3", precio:30000, imagen:"https://raw.githubusercontent.com/lmaya10/LaMharaPagina/master/images/BolsoCafe.jpg"}
  ];
  res.json(productos);

});

module.exports = router;
