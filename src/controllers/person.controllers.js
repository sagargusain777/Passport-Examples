import { User } from "../models/user.models.js"
const person = async(req,res)=>{

 const allUsers = await User.find({}).lean();

 res.status(200).send(allUsers)

}
export default person;