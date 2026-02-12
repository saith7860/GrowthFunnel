import Leads from "../models/leadModel.js";
import customError from "../utils/CustomError.js";
import verifyEmail from "../config/sendEmail.js";
import sendWelcomeEmail from "../config/welcomeEmail.js";
//signup user
const postUser=async(req,res,next)=>{
  console.log(req.body);
   try {
    //extracting name email and phone
    const { name, email, phone } = req.body;

    const leadExists = await Leads.findOne({ email });
    if (leadExists) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }
    const verificationCode=Math.floor(Math.random()*1000)+999;
    const lead = new Leads({
      name,
      email,
      phone,
      verificationCode
    })
    const response=await lead.save();
    verifyEmail(lead.email,lead.verificationCode);
    console.log(response);
    if (response) {
      return res.status(201).json({
      success: true,
      message: "Signup successful",
      data: lead,
    });
    }
   
  } catch (error) {
    console.log('error in registerion from the backend',error);
    return res.json({success:false,message:"error in registeirng user"})
    // const err=new customError("Error in registering the user",401);
    // next(err);
  }

}
const emailVerification=async(req,res,next)=>{
  console.log(req.body);
  
    try {
        const {code}=req.body 
        const lead= await Leads.findOne({
            verificationCode:code,
            // verficationTokenExpiresAt:{$gt:Date.now()}
        })
        if (!lead) {
            return res.status(400).json({success:false,message:"Inavlid or Expired Code"})   
            }
          
     lead.isVerified=true;
     lead.verificationCode=undefined;
    //  user.verficationTokenExpiresAt=undefined;
     await lead.save()
     await sendWelcomeEmail(lead.email,lead.name)
     return res.status(200).json({success:true,message:"Email Verifed Successfully"})
           
    } catch (error) {
        console.log(error);
       
        return res.status(400).json({success:false,message:"internal server error"})
    }
}
export {postUser,emailVerification}