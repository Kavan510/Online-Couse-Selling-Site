const {Router} = require("express")

const  userRouter = Router();


userRouter.post('/signup',(req,res)=>{

    console.log("signed up successfull !!")
    res.status(200).json({
        msg:"User Registered Successfull!"
    })
    })
    
    
    userRouter.post('/signin',(req,res)=>{
        
    })
    
    
    userRouter.get('/purchased',(req,res)=>{
        
    })
    

    module.exports = {
        userRouter:userRouter
    }