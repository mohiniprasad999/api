import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./routes/routes";
import mongoose from "mongoose";
//import { decodeJWT } from './middleware/decode';

// import connectDb from "./connection/connection";

const HOST ="localhost";
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//app.use(decodeJWT);

app.use("/api", router);

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: "Home route" });
});

// app.use("/", async(req: Request, res: Response, next: NextFunction) => {
//   res.status(404).json({ success: false, messase: "Route not found" });
// });
export const connection = async(url: string)=>{
  try {
     await mongoose.connect(url);
     console.log("Database Connected");
  } catch {
     console.log("Database Not Connected");
  }
}

const url = "mongodb://localhost:27017/jwtAuth";

app.listen(8003,  () => {
  console.log(`Server  runnign at :http://localhost:8003`);
  connection(url);
});






