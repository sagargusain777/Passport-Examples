import express from "express";
import passport from "../utils/localstrategy.js";
import signup from '../controllers/signup.controllers.js'
import person from '../controllers/person.controllers.js'
const router = express.Router();
const authMiddleware = passport.authenticate('local', { session: false });
router.post('/signup',signup)
router.get('/person',authMiddleware,person)
export default router;