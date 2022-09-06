import User from "../models/User.js"
import bcrypt from "bcrypt"
import JWT from "jsonwebtoken"
import cookieParser from "cookie-parser"

export const registerUser = async(req,res) => {
    try{

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        })

        await newUser.save();

        res.status(200).json("User created succefully");
    }catch(error){
        res.status(500).json(error);
    }
}


export const loginUser = async(req,res) => {
    try{
        const user = await User.findOne({username:req.body.username});
       
        if(!user){
            return res.status(404).json("User is not found");
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect){
            return res.status(400).json("username or password is incorrect");
        }

        const token = JWT.sign({id:user._id,isAdmin:user.isAdmin}, process.env.JWT_SECRET);

        const {password, isAdmin, ...otherDetails} = user._doc ;

        res.cookie("access_token",token,{httpOnly:true}).status(200).json({...otherDetails});
    
    }catch(error){
        res.status(500).json(error);
    }
}