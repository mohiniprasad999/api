import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./routes/routes";
import mongoose from "mongoose";

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", router);

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: "Home route" });
});

export const connection = async (url: string) => {
  try {
    await mongoose.connect(url);
    console.log("Database Connected");
  } catch {
    console.log("Database Not Connected");
  }
};

const url = "mongodb://localhost:27017/jwtAuth";

app.listen(8004, () => {
  console.log(`Server  runnign at :http://localhost:8004`);
  connection(url);
});
