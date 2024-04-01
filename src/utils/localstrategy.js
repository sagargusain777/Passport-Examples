import passport from 'passport'
import {Strategy as localStrategy} from 'passport-local'
import User from '../models/user.models.js'
passport.use(new localStrategy(
    async(userName,password,done)=>{
        try {
            const user = await User.findOne({username:userName})
            if(!user){
                return done(null,false,{message:'User not found'})
            }
            if(!user.matchPassword(password)){
                return done(null,false,{message:'Invalid Password'})
            }
            return done(null,user)
        } catch (error) {
            console.log(`Error Signing up User: ${error.message}`);
            
        }

        


    }
))