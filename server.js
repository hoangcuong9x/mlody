var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
app.set("view engine", "ejs");
app.set("views", "./views");
var nodemailer = require('nodemailer');
var hbs = requie('nodemailer-express-handlebars');
app.use(express.static(__dirname + '/public'));
app.listen(3000);
var transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	auth:{
		user: 'cuongnh1305.namtien@gmail.com',
		password: 'hoangcuong'
	}
})
transporter.use('compile', hbs({
	viewPath:'views',
	extName: '.ejs'
}));
app.get("/", function(req, res){
	res.render("index");
});
app.get("/index", function(req, res){
	res.render("index");
});
app.get("/vitri", function(req, res){
	res.render("vitri");
});
app.get("/tongquan", function(req, res){
	res.render("tongquan");
});
app.get("/thongtinlienhe", function(req, res){
	res.render("thongtinlienhe");
})
app.post('/mail', urlencodedParser,function(req, res){
	var username = req.body.ten;
	var email = req.body.email;
	var sdt = req.body.phone;
	transporter.sendMail({
		from: 'spy12a6@gmail.com',
		to: email,
		sunject:'VINHOMES',
		template: 'mail',
		context: {
			username,
			email,
			sdt
		}
	})
});
