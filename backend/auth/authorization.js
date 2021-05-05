var jwt = require('jsonwebtoken');
var config = require('../config').config();

var authorization = function (req, res, next) {

    var token = localStorage.getItem("token");
    console.log("token",token);
    var msg = {auth: false, message: 'No token provided.'};
    if (!token)
        res.status(500).send(msg);

    let sec = process.env.SECRET;
    //console.log("secret",sec)
    jwt.verify(token, sec, function (err, decoded) {
        var msg = {auth: false, message: 'Failed to authenticate token.'};
        if (err)
        res.status(500).send(msg);
        req.userId = decoded.id;
        req.rol = decoded.role;
        next();
    });
}

module.exports = authorization;

