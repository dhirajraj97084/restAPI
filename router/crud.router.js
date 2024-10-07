import express from "express";
import { User } from "../models/user.models.js";

const crudRouter=express.Router();

crudRouter.get("/getuser",(req,res)=>{
    res.status(200).json({msg:"get all user"});
})
crudRouter.post("/createuser",async(req,res)=>{
    const {username,email,password}=req.body;
    try {

       if (!username || !email || !password) {
        res.status(400).json({msg:"fill all the field"});
       } 

       if(!email.includes("@")){
        res.status(400).json({msg:"please enter the valid email"});
       }

       const user=await User.findOne({email});

       if (user) {
        res.status(400).json({msg:"user allready present"});
       }

       const newuser= User({
        username,
        email,
        password
       })

       newuser.save();
       res.status(400).json({msg:"data created successfully",}) 
       console.log(newuser._id) ;  
    } catch (error) {
       res.status(500).json({error:error.message});

    }
   
})
crudRouter.get("/updateuser",(req,res)=>{
    res.status(200).json({msg:"update all user"});
})
crudRouter.get("/deleteuser",(req,res)=>{
    res.status(200).json({msg:"delete all user"});
})

export default crudRouter;