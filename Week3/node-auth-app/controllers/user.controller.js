exports.signin = (req, res) =>{
    let userData;
    User.findOne({email: req.body.email}).then((user) =>{
        if(!user){
            return res.status(401).send({"message": "User is not exist in DB"});
        }
        userData = user;
        return bcrypt.compare(req.body.password, user.password);
    }).then((response) => {
        if(!response){
            return res.status(401).send({ "message": "Authentication Failed"});
        }
        let jwtToken = jwt.sign(
            { email: userData.email, userID: userData._id },
             "secret-key-for-token", { expiresIn: '24h'}
            )
            res.status(200).send({ token: jwtToken, expiresIn: 240000, id: userData._id})
    }).catch((err) => {
        res.status(400).send({"message": "Authentication failed", err: err});
    })
    }
    
    const res = require("express/lib/response");
    const { restart } = require("nodemon");
    var db = require("../models/index");
    var bcrypt = require('bcrypt');
    var jwt = require('jsonwebtoken');
    var User = db.users;
    exports.create = (req, res) =>{
        if(!req.body.name) {
            res.status(400).send({ message: "Name can not be empty"});
        } else if(!req.body.email) {
            res.status(400).send({ message: "Email can not be empty"});
        } else if(!req.body.password) {
            res.status(400).send({ message: "Password can not be empty"});
        } else if(!req.body.mobile) {
            res.status(400).send({ message: "Mobile can not be empty"});
        } else {
        bcrypt.hash(req.body.password, 10).then((hash)=>{
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            mobile: req.body.mobile,
            status: true
        });
        user.save(user).then((data) =>{
            res.send({ data: data, message: "Saved successfully"});
        }).catch((err) =>{
            res.status(400).send({ message: "Error", err: err});
        })
        }).catch((err) =>{
        res.status(500).send(err);
    });
    }
    }
    exports.signin = (req, res) =>{
    let userData;
    User.findOne({email: req.body.email}).then((user) =>{
        if(!user){
            return res.status(401).send({"message": "User is not exist in DB"});
        }
        userData = user;
        return bcrypt.compare(req.body.password, user.password);
    }).then((response) => {
        if(!response){
            return res.status(401).send({ "message": "Authentication Failed"});
        }
        let jwtToken = jwt.sign(
            { email: userData.email, userID: userData._id },
             "secret-key-for-token", { expiresIn: '24h'}
            )
            res.status(200).send({ token: jwtToken, expiresIn: 240000, id: userData._id})
    }).catch((err) => {
        res.status(400).send({"message": "Authentication failed", err: err});
    })
    }