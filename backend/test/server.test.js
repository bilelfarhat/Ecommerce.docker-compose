const request = require('supertest');
// Modifiez cette ligne
import { expect } from 'chai';

const app = require('../server');

describe('Tests pour le serveur Express', () => {
    it('devrait retourner une réponse 200 pour la route racine', async () => {
        const { expect } = chai;
        const res = await request(app).get('/');
        expect(res.status).to.equal(200);
    });

    // Ajoutez d'autres tests selon vos besoins
});
