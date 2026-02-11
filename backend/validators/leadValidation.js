import { body } from "express-validator";

const  leadValidation = [
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
];
export default leadValidation;