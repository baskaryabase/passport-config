var express = require("express"),
    app     = express();
var engines = require('consolidate');


app.engine('html', engines.mustache);

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    
    res.render("index.html");
    
});

app.listen(process.env.PORT, function(){
    console.log("started");
    
});
