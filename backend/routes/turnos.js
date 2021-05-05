const router = require('express').Router();
let Turno = require('../models/turno.model');
let nodemailer = require('nodemailer');

router.route('/').get((req, res) => {
  Turno.find()
    .then(turnos => res.json(turnos))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/get/:id").get(function(req, res) {
  let idDni=req.params.id;
  Turno.find({dniPaciente:idDni}, function(err, result) {
    if (err) {
      res.jsonsend(err);
    } else {  
      res.send(result);
    }
  });
});

router.route('/add').post((req, res) => {
  const dniPaciente = req.body.dniPaciente;
  const dniMedico = req.body.dniMedico;
  const especialidad = req.body.especialidad;
  const fecha = Date.parse(req.body.fecha);

  const newTurno = new Turno({
    dniPaciente,
    dniMedico,
    especialidad,
    fecha
  });
  
  newTurno.save()
  
  .then(() => res.json('Turno added!'))
  .catch(err => res.status(400).json('Error: ' + err));
  sendEmailSacarTurno();
});

router.route('/:id').get((req, res) => {
  Turno.findById(req.params.id)
    .then(turno => res.json(turno))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Turno.findByIdAndDelete(req.params.id)
    .then(() => res.json('Turno deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
    EmailCancelarTurno () 
});

router.route('/update/:id').post((req, res) => {
  Turno.findById(req.params.id)
    .then(turno => {
      turno.fecha = Date.parse(req.body.fecha);
      turno.save()
        .then(() => res.json('Turno updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

async function sendEmailSacarTurno () {
    
  // Definimos el transporter
  var transporter = nodemailer.createTransport({
      //host: 'svp-02715.fibercorp.local',
      //secure: false,
      port:25,
      service: 'Gmail',
      auth: {
          user: 'centromedicoapi@gmail.com',//poner cuenta gmail
          pass: 'ApiPass06'  //contraseña cuenta  IMPORTANTE HABILITAR acceso apps poco seguras google
      }
   });
  // Definimos el email
  var mailOptions = {
      from: 'centromedicoapi@gmail.com',
      to: 'centromedicoapi@gmail.com',
      subject: "Turno sacado con éxito",
      
      
  };
  
  console.log("mail",mailOptions)
  // Enviamos el email
  try
  {
      let info = await transporter.sendMail(mailOptions);
      console.log("Message sent: %s", info.messageId);
  }
  catch(error)
  {
      console.log("Error envio mail: ",error);            
  }
};

async function EmailCancelarTurno () {
    
  // Definimos el transporter
  var transporter = nodemailer.createTransport({
      //host: 'svp-02715.fibercorp.local',
      //secure: false,
      port:25,
      service: 'Gmail',
      auth: {
          user: 'centromedicoapi@gmail.com',//poner cuenta gmail
          pass: 'ApiPass06'  //contraseña cuenta  IMPORTANTE HABILITAR acceso apps poco seguras google
      }
   });
  // Definimos el email
  var mailOptions = {
      from: 'centromedicoapi@gmail.com',
      to: 'centromedicoapi@gmail.com',
      subject: "Turno cancelado con éxito",
      
      
  };
  
  console.log("mail",mailOptions)
  // Enviamos el email
  try
  {
      let info = await transporter.sendMail(mailOptions);
      console.log("Message sent: %s", info.messageId);
  }
  catch(error)
  {
      console.log("Error envio mail: ",error);            
  }
};

module.exports = router;