import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

app.get('/' ,(req,res) => {
    res.send('API is Running...')
})

app.get('/api/calls' ,(req,res) => {
    res.send('API is Running')
})

app.get('/api/calls/:id' ,(req,res) => {
    res.send('API is Running')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is runnning in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow))

