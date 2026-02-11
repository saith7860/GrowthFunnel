import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import leadsRouter from './routes/leadRoute.js';
import globalErrorHandler from './controllers/errorController.js';
import bookRouter from './routes/bookingRoute.js';
if (process.env.NODE_ENV==="test") {
    dotenv.config({path:".env.test"})
}else{
    dotenv.config();
}

const app=express();
app.use(express.json());
app.use(cors());
//routes
app.use("/api",leadsRouter);
app.use("/api",bookRouter);
//Global error handling middleware
app.use(globalErrorHandler)
export default app;