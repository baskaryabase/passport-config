var express = require("express"),
    app     = express(),
    ejs     = require("ejs"); 

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    
    res.render(index.ejs);
    
});

app.listen(process.env.PORT || 8000, function(){
    console.log("started");
 });
