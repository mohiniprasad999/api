import express from "express";
//import profileDataModel from "../model/profile.model";
import profileModel from "../model/profile.model";
import { Request, Response, NextFunction } from "express";
import {
  deleteProfileData,
  getProfileData,
  getProfileDataById,
  postProfileData,
  updateProfileData,
} from "../controller/profile.controller";

const router = express.Router();

router.get("/", getProfileData);

router.get("/:id", getProfileDataById);

router.post("/", postProfileData);

router.patch("/:id", updateProfileData);

router.delete("/:id", deleteProfileData);

export default router;
