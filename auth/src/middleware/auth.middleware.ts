import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const JWT_SECRET = "secrettoken";

export interface DecodedJwt {
  id: string;
  email: string;
  iat: number;
  exp: number;
  user: any;
}

export const decodeTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      if (!decoded) {
        return res.status(401).json({ message: "Invalid token1" });
      }
      res.locals.user = decoded;
      next();
    } catch (err) {
      console.log(err);
      return res.status(401).json({ message: "Invalid token2" });
    }
  } else {
    return res.status(401).json({ message: "Token not found" });
  }
};
