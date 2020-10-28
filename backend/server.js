import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/error.js';
import connectDB from './config/db.js';

import callRoute from './routes/callRoute.js';
import userRoutes from './routes/userRoutes.js';
import servicesRoutes from './routes/servicesRoute.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is Running... ....');
});

app.use('/api/v1/calls', callRoute);
app.use('/api/v1/services', servicesRoutes);
app.use('/api/v1/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is runnning in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
  )
);
