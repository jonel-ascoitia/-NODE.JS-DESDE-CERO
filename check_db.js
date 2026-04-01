const mongoose = require('mongoose');
const Plato = require('./models/plato.model');
const { mongoUri } = require('./config');

async function checkPlatos() {
    await mongoose.connect(mongoUri);
    const platos = await Plato.find({});
    console.log('PLATOS ACTUALES EN DB:');
    console.log(JSON.stringify(platos, null, 2));
    await mongoose.connection.close();
}

checkPlatos();
