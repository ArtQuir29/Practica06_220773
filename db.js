//Conectar a la base de datos de MongoDB
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Ailton-Art:artiagaailton@ailton.mo4zi.mongodb.net/sessions_bd?retryWrites=true&w=majority&appName=Ailton');
        console.log('Conexión a MongoDB establecida');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
};

export default connectDB;