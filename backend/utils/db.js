import mongoose from "mongoose";
import customError from "./CustomError.js";
const Mongo_Url=process.env.MONGO_URL;
console.log('monog-url',Mongo_Url);

let isConnected=false;
//connecting database
const connectDB=async()=>{
    try {
    await mongoose.connect(Mongo_Url);
    isConnected=true;
    console.log('database connected successfully');
    } catch (error) {
        console.log('error connecting database',error);
    }
  
}
//discoonecting database
const disconnectDB=async()=>{
    await mongoose.connection.close();
    console.log('connection closed successfully');
    
}
export {connectDB,disconnectDB};