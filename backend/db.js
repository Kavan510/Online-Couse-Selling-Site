const mongoose = require('mongoose');
const { object, number } = require('zod');
const admin = require('./routes/admin');
const course = require('./routes/course');
const ObjectId=mongoose.ObjectId;

const Schema = mongoose.Schema;

const userSchema = new Schema({
   
    email:String,
    password :String,
    firstName:String,
    LastName:String,

});



const adminScheme = new Schema({
    email:String,
    password :String,
    firstName:String,
    LastName:String,
});

const courseSchema = new Schema({
   title:String,
   description:String,
   price:Number,
   imageUrl:String,
   creatorId: [{ObjectId, ref:'admin' }]
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