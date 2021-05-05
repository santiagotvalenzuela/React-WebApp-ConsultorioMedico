const router = require('express').Router();
let User = require('../models/user.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const {authAdmin} = require('../auth/authAdmin');
const Authorization = require('../auth/authorization');
var request = require('request');



router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const dni = req.body.dni;
  const pass = req.body.password;
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const rol = Number.parseInt(req.body.rol);
  const mail = req.body.mail;
  const telefono = Number.parseInt(req.body.telefono);
  const obraSocial=req.body.obraSocial;
  const carnet=req.body.carnet;
  const fecNac = Date.parse(req.body.fecNac);
  var password = bcrypt.hashSync(pass, 8);

  const newUser = new User({
    dni,
    password,
    nombre,
    apellido,
    rol,
    mail,
    telefono,
    obraSocial,
    carnet,
    fecNac
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.nombre = req.body.nombre;
      user.mail = req.body.mail;
      user.rol = req.body.rol;
      user.telefono = req.body.telefono;
      var pass = req.body.password;
      var password = bcrypt.hashSync(pass, 8);
      user.password = password;
      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/Login').post((req, res) => {
  User.findOne({dni:req.body.dni})
    .then(user => {
      var pass=req.body.password
      var passwordIsValid = bcrypt.compareSync(pass,user.password);
      if (!passwordIsValid) throw Error("Invalid username/password")
      var token = jwt.sign({
        id: user._id,
        role:user.rol
    }, process.env.SECRET, {
        expiresIn: 86400 // expires in 24 hours
    });
      return{token,user}
    })
    .then(user=>res.json(user))
    .catch(err => res.status(400).json('Error: ' + err))
    

});

module.exports = router;