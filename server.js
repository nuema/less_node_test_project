/*Servidor básico  para probar  los archivos renderizados*/

var express = require('express');
var app = express();

app.use("/assets", express.static('assets'));

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

var minifier = require ("uglify-js");
var doUgly = minifier.minify("     var b = function () {    };", {fromString: true} );
//ast = doUgly.ast_squeeze(ast); // get an AST with compression optimizations

 var server = app.listen(8081, function () {

  console.log("Example app listening at http://localhost:8081");
  console.log(doUgly);

})