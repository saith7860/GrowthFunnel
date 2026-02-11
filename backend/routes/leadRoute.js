import express from 'express';
import { postUser,emailVerification } from '../controllers/leadController.js';
import leadValidation from '../validators/leadValidation.js';
import validate from '../middlewares/validate.js'
import verifyEmail from '../config/sendEmail.js';
const leadsRouter =express.Router();
leadsRouter.post("/signup",leadValidation,validate,postUser);
leadsRouter.post("/signup/verifyemail",emailVerification);
export default leadsRouter;