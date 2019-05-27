var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static(__dirname + '/public'));
app.listen(3000);

app.get("/index", function(req, res){
	res.render("index");
});
app.get("/vitri", function(req, res){
	res.render("vitri");
});
app.get("/tongquan", function(req, res){
	res.render("tongquan");
});
app.get("/lienhe", function(req, res){
	res.render("thongtinlienhe");
});