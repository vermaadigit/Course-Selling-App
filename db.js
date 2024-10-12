const mongoose = require('mongoose')


const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const userSchema = new Schema({
    email : {type : String, unique : true},
    password : String,
    firstName : String,
    lastName : String
})

const adminSchema = new Schema({
    email : {type : String, unique : true},
    password : String,
    firstName : String,
    lastName : String
})


const courseSchema = new Schema({
    title : String,
    description : String,
    price : Number,
    imageURL : String,
    creatorId : ObjectId
})

const purchaseSchema = new Schema({
    courseId : ObjectId,
    userId : ObjectId
})

const userModel = mongoose.model('user', userSchema)
const courseModel = mongoose.model('course', adminSchema)
const adminModel = mongoose.model('admin', courseSchema)
const purchaseModel = mongoose.model('purchase', purchaseSchema)

module.exports = {
    userModel,
    courseModel,
    adminModel,
    purchaseModel
}