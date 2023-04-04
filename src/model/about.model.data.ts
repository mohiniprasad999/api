import { model, Schema, Document } from "mongoose";

export interface IAboutModelData extends Document {
  video: string;
  details: string;
  icon1: string;
  icon2: string;
  icon3: string;
  icon4: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}

const aboutData = new Schema({
  video: { type: String, required: true },
  details: { type: String, required: true },
  icon1: { type: String, required: true },
  icon2: { type: String, required: true },
  icon3: { type: String, required: true },
  icon4: { type: String, required: true },
  text1: { type: String, required: true },
  text2: { type: String, required: true },
  text3: { type: String, required: true },
  text4: { type: String, required: true },
});

export default model<IAboutModelData>("aboutData", aboutData);
