require('dotenv').config();
const MONGOURL=process.env.MONGOURL;

const mongoose=require('mongoose');
mongoose.connect(MONGOURL)
const member = require('../mongoose.models/member');


const createAccount=async(req,res)=>{
try {
    console.log(req.body);
    
    let {name,email,password,committe,gender,phoneNumber,role}=req.body;
    let oldEmail=await member.find({email})
    if(oldEmail.length){
        console.log("old member",oldEmail);
       return res.status(400).send({message:"This email is already in use. Please log in or use a different email." });
    }

    const newMember=new member({
        name,
        email,
        password,
        committe,
        gender,
        phoneNumber,
        role
    })

    await newMember.save();
    res.status(200).send({"message":"Your account has been successfully created."})
} catch (error) {
    // console.log(error);
    res.status(400).send({"message":error.message});
}

}


module.exports={
    createAccount,
}