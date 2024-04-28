const User = require('../models/user');
const { hashPassword, comparePassword } = require("../helpers/helpers");
const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        const exsistingUsername = await User.findOne({username});
        if(exsistingUsername){
            return res.status(400).json({error:"Username Already Taken"})
        }
        if (existingUser) {
            return res.status(400).json({ error: "User already registered. Please login." });
        }

        const hashedPassword = await hashPassword(password);
        const newUser = await User.create({ username, email, password: hashedPassword });

        return res.json(newUser);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

const login = async(req,res)=>{
    try{
        const {username,password} = req.body;
        const user=await User.find({username});
        
        const comparedPassword = await comparePassword(password,user[0].password);
        console.log(comparedPassword)
        if(!user){
            return res.status(400).json({error:'User not found'});
        }
        if(!comparedPassword){
            return res.status(400).json({error:"Check your password and try again"})
        }
        return res.json(user);
    }catch(error){
        console.log(error);
    }
};
module.exports = { signup, login };