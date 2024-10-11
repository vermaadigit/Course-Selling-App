const mongoose = require('mongoose')
const user = require('./Routes/user')
const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

const User = new Schema({
    _id : ObjectId,
    email : String,
    password : String,
    firstName : String,
    lastName : String
})

const Course = new Schema({
    title : String,
    description : String,
    price : Number,
    imageURL : String,
    creatorId : ObjectId
})

const Admin = new Schema({
    _id : ObjectId,
    email : String,
    password : String,
    firstName : String,
    lastName : String
})

const PurchasedCourse = new Schema({
    _id : ObjectId,
    courseId : ObjectId,
    userId : ObjectId
})

const UserModel = mongoose.model('users', User)
const CourseModel = mongoose.model('courses', Course)
const AdminModel = mongoose.model('admin', Admin)
const PurchasedCourseModel = mongoose.model('purchasedcourse', PurchasedCourse)

module.exports = {
    UserModel : UserModel,
    CourseModel : CourseModel,
    AdminModel : AdminModel,
    PurchasedCourseModel : PurchasedCourseModel
}