// test/menu.test.js
const { test, describe } = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../app');

describe('Rutas del menú', () => {

    test('GET /menu devuelve 200 and a JSON with an array', async (t) => {
        const response = await request(app).get('/menu');
        assert.strictEqual(response.status, 200);
        // Sometimes Express might wrap the array in an object, but usually dia 2/3 it was an array directly
        // I will check if it's an array based on the prompt's solution
        assert.ok(Array.isArray(response.body));
    });

    test('GET /menu/buscar sin ?nombre= devuelve 400', async (t) => {
        const response = await request(app).get('/menu/buscar');
        assert.strictEqual(response.status, 400);
    });

    test('GET /menu/:id con id inválido devuelve 500', async (t) => {
        const response = await request(app).get('/menu/id-que-no-existe');
        assert.strictEqual(response.status, 500);
    });

});

// Cerrar conexión para que el test termine
const mongoose = require('mongoose');
const { after } = require('node:test');
after(async () => {
    await mongoose.connection.close();
});

