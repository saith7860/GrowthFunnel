import { validationResult } from "express-validator";
import customError from "../utils/CustomError.js";
const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const formattedErrors={}
    errors.array().forEach(err => {
      formattedErrors[err.path] = err.msg;
    });

    return next(
      new customError("Validation failed", 400, formattedErrors)
    );
   
  }

  next();
};
export default validate;