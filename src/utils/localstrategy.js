import passport from 'passport'
import {Strategy as localStrategy} from 'passport-local'

passport.use(new localStrategy(
    async(username,password,done)=>{
        

    }
))