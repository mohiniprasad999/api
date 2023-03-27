import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./routes/routes";
import mongoose from "mongoose";
// import connectDb from "./connection/connection";

const HOST ="localhost";
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/api", router);

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: "Home route" });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ success: false, messase: "Route not found" });
});
export const connection = async(url: string)=>{
  try {
     await mongoose.connect(url);
     console.log("Database Connected");
  } catch {
     console.log("Database Not Connected");
  }
}

const url = "mongodb://localhost:27017/jwtAuth";

app.listen(8000, HOST ? HOST : "localhost", () => {
  console.log(`Server  runnign at :http://${HOST}:8000`);
  connection(url);
});