const mongoose = require('mongoose');
const { mongoUri } = require('../config');

const conectarDB = async () => {
    try {
        await mongoose.connect(mongoUri);
        console.log('MongoDB conectado — restaurante');
    } catch (error) {
        console.error('Error de conexión MongoDB:', error.message);
        // En modo test no matamos el proceso para que los tests puedan continuar
        if (process.env.NODE_ENV !== 'test') {
            process.exit(1);
        }
    }
};

module.exports = conectarDB;

