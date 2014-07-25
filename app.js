/**
 * App
 */
var express = require('express');
var app = express();
var router = express.Router();

// invoked for any requests passed to this router
router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", req.get('origin'));
	res.header("Access-Control-Allow-Credentials", 'true');
	res.header("Access-Control-Allow-Headers", "*");
	res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
	res.header("Access-Control-Request-Headers", "*");
	res.header("Access-Control-Request-Method", "POST, GET, OPTIONS");
	next();
});

app.use('/api', router);
app.use(express.static(__dirname + '/public'));

app.get('/api/products', function(req, res){
	res.json([{
	    "id": 2,
	    "name": "Notebook Intel Dual Core, 2GB, HD 500GB",
	    "price": 1299.99
	}, {
	    "id": 13,
	    "name": "Tênis Feminino Running",
	    "price": 213.50
	}, {
	    "id": 45,
	    "name": "Boneca Mônica Patinadora",
	    "price": 149.90
	}, {
	    "id": 57,
	    "name": "Smartphone Samsung Desbloqueado, 2 Chips",
	    "price": 479.80
	}, {
	    "id": 111,
	    "name": "Cama Box + Colchão Queen de Mola Ensacada c/ Europillow",
	    "price": 1234.05
	}]); 	
});

app.get('/api/discounts', function(req, res){
	res.json([{
	    "code": "ABC",
	    "type": "percentage",
	    "amount": 20.0
	}, {
	    "code": "GHI",
	    "type": "fixed",
	    "amount": 15.0
	}, {
	    "code": "XYZ",
	    "type": "percentage",
	    "amount": 5.0
	}]);
});

app.listen(8080, function(){
	console.log("running on 8080!");
});