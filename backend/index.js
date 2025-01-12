require('dotenv').config()
const express = require("express")
const mongoose = require('mongoose')
const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin")
const PORT = 3001;
const app = express();
app.use(express.json())




app.use('/api/v1/user' ,userRouter)
app.use('/api/v1/course',courseRouter)
app.use('/api/v1/admin',adminRouter);

 




async function  main() {
await mongoose.connect(process.env.MongoUrl)
.then(() => {
    console.log("DB connected")
}).catch((err) => {
    console.log("Error is occuring :"+err)
});
app.listen(PORT,()=>{
    console.log("Backend listening on  port "+ PORT) 
})
}

main();