import mongoose from "mongoose";




export const connectDB = async () => {
    try {
      const connection = await mongoose.connect('mongodb+srv://santiagososa:12345@cluster0.ohdzr.mongodb.net//pais?retryWrites=true&w=majority' , {
      });
      console.log('Conexión exitosa a MongoDB');
    } catch (error) {
      console.error('Error al conectar a MongoDB:', error);
      process.exit(1);
    }
  };

  //'mongodb+srv://Grupo-17:grupo17@cursadanodejs.ls9ii.mongodb.net/Node-js'