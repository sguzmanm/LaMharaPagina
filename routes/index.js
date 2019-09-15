var express = require("express");
var router = express.Router();

/*GET home page*/

function getProductos(callback){
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb+srv://admin:admin@lamharadb-yinqm.mongodb.net/test?retryWrites=true&w=majority";
  var client = new MongoClient(url,{useNewUrlParser:true});

  client.connect((err) => {

    if (err) throw err;

    console.log("Conectado con mongo");
    var db = client.db("ProductosDB");
    var colProds = db.collection("producto");

    colProds.find({})
      .toArray(function(err2,docs)
      {
        if (err2) throw err2;

        console.log("got" + docs.length + "comments");

        callback(docs);
        client.close();

      });

  });
}

router.get("/productos", function(req, res, next) {
  getProductos(function(docs)
  {
     res.send(docs);
  })

});

module.exports = router;