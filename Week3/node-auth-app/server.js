var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

var corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var db = require("./models/index");

db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("Database connected successfully.");
}).catch((err) => {
    console.log("Cannot connected to DB:", err);
});

app.get("/", function(req, res){
    res.send("Welcome to node api app ");
});

require("./routes/user.routes")(app);

app.listen(4000, function(){
    console.log("server is running on port: 4000")
})