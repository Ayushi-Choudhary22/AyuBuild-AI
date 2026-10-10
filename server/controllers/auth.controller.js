import User from "../models/user.model.js"
import jwt from "jsonwebtoken"
export const googleAuth=async (req,res)=>{
try {
    const {name,email,avatar}=req.body
    if(!email){
        return res.status(400).json({
            message:"email is required"
        })
    }
    let user=await User.findOne({email})
    if(!user){
      user=await User.create({name,email,avatar})
    }
    //token taki cookies ko yad rahe bar bar login na karna pade
    //sign to generate token,user._id is given by mongodb by default 
    const token=await jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"})

    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite:"strict",
        maxAge:7*24*60*60*1000 //milisec
    })

    return res.status(200).json(user)
} catch (error) {
    
    return res.status(500).json({message:`google auth error ${error}`})
}
}

//cookie hata do
export const logOut=async (req,res)=>{
try {
     res.clearCookie("token",{
        httpOnly:true,
        secure:false, //deploy k bad true ho jata hai
        sameSite:"strict" //deploy none verna strict CSRF (Cross-Site Request Forgery) dusri sight cookie chori na kar le
    })

    return res.status(200).json({message :"log out successfully"})
} catch (error) {
    return res.status(500).json({message:`log out error ${error}`})
}
}