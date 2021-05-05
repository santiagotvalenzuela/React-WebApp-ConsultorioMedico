const router = require('express').Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
let Receta = require('../models/receta.model');

router.route("/get/:id").get(function(req, res) {
  let idDni=req.params.id;
  Receta.find({dniPaciente:idDni}, function(err, result) {
    if (err) {
      res.jsonsend(err);
    } else {  
      res.send(result);
    }
  });
});

router.get("/", async (req, res) => {
    try {
      let receta = await Receta.find();
      res.json(receta);
    } catch (err) {
      console.log(err);
    }
  });

router.post("/add", upload.single("archivo"), async (req, res) => {
    try {
      // Upload file to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
  
      // Create new file
      let receta = new Receta({
        dniPaciente: req.body.dniPaciente,
        dniMedico: req.body.dniMedico,
        indicaciones: req.body.indicaciones,
        fecha: new Date(),
        archivo: result.secure_url,
        cloudinary_id: result.public_id,
      });
      // Save file
      await receta.save();
      res.json(receta);
    } catch (err) {
      console.log(err);
    }
  });

router.delete("/:id", async (req, res) => {
    try {
      // Find receta by id
      let receta = await Receta.findById(req.params.id);
      // Delete file from cloudinary
      await cloudinary.uploader.destroy(receta.cloudinary_id);
      // Delete receta from db
      await receta.remove();
      res.json(receta);
    } catch (err) {
      console.log(err);
    }
  });
  
router.put("/:id", upload.single("archivo"), async (req, res) => {
    try {
      let receta = await Receta.findById(req.params.id);
      // Delete file from cloudinary
      await cloudinary.uploader.destroy(receta.cloudinary_id);
      // Upload file to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      const data = {
        dniPaciente: req.body.dniPaciente || receta.dniPaciente,
        dniMedico: req.body.dniMedico || receta.dniMedico,
        indicaciones: req.body.indicaciones || receta.indicaciones,
        fecha: Date.parse(req.body.fecha) || receta.fecha,
        archivo: result.secure_url || receta.archivo,
        cloudinary_id: result.public_id || receta.cloudinary_id,
      };
      receta = await Receta.findByIdAndUpdate(req.params.id, data, { new: true });
      res.json(receta);
    } catch (err) {
      console.log(err);
    }
  });

module.exports = router;