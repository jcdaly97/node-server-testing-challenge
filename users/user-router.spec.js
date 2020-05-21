const supertest = require('supertest')
const router = require('./user-router')
const db = require('../data/db-connect')

afterEach(async () =>{
    await db('users').truncate()
})

describe('endpoints', ()=>{

    describe('GET', ()=>{
        it('should return an array', ()=>{
            return supertest(router)
                .get('/')
                .then(res=>{
                    expect(Array.isArray(res.body).toBe(true))
                })
        })
    })

    describe('GET', ()=>{
        it('should return an array with 0 elements', ()=>{
            return supertest(router)
                .get('/')
                .then(res=>{
                    expect(res.body.toHaveLength(0))
                })
        })
    })

    describe('POST', ()=>{
        let data = {
            "username": "test",
            "password": "test123",
            "department": "testing"
        }
        it('should respond with a status 200', ()=>{
            return supertest(router)
                .post('/register')
                .send(data)
                .set('Accept', 'application/json')
                .then(res=>{
                    expect(res.status).toBe(200)
                })
        })
    })

    describe('POST', ()=>{
        let data = {
            "username": "test",
            "password": "test123",
            "department": "testing"
        }
        it('should return the correct object ', ()=>{
            return supertest(router)
                .post('/')
                .send(data)
                .set('Accept', 'application/json')
                .then(res=>{
                    expect(res.body.toBe({
                        username: 'test',
                        department: 'testing'
                    }))
                })
        })
    })

    describe('POST', ()=>{
        it('should return ', ()=>{
            return supertest(router)
                .delete('/')
                .then(res=>{
                    expect(res.status.toBe(200))
                })
        })
    })

})