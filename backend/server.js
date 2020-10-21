const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

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

app.listen(PORT, console.log(`server is runnning in ${process.env.NODE_ENV} mode on port ${PORT}`))

