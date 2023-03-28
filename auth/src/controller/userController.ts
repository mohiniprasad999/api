// import { Request, Response } from "express";
import userModel from "../model/userModel";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { resolve } from "path";
import { Request, Response, NextFunction, response } from "express";

const JWT_SECRET = 'secrettoken';
let token: string;

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user)
      return res
        .status(403)
        .json({ success: false, message: "User already registered"});

    const hashPass = await bcrypt.hash(password, 8);

    const newUser = await userModel.create({
      name,
      email,
      password: hashPass,
    });
    const userId = { userId: newUser.id };
   
    res.status(201).json({success: true, message: "success"});    
  } catch (error) {
    res
      .status(500)
      .json({ success: false});
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "Forbidden" });
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res
        .status(401)
        .json({ success: false, message: "invalid Password" });

    const userData = { name: user.name, email: user.email, id: user.id };
    const token = jwt.sign(userData, JWT_SECRET);
    res.status(200).json({
      success: true,
      message: "Successfully Logged In",
      token,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "error"});
  }
};

// export const decode = async (req: Request, res: Response) => {

//   const token = req.jwtData?.token;

//   if (!token) {
//     return res.status(401).send('Unauthorized');
//   }

//   res.send(`Hello, user ${token}!`);
// };
// export const login = async (req: Request, res: Response) => {
//   const { email, password } = req.body;

// try {
//   userId:"todo";
//   const user = await user.findById(user).select("-password");
// } catch (error) {
//   console.log("error");
//   response.status(500).send("INTERNAL SERVER ERROR");
// }
//}

