
var express = require('express');
var router = require('./routes/rahvar');
var app = express();
var app = express()
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/rahvar",router);




var server = app.listen(8081, function () {
   
   console.log("Example app listening at http://%s:%s")
})



/// CBCount = $('#t1 input[type=checkbox]').length; //to find if any item is available
/// <div id="PrintArea" >access deny [11] // for detecting error
/// Status code: 302 //// vpn error //
///http://estelam.rahvar120.ir/index.jsp?siteid=1&fkeyid=&siteid=1&pageid=2542 /// for getting cars data pageid is 2542
