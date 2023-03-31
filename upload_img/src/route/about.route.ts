import express from "express";
import { getAboutData, postAboutData } from "../controller/about.controller";
const router = express.Router();

router.get("/getdata", getAboutData);

router.post("/postdata", postAboutData);

export default router;
