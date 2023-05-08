import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";



import mentorRoutes from "./routes/mentor.js"
import studentRoutes from "./routes/student.js"

const app = express();
dotenv.config();


app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose
.connect(process.env.MONGODB_URL)
.then(()=> console.log('Connected to StudentMentorApi MongoDB '))
.catch((err)=>console.log(err))


app.use("/student",studentRoutes);
app.use("/mentor",mentorRoutes);

app.listen(6500,()=>{
    console.log('server listening on port 6500')
})