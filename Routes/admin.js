const { Router } = require("express")
const adminRouter = Router()
const { adminModel, courseModel } = require("../db")
const jwt = require("jsonwebtoken")
const { JWT_ADMIN_PASSWORD } = require("../config")
const { adminMiddleware } = require("../middleware/admin")

adminRouter.post('/signup', async function(req, res) {
    const { email, password, firstName, lastName } = req.body // Todo : Adding Zod validation
    // Todo : hash the password so plaintext pw is not stored in DB

    // Todo :  Put it in Try catch Block
    await adminModel.create({
        email : email,
        password : password,
        firstName : firstName,
        lastName : lastName
    })

    res.json({
        message : 'Signup Succeeded'
    })
})

adminRouter.post('/signin', async function(req, res) {
    const { email, password } = req.body

    //Todo : ideally password should be hashed, and hence you can't compare the user provided password and the database password 
    const admin = await adminModel.findOne({
        email : email,
        password : password
    })

    if (admin) {
        const token = jwt.sign({
            id : admin._id
        }, JWT_ADMIN_PASSWORD)

        res.json ({
            token : token
        })
    } else {
        res.status(403).json({
            message : 'Incorrect Credentials'
        })
    }
})

adminRouter.post('/course', adminMiddleware, async function(req, res) {
    const adminId = req.userId

    const { title, description, imageURL, price } = req.body

    const course = await courseModel.create({
        title,
        description,
        imageURL,
        price,
        creatorId : adminId
    })
     
    res.json({
        message : 'Course Created',
        courseId : course._id
    })
})

adminRouter.put('/course', adminMiddleware, async function(req, res) {
    const adminId = req.userId

    const { title, description, imageURL, price, courseId } = req.body

    const course = await courseModel.updateOne({
        _id : courseId,
        creatorId : adminId
    },{
        title,
        description,
        imageURL,
        price
    })
     
    res.json({
        message : 'Course Updated',
        courseId : course._id
    })
})

adminRouter.get('/course/bulk', adminMiddleware, async function(req, res) {
    const adminId = req.userId

    const courses = await courseModel.find({
        creatorId : adminId
    });
     
    res.json({
        message : 'Course Updated',
        courses
    })
})
 
module.exports = {
    adminRouter : adminRouter
}