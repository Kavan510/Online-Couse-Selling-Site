const Router = require("express");
const { purchaseModel, courseModel } = require("../db");
const userMiddleware = require("../middlewares/user")

const courseRouter = Router();



courseRouter.post('/purchase',userMiddleware , async (req,res)=>{
  
    const {userId, courseId} =req.body;
    await purchaseModel.create({
        userId,
        courseId
    })

        res.json({
            msg:"You have successfully bought course"
        })
})


courseRouter.get('/preview',async (req,res)=>{
    
    const courses = courseModel.find({});


    res.json({
        courses
    })
})




module.exports = {
    courseRouter:courseRouter
}