const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');

// Crear un nuevo país
router.post('/', async (req, res) => {
  try {
    const country = await countryController.createCountry(req.body);
    res.status(201).json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Listar todos los países
router.get('/', async (req, res) => {
  try {
    const countries = await countryController.getAllCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un país por su ID
router.get('/:id', async (req, res) => {
  try {
    const country = await countryController.getCountryById(req.params.id);
    if (!country) return res.status(404).json({ error: 'País no encontrado' });
    res.json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un país por su ID
router.put('/:id', async (req, res) => {
  try {
    const country = await countryController.updateCountryById(req.params.id, req.body);
    if (!country) return res.status(404).json({ error: 'País no encontrado' });
    res.json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminamos un pais segun _id
router.delete('/:id', async (req, res) => {
  try {
    const country = await countryController.deleteCountryById(req.params.id);
    if (!country) return res.status(404).json({ error: 'País no encontrado' });
    res.json({ message: 'País eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;