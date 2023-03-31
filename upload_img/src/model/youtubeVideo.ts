import { model, Schema, Document } from "mongoose";

export interface IYoutubevideo extends Document {
  video: string;
  details: string;
  Icon: string;
  text: string;
}

const youtubevideo = new Schema({
  video: { type: String, required: true },
  details: { type: String, required: true },
  icon: { type: String, required: true },
  text: { type: String, required: true },
});

export default model<IYoutubevideo>("youtubevideo", youtubevideo);
