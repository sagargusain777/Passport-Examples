import {User} from "../models/user.models.js";
const signup = async (req, res) => {
  const { fullName, username, password, email, role, gender } = req.body;

  try {
    const user = await User.findOne({ username: username });
    if (user) {
      res
        .status(400)
        .json({ status: "failed", message: "User Already Exists" });
    }
    const newUser = await User.create({
      fullName,
      username,
      password,
      email,
      role,
      gender,
    });
    if (newUser) {
      await newUser.save();
      console.log(`User Created successfully: ${newUser}`);
      res.status(201).json({ status: "success", data: newUser });
    } else {
      console.log(`Error Creating new User`);
      res
        .status(500)
        .json({ status: "failed", message: "Internal Server Error" });
    }
  } catch (error) {
    console.log(`Error Signing up User: ${error.message}`);
    res
      .status(500)
      .json({ status: "failed", message: "Internal Server Error" });
  }
};

export default signup;