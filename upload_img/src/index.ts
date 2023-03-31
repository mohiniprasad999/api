import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./route/about.route";
import { connectionDB } from "./utils/connection";

dotenv.config();
const url = process.env.MONGODB_URL!;

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", router);

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: "Home" });
});

app.listen(8004, () => {
  console.log(`Server  runnign at :http://localhost:8004`);
  connectionDB(url);
});
