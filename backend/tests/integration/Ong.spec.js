const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('Ong', () => {
    beforeEach(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () => {
        await connection.destroy()
    })

    it('should be ableto create a new ong', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAE",
                email: "contato@gmail.com",
                whatsapp: "77000000000",
                city: "Aratiba",
                uf: "RS"
            })
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})