const express = require ('express')
const cors = require('cors')
const loggerMiddleware = require ('./middlewares/logger.middleware')

const usersRouter = require('./routes/user.router')
const authRouter = require ('./routes/auth.router')


const app = express()

app.use(cors())
app.use(express.json())
app.use(loggerMiddleware)


app.use('/users', usersRouter)
app.use('/auth', authRouter)



app.get('/', (request, response) =>{
    console.log('user: ', request.user);
    response.json({
    ok:true,
    message: 'mediumAPI'
    })
})


module.exports = app