import {DB_NAME} from "../constant.js"
import mongoose from "mongoose"
const connectDB=async ()=>{
try{
const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
console.log(connectionInstance.connection.host,"MongoDB connection established")
}catch(error){
    console.log("error occured",error)
    process.exit(1)
}
}
export default connectDB