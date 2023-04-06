import { model, Schema, Document } from "mongoose";

export interface IBaseProfile {
  image: string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  tiktok: string;
  whatsapp: string;
  twitch: string;
  youtubeVideoUrl: string;
  personalWebsite: string;
  profileUrl: string;
  miniBio: string;
  isActive: boolean;
}

export interface IProfileSchema extends IBaseProfile, Document {}

const profileData = new Schema<IProfileSchema>({
  image: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  facebook: { type: String, required: true },
  twitter: { type: String, required: true },
  instagram: { type: String, required: true },
  linkedin: { type: String, required: true },
  youtube: { type: String, required: true },
  tiktok: { type: String, required: true },
  whatsapp: { type: String, required: true },
  twitch: { type: String, required: true },
  youtubeVideoUrl: { type: String, required: true },
  personalWebsite: { type: String, required: true },
  profileUrl: { type: String, required: true },
  miniBio: { type: String, required: true },
  isActive: { type: Boolean, default: true },
});

export default model<IProfileSchema>("profileData", profileData);
