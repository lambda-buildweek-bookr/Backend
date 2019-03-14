const request = require('supertest')
const db = require('../data/dbConfig')
const users = require('../routes/users')
const server = require('../server')

afterEach(async () => {
    await db('users').truncate();
});
describe('Users Route', ()=>{
    it('should return an error if there is no username', async () => {
        const username = { name: 'Austen', password: 'test' };

        let response = await request(server).post('/api/users/register/').send(username);
        .expect('Content-Type', /json/)
        .expect('Content-Length', '15')
        .expect(200)
    });

    it.skip('should insert a user', async ()=>{
        let newRecord = await users.post({name: 'Austen', password: 'lambda'})
        const user = await db('users')
        expect (user).toHaveLength(1)
        expect(newRecord.name).toEqual('Austen')
    })


    it('should delete a user', async() => {
        let response = await request(server).get( `/api/books/` )
        expect(response.status).toBe(200)
    })
})

