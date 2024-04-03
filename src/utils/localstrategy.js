import passport from "passport";
import { Strategy as localStrategy } from "passport-local";
import {User} from "../models/user.models.js";
passport.use(
  new localStrategy(async (userName, password, done) => {
    try {
      const user = await User.findOne({ username: userName });
      const matchPassword = user.password === password;
      
      if (!user || !matchPassword) {
        return done(null, false, { message: "Invalid Username or Password" });
      }
      return done(null, user);
    } catch (error) {
      return done(error, false, { message: "Error Signing up User" });
    }
  })
);

export default passport;