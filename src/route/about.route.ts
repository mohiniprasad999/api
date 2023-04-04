import express from "express";
import {
  deleteAboutData,
  getAboutData,
  postAboutData,
  updateAboutData,
} from "../controller/about.controller";
import validate from "../middleware/validate";
import { postAboutDataSchema } from "../validationSchema/post.about.validation";
const router = express.Router();

router.get("/aboutdata", getAboutData);

router.post("/aboutdata", validate(postAboutDataSchema), postAboutData);

router.patch("/aboutdata/:id", updateAboutData);

router.delete("/aboutdata/:id", deleteAboutData);

export default router;
