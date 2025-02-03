import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from '../routes/authRoutes.js';
import contactRoutes from '../routes/contactRoutes.js'; 

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/auth', authRoutes);       
app.use('/api/v1/contact', contactRoutes); 

export { app };
