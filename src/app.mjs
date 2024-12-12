import express from 'express'; // Importa Express
import { connectDB } from './config/dbConfig.mjs';
import axios from 'axios';



const app = express(); // Crea una instancia de Express
const PORT = 3000; //puerto de salida
connectDB();


// Ruta para consumir y procesar la API de países
app.get('/countries', async (req, res) => {
  try {
      // Consumir la API de países
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const countries = response.data;

      // Filtrar los países que tengan español como uno de los idiomas
      const spanishSpeakingCountries = countries.filter(country => {
          return country.languages && Object.values(country.languages).includes('Spanish');
      });

      // Limpiar los datos eliminando propiedades no requeridas y agregando la nueva propiedad
      const processedCountries = spanishSpeakingCountries.map(country => {
          const {
              translations,
              tld,
              cca2,
              ccn3,
              cca3,
              cioc,
              idd,
              altSpellings,
              car,
              coatOfArms,
              postalCode,
              demonyms,
              ...rest
          } = country;

          return {
              ...rest,
              creador: "Santiago", // Reemplaza "TuNombre" con tu nombre real
          };
      });

      // Enviar la respuesta procesada
      res.json(processedCountries);
  } catch (error) {
      console.error('Error al procesar los países:', error.message);
      res.status(500).send('Error al procesar los países');
  }
});




app.use((req, res) => {
  res.status(404).send({ error: 'Ruta no encontrada' });
});


app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
  console.log(`Servidor Carriendo en http://localhost:${PORT}`);
  console.log(`Ctrl+C para bajar servidor`);
});


// instalar 