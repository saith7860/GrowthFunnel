import customError from "../utils/CustomError.js";
import verifyEmail from "../config/sendEmail.js";
import sendWelcomeEmail from "../config/welcomeEmail.js";
import Bookings from "../models/BookingModel.js";
//signup user
const bookUser=async(req,res)=>{
  console.log(req.body);
   try {
    //extracting name email and phone
    const { name, email, phone,businessType,packageInterested,businessGoal } = req.body;

    const bookingExists = await Bookings.findOne({ email });
    if (bookingExists) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }
    const verificationCode=Math.floor(Math.random()*1000)+999;
    const booking = new Bookings({
      name,
      email,
      phone,
      businessType,
      packageInterested,
      businessGoal,
      verificationCode
    })
    const response=await booking.save();
    verifyEmail(booking.email,booking.verificationCode);
    console.log(response);
    if (response) {
      return res.status(201).json({
      success: true,
      message: "Booking requested successfully",
      data: booking,
    });
    }
   
  } catch (error) {
    console.log('error in registerion from the backend',error);
    const err=new customError("Error in requesting the booking call",401);
    next(err);
  }

}
const verifyNumber=async(req,res)=>{
  console.log(req.body);
  
    try {
        const {code}=req.body 
        console.log(code);
        
        const booking= await Bookings.findOne({
            verificationCode:code,
            // verficationTokenExpiresAt:{$gt:Date.now()}
        })
        console.log(booking);
        
        if (!booking) {
            return res.status(400).json({success:false,message:"Inavlid or Expired Code"})   
         }
          
     booking.isVerified=true;
     booking.verificationCode=undefined;
    //  user.verficationTokenExpiresAt=undefined;
     await booking.save()
     await sendWelcomeEmail(booking.email,booking.name)
     return res.status(200).json({success:true,message:"Email Verifed Successfully"})
           
    } catch (error) {
        console.log(error);
        const err=new customError("Internal server error",500);
        next(err);
        // return res.status(400).json({success:false,message:"internal server error"})
    }
}
export {bookUser,verifyNumber}