import dotenv from "dotenv"
import connectDB from "./db/index.js"
import express from "express"
dotenv.config({path:"./env"})
const app= express()

connectDB().then(()=>{
    app.listen(process.env.PORT|| 8000, ()=>console.log(`server running at port ${process.env.PORT}`))
}).catch(error=>console.log("mongodb conection failed",error))