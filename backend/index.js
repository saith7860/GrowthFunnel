import app from "./app.js";
import { connectDB } from "./utils/db.js";
// const PORT=process.env.PORT||3000;
let isConnected=false;
if (process.env.NODE_ENV!="test") {
    connectDB();
    isConnected=true

}
app.use((req,res,next)=>{
    if (!connectDB) {
        connectDB()
    }
    next();
})