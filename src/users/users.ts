import express from 'express'

const userRouter = express.Router()

userRouter.use((req, res, next) => {
    console.log('users')
    next()
})

userRouter.post('/login', (req, res) => {
    res.send('LOGIN')
})

userRouter.post('/register', (req, res) => {
    res.send('REGISTER')
})

export {userRouter}