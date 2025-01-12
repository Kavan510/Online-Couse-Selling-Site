const mongoose = require('mongoose');
const ObjectId=mongoose.ObjectId;

const Schema = mongoose.Schema;

const userSchema = new Schema({
   
    email:String,
    password :String,
    firstName:String,
    lastName:String,

});



const adminScheme = new Schema({
    email:String,
    password :String,
    firstName:String,
    lastName:String,
});

const courseSchema = new Schema({
   title:String,
   description:String,
   price:Number,
   imageUrl:String,
   creatorId: [{ObjectId}]
});


//add refereces here 
const purchaseSchema = new Schema({
   userId: String,
   courseId:String
});


const userModel = mongoose.model("user",userSchema)
const adminModel = mongoose.model("admin",adminScheme)
const courseModel = mongoose.model("course",courseSchema)
const purchaseModel= mongoose.model("purchase",purchaseSchema)

module.exports = {
    userModel:userModel,
    adminModel :adminModel,
    courseModel :courseModel,
    purchaseModel:purchaseModel
}