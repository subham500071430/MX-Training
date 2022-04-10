const { route } = require("express/lib/application");

module.exports = (app) => {
    var users = require("../controllers/user.controller");
    var router = require('express').Router();

    router.post("/", users.create);
    

    app.use("/users", router);
}