import { Request, Response } from "express";
import aboutDataModel from "../model/about.model.data";

export const getAboutData = async (req: Request, res: Response) => {
  try {
    const data = await aboutDataModel.find();
    if (data.length == 0)
      return res
        .status(404)
        .json({ success: false, message: "Data not found" });
    res.status(200).json({ success: true, message: "Data fetched", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

export const postAboutData = async (req: Request, res: Response) => {
  try {
    const newData = await aboutDataModel.create(req.body);
    res.status(201).json({ success: true, message: "Data saved", newData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

export const updateAboutData = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await aboutDataModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!data)
      return res
        .status(404)
        .json({ success: false, message: "Data not found" });
    res.status(200).json({ success: true, message: "Data updated", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

export const deleteAboutData = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await aboutDataModel.findByIdAndDelete(id);
    if (!data)
      return res
        .status(404)
        .json({ success: false, message: "Data not found" });
    res.status(200).json({ success: true, message: "Data deleted", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};
