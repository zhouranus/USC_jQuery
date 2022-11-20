var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public")); // middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var USERS = [
    {
        name: 'Bob',
        age: 21
    },
    {
        name: 'Jack',
        age: 25
    },
    {
        name: 'Alice',
        age: 22
    },
    {
        name: 'James',
        age: 35
    },
    {
        name: 'Ran',
        age: 38
    },
    {
        name: 'Peter',
        age: 19
    }
];

var router = express.Router();
router.get("/cal/add/:x/:y", function(req, res) {
	var x = +req.params.x; // * 1
	var y = +req.params.y;
	setTimeout(function(){
		res.send("" + (x + y));
	}, 1000);
});
router.get("/cal/multiply/:x/:y", function(req, res) {
	var x = +req.params.x; // * 1
	var y = +req.params.y;
	setTimeout(function(){
		res.send("" + (x * y));
	}, 1500);
});

router.post("/cal/add", function(req, res){
	var x = +req.body.x; // * 1
	var y = +req.body.y;
	setTimeout(function(){
		res.send("" + (x + y));
	}, 1000);
});

router.post("/cal/multiply", function(req, res){
    var x = +req.body.x; // * 1
    var y = +req.body.y;
    setTimeout(function(){
        res.send("" + (x * y));
    }, 1500);
});

router.get("/users", function(req, res){
    res.send(USERS);
});

app.use("/", router); 

//error handling.
app.use(function(req, res, next) {
	res.end("404 - Reuqest can't be hanlded.");
});

app.listen(3000);
console.log("server started!");