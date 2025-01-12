const Router = require('express');
const {adminModel,courseModel} = require("../db")
const {z} =require("zod")
const bcrypt =require("bcrypt")
const adminRouter = Router();
const jwt = require("jsonwebtoken")
const {testHash} =require("./bcrypt")
const adminMiddleware = require("../middlewares/admin")
const {JWT_ADMIN_SECRET} = require("../config");
const course = require('./course');

adminRouter.post('/signup', async (req, res) => {
    const requirebody = z.object({
        email: z.string(),
        password: z.string(),
        firstName: z.string(),
        lastName: z.string()
    });

   
    const parsedDataWithSecc = requirebody.safeParse(req.body);

    if (!parsedDataWithSecc.success) {
        res.json({
            msg: "Format is wrong",
            err: parsedDataWithSecc.error,
        });
        return;
    }

    const { email, password, firstName, lastName } = req.body;
    const check = adminModel.findOne({
        email
        })
        if(check) {
            res.json
            ({
                msg:"user already exist"
            })
        }
    try {
        const hashpasswd = await testHash({password}); 

        await adminModel.create({
            email,
            password: hashpasswd,
            firstName,
            lastName
        });

        res.json({
            message: "You are signed up",
        });
    } catch (e) {
        console.error("Error is occurring:", e.message || e);
        res.json({
            msg: "An error occurred",
        });
    }
});


adminRouter.post('/signin',async (req,res)=>{
    try {
        const { email, password } = req.body;

        const verify = await adminModel.findOne({ email }); //findOne returns true or undefined and find function return true or empty array(List)

        if (!verify) {
            res.status(404).json({ msg: "User not found" });
            return;
        }
console.log(verify)
        const isPasswordValid = await bcrypt.compare(password, verify.password);

        if (isPasswordValid) {
            const token = jwt.sign(
                { id: verify._id.toString() },
                JWT_ADMIN_SECRET
            );

            res.status(200).json({ token });
        } else {
            res.status(401).json({ msg: "Invalid credentials" });
        }
    } catch (e) {
        console.error("Error during sign in:" + e);
        res.status(500).json({ msg: "Error in sign in" });
    }
})


adminRouter.post('/course', adminMiddleware, async (req, res) => {
    const adminId = req.userId; // This comes from the middleware
    try {
        const { title, description, imageUrl, price } = req.body;

        // Create a new course with the adminId as creatorId
        const course = await courseModel.create({
            title,
            description,
            imageUrl,
            price,
            creatorId: adminId, // Use adminId here
        });

        // console.log("admin id: " + adminId);
        // console.log("creatorId is: " + adminId); // Fixed: Use adminId instead of undefined creatorId

        res.json({
            msg: "Course has been added by Admin",
            courseid: course._id, // Ensure course is defined to access _id
        });
    } catch (e) {
        console.log("Error is occurring:\n" + e);
        res.status(403).json({
            msg: "Error in admin course add",
        });
    }
});

adminRouter.put('/course',adminMiddleware , async (req,res)=>{
    const adminId = req .userId;
    const {title,description,imageUrl,price,courseId}  = req.body;
    const course =  await courseModel.updateOne({
        _id:courseId,
        creatorId:adminId
    },{
        title,
        description,
        imageUrl,
        price,
    })
res.json({
msg:"Course updated",
courseId:course._id,
})
    
})


adminRouter.get('/bulk',adminMiddleware, async (req,res)=>{
    
const adminId = req.userId;

const courses = await courseModel.find({
    creatorId : adminId
})
res.json({
    msg:"courses are shown here",
    courses
})

})



module.exports ={
    adminRouter:adminRouter
}