// routes/menu.routes.js
const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menu.controller');
const verifyToken = require('../middlewares/verifyToken');
 
const verificarDatosPlato = (req, res, next) => {
    const { nombre, precio } = req.body;
    if (!nombre || !precio) {
        return res.status(400).json({
            error: 'Middleware: nombre y precio son obligatorios'
        });
    }
    if (precio <= 0) {
        return res.status(400).json({
            error: 'Middleware: el precio debe ser mayor a cero'
        });
    }
    next(); // datos válidos → continuar al controlador
};

// GET /menu
router.get('/', menuController.obtenerMenu);
 
// GET /menu/buscar?nombre=...
router.get('/buscar', menuController.buscarPorNombre);


// GET /menu/:id
router.get('/:id', menuController.buscarPlato);

 
// POST /menu
router.post('/', verifyToken, verificarDatosPlato, menuController.agregarPlato);
 
// DELETE /menu/:id
router.delete('/:id', verifyToken, menuController.eliminarPlato);
 
// PUT /menu/:id
router.put('/:id', verifyToken, menuController.actualizarPlato);
 
module.exports = router;
