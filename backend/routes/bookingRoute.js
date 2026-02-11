import express from 'express';
const bookRouter =express.Router();
import { bookUser,verifyNumber } from '../controllers/bookingController.js';
import bookingValidation from '../validators/bookingValidation.js';
import validate from '../middlewares/validate.js';
bookRouter.post("/booking",bookingValidation,validate,bookUser);
bookRouter.post("/booking/verifynumber",verifyNumber);
// bookRouter.post();
export default bookRouter;