import mongoose from "mongoose";

export const connectionDB = async (url: string) => {
  try {
    await mongoose.connect(url);
    console.log("databse connected");
  } catch {
    console.log("Database not connected");
  }
};
