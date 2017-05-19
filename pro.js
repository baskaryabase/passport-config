var express = require("express"),
    app     = express(),
    ejs     = require("ejs"); 

app.use(express.static(__dirname + '/Public'));

app.get("/", function(req, res){
    
    res.render("/index.ejs");
    
});
app.get("/post", (req,res)=>{
res.render()
});

app.listen(process.env.PORT || 8000, function(){
    console.log("started");
 });
