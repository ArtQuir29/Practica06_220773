//Conectar a la base de datos de MongoDB
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('');
        console.log('Conexión a MongoDB establecida');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
};

export default connectDB;