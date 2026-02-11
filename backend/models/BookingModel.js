import mongoose from "mongoose";
import validator from "validator";

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Name must be at least 3 characters"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      validate: [validator.isEmail, "Please enter a valid email"],
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },

    businessType: {
      type: String,
      required: [true, "Business type is required"],
    },

    packageInterested: {
      type: String,
      required: [true, "Package selection is required"],
    },

    businessGoal: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "booked", "completed", "cancelled"],
      default: "pending",
    },
    isVerified:{
      type:Boolean,
      default:false
    },
    verificationCode:String,
    source: {
      type: String,
      default: "booking",
    },
  },
  { timestamps: true }
);

bookingSchema.set("toJSON", {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Bookings = mongoose.model("Booking", bookingSchema);
export default Bookings;
