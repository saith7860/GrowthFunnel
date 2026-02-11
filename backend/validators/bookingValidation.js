import { body } from "express-validator";

const bookingValidation = [
  body("name")
.notEmpty().withMessage("Name should not be empty")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters"),
   
  body("email")
  .notEmpty().withMessage("Email cannot be empty")
  .isEmail().withMessage("Invalid email")
  .normalizeEmail(),


  body("phone")
   .trim()  
  .isNumeric().withMessage("Phone should only contain numbers")
  .notEmpty().withMessage("Phone should not be empty")
  .isMobilePhone().withMessage("Invalid phone number")
  .isLength({ min:11 }).withMessage("Phone length must be 11"),
  body("businessType").notEmpty().withMessage("Bussiness type should not be empty"),
  body("packageInterested").notEmpty().withMessage("Interested package should not be empty"),,
];
export default bookingValidation;