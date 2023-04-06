import { boolean, number, object, string } from "zod";

export const postProfileDataSchema = object({
  body: object({
    image: string({ required_error: "Profile Image is Required" }),
    firstName: string({ required_error: "First Name is Required" }),
    lastName: string({ required_error: "Last Name is required" }),
    street: string({ required_error: "Street is Required" }),
    city: string({ required_error: "City is Required" }),
    state: string({ required_error: "State is Required" }),
    zip: number({ required_error: "Zip is Required" }),
    phone: number({ required_error: "Phone Number is Required" })
      .min(10, "Minimun 10 number required")
      .max(13),
    email: string({ required_error: "Email is Required" }).email(),
    facebook: string({ required_error: "Facebook is Required" }),
    twitter: string({ required_error: "Twitter is Required" }),
    instagram: string({ required_error: "Instagram is Required" }),
    youtube: string({ required_error: "Youtube is Required" }),
    tiktok: string({ required_error: "Tiktok is Required" }),
    whatsapp: string({ required_error: "Whatsapp is Required" }),
    twitch: string({ required_error: "Twitch is Required" }),
    youtubeVideoUrl: string({
      required_error: "Youtube Video Url is Required",
    }),
    personalWebsite: string({ required_error: "Personal Website is Required" }),
    profileUrl: string({ required_error: "Profile Url is Required" }),
    miniBio: string({ required_error: "Mini Bio is Required" }),
    //isActive: boolean({ required_error: "IconDetail4 is Required" }),
  }),
});
