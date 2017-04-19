var express = require("express"),
    app     = express(),
    port    = procss.env.PORT || 8000;

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    
    res.render(index.html);
    
});

app.listen(port, function(){
    console.log("started");
    
});
