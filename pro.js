var express = require("express"),
    app     = express();
var engines = require('consolidate');


app.set('views', __dirname + '/Public');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get("/", function(req, res){
    
    res.render("index.html");
    
});

app.listen(process.env.PORT, function(){
    console.log("started");
    
});
