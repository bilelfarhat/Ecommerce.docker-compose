const request = require('supertest');
const app = require('../server'); // Le fichier principal de votre application Express
const { expect } = await import('chai');


describe('POST /users/register', () => {
    it('devrait créer un nouvel utilisateur', async () => {
        const res = await request(app)
            .post('/users/register')
            .send({
                name: 'John Doe',
                email: 'john@example.com',
                password: 'password123',
                role: 'user'
            });
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('token');
        expect(res.body.user).to.have.property('id');
        expect(res.body.user.name).to.equal('John Doe');
        // Ajoutez d'autres assertions selon votre besoin
    });

    it('devrait renvoyer une erreur si des données manquent', async () => {
        const res = await request(app)
            .post('/users/register')
            .send({});
        expect(res.status).to.equal(400);
        expect(res.body).to.have.property('msg');
        // Ajoutez d'autres assertions selon votre besoin
    });

    // Ajoutez d'autres tests pour d'autres cas de figure
});
