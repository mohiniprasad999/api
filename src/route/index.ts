import express from "express";
import aboutRouter from "./about.route"; //exported default
import profileRouter from "./profile.route";

const router = express.Router();

router.use("/about", aboutRouter);
router.use("/profile", profileRouter);

export default router;
