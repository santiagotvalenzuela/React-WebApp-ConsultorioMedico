const router = require('express').Router();
let Historial = require('../models/historial.model');

router.route('/').get((req, res) => {
  Historial.find()
    .then(historial => res.json(historial))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const dniPaciente = req.body.dniPaciente;
  const obraSocial = req.body.obraSocial;
  const carnet = req.body.carnet;
  const fechaCreacion = req.body.fechaCreacion;
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const fechaNacimiento = req.body.fechaNacimiento;
  const dniMedico = req.body.dniMedico;
  const fecha = Date.parse(req.body.fecha);
  const motivo = req.body.motivo;
  const diagnostico = req.body.diagnostico;
 

  const newHistorial = new Historial({
    dniPaciente,
    obraSocial,
    carnet,
    fechaCreacion,
    nombre,
    apellido,
    fechaNacimiento,
    dniMedico,
    fecha,
    motivo,
    diagnostico,
    
  });

  newHistorial.save()
    .then(() => res.json('Historial added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

/*router.route('/:id').get((req, res) => {
   idDni=req.params.id;
  

 
    
      Historial.find({idDni:dniPaciente})
        .then(historial => res.json(historial))
        .catch(err => res.status(400).json('Error: ' + err));
    
});*/
router.route("/get/:id").get(function(req, res) {

  
  let idDni=req.params.id;
  Historial.find({dniPaciente:idDni}, function(err, result) {
    if (err) {
      res.jsonsend(err);
    } else {  
      res.send(result);
    }
  });
});
/*
router.route('/:id').get((req, res) => {

  let filtro= {req.params.id}

  // Options setup for the mongoose paginate
  
// Try Catch the awaited promise to handle the error 
try {
   
    var Users =  await Historial.paginate(filtro)
    return res.status(200).json({status: 200, data: Users, message: "Succesfully Users Recieved"});
    // Return the Userd list that was retured by the mongoose promise
    

} catch (e) {
  //Return an Error Response Message with Code and the Error Message.
  return res.status(400).json({status: 400, message: e.message});
}

});
*/
module.exports = router;     