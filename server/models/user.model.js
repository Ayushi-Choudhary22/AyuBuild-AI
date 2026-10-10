import mongoose from "mongoose"; //mongoose variable mai mongoose package dal dia
//Create a format for every user
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    avatar:{
        type:String
    },
    credits:{
        type:Number,
        default:100,
        min:0
    },
    plan:{
        type:String,
        enum:["free","pro","enterprise"],
        default:"free"
    }
},{timestamps:true})
//Create a model called User and Use this userSchema 
// mode is used to store and retrieve data from MongoDB.
const User=mongoose.model("User",userSchema)
export default User