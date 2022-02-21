const express = require('express')
const createError = require('http-errors')
// const auth = require('../middlewares/auth.middleware')

const users = require('../usecases/user.usecase')
const router = express.Router()     

// router.use(auth)

router.get('/', async (request, response) => {
    try {
        const allUsers = await users.getAll()

        response.json({
            ok: true,
            message: 'All users',
            users: allUsers
        })
    }  catch (error) {
        response.status(404)
        response.json({
            ok: false,
            message: 'error'

        }) 
    }
})

router.post('/', async (request, response) => {
    try {
        const userCreated = await users.create(request.body)
        response.json({
            ok: true,
            message: 'User created',
            userCreated
        })
        
    } catch (error) {
        response.status(404)
        response.json({
            ok: false,
            message: 'error'

        }) 
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const userDeleted = await users.deleteById(request.params.id)
        response.json({
            ok: true,
            message: 'User deleted',
            userDeleted
        })
        
    } catch (error) {
        response.status(404)
        response.json({
            ok: false,
            message: 'error'

        }) 
    }
})

module.exports = router