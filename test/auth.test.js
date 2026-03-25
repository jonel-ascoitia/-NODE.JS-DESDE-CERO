// test/auth.test.js
const { test, describe } = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../app');

describe('Autenticación', () => {

    describe('POST /auth/login', () => {

        test('login con credenciales incorrectas devuelve 401', async (t) => {
            const response = await request(app)
                .post('/auth/login')
                .send({
                    email: 'noexiste@restaurante.com',
                    password: 'claveIncorrecta'
                });

            assert.strictEqual(response.status, 401);
        });

        test('login sin body devuelve error', async (t) => {
            const response = await request(app)
                .post('/auth/login')
                .send({});
            // Hint: el servicio lanza un error → catch → ¿qué status?
            // En auth.controller.js, catch devuelve 401
            assert.ok(response.status >= 400);
        });

    });

    describe('Rutas protegidas', () => {

        test('POST /menu sin token devuelve 401', async (t) => {
            const response = await request(app)
                .post('/menu')
                .send({ nombre: 'Test', precio: 10 });
            // Este es interceptado por verifyToken middleware
            assert.strictEqual(response.status, 401);
        });

        test('GET /menu sin token devuelve 200 (ruta libre)', async (t) => {
            const response = await request(app).get('/menu');
            // GET /menu no requiere token — debe funcionar igual
            assert.strictEqual(response.status, 200);
        });

    });

});

// Cerrar conexión para que el test termine
const mongoose = require('mongoose');
const { after } = require('node:test');
after(async () => {
    await mongoose.connection.close();
});

