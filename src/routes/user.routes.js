import express from "express";
import passport from "../utils/localstrategy.js";
import signup from '../controllers/signup.controllers.js'
import person from '../controllers/person.controllers.js'
const router = express.Router();

router.post('/signup',signup)
router.get('/person',passport.authenticate('local', { session: false }),person)
export default router;