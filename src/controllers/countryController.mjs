const Country = require('../models/Country');

// Crear un nuevo país
exports.createCountry = async (data) => {
  const country = new Country(data);
  await country.save();
  return country;
};

// Listar todos los países
exports.getAllCountries = async () => {
  return await Country.find({});
};

// Buscar un país por su ID
exports.getCountryById = async (id) => {
  return await Country.findById(id);
};

// Actualizar un país por su ID
exports.updateCountryById = async (id, data) => {
  return await Country.findByIdAndUpdate(id, data, { new: true });
};

// Eliminar un país por su ID
exports.deleteCountryById = async (id) => {
  return await Country.findByIdAndDelete(id);
};