const express = require('express');
const router = express.Router();
const Solicitud = require('../models/Solicitud');

router.post('/', async (req, res) => {
  try {
    const fechaColombia = new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' });
   const nuevaSolicitud = new Solicitud(req.body);
    await nuevaSolicitud.save();
    try {
      await fetch(process.env.SHEETDB_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: {
            Nombre: nuevaSolicitud.nombre,
            Apellido: nuevaSolicitud.apellido,
            Empresa: nuevaSolicitud.empresa,
            Telefono: nuevaSolicitud.telefono,
            Correo: nuevaSolicitud.correo,
            TipoAsesoria: nuevaSolicitud.tipoAsesoria,
            Mensaje: nuevaSolicitud.mensaje,
            Fecha: fechaColombia
          }
        })
      });
    } catch (sheetError) {
      console.error('Error al enviar a Google Sheets:', sheetError);
    }
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