// controllers/menu.controller.js
const platoService = require('../services/plato.service');

exports.obtenerMenu = async (req, res) => {
    try {
        const platos = await platoService.obtenerTodos();
        res.status(200).json(platos);


    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.buscarPorNombre = async (req, res) => {
    try {
        const { nombre } = req.query;
        if (!nombre) {
            return res.status(400).json({ error: 'El parámetro nombre es obligatorio' });
        }
        const platos = await platoService.buscarPorNombre(nombre);
        res.status(200).json(platos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.buscarPlato = async (req, res) => {
    try {
        const { id } = req.params;
        const plato = await platoService.buscarPorId(id);
        if (!plato) {
            return res.status(404).json({ error: 'Plato no encontrado' });
        }
        res.status(200).json(plato);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.agregarPlato = async (req, res) => {
    try {
        const { nombre, precio } = req.body;
        if (!nombre || !precio) {
            return res.status(400).json({ error: 'nombre y precio son obligatorios' });
        }
        const nuevo = await platoService.crear(req.body);
        res.status(201).json({ mensaje: 'Plato creado', plato: nuevo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.actualizarPlato = async (req, res) => {
    try {
        const { id } = req.params;
        const plato = await platoService.actualizar(id, req.body);
        if (!plato) {
            return res.status(404).json({ error: 'Plato no encontrado' });
        }
        res.status(200).json({ mensaje: 'Plato actualizado', plato });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.eliminarPlato = async (req, res) => {
    try {
        const { id } = req.params;
        const plato = await platoService.eliminar(id);
        if (!plato) {
            return res.status(404).json({ error: 'Plato no encontrado' });
        }
        res.status(200).json({ mensaje: 'Plato eliminado', plato });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
