 import express from "express"
 import dotenv from "dotenv"
 import mongoose from "mongoose"
 import authRoute from "./routes/auth.js"
 import hotelsRoute from "./routes/hotels.js"
 import roomsRoute from "./routes/rooms.js"
 import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser"
import cors from "cors"


 const app = express()
 dotenv.config()

 const connect = async () => {
     try{
         await mongoose.connect(process.env.DB);
         console.log("mongodb connected");
     } catch(error){
        console.log( error);
     }
 }

 mongoose.connection.on("disconnected", ()=>{
     console.log("MongoDB disconnected");
 })


 //midelwares
 app.use(express.json());
 app.use(cookieParser());
 app.use(cors());

 app.use("/api/auth", authRoute);
 app.use("/api/hotels", hotelsRoute);
 app.use("/api/rooms", roomsRoute);
 app.use("/api/users", usersRoute);

 
 app.listen(5000,()=>{
     connect(); 
     console.log("Connected to backend server");
 })