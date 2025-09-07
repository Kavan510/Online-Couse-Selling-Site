const mongoose = require('mongoose');
const { string, object } = require('zod');
const ObjectId = mongoose.ObjectId;

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
});

const adminScheme = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: { type: ObjectId, ref: 'admin' }, // Added reference to "admin"
});


const purchaseSchema = new Schema({
    userId: { type: ObjectId, ref: 'user' }, // Added reference to "user"
    courseId: { type: ObjectId, ref: 'course' }, // Added reference to "course"
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminScheme);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel: userModel,
    adminModel: adminModel,
    courseModel: courseModel,
    purchaseModel: purchaseModel,
};
