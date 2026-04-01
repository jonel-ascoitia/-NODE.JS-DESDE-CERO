const Plato = require('../models/plato.model');
 
class PlatoService {
    async crear(data) {
        const plato = new Plato(data);
        return await plato.save();
    }
    async obtenerTodos() {
        return await Plato.find({});
    }
    async buscarPorId(id) {
        return await Plato.findById(id);
    }
    async buscarPorNombre(nombre) {
        // Usamos regex para búsqueda parcial e insensible a mayúsculas
        return await Plato.find({ nombre: new RegExp(nombre, 'i') });
    }
    async buscarPorCategoria(categoria) {
        return await Plato.find({ categoria: new RegExp(categoria, 'i') });
    }

    async actualizar(id, data) {

        return await Plato.findByIdAndUpdate(id, data, { new: true });
    }
    async eliminar(id) {
        return await Plato.findByIdAndDelete(id);
    }
}
 
module.exports = new PlatoService();
