import express from 'express';
import { login, register} from '../controller/userController';
import { decodeTokenMiddleware } from '../middleware/decode';
import { Request, Response, NextFunction, response, Router } from "express";


const router =express.Router();

router.post('/register',register);
router.post ('/login',login);
// router.get('/decode', (req, res) => {
//     res.json({"hey":"you are herer"})
// });

router.get('/decode', decodeTokenMiddleware, (req, res) => {
  const user =  res.locals.user
    res.status(200).json({"hey": user})
});

export default router;