import express from "express";
import { login, register } from "../controller/user.controller";
import { decodeTokenMiddleware } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/decode", decodeTokenMiddleware, (req, res) => {
  const user = res.locals.user;
  res.status(200).json({ UserDetails: user });
});

export default router;