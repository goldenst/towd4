import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler} from './middleware/error.js'
import connectDB from './config/db.js'

import newCallRoute from './routes/newCallRoute.js'

dotenv.config()

connectDB()

const app = express()

app.get('/' ,(req,res) => {
    res.send('API is Running...')
})

app.use('/api/calls', newCallRoute)

app.use(notFound)
app.use(errorHandler)
    
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is runnning in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow))

