import mongoose from "mongoose";
const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Name must be at least 3 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      unique: true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    isVerified:{
      type:Boolean,
      default:false
    },
    verificationCode:String,
    source: {
      type: String,
      default: "signup",
    },
  },
  { timestamps: true }
);

leadSchema.set("toJSON", {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Leads = mongoose.model("Lead", leadSchema);
export default Leads;
