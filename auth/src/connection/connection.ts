// import express, { Application, NextFunction, Request, Response } from "express";
// import mongoose from 'mongoose';

// const HOST_NAME ="localhost";
// const url = "mongodb://localhost:27017/jwtAuth";
// const app: Application = express();

// export const connectDb = async(url: string)=>{
//     try {
//        await mongoose.connect(url);
//        console.log("databse connected");
//     } catch {
//        console.log("Database not connected");
//     }
//   }

// app.listen(8000, HOST_NAME ? HOST_NAME : "localhost", () => {
//   console.log(`server is runnign at :http://${HOST_NAME}:8000`);
//   connectDb(url);
// });