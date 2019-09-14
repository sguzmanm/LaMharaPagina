var express = require("express");
var router = express.Router();

/*GET home page*/
router.get("/productos", function(req, res, next) {
  const productos = [
    {id: 1, nombre:"Bolso1", precio:20000},
    {id: 2, nombre:"Bolso2", precio:25000},
    {id: 3, nombre:"Bolso3", precio:30000}
  ];
  res.json(productos);

});

module.exports = router;
