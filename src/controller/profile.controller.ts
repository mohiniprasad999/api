import { Request, Response } from "express";
import profileDataModel from "../model/profile.model";

export const getProfileData = async (req: Request, res: Response) => {
  try {
    const data = await profileDataModel.find();
    if (data.length == 0)
      return res
        .status(404)
        .json({ success: false, message: "Data not found" });
    res.status(200).json({ success: true, message: "Data found", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "error" });
  }
};

//get one data by id

export const getProfileDataById = async (req: Request, res: Response) => {
  const id = req.params.id;
  console.log(id);
  try {
    const data = await profileDataModel.findById(id);
    res.status(200).json({ Success: true, message: "Data fetched", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "error" });
  }
};

export const postProfileData = async (req: Request, res: Response) => {
  try {
    const newData = await profileDataModel.create(req.body);
    res.status(201).json({ success: true, message: "Data Saved", newData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "error" });
  }
};

export const updateProfileData = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await profileDataModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!data)
      return res
        .status(404)
        .json({ success: false, message: "Data not found" });
    res.status(200).json({ success: true, message: "Data updated", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "error" });
  }
};

export const deleteProfileData = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await profileDataModel.findByIdAndUpdate(id, {
      isActive: false,
    });
    if (!data)
      return res
        .status(404)
        .json({ success: false, message: "data not found" });
    res
      .status(200)
      .json({ success: true, message: "Data Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "error" });
  }
};
