import { object, string } from "zod";

export const postAboutDataSchema = object({
  body: object({
    video: string({ required_error: "Video is Required" }),
    details: string({ required_error: "Details is Required" }),
    icon1: string({ required_error: "Icon1 is Required" }),
    icon2: string({ required_error: "Icon2 is Required" }),
    icon3: string({ required_error: "Icon3 is Required" }),
    icon4: string({ required_error: "Icon4 is Required" }),
    text1: string({ required_error: "Text1 is Required" }),
    text2: string({ required_error: "Text2 is Required" }),
    text3: string({ required_error: "Text3 is Required" }),
    text4: string({ required_error: "Text4 is Required" }),
  }),
});
