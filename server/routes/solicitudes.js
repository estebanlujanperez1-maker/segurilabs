const express = require('express');
const router = express.Router();
const Solicitud = require('../models/Solicitud');

router.post('/', async (req, res) => {
  try {
    const nuevaSolicitud = new Solicitud(req.body);
    await nuevaSolicitud.save();
    res.status(201).json({ mensaje: 'Solicitud enviada con éxito', data: nuevaSolicitud });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al guardar la solicitud', error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const solicitudes = await Solicitud.find().sort({ fecha: -1 });
    res.json(solicitudes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener solicitudes', error: error.message });
  }
});

module.exports = router;